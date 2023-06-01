import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Flashcard from "../../../src/components/Flashcard";

test("renders question and hides answer initially", () => {
    render(
        <Flashcard
            question="What is React?"
            answer="A JavaScript library for building user interfaces"
        />
    );

    expect(screen.getByText("What is React?")).toBeInTheDocument();
    expect(
        screen.queryByText("A JavaScript library for building user interfaces")
    ).not.toBeInTheDocument();
});

test("shows answer when card is clicked", () => {
    render(
        <Flashcard
            question="What is React?"
            answer="A JavaScript library for building user interfaces"
        />
    );

    fireEvent.click(screen.getByText("What is React?"));

    expect(
        screen.getByText("A JavaScript library for building user interfaces")
    ).toBeInTheDocument();
});
