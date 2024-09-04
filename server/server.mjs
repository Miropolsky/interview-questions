// server/server.mjs
import express from 'express';
import cors from 'cors';
import { questions } from './data.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/questions', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredQuestions = questions.filter(
            (q) => q.category === category
        );
        res.status(200).json(filteredQuestions);
    } else {
        res.status(200).json(questions);
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
