import type { Metadata } from 'next';
import AppDemo from '@/components/AppDemo';
import { Wifi, Bell, RotateCcw, Settings, BarChart2, AlertTriangle, CheckCircle, Smartphone, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App LibrePollo – Manual y Demo',
  description: 'Manual completo interactivo de la aplicación Android LibrePollo para control remoto.',
};

const troubleshootingItems = [
  {
    title: '"Verifique conexión con incubadora"',
    icon: Wifi,
    steps: [
      'Verificá que la incubadora esté encendida.',
      'Asegurate de estar conectado a la Red WiFi de tu incubadora.',
      'Presioná "Reintentar".',
      'Si el problema persiste, revisá la configuración WiFi.',
    ],
  },
  {
    title: 'Problemas de Rotación',
    icon: RotateCcw,
    steps: [
      'Verificá que no haya obstáculos físicos.',
      'Usá los controles manuales de rotación en la app para probar el sistema.',
      'Revisá la posición de la bandeja y los sensores Reed.',
    ],
  },
  {
    title: 'Alertas de Temperatura o Humedad',
    icon: AlertTriangle,
    steps: [
      'Verificá que los rangos configurados sean correctos.',
      'Asegurate de que el sensor interno BME280 no se encuentre obstruido.',
      'Comprobá el funcionamiento del sistema de ventilación.',
    ],
  },
];

export default function AplicacionPage() {
  return (
    <div className="min-h-screen bg-lp-white">
      {/* Hero with Demo */}
      <section className="bg-lp-black text-lp-white py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <Smartphone size={400} />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="tag bg-lp-gray text-lp-black mb-4 inline-block">Android App</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">Controlá tu LibreIncu</h1>
            <p className="text-xl text-lp-gray leading-relaxed mb-8">
              La aplicación LibrePollo te permite monitorear y gestionar el proceso de incubación desde tu celular, incluso sin internet (vía red mesh local).
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Download size={20} /> Descargar APK
              </a>
              <a
                href="#manual"
                className="btn-secondary flex items-center gap-2"
              >
                Ver Manual
              </a>
            </div>

            <p className="text-sm text-lp-grayDark flex items-center gap-2">
              <CheckCircle size={16} className="text-lp-yellow" />
              Probá la versión interactiva a la derecha
              <span className="hidden lg:inline">→</span>
              <span className="lg:hidden">↓</span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-lp-yellow/20 blur-[100px] rounded-full scale-75 z-0"></div>
            <div className="relative z-10">
              <AppDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Manual Content */}
      <div id="manual" className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-20">

        {/* First Steps */}
        <section>
          <div className="text-center mb-12">
            <h2 className="section-title">Primeros Pasos</h2>
            <p className="section-subtitle">Instalación y conexión inicial con tu equipo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8 border-2 border-lp-gray bg-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-lp-black">
                <Smartphone size={20} className="text-lp-yellowDark" />
                Instalación
              </h3>
              <ul className="space-y-3 text-sm text-lp-grayDark">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-lp-yellow shrink-0 mt-0.5" />
                  La aplicación se instala a través del archivo APK descargable desde nuestro repositorio.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-lp-yellow shrink-0 mt-0.5" />
                  Android pedirá permisos para "Instalar aplicaciones desconocidas". Debés aceptarlo.
                </li>
              </ul>
            </div>

            <div className="card p-8 border-2 border-lp-gray bg-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-lp-black">
                <Wifi size={20} className="text-lp-yellowDark" />
                Conexión AP (Local)
              </h3>
              <ol className="space-y-3">
                {[
                  'Encendé la LibreIncu.',
                  'Buscá en tu celular la red WiFi "incu-XX" (cada equipo tiene una única).',
                  'Conectate usando la clave: 12345678.',
                  'Abrí la App LibrePollo para monitorear localmente.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-lp-grayDark">
                    <span className="bg-lp-black text-lp-yellow rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Features Guide */}
        <section>
          <div className="text-center mb-12">
            <h2 className="section-title">Guía de Funciones</h2>
            <p className="section-subtitle">Lo que podés controlar desde la aplicación.</p>
          </div>

          <div className="space-y-6">
            <div className="card p-8 bg-lp-gray border-2 border-transparent">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-lp-white p-4 rounded-2xl shrink-0">
                  <Settings size={32} className="text-lp-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-lp-black">Configuraciones Generales</h3>
                  <p className="text-lp-grayDark text-sm leading-relaxed mb-4">
                    La pestaña de Configuración te permite ajustar los valores límite de trabajo del control PID: temperaturas mínimas y máximas, y la ventana de humedad ideal. Estos registros quedan guardados en la memoria del microcontrolador.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-lp-white p-3 rounded-lg border border-lp-grayDark/20">
                      <span className="block text-xs font-bold text-lp-black mb-1">Días de Ciclo</span>
                      <span className="text-sm text-lp-grayDark">Por defecto: 21 días (Gallinas)</span>
                    </div>
                    <div className="bg-lp-white p-3 rounded-lg border border-lp-grayDark/20">
                      <span className="block text-xs font-bold text-lp-black mb-1">Intervalo Rotación</span>
                      <span className="text-sm text-lp-grayDark">Sugerido: cada 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-lp-black text-lp-white border-2 border-transparent">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-zinc-800 p-4 rounded-2xl shrink-0">
                  <Bell size={32} className="text-lp-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-lp-yellow">Sistema de Notificaciones (NTFY)</h3>
                  <p className="text-lp-gray text-sm leading-relaxed mb-4">
                    La aplicación puede enviarte alertas push a través de internet en caso de cortes de luz o fuera de rangos de temperatura. Para esto es necesario instalar la herramienta de software libre NTFY en tu dispositivo.
                  </p>
                  <ol className="space-y-2 mt-4">
                    {[
                      'Conectá tu LibreIncu a la red WiFi de tu casa/internet.',
                      'Instalá "NTFY" desde Google Play.',
                      'En LibrePollo, abrí la campana en la barra superior para seguir la guía en pantalla.',
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-lp-gray">
                        <span className="bg-lp-yellow text-lp-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="card p-8 border-2 border-lp-gray bg-white">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-lp-gray p-4 rounded-2xl shrink-0">
                  <BarChart2 size={32} className="text-lp-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-lp-black">Datos y Grafana</h3>
                  <p className="text-lp-grayDark text-sm leading-relaxed">
                    Si tu equipo está conectado a internet, la LibreIncu enviará parámetros telemétricos a los servidores de la comunidad AlterMundi. Podés visualizar históricos de temperatura y funcionamiento del PID a través de nuestros tableros compartidos, accesibles desde el botón "Grafana" de la aplicación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <div className="text-center mb-12">
            <h2 className="section-title">Troubleshooting y Ayuda</h2>
            <p className="section-subtitle">Soluciones a los problemas más comunes de operación.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {troubleshootingItems.map((item, i) => (
              <div key={i} className="card border-2 border-lp-gray hover:border-lp-black transition-all bg-white flex flex-col">
                <div className="bg-lp-gray p-4 flex items-center gap-3 border-b-2 border-lp-gray">
                  <item.icon size={20} className="text-lp-yellowDark" />
                  <h3 className="font-bold text-lp-black text-sm">{item.title}</h3>
                </div>
                <div className="p-6 flex-1">
                  <ol className="space-y-3">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex gap-3 text-sm text-lp-grayDark">
                        <span className="bg-lp-gray text-lp-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {j + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
