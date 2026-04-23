import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Radio, Server, Smartphone, Database, Globe, Cpu, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ecosistema LibreAgro para la Agricultura Familiar',
  description: 'Arquitectura IoT para zonas rurales con LoRa, Libremesh y MeshStatic para economía social y producción sustentable.',
};

const components = [
  {
    number: '1a',
    title: 'Nodo IoT – MeshStatic',
    icon: Radio,
    desc: 'Nodo sensor/actuador con tecnología MeshStatic para zonas rurales con vegetación densa. Bajo consumo y largo alcance.',
  },
  {
    number: '1b',
    title: 'Nodo IoT – ESP32 Now',
    icon: Cpu,
    desc: 'Sensor Node basado en ESP32 con protocolo ESP-NOW para comunicación directa entre nodos sin infraestructura.',
  },
  {
    number: '2',
    title: 'Gateway Rural',
    icon: Network,
    desc: 'LibreRouter + LoRa USB o MESHSTICK. Punto de enlace que conecta los nodos rurales con internet comunitario.',
  },
  {
    number: '3',
    title: 'Broker MQTT en la Nube',
    icon: Server,
    desc: 'Servidor MQTT para la recepción, almacenamiento y distribución de datos de los nodos IoT.',
  },
  {
    number: '4',
    title: 'Cliente de Datos + Visualización',
    icon: Smartphone,
    desc: 'Aplicación Android para visualización en tiempo real e historial de datos. App LibreIncu para la incubadora.',
  },
  {
    number: '5',
    title: 'Odoo',
    icon: Database,
    desc: 'Plataforma ERP libre para la gestión integral de la producción y la economía social de las comunidades.',
  },
];

const principles = [
  {
    title: 'Necesidades Reales',
    desc: 'Diseñado a partir de las necesidades reales, explicitadas en 1ª persona por los protagonistas de la Economía Social.',
    icon: '🎯',
  },
  {
    title: 'Modularidad',
    desc: 'Núcleo común de HW o SW al cual se agregan complementos, capas o funcionalidades de manera modular según la producción.',
    icon: '🧩',
  },
  {
    title: 'Apropiación Tecnológica',
    desc: 'La modularidad facilita la adaptación a diferentes realidades productivas y promueve la apropiación por parte de trabajadores y productores.',
    icon: '✊',
  },
  {
    title: 'Integración Sistémica',
    desc: 'Los subsistemas se integran en un sistema mayor que acompaña al sujeto de la economía y la producción social.',
    icon: '🔗',
  },
];

export default function EcosistemaPage() {
  return (
    <>
      <PageHeader
        title="Ecosistema LibreAgro para la Agricultura Familiar"
        subtitle="Arquitectura IoT para zonas rurales con Libremesh, MeshStatic y LoRa. Tecnología integrada para la Economía Social y la Producción Sustentable."
        emoji="🌐"
        badge="Infraestructura & IoT"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Main concept */}
        <section className="card p-6 border-l-4 border-l-lp-yellow">
          <div className="flex items-start gap-3 mb-4">
            <Globe className="text-lp-yellowDark shrink-0 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-bold text-lp-black mb-2">
                ¿Qué es LibreAgro? Un Ecosistema Tecnológico para Economía Social
              </h2>
              <p className="text-lp-grayDark leading-relaxed">
                Es un conjunto integrado de subsistemas, cada uno enfocado en producciones específicas, que incluye
                innovaciones tecnológicas adaptadas a las necesidades locales, caracterización productiva de los
                procesos, curaduría de materiales bibliográficos, definición de requerimientos físicos y estructurales,
                e interfaces de usuario amigables y accesibles.
              </p>
            </div>
          </div>
          <p className="text-lp-grayDark leading-relaxed mt-4 ml-9">
            Cada subsistema se construye a partir de un núcleo común de Hardware o Software, al cual se van
            anexando, de manera modular, una diversidad de complementos acordes a las necesidades específicas
            de cada producción o contexto.
          </p>
        </section>

        {/* Status banner */}
        <div className="bg-lp-yellow/10 border-2 border-lp-yellow/40 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-2xl shrink-0">🚧</span>
          <div>
            <p className="font-bold text-lp-black">En desarrollo activo</p>
            <p className="text-lp-grayDark text-sm mt-1">
              Estamos trabajando en una arquitectura IoT para Zonas Rurales con Libremesh y MeshStatic (LoRa).
              El ecosistema se expande continuamente junto con las comunidades participantes.
            </p>
          </div>
        </div>

        {/* Objective */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-4 pb-2 border-b-2 border-lp-gray">
            Objetivo
          </h2>
          <div className="card p-6 bg-lp-gray">
            <p className="text-lp-grayDark leading-relaxed">
              Diseñar una arquitectura de hardware y software para redes de sensores IoT en zonas rurales con
              vegetación densa, utilizando tecnologías de <strong className="text-lp-black">bajo consumo y largo alcance como LoRa</strong>,
              y conectividad comunitaria basada en <strong className="text-lp-black">Libremesh y LibreRouter</strong>.
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Ventajas del Ecosistema LibreAgro
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: '🧩',
                title: 'Modularidad',
                desc: 'Construimos y ensamblamos un sistema a partir de un núcleo común de hardware y software libre.',
              },
              {
                icon: '🎯',
                title: 'Tecnología Apropiada',
                desc: 'Diseñamos soluciones tecnológicas pertinentes a las condiciones reales de cada producción y territorio.',
              },
              {
                icon: '✊',
                title: 'Adaptabilidad',
                desc: 'Permite adaptar fácilmente el ecosistema a distintas realidades productivas, fortaleciendo la apropiación tecnológica de las comunidades.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-lp-black text-lp-white rounded-2xl p-6 flex flex-col gap-3 border-2 border-lp-yellow/20">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-black text-lp-yellow uppercase tracking-wide text-sm">{item.title}</h3>
                <p className="text-lp-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Principios del Ecosistema
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="card p-5 border-2 border-lp-gray">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-bold text-lp-black">{p.title}</h3>
                </div>
                <p className="text-lp-grayDark text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Componentes Principales
          </h2>
          <div className="space-y-3">
            {components.map((comp) => (
              <div key={comp.number} className="card border-2 border-lp-gray overflow-hidden">
                <div className="bg-lp-gray p-4 flex items-center gap-3">
                  <span className="text-xs font-black text-lp-white bg-lp-black rounded-full w-7 h-7 flex items-center justify-center border border-lp-yellow/30">
                    {comp.number}
                  </span>
                  <comp.icon className="text-lp-yellowDark" size={20} />
                  <h3 className="font-bold text-lp-black">{comp.title}</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-lp-grayDark text-sm leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture diagram */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Diagrama General
          </h2>
          <div className="card p-6 bg-lp-black border-2 border-lp-yellow/20">
            <div className="rounded-xl p-6 text-center">
              <div className="font-mono text-xs sm:text-sm space-y-2 text-left inline-block">
                <div className="flex items-center gap-2">
                  <div className="bg-lp-yellow/20 border border-lp-yellow/50 rounded px-3 py-1.5 text-lp-yellow font-semibold">
                    Nodos IoT (ESP32/LoRa)
                  </div>
                  <span className="text-lp-gray">──────→</span>
                  <div className="bg-lp-white/10 border border-lp-white/20 rounded px-3 py-1.5 text-lp-white font-semibold">
                    Gateway Rural (LibreRouter)
                  </div>
                </div>
                <div className="ml-12 text-lp-grayDark">↓</div>
                <div className="flex items-center gap-2 ml-0">
                  <div className="invisible bg-lp-yellow/20 border border-lp-yellow/50 rounded px-3 py-1.5 text-lp-yellow font-semibold">
                    Nodos IoT placeholder
                  </div>
                  <span className="invisible">──────→</span>
                  <div className="bg-lp-gray/20 border border-lp-gray/40 rounded px-3 py-1.5 text-lp-gray font-semibold">
                    Broker MQTT (Internet)
                  </div>
                </div>
                <div className="ml-[calc(50%+3rem)] text-lp-grayDark">↓</div>
                <div className="flex items-center justify-end gap-3">
                  <div className="bg-lp-yellow/10 border border-lp-yellow/30 rounded px-3 py-1.5 text-lp-yellow font-semibold text-xs sm:text-sm">
                    App Android
                  </div>
                  <div className="bg-lp-yellow/10 border border-lp-yellow/30 rounded px-3 py-1.5 text-lp-yellow font-semibold text-xs sm:text-sm">
                    Grafana
                  </div>
                  <div className="bg-lp-yellow/10 border border-lp-yellow/30 rounded px-3 py-1.5 text-lp-yellow font-semibold text-xs sm:text-sm">
                    Odoo
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-lp-grayDark text-center mt-3">
              Arquitectura simplificada del Ecosistema IoT para zonas rurales
            </p>
          </div>
        </section>

        {/* Participatory Research */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Investigación Participativa en Territorio
          </h2>
          <div className="card overflow-hidden border-2 border-lp-yellow/30">
            <div className="bg-lp-black px-6 py-4 border-b-2 border-lp-yellow">
              <p className="text-lp-yellow font-bold text-sm tracking-wide uppercase">
                Cómo construimos conocimiento junto a las comunidades
              </p>
            </div>
            <ul className="divide-y divide-lp-gray">
              {[
                { icon: '👂', text: 'Escuchar a productores' },
                { icon: '📋', text: 'Relevar prácticas, necesidades y saberes' },
                { icon: '📚', text: 'Revisar experiencias previas y bibliografía técnica' },
                { icon: '🌾', text: 'Visitas a campo: datos reales, no supuestos' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 px-6 py-4 bg-white hover:bg-lp-gray/30 transition-colors">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <span className="text-lp-black font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'LoRa', 'ESP32', 'ESP-NOW', 'MQTT', 'Libremesh', 'LibreRouter',
              'MeshStatic', 'Grafana', 'Odoo', 'Android', 'Software Libre',
            ].map((tech) => (
              <span key={tech} className="tag text-sm px-4 py-1.5">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* GitHub link */}
        <div className="card p-6 bg-lp-black text-lp-white text-center border-2 border-lp-yellow/20">
          <h3 className="font-bold text-lg mb-2 text-lp-white">Código fuente disponible</h3>
          <p className="text-lp-gray text-sm mb-4">
            Todo el desarrollo es abierto y está disponible en GitHub.
          </p>
          <a
            href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lp-yellow text-lp-black px-6 py-3 rounded-xl font-bold hover:bg-lp-yellowDark transition-colors"
          >
            Ver en GitHub
          </a>
        </div>

      </div>
    </>
  );
}
