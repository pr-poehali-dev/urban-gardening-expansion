import { motion } from "framer-motion"

const carouselItems = [
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/90192a10-6b98-4140-b090-a9df3e249d5e.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/f92e2a9f-a810-4852-a86e-29ecb13ee1cb.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/8c0250d5-fa43-44c2-be0e-c13fbc070892.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/07f6be9a-da10-458a-80fb-9053b9d806f8.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/files/08a060eb-2637-4a19-b843-ae8159fe59db.jpg",
]

export function CarouselSection() {
  const items = [...carouselItems, ...carouselItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано с любовью, для любимых людей.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[360px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Свадебное фото ${(i % carouselItems.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
