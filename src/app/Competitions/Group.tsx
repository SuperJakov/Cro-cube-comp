"use client";

import { useState } from "react";
import { Result } from "../Types/solve";
import ShowAndHide from "../components/Competitions/showAndHide";
import dynamic from "next/dynamic";
import { Loader } from "../components/Loader/Loader";
import { clsx } from "clsx";

const GroupResults = dynamic(() => import("./GroupResults"), {
    ssr: false,
    loading: () => <LoadingGroup />,
});

function LoadingGroup() {
    return (
        <div className="flex min-h-[100px] items-center justify-center">
            <Loader />
        </div>
    );
}

type Props = {
    group: Result[][];
    groupNumber: number;
};

export default function Group({ group, groupNumber }: Props) {
    const [areGroupResultsShown, setGroupResultsVisibility] = useState(true);
    const [roundVisibilities, setRoundVisibilities] = useState<boolean[]>(
        group.map(() => false), // Default to false (hidden) for each round
    );

    function toggleGroupResultsVisibility() {
        setGroupResultsVisibility(!areGroupResultsShown);
    }

    function toggleRoundVisibility(index: number) {
        setRoundVisibilities((prevVisibilities) => {
            const newVisibilities = [...prevVisibilities];
            newVisibilities[index] = !newVisibilities[index];
            return newVisibilities;
        });
    }

    const groupIndex = groupNumber - 1;

    return (
        <section
            className={clsx(
                "flex flex-col gap-4 rounded-xl border border-border/40 bg-card/50 p-4 transition-all duration-300 hover:border-border/80",
                {
                    "gap-0": !areGroupResultsShown,
                },
            )} // Apply the no-gap class when group results are hidden
            id={`group-${groupIndex}`}
            aria-labelledby={`group-title-${groupIndex}`}
        >
            <div className="flex items-center gap-4 border-b border-border/40 px-2 pb-3 pt-1">
                <h4
                    id={`group-title-${groupIndex}`}
                    className="text-lg font-semibold "
                >
                    Grupa {groupNumber}
                </h4>
                <ShowAndHide
                    show={areGroupResultsShown}
                    toggleVisibility={toggleGroupResultsVisibility}
                />
            </div>

            <GroupResults
                roundVisibilities={roundVisibilities}
                areGroupResultsShown={areGroupResultsShown}
                group={group}
                toggleRoundVisibility={toggleRoundVisibility}
            />
        </section>
    );
}
