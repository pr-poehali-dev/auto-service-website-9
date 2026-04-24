import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b77b3e1f-2369-4977-94b4-0ac08e631d28/bucket/3d149b32-cfa2-4aa1-9790-9aa0fec0924d.png";

const SERVICES = [
  { icon: "Wrench", title: "Диагностика", desc: "Компьютерная диагностика всех систем автомобиля", price: "от 500 ₽" },
  { icon: "Settings", title: "ТО и обслуживание", desc: "Замена масла, фильтров, плановое обслуживание", price: "от 1 500 ₽" },
  { icon: "Zap", title: "Электрика", desc: "Ремонт электрооборудования, проводки, АКБ", price: "от 800 ₽" },
  { icon: "Shield", title: "Кузовные работы", desc: "Рихтовка, покраска, замена деталей кузова", price: "от 3 000 ₽" },
  { icon: "RotateCw", title: "Шиномонтаж", desc: "Сезонная замена, балансировка, ремонт", price: "от 400 ₽" },
  { icon: "Flame", title: "Двигатель", desc: "Капитальный ремонт, замена запчастей", price: "от 5 000 ₽" },
];

const MASTERS = [
  { name: "Алексей Громов", role: "Старший механик", exp: "15 лет опыта" },
  { name: "Дмитрий Краев", role: "Электрик", exp: "10 лет опыта" },
  { name: "Игорь Фёдоров", role: "Кузовщик", exp: "12 лет опыта" },
];

const PORTFOLIO = [
  { title: "Кузовной ремонт BMW 5", tag: "Кузов" },
  { title: "Капремонт двигателя Audi", tag: "Двигатель" },
  { title: "Полная диагностика Mercedes", tag: "Диагностика" },
  { title: "Замена подвески Toyota", tag: "Подвеска" },
];

const PRICES = [
  { name: "Компьютерная диагностика", price: "от 500 ₽" },
  { name: "Замена масла + фильтр", price: "от 1 500 ₽" },
  { name: "Замена тормозных колодок", price: "от 1 200 ₽" },
  { name: "Шиномонтаж (4 колеса)", price: "от 1 600 ₽" },
  { name: "Замена ремня ГРМ", price: "от 4 500 ₽" },
  { name: "Ремонт подвески", price: "от 2 500 ₽" },
  { name: "Покраска бампера", price: "от 5 000 ₽" },
  { name: "Ремонт электрики", price: "от 800 ₽" },
];

const TIMES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Цены", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    master: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-coal text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e1e]" style={{ background: "rgba(17,17,17,0.97)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/b77b3e1f-2369-4977-94b4-0ac08e631d28/bucket/d037b8fb-e69f-404a-bd41-bc03ca834647.jpg"
              alt="AutoCool"
              className="h-10 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link font-body text-sm text-[#aaa] hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#booking")}
            className="hidden md:block bg-red-brand hover:bg-red-dark text-white font-display text-sm uppercase tracking-wider px-5 py-2 transition-colors"
          >
            Записаться
          </button>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-steel border-t border-[#222] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left font-body text-[#bbb] hover:text-white transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-red-brand text-white font-display uppercase tracking-wider py-3 mt-2 transition-colors"
            >
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.92)] via-[rgba(10,10,10,0.7)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.6)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-px w-12 bg-red-brand" />
              <span className="font-body text-sm uppercase tracking-widest text-red-brand font-medium">
                Профессиональный автосервис
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none text-white mb-6 animate-fade-in-delay-1">
              ВАШЕ АВТО
              <br />
              <span className="text-red-brand">В НАДЁЖНЫХ</span>
              <br />
              РУКАХ
            </h1>

            <p className="font-body text-lg text-[#aaa] mb-10 leading-relaxed animate-fade-in-delay-2 max-w-xl">
              Сертифицированные мастера. Гарантия на все виды работ. Современное оборудование европейского класса.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <a
                href="tel:89306703042"
                className="bg-red-brand hover:bg-red-dark font-display text-base uppercase tracking-wider px-8 py-4 transition-colors text-center"
              >
                Позвонить
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="border border-[#444] hover:border-white text-white font-display text-base uppercase tracking-wider px-8 py-4 transition-colors"
              >
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#222]" style={{ background: "rgba(17,17,17,0.95)" }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 divide-x divide-[#222]">
            {[
              { num: "100%", label: "Гарантия качества" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 px-6 text-center">
                <div className="font-display text-2xl font-bold text-red-brand">{stat.num}</div>
                <div className="font-body text-xs text-[#666] mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-brand" />
              <span className="font-body text-sm uppercase tracking-widest text-red-brand">Что мы делаем</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase text-white">Наши услуги</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-coal p-8 group hover:bg-steel transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 border border-[#333] group-hover:border-red-brand flex items-center justify-center mb-6 transition-colors">
                  <Icon name={service.icon} size={22} className="text-[#666] group-hover:text-red-brand transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase text-white mb-3">{service.title}</h3>
                <p className="font-body text-sm text-[#666] leading-relaxed mb-6">{service.desc}</p>
                <div className="text-red-brand font-display text-lg font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-steel">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-brand" />
              <span className="font-body text-sm uppercase tracking-widest text-red-brand">Наши работы</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase text-white">Портфолио</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e1e]">
            {PORTFOLIO.map((item) => (
              <div
                key={item.title}
                className="relative bg-coal overflow-hidden group cursor-pointer"
                style={{ height: "280px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${HERO_IMAGE})`, filter: "brightness(0.35)" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="inline-block bg-red-brand text-white font-body text-xs uppercase tracking-widest px-3 py-1 mb-3 w-fit">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-2xl font-semibold uppercase text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-brand" />
              <span className="font-body text-sm uppercase tracking-widest text-red-brand">Прозрачно и честно</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase text-white">Цены на услуги</h2>
          </div>

          <div className="max-w-3xl">
            {PRICES.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-5 border-b border-[#1e1e1e] group hover:border-[#333] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-body text-xs text-[#444] w-6 text-right">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body text-base text-[#ccc] group-hover:text-white transition-colors">{item.name}</span>
                </div>
                <span className="font-display text-lg font-semibold text-red-brand">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-[#555] mt-8">
            * Точная стоимость определяется после диагностики. Цены указаны за работу, без запчастей.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-steel">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-red-brand" />
                <span className="font-body text-sm uppercase tracking-widest text-red-brand">Онлайн-запись</span>
              </div>
              <h2 className="font-display text-5xl font-bold uppercase text-white mb-6">
                Запишитесь<br />к мастеру
              </h2>
              <p className="font-body text-[#777] leading-relaxed mb-10">
                Выберите удобное время и мастера. Мы свяжемся с вами для подтверждения записи в течение 15 минут.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", text: "+7 (999) 123-45-67" },
                  { icon: "MapPin", text: "ул. Промышленная, 14, корп. 2" },
                  { icon: "Clock", text: "Пн–Сб: 8:00–20:00 / Вс: 9:00–17:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-[#333] flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={18} className="text-red-brand" />
                    </div>
                    <span className="font-body text-[#aaa]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-metal p-8 border border-[#222]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-red-brand mx-auto flex items-center justify-center mb-6">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">Заявка принята!</h3>
                  <p className="font-body text-[#777]">Мы перезвоним вам в течение 15 минут для подтверждения записи.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-[#444] text-[#aaa] font-body text-sm px-6 py-3 hover:border-white hover:text-white transition-colors"
                  >
                    Новая запись
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-[#666] block mb-2">Ваше имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-coal border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-red-brand transition-colors placeholder-[#444]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-[#666] block mb-2">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-coal border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-red-brand transition-colors placeholder-[#444]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-[#666] block mb-2">Услуга</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-coal border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-red-brand transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Выберите услугу</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-widest text-[#666] block mb-2">Мастер</label>
                    <select
                      value={form.master}
                      onChange={(e) => setForm({ ...form, master: e.target.value })}
                      className="w-full bg-coal border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-red-brand transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Любой свободный мастер</option>
                      {MASTERS.map((m) => (
                        <option key={m.name} value={m.name}>{m.name} — {m.role}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-[#666] block mb-2">Дата</label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-coal border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-red-brand transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs uppercase tracking-widest text-[#666] block mb-2">Время</label>
                      <select
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full bg-coal border border-[#2a2a2a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-red-brand transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">—</option>
                        {TIMES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-brand hover:bg-red-dark text-white font-display text-base uppercase tracking-wider py-4 transition-colors mt-2"
                  >
                    Записаться на приём
                  </button>
                  <p className="font-body text-xs text-[#444] text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section className="py-24 bg-coal border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-brand" />
              <span className="font-body text-sm uppercase tracking-widest text-red-brand">Профессионалы</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase text-white">Наши мастера</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {MASTERS.map((master) => (
              <div key={master.name} className="bg-coal p-8 group hover:bg-steel transition-colors">
                <div className="w-16 h-16 bg-metal border border-[#2a2a2a] group-hover:border-red-brand flex items-center justify-center mb-6 transition-colors">
                  <span className="font-display text-2xl font-bold text-red-brand">
                    {master.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold uppercase text-white mb-1">{master.name}</h3>
                <div className="font-body text-sm text-red-brand mb-2">{master.role}</div>
                <div className="font-body text-sm text-[#555]">{master.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-steel border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-red-brand" />
              <span className="font-body text-sm uppercase tracking-widest text-red-brand">Как нас найти</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase text-white">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Промышленная, 14, корп. 2", "Москва, 123456"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (999) 123-45-67", "+7 (999) 765-43-21"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Сб: 8:00–20:00", "Воскресенье: 9:00–17:00"] },
            ].map((block) => (
              <div key={block.title} className="border border-[#222] bg-metal p-8">
                <div className="w-12 h-12 border border-[#333] flex items-center justify-center mb-6">
                  <Icon name={block.icon} size={20} className="text-red-brand" />
                </div>
                <h3 className="font-display text-lg font-semibold uppercase text-white mb-4">{block.title}</h3>
                {block.lines.map((line) => (
                  <p key={line} className="font-body text-[#777] text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-coal border-t border-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/b77b3e1f-2369-4977-94b4-0ac08e631d28/bucket/d037b8fb-e69f-404a-bd41-bc03ca834647.jpg"
              alt="AutoCool"
              className="h-10 object-contain"
            />
          </div>
          <p className="font-body text-xs text-[#444]">© 2024 AutoCool. Все права защищены.</p>
          <div className="flex items-center gap-6">
            {["Услуги", "Цены", "Контакты"].map((link) => (
              <span key={link} className="font-body text-xs text-[#555] hover:text-white transition-colors cursor-pointer">
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}