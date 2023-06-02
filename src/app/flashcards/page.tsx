import Flashcard from "@/components/Flashcard";
import Link from "next/link";

export default function Flashcards() {
    return (
        <main>
            go
            <Link href="/">home</Link>
            <Flashcard question="Why are you here?" answer="to learn" />
        </main>
    );
}
