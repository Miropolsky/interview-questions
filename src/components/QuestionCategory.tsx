// src/components/QuestionCategory.tsx
import React from 'react';
import { useSelector } from 'react-redux';

interface QuestionCategoryProps {
    title: string;
    filterCategory?: string;
}

const QuestionCategory: React.FC<QuestionCategoryProps> = ({
    title,
    filterCategory,
}) => {
    const questions = useSelector((state: RootState) => state.questions.list);
    const filteredQuestions = filterCategory
        ? questions.filter((q) => q.category === filterCategory)
        : questions;

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {filteredQuestions.map((question, index) => (
                    <li key={index}>{question.question}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionCategory;
