import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Egg,
  Thermometer,
  Droplets,
  RotateCcw,
  Wifi,
  BookOpen,
  AlertTriangle,
  Video,
  Mail,
  ChevronRight,
  CheckCircle,
  ExternalLink,
  Network,
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LibreIncu – Tecnología Libre para la Soberanía Alimentaria',
};

const features = [
  {
    icon: Thermometer,
    title: 'Control de Temperatura',
    desc: 'Sensor BME280 con precisión ±0.5°C. Resistencia calefactora con control PID automático a 37.8°C.',
    color: 'text-lp-yellowDark',
    bg: 'bg-lp-gray',
  },
  {
    icon: Droplets,
    title: 'Sistema de Humidificación',
    desc: 'Microaspersor de alta precisión con carga automática de agua. Control integrado de humedad relativa al 60%.',
    color: 'text-lp-yellow',
    bg: 'bg-lp-black text-lp-white',
  },
  {
    icon: RotateCcw,
    title: 'Rotación Automática',
    desc: 'Motor con sensores programables para una rotación cuidadosa y periódica de las bandejas.',
    color: 'text-lp-grayDark',
    bg: 'bg-lp-gray',
  },
  {
    icon: Wifi,
    title: 'Conectividad Abierta',
    desc: 'ESP32 con conectividad en red mesh. Interfaz local para monitoreo en tiempo real desde celular sin internet.',
    color: 'text-lp-black',
    bg: 'bg-lp-yellowLight',
  },
  {
    icon: Network,
    title: 'Conectividad Real',
    desc: 'Dos modos: AP para conexión directa sin conexión a internet. Online para registro histórico, monitoreo y control.',
    color: 'text-lp-white',
    bg: 'bg-lp-black',
  },
];

const navCards = [
  {
    href: '/manual',
    icon: Egg,
    title: 'Manual de usuario',
    desc: 'Todo sobre selección de huevos, incubación y armado de LibreIncu.',
    color: 'border-lp-gray hover:border-lp-yellow',
    badge: 'Guías',
  },
  {
    href: '/especificaciones',
    icon: Thermometer,
    title: 'Material Técnico',
    desc: 'Hardware, software, firmware y esquema del ecosistema IoT.',
    color: 'border-lp-grayDark hover:border-lp-black',
    badge: 'Hardware/Code',
  },
  {
    href: '/app-movil',
    icon: Smartphone,
    title: 'Demo de la App',
    desc: 'Explorá de forma interactiva la app Android de control remoto.',
    color: 'border-lp-yellowLight hover:border-lp-yellow',
    badge: 'Software',
  },

  {
    href: '/huevos',
    icon: Egg,
    title: 'Huevos e Incubación',
    desc: 'Guía detallada sobre recolección, selección e incubación.',
    color: 'border-lp-grayDark hover:border-lp-black',
    badge: 'Guías',
  },
  {
    href: '/buenas-practicas',
    icon: CheckCircle,
    title: 'Buenas Prácticas',
    desc: 'Recomendaciones y consejos para optimizar tus resultados.',
    color: 'border-lp-yellowLight hover:border-lp-yellow',
    badge: 'Guías',
  },
  {
    href: '/ecosistema',
    icon: Network,
    title: 'Ecosistema',
    desc: 'Descubrí cómo se integran las tecnologías de LibreIncu.',
    color: 'border-lp-gray hover:border-lp-yellow',
    badge: 'Tecnología',
  },
  {
    href: '/solucion-problemas',
    icon: AlertTriangle,
    title: 'Solución de Problemas',
    desc: 'Soporte y soluciones a los inconvenientes más comunes.',
    color: 'border-lp-grayDark hover:border-lp-black',
    badge: 'Soporte',
  },
];

const dependencies = [
  {
    num: '01',
    title: 'Dependencia genética',
    desc: 'El "pollito bebé híbrido" proviene de un oligopolio mundial (Cobb-Vantress y Aviagen) que controla la genética de todos los pollos industriales.',
  },
  {
    num: '02',
    title: 'Dependencia alimentaria',
    desc: 'La dieta requiere precursores industriales, núcleos vitamínicos y minerales, además de maíz y soja del modelo agronegocio.',
  },
  {
    num: '03',
    title: 'Dependencia tecnológica',
    desc: 'Las incubadoras comerciales son inaccesibles por su costo o están diseñadas para hobbistas, no para producción familiar.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-lp-black via-zinc-900 to-lp-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #f4b82c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f6c54f 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-lp-white">
              Proyecto LibreIncu
              <span className="block text-lp-yellow text-3xl sm:text-4xl lg:text-5xl mt-2 font-bold">
                Soberanía Tecnológica y Alimentaria
              </span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link href="/nosotros" className="btn-primary flex items-center gap-2">
                Conocé el Proyecto
              </Link>
              <Link href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
                target="_blank" rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2">
                <ExternalLink size={18} />
                Repositorios
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Intro video */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="tag mb-4 inline-block bg-lp-gray text-lp-black">Por qué hacemos esto</span>
            <h2 className="section-title text-lp-black">Desarrollo Tecnológico Comunitario</h2>
            <p className="text-lp-grayDark font-medium leading-relaxed mb-6">
              La producción avícola de la AFCI enfrenta el monopolio global en genética, alimentación e infraestructura técnica. LibreIncu es una propuesta para desarrollar soberanías tecnológicas y productivas.
            </p>
            <p className="text-lp-black leading-relaxed mb-6">
              El proyecto LibreIncu es impulsado desde{' '}
              <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-lp-yellowDark transition-colors">AlterMundi</a>{' '}
              y la{' '}
              <Link href="/cto" className="font-bold underline underline-offset-2 hover:text-lp-yellowDark transition-colors">Comunidad, Trabajo y Organización (CTO)</Link>{' '}
              para desarrollar la infraestructura tecnológica comunitaria (equipos, software y sensores como la "LibreIncu") que permita a la Agricultura Familiar, Campesina e Indígena reproducir pollitos y recuperar razas camperas de forma autosuficiente y ecológica.
            </p>
            <Link href="/nosotros" className="text-lp-yellowDark hover:text-lp-yellow font-bold flex items-center gap-1 group">
              Lee nuestro enfoque de Innovación tecnológica con impacto social y ambiental sustentable
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-4">
            <a
              href="https://www.youtube.com/watch?v=WrC1Y-ACtMo"
              target="_blank" rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border-2 border-lp-gray hover:border-lp-yellow transition-colors group"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/WrC1Y-ACtMo/maxresdefault.jpg"
                  alt="Presentación Incubadora AlterMundi"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="bg-lp-yellow text-lp-black rounded-full p-4">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-lp-black">▶ Presentación LibreIncu</p>
                <p className="text-sm text-lp-grayDark mt-1">Nuestro desarrollo ya en producción en ambientes reales</p>
              </div>
            </a>
          </div>
        </div>
      </section>



      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Tecnología</span>
            <h2 className="section-title">Características Principales</h2>
            <p className="section-subtitle">Cuatro sistemas integrados para una incubación óptima.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className={`card p-6 hover:shadow-md transition-shadow`}>
                <div className={`${feat.bg} rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                  <feat.icon className={feat.color} size={24} />
                </div>
                <h3 className="font-bold text-lp-black mb-2">{feat.title}</h3>
                <p className="text-lp-grayDark text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="py-16 px-4 bg-lp-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Navegación general</span>
            <h2 className="section-title">Recursos para la Incubación</h2>
            <p className="section-subtitle">Explorá nuestras guías, hardware y software al servicio de la soberanía alimentaria.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`card p-5 border-2 transition-all group flex flex-col ${card.color}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-lp-gray rounded-lg p-2">
                    <card.icon className="text-lp-black" size={20} />
                  </div>
                  <span className="text-xs font-medium text-lp-grayDark">{card.badge}</span>
                </div>
                <h3 className="font-bold text-lp-black mb-2">{card.title}</h3>
                <p className="text-lp-grayDark text-sm leading-relaxed flex-1">{card.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-lp-yellowDark text-sm font-bold">
                  Acceder
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
