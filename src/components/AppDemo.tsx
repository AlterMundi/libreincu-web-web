'use client';

import { useState, useEffect } from 'react';
import { Wifi, Bell, RotateCcw, Settings, BarChart2, AlertTriangle, Smartphone, Home, Layers, CheckCircle2, ChevronUp, ChevronDown, Activity } from 'lucide-react';

type Tab = 'inicio' | 'conexion' | 'config' | 'contador' | 'rotacion' | 'grafana';

export default function AppDemo() {
    const [activeTab, setActiveTab] = useState<Tab>('inicio');
    const [temperature, setTemperature] = useState(37.8);
    const [humidity, setHumidity] = useState(60.2);
    const [trays, setTrays] = useState<{ id: number, active: boolean, days: number }[]>([
        { id: 1, active: true, days: 12 },
        { id: 2, active: false, days: 0 },
        { id: 3, active: true, days: 18 }
    ]);
    const [rotating, setRotating] = useState(false);

    // Simulate small fluctuations
    useEffect(() => {
        const interval = setInterval(() => {
            setTemperature(prev => {
                const diff = (Math.random() - 0.5) * 0.2;
                return Number((prev + diff).toFixed(1));
            });
            setHumidity(prev => {
                const diff = (Math.random() - 0.5) * 0.5;
                return Number((prev + diff).toFixed(1));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const toggleTray = (id: number) => {
        setTrays(prev => prev.map(t => {
            if (t.id === id) {
                return { ...t, active: !t.active, days: !t.active ? 1 : 0 };
            }
            return t;
        }));
    };

    const simulateRotation = () => {
        setRotating(true);
        setTimeout(() => setRotating(false), 2000);
    };

    return (
        <div className="mx-auto max-w-[320px] bg-black rounded-[2.5rem] p-3 shadow-2xl relative border-[6px] border-zinc-800">
            {/* Notch indicator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>

            {/* Screen */}
            <div className="bg-slate-50 w-full h-[600px] rounded-[2rem] overflow-hidden flex flex-col relative">

                {/* Status bar */}
                <div className="bg-lp-black text-white px-5 pt-7 pb-3 flex justify-between items-center z-10">
                    <div className="font-bold text-lg flex items-center gap-2">
                        <span className="text-lp-yellow text-xl">🥚</span> LibrePollo
                    </div>
                    <div className="flex gap-3">
                        <Bell size={18} className="text-lp-gray" />
                        <AlertTriangle size={18} className="text-lp-yellow" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 bg-slate-50">

                    {activeTab === 'inicio' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="font-bold text-slate-800 mb-2">Estado en Vivo</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                                    <Wifi size={28} className="text-blue-500" />
                                    <span className="text-xs font-semibold text-slate-600">Conectado</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2">
                                    <RotateCcw size={28} className={rotating ? "text-amber-500 animate-spin" : "text-slate-400"} />
                                    <span className="text-xs font-semibold text-slate-600">{rotating ? 'Rotando...' : 'En Espera'}</span>
                                </div>
                                <div className="bg-red-50 p-4 rounded-2xl shadow-sm border border-red-100 col-span-2 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🌡️</span>
                                        <div>
                                            <p className="text-xs font-bold text-red-800 uppercase tracking-wider">Temperatura</p>
                                            <p className="text-3xl font-black text-red-600">{temperature}°<span className="text-lg">C</span></p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-2 bg-red-200 rounded-full overflow-hidden">
                                        <div className="w-full bg-red-500 bottom-0 relative transition-all duration-1000" style={{ height: `${(temperature / 40) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-2xl shadow-sm border border-blue-100 col-span-2 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">💧</span>
                                        <div>
                                            <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">Humedad</p>
                                            <p className="text-3xl font-black text-blue-600">{humidity}%</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-2 bg-blue-200 rounded-full overflow-hidden">
                                        <div className="w-full bg-blue-500 bottom-0 relative transition-all duration-1000" style={{ height: `${humidity}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'contador' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <Layers size={18} /> Bandejas (Ciclos)
                            </h2>
                            <p className="text-xs text-slate-500 mb-4">Tocá una bandeja para iniciar o detener un ciclo.</p>

                            <div className="space-y-3">
                                {trays.map(tray => (
                                    <button
                                        key={tray.id}
                                        onClick={() => toggleTray(tray.id)}
                                        className={`w-full text-left p-4 rounded-2xl border transition-all ${tray.active
                                                ? 'bg-red-50 border-red-200 shadow-sm'
                                                : 'bg-green-50 border-green-200 shadow-sm'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`font-bold ${tray.active ? 'text-red-700' : 'text-green-700'}`}>
                                                Bandeja {tray.id}
                                            </span>
                                            {tray.active ? (
                                                <span className="text-xs font-bold bg-white text-red-600 px-2 py-1 rounded-full border border-red-100 shadow-sm">
                                                    Día {tray.days}/21
                                                </span>
                                            ) : (
                                                <CheckCircle2 size={18} className="text-green-500" />
                                            )}
                                        </div>
                                        <p className={`text-xs ${tray.active ? 'text-red-500/80' : 'text-green-600/80'}`}>
                                            {tray.active ? 'Ciclo en curso. Tocá para finalizar.' : 'Libre. Tocá para iniciar ciclo.'}
                                        </p>

                                        {tray.active && (
                                            <div className="mt-3 h-1.5 w-full bg-red-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-400" style={{ width: `${(tray.days / 21) * 100}%` }}></div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'rotacion' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
                            <h2 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <RotateCcw size={18} /> Control Manual
                            </h2>
                            <p className="text-xs text-slate-500 mb-6">Ajustá la posición de las bandejas para carga, descarga o limpieza.</p>

                            <div className="flex-1 flex flex-col items-center justify-center gap-6">
                                <button
                                    onClick={simulateRotation}
                                    disabled={rotating}
                                    className="w-32 h-32 rounded-full bg-white border-2 border-slate-200 shadow-lg flex flex-col items-center justify-center gap-2 text-slate-600 hover:border-amber-400 hover:text-amber-500 transition-colors active:scale-95 disabled:opacity-50"
                                >
                                    <ChevronUp size={40} />
                                    <span className="text-xs font-bold">ARRIBA</span>
                                </button>

                                <button
                                    onClick={simulateRotation}
                                    disabled={rotating}
                                    className="w-32 h-32 rounded-full bg-white border-2 border-slate-200 shadow-lg flex flex-col items-center justify-center gap-2 text-slate-600 hover:border-amber-400 hover:text-amber-500 transition-colors active:scale-95 disabled:opacity-50"
                                >
                                    <span className="text-xs font-bold">ABAJO</span>
                                    <ChevronDown size={40} />
                                </button>
                            </div>

                            {rotating && (
                                <div className="text-center text-amber-600 text-sm font-bold animate-pulse">
                                    Movimiento en progreso...
                                </div>
                            )}
                        </div>
                    )}

                    {(activeTab === 'conexion' || activeTab === 'config' || activeTab === 'grafana') && (
                        <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 animate-in fade-in duration-500">
                            {activeTab === 'conexion' && <Wifi size={48} className="opacity-20" />}
                            {activeTab === 'config' && <Settings size={48} className="opacity-20" />}
                            {activeTab === 'grafana' && <BarChart2 size={48} className="opacity-20" />}
                            <p className="text-sm font-medium text-center px-6">
                                Esta sección está disponible en la app real.
                            </p>
                        </div>
                    )}

                </div>

                {/* Bottom Navigation */}
                <div className="bg-white border-t border-slate-200 px-2 py-3 pb-6 flex justify-between z-10 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
                    <NavItem icon={Home} label="Inicio" active={activeTab === 'inicio'} onClick={() => setActiveTab('inicio')} />
                    <NavItem icon={Wifi} label="WiFi" active={activeTab === 'conexion'} onClick={() => setActiveTab('conexion')} />
                    <NavItem icon={Settings} label="Config" active={activeTab === 'config'} onClick={() => setActiveTab('config')} />
                    <NavItem icon={Layers} label="Ciclos" active={activeTab === 'contador'} onClick={() => setActiveTab('contador')} />
                    <NavItem icon={RotateCcw} label="Rotar" active={activeTab === 'rotacion'} onClick={() => setActiveTab('rotacion')} />
                    <NavItem icon={Activity} label="Datos" active={activeTab === 'grafana'} onClick={() => setActiveTab('grafana')} />
                </div>
            </div>
        </div>
    );
}

function NavItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-1 w-12 transition-colors ${active ? 'text-lp-yellowDark font-bold' : 'text-slate-400 hover:text-slate-600'}`}
        >
            <Icon size={20} className={active ? "scale-110 transition-transform" : ""} />
            <span className="text-[9px] uppercase tracking-wider">{label}</span>
        </button>
    );
}
