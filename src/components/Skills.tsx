"use client";
import {
    Server,
    Database,
    Globe,
    GitBranch,
    Terminal,
    Braces,
} from "lucide-react";

const skillGroups = [
    {
        title: "Languages",
        icon: <Braces className="w-5 h-5 mr-2 text-red-500" />,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "Lua", "C#"],
    },
    {
        title: "Frontend",
        icon: <Globe className="w-5 h-5 mr-2 text-red-500" />,
        skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: <Server className="w-5 h-5 mr-2 text-red-500" />,
        skills: ["Node.js", "Express", "PHP"],
    },
    {
        title: "Databases",
        icon: <Database className="w-5 h-5 mr-2 text-red-500" />,
        skills: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
        title: "Tools & Infra",
        icon: <GitBranch className="w-5 h-5 mr-2 text-red-500" />,
        skills: ["Linux", "Nginx", "VSCode"],
    },
    {
        title: "Scripting & CLI",
        icon: <Terminal className="w-5 h-5 mr-2 text-red-500" />,
        skills: ["Bash"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">My Skills</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-xl mx-auto">
                        A breakdown of my technical expertise grouped into categories for a clean and organized view.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition transform duration-300"
                        >
                            <div className="flex items-center mb-4 text-lg font-semibold">
                                {group.icon}
                                <span>{group.title}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-sm font-semibold bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-600 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
