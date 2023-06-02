export const metadata = {
    title: "Flascards",
    description: "Test your knowledge",
};

export default function FlashCardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
