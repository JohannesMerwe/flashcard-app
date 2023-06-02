import Link from "next/link";

export default function Home() {
    return (
        <main>
            Welcome <Link href="/flashcards">flashcards</Link>
        </main>
    );
}
