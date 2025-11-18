import { CompetitionResultType } from "../Types/solve";
import { EventCode } from "../utils/eventMappings";
import CompetitionEvent from "./CompetitionEvent";

// Component for displaying the competition name
function CompetitionName({ name }: { name: string }) {
    return (
        <h2 className="text-2xl font-semibold text-foreground">
            {name || "Ime natjecanja nije dostupno"}
        </h2>
    );
}

// Component for displaying the competition date
function CompetitionDate({ date }: { date: string }) {
    const dateInLocalString = new Date(date).toLocaleString("hr-HR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Zagreb",
    });
    return (
        <time className="text-lg text-muted-foreground" dateTime={date}>
            {dateInLocalString}
        </time>
    );
}

// Main Competition component
export default async function Competition(props: {
    competition: CompetitionResultType;
    competitionName: string;
}) {
    const { competition, competitionName } = props;
    const competitionDateString = competition.date;
    const competitionEvents = Object.keys(competition.events) as EventCode[];

    return (
        <div className="space-y-4 rounded-xl border border-border/30 bg-card/40 p-5 shadow-sm shadow-shadow-color/10">
            <CompetitionName name={competitionName} />
            <CompetitionDate date={competitionDateString} />
            <div>
                {competitionEvents.map((eventName, index) => {
                    const event = competition.events[eventName];
                    return (
                        <CompetitionEvent
                            eventName={eventName}
                            key={index}
                            event={event}
                        />
                    );
                })}
            </div>
        </div>
    );
}
