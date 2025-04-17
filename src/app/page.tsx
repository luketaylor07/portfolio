'use client'

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {

    return (
        <div className="p-5">
            <Hero />
            <Skills />
            <Projects />
        </div>
    );
}
