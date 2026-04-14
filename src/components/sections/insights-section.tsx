import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const schedule = [
  {
    title: "Сбор гостей и приветственный коктейль",
    category: "15:30",
    image: "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/8c0250d5-fa43-44c2-be0e-c13fbc070892.jpg",
  },
  {
    title: "Церемония бракосочетания",
    category: "16:00",
    image: "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/f92e2a9f-a810-4852-a86e-29ecb13ee1cb.jpg",
  },
  {
    title: "Банкет и первый танец молодых",
    category: "17:30",
    image: "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/90192a10-6b98-4140-b090-a9df3e249d5e.jpg",
  },
  {
    title: "Танцевальная программа и торт",
    category: "21:00",
    image: "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/07f6be9a-da10-458a-80fb-9053b9d806f8.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Программа вечера
        </motion.p>

        <div className="divide-y divide-border">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-6 relative cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={schedule[hoveredIndex].image}
                alt={schedule[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
