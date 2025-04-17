"use client";

import { Link } from "react-scroll"
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header id="header" className="bg-white dark:bg-zinc-900 fixed top-0 left-0 z-50 w-full p-5 flex justify-between items-center shadow-md">
            <div className="absolute right-0 mx-5">
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full"
                    aria-label="Toggle Theme"
                >
                    <div className="group cursor-pointer">
                        {theme === "light" ? (
                            <Moon className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-red-500 dark:group-hover:text-red-600" />
                        ) : (
                            <Sun className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-red-500 dark:group-hover:text-red-600" />
                        )}
                    </div>
                </button>
            </div>
            <div className="flex flex-col items-center mx-auto">
                <Link to="header" className="text-2xl font-semibold transition-colors duration-300 hover:text-red-500 dark:hover:text-red-600">
                    Luke Taylor
                </Link>
                <div className="flex gap-6 mt-2">
                    <Link to="skills" smooth duration={100} className="cursor-pointer transition-colors duration-300 hover:text-red-500 dark:hover:text-red-600">
                        Skills
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
