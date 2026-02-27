import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import {
  ThermometerSun, Droplets, RotateCcw, Cpu,
  MapPin, Power, PenTool, AlertTriangle,
  ShieldAlert, Lightbulb, CheckCircle2, Wifi, Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manual de Usuario - LibreIncu',
  description: 'Manual de usuario de la Incubadora LibreIncu. Innovación tecnológica y productiva en la cadena avícola.',
};

export default function ManualUsuarioPage() {
  return (
    <>
      <PageHeader
        title="Manual de Usuario - Incubadora LibreIncu"
        subtitle="Innovación tecnológica y productiva en la cadena avícola para la agricultura familiar, campesina e indígena."
        emoji="📖"
        badge="Documentación"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Introduction */}
        <section>
          <div className="card p-8 bg-green-50 border-2 border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Lightbulb className="text-green-600" />
              Introducción
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>LibreIncu</strong> es una incubadora de huevos desarrollada por{' '}
              <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-green-600 transition-colors">AlterMundi</a>{' '}
              y{' '}
              <Link href="/cto" className="font-bold underline underline-offset-2 hover:text-green-600 transition-colors">CTO</Link>.
              Este proyecto integra tecnología de monitoreo y control para optimizar la incubación avícola.
            </p>
          </div>
        </section>

        {/* Componentes Principales */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">
            Componentes Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Sistema de Humidificación */}
            <div className="card p-6 border-t-4 border-blue-500">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-blue-800">
                <Droplets className="text-blue-500" />
                1. Sistema de Humidificación
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-gray-900">Recipiente de Agua:</strong> Se alimenta de la red doméstica y tiene un flotante para mantener el nivel de agua que la bomba necesita. Es necesario asegurar la correcta posición del reservorio, la bomba y el flotante, además de una conexión de agua segura y sin perdidas, similar a la de un lavarropas (canilla abierta).
                </li>
                <li>
                  <strong className="text-gray-900">Humidificador por microaspersión:</strong> Dentro de la incubadora un microaspersor genera microgotas que en relación con la bandeja y el calor de la resistencia, mantiene el ambiente húmedo.
                </li>
              </ul>
            </div>

            {/* Sistema de Control de Temperatura */}
            <div className="card p-6 border-t-4 border-red-500">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-red-800">
                <ThermometerSun className="text-red-500" />
                2. Sistema de Control de Temperatura
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-gray-900">Sensor BME280:</strong> Mide temperatura, humedad y presión con mucha precisión (±0.5°C). Estos datos son los que visualizamos en la app y en grafana.
                </li>
                <li>
                  <strong className="text-gray-900">Resistencia Calefactora:</strong> Está fijada bajo la bandeja de humedad. Tiene aprox ~200W, se prende y apaga para lograr el promedio de temperatura que indicamos en la app. De fábrica está calibrado para huevos de pollo: 37,8º.
                </li>
                <li>
                  <strong className="text-gray-900">Ventilador:</strong> Asegura que el calor se distribuya de manera pareja en toda la cámara y fuerza la entrada de aire con oxígeno para el desarrollo de los pollitos.
                </li>
              </ul>
            </div>

            {/* Sistema de Rotación */}
            <div className="card p-6 border-t-4 border-amber-500">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-amber-800">
                <RotateCcw className="text-amber-500" />
                3. Sistema de Rotación
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-gray-900">Motor de Rotación:</strong> Se encuentra en la parte superior y hace subir por fuerza a través de una cinta que se une a las bandejas. Baja soltando la cinta por un contrapeso de plomo ubicado debajo de la última bandeja.
                </li>
                <li>
                  <strong className="text-gray-900">Sensores Reed:</strong> Informan al controlador cuando las bandejas de rotación se aproximan al punto máximo superior e inferior.
                </li>
                <li>
                  <strong className="text-gray-900">Bandeja Porta Huevos:</strong> Es desmontable para facilitar su limpieza.
                </li>
              </ul>
            </div>

            {/* Sistema de Control */}
            <div className="card p-6 border-t-4 border-purple-500">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-purple-800">
                <Cpu className="text-purple-500" />
                4. Sistema de Control
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong className="text-gray-900">Placa de Control:</strong> Posee un circuito impulsado por un microcontrolador ESP32-s donde se conectan los componentes como motores y resistencia.
                </li>
                <li>
                  <strong className="text-gray-900">App LibreIncu:</strong> A través de la App los usuarios pueden acceder en cualquier momento al estado de la incubadora. Ya sea para conocer la temperatura o el nivel de humedad actual, para modificar estos valores y monitorearlos históricamente. Cuenta con notificaciones y gestión detallada de cada ciclo.
                </li>
              </ul>
            </div>

          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Cómo empezar a usar la incubadora */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Cómo empezar a usar la incubadora
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800">
                <MapPin className="text-gray-600" /> Ubicación
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0 w-5 h-5" /> Lugar ventilado pero sin corrientes de aire</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0 w-5 h-5" /> Con acceso a conexión de agua</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0 w-5 h-5" /> Cerca de un tomacorriente</li>
                <li className="flex gap-2"><CheckCircle2 className="text-green-500 shrink-0 w-5 h-5" /> En lo posible con señal WiFi y al alcance del celular</li>
              </ul>
            </div>

            <div className="card p-6 bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800">
                <Power className="text-green-600" /> Primer encendido
              </h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-gray-400">1.</span>
                  Conectá y encendé la incubadora.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-gray-400">2.</span>
                  Esperá que aparezca la red WiFi <code className="bg-gray-200 px-1 rounded text-gray-800 text-sm">incu-</code> (con su número único).
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-gray-400">3.</span>
                  Conectate desde tu celular con la contraseña: <strong>12345678</strong>.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-gray-400">4.</span>
                  Configurá los parámetros básicos en la app.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Mantenimiento Básico & Apagado */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200 flex items-center gap-2">
              <PenTool className="text-gray-600" /> Mantenimiento Básico
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Limpieza Regular</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Limpiá el interior después de cada ciclo.</li>
                  <li>Mantené el recipiente de agua limpio y conectado a la red.</li>
                  <li>Revisá que las bandejas estén siempre limpias.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Verificaciones Periódicas</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Nivel de agua en el recipiente.</li>
                  <li>Funcionamiento de la rotación.</li>
                  <li>Lecturas de temperatura y humedad.</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900 text-sm">
                <strong>Mantenimiento del humidificador:</strong> Desenroscá el pico de aspersión con cuidado, limpiá con suavidad la boquilla para retirar suciedades.
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200 flex items-center gap-2">
              <ShieldAlert className="text-gray-600" /> Apagado y Precauciones
            </h2>
            <div className="space-y-6">
              <div className="card p-5 border-l-4 border-gray-400 bg-gray-50">
                <h3 className="font-bold text-gray-800 mb-2">Apagado</h3>
                <p className="text-gray-700 text-sm">
                  Cuando apagues la incubadora asegurate de vaciar el circuito de agua y lubricar la bomba para preservarla del óxido.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={20} />
                  Precauciones importantes
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2 items-start"><span className="text-red-500">⚠️</span> Tratá de no abrirla mientras está funcionando si no es para algún mantenimiento.</li>
                  <li className="flex gap-2 items-start"><span className="text-red-500">⚠️</span> Mantené conexiones de agua sin pérdidas y el reservorio limpio.</li>
                  <li className="flex gap-2 items-start"><span className="text-red-500">⚠️</span> Protegé la incubadora de temperaturas extremas.</li>
                  <li className="flex gap-2 items-start"><span className="text-red-500">⚠️</span> No tapes las ventilaciones.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Solución de Problemas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Solución de Problemas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-5 border border-red-200 bg-white">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <ThermometerSun size={18} className="text-red-500" />
                La temperatura no sube
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>Verificá que la resistencia esté funcionando.</li>
                <li>Revisá las conexiones.</li>
                <li>Controlá que el ventilador distribuya el aire.</li>
              </ul>
            </div>

            <div className="card p-5 border border-blue-200 bg-white">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Droplets size={18} className="text-blue-500" />
                La humedad está baja
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>Revisá el nivel de agua en el reservorio.</li>
                <li>Verificá que la bomba funcione.</li>
                <li>Controlá que no haya suciedad en el pico microaspersor.</li>
              </ul>
            </div>

            <div className="card p-5 border border-amber-200 bg-white">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <RotateCcw size={18} className="text-amber-500" />
                La rotación no funciona
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>Revisá la posición de la bandeja y los sensores Reed.</li>
                <li>Verificá las conexiones del motor.</li>
                <li>Controlá que las partes (cinta, polea y motor) estén bien asociadas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recordá Siempre */}
        <section>
          <div className="bg-lp-black text-lp-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-6 text-lp-yellow flex items-center justify-center gap-2">
              <Lightbulb className="text-lp-yellow" />
              Recordá Siempre
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              <div className="bg-zinc-800/50 p-4 rounded-xl">
                <p className="text-sm">La paciencia es clave en la incubación.</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-xl">
                <p className="text-sm">Leé con cuidado las Buenas Prácticas de manejo de huevos fértiles.</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-xl">
                <p className="text-sm">La constancia en el control hace la diferencia.</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-xl">
                <p className="text-sm">Estás participando en un proyecto de tecnología libre y soberana.</p>
              </div>
            </div>

            <p className="mt-8 text-2xl font-black text-white flex items-center justify-center gap-3">
              ¡A incubar se ha dicho! 💚 🐣
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
