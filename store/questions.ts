import { apiQuestion } from "@/pages/api/apiQuestion";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Question {
    question: string;
    options?: string[];
    answer?: string;
    correctOption?: number;
    category: string[];
}


interface QuestionsState {
    list: Question[];
    currentQuestionIndex: number;
    loading: boolean;
    error: string | null;
}

const initialState: QuestionsState = {
    list: [],
    currentQuestionIndex: 0,
    loading: false,
    error: null
};

export const getQuestion = createAsyncThunk('getQuestion', async (category: string) => {
    const res = await apiQuestion.getQuestion(category)
    return res.data as Question[]
})

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setCategory(state) {
            state.currentQuestionIndex = 0;
        },
        nextQuestion(state) {
            state.currentQuestionIndex += 1;
        },
        previousQuestion(state) {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex -= 1;
            }
        }
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
                state.currentQuestionIndex = 0;
            })
            .addCase(getQuestion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Неизвестная ошибка';
            });
    },
});

export const {
    setCategory,
    nextQuestion,
    
} = questionsSlice.actions;
export default questionsSlice.reducer