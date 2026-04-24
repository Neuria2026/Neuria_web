
function CasosPage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  const [active, setActive] = React.useState(0);

  const cases = [
    {
      sector: 'Clínica dental',
      company: 'Clínica Dental Sonrisa',
      location: 'Barcelona',
      init: 'CS',
      color: '#4F6EF7',
      tagline: 'De 12 llamadas perdidas al día a agenda llena sin esfuerzo',
      before: {
        title: 'La situación antes de Neuria',
        points: [
          'La recepcionista recibía entre 40 y 60 llamadas al día, y perdía una media de 12 por estar atendiendo pacientes.',
          'Los pacientes escribían por WhatsApp fuera de horario y no recibían respuesta hasta el día siguiente.',
          'El 20% de las citas reservadas no se presentaban sin avisar, dejando huecos en la agenda.',
          '2 horas diarias dedicadas a confirmaciones y recordatorios manuales.',
        ]
      },
      implementation: {
        title: 'Qué implementamos',
        points: [
          'Asistente de WhatsApp que gestiona reservas 24/7 en lenguaje natural.',
          'Recordatorios automáticos 48h y 2h antes de cada cita.',
          'Sistema de lista de espera que rellena huecos de cancelaciones al instante.',
          'Integración directa con su software de gestión (Gesden).',
        ]
      },
      after: {
        title: 'Resultados a los 3 meses',
        stats: [
          { value: '0', label: 'Llamadas perdidas/día', color: '#00D4AA' },
          { value: '+38%', label: 'Más citas cerradas', color: '#7B96FF' },
          { value: '−41%', label: 'Menos no-shows', color: '#00D4AA' },
          { value: '2.5h', label: 'Ahorradas al día', color: '#7B96FF' },
        ],
        quote: 'Antes el teléfono era mi peor enemigo. Ahora ni lo escucho. El sistema lo gestiona todo y yo me centro en mis pacientes.',
        author: 'Laura Martínez · Directora Clínica Dental Sonrisa'
      }
    },
    {
      sector: 'Centro de estética',
      company: 'Centro de Estética Luxe',
      location: 'Madrid',
      init: 'CL',
      color: '#00D4AA',
      tagline: 'WhatsApp caótico convertido en motor de reservas automático',
      before: {
        title: 'La situación antes de Neuria',
        points: [
          'Las esteticistas respondían mensajes de WhatsApp entre tratamientos, perdiendo concentración y cometiendo errores.',
          'Muchos clientes preguntaban disponibilidad pero nunca confirmaban — esfuerzo perdido.',
          'Sin sistema de recordatorios, el 25% de las citas no aparecían.',
          'Imposible gestionar la lista de espera de forma eficiente.',
        ]
      },
      implementation: {
        title: 'Qué implementamos',
        points: [
          'Bot de WhatsApp con menú interactivo de servicios y precios.',
          'Confirmación automática con enlace para reprogramar o cancelar.',
          'Seguimiento post-visita con oferta personalizada para próxima cita.',
          'Panel de control en tiempo real con estado de todas las citas del día.',
        ]
      },
      after: {
        title: 'Resultados a los 3 meses',
        stats: [
          { value: '+52%', label: 'Citas gestionadas sin intervención', color: '#00D4AA' },
          { value: '−28%', label: 'Reducción de no-shows', color: '#7B96FF' },
          { value: '1.8h', label: 'Liberadas al día por esteticista', color: '#00D4AA' },
          { value: '+22%', label: 'Aumento de ingresos mensuales', color: '#7B96FF' },
        ],
        quote: 'Mis clientas pueden reservar a las 11 de la noche si quieren. Al día siguiente tengo la agenda completa sin haber hecho nada.',
        author: 'Sonia Reyes · Propietaria Centro Luxe'
      }
    },
    {
      sector: 'Taller mecánico',
      company: 'Talleres Hermanos Gómez',
      location: 'Valencia',
      init: 'TG',
      color: '#7B96FF',
      tagline: 'De presupuestos perdidos en el papel a seguimiento automático 100%',
      before: {
        title: 'La situación antes de Neuria',
        points: [
          'Los mecánicos hacían presupuestos en papel que nunca llegaban al cliente de forma sistemática.',
          'Sin seguimiento, el 60% de los presupuestos enviados no recibían respuesta — y nadie los perseguía.',
          'Los clientes llamaban para saber el estado de su coche y saturaban la centralita.',
          'La información de cada cliente estaba dispersa entre WhatsApp, email y notas manuscritas.',
        ]
      },
      implementation: {
        title: 'Qué implementamos',
        points: [
          'Integración entre su software de taller y WhatsApp para envío automático de presupuestos.',
          'Seguimiento automático a las 24h si no hay respuesta al presupuesto.',
          'Notificaciones de estado del vehículo: recibido, en reparación, listo para recoger.',
          'CRM unificado con historial completo de cada cliente y cada vehículo.',
        ]
      },
      after: {
        title: 'Resultados a los 3 meses',
        stats: [
          { value: '+67%', label: 'Tasa de aceptación de presupuestos', color: '#7B96FF' },
          { value: '−80%', label: 'Llamadas de estado recibidas', color: '#00D4AA' },
          { value: '+19%', label: 'Facturación mensual', color: '#7B96FF' },
          { value: '45 min', label: 'Ahorrados por mecánico/día', color: '#00D4AA' },
        ],
        quote: 'Antes perdíamos presupuestos porque nadie tenía tiempo de hacer seguimiento. Ahora el sistema lo hace solo y hemos aumentado la facturación casi un 20%.',
        author: 'Paco Gómez · Propietario Talleres Hermanos Gómez'
      }
    },
  ];

  const c = cases[active];

  return (
    <div>
      {/* Hero */}
      <section style={{padding:'160px 0 80px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,212,170,0.08), transparent 55%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{margin:'0 auto 20px'}}>Casos de éxito</div>
          <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(40px,5vw,64px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.06,color:'#F0F2FF',marginBottom:24,maxWidth:700,margin:'0 auto 24px'}}>
            Resultados reales,<br/>
            <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>no promesas de marketing</span>
          </h1>
          <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.75,maxWidth:540,margin:'0 auto'}}>
            Tres casos documentados con datos reales de empresas que trabajan con Neuria.
          </p>
        </div>
      </section>

      {/* Case selector */}
      <section style={{padding:'60px 0 100px',background:'#0D0F18'}}>
        <div className="container">
          <div style={{display:'flex',gap:12,marginBottom:48,flexWrap:'wrap',justifyContent:'center'}}>
            {cases.map((cs, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display:'flex',flexDirection:'column',alignItems:'flex-start',padding:'16px 22px',borderRadius:16,minWidth:200,
                background: active===i ? `rgba(${cs.color==='#4F6EF7'?'79,110,247':cs.color==='#00D4AA'?'0,212,170':'123,150,255'},0.1)` : '#10131C',
                border: active===i ? `1px solid ${cs.color}40` : '1px solid #252A3F',
                cursor:'pointer',textAlign:'left',transition:'all 220ms'
              }}>
                <div style={{width:36,height:36,borderRadius:'50%',background:cs.color,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:800,color:'#fff',marginBottom:10}}>{cs.init}</div>
                <div style={{fontSize:14,fontWeight:600,color: active===i ? '#F0F2FF' : '#BEC4E0',fontFamily:"'DM Sans',sans-serif",marginBottom:2}}>{cs.company}</div>
                <div style={{fontSize:12,color:'#7A80A0'}}>{cs.sector} · {cs.location}</div>
              </button>
            ))}
          </div>

          {/* Case detail */}
          <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:24,overflow:'hidden',boxShadow:'0 24px 64px rgba(0,0,0,0.4)'}}>
            {/* Header */}
            <div style={{padding:'32px 40px',background:'#181C28',borderBottom:'1px solid #1E2235'}}>
              <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
                <div style={{width:52,height:52,borderRadius:'50%',background:c.color,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:18,fontWeight:800,color:'#fff',flexShrink:0}}>{c.init}</div>
                <div>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF'}}>{c.company}</div>
                  <div style={{fontSize:13,color:'#7A80A0'}}>{c.sector} · {c.location}</div>
                </div>
              </div>
              <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(22px,2.5vw,32px)',fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.15,color:'#F0F2FF'}}>{c.tagline}</h2>
            </div>

            <div style={{padding:'40px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}} className="two-col">
              {/* Before */}
              <div>
                <div style={{fontSize:11,fontWeight:600,color:'#EF4444',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'#EF4444',display:'inline-block'}}/>Antes
                </div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:16,fontWeight:700,color:'#F0F2FF',marginBottom:16}}>{c.before.title}</div>
                {c.before.points.map((p,i) => (
                  <div key={i} style={{display:'flex',gap:12,marginBottom:12,padding:'12px 14px',background:'rgba(239,68,68,0.04)',border:'1px solid rgba(239,68,68,0.1)',borderRadius:10}}>
                    <span style={{color:'#EF4444',flexShrink:0,marginTop:1}}>✕</span>
                    <span style={{fontSize:14,color:'#7A80A0',lineHeight:1.6}}>{p}</span>
                  </div>
                ))}
              </div>

              {/* Implementation */}
              <div>
                <div style={{fontSize:11,fontWeight:600,color:'#4F6EF7',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'#4F6EF7',display:'inline-block'}}/>Implementación
                </div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:16,fontWeight:700,color:'#F0F2FF',marginBottom:16}}>{c.implementation.title}</div>
                {c.implementation.points.map((p,i) => (
                  <div key={i} style={{display:'flex',gap:12,marginBottom:12,padding:'12px 14px',background:'rgba(79,110,247,0.04)',border:'1px solid rgba(79,110,247,0.12)',borderRadius:10}}>
                    <span style={{color:'#4F6EF7',flexShrink:0,marginTop:1}}>→</span>
                    <span style={{fontSize:14,color:'#BEC4E0',lineHeight:1.6}}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div style={{padding:'32px 40px',background:'rgba(0,212,170,0.03)',borderTop:'1px solid rgba(0,212,170,0.15)'}}>
              <div style={{fontSize:11,fontWeight:600,color:'#00D4AA',fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:20,display:'flex',alignItems:'center',gap:8}}>
                <span style={{width:8,height:8,borderRadius:'50%',background:'#00D4AA',display:'inline-block'}}/>Después · {c.after.title}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:28}} className="stats-grid">
                {c.after.stats.map((s,i) => (
                  <div key={i} style={{textAlign:'center',padding:'20px 12px',background:'#10131C',border:'1px solid #252A3F',borderRadius:16}}>
                    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:28,fontWeight:900,letterSpacing:'-0.03em',color:s.color,marginBottom:6}}>{s.value}</div>
                    <div style={{fontSize:12,color:'#7A80A0',lineHeight:1.4}}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{padding:'20px 24px',background:'rgba(255,255,255,0.02)',border:'1px solid #252A3F',borderRadius:16}}>
                <p style={{fontSize:15,color:'#BEC4E0',lineHeight:1.75,fontStyle:'italic',marginBottom:10}}>"{c.after.quote}"</p>
                <div style={{fontSize:13,color:'#7A80A0',fontWeight:500}}>{c.after.author}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0',background:'#080910',borderTop:'1px solid #1E2235'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title" style={{marginBottom:16}}>Tu empresa puede ser el próximo caso de éxito</h2>
          <p style={{fontSize:16,color:'#7A80A0',marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>Una demo gratuita para ver qué resultados puede conseguir tu negocio con Neuria.</p>
          <button onClick={() => go('contact')} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'16px 32px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:16,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
            Quiero resultados como estos →
          </button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CasosPage });
