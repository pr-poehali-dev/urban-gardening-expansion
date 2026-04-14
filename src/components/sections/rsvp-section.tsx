import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const salads = [
  "Цезарь с куриным филе",
  "Греческий",
  "Курочка на травке",
]

const drinks = [
  "Вино белое",
  "Вино красное",
  "Водка",
  "Шампанское",
  "Сок",
]

const dressCodes = [
  { label: "Фиолетовый", color: "#7C3AED" },
  { label: "Коричневый", color: "#92400E" },
  { label: "Бежевый", color: "#D4B896" },
  { label: "Пастельно-розовый", color: "#F9A8D4" },
  { label: "Лавандовый", color: "#C4B5FD" },
  { label: "Пастельно-голубой", color: "#BAE6FD" },
  { label: "Пастельно-бирюзовый", color: "#99F6E4" },
]

const RSVP_URL = "https://functions.poehali.dev/ac3a0049-ee3b-43fb-b7bb-bccf1738c818"

export function RsvpSection() {
  const [selectedSalads, setSelectedSalads] = useState<string[]>([])
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([])
  const [showNameForm, setShowNameForm] = useState(false)
  const [names, setNames] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])
  }

  const handleSubmit = async () => {
    if (!names.trim()) return
    setLoading(true)
    try {
      await fetch(RSVP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ names, salads: selectedSalads, drinks: selectedDrinks }),
      })
    } catch (e) { console.error(e) }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Dress Code */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Дресс-код</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            Приглашаем вас одеться в цвета нашей свадьбы
          </h2>
          <div className="flex flex-wrap gap-3">
            {dressCodes.map((dc) => (
              <div key={dc.label} className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <div
                  className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0"
                  style={{ backgroundColor: dc.color }}
                />
                <span className="text-sm text-foreground">{dc.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Меню */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Ваши предпочтения</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
            Что будете есть и пить?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Салаты */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Салаты <span className="text-primary">(можно несколько)</span>
              </p>
              <div className="space-y-3">
                {salads.map((item) => {
                  const active = selectedSalads.includes(item)
                  return (
                    <motion.button
                      key={item}
                      onClick={() => toggleItem(item, selectedSalads, setSelectedSalads)}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-2 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-secondary text-foreground hover:border-primary/40"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${active ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                        {active && <Icon name="Check" size={12} className="text-white" />}
                      </div>
                      <span className="font-sans text-sm">{item}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Напитки */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Напитки <span className="text-primary">(можно несколько)</span>
              </p>
              <div className="space-y-3">
                {drinks.map((item) => {
                  const active = selectedDrinks.includes(item)
                  return (
                    <motion.button
                      key={item}
                      onClick={() => toggleItem(item, selectedDrinks, setSelectedDrinks)}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-2 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-secondary text-foreground hover:border-primary/40"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${active ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                        {active && <Icon name="Check" size={12} className="text-white" />}
                      </div>
                      <span className="font-sans text-sm">{item}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Кнопка «Мы будем» */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border-2 border-primary rounded-2xl p-10"
              >
                <p className="text-4xl mb-4">♡</p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Ждём вас!</h3>
                <p className="text-muted-foreground">Мы так рады, что вы будете с нами в этот день.</p>
              </motion.div>
            ) : (
              <motion.div key="form">
                {!showNameForm ? (
                  <motion.button
                    onClick={() => setShowNameForm(true)}
                    className="bg-primary text-primary-foreground text-lg font-serif px-12 py-5 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Мы будем ♡
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-secondary rounded-2xl p-8 max-w-lg mx-auto text-left"
                  >
                    <h3 className="font-serif text-2xl text-foreground mb-2">Кто придёт?</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Перечислите имена всех гостей — если вы семья, укажите всех через запятую.
                    </p>
                    <textarea
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                      placeholder="Например: Иван, Мария, Аня (дочь)"
                      rows={3}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                    />
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
                      >
                        {loading ? "Отправляем..." : "Подтвердить"}
                      </button>
                      <button
                        onClick={() => setShowNameForm(false)}
                        className="px-5 py-3 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Назад
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}