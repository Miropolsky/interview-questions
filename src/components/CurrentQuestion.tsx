import { useStoreSelector } from '@/store/store';
import React from 'react';

const CurrentQuestion: React.FC = () => {
    const { list, currentQuestionIndex } = useStoreSelector(
        (state) => state.questions
    );

    if (list.length === 0) return <div>Нет вопросов для отображения.</div>;

    const currentQuestion = list[currentQuestionIndex];

    return (
        <div>
            <h2>Вопрос: {currentQuestion.question}</h2>
            {currentQuestion.options && (
                <ul>
                    {currentQuestion.options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            )}
            {currentQuestion.answer && <p>Ответ: {currentQuestion.answer}</p>}
        </div>
    );
};

export default CurrentQuestion;
