
function ServiciosPage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  const [active, setActive] = React.useState(0);

  const services = [
    {
      icon: '⚙️', color: '#4F6EF7', colorRgb: '79,110,247',
      title: 'Automatización de procesos',
      tagline: 'Elimina las tareas repetitivas que consumen el tiempo de tu equipo',
      desc: 'Analizamos tus flujos de trabajo e identificamos qué tareas pueden automatizarse sin perder el control. Desde confirmaciones de citas hasta seguimientos post-servicio, cada proceso repetitivo es una oportunidad de ahorro.',
      benefits: ['Reducción del 70% en tiempo administrativo','Menos errores humanos en procesos clave','Flujos personalizados para tu negocio','Informes automáticos y alertas en tiempo real'],
      useCase: 'Una clínica dental automatiza confirmaciones, recordatorios y encuestas de satisfacción. Su recepcionista ahorra 2 horas diarias.',
      visual: [
        { step: 'Cliente solicita cita', status: 'done', icon: '📩' },
        { step: 'Sistema confirma disponibilidad', status: 'done', icon: '🔍' },
        { step: 'Envío de confirmación automática', status: 'active', icon: '✉️' },
        { step: 'Recordatorio 24h antes', status: 'pending', icon: '🔔' },
        { step: 'Encuesta post-visita', status: 'pending', icon: '⭐' },
      ]
    },
    {
      icon: '🤖', color: '#00D4AA', colorRgb: '0,212,170',
      title: 'Inteligencia Artificial aplicada',
      tagline: 'IA que trabaja dentro de tu negocio, no en contra de él',
      desc: 'Implementamos modelos de lenguaje y sistemas de IA para responder preguntas frecuentes, calificar leads, generar presupuestos automáticos o analizar el comportamiento de tus clientes.',
      benefits: ['Respuestas automáticas precisas y naturales','Clasificación y priorización de consultas','Análisis predictivo de cancelaciones','Personalización de comunicaciones a escala'],
      useCase: 'Un centro de estética usa IA para responder 80% de las preguntas frecuentes en WhatsApp sin intervención humana.',
      visual: [
        { step: 'Consulta del cliente', status: 'done', icon: '💬' },
        { step: 'Análisis de intención', status: 'done', icon: '🧠' },
        { step: 'Generación de respuesta', status: 'active', icon: '✨' },
        { step: 'Respuesta personalizada', status: 'pending', icon: '📤' },
        { step: 'Aprendizaje continuo', status: 'pending', icon: '📈' },
      ]
    },
    {
      icon: '💬', color: '#7B96FF', colorRgb: '123,150,255',
      title: 'Chatbots y asistentes digitales',
      tagline: 'Tu negocio siempre disponible, en el canal que usen tus clientes',
      desc: 'Diseñamos y configuramos asistentes conversacionales para WhatsApp, tu web o Instagram. Gestionan reservas, responden preguntas y derivan al equipo humano solo cuando es necesario.',
      benefits: ['Disponible 24/7, también en festivos','Integración con WhatsApp Business, web e Instagram','Gestión de reservas y consultas sin intervención','Traspaso a agente humano cuando se necesita'],
      useCase: 'Un gimnasio implementa un chatbot en WhatsApp que gestiona bajas, pausas y nuevas altas sin que el equipo intervenga.',
      visual: [
        { step: 'Mensaje en WhatsApp', status: 'done', icon: '📱' },
        { step: 'Identificación del cliente', status: 'done', icon: '👤' },
        { step: 'Resolución automática', status: 'active', icon: '🤖' },
        { step: 'Confirmación al cliente', status: 'pending', icon: '✅' },
        { step: 'Registro en sistema', status: 'pending', icon: '📋' },
      ]
    },
    {
      icon: '🔗', color: '#4F6EF7', colorRgb: '79,110,247',
      title: 'Integraciones y conexiones',
      tagline: 'Conecta todas tus herramientas para que trabajen juntas',
      desc: 'Conectamos tu CRM, agenda, sistema de pagos, correo electrónico y cualquier herramienta que ya uses. Con Make, Zapier o integraciones directas vía API, tus datos fluyen solos entre sistemas.',
      benefits: ['Integración con más de 500 herramientas','Sincronización bidireccional de datos','Sin duplicidades ni errores de transferencia manual','Paneles de control unificados'],
      useCase: 'Un taller mecánico conecta su CRM con WhatsApp y Google Calendar. Los presupuestos aprobados crean cita automáticamente.',
      visual: [
        { step: 'CRM actualizado', status: 'done', icon: '📊' },
        { step: 'Trigger detectado', status: 'done', icon: '⚡' },
        { step: 'Sincronización entre sistemas', status: 'active', icon: '🔄' },
        { step: 'Notificación al equipo', status: 'pending', icon: '🔔' },
        { step: 'Registro completado', status: 'pending', icon: '✔️' },
      ]
    },
  ];

  const s = services[active];

  return (
    <div>
      {/* Hero */}
      <section style={{padding:'160px 0 100px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,110,247,0.1), transparent 60%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{margin:'0 auto 20px'}}>Nuestros servicios</div>
          <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(40px,5vw,68px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.06,color:'#F0F2FF',marginBottom:24,maxWidth:800,margin:'0 auto 24px'}}>
            Soluciones a medida para<br/>
            <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>cada proceso de tu empresa</span>
          </h1>
          <p style={{fontSize:18,color:'#7A80A0',lineHeight:1.75,maxWidth:580,margin:'0 auto 48px'}}>
            No vendemos tecnología. Resolvemos problemas reales de gestión con implementaciones concretas, rápidas y sin tecnicismos.
          </p>
        </div>
      </section>

      {/* Service tabs */}
      <section style={{padding:'80px 0 120px',background:'#0D0F18'}}>
        <div className="container">
          {/* Tab selector */}
          <div style={{display:'flex',gap:8,marginBottom:56,flexWrap:'wrap',justifyContent:'center'}}>
            {services.map((sv, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display:'flex',alignItems:'center',gap:10,padding:'12px 22px',borderRadius:999,
                background: active===i ? `rgba(${sv.colorRgb},0.12)` : 'rgba(255,255,255,0.03)',
                border: active===i ? `1px solid rgba(${sv.colorRgb},0.4)` : '1px solid #252A3F',
                cursor:'pointer',fontSize:14,fontWeight:600,
                color: active===i ? sv.color : '#7A80A0',
                fontFamily:"'DM Sans',sans-serif",transition:'all 220ms'
              }}>
                <span>{sv.icon}</span> {sv.title}
              </button>
            ))}
          </div>

          {/* Service detail */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start'}} className="two-col">
            <div>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'5px 14px',borderRadius:999,background:`rgba(${s.colorRgb},0.1)`,border:`1px solid rgba(${s.colorRgb},0.3)`,fontSize:12,fontWeight:600,color:s.color,marginBottom:20,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.06em',textTransform:'uppercase'}}>
                {s.icon} {s.title}
              </div>
              <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(28px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.12,color:'#F0F2FF',marginBottom:16}}>{s.tagline}</h2>
              <p style={{fontSize:16,color:'#7A80A0',lineHeight:1.75,marginBottom:32}}>{s.desc}</p>

              <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:36}}>
                {s.benefits.map((b, i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12,padding:'14px 18px',background:'#10131C',border:'1px solid #252A3F',borderRadius:12}}>
                    <div style={{width:22,height:22,borderRadius:6,background:`rgba(${s.colorRgb},0.1)`,border:`1px solid rgba(${s.colorRgb},0.25)`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:1,fontSize:12,color:s.color}}>✓</div>
                    <span style={{fontSize:14,color:'#BEC4E0',lineHeight:1.5}}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Use case */}
              <div style={{padding:'20px 22px',background:`rgba(${s.colorRgb},0.05)`,border:`1px solid rgba(${s.colorRgb},0.2)`,borderRadius:16}}>
                <div style={{fontSize:11,fontWeight:600,color:s.color,fontFamily:"'JetBrains Mono',monospace",letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Caso real</div>
                <p style={{fontSize:14,color:'#BEC4E0',lineHeight:1.7,fontStyle:'italic'}}>"{s.useCase}"</p>
              </div>

              <button onClick={() => go('contact')} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:999,background:s.color,border:'none',cursor:'pointer',fontSize:15,fontWeight:700,color: s.color==='#00D4AA' ? '#06100D' : '#fff',fontFamily:"'DM Sans',sans-serif",marginTop:32,transition:'all 220ms'}}>
                Solicitar demo de {s.title} →
              </button>
            </div>

            {/* Flow visual */}
            <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:22,padding:28,boxShadow:'0 24px 60px rgba(0,0,0,0.4)'}}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:22,fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:'#7A80A0',letterSpacing:'0.08em',textTransform:'uppercase'}}>
                <div style={{width:8,height:8,borderRadius:'50%',background:'#00D4AA'}}/>
                Flujo automatizado · En tiempo real
              </div>
              {s.visual.map((v, i) => (
                <React.Fragment key={i}>
                  <div style={{display:'flex',alignItems:'center',gap:14,padding:'14px 16px',borderRadius:12,background:'#181C28',border:`1px solid ${v.status==='active' ? `rgba(${s.colorRgb},0.4)` : '#1E2235'}`,marginBottom:8,boxShadow: v.status==='active' ? `0 0 20px rgba(${s.colorRgb},0.1)` : 'none',transition:'all 300ms'}}>
                    <div style={{width:36,height:36,borderRadius:10,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,background: v.status==='done' ? 'rgba(34,197,94,0.1)' : v.status==='active' ? `rgba(${s.colorRgb},0.15)` : 'rgba(255,255,255,0.03)',border: `1px solid ${v.status==='done' ? 'rgba(34,197,94,0.2)' : v.status==='active' ? `rgba(${s.colorRgb},0.3)` : '#252A3F'}`}}>{v.status==='done' ? '✓' : v.icon}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:600,color: v.status==='pending' ? '#4A5070' : '#F0F2FF'}}>{v.step}</div>
                    </div>
                    <div style={{fontSize:11,fontWeight:600,padding:'3px 9px',borderRadius:999,
                      background: v.status==='done' ? 'rgba(34,197,94,0.1)' : v.status==='active' ? `rgba(${s.colorRgb},0.12)` : 'rgba(255,255,255,0.03)',
                      color: v.status==='done' ? '#22C55E' : v.status==='active' ? s.color : '#4A5070',
                      border: `1px solid ${v.status==='done' ? 'rgba(34,197,94,0.25)' : v.status==='active' ? `rgba(${s.colorRgb},0.3)` : '#252A3F'}`,
                      animation: v.status==='active' ? 'status-pulse 2s infinite' : 'none'
                    }}>
                      {v.status==='done' ? 'Completado' : v.status==='active' ? 'En proceso' : 'Pendiente'}
                    </div>
                  </div>
                  {i < s.visual.length-1 && <div style={{textAlign:'center',color:'#252A3F',fontSize:18,margin:'2px 0'}}>↓</div>}
                </React.Fragment>
              ))}
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 18px',background:`rgba(${s.colorRgb},0.06)`,border:`1px solid rgba(${s.colorRgb},0.25)`,borderRadius:14,marginTop:8}}>
                <span style={{fontSize:14,fontWeight:600,color:s.color}}>Resultado final</span>
                <span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:800,color:'#F0F2FF'}}>100% automático</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section style={{padding:'80px 0',background:'#080910',borderTop:'1px solid #1E2235'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title" style={{marginBottom:16}}>Precios competitivos, sin sorpresas</h2>
          <p style={{fontSize:16,color:'#7A80A0',lineHeight:1.75,maxWidth:560,margin:'0 auto 48px'}}>
            Cada implementación es diferente. Por eso hacemos una propuesta a medida tras entender tu negocio. Sin letra pequeña, sin costes ocultos.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:900,margin:'0 auto'}} className="benefits-grid">
            {[
              { title:'Setup inicial', desc:'Configuración completa de tu sistema en menos de 48h, sin interrumpir tu actividad.', icon:'⚡' },
              { title:'Cuota mensual', desc:'Precio fijo y predecible. Sin comisiones por uso, sin sorpresas a fin de mes.', icon:'📅' },
              { title:'Soporte incluido', desc:'Equipo disponible por WhatsApp para cualquier ajuste o consulta que necesites.', icon:'💬' },
            ].map((p,i) => (
              <div key={i} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:30}}>
                <div style={{fontSize:28,marginBottom:14}}>{p.icon}</div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,color:'#F0F2FF',marginBottom:10}}>{p.title}</div>
                <div style={{fontSize:14,color:'#7A80A0',lineHeight:1.7}}>{p.desc}</div>
              </div>
            ))}
          </div>
          <button onClick={() => go('contact')} style={{marginTop:40,display:'inline-flex',alignItems:'center',gap:8,padding:'16px 32px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:16,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
            Solicitar propuesta gratuita →
          </button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServiciosPage });
