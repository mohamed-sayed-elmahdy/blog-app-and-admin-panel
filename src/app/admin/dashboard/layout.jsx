export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        Sidebar admin
      </aside>
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
}