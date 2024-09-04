// src/components/QuestionCategory.tsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '@/store/store';
import { getQuestion, setCategory } from '@/store/questions';

interface QuestionCategoryProps {
    title: string;
    category: string;
}

const QuestionCategory: React.FC<QuestionCategoryProps> = ({
    title,
    category,
}) => {
    const dispatch = useStoreDispatch();
    const { list, currentQuestionIndex, loading, error } = useSelector(
        (state: RootState) => state.questions
    );

    useEffect(() => {
        dispatch(setCategory(category));
        dispatch(getQuestion(category));
    }, [category, dispatch]);

    if (loading) return <div>Загрузка вопросов...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (list.length === 0) return <div>Нет вопросов в этой категории.</div>;

    const currentQuestion = list[currentQuestionIndex];

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {list.map((question, index) => (
                    <li key={index}>{question.question}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionCategory;
