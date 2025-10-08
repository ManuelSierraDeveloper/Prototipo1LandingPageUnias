import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Shield,
  Heart,
  Sparkles,
  Star,
  Instagram,
  Phone,
  Mail,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Scissors,
  Palette,
  Smile
} from 'lucide-react';

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    terms: false
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const filters = ['Todos', 'Naturales', 'Gel', 'Acrílico', 'Novias', 'Peinados'];

  const services = [
    {
      title: 'Nail Care',
      icon: <Sparkles className="w-8 h-8" />,
      items: ['Manicure clásico', 'Spa Manicure', 'Pedicure Spa'],
      description: 'Cuidado profesional para manos y pies saludables'
    },
    {
      title: 'Nail Art',
      icon: <Palette className="w-8 h-8" />,
      items: ['Gel color', 'Acrílico full set', 'Decoraciones personalizadas'],
      description: 'Diseños únicos adaptados a tu estilo'
    },
    {
      title: 'Peinados',
      icon: <Scissors className="w-8 h-8" />,
      items: ['Express', 'Fiesta', 'Novia con prueba'],
      description: 'Tu look perfecto para cada ocasión'
    }
  ];

  const prices = [
    { name: 'Manicure clásico', price: '$19', time: '25 min' },
    { name: 'Spa Manicure', price: '$30', time: '35 min' },
    { name: 'Gel Manicure', price: '$35', time: '40 min' },
    { name: 'Acrílico full set', price: '$55', time: '60–75 min' },
    { name: 'Pedicure Spa', price: '$40', time: '45 min' },
    { name: 'Peinado express', price: '$25', time: '30 min' },
    { name: 'Peinado de fiesta', price: '$45', time: '50 min' },
    { name: 'Peinado de novia', price: '$85', time: '90 min + prueba' }
  ];

  const testimonials = [
    {
      name: 'María González',
      rating: 5,
      text: 'El mejor lugar para hacerse las uñas. Atención impecable y los diseños duran semanas sin levantarse.',
      image: '👩🏻'
    },
    {
      name: 'Sofía Ramírez',
      rating: 5,
      text: 'Me hicieron el peinado para mi boda y quedé enamorada. Profesionales 100% recomendadas.',
      image: '👰🏻'
    },
    {
      name: 'Laura Torres',
      rating: 5,
      text: 'Uso productos de calidad y todo está súper limpio. Ya no voy a otro lado, este es mi lugar.',
      image: '👩🏽'
    }
  ];

  const faqs = [
    {
      q: '¿Qué medidas de higiene manejan?',
      a: 'Esterilizamos todas las herramientas en autoclave, usamos limas desechables y cumplimos con protocolos sanitarios certificados.'
    },
    {
      q: '¿Cuánto dura el gel o acrílico?',
      a: 'Con cuidado adecuado, el gel dura 2-3 semanas y el acrílico 3-4 semanas. Ofrecemos garantía de 7 días ante cualquier desprendimiento.'
    },
    {
      q: '¿Usan productos hipoalergénicos?',
      a: 'Sí, trabajamos con marcas profesionales certificadas y tenemos opciones especiales para pieles sensibles.'
    },
    {
      q: '¿Puedo cambiar mi cita?',
      a: 'Sí, con al menos 6 horas de anticipación. Contáctanos por WhatsApp para reagendar sin problemas.'
    },
    {
      q: '¿Hacen diseños personalizados?',
      a: 'Por supuesto. Trae tus ideas o referencias y nuestras especialistas crearán el diseño perfecto para ti.'
    },
    {
      q: '¿Incluyen prueba los peinados de novia?',
      a: 'Sí, el paquete de novia incluye una prueba previa para asegurar que tu look sea exactamente como lo soñaste.'
    }
  ];

  const galleryItems = [
    { category: 'Gel', alt: 'Manicure gel color nude con detalles dorados' },
    { category: 'Acrílico', alt: 'Uñas acrílicas largas con diseño francés' },
    { category: 'Naturales', alt: 'Manicure natural con acabado spa' },
    { category: 'Novias', alt: 'Diseño elegante para novia con perlas' },
    { category: 'Peinados', alt: 'Peinado recogido para fiesta' },
    { category: 'Gel', alt: 'Nail art con flores y cristales' },
    { category: 'Peinados', alt: 'Ondas sueltas para evento' },
    { category: 'Acrílico', alt: 'Uñas acrílicas con degradado' },
    { category: 'Novias', alt: 'Peinado de novia con velo' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.service && formData.date && formData.time && formData.terms) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({ name: '', phone: '', service: '', date: '', time: '', terms: false });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] bg-clip-text text-transparent">
                La Notté
              </h1>
              <p className="text-xs text-gray-600">Nails & Hair</p>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('servicios')} className="text-sm text-gray-700 hover:text-[#FF5E9C] transition-colors">Servicios</button>
              <button onClick={() => scrollToSection('precios')} className="text-sm text-gray-700 hover:text-[#FF5E9C] transition-colors">Precios</button>
              <button onClick={() => scrollToSection('galeria')} className="text-sm text-gray-700 hover:text-[#FF5E9C] transition-colors">Galería</button>
              <button onClick={() => scrollToSection('opiniones')} className="text-sm text-gray-700 hover:text-[#FF5E9C] transition-colors">Opiniones</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-gray-700 hover:text-[#FF5E9C] transition-colors">Preguntas</button>
              <button onClick={() => scrollToSection('contacto')} className="text-sm text-gray-700 hover:text-[#FF5E9C] transition-colors">Contacto</button>
            </nav>

            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Agendar ahora
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E9C] via-[#FFA6B6] to-[#FFF2F5] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  Atención con cita
                </span>
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  Duración: 45–60 min
                </span>
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <MapPin className="w-4 h-4" />
                  Ubicación: Centro
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Uñas perfectas y peinados para tus mejores momentos
              </h2>

              <p className="text-xl text-white/90">
                Agenda tu diseño ideal y luce única en tu próxima ocasión especial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('booking')}
                  className="bg-white text-[#FF5E9C] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Agendar diseño
                </button>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-200"
                >
                  Ver portafolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/20 flex items-center justify-center text-white/40 text-6xl">
                  💅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios rápidos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF2F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                <Shield className="w-8 h-8 text-[#FF5E9C]" />
              </div>
              <h3 className="font-semibold text-gray-800">Higiene certificada</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                <Heart className="w-8 h-8 text-[#FF5E9C]" />
              </div>
              <h3 className="font-semibold text-gray-800">Materiales hipoalergénicos</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                <CheckCircle className="w-8 h-8 text-[#FF5E9C]" />
              </div>
              <h3 className="font-semibold text-gray-800">Garantía 7 días</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                <Sparkles className="w-8 h-8 text-[#FF5E9C]" />
              </div>
              <h3 className="font-semibold text-gray-800">Diseños personalizados</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas/Dolores */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            ¿Te ha pasado esto?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Sabemos lo frustrante que puede ser...
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FFF2F5] rounded-2xl p-6 space-y-4">
              <div className="text-4xl">😣</div>
              <h3 className="font-bold text-gray-800">Gel que se levanta</h3>
              <p className="text-sm text-gray-600">A los pocos días tu manicure ya no luce bien y tienes que volver.</p>
            </div>
            <div className="bg-[#FFF2F5] rounded-2xl p-6 space-y-4">
              <div className="text-4xl">🤧</div>
              <h3 className="font-bold text-gray-800">Alergias y reacciones</h3>
              <p className="text-sm text-gray-600">Productos de mala calidad que irritan tu piel o dañan tus uñas.</p>
            </div>
            <div className="bg-[#FFF2F5] rounded-2xl p-6 space-y-4">
              <div className="text-4xl">😕</div>
              <h3 className="font-bold text-gray-800">Uñas disparejas</h3>
              <p className="text-sm text-gray-600">Formas irregulares, grosor diferente, acabado poco profesional.</p>
            </div>
            <div className="bg-[#FFF2F5] rounded-2xl p-6 space-y-4">
              <div className="text-4xl">🤷‍♀️</div>
              <h3 className="font-bold text-gray-800">No sabes qué pedir</h3>
              <p className="text-sm text-gray-600">Llegas sin ideas claras y terminas con algo que no te convence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF2F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Todo lo que necesitas para lucir impecable
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-[#FF5E9C] mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#FF5E9C] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-200"
                >
                  Más info
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Lista de precios
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Transparencia total, sin sorpresas
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {prices.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-[#FFF2F5] rounded-xl hover:shadow-md transition-shadow duration-200">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
                <div className="text-2xl font-bold text-[#FF5E9C]">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF2F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Portafolio
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Conoce nuestros diseños más destacados
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems
              .filter((item) => activeFilter === 'Todos' || item.category === activeFilter)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#FFF2F5] to-[#FFA6B6]/20 flex items-center justify-center text-4xl">
                    {item.category === 'Peinados' ? '💇‍♀️' : '💅'}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="opiniones" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Miles de sonrisas satisfechas
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-[#FFF2F5] rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-1 text-[#FF5E9C]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF5E9C] to-[#FFA6B6] rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Cliente verificada</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner oferta */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">20% OFF</h2>
          <p className="text-2xl mb-6">en tu primera cita online</p>
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-white text-[#FF5E9C] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Canjear ahora
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Resolvemos todas tus dudas
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FFF2F5] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FFA6B6]/10 transition-colors duration-200"
                >
                  <h3 className="font-bold text-gray-800 pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#FF5E9C] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF2F5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Reserva tu cita
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Completa el formulario y te confirmaremos por WhatsApp
          </p>

          {showSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-green-800 mb-1">¡Reserva enviada!</h3>
                <p className="text-green-700">Te contactaremos por WhatsApp para confirmar tu cita.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5E9C] focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5E9C] focus:border-transparent outline-none transition-all"
                placeholder="+52 555 123 4567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Servicio *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5E9C] focus:border-transparent outline-none transition-all"
                required
              >
                <option value="">Selecciona un servicio</option>
                {prices.map((price, idx) => (
                  <option key={idx} value={price.name}>
                    {price.name} - {price.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Fecha *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5E9C] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hora *
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5E9C] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                className="mt-1 w-5 h-5 text-[#FF5E9C] border-gray-300 rounded focus:ring-[#FF5E9C]"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Acepto la política de privacidad y el tratamiento de mis datos personales *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Confirmar cita
            </button>
          </form>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Visítanos
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#FF5E9C] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Dirección</h3>
                  <p className="text-gray-600">Av. Principal 123, Colonia Centro<br />Ciudad de México, CP 06000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#FF5E9C] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Horario</h3>
                  <p className="text-gray-600">
                    Lunes a Sábado: 9:00 AM - 7:00 PM<br />
                    Domingo: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#FF5E9C] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Teléfono / WhatsApp</h3>
                  <p className="text-gray-600">+52 555 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#FF5E9C] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">contacto@lanotte.mx</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200">
                    <Smile className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF2F5] rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF5E9C] to-[#FFA6B6] bg-clip-text text-transparent mb-2">
                La Notté
              </h3>
              <p className="text-sm text-gray-400">Nails & Hair</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('servicios')} className="hover:text-[#FF5E9C] transition-colors">Servicios</button></li>
                <li><button onClick={() => scrollToSection('precios')} className="hover:text-[#FF5E9C] transition-colors">Precios</button></li>
                <li><button onClick={() => scrollToSection('galeria')} className="hover:text-[#FF5E9C] transition-colors">Galería</button></li>
                <li><button onClick={() => scrollToSection('opiniones')} className="hover:text-[#FF5E9C] transition-colors">Opiniones</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+52 555 123 4567</li>
                <li>contacto@lanotte.mx</li>
                <li>Av. Principal 123, Centro</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FF5E9C] transition-colors">Aviso legal</a></li>
                <li><a href="#" className="hover:text-[#FF5E9C] transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-[#FF5E9C] transition-colors">Términos y condiciones</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 La Notté Nails & Hair. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
