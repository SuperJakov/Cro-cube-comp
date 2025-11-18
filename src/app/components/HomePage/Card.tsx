import { CardProp } from "../../Types/cards";
import { useState, useEffect } from "react";
import Description from "./Description";

export default function Card({
    title,
    description,
    author,
    shouldRender,
    loggedIn,
    isPost,
}: CardProp) {
    const [shouldCardRender, setShouldCardRender] = useState(false);

    useEffect(() => {
        setShouldCardRender(shouldRender ? shouldRender(loggedIn) : true);
    }, [shouldRender, loggedIn]);

    if (!shouldCardRender) return null;

    return (
        <article className="group relative bg-card text-card-foreground rounded-xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
            <div className="relative p-6 flex flex-col h-full z-10">
                <header className="mb-4">
                    <h2
                        className="text-2xl font-bold tracking-tight"
                        aria-label={title}
                    >
                        {title}
                    </h2>
                </header>
                <div
                    className="flex-grow text-foreground max-w-none transition-colors duration-300"
                    aria-label="Post Description"
                >
                    <Description description={description} isPost={!!isPost} />
                </div>
                {author && (
                    <footer className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground">
                        <p>
                            <span aria-label="Posted by">Objavio</span>{" "}
                            <span
                                className="font-semibold text-foreground"
                                aria-label={author.username}
                            >
                                {author.username}
                            </span>
                        </p>
                    </footer>
                )}
            </div>
        </article>
    );
}
