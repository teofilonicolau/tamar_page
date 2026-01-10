# TamarAI - Soluções Digitais Inteligentes

Landing Page institucional moderna e interativa para a **TamarAI**, uma startup focada em transformar a advocacia e microempreendimentos com inteligência artificial, automação e design acessível.

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/da449108-09aa-4a0c-9925-8817a5831b9e" />


## 🚀 Sobre o Projeto

Este projeto é a vitrine digital da TamarAI. Mais do que um site estático, é uma plataforma de apresentação que demonstra na prática as soluções oferecidas, como:
- **Automação de Petições:** "LawClerk" e outras ferramentas jurídicas.
- **Landing Pages de Alta Conversão:** Design focado em resultados.
- **Cartões de Visita Digitais:** Solução completa com QR Code e arquivo VCF para networking.
- **Automação de Atendimento:** Chatbots inteligentes via WhatsApp.

### ✨ Destaques da Interface
- **Animações Fluidas:** Uso de `framer-motion` para transições suaves e elementos interativos.
- **Cartão Digital Integrado:** Página dedicada (`/cartao`) com compartilhamento via QR Code e download de contato.
- **Design Responsivo:** Totalmente adaptado para mobile (Mobile-First) e desktop.
- **Demo Interativa:** Seção exclusiva "Wow Factor" onde o usuário visualiza prévias reais dos serviços (VCard giratório, LP scrollando, etc.).
- **Modo Dark Premium:** Paleta de cores sofisticada (Navy & Gold) transmitindo autoridade e tecnologia.

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v3](https://tailwindcss.com/) + CSS Variables
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Roteamento:** [React Router DOM](https://reactrouter.com/)

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura componentizada e limpa:

```
src/
├── components/
│   ├── layout/       # Componentes estruturais (Header, Footer)
│   ├── sections/     # Seções da Landing Page (Hero, Benefits, Demo, etc.)
│   │   └── demo/     # Sub-componentes da demonstração interativa
│   └── ui/           # Componentes base reutilizáveis (Button, Card, etc.)
├── constants/        # Textos e configurações centralizadas
├── lib/              # Utilitários (cn, helpers)
├── pages/            # Páginas da aplicação (Home, Sobre)
└── index.css         # Estilos globais e configuração Tailwind
```

## 🚀 Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/teofilonicolau/tamar_page.git
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  **Build para produção:**
    ```bash
    npm run build
    ```

## 👤 Autor

**Teofilo Nicolau**
*   *Lifelong Learner | Dev FullStack Jr | Prompt Engineer*
*   [LinkedIn](https://www.linkedin.com/in/teofilo-nicolau/)
*   [Instagram](https://www.instagram.com/tamar_ia_)
*   [Email](mailto:teofilonicolau157@gmail.com)

---

Desenvolvido com 💙 e ☕ pela **TamarAI**.
