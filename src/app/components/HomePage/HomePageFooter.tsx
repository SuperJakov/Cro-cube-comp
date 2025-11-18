import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePageFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border/50 mt-24">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Cro Cube Comp</h3>
                        <p className="text-muted-foreground text-sm">
                            Službena stranica hrvatske speedcubing zajednice.
                            Pridruži se natjecanjima i postani dio ekipe!
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Navigacija</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="/">Početna</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="/Competitions">Natjecanja</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="/Posts">Vijesti</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="/rules">Pravila</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Društvene mreže</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="#">Instagram</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="#">Facebook</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Link href="#">Discord</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Kontakt</h4>
                        <p className="text-sm text-muted-foreground">
                            Imate pitanja? Javite nam se na:
                            <br />
                            <Button
                                asChild
                                variant="link"
                                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Link href="mailto:info@crocubecomp.hr">
                                    info@crocubecomp.hr
                                </Link>
                            </Button>
                        </p>
                    </div>
                </div>

                <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {currentYear} Cro Cube Comp. Sva prava pridržana.
                    </p>
                </div>
            </div>
        </footer>
    );
}
