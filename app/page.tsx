"use client"
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Gift, Gamepad2, Puzzle, Zap, Mail, Phone, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="p-8 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Платформы лояльности и подписные сервисы для телеком-операторов
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Разработка, интеграция и контент — проверенные решения для роста ARPU и удержания клиентов.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Button>Посмотреть решения</Button>
          <Button variant="outline">Связаться с нами</Button>
        </motion.div>
      </header>

      {/* Products */}
      <section className="p-8 grid md:grid-cols-2 gap-6">
        {[
          { icon: <Gift className="w-12 h-12 text-purple-400 mb-4" />, title: "Loyalty Platform", text: "Подписная модель с геймификацией: Shake&Win, Колесо Фортуны, Миссии. Бонусы: трафик, минуты, скидки." },
          { icon: <Gamepad2 className="w-12 h-12 text-pink-400 mb-4" />, title: "Shake&Win App", text: "Успешное решение с многолетней историей. Простое подключение через USSD/SMS/Web." },
          { icon: <Zap className="w-12 h-12 text-yellow-400 mb-4" />, title: "White Label Loyalty Platform", text: "Готовая платформа под бренд оператора с кастомизацией и интеграцией в биллинг/CRM." },
          { icon: <Puzzle className="w-12 h-12 text-green-400 mb-4" />, title: "Контент-хаб", text: "Мини-игры, квизы и развлекательные сервисы для подписчиков. Увеличение вовлеченности и удержания." }
        ].map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="bg-gray-900 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {p.icon}
                <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-400 mb-4">{p.text}</p>
                <Button variant="secondary">Подробнее</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* About */}
      <section className="p-12 bg-gray-900 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          О компании
        </motion.h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Мы — разработчик, интегратор и контент-провайдер, специализирующийся на телеком-рынке. 
          Наши решения помогают операторам повышать ARPU, удерживать абонентов и запускать новые подписные сервисы.
        </p>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-gray-950 text-center border-t border-gray-800">
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:info@alchirak.com" className="flex items-center gap-2 text-gray-300 hover:text-white"><Mail size={18}/> info@alchirak.com</a>
          <a href="tel:+998901234567" className="flex items-center gap-2 text-gray-300 hover:text-white"><Phone size={18}/> +998 90 123 45 67</a>
          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white"><Linkedin size={18}/> LinkedIn</a>
          <a href="https://alchirak.com" className="flex items-center gap-2 text-gray-300 hover:text-white"><Globe size={18}/> alchirak.com</a>
        </div>
        <p className="text-gray-500 text-sm">© 2025 Alchirak Solutions. Все права защищены.</p>
      </footer>
    </div>
  );
}