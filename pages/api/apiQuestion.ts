import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import axios from 'axios';
import { Question } from '@/store/questions';

// interface ApiResponse<T> {
//     data: T
// }

// export const url = 'http://localhost:5000'
// const instance = axios.create({
//     baseURL: url,
// })
// export const apiQuestion = {
//     async getQuestion(category: string | null): Promise<ApiResponse<Question[]>> {
//         return await instance.get(`/api/questions${category ? `?category=${category}` : ''}`)
//     },
// }
// lib/apiQuestion.ts

const API_BASE_URL = '/api'; // Это базовый URL для API Routes в Next.js

export const apiQuestion = {
    getQuestion: async (category: string) => {
        const response = await axios.get(`${API_BASE_URL}/questions`, {
            params: { category }
        });
        return response;
    }
};

