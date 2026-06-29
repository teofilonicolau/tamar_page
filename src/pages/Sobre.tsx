import { motion } from 'framer-motion';
import { Container } from '../components/ui/container';
import { SectionWrapper } from '../components/ui/section-wrapper';
import { Rocket, Code, Terminal, Brain, Heart, ChevronLeft, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sobre() {
    return (
        <div className="pt-20">
            <SectionWrapper className="bg-brand-navy min-h-screen">
                <Container>
                    {/* Back to Home */}
                    <div className="mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors group">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            Voltar para a Home
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl">
                                <img
                                    src="/assets/images/teofilo-profile.webp"
                                    alt="Teofilo Nicolau"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Floating Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-6 -right-6 bg-brand-dark p-6 rounded-xl border border-white/10 shadow-xl backdrop-blur-sm"
                            >
                                <div className="flex gap-4 text-brand-gold">
                                    <Code size={24} />
                                    <div className="h-6 w-px bg-white/20" />
                                    <Terminal size={24} />
                                    <div className="h-6 w-px bg-white/20" />
                                    <Brain size={24} />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Intro Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 space-y-6"
                        >
                            <h1 className="text-5xl md:text-7xl font-display text-white">
                                Minha <span className="text-brand-gold">Jornada</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Eu sou <strong className="text-white">Teofilo Nicolau</strong>. Fundador da TamarAI,
                                AI Automation Engineer e a prova viva de que nunca é tarde para recomeçar.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Antes de qualquer linha de código, fui comerciante, confeiteiro e vendedor de quentinha.
                                Comecei do zero na programação aos 54 anos — mal sabia ligar o notebook.
                                Hoje crio agentes de IA, automatizo negócios e ajudo empresas a crescerem com tecnologia.
                            </p>
                            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-2">
                                <Sparkles size={16} className="text-brand-gold" />
                                <span className="text-brand-gold text-sm font-medium">
                                    AI Automation & Growth Engineer · Fundador da TamarAI
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Timeline / Story */}
                    <div className="max-w-3xl mx-auto space-y-20">

                        {/* Capítulo 1 - Antes */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative border-l-2 border-brand-gold/30 pl-8 md:pl-12 py-4"
                        >
                            <span className="absolute -left-[11px] top-0 bg-brand-navy border-2 border-brand-gold rounded-full p-1 text-brand-gold">
                                <Heart size={20} />
                            </span>
                            <h3 className="text-3xl font-display text-white mb-4">Antes do Código</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Eu tinha cansado de preencher currículos.
                                </p>
                                <p>
                                    Cansado de participar de processos seletivos. Cansado de receber e-mails com frases como: "Obrigado pelo interesse" ou "Você não foi selecionado desta vez".
                                </p>
                                <p>
                                    Com 59 anos, depois de uma vida inteira de trabalho honesto como comerciante, confeiteiro e vendedor de quentinhas, percebi que muitos dos "nãos" que eu recebia tinham algo em comum: a minha idade.
                                </p>
                                <p className="text-white font-medium text-lg">
                                    Mesmo assim, resolvi fazer algo que muita gente consideraria improvável: aprender programação do zero.
                                </p>
                                <p>
                                    O problema? Eu mal sabia ligar o notebook direito.
                                </p>
                                <p>
                                    Mas fui em frente. Bootcamps, vídeos, documentações, erros, dúvidas e muito aprendizado.
                                </p>
                                <p>
                                    Foi nesse caminho que conheci a <strong className="text-brand-gold">Dona IA</strong>.
                                </p>
                                <p>
                                    Gostei dela na hora. Resolvi aprender a conversar com ela. Descobri o Prompt Engineering na prática, usando, testando, errando e acertando.
                                </p>
                                <p className="text-white font-semibold">
                                    Se o mercado insistia em olhar para a minha idade, eu decidi mostrar minha capacidade de aprender.
                                </p>
                                <p>
                                    A tecnologia me ensinou uma coisa importante: conhecimento não tem prazo de validade.
                                </p>
                                <p className="italic text-brand-gold">
                                    E eu ainda estou aprendendo.
                                </p>
                            </div>
                        </motion.div>

                        {/* Capítulo 2 - A Faísca */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative border-l-2 border-brand-gold/30 pl-8 md:pl-12 py-4"
                        >
                            <span className="absolute -left-[11px] top-0 bg-brand-navy border-2 border-brand-gold rounded-full p-1 text-brand-gold">
                                <Rocket size={20} />
                            </span>
                            <h3 className="text-3xl font-display text-white mb-4">A Faísca que Acendeu Tudo</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Depois de mais bootcamps e muita pesquisa, em março de 2025, um advogado me fez uma pergunta
                                    que mudou tudo:
                                </p>
                                <blockquote className="border-l-4 border-brand-gold pl-4 italic text-white my-4 bg-white/5 p-4 rounded-r-lg">
                                    "Eu gasto 3 horas escrevendo uma petição que segue sempre o mesmo padrão...
                                    você seria capaz de criar um robô que fizesse isso?"
                                </blockquote>
                                <p>
                                    Não esperei o momento perfeito. Mergulhei de cabeça: LangChain, RAG, agentes de IA,
                                    madrugadas de código e muitos erros.
                                </p>
                                <p className="font-semibold text-brand-gold text-lg">
                                    O resultado? Um protótipo de estagiário digital — um agente que criava petições e
                                    cálculos jurídicos, economizando até 90% do tempo dos advogados.
                                </p>
                                <p>
                                    Aí eu entendi que estava no caminho certo. E não parei mais.
                                </p>
                            </div>
                        </motion.div>

                        {/* Capítulo 3 - TamarAI */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative border-l-2 border-brand-gold/30 pl-8 md:pl-12 py-4"
                        >
                            <span className="absolute -left-[11px] top-0 bg-brand-navy border-2 border-brand-gold rounded-full p-1 text-brand-gold">
                                <Code size={20} />
                            </span>
                            <h3 className="text-3xl font-display text-white mb-4">O Nascimento da TamarAI</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Depois de vários projetos, alguns "nãos" no caminho e mais bootcamps,
                                    criei a <strong className="text-white">TamarAI</strong> — minha startup,
                                    meu trabalho e meu propósito.
                                </p>
                                <p>
                                    Comecei criando agentes para me ajudar no marketing. Depois encarei um novo desafio:
                                    refatorar a landing page de um escritório previdenciário. Depois um blog. E então
                                    conheci o SEO.
                                </p>
                                <p className="font-semibold text-brand-gold">
                                    Em 6 meses, resultados concretos. Fui convidado a assumir também
                                    o marketing digital do escritório. 👏
                                </p>
                                <p>
                                    Hoje estudo tráfego pago, crio agentes que me ajudam a trabalhar melhor
                                    e sigo construindo — um projeto, um cliente, um desafio de cada vez.
                                </p>
                                <p className="text-gray-400 text-sm italic">
                                    Não sou muito bom em decorar o nome de cada ferramenta — minha memória é visual.
                                    Mas graças a Deus eu consigo resolver os desafios. 😊
                                </p>
                            </div>
                        </motion.div>

                        {/* Capítulo 4 - Hoje */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative border-l-2 border-brand-gold/30 pl-8 md:pl-12 py-4"
                        >
                            <span className="absolute -left-[11px] top-0 bg-brand-navy border-2 border-brand-gold rounded-full p-1 text-brand-gold">
                                <TrendingUp size={20} />
                            </span>
                            <h3 className="text-3xl font-display text-white mb-4">O que Faço Hoje</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Pela TamarAI, ajudo pequenas e médias empresas do Ceará e do Brasil
                                a crescerem com tecnologia acessível — sem precisar entender de código:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Landing pages que convertem de verdade",
                                    "Automações com IA para economizar tempo",
                                    "Agentes inteligentes para WhatsApp",
                                    "SEO local para aparecer no Google",
                                    "Tráfego pago no Google e Instagram",
                                    "Cartões digitais com QR Code"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                                        <span className="text-sm text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Final */}
                        <div className="text-center pt-8 pb-16">
                            <p className="text-xl text-gray-300 mb-3 leading-relaxed">
                                Se um ex-vendedor de quentinha conseguiu criar uma startup de IA saindo do zero,
                            </p>
                            <p className="text-2xl font-display text-white mb-8">
                                imagina o que a gente pode fazer pelo seu negócio. 🚀
                            </p>
                            <Link to="/">
                                <strong className="text-brand-gold text-lg hover:underline cursor-pointer">
                                    Vamos construir juntos?
                                </strong>
                            </Link>
                        </div>

                    </div>
                </Container>
            </SectionWrapper>
        </div>
    );
}
