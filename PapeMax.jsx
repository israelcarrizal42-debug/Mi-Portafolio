import { useState, useEffect } from "react";
import {
  Star, Phone, MapPin, Clock, Copy, Printer,
  BookOpen, Briefcase, Layers, Gift, ChevronRight,
  Sun, Moon, Menu, X, ExternalLink
} from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Del+Gelsemio+161+A+Flores+del+Aguaje+78398+San+Luis+Potosi";

const PHONE = "4443348842";
const PHONE_DISPLAY = "444 334 8842";

const services = [
  {
    icon: Printer,
    title: "Copias e Impresiones",
    desc: "Impresiones en blanco y negro o color, documentos y fotografías.",
    color: "bg-cyan-400",
    text: "text-cyan-900",
    ring: "ring-cyan-300",
  },
  {
    icon: BookOpen,
    title: "Útiles Escolares",
    desc: "Todo lo que necesitas para el regreso a clases y proyectos.",
    color: "bg-amber-400",
    text: "text-amber-900",
    ring: "ring-amber-300",
  },
  {
    icon: Briefcase,
    title: "Artículos de Oficina",
    desc: "Materiales de papelería y suministros para tu espacio de trabajo.",
    color: "bg-violet-400",
    text: "text-violet-900",
    ring: "ring-violet-300",
  },
  {
    icon: Layers,
    title: "Enmicados",
    desc: "Protege tus documentos con acabados de alta calidad.",
    color: "bg-rose-400",
    text: "text-rose-900",
    ring: "ring-rose-300",
  },
  {
    icon: Gift,
    title: "Regalos",
    desc: "Encuentra el detalle perfecto para cada ocasión especial.",
    color: "bg-emerald-400",
    text: "text-emerald-900",
    ring: "ring-emerald-300",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function Dot({ color }) {
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${color} shrink-0`}
    />
  );
}

function HoursCard({ label, hours, dotColor, icon: Icon }) {
  return (
    <div className="flex flex-col gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/80 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm">
          <Icon size={18} className="text-slate-600" />
        </div>
        <div className="flex items-center gap-2">
          <Dot color={dotColor} />
          <span className="font-bold text-slate-800 text-sm">{label}</span>
        </div>
      </div>
      <p className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
        {hours}
      </p>
    </div>
  );
}

export default function PapeMax() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(PHONE_DISPLAY).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Servicios", id: "servicios" },
    { label: "Horarios", id: "horarios" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
        .font-display { font-family: 'Fredoka One', cursive; }
        body { font-family: 'Nunito', sans-serif; }
        .pattern-dots {
          background-image: radial-gradient(circle, #06b6d440 1.5px, transparent 1.5px);
          background-size: 22px 22px;
        }
        .pattern-grid {
          background-image: linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50%       { transform: translateY(-8px) rotate(-3deg); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .animate-float  { animation: float 5s ease-in-out infinite; }
        .animate-float2 { animation: float2 6s ease-in-out infinite; }
        .animate-fadeup { animation: fadeUp 0.7s ease both; }
        .anim-d1 { animation-delay: 0.1s; }
        .anim-d2 { animation-delay: 0.25s; }
        .anim-d3 { animation-delay: 0.4s; }
        .anim-d4 { animation-delay: 0.55s; }
      `}</style>

      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-display text-2xl text-cyan-600 select-none tracking-wide">
            Pape<span className="text-amber-500">Max</span>
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <Phone size={14} /> Llamar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 flex flex-col gap-3 shadow-lg">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-sm font-bold text-slate-700 py-2 border-b border-slate-100 last:border-none"
              >
                {l.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-cyan-500 text-white font-bold py-2.5 rounded-full text-sm"
            >
              <Phone size={14} /> Llamar ahora
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-500 via-cyan-400 to-teal-500 pt-16">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-40" />

        {/* Decorative blobs */}
        <div className="absolute top-16 right-0 w-72 h-72 bg-amber-400 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300 rounded-full opacity-30 blur-3xl" />

        {/* Floating shapes */}
        <div className="hidden lg:block absolute top-24 right-12 animate-float">
          <div className="w-24 h-24 bg-amber-400 rounded-3xl rotate-12 shadow-xl opacity-90" />
        </div>
        <div className="hidden lg:block absolute bottom-28 right-36 animate-float2">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-6 shadow-lg opacity-70" />
        </div>
        <div className="hidden lg:block absolute top-40 right-64 animate-float">
          <div className="w-8 h-8 bg-violet-400 rounded-xl -rotate-12 shadow opacity-80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="animate-fadeup anim-d1 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-4 py-1.5 self-start">
              <StarRating />
              <span className="text-white font-bold text-sm">5.0 — Calificación perfecta</span>
            </div>

            {/* Title */}
            <h1 className="animate-fadeup anim-d2 font-display text-7xl sm:text-8xl text-white leading-none tracking-wide drop-shadow-md">
              Pape<span className="text-amber-300">Max</span>
            </h1>

            {/* Tagline */}
            <p className="animate-fadeup anim-d3 text-xl text-white/90 font-semibold max-w-md leading-relaxed">
              Tu papelería de confianza en San Luis Potosí. Copias, útiles, regalos y mucho más — ¡todo en un solo lugar!
            </p>

            {/* CTA buttons */}
            <div className="animate-fadeup anim-d4 flex flex-wrap gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-cyan-700 font-black px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
              >
                <MapPin size={16} className="text-cyan-500" />
                Ver Ubicación
                <ExternalLink size={13} className="opacity-60" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-black px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
              >
                <Phone size={16} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right: info card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-8 flex flex-col gap-5 shadow-2xl w-80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow">
                  <MapPin size={22} className="text-amber-900" />
                </div>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Dirección</p>
                  <p className="text-white font-bold text-sm leading-snug">
                    Del Gelsemio 161 A, Flores del Aguaje
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-violet-400 rounded-2xl flex items-center justify-center shadow">
                  <Phone size={22} className="text-violet-900" />
                </div>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Teléfono</p>
                  <p className="text-white font-bold">{PHONE_DISPLAY}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center shadow">
                  <Clock size={22} className="text-emerald-900" />
                </div>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Hoy</p>
                  <p className="text-white font-bold">8:00 AM – 9:00 PM</p>
                </div>
              </div>
              <div className="pt-2 border-t border-white/25 flex items-center gap-2">
                <StarRating />
                <span className="text-white font-bold text-sm">5.0 estrellas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-slate-50">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-100 text-cyan-700 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="font-display text-5xl text-slate-900 mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-slate-500 font-semibold max-w-lg mx-auto">
            Contamos con todo lo que necesitas para la escuela, la oficina y más.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Colored accent corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${s.color} opacity-10 rounded-bl-full`} />

                <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center mb-4 shadow-sm ring-4 ${s.ring} ring-opacity-30 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={s.text} />
                </div>

                <h3 className="font-black text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">{s.desc}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 ${s.color} opacity-60 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`} />
              </div>
            );
          })}

          {/* Extra card: "y más" */}
          <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl p-6 border border-cyan-400 shadow-sm flex flex-col justify-between text-white sm:col-span-2 lg:col-span-1">
            <div>
              <span className="text-cyan-200 text-xs font-black uppercase tracking-widest">¿No encuentras?</span>
              <h3 className="font-display text-3xl mt-2 mb-3 leading-tight">
                ¡Visítanos y pregunta!
              </h3>
              <p className="text-cyan-100 text-sm font-semibold leading-relaxed">
                Nuestro equipo estará feliz de ayudarte a encontrar lo que necesitas.
              </p>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="mt-6 inline-flex items-center gap-2 bg-white text-cyan-700 font-black text-sm px-5 py-3 rounded-xl hover:bg-amber-400 hover:text-amber-900 transition-colors self-start"
            >
              <Phone size={14} /> Llámanos
            </a>
          </div>
        </div>
      </section>

      {/* ── HOURS ── */}
      <section id="horarios" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-slate-50 to-violet-50">
        <div className="absolute inset-0 pattern-grid opacity-60" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-violet-100 text-violet-700 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Cuándo visitarnos
            </span>
            <h2 className="font-display text-5xl text-slate-900 mb-3">
              Horario de Atención
            </h2>
            <p className="text-slate-500 font-semibold">
              Abiertos para ti toda la semana con horarios amplios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Weekdays */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-white shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center shadow">
                  <Sun size={18} className="text-cyan-900" />
                </div>
                <div>
                  <p className="font-black text-slate-900">Lunes – Viernes</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Dot color="bg-emerald-400" />
                    <span className="text-xs text-emerald-600 font-bold">Horario extendido</span>
                  </div>
                </div>
              </div>
              <p className="font-display text-5xl text-slate-900 tracking-wide">8:00<span className="text-cyan-500"> AM</span></p>
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-0.5 bg-slate-200 rounded" />
                <span className="text-slate-400 font-bold text-xs">HASTA</span>
                <div className="flex-1 h-0.5 bg-slate-200 rounded" />
              </div>
              <p className="font-display text-5xl text-slate-900 tracking-wide">9:00<span className="text-cyan-500"> PM</span></p>
              <p className="mt-4 text-slate-400 font-semibold text-sm">13 horas de servicio</p>
            </div>

            {/* Weekends */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-white shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shadow">
                  <Moon size={18} className="text-amber-900" />
                </div>
                <div>
                  <p className="font-black text-slate-900">Sábados – Domingos</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Dot color="bg-amber-400" />
                    <span className="text-xs text-amber-600 font-bold">Horario de fin de semana</span>
                  </div>
                </div>
              </div>
              <p className="font-display text-5xl text-slate-900 tracking-wide">12:00<span className="text-amber-500"> PM</span></p>
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-0.5 bg-slate-200 rounded" />
                <span className="text-slate-400 font-bold text-xs">HASTA</span>
                <div className="flex-1 h-0.5 bg-slate-200 rounded" />
              </div>
              <p className="font-display text-5xl text-slate-900 tracking-wide">8:00<span className="text-amber-500"> PM</span></p>
              <p className="mt-4 text-slate-400 font-semibold text-sm">8 horas de servicio</p>
            </div>
          </div>

          {/* Quick-glance table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white shadow-md overflow-hidden">
            {[
              { day: "Lunes", open: "8:00 AM", close: "9:00 PM", isWeekend: false },
              { day: "Martes", open: "8:00 AM", close: "9:00 PM", isWeekend: false },
              { day: "Miércoles", open: "8:00 AM", close: "9:00 PM", isWeekend: false },
              { day: "Jueves", open: "8:00 AM", close: "9:00 PM", isWeekend: false },
              { day: "Viernes", open: "8:00 AM", close: "9:00 PM", isWeekend: false },
              { day: "Sábado", open: "12:00 PM", close: "8:00 PM", isWeekend: true },
              { day: "Domingo", open: "12:00 PM", close: "8:00 PM", isWeekend: true },
            ].map((row, i) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-3.5 border-b border-slate-100 last:border-none ${
                  row.isWeekend ? "bg-amber-50/60" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Dot color={row.isWeekend ? "bg-amber-400" : "bg-cyan-400"} />
                  <span className={`font-bold text-sm ${row.isWeekend ? "text-amber-800" : "text-slate-800"}`}>
                    {row.day}
                  </span>
                </div>
                <span className={`font-black text-sm ${row.isWeekend ? "text-amber-600" : "text-cyan-600"}`}>
                  {row.open} – {row.close}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RATING ── */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber-800 font-black text-xs uppercase tracking-widest mb-3">Reputación</p>
          <div className="flex justify-center gap-2 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={36} className="fill-amber-600 text-amber-600 drop-shadow-sm" />
            ))}
          </div>
          <h2 className="font-display text-6xl text-amber-900 mb-3">5.0 Estrellas</h2>
          <p className="text-amber-800 font-bold max-w-md mx-auto">
            Calificación perfecta basada en las opiniones de nuestros clientes. ¡Gracias por su confianza!
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Encuéntranos
          </span>
          <h2 className="font-display text-5xl text-slate-900 mb-3">Contacto y Ubicación</h2>
          <p className="text-slate-500 font-semibold">Estamos listos para atenderte.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: contact cards */}
          <div className="flex flex-col gap-4">
            {/* Phone card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <Phone size={20} className="text-cyan-600" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Teléfono</p>
                  <p className="font-black text-slate-900 text-lg">{PHONE_DISPLAY}</p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors"
                >
                  <Phone size={13} /> Llamar
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-colors"
                >
                  <Copy size={13} />
                  {copied ? "¡Copiado!" : "Copiar"}
                </button>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
                  <MapPin size={20} className="text-rose-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Dirección</p>
                  <p className="font-black text-slate-900 text-sm leading-snug">
                    Del Gelsemio 161 A, Flores del Aguaje<br />
                    <span className="font-semibold text-slate-500">78398 San Luis Potosí, S.L.P.</span>
                  </p>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors"
              >
                <ExternalLink size={13} /> Maps
              </a>
            </div>

            {/* Hours summary */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Clock size={18} className="text-violet-600" />
                </div>
                <p className="font-black text-slate-900">Horario de atención</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Dot color="bg-cyan-400" />
                    <span className="text-sm font-bold text-slate-700">Lun – Vie</span>
                  </div>
                  <span className="text-sm font-black text-cyan-600">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Dot color="bg-amber-400" />
                    <span className="text-sm font-bold text-slate-700">Sáb – Dom</span>
                  </div>
                  <span className="text-sm font-black text-amber-600">12:00 PM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map embed */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden relative min-h-64">
            <iframe
              title="Ubicación PapeMax en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.7!2d-100.9993!3d22.1878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDExJzE2LjEiTiAxMDDCsDU5JzU3LjUiVw!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-slate-700 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-500 hover:text-white transition-all border border-slate-200"
            >
              <ExternalLink size={13} /> Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-slate-700">
            <div>
              <span className="font-display text-3xl text-cyan-400">
                Pape<span className="text-amber-400">Max</span>
              </span>
              <p className="text-slate-400 text-sm font-semibold mt-3 leading-relaxed max-w-xs">
                Tu papelería de confianza en Flores del Aguaje, San Luis Potosí.
              </p>
              <div className="flex gap-1 mt-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-amber-400 font-bold text-sm ml-1">5.0</span>
              </div>
            </div>

            <div>
              <p className="font-black text-sm uppercase tracking-widest text-slate-400 mb-3">Contacto</p>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 font-semibold text-sm mb-2 transition-colors">
                <Phone size={14} /> {PHONE_DISPLAY}
              </a>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 font-semibold text-sm transition-colors">
                <MapPin size={14} /> Del Gelsemio 161 A, S.L.P.
              </a>
            </div>

            <div>
              <p className="font-black text-sm uppercase tracking-widest text-slate-400 mb-3">Horarios</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-semibold">Lun – Vie</span>
                  <span className="text-slate-200 font-black">8 AM – 9 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-semibold">Sáb – Dom</span>
                  <span className="text-slate-200 font-black">12 PM – 8 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs font-semibold">
              © {new Date().getFullYear()} PapeMax · San Luis Potosí, México
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-colors"
            >
              Ver en Google Maps <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
