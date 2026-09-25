const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const cards = [
  {
    name: 'Nullbank',
    title: 'Nullbank',
    badge: 'Java 17 • Spring Boot 3',
    subtitle: 'Simulação Bancária & Microsserviços Financeiros',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    accent: '#818cf8',
    icon: 'fas fa-university',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #e2e8f0; line-height: 1.6;">
        <span style="color:#f43f5e;">@PostMapping</span>(<span style="color:#38bdf8;">"/api/v1/transfers"</span>)<br/>
        <span style="color:#818cf8;">public</span> ResponseEntity&lt;TransactionResponse&gt; transfer(<br/>
        &nbsp;&nbsp;<span style="color:#f43f5e;">@Valid @RequestBody</span> TransferDTO dto) {<br/>
        &nbsp;&nbsp;<span style="color:#4ade80;">return</span> ResponseEntity.ok(bankingService.executeTransfer(dto));<br/>
        }
      </div>
    `,
    tags: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'PostgreSQL', 'Tomcat']
  },
  {
    name: 'MetroOn',
    title: 'MetroOn',
    badge: 'React Native • Mobile',
    subtitle: 'Mobilidade Urbana — Metrô / VLT de Sobral-CE',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    accent: '#34d399',
    icon: 'fas fa-subway',
    mockup: `
      <div style="display:flex; gap:16px; align-items:center; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px 20px;">
        <div style="width:48px; height:48px; border-radius:50%; background:rgba(52,211,153,0.2); border:1px solid #34d399; display:flex; align-items:center; justify-content:center; color:#34d399; font-size:22px;">
          🚆
        </div>
        <div>
          <div style="font-size:12px; color:#a7f3d0; text-transform:uppercase; font-weight:700;">Próximo VLT — Estação Boulevard</div>
          <div style="font-size:20px; color:#fff; font-weight:800; margin-top:2px;">Chegando em 3 minutos • No Horário</div>
        </div>
      </div>
    `,
    tags: ['React Native', 'JavaScript', 'REST APIs', 'Mobile UI/UX', 'VLT Sobral']
  },
  {
    name: 'Placa_detect',
    title: 'Placa Detect (ALPR)',
    badge: 'Python • YOLO • OpenCV',
    subtitle: 'Reconhecimento Automático de Placas Veiculares com IA',
    gradient: 'linear-gradient(135deg, #451a03 0%, #78350f 50%, #9a3412 100%)',
    accent: '#fb923c',
    icon: 'fas fa-camera',
    mockup: `
      <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px;">
        <div style="display:flex; justify-content:space-between; color:#fed7aa; margin-bottom:6px;">
          <span>VEHICLE_DETECTION: [BBOX: (142, 210, 480, 310)]</span>
          <span style="color:#4ade80; font-weight:700;">CONF: 99.2%</span>
        </div>
        <div style="background:#0f172a; border:2px dashed #fb923c; border-radius:4px; padding:8px 14px; display:inline-block; font-size:16px; font-weight:800; color:#fff; letter-spacing:3px;">
          BRA-2E19 <span style="font-size:11px; color:#38bdf8; font-weight:400; letter-spacing:0;">(MERCOSUL)</span>
        </div>
      </div>
    `,
    tags: ['Python', 'YOLO Neural Nets', 'OpenCV', 'Docker', 'Computer Vision']
  },
  {
    name: 'concurso-tj-ce',
    title: 'Concurso TJ-CE',
    badge: 'Plataforma de Estudos',
    subtitle: 'Edital Verticalizado, Cronograma & Métricas do Concurso TJ-CE',
    gradient: 'linear-gradient(135deg, #172554 0%, #1e3a8a 50%, #1d4ed8 100%)',
    accent: '#60a5fa',
    icon: 'fas fa-balance-scale',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px;">
        <div style="display:flex; justify-content:space-between; color:#bfdbfe; font-size:12px; margin-bottom:8px; font-weight:600;">
          <span>PROGRESSO DO EDITAL VERTICALIZADO</span>
          <span style="color:#38bdf8;">82% CONCLUÍDO</span>
        </div>
        <div style="width:100%; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;">
          <div style="width:82%; height:100%; background:linear-gradient(90deg, #3b82f6, #60a5fa);"></div>
        </div>
        <div style="margin-top:10px; font-size:12px; color:#93c5fd;">
          ✓ Dir. Constitucional &nbsp;•&nbsp; ✓ Dir. Administrativo &nbsp;•&nbsp; ✓ Processo Civil
        </div>
      </div>
    `,
    tags: ['Python', 'Markdown', 'Cronograma', 'TJ-CE', 'Automação']
  },
  {
    name: 'tcc-aprendizado-federado',
    title: 'Aprendizado Federado (TCC)',
    badge: 'Engenharia UFC • IA Distribuída',
    subtitle: 'Agregação Robusta contra Ataques Bizantinos em Federated Learning',
    gradient: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #6d28d9 100%)',
    accent: '#a78bfa',
    icon: 'fas fa-network-wired',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color:#e9d5ff;">
        <span>w_global = RobustAggregate(clients=[C_1, C_2, ... C_k], method='KRUM')</span><br/>
        <span style="color:#4ade80;">✓ Defesa ativa contra Poisoning Attacks (Byzantine Fault-Tolerant)</span>
      </div>
    `,
    tags: ['Python', 'PyTorch', 'Flower Framework', 'Federated Learning', 'TCC UFC']
  },
  {
    name: 'sistemas-tempo-real-escalonamento',
    title: 'Sistemas de Tempo Real (STR)',
    badge: 'Java • Engenharia de Software',
    subtitle: 'Simulação e Algoritmos de Escalonamento em Tempo Real',
    gradient: 'linear-gradient(135deg, #083344 0%, #155e75 50%, #0e7490 100%)',
    accent: '#22d3ee',
    icon: 'fas fa-microchip',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color:#cffafe;">
        <div>Scheduler: Rate-Monotonic (RMS) & Earliest Deadline First (EDF)</div>
        <div style="color:#4ade80; margin-top:4px;">CPU Utilization: U = &Sigma;(Ci/Ti) &le; n(2^(1/n) - 1) &rarr; Escalonável [OK]</div>
      </div>
    `,
    tags: ['Java', 'Sistemas Operacionais', 'Tempo Real', 'Algoritmos', 'UFC']
  },
  {
    name: 'banco-de-dados-ufc',
    title: 'Banco de Dados Relacional',
    badge: 'PostgreSQL • Modelagem SQL',
    subtitle: 'Arquitetura de Dados, Schemas Otimizados e Stored Procedures',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    accent: '#38bdf8',
    icon: 'fas fa-database',
    mockup: `
      <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color:#e2e8f0;">
        <span style="color:#38bdf8;">CREATE TABLE</span> transactions (<br/>
        &nbsp;&nbsp;id UUID PRIMARY KEY DEFAULT gen_random_uuid(),<br/>
        &nbsp;&nbsp;account_id UUID REFERENCES accounts(id),<br/>
        &nbsp;&nbsp;amount NUMERIC(15,2) NOT NULL CHECK (amount &gt; 0)<br/>
        );
      </div>
    `,
    tags: ['PostgreSQL', 'SQL DDL/DML', 'Modelagem Relacional', 'UFC Sobral']
  },
  {
    name: 'testes-unitarios-junit-java',
    title: 'Testes Unitários com JUnit',
    badge: 'Java • TDD • Qualidade',
    subtitle: 'Arquitetura de Testes Automatizados e Cobertura de Código em Java',
    gradient: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
    accent: '#4ade80',
    icon: 'fas fa-check-double',
    mockup: `
      <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px;">
        <div style="color:#4ade80; font-weight:700;">✔ Tests run: 32, Failures: 0, Errors: 0, Skipped: 0</div>
        <div style="color:#86efac; margin-top:4px;">BUILD SUCCESS &nbsp;•&nbsp; Code Coverage: 94.6%</div>
      </div>
    `,
    tags: ['Java 17', 'JUnit 5', 'AssertJ', 'TDD', 'Testes Automatizados']
  },
  {
    name: 'testes-automatizados-java',
    title: 'Testes Automatizados em Java',
    badge: 'Java • Qualidade de Software',
    subtitle: 'Estratégias de Testes, Asserções e Boas Práticas',
    gradient: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
    accent: '#4ade80',
    icon: 'fas fa-vial',
    mockup: `
      <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px;">
        <div style="color:#4ade80; font-weight:700;">✔ Integration & Unit Suite: 100% Passing</div>
        <div style="color:#94a3b8; margin-top:4px;">Validação de regras financeiras e integridade transacional</div>
      </div>
    `,
    tags: ['Java', 'JUnit', 'CI/CD', 'Engenharia de Software']
  },
  {
    name: 'extensao-overleaf-latex',
    title: 'Extensão Overleaf LaTeX',
    badge: 'Browser Extension • JavaScript',
    subtitle: 'Produtividade e Customizações para o Editor Online Overleaf',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
    accent: '#6ee7b7',
    icon: 'fas fa-puzzle-piece',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color:#d1fae5;">
        <span>Overleaf Productivity Suite: Hotkeys & Quick Formatting Active</span><br/>
        <span style="color:#34d399;">LaTeX Auto-clean & Snippet Enhancer</span>
      </div>
    `,
    tags: ['JavaScript', 'WebExtension', 'LaTeX', 'Overleaf', 'Produtividade']
  },
  {
    name: 'gerador-contratos-meruoca',
    title: 'Gerador de Contratos',
    badge: 'Automação de Documentos',
    subtitle: 'Geração e Gerenciamento Dinâmico de Termos e Contratos',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    accent: '#cbd5e1',
    icon: 'fas fa-file-contract',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-size: 13px; color:#f8fafc;">
        <div>📄 Minuta contratual gerada automaticamente</div>
        <div style="color:#38bdf8; font-weight:600; margin-top:4px;">Parâmetros validados • Exportação em PDF com assinatura</div>
      </div>
    `,
    tags: ['JavaScript', 'Geração de PDF', 'Documentos', 'Automação']
  },
  {
    name: 'plataforma-agricurso',
    title: 'Plataforma Agri-Curso',
    badge: 'EAD • Agricultura Familiar',
    subtitle: 'Portal de Ensino Digital e Capacitação Técnica Rural',
    gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)',
    accent: '#86efac',
    icon: 'fas fa-graduation-cap',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#dcfce7; font-size:13px;">
        <div style="font-weight:700;">🌱 Módulos de Boas Práticas Agrícolas e Gestão Sustentável</div>
        <div style="color:#bbf7d0; margin-top:4px;">Aulas interativas e certificação digital para produtores</div>
      </div>
    `,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'EAD', 'Impacto Social']
  },
  {
    name: 'sistema-fluxo-caixa',
    title: 'Sistema de Fluxo de Caixa',
    badge: 'Finanças • Ponto de Venda',
    subtitle: 'Controle Financeiro, Fechamento de Caixa e Vendas',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #4338ca 100%)',
    accent: '#a5b4fc',
    icon: 'fas fa-cash-register',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#e0e7ff; font-size:13px;">
        <div style="display:flex; justify-content:space-between; font-weight:700;">
          <span>Saldo do Dia: R$ 4.850,00</span>
          <span style="color:#4ade80;">+18.4%</span>
        </div>
        <div style="margin-top:6px; color:#c7d2fe;">Entradas / Saídas e Conciliação em Tempo Real</div>
      </div>
    `,
    tags: ['JavaScript', 'Finanças', 'PDV', 'Gestão']
  },
  {
    name: 'agendamento-transporte-bus',
    title: 'Agendamento de Transporte',
    badge: 'Mobilidade • Rotas',
    subtitle: 'Gestão de Passageiros, Horários e Reservas de Transporte',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)',
    accent: '#7dd3fc',
    icon: 'fas fa-bus',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#e0f2fe; font-size:13px;">
        <div style="font-weight:700;">Itinerário: Sobral &rarr; Fortaleza</div>
        <div style="color:#38bdf8; margin-top:4px;">38 Assentos Confirmados • Lista de Embarque Pronta</div>
      </div>
    `,
    tags: ['JavaScript', 'Mobilidade', 'Agendamento', 'Transporte']
  },
  {
    name: 'game-platform-web',
    title: 'Game Platform Web',
    badge: 'Jogos Web • HTML5 Canvas',
    subtitle: 'Catálogo de Minigames Interativos Desenvolvidos em JavaScript',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #581c87 50%, #7e22ce 100%)',
    accent: '#d8b4fe',
    icon: 'fas fa-gamepad',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#f3e8ff; font-size:13px;">
        <div style="font-weight:700;">🎮 Arcade Hub — Minigames com Leaderboard</div>
        <div style="color:#c084fc; margin-top:4px;">Loop de física 60 FPS com Canvas 2D / WebGL</div>
      </div>
    `,
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Loop', 'WebGL']
  },
  {
    name: 'ecommerce-loja-virtual',
    title: 'E-Commerce Loja Virtual',
    badge: 'Comércio Eletrônico',
    subtitle: 'Catálogo de Produtos, Carrinho Reativo e Checkout Integrado',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    accent: '#818cf8',
    icon: 'fas fa-shopping-cart',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#e2e8f0; font-size:13px;">
        <div style="display:flex; justify-content:space-between; font-weight:700;">
          <span>Carrinho: 3 itens</span>
          <span style="color:#4ade80;">Total: R$ 349,90</span>
        </div>
        <div style="margin-top:4px; color:#94a3b8;">Cálculo de frete em tempo real e checkout integrado</div>
      </div>
    `,
    tags: ['JavaScript', 'CSS3', 'E-commerce', 'Checkout']
  },
  {
    name: 'UniMove',
    title: 'UniMove UFC',
    badge: 'Mobilidade Acadêmica',
    subtitle: 'Plataforma de Caronas e Transporte entre Estudantes da UFC Sobral',
    gradient: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)',
    accent: '#60a5fa',
    icon: 'fas fa-car-side',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#e5e7eb; font-size:13px;">
        <div style="font-weight:700; color:#60a5fa;">Rota: Campus Mucambinho &harr; Campus Derby</div>
        <div style="margin-top:4px;">Integração e caronas seguras entre alunos da UFC</div>
      </div>
    `,
    tags: ['React', 'JavaScript', 'UI/UX', 'UFC Sobral']
  },
  {
    name: 'VendaSaas',
    title: 'VendaSaaS',
    badge: 'SaaS • Automação Comercial',
    subtitle: 'Gestão de Vendas, Assinaturas Recorrentes e Painel Financeiro',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 50%, #3b0764 100%)',
    accent: '#a855f7',
    icon: 'fas fa-chart-line',
    mockup: `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; color:#f3e8ff; font-size:13px;">
        <div style="display:flex; justify-content:space-between; font-weight:700;">
          <span>MRR: R$ 12.400,00</span>
          <span style="color:#4ade80;">+32% Crescimento</span>
        </div>
        <div style="margin-top:4px; color:#c084fc;">Provisionamento automático e webhooks de pagamento</div>
      </div>
    `,
    tags: ['Node.js', 'React', 'SaaS', 'Stripe/Asaas', 'PostgreSQL']
  },
  {
    name: 'english-immersion-os',
    title: 'English Immersion OS',
    badge: 'IA & Linguagem',
    subtitle: 'Ambiente de Imersão e Prática de Inglês com IA Conversacional',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #0284c7 100%)',
    accent: '#38bdf8',
    icon: 'fas fa-language',
    mockup: `
      <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono', monospace; font-size:13px; color:#e0f2fe;">
        <div>User: "How do I explain Byzantine faults in a system design interview?"</div>
        <div style="color:#38bdf8; margin-top:6px;">AI Tutor: "Focus on consensus, malicious nodes, and 3f+1 tolerance..."</div>
      </div>
    `,
    tags: ['TypeScript', 'LLMs', 'Inglês Técnico', 'Voice / Chat']
  }
];

function generateHTML(card) {
  const tagsHtml = card.tags.map(t => `<span style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15); color:#fff; font-size:11px; padding:4px 10px; border-radius:20px; font-weight:600;">${t}</span>`).join(' ');
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 800px;
          height: 450px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: ${card.gradient};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 36px 42px;
          color: #fff;
          overflow: hidden;
          position: relative;
        }
        .glow {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: ${card.accent};
          filter: blur(90px);
          opacity: 0.25;
        }
        .header {
          position: relative;
          z-index: 2;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .title {
          font-size: 38px;
          font-weight: 900;
          letter-spacing: -0.5px;
          color: #ffffff;
          line-height: 1.15;
        }
        .subtitle {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          margin-top: 6px;
          font-weight: 500;
        }
        .body {
          position: relative;
          z-index: 2;
          margin: 14px 0;
        }
        .footer {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <div class="glow"></div>
      <div class="header">
        <div class="badge">${card.badge}</div>
        <div class="title">${card.title}</div>
        <div class="subtitle">${card.subtitle}</div>
      </div>
      <div class="body">
        ${card.mockup}
      </div>
      <div class="footer">
        ${tagsHtml}
      </div>
    </body>
    </html>
  `;
}

(async () => {
  const screenshotsDir = path.join(__dirname, 'assets', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 800, height: 450 },
    deviceScaleFactor: 1
  });

  for (const card of cards) {
    const page = await context.newPage();
    const outPath = path.join(screenshotsDir, `${card.name}.png`);
    console.log(`Generating card banner: ${card.name} -> ${outPath}`);
    await page.setContent(generateHTML(card), { waitUntil: 'load' });
    await page.screenshot({ path: outPath });
    console.log(`  OK: ${card.name}.png`);
    await page.close();
  }

  await browser.close();
  console.log('All card banners generated successfully!');
})();
