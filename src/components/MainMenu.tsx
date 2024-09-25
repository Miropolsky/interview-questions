import Link from 'next/link';
import React from 'react';

const MainMenu: React.FC = () => {
    return (
        <nav className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Выберите категорию вопросов</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <li>
                    <Link href='/allQuestion'>
                        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 cursor-pointer text-center">
                            Все вопросы
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/platina1'>
                        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 cursor-pointer text-center">
                            Платина 1
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/platina2'>
                        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 cursor-pointer text-center">
                            Платина 2
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/behavioralQuestion'>
                        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 cursor-pointer text-center">
                            Поведенческое интервью
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/reactQuestion'>
                        <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 cursor-pointer text-center">
                            React
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/jsQuestion'>
                        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 cursor-pointer text-center">
                            JavaScript
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/htmlcssQuestion'>
                        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 cursor-pointer text-center">
                            HTML/CSS
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/technologyQuestion'>
                        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 cursor-pointer text-center">
                            Технологии
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
