import Group from "./Group";
import { Result } from "../Types/solve";

// Function to separate results by group
function separateResultsByGroup(round: Result[]) {
    const groups: Result[][] = [[], []];
    round.forEach((result) => {
        groups[result.group - 1].push(result);
    });
    return groups;
}

interface EventProps {
    event: Result[][];
}

// Main component for displaying event results
export default async function EventResults({ event }: EventProps) {
    const groups: Result[][][] = [[], []];

    event.forEach((round) => {
        const solversSeparatedByGroup = separateResultsByGroup(round);

        groups[0].push(solversSeparatedByGroup[0]);
        groups[1].push(solversSeparatedByGroup[1]);
    });

    return (
        <section
            className="space-y-4"
            itemScope
            itemType="http://schema.org/SportEvent"
        >
            <div className="grid gap-4 lg:grid-cols-2">
                {groups.map((group, index) => (
                    <Group group={group} key={index} groupNumber={index + 1} />
                ))}
            </div>
        </section>
    );
}
