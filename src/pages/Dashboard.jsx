import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0b1a2a] text-white">

      <header className="border-b border-[#29496d] bg-[#203f68]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          <Logo />

          <nav className="hidden gap-8 md:flex">
            <Link
              to="/dashboard"
              className="border-b-2 border-[#ffe500] pb-2 text-[#ffe500]"
            >
              Aprender
            </Link>

            <Link
              to="/ranking"
              className="text-slate-300 hover:text-white"
            >
              Ranking
            </Link>

            <Link
              to="/perfil"
              className="text-slate-300 hover:text-white"
            >
              Perfil
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="rounded-full border border-[#34557d] bg-[#0d1c2d] px-4 py-2 text-sm text-[#ffe500]">
              ⭐ 1,240 XP
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c5cff] font-bold">
              AT
            </div>
          </div>

        </div>
      </header>

      <section className="mx-auto max-w-7xl px-8 py-10">

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Meus Cursos
          </h1>

          <div className="rounded-lg bg-[#203f68] p-1">
            <button className="rounded-md bg-[#0d1c2d] px-4 py-2 text-sm text-[#ffe500]">
              Em Progresso 1
            </button>

            <button className="px-4 py-2 text-sm text-slate-400">
              Concluído 0
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#34557d] bg-[#203f68] p-6">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400 text-2xl text-blue-400">
                &lt;/&gt;
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Desenvolvedor JavaScript
                </h2>

                <p className="text-slate-400">
                  Módulo 1: Fundamentos da Programação
                </p>
              </div>

            </div>

            <div className="flex items-center gap-6">

              <div className="w-60">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-400">
                    Progresso do Curso
                  </span>

                  <span className="text-green-400">
                    1%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-[#315278]">
                  <div className="h-2 w-[1%] rounded-full bg-green-400" />
                </div>
              </div>

              <button className="rounded-xl bg-[#6c5cff] px-6 py-3 font-bold hover:bg-[#7b6cff]">
                Continuar
              </button>

            </div>

          </div>

        </div>

        <h2 className="mt-10 text-2xl font-bold">
          Recomendados para ti
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <CourseCard
            language="JS"
            title="JavaScript Básico"
            xp="400 XP"
          />

          <CourseCard
            language="JS"
            title="JavaScript Intermediário"
            xp="600 XP"
          />

          <CourseCard
            language="JS"
            title="Lógica de Programação"
            xp="500 XP"
          />

          <CourseCard
            language="JS"
            title="Funções e Arrays"
            xp="450 XP"
          />

        </div>

      </section>
    </main>
  );
}

function CourseCard({ language, title, xp }) {
  return (
    <div className="rounded-2xl border border-[#34557d] bg-[#142b49] p-5 transition hover:-translate-y-1 hover:border-[#ffe500]">

      <div className="flex items-center justify-between">
        <span className="rounded-md bg-[#263e72] px-3 py-1 text-xs text-[#a99cff]">
          {language}
        </span>

        <span className="text-sm font-bold text-[#ffe500]">
          {xp}
        </span>
      </div>

      <h3 className="mt-6 font-bold">
        {title}
      </h3>

      <p className="mt-5 text-sm text-slate-400">
        Começar agora →
      </p>

    </div>
  );
}

export default Dashboard;