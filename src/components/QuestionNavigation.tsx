import React from 'react';
import { useDispatch } from 'react-redux';
import { nextQuestion } from '@/store/questions';
import { useStoreDispatch } from '@/store/store';

const QuestionNavigation: React.FC = () => {
    const dispatch = useStoreDispatch();

    return (
        <button onClick={() => dispatch(nextQuestion())}>
            Следующий вопрос
        </button>
    );
};

export default QuestionNavigation;
