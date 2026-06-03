export const profile = {
  name: 'Johny Bolis',
  title: 'Analista de Sistemas e Suporte, Programador Jr.',
  subtitle:
    'Atuo com suporte de sistemas, desenvolvimento web e projetos autorais, conectando atendimento técnico, organização de processos e construção de produtos digitais.',
  about:
    'Tenho experiência profissional em suporte de sistemas na Unimed Erechim e desenvolvo projetos próprios que exploram produtos web, SaaS, experiências interativas e soluções orientadas por dados. Meu foco está em entender o problema, estruturar a solução e entregar com consistência técnica.',
  experience:
    'Experiência real em suporte de sistemas e construção de projetos autorais com Next.js, Nuxt, React, Vue, Java e banco de dados, sempre com atenção a clareza, manutenção e evolução do produto.',
  email: 'johnycristian2@gmail.com',
  github: 'https://github.com/johnycristian2-dev',
  linkedin: 'https://www.linkedin.com/in/johny-bolis-466202313/',
  linkedinDisplay: 'Johny Bolis',
  photoSrc: '/profile-photo.svg',
  photoAlt: 'Foto de perfil de Johny Bolis',
}

export const heroMetrics = [
  {
    value: '2 anos em suporte de sistemas',
    label:
      'Vivência em ambiente corporativo na Unimed Erechim, com foco em estabilidade e atendimento técnico.',
  },
  {
    value: '6 projetos autorais',
    label:
      'Portfólio com SaaS, e-commerce, experiências interativas, game web e produto com IA.',
  },
  {
    value: 'Next.js, Nuxt, Java e SQL',
    label:
      'Base técnica voltada a interface, lógica de negócio, dados e evolução contínua.',
  },
]

export const aboutPillars = [
  {
    title: 'Suporte com visão de processo',
    description:
      'Minha experiência em suporte me fez olhar para sistemas além da tela: considero fluxo, impacto operacional e clareza no atendimento.',
  },
  {
    title: 'Projetos autorais consistentes',
    description:
      'Desenvolvo aplicações próprias para explorar arquitetura, identidade visual, navegação, produto digital e organização técnica.',
  },
  {
    title: 'Aprendizado orientado a prática',
    description:
      'Minha evolução acontece em projeto real: estudo, construo, ajusto e valido no código, sempre buscando resultado visível.',
  },
  {
    title: 'Base técnica versátil',
    description:
      'Transito entre front-end, experiências interativas, back-end, banco de dados e Java, o que amplia meu repertório de entrega.',
  },
]

export const experienceTimeline = [
  {
    title: 'Analista de Suporte de Sistemas',
    scope: 'Unimed Erechim',
    period: '2 anos',
    description:
      'Atuação em ambiente corporativo com foco em suporte a sistemas, atendimento técnico, leitura de ocorrências e apoio à continuidade operacional.',
    bullets: [
      'Suporte a usuários e acompanhamento de demandas relacionadas a sistemas internos.',
      'Leitura de incidentes, triagem de problemas e apoio à estabilização de processos.',
      'Comunicação objetiva com áreas envolvidas para dar continuidade e previsibilidade ao atendimento.',
    ],
  },
  {
    title: 'Projetos autorais em desenvolvimento web',
    scope: 'Portfólio e produtos próprios',
    period: 'Em evolução',
    description:
      'Desenvolvimento de aplicações para estudar produto digital, arquitetura front-end, experiência do usuário e organização de código em contextos variados.',
    bullets: [
      'Criação de projetos com Next.js, Nuxt, React, Vue, Prisma e PostgreSQL.',
      'Exploração de diferentes formatos, como SaaS educacional, e-commerce, IA, game web e interfaces imersivas.',
      'Evolução contínua de UI, estrutura de componentes, regras de negócio e apresentação de portfólio.',
    ],
  },
]

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Cursos', href: '#certificados' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export const learningItems = [
  {
    title: 'Espaço para certificados',
    institution: 'Adicione aqui a instituição ou plataforma',
    type: 'Certificado',
    year: '2026',
    description:
      'Use este card para mostrar um certificado importante, com nome do curso, instituição, ano e link da credencial.',
    status: 'Pronto para editar',
    href: '',
    imageSrc: '',
  },
  {
    title: 'Espaço para cursos',
    institution: 'Adicione aqui a plataforma do curso',
    type: 'Curso',
    year: '2026',
    description:
      'Você pode listar cursos de React, Next.js, Java, SQL ou qualquer formação complementar relevante para sua carreira.',
    status: 'Pronto para editar',
    href: '',
    imageSrc: '',
  },
  {
    title: 'Espaço para formação complementar',
    institution: 'Bootcamp, trilha ou formação livre',
    type: 'Formação',
    year: '2026',
    description:
      'Este espaço funciona bem para bootcamps, trilhas mais longas ou formações que reforcem sua base técnica.',
    status: 'Pronto para editar',
    href: '',
    imageSrc: '',
  },
]

export const heroLinks = [
  { label: 'Ver projetos', href: '#projetos', variant: 'primary' as const },
  { label: 'Falar comigo', href: '#contato', variant: 'secondary' as const },
  { label: 'GitHub', href: profile.github, variant: 'ghost' as const },
]

export const skillGroups = [
  {
    title: 'Linguagens',
    items: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Web',
    items: ['React', 'Next.js', 'Nuxt', 'Vue', 'Tailwind CSS'],
  },
  {
    title: 'Back-end e Dados',
    items: ['Node.js', 'Prisma', 'PostgreSQL', 'Auth.js'],
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Prisma Studio'],
  },
  {
    title: 'Competências Profissionais',
    items: [
      'Comunicação',
      'Resolução de problemas',
      'Análise de sistemas',
      'Trabalho em equipe',
    ],
  },
]

export const projectList = [
  {
    name: 'Plataforma J',
    category: 'SaaS educacional premium',
    year: '2026',
    summary:
      'Plataforma de ensino online com áreas para aluno, professor e administrador, pensada para operação SaaS com autenticação, conteúdo premium e dashboards.',
    problem:
      'A proposta foi centralizar jornada de ensino, acesso por perfil, gestão de cursos e visão administrativa em um único produto escalável.',
    solution:
      'Estruturei a aplicação com Next.js, Prisma, PostgreSQL e Auth.js, separando áreas protegidas, landing pública e base pronta para evolução de assinaturas e trilhas.',
    impact:
      'O projeto demonstra capacidade de estruturar produto full stack com identidade de marca, autenticação, papéis e base de negócio mais robusta.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    live: '',
    repo: 'https://github.com/johnycristian2-dev/PlataformaJ',
    status: 'Em desenvolvimento',
    mockup: {
      eyebrow: 'Dashboard SaaS',
      headline: 'Aluno, professor e admin em uma mesma plataforma.',
      supporting:
        'Fluxo premium de ensino com landing, autenticacao e areas protegidas.',
      chips: ['Auth', 'Dashboards', 'Prisma'],
      surfaceClass:
        'bg-[radial-gradient(circle_at_top_right,rgba(179,32,45,0.28),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]',
      orbClass: 'bg-crimson/30',
      dotClass: 'bg-crimson',
      tagClass: 'border-crimson/25 bg-crimson/[0.08] text-mist/90',
    },
  },
  {
    name: 'Farmacia Web',
    category: 'E-commerce farmacêutico',
    year: '2026',
    summary:
      'Farmácia online com catálogo, filtros, carrinho, checkout e fluxo de compra pensado para navegação clara e visual confiável.',
    problem:
      'O desafio foi criar uma experiência de compra objetiva para medicamentos sem receita, com informação acessível e jornada simples do catálogo ao pedido.',
    solution:
      'Construí a aplicação com Nuxt, Vue, Tailwind e Prisma, organizando busca, categorias, detalhes de produto, carrinho persistente e checkout completo.',
    impact:
      'O projeto mostra domínio de jornada comercial, organização de catálogo, UI responsiva e integração entre interface e dados.',
    stack: [
      'Nuxt',
      'Vue 3',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Nodemailer',
    ],
    live: '',
    repo: 'https://github.com/johnycristian2-dev/FarmaciaPI',
    status: 'Funcional',
    mockup: {
      eyebrow: 'Catalogo e checkout',
      headline: 'Busca, carrinho e pedido em uma experiencia limpa.',
      supporting:
        'Projeto com foco em conversao, organizacao visual e confianca para compra online.',
      chips: ['Catalogo', 'Carrinho', 'Checkout'],
      surfaceClass:
        'bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.32),transparent_30%),linear-gradient(135deg,rgba(125,211,252,0.09),rgba(255,255,255,0.03))]',
      orbClass: 'bg-sky-300/30',
      dotClass: 'bg-sky-300',
      tagClass: 'border-sky-200/20 bg-sky-300/10 text-sky-100',
    },
  },
  {
    name: 'Cecil Brain',
    category: 'Experiencia interativa com IA visual',
    year: '2026',
    summary:
      'MVP futurista inspirado em um cerebro digital, com visual 3D, interacao por gestos e exploracao de uma rede de conhecimento.',
    problem:
      'A ideia foi criar uma experiencia visual de alto impacto para representar pensamento digital, IA e exploracao de informacao em uma interface memoravel.',
    solution:
      'Desenvolvi a interface em Next.js com Three.js, React Three Fiber, postprocessing e MediaPipe, combinando entrada por gesto e cena 3D.',
    impact:
      'O projeto evidencia exploracao criativa de interface, experimentacao com tecnologias imersivas e repertorio alem do web tradicional.',
    stack: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'MediaPipe'],
    live: '',
    repo: '',
    status: 'MVP experimental',
    mockup: {
      eyebrow: '3D + gestos',
      headline: 'Uma rede de conhecimento com linguagem visual futurista.',
      supporting:
        'Exploracao interativa de um cerebro digital com cena imersiva e efeitos graficos.',
      chips: ['Three.js', 'Gestos', 'Graph'],
      surfaceClass:
        'bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.24),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(56,189,248,0.08))]',
      orbClass: 'bg-cyan-300/25',
      dotClass: 'bg-cyan-300',
      tagClass: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
    },
  },
  {
    name: 'Astros Box',
    category: 'Landing premium de conversao',
    year: '2026',
    summary:
      'Experiencia de mystery box com narrativa cinematografica, foco em conversao, escassez e interacao premium para portfolio.',
    problem:
      'O objetivo foi construir uma landing menos comum, com atmosfera forte, suspense no fluxo e elementos de produto pensados para prender atencao.',
    solution:
      'Estruturei a experiencia com Next.js, React e Tailwind, incluindo feed social, unboxing modal, favoritos e checkout simulado.',
    impact:
      'O projeto reforca minha capacidade de criar interfaces com linguagem propria, ritmo de navegacao e foco em conversao.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    live: '',
    repo: '',
    status: 'Interface premium',
    mockup: {
      eyebrow: 'Narrativa e conversao',
      headline: 'Unboxing dramatico com atmosfera de produto premium.',
      supporting:
        'Fluxo com suspense, escassez, atividade social e CTA visualmente forte.',
      chips: ['Unboxing', 'Checkout', 'Motion'],
      surfaceClass:
        'bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.2),transparent_28%),linear-gradient(135deg,rgba(24,24,27,0.95),rgba(120,53,15,0.18))]',
      orbClass: 'bg-amber-300/25',
      dotClass: 'bg-amber-300',
      tagClass: 'border-amber-300/20 bg-amber-300/10 text-amber-100',
    },
  },
  {
    name: 'Ecos da Vontade',
    category: 'Jogo web narrativo',
    year: '2026',
    summary:
      'MVP narrativo dark em Next.js com escolhas, influencia mental e memoria de decisoes em uma ambientacao mais autoral.',
    problem:
      'A proposta foi explorar narrativa interativa no navegador, criando uma experiencia de jogo com identidade literaria e atmosfera propria.',
    solution:
      'Estruturei o jogo como aplicacao web com menu principal, prologo e base pronta para evolucao de escolhas, ramificacoes e memoria de progresso.',
    impact:
      'O projeto amplia meu repertorio para alem de sistemas tradicionais e mostra capacidade de trabalhar experiencia, historia e interface juntas.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    live: '',
    repo: '',
    status: 'MVP narrativo',
    mockup: {
      eyebrow: 'Dark story game',
      headline: 'Escolhas, atmosfera e memoria de decisoes no navegador.',
      supporting:
        'Projeto autoral com foco em narrativa, clima e progressao interativa.',
      chips: ['Narrativa', 'Escolhas', 'Ambientacao'],
      surfaceClass:
        'bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.16),transparent_28%),linear-gradient(135deg,rgba(17,17,17,0.96),rgba(88,28,135,0.15))]',
      orbClass: 'bg-fuchsia-300/20',
      dotClass: 'bg-fuchsia-300',
      tagClass: 'border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100',
    },
  },
  {
    name: 'Mod de Mine',
    category: 'Projeto em Java e Forge',
    year: '2025',
    summary:
      'Projeto de modding para Minecraft em Java com base Forge, explorando estrutura de jogo, eventos e personalizacao de comportamento.',
    problem:
      'A motivacao foi entender melhor extensao de jogos, ciclo de build em Java e como adaptar mecanicas dentro de um ecossistema consolidado.',
    solution:
      'Utilizei a base Forge para montar o ambiente, organizar o projeto e trabalhar uma estrutura pronta para criacao e ajustes de funcionalidades no jogo.',
    impact:
      'Esse projeto amplia meu repertorio tecnico em Java e mostra curiosidade por ecossistemas fora do fluxo tradicional de aplicacoes web.',
    stack: ['Java', 'Gradle', 'Minecraft Forge'],
    live: '',
    repo: '',
    status: 'Estudo prático',
    mockup: {
      eyebrow: 'Java + modding',
      headline: 'Explorando logica de jogo e extensao com Forge.',
      supporting:
        'Projeto tecnico voltado a estrutura, eventos e personalizacao em ambiente Java.',
      chips: ['Java', 'Forge', 'Gradle'],
      surfaceClass:
        'bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.18),transparent_28%),linear-gradient(135deg,rgba(5,46,22,0.82),rgba(255,255,255,0.03))]',
      orbClass: 'bg-emerald-300/20',
      dotClass: 'bg-emerald-300',
      tagClass: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-100',
    },
  },
]

export const contactItems = [
  {
    label: 'GitHub',
    value: 'github.com/johnycristian2-dev',
    href: profile.github,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinDisplay,
    href: profile.linkedin,
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
]
