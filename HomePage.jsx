
function HomePage({ setPage, lang, goToContact }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  const gotoForm = goToContact || (() => go('contact'));

  React.useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s+1)%3), 3000);
    return () => clearInterval(t);
  }, []);

  const painPoints = [
    { title: "Llamadas perdidas a todas horas", desc: "Fuera del horario, en plena atención, sin tiempo de coger el teléfono." },
    { title: "Citas que nunca se confirman", desc: "El cliente escribe, nadie responde a tiempo y busca otra opción en segundos." },
    { title: "Horas en tareas repetitivas", desc: "Confirmaciones, recordatorios y las mismas preguntas una y otra vez." },
    { title: "Tu equipo saturado", desc: "Tiempo valioso que podría usarse en atender mejor a tus clientes actuales." },
  ];

  const steps = [
    { n:"01", title:"Análisis de tu negocio", body:"Estudiamos tus procesos, cuellos de botella y oportunidades de automatización. Sin tecnicismos — hablamos tu idioma.", detail:"Reunión inicial · Diagnóstico · Propuesta a medida" },
    { n:"02", title:"Configuramos tu sistema", body:"Conectamos tu asistente digital con tu agenda, WhatsApp, web o cualquier canal que ya uses. Sin cambiar tus herramientas.", detail:"Implementación en 48h · Sin interrumpir tu actividad" },
    { n:"03", title:"Tu negocio trabaja solo", body:"Desde el primer día, tu sistema capta citas, responde consultas y envía recordatorios automáticamente. Tú solo supervisas.", detail:"Panel de control · Soporte continuo · Mejora constante" },
  ];

  const testimonials = [
    { q:"Antes perdíamos entre 8 y 10 llamadas al día. Ahora el asistente gestiona las citas 24/7 y nosotros nos centramos en la atención.", name:"Laura M.", role:"Directora · Clínica Dental Sonrisa", init:"LM", color:"#4F6EF7" },
    { q:"Lo que más me sorprendió fue lo rápido que estuvo listo. En dos días ya funcionaba, y mis clientas pueden pedir cita a medianoche si quieren.", name:"Sonia R.", role:"Propietaria · Centro de Estética Rosa", init:"SR", color:"#00D4AA" },
    { q:"Hemos reducido las ausencias un 34%. El sistema manda recordatorios automáticos y los pacientes cancelan con antelación si no pueden venir.", name:"Dr. Paco V.", role:"Médico · Consulta Familiar Vallés", init:"PV", color:"#7B96FF" },
  ];

  const benefits = [
    { stat:"+40%", label:"Más citas cerradas", desc:"Porque tu negocio responde siempre, a cualquier hora, sin depender de que alguien coja el teléfono.", color:"#7B96FF" },
    { stat:"−34%", label:"Menos ausencias", desc:"Los recordatorios automáticos reducen drásticamente los no-shows y las cancelaciones de última hora.", color:"#00D4AA", featured:true },
    { stat:"3 h/día", label:"Tiempo recuperado", desc:"En media, nuestros clientes recuperan entre 2 y 4 horas diarias que antes dedicaban a gestión administrativa.", color:"#7B96FF" },
  ];

  const sectors = [
    { icon:"🦷", name:"Clínicas dentales", pain:"Llamadas perdidas + gestión manual de recordatorios", gain:"Agenda llena sin esfuerzo" },
    { icon:"💆", name:"Centros de estética", pain:"Citas por WhatsApp que se pierden o no se confirman", gain:"+35% citas cerradas" },
    { icon:"🏋️", name:"Gimnasios y fitness", pain:"Bajas de socios por falta de seguimiento", gain:"Retención automática" },
    { icon:"💇", name:"Peluquerías y salones", pain:"Sin tiempo para atender el teléfono mientras trabajan", gain:"Reservas 24/7 sin perder clientes" },
    { icon:"🏥", name:"Consultas médicas", pain:"No-shows frecuentes y agenda desorganizada", gain:"−34% ausencias con recordatorios" },
    { icon:"🔧", name:"Talleres y servicios", pain:"Presupuestos sin respuesta y clientes sin seguimiento", gain:"Seguimiento automático post-visita" },
  ];

  return (
    <div>
      {/* HERO */}
      <section id="hero" style={{minHeight:'100vh',padding:'140px 0 100px',display:'flex',alignItems:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(79,110,247,0.13) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(0,212,170,0.09) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(79,110,247,0.07) 0%, transparent 50%)'}} />
        <div style={{position:'absolute',inset:0,pointerEvents:'none',opacity:0.025,backgroundImage:'linear-gradient(rgba(79,110,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,1) 1px, transparent 1px)',backgroundSize:'80px 80px',maskImage:'radial-gradient(ellipse 70% 80% at 60% 40%, black 30%, transparent 80%)'}} />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center'}} className="hero-inner">
            <div>
              <div style={{display:'inline-flex',alignItems:'center',gap:10,padding:'7px 16px 7px 8px',borderRadius:999,background:'rgba(79,110,247,0.08)',border:'1px solid rgba(79,110,247,0.2)',fontSize:13,fontWeight:500,color:'#7B96FF',marginBottom:28}}>
                <div style={{width:26,height:26,borderRadius:'50%',background:'rgba(0,212,170,0.15)',border:'1px solid rgba(0,212,170,0.3)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'#00D4AA',animation:'pulse-anim 2.4s ease-in-out infinite'}} />
                </div>
                Sistema activo · Automatización en tiempo real
              </div>
              <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(46px,6vw,80px)',fontWeight:900,lineHeight:1.04,letterSpacing:'-0.04em',color:'#F0F2FF',marginBottom:28}}>
                Tu negocio<br/>
                capta citas<br/>
                <span style={{background:'linear-gradient(135deg, #F0F2FF 30%, #7B96FF 70%, #00D4AA 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>mientras duermes</span>
              </h1>
              <p style={{fontSize:'clamp(16px,1.7vw,19px)',color:'#7A80A0',lineHeight:1.75,marginBottom:40,maxWidth:460}}>
                Automatizamos las reservas, respuestas y seguimientos de tu negocio con inteligencia artificial. Sin llamadas perdidas. Sin gestión manual. Sin complicaciones.
              </p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',marginBottom:48}}>
                <button onClick={() => gotoForm()} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'18px 36px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontFamily:"'DM Sans',sans-serif",fontSize:17,fontWeight:700,color:'#fff',letterSpacing:'-0.01em',boxShadow:'0 0 0 0 rgba(79,110,247,0.4), 0 2px 8px rgba(79,110,247,0.3)',transition:'all 220ms'}}>
                  Pide tu demo gratis
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button onClick={() => go('services')} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'15px 30px',borderRadius:999,background:'transparent',border:'1px solid #252836',cursor:'pointer',fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:600,color:'#BEC4E0',transition:'all 220ms'}}>
                  Ver cómo funciona
                </button>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:20,flexWrap:'wrap',paddingTop:24,borderTop:'1px solid #1E2235'}}>
                {['Sin permanencia','Activo en 48h','Soporte en español','Sin tecnicismos'].map(t => (
                  <div key={t} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#7A80A0'}}>
                    <span style={{color:'#00D4AA'}}>✓</span> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat mockup */}
            <div style={{position:'relative'}}>
              <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:24,overflow:'hidden',boxShadow:'0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,110,247,0.12)',position:'relative',zIndex:1}}>
                <div style={{background:'#181C28',padding:'14px 18px',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid #1E2235'}}>
                  <div style={{width:34,height:34,borderRadius:'50%',background:'linear-gradient(135deg,#4F6EF7,#00D4AA)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:14,fontWeight:800,color:'#fff',flexShrink:0}}>N</div>
                  <div>
                    <div style={{fontSize:14,fontWeight:600,color:'#F0F2FF'}}>Asistente NeuriaN</div>
                    <div style={{fontSize:11,color:'#00D4AA',display:'flex',alignItems:'center',gap:5}}>
                      <span style={{width:5,height:5,borderRadius:'50%',background:'#00D4AA',display:'inline-block'}}/>En línea ahora
                    </div>
                  </div>
                </div>
                <div style={{padding:16,display:'flex',flexDirection:'column',gap:10,minHeight:280}}>
                  {[
                    {type:'bot',text:'¡Hola! Soy el asistente de Clínica Dental López. ¿Quieres pedir cita?',time:'14:21'},
                    {type:'user',text:'Sí, para una limpieza dental',time:'14:21'},
                    {type:'bot',text:'Perfecto. Tengo disponibilidad el martes 29 a las 10:00h o el miércoles 30 a las 17:00h. ¿Cuál prefieres?',time:'14:22'},
                    {type:'user',text:'El martes a las 10',time:'14:22'},
                    {type:'bot',text:'✓ Cita confirmada\nMartes 29 · 10:00h',time:'14:22',confirmed:true},
                  ].map((msg, i) => (
                    <div key={i} style={{display:'flex',flexDirection:'column'}}>
                      <div style={{
                        padding:'10px 14px',fontSize:13,lineHeight:1.55,maxWidth:'85%',whiteSpace:'pre-line',
                        alignSelf: msg.type==='user' ? 'flex-end' : 'flex-start',
                        background: msg.confirmed ? 'rgba(0,212,170,0.08)' : msg.type==='user' ? '#4F6EF7' : '#181C28',
                        border: msg.confirmed ? '1px solid rgba(0,212,170,0.3)' : msg.type==='user' ? 'none' : '1px solid #252A3F',
                        borderRadius: msg.type==='user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                        color: msg.type==='user' ? '#fff' : '#BEC4E0'
                      }}>{msg.text}</div>
                      <div style={{fontSize:10,color:'#4A5070',marginTop:4,padding:'0 4px',textAlign: msg.type==='user' ? 'right' : 'left'}}>{msg.time}</div>
                    </div>
                  ))}
                </div>
                <div style={{padding:'12px 14px',borderTop:'1px solid #1E2235',display:'flex',gap:8,alignItems:'center'}}>
                  <div style={{flex:1,background:'#181C28',border:'1px solid #252A3F',borderRadius:999,padding:'8px 14px',fontSize:13,color:'#4A5070',fontFamily:"'DM Sans',sans-serif"}}>Escribe un mensaje...</div>
                  <div style={{width:34,height:34,borderRadius:'50%',background:'#4F6EF7',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white"/></svg>
                  </div>
                </div>
              </div>

              {/* Float cards */}
              <div style={{position:'absolute',bottom:-16,left:-24,background:'#10131C',border:'1px solid #252A3F',borderRadius:14,padding:'12px 16px',boxShadow:'0 12px 40px rgba(0,0,0,0.5)',zIndex:2,minWidth:190,animation:'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both'}}>
                <div style={{display:'flex',alignItems:'center',gap:7,marginBottom:6}}>
                  <span style={{display:'inline-flex',alignItems:'center',gap:5,padding:'3px 10px',borderRadius:999,fontSize:11,fontWeight:600,background:'rgba(0,212,170,0.1)',color:'#00D4AA',border:'1px solid rgba(0,212,170,0.25)'}}>
                    <span style={{width:6,height:6,borderRadius:'50%',background:'#00D4AA',display:'inline-block'}}/>En vivo
                  </span>
                </div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:24,fontWeight:800,color:'#F0F2FF'}}>+24 citas</div>
                <div style={{fontSize:11,color:'#7A80A0',marginTop:2}}>Cerradas automáticamente hoy</div>
              </div>

              <div style={{position:'absolute',top:40,right:-28,background:'#10131C',border:'1px solid #252A3F',borderRadius:14,padding:'12px 16px',boxShadow:'0 12px 40px rgba(0,0,0,0.5)',zIndex:2,minWidth:170,animation:'float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both'}}>
                <div style={{fontSize:11,color:'#7A80A0',marginBottom:6}}>Tiempo ahorrado hoy</div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:24,fontWeight:800,color:'#00D4AA'}}>3.2 horas</div>
                <div style={{fontSize:11,color:'#7A80A0',marginTop:2}}>Sin intervención manual</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <div style={{borderTop:'1px solid #1E2235',borderBottom:'1px solid #1E2235',background:'#0D0F18'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',padding:'32px 5%',gap:16,flexWrap:'wrap'}}>
          {[
            {num:'0',label:'Llamadas sin respuesta',color:'#7B96FF'},
            {num:'+40%',label:'Más citas cerradas',color:'#00D4AA'},
            {num:'24/7',label:'Atención sin horarios',color:'#7B96FF'},
            {num:'48h',label:'Para estar en marcha',color:'#00D4AA'},
            {num:'−30%',label:'Menos no-shows',color:'#7B96FF'},
          ].map((s,i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{width:1,height:48,background:'#252A3F'}} className="proof-divider"/>}
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:32,fontWeight:900,letterSpacing:'-0.03em',color:s.color}}>{s.num}</div>
                <div style={{fontSize:13,color:'#7A80A0',marginTop:5}}>{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* PROBLEMA */}
      <section style={{background:'#0D0F18',padding:'120px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="two-col">
            <div>
              <div className="section-label">El problema</div>
              <h2 className="section-title">¿Cuántas citas pierdes cada semana sin saberlo?</h2>
              <p className="section-sub" style={{marginBottom:36}}>Cada llamada sin responder, cada mensaje ignorado y cada cita sin confirmar es un cliente que se va a la competencia.</p>
              <div style={{display:'flex',flexDirection:'column',gap:14}}>
                {painPoints.map((p,i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:16,padding:'20px 22px',background:'#10131C',border:'1px solid #252A3F',borderLeft:'3px solid rgba(239,68,68,0.5)',borderRadius:'0 14px 14px 0',transition:'all 220ms'}}>
                    <div style={{width:38,height:38,borderRadius:10,flexShrink:0,background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.18)',display:'flex',alignItems:'center',justifyContent:'center',color:'#EF4444',fontSize:15}}>✕</div>
                    <div>
                      <strong style={{display:'block',fontSize:14,fontWeight:600,color:'#F0F2FF',marginBottom:3}}>{p.title}</strong>
                      <span style={{fontSize:13,color:'#7A80A0',lineHeight:1.5}}>{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Missed calls panel */}
            <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,overflow:'hidden',boxShadow:'0 24px 64px rgba(0,0,0,0.5)'}}>
              <div style={{background:'#181C28',padding:'20px 22px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #1E2235'}}>
                <span style={{fontSize:13,fontWeight:600,color:'#BEC4E0',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.04em'}}>LLAMADAS RECIENTES</span>
                <span style={{background:'rgba(239,68,68,0.12)',border:'1px solid rgba(239,68,68,0.25)',color:'#EF4444',fontSize:12,fontWeight:700,padding:'3px 10px',borderRadius:999}}>12 perdidas esta semana</span>
              </div>
              {[
                {name:'María G. — Cita estética',meta:'Hoy, 14:23 · 3 intentos'},
                {name:'Carlos M. — Presupuesto',meta:'Hoy, 13:07 · Sin devolución'},
                {name:'Ana R. — Primera visita',meta:'Ayer, 19:41 · 2 intentos'},
                {name:'Número desconocido',meta:'Ayer, 22:14 · Fuera de horario'},
              ].map((c,i) => (
                <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:'16px 22px',borderBottom:'1px solid #1E2235'}}>
                  <div style={{width:38,height:38,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(239,68,68,0.1)',color:'#EF4444'}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2A19.79 19.79 0 013.58 5.18 2 2 0 015.57 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.56 10.9a16 16 0 001.12 2.41M23 1 1 23"/></svg>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:14,fontWeight:500,color:'#F0F2FF'}}>{c.name}</div>
                    <div style={{fontSize:12,color:'#7A80A0',marginTop:1}}>{c.meta}</div>
                  </div>
                  <span style={{fontSize:11,fontWeight:600,padding:'3px 8px',borderRadius:999,background:'rgba(239,68,68,0.1)',color:'#EF4444'}}>Perdida</span>
                </div>
              ))}
              <div style={{padding:'16px 22px',background:'rgba(239,68,68,0.04)',borderTop:'1px solid rgba(239,68,68,0.1)',fontSize:13,color:'#7A80A0',lineHeight:1.6}}>
                Cada llamada perdida puede representar entre <strong style={{color:'#EF4444'}}>50€ y 200€</strong> en ingresos que no entran en tu negocio.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section style={{padding:'120px 0',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,212,170,0.06), transparent 60%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{textAlign:'center',marginBottom:72}}>
            <div className="section-label">Cómo funciona</div>
            <h2 className="section-title">En marcha en menos de 48 horas</h2>
            <p className="section-sub mx-auto">Sin instalaciones complejas, sin cambiar tus herramientas y sin formación técnica.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2,position:'relative'}} className="steps-track">
            <div style={{position:'absolute',top:42,left:'calc(16.7% + 1px)',right:'calc(16.7% + 1px)',height:1,background:'linear-gradient(90deg, rgba(79,110,247,0.5), rgba(0,212,170,0.5))'}} className="steps-line"/>
            {steps.map((s,i) => (
              <div key={i} onMouseEnter={() => setActiveStep(i)} style={{
                background: activeStep===i ? '#181C28' : '#10131C',
                border: `1px solid ${activeStep===i ? 'rgba(79,110,247,0.3)' : '#252A3F'}`,
                padding:'36px 28px',position:'relative',transition:'all 220ms',
                borderRadius: i===0 ? '20px 0 0 20px' : i===2 ? '0 20px 20px 0' : '0',
                boxShadow: activeStep===i ? '0 0 0 1px rgba(79,110,247,0.12), 0 12px 32px rgba(0,0,0,0.4)' : 'none'
              }}>
                <div style={{width:52,height:52,borderRadius:'50%',marginBottom:24,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:900,
                  background: i===1 ? 'rgba(0,212,170,0.1)' : 'rgba(79,110,247,0.12)',
                  border: `1px solid ${i===1 ? 'rgba(0,212,170,0.3)' : 'rgba(79,110,247,0.3)'}`,
                  color: i===1 ? '#00D4AA' : '#7B96FF'
                }}>{s.n}</div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:19,fontWeight:700,color:'#F0F2FF',marginBottom:12}}>{s.title}</div>
                <div style={{fontSize:14,color:'#7A80A0',lineHeight:1.75,marginBottom:20}}>{s.body}</div>
                <div style={{padding:'14px 16px',background:'#080910',border:'1px solid #1E2235',borderRadius:12,fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:'#4A5070',lineHeight:1.7}}>
                  {s.detail.split(' · ').map((d,j) => <div key={j}><span style={{color:'#00D4AA'}}>→</span> {d}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive pipeline — full width */}
        <div className="container" style={{paddingBottom:80, paddingTop:40}}>
          <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:'28px 32px'}}>
            <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:20,textTransform:'uppercase',letterSpacing:'0.08em',display:'flex',alignItems:'center',gap:8}}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#00D4AA',display:'inline-block'}}/>
              Flujo automatizado en tiempo real — haz clic en cada paso
            </div>
            <IlluPipeline steps={['Solicitud','Verificación','Confirmación','Recordatorio','Post-visita']}/>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{padding:'120px 0',background:'#0D0F18',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',bottom:-100,right:-100,width:600,height:600,pointerEvents:'none',background:'radial-gradient(circle, rgba(79,110,247,0.08), transparent 60%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{textAlign:'center',marginBottom:64}}>
            <div className="section-label">Resultados reales</div>
            <h2 className="section-title">Lo que cambia en tu negocio</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,alignItems:'stretch'}} className="benefits-grid">
            {benefits.map((b,i) => (
              <div key={i} style={{background:'#10131C',border:`1px solid ${b.featured ? 'rgba(0,212,170,0.3)' : '#252A3F'}`,borderRadius:20,padding:30,transition:'all 220ms',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column'}}>
                <div style={{flex:'0 0 auto',marginBottom:16,display:'flex',alignItems:'center',justifyContent:'center',minHeight:140}}>
                  {i===0 && <IlluTimeSaved hours={3} label="horas/día recuperadas"/>}
                  {i===1 && <IlluNoShows before={22} after={8}/>}
                  {i===2 && <IlluBusiness freed={3}/>}
                </div>
                <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:38,fontWeight:900,letterSpacing:'-0.03em',lineHeight:1,marginBottom:8,color:b.color}}>{b.stat}</div>
                  <div style={{fontSize:16,fontWeight:600,color:'#F0F2FF',marginBottom:10}}>{b.label}</div>
                  <div style={{fontSize:14,color:'#7A80A0',lineHeight:1.7}}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section style={{padding:'120px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:56}}>
            <div className="section-label">Sectores</div>
            <h2 className="section-title">Diseñado para negocios como el tuyo</h2>
            <p className="section-sub mx-auto">Trabajamos con empresas que reciben muchas solicitudes y no tienen tiempo de gestionarlas todas a mano.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="sectors-grid">
            {sectors.map((s,i) => (
              <div key={i} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:18,padding:26,display:'flex',flexDirection:'column',gap:12,transition:'all 220ms',cursor:'default'}}>
                <IlluSectorHero sector={['dental','estetica','gym','peluqueria','clinica','taller'][i]}/>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:40,height:40,borderRadius:12,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(79,110,247,0.1)',border:'1px solid rgba(79,110,247,0.2)',flexShrink:0}}>{s.icon}</div>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:15,fontWeight:700,color:'#F0F2FF'}}>{s.name}</div>
                </div>
                <div style={{fontSize:13,color:'#7A80A0',lineHeight:1.6}}>{s.pain}</div>
                <div style={{display:'inline-flex',alignItems:'center',gap:6,padding:'5px 12px',borderRadius:999,fontSize:12,fontWeight:600,background:'rgba(0,212,170,0.06)',color:'#00D4AA',border:'1px solid rgba(0,212,170,0.2)',marginTop:'auto'}}>
                  ✓ {s.gain}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{padding:'120px 0',background:'#0D0F18',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 50% 50%,rgba(79,110,247,0.05),transparent 65%)',pointerEvents:'none'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{textAlign:'center',marginBottom:60}}>
            <div className="section-label">Testimonios</div>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="test-grid">
            {testimonials.map((t,i) => (
              <div key={i} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:30,transition:'all 200ms'}}>
                <div style={{color:'#F59E0B',fontSize:13,letterSpacing:3,marginBottom:16}}>★★★★★</div>
                <p style={{fontSize:15,color:'#BEC4E0',lineHeight:1.75,marginBottom:22,fontStyle:'italic'}}>"{t.q}"</p>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:40,height:40,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:15,fontWeight:700,color:'#fff',background:t.color}}>{t.init}</div>
                  <div>
                    <div style={{fontSize:14,fontWeight:600,color:'#F0F2FF'}}>{t.name}</div>
                    <div style={{fontSize:12,color:'#7A80A0'}}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:48}}>
            <button onClick={() => go('cases')} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 28px',borderRadius:999,background:'transparent',border:'1px solid #252A3F',cursor:'pointer',fontSize:14,fontWeight:600,color:'#BEC4E0',fontFamily:"'DM Sans',sans-serif",transition:'all 200ms'}}>
              Ver casos de éxito completos →
            </button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{padding:'120px 0',background:'#10131C',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,110,247,0.1), transparent 55%), radial-gradient(ellipse 40% 40% at 80% 100%, rgba(0,212,170,0.06), transparent 55%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}} className="two-col">
            <div style={{textAlign:'center'}}>
              <div className="section-label" style={{justifyContent:'center'}}>Empieza hoy</div>
              <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(38px,4.5vw,56px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.08,color:'#F0F2FF',marginBottom:22}}>
                Tu negocio merece trabajar<br/>
                <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>de forma inteligente</span>
              </h2>
              <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.75,marginBottom:40}}>
                Una demo gratuita de 30 minutos para ver cómo NeuriaN puede transformar la gestión de tu negocio.
              </p>
              <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginBottom:24}}>
                <button onClick={() => gotoForm()} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'18px 36px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:17,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif",boxShadow:'0 0 0 0 rgba(79,110,247,0.4), 0 2px 8px rgba(79,110,247,0.3)',transition:'all 220ms'}}>
                  Pide tu demo gratis →
                </button>
                <button onClick={() => go('services')} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'15px 30px',borderRadius:999,background:'transparent',border:'1px solid #252A3F',cursor:'pointer',fontSize:16,fontWeight:600,color:'#BEC4E0',fontFamily:"'DM Sans',sans-serif",transition:'all 220ms'}}>
                  Explorar servicios
                </button>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24,fontSize:13,color:'#7A80A0',flexWrap:'wrap'}}>
                {['Sin coste inicial','Sin permanencia','Soporte incluido'].map(t => (
                  <span key={t} style={{display:'flex',alignItems:'center',gap:6}}><span style={{color:'#00D4AA'}}>✓</span>{t}</span>
                ))}
              </div>
            </div>
            {/* Visual right column */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid #252A3F',borderRadius:16,padding:'16px 14px',gridColumn:'1 / -1'}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8,textTransform:'uppercase',letterSpacing:'0.08em'}}>Canales disponibles</div>
                <IlluWhatsappFlow/>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid #252A3F',borderRadius:16,padding:'16px 14px'}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8,textTransform:'uppercase',letterSpacing:'0.08em'}}>Ingresos recuperados</div>
                <IlluRevenue lost={1800} recovered={2800} currency="€"/>
              </div>
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid #252A3F',borderRadius:16,padding:'16px 14px'}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8,textTransform:'uppercase',letterSpacing:'0.08em'}}>Agenda cubierta</div>
                <IlluCalendar/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage });
