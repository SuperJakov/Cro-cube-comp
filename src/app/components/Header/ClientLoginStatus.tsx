"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import AccountCircleSvg from "../Svg/account_circle";
import { Button } from "@/components/ui/button";

function ClientLoginStatus() {
    const router = useRouter();
    const { username, logOut } = useAuth();
    const loggedIn = !!username;

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                {username ? (
                    <span className="text-foreground text-base font-medium">
                        {username}
                    </span>
                ) : (
                    <Button
                        asChild
                        variant="ghost"
                        className="h-auto p-0 text-foreground hover:bg-transparent hover:underline"
                    >
                        <Link href="/Login" className="text-base font-medium">
                            Prijava
                        </Link>
                    </Button>
                )}
            </div>
            <AccountCircleSvg
                className={cn(
                    "h-6 w-6 cursor-pointer transition-opacity hover:opacity-80",
                    loggedIn ? "opacity-100" : "opacity-60",
                )}
                width="24"
                height="24"
                fill="currentColor"
                onClick={() => {
                    if (loggedIn) {
                        logOut();
                        router.refresh();
                    }
                }}
                role="button"
                tabIndex={0}
                aria-label={loggedIn ? "Odjava" : "Prijava"}
            />
        </div>
    );
}

export default ClientLoginStatus;
