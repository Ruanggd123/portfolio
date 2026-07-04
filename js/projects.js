/* ===========================================
   Busca dinâmica dos repositórios do GitHub
   GitHub: Ruanggd123
   =========================================== */

const GITHUB_USER = 'Ruanggd123';

/* Mapa manual de categorias para os repositórios mais relevantes.
   Repos não listados aqui caem em "ferramenta" por padrão. */
const PROJECT_META = {
  'CurriculoReact':     { category: 'web', tag: 'Web', desc: 'Currículo/portfólio interativo feito em React + TypeScript + Tailwind, com dados dinâmicos e backend em cloud functions.' },
  'Rifas':              { category: 'web', tag: 'Web', desc: 'Sistema completo de rifas online com gerador de números, controle de participantes e painel administrativo.' },
  'Rifa':               { category: 'web', tag: 'Web', desc: 'Plataforma de rifas com interface responsiva e gerenciamento de números vendidos.' },
  'SEFAZ-CE':           { category: 'web', tag: 'Web', desc: 'Automação/integração relacionada à SEFAZ-CE - manipulação de notas fiscais e dados econômicos.' },
  'SGLS_TEC_WEB':       { category: 'web', tag: 'Web', desc: 'Sistema gerencial desenvolvido como trabalho da disciplina de Tecnologias Web.' },
  'idc_website':        { category: 'web', tag: 'Web', desc: 'Website institucional desenvolvido para projeto acadêmico/profissional.' },
  'Batalha-de-seguidores': { category: 'web', tag: 'Web', desc: 'Projeto web de batalha de seguidores. Compare perfis e descubra quem tem mais alcance.' },
  'inspecionar':        { category: 'web', tag: 'Ferramenta', desc: 'Ferramenta para inspecionar e debugar páginas web (estilo DevTools).' },
  'overleaf_exteensao': { category: 'web', tag: 'Ferramenta', desc: 'Extensão de navegador para melhorar a experiência no Overleaf (editor LaTeX online).' },
  'Tj':                 { category: 'web', tag: 'Web', desc: 'Projeto web - транспорte/dados sociais. Em desenvolvimento ativo.' },
  'lovable':            { category: 'web', tag: 'Web', desc: 'Experimentos com a plataforma Lovable para geração de apps.' },
  'AutomaEmpreg':       { category: 'web', tag: 'Web', desc: 'Sistema web voltado para automação de processos de emprego/currículos.' },
  'ConectWi':           { category: 'web', tag: 'Web', desc: 'Projeto de conectividade Wi-Fi com painel de controle web.' },
  'TecWebTarefa1':      { category: 'academico', tag: 'Acadêmico', desc: 'Primeira tarefa da disciplina de Tecnologias Web - demonstração de HTML/CSS/JS.' },
  'tcc':                { category: 'academico', tag: 'Acadêmico', desc: 'Trabalho de Conclusão de Curso - Engenharia de Computação pela UFC Sobral.' },
  'Trabalho_Pratico_02_Computacao_Grafica': { category: 'academico', tag: 'Acadêmico', desc: 'Trabalho prático de Computação Gráfica - renderização e manipulação de gráficos.' },
  'STR_Escalonamento':  { category: 'academico', tag: 'Acadêmico', desc: 'Implementação de algoritmos de escalonamento de processos (Sistemas Operacionais).' },
  'BancoDeDados':       { category: 'academico', tag: 'Acadêmico', desc: 'Trabalhos e exercícios da disciplina de Banco de Dados.' },
  'AdicionandoTestsComJUnit': { category: 'academico', tag: 'Acadêmico', desc: 'Exemplos e estudo sobre adição de testes unitários em Java com JUnit.' },
  'implementacaoDeTestsEmJava': { category: 'academico', tag: 'Acadêmico', desc: 'Implementação prática de testes em Java - como estruturar e rodar testes.' },
  'Game_Platform':      { category: 'web', tag: 'Web', desc: 'Plataforma de jogos web - catálogo e player de minigames.' },
  'Loja':               { category: 'web', tag: 'Web', desc: 'E-commerce completo com carrinho, produtos e checkout.' },
  'UniMove':            { category: 'mobile', tag: 'Mobile', desc: 'App de mobilidade universitária - caronas e transporte entre alunos da UFC.' },
  'App':                { category: 'mobile', tag: 'Mobile', desc: 'App mobile - projeto em desenvolvimento.' },
  'AgendamentoListeBus':{ category: 'mobile', tag: 'Mobile', desc: 'App de agendamento de ônibus - lista de horários e reservas.' },
  'Agri-curso':         { category: 'web', tag: 'Web', desc: 'SiteCurso sobre agricultura familiar - conteúdo educacional digital.' },
  'Caixa':              { category: 'web', tag: 'Web', desc: 'Sistema de caixa - controle financeiro e fluxo de caixa.' },
  'FormSave':           { category: 'ferramenta', tag: 'Ferramenta', desc: 'Ferramenta para salvar e gerenciar respostas de formulários.' },
  'FormSave':           { category: 'ferramenta', tag: 'Ferramenta', desc: 'Salva e exporta dados de formulários de forma simples.' },
  'formsSimples':       { category: 'ferramenta', tag: 'Ferramenta', desc: 'Gerador simples de formulários HTML.' },
  'formSimples':        { category: 'ferramenta', tag: 'Ferramenta', desc: 'Variante do gerador de formulários - versão minimalista.' },
  'MeruSeguCont':       { category: 'ferramenta', tag: 'Ferramenta', desc: 'Gerador/gerenciador de contratos - automação de documentos.' },
  'keys':               { category: 'ferramenta', tag: 'Ferramenta', desc: 'Ferramenta de gerenciamento de chaves/credenciais.' },
  'servidor':           { category: 'ferramenta', tag: 'Ferramenta', desc: 'Configurações e scripts de servidor - deploy e infra.' },
  'Modelo_Curriculo':   { category: 'ferramenta', tag: 'Ferramenta', desc: 'Modelo base de currículo para reutilização em novos projetos.' },
  'baseTeste':          { category: 'ferramenta', tag: 'Ferramenta', desc: 'Repositório base para testes e experimentos.' },
  'base':               { category: 'ferramenta', tag: 'Ferramenta', desc: 'Template inicial para novos projetos.' },
  'php_base':           { category: 'ferramenta', tag: 'Ferramenta', desc: 'Estrutura base PHP para iniciar projetos rapidamente.' },
  'metroon':            { category: 'ferramenta', tag: 'Ferramenta', desc: 'Projeto experimental - metrô online.' },
  'FF_dumper_Lua':      { category: 'ferramenta', tag: 'Ferramenta', desc: 'Dumper de arquivos Lua para análise de jogos (hacking/reverse).' },
  'Zygisk-Il2CppDumper':{ category: 'ferramenta', tag: 'Ferramenta', desc: 'Módulo Zygisk para dump de dados il2cpp em runtime (reverse engineering).' },
  'Bypass':             { category: 'ferramenta', tag: 'Ferramenta', desc: 'Projeto de bypass - pesquisa de segurança.' },
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
  'Jupyter Notebook': 'fas fa-book-open',
  'Vue': 'fab fa-vuejs',
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
  'Jupyter Notebook': '#DA5B0B',
  ':card_index': '#563d7c',
};

/* Buscar repos do GitHub via API */
async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    if (!response.ok) throw new Error(' falha ao buscar repositórios');
    const repos = await response.json();
    return repos;
  } catch (err) {
    console.error('Erro ao buscar repos:', err);
    return null;
  }
}

/* Filtrar e ordenar repositórios relevantes */
function filterRelevantRepos(repos) {
  // Excluir forks, vazios ou arquivos de config - mas manter todos, só ordenar por atualização
  return repos
    .filter(r => !r.fork)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
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
    
    // Tratamento de URL para GitHub Pages (prioriza homepage, senão assume gh-pages se for projeto web)
    const isWeb = repo.homepage || filter === 'web' || meta.category === 'web' || meta.category === 'academico';
    const ghPagesUrl = `https://${GITHUB_USER}.github.io/${repo.name}/`;
    const finalDemoUrl = meta.demo ? meta.demo : (repo.homepage && repo.homepage.trim() !== '' ? repo.homepage : (isWeb ? ghPagesUrl : ''));

    const demoLink = finalDemoUrl !== ''
      ? `<a href="${finalDemoUrl}" target="_blank" rel="noopener" class="project-link demo"><i class="fas fa-external-link-alt"></i> Ver site</a>`
      : `<span class="project-link demo disabled"><i class="fas fa-external-link-alt"></i> Sem demo</span>`;
    
    // Imagem do OpenGraph do GitHub
    const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repo.name}`;
    
    const updatedDate = new Date(repo.updated_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

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
          <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link github">
            <i class="fab fa-github"></i> Código
          </a>
          ${demoLink}
        </div>
      </article>
    `;
  }).join('');

  // Re-observar para animação reveal
  observeReveals();
}

/* Inicializar */
document.addEventListener('DOMContentLoaded', async () => {
  const repos = await fetchGitHubRepos();
  const grid = document.getElementById('projects-grid');

  if (!repos) {
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
