import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function HeartPulse() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.3 : 1))
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="text-6xl md:text-8xl"
        animate={{ scale }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        ♡
      </motion.span>
    </div>
  )
}

function CountdownAnimation() {
  const weddingDate = new Date("2026-07-10")
  const now = new Date()
  const diff = Math.max(0, Math.ceil((weddingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.span
        className="text-5xl md:text-6xl font-serif text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {diff}
      </motion.span>
      <span className="text-sm text-muted-foreground">дней до торжества</span>
    </div>
  )
}

function RingsAnimation() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 0 ? 12 : 0))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative flex items-center">
        <motion.div
          className="w-14 h-14 rounded-full border-4 border-primary"
          animate={{ x: offset }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="w-14 h-14 rounded-full border-4 border-rose-400 -ml-4"
          animate={{ x: -offset }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Детали торжества
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <HeartPulse />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">10 июля 2026</h3>
              <p className="text-muted-foreground text-sm mt-1">Торжество начнётся в 17:00. Сбор гостей — в 16:30.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <CountdownAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Обратный отсчёт</h3>
              <p className="text-muted-foreground text-sm mt-1">Каждый день ближе к самому важному моменту в нашей жизни.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <RingsAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Ресторан «Апельсин»</h3>
              <p className="text-muted-foreground text-sm mt-1">г. Котлас, ул. Конституции, 1А. Сбор гостей в 16:30.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}