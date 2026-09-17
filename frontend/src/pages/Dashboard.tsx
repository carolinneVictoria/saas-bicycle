import { Sidebar } from "../components/Sidebar";

export default function DashBoard() {
    return (
        <div className="flex min-h-screen bg-slate-50">
        <Sidebar />

        <main className="min-w-0 flex-1 p-8">
            <h2 className="text-3xl font-bold text-slate-900">
            Visão geral
            </h2>
        </main>
        </div>
    )
}