# Decisões de Arquitetura e Planejamento

## Planejamento do Blog (Julho/2026)
Ficou decidido que implementaremos a **Opção 3** para a criação do blog da TamarAI:

* **Arquitetura:** WordPress na subpasta `/blog` via Reverse Proxy.
* **Detalhes da Implementação:**
  * O site principal continuará sendo a SPA em React + Vite hospedada no domínio principal (`tamarai.com.br`).
  * Será criada uma instalação separada do WordPress (em outro servidor ou subdomínio oculto).
  * Usaremos regras do **Cloudflare Workers** (ou Nginx no servidor) para fazer o proxy de `tamarai.com.br/blog/*` apontando para o WordPress.
  * O tema do WordPress será estilizado para seguir a identidade visual do site principal.
* **Objetivo:** Garantir a facilidade de postagem e SEO otimizado com a autoridade concentrada no domínio principal através da subpasta `/blog`, sem a necessidade de migrar o site atual em Vite para Next.js.
