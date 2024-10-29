import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".devemdobro",
 `Curso focado em desenvolvimento web, abrangendo fundamentos de programação, desenvolvimento frontend
 (HTML, CSS, JavaScript), e backend (Node.js, construção de APIs, integração com bancos de dados SQL e
 NoSQL). Também inclui versionamento com Git, melhores práticas de codificação e metodologias ágeis.
 Prepara para enfrentar desafios práticos na indústria de tecnologia.`,
  "Desenvolvimento prático e teórico na área de programação.",
  "DevQuest",
  "Mar 2023 - Abr 2025 <br>(2 anos)"
);

hoverChangeExperience(
  ".devjrbr",
  `Durante o curso, desenvolvi habilidades práticas em front-end e back-end, focando na construção de interfaces modernas e funcionais e na integração com APIs robustas. Utilizei tecnologias como Node.js, JavaScript, Dart e Flutter para criar soluções inovadoras, como cartões de visita digitais personalizados e sistemas de check-in para eventos corporativos. O curso reforçou meu entendimento de design intuitivo, experiência do usuário (UX) e integração entre front e back-end, sendo ideal para startups e empresas dentro do ecossistema de inovação tecnológica.`,
  " Aplicativo para Startups e Empresas - Cartão de visitas e Check-in.",
  "HITT - Hub de Inovação Tecnológica de Taubaté",
  "Jun 2024 - Ago 2024 <br>(3 meses)"
);

hoverChangeExperience(
  ".rocketseat",
  ` Desenvolvimento de uma aplicação em JavaScript e Node.js, aplicação dos conceitos de variáveis,
 operadores, tipos de dados, estruturas de dados, controle de uxo, estruturas de repetição, condicionais,
 assincronismo e criação de prompts interativos com o uso da biblioteca Inquirer.`,
  "Aplicação para cadastrar metas e seu progresso.",
  "NLW Pocket: Javascript - Node.js",
  "Botcamp - 5h de duração"
);

hoverChangeExperience(
  ".empowerdata",
  `Curso intensivo com foco prático no aprendizado de Python, cobrindo desde os fundamentos da linguagem até a automação de tarefas, manipulação de arquivos, análise de dados e desenvolvimento de aplicações. Enfatiza o uso de Python em cenários reais, proporcionando uma base sólida para aplicação no dia a dia.`,
  "Aplicações automatizadas",
  "Semana do Python na prática",
  "Botcamp - 8h de duração"
);

hoverChangeExperience(
  ".conquer",
  `Curso focado em utilizar ferramentas de inteligência artificial para otimizar a produtividade pessoal e profissional. Com uma abordagem prática, o curso ensina a integrar IA em tarefas cotidianas, automatizar processos e melhorar a tomada de decisões. A formação abrange técnicas e estratégias para aplicar IA em diferentes áreas, aumentando a eficiência e a capacidade de gestão do tempo.`,
  "Produtividade com IA",
  "Acelere a carreira com inteligência artificial",
  "Botcamp - 10h de duração"
);

hoverChangeExperience(
  ".onebitcode",
  `Minicurso focado em desenvolvimento web, abordando fundamentos de HTML e CSS para construção de páginas, JavaScript para adicionar interatividade, e lógica programável para resolução de problemas e estruturação de algoritmos. Proporciona uma base prática e sólida no desenvolvimento front-end.`,
  "Start em programação - landing page clínica Veterinária",
  "OneBitCode",
  "botcamp - 5h de duração"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);

hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);

hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);

hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);

hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);

hoverChangeDescription(
  ".nodejs",
  "Node.js é uma plataforma JavaScript que permite criar aplicações e APIs do lado do servidor de forma eficiente e escalável, com arquitetura orientada a eventos."
);
