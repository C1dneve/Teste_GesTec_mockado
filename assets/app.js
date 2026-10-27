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
        <div class="sidebar-bottom"><div class="help-card"><div class="help-icon">${icon('circle-help',18)}</div><strong>Precisa de ajuda?</strong><p>Explore as funcionalidades do sistema.</p><button class="btn btn-sm btn-outline-light" data-modal-open="modal-ajuda">Central de ajuda ${icon('arrow-up-right',14)}</button></div><div class="user-mini"><div class="avatar avatar-purple">MC</div><div class="user-info"><strong>Mariana Costa</strong><small>Administradora</small></div><button class="icon-btn sidebar-more" data-modal-open="modal-perfil" aria-label="Menu do perfil">${icon('more-horizontal',18)}</button></div></div>`;
    }
    if (topbar) {
      const title = document.querySelector('[data-title]')?.dataset.title || ({dashboard:'Visão geral',ordens:'Ordens de serviço',detalhe:'Detalhes da ordem de serviço',clientes:'Clientes',projetos:'Projetos',funcionarios:'Funcionários',departamentos:'Departamentos',equipes:'Equipes',relatorios:'Relatórios',modais:'Galeria de modais'}[current] || 'GesTec');
      topbar.innerHTML = `<div class="topbar-left"><button class="icon-btn mobile-menu" data-sidebar-toggle aria-label="Abrir menu">${icon('menu')}</button><div class="breadcrumbs"><a href="dashboard.html">Início</a><span>/</span><strong>${title}</strong></div></div><div class="topbar-right"><label class="global-search">${icon('search',17)}<input type="search" placeholder="Buscar em todo o sistema..." data-global-search><kbd>⌘ K</kbd></label><button class="icon-btn theme-toggle" data-theme-toggle aria-label="Alternar tema">${icon('moon',18)}</button><button class="icon-btn notification-btn" data-modal-open="modal-notificacoes" aria-label="Notificações">${icon('bell',19)}<i></i></button><div class="topbar-divider"></div><button class="profile-trigger" data-modal-open="modal-perfil"><span class="avatar avatar-purple">MC</span><span class="profile-meta"><strong>Mariana Costa</strong><small>Administradora</small></span>${icon('chevron-down',14)}</button></div>`;
    }
  }
  function toast(message) {
    let stack = $('#toast-stack');
    if (!stack) { stack = document.createElement('div'); stack.id = 'toast-stack'; stack.className = 'toast-stack'; document.body.appendChild(stack); }
    const item = document.createElement('div'); item.className = 'toast'; item.innerHTML = `<span class="toast-check">${icon('check',16)}</span><span>${message || 'Ação simulada com sucesso.'}</span><button aria-label="Fechar">${icon('x',14)}</button>`;
    stack.appendChild(item); item.querySelector('button').addEventListener('click', () => item.remove()); setTimeout(() => item.remove(), 3600);
  }
  function openModal(id) { const modal = document.getElementById(id); if (!modal) { toast('Esta ação é demonstrativa neste protótipo.'); return; } modal.style.zIndex = String(90 + $$('.modal-overlay.is-open').length + 1); modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); const first = modal.querySelector('input,select,textarea,button'); if(first) setTimeout(()=>first.focus(),80); }
  function closeModal(modal) { if (!modal) return; modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); if (!$('.modal-overlay.is-open')) document.body.classList.remove('modal-open'); }
  function bindGlobal() {
    document.addEventListener('click', e => {
      const open = e.target.closest('[data-modal-open]'); if(open){ e.preventDefault(); openModal(open.dataset.modalOpen); return; }
      const close = e.target.closest('[data-modal-close]'); if(close){ closeModal(close.closest('.modal-overlay')); return; }
      const backdrop = e.target.classList.contains('modal-overlay') ? e.target : null; if(backdrop) { closeModal(backdrop); return; }
      const toastEl = e.target.closest('[data-toast]'); if(toastEl){e.preventDefault();toast(toastEl.dataset.toast);return;}
      const theme = e.target.closest('[data-theme-toggle]'); if(theme){document.body.classList.toggle('dark-mode');localStorage.setItem('mockup-theme',document.body.classList.contains('dark-mode')?'dark':'light');theme.innerHTML=icon(document.body.classList.contains('dark-mode')?'sun':'moon');return;}
      const side = e.target.closest('[data-sidebar-toggle]'); if(side){$('.sidebar')?.classList.toggle('mobile-open');return;}
      const tab = e.target.closest('[data-tab]'); if(tab){const group=tab.closest('[data-tabs-group]')||tab.parentElement.parentElement;$$('[data-tab]',group).forEach(x=>x.classList.toggle('active',x===tab));const name=tab.dataset.tab;const scope=tab.closest('[data-tab-scope]')||document;$$('[data-tab-panel]',scope).forEach(panel=>panel.hidden=panel.dataset.tabPanel!==name);return;}
      const toggle = e.target.closest('[data-view-toggle]'); if(toggle){const view=toggle.dataset.viewToggle;$$('[data-view-panel]').forEach(x=>x.hidden=x.dataset.viewPanel!==view);$$('[data-view-toggle]').forEach(x=>x.classList.toggle('active',x===toggle));return;}
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
  function queryModal(){const id=new URLSearchParams(location.search).get('modal');if(id)openModal(id.startsWith('modal-')?id:'modal-'+id);}
  function init(){if(localStorage.getItem('mockup-theme')==='dark')document.body.classList.add('dark-mode');renderShell();bindGlobal();charts();queryModal();$$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());}
  document.addEventListener('DOMContentLoaded',init);
})();
