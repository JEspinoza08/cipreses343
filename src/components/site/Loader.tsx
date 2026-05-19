import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ letterSpacing: "0.6em", opacity: 0 }}
              animate={{ letterSpacing: "0.35em", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="font-serif text-4xl text-bone"
            >
              EDZ
            </motion.div>
            <div className="h-px w-32 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full w-full bg-gold"
              />
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-stone">
              Cipreses 343 · San Isidro
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
