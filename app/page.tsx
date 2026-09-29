"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarClock,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const whatsappNumber = "5535984116024";
const whatsapp =
  "https://wa.me/5535984116024?text=Olá%2C%20Dra.%20Gabriela.%20Gostaria%20de%20informações%20sobre%20atendimento%20previdenciário.";
const instagram = "https://www.instagram.com/advogadagabrielasantana/";
const maps =
  "https://www.google.com/maps/search/?api=1&query=Gabriela+Santana+Advogada%2C+R.+Prof.+Corn%C3%A9lio+de+Faria%2C+57%2C+Itajub%C3%A1+-+MG%2C+37502-008";

function InstagramMark({
  size = 16,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.8" cy="6.4" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const areas = [
  {
    title: "Aposentadorias",
    icon: ShieldCheck,
    summary:
      "Orientação sobre as diferentes modalidades de aposentadoria e os requisitos aplicáveis a cada trajetória.",
    details:
      "A análise previdenciária considera o histórico de trabalho, as contribuições e as regras que podem se aplicar à situação apresentada. A orientação ajuda a compreender quais informações e documentos são relevantes para avaliar os caminhos possíveis.",
    topics: [
      "Aposentadoria por idade e por tempo de contribuição",
      "Regras de transição",
      "Aposentadoria especial e outras modalidades",
    ],
  },
  {
    title: "Aposentadoria da professora",
    icon: GraduationCap,
    summary:
      "Atenção às regras previdenciárias relacionadas à carreira docente e à história profissional de cada educadora.",
    details:
      "A trajetória de professoras pode envolver períodos, vínculos e documentos que precisam ser compreendidos em conjunto. O atendimento esclarece as particularidades da carreira docente e as regras previdenciárias pertinentes ao caso.",
    topics: [
      "Análise do histórico na educação",
      "Verificação de vínculos e contribuições",
      "Orientação sobre regras aplicáveis",
    ],
  },
  {
    title: "Planejamento previdenciário",
    icon: ClipboardList,
    summary:
      "Organização de informações previdenciárias para entender o cenário atual e as alternativas disponíveis.",
    details:
      "O planejamento previdenciário reúne dados do histórico contributivo e documentos de trabalho para oferecer uma visão mais clara da situação. Cada orientação depende da análise individual e das normas vigentes.",
    topics: [
      "Levantamento do histórico contributivo",
      "Conferência de vínculos e períodos",
      "Estudo de possibilidades previdenciárias",
    ],
  },
  {
    title: "Contagem de tempo de serviço",
    icon: CalendarClock,
    summary:
      "Conferência de períodos de trabalho e contribuição que compõem o histórico previdenciário.",
    details:
      "A contagem de tempo pode exigir a conferência de registros, vínculos e comprovantes. A análise identifica informações que merecem atenção e explica como elas se relacionam com o pedido previdenciário.",
    topics: [
      "Conferência de períodos contributivos",
      "Análise de documentos de trabalho",
      "Orientação sobre registros previdenciários",
    ],
  },
  {
    title: "Benefícios à pessoa com deficiência",
    icon: HeartHandshake,
    summary:
      "Orientação sobre benefícios previdenciários e assistenciais para crianças e adultos com deficiência.",
    details:
      "As regras e os documentos necessários variam conforme o benefício e a situação de cada pessoa. O atendimento busca esclarecer os critérios envolvidos e orientar sobre a organização das informações pertinentes.",
    topics: [
      "Benefícios para crianças e adultos",
      "Análise inicial de documentos",
      "Orientação sobre requerimentos",
    ],
  },
  {
    title: "Pensão por morte e outros auxílios",
    icon: BookOpen,
    summary:
      "Informação e encaminhamento em pedidos de pensão por morte e benefícios ligados a situações extraordinárias.",
    details:
      "Em situações como falecimento, reclusão ou acidente, compreender as regras e reunir documentos pode ser especialmente importante. A orientação considera os fatos e as exigências próprias de cada benefício.",
    topics: [
      "Pensão por morte",
      "Auxílio-reclusão",
      "Benefícios relacionados a acidente ou incapacidade",
    ],
  },
  {
    title: "Requerimentos administrativos e judiciais",
    icon: ClipboardList,
    summary:
      "Acompanhamento de pedidos e medidas previdenciárias na via administrativa ou judicial.",
    details:
      "A via adequada depende da análise da situação concreta, dos documentos disponíveis e das regras aplicáveis. O atendimento explica as etapas possíveis e acompanha os encaminhamentos jurídicos definidos para cada caso.",
    topics: [
      "Requerimentos perante o INSS",
      "Recursos administrativos",
      "Medidas judiciais previdenciárias",
    ],
  },
] as const;

const reviews = [
  {
    author: "Gizele Costa da Silva e Silva",
    text: "Extremamente comprometida, dinâmica, com todo suporte de organização...",
  },
  {
    author: "Marcilia Andre",
    text: "Sempre muito atenciosa, trouxe segurança e tranquilidade durante todo processo...",
  },
  {
    author: "Flavia Bonfante",
    text: "Excelente profissional! A doutora Gabriela foi super atenciosa, resolveu tudo com agilidade e me passou muita segurança. Recomendo de olhos fechados o trabalho dela. Estou muito satisfeita.",
  },
  {
    author: "Waleska Lima",
    text: "Respondeu às dúvidas com rapidez e clareza, mantendo uma comunicação eficiente e sem deixar solicitações em aberto.",
  },
  {
    author: "Andrea Damasceno",
    text: "Me auxiliou em todos os momentos! Sua dedicação é impressionante!!!",
  },
  {
    author: "Mariangela",
    text: "Minha experiência com a advogada Gabriela Santana foi um sucesso, muita atenciosa, educada e prestativa com seus serviços.",
  },
  {
    author: "Silvana Letícia de Almeida Silva",
    text: "Olá, sou Silvana (professora), moro no interior do Paraná... uma colega de profissão me indicou a Dra Gabriela Santana.",
  },
  {
    author: "Maria Tereza Barbosa",
    text: "Foi uma experiência excepcional! A Gabriela é uma pessoa e profissional 100% confiável. Recomendadíssima!",
  },
  {
    author: "Luciana Silva",
    text: "Além do atendimento exemplar, ela demonstrou notável empenho, boa vontade e empatia...",
  },
] as const;

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/65"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] =
    useState<(typeof areas)[number] | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);
  const navigation = [
    ["Início", "#inicio"],
    ["Sobre", "#sobre"],
    ["Planejamento", "#planejamento"],
    ["Atuação", "#atuacao"],
    ["Avaliações", "#avaliacoes"],
    ["Contato", "#contato"],
  ];

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-paper text-ink">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/95 text-white backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[86px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Gabriela Santana — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src="/logo(no background).png"
                width={900}
                height={248}
                alt="Gabriela Santana — Advogada"
                loading="eager"
                className="h-auto w-[197px] sm:w-[240px]"
                sizes="(max-width: 640px) 197px, 240px"
              />
            </a>
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 lg:flex"
            >
              {navigation.map(([label, href]) => (
                <a key={label} className="nav-link" href={href}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:block">
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="sm"
                className="rounded-full"
              >
                <Phone size={14} /> Contato pelo WhatsApp
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-charcoal px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {navigation.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/75 hover:text-gold-300"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <Phone size={15} /> Contato pelo WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section
          id="inicio"
          className="hero-texture relative isolate scroll-mt-24 overflow-hidden bg-charcoal text-white"
        >
          <div className="pointer-events-none absolute -right-32 top-0 -z-10 size-[38rem] rounded-full bg-gold-500/10 blur-3xl" />
          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[730px] lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-8"
            >
              <motion.p variants={reveal} className="eyebrow-light mb-7">
                <span className="size-1.5 rounded-full bg-gold-400" />
                Direito Previdenciário · Itajubá, MG
              </motion.p>
              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.15rem] leading-[0.99] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.15rem]"
              >
                Direito previdenciário para cada{" "}
                <span className="italic text-gold-300">trajetória.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Orientação sobre aposentadorias e benefícios, com atenção
                especial à história de trabalho das professoras.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <Phone size={16} /> Contato pelo WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
                >
                  Conheça a atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-xs text-white/65"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-gold-300" />
                  Itajubá · Minas Gerais
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} className="text-gold-300" />
                  Atenção à carreira docente
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto lg:mr-2"
            >
              <div className="absolute -inset-3 rotate-2 border border-gold-400/45 sm:-inset-4" />
              <div className="relative aspect-[0.79] overflow-hidden bg-[#27251f]">
                <Image
                  src="/gabriela-santana.webp"
                  alt="Retrato da advogada Gabriela Santana"
                  fill
                  preload
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 40vw"
                  className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-charcoal/5" />
                <div className="absolute bottom-6 left-6 right-6 border-l border-gold-300 pl-4 text-white sm:bottom-8 sm:left-8 sm:right-8 sm:pl-5">
                  <p className="font-serif text-3xl sm:text-4xl">
                    Gabriela Santana
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/75">
                    Advogada · Direito Previdenciário
                  </p>
                </div>
              </div>
              <div className="absolute -left-3 top-[14%] bg-paper px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal shadow-card sm:-left-10 sm:px-5">
                Atenção à sua história
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/65 to-transparent" />
        </section>

        <section
          aria-label="Informações sobre a atuação"
          className="border-b border-ink/10 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Previdenciário", "aposentadorias e benefícios"],
              ["Professoras", "atenção à carreira docente"],
              ["Itajubá · MG", "atendimento no Sul de Minas"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl text-gold-700 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="sobre"
          className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative"
            >
              <div className="absolute -left-3 -top-3 size-24 border-l border-t border-gold-600/50 sm:-left-6 sm:-top-6 sm:size-32" />
              <div className="relative overflow-hidden border border-gold-700/15 bg-charcoal px-7 py-10 text-white sm:px-10 sm:py-14 lg:px-12 lg:py-16">
                <p className="max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  Uma história com as professoras que começou muito antes da
                  advocacia.
                </p>
                <div className="mt-8 h-px w-16 bg-gold-400" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.19em] text-white/55">
                  A trajetória da Dra. Gabriela
                </p>
                <div className="pointer-events-none absolute -bottom-24 -right-16 size-64 rounded-full border border-gold-400/15" />
                <div className="pointer-events-none absolute -bottom-16 -right-8 size-48 rounded-full border border-gold-400/15" />
              </div>
              <div className="absolute -bottom-5 right-4 bg-gold-400 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-card sm:right-8">
                Escuta · clareza · cuidado
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                SOBRE A DRA. GABRIELA
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]"
              >
                Uma atuação próxima à realidade de quem{" "}
                <span className="italic text-gold-700">ensina.</span>
              </motion.h2>
              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                A relação da Dra. Gabriela com as professoras começou ainda na
                infância, como aluna. Já na advocacia, os primeiros
                atendimentos a educadoras despertaram seu interesse pelas
                regras previdenciárias da carreira docente.
              </motion.p>
              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Hoje, sua atuação em Direito Previdenciário combina atenção à
                história de trabalho, análise de documentos e explicações
                acessíveis sobre as possibilidades previstas em cada situação.
              </motion.p>
              <motion.a
                variants={reveal}
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border-b border-gold-700/45 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-gold-800 transition-colors hover:border-gold-700 hover:text-gold-700"
              >
                Acompanhe no Instagram{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section
          id="planejamento"
          aria-labelledby="planejamento-title"
          className="scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:gap-20 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow mb-4">
                PLANEJAMENTO PREVIDENCIÁRIO
              </motion.p>
              <motion.h2
                id="planejamento-title"
                variants={reveal}
                className="max-w-2xl font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]"
              >
                Antes de pedir, vale olhar para o caminho que trouxe você até
                aqui.
              </motion.h2>
              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Vínculos, contribuições e documentos fazem parte da análise da
                aposentadoria. Rever essas informações com antecedência pode
                ajudar a identificar o que já está registrado, o que merece
                atenção e quais regras podem se aplicar ao seu histórico —
                inclusive na carreira docente.
              </motion.p>
              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Assim, você pode compreender melhor as possibilidades e avaliar
                os próximos passos antes de apresentar um requerimento.
              </motion.p>
              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="md"
                  className="rounded-full"
                >
                  Conversar sobre planejamento <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto"
            >
              <div className="absolute -inset-3 -rotate-2 border border-gold-500/50 sm:-inset-4" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#18332c]">
                <Image
                  src="/imgi_6_825320943_18070467536750912_3373477166562801739_n.jpg"
                  alt="Quadro de sala de aula com uma mensagem sobre revisar a aposentadoria antes de fazer o pedido."
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 38vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="atuacao"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="DIREITO PREVIDENCIÁRIO"
                description="Informação e acompanhamento jurídico em diferentes momentos da vida previdenciária."
              >
                Orientação para entender seus{" "}
                <span className="italic text-gold-700">direitos.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione um tema para ver informações sobre a atuação.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={reveal}
                    className="group flex min-h-[285px] flex-col border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-700/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center border border-gold-700/20 bg-gold-50 text-gold-800">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-gold-700/65">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 font-serif text-[1.65rem] leading-tight text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                      {area.summary}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-800 hover:text-gold-700"
                    >
                      Saiba mais{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-gold-700/15 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="COMO COMEÇA A ORIENTAÇÃO"
              light
              description="Cada situação tem sua própria história. A análise individual ajuda a organizar as informações relevantes e compreender o que pode ser feito."
            >
              Clareza para olhar cada etapa com{" "}
              <span className="italic text-gold-300">atenção.</span>
            </Heading>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Conhecer sua trajetória",
                  "A conversa começa pela história de trabalho e pelas dúvidas que motivaram o contato.",
                ],
                [
                  "02",
                  "Organizar informações",
                  "Vínculos, contribuições e documentos são considerados conforme o tema apresentado.",
                ],
                [
                  "03",
                  "Explicar os caminhos",
                  "As possibilidades jurídicas e os próximos passos são apresentados com linguagem clara.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-5 sm:py-7"
                >
                  <span className="font-serif text-2xl text-gold-300/80">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/65">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="avaliacoes"
          className="scroll-mt-24 border-y border-ink/10 bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="AVALIAÇÕES PÚBLICAS"
                description="Trechos de avaliações publicadas no Google. Consulte o perfil para ver os comentários completos e seu contexto original."
              >
                Avaliações compartilhadas no <span className="italic text-gold-700">Google.</span>
              </Heading>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={stagger}
              className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {reviews.map((review) => (
                <motion.article
                  key={review.author}
                  variants={reveal}
                  className="flex min-h-56 flex-col border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-700/35 hover:shadow-card sm:p-7"
                >
                  <Quote
                    size={20}
                    strokeWidth={1.5}
                    className="text-gold-700"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-5 flex-1 text-[13px] leading-6 text-ink-soft">
                    “{review.text}”
                  </blockquote>
                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="text-xs font-semibold text-ink">
                      {review.author}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gold-800">
                      Avaliação no Google
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            <a
              href={maps}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-gold-700 hover:text-gold-800"
              aria-label="Ver avaliações completas de Gabriela Santana no Google Maps"
            >
              Ver avaliações completas no Google <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO E LOCALIZAÇÃO"
                description="Para informações sobre atendimento, entre em contato pelos canais abaixo."
              >
                Um primeiro contato, com{" "}
                <span className="italic text-gold-700">clareza.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <Phone size={16} /> Contato pelo WhatsApp
                </GlowingButton>
                <p className="text-xs text-ink-soft">(35) 98411-6024</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs">
                <a
                  href={"tel:+" + whatsappNumber}
                  className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-gold-800"
                >
                  <Phone size={14} /> Ligar
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-gold-800"
                >
                  <InstagramMark size={14} /> @advogadagabrielasantana
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-gold-500" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center border border-gold-700/20 bg-gold-50 text-gold-800">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-800">
                    Endereço
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Itajubá · MG
                  </p>
                </div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                R. Prof. Cornélio de Faria, nº 57
                <br />
                São Vicente, Itajubá - MG
                <br />
                37502-008
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Gabriela Santana · Advogada
                </p>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-gold-700 hover:text-gold-800"
                >
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gold-500 px-5 py-14 text-charcoal sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/65">
                GABRIELA SANTANA · ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
                Informação previdenciária começa com uma boa conversa.
              </h2>
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              Contato pelo WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="bg-charcoal px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <Image
                src="/logo(no background).png"
                width={900}
                height={248}
                alt="Gabriela Santana — Advogada"
                className="h-auto w-[185px]"
                sizes="185px"
              />
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">
                Advocacia previdenciária em Itajubá, Minas Gerais.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#sobre">
                  Sobre
                </a>
                <a className="footer-link" href="#planejamento">
                  Planejamento previdenciário
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações
                </a>
                <a className="footer-link" href="#contato">
                  Contato
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                Canais de contato
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={14} /> (35) 98411-6024
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramMark size={14} /> @advogadagabrielasantana
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Itajubá · MG
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Gabriela Santana. Todos os direitos
              reservados.
            </p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-paper p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-gold-800"
                >
                  <X size={18} />
                </button>
                <p className="eyebrow">ÁREA DE ATUAÇÃO</p>
                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-700" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="md"
                  className="mt-8 rounded-full"
                >
                  Contato pelo WhatsApp <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
