
import { IoIosColorPalette } from "react-icons/io";

export default function DashboardLayout({ children }) {


   
    return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 p-4">
        Sidebar user
      </aside>
      <main className="flex-1 p-6 min-h-screen">
    
        {children}
      
      </main>
      <button className="fixed bottom-4 right-4 text-2xl bg-gray-800 text-[var(--text)] p-3 rounded-full"><IoIosColorPalette /></button>
    </div>
  );
}