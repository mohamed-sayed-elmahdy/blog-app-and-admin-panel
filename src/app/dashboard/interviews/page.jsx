
import { ClipboardList, TrendingUp, Target } from 'lucide-react';

export default function InterviewsPage() {
  const categories = [
    { name: 'React', count: 45, difficulty: 'Mixed', icon: '⚛️' },
    { name: 'JavaScript', count: 38, difficulty: 'Mixed', icon: '🟨' },
    { name: 'Next.js', count: 28, difficulty: 'Intermediate', icon: '▲' },
    { name: 'TypeScript', count: 32, difficulty: 'Mixed', icon: '🔵' },
  ];

  const recentQuestions = [
    { id: 1, title: 'What are React Hooks?', category: 'React', difficulty: 'Beginner', views: 342 },
    { id: 2, title: 'Explain async/await in JavaScript', category: 'JavaScript', difficulty: 'Intermediate', views: 218 },
    { id: 3, title: 'How does Next.js SSR work?', category: 'Next.js', difficulty: 'Advanced', views: 156 },
    { id: 4, title: 'What are TypeScript Generics?', category: 'TypeScript', difficulty: 'Intermediate', views: 189 },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3 mb-8">
        <ClipboardList className="text-cyan-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Interview Questions</h1>
          <p className="text-muted-foreground">Practice with real interview questions from top companies</p>
        </div>
      </header>

      {/* Category Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={`/dashboard/interviews/${cat.name.toLowerCase()}`}
              className="rounded-xl border bg-card p-6 hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <span className="px-2 py-1 rounded bg-muted text-xs font-medium">{cat.count} Q</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.difficulty} Level</p>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Questions */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp size={24} />
          Recently Asked
        </h2>
        <div className="rounded-xl border bg-card divide-y">
          {recentQuestions.map((q, i) => (
            <div key={i} className="p-4 hover:bg-muted/50 transition cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg hover:text-blue-500 transition">{q.title}</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 rounded text-xs bg-muted font-medium">{q.category}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      q.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-500' :
                      q.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm text-muted-foreground">{q.views} views</p>
                  <button className="mt-2 px-3 py-1 rounded bg-blue-500 text-white text-xs hover:bg-blue-600 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-muted-foreground text-sm">Questions Answered</p>
          <p className="text-3xl font-bold mt-2">18</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-muted-foreground text-sm">Accuracy Rate</p>
          <p className="text-3xl font-bold mt-2">87%</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-muted-foreground text-sm">Days Streak</p>
          <p className="text-3xl font-bold mt-2">7</p>
        </div>
      </div>
    </section>
  );
}