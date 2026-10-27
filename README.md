# GesTec — Mockup estático redesenhado

Este diretório contém o protótipo demonstrativo em HTML, CSS e JavaScript. Ele não utiliza autenticação real, API, backend nem banco de dados.

## Como abrir

1. Extraia o ZIP completo.
2. Abra `index.html` em um navegador moderno. Se o navegador bloquear recursos locais ou houver comportamento inconsistente com arquivos `file://`, sirva esta pasta com um servidor estático local (por exemplo, `python -m http.server 8000`) e abra `http://localhost:8000`.
3. Navegue pelas páginas usando o menu lateral. A senha e o e-mail da tela de login são demonstrativos.

## Identidade visual

- `assets/styles.css`: estilos e componentes existentes do mockup.
- `assets/brand-system.css`: camada visual GesTec, paleta institucional azul/ciano, gradientes, marca-d'água, ajustes de contraste e refinamentos dos temas claro/escuro.
- `assets/logo_gestec.png`: marca utilizada pelo protótipo.

A camada visual complementar foi acrescentada sem remover os seletores de interação existentes. A preferência de tema continua usando a chave local `mockup-theme`. Os formulários de criação de clientes, departamentos, equipes, funcionários, projetos e ordens acrescentam registros fictícios à tela e usam `mockup-demo-records` para persistência exclusivamente local no navegador. Essas operações não são enviadas ao sistema real.

## Páginas incluídas

`index.html`, `login.html`, `dashboard.html`, `clientes.html`, `departamentos.html`, `equipes.html`, `funcionarios.html`, `ordens.html`, `ordem-detalhe.html`, `projetos.html`, `relatorios.html`, `auditoria.html` e `modais.html`.

## Limites da demonstração

As informações são fictícias. Ações do mockup não alteram o sistema GesTec real e não enviam dados a nenhum serviço externo. Veja `RELATORIO_VISUAL.md` para o escopo do redesign, verificações realizadas e limitações conhecidas.
