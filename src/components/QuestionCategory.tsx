import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch, useStoreSelector } from '@/store/store';
import { getQuestion, nextQuestion } from '@/store/questions';
import CurrentQuestion from './CurrentQuestion';
import { useRouter } from 'next/router';

interface QuestionCategoryProps {
    title: string;
    category: string;
}

const QuestionCategory: React.FC<QuestionCategoryProps> = ({ title, category }) => {
    const dispatch = useStoreDispatch();
    const { list, currentQuestionIndex, loading, error } = useStoreSelector(
        (state) => state.questions
    );
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [testCompleted, setTestCompleted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        dispatch(getQuestion(category));
    }, [category, dispatch]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < list.length) {
            dispatch(nextQuestion());
        } else {
            setTestCompleted(true); // Тест завершён
        }
    };

    const handleGoHome = () => {
        router.push('/'); // Переход на главную страницу
    };

    if (loading) return <div className="text-center text-lg font-semibold">Загрузка вопросов...</div>;
    if (error) return <div className="text-center text-red-500">Ошибка: {error}</div>;
    if (list.length === 0) return <div className="text-center text-lg">Нет вопросов в этой категории.</div>;

    if (testCompleted) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">Тест завершён</h1>
                <p className="text-lg">Вы правильно ответили на {correctAnswersCount} из {list.length} вопросов.</p>
                <button
                    onClick={handleGoHome}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Перейти на главную страницу
                </button>
            </div>
        );
    }

    const currentQuestion = list[currentQuestionIndex];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <CurrentQuestion
                question={currentQuestion}
                onNext={handleNextQuestion}
                isLastQuestion={currentQuestionIndex + 1 === list.length}
                correctAnswersCount={correctAnswersCount}
                setCorrectAnswersCount={setCorrectAnswersCount}
            />
            <div className="text-center mt-4">
                Вопрос {currentQuestionIndex + 1} из {list.length}
            </div>
        </div>
    );
};

export default QuestionCategory;
