(function () {
  const links = [
    { href: '/blog', label: 'Writing' },
    { href: '/tools', label: 'Tools' },
  ];

  const path = window.location.pathname;

  function isActive(href) {
    if (href === '/') return path === '/';
    return path.startsWith(href);
  }

  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="/" class="nav-name">Jakub Szczybura</a>
    <ul class="nav-links">
      ${links.map(l => `
        <li><a href="${l.href}" ${isActive(l.href) ? 'class="active"' : ''}>${l.label}</a></li>
      `).join('')}
    </ul>
  `;

  const style = document.createElement('style');
  style.textContent = `
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5rem;
      max-width: 660px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 1.5rem;
      padding-top: 4rem;
    }
    .nav-name {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 17px;
      color: var(--color-text);
      text-decoration: none;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }
    .nav-links a {
      font-size: 14px;
      color: var(--color-muted);
      text-decoration: none;
      transition: color 0.15s;
    }
    .nav-links a:hover { color: var(--color-text); }
    .nav-links a.active { color: var(--color-text); }
  `;

  document.head.appendChild(style);

  const body = document.body;
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(nav, container.firstChild);
  } else {
    body.insertBefore(nav, body.firstChild);
  }
})();
