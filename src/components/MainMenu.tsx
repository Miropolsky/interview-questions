import Link from 'next/link';
import React from 'react';

const MainMenu: React.FC = () => {
    return (
        <nav>
            <h1>Выберите категорию вопросов</h1>
            <ul>
                <li>
                    <Link href='/all'>Все вопросы</Link>
                </li>
                <li>
                    <Link href='/frontend'>Frontend</Link>
                </li>
                <li>
                    <Link href='/backend'>Backend</Link>
                </li>
                <li>
                    <Link href='/behavioral'>Поведенческое интервью</Link>
                </li>
                <li>
                    <Link href='/react'>React</Link>
                </li>
                <li>
                    <Link href='/js'>JavaScript</Link>
                </li>
                <li>
                    <Link href='/htmlcss'>HTML/CSS</Link>
                </li>
                <li>
                    <Link href='/technology'>Технологии</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
