import React, { useState, useEffect } from 'react';
import { Question } from '@/store/questions';

interface IProps {
    question: Question;
    onNext: () => void;
    isLastQuestion: boolean;
    correctAnswersCount: number;
    setCorrectAnswersCount: (count: number) => void;
}

const CurrentQuestion: React.FC<IProps> = ({ question, onNext, isLastQuestion, correctAnswersCount,
    setCorrectAnswersCount }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    // Сбрасываем состояние при каждом новом вопросе
    useEffect(() => {
        setSelectedOption(null);
        setShowAnswer(false);
        setFeedback(null);
        setIsAnswered(false);
    }, [question]);

    const handleOptionClick = (index: number) => {
        if (!isAnswered) {
            setSelectedOption(index);
            const isCorrect = index === question.correctOption;
            setIsAnswered(true);
            if (isCorrect) {
                setFeedback('Правильно!');
                setCorrectAnswersCount(correctAnswersCount + 1);
            } else {
                setFeedback('Неправильно.');
            }
        }
    };

    const handleShowAnswer = () => {
        setShowAnswer(prev => !prev);
    };

    const handleAnswerCheck = (isCorrect: boolean) => {
        if (isCorrect) {
            setCorrectAnswersCount(correctAnswersCount + 1);
        }
        onNext(); // Переход к следующему вопросу
    };

    // Функция для озвучивания текста
    const speakAnswer = (text: string) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'ru-RU'; // Можно изменить на другой язык, если требуется
        window.speechSynthesis.speak(speech);
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Вопрос: {question.question}</h2>
            {question.options ? (
                <div>
                    <ul className="mt-2 space-y-2">
                        {question.options.map((option, index) => (
                            <li
                                key={index}
                                className={`p-2 rounded-md cursor-pointer ${isAnswered ? (index === question.correctOption ? 'bg-green-100' : (index === selectedOption ? 'bg-red-100' : 'bg-gray-100')) : 'bg-gray-100'}`}
                                onClick={() => handleOptionClick(index)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    {feedback && <p className={`mt-4 ${feedback === 'Правильно!' ? 'text-green-500' : 'text-red-500'}`}>{feedback}</p>}
                    {isAnswered && (
                        <button
                            onClick={onNext}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Далее
                        </button>
                    )}
                </div>
            ) : question.answer ? (
                <div>
                    <button
                        onClick={handleShowAnswer}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Показать ответ
                    </button>
                    {showAnswer && (
                        <div className="mt-4">
                            <p className="font-bold">Ответ: {question.answer}</p>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleAnswerCheck(true)}
                                    className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
                                >
                                    Ответ верный
                                </button>
                                <button
                                    onClick={() => handleAnswerCheck(false)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                                >
                                    Ответ неверный
                                </button>
                                {/* Добавляем кнопку для озвучки */}
                               {/* <button
                                    onClick={() => speakAnswer(question.answer || '')}
                                    className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
                                >
                                    Озвучить ответ
                    </button> */}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div>Нет варианта ответа или ответа для этого вопроса.</div>
            )}
        </div>
    );
};

export default CurrentQuestion;
