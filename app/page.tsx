// Временные данные. Позже заменим на запросы к БД.
const posts = [
  { id: 1, title: "Расписание Месс на неделю", excerpt: "Публикуем актуальное расписание богослужений в нашем храме." },
  { id: 2, title: "Молодежная встреча в пятницу", excerpt: "Приглашаем всех желающих на встречу католической молодежи Тулы." },
  { id: 3, title: "Отчет о благотворительной акции", excerpt: "Спасибо всем, кто принял участие в сборе помощи." },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Последние записи</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            <button className="mt-4 text-sm text-blue-600 hover:underline">
              Читать далее →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}