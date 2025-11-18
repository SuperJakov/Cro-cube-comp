import EventResults from "./EventResults";
import { Result } from "../Types/solve";

export default async function CompetitionEvent({
    eventName,
    event,
}: {
    eventName: string;
    event: Result[][];
}) {
    return (
        <div className="space-y-2 rounded-lg border border-border/30 bg-card/30 p-4">
            <h3 className="pl-4 text-lg font-medium text-foreground">
                {eventName}
            </h3>
            <EventResults event={event} />
        </div>
    );
}
