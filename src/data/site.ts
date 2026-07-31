import antes1 from "@/assets/antes-1.jpg";
import depois1 from "@/assets/depois-1.jpg";
import antes2 from "@/assets/antes-2.jpg";
import depois2 from "@/assets/depois-2.jpg";
import antes3 from "@/assets/antes-3.jpg";
import depois3 from "@/assets/depois-3.jpg";
import equipe1 from "@/assets/equipe-1.jpg";
import equipe2 from "@/assets/equipe-2.jpg";
import equipe3 from "@/assets/equipe-3.jpg";
import equipe4 from "@/assets/equipe-4.jpg";

/**
 * Conteúdo do site. Para reutilizar o projeto em outro salão,
 * basta alterar este arquivo e substituir as imagens em src/assets.
 */

export const salao = {
  nome: "Atelier Lumière",
  slogan: "Salão de beleza no centro de São Paulo",
  telefone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  instagram: "@atelierlumiere",
  instagramUrl: "https://instagram.com",
  endereco: "Rua Barão de Itapetininga, 120 — Centro, São Paulo — SP",
  mapaUrl:
    "https://www.google.com/maps?q=Rua+Barão+de+Itapetininga,+120,+São+Paulo&output=embed",
  horarios: [
    { dia: "Segunda a Sexta", hora: "09h — 20h" },
    { dia: "Sábado", hora: "09h — 18h" },
    { dia: "Domingo", hora: "Fechado" },
  ],
};

export const whatsappLink = `https://wa.me/${salao.whatsapp}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Antes e Depois", href: "#transformacoes" },
  { label: "Equipe", href: "#equipe" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const servicos = [
  {
    icone: "Scissors",
    titulo: "Corte Feminino",
    descricao:
      "Cortes pensados para o seu rosto e rotina, com acabamento impecável e finalização inclusa.",
  },
  {
    icone: "Wind",
    titulo: "Escova",
    descricao:
      "Escova modelada, lisa ou com ondas suaves, sempre com proteção térmica e brilho natural.",
  },
  {
    icone: "Palette",
    titulo: "Coloração",
    descricao:
      "Loiros, morenas iluminadas e cobertura de brancos com produtos de alta performance.",
  },
  {
    icone: "Hand",
    titulo: "Manicure e Pedicure",
    descricao:
      "Cuidado detalhado com as unhas, esmaltação duradoura e higiene rigorosa em cada sessão.",
  },
  {
    icone: "Sparkle",
    titulo: "Barbearia",
    descricao:
      "Cortes masculinos, degradês e barba desenhada com navalha e toalha quente.",
  },
  {
    icone: "Droplets",
    titulo: "Tratamentos",
    descricao:
      "Hidratação, reconstrução e botox capilar para devolver força e maciez aos fios.",
  },
] as const;

export const transformacoes = [
  {
    titulo: "Iluminado natural",
    servico: "Coloração + corte",
    antes: antes1,
    depois: depois1,
  },
  {
    titulo: "Fios alinhados",
    servico: "Tratamento + escova",
    antes: antes2,
    depois: depois2,
  },
  {
    titulo: "Barba desenhada",
    servico: "Corte masculino + barba",
    antes: antes3,
    depois: depois3,
  },
];

export const equipe = [
  {
    nome: "Ana Paula",
    especialidade: "Coloração & Loiros",
    descricao:
      "Especialista em loiros e coloração há mais de 10 anos, apaixonada por tons naturais.",
    foto: equipe1,
  },
  {
    nome: "Juliana",
    especialidade: "Cortes Femininos",
    descricao:
      "Cria cortes modernos e fáceis de manter, sempre respeitando o formato do rosto.",
    foto: equipe2,
  },
  {
    nome: "Carlos",
    especialidade: "Barbearia",
    descricao:
      "Barbeiro dedicado a cortes masculinos precisos e barba bem desenhada.",
    foto: equipe3,
  },
  {
    nome: "Marina",
    especialidade: "Manicure & Estética",
    descricao:
      "Cuida das unhas com delicadeza e atenção total à higiene e ao acabamento.",
    foto: equipe4,
  },
];

export const avaliacoes = [
  {
    nome: "Camila Rodrigues",
    texto:
      "Fiz coloração com a Ana Paula e amei o resultado. Atendimento super atencioso e o ambiente é muito aconchegante.",
    nota: 5,
  },
  {
    nome: "Fernanda Lima",
    texto:
      "Melhor escova do centro! Saio sempre me sentindo outra pessoa. Preço justo e profissionais muito educadas.",
    nota: 5,
  },
  {
    nome: "Roberto Alves",
    texto:
      "Corte e barba com o Carlos ficaram perfeitos. Lugar simples, limpo e com um capricho que faz diferença.",
    nota: 5,
  },
  {
    nome: "Patrícia Souza",
    texto:
      "Faço manicure com a Marina há um ano. Higiene impecável e esmaltação que dura semanas.",
    nota: 5,
  },
  {
    nome: "Larissa Menezes",
    texto:
      "Cheguei sem hora marcada e fui muito bem recebida. A Juliana entendeu exatamente o corte que eu queria.",
    nota: 5,
  },
  {
    nome: "Bianca Ferreira",
    texto:
      "Tratamento de reconstrução salvou meu cabelo. Explicaram tudo com calma antes de começar.",
    nota: 5,
  },
];

export const diferenciais = [
  {
    icone: "HeartHandshake",
    titulo: "Atendimento personalizado",
    texto: "Cada cliente é ouvido antes de qualquer tesoura entrar em ação.",
  },
  {
    icone: "BadgeCheck",
    titulo: "Produtos de qualidade",
    texto: "Trabalhamos com marcas profissionais e itens descartáveis.",
  },
  {
    icone: "Armchair",
    titulo: "Ambiente confortável",
    texto: "Um espaço pequeno, tranquilo e pensado para você relaxar.",
  },
  {
    icone: "Award",
    titulo: "Profissionais experientes",
    texto: "Equipe com anos de estrada e formação sempre atualizada.",
  },
  {
    icone: "MapPin",
    titulo: "Excelente localização",
    texto: "A poucos passos do metrô, no coração do centro de São Paulo.",
  },
];
