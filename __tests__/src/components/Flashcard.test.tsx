import { render, fireEvent } from "@testing-library/react";
import Flashcard from "../../../src/components/Flashcard";

describe("Flashcard Component", () => {
    test("should toggle answer visibility on card click", () => {
        const question = "What is the capital of France?";
        const answer = "Paris";

        const { getByText, queryByText } = render(
            <Flashcard question={question} answer={answer} />
        );

        const questionElement = getByText(question);
        expect(questionElement).toBeInTheDocument();

        const answerElement = queryByText(answer);
        expect(answerElement).not.toBeInTheDocument();

        fireEvent.click(questionElement);

        expect(queryByText(answer)).toBeInTheDocument();

        fireEvent.click(questionElement);

        expect(queryByText(answer)).not.toBeInTheDocument();
    });
});
