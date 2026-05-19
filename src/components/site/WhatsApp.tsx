import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/51953849058?text=Hola,%20me%20interesa%20EDZ%20Cipreses%20343"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] transition-transform duration-500 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
        <path d="M19.11 17.39c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.03 2.76 1.17 2.95c.14.19 2.02 3.08 4.89 4.31.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.73 1.42 5.35L5 27l5.79-1.71a10.66 10.66 0 0 0 5.22 1.36h.01c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.7-10.7zm0 19.6c-1.66 0-3.3-.45-4.72-1.29l-.34-.2-3.44 1.02 1.04-3.35-.22-.35a8.85 8.85 0 0 1-1.36-4.72c0-4.91 4-8.9 8.9-8.9 4.91 0 8.9 3.99 8.9 8.9 0 4.9-4 8.89-8.9 8.89z" />
      </svg>
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-sm bg-ink/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-bone opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        Escríbenos
      </span>
    </motion.a>
  );
}
