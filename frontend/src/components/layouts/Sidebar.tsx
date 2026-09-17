// components/Sidebar.tsx

import { useState } from 'react';
import { Bike, CalendarDays, ChevronLeft, CircleUserRound, ClipboardList, House, Package, Settings, ShoppingCart, Tags, UsersRound, Wrench, type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type MenuItem = {
  label: string;
  icon: LucideIcon;
  path: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    title: 'Menu',
    items: [
      { label: 'Início', icon: House, path: '/' },
      { label: 'Agenda', icon: CalendarDays, path: '/agenda' },
      { label: 'Ordens de serviço', icon: ClipboardList, path: '/ordens-de-servico' },
      { label: 'Clientes', icon: UsersRound, path: '/clientes' },
    ],
  },
  {
    title: 'Gerenciamento',
    items: [
      { label: 'Serviços', icon: Wrench, path: '/servicos' },
      { label: 'Produtos', icon: Package, path: '/produtos' },
      { label: 'Vendas', icon: ShoppingCart, path: '/vendas' },
      { label: 'Compras', icon: Tags, path: '/compras' },
    ],
  },
  {
    title: 'Sistema',
    items: [
      { label: 'Configurações', icon: Settings, path: '/configuracoes' },
    ],
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex min-h-screen shrink-0 flex-col border-r border-slate-200 bg-white transition-[width] duration-300 ${
        isCollapsed ? 'w-[88px]' : 'w-[280px]'
      }`}
    >
      <header
        className={`border-b border-slate-100 pb-6 pt-8 ${
          isCollapsed ? 'px-4' : 'px-7'
        }`}
      >
        <div
          className={`flex items-center ${
            isCollapsed ? 'justify-center' : 'gap-3'
          }`}
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <Bike size={27} strokeWidth={2.2} />
          </div>

          {!isCollapsed && (
            <div className="min-w-0">
              <h1 className="text-2xl font-black tracking-tight text-slate-900">
                Giro<span className="text-emerald-600">Bike</span>
              </h1>

              <p className="whitespace-nowrap text-xs font-medium text-slate-400">
                Gestão para bicicletarias
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Navegação */}
      <nav
        className={`flex-1 space-y-8 overflow-y-auto py-7 ${
          isCollapsed ? 'px-3' : 'px-5'
        }`}
      >
        {menuSections.map((section) => (
          <section key={section.title}>
            {!isCollapsed && (
              <h2 className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                {section.title}
              </h2>
            )}

            <div className="space-y-1.5">
              {section.items.map(({ label, icon: Icon, path }) => {
                return (
                  <NavLink
                    key={path}
                    to={path}
                    title={isCollapsed ? label : undefined}
                    aria-label={label}
                    className={({ isActive }) =>
                      `group flex w-full items-center rounded-xl py-3 text-left text-sm font-semibold transition-all duration-200 ${
                        isCollapsed
                          ? 'justify-center px-2'
                          : 'gap-3 px-4'
                      } ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                          : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={21}
                          strokeWidth={2}
                          className={`shrink-0 transition-colors ${
                            isActive
                              ? 'text-white'
                              : 'text-slate-400 group-hover:text-emerald-600'
                          }`}
                        />

                        {!isCollapsed && (
                          <span className="whitespace-nowrap">{label}</span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </section>
        ))}
      </nav>

      {/* Botão de recolher */}
      <button
        type="button"
        onClick={() => setIsCollapsed((current) => !current)}
        title={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
        aria-label={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
        className="absolute -right-5 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-md transition-colors hover:border-emerald-200 hover:text-emerald-600"
      >
        <ChevronLeft
          size={20}
          className={`transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Perfil */}
      <footer className="border-t border-slate-100 p-4">
        <button
          type="button"
          title={isCollapsed ? 'Carolinne Oliveira' : undefined}
          className={`flex w-full items-center rounded-2xl border border-slate-100 bg-white p-3 text-left shadow-sm transition hover:border-emerald-200 hover:shadow-md ${
            isCollapsed ? 'justify-center' : 'gap-3'
          }`}
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CircleUserRound size={23} />
          </div>

          {!isCollapsed && (
            <>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800">
                  Carolinne Oliveira
                </p>

                <p className="truncate text-xs text-slate-400">
                  Administradora
                </p>
              </div>

              <Settings
                size={18}
                className="shrink-0 text-slate-400"
              />
            </>
          )}
        </button>
      </footer>
    </aside>
  );
}