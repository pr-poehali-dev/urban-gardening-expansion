import { motion } from "framer-motion"

const carouselItems = [
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/bucket/fa650087-75eb-4914-8916-a2f1c188286a.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/bucket/d705bdfa-5e54-4e9a-bd9a-c749490ff755.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/bucket/cc07bad2-6d74-44ff-8726-046fd96e7dc3.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/bucket/a462636f-b365-42e6-a5dd-6bd27c9739e8.jpg",
  "https://cdn.poehali.dev/projects/f2077913-9ff3-401b-b8b2-20ac3aa28a70/bucket/ba9bbc08-8db1-4837-ab5a-8a506766ba38.jpg",
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
          Владимир & Элиза · 10 июля 2026
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