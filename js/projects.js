/* ===========================================
   Busca dinâmica dos repositórios do GitHub
   GitHub: Ruanggd123
   =========================================== */

const GITHUB_USER = 'Ruanggd123';

/* Projetos em destaque que devem sempre ser garantidos e exibidos com prioridade */
const PINNED_PROJECTS = [
  {
    name: 'Certifica-ESG-AgriFamiliar',
    description: 'Plataforma SaaS para assistência técnica rural (ATER ESG) e certificação sustentável na agricultura familiar com mapas GIS e visualização 3D.',
    language: 'TypeScript',
    html_url: 'https://github.com/Ruanggd123/Certifica-AgriFamiliar-ESG',
    homepage: 'https://idc-despertar-da-cidadania.web.app/',
    stargazers_count: 3,
    updated_at: '2026-09-25T11:00:00Z',
    fork: false
  },
  {
    name: 'MetroOn',
    description: 'Aplicativo mobile em React Native para passageiros do sistema VLT de Sobral-CE com horários e rotas em tempo real.',
    language: 'JavaScript',
    html_url: 'https://github.com/ocJew/metroon.app',
    homepage: 'https://github.com/ocJew/metroon.app',
    stargazers_count: 4,
    updated_at: '2026-09-20T10:00:00Z',
    fork: false
  },
  {
    name: 'Nullbank',
    description: 'Sistema de simulação de operações bancárias e microsserviços financeiros em Java 17, Spring Boot 3 e Apache Tomcat.',
    language: 'Java',
    html_url: 'https://github.com/Ruanggd123',
    homepage: '',
    stargazers_count: 2,
    updated_at: '2026-08-30T10:00:00Z',
    fork: false
  },
  {
    name: 'Placa_detect',
    description: 'Sistema de Reconhecimento Automático de Placas Veiculares (ALPR) com Redes Neurais YOLO e OpenCV em contêineres Docker.',
    language: 'Python',
    html_url: 'https://github.com/Ruanggd123',
    homepage: '',
    stargazers_count: 2,
    updated_at: '2026-08-25T10:00:00Z',
    fork: false
  },
  {
    name: 'Sistema-Reservas-Mesas',
    description: 'Aplicativo mobile para controle de pedidos, fluxo de atendimento e reservas gastronômicas em tempo real com Firebase.',
    language: 'JavaScript',
    html_url: 'https://github.com/Ruanggd123',
    homepage: '',
    stargazers_count: 1,
    updated_at: '2026-08-10T10:00:00Z',
    fork: false
  }
];

/* Metadados detalhados de cada projeto */
const PROJECT_META = {
  'Certifica-ESG-AgriFamiliar': {
    category: 'web',
    tag: 'SaaS / ESG',
    desc: 'Plataforma SaaS para assistência técnica rural e certificação ESG na agricultura familiar com mapas GIS e visualizações 3D.',
    demo: 'https://idc-despertar-da-cidadania.web.app/',
    conceito: 'Solução inovadora de impacto socioambiental para diagnosticar, monitorar e valorizar as práticas ambientais, sociais e de governança (ESG) de produtores rurais.',
    utilidade: 'Gera relatórios de auditoria, laudos em PDF/Excel, emissão de QR Codes dinâmicos e rastreabilidade geoespacial dos polígonos produtivos.',
    funcionamento: 'Arquitetura com React 19, TypeScript, Vite, Tailwind CSS, Supabase (PostgreSQL), Leaflet GIS (com demarcação de áreas), Three.js para renderização 3D e app mobile híbrido via Capacitor.'
  },
  'Certifica-AgriFamiliar-ESG': {
    category: 'web',
    tag: 'SaaS / ESG',
    desc: 'Ecossistema completo de inovação tecnológica para ATER e conformidade ESG na agricultura familiar.',
    demo: 'https://idc-despertar-da-cidadania.web.app/',
    conceito: 'Plataforma de inovação do Instituto Despertar da Cidadania (IDC) para capacitação e emissão de laudos de sustentabilidade.',
    utilidade: 'Permite aos técnicos de campo coletar dados offline/online e emitir relatórios auditáveis com mapas de satélite.',
    funcionamento: 'React 19, TypeScript, Supabase/PostgreSQL, Leaflet e visualização 3D interativa.'
  },
  'MetroOn': {
    category: 'mobile',
    tag: 'Mobile / VLT',
    desc: 'Aplicativo mobile voltado para passageiros do VLT de Sobral-CE, com itinerários, horários e rotas em tempo real.',
    demo: 'https://github.com/ocJew/metroon.app',
    conceito: 'Ferramenta de mobilidade urbana para facilitar o dia a dia dos usuários do metrô leve sobre trilhos de Sobral.',
    utilidade: 'Otimiza o tempo de deslocamento do passageiro ao fornecer estimativas precisas de chegada do próximo trem.',
    funcionamento: 'Desenvolvido em React Native com consumo de rotas REST, componentes mobile performáticos e interface intuitiva.'
  },
  'metroon': {
    category: 'mobile',
    tag: 'Mobile',
    desc: 'Aplicativo móvel para acompanhamento do VLT de Sobral-CE em React Native.',
    demo: 'https://github.com/ocJew/metroon.app',
    conceito: 'Mobilidade urbana em tempo real para os usuários do transporte público de Sobral.',
    utilidade: 'Consulta rápida de itinerários e estações.',
    funcionamento: 'React Native com navegação nativa e APIs REST.'
  },
  'Nullbank': {
    category: 'academico',
    tag: 'Java / Backend',
    desc: 'Simulação de operações bancárias e microsserviços financeiros em Java 17, Spring Boot 3 e Apache Tomcat.',
    conceito: 'Aplicação bancária robusta focada em regras de negócio financeiras, consistência de dados e segurança.',
    utilidade: 'Simula abertura de contas, transferências, autenticação segura e conciliação de transações.',
    funcionamento: 'Construído em Java 17 com Spring Boot 3, Spring Data JPA, Spring Security, Apache Tomcat e persistência em PostgreSQL.'
  },
  'Sistema-Reservas-Mesas': {
    category: 'mobile',
    tag: 'Mobile / Food',
    desc: 'Aplicativo mobile para controle de mesas, pedidos e reservas gastronômicas em tempo real.',
    conceito: 'Gestão operacional de restaurantes visando eliminar filas e atrasos nos pedidos.',
    utilidade: 'Garçons e clientes têm visão imediata do status de cada mesa e pedido.',
    funcionamento: 'React Native integrado com Firebase Realtime Database para sincronização de dados instantânea.'
  },
  'Placa_detect': {
    category: 'ferramenta',
    tag: 'IA / Visão Computacional',
    desc: 'Reconhecimento Automático de Placas Veiculares (ALPR) com Redes Neurais YOLO e OpenCV em Docker.',
    conceito: 'Pipeline de visão computacional voltado para identificação, segmentação e OCR de placas automotivas.',
    utilidade: 'Pode ser aplicado em estacionamentos inteligentes, pedágios, segurança patrimonial e fiscalização de tráfego.',
    funcionamento: 'Python com pesos de redes neurais YOLO, biblioteca OpenCV para filtros morfológicos e Docker para inferência escalável.'
  },
  'echo-world': {
    category: 'web',
    tag: '3D / Game',
    desc: 'Echo World — Jogo 3D estilo aquarela com física realista e superpoderes em Three.js e TypeScript.',
    demo: 'https://ruanggd123.github.io/echo-world/',
    conceito: 'Experiência lúdica 3D no navegador com direção de arte baseada em aquarela e dinâmica de física interativa.',
    utilidade: 'Demonstração prática de desenvolvimento de shaders, computação gráfica, WebGL e game loops fluidos.',
    funcionamento: 'TypeScript puro com Three.js, biblioteca de física 3D e renderização acelerada por GPU.'
  },
  'meruoca': {
    category: 'web',
    tag: 'Web / Social',
    desc: 'Plataforma web com soluções e informações sociais para a comunidade do município de Meruoca-CE.',
    demo: 'https://ruanggd123.github.io/meruoca/',
    conceito: 'Portal digital para conectar cidadãos a projetos locais, cultura e serviços públicos.',
    utilidade: 'Centraliza dados de projetos sociais, iniciativas de capacitação e notícias municipais.',
    funcionamento: 'HTML5 semântico, CSS moderno e JavaScript vanilla com navegação responsiva e carregamento rápido.'
  },
  'CurriculoReact': { 
    category: 'web', 
    tag: 'Web / React', 
    desc: 'Currículo digital interativo feito em React 19 + TypeScript + Tailwind CSS com dados dinâmicos.', 
    demo: 'https://ruanggd123.github.io/CurriculoReact/',
    conceito: 'Currículo interativo projetado para destacar habilidades técnicas com design moderno e navegação ágil.',
    utilidade: 'Apresenta projetos, stacks e experiências com filtros interativos para recrutadores e empresas.',
    funcionamento: 'React, TypeScript e Tailwind CSS com renderização modular de dados dinâmicos.'
  },
  'english-immersion-os': {
    category: 'ferramenta',
    tag: 'Ferramenta / IA',
    desc: 'Ambiente interativo de imersão e prática de inglês com IA para conversação e vocabulário técnico.',
    conceito: 'Plataforma para acelerar a fluência na língua inglesa combinando feedback imediato e escuta ativa.',
    utilidade: 'Auxilia desenvolvedores a aprimorarem inglês técnico para entrevistas internacionais.',
    funcionamento: 'Desenvolvido em TypeScript com rotinas interativas e integração de prompts linguísticos.'
  },
  'VendaSaas': {
    category: 'web',
    tag: 'SaaS / Vendas',
    desc: 'Plataforma de automação comercial e gestão de assinaturas SaaS com painel administrativo.',
    conceito: 'Sistema completo para comercialização e gestão de licenças de software na nuvem.',
    utilidade: 'Controle de planos, gestão financeira e provisionamento automático de acessos.',
    funcionamento: 'Node.js, React e banco de dados relacional com integração a gateways de pagamento.'
  },
  'AutoVendas': {
    category: 'web',
    tag: 'Automação',
    desc: 'Solução automatizada para funil de vendas, CRM e disparos de notificações comerciais.',
    conceito: 'Agilidade na conversão de leads com automação de etapas do processo comercial.',
    utilidade: 'Aumenta a eficiência operacional reduzindo tempo de resposta ao cliente.',
    funcionamento: 'APIs REST, banco de dados e rotinas assíncronas de integração.'
  },
  'Ruanggd123': {
    category: 'ferramenta',
    tag: 'Perfil GitHub',
    desc: 'Repositório especial de Profile README no GitHub com currículo ATS, estatísticas e certificações.',
    demo: 'https://github.com/Ruanggd123',
    conceito: 'Página inicial personalizada do perfil do GitHub, servindo como cartão de visitas técnico.',
    utilidade: 'Apresenta de forma clara as tecnologias, links sociais e download direto do currículo em PDF.',
    funcionamento: 'Markdown avançado com Shields.io badges, APIs dinâmicas do GitHub e assets em nuvem.'
  },
  'portfolio': {
    category: 'web',
    tag: 'Web / Portfólio',
    desc: 'Site portfólio profissional moderno, tema dark, responsivo com integração automática à API do GitHub.',
    demo: 'https://ruanggd123.github.io/portfolio/',
    conceito: 'Vitrine digital completa para demonstrar competências de engenharia de software e serviços.',
    utilidade: 'Permite a potenciais clientes e recrutadores visualizar projetos, detalhes e solicitar orçamentos.',
    funcionamento: 'HTML5, CSS3 com variáveis e glassmorphism, JavaScript ES6+ e consumo da API pública do GitHub.'
  },
  'UniMove': {
    category: 'mobile',
    tag: 'Mobile / UFC',
    desc: 'Plataforma de integração e mobilidade acadêmica para a comunidade universitária da UFC Sobral.',
    conceito: 'Solução de caronas e transporte para estudantes universitários.',
    utilidade: 'Conecta alunos que fazem rotas semelhantes, barateando custos e integrando o campus.',
    funcionamento: 'React e APIs REST com interface focada em facilidade de uso.'
  },
  'Rifas': { category: 'web', tag: 'Web', desc: 'Sistema completo de rifas online com gerador de números, controle de participantes e painel administrativo.' },
  'Rifa': { category: 'web', tag: 'Web', desc: 'Plataforma de rifas com interface responsiva e gerenciamento de números vendidos.', demo: 'https://ruanggd123.github.io/Rifa/' },
  'SEFAZ-CE': { category: 'web', tag: 'Web', desc: 'Automação e integração relacionada à SEFAZ-CE para dados fiscais.' },
  'SGLS_TEC_WEB': { category: 'web', tag: 'Web', desc: 'Sistema gerencial desenvolvido para disciplina de Tecnologias Web.' },
  'idc_website': { category: 'web', tag: 'Web', desc: 'Website institucional desenvolvido para o Instituto Despertar da Cidadania.', demo: 'https://idc-despertar-da-cidadania.web.app/' },
  'cannon-ball-game': { category: 'web', tag: '3D / Game', desc: 'Jogo interativo 3D de tiro de canhão construído com Three.js.', demo: 'https://lincolngondin.github.io/cannon-ball-game/' },
  'sistema-solar': { category: 'web', tag: '3D', desc: 'Simulação 3D interativa do Sistema Solar feita com Three.js.', demo: 'https://lincolngondin.github.io/sistema-solar/' },
  'Batalha-de-seguidores': { category: 'web', tag: 'Web', desc: 'Projeto web para comparação de seguidores e alcance de perfis.', demo: 'https://ruanggd123.github.io/Batalha-de-seguidores/' },
  'tcc': { category: 'academico', tag: 'Acadêmico / TCC', desc: 'TCC em Engenharia de Computação — Algoritmos de Agregação Robusta em Aprendizado Federado (UFC Sobral).' },
  'Trabalho_Pratico_02_Computacao_Grafica': { category: 'academico', tag: 'Computação Gráfica', desc: 'Trabalho prático de Computação Gráfica com renderização e transformações 2D/3D.' },
  'STR_Escalonamento': { category: 'academico', tag: 'Sistemas Operacionais', desc: 'Implementação de algoritmos de escalonamento em tempo real (Sistemas Operacionais).' },
  'BancoDeDados': { category: 'academico', tag: 'Bancos de Dados', desc: 'Modelagem relacional, scripts SQL e procedimentos armazenados.' },
  'AdicionandoTestsComJUnit': { category: 'academico', tag: 'Java / Testes', desc: 'Testes unitários e de integração em Java utilizando JUnit.' },
  'implementacaoDeTestsEmJava': { category: 'academico', tag: 'Java / Testes', desc: 'Práticas de arquitetura de testes e cobertura de código em Java.' }
};

const langIcons = {
  'JavaScript': 'fab fa-js',
  'TypeScript': 'fab fa-js',
  'HTML': 'fab fa-html5',
  'HTML+PHP': 'fab fa-php',
  'PHP': 'fab fa-php',
  'Python': 'fab fa-python',
  'Java': 'fab fa-java',
  'C': 'fas fa-code',
  'C++': 'fas fa-code',
  'C#': 'fas fa-code',
  'Dart': 'fas fa-mobile-alt',
  'Kotlin': 'fab fa-android',
  'Vue': 'fab fa-vuejs',
  'Shell': 'fas fa-terminal',
  'CSS': 'fab fa-css3-alt',
  'SCSS': 'fab fa-sass',
  'Jupyter Notebook': 'fas fa-book-open'
};

const langColors = {
  'JavaScript': '#f1e05a',
  'TypeScript': '#3178c6',
  'Python': '#3572A5',
  'Java': '#b07219',
  'PHP': '#4F5D95',
  'HTML': '#e34c26',
  'HTML+PHP': '#4F5D95',
  'C': '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  'Dart': '#00B4AB',
  'Kotlin': '#A97BFF',
  'Vue': '#41b883',
  'Shell': '#89e051',
  'CSS': '#563d7c',
  'SCSS': '#c6538c',
  'Jupyter Notebook': '#DA5B0B'
};

const COLLAB_REPOS = [
  'IdcAgriFamiliar-sys/idc_website',
  'Felype-byte/SGLS_TEC_WEB',
  'lincolngondin/cannon-ball-game',
  'lincolngondin/sistema-solar'
];

/* Buscar repos do GitHub via API */
async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    let repos = [];
    if (response.ok) {
      repos = await response.json();
    }
    
    // Buscar repositórios em que é colaborador
    const collabPromises = COLLAB_REPOS.map(repoFullName => 
      fetch(`https://api.github.com/repos/${repoFullName}`).then(r => r.ok ? r.json() : null).catch(() => null)
    );
    const collabRepos = await Promise.all(collabPromises);
    repos = repos.concat(collabRepos.filter(r => r !== null));

    // Integrar os projetos fixados e emblemáticos
    PINNED_PROJECTS.forEach(pinned => {
      const exists = repos.find(r => r.name.toLowerCase() === pinned.name.toLowerCase());
      if (!exists) {
        repos.unshift(pinned);
      }
    });

    return repos;
  } catch (err) {
    console.error('Erro ao buscar repos:', err);
    return PINNED_PROJECTS;
  }
}

/* Filtrar e ordenar repositórios relevantes */
function filterRelevantRepos(repos) {
  // Ordenar colocando repositórios com meta ou mais recentes no topo
  return repos
    .filter(r => r.name !== 'baseTeste' && r.name !== 'base' && r.name !== 'php_base')
    .sort((a, b) => {
      const hasMetaA = PROJECT_META[a.name] ? 1 : 0;
      const hasMetaB = PROJECT_META[b.name] ? 1 : 0;
      if (hasMetaA !== hasMetaB) return hasMetaB - hasMetaA;
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
}

/* Renderizar cards de projetos */
function renderProjects(repos, filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  let filtered = repos;
  if (filter !== 'all') {
    filtered = repos.filter(r => {
      const meta = PROJECT_META[r.name];
      const category = meta ? meta.category : 'ferramenta';
      return category === filter;
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="projects-loading" style="padding:40px;">Nenhum projeto encontrado nesta categoria.</p>';
    return;
  }

  grid.innerHTML = filtered.map(repo => {
    const meta = PROJECT_META[repo.name] || { category: 'ferramenta', tag: 'Projeto', desc: repo.description || 'Repositório no GitHub.' };
    const langIcon = langIcons[repo.language] || 'fas fa-code';
    const langColor = langColors[repo.language] || '#8b5cf6';
    const stars = repo.stargazers_count > 0
      ? `<span class="project-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>`
      : '';
    
    // Tratamento de URL para demo
    const finalDemoUrl = meta.demo ? meta.demo : (repo.homepage && repo.homepage.trim() !== '' ? repo.homepage : '');

    const demoLink = finalDemoUrl !== ''
      ? `<a href="${finalDemoUrl}" target="_blank" rel="noopener" class="project-link demo"><i class="fas fa-external-link-alt"></i> Ver site</a>`
      : `<span class="project-link demo disabled"><i class="fas fa-external-link-alt"></i> Sem demo</span>`;
    
    // Imagem do OpenGraph do GitHub
    const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repo.name}`;

    return `
      <article class="project-card reveal">
        <div class="project-image-wrapper">
          <img src="${imageUrl}" alt="${repo.name}" class="project-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="project-image-fallback" style="display:none;">
             <i class="${langIcon}" style="font-size: 4rem; color: ${langColor}; opacity: 0.5;"></i>
          </div>
        </div>
        <div class="project-header">
          <div class="project-icon" style="color:${langColor}">
            <i class="${langIcon}"></i>
          </div>
          <span class="project-tag-label">${meta.tag}</span>
        </div>
        <h3 class="project-name">${repo.name}</h3>
        <p class="project-desc">${meta.desc}</p>
        <div class="project-langs">
          ${repo.language ? `<span class="lang-badge" style="border-color:${langColor}">${repo.language}</span>` : '<span class="lang-badge">Multi-linguagem</span>'}
          ${stars}
        </div>
        <div class="project-links">
          <button class="project-link details-btn" onclick="openProjectModal(this)" data-repo='${JSON.stringify(repo).replace(/'/g, "&apos;")}' data-meta='${JSON.stringify(meta).replace(/'/g, "&apos;")}' data-lang-icon="${langIcon}" data-lang-color="${langColor}" data-image-url="${imageUrl}" data-demo="${finalDemoUrl}">
            <i class="fas fa-info-circle"></i> Detalhes
          </button>
          <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link github">
            <i class="fab fa-github"></i> Código
          </a>
          ${demoLink}
        </div>
      </article>
    `;
  }).join('');

  observeReveals();
}

/* Inicializar */
document.addEventListener('DOMContentLoaded', async () => {
  const repos = await fetchGitHubRepos();
  const grid = document.getElementById('projects-grid');

  if (!repos || repos.length === 0) {
    grid.innerHTML = `
      <div class="projects-loading" style="padding:60px;">
        <i class="fab fa-github" style="font-size:3rem;color:var(--text-dim)"></i>
        <p>Não foi possível carregar os repositórios agora. Acesse meu GitHub diretamente:</p>
        <a href="https://github.com/Ruanggd123?tab=repositories" target="_blank" rel="noopener" class="btn btn-primary">
          <i class="fab fa-github"></i> Ver no GitHub
        </a>
      </div>
    `;
    return;
  }

  const relevantRepos = filterRelevantRepos(repos);
  renderProjects(relevantRepos, 'all');

  // Filtros
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderProjects(relevantRepos, filter);
    });
  });
});

/* Helper: observar elementos reveal */
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal:not(.active)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

/* Modal de Detalhes do Projeto */
window.openProjectModal = function(btn) {
  const repo = JSON.parse(btn.getAttribute('data-repo'));
  const meta = JSON.parse(btn.getAttribute('data-meta'));
  const langIcon = btn.getAttribute('data-lang-icon');
  const langColor = btn.getAttribute('data-lang-color');
  const imageUrl = btn.getAttribute('data-image-url');
  const demoUrl = btn.getAttribute('data-demo');

  document.getElementById('modal-title').textContent = repo.name;
  document.getElementById('modal-tag').textContent = meta.tag || 'Projeto';
  
  const iconEl = document.getElementById('modal-icon');
  iconEl.className = langIcon;
  iconEl.style.color = langColor;

  document.getElementById('modal-image').src = imageUrl;

  document.getElementById('modal-concept').innerHTML = meta.conceito || meta.desc || 'Conceito não detalhado ainda.';
  document.getElementById('modal-utility').innerHTML = meta.utilidade || 'Projeto com foco em resolução prática de problemas, integrando soluções modernas de software.';
  document.getElementById('modal-works').innerHTML = meta.funcionamento || `Desenvolvido majoritariamente em ${repo.language || 'várias linguagens'}, explorando conceitos avançados de engenharia de software e arquitetura.`;

  // Techs
  const techsHtml = repo.language ? `<span class="lang-badge" style="border-color:${langColor}">${repo.language}</span>` : '<span class="lang-badge">Multi-linguagem</span>';
  document.getElementById('modal-techs').innerHTML = techsHtml;

  // Actions
  let actionsHtml = `<a href="${repo.html_url}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fab fa-github"></i> Ver Código</a>`;
  if (demoUrl) {
    actionsHtml += `<a href="${demoUrl}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Acessar Site</a>`;
  }
  document.getElementById('modal-actions').innerHTML = actionsHtml;

  document.getElementById('project-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
};

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('project-modal').classList.remove('active');
  document.body.style.overflow = '';
});

document.getElementById('modal-overlay').addEventListener('click', () => {
  document.getElementById('project-modal').classList.remove('active');
  document.body.style.overflow = '';
});
