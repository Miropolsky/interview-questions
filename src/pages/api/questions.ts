import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

interface Question {
    question: string;
    answer?: string;
    options?: string[];
    correctOption?: number | null;
    category: string;
}

let questions: Question[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { category } = req.query;

        if (category) {
            const filteredQuestions = questions.filter(q => q.category === category);
            res.status(200).json(filteredQuestions);
        } else {
            res.status(200).json(questions);
        }
    } else if (req.method === 'POST') {
        const { filePath } = req.body;

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Ошибка чтения файла' });
            }
            questions = JSON.parse(data) as Question[];
            res.status(200).json({ message: 'Вопросы загружены' });
        });
    } else {
        res.status(405).json({ message: 'Метод не поддерживается' });
    }
}
