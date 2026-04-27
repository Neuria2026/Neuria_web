
function ContactoPage() {
  const [form, setForm] = React.useState({ name:'', email:'', phone:'', company:'', sector:'', message:'' });
  const [sent, setSent] = React.useState(false);
  const [bookingStep, setBookingStep] = React.useState(0); // 0=none, 1=month, 2=day, 3=time, 4=confirm, 5=done
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [tab, setTab] = React.useState('form'); // 'form' | 'calendar'

  const update = (k, v) => setForm(f => ({...f, [k]: v}));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    // Send via mailto as fallback (replace with Formspree/Make in production)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nEmpresa: ${form.company}\nSector: ${form.sector}\n\nMensaje:\n${form.message}`
    );
    window.open(`mailto:info@neurian.es?subject=Demo NeuriaN - ${form.company || form.name}&body=${body}`, '_blank');
    setSent(true);
  };

  // Simulated calendar data
  const month = 'Mayo 2025';
  const days = [
    { d:5, available:true }, { d:6, available:true }, { d:7, available:false },
    { d:8, available:true }, { d:9, available:true }, { d:12, available:true },
    { d:13, available:false }, { d:14, available:true }, { d:15, available:true },
    { d:16, available:true }, { d:19, available:true }, { d:20, available:true },
    { d:21, available:false }, { d:22, available:true }, { d:23, available:true },
  ];
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '16:00', '16:30', '17:00', '17:30'];

  const sectors = ['Clínica dental','Centro de estética','Gimnasio / Fitness','Peluquería / Salón','Consulta médica','Taller / Servicios','Otro'];

  return (
    <div>
      {/* Hero */}
      <section style={{padding:'160px 0 80px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,110,247,0.1), transparent 55%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{margin:'0 auto 20px'}}>Contacto</div>
          <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(40px,5vw,64px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.06,color:'#F0F2FF',marginBottom:20,maxWidth:680,margin:'0 auto 20px'}}>
            Cuéntanos qué necesitas.<br/>
            <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Encontramos la solución.</span>
          </h1>
          <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.75,maxWidth:480,margin:'0 auto'}}>
            Una llamada de 30 minutos, sin compromiso, para ver si NeuriaN encaja con tu negocio.
          </p>
        </div>
      </section>

      <section id="contact-form" style={{padding:'60px 0 120px',background:'#0D0F18'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:64,alignItems:'start'}} className="two-col">
            {/* Left info */}
            <div>
              <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(24px,3vw,36px)',fontWeight:800,letterSpacing:'-0.03em',color:'#F0F2FF',marginBottom:16}}>¿Qué pasa después de que contactas?</h2>
              <p style={{fontSize:15,color:'#7A80A0',lineHeight:1.75,marginBottom:36}}>Sin presión de ventas, sin presentaciones interminables. Una conversación honesta.</p>

              {/* Mobile CTA note */}
              <div className="mobile-form-note" style={{display:'none',marginBottom:24,padding:'14px 18px',background:'rgba(79,110,247,0.08)',border:'1px solid rgba(79,110,247,0.2)',borderRadius:14}}>
                <div style={{fontSize:13,fontWeight:600,color:'#7B96FF',marginBottom:4}}>👇 Rellena el formulario más abajo</div>
                <div style={{fontSize:12,color:'#7A80A0',lineHeight:1.6}}>Cuéntanos sobre tu negocio y te respondemos en menos de 24h.</div>
              </div>

              {[
                { n:'01', title:'Análisis de tu situación', desc:'En la primera llamada, te hacemos las preguntas correctas para entender tus cuellos de botella y qué procesos pueden automatizarse.' },
                { n:'02', title:'Propuesta a medida', desc:'En 48h te enviamos una propuesta concreta con qué haríamos, cómo lo haríamos y cuánto costaría. Sin letra pequeña.' },
                { n:'03', title:'Implementación rápida', desc:'Si todo encaja, en menos de 48h tu sistema está funcionando. Sin interrumpir tu actividad diaria.' },
              ].map((s,i) => (
                <div key={i} style={{display:'flex',gap:16,marginBottom:24,padding:'20px 22px',background:'#10131C',border:'1px solid #252A3F',borderRadius:16}}>
                  <div style={{width:36,height:36,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:900,background:'rgba(79,110,247,0.12)',border:'1px solid rgba(79,110,247,0.3)',color:'#7B96FF'}}>{s.n}</div>
                  <div>
                    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:15,fontWeight:700,color:'#F0F2FF',marginBottom:6}}>{s.title}</div>
                    <p style={{fontSize:13,color:'#7A80A0',lineHeight:1.65}}>{s.desc}</p>
                  </div>
                </div>
              ))}

              {/* Contact info */}
              <div style={{marginTop:32,padding:'24px 26px',background:'#10131C',border:'1px solid #252A3F',borderRadius:20}}>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:15,fontWeight:700,color:'#F0F2FF',marginBottom:16}}>También puedes contactarnos directamente</div>
                {[
                  { icon:'✉', label:'Email', value:'info@neurian.es' },
                  { icon:'📞', label:'Teléfono', value:'+34 695 40 19 72' },
                  { icon:'💬', label:'WhatsApp', value:'+34 612 345 678' },
                ].map((c,i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:12,marginBottom: i<2 ? 12 : 0,fontSize:14,color:'#BEC4E0'}}>
                    <div style={{width:32,height:32,borderRadius:8,background:'#181C28',border:'1px solid #252A3F',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>{c.icon}</div>
                    <div>
                      <div style={{fontSize:11,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>{c.label}</div>
                      <div style={{fontSize:14,color:'#BEC4E0',fontWeight:500}}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form / Calendar */}
            <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:24,overflow:'hidden',boxShadow:'0 0 80px rgba(79,110,247,0.1), 0 32px 80px rgba(0,0,0,0.4)'}}>
              {/* Tab switcher */}
              <div style={{display:'flex',borderBottom:'1px solid #1E2235'}}>
                {[{id:'form',label:'Enviar mensaje'},{id:'calendar',label:'Agendar llamada'}].map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)} style={{
                    flex:1,padding:'18px',border:'none',cursor:'pointer',fontSize:14,fontWeight:600,
                    background: tab===t.id ? '#10131C' : '#181C28',
                    color: tab===t.id ? '#F0F2FF' : '#7A80A0',
                    fontFamily:"'DM Sans',sans-serif",
                    borderBottom: tab===t.id ? '2px solid #4F6EF7' : '2px solid transparent',
                    transition:'all 200ms'
                  }}>{t.label}</button>
                ))}
              </div>

              <div style={{padding:36}}>
                {tab === 'form' ? (
                  sent ? (
                    <div style={{textAlign:'center',padding:'40px 20px'}}>
                      <div style={{fontSize:48,marginBottom:20}}>✅</div>
                      <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:22,fontWeight:800,color:'#F0F2FF',marginBottom:12}}>¡Mensaje recibido!</h3>
                      <p style={{fontSize:15,color:'#7A80A0',lineHeight:1.75}}>Te contestaremos en menos de 24 horas. Si prefieres, también puedes agendar una llamada directamente.</p>
                      <button onClick={() => { setSent(false); setTab('calendar'); }} style={{marginTop:24,display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:14,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
                        Agendar llamada →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF',marginBottom:6}}>Cuéntanos sobre tu negocio</div>
                      <div style={{fontSize:14,color:'#7A80A0',marginBottom:28}}>Te respondemos en menos de 24 horas.</div>

                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}} className="form-row">
                        {[
                          {key:'name',label:'Nombre*',placeholder:'Tu nombre',type:'text'},
                          {key:'email',label:'Email*',placeholder:'tu@empresa.com',type:'email'},
                        ].map(f => (
                          <div key={f.key}>
                            <label style={{display:'block',fontSize:13,fontWeight:500,color:'#BEC4E0',marginBottom:7}}>{f.label}</label>
                            <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => update(f.key, e.target.value)}
                              style={{width:'100%',background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#F0F2FF',outline:'none'}} required={f.key==='name'||f.key==='email'}/>
                          </div>
                        ))}
                      </div>

                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}} className="form-row">
                        {[
                          {key:'phone',label:'Teléfono',placeholder:'+34 600 000 000',type:'tel'},
                          {key:'company',label:'Empresa',placeholder:'Nombre de tu negocio',type:'text'},
                        ].map(f => (
                          <div key={f.key}>
                            <label style={{display:'block',fontSize:13,fontWeight:500,color:'#BEC4E0',marginBottom:7}}>{f.label}</label>
                            <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => update(f.key, e.target.value)}
                              style={{width:'100%',background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#F0F2FF',outline:'none'}}/>
                          </div>
                        ))}
                      </div>

                      <div style={{marginBottom:14}}>
                        <label style={{display:'block',fontSize:13,fontWeight:500,color:'#BEC4E0',marginBottom:7}}>Sector</label>
                        <select value={form.sector} onChange={e => update('sector', e.target.value)}
                          style={{width:'100%',background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color: form.sector ? '#F0F2FF' : '#4A5070',outline:'none',appearance:'none',cursor:'pointer'}}>
                          <option value="" style={{color:'#4A5070'}}>Selecciona tu sector</option>
                          {sectors.map(s => <option key={s} value={s} style={{color:'#F0F2FF',background:'#181C28'}}>{s}</option>)}
                        </select>
                      </div>

                      <div style={{marginBottom:20}}>
                        <label style={{display:'block',fontSize:13,fontWeight:500,color:'#BEC4E0',marginBottom:7}}>¿Cuál es tu mayor reto ahora mismo?</label>
                        <textarea placeholder="Cuéntanos brevemente qué te gustaría automatizar o mejorar..." value={form.message} onChange={e => update('message', e.target.value)}
                          style={{width:'100%',background:'#181C28',border:'1px solid #252A3F',borderRadius:12,padding:'12px 16px',fontFamily:"'DM Sans',sans-serif",fontSize:14,color:'#F0F2FF',outline:'none',resize:'none',height:88}}/>
                      </div>

                      <button type="submit" style={{width:'100%',padding:16,fontSize:16,fontWeight:700,background:'#4F6EF7',border:'none',borderRadius:14,cursor:'pointer',color:'#fff',fontFamily:"'DM Sans',sans-serif",letterSpacing:'-0.01em',marginBottom:14,transition:'all 220ms'}}>
                        Enviar mensaje →
                      </button>
                      <p style={{fontSize:12,color:'#4A5070',textAlign:'center',lineHeight:1.6}}>
                        Al enviar aceptas nuestra <a href="#" style={{color:'#7B96FF'}}>política de privacidad</a>. Nunca compartiremos tus datos.
                      </p>
                    </form>
                  )
                ) : (
                  /* CALENDAR */
                  <div>
                    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF',marginBottom:6}}>Agenda una llamada de 30 min</div>
                    <div style={{fontSize:14,color:'#7A80A0',marginBottom:28}}>Elige el día y hora que mejor te venga.</div>

                    {bookingStep < 5 ? (
                      <>
                        {/* Month header */}
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
                          <span style={{fontSize:15,fontWeight:600,color:'#F0F2FF',fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{month}</span>
                          <div style={{display:'flex',gap:6}}>
                            {['←','→'].map((a,i) => <button key={i} style={{width:28,height:28,borderRadius:8,background:'#181C28',border:'1px solid #252A3F',cursor:'pointer',color:'#7A80A0',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center'}}>{a}</button>)}
                          </div>
                        </div>

                        {/* Day headers */}
                        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6,marginBottom:8}}>
                          {['L','M','X','J','V'].map(d => <div key={d} style={{textAlign:'center',fontSize:11,fontWeight:600,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",padding:'4px 0'}}>{d}</div>)}
                        </div>

                        {/* Days */}
                        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6,marginBottom:24}}>
                          {days.map(({d, available}) => (
                            <button key={d} onClick={() => available && setSelectedDay(d)} disabled={!available} style={{
                              height:40,borderRadius:10,border: selectedDay===d ? '1px solid #4F6EF7' : '1px solid #252A3F',
                              background: selectedDay===d ? 'rgba(79,110,247,0.15)' : available ? '#181C28' : 'transparent',
                              cursor: available ? 'pointer' : 'default',
                              fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:600,
                              color: selectedDay===d ? '#7B96FF' : available ? '#BEC4E0' : '#252A3F',
                              transition:'all 200ms'
                            }}>{d}</button>
                          ))}
                        </div>

                        {/* Times */}
                        {selectedDay && (
                          <>
                            <div style={{fontSize:13,fontWeight:600,color:'#7A80A0',marginBottom:12}}>Horarios disponibles — {selectedDay} de mayo</div>
                            <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6,marginBottom:24}}>
                              {times.map(t => (
                                <button key={t} onClick={() => setSelectedTime(t)} style={{
                                  padding:'8px 4px',borderRadius:8,border: selectedTime===t ? '1px solid #4F6EF7' : '1px solid #252A3F',
                                  background: selectedTime===t ? 'rgba(79,110,247,0.15)' : '#181C28',
                                  cursor:'pointer',fontFamily:"'JetBrains Mono',monospace",fontSize:12,fontWeight:600,
                                  color: selectedTime===t ? '#7B96FF' : '#BEC4E0',
                                  transition:'all 200ms'
                                }}>{t}</button>
                              ))}
                            </div>
                          </>
                        )}

                        {selectedDay && selectedTime && (
                          <button onClick={() => setBookingStep(5)} style={{width:'100%',padding:14,fontSize:15,fontWeight:700,background:'#00D4AA',border:'none',borderRadius:14,cursor:'pointer',color:'#06100D',fontFamily:"'DM Sans',sans-serif"}}>
                            Confirmar — {selectedDay} mayo · {selectedTime} →
                          </button>
                        )}
                      </>
                    ) : (
                      <div style={{textAlign:'center',padding:'40px 20px'}}>
                        <div style={{fontSize:48,marginBottom:20}}>🎉</div>
                        <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:22,fontWeight:800,color:'#F0F2FF',marginBottom:12}}>¡Llamada confirmada!</h3>
                        <div style={{padding:'16px 20px',background:'rgba(0,212,170,0.06)',border:'1px solid rgba(0,212,170,0.25)',borderRadius:14,marginBottom:20}}>
                          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF'}}>{selectedDay} de mayo · {selectedTime}h</div>
                          <div style={{fontSize:13,color:'#7A80A0',marginTop:4}}>Duración: 30 minutos · Google Meet</div>
                        </div>
                        <p style={{fontSize:14,color:'#7A80A0',lineHeight:1.75}}>Recibirás un email de confirmación con el enlace a la videollamada. Hasta entonces, si tienes alguna pregunta, escríbenos a <span style={{color:'#7B96FF'}}>info@neurian.es</span></p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ContactoPage });
