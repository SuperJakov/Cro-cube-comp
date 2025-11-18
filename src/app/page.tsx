import { Metadata } from "next";
import Cards from "./components/HomePage/Cards";
import { Globe, Users } from "lucide-react";
import { getPosts } from "./utils/posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomePageFooter from "./components/HomePage/HomePageFooter";

export const metadata: Metadata = {
    title: "Cro Cube Comp - Početna",
    description:
        "CroCubeComp je natjecanje Rubikove kocke u Hrvatskoj. Ova natjecanja prate WCA pravilnik.",
    keywords: [
        "Cro Cube Comp",
        "Natjecanje iz Rubikove kocke",
        "Cro Cube Club",
        "Cro.cube.club@gmail.com",
    ],
};

export const revalidate = 0; // Ensure no caching on fetch requests

export default async function Home() {
    const fetchedPosts = await getPosts();
    const posts = fetchedPosts.success ? fetchedPosts.parsed : [];

    return (
        <main className="min-h-screen space-y-24 ">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-32 md:py-52 overflow-hidden flex items-center justify-center min-h-[80vh]">
                {/* Mesh Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-background">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-1000" />
                    <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-accent/20 blur-[80px] animate-pulse delay-700" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 drop-shadow-2xl">
                            CRO CUBE
                            <br />
                            <span className="text-primary">COMP</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                            Službena stranica hrvatske{" "}
                            <span className="font-medium text-foreground">
                                speedcubing
                            </span>{" "}
                            zajednice.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                        <Link href="/Competitions">
                            <Button
                                size="lg"
                                className="text-lg px-6 py-6 sm:text-xl sm:px-10 sm:py-8 cursor-pointer"
                            >
                                Prijavi se na natjecanje
                            </Button>
                        </Link>
                        <Link href="/rules">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-lg px-6 py-6 sm:text-xl sm:px-10 sm:py-8 cursor-pointer"
                            >
                                Saznaj pravila
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest Posts Section */}
            <section className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Najnovije Obavijesti</h2>
                    <Link href="/">
                        <Button
                            variant="ghost"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Sve vijesti →
                        </Button>
                    </Link>
                </div>

                {posts.length > 0 ? (
                    <Cards posts={posts} />
                ) : (
                    <div className="text-center py-12 bg-accent/50 rounded-xl border border-border/50">
                        <p className="text-muted-foreground text-lg">
                            Trenutno nema novih obavijesti.
                        </p>
                    </div>
                )}
            </section>

            {/* About Us Section */}
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            O Nama
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">
                                Cro Cube Comp
                            </span>{" "}
                            je središte hrvatske speedcubing zajednice. Naš cilj
                            je popularizacija ovog sporta kroz organizaciju
                            službenih WCA natjecanja i okupljanje entuzijasta
                            svih uzrasta.
                        </p>
                        <div className="pt-4">
                            <Link href="/Competitions">
                                <Button size="lg" className="px-8">
                                    Saznaj više
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-4 hover:border-primary/50 transition-colors">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Globe className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">
                                    WCA Službeno
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Sva naša natjecanja prate službena pravila
                                    Svjetske Cube Asocijacije.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-4 hover:border-primary/50 transition-colors">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">
                                    Zajednica
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Gradimo prijateljsko okruženje za početnike
                                    i iskusne natjecatelje.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HomePageFooter />
        </main>
    );
}
