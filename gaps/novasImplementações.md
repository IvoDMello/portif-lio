Bugs / Gaps encontrados
#	Arquivo	Problema
3	info.html:99	Link "More about me →" aponta para # (morto)
4	info.html:131-136	Todos os links de certificações apontam para # (mortos)
6	script.js:71-72	carouselMove chama querySelector('.carousel-btn--prev/next') sem null-check — se existir uma .carousel-track sem botões, joga erro
7	info.html:119 / Project.html:101	BUILD_VERSION: 1.0.4 hardcoded em dois lugares — manutenção duplicada
Sugestões de usabilidade e construção para portfólio de dados
Conteúdo / Credibilidade

Na aba Projects: substitua os placeholders por projetos reais com link para GitHub/live demo, tecnologias usadas (tags: SQL, Python, Power BI) e tipo de análise (exploratória, preditiva, dashboard)
No Stack Timeline: adicione Power BI / Tableau / Excel — ferramentas muito valorizadas em dados e que você já menciona nas certificações
Crie uma seção de resultados mensuráveis nos projetos: "reduziu tempo de processamento em X%", "identificou anomalia em dataset de Y registros"
UX / Navegação

O botão "< Back" some ao chegar na index.html — considere um header fixo com navegação nas 3 páginas para não perder o contexto
O modal de certificações tem links mortos — substitua por PDFs ou URLs reais, senão prejudica a credibilidade
Adicione indicador de página ativa no menu (ex: | Info com sublinhado quando estiver em info.html)
Acessibilidade

Botões do carousel têm apenas aria-label — adicione role="button" e estados :focus-visible no CSS
O alert() do "E-mail copiado!" bloqueia a UI — substitua por um toast/tooltip sutil
Para a área de dados especificamente

Considere incluir um mini-dashboard interativo embutido (iframe do Power BI, Looker Studio ou Plotly) — diferencia muito de outros portfólios
Uma seção "Análises em destaque" com um trecho de query SQL ou snippet Python comentado demonstra raciocínio analítico diretamente no portfólio
Mencione ferramentas de dados explicitamente no título da página principal: "Data Analyst | SQL · Python · Power BI" — recrutadores usam esses termos como filtro