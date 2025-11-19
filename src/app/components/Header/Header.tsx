import Image from "next/image";
import Link from "next/link";
import ClientLoginStatus from "./ClientLoginStatus";
import ClientTitle from "./Title";

export default function Header() {
    return (
        <header
            role="banner"
            className="fixed left-1/2 top-4 z-50 w-[min(92%,1200px)] -translate-x-1/2 px-4 py-2 bg-background/90 text-foreground border border-border/60 shadow-[0_35px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm flex items-center justify-between rounded-full"
        >
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    aria-label="Idite na početnu stranicu"
                    className="flex items-center justify-center shrink-0"
                >
                    <Image
                        alt="Logo of website"
                        className="w-6 h-6"
                        src="/favicon.ico"
                        width={24}
                        height={24}
                        priority={true}
                    />
                </Link>
                <div>
                    <ClientTitle />
                </div>
            </div>

            {/* Mobile Title centered if needed, or just hidden on very small screens if it takes too much space, 
                but for now let's keep ClientTitle in the left group and maybe show a smaller version or just the logo on mobile if space is tight.
                Actually, the user said "looks terrible on smaller screens". 
                Let's make sure the title doesn't break things. 
                The previous code had ClientTitle in a separate div. 
            */}

            <div className="flex items-center gap-2">
                <ClientLoginStatus />
            </div>
        </header>
    );
}
