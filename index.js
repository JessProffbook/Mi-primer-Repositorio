
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { BookOpen, User, Lightbulb, Gavel } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-gray-800 font-sans">
      <aside className="w-64 bg-blue-100 p-4 border-r border-gray-200 hidden md:block">
        <div className="text-xl font-bold mb-6">Menú</div>
        <ul className="space-y-4">
          <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-600 cursor-pointer">Mi Perfil</li>
          <li className="hover:text-blue-600 cursor-pointer">Historias</li>
          <li className="hover:text-blue-600 cursor-pointer">Recursos</li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center"><Gavel className="w-4 h-4 mr-2" />Zona Legal (Premium)</li>
        </ul>
      </aside>
      <div className="flex-1 p-4">
        <header className="flex justify-between items-center py-4 px-4 border-b border-gray-200 bg-blue-600 text-white">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-blue-600 rounded-full p-2 text-xl font-bold">P✏️</div>
            <h1 className="text-2xl font-bold">ProffBook</h1>
          </div>
          <div className="space-x-2">
            <Button variant="secondary">Iniciar Sesión / Sign In</Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Registrarse / Sign Up</Button>
          </div>
        </header>
        <section className="text-center mt-10 mb-16 px-4">
          <h2 className="text-3xl font-bold mb-2">Realidades docentes del mundo / Teaching Realities Worldwide</h2>
          <p className="text-lg text-gray-600 mb-6">Una red social exclusiva para compartir vivencias reales de la docencia.</p>
          <Button size="lg">Explorar Historias</Button>
        </section>
        <section className="mt-10 px-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center"><Gavel className="w-5 h-5 mr-2" /> Zona Legal (Contenido Premium)</h2>
          <p className="mb-6 text-gray-700">Este espacio está dedicado a compartir situaciones legales reales que enfrentan los docentes, así como consejos, sugerencias y recursos para resolver conflictos con respaldo profesional.</p>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Caso Legal #1</h3>
              <p className="text-sm text-gray-700 mb-3">"Un padre me demandó por disciplinar a su hijo. Esto fue lo que hice..."</p>
              <div className="text-xs text-gray-500">@ProfeLegal</div>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Button className="bg-blue-700 text-white">Suscribirme para acceder</Button>
          </div>
        </section>
        <footer className="mt-20 py-6 text-center text-sm text-gray-400">
          © 2025 ProffBook. Todos los derechos reservados. / All rights reserved.
        </footer>
      </div>
    </main>
  );
}
    