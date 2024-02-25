import { Spinner } from "../components/spinner";

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-120px)] w-full justify-center bg-gray-950 text-gray-100 [@media(min-width:500px)]:min-h-[calc(100vh-120px-80px)]">
      <p className="mt-24 text-center text-lg">Choose a book to get started</p>
    </div>
  );
}
