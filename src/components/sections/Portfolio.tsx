import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { ExternalLink, Github, Instagram } from 'lucide-react';

const projects = [
    {
        id: '01',
        category: 'IA Jurídica',
        title: 'Agente de Petições',
        description:
            'Protótipo de estagiário digital criado com LangChain + RAG. Automatiza a geração de petições jurídicas — economizando até 90% do tempo dos advogados.',
        tech: ['LangChain', 'RAG', 'Python', 'LLM'],
        color: 'from-purple-900/40 to-brand-dark',
        accent: '#8C45FF',
        link: null,
        github: 'https://github.com/teofilonicolau',
    },
    {
        id: '02',
        category: 'SEO + Dev',
        title: 'Site Previdenciário',
        description:
            'Refatoração completa de landing page para escritório previdenciário. Resultados expressivos de SEO local em 6 meses — levou ao convite para gerir o marketing do escritório.',
        tech: ['React', 'SEO', 'TypeScript', 'Vite'],
        color: 'from-indigo-900/40 to-brand-dark',
        accent: '#6366F1',
        link: 'https://riannicolauadv.adv.br/',
        github: null,
    },
    {
        id: '03',
        category: 'Cartão Digital',
        title: 'VCard + QR Code',
        description:
            'Cartão de visita digital com QR Code inteligente, compartilhamento via NFC e arquivo .vcf para salvar contato instantaneamente. Produto disponível para clientes TamarAI.',
        tech: ['React', 'QR Code', 'VCF', 'PWA'],
        color: 'from-violet-900/40 to-brand-dark',
        accent: '#A78BFA',
        link: '/cartao',
        github: null,
    },
    {
        id: '04',
        category: 'Startup',
        title: 'TamarAI',
        description:
            'A própria agência — construída do zero com React 19, Vite, TypeScript, Framer Motion, SEO técnico completo (JSON-LD, canonical, sitemap) e deploy na Vercel.',
        tech: ['React 19', 'Vite', 'Tailwind', 'Framer Motion'],
        color: 'from-fuchsia-900/40 to-brand-dark',
        accent: '#D946EF',
        link: '/',
        github: null,
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="relative py-40 bg-brand-dark overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/4 blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-px w-10 bg-brand-gold/50" />
                        <span className="text-brand-gold/70 text-xs font-sans tracking-[0.35em] uppercase font-medium">
                            Portfólio
                        </span>
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl text-white tracking-[0.06em] leading-none">
                        PROJETOS
                    </h2>
                    <p className="mt-5 text-white/35 font-sans text-sm tracking-[0.15em] uppercase">
                        Do zero ao resultado
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className={`group relative bg-gradient-to-br ${p.color} border border-white/5 rounded-2xl p-8 md:p-10 overflow-hidden hover:border-white/15 transition-all duration-500 hover:-translate-y-1`}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 30% 30%, ${p.accent}15, transparent 65%)`
                                }}
                            />

                            {/* Number */}
                            <span
                                className="absolute top-8 right-8 font-display text-7xl leading-none select-none transition-all duration-500 group-hover:scale-110"
                                style={{ color: `${p.accent}12` }}
                            >
                                {p.id}
                            </span>

                            {/* Category pill */}
                            <span
                                className="inline-block text-[10px] font-sans font-medium tracking-[0.3em] uppercase px-3 py-1 rounded-full border mb-6"
                                style={{ color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}10` }}
                            >
                                {p.category}
                            </span>

                            {/* Title */}
                            <h3 className="font-display text-3xl md:text-4xl text-white tracking-[0.06em] mb-4 leading-tight">
                                {p.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/45 font-sans text-sm leading-relaxed mb-8 font-light max-w-md">
                                {p.description}
                            </p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {p.tech.map(t => (
                                    <span key={t} className="text-[10px] font-sans text-white/30 tracking-[0.15em] uppercase border border-white/8 px-2.5 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {p.link && (
                                    <a
                                        href={p.link}
                                        target={p.link.startsWith('http') ? '_blank' : undefined}
                                        rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="group/btn inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-medium transition-colors duration-300"
                                        style={{ color: p.accent }}
                                    >
                                        <ExternalLink size={12} />
                                        Ver projeto
                                    </a>
                                )}
                                {p.github && (
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
                                    >
                                        <Github size={12} />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Instagram callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/8 rounded-2xl p-8 bg-white/2"
                >
                    <div>
                        <p className="text-white/70 font-sans text-sm font-light leading-relaxed">
                            Mais projetos, bastidores e processos no Instagram.
                        </p>
                        <p className="text-white/30 font-sans text-xs tracking-[0.15em] uppercase mt-1">
                            Conteúdo novo toda semana
                        </p>
                    </div>
                    <a
                        href="https://www.instagram.com/tamar_ia_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 border border-brand-gold/40 text-brand-gold font-sans text-sm tracking-[0.18em] uppercase hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-400"
                    >
                        <Instagram size={15} />
                        @tamar_ia_
                    </a>
                </motion.div>
            </Container>
        </section>
    );
}
