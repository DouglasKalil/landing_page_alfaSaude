/* Design: cuidado institucional contemporâneo — contato discreto, sempre acessível e alinhado às cores oficiais. */
export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/558688270703?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20Alfa%20Sa%C3%BAde."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:scale-95 sm:bottom-7 sm:right-7"
      style={{ background: "#258D83", boxShadow: "0 14px 30px rgba(37,141,131,0.32)" }}
      aria-label="Falar conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12.05 2a9.78 9.78 0 0 0-8.4 14.78L2 22l5.37-1.57A9.78 9.78 0 1 0 12.05 2Zm0 17.76a7.94 7.94 0 0 1-4.05-1.1l-.29-.17-3.19.93.96-3.1-.19-.32a7.95 7.95 0 1 1 6.76 3.76Zm4.35-5.97c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}
