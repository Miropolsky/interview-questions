// pages/api/api.ts
import { questions } from './data.mjs';

const shuffleArray = (array: any) => {
    return array.sort(() => Math.random() - 0.5);
};

export default function handler(req:any, res:any) {
    // Установка CORS заголовков
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Если это запрос OPTIONS, возвращаем только заголовки
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { category } = req.query;

    if (category) {
        // Фильтрация по категориям и случайная сортировка
        const filteredQuestions = questions.filter(
            (q) => q.categories.includes(category)
        );
        const shuffledQuestions = shuffleArray(filteredQuestions);
        res.status(200).json(shuffledQuestions);
    } else {
        // Если категория не указана, возвращаем все вопросы в случайном порядке
        const shuffledQuestions = shuffleArray(questions);
        res.status(200).json(shuffledQuestions);
    }
}
