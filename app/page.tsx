import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#27215F] to-[#1a1540]">
      {/* Background decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#4A3AFF] rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#32E0E1] rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#4A3AFF] rounded-full opacity-10 blur-2xl"></div>

      {/* Main container */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-10 lg:py-12 max-w-6xl mx-auto text-center w-full min-h-screen">
        {/* Title with gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6! md:mb-8 text-white leading-tight px-2">
          Ahora somos{" "}
          <span className="bg-gradient-to-r from-[#32E0E1] via-[#4A3AFF] to-[#32E0E1] bg-clip-text text-transparent animate-gradient">
            globales
          </span>
        </h1>

        {/* Image with glass geometric shape */}
        <div className="relative mb-4 sm:mb-6 md:mb-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full px-2 sm:px-4">
          {/* Glass geometric shape - círculo */}
          <div className="absolute -right-2 sm:-right-4 md:-right-6 top-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 backdrop-blur-md bg-gradient-to-br from-[#32E0E1]/20 to-[#4A3AFF]/20 rounded-full border border-white/30 shadow-2xl z-10"></div>

          {/* Glass geometric shape - rectángulo redondeado */}
          <div className="absolute -left-2 sm:-left-4 md:-left-6 bottom-1/4 w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 backdrop-blur-md bg-gradient-to-tr from-[#4A3AFF]/20 to-[#32E0E1]/20 rounded-3xl border border-white/30 shadow-2xl z-10 rotate-12"></div>

          {/* Image container */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
            <Image
              src="https://storage.googleapis.com/indahouse-property-images-qa/email-templates/email2.png"
              alt="IndaHouse Global"
              width={600}
              height={400}
              className="rounded-2xl sm:rounded-3xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Description text with better contrast */}
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto font-medium leading-relaxed px-2 sm:px-4 drop-shadow-lg">
          Expandimos nuestros horizontes para ofrecerte las mejores oportunidades inmobiliarias a nivel mundial.
        </p>

        {/* CTA Button with enhanced visibility and more padding */}
        <a
          href="https://indahouse.global"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-10! py-5! mt-6! text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white bg-gradient-to-r from-[#4A3AFF] to-[#32E0E1] rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(50,224,225,0.6)] transform hover:scale-105 transition-all duration-300 border-2 border-white/40 backdrop-blur-sm mx-4"
        >
          Descubre más
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Floating accent elements */}
        <div className="absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 border-2 border-[#32E0E1]/40 rounded-full animate-spin-slow hidden md:block"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 md:w-16 md:h-16 border-2 border-[#4A3AFF]/40 rounded-lg animate-bounce-slow hidden md:block"></div>
      </main>
    </div>
  );
}
