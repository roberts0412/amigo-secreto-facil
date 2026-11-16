import type { Guide } from "./guides";

/**
 * Guias novos (nov/2026). Ficam num arquivo à parte só para facilitar a leitura;
 * entram no começo da lista de GUIDES (os mais recentes aparecem primeiro).
 * Mesmas regras: título ≤ 60 caracteres, descrição 110–160, slug em kebab-case.
 */
export const EXTRA_GUIDES: readonly Guide[] = [
  {
    slug: "amigo-secreto-pelo-whatsapp",
    title: "Como fazer amigo secreto pelo WhatsApp, passo a passo",
    description:
      "Como organizar o amigo secreto pelo grupo do WhatsApp: convite por link, sorteio sem papelzinho, lista de desejos e lembretes sem bagunçar a conversa.",
    h1: "Como fazer amigo secreto pelo WhatsApp sem bagunça no grupo",
    summary: "Convite por link, sorteio sem papelzinho e lembretes sem encher o grupo de mensagens.",
    intro:
      "Hoje quase todo amigo secreto nasce num grupo de WhatsApp: da família, da firma, da turma da faculdade. O problema é que o grupo vira uma confusão de mensagens, ninguém acha a data combinada e o sorteio acaba sendo feito no papelzinho, com alguém tirando o próprio nome. Dá para usar o WhatsApp só para o que ele faz bem, que é avisar todo mundo, e deixar o resto organizado num lugar só.",
    updated: "2026-11-15",
    emoji: "💬",
    sections: [
      {
        heading: "1. Use o grupo para combinar, não para sortear",
        paragraphs: [
          "Antes de qualquer sorteio, mande uma mensagem curta no grupo com três perguntas: quem participa, qual data funciona e qual valor cabe no bolso de todo mundo. Peça para cada pessoa responder com uma reação ou um número, assim a conversa não se estica por dias.",
          "Feche essas três informações e fixe a mensagem no topo do grupo. Quem entrar depois ou chegar atrasado na conversa encontra tudo ali, sem precisar rolar centenas de mensagens.",
        ],
      },
      {
        heading: "2. Mande um link de convite em vez de pedir nomes",
        paragraphs: [
          "Em vez de o organizador anotar o nome de cada um, crie o grupo do amigo secreto num site de sorteio e mande o link de convite no WhatsApp. Cada pessoa entra pelo próprio celular, digita o nome e, se quiser, já monta a lista de desejos.",
          "Isso evita os erros mais comuns: nome escrito errado, alguém esquecido na lista e a pergunta eterna de quem já confirmou. O organizador acompanha quem entrou sem precisar cobrar no grupo.",
        ],
      },
      {
        heading: "3. Sorteie só depois que todo mundo entrar",
        paragraphs: [
          "Combine um prazo para todos entrarem pelo link, por exemplo até domingo à noite. Passado o prazo, o organizador faz o sorteio com um toque. Cada participante vê apenas quem tirou, no próprio celular, e ninguém tira o próprio nome.",
          "Um detalhe importante: num sorteio online bem feito nem o organizador vê os pares. Assim ele também participa de verdade, sem saber o segredo de todo mundo.",
        ],
      },
      {
        heading: "4. Lista de desejos e perguntas sem estragar o segredo",
        paragraphs: [
          "A dúvida sobre o que dar não precisa virar mensagem no grupo, que entregaria quem tirou quem. Com a lista de desejos, cada um deixa duas ou três ideias de presente, com tamanho e cor quando fizer sentido. Quem tirou a pessoa consulta a lista discretamente.",
          "Se ainda faltar informação, use mensagens anônimas: quem tirou pergunta, a pessoa responde e ninguém descobre quem perguntou.",
        ],
        bullets: [
          "Peça listas curtas, com duas ou três opções",
          "Inclua tamanho de roupa e numeração de calçado quando for o caso",
          "Combine que ninguém comenta no grupo quem tirou quem",
        ],
      },
      {
        heading: "5. Lembretes que não enchem o grupo",
        paragraphs: [
          "Uma semana antes da troca, mande uma única mensagem no grupo lembrando a data, o local, o horário e o valor combinado. No dia anterior, outro lembrete rápido basta. Mais do que isso faz as pessoas silenciarem o grupo e perderem o aviso que importa.",
          "Se o grupo for grande, como o da firma, vale combinar também o que acontece se alguém faltar no dia: a pessoa entrega o presente depois ou deixa com um colega.",
        ],
      },
    ],
  },
  {
    slug: "amigo-secreto-oculto-chocolate-e-da-onca",
    title: "Amigo secreto, oculto, chocolate e da onça: diferenças",
    description:
      "Amigo secreto, amigo oculto, amigo chocolate e amigo da onça são a mesma brincadeira? Veja as diferenças, as regras de cada uma e qual combina com seu grupo.",
    h1: "Amigo secreto, amigo oculto, amigo chocolate e amigo da onça: qual a diferença?",
    summary: "Os nomes mudam de região para região, e algumas versões têm regras próprias.",
    intro:
      "Quem cresceu em Minas Gerais ou no Rio chama de amigo oculto; em São Paulo e em boa parte do Brasil, é amigo secreto. Além do nome, existem variações com regras próprias, como o amigo chocolate e o amigo da onça. Saber a diferença ajuda o grupo a escolher a versão que combina mais com o momento e com o bolso de todo mundo.",
    updated: "2026-11-15",
    emoji: "🎭",
    sections: [
      {
        heading: "Amigo secreto e amigo oculto: a mesma brincadeira",
        paragraphs: [
          "Amigo secreto e amigo oculto são dois nomes para a mesma coisa: cada pessoa sorteia outra do grupo, compra um presente para ela e só revela quem tirou no dia da troca. A diferença é regional. Amigo oculto é mais comum em Minas Gerais, no Rio de Janeiro e no Espírito Santo; amigo secreto domina no restante do país.",
          "As regras básicas são as mesmas nos dois casos: valor combinado, sorteio em que ninguém tira o próprio nome e uma revelação com dicas sobre a pessoa sorteada.",
        ],
      },
      {
        heading: "Amigo chocolate: semanas de mimos antes da troca",
        paragraphs: [
          "No amigo chocolate, a brincadeira dura mais tempo. Depois do sorteio, cada pessoa deixa chocolates para quem tirou ao longo de algumas semanas, sem se identificar, e a revelação acontece no fim. É muito comum na firma e na escola, porque cabe em qualquer orçamento.",
          "Uma variação popular aumenta o tamanho do chocolate a cada semana: começa com um bombom e termina com uma caixa ou um ovo. Vale combinar antes o valor total para ninguém gastar mais do que o grupo espera.",
        ],
      },
      {
        heading: "Amigo da onça: o presente engraçado de propósito",
        paragraphs: [
          "No amigo da onça, o objetivo é dar um presente inusitado, engraçado ou propositalmente ruim, sempre dentro do valor combinado. A graça está na reação de quem abre o pacote. Funciona muito bem entre amigos próximos e em turmas que já têm intimidade.",
          "O cuidado é não passar do ponto: nada que constranja, ofenda ou exponha alguém. Uma boa regra é imaginar se a pessoa vai rir junto ou ficar sem graça na frente de todo mundo.",
        ],
      },
      {
        heading: "Como escolher a versão certa para o seu grupo",
        paragraphs: [
          "A escolha depende de quem participa e de quanto o grupo quer gastar. Use a lista abaixo como ponto de partida e decida junto com o grupo antes do sorteio:",
        ],
        bullets: [
          "Família com várias idades: amigo secreto tradicional, com lista de desejos",
          "Firma ou escola, com orçamento curto: amigo chocolate",
          "Turma de amigos próximos que gosta de zoeira: amigo da onça",
          "Grupo espalhado por cidades diferentes: amigo secreto online, com presente enviado pelo correio",
        ],
      },
      {
        heading: "O que vale para todas as versões",
        paragraphs: [
          "Qualquer que seja o nome, três combinados evitam a maior parte dos problemas: definir a data com antecedência, combinar um valor que caiba para todos e fazer um sorteio em que ninguém tire a si mesmo nem descubra os pares dos outros. Com isso resolvido, sobra só a parte divertida.",
        ],
      },
    ],
  },
  {
    slug: "temas-para-amigo-secreto",
    title: "12 temas para amigo secreto diferente este ano",
    description:
      "Ideias de temas para deixar o amigo secreto diferente: presente feito à mão, livro, R$ 10, cheiroso, comida típica e mais, com regras simples para cada um.",
    h1: "12 temas para fazer um amigo secreto diferente este ano",
    summary: "Ideias de temas com regras simples para fugir do presente de sempre.",
    intro:
      "Quando o grupo faz amigo secreto todo ano, os presentes começam a se repetir: caneca, meia, chocolate. Um tema resolve isso de um jeito simples, porque dá uma direção para todo mundo e deixa a revelação mais divertida. Abaixo estão doze ideias testadas, com a regra principal de cada uma.",
    updated: "2026-11-15",
    emoji: "🎨",
    sections: [
      {
        heading: "Temas que economizam",
        paragraphs: [
          "Bons para grupos grandes, firma ou fim de ano apertado. A criatividade conta mais do que o valor:",
        ],
        bullets: [
          "Até R$ 10: vale tudo, desde que caiba no valor; os presentes mais criativos sempre roubam a cena",
          "Feito à mão: comida caseira, tricô, desenho, playlist ou qualquer coisa produzida por você",
          "Presente usado: um objeto seu, em bom estado, que você acha que a outra pessoa vai gostar",
          "Coisas da casa: utensílios úteis do dia a dia, como pano de prato bonito, pote ou tempero",
        ],
      },
      {
        heading: "Temas que ajudam a acertar o presente",
        paragraphs: [
          "Funcionam bem quando as pessoas não se conhecem tanto, como em equipes novas no trabalho:",
        ],
        bullets: [
          "Livro: cada um dá um livro de que gostou, com um bilhete explicando o motivo",
          "Cheiroso: perfume, vela, sabonete ou hidratante, dentro do valor combinado",
          "Comida da sua cidade: um doce, tempero ou bebida típica de onde você nasceu",
          "Planta: suculentas e mudas pequenas agradam e duram bem mais que o fim de ano",
        ],
      },
      {
        heading: "Temas para rir na revelação",
        paragraphs: [
          "Para turmas com intimidade, em que todo mundo gosta de brincadeira:",
        ],
        bullets: [
          "Amigo da onça: o presente mais inusitado possível, sem passar do ponto",
          "Presente com uma letra: algo que comece com a inicial do nome de quem você tirou",
          "Embrulho criativo: o presente é simples, mas o embrulho precisa ser memorável",
          "Mistério: o presente vem em várias caixas, uma dentro da outra",
        ],
      },
      {
        heading: "Como combinar o tema com o grupo",
        paragraphs: [
          "Proponha duas ou três opções de tema e deixe o grupo votar, em vez de escolher sozinho. Assim ninguém se sente obrigado a algo que não gosta. Depois de definido, repita o tema e o valor no convite e no lembrete da semana da troca.",
          "Se o grupo for misto, com crianças e adultos, prefira temas que todos consigam cumprir, como livro ou presente com uma letra.",
        ],
      },
      {
        heading: "A revelação também pode ter tema",
        paragraphs: [
          "Combine uma forma de revelar que converse com o tema escolhido. No tema livro, cada pessoa lê o bilhete antes de entregar o presente. No feito à mão, quem recebe tenta adivinhar quem fez. No amigo da onça, vale montar uma votação para o presente mais engraçado da noite. Pequenos detalhes assim transformam a troca no momento mais lembrado da festa.",
        ],
      },
    ],
  },
];
