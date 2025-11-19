"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import AccountCircleSvg from "../Svg/account_circle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ClientLoginStatus() {
    const router = useRouter();
    const { username, logOut } = useAuth();
    const loggedIn = !!username;

    const getInitials = (name: string) => {
        const parts = name.trim().split(" ");
        if (parts.length === 1) {
            return parts[0].substring(0, 2).toUpperCase();
        }
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                {username ? (
                    <span className="text-foreground text-base font-medium hidden sm:block">
                        {username}
                    </span>
                ) : (
                    <Button
                        asChild
                        variant="ghost"
                        className="h-auto p-0 text-foreground hover:bg-transparent hover:underline hidden sm:flex"
                    >
                        <Link href="/Login" className="text-base font-medium">
                            Prijava
                        </Link>
                    </Button>
                )}
            </div>
            <div
                onClick={() => {
                    if (loggedIn) {
                        logOut();
                        router.refresh();
                    }
                }}
                role="button"
                tabIndex={0}
                className={cn(
                    "cursor-pointer transition-opacity hover:opacity-80",
                    loggedIn ? "opacity-100" : "opacity-60",
                )}
                aria-label={loggedIn ? "Odjava" : "Prijava"}
            >
                {loggedIn && username ? (
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt={username} />
                        <AvatarFallback>{getInitials(username)}</AvatarFallback>
                    </Avatar>
                ) : (
                    <AccountCircleSvg
                        className="h-6 w-6"
                        width="24"
                        height="24"
                        fill="currentColor"
                    />
                )}
            </div>
        </div>
    );
}

export default ClientLoginStatus;
