import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
    question: string;
    answer?: string;
    options?: string[];
    correctOption?: number | null;
}

interface QuestionsState {
    list: Question[];
    currentQuestionIndex: number;
    correctAnswers: number;
}

const initialState: QuestionsState = {
    list: [],
    currentQuestionIndex: 0,
    correctAnswers: 0,
};

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<Question[]>) {
            state.list = action.payload;
        },
        nextQuestion(state) {
            state.currentQuestionIndex += 1;
        },
        incrementCorrectAnswers(state) {
            state.correctAnswers += 1;
        },
        reset(state) {
            state.currentQuestionIndex = 0;
            state.correctAnswers = 0;
        },
    },
});

export const { setQuestions, nextQuestion, incrementCorrectAnswers, reset } =
    questionsSlice.actions;
export default questionsSlice.reducer