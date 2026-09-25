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
    stargazers_count: 5,
    updated_at: '2026-09-25T11:30:00Z',
    fork: false
  },
  {
    name: 'CurriculoReact',
    description: 'Currículo digital interativo em React 19 + TypeScript + Tailwind CSS com busca e filtros dinâmicos.',
    language: 'TypeScript',
    html_url: 'https://github.com/Ruanggd123/CurriculoReact',
    homepage: 'https://ruanggd123.github.io/CurriculoReact/',
    stargazers_count: 4,
    updated_at: '2026-09-24T18:00:00Z',
    fork: false
  },
  {
    name: 'echo-world',
    description: 'Echo World — Jogo 3D estilo aquarela com física realista de corpos rígidos e superpoderes em Three.js e TypeScript.',
    language: 'TypeScript',
    html_url: 'https://github.com/Ruanggd123/echo-world',
    homepage: 'https://ruanggd123.github.io/echo-world/',
    stargazers_count: 4,
    updated_at: '2026-09-22T14:00:00Z',
    fork: false
  },
  {
    name: 'meruoca',
    description: 'Portal institucional e social com serviços públicos, projetos comunitários e informações municipais de Meruoca-CE.',
    language: 'HTML',
    html_url: 'https://github.com/Ruanggd123/meruoca',
    homepage: 'https://ruanggd123.github.io/meruoca/',
    stargazers_count: 3,
    updated_at: '2026-09-21T19:00:00Z',
    fork: false
  },
  {
    name: 'MetroOn',
    description: 'Aplicativo mobile em React Native para usuários do VLT de Sobral-CE com horários e itinerários em tempo real.',
    language: 'JavaScript',
    html_url: 'https://github.com/ocJew/metroon.app',
    homepage: 'https://github.com/ocJew/metroon.app',
    stargazers_count: 3,
    updated_at: '2026-09-18T10:00:00Z',
    fork: false
  },
  {
    name: 'Rifa',
    description: 'Plataforma web de gestão de rifas e sorteios com seleção de números, reserva de cotas e comprovante via WhatsApp.',
    language: 'HTML',
    html_url: 'https://github.com/Ruanggd123/Rifa',
    homepage: 'https://ruanggd123.github.io/Rifa/',
    stargazers_count: 2,
    updated_at: '2026-09-10T12:00:00Z',
    fork: false
  },
  {
    name: 'Batalha-de-seguidores',
    description: 'Web app gamificado e interativo para comparação de audiência, alcance e seguidores de perfis em tempo real.',
    language: 'HTML',
    html_url: 'https://github.com/Ruanggd123/Batalha-de-seguidores',
    homepage: 'https://ruanggd123.github.io/Batalha-de-seguidores/',
    stargazers_count: 2,
    updated_at: '2026-08-28T16:00:00Z',
    fork: false
  },
  {
    name: 'Nullbank',
    description: 'Sistema bancário e microsserviços em Java 17, Spring Boot 3, Apache Tomcat e persistência relacional.',
    language: 'Java',
    html_url: 'https://github.com/Ruanggd123',
    homepage: '',
    stargazers_count: 2,
    updated_at: '2026-08-20T10:00:00Z',
    fork: false
  },
  {
    name: 'Placa_detect',
    description: 'Reconhecimento Automático de Placas Veiculares (ALPR) com Redes Neurais YOLO e OpenCV em Docker.',
    language: 'Python',
    html_url: 'https://github.com/Ruanggd123',
    homepage: '',
    stargazers_count: 2,
    updated_at: '2026-08-15T10:00:00Z',
    fork: false
  }
];

/* Metadados detalhados de cada projeto com imagens reais de funcionamento e textos explicativos */
const PROJECT_META = {
  'Certifica-ESG-AgriFamiliar': {
    category: 'web',
    tag: 'SaaS / ESG',
    image: 'assets/screenshots/Certifica-ESG-AgriFamiliar.png',
    desc: 'Plataforma SaaS para assistência técnica rural (ATER ESG) e certificação sustentável na agricultura familiar com mapas GIS e visualização 3D.',
    demo: 'https://idc-despertar-da-cidadania.web.app/',
    conceito: 'O <strong>Certifica ESG AgriFamiliar</strong> é um ecossistema digital pioneiro desenvolvido com o Instituto Despertar da Cidadania (IDC). Foi criado para diagnosticar, monitorar e valorizar as práticas ambientais, sociais e de governança (ESG) de pequenos agricultores e cooperativas familiares.',
    utilidade: 'Permite aos técnicos de campo mapear glebas e propriedades rurais com GPS e satélite, emitir diagnósticos técnicos em tempo real, gerar laudos e certificados em PDF com QR Code dinâmico para auditoria de órgãos reguladores e bancos de crédito.',
    funcionamento: 'Construído em <strong>React 19</strong> com <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>. Mapeamento geoespacial via <strong>Leaflet GIS</strong> para desenho vetorial de polígonos. Visualização 3D de modelos da propriedade rural com <strong>Three.js</strong> (@react-three/fiber). Backend e banco relacional no <strong>Supabase (PostgreSQL)</strong> com Row Level Security (RLS) e aplicativo mobile híbrido via <strong>Capacitor</strong>.'
  },
  'Certifica-AgriFamiliar-ESG': {
    category: 'web',
    tag: 'SaaS / ESG',
    image: 'assets/screenshots/Certifica-AgriFamiliar-ESG.png',
    desc: 'Ecossistema completo de inovação tecnológica para ATER e conformidade ESG na agricultura familiar.',
    demo: 'https://idc-despertar-da-cidadania.web.app/',
    conceito: 'Plataforma de inovação socioambiental para capacitação técnica, geoprocessamento e emissão de laudos de sustentabilidade.',
    utilidade: 'Coleta de dados online/offline no campo com geração automatizada de relatórios em PDF/Excel.',
    funcionamento: 'React 19, TypeScript, Supabase/PostgreSQL, Leaflet GIS, Three.js 3D e Capacitor.'
  },
  'CurriculoReact': { 
    category: 'web', 
    tag: 'React / Web',
    image: 'assets/screenshots/CurriculoReact.png',
    desc: 'Currículo digital interativo feito em React 19 + TypeScript + Tailwind CSS com filtros por stack e design responsivo.', 
    demo: 'https://ruanggd123.github.io/CurriculoReact/',
    conceito: 'Uma aplicação web interativa que redefine o modelo tradicional de currículo impresso, transformando experiências, projetos e certificações em uma experiência visual rica, filtrável e em tempo real.',
    utilidade: 'Permite que recrutadores, gestores e clientes filtrem rapidamente as tecnologias desejadas (Frontend, Backend, Mobile, IA), visualizem métricas de projetos e façam download de dados estruturados.',
    funcionamento: 'Desenvolvido com <strong>React 19</strong>, <strong>TypeScript</strong> e estilização moderna com <strong>Tailwind CSS</strong>. Utiliza arquitetura modular de componentes, renderização condicional eficiente e deploy contínuo via GitHub Pages.'
  },
  'echo-world': {
    category: 'web',
    tag: '3D / Game WebGL',
    image: 'assets/screenshots/echo-world.png',
    desc: 'Echo World — Jogo 3D no navegador com direção de arte em aquarela, física realista de corpos rígidos e superpoderes.',
    demo: 'https://ruanggd123.github.io/echo-world/',
    conceito: 'Experimento imersivo de computação gráfica 3D diretamente no browser, combinando estética de pintura tradicional em aquarela com engine física e movimentação livre em terceira pessoa.',
    utilidade: 'Demonstra domínio avançado de WebGL, Three.js, shaders GLSL customizados, game loop a 60 FPS e cálculos matemáticos de vetores e matrizes para movimentação e colisões dinâmicas.',
    funcionamento: 'Desenvolvido em <strong>TypeScript</strong> com a biblioteca <strong>Three.js</strong>. Integra motor de física de corpos rígidos para colisão com terreno e obstáculos, sistema de partículas e iluminação dinâmica em tempo real.'
  },
  'meruoca': {
    category: 'web',
    tag: 'Web Social',
    image: 'assets/screenshots/meruoca.png',
    desc: 'Portal institucional e social com serviços públicos, projetos comunitários e informações municipais de Meruoca-CE.',
    demo: 'https://ruanggd123.github.io/meruoca/',
    conceito: 'Plataforma web de utilidade pública focada em aproximar a população local de iniciativas culturais, projetos de capacitação digital (como o projeto "Entrando no Jogo") e serviços essenciais.',
    utilidade: 'Centraliza informações municipais, horários de atendimento, notícias e links de utilidade pública em uma interface intuitiva acessível a qualquer cidadão.',
    funcionamento: 'Construído com <strong>HTML5 semântico</strong>, <strong>CSS3 moderno</strong> (Flexbox e Grid) e <strong>JavaScript vanilla</strong>. Layout ultra-otimizado para dispositivos móveis com baixo consumo de dados e velocidade de carregamento instantânea.'
  },
  'idc_website': {
    category: 'web',
    tag: 'Institucional',
    image: 'assets/screenshots/idc_website.png',
    desc: 'Website institucional do Instituto Despertar da Cidadania (IDC), apresentando ações e projetos no campo.',
    demo: 'https://idc-despertar-da-cidadania.web.app/',
    conceito: 'Portal oficial de divulgação das ações socioambientais, parcerias governamentais e assistência técnica rural.',
    utilidade: 'Canal transparente para prestação de contas, apresentação de projetos e captação de novas parcerias no semiárido cearense.',
    funcionamento: 'Single Page Application responsiva hospedada com SSL automático via Firebase Hosting.'
  },
  'Rifa': { 
    category: 'web', 
    tag: 'Sistema Web',
    image: 'assets/screenshots/Rifa.png',
    desc: 'Plataforma web de gestão de rifas e sorteios com seleção de números, reserva de cotas e envio de comprovante via WhatsApp.', 
    demo: 'https://ruanggd123.github.io/Rifa/',
    conceito: 'Sistema completo para digitalizar e automatizar a venda de rifas e campanhas beneficentes, eliminando cartelas de papel e falhas manuais.',
    utilidade: 'Os compradores escolhem números livres visualmente, realizam a reserva e enviam o comprovante diretamente para o organizador pelo WhatsApp com um clique.',
    funcionamento: 'JavaScript ES6+, manipulação reativa do DOM, controle de status das cotas (Livre, Reservado, Pago) e integração direta com a API do WhatsApp.'
  },
  'Batalha-de-seguidores': { 
    category: 'web', 
    tag: 'Web App',
    image: 'assets/screenshots/Batalha-de-seguidores.png',
    desc: 'Aplicação gamificada que compara métricas de alcance, audiência e seguidores de perfis com placar em tempo real.', 
    demo: 'https://ruanggd123.github.io/Batalha-de-seguidores/',
    conceito: 'Jogo interativo que estimula a disputa saudável de engajamento entre criadores e marcas.',
    utilidade: 'Ferramenta descontraída para ativação de público em redes sociais e análise comparativa de crescimento.',
    funcionamento: 'JavaScript, transições dinâmicas de CSS3, cálculo proporcional de barras de energia e atualização instantânea de pontuações.'
  },
  'Modelo_Curriculo': { 
    category: 'ferramenta', 
    tag: 'Template Web',
    image: 'assets/screenshots/Modelo_Curriculo.png',
    desc: 'Modelo base de currículo profissional para desenvolvedores com design clean e suporte perfeito a impressão A4.', 
    demo: 'https://ruanggd123.github.io/Modelo_Curriculo/',
    conceito: 'Layout padronizado para quem precisa de um currículo online rápido, elegante e sem excesso de dependências.',
    utilidade: 'Template open source pronto para ser clonado e preenchido por outros estudantes e desenvolvedores.',
    funcionamento: 'HTML semântico com folhas de estilo CSS dedicadas a impressão (@media print) para conversão perfeita em PDF.'
  },
  'formSimples': { 
    category: 'ferramenta', 
    tag: 'Ferramenta',
    image: 'assets/screenshots/formSimples.png',
    desc: 'Gerador minimalista de formulários com validações de dados no cliente e formatação automática de campos.', 
    demo: 'https://ruanggd123.github.io/formSimples/',
    conceito: 'Utilitário leve para validação rápida de entradas de formulário e testes de experiência do usuário.',
    utilidade: 'Permite capturar inscrições de forma direta sem fricção.',
    funcionamento: 'JavaScript vanilla com validações Regex em tempo real.'
  },
  'TecWebTarefa1': { 
    category: 'academico', 
    tag: 'Acadêmico UFC',
    image: 'assets/screenshots/TecWebTarefa1.png',
    desc: 'Projeto acadêmico da UFC Sobral demonstrando estruturação de layout, semântica W3C e CSS responsivo.', 
    demo: 'https://ruanggd123.github.io/TecWebTarefa1/',
    conceito: 'Atividade prática da disciplina de Tecnologias Web da Universidade Federal do Ceará.',
    utilidade: 'Demonstra domínio dos padrões web e boas práticas de estruturação de código limpo.',
    funcionamento: 'HTML5 semântico com CSS moderno e navegação estruturada.'
  },
  'portfolio': {
    category: 'web',
    tag: 'Web / Portfólio',
    image: 'assets/screenshots/portfolio.png',
    desc: 'Site portfólio oficial desenvolvido com tema dark, glassmorphism e integração dinâmica com a API do GitHub.',
    demo: 'https://ruanggd123.github.io/portfolio/',
    conceito: 'Vitrine digital completa para demonstrar competências de engenharia de software e serviços.',
    utilidade: 'Permite a potenciais clientes e recrutadores visualizar projetos, detalhes e solicitar orçamentos.',
    funcionamento: 'HTML5, CSS3 com variáveis e glassmorphism, JavaScript ES6+ e consumo da API pública do GitHub.'
  },
  'MetroOn': {
    category: 'mobile',
    tag: 'Mobile / VLT',
    desc: 'Aplicativo mobile voltado para usuários do VLT de Sobral-CE, com itinerários, rotas e horários em tempo real.',
    demo: 'https://github.com/ocJew/metroon.app',
    conceito: 'Solução de mobilidade urbana em tempo real para os usuários do transporte público sobre trilhos de Sobral.',
    utilidade: 'Permite aos passageiros consultar itinerários e estações, reduzindo o tempo de espera nas paradas.',
    funcionamento: 'Desenvolvido em <strong>React Native</strong> com consumo de rotas REST, componentes mobile performáticos e interface intuitiva.'
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
    utilidade: 'Simula abertura de contas, transferências com controle de saldo, autenticação segura e conciliação de transações.',
    funcionamento: 'Construído em <strong>Java 17</strong> com <strong>Spring Boot 3</strong>, <strong>Spring Data JPA</strong>, <strong>Spring Security</strong>, Apache Tomcat e persistência relacional em PostgreSQL.'
  },
  'Placa_detect': {
    category: 'ferramenta',
    tag: 'IA / Visão Computacional',
    desc: 'Reconhecimento Automático de Placas Veiculares (ALPR) com Redes Neurais YOLO e OpenCV em Docker.',
    conceito: 'Pipeline de visão computacional para detecção, enquadramento morfológico e extração de caracteres de placas veiculares.',
    utilidade: 'Aplicações em portarias inteligentes, cancelas de estacionamentos, controle de acesso e monitoramento de frotas.',
    funcionamento: 'Desenvolvido em <strong>Python</strong> utilizando pesos pré-treinados de redes neurais <strong>YOLO</strong>, processamento digital de imagem com <strong>OpenCV</strong> e conteinerização em <strong>Docker</strong>.'
  },
  'UniMove': {
    category: 'mobile',
    tag: 'Mobile / UFC',
    desc: 'Plataforma de integração e mobilidade acadêmica para a comunidade universitária da UFC Sobral.',
    conceito: 'Solução para facilitação de fluxos internos de transporte e integração para a comunidade discente.',
    utilidade: 'Conecta alunos que fazem rotas semelhantes, barateando custos e integrando o campus.',
    funcionamento: 'React e APIs REST com interface focada em facilidade de uso.'
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
  'english-immersion-os': {
    category: 'ferramenta',
    tag: 'Ferramenta / IA',
    desc: 'Ambiente interativo de imersão e prática de inglês com IA para conversação e vocabulário técnico.',
    conceito: 'Plataforma para acelerar a fluência na língua inglesa combinando feedback imediato e escuta ativa.',
    utilidade: 'Auxilia desenvolvedores a aprimorarem inglês técnico para entrevistas internacionais.',
    funcionamento: 'Desenvolvido em TypeScript com rotinas interativas e integração de prompts linguísticos.'
  },
  'Rifas': { category: 'web', tag: 'Web', desc: 'Sistema completo de rifas online com gerador de números, controle de participantes e painel administrativo.' },
  'SEFAZ-CE': { category: 'web', tag: 'Web', desc: 'Automação e integração relacionada à SEFAZ-CE para processamento de dados fiscais.' },
  'SGLS_TEC_WEB': { category: 'web', tag: 'Web', desc: 'Sistema gerencial desenvolvido para disciplina de Tecnologias Web.' },
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
  'Felype-byte/SGLS_TEC_WEB'
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

    // Garantir os projetos fixados e emblemáticos
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
  return repos
    .filter(r => r.name !== 'baseTeste' && r.name !== 'base' && r.name !== 'php_base')
    .sort((a, b) => {
      // Prioridade máxima para projetos que possuem demonstração ao vivo ou estão no PINNED_PROJECTS
      const metaA = PROJECT_META[a.name];
      const metaB = PROJECT_META[b.name];
      const hasDemoA = (metaA && metaA.demo) ? 2 : (metaA ? 1 : 0);
      const hasDemoB = (metaB && metaB.demo) ? 2 : (metaB ? 1 : 0);

      if (hasDemoA !== hasDemoB) return hasDemoB - hasDemoA;
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
    const meta = PROJECT_META[repo.name] || { 
      category: 'ferramenta', 
      tag: 'Projeto', 
      desc: repo.description || 'Repositório no GitHub.' 
    };

    const langIcon = langIcons[repo.language] || 'fas fa-code';
    const langColor = langColors[repo.language] || '#8b5cf6';
    const stars = repo.stargazers_count > 0
      ? `<span class="project-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>`
      : '';
    
    // Tratamento de URL para demo / site funcionando
    const finalDemoUrl = meta.demo ? meta.demo : (repo.homepage && repo.homepage.trim() !== '' ? repo.homepage : '');

    // Imagem do projeto (se houver screenshot local capturado, usa ele prioritariamente)
    const projectImg = meta.image || `assets/screenshots/${repo.name}.png`;
    const fallbackOpenGraph = `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repo.name}`;

    // Tag e status online
    const onlineBadge = finalDemoUrl !== ''
      ? `<span class="project-online-badge"><span class="dot green"></span> Online</span>`
      : '';

    const actionButton = finalDemoUrl !== ''
      ? `<a href="${finalDemoUrl}" target="_blank" rel="noopener" class="project-link demo active" title="Acessar projeto em funcionamento"><i class="fas fa-play-circle"></i> Ver Funcionando</a>`
      : `<a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link github"><i class="fab fa-github"></i> Código</a>`;

    return `
      <article class="project-card reveal">
        <div class="project-image-wrapper">
          <img src="${projectImg}" 
               alt="${repo.name}" 
               class="project-image" 
               loading="lazy"
               onerror="this.onerror=null; this.src='${fallbackOpenGraph}';" />
        </div>
        <div class="project-header">
          <div class="project-icon" style="color:${langColor}">
            <i class="${langIcon}"></i>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            ${onlineBadge}
            <span class="project-tag-label">${meta.tag}</span>
          </div>
        </div>
        <h3 class="project-name">${repo.name}</h3>
        <p class="project-desc">${meta.desc}</p>
        <div class="project-langs">
          ${repo.language ? `<span class="lang-badge" style="border-color:${langColor}">${repo.language}</span>` : '<span class="lang-badge">Multi-linguagem</span>'}
          ${stars}
        </div>
        <div class="project-links">
          <button class="project-link details-btn" 
                  onclick="openProjectModal(this)" 
                  data-repo='${JSON.stringify(repo).replace(/'/g, "&apos;")}' 
                  data-meta='${JSON.stringify(meta).replace(/'/g, "&apos;")}' 
                  data-lang-icon="${langIcon}" 
                  data-lang-color="${langColor}" 
                  data-image-url="${projectImg}" 
                  data-demo="${finalDemoUrl}">
            <i class="fas fa-info-circle"></i> Detalhes
          </button>
          ${actionButton}
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

  const modalImg = document.getElementById('modal-image');
  modalImg.src = imageUrl;
  modalImg.onerror = function() {
    this.onerror = null;
    this.src = `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repo.name}`;
  };

  document.getElementById('modal-concept').innerHTML = meta.conceito || meta.desc || 'Conceito não detalhado ainda.';
  document.getElementById('modal-utility').innerHTML = meta.utilidade || 'Projeto com foco em resolução prática de problemas e engenharia de software.';
  document.getElementById('modal-works').innerHTML = meta.funcionamento || `Desenvolvido majoritariamente em ${repo.language || 'várias linguagens'}, aplicando arquiteturas modernas e escaláveis.`;

  // Techs
  const techsHtml = repo.language ? `<span class="lang-badge" style="border-color:${langColor}">${repo.language}</span>` : '<span class="lang-badge">Multi-linguagem</span>';
  document.getElementById('modal-techs').innerHTML = techsHtml;

  // Actions
  let actionsHtml = `<a href="${repo.html_url}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fab fa-github"></i> Ver Código</a>`;
  if (demoUrl) {
    actionsHtml += `<a href="${demoUrl}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fas fa-play-circle"></i> Acessar Projeto Online</a>`;
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
