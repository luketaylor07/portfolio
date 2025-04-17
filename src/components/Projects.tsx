"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
    {
        title: "Project One",
        description: "A brief description of project one, highlighting key features and technologies used.",
        image: "/images/project1-placeholder.png",
        link: "https://github.com/yourusername/project-one",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "Project Two",
        description: "Description for the second project, focusing on its unique aspects and challenges solved.",
        image: "/images/project2-placeholder.png",
        link: "https://yourprojecttwo.com",
        tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    },
    {
        title: "Project Three",
        description: "Details about project three, perhaps emphasizing collaboration or specific outcomes achieved.",
        image: "/images/project3-placeholder.png",
        link: "#",
        tags: ["TypeScript", "Express", "Docker"],
    },
];

export default function Projects() {
    return (
        <section className="py-32" id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg text-center mb-12">
                    A selection of projects I've worked on, showcasing different skills and technologies.
                </p>

                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mySwiper"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="rounded-lg shadow-xl overflow-hidden"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative w-full h-64">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-red-500 dark:text-red-600 font-semibold inline-flex items-center group"
                                    >
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            View Project ➔
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}