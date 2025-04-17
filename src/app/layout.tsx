import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import "@/app/globals.css";
export const metadata: Metadata = {
    title: "Luke's Portfolio",
    description: "Developer portfolio showcasing projects and skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className="transition-all duration-300">
                <ThemeProvider defaultTheme="system" enableSystem>
                    <Header />{children}
                </ThemeProvider>
            </body>
        </html>
    );
}
