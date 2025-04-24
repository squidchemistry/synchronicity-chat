// app/dashboard/page.tsx
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16">
      <section className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Welcome back! Manage your account and explore your tools.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <DashboardCard
            title="Chat Room"
            description="Join the conversation and chat in real-time."
            href="/chat"
            icon="💬"
            gradient="from-blue-600 to-blue-500"
          />
          <DashboardCard
            title="Manage Account"
            description="Edit your profile, settings, and more."
            href="/auth"
            icon="🔐"
            gradient="from-purple-600 to-purple-500"
          />
        </div>
      </section>
    </main>
  );
}

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  gradient: string;
}

function DashboardCard({ title, description, href, icon, gradient }: DashboardCardProps) {
  return (
    <Link
      href={href}
      className={`block bg-gradient-to-r ${gradient} p-6 rounded-2xl shadow-xl hover:scale-105 transition transform duration-300`}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </Link>
  );
}
