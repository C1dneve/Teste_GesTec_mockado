# GesTec — mockup estático navegável

Este pacote contém um protótipo visual do Sistema de Gestão de Ordens de Serviço (SGOS), baseado nos módulos encontrados no projeto de origem. **É somente front-end estático**: não existe backend, API, autenticação real ou banco de dados. As ações e os logs demonstrativos podem usar armazenamento local do navegador. Todo conteúdo e indicador é fictício.

## Como abrir

1. Extraia o ZIP para uma pasta.
2. Abra `index.html` (ou `dashboard.html`) no navegador.
3. Navegue pelo menu lateral e use os botões para abrir formulários, modais e ações simuladas.

Não é necessário instalar dependências nem iniciar servidor. O protótipo foi construído em HTML, CSS e JavaScript puros e funciona como navegação por arquivos `.html`.

## Telas incluídas

- `login.html`: tela de entrada demonstrativa.
- `dashboard.html`: KPIs, gráficos e atividades recentes.
- `ordens.html`: lista minimalista de O.S., modal de detalhes/edição direta para o perfil gestor, paginação tanto na lista quanto no quadro Kanban, gaveta lateral de filtros e visualizações salvas no navegador.
- `auditoria.html`: histórico de auditoria com pesquisa, filtro, paginação e modal cronológico filtrado por O.S.
- `ordem-detalhe.html`: detalhes, histórico, horas, anexos, comentários e checklist.
- `clientes.html`: listagem, busca e cadastro simulado de clientes.
- `projetos.html`: cards de projetos e formulário de cadastro.
- `funcionarios.html`: equipe de colaboradores e formulário.
- `departamentos.html`: estrutura de departamentos.
- `equipes.html`: composição e liderança de equipes.
- `relatorios.html`: indicadores, gráficos e exportação CSV demonstrativa.
- `modais.html`: galeria de estados modais para revisão visual.

## Interações disponíveis

- Links de navegação entre páginas HTML.
- Abertura/fechamento de modais por botões, clique fora ou tecla `Esc`.
- Formulários demonstrativos com feedback toast; cadastros genéricos não gravam em servidor.
- Busca e filtros locais nas tabelas.
- Alternância Lista/Kanban, paginação, filtros por status/criticidade/cliente/projeto/responsável/prazo e filtros rápidos.
- Visualizações salvas usando armazenamento local do navegador.
- Modal de detalhes com edição direta para o perfil gestor e rota local para auditoria da O.S. selecionada.
- Estado demonstrativo das O.S. editadas/inativadas, filtros, visualizações salvas e logs mantidos no armazenamento local do navegador quando permitido.
- Logs de auditoria de demonstração, incluindo mudanças registradas durante a sessão.
- Alternância de tema claro/escuro, lembrada no navegador.
- Exportação CSV com conteúdo de demonstração.
- Atalhos de ações contextuais e notificações toast.

## Observação

Os gráficos usam CSS/HTML e dados fixos. Números, nomes, clientes, prazos e indicadores não representam dados de produção. A tela de login não autentica: ela apenas abre o dashboard. O armazenamento local depende das permissões do navegador; não existe sincronização entre dispositivos ou backend.
