import { Container } from '../components/ui/container';
import { SectionWrapper } from '../components/ui/section-wrapper';
import { Button } from '../components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function TermosUso() {
    const navigate = useNavigate();

    return (
        <SectionWrapper className="pt-32 pb-16 min-h-screen bg-brand-navy">
            <Container className="max-w-4xl">
                <Button
                    variant="ghost"
                    className="mb-8 pl-0 hover:pl-2 transition-all text-brand-gold hover:text-white"
                    onClick={() => navigate('/')}
                >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Voltar para Home
                </Button>

                <h1 className="text-4xl md:text-5xl font-display text-white mb-12">Termos de Uso</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Introdução</h2>
                        <p>
                            Estes Termos de Uso regulam o acesso e utilização da plataforma TamarAI.
                            Ao se cadastrar, você concorda com as regras abaixo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Serviços</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Plataforma de automação e agendamento inteligente.</li>
                            <li>Landing Pages de alta conversão.</li>
                            <li>Cartões Virtuais interativos e sustentáveis.</li>
                            <li>Sites Institucionais otimizados para SEO.</li>
                            <li>Integração com WhatsApp para lembretes automáticos.</li>
                            <li>Planos de assinatura mensal em formato de microSaaS acessível.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Cadastro</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>O usuário deve fornecer informações verdadeiras e atualizadas.</li>
                            <li>É responsável por manter a confidencialidade de suas credenciais.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Pagamentos</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Processados via <strong>Stripe</strong>.</li>
                            <li>Renovação automática mensal.</li>
                            <li>Cancelamento pode ser feito a qualquer momento, sem multa.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Restrições</h2>
                        <p className="mb-2">É proibido:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Usar a plataforma para fins ilegais.</li>
                            <li>Tentar acessar dados de outros usuários.</li>
                            <li>Copiar ou distribuir o software sem autorização.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Propriedade Intelectual</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Todo o código, design e marca TamarAI são propriedade exclusiva da startup.</li>
                            <li>O uso indevido pode gerar responsabilidade civil e criminal.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Limitação de Responsabilidade</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A TamarAI não se responsabiliza por falhas externas (internet, serviços de terceiros).</li>
                            <li>O usuário é responsável pelo uso correto da plataforma.</li>
                            <li>A TamarAI fornece ferramentas digitais, mas não garante resultados comerciais diretos (como aumento de vendas).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Alterações</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Os termos podem ser atualizados.</li>
                            <li>Alterações relevantes serão comunicadas por e-mail ou na plataforma.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Legislação</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Aplicável: <strong>LGPD</strong> e legislação brasileira.</li>
                            <li>Foro: Icó/CE.</li>
                        </ul>
                    </section>
                </div>
            </Container>
        </SectionWrapper>
    );
}
