import type { Metadata } from 'next';
import Link from 'next/link';
import AppDemo from '@/components/AppDemo';
import { Smartphone, Wifi, Bell, BarChart2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Demo de la App Móvil',
  description: 'Explorá de forma interactiva la aplicación Android de control y monitoreo de LibreIncu: temperatura, humedad, alertas y estadísticas desde el celular.',
};

const features = [
  {
    icon: Wifi,
    title: 'Conexión directa',
    desc: 'Se conecta a la incubadora vía WiFi local, sin necesidad de internet.',
  },
  {
    icon: Bell,
    title: 'Alertas en tiempo real',
    desc: 'Notificaciones push si la temperatura o humedad se desvían del rango ideal.',
  },
  {
    icon: BarChart2,
    title: 'Grafana integrado',
    desc: 'Historial visual de temperatura y humedad de cada ciclo de incubación.',
  },
];

export default function AppMovilPage() {
  return (
    <div className="min-h-screen bg-lp-white">

      {/* Header */}
      <section className="bg-lp-black text-lp-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="tag bg-lp-yellow text-lp-black mb-4 inline-block">App Android</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
            <Smartphone className="text-lp-yellow" size={44} />
            Demo de la App Móvil
          </h1>
          <p className="text-xl text-lp-gray leading-relaxed max-w-2xl mx-auto">
            Explorá de forma interactiva la aplicación Android que te permite controlar y monitorear tu incubadora desde el celular.
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-4 bg-lp-gray/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-lp-black text-center mb-2">Demo interactivo</h2>
          <p className="text-lp-grayDark text-center mb-10">Hacé click en las pestañas del teléfono para explorar las distintas pantallas de la app.</p>
          <AppDemo />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-lp-black mb-8 text-center">Funciones principales</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-6 border-2 border-lp-gray hover:border-lp-yellow transition-colors">
              <f.icon className="text-lp-yellow mb-4" size={28} />
              <h3 className="font-bold text-lp-black mb-2">{f.title}</h3>
              <p className="text-lp-grayDark text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to manual */}
      <section className="py-12 px-4 bg-lp-black text-lp-white text-center">
        <BookOpen className="text-lp-yellow mx-auto mb-4" size={32} />
        <h2 className="text-2xl font-bold mb-2">¿Querés saber cómo usarla?</h2>
        <p className="text-lp-gray mb-6">El Manual de Usuario explica paso a paso la instalación, conexión y todas las funciones.</p>
        <Link
          href="/aplicacion"
          className="inline-flex items-center gap-2 bg-lp-yellow text-lp-black font-bold px-6 py-3 rounded-xl hover:bg-lp-yellowLight transition-colors"
        >
          <BookOpen size={18} />
          Ver Manual de Usuario
        </Link>
      </section>

    </div>
  );
}
