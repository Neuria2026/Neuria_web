
function BlogPage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  const [selected, setSelected] = React.useState(null);
  const [filter, setFilter] = React.useState('Todos');

  const posts = [
    {
      slug: 'automatizar-citas-whatsapp',
      category: 'Automatización',
      title: '5 formas de automatizar las citas de tu negocio por WhatsApp',
      excerpt: 'WhatsApp es el canal favorito de tus clientes. Descubre cómo convertirlo en un sistema de reservas automático sin perder el trato personal.',
      date: '18 abril 2025',
      readTime: '6 min',
      color: '#4F6EF7',
      content: `WhatsApp tiene una tasa de apertura del 98%. Ningún email, ninguna llamada, ningún SMS se acerca. Por eso, si tu negocio todavía gestiona las citas por teléfono o con una agenda física, estás perdiendo clientes que prefieren escribir un mensaje a las 10 de la noche.\n\nLa buena noticia es que automatizar WhatsApp ya no es algo reservado para grandes empresas. Con las herramientas adecuadas, cualquier clínica dental, centro de estética o taller puede tener un asistente digital funcionando en 48 horas.\n\n**1. Respuesta automática fuera de horario**\nEl primer paso es asegurarte de que ningún mensaje quede sin respuesta. Un mensaje automático que confirme que has recibido la consulta y que responderás pronto vale más de lo que parece — reduce la ansiedad del cliente y le da motivo para no buscar otra opción.\n\n**2. Menú de servicios interactivo**\nEn lugar de que el cliente tenga que preguntar "¿Qué servicios ofrecéis?", ofrécele un menú con botones que le permita navegar por tus servicios, precios y disponibilidad sin que nadie tenga que intervenir.\n\n**3. Solicitud y confirmación de cita automática**\nEste es el nivel más impactante. Un sistema bien configurado puede gestionar todo el proceso: el cliente pide cita, el sistema comprueba disponibilidad en tu agenda, confirma la cita y envía un resumen. Sin intervención humana.\n\n**4. Recordatorios automatizados**\nEl 20-30% de los no-shows se pueden eliminar simplemente enviando un recordatorio 24 horas antes. Y si el cliente no puede venir, que tenga opción de cancelar o reprogramar con un solo toque — así liberas el hueco para otro cliente.\n\n**5. Seguimiento post-visita**\nLa relación con el cliente no termina cuando se va de tu negocio. Un mensaje automático 24 horas después preguntando si todo fue bien, o con una oferta para su próxima visita, puede marcar la diferencia entre un cliente que vuelve y uno que no.`
    },
    {
      slug: 'ia-para-pymes-sin-tecnicismos',
      category: 'Inteligencia Artificial',
      title: 'Inteligencia artificial para pymes: qué es, qué no es y para qué sirve realmente',
      excerpt: 'Sin los tecnicismos de siempre. Una guía honesta sobre qué puede hacer la IA por tu negocio y qué expectativas debes tener.',
      date: '10 abril 2025',
      readTime: '8 min',
      color: '#00D4AA',
      content: `Hablar de inteligencia artificial hoy genera dos reacciones: o entusiasmo desmedido o escepticismo total. La realidad, como casi siempre, está en el medio.\n\nLa IA no va a sustituir a tus empleados ni a transformar tu negocio de la noche a la mañana. Pero sí puede encargarse de ciertas tareas repetitivas con una eficiencia que ningún humano puede igualar.\n\n**Qué puede hacer la IA por tu negocio ahora mismo**\nResponder preguntas frecuentes con exactitud y en segundos. Clasificar y priorizar consultas según su urgencia. Redactar presupuestos o respuestas estándar a partir de una plantilla. Analizar patrones en el comportamiento de tus clientes para anticipar qué necesitan.\n\n**Qué NO puede hacer (todavía)**\nReemplazar la empatía humana en conversaciones complejas. Tomar decisiones estratégicas por ti. Entender contextos muy específicos de tu sector sin una configuración previa.\n\n**El error más común**\nMuchas empresas implementan IA sin tener claro el problema que quieren resolver. La IA es una herramienta, no una solución mágica. El resultado depende del problema que intentas resolver y de cómo configures el sistema.\n\n**Por dónde empezar**\nIdentifica las tres preguntas más repetidas que recibe tu equipo. Esas son el punto de partida perfecto para una implementación de IA que genere impacto real desde el primer día.`
    },
    {
      slug: 'no-shows-como-reducirlos',
      category: 'Gestión',
      title: 'Cómo reducir las ausencias en tu negocio un 40% con recordatorios automáticos',
      excerpt: 'Un cliente que no aparece sin avisar no es solo un ingreso perdido — también es un hueco que no pudiste llenar. Estos son los sistemas que funcionan.',
      date: '3 abril 2025',
      readTime: '5 min',
      color: '#7B96FF',
      content: `Un no-show tiene un coste doble: el ingreso que no entra y el tiempo que no puedes recuperar. En sectores como la salud, la estética o los talleres, donde cada hora de trabajo tiene un valor directo, reducir las ausencias puede suponer miles de euros al año.\n\n**Por qué los clientes no aparecen**\nLa mayoría de los no-shows no son malintencionados. Son consecuencia de: olvidar la cita, no recordar la fecha exacta, tener un imprevisto y no saber cómo cancelar fácilmente.\n\nEste último punto es clave. Si cancelar una cita requiere llamar durante el horario de apertura, muchos clientes simplemente no lo hacen. Y tú te quedas con un hueco vacío.\n\n**El sistema que funciona**\nLa combinación que mejor resultados da en nuestros clientes es: recordatorio 48h antes con opción de confirmar o cancelar con un toque, recordatorio 2h antes solo para confirmar, y notificación al negocio cuando hay una cancelación para activar inmediatamente la lista de espera.\n\n**El impacto real**\nNuestros clientes que implementan este sistema reducen los no-shows entre un 30% y un 45% en los primeros tres meses. En una clínica con 20 citas al día, eso puede suponer recuperar 3-4 citas que antes se perdían.`
    },
    {
      slug: 'integraciones-crm-agenda',
      category: 'Integraciones',
      title: 'Conecta tu CRM, tu agenda y tu WhatsApp: la guía completa',
      excerpt: 'Tener los datos de tus clientes dispersos entre tres herramientas distintas es un problema que se puede resolver. Así es como lo hacemos.',
      date: '25 marzo 2025',
      readTime: '7 min',
      color: '#4F6EF7',
      content: `La mayoría de las pymes usan entre 5 y 8 herramientas digitales distintas: un CRM, una agenda, un sistema de facturación, WhatsApp, email, redes sociales... El problema es que estas herramientas no hablan entre sí, y el equipo tiene que hacer de intermediario manual — copiando datos de un lado a otro, con el riesgo de errores que eso implica.\n\n**El coste oculto de los datos dispersos**\nCada vez que alguien tiene que copiar manualmente información de un sistema a otro, invierte tiempo y arriesga cometer un error. Un número de teléfono mal escrito, una cita apuntada en la agenda pero no en el CRM, un presupuesto enviado que nadie ha registrado.\n\n**Cómo funciona una integración**\nUna integración conecta dos o más herramientas para que los datos fluyan automáticamente entre ellas. Cuando llega una nueva reserva por WhatsApp, se crea automáticamente en tu agenda y en tu CRM. Cuando se confirma un presupuesto, se genera automáticamente una orden de trabajo.\n\n**Herramientas que usamos**\nMake (antes Integromat) y Zapier son las dos plataformas de integración más potentes del mercado. Con ellas podemos conectar más de 500 herramientas distintas sin necesidad de programar. Para casos más complejos, trabajamos directamente con las APIs de cada sistema.\n\n**Por dónde empezar**\nEl primer paso es mapear tus flujos de trabajo actuales: qué información se mueve, entre qué herramientas, y dónde se producen los cuellos de botella. A partir de ahí, las integraciones se diseñan para resolver exactamente esos puntos de fricción.`
    },
    {
      slug: 'automatizacion-sector-salud',
      category: 'Sectores',
      title: 'Automatización en clínicas y consultas médicas: lo que necesitas saber',
      excerpt: 'El sector sanitario tiene sus particularidades. Privacidad, regulación y confianza del paciente. Así es como la automatización funciona respetando todo eso.',
      date: '18 marzo 2025',
      readTime: '6 min',
      color: '#00D4AA',
      content: `Automatizar en el sector sanitario genera dudas legítimas. ¿Es seguro? ¿Cumple con el RGPD? ¿No perderá el trato personal que los pacientes valoran?\n\nLa respuesta a las tres es sí, si se hace bien.\n\n**Privacidad y RGPD**\nTodos los sistemas que implementamos para clínicas y consultas médicas cumplen con el Reglamento General de Protección de Datos. Los datos de los pacientes nunca se almacenan en terceros sin los consentimientos adecuados, y los sistemas se configuran para minimizar la exposición de información sensible.\n\n**Qué se puede automatizar en salud**\nGestión de citas y recordatorios. Respuestas a preguntas frecuentes (horarios, precios, localización). Envío de documentación pre-consulta. Encuestas de satisfacción post-visita. Seguimiento de pacientes crónicos con recordatorios de revisión.\n\n**Qué NO se automatiza**\nTodo lo que requiere criterio médico. El diagnóstico, el consejo clínico, la gestión de situaciones de urgencia. La IA complementa al profesional sanitario — nunca lo sustituye.\n\n**El resultado**\nNuestros clientes del sector sanitario reportan reducciones de entre el 30% y el 45% en no-shows, y una mejora significativa en la satisfacción del paciente — que valora poder gestionar sus citas sin tener que llamar en horario de apertura.`
    },
    {
      slug: 'roi-automatizacion-pymes',
      category: 'Gestión',
      title: 'Cómo calcular el ROI de automatizar tu negocio (con ejemplos reales)',
      excerpt: 'Antes de invertir en automatización, necesitas saber cuánto te va a devolver. Te enseñamos a calcularlo con números concretos.',
      date: '11 marzo 2025',
      readTime: '5 min',
      color: '#7B96FF',
      content: `La automatización tiene un coste. Como cualquier inversión empresarial, antes de comprometerte necesitas saber qué retorno puedes esperar y en cuánto tiempo.\n\n**Los tres tipos de ROI que debes medir**\n\nROI directo en tiempo: Cada hora que tu equipo deja de dedicar a tareas administrativas tiene un valor. Si tu recepcionista cobra 15€/hora y automatizar le ahorra 2 horas al día, el ahorro mensual solo en ese concepto es de 600€.\n\nROI en ingresos recuperados: Cada cita perdida por no coger el teléfono es un ingreso que no entra. Si pierdes 3 citas al día con un ticket medio de 60€, son 180€ diarios — más de 4.000€ mensuales en ingresos que se escapan.\n\nROI en reducción de no-shows: Si tienes 20 citas al día y el 20% no aparece, son 4 citas perdidas. A 60€ de media, son 240€ diarios. Reducir los no-shows un 40% supone recuperar casi 100€ al día.\n\n**Un ejemplo real**\nUna clínica dental con 25 citas al día, ticket medio de 80€ y una tasa de no-show del 18%. Neuria les costó 350€/mes. Los resultados: −40% no-shows (ahorro de 1.440€/mes), +12% más citas cerradas (960€/mes). ROI total: 290% en el primer mes.`
    },
  ];

  const categories = ['Todos', ...Array.from(new Set(posts.map(p => p.category)))];
  const filtered = filter === 'Todos' ? posts : posts.filter(p => p.category === filter);

  if (selected) {
    const post = posts.find(p => p.slug === selected);
    return (
      <div>
        <section style={{padding:'140px 0 60px',background:'#080910'}}>
          <div className="container" style={{maxWidth:760,margin:'0 auto'}}>
            <button onClick={() => setSelected(null)} style={{display:'flex',alignItems:'center',gap:8,background:'none',border:'none',cursor:'pointer',fontSize:14,color:'#7A80A0',fontFamily:"'DM Sans',sans-serif",marginBottom:40,padding:0}}>
              ← Volver al blog
            </button>
            <div style={{display:'inline-flex',alignItems:'center',padding:'4px 12px',borderRadius:999,background:`rgba(${post.color==='#4F6EF7'?'79,110,247':post.color==='#00D4AA'?'0,212,170':'123,150,255'},0.1)`,border:`1px solid ${post.color}40`,fontSize:12,fontWeight:600,color:post.color,fontFamily:"'JetBrains Mono',monospace",marginBottom:16}}>{post.category}</div>
            <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(28px,3.5vw,44px)',fontWeight:900,letterSpacing:'-0.03em',lineHeight:1.12,color:'#F0F2FF',marginBottom:16}}>{post.title}</h1>
            <div style={{display:'flex',alignItems:'center',gap:16,fontSize:13,color:'#7A80A0',marginBottom:48,paddingBottom:32,borderBottom:'1px solid #1E2235'}}>
              <span>{post.date}</span><span>·</span><span>{post.readTime} de lectura</span>
            </div>
            <div style={{fontSize:16,color:'#BEC4E0',lineHeight:1.85}}>
              {post.content.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h3 key={i} style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:20,fontWeight:700,color:'#F0F2FF',margin:'32px 0 12px'}}>{para.slice(2,-2)}</h3>;
                }
                const rendered = para.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F0F2FF">$1</strong>');
                return <p key={i} style={{marginBottom:20}} dangerouslySetInnerHTML={{__html:rendered}}/>;
              })}
            </div>
            <div style={{marginTop:48,padding:'28px 32px',background:'#10131C',border:'1px solid #252A3F',borderRadius:20,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
              <div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,color:'#F0F2FF',marginBottom:6}}>¿Te ha resultado útil?</div>
                <p style={{fontSize:14,color:'#7A80A0'}}>Descubre cómo Neuria puede implementar esto en tu negocio.</p>
              </div>
              <button onClick={() => go('contact')} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:14,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif",whiteSpace:'nowrap'}}>
                Habla con nosotros →
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section style={{padding:'160px 0 80px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,110,247,0.08), transparent 55%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1,textAlign:'center'}}>
          <div className="section-label" style={{margin:'0 auto 20px'}}>Blog</div>
          <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(40px,5vw,64px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.06,color:'#F0F2FF',marginBottom:24,maxWidth:600,margin:'0 auto 24px'}}>
            Automatización sin<br/>
            <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>tecnicismos</span>
          </h1>
          <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.75,maxWidth:500,margin:'0 auto'}}>
            Guías prácticas, casos reales y estrategias concretas para empresas que quieren trabajar de forma más inteligente.
          </p>
        </div>
      </section>

      <section style={{padding:'60px 0 120px',background:'#0D0F18'}}>
        <div className="container">
          {/* Filter */}
          <div style={{display:'flex',gap:8,marginBottom:48,flexWrap:'wrap'}}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding:'8px 18px',borderRadius:999,fontSize:13,fontWeight:500,
                background: filter===cat ? 'rgba(79,110,247,0.12)' : 'rgba(255,255,255,0.03)',
                border: filter===cat ? '1px solid rgba(79,110,247,0.4)' : '1px solid #252A3F',
                color: filter===cat ? '#7B96FF' : '#7A80A0',
                cursor:'pointer',fontFamily:"'DM Sans',sans-serif",transition:'all 200ms'
              }}>{cat}</button>
            ))}
          </div>

          {/* Featured post */}
          <div onClick={() => setSelected(filtered[0].slug)} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:24,padding:40,marginBottom:20,cursor:'pointer',transition:'all 220ms',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,alignItems:'center'}} className="two-col">
            <div>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20}}>
                <span style={{display:'inline-flex',padding:'4px 12px',borderRadius:999,background:`rgba(${filtered[0].color==='#4F6EF7'?'79,110,247':'0,212,170'},0.1)`,border:`1px solid ${filtered[0].color}40`,fontSize:12,fontWeight:600,color:filtered[0].color,fontFamily:"'JetBrains Mono',monospace"}}>{filtered[0].category}</span>
                <span style={{fontSize:12,color:'#7A80A0',fontFamily:"'JetBrains Mono',monospace"}}>Destacado</span>
              </div>
              <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(22px,2.5vw,30px)',fontWeight:800,letterSpacing:'-0.02em',lineHeight:1.2,color:'#F0F2FF',marginBottom:16}}>{filtered[0].title}</h2>
              <p style={{fontSize:15,color:'#7A80A0',lineHeight:1.75,marginBottom:24}}>{filtered[0].excerpt}</p>
              <div style={{fontSize:13,color:'#4A5070'}}>{filtered[0].date} · {filtered[0].readTime}</div>
            </div>
            <div style={{background:'#181C28',border:'1px solid #1E2235',borderRadius:16,height:200,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{textAlign:'center'}}>
                <div style={{fontSize:48,marginBottom:8}}>📝</div>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:'#4A5070'}}>Leer artículo →</div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="test-grid">
            {filtered.slice(1).map(post => (
              <div key={post.slug} onClick={() => setSelected(post.slug)} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:28,cursor:'pointer',transition:'all 220ms',display:'flex',flexDirection:'column'}}>
                <div style={{display:'inline-flex',padding:'4px 12px',borderRadius:999,background:`rgba(${post.color==='#4F6EF7'?'79,110,247':post.color==='#00D4AA'?'0,212,170':'123,150,255'},0.1)`,border:`1px solid ${post.color}40`,fontSize:11,fontWeight:600,color:post.color,fontFamily:"'JetBrains Mono',monospace",marginBottom:16,alignSelf:'flex-start'}}>{post.category}</div>
                <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,letterSpacing:'-0.02em',lineHeight:1.3,color:'#F0F2FF',marginBottom:12,flex:1}}>{post.title}</h3>
                <p style={{fontSize:13,color:'#7A80A0',lineHeight:1.65,marginBottom:20}}>{post.excerpt}</p>
                <div style={{fontSize:12,color:'#4A5070',paddingTop:16,borderTop:'1px solid #1E2235',display:'flex',justifyContent:'space-between'}}>
                  <span>{post.date}</span><span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { BlogPage });
