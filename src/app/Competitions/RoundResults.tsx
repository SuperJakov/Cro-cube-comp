import { Result } from "../Types/solve";
import { formatTime, getAverage } from "../utils/solveTime";
import { motion } from "framer-motion";

export default function RoundResults({
    round,
    show,
}: {
    round: Result[];
    show: boolean;
}) {
    const containerClasses =
        "grid grid-cols-1 gap-2 rounded-lg border-2 border-border/40 bg-card/10 px-3 text-foreground";

    return (
        <motion.div
            initial={{
                opacity: 0,
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
            }}
            animate={{
                opacity: show ? 1 : 0,
                height: show ? "auto" : 0,
                paddingTop: show ? 12 : 0,
                paddingBottom: show ? 12 : 0,
                marginTop: show ? 8 : 0,
                marginBottom: show ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={containerClasses}
            style={{ overflow: "hidden" }}
        >
            {round.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                    Nema rezultata za ovu rundu.
                </p>
            ) : (
                round.map((result, index) => {
                    return (
                        <div key={index} className="text-base text-foreground ">
                            <p>
                                {index + 1}. {result.username}{" "}
                                {result.solves
                                    .map((solve) => formatTime(solve))
                                    .join(" ")}{" "}
                                (Ao5 {getAverage(result.solves)})
                            </p>
                        </div>
                    );
                })
            )}
        </motion.div>
    );
}
