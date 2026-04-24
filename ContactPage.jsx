
function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', company:'', phone:'', email:'', sector:'', message:'' });

  const sectors = ['Clínica dental','Centro de estética','Gimnasio / Fitness','Peluquería / Salón','Consulta médica','Taller / Servicio técnico','Otro'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section style={{padding:'160px 0 80px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,110,247,0.1), transparent 55%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(0,212,170,0.06), transparent 55%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:80,alignItems:'start'}} className="two-col">
            {/* Left */}
            <div style={{paddingTop:8}}>
              <div className="section-label">Contacto</div>
              <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(38px,4.5vw,56px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.08,color:'#F0F2FF',marginBottom:22}}>
                Hablemos sobre<br/>
                <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>tu negocio</span>
              </h1>
              <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.75,marginBottom:36}}>
                Una demo gratuita de 30 minutos para entender tu situación y mostrarte qué puede cambiar con Neuria.
              </p>

              <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:40}}>
                {[
                  {check:'Sin compromiso de compra', sub:'La demo es 100% gratuita y sin ninguna presión'},
                  {check:'Vemos tu caso en concreto', sub:'No es una presentación genérica — analizamos tu negocio'},
                  {check:'Propuesta clara en 48h', sub:'Si hay encaje, te enviamos una propuesta detallada y con precio fijo'},
                ].map((r,i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12}}>
                    <div style={{width:22,height:22,borderRadius:6,background:'rgba(0,212,170,0.1)',border:'1px solid rgba(0,212,170,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:2,fontSize:12,color:'#00D4AA'}}>✓</div>
                    <div>
                      <div style={{fontSize:15,fontWeight:600,color:'#F0F2FF'}}>{r.check}</div>
                      <div style={{fontSize:13,color:'#7A80A0',marginTop:2}}>{r.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {[
                  {icon:'✉', text:'hola@neuria.io'},
                  {icon:'📞', text:'+34 900 123 456'},
                  {icon:'📍', text:'Barcelona, España'},
                ].map((c,i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:10,fontSize:14,color:'#7A80A0'}}>
                    <div style={{width:32,height:32,borderRadius:8,background:'#10131C',border:'1px solid #252A3F',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>{c.icon}</div>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:24,padding:36,boxShadow:'0 0 80px rgba(79,110,247,0.1), 0 32px 80px rgba(0,0,0,0.4)'}}>
              {submitted ? (
                <div style={{textAlign:'center',padding:'48px 24px'}}>
                  <div style={{width:72,height:72,borderRadius:'50%',background:'rgba(0,212,170,0.1)',border:'1px solid rgba(0,212,170,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px',fontSize:32}}>✓</div>
                  <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:24,fontWeight:800,color:'#F0F2FF',marginBottom:12,letterSpacing:'-0.02em'}}>¡Mensaje enviado!</h2>
                  <p style={{fontSize:15,color:'#7A80A0',lineHeight:1.75}}>Te contactaremos en menos de 24 horas para agendar tu demo gratuita. ¡Hasta pronto!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:22,fontWeight:800,color:'#F0F2FF',marginBottom:6,letterSpacing:'-0.02em'}}>Pide tu demo gratuita</div>
                  <div style={{fontSize:14,color:'#7A80A0',marginBottom:28}}>Nos ponemos en contacto contigo en menos de 24h.</div>

                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                    {[
                      {label:'Nombre', key:'name', type:'text', placeholder:'Tu nombre', full:false},
                      {label:'Empresa', key:'company', type:'text', placeholder:'Nombre de tu negocio', full:false},
                    ].map(f => (
                      <div key={f.key} style={{display:'flex',flexDirection:'column',gap:7,marginBottom:14}}>
                        <label style={{fontSize:13,fontWeight:500,color:'#BEC4E0'}}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} required value={form[f.key]} onChange={e => setForm(v=>({...v,[f.key]:e.target.value}))} style={{background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#F0F2FF',outline:'none',width:'100%',transition:'border-color 200ms',boxSizing:'border-box'}}/>
                      </div>
                    ))}
                  </div>

                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                    {[
                      {label:'Teléfono', key:'phone', type:'tel', placeholder:'+34 600 000 000'},
                      {label:'Email', key:'email', type:'email', placeholder:'tu@email.com'},
                    ].map(f => (
                      <div key={f.key} style={{display:'flex',flexDirection:'column',gap:7,marginBottom:14}}>
                        <label style={{fontSize:13,fontWeight:500,color:'#BEC4E0'}}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} required value={form[f.key]} onChange={e => setForm(v=>({...v,[f.key]:e.target.value}))} style={{background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#F0F2FF',outline:'none',width:'100%',transition:'border-color 200ms',boxSizing:'border-box'}}/>
                      </div>
                    ))}
                  </div>

                  <div style={{display:'flex',flexDirection:'column',gap:7,marginBottom:14}}>
                    <label style={{fontSize:13,fontWeight:500,color:'#BEC4E0'}}>Sector</label>
                    <select value={form.sector} onChange={e => setForm(v=>({...v,sector:e.target.value}))} style={{background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color: form.sector ? '#F0F2FF' : '#4A5070',outline:'none',width:'100%',appearance:'none',cursor:'pointer'}}>
                      <option value="">Selecciona tu sector...</option>
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div style={{display:'flex',flexDirection:'column',gap:7,marginBottom:14}}>
                    <label style={{fontSize:13,fontWeight:500,color:'#BEC4E0'}}>¿Qué problema quieres resolver? <span style={{color:'#4A5070'}}>(opcional)</span></label>
                    <textarea placeholder="Cuéntanos brevemente tu situación actual..." value={form.message} onChange={e => setForm(v=>({...v,message:e.target.value}))} style={{background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#F0F2FF',outline:'none',width:'100%',resize:'none',height:88}}/>
                  </div>

                  <button type="submit" style={{width:'100%',padding:16,fontSize:16,fontWeight:700,background:'#4F6EF7',border:'none',borderRadius:14,cursor:'pointer',color:'#fff',fontFamily:"'DM Sans',sans-serif",marginTop:6,letterSpacing:'-0.01em',transition:'all 220ms'}}>
                    Solicitar demo gratuita →
                  </button>

                  <div style={{display:'flex',alignItems:'center',gap:12,margin:'18px 0'}}>
                    <div style={{flex:1,height:1,background:'#1E2235'}}/>
                    <span style={{fontSize:12,color:'#4A5070',whiteSpace:'nowrap'}}>o contacta directamente</span>
                    <div style={{flex:1,height:1,background:'#1E2235'}}/>
                  </div>

                  <button type="button" style={{width:'100%',padding:'14px 20px',borderRadius:14,background:'rgba(37,211,102,0.08)',border:'1px solid rgba(37,211,102,0.2)',color:'#25D366',fontWeight:600,fontSize:15,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:10,transition:'all 200ms',fontFamily:"'DM Sans',sans-serif"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Escríbenos por WhatsApp
                  </button>

                  <p style={{fontSize:12,color:'#4A5070',textAlign:'center',marginTop:14,lineHeight:1.6}}>Al enviar aceptas nuestra <a href="#" style={{color:'#7B96FF'}}>política de privacidad</a>. Sin spam, nunca.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ContactPage });
