"use client";

import { motion } from "framer-motion";
import WireframeSphere from "./WireframeSphere";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-[100vh] px-4">
            <motion.h1
                className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I&apos;m <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">Luke</span> 👋
            </motion.h1>
            <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                A software and game developer passionate about building innovative and efficient applications.
            </motion.p>
            <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <div className="flex items-center gap-2 group">
                    <span className="text-red-600 dark:text-red-500 text-xl font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">Full-stack development</span>
                </div>
                <div className="flex items-center gap-2 group">
                    <span className="text-red-600 dark:text-red-500 text-xl font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">Game development</span>
                </div>
                <div className="flex items-center gap-2 group">
                    <span className="text-red-600 dark:text-red-500 text-xl font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">Problem-solving enthusiast</span>
                </div>
            </motion.div>
            <WireframeSphere />
        </section>
    );
};

export default Hero;
