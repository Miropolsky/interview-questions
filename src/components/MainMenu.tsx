import Link from 'next/link';
import React from 'react';

const MainMenu: React.FC = () => {
    return (
        <nav>
            <h1>Выберите категорию вопросов</h1>
            <ul>
                <li>
                    <Link href='/allQuestion'>Все вопросы</Link>
                </li>
                <li>
                    <Link href='/frontendQuestion'>Frontend</Link>
                </li>
                <li>
                    <Link href='/backendQuestion'>Backend</Link>
                </li>
                <li>
                    <Link href='/behavioralQuestion'>
                        Поведенческое интервью
                    </Link>
                </li>
                <li>
                    <Link href='/reactQuestion'>React</Link>
                </li>
                <li>
                    <Link href='/jsQuestion'>JavaScript</Link>
                </li>
                <li>
                    <Link href='/htmlcssQuestion'>HTML/CSS</Link>
                </li>
                <li>
                    <Link href='/technologyQuestion'>Технологии</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
