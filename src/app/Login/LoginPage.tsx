"use client";

import { url } from "@/globals";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useAuth } from "@/app/context/AuthContext";
import { Role } from "../utils/credentials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

async function handleSubmit(
    username: string,
    password: string,
    setMsg: Dispatch<SetStateAction<string>>,
    router: AppRouterInstance,
    login: (username: string, role: Role, userId: string) => void,
    setLoading: (isLoading: boolean) => void,
) {
    setLoading(true); // Set loading to true when the submission starts.

    try {
        const loginUrl = new URL(url);
        loginUrl.pathname = "/auth/login";

        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
            credentials: "include",
        });

        const data = await response.json();

        if (response.status === 429) {
            setMsg(
                "Prekoračen je broj pokušaja. Pokušajte ponovno za par minuta.",
            );
            return;
        }

        if (response.status === 401) {
            setMsg("Netočno korisničko ime ili lozinka.");
            return;
        }

        if (!response.ok) {
            setMsg(`Došlo je do greške: ${response.statusText}`);
            return;
        }

        if (!data.info) {
            setMsg("Neočekivani odgovor od servera.");
            return;
        }

        const { id, username: responseUsername, role } = data.info;

        // Use context's login function instead of localStorage
        login(responseUsername, role, id);

        // Redirect based on role
        router.push(role === "admin" ? "/Dashboard" : "/");
    } catch (error) {
        setMsg(
            `Greška prilikom prijave: ${
                error instanceof Error ? error.message : "Nepoznata greška"
            }`,
        );
        console.error(error);
    } finally {
        setLoading(false); // Ensure loading is set back to false.
    }
}

function ErrorMessage({ message }: { message: string }) {
    if (!message) return null;
    return (
        <div className="mt-2 text-center">
            <p className="text-destructive text-sm font-medium">{message}</p>
        </div>
    );
}

function LoginButton({
    loading,
    disabled,
}: {
    loading: boolean;
    disabled: boolean;
}) {
    return (
        <Button type="submit" className="w-full" disabled={disabled || loading}>
            {loading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Prijava u tijeku...
                </>
            ) : (
                "Prijava"
            )}
        </Button>
    );
}

function LoginForm() {
    const router = useRouter();
    const { login } = useAuth();
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const isFormValid = username.trim() && password.trim();
    const isButtonDisabled = !isFormValid || isLoading;

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");
        await handleSubmit(
            username,
            password,
            setMessage,
            router,
            login,
            setLoading,
        );
    };

    return (
        <Card className="w-full max-w-md mx-auto shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Prijava</CardTitle>
                <CardDescription className="text-center">
                    Unesite svoje korisničke podatke za prijavu
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <form
                    onSubmit={handleFormSubmit}
                    id="login-form"
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="username">Korisničko ime</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Unesite korisničko ime"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                            autoFocus
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Lozinka</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Unesite lozinku"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            disabled={isLoading}
                        />
                    </div>
                    <LoginButton
                        loading={isLoading}
                        disabled={isButtonDisabled}
                    />
                    <ErrorMessage message={message} />
                </form>
            </CardContent>
        </Card>
    );
}

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-background">
            <LoginForm />
        </main>
    );
}
