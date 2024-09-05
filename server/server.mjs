import express from 'express';
import cors from 'cors';
import { questions } from './data.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Функция для случайной сортировки массива
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

app.get('/api/questions', (req, res) => {
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
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
