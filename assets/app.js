(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const pages = [
    ['dashboard', 'Visão geral', 'dashboard.html', 'layout-dashboard'],
    ['ordens', 'Ordens de serviço', 'ordens.html', 'clipboard-list'],
    ['clientes', 'Clientes', 'clientes.html', 'users'],
    ['projetos', 'Projetos', 'projetos.html', 'layers'],
    ['funcionarios', 'Funcionários', 'funcionarios.html', 'contact-round'],
    ['departamentos', 'Departamentos', 'departamentos.html', 'building-2'],
    ['equipes', 'Equipes', 'equipes.html', 'users-round'],
    ['auditoria', 'Logs de auditoria', 'auditoria.html', 'history'],
    ['relatorios', 'Relatórios', 'relatorios.html', 'chart-no-axes-combined']
  ];
  const current = document.body.dataset.page || 'dashboard';
  const icon = (name, size = 18) => {
    const paths = {
      'layout-dashboard':'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
      'clipboard-list':'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6M9 10h6M9 14h6M9 18h3"/><path d="M9 2h6v4H9z"/>',
      'users':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
      'layers':'<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
      'contact-round':'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0M19 8h3M20.5 6.5v3"/>',
      'building-2':'<path d="M6 22V3h12v19M3 22h18M9 7h2M14 7h2M9 11h2M14 11h2M9 15h2M14 15h2M10 22v-3h4v3"/>',
      'users-round':'<path d="M18 21a8 8 0 0 0-16 0M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21a8 8 0 0 0-6-7.75M16 2.25a4 4 0 0 1 0 7.5"/>',
      'chart-no-axes-combined':'<path d="M3 3v18h18M7 14l4-4 4 3 6-7"/><path d="M17 6h4v4"/>',
      'settings':'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.6-1.4-2.4L5.2 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.7-1L8.9 7.3h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1 0 2Z"/>',
      'bell':'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
      'search':'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      'plus':'<path d="M12 5v14M5 12h14"/>',
      'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
      'chevron-down':'<path d="m6 9 6 6 6-6"/>',
      'more-horizontal':'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
      'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
      'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      'filter':'<path d="M4 6h16M7 12h10M10 18h4"/>',
      'download':'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
      'external-link':'<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
      'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
      'x':'<path d="m18 6-12 12M6 6l12 12"/>',
      'check':'<path d="m5 12 4 4L19 6"/>',
      'chevron-right':'<path d="m9 18 6-6-6-6"/>',
      'arrow-left':'<path d="m12 19-7-7 7-7M5 12h14"/>',
      'file-text':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
      'paperclip':'<path d="m21.4 11.6-8.5 8.5a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
      'circle-help':'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
      'log-out':'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
      'sun':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>',
      'moon':'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
      'layout-list':'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
      'columns-3':'<rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="18" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/>',
      'activity':'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
      'mail':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
      'phone':'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.4 2.7a2 2 0 0 1-.6 1.7L8 11a16 16 0 0 0 5 5l1.9-1.9a2 2 0 0 1 1.7-.6l2.7.4a2 2 0 0 1 1.7 2Z"/>',
      'map-pin':'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
      'trash-2':'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v5M14 11v5"/>',
      'edit':'<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
      'eye':'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
      'message-square':'<path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
      'history':'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/>',
      'power':'<path d="M12 2v10"/><path d="M6.2 5.5a8 8 0 1 0 11.6 0"/>',
      'sparkles':'<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l1 2.5L8.5 5.5 6 6.5 5 9 4 6.5 1.5 5.5 4 4.5 5 2Z"/>'
    };
    return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths['circle-help']}</svg>`;
  };

  function renderShell() {
    const sidebar = $('#site-sidebar');
    const topbar = $('#site-topbar');
    if (sidebar) {
      sidebar.innerHTML = `
        <a class="brand" href="dashboard.html"><span class="brand-mark"><img src="assets/logo_gestec.png" alt=""></span><span class="brand-text"><strong>GesTec</strong><small>Sistema de gestão</small></span></a>
        <div class="workspace"><span class="workspace-label">ESPAÇO DE TRABALHO</span><button class="workspace-switch" data-toast="Organização atual: GesTec Serviços">${icon('building-2',16)} GesTec Serviços ${icon('chevron-down',14)}</button></div>
        <nav class="side-nav"><span class="nav-section">MENU PRINCIPAL</span>${pages.slice(0,2).map(p=>`<a class="nav-link ${current===p[0]?'active':''}" href="${p[2]}">${icon(p[3],18)}<span>${p[1]}</span>${p[0]==='ordens'?'<span class="nav-count">12</span>':''}</a>`).join('')}
        <span class="nav-section nav-gap">GESTÃO</span>${pages.slice(2,7).map(p=>`<a class="nav-link ${current===p[0]||current==='detalhe'&&p[0]==='ordens'?'active':''}" href="${p[2]}">${icon(p[3],18)}<span>${p[1]}</span></a>`).join('')}
        <span class="nav-section nav-gap">ANÁLISES</span>${pages.slice(7).map(p=>`<a class="nav-link ${current===p[0]?'active':''}" href="${p[2]}">${icon(p[3],18)}<span>${p[1]}</span></a>`).join('')}
        <a class="nav-link" href="modais.html">${icon('layers',18)}<span>Galeria de modais</span><span class="nav-tag">DEMO</span></a></nav>
        <div class="sidebar-bottom"><div class="help-card"><div class="help-icon">${icon('circle-help',18)}</div><strong>Precisa de ajuda?</strong><p>Explore as funcionalidades do sistema.</p><button class="btn btn-sm btn-outline-light" data-modal-open="modal-ajuda">Central de ajuda ${icon('arrow-up-right',14)}</button></div><div class="user-mini"><div class="avatar avatar-purple">MC</div><div class="user-info"><strong>Mariana Costa</strong><small>Gestora</small></div><button class="icon-btn sidebar-more" data-modal-open="modal-perfil" aria-label="Menu do perfil">${icon('more-horizontal',18)}</button></div></div>`;
    }
    if (topbar) {
      const title = document.querySelector('[data-title]')?.dataset.title || ({dashboard:'Visão geral',ordens:'Ordens de serviço',detalhe:'Detalhes da ordem de serviço',clientes:'Clientes',projetos:'Projetos',funcionarios:'Funcionários',departamentos:'Departamentos',equipes:'Equipes',auditoria:'Logs de auditoria',relatorios:'Relatórios',modais:'Galeria de modais'}[current] || 'GesTec');
      topbar.innerHTML = `<div class="topbar-left"><button class="icon-btn mobile-menu" data-sidebar-toggle aria-label="Abrir menu">${icon('menu')}</button><div class="breadcrumbs"><a href="dashboard.html">Início</a><span>/</span><strong>${title}</strong></div></div><div class="topbar-right"><label class="global-search">${icon('search',17)}<input type="search" placeholder="Buscar em todo o sistema..." data-global-search><kbd>⌘ K</kbd></label><button class="icon-btn theme-toggle" data-theme-toggle aria-label="Alternar tema">${icon('moon',18)}</button><button class="icon-btn notification-btn" data-modal-open="modal-notificacoes" aria-label="Notificações">${icon('bell',19)}<i></i></button><div class="topbar-divider"></div><button class="profile-trigger" data-modal-open="modal-perfil"><span class="avatar avatar-purple">MC</span><span class="profile-meta"><strong>Mariana Costa</strong><small>Gestora</small></span>${icon('chevron-down',14)}</button></div>`;
    }
  }
  function toast(message) {
    let stack = $('#toast-stack');
    if (!stack) { stack = document.createElement('div'); stack.id = 'toast-stack'; stack.className = 'toast-stack'; document.body.appendChild(stack); }
    const item = document.createElement('div'); item.className = 'toast'; item.innerHTML = `<span class="toast-check">${icon('check',16)}</span><span>${escapeHTML(message || 'Ação simulada com sucesso.')}</span><button aria-label="Fechar">${icon('x',14)}</button>`;
    stack.appendChild(item); item.querySelector('button').addEventListener('click', () => item.remove()); setTimeout(() => item.remove(), 3600);
  }
  function openModal(id) { const modal = document.getElementById(id); if (!modal) { toast('Esta ação é demonstrativa neste protótipo.'); return; } modal.style.zIndex = String(90 + $$('.modal-overlay.is-open').length + 1); modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); const first = modal.querySelector('input,select,textarea,button'); if(first) setTimeout(()=>first.focus(),80); }
  function closeModal(modal) { if (!modal) return; modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); if (!$('.modal-overlay.is-open')) document.body.classList.remove('modal-open'); }
  function decorateActionButtons() {
    const rules = [
      [/salvar|atualizar|aplicar|confirmar|concluir|registrar|marcar como|enviar|finalizar/i, 'check'],
      [/nova|novo|adicionar|criar|cadastrar|convidar|incluir|duplicar|lançar horas/i, 'plus'],
      [/editar|alterar|ajustar/i, 'edit'],
      [/inativar|reativar|ativar/i, 'power'],
      [/excluir|remover|apagar|deletar/i, 'trash-2'],
      [/exportar|baixar|download/i, 'download'],
      [/filtrar|filtros/i, 'filter'],
      [/limpar|resetar/i, 'x'],
      [/hist[oó]rico|auditoria|logs/i, 'history'],
      [/ver |visualizar|detalhes|abrir/i, 'eye'],
      [/buscar|pesquisar|pesquisa/i, 'search'],
      [/voltar/i, 'arrow-left'],
      [/fechar|cancelar/i, 'x'],
      [/entrar|acessar|login/i, 'external-link'],
      [/relat[oó]rio|gr[aá]fico/i, 'chart-no-axes-combined']
    ];
    $$('button.btn, a.btn, button.icon-action').forEach(el => {
      if (el.querySelector('svg, .icon') || el.classList.contains('modal-close') || el.classList.contains('icon-only')) return;
      const label = (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!label || label.length < 3) return;
      const rule = rules.find(([pattern]) => pattern.test(label));
      const svg = icon(rule ? rule[1] : 'activity', 15).replace('class="icon"', 'class="icon ui-icon"');
      el.insertAdjacentHTML('afterbegin', svg);
    });
  }

  function bindGlobal() {
    document.addEventListener('click', e => {
      const open = e.target.closest('[data-modal-open]'); if(open){ e.preventDefault(); openModal(open.dataset.modalOpen); return; }
      const close = e.target.closest('[data-modal-close]'); if(close){ const closeToast=close.dataset.toast; closeModal(close.closest('.modal-overlay')); if(closeToast) toast(closeToast); return; }
      const backdrop = e.target.classList.contains('modal-overlay') ? e.target : null; if(backdrop) { closeModal(backdrop); return; }
      const toastEl = e.target.closest('[data-toast]'); if(toastEl){e.preventDefault();toast(toastEl.dataset.toast);return;}
      const theme = e.target.closest('[data-theme-toggle]'); if(theme){document.body.classList.toggle('dark-mode');const dark=document.body.classList.contains('dark-mode');safeSet('mockup-theme',dark?'dark':'light');theme.innerHTML=icon(dark?'sun':'moon');toast(dark?'Tema escuro ativado.':'Tema claro ativado.');return;}
      const side = e.target.closest('[data-sidebar-toggle]'); if(side){$('.sidebar')?.classList.toggle('mobile-open');return;}
      const tab = e.target.closest('[data-tab]'); if(tab){const group=tab.closest('[data-tabs-group]')||tab.parentElement.parentElement;$$('[data-tab]',group).forEach(x=>x.classList.toggle('active',x===tab));const name=tab.dataset.tab;const scope=tab.closest('[data-tab-scope]')||document;$$('[data-tab-panel]',scope).forEach(panel=>panel.hidden=panel.dataset.tabPanel!==name);return;}
      const toggle = e.target.closest('[data-view-toggle]'); if(toggle){const view=toggle.dataset.viewToggle;$$('[data-view-panel]').forEach(x=>x.hidden=x.dataset.viewPanel!==view);$$('[data-view-toggle]').forEach(x=>x.classList.toggle('active',x===toggle));toast(view==='kanban'?'Visualização em quadro ativada.':'Visualização em lista ativada.');return;}
      const exportBtn=e.target.closest('[data-export]'); if(exportBtn){let rows=$$('[data-export-row]');if(!rows.length)rows=$$('table tbody tr').filter(r=>!r.hidden);const content=rows.length?rows.map(r=>[...r.querySelectorAll('td')].map(td=>'"'+td.innerText.replaceAll('"','""').trim()+'"').join(';')).join('\n'):'Mockup GesTec\nDados demonstrativos';const blob=new Blob(['\ufeff'+content],{type:'text/csv;charset=utf-8;'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(exportBtn.dataset.export||'relatorio-mockup')+'.csv';a.click();URL.revokeObjectURL(a.href);toast('Arquivo demonstrativo exportado.');return;}
      const deleteBtn=e.target.closest('[data-delete-confirm]');if(deleteBtn){openModal(deleteBtn.dataset.deleteConfirm);return;}
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape') $$('.modal-overlay.is-open').forEach(closeModal);if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('[data-global-search]')?.focus();}});
    $$('form[data-mock-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault(); const msg=form.dataset.success||'Informações salvas na demonstração.';const m=form.closest('.modal-overlay');if(m)closeModal(m);toast(msg);form.reset();}));
    $$('[data-search]').forEach(input=>input.addEventListener('input',()=>filterRows(input)));
    $('[data-global-search]')?.addEventListener('keydown', e=>{if(e.key==='Enter'){const q=e.target.value.toLowerCase();let match=$$('[data-searchable]').find(el=>el.innerText.toLowerCase().includes(q));if(match){match.scrollIntoView({behavior:'smooth',block:'center'});match.classList.add('search-highlight');setTimeout(()=>match.classList.remove('search-highlight'),1800);}else toast('Nenhum resultado demonstrativo para esta busca.');}});
    $$('[data-filter]').forEach(sel=>sel.addEventListener('change',()=>applyFilters()));
    $$('[data-accordion-toggle]').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('expanded');const target=document.getElementById(btn.dataset.accordionToggle);if(target)target.hidden=!target.hidden;}));
    $$('[data-password-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const input=btn.parentElement.querySelector('input');if(input)input.type=input.type==='password'?'text':'password';}));
  }
  function filterRows(input){const q=input.value.toLowerCase();const target=input.dataset.search||'';const container=target?document.querySelector(target):input.closest('.table-card')||document;const rows=$$('[data-searchable]',container);rows.forEach(row=>row.hidden=!row.innerText.toLowerCase().includes(q));const empty=$('[data-empty-results]',container);if(empty)empty.hidden=rows.some(row=>!row.hidden);}
  function applyFilters(){const rows=$$('[data-searchable]');rows.forEach(row=>{let visible=true;$$('[data-filter]').forEach(sel=>{if(!sel.value)return;const field=sel.dataset.filter;const val=(row.dataset[field]||row.innerText).toLowerCase();if(!val.includes(sel.value.toLowerCase()))visible=false;});row.hidden=!visible;});}
  function charts(){
    $$('[data-chart-bars]').forEach(el=>{const values=(el.dataset.values||'').split(',').map(Number);const labels=(el.dataset.labels||'').split(',');el.innerHTML=values.map((v,i)=>`<div class="bar-column"><div class="bar-value">${v}</div><div class="bar-track"><span style="height:${Math.max(4,v/Math.max(...values)*100)}%"></span></div><small>${labels[i]||''}</small></div>`).join('');});
    $$('[data-donut]').forEach(el=>{const values=(el.dataset.values||'').split(',').map(Number);const colors=(el.dataset.colors||'#635bdb,#28b6a4,#f5ad45,#e9edf4').split(',');let start=0;const sum=values.reduce((a,b)=>a+b,0)||1;const seg=values.map((v,i)=>{const s=start;start+=v/sum*100;return `${colors[i]} ${s}% ${start}%`;}).join(',');el.style.background=`conic-gradient(${seg})`;});
    $$('[data-sparkline]').forEach(el=>{const vals=(el.dataset.sparkline||'').split(',').map(Number);const max=Math.max(...vals);el.innerHTML=vals.map(v=>`<i style="height:${Math.max(8,v/max*100)}%"></i>`).join('');});
  }

  // Helpers for static-only interactions. Storage is browser-local and never calls a backend.
  const safeGet = (key, fallback = null) => { try { const value = localStorage.getItem(key); return value === null ? fallback : value; } catch (_) { return fallback; } };
  const safeSet = (key, value) => { try { localStorage.setItem(key, String(value)); } catch (_) {} };
  const safeJSON = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (_) { return fallback; } };
  const safeStore = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} };
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const demoAuditSeed = () => {
    const now = Date.now();
    return [
      {osId:'OS-2026-0156', timestamp:new Date(now-7*60000).toISOString(), action:'Status', field:'Status', before:'Aguardando', after:'Em andamento', actor:'André Lima'},
      {osId:'OS-2026-0156', timestamp:new Date(now-22*60000).toISOString(), action:'Atualização', field:'Responsável', before:'Juliana Ferreira', after:'André Lima', actor:'Mariana Costa'},
      {osId:'OS-2026-0156', timestamp:new Date(now-2*3600000).toISOString(), action:'Criação', field:'Ordem de serviço', before:'—', after:'Instalação de sensores de monitoramento', actor:'Mariana Costa'},
      {osId:'OS-2026-0159', timestamp:new Date(now-34*60000).toISOString(), action:'Criticidade', field:'Criticidade', before:'Alta', after:'Crítica', actor:'Mariana Costa'},
      {osId:'OS-2026-0159', timestamp:new Date(now-70*60000).toISOString(), action:'Status', field:'Status', before:'Em análise', after:'Aguardando', actor:'Juliana Ferreira'},
      {osId:'OS-2026-0154', timestamp:new Date(now-3*3600000).toISOString(), action:'Atualização', field:'Prazo / SLA', before:'27/10/2026', after:'28/10/2026', actor:'Rafael Mendes'},
      {osId:'OS-2026-0148', timestamp:new Date(now-5*3600000).toISOString(), action:'Status', field:'Status', before:'Em andamento', after:'Concluída', actor:'Carlos Souza'},
      {osId:'OS-2026-0141', timestamp:new Date(now-9*3600000).toISOString(), action:'Status', field:'Status', before:'Em andamento', after:'Bloqueada', actor:'Juliana Ferreira'},
      {osId:'OS-2026-0136', timestamp:new Date(now-24*3600000).toISOString(), action:'Atualização', field:'Descrição', before:'Calibração pendente', after:'Calibração validada', actor:'Rafael Mendes'},
      {osId:'OS-2026-0134', timestamp:new Date(now-26*3600000).toISOString(), action:'Criação', field:'Ordem de serviço', before:'—', after:'Falha intermitente no painel de controle', actor:'André Lima'},
      {osId:'OS-2026-0129', timestamp:new Date(now-31*3600000).toISOString(), action:'Atualização', field:'Responsável', before:'Carlos Souza', after:'Mariana Costa', actor:'Mariana Costa'},
      {osId:'OS-2026-0124', timestamp:new Date(now-39*3600000).toISOString(), action:'Criticidade', field:'Criticidade', before:'Média', after:'Alta', actor:'Mariana Costa'},
      {osId:'OS-2026-0118', timestamp:new Date(now-45*3600000).toISOString(), action:'Atualização', field:'Prazo / SLA', before:'30/10/2026', after:'04/11/2026', actor:'Rafael Mendes'},
      {osId:'OS-2026-0112', timestamp:new Date(now-50*3600000).toISOString(), action:'Status', field:'Status', before:'Em andamento', after:'Aguardando', actor:'Juliana Ferreira'},
      {osId:'OS-2026-0156', timestamp:new Date(now-53*3600000).toISOString(), action:'Atualização', field:'Cliente', before:'Instituto Vale', after:'ALTAVE Tecnologia', actor:'Mariana Costa'},
      {osId:'OS-2026-0159', timestamp:new Date(now-61*3600000).toISOString(), action:'Atualização', field:'Projeto', before:'Suporte corporativo', after:'Modernização industrial', actor:'Juliana Ferreira'},
      {osId:'OS-2026-0145', timestamp:new Date(now-67*3600000).toISOString(), action:'Criação', field:'Ordem de serviço', before:'—', after:'Configuração de servidor de aplicações', actor:'Mariana Costa'},
      {osId:'OS-2026-0141', timestamp:new Date(now-76*3600000).toISOString(), action:'Inativação', field:'Ativa', before:'Sim', after:'Não', actor:'Mariana Costa'}
    ];
  };
  function getAuditEntries() {
    let entries = safeJSON('mockup-audit-entries', null);
    if (!Array.isArray(entries) || !entries.length) { entries = demoAuditSeed(); safeStore('mockup-audit-entries', entries); }
    return entries;
  }
  function pushAudit(osId, action, field, before, after) {
    const entries = getAuditEntries();
    entries.unshift({ osId, timestamp:new Date().toISOString(), action, field, before:String(before ?? '—'), after:String(after ?? '—'), actor:'Mariana Costa' });
    safeStore('mockup-audit-entries', entries.slice(0,250));
  }
  const formatAuditDate = value => { const date = new Date(value); if (Number.isNaN(date.getTime())) return String(value || '—'); return date.toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); };
  const initials = name => String(name || 'MC').split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]).join('').toUpperCase();
  function setStatusBadge(node, value) {
    if (!node) return;
    const cls = {'Em andamento':'in-progress','Aguardando':'open','Concluída':'done','Em análise':'review','Bloqueada':'blocked','Inativa':'blocked','Planejamento':'waiting','Pausado':'blocked','Concluído':'done','Ativo':'done','Inativo':'blocked'}[value] || 'review';
    node.className = 'status ' + cls; node.textContent = value;
  }
  function setPriorityBadge(node, value) {
    if (!node) return;
    const cls = {'Crítica':'critical','Alta':'high','Média':'medium','Baixa':'low'}[value] || 'medium';
    node.className = 'priority ' + cls; node.textContent = value;
  }
  function initOSPage() {
    if (current !== 'ordens') return;
    const tbody = $('#os-list-table tbody');
    const rows = tbody ? $$('[data-os-row]', tbody) : [];
    if (!rows.length) return;
    const drawer = $('#os-filter-drawer'), backdrop = $('#os-filter-backdrop');
    const q = $('#os-search');
    let currentPage = 1, pageSize = 5, currentDetailRow = null;
    const stateKey = 'mockup-os-filter-state';
    const osStorageKey = 'mockup-os-state';
    function persistOSRow(row) {
      const stored=safeJSON(osStorageKey,{});
      stored[row.dataset.osId]={title:row.dataset.title,status:row.dataset.ativo==='false'?(row.dataset.previousStatus||row.dataset.status):row.dataset.status,criticidade:row.dataset.criticidade,responsavel:row.dataset.responsavel,cliente:row.dataset.cliente,projeto:row.dataset.projeto,prazo:row.dataset.prazo,descricao:row.dataset.descricao||'',ativo:row.dataset.ativo!=='false',previousStatus:row.dataset.previousStatus||''};
      safeStore(osStorageKey,stored);
    }
    const getState = () => ({ statuses:$$('[data-os-status]').filter(x=>x.checked).map(x=>x.value), priorities:$$('[data-os-priority]').filter(x=>x.checked).map(x=>x.value), responsible:$('#os-filter-responsavel')?.value || '', client:$('#os-filter-cliente')?.value || '', project:$('#os-filter-projeto')?.value || '', from:$('#os-date-from')?.value || '', to:$('#os-date-to')?.value || '', critical:!!$('[data-os-toggle="critical"]')?.checked, sla:!!$('[data-os-toggle="sla"]')?.checked, mine:!!$('[data-os-toggle="mine"]')?.checked, hideInactive:$('[data-os-toggle="hideInactive"]')?.checked !== false });
    const setState = st => {
      $$('[data-os-status]').forEach(x=>x.checked=(st.statuses||[]).includes(x.value));
      $$('[data-os-priority]').forEach(x=>x.checked=(st.priorities||[]).includes(x.value));
      if($('#os-filter-responsavel')) $('#os-filter-responsavel').value=st.responsible||'';
      if($('#os-filter-cliente')) $('#os-filter-cliente').value=st.client||'';
      if($('#os-filter-projeto')) $('#os-filter-projeto').value=st.project||'';
      if($('#os-date-from')) $('#os-date-from').value=st.from||'';
      if($('#os-date-to')) $('#os-date-to').value=st.to||'';
      const t={'critical':st.critical,'sla':st.sla,'mine':st.mine,'hideInactive':st.hideInactive!==false};
      Object.entries(t).forEach(([key,val])=>{const el=$(`[data-os-toggle="${key}"]`);if(el)el.checked=!!val;});
    };
    const activeCount = st => st.statuses.length + st.priorities.length + Number(!!st.responsible) + Number(!!st.client) + Number(!!st.project) + Number(!!st.from) + Number(!!st.to) + Number(st.critical) + Number(st.sla) + Number(st.mine);
    function updateFilterCount(st) { const n=activeCount(st); const badge=$('#os-filter-count'); if(badge){badge.hidden=!n;badge.textContent=String(n);} }
    function openDrawer(){if(!drawer)return;drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');if(backdrop)backdrop.hidden=false;document.body.classList.add('filter-drawer-open');}
    function closeDrawer(){if(!drawer)return;drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');if(backdrop)backdrop.hidden=true;document.body.classList.remove('filter-drawer-open');}
    function renderPagination(total, targetId = 'os-pagination') {
      const pages=Math.max(1,Math.ceil(total/pageSize)); currentPage=Math.min(currentPage,pages); const container=document.getElementById(targetId); if(!container)return;
      let html=`<button data-os-page="${Math.max(1,currentPage-1)}" aria-label="Página anterior" ${currentPage===1?'disabled':''}>‹</button>`;
      for(let i=1;i<=pages;i++) { if(pages>7 && i>2 && i<pages-1 && Math.abs(i-currentPage)>1) { if(i===3||i===pages-2) html+='<span>…</span>'; continue; } html+=`<button class="${i===currentPage?'current':''}" data-os-page="${i}" ${i===currentPage?'aria-current="page"':''}>${i}</button>`; }
      html+=`<button data-os-page="${Math.min(pages,currentPage+1)}" aria-label="Próxima página" ${currentPage===pages?'disabled':''}>›</button>`;container.innerHTML=html;
    }
    function renderRows() {
      const st=getState(), query=(q?.value||'').trim().toLowerCase();
      const filtered=rows.filter(row=>{
        const active=row.dataset.ativo!=='false';
        if(query && !(row.dataset.title+' '+row.dataset.osId+' '+row.innerText).toLowerCase().includes(query))return false;
        if(st.statuses.length && !st.statuses.includes(row.dataset.status))return false;
        if(st.priorities.length && !st.priorities.includes(row.dataset.criticidade))return false;
        if(st.responsible && row.dataset.responsavel!==st.responsible)return false;
        if(st.client && row.dataset.cliente!==st.client)return false;
        if(st.project && row.dataset.projeto!==st.project)return false;
        if(st.from && row.dataset.prazo<st.from)return false;
        if(st.to && row.dataset.prazo>st.to)return false;
        if(st.critical && row.dataset.criticidade!=='Crítica')return false;
        if(st.sla && row.dataset.sla!=='true')return false;
        if(st.mine && row.dataset.minhas!=='true')return false;
        if(st.hideInactive && !active)return false;
        return true;
      });
      rows.forEach(row=>row.hidden=true);
      const pages=Math.max(1,Math.ceil(filtered.length/pageSize)); currentPage=Math.min(currentPage,pages);
      const start=(currentPage-1)*pageSize, pageRows=filtered.slice(start,start+pageSize);pageRows.forEach(row=>row.hidden=false);
      const empty=$('#os-empty-results');if(empty)empty.hidden=filtered.length>0;
      const summary=$('#os-page-summary');if(summary)summary.textContent=filtered.length?`Mostrando ${start+1}–${Math.min(start+pageSize,filtered.length)} de ${filtered.length} ordens`:'Mostrando 0 de 0 ordens';
      renderPagination(filtered.length,'os-pagination'); renderPagination(filtered.length,'os-kanban-pagination'); updateFilterCount(st);
      const visibleIds=new Set(pageRows.map(row=>row.dataset.osId));
      $$('.os-kanban-board [data-os-id]').forEach(card=>{const row=rows.find(r=>r.dataset.osId===card.dataset.osId);const contentOk=!query || ((card.dataset.title+' '+card.dataset.osId).toLowerCase().includes(query)); card.hidden=!visibleIds.has(card.dataset.osId)||!contentOk;});
      const kanbanSummary=$('#os-kanban-page-summary');if(kanbanSummary)kanbanSummary.textContent=filtered.length?`Mostrando ${start+1}–${Math.min(start+pageSize,filtered.length)} de ${filtered.length} ordens`:'Mostrando 0 de 0 ordens';
      return filtered;
    }
    function detailFor(row) {
      currentDetailRow=row; const inactive=row.dataset.ativo==='false';
      $('#os-edit-id').textContent=row.dataset.osId;
      $('#os-detail-modal-title').textContent=row.dataset.title||'Detalhes da ordem';
      $('#os-edit-title').value=row.dataset.title||'';
      $('#os-edit-status').value=inactive?(row.dataset.previousStatus||'Bloqueada'):row.dataset.status;
      $('#os-edit-priority').value=row.dataset.criticidade||'Média';
      $('#os-edit-responsavel').value=row.dataset.responsavel||'André Lima';
      $('#os-edit-cliente').value=row.dataset.cliente||'ALTAVE Tecnologia';
      $('#os-edit-projeto').value=row.dataset.projeto||'Infraestrutura de rede';
      $('#os-edit-prazo').value=row.dataset.prazo||'';
      $('#os-edit-description').value=row.dataset.descricao||`Ordem referente a ${row.dataset.title||'uma solicitação técnica'}.`;
      $('#os-detail-owner-summary').textContent=row.dataset.responsavel||'Não definido';
      $('#os-detail-deadline-summary').textContent=row.dataset.prazo?new Date(row.dataset.prazo+'T12:00:00').toLocaleDateString('pt-BR'):'Sem prazo';
      $('#os-detail-audit-summary').textContent='Histórico completo';
      $('#os-detail-audit-link').href='auditoria.html?os='+encodeURIComponent(row.dataset.osId);
      const canEdit=document.body.dataset.role==='gestor';$('#os-edit-form')?.querySelectorAll('input,select,textarea').forEach(field=>field.disabled=!canEdit);const saveButton=$('#os-edit-form [type=submit]');if(saveButton)saveButton.hidden=!canEdit;
      openModal('modal-os-detalhes');
    }
    function updateRow(row, values) {
      row.dataset.title=values.title;row.dataset.status=values.status;row.dataset.criticidade=values.criticidade;row.dataset.prioridade=values.criticidade;row.dataset.responsavel=values.responsavel;row.dataset.cliente=values.cliente;row.dataset.projeto=values.projeto;row.dataset.prazo=values.prazo;row.dataset.descricao=values.descricao;row.dataset.ativo='true';row.classList.remove('is-inactive');
      const title=row.querySelector('.os-name'); if(title)title.textContent=values.title;
      const id=row.dataset.osId;
      const statusEl=row.querySelector('.status'); if(statusEl)setStatusBadge(statusEl,values.status);
      const prio=row.querySelector('.priority'); if(prio)setPriorityBadge(prio,values.criticidade);
      const action=row.querySelector('[data-os-inactivate]');if(action){action.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v10"/><path d="M6.2 5.5a8 8 0 1 0 11.6 0"/></svg><span>Inativar</span>';action.setAttribute('aria-label','Inativar '+id);action.title='Inativar ordem';}
      $$('.os-kanban-board [data-os-id="'+CSS.escape(id)+'"]').forEach(card=>{card.dataset.title=values.title;card.dataset.status=values.status;card.dataset.criticidade=values.criticidade;card.dataset.prioridade=values.criticidade;card.dataset.responsavel=values.responsavel;card.dataset.cliente=values.cliente;card.dataset.projeto=values.projeto;card.dataset.prazo=values.prazo;const strong=card.querySelector('strong');if(strong)strong.textContent=values.title;setStatusBadge(card.querySelector('.status'),values.status);setPriorityBadge(card.querySelector('.priority'),values.criticidade);});
      persistOSRow(row);
    }
    const persistedRows=safeJSON(osStorageKey,{});
    rows.forEach(row=>{
      const saved=persistedRows[row.dataset.osId];if(!saved)return;
      updateRow(row,{title:saved.title||row.dataset.title,status:saved.status||row.dataset.status,criticidade:saved.criticidade||row.dataset.criticidade,responsavel:saved.responsavel||row.dataset.responsavel,cliente:saved.cliente||row.dataset.cliente,projeto:saved.projeto||row.dataset.projeto,prazo:saved.prazo||row.dataset.prazo,descricao:saved.descricao||''});
      if(saved.ativo===false){
        row.dataset.ativo='false';row.dataset.previousStatus=saved.previousStatus||saved.status||'Em andamento';row.dataset.status='Inativa';row.classList.add('is-inactive');setStatusBadge(row.querySelector('.status'),'Inativa');
        const action=row.querySelector('[data-os-inactivate]');if(action){action.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg><span>Reativar</span>';action.setAttribute('aria-label','Reativar '+row.dataset.osId);action.title='Reativar ordem';}
        $$('.os-kanban-board [data-os-id="'+CSS.escape(row.dataset.osId)+'"]').forEach(card=>setStatusBadge(card.querySelector('.status'),'Inativa'));
        persistOSRow(row);
      }
    });

    $('#btn-open-os-filters')?.addEventListener('click',openDrawer); $('#btn-close-os-filters')?.addEventListener('click',closeDrawer);backdrop?.addEventListener('click',closeDrawer);
    $('#btn-apply-os-filters')?.addEventListener('click',()=>{currentPage=1;safeStore(stateKey,getState());renderRows();closeDrawer();toast('Filtros de O.S. aplicados.');});
    $('#btn-reset-os-filters')?.addEventListener('click',()=>{setState({statuses:[],priorities:[],responsible:'',client:'',project:'',from:'',to:'',critical:false,sla:false,mine:false,hideInactive:true});currentPage=1;if(q)q.value='';safeStore(stateKey,getState());renderRows();toast('Filtros limpos.');});
    q?.addEventListener('input',()=>{currentPage=1;renderRows();});
    const onOsPageClick=e=>{const b=e.target.closest('[data-os-page]');if(!b||b.disabled)return;currentPage=Number(b.dataset.osPage)||1;renderRows();};
    $('#os-pagination')?.addEventListener('click',onOsPageClick);$('#os-kanban-pagination')?.addEventListener('click',onOsPageClick);
    $$('[data-os-status],[data-os-priority],[data-os-toggle],#os-filter-responsavel,#os-filter-cliente,#os-filter-projeto,#os-date-from,#os-date-to').forEach(el=>el.addEventListener('change',()=>{updateFilterCount(getState());}));
    document.addEventListener('click',e=>{
      const detail=e.target.closest('[data-os-detail]'); if(detail){e.preventDefault(); const row=detail.closest('[data-os-row]')||rows.find(r=>r.dataset.osId===detail.dataset.osId);if(row)detailFor(row);return;}
      const inactive=e.target.closest('[data-os-inactivate]');if(inactive){e.preventDefault();const row=inactive.closest('[data-os-row]');if(!row)return;const willInactive=row.dataset.ativo!=='false';const statusEl=row.querySelector('.status');const old=row.dataset.status;if(willInactive){row.dataset.previousStatus=old;row.dataset.ativo='false';row.dataset.status='Inativa';row.classList.add('is-inactive');setStatusBadge(statusEl,'Inativa');inactive.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg><span>Reativar</span>';inactive.setAttribute('aria-label','Reativar '+row.dataset.osId);inactive.title='Reativar ordem';pushAudit(row.dataset.osId,'Inativação','Ativa','Sim','Não');persistOSRow(row);toast('Ordem '+row.dataset.osId+' inativada.');}else{row.dataset.ativo='true';row.dataset.status=row.dataset.previousStatus||'Em andamento';row.classList.remove('is-inactive');setStatusBadge(statusEl,row.dataset.status);inactive.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v10"/><path d="M6.2 5.5a8 8 0 1 0 11.6 0"/></svg><span>Inativar</span>';inactive.setAttribute('aria-label','Inativar '+row.dataset.osId);inactive.title='Inativar ordem';pushAudit(row.dataset.osId,'Reativação','Ativa','Não','Sim');persistOSRow(row);toast('Ordem '+row.dataset.osId+' reativada.');}
        $$('.os-kanban-board [data-os-id="'+CSS.escape(row.dataset.osId)+'"]').forEach(card=>setStatusBadge(card.querySelector('.status'),row.dataset.status));currentPage=1;renderRows();return;}
      const preset=e.target.closest('[data-view-preset]');if(preset){const kind=preset.dataset.viewPreset;setState({statuses:kind==='progress'?['Em andamento']:kind==='waiting'?['Aguardando']:[],priorities:kind==='critical'?['Crítica']:[],responsible:'',client:'',project:'',from:'',to:'',critical:false,sla:false,mine:false,hideInactive:true});currentPage=1;renderRows();closeDrawer();safeStore(stateKey,getState());toast('Visualização "'+preset.textContent.trim()+'" aplicada.');return;}
      const custom=e.target.closest('[data-custom-view]');if(custom){const views=safeJSON('mockup-os-saved-views',[]);const item=views[Number(custom.dataset.customView)];if(item){setState(item.state);currentPage=1;renderRows();closeDrawer();toast('Visualização "'+item.name+'" aplicada.');}return;}
      if(e.target.closest('#btn-show-save-view')){$('#save-view-form').hidden=false;$('#save-view-name')?.focus();return;}
      if(e.target.closest('#btn-save-view')){const name=$('#save-view-name')?.value.trim();if(!name){toast('Digite um nome para salvar a visualização.');return;}const views=safeJSON('mockup-os-saved-views',[]);views.push({name,state:getState()});safeStore('mockup-os-saved-views',views);$('#save-view-name').value='';$('#save-view-form').hidden=true;renderSavedViews();toast('Visualização salva neste navegador.');return;}
    });
    function renderSavedViews(){const container=$('#saved-view-list');if(!container)return;$$('[data-custom-view]',container).forEach(x=>x.remove());const views=safeJSON('mockup-os-saved-views',[]);views.forEach((view,index)=>{const b=document.createElement('button');b.dataset.customView=String(index);b.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>'+escapeHTML(view.name);container.appendChild(b);});}
    const savedState=safeJSON(stateKey,null);if(savedState)setState(savedState);renderSavedViews();renderRows();
    $('#os-edit-form')?.addEventListener('submit',e=>{e.preventDefault();if(!currentDetailRow)return;const row=currentDetailRow;const vals={title:$('#os-edit-title').value.trim(),status:$('#os-edit-status').value,criticidade:$('#os-edit-priority').value,responsavel:$('#os-edit-responsavel').value,cliente:$('#os-edit-cliente').value,projeto:$('#os-edit-projeto').value,prazo:$('#os-edit-prazo').value,descricao:$('#os-edit-description').value.trim()};const changes=[['title','Título',row.dataset.title,vals.title,'Atualização'],['status','Status',row.dataset.ativo==='false'?(row.dataset.previousStatus||row.dataset.status):row.dataset.status,vals.status,'Status'],['criticidade','Criticidade',row.dataset.criticidade,vals.criticidade,'Criticidade'],['responsavel','Responsável',row.dataset.responsavel,vals.responsavel,'Atualização'],['cliente','Cliente',row.dataset.cliente,vals.cliente,'Atualização'],['projeto','Projeto',row.dataset.projeto,vals.projeto,'Atualização'],['prazo','Prazo / SLA',row.dataset.prazo,vals.prazo,'Atualização'],['descricao','Descrição',row.dataset.descricao||'',vals.descricao,'Atualização']];changes.forEach(([k,field,before,after,action])=>{if(String(before??'')!==String(after??''))pushAudit(row.dataset.osId,action,field,before||'—',after||'—');});updateRow(row,vals);closeModal($('#modal-os-detalhes'));currentPage=1;renderRows();toast('Alterações da '+row.dataset.osId+' salvas com sucesso.');});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();});
  }
  function renderAuditTimeline(osId) {
    const entries=getAuditEntries().filter(entry=>entry.osId===osId).sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp));
    const summary=$('#audit-modal-summary'); const timeline=$('#audit-modal-timeline');
    if(summary)summary.innerHTML=`<span class="os-id-pill">${escapeHTML(osId)}</span><span class="muted small">${entries.length} evento(s) registrados</span>`;
    if(!timeline)return;
    if(!entries.length){timeline.innerHTML='<div class="empty-results"><strong>Sem alterações registradas</strong><span>Novas ações realizadas no protótipo aparecerão aqui.</span></div>';return;}
    timeline.innerHTML=entries.map(entry=>`<div class="audit-timeline-item"><time class="audit-time">${escapeHTML(formatAuditDate(entry.timestamp))}</time><span class="audit-line"><i></i></span><div class="audit-description"><strong>${escapeHTML(entry.action)} · ${escapeHTML(entry.field)}</strong><p>Campo alterado por ${escapeHTML(entry.actor||'Mariana Costa')}.</p><div class="audit-values"><span>Antes: ${escapeHTML(entry.before||'—')}</span><b>→</b><span>Depois: ${escapeHTML(entry.after||'—')}</span></div><small>Ordem: ${escapeHTML(entry.osId)}</small></div></div>`).join('');
  }
  function initAuditPage() {
    if(current!=='auditoria')return;
    const tbody=$('#audit-table-body'); if(!tbody)return;
    const pageSize=5;let page=1;const search=$('#audit-search'),type=$('#audit-type-filter');const queryOS=new URLSearchParams(location.search).get('os');
    if(queryOS){if($('#audit-page-description'))$('#audit-page-description').textContent='Histórico de alterações filtrado para '+queryOS+'.';const note=$('#audit-filter-note');if(note){note.hidden=false;note.innerHTML='Exibindo somente eventos da ordem <strong>'+escapeHTML(queryOS)+'</strong>. <button class="btn btn-quiet btn-sm" id="audit-remove-os-filter">Remover filtro da O.S.</button>';}}
    function allEntries(){return getAuditEntries().sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp));}
    function filteredEntries(){const q=(search?.value||'').trim().toLowerCase();return allEntries().filter(entry=>{if(queryOS && entry.osId!==queryOS)return false;if(type?.value && entry.action!==type.value)return false;return !q||(entry.osId+' '+entry.action+' '+entry.field+' '+entry.before+' '+entry.after+' '+entry.actor).toLowerCase().includes(q);});}
    function render(){const entries=filteredEntries();const pageCount=Math.max(1,Math.ceil(entries.length/pageSize));page=Math.min(page,pageCount);const start=(page-1)*pageSize;const view=entries.slice(start,start+pageSize);tbody.innerHTML=view.map(entry=>`<tr data-audit-detail="${escapeHTML(entry.osId)}"><td><button class="audit-os-link" type="button" data-audit-detail="${escapeHTML(entry.osId)}">${escapeHTML(entry.osId)}</button></td><td><span class="muted small">${escapeHTML(formatAuditDate(entry.timestamp))}</span></td><td><span class="audit-event">${escapeHTML(entry.action)}</span></td><td><span class="audit-field-chip">${escapeHTML(entry.field)}</span></td><td><span class="audit-old-value">${escapeHTML(entry.before||'—')}</span></td><td><span class="audit-new-value">${escapeHTML(entry.after||'—')}</span></td><td><span class="audit-user"><span class="avatar avatar-purple">${escapeHTML(initials(entry.actor))}</span>${escapeHTML(entry.actor||'Mariana Costa')}</span></td><td><button class="audit-open-btn" type="button" data-audit-detail="${escapeHTML(entry.osId)}" aria-label="Abrir histórico"><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/></svg></button></td></tr>`).join('');
      $('#audit-empty').hidden=entries.length>0;$('#audit-page-summary').textContent=entries.length?`Mostrando ${start+1}–${Math.min(start+pageSize,entries.length)} de ${entries.length} eventos`:'Mostrando 0 de 0 eventos';
      const pg=$('#audit-pagination');let ph=`<button data-audit-page="${Math.max(1,page-1)}" ${page===1?'disabled':''} aria-label="Página anterior">‹</button>`;for(let i=1;i<=pageCount;i++){if(pageCount>7&&i>2&&i<pageCount-1&&Math.abs(i-page)>1){if(i===3||i===pageCount-2)ph+='<span>…</span>';continue;}ph+=`<button class="${i===page?'current':''}" data-audit-page="${i}" ${i===page?'aria-current="page"':''}>${i}</button>`;}ph+=`<button data-audit-page="${Math.min(pageCount,page+1)}" ${page===pageCount?'disabled':''} aria-label="Próxima página">›</button>`;pg.innerHTML=ph;
      const all=allEntries();$('#audit-total-count').textContent=String(all.length);$('#audit-os-count').textContent=String(new Set(all.map(x=>x.osId)).size);$('#audit-today-count').textContent=String(all.filter(x=>new Date(x.timestamp).toDateString()===new Date().toDateString()).length);const latest=all[0];if(latest)$('.audit-last-time').textContent=new Date(latest.timestamp).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
    }
    search?.addEventListener('input',()=>{page=1;render();});type?.addEventListener('change',()=>{page=1;render();});$('#audit-clear-filter')?.addEventListener('click',()=>{if(search)search.value='';if(type)type.value='';page=1;render();toast('Pesquisa e filtros da auditoria limpos.');});$('#audit-pagination')?.addEventListener('click',e=>{const b=e.target.closest('[data-audit-page]');if(!b||b.disabled)return;page=Number(b.dataset.auditPage)||1;render();});
    $('#audit-filter-note')?.addEventListener('click',e=>{if(e.target.closest('#audit-remove-os-filter'))location.href='auditoria.html';});
    document.addEventListener('click',e=>{const hit=e.target.closest('[data-audit-detail]');if(!hit)return;const osId=hit.dataset.auditDetail||hit.closest('[data-audit-detail]')?.dataset.auditDetail;if(!osId)return;$('#audit-modal-title').textContent='Histórico de '+osId;renderAuditTimeline(osId);openModal('modal-historico-os');});
    render();
  }
  function initDirectEntityEditing() {
    if(current==='clientes'){
      let activeRow=null;
      document.addEventListener('click',e=>{const trigger=e.target.closest('[data-client-detail]');if(!trigger)return;e.preventDefault();activeRow=trigger.closest('tr');if(!activeRow)return;$('#client-edit-name').value=activeRow.dataset.clientName||activeRow.querySelector('.primary-cell')?.textContent.trim()||'';$('#client-edit-document').value=activeRow.dataset.clientDocument||activeRow.querySelector('.sub-cell')?.textContent.replace('CNPJ ','')||'';$('#client-edit-city').value=activeRow.dataset.clientCity||activeRow.children[1]?.textContent.trim()||'';$('#client-edit-status').value=activeRow.dataset.status||'Ativo';$('#client-edit-contact').value=activeRow.dataset.clientContact||'';$('#client-detail-title').textContent=$('#client-edit-name').value;const canEdit=document.body.dataset.role==='gestor';$('#client-edit-form')?.querySelectorAll('input,select,textarea').forEach(field=>field.disabled=!canEdit);const save=$('#client-edit-form [type=submit]');if(save)save.hidden=!canEdit;openModal('modal-cliente-detalhes');});
      $('#client-edit-form')?.addEventListener('submit',e=>{e.preventDefault();if(!activeRow)return;const name=$('#client-edit-name').value.trim(),doc=$('#client-edit-document').value.trim(),city=$('#client-edit-city').value.trim(),status=$('#client-edit-status').value;const title=activeRow.querySelector('.primary-cell');if(title)title.textContent=name;const sub=activeRow.querySelector('.sub-cell');if(sub)sub.textContent=doc?'CNPJ '+doc:'Documento não informado';if(activeRow.children[1])activeRow.children[1].textContent=city;activeRow.dataset.clientName=name;activeRow.dataset.clientDocument=doc;activeRow.dataset.clientCity=city;activeRow.dataset.status=status;setStatusBadge(activeRow.querySelector('.status'),status);$('#client-detail-title').textContent=name;closeModal($('#modal-cliente-detalhes'));toast('Cadastro de '+name+' atualizado.');});
    }
    if(current==='projetos'){
      let activeCard=null;
      document.addEventListener('click',e=>{const trigger=e.target.closest('[data-project-detail]');if(!trigger)return;e.preventDefault();activeCard=trigger.closest('.project-card');if(!activeCard)return;$('#project-edit-code').value=activeCard.dataset.projectCode||'';$('#project-edit-name').value=activeCard.dataset.projectName||activeCard.querySelector('h3')?.textContent.trim()||'';$('#project-edit-client').value=activeCard.dataset.projectClient||'';$('#project-edit-status').value=activeCard.dataset.status||'Em andamento';$('#project-edit-owner').value=activeCard.dataset.projectOwner||'André Lima';$('#project-edit-progress').value=activeCard.dataset.projectProgress||0;$('#project-detail-title').textContent=$('#project-edit-name').value;const canEdit=document.body.dataset.role==='gestor';$('#project-edit-form')?.querySelectorAll('input,select,textarea').forEach(field=>field.disabled=!canEdit);const save=$('#project-edit-form [type=submit]');if(save)save.hidden=!canEdit;openModal('modal-projeto-detalhes');});
      $('#project-edit-form')?.addEventListener('submit',e=>{e.preventDefault();if(!activeCard)return;const code=$('#project-edit-code').value,name=$('#project-edit-name').value.trim(),client=$('#project-edit-client').value,status=$('#project-edit-status').value,owner=$('#project-edit-owner').value,progress=Math.max(0,Math.min(100,Number($('#project-edit-progress').value)||0));activeCard.dataset.projectCode=code;activeCard.dataset.projectName=name;activeCard.dataset.projectClient=client;activeCard.dataset.status=status;activeCard.dataset.projectOwner=owner;activeCard.dataset.projectProgress=String(progress);const h=activeCard.querySelector('h3');if(h)h.innerHTML=`<button class="project-title-button" type="button" data-project-detail>${escapeHTML(name)}</button>`;const clientEl=activeCard.querySelector('.project-client');if(clientEl)clientEl.innerHTML='♙ '+escapeHTML(client);const statusEl=activeCard.querySelector('.project-status-row .status');setStatusBadge(statusEl,status);const pct=activeCard.querySelector('.project-status-row .muted');if(pct)pct.textContent=progress+'%';const bar=activeCard.querySelector('.progress-track span');if(bar)bar.style.width=progress+'%';const ownerEl=activeCard.querySelector('.project-card-footer span:nth-child(2)');if(ownerEl)ownerEl.textContent=owner;const avatar=activeCard.querySelector('.project-card-footer .avatar');if(avatar)avatar.textContent=initials(owner);closeModal($('#modal-projeto-detalhes'));toast('Projeto '+name+' atualizado.');});
    }
  }

  function queryModal(){const id=new URLSearchParams(location.search).get('modal');if(id)openModal(id.startsWith('modal-')?id:'modal-'+id);}
  function init(){if(safeGet('mockup-theme','light')==='dark')document.body.classList.add('dark-mode');renderShell();decorateActionButtons();bindGlobal();charts();initOSPage();initAuditPage();initDirectEntityEditing();queryModal();$$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());}
  document.addEventListener('DOMContentLoaded',init);
})();
