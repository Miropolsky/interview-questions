import { apiQuestion } from "@/src/pages/api/apiQuestion";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Question {
    question: string;
    answer?: string;
    options?: string[];
    correctOption?: number | null;
    category: string;
}

interface QuestionsState {
    list: Question[];
    currentCategory: string | null;
    currentQuestionIndex: number;
    correctAnswers: number;
    loading: boolean;
    error: string | null;
}

const initialState: QuestionsState = {
    list: [],
    currentCategory: null,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    loading: false,
    error: null,
};

export const getQuestion = createAsyncThunk('getQuestion', async (category: string | null) => {
    const res = await apiQuestion.getQuestion(category)
    return res.data as Question[]
})

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string | null>) {
            state.currentCategory = action.payload;
            state.currentQuestionIndex = 0;
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
    extraReducers: (builder) => {
        builder
            .addCase(getQuestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getQuestion.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getQuestion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {
    setCategory,
    nextQuestion,
    incrementCorrectAnswers,
    reset,
} = questionsSlice.actions;
export default questionsSlice.reducer