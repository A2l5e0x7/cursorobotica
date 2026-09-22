import React, { useState } from 'react';
import { Code2, Eye } from 'lucide-react';
import { supabase } from '../supabaseClient';

export default function LoginView({ setIsLoggedIn, setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Por favor, escribe tu usuario y contraseña.');
      return;
    }

    try {
      let { data: user, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username.trim())
        .maybeSingle();

      if (fetchError || !user) {
        setErrorMessage('Usuario no encontrado.');
        return;
      }

      if (user.password !== password.trim()) {
        setErrorMessage('Contraseña incorrecta.');
        return;
      }

      setCurrentUser(user);
      setIsLoggedIn(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error al conectar con la base de datos.');
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-900 font-sans">
      <div className="w-full lg:w-[420px] flex-shrink-0 bg-slate-900 flex flex-col justify-between p-8 lg:p-12 z-10 shadow-xl">
        <div>
          <div className="inline-block bg-purple-600 text-white font-bold px-3.5 py-1.5 rounded-lg text-sm tracking-wide shadow-sm">
            RobotKids
          </div>
        </div>

        <div className="w-full max-w-xs mx-auto">
          <h2 className="text-2xl font-bold !text-slate-200 mb-6">Login for students</h2>
          
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1.5">
                Usuario
              </label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu usuario"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-purple-100 transition-all text-slate-800 placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-purple-500 uppercase tracking-wider mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-purple-100 transition-all pr-10 text-black  placeholder-slate-400"
                />
                <Eye 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" 
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-xl shadow-md transition-all flex items-center justify-center text-sm cursor-pointer"
            >
              Entrar
            </button>
          </form>

          <div className="text-center mt-6 text-xs text-slate-400">
            Usa los datos que te dio tu profesor 🤖
          </div>
        </div>

        <div className="text-xs text-slate-400 text-center">
          Plataforma de robótica independiente 🚀
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-900 via-purple-1000 to-purple-1100 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative z-10 text-center max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl text-white">
          <div className="w-16 h-16 bg-purple-500/80 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-inner border border-white/20">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">¡Construye y programa!</h3>
          <p className="text-purple-200 text-sm mb-6 leading-relaxed">
            Aprende electrónica, diseña circuitos y dale vida a tus propios proyectos paso a paso.
          </p>
        </div>
      </div>
    </div>
  );
}