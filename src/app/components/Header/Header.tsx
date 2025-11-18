import Image from "next/image";
import Link from "next/link";
import ClientLoginStatus from "./ClientLoginStatus";
import ClientTitle from "./Title";

export default function Header() {
    return (
        <header
            role="banner"
            className="fixed left-1/2 top-4 z-50 w-[min(92%,1200px)] -translate-x-1/2 p-3 bg-background/90 text-foreground border border-border/60 shadow-[0_35px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm grid grid-cols-2 sm:grid-cols-[2fr_1fr] rounded-[30px] sm:rounded-[30px]"
        >
            <div className="flex flex-wrap gap-2.5">
                <div className="flex justify-center items-center">
                    <Link href="/" aria-label="Idite na početnu stranicu">
                        <Image
                            alt="Logo of website"
                            className="w-5 h-5"
                            src="/favicon.ico"
                            width={20}
                            height={20}
                            priority={true}
                        />
                    </Link>
                </div>
                <div className="flex">
                    <ClientTitle />
                </div>
            </div>
            <div className="flex justify-end items-center">
                <ClientLoginStatus />
            </div>
        </header>
    );
}
