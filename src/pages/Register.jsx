import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { registerUser } from "../services/auth";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await registerUser(email, password, name);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setError("Este e-mail já está cadastrado.");
      } else if (error.code === "auth/invalid-email") {
        setError("Digite um e-mail válido.");
      } else if (error.code === "auth/weak-password") {
        setError("A senha é muito fraca.");
      } else {
        setError("Não foi possível criar a conta.");
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
          Criar conta
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Comece a aprender programação
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-white">
              Nome
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Seu nome"
              required
              className="w-full rounded-xl border border-[#36557b] bg-[#0d1c2d] px-4 py-3 text-white outline-none focus:border-[#6c5cff]"
            />
          </div>

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
              placeholder="Crie uma senha"
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
            className="w-full rounded-xl bg-[#6c5cff] py-3 font-bold text-white disabled:opacity-50"
          >
            {loading ? "Criando..." : "Criar conta"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="text-[#a99cff] hover:underline"
          >
            Entrar
          </Link>
        </p>

      </div>
    </main>
  );
}

export default Register;