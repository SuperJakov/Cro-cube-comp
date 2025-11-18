"use client";

import Card from "./Card";

export type PostProp = {
    id: string;
    title: string;
    description: React.ReactNode | string;
    author?: {
        username: string;
        id: string;
    };
    createdAt: string;
};

type CardsProps = { posts: PostProp[] };

function Cards({ posts }: CardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <Card key={post.id} {...post} isPost={true} />
            ))}
        </div>
    );
}

export default Cards;
