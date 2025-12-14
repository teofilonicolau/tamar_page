import { Container } from '../components/ui/container';
import { SectionWrapper } from '../components/ui/section-wrapper';
import { Button } from '../components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PoliticaPrivacidade() {
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

                <h1 className="text-4xl md:text-5xl font-display text-white mb-12">Política de Privacidade</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Introdução</h2>
                        <p>Na TamarAI, valorizamos a confiança dos nossos clientes. Esta Política de Privacidade explica como coletamos, usamos e protegemos seus dados pessoais ao utilizar nossos serviços de automação e agendamento.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Dados Coletados</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Informações de cadastro: nome, e-mail, telefone.</li>
                            <li>Dados de pagamento: processados pelo <strong>Stripe</strong>, nunca armazenados diretamente pela TamarAI.</li>
                            <li>Dados de uso: registros de acesso, preferências e interações no sistema.</li>
                            <li>Cookies e tecnologias similares: para melhorar a experiência na landing page e no app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Finalidade</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Permitir acesso ao sistema de agendamento e automação.</li>
                            <li>Processar pagamentos recorrentes.</li>
                            <li>Enviar notificações e lembretes via WhatsApp API.</li>
                            <li>Melhorar continuamente nossos serviços.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Compartilhamento</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Stripe</strong>: para processar pagamentos.</li>
                            <li><strong>Supabase</strong>: para autenticação e armazenamento seguro.</li>
                            <li>Não vendemos nem compartilhamos dados com terceiros para fins comerciais.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Segurança</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Utilizamos criptografia e boas práticas de segurança.</li>
                            <li>Dados sensíveis são tratados conforme a <strong>LGPD</strong> (Lei Geral de Proteção de Dados).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Direitos do Usuário</h2>
                        <p className="mb-2">Você pode solicitar:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Acesso aos seus dados.</li>
                            <li>Correção ou exclusão.</li>
                            <li>Cancelamento de consentimento.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contato</h2>
                        <p>Dúvidas? Entre em contato: <strong>teofilonicolau157@gmail.com</strong></p>
                    </section>
                </div>
            </Container>
        </SectionWrapper>
    );
}
