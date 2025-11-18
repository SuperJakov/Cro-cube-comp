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
                <div className="flex flex-col gap-1">
                    {round.map((result, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="font-mono font-bold text-primary w-6">
                                        {index + 1}.
                                    </span>
                                    <span className="font-medium text-foreground">
                                        {result.username}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2 font-mono text-muted-foreground text-xs">
                                        {result.solves.map((solve, i) => (
                                            <span key={i}>
                                                {formatTime(solve)}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="font-mono font-bold text-foreground">
                                        Ao5: {getAverage(result.solves)}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );
}
