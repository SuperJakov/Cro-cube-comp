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
            className="flex h-8 w-8 items-center justify-center rounded-full bg-card shadow-sm transition hover:bg-card/80 disabled:cursor-not-allowed"
            onClick={toggleVisibility}
            disabled={disabled}
            aria-pressed={show} // Indicates the current state of the button
            aria-label={show ? "Sakrij sadržaj" : "Prikaži sadržaj"}
        >
            {show ? (
                <ShowSvg width="24px" height="24px" fill="black" />
            ) : (
                <HideSvg width="24px" height="24px" fill="black" />
            )}
        </button>
    );
}
