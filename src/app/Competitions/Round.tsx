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
            <div className="flex items-center justify-between rounded-lg border-2 border-border/60 bg-card/20 px-4 py-2">
                <h4 className="text-base font-semibold text-foreground">
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
