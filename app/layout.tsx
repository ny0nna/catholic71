import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Блог католиков Тулы",
  description: "Новости, события и статьи прихода",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-50 text-gray-300`}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-800">Католики Тулы</h1>
            <div className="space-x-4 text-sm">
              <a href="/" className="hover:text-blue-600">Главная</a>
              <a href="/admin" className="hover:text-blue-600">Админка</a>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 py-8 border-t">
          Учебный проект для прихода. Демо-версия.
        </footer>
      </body>
    </html>
  );
}