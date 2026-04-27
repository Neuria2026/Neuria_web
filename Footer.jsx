
function Footer({ setPage, lang }) {
  const t = window.i18n[lang].footer;
  const go = (id) => { setPage(id); window.scrollTo(0,0); };

  return (
    <footer style={{background:'#080910',borderTop:'1px solid #1E2235',padding:'64px 0 36px'}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:56,marginBottom:48}} className="footer-grid">
          {/* Brand */}
          <div>
            <div onClick={() => go('home')} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',marginBottom:16}}>
              <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="5" height="24" rx="2.5" fill="#4F6EF7"/>
                <path d="M9 8 L20 32" stroke="#4F6EF7" strokeWidth="5" strokeLinecap="round"/>
                <rect x="20" y="8" width="5" height="24" rx="2.5" fill="#4F6EF7"/>
                <circle cx="14.5" cy="20" r="3" fill="#00D4AA"/>
              </svg>
              <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF',letterSpacing:'-0.03em'}}>neuria</span>
            </div>
            <p style={{fontSize:14,color:'#7A80A0',lineHeight:1.75,maxWidth:300}}>{t.tagline}</p>
            <div style={{display:'flex',gap:12,marginTop:20}}>
              {['linkedin','twitter','instagram'].map(sn => (
                <a key={sn} href="#" style={{
                  width:34,height:34,borderRadius:8,background:'#10131C',border:'1px solid #252836',
                  display:'flex',alignItems:'center',justifyContent:'center',color:'#7A80A0',
                  transition:'all 200ms'
                }}>
                  {sn === 'linkedin' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>}
                  {sn === 'twitter' && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>}
                  {sn === 'instagram' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{fontSize:13,fontWeight:600,color:'#F0F2FF',marginBottom:16,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{t.nav_title}</h4>
            <div style={{display:'flex',flexDirection:'column',gap:11}}>
              {['home','services','about','cases','blog','contact'].map(id => (
                <button key={id} onClick={() => go(id)} style={{
                  background:'none',border:'none',cursor:'pointer',textAlign:'left',
                  fontSize:14,color:'#7A80A0',fontFamily:"'DM Sans',sans-serif",
                  padding:0,transition:'color 200ms'
                }}>{window.i18n[lang].nav[id]}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{fontSize:13,fontWeight:600,color:'#F0F2FF',marginBottom:16,fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{t.contact_title}</h4>
            {[
              { icon: '✉', text: 'hola@neuria.io' },
              { icon: '📞', text: '+34 900 123 456' },
              { icon: '📍', text: 'Barcelona, España' }
            ].map((c, i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:10,fontSize:14,color:'#7A80A0',marginBottom:12}}>
                <div style={{width:30,height:30,borderRadius:8,background:'#10131C',border:'1px solid #252836',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12}}>
                  {c.icon}
                </div>
                {c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:28,borderTop:'1px solid #1E2235',fontSize:13,color:'#4A5070',flexWrap:'wrap',gap:12}}>
          <span>© {new Date().getFullYear()} Neuria. {t.rights}</span>
          <div style={{display:'flex',gap:20}}>
            {[t.legal, t.privacy, t.cookies].map(l => (
              <a key={l} href="#" style={{color:'#4A5070',transition:'color 200ms'}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
