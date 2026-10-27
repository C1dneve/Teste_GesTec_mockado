# GesTec — mockup estático navegável

Este pacote contém um protótipo visual do Sistema de Gestão de Ordens de Serviço (SGOS), baseado nos módulos encontrados no projeto de origem. **É somente front-end estático**: não existe backend, API, autenticação real, banco de dados ou persistência. Todo conteúdo e indicador é fictício.

## Como abrir

1. Extraia o ZIP para uma pasta.
2. Abra `index.html` (ou `dashboard.html`) no navegador.
3. Navegue pelo menu lateral e use os botões para abrir formulários, modais e ações simuladas.

Não é necessário instalar dependências nem iniciar servidor. O protótipo foi construído em HTML, CSS e JavaScript puros e funciona como navegação por arquivos `.html`.

## Telas incluídas

- `login.html`: tela de entrada demonstrativa.
- `dashboard.html`: KPIs, gráficos e atividades recentes.
- `ordens.html`: fila de ordens, filtros, paginação simulada e visualização Kanban.
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
- Formulários com feedback de sucesso (sem salvar dados).
- Busca e filtros locais nas tabelas.
- Alternância Lista/Kanban e abas no detalhe da O.S.
- Alternância de tema claro/escuro, lembrada no navegador.
- Exportação CSV com conteúdo de demonstração.
- Atalhos de ações contextuais e notificações toast.

## Observação

Os gráficos usam CSS/HTML e dados fixos. Números, nomes, clientes, prazos e indicadores não representam dados de produção. A tela de login não autentica: ela apenas abre o dashboard.
