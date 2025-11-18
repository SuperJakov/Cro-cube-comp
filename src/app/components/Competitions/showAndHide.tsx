import ShowSvg from "../Svg/show";
import HideSvg from "../Svg/hide";

export default function ShowAndHide({
    show,
    toggleVisibility,
    disabled,
}: {
    show: boolean;
    toggleVisibility: () => void;
    disabled?: boolean;
}) {
    return (
        <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-transparent text-muted-foreground shadow-sm transition-colors hover:bg-muted/20 hover:text-foreground disabled:cursor-not-allowed"
            onClick={toggleVisibility}
            disabled={disabled}
            aria-pressed={show} // Indicates the current state of the button
            aria-label={show ? "Sakrij sadržaj" : "Prikaži sadržaj"}
        >
            {show ? (
                <ShowSvg width="20px" height="20px" fill="currentColor" />
            ) : (
                <HideSvg width="20px" height="20px" fill="currentColor" />
            )}
        </button>
    );
}
