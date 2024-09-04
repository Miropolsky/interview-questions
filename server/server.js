const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

let questions = [];

// Эндпоинт для получения вопросов
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

// Эндпоинт для загрузки вопросов из JSON файла
app.post('/api/upload', (req, res) => {
    const { filePath } = req.body;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Ошибка чтения файла');
        }
        questions = JSON.parse(data);
        res.send('Вопросы загружены');
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
