import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import SmoothAnchor from "../components/Common/SmoothAnchor";

export const metadata: Metadata = {
    title: "Pravila - Cro Cube Comp",
    description:
        "Pravila za Cro Cube Comp natjecanja koja prate WCA pravilnik.",
    keywords: [
        "Cro Cube Comp",
        "Cro Cube Club",
        "Cro.cube.club@gmail.com",
        "Pravila Cro Cube Comp",
        "Pravila",
    ],
};

export const dynamic = "error";

export default function Rules() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl pt-24">
            <nav className="mb-12 bg-muted/50 p-6 rounded-lg border border-border shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                    Sadržaj
                </h2>
                <ul className="space-y-3">
                    <li>
                        <SmoothAnchor
                            href="#pravila1"
                            className="flex items-center text-muted-foreground transition-colors group"
                        >
                            <span className="w-6 h-px bg-muted-foreground/30 mr-3 group-hover:w-8 transition-all duration-200"></span>
                            1. SLOŽENO STANJE
                        </SmoothAnchor>
                    </li>
                    <li>
                        <SmoothAnchor
                            href="#pravila2"
                            className="flex items-center text-muted-foreground transition-colors group"
                        >
                            <span className="w-6 h-px bg-muted-foreground/30 mr-3 group-hover:w-8 transition-all duration-200"></span>
                            2. PROSJEK
                        </SmoothAnchor>
                    </li>
                    <li>
                        <SmoothAnchor
                            href="#pravila3"
                            className="flex items-center text-muted-foreground transition-colors group"
                        >
                            <span className="w-6 h-px bg-muted-foreground/30 mr-3 group-hover:w-8 transition-all duration-200"></span>
                            3. INSPEKCIJA
                        </SmoothAnchor>
                    </li>
                </ul>
            </nav>

            <div className="space-y-6">
                <h1 className="text-3xl font-bold mb-2">Pravila natjecanja</h1>
                <p>
                    Dragi natjecatelji, u nastavku se nalaze pravila natjecanja
                    u slaganju Rubikove kocke. Ova pravila temelje se na
                    službenom pravilniku organizacije WCA, a ovdje su sažeta i
                    prevedena radi lakšeg razumijevanja.
                </p>
                <p>
                    Riječ &quot;slagalica&quot; odnosi se na sve vrste kocka na
                    ovom natjecanju: 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, skewb,
                    piraminx i clock.
                </p>

                <div id="pravila1" className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">
                        1. SLOŽENO STANJE
                    </h2>
                    <Separator />
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.1 </span>U
                        obzir se uzima isključivo položaj Rubikove kocke u
                        mirovanju, nakon zaustavljanja mjerača vremena.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.2 </span>
                        Valjanim se smatra isključivo stanje slagalice u
                        mirovanju, nakon što je mjerač vremena zaustavljen.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.3 </span>
                        Slagalica može biti u bilo kojoj orijentaciji na kraju
                        rješavanja.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.4 </span>
                        Svi dijelovi slagalice moraju biti fizički pričvršćeni
                        za samu slagalicu i u potpunosti smješteni na svoja
                        predviđena mjesta.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.5 </span>
                        Ako nisu potrebni dodatni potezi kako bi slagalica
                        dosegla potpuno riješeno stanje, smatra se riješenom bez
                        kazne.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.6 </span>
                        Ako je potreban jedan potez da bi se slagalica dovela u
                        riješeno stanje, rezultat se bilježi s vremenskom kaznom
                        od{" "}
                        <span className="text-warning font-medium">
                            +2 sekunde
                        </span>
                        .
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.7 </span>
                        Ako su potrebna dva ili više dodatna poteza, pokušaj se
                        smatra neuspješnim{" "}
                        <span className="text-destructive font-medium">
                            (DNF – Did Not Finish)
                        </span>
                        .
                    </p>

                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.8 </span>
                        Granice dopuštenog neporavnanja određene su tako da
                        jasno razdvajaju stanje slagalice koje se smatra
                        riješenim (bez kazne) od onoga koje zahtijeva dodatni
                        potez.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">1.9 </span>
                        Za kocke NxNxN: dopušteno je maksimalno neporavnanje do
                        45 stupnjeva.
                    </p>
                </div>

                <div id="pravila2" className="space-y-4 pt-8">
                    <h2 className="text-2xl font-bold text-primary">
                        2. PROSJEK
                    </h2>
                    <Separator />
                    <p className="text-foreground">
                        <span className="text-primary font-medium">2.1 </span>U
                        rundama koje se vrednuju prema pravilu &quot;Prosjek od
                        5&quot;, natjecateljima je dopušteno pet pokušaja. Od
                        tih pet pokušaja, najbolji i najgori rezultat se
                        izostavljaju, a aritmetička sredina preostala tri
                        pokušaja određuje plasman natjecatelja u toj rundi.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">2.2 </span>U
                        rundama tipa &quot;Prosjek od 5&quot;, jedan rezultat
                        označen kao{" "}
                        <span className="text-destructive font-medium">
                            DNF (Did Not Finish – nije dovršeno)
                        </span>{" "}
                        ili{" "}
                        <span className="text-destructive font-medium">
                            DNS (Did Not Start – nije započeto)
                        </span>{" "}
                        smije se uzeti kao najgori rezultat u rundi. Ako
                        natjecatelj ima dva ili više DNF i/ili DNS rezultata
                        unutar iste runde, njegov prosjek za tu rundu smatra se
                        nevažećim{" "}
                        <span className="text-destructive font-medium">
                            (DNF)
                        </span>
                        .
                    </p>
                    <p className="text-foreground font-medium">Napomena:</p>
                    <p className="text-foreground">
                        &quot;Prosjek od 5&quot; (Average of 5, Ao5) je format u
                        kojem se rješava slagalica pet puta, a rezultat se
                        računa kao prosjek srednja tri vremena (nakon
                        izbacivanja najbržeg i najsporijeg).
                    </p>
                    <p className="text-foreground">
                        <span className="font-medium">
                            DNF (Did Not Finish):
                        </span>{" "}
                        pokušaj nije uspješno dovršen (npr. slagalica nije
                        riješena prema pravilima).
                    </p>
                    <p className="text-foreground">
                        <span className="font-medium">
                            DNS (Did Not Start):
                        </span>{" "}
                        pokušaj nije započet (npr. natjecatelj nije pristupio
                        pokušaju ili je odustao prije početka).
                    </p>
                </div>

                <div id="pravila3" className="space-y-4 pt-8">
                    <h2 className="text-2xl font-bold text-primary">
                        3. INSPEKCIJA
                    </h2>
                    <Separator />
                    <p className="text-foreground">
                        <span className="text-primary font-medium">3.1 </span>
                        Natjecatelj ima pravo pregledati slagalicu na početku
                        svakog pokušaja.
                    </p>
                    <p className="text-foreground">
                        <span className="text-primary font-medium">3.2 </span>
                        Za pregled slagalice i početak slaganja natjecatelju je
                        dopušteno najviše 15 sekundi, pri čemu slaganje mora
                        započeti prije nego što istekne petnaesta sekunda.
                    </p>
                </div>
            </div>
        </main>
    );
}
