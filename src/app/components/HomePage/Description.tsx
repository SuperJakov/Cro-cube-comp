import DomPurify from "dompurify";
import { useState, useEffect } from "react";

type Props = {
    description: React.ReactNode | string;
    isPost: boolean;
};
export default function Description({ description, isPost }: Props) {
    const [showMore, setShowMore] = useState(false);
    const maxLength = 200;

    // Helper function to sanitize and truncate the description
    const getSanitizedAndTruncatedDescription = (desc: string) => {
        const sanitized = DomPurify.sanitize(desc);
        return sanitized.length > maxLength
            ? sanitized.substring(0, maxLength) + "..."
            : sanitized;
    };

    // State for truncated description
    const [truncatedDescription, setTruncatedDescription] = useState(
        typeof description === "string" && isPost
            ? getSanitizedAndTruncatedDescription(description)
            : "",
    );

    // Update truncated description when `description` or `type` changes
    useEffect(() => {
        if (isPost && typeof description === "string") {
            setTruncatedDescription(
                getSanitizedAndTruncatedDescription(description),
            );
        }
    }, [description, isPost]);

    // Render logic for string descriptions
    if (typeof description === "string") {
        const sanitizedDescription = DomPurify.sanitize(description);

        if (isPost) {
            return (
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: showMore
                                ? sanitizedDescription
                                : truncatedDescription,
                        }}
                        style={{ overflow: "hidden" }}
                        className="break-words"
                    />
                    {sanitizedDescription.length > maxLength && (
                        <button
                            className="text-primary hover:underline text-sm font-medium mt-2 inline-block"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Prikaži manje" : "Prikaži više"}
                        </button>
                    )}
                </div>
            );
        }

        // For cards which arent posts
        return (
            <div
                dangerouslySetInnerHTML={{
                    __html: sanitizedDescription,
                }}
            />
        );
    }

    // Fallback for non-string descriptions
    return <>{description}</>;
}
