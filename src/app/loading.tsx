import { Loader } from "./components/Loader/Loader";

export default function LoadingPage() {
    return (
        <div className="flex justify-center items-center min-h-screen overflow-hidden">
            <Loader />
        </div>
    );
}
