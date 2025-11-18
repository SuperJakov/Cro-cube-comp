import RoundResults from "./RoundResults";
import ShowAndHide from "../components/Competitions/showAndHide";
import { Result } from "../Types/solve";

export default function Round({
    round,
    show,
    toggleRoundVisibility,
    roundIndex,
}: {
    round: Result[];
    show: boolean;
    toggleRoundVisibility: () => void;
    roundIndex: number;
}) {
    return (
        <>
            <div className="flex items-center justify-between rounded-lg border border-border px-4 py-2 transition-colors hover:border-primary/40">
                <h4 className="text-base font-medium text-foreground">
                    Runda {roundIndex + 1}
                </h4>
                <ShowAndHide
                    toggleVisibility={toggleRoundVisibility}
                    show={show}
                />
            </div>
            <RoundResults show={show} round={round} />
        </>
    );
}
