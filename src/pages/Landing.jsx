import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Landing() {
  return (
    <main className="min-h-screen bg-[#0b1a2a] text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <Logo />

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300">
            Já tem uma conta?
          </span>

          <Link
            to="/login"
            className="rounded-lg border border-[#6c5cff] px-5 py-2 text-sm text-[#a99cff] transition hover:bg-[#6c5cff] hover:text-white"
          >
            Entrar
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-20 lg:grid-cols-2 lg:items-center">
        
        <div>
          <div className="mb-8 inline-flex rounded-full border border-[#ffe500] px-4 py-2 text-xs font-bold text-[#ffe500]">
            &lt;/&gt; JAVASCRIPT — APRENDA JOGANDO
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
            Domine JavaScript{" "}
            <span className="text-[#ffe500]">
              um desafio
            </span>{" "}
            de cada vez
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Aprenda lógica de programação resolvendo exercícios,
            ganhando XP, avançando de nível e competindo no ranking.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#1c3b63] px-5 py-3 text-sm">
              ⭐ Ganhe XP a cada questão
            </span>

            <span className="rounded-full bg-[#1c3b63] px-5 py-3 text-sm">
              🏆 Ranking
            </span>

            <span className="rounded-full bg-[#1c3b63] px-5 py-3 text-sm">
              📈 Suba de nível
            </span>

            <span className="rounded-full bg-[#1c3b63] px-5 py-3 text-sm">
              &lt;/&gt; Foco em JS
            </span>
          </div>

          <div className="mt-10 flex gap-12">
            <div>
              <strong className="text-3xl">100+</strong>
              <p className="text-sm text-slate-400">
                Questões
              </p>
            </div>

            <div>
              <strong className="text-3xl">10+</strong>
              <p className="text-sm text-slate-400">
                Níveis
              </p>
            </div>

            <div>
              <strong className="text-3xl">XP</strong>
              <p className="text-sm text-slate-400">
                Gamificação
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#34557d] bg-[#203f68] p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <Logo />

            <h2 className="mt-5 text-2xl font-bold">
              Comece sua jornada
            </h2>

            <p className="mt-2 text-slate-400">
              Entre ou crie uma conta gratuita
            </p>
          </div>

          <Link
            to="/login"
            className="block rounded-xl bg-[#6c5cff] py-4 text-center font-bold transition hover:bg-[#7b6cff]"
          >
            Entrar
          </Link>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#36567d]" />
            <span className="text-sm text-slate-400">OU</span>
            <div className="h-px flex-1 bg-[#36567d]" />
          </div>

          <Link
            to="/cadastro"
            className="block rounded-xl border border-[#806fff] py-4 text-center font-bold text-[#a99cff] transition hover:bg-[#806fff] hover:text-white"
          >
            Criar Conta
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Landing;