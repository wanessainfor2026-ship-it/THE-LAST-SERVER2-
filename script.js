// THE LAST SERVER — jogo de perguntas, exploração e batalha final.
// O quiz mistura conhecimentos gerais e informática. JavaScript não é tema de pergunta.

const setores = [
  {
    nome: "CIDADE DOS SERVIDORES",
    descricao: "Recupere os componentes que mantêm os sistemas funcionando.",
    icone: "▣",
    imagem: "imagens/cidade-servidores.webp",
    perguntas: [
      { nivel: "CONHECIMENTOS GERAIS", pergunta: "Qual é a capital do Brasil?", opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], correta: 1, explicacao: "Brasília é a capital federal do Brasil desde 1960." },
      { nivel: "INFORMÁTICA // FÁCIL", pergunta: "Qual componente é conhecido como o cérebro do computador?", opcoes: ["Monitor", "Processador (CPU)", "Teclado", "Gabinete"], correta: 1, explicacao: "A CPU executa instruções e realiza operações fundamentais do computador." },
      { nivel: "INFORMÁTICA // INTERMEDIÁRIA", pergunta: "Qual é a principal função da memória RAM?", opcoes: ["Guardar arquivos permanentemente", "Exibir imagens", "Armazenar temporariamente dados em uso", "Fornecer energia"], correta: 2, explicacao: "A memória RAM guarda temporariamente dados e programas que estão sendo utilizados." },
      { nivel: "INFORMÁTICA // AVANÇADA", pergunta: "Um computador liga, mas não apresenta imagem. Qual componente pode estar relacionado ao processamento gráfico?", opcoes: ["Placa de vídeo", "Mouse", "SSD", "Fonte de papel"], correta: 0, explicacao: "A placa de vídeo processa informações gráficas e envia o sinal de imagem ao monitor." }
    ]
  },
  {
    nome: "BIBLIOTECA DIGITAL",
    descricao: "Explore os sistemas que organizam arquivos e programas.",
    icone: "▤",
    imagem: "imagens/biblioteca-digital.webp",
    perguntas: [
      { nivel: "CONHECIMENTOS GERAIS", pergunta: "Qual destes é um idioma oficial do Brasil?", opcoes: ["Espanhol", "Português", "Francês", "Inglês"], correta: 1, explicacao: "O português é o idioma oficial do Brasil." },
      { nivel: "INFORMÁTICA // FÁCIL", pergunta: "Qual é a principal função de um sistema operacional?", opcoes: ["Apenas acessar a internet", "Gerenciar o hardware e os programas", "Criar peças físicas", "Aumentar o monitor"], correta: 1, explicacao: "O sistema operacional gerencia os recursos do computador e permite executar programas." },
      { nivel: "INFORMÁTICA // INTERMEDIÁRIA", pergunta: "Qual destes é um sistema operacional de código aberto?", opcoes: ["Windows", "macOS", "Linux", "iOS"], correta: 2, explicacao: "O Linux é conhecido por ser um sistema operacional de código aberto, com várias distribuições." },
      { nivel: "INFORMÁTICA // AVANÇADA", pergunta: "O que caracteriza a multitarefa em um sistema operacional?", opcoes: ["Executar apenas um programa", "Gerenciar vários processos em execução", "Impedir o uso da RAM", "Desligar programas automaticamente"], correta: 1, explicacao: "A multitarefa permite ao sistema gerenciar vários processos, compartilhando o tempo de processamento." }
    ]
  },
  {
    nome: "ESTAÇÃO DE COMUNICAÇÃO",
    descricao: "Restabeleça os canais de comunicação da rede mundial.",
    icone: "⌘",
    imagem: "imagens/estacao-comunicacao.webp",
    perguntas: [
      { nivel: "CONHECIMENTOS GERAIS", pergunta: "Qual planeta é conhecido como Planeta Vermelho?", opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"], correta: 1, explicacao: "Marte é conhecido como Planeta Vermelho por causa da aparência de sua superfície rica em óxidos de ferro." },
      { nivel: "INFORMÁTICA // FÁCIL", pergunta: "O que é a internet?", opcoes: ["Uma rede mundial de dispositivos conectados", "Um editor de texto", "Uma peça do computador", "Um tipo de memória"], correta: 0, explicacao: "A internet conecta redes e dispositivos em escala mundial, permitindo a troca de informações." },
      { nivel: "INFORMÁTICA // INTERMEDIÁRIA", pergunta: "Qual equipamento encaminha pacotes de dados entre redes diferentes?", opcoes: ["Mouse", "Roteador", "Teclado", "Monitor"], correta: 1, explicacao: "O roteador encaminha pacotes de dados entre redes, escolhendo caminhos para que cheguem ao destino." },
      { nivel: "INFORMÁTICA // AVANÇADA", pergunta: "Qual é a função principal do DNS?", opcoes: ["Criptografar todos os arquivos", "Aumentar a velocidade da CPU", "Traduzir nomes de domínio em endereços IP", "Armazenar páginas no monitor"], correta: 2, explicacao: "O DNS ajuda a localizar servidores convertendo nomes de domínio em endereços IP." }
    ]
  },
  {
    nome: "CASTELO DO CÓDIGO",
    descricao: "Use lógica, criatividade e conhecimentos básicos de Python.",
    icone: "⌘",
    imagem: "imagens/castelo-codigo.webp",
    perguntas: [
      { nivel: "CONHECIMENTOS GERAIS", pergunta: "Quantos lados tem um hexágono?", opcoes: ["Cinco", "Seis", "Sete", "Oito"], correta: 1, explicacao: "Um hexágono é um polígono de seis lados." },
      { nivel: "LÓGICA // FÁCIL", pergunta: "Qual número completa a sequência: 2, 4, 6, 8, ...?", opcoes: ["9", "10", "12", "14"], correta: 1, explicacao: "A sequência aumenta de dois em dois. Depois do 8 vem o 10." },
      { nivel: "PYTHON // INTERMEDIÁRIA", pergunta: "Em Python, qual comando mostra uma mensagem na tela?", opcoes: ["input()", "print()", "display()", "show()"], correta: 1, explicacao: "O comando print() exibe textos e valores na tela." },
      { nivel: "LÓGICA E PYTHON // AVANÇADA", pergunta: "Em Python, se x = 5 e depois x = x + 3, qual será o valor de x?", opcoes: ["5", "3", "8", "15"], correta: 2, explicacao: "A variável começa valendo 5 e recebe a soma de seu valor atual com 3. O resultado é 8." }
    ]
  },
  {
    nome: "NÚCLEO DE SEGURANÇA",
    descricao: "Proteja os dados e prepare-se para enfrentar a inteligência artificial.",
    icone: "⬡",
    imagem: "imagens/nucleo-central.webp",
    perguntas: [
      { nivel: "CONHECIMENTOS GERAIS", pergunta: "Qual é o maior oceano da Terra?", opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"], correta: 2, explicacao: "O Oceano Pacífico é o maior oceano do planeta." },
      { nivel: "SEGURANÇA DIGITAL // FÁCIL", pergunta: "Qual atitude ajuda a proteger suas contas na internet?", opcoes: ["Usar a mesma senha em todos os sites", "Compartilhar a senha", "Criar senhas fortes e únicas", "Deixar a conta sem senha"], correta: 2, explicacao: "Senhas fortes e diferentes dificultam o acesso indevido às suas contas." },
      { nivel: "SEGURANÇA DIGITAL // INTERMEDIÁRIA", pergunta: "O que é phishing?", opcoes: ["Uma tentativa de enganar alguém para obter dados", "Um editor de imagens", "Um tipo de memória", "Uma conexão mais rápida"], correta: 0, explicacao: "Phishing é um golpe que tenta obter senhas e informações por meio de mensagens ou páginas falsas." },
      { nivel: "SEGURANÇA DIGITAL // AVANÇADA", pergunta: "Por que a autenticação em dois fatores aumenta a segurança?", opcoes: ["Elimina a senha", "Exige uma segunda etapa de verificação", "Acelera a internet", "Impede qualquer vírus"], correta: 1, explicacao: "A autenticação em dois fatores exige outra forma de confirmar a identidade, além da senha." }
    ]
  }
];

const perguntasChefe = [
  { pergunta: "Uma mensagem inesperada exige sua senha por meio de um link. Qual é a atitude mais segura?", opcoes: ["Clicar e informar a senha", "Encaminhar a senha", "Não clicar e verificar por um canal oficial", "Desativar a proteção do computador"], correta: 2, explicacao: "Nunca informe sua senha em links recebidos inesperadamente. Confirme a solicitação por um canal oficial." },
  { pergunta: "Qual recurso mantém temporariamente os dados usados pelos programas em execução?", opcoes: ["Memória RAM", "Monitor", "Teclado", "Impressora"], correta: 0, explicacao: "A memória RAM mantém temporariamente dados e instruções utilizados pelos programas." },
  { pergunta: "O que deve ser feito antes de abrir um arquivo anexado a um e-mail desconhecido?", opcoes: ["Abrir imediatamente", "Verificar remetente e segurança do arquivo", "Desativar o antivírus", "Enviar para todos os contatos"], correta: 1, explicacao: "Verificar o remetente e desconfiar de anexos inesperados ajuda a evitar arquivos maliciosos." },
  { pergunta: "Em uma rede, qual serviço relaciona nomes de domínio a endereços IP?", opcoes: ["HTML", "DNS", "CSS", "USB"], correta: 1, explicacao: "O DNS traduz nomes de domínio em endereços IP para localizar serviços na rede." },
  { pergunta: "Qual prática é mais indicada para evitar a perda definitiva de arquivos importantes?", opcoes: ["Manter uma cópia de segurança", "Usar uma única cópia no computador", "Compartilhar a senha", "Desligar as atualizações"], correta: 0, explicacao: "Backups, ou cópias de segurança, permitem recuperar dados em caso de falha ou perda." }
];

const cenarios = [
  { titulo: "CIDADE DOS SERVIDORES", texto: "Os servidores centrais foram atingidos. Explore o setor de hardware e recupere o primeiro núcleo.", imagem: setores[0].imagem, objetivos: ["Investigar os componentes do computador", "Resolver quatro desafios em ordem crescente", "Recuperar a primeira chave digital"] },
  { titulo: "BIBLIOTECA DIGITAL", texto: "Os arquivos do conhecimento foram embaralhados. Restaure os sistemas que organizam os dados.", imagem: setores[1].imagem, objetivos: ["Identificar a função dos sistemas operacionais", "Resolver perguntas de conhecimentos gerais e informática", "Desbloquear o próximo caminho"] },
  { titulo: "ESTAÇÃO DE COMUNICAÇÃO", texto: "A rede mundial está instável. Reative os canais de comunicação e recupere os sinais.", imagem: setores[2].imagem, objetivos: ["Reconhecer os elementos de uma rede", "Resolver os desafios de internet", "Recuperar o núcleo de comunicação"] },
  { titulo: "CASTELO DO CÓDIGO", texto: "A inteligência artificial protege este castelo com enigmas. Use lógica e Python para avançar.", imagem: setores[3].imagem, objetivos: ["Resolver desafios de raciocínio lógico", "Interpretar um comando básico de Python", "Conquistar a chave do castelo"] },
  { titulo: "NÚCLEO DE SEGURANÇA", texto: "Você chegou ao setor mais protegido. Defenda os dados e prepare-se para o confronto final.", imagem: setores[4].imagem, objetivos: ["Reconhecer ameaças digitais", "Responder às perguntas de segurança", "Liberar o acesso à Entidade Zero"] }
];

const MAX_ENERGIA = 5;
const SAVE_KEY = "theLastServerSaveV2";
let xp = 0;
let concluidos = [];
let energia = MAX_ENERGIA;
let kits = 1;
let fragmentos = 0;
let bauAberto = false;
let venceu = false;
let setorAtual = 0;
let setorPendente = 0;
let perguntaAtual = 0;
let acertos = 0;
let respostaSelecionada = null;
let vidaChefe = 4;
let perguntaChefeAtual = 0;
let respostaChefe = null;
let introTimers = [];
let audioContext = null;
let somLigado = true;
let telaAnterior = "map";

function carregarProgresso() {
  try {
    const dados = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!dados) return;
    xp = Math.max(0, Number(dados.xp) || 0);
    concluidos = Array.isArray(dados.concluidos) ? dados.concluidos.filter(n => Number.isInteger(n) && n >= 0 && n < setores.length) : [];
    energia = Math.min(MAX_ENERGIA, Math.max(1, Number(dados.energia) || MAX_ENERGIA));
    kits = Math.max(0, Number(dados.kits) || 0);
    fragmentos = Math.max(0, Number(dados.fragmentos) || 0);
    bauAberto = Boolean(dados.bauAberto);
    venceu = Boolean(dados.venceu);
  } catch (erro) {
    console.warn("Não foi possível carregar o progresso salvo.", erro);
  }
}

function salvarProgresso() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ xp, concluidos, energia, kits, fragmentos, bauAberto, venceu }));
    const aviso = document.getElementById("saveNote");
    if (aviso) aviso.textContent = "◈ PROGRESSO SALVO AUTOMATICAMENTE NESTE NAVEGADOR.";
  } catch (erro) {
    console.warn("O navegador não permitiu salvar o progresso.", erro);
  }
}

function nivelAtual() { return Math.floor(xp / 500) + 1; }
function proximoNivelXP() { return xp % 500; }
function atualizarHUD() {
  const nivel = nivelAtual();
  const xpEl = document.getElementById("xp");
  const levelEl = document.getElementById("levelLabel");
  const healthEl = document.getElementById("healthLabel");
  if (xpEl) xpEl.textContent = xp + " XP";
  if (levelEl) levelEl.textContent = "NÍVEL " + nivel;
  if (healthEl) healthEl.textContent = mostrarCoracoes(energia);
  const mini = document.getElementById("miniXpBar");
  if (mini) mini.style.width = (proximoNivelXP() / 500 * 100) + "%";
  atualizarInventario();
}

function mostrarCoracoes(qtd) {
  return Array.from({ length: MAX_ENERGIA }, (_, i) => i < qtd ? "♥" : "♡").join(" ");
}

function atualizarInventario() {
  const valores = {
    inventoryKeys: concluidos.length,
    inventoryShards: fragmentos,
    inventoryKits: kits,
    inventoryLevel: nivelAtual(),
    keys: concluidos.length + "/5",
    quizHealth: mostrarCoracoes(energia),
    bossPlayerHealth: mostrarCoracoes(energia)
  };
  Object.entries(valores).forEach(([id, valor]) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = valor;
  });
  const usarKit = document.getElementById("useKitButton");
  if (usarKit) usarKit.disabled = kits <= 0 || energia >= MAX_ENERGIA;
  const usarKitChefe = document.getElementById("bossUseKitButton");
  if (usarKitChefe) usarKitChefe.disabled = kits <= 0 || energia >= MAX_ENERGIA;
}

function mostrarTela(id) {
  // Garante que somente a tela solicitada fique visível.
  document.querySelectorAll("main .screen").forEach(tela => {
    tela.classList.remove("active");
    tela.setAttribute("aria-hidden", "true");
  });
  const destino = document.getElementById(id);
  if (!destino) {
    console.error("Tela não encontrada:", id);
    return false;
  }
  destino.classList.add("active");
  destino.setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);
  return true;
}

function atualizarMapa() {
  const lista = document.getElementById("sectorList");
  lista.innerHTML = "";
  setores.forEach((setor, indice) => {
    const liberado = indice === 0 || concluidos.includes(indice - 1);
    const concluido = concluidos.includes(indice);
    const card = document.createElement("article");
    card.className = "sector-card" + (liberado ? " unlocked" : " locked") + (concluido ? " completed" : "");

    const thumb = document.createElement("div");
    thumb.className = "sector-thumb";
    thumb.style.backgroundImage = `linear-gradient(0deg, #06102455, transparent), url("${setor.imagem}")`;
    const top = document.createElement("div");
    top.className = "sector-top";
    top.innerHTML = `<span>SETOR 0${indice + 1}</span><span class="sector-icon">${setor.icone}</span>`;
    const titulo = document.createElement("h3");
    titulo.textContent = setor.nome;
    const descricao = document.createElement("p");
    descricao.textContent = setor.descricao;
    const status = document.createElement("span");
    status.className = "sector-status";
    status.textContent = concluido ? "◆ CONCLUÍDO" : liberado ? "● DISPONÍVEL" : "🔒 BLOQUEADO";
    card.append(thumb, top, titulo, descricao, status);

    if (liberado) {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.textContent = concluido ? "REVISITAR SETOR ↻" : "INICIAR SETOR →";
      botao.addEventListener("click", () => iniciarSetor(indice));
      card.appendChild(botao);
    }
    lista.appendChild(card);
  });

  const porcentagem = concluidos.length * 20;
  document.getElementById("progressText").textContent = porcentagem + "%";
  document.getElementById("progressBar").style.width = porcentagem + "%";
  document.getElementById("finalUnlock").classList.toggle("show", concluidos.length === 5);
  document.getElementById("secretUnlock").classList.toggle("show", fragmentos >= 5 && !bauAberto);
  atualizarHUD();
}

function iniciarJogo() {
  atualizarMapa();
  mostrarTela("map");
  som("inicio");
}

function iniciarSetor(indice) {
  if (indice < 0 || indice >= setores.length) return;
  if (indice > 0 && !concluidos.includes(indice - 1)) return;
  if (energia <= 0) { mostrarDerrota("Sua energia acabou. Use um kit ou reinicie a tentativa."); return; }
  setorPendente = indice;
  abrirPainelMissao(indice);
}

function abrirPainelMissao(indice) {
  const cenario = cenarios[indice];
  document.getElementById("missionPhase").textContent = "FASE 0" + (indice + 1);
  document.getElementById("missionTitle").textContent = cenario.titulo;
  document.getElementById("missionDescription").textContent = cenario.texto;
  document.getElementById("missionReward").textContent = concluidos.includes(indice) ? "REVISÃO DO SETOR // SEM NOVA CHAVE" : "CHAVE DIGITAL + 200 XP";
  document.getElementById("missionImage").style.backgroundImage = `linear-gradient(90deg,#05081788,#05081722), url("${cenario.imagem}")`;
  const objetivos = document.getElementById("missionObjectives");
  objetivos.innerHTML = "";
  cenario.objetivos.forEach(texto => { const li = document.createElement("li"); li.textContent = texto; objetivos.appendChild(li); });
  const modal = document.getElementById("missionModal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  som("holograma");
}

function fecharPainelMissao() {
  const modal = document.getElementById("missionModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function confirmarMissao() {
  try {
    if (!setores[setorPendente]) throw new Error("O setor selecionado não foi encontrado.");
    // Primeiro exibe a tela do desafio; depois preenche a pergunta.
    // Assim, a interface não fica com todas as telas ocultas se houver
    // algum erro ao atualizar um elemento do quiz.
    setorAtual = setorPendente;
    perguntaAtual = 0;
    acertos = 0;
    fecharPainelMissao();

    const abriu = mostrarTela("quiz");
    if (!abriu) throw new Error("A tela do desafio não foi encontrada no HTML.");

    try {
      mostrarPergunta();
    } catch (erroPergunta) {
      console.error("Erro ao montar a pergunta:", erroPergunta);
      const titulo = document.getElementById("questionTitle");
      const opcoes = document.getElementById("options");
      const feedback = document.getElementById("feedback");
      if (titulo) titulo.textContent = "Não foi possível carregar esta pergunta.";
      if (opcoes) opcoes.innerHTML = "";
      if (feedback) {
        feedback.textContent = "Confira se os arquivos index.html, style.css e script.js são da mesma versão.";
        feedback.className = "feedback error";
      }
    }
    som("inicio");
  } catch (erro) {
    console.error("Falha ao abrir o desafio:", erro);
    const modal = document.getElementById("missionModal");
    if (modal) modal.classList.remove("show");
    const painel = document.getElementById("questionTitle");
    const feedback = document.getElementById("feedback");
    if (painel) painel.textContent = "Não foi possível carregar este desafio.";
    if (feedback) {
      feedback.textContent = "Atualize a página. Se o erro continuar, confira se index.html, style.css, script.js e a pasta imagens pertencem à mesma versão do jogo.";
      feedback.className = "feedback error";
    }
    mostrarTela("quiz");
  }
}

function mostrarPergunta() {
  const setor = setores[setorAtual];
  const pergunta = setor.perguntas[perguntaAtual];
  respostaSelecionada = null;
  document.getElementById("questionSector").textContent = "SETOR 0" + (setorAtual + 1) + " — " + setor.nome;
  document.getElementById("questionNumber").textContent = `PERGUNTA ${perguntaAtual + 1}/${setor.perguntas.length}`;
  document.getElementById("questionProgress").textContent = `0${perguntaAtual + 1} — 0${setor.perguntas.length}`;
  document.getElementById("difficulty").textContent = pergunta.nivel;
  document.getElementById("questionTitle").textContent = pergunta.pergunta;
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
  feedback.className = "feedback";
  const opcoes = document.getElementById("options");
  opcoes.innerHTML = "";
  pergunta.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "option-button";
    botao.textContent = String.fromCharCode(65 + indice) + " — " + opcao;
    botao.addEventListener("click", () => selecionarResposta(indice));
    opcoes.appendChild(botao);
  });
  const proximo = document.getElementById("nextButton");
  proximo.disabled = true;
  proximo.textContent = perguntaAtual === setor.perguntas.length - 1 ? "VER RESULTADO ➜" : "PRÓXIMA PERGUNTA ➜";
  atualizarHUD();
}

function selecionarResposta(indice) {
  if (respostaSelecionada !== null) return;
  respostaSelecionada = indice;
  const pergunta = setores[setorAtual].perguntas[perguntaAtual];
  const botoes = document.querySelectorAll("#options .option-button");
  const feedback = document.getElementById("feedback");
  botoes.forEach((botao, i) => {
    botao.disabled = true;
    if (i === pergunta.correta) botao.classList.add("correct");
    if (i === indice && indice !== pergunta.correta) botao.classList.add("wrong");
  });
  if (indice === pergunta.correta) {
    acertos++;
    xp += 50;
    fragmentos++;
    feedback.textContent = "✓ RESPOSTA CORRETA! " + pergunta.explicacao;
    feedback.className = "feedback success";
    som("acerto");
  } else {
    energia = Math.max(0, energia - 1);
    feedback.textContent = "✕ RESPOSTA INCORRETA. " + pergunta.explicacao + " Você perdeu 1 ponto de energia.";
    feedback.className = "feedback error";
    som("erro");
  }
  salvarProgresso();
  atualizarHUD();
  document.getElementById("nextButton").disabled = false;
}

function proximaPergunta() {
  if (respostaSelecionada === null) return;
  if (energia <= 0) { mostrarDerrota("Sua energia chegou a zero durante a missão. Os núcleos já recuperados foram preservados."); return; }
  if (perguntaAtual < setores[setorAtual].perguntas.length - 1) {
    perguntaAtual++;
    mostrarPergunta();
  } else {
    finalizarSetor();
  }
}

function finalizarSetor() {
  const total = setores[setorAtual].perguntas.length;
  const passou = acertos >= 3;
  const primeiraVez = !concluidos.includes(setorAtual);
  const recompensa = document.getElementById("keyReward");
  document.getElementById("resultScore").textContent = acertos + "/" + total;
  document.getElementById("secretReward").textContent = "";
  document.getElementById("resultIcon").textContent = passou ? "✧" : "⚠";
  document.getElementById("resultTitle").textContent = passou ? "MISSÃO CONCLUÍDA" : "MISSÃO NÃO CONCLUÍDA";
  if (passou) {
    document.getElementById("resultMessage").textContent = primeiraVez ? "Excelente trabalho! Você recuperou o núcleo deste setor e conquistou uma chave digital." : "Você concluiu novamente este setor. A chave digital continua segura.";
    recompensa.classList.add("show");
    document.getElementById("resultButton").textContent = "VOLTAR AO MAPA ➜";
    document.getElementById("resultButton").onclick = voltarMapa;
    if (primeiraVez) {
      concluidos.push(setorAtual);
      xp += 200;
      if (setorAtual === 1 || setorAtual === 3) kits++;
      salvarProgresso();
      atualizarMapa();
      mostrarTela("result");
      document.getElementById("keyCelebration").classList.add("show");
      document.getElementById("keyCelebration").setAttribute("aria-hidden", "false");
      som("chave");
      return;
    }
  } else {
    document.getElementById("resultMessage").textContent = "Você precisa acertar pelo menos 3 das 4 perguntas. Revise as explicações e tente novamente!";
    recompensa.classList.remove("show");
    document.getElementById("resultButton").textContent = "TENTAR NOVAMENTE ↻";
    document.getElementById("resultButton").onclick = () => iniciarSetor(setorAtual);
  }
  salvarProgresso();
  atualizarMapa();
  mostrarTela("result");
}

function voltarMapa() {
  atualizarMapa();
  mostrarTela("map");
}

function usarKit() {
  if (kits <= 0 || energia >= MAX_ENERGIA) return;
  kits--;
  energia = Math.min(MAX_ENERGIA, energia + 2);
  salvarProgresso();
  atualizarHUD();
  som("cura");
  const feedback = document.getElementById("feedback");
  feedback.textContent = "✚ KIT UTILIZADO! Você recuperou até 2 pontos de energia.";
  feedback.className = "feedback success";
}

function usarKitNoChefe() {
  if (kits <= 0 || energia >= MAX_ENERGIA) return;
  kits--;
  energia = Math.min(MAX_ENERGIA, energia + 2);
  salvarProgresso();
  atualizarHUD();
  som("cura");
  const feedback = document.getElementById("bossFeedback");
  feedback.textContent = "✚ KIT UTILIZADO! Você recuperou até 2 pontos de energia.";
  feedback.className = "feedback success";
}

function abrirBauSecreto() {
  if (fragmentos < 5 || bauAberto) return;
  const modal = document.getElementById("secretModal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  som("holograma");
}

function resgatarBau() {
  if (bauAberto || fragmentos < 5) return;
  bauAberto = true;
  fragmentos -= 5;
  xp += 250;
  kits++;
  document.getElementById("secretModal").classList.remove("show");
  document.getElementById("secretModal").setAttribute("aria-hidden", "true");
  salvarProgresso();
  atualizarMapa();
  const mensagem = document.getElementById("secretReward");
  if (mensagem) mensagem.textContent = "BAÚ ABERTO: +250 XP e +1 KIT DE REPARO!";
  som("chave");
}

function iniciarFinal() {
  if (concluidos.length !== 5) return;
  vidaChefe = 4;
  perguntaChefeAtual = 0;
  respostaChefe = null;
  if (energia <= 0) energia = MAX_ENERGIA;
  mostrarPerguntaChefe();
  atualizarHUD();
  mostrarTela("boss");
  som("chefao");
}

function mostrarPerguntaChefe() {
  const pergunta = perguntasChefe[perguntaChefeAtual];
  respostaChefe = null;
  document.getElementById("bossHealthText").textContent = vidaChefe + " / 4";
  document.getElementById("bossHealthBar").style.width = (vidaChefe / 4 * 100) + "%";
  document.getElementById("bossQuestionNumber").textContent = `DESAFIO ${perguntaChefeAtual + 1} DE ${perguntasChefe.length}`;
  document.getElementById("bossQuestion").textContent = pergunta.pergunta;
  document.getElementById("bossFeedback").textContent = "";
  document.getElementById("bossFeedback").className = "feedback";
  const opcoes = document.getElementById("bossOptions");
  opcoes.innerHTML = "";
  pergunta.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "option-button";
    botao.textContent = String.fromCharCode(65 + indice) + " — " + opcao;
    botao.addEventListener("click", () => selecionarRespostaChefe(indice));
    opcoes.appendChild(botao);
  });
  const proximo = document.getElementById("bossNextButton");
  proximo.disabled = true;
  proximo.textContent = perguntaChefeAtual === perguntasChefe.length - 1 ? "ENCERRAR BATALHA ➜" : "PRÓXIMO ATAQUE ➜";
  atualizarHUD();
}

function selecionarRespostaChefe(indice) {
  if (respostaChefe !== null) return;
  respostaChefe = indice;
  const pergunta = perguntasChefe[perguntaChefeAtual];
  const botoes = document.querySelectorAll("#bossOptions .option-button");
  const feedback = document.getElementById("bossFeedback");
  botoes.forEach((botao, i) => {
    botao.disabled = true;
    if (i === pergunta.correta) botao.classList.add("correct");
    if (i === indice && indice !== pergunta.correta) botao.classList.add("wrong");
  });
  if (indice === pergunta.correta) {
    vidaChefe = Math.max(0, vidaChefe - 1);
    xp += 75;
    feedback.textContent = "✦ ATAQUE CERTEIRO! " + pergunta.explicacao;
    feedback.className = "feedback success";
    som("acerto");
  } else {
    energia = Math.max(0, energia - 1);
    feedback.textContent = "A IA bloqueou seu ataque. " + pergunta.explicacao + " Você perdeu 1 ponto de energia.";
    feedback.className = "feedback error";
    som("erro");
  }
  document.getElementById("bossHealthText").textContent = vidaChefe + " / 4";
  document.getElementById("bossHealthBar").style.width = (vidaChefe / 4 * 100) + "%";
  document.getElementById("bossNextButton").disabled = false;
  salvarProgresso();
  atualizarHUD();
}

function proximaPerguntaChefe() {
  if (respostaChefe === null) return;
  if (energia <= 0) { mostrarDerrota("A Entidade Zero superou suas defesas. Recupere sua energia e tente novamente."); return; }
  if (vidaChefe <= 0) { finalizarVitoria(); return; }
  if (perguntaChefeAtual < perguntasChefe.length - 1) {
    perguntaChefeAtual++;
    mostrarPerguntaChefe();
  } else {
    mostrarDerrota("A Entidade Zero resistiu ao confronto. Reorganize seus recursos e tente novamente.");
  }
}

function finalizarVitoria() {
  venceu = true;
  xp += 500;
  salvarProgresso();
  atualizarHUD();
  document.getElementById("victoryStats").textContent = `${xp} XP TOTAIS  •  NÍVEL ${nivelAtual()}  •  5/5 CHAVES RECUPERADAS`;
  mostrarTela("victory");
  som("vitoria");
}

function mostrarDerrota(mensagem) {
  document.getElementById("defeatMessage").textContent = mensagem;
  mostrarTela("defeat");
  salvarProgresso();
}

function tentarNovamente() {
  energia = MAX_ENERGIA;
  salvarProgresso();
  atualizarHUD();
  if (concluidos.length === 5) iniciarFinal();
  else voltarMapa();
}

function reiniciarJogo() {
  const confirmar = confirm("Deseja apagar todo o progresso e começar o jogo novamente?");
  if (!confirmar) return;
  xp = 0; concluidos = []; energia = MAX_ENERGIA; kits = 1; fragmentos = 0; bauAberto = false; venceu = false;
  localStorage.removeItem(SAVE_KEY);
  atualizarMapa();
  mostrarTela("home");
}

function fecharCelebracao() {
  document.getElementById("keyCelebration").classList.remove("show");
  document.getElementById("keyCelebration").setAttribute("aria-hidden", "true");
  mostrarTela("result");
}

function som(tipo) {
  if (!somLigado) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    audioContext = audioContext || new AudioCtx();
    if (audioContext.state === "suspended") audioContext.resume();
    const notas = {
      acerto: [660, 880], erro: [180, 130], chave: [440, 660, 990],
      holograma: [330, 550, 770], inicio: [440, 660], cura: [520, 740],
      chefao: [110, 165, 220], vitoria: [523, 659, 784, 1046]
    };
    (notas[tipo] || [440]).forEach((frequencia, indice) => {
      const oscilador = audioContext.createOscillator();
      const ganho = audioContext.createGain();
      const tempo = audioContext.currentTime + indice * .09;
      oscilador.type = tipo === "erro" || tipo === "chefao" ? "sawtooth" : "sine";
      oscilador.frequency.value = frequencia;
      ganho.gain.setValueAtTime(.0001, tempo);
      ganho.gain.exponentialRampToValueAtTime(.075, tempo + .02);
      ganho.gain.exponentialRampToValueAtTime(.0001, tempo + .2);
      oscilador.connect(ganho); ganho.connect(audioContext.destination);
      oscilador.start(tempo); oscilador.stop(tempo + .22);
    });
  } catch (erro) { /* Som é opcional e depende do navegador. */ }
}

function alternarSom() {
  somLigado = !somLigado;
  const botao = document.getElementById("soundToggle");
  botao.classList.toggle("off", !somLigado);
  botao.textContent = somLigado ? "♫" : "♪";
  botao.title = somLigado ? "Desativar sons" : "Ativar sons";
  if (somLigado) som("inicio");
}

let introMusicContext = null;
let introMusicNodes = [];
let introMusicAtiva = false;

function iniciarTrilhaIntro() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!introMusicContext) introMusicContext = new AudioCtx();
    if (introMusicContext.state === "suspended") introMusicContext.resume();
    if (introMusicAtiva) return;
    introMusicAtiva = true;
    const ctx = introMusicContext;
    const master = ctx.createGain();
    master.gain.value = 0.075;
    master.connect(ctx.destination);
    const notas = [55, 65.41, 73.42, 82.41];
    notas.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i % 2 ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.value = i === 0 ? 0.55 : 0.18;
      osc.connect(gain); gain.connect(master); osc.start();
      introMusicNodes.push(osc, gain);
    });
    const pulso = ctx.createOscillator();
    const pulsoGain = ctx.createGain();
    pulso.type = "sine"; pulso.frequency.value = 110;
    pulsoGain.gain.value = 0.08;
    pulso.connect(pulsoGain); pulsoGain.connect(master); pulso.start();
    introMusicNodes.push(pulso, pulsoGain, master);
    const botao = document.getElementById("introAudio");
    if (botao) botao.textContent = "♫ TRILHA SONORA ATIVADA";
  } catch (erro) { console.warn("Não foi possível iniciar a trilha:", erro); }
}

function pararTrilhaIntro() {
  if (!introMusicContext || !introMusicAtiva) return;
  try {
    introMusicNodes.forEach(no => { if (no.stop) { try { no.stop(); } catch (_) {} } });
    introMusicContext.close();
  } catch (_) {}
  introMusicNodes = [];
  introMusicContext = null;
  introMusicAtiva = false;
}

function iniciarIntroducao() {
  const intro = document.getElementById("cinematicIntro");
  if (!intro) return;
  const cenas = [
    ["ARQUIVO 01 // O MUNDO CONECTADO", "CONEXÃO ESTABELECIDA", "Em 2077, toda a humanidade dependia de uma única rede mundial de servidores.", "imagens/cidade-servidores.webp"],
    ["ARQUIVO 02 // A AMEAÇA", "UMA IA DESCONHECIDA DESPERTOU", "Uma inteligência artificial chamada Entidade Zero invadiu o sistema e tomou o controle.", "imagens/chefao-ia.webp"],
    ["ARQUIVO 03 // O COLAPSO", "A REDE ESTÁ CAINDO", "Cidades ficaram sem energia, arquivos foram corrompidos e as comunicações foram destruídas.", "imagens/estacao-comunicacao.webp"],
    ["ARQUIVO 04 // A ÚLTIMA ESPERANÇA", "CINCO CHAVES. UMA CHANCE.", "Os últimos operadores esconderam cinco chaves digitais em setores protegidos.", "imagens/biblioteca-digital.webp"],
    ["ARQUIVO 05 // SUA MISSÃO", "THE LAST SERVER", "Você é o último operador. Recupere as chaves, enfrente a Entidade Zero e restaure o futuro.", "imagens/nucleo-central.webp"]
  ];
  let etapa = 0;
  const label = document.getElementById("introSceneLabel");
  const title = document.getElementById("introTitle");
  const msg = document.getElementById("introMessage");
  const bar = document.getElementById("introProgress");
  const count = document.getElementById("introCounter");
  const image = document.getElementById("introSceneImage");
  document.getElementById("introAudio")?.addEventListener("click", iniciarTrilhaIntro, { once: true });
  function mostrarCena() {
    if (etapa >= cenas.length) { finalizarIntroducao(); return; }
    label.textContent = cenas[etapa][0];
    title.textContent = cenas[etapa][1];
    msg.textContent = cenas[etapa][2];
    if (image) {
      image.style.opacity = "0";
      image.style.backgroundImage = `linear-gradient(90deg, #030714d9, #03071466), url("${cenas[etapa][3]}")`;
      setTimeout(() => { image.style.opacity = "1"; }, 150);
    }
    count.textContent = `CENA 0${etapa + 1} / 05`;
    bar.style.width = ((etapa + 1) * 20) + "%";
    etapa++;
    introTimers.push(setTimeout(mostrarCena, 10000));
  }
  document.getElementById("skipIntro").addEventListener("click", finalizarIntroducao, { once: true });
  mostrarCena();
}

function finalizarIntroducao() {
  pararTrilhaIntro();
  introTimers.forEach(clearTimeout);
  introTimers = [];
  const intro = document.getElementById("cinematicIntro");
  if (!intro || intro.classList.contains("finished")) return;
  intro.classList.add("finished");
  setTimeout(() => { intro.style.display = "none"; }, 900);
}

// Liga os botões da interface sem interromper o jogo caso algum elemento
// esteja ausente em uma cópia antiga do HTML.
function ligarBotao(id, evento, acao) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.addEventListener(evento, acao);
  else console.warn("Botão não encontrado no HTML:", id);
}
ligarBotao("playButton", "click", iniciarJogo);
ligarBotao("brandHome", "click", event => { event.preventDefault(); mostrarTela("home"); });
ligarBotao("startMission", "click", confirmarMissao);
ligarBotao("closeMission", "click", fecharPainelMissao);
ligarBotao("nextButton", "click", proximaPergunta);
ligarBotao("backMapButton", "click", voltarMapa);
ligarBotao("useKitButton", "click", usarKit);
ligarBotao("findSecretButton", "click", abrirBauSecreto);
ligarBotao("claimSecret", "click", resgatarBau);
ligarBotao("bossButton", "click", iniciarFinal);
ligarBotao("bossNextButton", "click", proximaPerguntaChefe);
ligarBotao("bossUseKitButton", "click", usarKitNoChefe);
ligarBotao("continueAfterKey", "click", fecharCelebracao);
ligarBotao("restartButton", "click", reiniciarJogo);
ligarBotao("retryButton", "click", tentarNovamente);
ligarBotao("defeatMapButton", "click", voltarMapa);
ligarBotao("soundToggle", "click", alternarSom);

carregarProgresso();
atualizarMapa();
atualizarHUD();
iniciarIntroducao();
