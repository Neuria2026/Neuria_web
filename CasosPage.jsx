
function CasosPage({ setPage, goToContact }) {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  const gotoForm = goToContact || (() => go('contact'));
  const [active, setActive] = React.useState(0);
  const detailRef = React.useRef(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const selectCase = (i) => {
    setActive(i);
    setMobileOpen(false);
    setTimeout(() => {
      if (detailRef.current) {
        const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const cases = [
    {
      sector: 'Clínica dental', company: 'Clínica Dental Sonrisa',
      location: 'Barcelona', init: 'CS', color: '#4F6EF7',
      icon: '🦷', employees: 6, monthlyVisits: 320,
      tagline: 'De 12 llamadas perdidas al día a agenda llena sin esfuerzo',
      challenge: 'La recepcionista gestionaba 40-60 llamadas diarias y perdía 12 de media. Los recordatorios eran manuales y el 20% de los pacientes no aparecía sin avisar.',
      solution: ['Asistente WhatsApp 24/7 que gestiona reservas en lenguaje natural', 'Recordatorios automáticos 48h y 2h antes de cada cita', 'Lista de espera inteligente que cubre huecos al instante', 'Integración directa con Gesden (software de clínica)'],
      roi: {
        timeSaved: 2.5,
        noShowBefore: 20, noShowAfter: 12,
        citasExtra: 38,
        ingresosMes: 2800,
        payback: '18 días'
      },
      quote: 'Antes el teléfono era mi peor enemigo. Ahora ni lo escucho. El sistema lo gestiona todo y yo me centro en mis pacientes.',
      author: 'Laura M. · Directora Clínica Dental Sonrisa',
      illu: 'dental', pipeline: ['Solicitud WA','Verificación agenda','Confirmación auto','Recordatorio 48h','Post-visita']
    },
    {
      sector: 'Centro de estética', company: 'Centro Estética Luxe',
      location: 'Madrid', init: 'CE', color: '#00D4AA',
      icon: '💆', employees: 4, monthlyVisits: 280,
      tagline: 'WhatsApp caótico convertido en motor de reservas automático',
      challenge: 'Las esteticistas respondían mensajes entre tratamientos, perdiendo concentración. El 25% de las citas no aparecía y la lista de espera era un papel en el mostrador.',
      solution: ['Bot WhatsApp con menú interactivo de servicios y precios', 'Confirmación automática con opción de reprogramar o cancelar', 'Seguimiento post-visita con oferta personalizada', 'Panel en tiempo real con estado de todas las citas del día'],
      roi: {
        timeSaved: 1.8,
        noShowBefore: 25, noShowAfter: 11,
        citasExtra: 52,
        ingresosMes: 2100,
        payback: '22 días'
      },
      quote: 'Mis clientas pueden reservar a las 11 de la noche si quieren. Al día siguiente tengo la agenda completa sin haber hecho nada.',
      author: 'Sonia R. · Propietaria Centro Luxe',
      illu: 'estetica', pipeline: ['Mensaje WA','Menú servicios','Selección cita','Confirmación','Recordatorio']
    },
    {
      sector: 'Taller mecánico', company: 'Talleres Hermanos Gómez',
      location: 'Valencia', init: 'TG', color: '#7B96FF',
      icon: '🔧', employees: 8, monthlyVisits: 190,
      tagline: 'Presupuestos perdidos en papel convertidos en ingresos automáticos',
      challenge: 'El 60% de presupuestos no recibían seguimiento. Los clientes llamaban para saber el estado de su coche y saturaban la centralita. Los datos estaban en WhatsApp, email y notas manuscritas.',
      solution: ['Integración taller-WhatsApp para envío automático de presupuestos', 'Seguimiento automático a las 24h si no hay respuesta', 'Notificaciones de estado: recibido, en reparación, listo para recoger', 'CRM unificado con historial completo por cliente y vehículo'],
      roi: {
        timeSaved: 1.2,
        noShowBefore: 0, noShowAfter: 0,
        citasExtra: 67,
        ingresosMes: 3200,
        payback: '15 días'
      },
      quote: 'Antes perdíamos presupuestos porque nadie tenía tiempo de hacer seguimiento. Ahora el sistema lo hace solo y hemos subido la facturación casi un 20%.',
      author: 'Paco G. · Propietario Talleres Hermanos Gómez',
      illu: 'taller', pipeline: ['Presupuesto enviado','Seguimiento 24h','Aprobación cliente','Orden trabajo','Notificación listo']
    },
    {
      sector: 'Gimnasio / Fitness', company: 'FitLife Club',
      location: 'Sevilla', init: 'FL', color: '#4F6EF7',
      icon: '🏋️', employees: 12, monthlyVisits: 850,
      tagline: 'Retención de socios automatizada: menos bajas, más renovaciones',
      challenge: 'Los socios se daban de baja por falta de seguimiento. El equipo de recepción no daba abasto con las gestiones de alta, baja y pausa, y las renovaciones se hacían de forma reactiva.',
      solution: ['Chatbot que gestiona altas, bajas y pausas por WhatsApp sin intervención', 'Campaña de reactivación automática a socios inactivos (+30 días sin entrar)', 'Recordatorio de renovación 15 días antes del vencimiento', 'Encuestas de satisfacción mensuales con alertas de churn'],
      roi: {
        timeSaved: 3.0,
        noShowBefore: 0, noShowAfter: 0,
        citasExtra: 28,
        ingresosMes: 4100,
        payback: '10 días'
      },
      quote: 'Perdíamos 30-40 socios al mes sin saber por qué. Con NeuriaN tenemos visibilidad total y el sistema llama a quien está a punto de marcharse antes de que lo haga.',
      author: 'Roberto S. · Director FitLife Club',
      illu: 'gym', pipeline: ['Socio inactivo','Detección automática','Mensaje reactivación','Respuesta socio','Renovación confirmada']
    },
    {
      sector: 'Consulta médica', company: 'Consulta Familiar Vallés',
      location: 'Sabadell', init: 'CV', color: '#00D4AA',
      icon: '🏥', employees: 3, monthlyVisits: 420,
      tagline: 'Menos no-shows, menos saturación y pacientes más satisfechos',
      challenge: 'Una consulta médica con 3 profesionales gestionando 420 visitas al mes. El 18% de los pacientes no aparecía. La administración consumía 2 horas diarias que podían dedicarse a atención.',
      solution: ['Sistema de confirmación de cita por WhatsApp con 2 toques', 'Recordatorio escalonado: 72h, 24h y 2h antes de la visita', 'Opción de cancelar o reprogramar sin llamar a la consulta', 'Lista de espera que cubre huecos en menos de 10 minutos'],
      roi: {
        timeSaved: 2.0,
        noShowBefore: 18, noShowAfter: 7,
        citasExtra: 41,
        ingresosMes: 1800,
        payback: '28 días'
      },
      quote: 'Hemos reducido los no-shows a menos de la mitad. Los pacientes valoran poder gestionar su cita sin tener que llamar en horario de apertura.',
      author: 'Dr. Paco V. · Médico de Familia',
      illu: 'clinica', pipeline: ['Cita programada','Recordatorio 72h','Confirmación paciente','Recordatorio 2h','Post-consulta']
    },
    {
      sector: 'Peluquería / Salón', company: 'Estudio Corte & Color',
      location: 'Bilbao', init: 'CC', color: '#7B96FF',
      icon: '💇', employees: 5, monthlyVisits: 340,
      tagline: 'De agenda en papel a sistema digital sin perder el trato personal',
      challenge: 'Agenda en papel, reservas por llamada y un WhatsApp que no paraba durante el horario de trabajo. El estilista tenía que interrumpir el servicio para atender el teléfono o perder la reserva.',
      solution: ['Sistema de reservas 24/7 que no requiere coger el teléfono', 'Menú de servicios con tiempos y precios para que el cliente elija', 'Confirmación inmediata y recordatorio 24h antes', 'Gestión de lista de espera para huecos de cancelación de última hora'],
      roi: {
        timeSaved: 1.5,
        noShowBefore: 22, noShowAfter: 9,
        citasExtra: 35,
        ingresosMes: 1600,
        payback: '20 días'
      },
      quote: 'Antes interrumpía cada corte para coger el teléfono. Ahora el sistema lo gestiona todo y mis clientes me dicen que les encanta poder reservar desde el sofá.',
      author: 'María T. · Propietaria Estudio Corte & Color',
      illu: 'peluqueria', pipeline: ['Reserva app/WA','Selección servicio','Confirmación auto','Recordatorio 24h','Valoración post']
    },
  ];

  const c = cases[active];

  const colorRgb = (hex) => {
    const map = { '#4F6EF7':'79,110,247', '#00D4AA':'0,212,170', '#7B96FF':'123,150,255' };
    return map[hex] || '79,110,247';
  };

  const StatPill = ({value, label, color}) => (
    <div style={{textAlign:'center',padding:'18px 12px',background:'#10131C',border:'1px solid #252A3F',borderRadius:16,flex:1,minWidth:100}}>
      <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:26,fontWeight:900,letterSpacing:'-0.03em',color,marginBottom:5}}>{value}</div>
      <div style={{fontSize:11,color:'#7A80A0',lineHeight:1.4}}>{label}</div>
    </div>
  );

  return (
    <div>
      {/* HERO */}
      <section style={{padding:'160px 0 80px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,212,170,0.08), transparent 55%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{margin:'0 auto 20px'}}>Casos de éxito</div>
          <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(40px,5vw,64px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.06,color:'#F0F2FF',marginBottom:24,maxWidth:700,margin:'0 auto 24px'}}>
            Resultados reales,<br/>
            <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>no promesas de marketing</span>
          </h1>
          <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.75,maxWidth:560,margin:'0 auto 48px'}}>
            Seis empresas. Seis sectores distintos. Un patrón común: tiempo recuperado, ingresos protegidos y gestión sin fricción.
          </p>
          {/* Global stats */}
          <div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',maxWidth:700,margin:'0 auto'}}>
            {[
              {v:'6 sectores', l:'cubiertos', c:'#7B96FF'},
              {v:'+2.1h/día', l:'tiempo medio ahorrado', c:'#00D4AA'},
              {v:'−55%', l:'reducción media no-shows', c:'#7B96FF'},
              {v:'18 días', l:'payback medio', c:'#00D4AA'},
            ].map(s=>(
              <div key={s.v} style={{padding:'14px 22px',background:'rgba(255,255,255,0.03)',border:'1px solid #252A3F',borderRadius:999,display:'flex',alignItems:'center',gap:8}}>
                <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:16,fontWeight:800,color:s.c}}>{s.v}</span>
                <span style={{fontSize:13,color:'#4A5070'}}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE SELECTOR — compact grid */}
      <section style={{padding:'60px 0 0',background:'#0D0F18'}}>
        <div className="container">
          {/* Mobile dropdown */}
          <div className="mobile-case-select" style={{marginBottom:16}}>
            <button onClick={() => setMobileOpen(v=>!v)} style={{
              width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',
              padding:'14px 18px',borderRadius:14,background:'#10131C',border:'1px solid #252A3F',
              cursor:'pointer',fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:600,color:'#F0F2FF'
            }}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <span style={{fontSize:20}}>{cases[active].icon}</span>
                {cases[active].company}
              </div>
              <span style={{color:'#7A80A0',fontSize:12}}>{mobileOpen ? '▲' : '▼'}</span>
            </button>
            {mobileOpen && (
              <div style={{marginTop:4,background:'#10131C',border:'1px solid #252A3F',borderRadius:14,overflow:'hidden'}}>
                {cases.map((cs,i) => (
                  <button key={i} onClick={() => selectCase(i)} style={{
                    display:'flex',alignItems:'center',gap:12,padding:'12px 18px',
                    width:'100%',background: active===i ? 'rgba(79,110,247,0.1)' : 'none',
                    border:'none',borderBottom:'1px solid #1E2235',cursor:'pointer',
                    fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,
                    color: active===i ? '#7B96FF' : '#BEC4E0',textAlign:'left'
                  }}>
                    <span style={{fontSize:16}}>{cs.icon}</span>{cs.company}
                    <span style={{fontSize:11,color:'#4A5070',marginLeft:'auto'}}>{cs.sector}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Desktop grid selector */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:40}} className="sectors-grid desktop-case-select">
            {cases.map((cs,i) => (
              <button key={i} onClick={() => selectCase(i)} style={{
                display:'flex',alignItems:'center',gap:14,padding:'16px 20px',borderRadius:16,
                background: active===i ? `rgba(${colorRgb(cs.color)},0.1)` : '#10131C',
                border: active===i ? `1px solid ${cs.color}50` : '1px solid #252A3F',
                cursor:'pointer',textAlign:'left',transition:'all 220ms'
              }}>
                <div style={{width:40,height:40,borderRadius:'50%',background:cs.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{cs.icon}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color: active===i ? '#F0F2FF' : '#BEC4E0',fontFamily:"'DM Sans',sans-serif",marginBottom:2}}>{cs.company}</div>
                  <div style={{fontSize:11,color:'#4A5070'}}>{cs.sector} · {cs.location}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CASE DETAIL */}
      <section style={{padding:'0 0 80px',background:'#0D0F18'}}>
        <div className="container">
          <div ref={detailRef} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:24,overflow:'hidden',boxShadow:'0 24px 64px rgba(0,0,0,0.4)'}}>

            {/* Header */}
            <div style={{padding:'32px 40px',background:'#181C28',borderBottom:'1px solid #1E2235',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:20}}>
              <div style={{display:'flex',alignItems:'center',gap:16}}>
                <div style={{width:56,height:56,borderRadius:'50%',background:c.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>{c.icon}</div>
                <div>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:22,fontWeight:800,color:'#F0F2FF'}}>{c.company}</div>
                  <div style={{fontSize:13,color:'#7A80A0'}}>{c.sector} · {c.location} · {c.employees} personas · {c.monthlyVisits} visitas/mes</div>
                </div>
              </div>
              <div style={{display:'inline-flex',padding:'6px 16px',borderRadius:999,background:`rgba(${colorRgb(c.color)},0.1)`,border:`1px solid ${c.color}40`,fontSize:12,fontWeight:600,color:c.color,fontFamily:"'JetBrains Mono',monospace"}}>
                Payback: {c.roi.payback}
              </div>
            </div>

            <div style={{padding:'40px'}}>
              <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(22px,2.5vw,32px)',fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.15,color:'#F0F2FF',marginBottom:32}}>{c.tagline}</h2>

              {/* Two col: challenge + solution */}
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginBottom:40}} className="two-col">
                <div style={{padding:'24px',background:'rgba(239,68,68,0.03)',border:'1px solid rgba(239,68,68,0.1)',borderRadius:16}}>
                  <div style={{fontSize:11,fontWeight:600,color:'#EF4444',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:8}}>
                    <span style={{width:8,height:8,borderRadius:'50%',background:'#EF4444',display:'inline-block'}}/>La situación antes
                  </div>
                  <p style={{fontSize:14,color:'#7A80A0',lineHeight:1.75}}>{c.challenge}</p>
                </div>
                <div style={{padding:'24px',background:'rgba(79,110,247,0.03)',border:'1px solid rgba(79,110,247,0.12)',borderRadius:16}}>
                  <div style={{fontSize:11,fontWeight:600,color:'#4F6EF7',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14,display:'flex',alignItems:'center',gap:8}}>
                    <span style={{width:8,height:8,borderRadius:'50%',background:'#4F6EF7',display:'inline-block'}}/>Lo que implementamos
                  </div>
                  {c.solution.map((s,i) => (
                    <div key={i} style={{display:'flex',gap:10,marginBottom:10,fontSize:13,color:'#BEC4E0',lineHeight:1.55}}>
                      <span style={{color:'#4F6EF7',flexShrink:0,marginTop:1}}>→</span>{s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Automation pipeline */}
              <div style={{padding:'20px 24px',background:'#181C28',border:'1px solid #1E2235',borderRadius:16,marginBottom:40}}>
                <div style={{fontSize:11,fontWeight:600,color:'#7A80A0',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:20,display:'flex',alignItems:'center',gap:8}}><span style={{width:7,height:7,borderRadius:'50%',background:'#00D4AA',display:'inline-block'}}/>Flujo automatizado — haz clic en cada paso</div>
                <IlluPipeline steps={c.pipeline}/>
              </div>

              {/* ROI visuals grid */}
              <div style={{marginBottom:32}}>
                <div style={{fontSize:11,fontWeight:600,color:'#00D4AA',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:20,display:'flex',alignItems:'center',gap:8}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'#00D4AA',display:'inline-block'}}/>Resultados a los 3 meses
                </div>

                {/* KPI row */}
                <div style={{display:'flex',gap:12,marginBottom:24,flexWrap:'wrap'}}>
                  <StatPill value={`${c.roi.timeSaved}h/día`} label="tiempo ahorrado" color="#7B96FF"/>
                  {c.roi.noShowBefore > 0 && <StatPill value={`−${c.roi.noShowBefore - c.roi.noShowAfter}pp`} label="menos no-shows" color="#00D4AA"/>}
                  <StatPill value={`+${c.roi.citasExtra}%`} label={c.sector==='Taller mecánico'?'aceptación presupuestos':'más citas/gestiones'} color={c.color}/>
                  <StatPill value={`+${c.roi.ingresosMes.toLocaleString()}€`} label="ingresos extra/mes" color="#00D4AA"/>
                </div>

                {/* Visual charts */}
                <div style={{display:'grid',gridTemplateColumns: c.roi.noShowBefore > 0 ? '1fr 1fr 1fr' : '1fr 1fr',gap:16}} className="benefits-grid">
                  {/* Time saved */}
                  <div style={{background:'#181C28',border:'1px solid #1E2235',borderRadius:16,padding:'20px 16px'}}>
                    <div style={{fontSize:11,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>TIEMPO AHORRADO</div>
                    <IlluTimeSaved hours={c.roi.timeSaved} label={`${c.roi.timeSaved}h diarias recuperadas`}/>
                  </div>
                  {/* No-shows (if applicable) */}
                  {c.roi.noShowBefore > 0 && (
                    <div style={{background:'#181C28',border:'1px solid #1E2235',borderRadius:16,padding:'20px 16px'}}>
                      <div style={{fontSize:11,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>REDUCCIÓN NO-SHOWS</div>
                      <IlluNoShows before={c.roi.noShowBefore} after={c.roi.noShowAfter}/>
                    </div>
                  )}
                  {/* Revenue */}
                  <div style={{background:'#181C28',border:'1px solid #1E2235',borderRadius:16,padding:'20px 16px'}}>
                    <div style={{fontSize:11,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>INGRESOS RECUPERADOS</div>
                    <IlluRevenue lost={Math.round(c.roi.ingresosMes * 0.7)} recovered={c.roi.ingresosMes} currency="€"/>
                  </div>
                  {/* Sector hub */}
                  <div style={{background:'#181C28',border:'1px solid #1E2235',borderRadius:16,padding:'20px 16px'}}>
                    <div style={{fontSize:11,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>SISTEMA NEURIA</div>
                    <IlluSectorHero sector={c.illu}/>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div style={{padding:'24px 28px',background:`rgba(${colorRgb(c.color)},0.04)`,border:`1px solid ${c.color}25`,borderRadius:16,display:'flex',gap:20,alignItems:'flex-start'}}>
                <div style={{width:48,height:48,borderRadius:'50%',background:c.color,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:16,fontWeight:800,color:'#fff',flexShrink:0}}>{c.init}</div>
                <div>
                  <p style={{fontSize:15,color:'#BEC4E0',lineHeight:1.8,fontStyle:'italic',marginBottom:10}}>"{c.quote}"</p>
                  <div style={{fontSize:13,color:'#7A80A0',fontWeight:500}}>{c.author}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR TEASER */}
      <section style={{padding:'80px 0',background:'#080910',borderTop:'1px solid #1E2235',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,110,247,0.07), transparent 60%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}} className="two-col">
            <div>
              <div className="section-label">Tu ROI estimado</div>
              <h2 className="section-title">¿Cuánto puede ahorrar tu negocio?</h2>
              <p style={{fontSize:16,color:'#7A80A0',lineHeight:1.75,marginBottom:32}}>
                La media de nuestros clientes recupera entre <strong style={{color:'#F0F2FF'}}>1.500€ y 4.000€ al mes</strong> entre ingresos protegidos, tiempo ahorrado y reducción de no-shows. El setup se paga en menos de 30 días.
              </p>
              <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:36}}>
                {[
                  {icon:'⏱', metric:'2.1h/día', label:'tiempo medio recuperado por negocio'},
                  {icon:'📉', metric:'−55%', label:'reducción media de no-shows en 90 días'},
                  {icon:'💶', metric:'+2.400€/mes', label:'ingreso extra medio entre todos los sectores'},
                  {icon:'🔄', metric:'18 días', label:'payback medio de la inversión inicial'},
                ].map((r,i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:'14px 18px',background:'#10131C',border:'1px solid #252A3F',borderRadius:12}}>
                    <span style={{fontSize:20}}>{r.icon}</span>
                    <div>
                      <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:800,color:'#F0F2FF'}}>{r.metric}</span>
                      <span style={{fontSize:13,color:'#7A80A0',marginLeft:10}}>{r.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => gotoForm()} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'16px 32px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:16,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
                Calcula tu ROI en una demo gratuita →
              </button>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:20}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:12,textTransform:'uppercase'}}>Respuesta al cliente</div>
                <IlluResponseTime/>
              </div>
              <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:20}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:12,textTransform:'uppercase'}}>Agenda cubierta</div>
                <IlluCalendar/>
              </div>
              <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:20}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:12,textTransform:'uppercase'}}>No-shows sector salud</div>
                <IlluNoShows before={20} after={8}/>
              </div>
              <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:20}}>
                <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginBottom:12,textTransform:'uppercase'}}>Dashboard en tiempo real</div>
                <IlluDashboard/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0',background:'#0D0F18',borderTop:'1px solid #1E2235'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title" style={{marginBottom:16}}>Tu empresa puede ser el próximo caso</h2>
          <p style={{fontSize:16,color:'#7A80A0',marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>Una demo gratuita de 30 minutos para ver qué resultados puede conseguir tu negocio con NeuriaN.</p>
          <button onClick={() => gotoForm()} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'16px 32px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:16,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
            Quiero resultados como estos →
          </button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CasosPage });
