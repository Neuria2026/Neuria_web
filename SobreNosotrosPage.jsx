
function SobreNosotrosPage({ setPage, goToContact }) {
  const go = (id) => { setPage(id); window.scrollTo(0,0); };
  const gotoForm = goToContact || (() => gotoForm());

  const values = [
    { icon:'🎯', title:'Orientados a resultados', desc:'No nos interesa la tecnología por la tecnología. Nos interesa que tu negocio funcione mejor, gane más tiempo y pierda menos clientes.' },
    { icon:'⚡', title:'Implementación rápida', desc:'Creemos que la velocidad es una ventaja competitiva. De la primera reunión a tu sistema funcionando, en menos de 48 horas.' },
    { icon:'🤝', title:'Soporte cercano y real', desc:'Somos personas, no tickets de soporte. Cuando tienes un problema, hay alguien al otro lado que lo resuelve, sin esperas de 72h.' },
    { icon:'🔧', title:'Soluciones a medida', desc:'Tu negocio es único. No usamos plantillas genéricas — diseñamos cada automatización para tu situación específica.' },
  ];

  const milestones = [
    { year:'2021', event:'Fundación de Neuria en Barcelona con el objetivo de democratizar la automatización para pymes.' },
    { year:'2022', event:'Primeros 30 clientes en el sector sanitario. Lanzamiento del sistema de reservas por WhatsApp.' },
    { year:'2023', event:'Expansión a 6 sectores. Superamos las 10.000 citas automatizadas al mes.' },
    { year:'2024', event:'Implementación de modelos de IA propios. 150 empresas automatizadas en España y Latinoamérica.' },
    { year:'2025', event:'Lanzamiento de la plataforma multicanal: web, WhatsApp, Instagram y teléfono unificados.' },
  ];

  const team = [
    { name:'Marc Puig', role:'CEO & Co-fundador', desc:'Antes de fundar Neuria, Marc gestionaba operaciones en una cadena de clínicas dentales. Vio en primera persona cuánto tiempo se perdía en tareas que una máquina podía hacer mejor.', init:'MP', color:'#4F6EF7' },
    { name:'Cristina Llopis', role:'CTO & Co-fundadora', desc:'Ingeniera de software con 10 años automatizando procesos en startups de alto crecimiento. Traduce necesidades de negocio en sistemas que realmente funcionan.', init:'CL', color:'#00D4AA' },
    { name:'Javier Moreno', role:'Head of Implementation', desc:'Ex-consultor de operaciones. Ha implementado más de 200 sistemas de automatización en sectores que van desde la salud hasta el retail.', init:'JM', color:'#7B96FF' },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{padding:'160px 0 100px',background:'#080910',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(79,110,247,0.1), transparent 60%)'}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="two-col">
            <div>
              <div className="section-label">Sobre nosotros</div>
              <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:'clamp(40px,5vw,64px)',fontWeight:900,letterSpacing:'-0.04em',lineHeight:1.06,color:'#F0F2FF',marginBottom:24}}>
                Empezamos porque<br/>
                <span style={{background:'linear-gradient(135deg,#7B96FF,#00D4AA)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>vivimos el problema</span>
              </h1>
              <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.8,marginBottom:20}}>
                Neuria nació en 2021 cuando Marc, nuestro CEO, gestionaba las operaciones de una cadena de clínicas dentales en Barcelona. Cada día veía lo mismo: el equipo de recepción saturado de llamadas, citas perdidas por no poder coger el teléfono, y horas invertidas en tareas que no aportaban valor real a los pacientes.
              </p>
              <p style={{fontSize:17,color:'#7A80A0',lineHeight:1.8,marginBottom:32}}>
                Junto a Cristina, buscaron una solución. No encontraron ninguna que fuera práctica, asequible y que realmente funcionara para una empresa mediana. Así que la construyeron.
              </p>
              <button onClick={() => gotoForm()} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:15,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
                Habla con el equipo →
              </button>
            </div>

            {/* Stat cards */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              {[
                { stat:'150+', label:'Empresas automatizadas', color:'#7B96FF' },
                { stat:'10K+', label:'Citas mensuales gestionadas', color:'#00D4AA' },
                { stat:'48h', label:'Tiempo medio de implementación', color:'#7B96FF' },
                { stat:'98%', label:'Clientes que renuevan', color:'#00D4AA' },
              ].map((s,i) => (
                <div key={i} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:28,textAlign:'center'}}>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:36,fontWeight:900,letterSpacing:'-0.03em',color:s.color,marginBottom:8}}>{s.stat}</div>
                  <div style={{fontSize:13,color:'#7A80A0',lineHeight:1.5}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section style={{padding:'100px 0',background:'#0D0F18'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:20}} className="benefits-grid">
            {[
              { label:'Misión', icon:'🎯', text:'Devolver tiempo a los dueños de negocios eliminando la carga administrativa que les impide centrarse en lo que realmente importa: sus clientes.' },
              { label:'Visión', icon:'🔭', text:'Un mundo en el que cualquier pyme, independientemente de su tamaño, pueda acceder a los mismos sistemas de automatización que usan las grandes empresas.' },
              { label:'Propósito', icon:'💡', text:'La tecnología debe servir a las personas, no al revés. Cada automatización que implementamos libera tiempo humano para lo que ninguna máquina puede hacer.' },
            ].map((m,i) => (
              <div key={i} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:32}}>
                <div style={{fontSize:28,marginBottom:16}}>{m.icon}</div>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,fontWeight:600,color:'#4F6EF7',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:12}}>{m.label}</div>
                <p style={{fontSize:15,color:'#BEC4E0',lineHeight:1.75}}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{padding:'100px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:56}}>
            <div className="section-label">Valores</div>
            <h2 className="section-title">Lo que nos define</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}} className="two-col-grid">
            {values.map((v,i) => (
              <div key={i} style={{display:'flex',gap:20,padding:'28px 24px',background:'#10131C',border:'1px solid #252A3F',borderRadius:20,transition:'all 220ms'}}>
                <div style={{fontSize:28,flexShrink:0,width:52,height:52,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(79,110,247,0.08)',border:'1px solid rgba(79,110,247,0.2)',borderRadius:14}}>{v.icon}</div>
                <div>
                  <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:17,fontWeight:700,color:'#F0F2FF',marginBottom:8}}>{v.title}</div>
                  <p style={{fontSize:14,color:'#7A80A0',lineHeight:1.75}}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{padding:'100px 0',background:'#0D0F18'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:56}}>
            <div className="section-label">Historia</div>
            <h2 className="section-title">De una idea a 150 empresas</h2>
          </div>
          <div style={{maxWidth:720,margin:'0 auto',position:'relative'}}>
            <div style={{position:'absolute',left:24,top:0,bottom:0,width:1,background:'linear-gradient(180deg, rgba(79,110,247,0.5), rgba(0,212,170,0.3))'}}/>
            {milestones.map((m,i) => (
              <div key={i} style={{display:'flex',gap:24,marginBottom:36,paddingLeft:64,position:'relative'}}>
                <div style={{position:'absolute',left:12,top:4,width:24,height:24,borderRadius:'50%',background: i===milestones.length-1 ? '#00D4AA' : '#4F6EF7',border:'3px solid #0D0F18',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'#fff'}}/>
                </div>
                <div>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:12,fontWeight:600,color: i===milestones.length-1 ? '#00D4AA' : '#4F6EF7',marginBottom:6}}>{m.year}</div>
                  <p style={{fontSize:15,color:'#BEC4E0',lineHeight:1.7}}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{padding:'100px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:56}}>
            <div className="section-label">El equipo</div>
            <h2 className="section-title">Las personas detrás de Neuria</h2>
            <p className="section-sub mx-auto">No somos un equipo de ingenieros desconectados de la realidad. Venimos del mundo de los negocios y entendemos tus problemas porque los hemos vivido.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="test-grid">
            {team.map((m,i) => (
              <div key={i} style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:20,padding:32,textAlign:'center',transition:'all 220ms'}}>
                <div style={{width:72,height:72,borderRadius:'50%',margin:'0 auto 16px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:24,fontWeight:800,color:'#fff',background:m.color}}>{m.init}</div>
                <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:18,fontWeight:700,color:'#F0F2FF',marginBottom:4}}>{m.name}</div>
                <div style={{fontSize:12,color:m.color,fontWeight:600,marginBottom:16,fontFamily:"'JetBrains Mono',monospace"}}>{m.role}</div>
                <p style={{fontSize:14,color:'#7A80A0',lineHeight:1.7}}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0',background:'#0D0F18',borderTop:'1px solid #1E2235'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title" style={{marginBottom:16}}>¿Quieres conocernos?</h2>
          <p style={{fontSize:16,color:'#7A80A0',marginBottom:32,maxWidth:480,margin:'0 auto 32px'}}>Una llamada de 30 minutos para ver si Neuria encaja con tu negocio. Sin compromiso, sin presión.</p>
          <button onClick={() => gotoForm()} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'16px 32px',borderRadius:999,background:'#4F6EF7',border:'none',cursor:'pointer',fontSize:16,fontWeight:700,color:'#fff',fontFamily:"'DM Sans',sans-serif"}}>
            Habla con nosotros →
          </button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { SobreNosotrosPage });
