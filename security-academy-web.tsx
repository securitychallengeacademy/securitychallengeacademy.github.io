import React, { useState, useEffect } from 'react';
import { Shield, Users, Zap, Award, ChevronDown } from 'lucide-react';

const SecurityAcademyWeb = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar scroll animation
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'solutions', label: 'Soluciones' },
    { id: 'advantages', label: 'Ventajas' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Security Challenge Academy</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => setActiveSection(link.id)}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === link.id ? 'text-blue-400' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveSection(link.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-3 hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800"></div>
          {/* Add more dynamic background elements here */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Establecemos la nueva referencia en ciberseguridad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Potencia a tu equipo, protege tu empresa
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                Solicitar Demo
              </button>
              <button className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                Descubre Más
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Protección Avanzada',
                description: 'Formación adaptativa con IA para mantener tu equipo actualizado contra las últimas amenazas.'
              },
              {
                icon: Users,
                title: 'Formación en Equipo',
                description: 'Aprende y mejora en conjunto con ejercicios prácticos y simulaciones realistas.'
              },
              {
                icon: Zap,
                title: 'Respuesta Rápida',
                description: 'Desarrolla habilidades para responder efectivamente ante incidentes de seguridad.'
              },
              {
                icon: Award,
                title: 'Certificaciones',
                description: 'Obtén certificaciones reconocidas en la industria de la ciberseguridad.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityAcademyWeb;