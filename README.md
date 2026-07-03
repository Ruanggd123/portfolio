# 🚀 Ruan Damasceno — Portfólio

Site portfólio profissional de **Ruan Gomes Damasceno**, Desenvolvedor Full Stack e estudante de Engenharia de Computação na UFC Sobral.

## ✨ Funcionalidades

- **Hero animado** com efeito de digitação (typed), card de código e badge de disponibilidade
- **Sobre mim** com estatísticas animadas (contadores) e stack tecnológico
- **Projetos dinâmicos** — busca automática dos repositórios públicos do GitHub (`Ruanggd123`) via API, com filtros por categoria (Web, Mobile, Acadêmico, Ferramentas)
- **Serviços / Preços** — seção comercial para venda de sites e sistemas (Landing Page, Site Institucional, Sistema Web, Automações)
- **Contato** com links sociais e formulário (pronto para plugar no Formspree/EmailJS)
- **Tema dark moderno** com glassmorphism, gradientes e animações suaves
- **Totalmente responsivo** (mobile, tablet, desktop)
- **Sem dependências de build** — HTML + CSS + JS puros, pronto para GitHub Pages

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis CSS, grid, flexbox, animações)
- JavaScript vanilla (ES6+, fetch API, Intersection Observer)
- Font Awesome 6 (ícones)
- Google Fonts (Inter + JetBrains Mono)
- GitHub REST API (repositórios dinâmicos)

## 📂 Estrutura

```
portfolio/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos (tema dark, responsivo)
├── js/
│   ├── projects.js     # Busca dinâmica dos repositórios do GitHub
│   └── main.js         # Lógica da página (nav, typed, contadores, form)
├── assets/             # (vazio - coloque imagens/seu currículo aqui)
├── README.md
└── LICENSE
```

## 🔧 Personalização

Tudo que precisa ser editado está em `index.html`:

1. **Links sociais** (LinkedIn, WhatsApp, e-mail) — procure por `hero-social` e `contact-info`
2. **Bio/sobre** — seção `#sobre`
3. **Preços** — seção `#servicos` (altere os valores nos `.price-value`)
4. **Meta dos projetos** — edite `PROJECT_META` em `js/projects.js` para customizar descrições e categorias dos seus repositórios
5. **Usuário do GitHub** — troque `GITHUB_USER` em `js/projects.js` se mudar de conta

## 🚀 Deploy no GitHub Pages

1. Crie o repositório `portfolio` no GitHub (ou use o nome que preferir)
2. Faça push dos arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/Ruanggd123/portfolio.git
   git push -u origin main
   ```
3. Vá em **Settings > Pages** do repositório
4. Em **Source**, escolha `Deploy from a branch`
5. Selecione `main` e a pasta `/ (root)`
6. Salve. Seu site ficará disponível em:
   ```
   https://ruanggd123.github.io/portfolio/
   ```

## 🔌 Formulário de contato

O formulário é apenas visual. Para deixá-lo funcional, recomendamos:

- **Formspree** (mais simples): https://formspree.io — basta apontar o `action` do form para seu endpoint
- **EmailJS**: https://www.emailjs.com — envia e-mails direto do frontend
- **Netlify Forms** (se hospedar no Netlify): forms automáticos

## 📈 API do GitHub

- Endpoint: `https://api.github.com/users/Ruanggd123/repos?per_page=100&sort=updated`
- Limite: 60 requests/hora sem token (suficiente para um portfólio)
- Se quiser exibir repositórios privados ou aumentar o limite, crie um token em https://github.com/settings/tokens e adicione no header do fetch (atenção: tokens no frontend são públicos!)

## 👤 Autor

**Ruan Gomes Damasceno**
- GitHub: [@Ruanggd123](https://github.com/Ruanggd123)
- Engenharia de Computação — UFC Sobral

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para detalhes.
Sinta-se livre para usar como template do seu próprio portfólio! 🎉
