/**
 * Conteúdo das páginas de SEO (uma rota por intenção de busca).
 * Regras: título ≤ 60 caracteres, descrição ≤ 160, texto útil de verdade
 * (sem repetição forçada de palavra-chave), FAQ que responde dúvidas reais.
 */

export interface SeoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoPage {
  slug: string;
  /** Palavra-chave principal (deve aparecer no título e no H1). */
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: SeoSection[];
  faq: SeoFaq[];
  /** Texto do botão principal (padrão: "Criar amigo secreto grátis"). */
  cta?: string;
  /**
   * Página continua no ar para quem chega por link, mas fica fora do Google
   * (noindex,follow) e do sitemap, porque repete o assunto de outra página.
   */
  noindex?: boolean;
  /** Esconde o bloco "Como funciona" comum quando a página já explica o passo a passo. */
  hideSteps?: boolean;
}

/** Passo a passo comum, exibido em todas as páginas. */
export const HOW_IT_WORKS = [
  { title: "Crie o grupo", text: "Dê um nome, escolha a data e o valor do presente. Leva menos de um minuto." },
  { title: "Convide pelo WhatsApp", text: "Envie o link. Cada pessoa entra com o próprio nome e confirma a participação." },
  { title: "Faça o sorteio", text: "Com todos confirmados, o organizador sorteia com um toque." },
  { title: "Cada um vê só o seu", text: "Cada participante descobre apenas quem tirou — nem o organizador vê os pares." },
];

export const SEO_PAGES: readonly SeoPage[] = [
  {
    slug: "amigo-secreto-online",
    keyword: "amigo secreto online",
    title: "Amigo Secreto Online: sorteio pelo celular em 1 minuto",
    description:
      "Faça seu amigo secreto online sem papelzinho: crie o grupo, convide pelo WhatsApp e cada pessoa vê só quem tirou. Grátis e sem cadastro.",
    h1: "Amigo secreto online, direto do celular",
    intro:
      "Chega de juntar todo mundo para tirar papelzinho — ou de refazer o sorteio porque alguém tirou o próprio nome. Com o amigo secreto online, o grupo inteiro participa pelo celular, cada um no seu tempo, e o resultado chega só para quem precisa saber.",
    sections: [
      {
        heading: "Ideal para família, firma e amigos à distância",
        paragraphs: [
          "Parentes em outras cidades, colegas em home office ou a turma que nunca consegue se reunir antes da festa: todo mundo entra pelo mesmo link e confirma a participação quando puder.",
          "O organizador acompanha quem já confirmou e quem ainda falta, e pode mandar um lembrete pronto pelo WhatsApp.",
        ],
      },
      {
        heading: "O segredo continua secreto",
        paragraphs: [
          "Cada participante recebe um link privado e só consegue ver o próprio resultado. Nem o organizador tem acesso à lista de pares, e os resultados ficam guardados de forma cifrada.",
        ],
      },
      {
        heading: "Mais que um sorteio",
        paragraphs: ["Depois do sorteio, o grupo ainda conta com recursos que facilitam a troca de presentes:"],
        bullets: [
          "Lista de desejos opcional, visível só para quem te tirou",
          "Mensagens anônimas para o seu amigo secreto",
          "Mural do grupo para combinar a festa",
          "Regras como \"casais não se tiram\"",
        ],
      },
      {
        heading: "Grátis e sem cadastro",
        paragraphs: [
          "Criar o grupo, convidar, sortear e usar a lista de desejos e as mensagens não custa nada, e ninguém precisa informar cartão de crédito. Em vez de e-mail e senha, cada participante recebe um link privado e cria um PIN de 6 números para recuperar o acesso caso troque de celular.",
          "O site se mantém com um anúncio discreto em algumas páginas públicas. Páginas com informações privadas, como o seu resultado e o seu link, nunca têm anúncios.",
        ],
      },
    ],
    faq: [
      { q: "É grátis mesmo?", a: "Sim. Criar o grupo, convidar, sortear e usar a lista de desejos e as mensagens não custa nada, e não pedimos dados de pagamento." },
      { q: "Preciso baixar algum aplicativo?", a: "Não. Tudo funciona no navegador do celular ou do computador — basta abrir o link." },
      { q: "Os participantes precisam de e-mail ou cadastro?", a: "Não. Cada pessoa entra só com o nome e cria um PIN para recuperar o acesso se perder o link." },
      { q: "Dá para fazer com pessoas em cidades diferentes?", a: "Sim. Cada um entra pelo link quando puder; não é preciso estar junto na hora do sorteio." },
      { q: "Quantas pessoas podem participar?", a: "A partir de 3 pessoas. A versão grátis aceita até 50 participantes por grupo." },
    ],
  },
  {
    slug: "sorteio-amigo-secreto",
    noindex: true,
    keyword: "sorteio de amigo secreto",
    title: "Sorteio de Amigo Secreto justo e sem repetição",
    description:
      "Sorteio de amigo secreto que nunca deixa alguém tirar a si mesmo, respeita exclusões (como casais) e só conclui se houver combinação válida.",
    h1: "Sorteio de amigo secreto sem erro",
    intro:
      "Um bom sorteio de amigo secreto precisa de três garantias: ninguém tira a si mesmo, todo mundo tira exatamente uma pessoa e todo mundo é tirado exatamente uma vez. Aqui, essas regras são verificadas antes de qualquer resultado ser salvo.",
    sections: [
      {
        heading: "Como o sorteio funciona",
        paragraphs: [
          "Participam do sorteio apenas as pessoas que confirmaram presença. O sistema gera uma combinação aleatória e confere, par a par, se todas as regras foram respeitadas. Só então o resultado é gravado — de uma vez só, nunca pela metade.",
        ],
      },
      {
        heading: "Exclusões: quem não pode tirar quem",
        paragraphs: [
          "Quer evitar que marido e mulher se tirem, ou que irmãos troquem presentes entre si? O organizador cadastra exclusões antes do sorteio, em um sentido ou nos dois.",
          "Se as regras deixarem o sorteio impossível, você é avisado na hora, com a mensagem clara de que é preciso remover ou alterar alguma exclusão — e nada é sorteado.",
        ],
      },
      {
        heading: "Os próprios participantes se cadastram",
        paragraphs: [
          "Em vez de digitar nome por nome, o organizador envia um link e cada pessoa entra com o próprio nome. O sorteio evita nomes repetidos, mesmo com diferença de acentos ou letras maiúsculas, e o painel mostra quem ainda falta confirmar.",
        ],
      },
      {
        heading: "Precisa refazer?",
        paragraphs: [
          "O organizador pode refazer o sorteio depois de uma confirmação. O resultado anterior é invalidado por completo, e cada pessoa passa a ver apenas o novo resultado.",
        ],
      },
    ],
    faq: [
      { q: "Alguém pode tirar o próprio nome?", a: "Não. O sorteio é validado antes de ser salvo e nunca permite que alguém tire a si mesmo." },
      { q: "O sorteio é realmente aleatório?", a: "Sim. Usamos um gerador de números aleatórios criptograficamente seguro, e todas as combinações válidas têm a mesma chance." },
      { q: "E se ninguém puder tirar determinada pessoa por causa das exclusões?", a: "O sistema detecta que não existe combinação possível e avisa antes de sortear, sem gravar nada." },
      { q: "O organizador consegue ver quem tirou quem?", a: "Não. O organizador vê apenas quantas pessoas já viram o resultado, nunca os pares." },
      { q: "Quem não confirmou entra no sorteio?", a: "Não. Apenas participantes confirmados são sorteados; o painel avisa quem ainda falta." },
    ],
  },
  {
    slug: "amigo-secreto-com-lista-de-desejos",
    noindex: true,
    keyword: "amigo secreto com lista de desejos",
    title: "Amigo Secreto com Lista de Desejos: acerte no presente",
    description:
      "Amigo secreto com lista de desejos: cada pessoa indica produtos, preços e links, e só quem a tirou vê. Mais fácil acertar no presente.",
    h1: "Amigo secreto com lista de desejos",
    intro:
      "Nada de presente que vai direto para o fundo do armário. Com a lista de desejos, cada participante indica o que gostaria de ganhar — e só quem o tirou consegue ver.",
    sections: [
      {
        heading: "O que dá para colocar na lista",
        paragraphs: ["Cada desejo pode ter:"],
        bullets: [
          "Nome do produto",
          "Preço aproximado",
          "Link da loja",
          "Detalhes como tamanho, cor ou modelo",
          "Uma observação (\"qualquer cor, menos rosa\")",
        ],
      },
      {
        heading: "Privada até o sorteio",
        paragraphs: [
          "Antes do sorteio, só você vê a sua lista. Depois, apenas a pessoa que te tirou tem acesso — o restante do grupo não vê seus desejos.",
          "A lista é opcional: quem preferir surpresa pode deixar em branco.",
        ],
      },
      {
        heading: "Ficou em dúvida? Pergunte em segredo",
        paragraphs: [
          "Se a lista estiver vazia, você pode mandar uma mensagem anônima para o seu amigo secreto — ele responde sem saber quem perguntou.",
        ],
      },
    ],
    faq: [
      { q: "Todo mundo vê a minha lista de desejos?", a: "Não. Só a pessoa que te tirou, e apenas depois do sorteio." },
      { q: "A lista é obrigatória?", a: "Não. É opcional; quem não quiser pode deixar em branco." },
      { q: "Posso mudar a lista depois do sorteio?", a: "Sim. Você pode adicionar ou remover desejos a qualquer momento." },
      { q: "Posso colocar links de lojas?", a: "Sim. Os links aparecem com o nome do site, para quem te tirou saber para onde está indo." },
    ],
  },
  {
    slug: "amigo-oculto-online",
    noindex: true,
    keyword: "amigo oculto online",
    title: "Amigo Oculto Online Grátis: sorteio no celular em 1 minuto",
    description:
      "Sorteie o amigo oculto online e grátis em 1 minuto: convite no WhatsApp, ninguém tira o próprio nome e nem o organizador vê os pares. Sem papelzinho.",
    h1: "Amigo oculto online, grátis e pelo celular",
    intro:
      "Amigo oculto, amigo secreto: o nome muda de região para região, a brincadeira é a mesma. Aqui o grupo é criado com o nome de amigo oculto, e o sorteio acontece pelo celular, sem precisar juntar todo mundo.",
    cta: "Criar amigo oculto grátis",
    sections: [
      {
        heading: "Do jeito que a sua família chama",
        paragraphs: [
          "Em Minas Gerais, no Rio de Janeiro e em muitos outros lugares, a troca de presentes de fim de ano é o amigo oculto. Ao criar o grupo, escolha \"Amigo oculto\": o convite, os avisos e a área de cada participante passam a usar esse nome.",
        ],
      },
      {
        heading: "Sorteio justo e secreto",
        paragraphs: [
          "Ninguém tira o próprio nome, cada pessoa tira exatamente uma outra e todo mundo é tirado uma vez. Nem o organizador consegue ver quem tirou quem.",
          "Se houver casais ou irmãos que não devem se tirar, é só marcar a regra antes do sorteio.",
        ],
      },
      {
        heading: "Tudo o que o amigo oculto precisa",
        paragraphs: ["Depois do sorteio, o grupo continua ajudando até o dia da troca:"],
        bullets: [
          "Lista de desejos opcional, vista só por quem te tirou",
          "Mensagens anônimas para tirar dúvidas sobre o presente",
          "Mural do grupo para combinar data, local e valor",
        ],
      },
    ],
    faq: [
      { q: "Amigo oculto e amigo secreto são a mesma coisa?", a: "Sim. São nomes diferentes para a mesma brincadeira de sortear quem presenteia quem. Aqui você escolhe o nome que o seu grupo usa." },
      { q: "Precisa instalar aplicativo?", a: "Não. Funciona no navegador do celular ou do computador, pelo link que você manda no WhatsApp." },
      { q: "É grátis mesmo?", a: "Sim. Criar o grupo, convidar, sortear e usar a lista de desejos não custa nada." },
      { q: "Dá para refazer o sorteio de amigo oculto?", a: "Sim. O organizador pode refazer, mas o site avisa antes, porque algumas pessoas podem já ter visto o resultado." },
    ],
  },
  {
    slug: "amigo-da-onca",
    keyword: "amigo da onça",
    hideSteps: true,
    title: "Amigo da Onça: regras, ideias e sorteio online grátis",
    description:
      "Regras do amigo da onça, ideias de presente engraçado por faixa de preço, como fazer a troca com roubo de presentes e sorteio online grátis pelo WhatsApp.",
    h1: "Amigo da onça: regras, ideias de presente e sorteio online",
    intro:
      "O amigo da onça é a versão sem vergonha do amigo secreto: o presente vale pela risada que provoca, não pelo preço. Pode ser uma pegadinha, um item inútil embrulhado com todo o carinho ou aquele presente que só faz sentido para quem conhece a pessoa. Abaixo estão as regras mais comuns, ideias que costumam funcionar e o que evitar para ninguém sair chateado da festa.",
    cta: "Criar amigo da onça grátis",
    sections: [
      {
        heading: "O que é o amigo da onça (e por que ele é diferente)",
        paragraphs: [
          "No amigo secreto tradicional, a meta é acertar o presente. No amigo da onça, a meta é surpreender. A expressão vem do personagem dos quadrinhos de Péricles, famoso por colocar os amigos em situações constrangedoras, e a brincadeira herdou esse espírito: um amigo que te dá um presente, mas do jeito dele.",
          "Isso muda o clima da troca. Ninguém fica preocupado em gastar muito ou errar o tamanho da roupa, e o momento de abrir os presentes vira o ponto alto da festa. Por isso o amigo da onça funciona tão bem em firma, grupo de amigos e família grande, onde nem todo mundo se conhece a fundo.",
        ],
      },
      {
        heading: "Regras mais usadas",
        paragraphs: [
          "Não existe regra oficial, e cada grupo adapta do seu jeito. Estas são as combinações que mais aparecem e que vale deixar claras no convite:",
        ],
        bullets: [
          "Valor baixo, geralmente até R$ 20 ou R$ 30: a graça está na criatividade, não no preço",
          "Vale presente usado, achado em casa ou feito à mão, se o grupo topar",
          "Nada que ofenda: piada com aparência, peso, religião ou dinheiro fica de fora",
          "Nada perecível escondido no embrulho (ninguém quer achar um ovo na caixa uma semana depois)",
          "Embrulho caprichado conta pontos: quanto mais bonito, maior a decepção na hora de abrir",
        ],
      },
      {
        heading: "Ideias de presente que costumam render risada",
        paragraphs: [
          "O melhor presente de amigo da onça tem uma pequena história por trás. Algumas ideias que funcionam em quase todo grupo:",
        ],
        bullets: [
          "Até R$ 10: um rolo de papel higiênico com laço, um pente para quem é careca, um calendário do ano que passou",
          "Até R$ 20: uma caneca com uma frase que a pessoa vive repetindo, um kit “sobrevivência na segunda-feira” com café solúvel e chiclete",
          "Até R$ 30: um troféu de plástico de “melhor atrasado do ano”, um quebra-cabeça de mil peças todo branco, um livro de autoajuda com título absurdo",
          "Feito em casa: um vale “um dia sem ouvir minhas piadas”, um porta-retrato com a pior foto da pessoa no grupo",
        ],
      },
      {
        heading: "Variação com roubo de presentes",
        paragraphs: [
          "Muitos grupos misturam o amigo da onça com a troca de presentes com roubo, também chamada de amigo ladrão. Funciona assim: cada pessoa leva um presente embrulhado e sem nome, todos tiram um número, e na sua vez você escolhe entre abrir um presente novo ou roubar um que já foi aberto. Quem teve o presente roubado escolhe de novo.",
          "Para não virar uma noite inteira de roubos, combine que cada presente só pode ser roubado duas ou três vezes. Essa versão dispensa sorteio de nomes, mas o sorteio online ainda ajuda a definir a ordem e a deixar todo mundo confirmado antes da festa.",
        ],
      },
      {
        heading: "Como fazer o sorteio sem juntar o grupo",
        paragraphs: [
          "Ao criar o grupo aqui no site, escolha “Amigo da onça”. O convite, os avisos e a página de cada participante passam a usar esse nome. Mande o link no WhatsApp, cada pessoa entra com o próprio nome e, quando todo mundo confirmar, o organizador faz o sorteio com um toque.",
          "Cada participante descobre só quem tirou. Nem o organizador vê os pares, então ele também pode brincar sem saber de nada. Use o recado do grupo para fixar as regras combinadas, como o valor máximo e o que não vale, e o mural para combinar data e local.",
        ],
      },
      {
        heading: "O que evitar",
        paragraphs: [
          "A linha entre engraçado e chato é fina. Se o grupo mistura gente que não tem tanta intimidade, como colegas novos na firma, prefira presentes engraçados pelo absurdo, e não pela piada com a pessoa. Uma boa pergunta antes de comprar: a pessoa vai rir junto ou vai ficar sem graça na frente de todo mundo?",
          "Também vale combinar se o presente pode ser só piada ou se precisa ter alguma utilidade escondida. Em alguns grupos, a regra é que o presente engraçado venha acompanhado de um pequeno mimo de verdade, como um chocolate, para ninguém voltar para casa de mãos vazias.",
        ],
      },
    ],
    faq: [
      { q: "Qual a diferença entre amigo da onça e amigo secreto?", a: "O sorteio é igual. A diferença está no presente: no amigo da onça, a graça é presentear com algo engraçado, inútil ou inesperado, quase sempre de valor baixo." },
      { q: "Qual o valor ideal do amigo da onça?", a: "A maioria dos grupos combina até R$ 20 ou R$ 30. Valor baixo deixa todo mundo mais criativo e evita que alguém se sinta prejudicado." },
      { q: "Pode dar presente usado?", a: "Pode, se o grupo combinar antes. Muitos grupos incentivam: aquele objeto esquecido no armário pode ser o presente perfeito." },
      { q: "Dá para definir um valor máximo no site?", a: "Sim. Ao criar o grupo, informe o valor do presente. Ele aparece no convite e na página do grupo." },
      { q: "Posso mandar dicas para quem eu tirei?", a: "Sim, pelas mensagens anônimas: a pessoa recebe a mensagem sem saber quem mandou." },
    ],
  },
  {
    slug: "amigo-chocolate",
    keyword: "amigo chocolate",
    hideSteps: true,
    title: "Amigo Chocolate: regras, ideias por valor e sorteio grátis",
    description:
      "Como funciona o amigo chocolate, regras para Páscoa, escola e firma, ideias de chocolate por faixa de preço e sorteio online grátis pelo WhatsApp.",
    h1: "Amigo chocolate: como funciona, ideias e sorteio pelo celular",
    intro:
      "O amigo chocolate é o amigo secreto em que o presente é sempre chocolate. Ele aparece muito na Páscoa, mas também é comum na escola, na firma e em grupos de amigos que querem uma troca barata e sem dor de cabeça. Aqui você encontra as regras mais usadas, ideias por faixa de preço e dicas para quem tem alergia ou restrição.",
    cta: "Criar amigo chocolate grátis",
    sections: [
      {
        heading: "Como funciona o amigo chocolate",
        paragraphs: [
          "A lógica é a mesma do amigo secreto: cada pessoa tira um nome e presenteia quem tirou. A diferença é que o presente é chocolate, o que simplifica a escolha e deixa o valor mais fácil de controlar.",
          "Uma versão muito comum, principalmente na escola e no trabalho, é o amigo chocolate de várias semanas. Durante alguns dias antes da revelação, cada um deixa pequenos chocolates para o seu amigo secreto, sem se identificar, junto com bilhetes com pistas. No dia da troca acontece a revelação, com um chocolate maior ou uma caixa de bombons.",
        ],
      },
      {
        heading: "Regras para combinar antes",
        paragraphs: ["Combinar estes pontos no convite evita a maior parte das confusões:"],
        bullets: [
          "Valor de cada entrega e valor do presente final, se houver revelação",
          "Quantos dias de mimos antes da revelação (três a cinco dias costuma ser suficiente)",
          "Onde deixar os chocolates sem ser visto: mesa, armário, gaveta da sala",
          "Se vale chocolate caseiro, como brigadeiro ou trufa feita em casa",
          "Como avisar alergias e restrições (lactose, glúten, amendoim, diabetes)",
        ],
      },
      {
        heading: "Ideias de chocolate por faixa de preço",
        paragraphs: [
          "Os preços mudam bastante de loja para loja e de época para época, principalmente perto da Páscoa, mas estas faixas ajudam a ter uma ideia:",
        ],
        bullets: [
          "Até R$ 10: bombons avulsos, uma barra pequena, chocolate de padaria com um bilhete escrito à mão",
          "Até R$ 20: barra de chocolate de 90 a 100 g de uma marca conhecida, pacote de bombons sortidos",
          "Até R$ 30: caixa de bombons, barra de chocolate amargo ou com recheio diferente, kit com várias barrinhas",
          "Até R$ 50: caixa de trufas, ovo de Páscoa pequeno, chocolate de marca artesanal ou kit de chocolate quente",
        ],
      },
      {
        heading: "Para a escola",
        paragraphs: [
          "Com crianças, o amigo chocolate funciona melhor com um valor baixo e igual para todos, para nenhuma criança se sentir diferente. Vale combinar com os pais e com a professora antes e lembrar que algumas crianças têm alergia ou restrição alimentar.",
          "Para turmas pequenas, o sorteio pelo celular pode ser feito pelo responsável de cada criança: o organizador manda o link no grupo dos pais, cada família entra com o nome da criança e todo mundo recebe o resultado em segredo.",
        ],
      },
      {
        heading: "Para a firma",
        paragraphs: [
          "No trabalho, o amigo chocolate é uma alternativa leve ao amigo secreto de fim de ano: o valor é menor, ninguém precisa pensar em roupa ou tamanho, e dá para fazer em equipes com pessoas que mal se conhecem. Funciona bem também para equipes remotas, desde que se combine como cada um vai receber o chocolate.",
        ],
      },
      {
        heading: "Alergias, restrições e a lista de desejos",
        paragraphs: [
          "Depois do sorteio aqui no site, cada participante pode montar uma lista de desejos com os chocolates preferidos e avisar o que não pode comer. Só quem tirou a pessoa vê essa lista, então dá para ser sincero sem expor nada para o grupo inteiro.",
          "Se a lista estiver vazia e você ficar em dúvida, mande uma pergunta pelas mensagens anônimas. A pessoa responde sem saber quem perguntou, e a surpresa continua.",
        ],
      },
    ],
    faq: [
      { q: "Como funciona o amigo chocolate?", a: "É um amigo secreto em que o presente é chocolate. O sorteio define quem presenteia quem, e cada pessoa vê só o próprio resultado." },
      { q: "Qual o valor ideal para o amigo chocolate?", a: "Para uma troca única, de R$ 20 a R$ 50 costuma funcionar. Na versão de vários dias, um valor baixo por entrega, como R$ 5 a R$ 10, mais um presente final." },
      { q: "Dá para fazer com a turma da escola?", a: "Sim. É só mandar o link do grupo para a turma ou para os pais. Não precisa de e-mail nem de aplicativo." },
      { q: "Quem tem alergia pode avisar?", a: "Sim. Use a lista de desejos para dizer o que pode e o que não pode, e só quem te tirou vê." },
    ],
  },
];

/** Páginas que entram no Google e no sitemap. */
export const INDEXED_SEO_PAGES: readonly SeoPage[] = SEO_PAGES.filter((p) => !p.noindex);

export function getSeoPage(slug: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

/** JSON-LD seguro para embutir em <script> (escapa "<" contra quebra de tag). */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
