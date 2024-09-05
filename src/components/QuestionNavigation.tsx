import React from 'react';

interface QuestionNavigationProps {
    onNext: () => void;
}

const QuestionNavigation: React.FC<QuestionNavigationProps> = ({ onNext }) => {
    return (
        <button
            onClick={onNext}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
            Следующий вопрос
        </button>
    );
};

export default QuestionNavigation;
