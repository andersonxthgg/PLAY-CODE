import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { loginUser } from "../services/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await loginUser(email, password);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/invalid-credential") {
        setError("E-mail ou senha incorretos.");
      } else if (error.code === "auth/invalid-email") {
        setError("Digite um e-mail válido.");
      } else {
        setError("Não foi possível realizar o login.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1a2a] px-6">
      <div className="w-full max-w-md rounded-3xl border border-[#34557d] bg-[#203f68] p-8">
        
        <div className="flex justify-center">
          <Logo />
        </div>

        <h1 className="mt-8 text-center text-3xl font-bold text-white">
          Entrar
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Continue sua jornada no PlayCode
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          
          <div>
            <label className="mb-2 block text-sm text-white">
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full rounded-xl border border-[#36557b] bg-[#0d1c2d] px-4 py-3 text-white outline-none focus:border-[#6c5cff]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white">
              Senha
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
              required
              className="w-full rounded-xl border border-[#36557b] bg-[#0d1c2d] px-4 py-3 text-white outline-none focus:border-[#6c5cff]"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#6c5cff] py-3 font-bold text-white transition hover:bg-[#7b6cff] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Ainda não possui conta?{" "}
          <Link
            to="/cadastro"
            className="text-[#a99cff] hover:underline"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;