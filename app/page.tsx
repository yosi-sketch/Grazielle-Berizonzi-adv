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
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const phoneNumber = "5532988692707";
const formattedPhone = "(32) 98869-2707";
const whatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  "Olá, Dra. Grazielle. Gostaria de informações sobre atendimento jurídico.",
)}`;
const instagram = "https://www.instagram.com/grazielleberizonzi/";
const googleBusiness = "https://www.google.com/maps?cid=2925673335142896557";

type PracticeArea = {
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string;
  topics: string[];
};

const practiceAreas: PracticeArea[] = [
  {
    title: "Direito de Família",
    icon: HeartHandshake,
    summary:
      "Orientação jurídica cuidadosa para questões que envolvem relações familiares.",
    details:
      "Questões familiares pedem escuta, discrição e atenção às particularidades de cada pessoa. A atuação começa pela compreensão do contexto e pela explicação clara dos caminhos jurídicos possíveis.",
    topics: [
      "Divórcio e dissolução de união estável",
      "Guarda, convivência e alimentos",
      "Inventários e partilha de bens",
    ],
  },
  {
    title: "Direito Civil e Contratos",
    icon: FileText,
    summary:
      "Análise de relações civis, documentos e obrigações com orientação individualizada.",
    details:
      "A análise civil considera os documentos, os fatos e os objetivos envolvidos. O atendimento ajuda a identificar direitos, deveres e alternativas antes de definir os próximos passos.",
    topics: [
      "Elaboração e análise de contratos",
      "Obrigações e responsabilidade civil",
      "Negociações e demandas judiciais",
    ],
  },
  {
    title: "Direito do Consumidor",
    icon: ShieldCheck,
    summary:
      "Atuação em conflitos de consumo e dúvidas sobre produtos, serviços e contratos.",
    details:
      "Cada relação de consumo tem suas próprias circunstâncias. A orientação considera os registros disponíveis, a relação contratual e os direitos previstos para avaliar as medidas cabíveis.",
    topics: [
      "Cobranças e contratos de consumo",
      "Problemas com produtos ou serviços",
      "Análise de documentos e protocolos",
    ],
  },
  {
    title: "Direito Penal",
    icon: Scale,
    summary:
      "Acompanhamento jurídico com atenção aos direitos e às etapas de cada procedimento.",
    details:
      "A atuação penal exige cuidado com os fatos, os documentos e os prazos. O atendimento esclarece o procedimento e acompanha as medidas jurídicas pertinentes ao caso concreto.",
    topics: [
      "Acompanhamento em procedimentos criminais",
      "Atuação em inquéritos e ações penais",
      "Orientação sobre direitos e etapas processuais",
    ],
  },
  {
    title: "Direito do Trabalho",
    icon: BriefcaseBusiness,
    summary:
      "Orientação jurídica em questões relacionadas às relações de trabalho.",
    details:
      "A análise trabalhista parte da história profissional e dos registros disponíveis para esclarecer direitos, deveres e possibilidades de encaminhamento.",
    topics: [
      "Análise de vínculos e documentos de trabalho",
      "Verbas e condições de trabalho",
      "Acompanhamento de demandas trabalhistas",
    ],
  },
  {
    title: "Correspondência Jurídica",
    icon: ClipboardList,
    summary:
      "Apoio local a escritórios e profissionais em demandas na região de Muriaé.",
    details:
      "O escritório presta apoio a advogados e escritórios que precisam de diligências e acompanhamento presencial em Muriaé e cidades próximas, com comunicação sobre o andamento das solicitações.",
    topics: [
      "Audiências e diligências presenciais",
      "Protocolos, cópias e acompanhamento processual",
      "Serviços jurídicos de apoio na região",
    ],
  },
];

const publicReviews = [
  {
    author: "Nathalia",
    quote:
      "Desde o início do meu caso, você demonstrou profissionalismo, competência, dedicação e um compromisso admirável.",
  },
  {
    author: "Layse",
    quote:
      "Excelente profissional, muito competente, atenciosa e dedicada. Sempre prestou um atendimento claro, ágil e com muito comprometimento.",
  },
  {
    author: "Mila",
    quote:
      "A Graziele é uma profissional muito competente e de extrema confiança! Confio totalmente no seu trabalho.",
  },
  {
    author: "Raul",
    quote:
      "Excelente profissional e ótima pessoa! Paciente, educada, compra a briga do cliente como se fosse sua!!",
  },
  {
    author: "Adriana",
    quote: "Graziela é uma advogada competente, ética e confiável. Recomendo!",
  },
  {
    author: "Maria Vitória",
    quote:
      "Excelente advogada! Sempre mostrando uma ética profissional impecável e um compromisso inabalável com seus clientes.",
  },
  {
    author: "Carol",
    quote: "Muito prestativa, muito humana, uma profissional exemplar.",
  },
  {
    author: "Natália",
    quote: "Extremamente competente e humana..",
  },
  {
    author: "Kamila",
    quote: "Excelente advogada, exerce a profissão com maestria e muita dedicação !",
  },
  {
    author: "Juju",
    quote: "Sempre que preciso, solicito o serviço dela.",
  },
  {
    author: "Ana Elisa",
    quote:
      "Uma profissional super competente, atenciosa e sempre a disposição para tirar dúvidas. Excelente!",
  },
  {
    author: "Rayssa",
    quote:
      "Minha experiência com a Dra. Grazielle foi a melhor possível, ela é uma advogada de extrema competência.",
  },
  {
    author: "Felipe",
    quote: "Atendimento excepcional.",
  },
  {
    author: "Juliana",
    quote: "Super prestativa e atenciosa. Muito obrigada!",
  },
  {
    author: "Clara",
    quote: "Excelente advogada, comprometida, competente e muito atenciosa.",
  },
  {
    author: "Daiane",
    quote:
      "Uma ótima advogada ,focada em tudo que faz , entra no caso com determinação...",
  },
  {
    author: "Maria Clara",
    quote: "Advogada competente e comprometida, oferece um serviço excepcional!!",
  },
  {
    author: "Thaina",
    quote:
      "Profissional muito competente, atenciosa, objetiva e extremamente comprometida.",
  },
  {
    author: "Milla",
    quote: "Competência e dedicação são as suas virtudes!",
  },
  {
    author: "Claudia",
    quote: "Advogada maravilhosa! Excelente profissional",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

function InstagramMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.8" cy="6.4" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SectionHeading({
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
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
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
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);
  const navigation = [
    ["Início", "#inicio"],
    ["Sobre", "#sobre"],
    ["Atuação", "#atuacao"],
    ["Avaliações", "#avaliacoes"],
    ["Contato", "#contato"],
  ];

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-paper text-ink">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/95 text-white backdrop-blur-xl">
          <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[88px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Grazielle Berizonzi Advocacia — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src="/logo(no background).png"
                width={1527}
                height={772}
                alt="Berizonzi Advocacia"
                loading="eager"
                className="h-[64px] w-[128px] object-contain sm:h-[76px] sm:w-[150px]"
                sizes="(max-width: 640px) 128px, 150px"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 xl:flex"
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
                <MessageCircle size={15} /> Fale pelo WhatsApp
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 xl:hidden"
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
                className="overflow-hidden border-t border-white/10 bg-charcoal px-6 xl:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {navigation.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/75 hover:text-accent-300"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-accent-400 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal"
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <MessageCircle size={15} /> Fale pelo WhatsApp
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
          <div className="pointer-events-none absolute -right-32 top-0 -z-10 size-[38rem] rounded-full bg-accent-500/10 blur-3xl" />
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[710px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-8"
            >
              <motion.p variants={reveal} className="eyebrow-light mb-7">
                <span className="size-1.5 rounded-full bg-accent-300" />
                Advocacia · Muriaé, Minas Gerais
              </motion.p>
              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[0.99] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.1rem]"
              >
                Cada história merece ser ouvida com{" "}
                <span className="italic text-accent-300">atenção.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Advocacia em Muriaé com análise criteriosa, orientação clara e
                acompanhamento próximo em assuntos que pedem responsabilidade.
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
                  <MessageCircle size={16} /> Fale pelo WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/80 transition-colors hover:text-accent-300"
                >
                  Conheça a atuação
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
                  <MapPin size={15} className="text-accent-300" />
                  Muriaé · Minas Gerais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Scale size={15} className="text-accent-300" />
                  OAB/MG 184.251
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto lg:mr-2"
            >
              <div className="absolute -inset-3 rotate-2 border border-accent-300/45 sm:-inset-4" />
              <div className="relative aspect-[0.82] overflow-hidden bg-[#262321]">
                <Image
                  src="/grazielle-berizonzi.webp"
                  alt="Retrato da advogada Grazielle Berizonzi"
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 40vw"
                  className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-charcoal/5" />
                <div className="absolute bottom-6 left-6 right-6 border-l border-accent-300 pl-4 text-white sm:bottom-8 sm:left-8 sm:right-8 sm:pl-5">
                  <p className="font-serif text-3xl sm:text-4xl">
                    Grazielle Berizonzi
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/75">
                    Advogada · OAB/MG 184.251
                  </p>
                </div>
              </div>
              <div className="absolute -left-3 top-[14%] bg-paper px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal shadow-card sm:-left-10 sm:px-5">
                Atendimento próximo e individual
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/65 to-transparent" />
        </section>

        <section
          aria-label="Informações sobre a advocacia"
          className="border-b border-ink/10 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Muriaé · MG", "escritório no Centro"],
              ["Atuação jurídica", "análise de cada situação"],
              ["Correspondência", "apoio jurídico na região"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl text-accent-700 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[150px] text-[10px] uppercase leading-5 tracking-[0.12em] text-ink-soft">
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
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[470px]"
            >
              <div className="absolute -left-3 -top-3 size-24 border-l border-t border-accent-600/50 sm:-left-6 sm:-top-6 sm:size-32" />
              <div className="relative aspect-[0.91] overflow-hidden bg-[#e8e1d8]">
                <Image
                  src="/grazielle-berizonzi-retrato.jpg"
                  alt="Grazielle Berizonzi em seu retrato profissional"
                  fill
                  sizes="(max-width: 1024px) 88vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-5 right-4 bg-accent-400 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-card sm:right-8">
                OAB/MG 184.251
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={stagger}
            >
              <motion.div variants={reveal}>
                <SectionHeading
                  eyebrow="SOBRE A ADVOGADA"
                  description="Uma atuação construída com preparo técnico, responsabilidade e respeito pela história de cada pessoa."
                >
                  Direito com presença, escuta e{" "}
                  <span className="italic text-accent-700">clareza.</span>
                </SectionHeading>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-7 max-w-2xl space-y-4 text-[14px] leading-7 text-ink-soft"
              >
                <p>
                  Grazielle Gonçalves Berizonzi é advogada em Muriaé, Minas
                  Gerais. Seu trabalho é pautado por uma análise cuidadosa de
                  cada demanda e por uma comunicação direta sobre os caminhos
                  jurídicos disponíveis.
                </p>
                <p>
                  Graduada em Direito pelo Centro Universitário UNIFAMINAS, é
                  pós-graduada em Ciências Jurídicas e Magistratura Estadual,
                  Direito Penal e Processual Penal, Direito Processual Civil e
                  Processo de Execução.
                </p>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  "Atendimento individualizado",
                  "Atuação consultiva e contenciosa",
                  "Muriaé e região",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-ink/10 bg-white/70 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
              <motion.a
                variants={reveal}
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border-b border-accent-700/45 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-accent-800 transition-colors hover:border-accent-700 hover:text-accent-700"
              >
                Converse com a advogada
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-accent-700/15 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
            <div>
              <SectionHeading
                eyebrow="UMA RELAÇÃO DE CONFIANÇA"
                light
                description="Cada caso tem uma história própria. Por isso, o atendimento começa ouvindo e compreendendo o que realmente importa para você."
              >
                Informação, estratégia e acompanhamento em cada{" "}
                <span className="italic text-accent-300">etapa.</span>
              </SectionHeading>
            </div>
            <div className="grid gap-0 border-t border-white/15 sm:grid-cols-3 sm:border-t-0">
              {[
                {
                  number: "01",
                  title: "Escuta",
                  text: "Compreender os fatos e as dúvidas que motivaram a busca por orientação.",
                },
                {
                  number: "02",
                  title: "Análise",
                  text: "Examinar documentos e informações relevantes para a situação apresentada.",
                },
                {
                  number: "03",
                  title: "Orientação",
                  text: "Explicar os caminhos possíveis e os próximos passos com clareza.",
                },
              ].map((step) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={reveal}
                  className="border-b border-white/15 py-6 sm:border-b-0 sm:border-l sm:px-6 sm:py-2 first:sm:border-l-0 first:sm:pl-0"
                >
                  <span className="font-serif text-[13px] tracking-[0.12em] text-accent-300/80">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-serif text-[1.7rem] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[18rem] text-xs leading-6 text-white/60">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="atuacao"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="ÁREAS DE ATUAÇÃO"
                description="Conheça algumas frentes de trabalho. A adequação da atuação depende da análise de cada situação."
              >
                Orientação jurídica para diferentes momentos e{" "}
                <span className="italic text-accent-700">desafios.</span>
              </SectionHeading>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-ink/20 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent-700 hover:text-accent-800"
              >
                Fale sobre sua situação <ArrowUpRight size={14} />
              </a>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => (
                <motion.button
                  key={area.title}
                  type="button"
                  variants={reveal}
                  onClick={() => setActiveArea(area)}
                  className="group flex min-h-[225px] flex-col border-t border-ink/15 bg-white px-5 py-6 text-left transition-colors duration-300 hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 sm:px-7 sm:py-7"
                >
                  <span className="flex w-full items-center justify-between">
                    <span className="inline-flex items-center gap-3 text-accent-800">
                      <area.icon size={18} strokeWidth={1.55} />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                        Área jurídica
                      </span>
                    </span>
                    <span className="font-serif text-lg text-accent-700/65">
                      0{index + 1}
                    </span>
                  </span>
                  <span className="mt-5 font-serif text-[1.65rem] text-ink">
                    {area.title}
                  </span>
                  <span className="mt-3 text-[13px] leading-6 text-ink-soft">
                    {area.summary}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-800 transition-colors group-hover:text-accent-700">
                    Saiba mais <ArrowRight size={13} />
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-[#eee9e1] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="AVALIAÇÕES PÚBLICAS"
                description="Trechos de 20 avaliações públicas do Google, com nomes abreviados. Leia os comentários completos no perfil original."
              >
                O que dizem sobre o{" "}
                <span className="italic text-accent-700">atendimento.</span>
              </SectionHeading>
              <a
                href={googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-ink/20 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent-700 hover:text-accent-800"
              >
                Ver perfil no Google <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
              <div className="relative flex flex-col justify-between overflow-hidden bg-charcoal p-8 text-white sm:p-10">
                <div className="absolute -bottom-16 -right-12 size-56 rounded-full border border-accent-300/15" />
                <div className="absolute -bottom-8 -right-4 size-40 rounded-full border border-accent-300/20" />
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                    Nota no Google
                  </p>
                  <div className="mt-5 flex items-end gap-4">
                    <span className="font-serif text-7xl leading-none tracking-[-0.05em] sm:text-8xl">
                      5,0
                    </span>
                    <span className="mb-2 flex gap-1 text-accent-300" role="img" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />
                      ))}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-white/65">
                    32 avaliações públicas
                  </p>
                </div>
                <a
                  href={googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-10 inline-flex w-fit items-center gap-2 border-b border-accent-300/50 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-200 transition-colors hover:text-white"
                >
                  Abrir avaliações <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {publicReviews.slice(0, 3).map((review, index) => (
                  <article
                    key={review.author}
                    className={`border border-ink/10 bg-white p-7 sm:p-8 ${
                      index === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div
                      className="flex gap-1 text-accent-700"
                      role="img"
                      aria-label="5 de 5 estrelas"
                    >
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={13}
                          fill="currentColor"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <blockquote
                      className={`mt-5 font-serif leading-snug text-ink ${
                        index === 0
                          ? "max-w-3xl text-[1.55rem] sm:text-[1.8rem]"
                          : "text-xl"
                      }`}
                    >
                      “{review.quote}”
                    </blockquote>
                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-soft">
                      {review.author} · Avaliação pública no Google
                    </p>
                  </article>
                ))}
                <details className="review-disclosure border-t border-ink/15 md:col-span-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700">
                    <span>Ler outras {publicReviews.length - 3} avaliações</span>
                    <span
                      aria-hidden="true"
                      className="review-disclosure-icon font-serif text-2xl text-accent-800"
                    >
                      +
                    </span>
                  </summary>
                  <div className="grid gap-3 pb-4 sm:grid-cols-2 xl:grid-cols-3">
                    {publicReviews.slice(3).map((review) => (
                      <article
                        key={review.author}
                        className="border border-ink/10 bg-white p-6"
                      >
                        <div
                          className="flex gap-1 text-accent-700"
                          role="img"
                          aria-label="5 de 5 estrelas"
                        >
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              key={index}
                              size={12}
                              fill="currentColor"
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                        <blockquote className="mt-4 font-serif text-lg leading-snug text-ink">
                          “{review.quote}”
                        </blockquote>
                        <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.13em] text-ink-soft">
                          {review.author} · Google
                        </p>
                      </article>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <SectionHeading
                eyebrow="CONTATO E LOCALIZAÇÃO"
                description="Entre em contato para conversar sobre sua situação e obter informações sobre o atendimento."
              >
                Um primeiro contato, com{" "}
                <span className="italic text-accent-700">clareza.</span>
              </SectionHeading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <MessageCircle size={16} /> Fale pelo WhatsApp
                </GlowingButton>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="text-xs text-ink-soft transition-colors hover:text-accent-800"
                >
                  {formattedPhone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs">
                <a
                  href={`tel:+${phoneNumber}`}
                  className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent-800"
                >
                  <Phone size={14} /> Ligar
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent-800"
                >
                  <InstagramMark size={14} /> @grazielleberizonzi
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden border border-ink/10 bg-paper p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-accent-500" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center border border-accent-700/20 bg-white text-accent-800">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-800">
                    Endereço
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Muriaé · MG
                  </p>
                </div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                R. Ítalo Aló de Melo, 337 · Sala 101
                <br />
                Centro, Muriaé - MG
                <br />
                CEP 36880-121
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Grazielle Berizonzi · OAB/MG 184.251
                </p>
                <a
                  href={googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-accent-700 hover:text-accent-800"
                >
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent-950 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="pointer-events-none absolute right-[12%] top-0 h-full w-px bg-white/10" />
          <div className="pointer-events-none absolute right-[12%] top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-300" />
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-300">
                GRAZIELLE BERIZONZI · ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
                Atendimento jurídico começa com uma conversa clara.
              </h2>
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-accent-400 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-transform hover:-translate-y-0.5"
            >
              Fale pelo WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="bg-charcoal px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <Image
                src="/logo(no background).png"
                width={1527}
                height={772}
                alt="Berizonzi Advocacia"
                className="h-[74px] w-[148px] object-contain"
                sizes="148px"
              />
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">
                Advocacia em Muriaé, Minas Gerais. Atendimento próximo e
                orientação jurídica individualizada.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#sobre">
                  Sobre
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
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Canais de contato
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <MessageCircle size={14} /> {formattedPhone} · WhatsApp
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramMark size={14} /> @grazielleberizonzi
                </a>
                <a
                  href={googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Muriaé · MG
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Grazielle Berizonzi Advocacia. Todos
              os direitos reservados.
            </p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Iniciar conversa com Grazielle Berizonzi pelo WhatsApp"
          className="fixed bottom-5 right-5 z-30 hidden items-center gap-2 rounded-full border border-white/15 bg-charcoal px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-card transition-transform hover:-translate-y-0.5 sm:bottom-7 sm:right-7 sm:inline-flex"
        >
          <MessageCircle size={17} className="text-accent-300" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-accent-800"
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
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-700" />
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
                  Conversar pelo WhatsApp <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
