
function Nav({ page, setPage, lang, setLang, darkMode, setDarkMode, goToContact }) {
  const t = window.i18n[lang].nav;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: t.home },
    { id: 'services', label: t.services },
    { id: 'about', label: t.about },
    { id: 'cases', label: t.cases },
    { id: 'blog', label: t.blog },
    { id: 'contact', label: t.contact },
  ];

  const go = (id) => { setPage(id); setMenuOpen(false); window.scrollTo(0,0); };
  const gotoForm = goToContact || (() => gotoForm());

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:200,
      height:66, padding:'0 5%',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background: scrolled ? 'rgba(10,13,28,0.88)' : 'rgba(10,14,32,0.55)',
      backdropFilter:'blur(24px) saturate(1.8) brightness(0.85)',
      borderBottom:'1px solid rgba(100,130,255,0.12)',
      transition:'background 300ms'
    }}>
      {/* Logo */}
      <div onClick={() => go('home')} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer'}}>
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="8" width="5" height="24" rx="2.5" fill="#4F6EF7"/>
          <path d="M9 8 L20 32" stroke="#4F6EF7" strokeWidth="5" strokeLinecap="round"/>
          <rect x="20" y="8" width="5" height="24" rx="2.5" fill="#4F6EF7"/>
          <circle cx="14.5" cy="20" r="3" fill="#00D4AA"/>
        </svg>
        <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF',letterSpacing:'-0.03em'}}>NeuriaN</span>
      </div>

      {/* Desktop links */}
      <ul style={{display:'flex',gap:28,listStyle:'none',margin:0,padding:0}} className="nav-links-desktop">
        {links.map(l => (
          <li key={l.id}>
            <button onClick={() => go(l.id)} style={{
              background:'none',border:'none',cursor:'pointer',
              fontSize:14,fontWeight:500,fontFamily:"'DM Sans',sans-serif",
              color: page === l.id ? '#F0F2FF' : '#7A80A0',
              transition:'color 200ms',padding:'4px 0',
              borderBottom: page === l.id ? '1px solid #4F6EF7' : '1px solid transparent'
            }}>{l.label}</button>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        {/* Lang picker */}
        <div style={{position:'relative'}}>
          <button onClick={() => setLangOpen(v=>!v)} style={{
            background:'rgba(255,255,255,0.05)',border:'1px solid #252836',
            borderRadius:8,padding:'6px 10px',cursor:'pointer',
            fontSize:12,fontWeight:600,color:'#7A80A0',fontFamily:"'DM Sans',sans-serif",
            display:'flex',alignItems:'center',gap:6
          }}>
            {lang.toUpperCase()}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          {langOpen && (
            <div style={{
              position:'absolute',top:'calc(100% + 8px)',right:0,
              background:'#10131C',border:'1px solid #252836',borderRadius:12,
              overflow:'hidden',minWidth:110,zIndex:300,
              boxShadow:'0 12px 40px rgba(0,0,0,0.5)'
            }}>
              {['es','ca','en'].map(l => (
                <button key={l} onClick={() => { setLang(l); setLangOpen(false); }} style={{
                  display:'block',width:'100%',padding:'10px 16px',
                  background: lang===l ? 'rgba(79,110,247,0.1)' : 'none',
                  border:'none',cursor:'pointer',textAlign:'left',
                  fontSize:13,fontWeight:500,color: lang===l ? '#7B96FF' : '#BEC4E0',
                  fontFamily:"'DM Sans',sans-serif"
                }}>{window.i18n[lang].lang[l]}</button>
              ))}
            </div>
          )}
        </div>

        {/* Dark mode toggle */}
        <button onClick={() => setDarkMode(v=>!v)} style={{
          background:'rgba(255,255,255,0.05)',border:'1px solid #252836',
          borderRadius:8,padding:'6px 8px',cursor:'pointer',
          display:'flex',alignItems:'center',color:'#7A80A0'
        }}>
          {darkMode
            ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          }
        </button>

        <button onClick={() => gotoForm()} style={{
          background:'none',border:'1px solid #252836',borderRadius:999,
          padding:'8px 18px',cursor:'pointer',fontSize:13,fontWeight:500,
          color:'#BEC4E0',fontFamily:"'DM Sans',sans-serif",transition:'all 200ms'
        }} className="btn-ghost-nav">{t.more}</button>

        <button onClick={() => gotoForm()} style={{
          background:'#4F6EF7',border:'none',borderRadius:999,
          padding:'9px 20px',cursor:'pointer',fontSize:13,fontWeight:600,
          color:'#fff',fontFamily:"'DM Sans',sans-serif",transition:'all 220ms',
          boxShadow:'0 0 0 0 rgba(79,110,247,0.4), 0 2px 8px rgba(79,110,247,0.3)'
        }}>{t.demo} →</button>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(v=>!v)} className="nav-hamburger" style={{
          background:'none',border:'1px solid #252836',borderRadius:8,
          padding:'6px 8px',cursor:'pointer',color:'#7A80A0',display:'none'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:'absolute',top:66,left:0,right:0,
          background:'rgba(8,9,16,0.97)',backdropFilter:'blur(20px)',
          borderBottom:'1px solid #252836',padding:'16px 5% 24px',
          display:'flex',flexDirection:'column',gap:4
        }}>
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{
              background: page===l.id ? 'rgba(79,110,247,0.1)' : 'none',
              border:'none',borderRadius:10,padding:'12px 16px',cursor:'pointer',
              textAlign:'left',fontSize:15,fontWeight:500,
              color: page===l.id ? '#7B96FF' : '#BEC4E0',
              fontFamily:"'DM Sans',sans-serif"
            }}>{l.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { Nav });
