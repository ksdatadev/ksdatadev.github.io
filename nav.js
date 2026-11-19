// Site navigation. Styles live in /assets/site.css (.site-nav).
(function () {
  const links = [
    { href: '/blog', label: 'Writing' },
    { href: '/tools', label: 'Tools' },
    { href: '/faith', label: 'Faith & Reflection' },
  ];

  const path = window.location.pathname;
  const isActive = (href) => path.startsWith(href);

  const mark = `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <path d="M3 22 L29 22" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="16" cy="15" r="5.5" fill="#b8792f"/>
    </svg>`;

  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Primary');
  nav.innerHTML = `
    <a href="/" class="site-name">${mark}<span>Technology in Context</span></a>
    <ul>
      ${links.map(l => `<li><a href="${l.href}"${isActive(l.href) ? ' class="active" aria-current="page"' : ''}>${l.label}</a></li>`).join('')}
    </ul>
  `;

  document.body.insertBefore(nav, document.body.firstChild);
})();
