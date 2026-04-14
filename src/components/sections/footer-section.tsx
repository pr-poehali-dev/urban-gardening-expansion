import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-300 via-purple-200 to-violet-100 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              С любовью.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Свяжитесь с нами</p>
            <div className="flex items-center gap-3">
              <span className="text-foreground font-serif text-lg">Жених:</span>
              <a
                href="https://vk.com/the_volodya_29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
                data-clickable
              >
                @the_volodya_29
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-foreground font-serif text-lg">Невеста:</span>
              <a
                href="https://vk.com/kto_to_ne.liza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
                data-clickable
              >
                @kto_to_ne.liza
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">10 июля 2026 · Владимир & Элиза ♡</p>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
            Дресс-код
          </a>
        </div>
      </div>
    </footer>
  )
}
