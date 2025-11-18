export const url = new URL(
    process.env.NODE_ENV === "production"
        ? "https://api.crocubecomp.com"
        : "http://localhost:3000",
);
