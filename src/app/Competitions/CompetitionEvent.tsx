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
        <div className="space-y-3 rounded-xl border border-border p-4 transition-all hover:border-primary/50 hover:shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight text-primary">
                {eventName}
            </h3>
            <EventResults event={event} />
        </div>
    );
}
