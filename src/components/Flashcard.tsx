"use client";
import React, { useState } from "react";
import styled from "styled-components";

interface FlashcardProps {
    question: string;
    answer: string;
}

const Card = styled.div`
    background-color: #68edc6;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    cursor: pointer;
`;

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const handleCardClick = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <Card onClick={handleCardClick}>
            <p>{question}</p>
            {isAnswerVisible && <p>{answer}</p>}
        </Card>
    );
};

export default Flashcard;
