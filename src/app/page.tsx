import { Metadata } from "next";
import Cards from "./components/HomePage/Cards";
import { getPosts } from "./utils/posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <main className="min-h-screen pt-24 space-y-16">
            <section id="hero" className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold block text-center leading-tight">
                    Dobrodošli na{" "}
                    <span className="text-secondary">Cro Cube Comp</span>
                </h1>
                <p className="text-xl md:text-2xl text-center mt-4  text-muted-foreground  max-w-3xl mx-auto">
                    Službena stranica hrvatske speedcubing zajednice -
                    natjecanja prema WCA pravilima.
                </p>

                {/* Placeholder za CTA gumb */}
                <div className="text-center mt-10">
                    <a href="/natjecanja/sljedece">
                        <Button size="lg" className="cursor-pointer">
                            Prijavi se na sljedeće natjecanje!
                        </Button>
                    </a>
                </div>
            </section>

            {/* 2. 🗓️ SLJEDEĆE NATJECANJE - PREGLED */}
            <section id="next-competition" className="bg-accent py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Nadolazeće Natjecanje
                    </h2>

                    <div className="p-6 border-2 border-primary rounded-xl shadow-lg bg-white dark:bg-gray-700 max-w-2xl mx-auto text-center">
                        <p className="text-xl font-semibold">
                            Cro Cube Open 2026
                        </p>
                        <p className="text-lg mt-2">
                            📆 15. - 16. Ožujak 2026.
                        </p>
                        <p className="text-md">📍 Zagreb, Hrvatska</p>
                        <a
                            href="/natjecanja/123"
                            className="mt-4 inline-block text-primary hover:underline"
                        >
                            Saznaj više i prijavi se
                        </a>
                    </div>
                </div>
            </section>

            <section id="latest-posts" className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    📢 Najnovije Obavijesti
                </h2>

                {false ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Prikaz dohvaćenih postova koristeći Cards komponentu */}
                        <Cards posts={posts} />
                    </div>
                ) : (
                    <p className="text-center ">
                        Trenutno nema novih obavijesti. Pratite nas za novosti!
                    </p>
                )}

                {posts.length > 0 && (
                    <div className="text-center mt-10">
                        <a href="/vijesti" className="">
                            <Button
                                variant="outline"
                                className="cursor-pointer"
                            >
                                Sve vijesti i postovi
                            </Button>
                        </a>
                    </div>
                )}
            </section>

            <section
                id="about-us"
                className="container mx-auto px-4 py-8 bg-accent"
            >
                <h2 className="text-3xl font-bold text-center mb-8">O Nama</h2>

                <div className="max-w-4xl mx-auto text-lg text-muted-foreground">
                    <p className="mb-4">
                        <span className="font-bold text-primary">
                            Cro Cube Comp
                        </span>{" "}
                        je organizacija za neslužbena natjecanja u slaganju
                        Rubikove kocke i sličnih zagonetki u Republici
                        Hrvatskoj.
                    </p>
                    <p className="mb-4">
                        Cilj nam je promovirati speedcubing kao sport, poticati
                        mlade na razvoj logičkog razmišljanja i spajati
                        entuzijaste iz cijele regije.
                    </p>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-4 py-8 max-w-4xl mt-10 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/vijesti"
                            className="text-primary hover:text-primary/80 transition-colors"
                        >
                            Vijesti
                        </Link>
                        <Link
                            href="/rules"
                            className="text-primary hover:text-primary/80 transition-colors"
                        >
                            Pravila
                        </Link>
                        <Link
                            href="/advanced-dashboard"
                            className="text-primary hover:text-primary/80 transition-colors"
                        >
                            O nama
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
