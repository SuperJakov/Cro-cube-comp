"use client";

import { usePathname } from "next/navigation";

const routeTitles: {
    [index: string]: string | undefined;
} = {
    "/": "Cro Cube Comp",
    "/Login": "Prijava",
    "/Register": "Registracija",
    "/Competitions": "Rezultati",
    "/Competitions-Dashboard": "Natjecanja",
    "/Scramble": "Vježbanje",
    "/Dashboard": "Radna ploča",
    "/Advanced-Dashboard": "Radna ploča",
    "/rules": "Pravila",
    "/Posts": "Objave",
};

function ClientTitle() {
    const pathname = usePathname();

    const currentTitle = routeTitles[pathname] || "Cro Cube Comp";

    return (
        <h1 className="inline-block min-h-[28px] md:min-h-[40px] text-xl md:text-3xl font-bold">
            {currentTitle}
        </h1>
    );
}

export default ClientTitle;
