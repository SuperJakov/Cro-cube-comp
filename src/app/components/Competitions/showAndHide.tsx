import { Button } from "@/components/ui/button";
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
        <Button
            variant="outline"
            size="icon-sm"
            className="rounded-full cursor-pointer"
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
        </Button>
    );
}
