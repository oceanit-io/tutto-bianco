import React from 'react'

const whatsappLink =
  'https://wa.me/558332680277?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta.'

function WhatsappFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        aria-label="Falar no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 32 32"
          fill="currentColor"
          role="img"
          aria-hidden="true"
        >
          <path d="M16.001 0C7.164 0 0 7.163 0 15.998c0 3.238 1.006 6.229 2.733 8.733L0 32l7.486-2.455a15.95 15.95 0 0 0 8.515 2.454C24.837 32 32 24.837 32 16.002 32 7.164 24.837 0 16.001 0zm9.436 22.842c-.409 1.149-2.041 2.104-3.34 2.381-.892.19-2.053.343-5.965-1.283-5.006-2.075-8.23-7.182-8.48-7.515-.246-.333-2.029-2.704-2.029-5.159s1.253-3.651 1.699-4.154c.409-.463 1.09-.674 1.731-.674.208 0 .396.01.566.017.495.02.745.051 1.074.835.409.986 1.41 3.408 1.535 3.653.123.246.205.542.041.875-.164.333-.246.542-.492.834-.246.29-.52.647-.833 1.04-.259.333-.531.694-.228 1.128.303.432 1.348 2.218 2.896 3.588 1.99 1.775 3.668 2.332 4.202 2.595.533.26.84.216 1.152-.129.31-.343 1.31-1.524 1.661-2.046.349-.522.715-.432 1.215-.259.498.172 3.162 1.489 3.707 1.758.546.269.908.398 1.041.622.136.226.136 1.32-.273 2.47z" />
        </svg>
        <span className="sr-only">Abrir conversa no WhatsApp</span>
        <span className="absolute -top-2.5 -right-2.5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-xs font-semibold text-white">
            1
          </span>
        </span>
      </a>
    </div>
  )
}

export default WhatsappFloat
