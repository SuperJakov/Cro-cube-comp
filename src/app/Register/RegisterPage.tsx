"use client";

import { useState } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../utils/users";
import { Loader } from "../components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
    username: z.string().min(1, "Korisničko ime je obavezno"),
    password: z.string().min(1, "Lozinka je obavezna"),
    group: z.enum(["1", "2"]).refine((val) => val !== undefined, {
        message: "Morate odabrati grupu",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterPage() {
    const [message, setMessage] = useState("");

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            group: "1",
        },
    });

    const { mutate, isLoading } = useMutation(registerUser, {
        onSuccess: (data, variables) => {
            if (data.success) {
                setMessage(`Korisnik ${variables.username} je registriran!`);
                form.reset();
            } else {
                setMessage(data.message || "Greška prilikom registracije");
            }
        },
        onError: () => {
            setMessage("Greška prilikom registracije");
        },
    });

    const onSubmit = (values: FormValues) => {
        mutate({
            username: values.username,
            password: values.password,
            group: parseInt(values.group),
        });
    };

    return (
        <main className="flex justify-center items-center h-[90vh] flex-col">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 w-full max-w-md p-5"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Korisničko ime</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Unesite korisničko ime"
                                        autoCapitalize="words"
                                        autoFocus
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Lozinka</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Unesite lozinku"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="group"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Grupa</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex space-x-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="1"
                                                id="group-1"
                                            />
                                            <Label htmlFor="group-1">
                                                Grupa 1
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value="2"
                                                id="group-2"
                                            />
                                            <Label htmlFor="group-2">
                                                Grupa 2
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader /> : "Registriraj"}
                    </Button>

                    {message && (
                        <div className="text-center">
                            <p className="text-sm font-medium text-foreground">
                                {message}
                            </p>
                        </div>
                    )}
                </form>
            </Form>
        </main>
    );
}
