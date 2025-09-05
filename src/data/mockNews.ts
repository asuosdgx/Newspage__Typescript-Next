import { Article } from "@/types/news";

export const mockArticles: Article[] = [
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Avanços Tecnológicos Revolucionam Energia Renovável",
    description: "Cientistas anunciaram uma descoberta revolucionária que pode mudar nossa percepção sobre energia renovável.",
    url: "https://example.com/tech-breakthrough",
    urlToImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T10:30:00Z",
    content: "Cientistas de universidades líderes anunciaram uma grande descoberta em tecnologia de energia renovável que pode mudar o panorama da geração de energia limpa para sempre."
  },
  {
    source: {
      id: "reuters",
      name: "Reuters"
    },
    author: "Reuters Staff",
    title: "Mercados Globais Mostram Sinais de Forte Recuperação",
    description: "Mercados financeiros mundiais estão mostrando tendências positivas conforme investidores reagem a novas políticas econômicas.",
    url: "https://example.com/markets-recovery",
    urlToImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T09:15:00Z",
    content: "Bolsas de valores nos principais centros financeiros têm mostrado resistência notável, com índices atingindo novos patamares em meio a indicadores econômicos positivos."
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "Repórter de Saúde",
    title: "Novo Estudo Revela Benefícios Surpreendentes do Exercício",
    description: "Pesquisa recente mostra que atividade física regular tem mais benefícios do que se pensava anteriormente.",
    url: "https://example.com/health-exercise",
    urlToImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T08:45:00Z",
    content: "Um estudo abrangente envolvendo mais de 10.000 participantes revelou que exercícios regulares proporcionam benefícios muito além do que os cientistas entendiam anteriormente."
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch"
    },
    author: "Repórter Tech",
    title: "Inteligência Artificial Avança na Área da Saúde",
    description: "A tecnologia de IA está fazendo progressos significativos no diagnóstico médico e planejamento de tratamento.",
    url: "https://example.com/ai-healthcare",
    urlToImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T07:30:00Z",
    content: "Provedores de saúde estão adotando cada vez mais ferramentas alimentadas por IA para melhorar os resultados dos pacientes e otimizar processos médicos."
  },
  {
    source: {
      id: "espn",
      name: "ESPN"
    },
    author: "Repórter Esportivo",
    title: "Final do Campeonato Bate Recorde de Audiência",
    description: "O último jogo do campeonato atraiu a maior audiência televisiva da história do esporte.",
    url: "https://example.com/championship-record",
    urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T06:00:00Z",
    content: "Redes de televisão reportam números de audiência sem precedentes para a final do campeonato, marcando um momento histórico na transmissão esportiva."
  },
  {
    source: {
      id: "wired",
      name: "WIRED"
    },
    author: "Escritor Científico",
    title: "Mudanças Climáticas: Novas Soluções de Fontes Inesperadas",
    description: "Abordagens inovadoras para combater mudanças climáticas estão vindo de indústrias e tecnologias surpreendentes.",
    url: "https://example.com/climate-solutions",
    urlToImage: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T05:15:00Z",
    content: "Da agricultura à manufatura, indústrias estão desenvolvendo soluções criativas para reduzir emissões de carbono e combater as mudanças climáticas."
  },
  {
    source: {
      id: "g1",
      name: "G1"
    },
    author: "G1 Tecnologia",
    title: "Brasil Lidera Ranking de Inovação em Energia Solar",
    description: "País se destaca mundialmente em pesquisa e desenvolvimento de tecnologia solar fotovoltaica.",
    url: "https://example.com/brasil-energia-solar",
    urlToImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T04:30:00Z",
    content: "O Brasil conquistou a primeira posição no ranking mundial de inovação em energia solar, com investimentos que superam R$ 50 bilhões em 2024."
  },
  {
    source: {
      id: "folha",
      name: "Folha de S.Paulo"
    },
    author: "Folha Saúde",
    title: "Vacina Nacional Contra Dengue Mostra 98% de Eficácia",
    description: "Butantan anuncia resultado promissor em fase final de testes da nova vacina brasileira.",
    url: "https://example.com/vacina-dengue",
    urlToImage: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T03:45:00Z",
    content: "A vacina desenvolvida pelo Instituto Butantan apresentou eficácia de 98% na prevenção da dengue em todas suas variações, segundo dados preliminares."
  },
  {
    source: {
      id: "estadao",
      name: "O Estado de S.Paulo"
    },
    author: "Estadão Economia",
    title: "PIB Brasileiro Cresce 4,2% no Terceiro Trimestre",
    description: "Economia nacional supera expectativas com crescimento robusto impulsionado pelo agronegócio.",
    url: "https://example.com/pib-brasil",
    urlToImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T02:30:00Z",
    content: "O Produto Interno Bruto brasileiro registrou crescimento de 4,2% no terceiro trimestre, superando as projeções mais otimistas dos analistas."
  },
  {
    source: {
      id: "uol",
      name: "UOL"
    },
    author: "UOL Esporte",
    title: "Seleção Brasileira Confirma Participação na Copa América 2024",
    description: "CBF anuncia lista oficial com 26 jogadores convocados para a competição.",
    url: "https://example.com/selecao-copa-america",
    urlToImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop&crop=entropy",
    publishedAt: "2024-01-15T01:15:00Z",
    content: "A Confederação Brasileira de Futebol divulgou a lista final dos 26 jogadores que representarão o Brasil na Copa América 2024."
  }
];

export const mockArticlesByCategory = {
  business: [
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Repórter de Negócios",
      title: "Ações de Tecnologia Disparam Após Relatórios de Ganhos",
      description: "Principais empresas de tecnologia superam expectativas trimestrais, impulsionando otimismo do mercado.",
      url: "https://example.com/tech-stocks-surge",
      urlToImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T11:00:00Z",
      content: "O setor de tecnologia lidera os ganhos do mercado conforme grandes empresas reportam ganhos trimestrais melhores que o esperado."
    },
    {
      source: { id: "fortune", name: "Fortune" },
      author: "Analista Financeiro",
      title: "Mercado de Criptomoedas Mostra Sinais de Estabilização",
      description: "Moedas digitais estão encontrando terreno mais estável após meses de volatilidade.",
      url: "https://example.com/crypto-stable",
      urlToImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T10:00:00Z",
      content: "Mercados de criptomoedas estão mostrando maior estabilidade conforme a adoção institucional continua a crescer."
    },
    {
      source: { id: "valor", name: "Valor Econômico" },
      author: "Valor Empresas",
      title: "Startups Brasileiras Captam R$ 12 Bilhões em 2024",
      description: "Investimento em empresas de tecnologia nacional bate recorde histórico no ano.",
      url: "https://example.com/startups-brasil",
      urlToImage: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T09:30:00Z",
      content: "O ecossistema de startups brasileiro atraiu investimentos recordes, consolidando o país como hub de inovação na América Latina."
    },
    {
      source: { id: "infomoney", name: "InfoMoney" },
      author: "InfoMoney Mercados",
      title: "Agronegócio Movimenta R$ 2,8 Trilhões na Economia",
      description: "Setor representa 27% do PIB nacional e lidera exportações brasileiras.",
      url: "https://example.com/agronegocio-pib",
      urlToImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T08:15:00Z",
      content: "O agronegócio brasileiro confirma sua posição como principal motor da economia nacional, gerando empregos e divisas."
    }
  ],
  technology: [
    {
      source: { id: "verge", name: "The Verge" },
      author: "Editor Tech",
      title: "Tecnologia Revolucionária de Smartphone Revelada",
      description: "Novos recursos de smartphone prometem mudar como interagimos com nossos dispositivos.",
      url: "https://example.com/new-smartphone-tech",
      urlToImage: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T12:30:00Z",
      content: "As mais recentes inovações em smartphones incluem integração avançada de IA e tecnologia de display inovadora."
    },
    {
      source: { id: "olhar-digital", name: "Olhar Digital" },
      author: "Olhar Digital Tech",
      title: "5G Chega a 100% das Capitais Brasileiras",
      description: "Cobertura da rede 5G atinge todas as capitais do país, prometendo revolucionar conectividade.",
      url: "https://example.com/5g-capitais",
      urlToImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T11:45:00Z",
      content: "A implementação completa do 5G nas capitais brasileiras marca novo marco na infraestrutura de telecomunicações do país."
    },
    {
      source: { id: "tecmundo", name: "TecMundo" },
      author: "TecMundo Inovação",
      title: "IA Brasileira Supera ChatGPT em Português",
      description: "Modelo de inteligência artificial desenvolvido no Brasil demonstra superioridade em idioma português.",
      url: "https://example.com/ia-brasileira",
      urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T10:20:00Z",
      content: "Pesquisadores brasileiros desenvolvem IA que supera modelos internacionais em compreensão e geração de texto em português."
    }
  ],
  health: [
    {
      source: { id: "medical-news", name: "Medical News Today" },
      author: "Correspondente Médico",
      title: "Avanço no Tratamento de Câncer Mostra Promessa",
      description: "Nova abordagem de imunoterapia demonstra sucesso significativo em ensaios clínicos.",
      url: "https://example.com/cancer-breakthrough",
      urlToImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T09:00:00Z",
      content: "Pesquisadores relatam resultados promissores de um novo tratamento de câncer que pode revolucionar o cuidado ao paciente."
    },
    {
      source: { id: "abril-saude", name: "Abril Saúde" },
      author: "Abril Medicina",
      title: "Telemedicina Cresce 300% no Brasil em 2024",
      description: "Consultas médicas virtuais se consolidam como nova realidade na saúde brasileira.",
      url: "https://example.com/telemedicina-brasil",
      urlToImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T08:30:00Z",
      content: "A telemedicina registrou crescimento exponencial, democratizando o acesso à saúde em regiões remotas do país."
    },
    {
      source: { id: "drauzio", name: "Dr. Drauzio Varella" },
      author: "Equipe Médica",
      title: "Descoberta de Medicamento 100% Nacional Contra Alzheimer",
      description: "Pesquisadores da USP desenvolvem tratamento inovador para doença neurodegenerativa.",
      url: "https://example.com/medicamento-alzheimer",
      urlToImage: "https://images.unsplash.com/photo-1579165466991-467135ad3110?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T07:45:00Z",
      content: "O medicamento desenvolvido por pesquisadores brasileiros mostra resultados promissores em retardar o avanço do Alzheimer."
    }
  ],
  sports: [
    {
      source: { id: "sports-center", name: "Sports Center" },
      author: "Repórter Esportivo",
      title: "Equipe Azarão Chega à Final do Campeonato",
      description: "Contra todas as expectativas, a equipe improvável garantiu sua vaga no jogo do campeonato.",
      url: "https://example.com/underdog-finals",
      urlToImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T08:00:00Z",
      content: "A jornada surpreendente desta equipe azarão cativou fãs em todo o país."
    },
    {
      source: { id: "ge", name: "Globo Esporte" },
      author: "GE Futebol",
      title: "Brasil Garantido na Copa do Mundo de 2026",
      description: "Seleção brasileira confirma classificação antecipada para o Mundial nos EUA, México e Canadá.",
      url: "https://example.com/brasil-copa-2026",
      urlToImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T09:45:00Z",
      content: "Com 6 rodadas de antecedência, a Seleção Brasileira garante presença na Copa do Mundo de 2026 após vitória crucial."
    },
    {
      source: { id: "lance", name: "Lance!" },
      author: "Lance! Olimpíadas",
      title: "Rebeca Andrade Conquista Ouro Histórico na Ginástica",
      description: "Ginasta brasileira faz história ao conquistar medalha de ouro no Campeonato Mundial.",
      url: "https://example.com/rebeca-ouro",
      urlToImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T07:20:00Z",
      content: "Rebeca Andrade se torna a primeira brasileira a conquistar ouro no individual geral do Campeonato Mundial de Ginástica."
    }
  ],
  entertainment: [
    {
      source: { id: "entertainment-weekly", name: "Entertainment Weekly" },
      author: "Repórter de Entretenimento",
      title: "Novo Filme Quebra Recordes de Fim de Semana de Estreia",
      description: "O filme muito aguardado superou todas as expectativas de bilheteria em seu fim de semana de estreia.",
      url: "https://example.com/movie-record",
      urlToImage: "https://images.unsplash.com/photo-1489599512549-ed1cd8e2b525?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T07:00:00Z",
      content: "Audiências correram para os cinemas para ver o filme blockbuster, estabelecendo novos recordes da indústria."
    },
    {
      source: { id: "omelete", name: "Omelete" },
      author: "Omelete Cinema",
      title: "Cidade Invisível 3ª Temporada Bate Recorde na Netflix",
      description: "Série brasileira de fantasia se torna o maior sucesso nacional da plataforma.",
      url: "https://example.com/cidade-invisivel-netflix",
      urlToImage: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T10:10:00Z",
      content: "A terceira temporada de Cidade Invisível conquista audiência mundial, elevando o padrão das produções brasileiras."
    },
    {
      source: { id: "papelpop", name: "Papel Pop" },
      author: "Papel Pop Música",
      title: "Anitta Anuncia Turnê Mundial com 50 Shows",
      description: "Cantora brasileira confirma tour internacional com passagem por 25 países.",
      url: "https://example.com/anitta-turne-mundial",
      urlToImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T06:30:00Z",
      content: "Anitta anuncia sua maior turnê internacional, consolidando seu sucesso no cenário pop mundial."
    }
  ],
  science: [
    {
      source: { id: "nature", name: "Nature" },
      author: "Correspondente Científico",
      title: "Missão a Marte Descobre Potenciais Sinais de Vida Antiga",
      description: "Últimas descobertas do rover de Marte sugerem que o planeta pode ter sustentado vida microbiana.",
      url: "https://example.com/mars-life-discovery",
      urlToImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T06:30:00Z",
      content: "Cientistas analisam amostras de rocha que podem fornecer evidências de vida microbiana antiga em Marte."
    },
    {
      source: { id: "fapesp", name: "Agência FAPESP" },
      author: "FAPESP Pesquisa",
      title: "INPE Detecta Redução de 40% no Desmatamento da Amazônia",
      description: "Dados de satélite mostram menor taxa de desmatamento dos últimos 15 anos na região.",
      url: "https://example.com/amazonia-desmatamento",
      urlToImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T08:50:00Z",
      content: "O Instituto Nacional de Pesquisas Espaciais registra queda significativa no desmatamento amazônico, resultado de políticas de preservação."
    },
    {
      source: { id: "canaltech", name: "Canaltech" },
      author: "Canaltech Ciência",
      title: "Cientistas Brasileiros Descobrem Nova Espécie de Dinossauro",
      description: "Fóssil encontrado no interior de São Paulo revela nova espécie de dinossauro herbívoro.",
      url: "https://example.com/dinossauro-brasil",
      urlToImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T05:40:00Z",
      content: "A descoberta do 'Brasilossaurus magnificus' amplia conhecimento sobre dinossauros que habitaram território brasileiro."
    }
  ],
  general: [
    {
      source: { id: "news-general", name: "News General" },
      author: "Repórter Geral",
      title: "Desenvolvimento Urbano Sustentável Ganha Momentum",
      description: "Cidades ao redor do mundo estão implementando práticas de desenvolvimento mais sustentáveis.",
      url: "https://example.com/sustainable-cities",
      urlToImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T04:00:00Z",
      content: "Planejadores urbanos estão priorizando soluções verdes e tecnologias sustentáveis no desenvolvimento de cidades modernas."
    },
    {
      source: { id: "cnn-brasil", name: "CNN Brasil" },
      author: "CNN Brasil Cidades",
      title: "São Paulo Inaugura Maior Parque Urbano do Brasil",
      description: "Novo parque de 180 hectares se torna referência em sustentabilidade urbana na América Latina.",
      url: "https://example.com/parque-sao-paulo",
      urlToImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T11:20:00Z",
      content: "O novo parque urbano de São Paulo integra tecnologia sustentável e biodiversidade, servindo de modelo para outras metrópoles."
    },
    {
      source: { id: "band", name: "Band" },
      author: "Band Educação",
      title: "Brasil Sobe 15 Posições em Ranking Mundial de Educação",
      description: "Investimentos em educação digital colocam país entre os 20 melhores do mundo.",
      url: "https://example.com/educacao-ranking",
      urlToImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=400&fit=crop&crop=entropy",
      publishedAt: "2024-01-15T09:10:00Z",
      content: "Políticas públicas focadas em tecnologia educacional elevam Brasil no ranking internacional de qualidade educacional."
    }
  ]
};
