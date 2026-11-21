export default function AdminPage() {
  // Пока здесь просто заглушка. Позже сюда добавим проверку сессии.
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Админ-панель</h2>
      <p className="text-gray-600 mb-6">
        Здесь будет управление контентом. Доступ только для авторизованных пользователей.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-sm border">
          <h3 className="font-semibold">Управление записями</h3>
          <p className="text-sm text-gray-500">Создание, редактирование и удаление постов блога.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm border opacity-50">
          <h3 className="font-semibold">Пользователи (только супер-админ)</h3>
          <p className="text-sm text-gray-500">Назначение ролей и управление доступом.</p>
        </div>
      </div>
    </div>
  );
}