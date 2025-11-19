import React, { useState, useEffect } from "react";

const Hero = () => {
  const whatsappLink =
    "https://wa.me/558332680277?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta.";

  const slides = [
    {
      image: "/img-1.png",
      title: "Cuidado que Transforma",
      description:
        "Na Tutto Bianco, cada peça recebe atenção especial. Nossa expertise em lavagem profissional garante que suas roupas não apenas fiquem limpas, mas também preservadas, macias e com aquele cheirinho inconfundível de frescor.",
      highlight: "Qualidade em cada detalhe",
    },
    {
      image: "/img-5.png",
      title: "Delivery que entrega tranquilidade",
      description:
        "Agende pelo WhatsApp e receba suas peças limpas, passadas e embaladas sem sair de casa. Nossa coleta e entrega cuidam de cada detalhe para você ter mais tempo para o que importa.",
      highlight: "Coleta & entrega agendadas",
    },
    // {
    //   image: "/img-3.png",
    //   title: "Tradição e Modernidade",
    //   description:
    //     "A Tutto Bianco une a tradição e a excelência em cuidados têxteis com tecnologia moderna e processos sustentáveis. Suas roupas merecem o melhor, e nós entregamos: resultados impecáveis com responsabilidade",
    //   highlight: "Excelência e tradição em João Pessoa",
    // },
    {
      image: "/img-4.png",
      title: "Enxoval do bebê limpinho e protegido",
      description:
        "Higienizamos peças delicadas com produtos seguros e processo suave para manter lençóis, mantinhas e roupinhas livres de ácaros e prontas para o colo. Você cuida do bebê, a Tutto cuida do enxoval.",
      highlight: "Cuidado especial para os pequenos",
    },

    {
      image: "/img-2.png",
      title: "Comodidade ao Seu Alcance",
      description:
        "Esqueça a correria de levar e buscar roupas na lavanderia. Com nosso serviço de coleta e entrega, você cuida do que realmente importa enquanto nós cuidamos das suas roupas. Simplicidade e praticidade.",
      highlight: "Você em casa, nós cuidamos do resto",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl min-h-[1000px] md:min-h-0" data-aos="fade-up">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full w-full flex-shrink-0">
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                    {/* Badge - Mobile primeiro */}
                    <div className="order-1 md:order-none md:hidden w-full flex justify-center md:justify-start">
                      <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {slide.highlight}
                      </span>
                    </div>

                    {/* Imagem */}
                    <div className="order-2 md:order-1 w-full">
                      <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            console.error(
                              `Erro ao carregar imagem: ${slide.image}`
                            );
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    </div>

                    {/* Texto à Direita */}
                    <div className="order-3 md:order-2 flex flex-col justify-center space-y-6 px-4 md:px-8">
                      <div className="space-y-4">
                        {/* Badge - Desktop */}
                        <span className="hidden md:inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                          {slide.highlight}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>

                      <div className="pt-4">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          Agendar Coleta
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navegação - Setas */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Slide anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Próximo slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-primary-600"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
