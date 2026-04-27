
/* ─── NeuriaN Illustration Library ──────────────────────────
   Reusable SVG components, all on-brand (indigo/teal/dark).
   Each component accepts optional `light` prop for light mode.
────────────────────────────────────────────────────────── */

/* ── ROI Bar Chart ──────────────────────────────────────── */
function IlluROIChart({ before, after, label, unit='€', color='#4F6EF7' }) {
  const max = Math.max(before, after) * 1.15;
  const bh = Math.round((before / max) * 100);
  const ah = Math.round((after / max) * 100);
  const saving = Math.round(((after - before) / Math.abs(before)) * 100);

  return (
    <svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id={`bar-after-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0,33,66,100].map(y => (
        <line key={y} x1="30" y1={10 + (100-y)*1.1} x2="210" y2={10 + (100-y)*1.1} stroke="#252A3F" strokeWidth="0.5"/>
      ))}
      {/* Before bar */}
      <rect x="55" y={10 + (100-bh)*1.1} width="40" height={bh*1.1} rx="4" fill="#252A3F"/>
      <text x="75" y={8 + (100-bh)*1.1} textAnchor="middle" fontSize="9" fill="#7A80A0">{before}{unit}</text>
      <text x="75" y="128" textAnchor="middle" fontSize="8" fill="#4A5070">Antes</text>
      {/* After bar */}
      <rect x="125" y={10 + (100-ah)*1.1} width="40" height={ah*1.1} rx="4" fill={`url(#bar-after-${color.replace('#','')})`}/>
      <text x="145" y={8 + (100-ah)*1.1} textAnchor="middle" fontSize="9" fill={color}>{after}{unit}</text>
      <text x="145" y="128" textAnchor="middle" fontSize="8" fill="#7A80A0">Con NeuriaN</text>
      {/* Delta badge */}
      <rect x="72" y="138" width="76" height="16" rx="8" fill={saving > 0 ? 'rgba(0,212,170,0.12)' : 'rgba(79,110,247,0.12)'} stroke={saving > 0 ? 'rgba(0,212,170,0.3)' : 'rgba(79,110,247,0.3)'} strokeWidth="0.5"/>
      <text x="110" y="149" textAnchor="middle" fontSize="8" fontWeight="700" fill={saving > 0 ? '#00D4AA' : '#7B96FF'}>{saving > 0 ? '+' : ''}{saving}% {label}</text>
    </svg>
  );
}

/* ── Calendar / Booking Visual ──────────────────────────── */
function IlluCalendar({ bookedDays = [2,5,9,12,15,16,19,22,23], totalDays = 22 }) {
  const days = Array.from({length: totalDays}, (_, i) => i+1);
  const cols = 5;
  return (
    <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      {/* Header */}
      <rect x="10" y="10" width="220" height="28" rx="8" fill="#181C28"/>
      <circle cx="28" cy="24" r="5" fill="#4F6EF7" opacity="0.8"/>
      <rect x="40" y="19" width="60" height="10" rx="3" fill="#252A3F"/>
      <rect x="160" y="19" width="30" height="10" rx="3" fill="#252A3F"/>
      {/* Day headers */}
      {['L','M','X','J','V'].map((d,i) => (
        <text key={d} x={22 + i*44} y="57" textAnchor="middle" fontSize="9" fill="#4A5070" fontFamily="JetBrains Mono, monospace">{d}</text>
      ))}
      {/* Day cells */}
      {days.map((d, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = 10 + col * 44;
        const y = 64 + row * 26;
        const booked = bookedDays.includes(d);
        return (
          <g key={d}>
            <rect x={x+2} y={y} width="36" height="20" rx="5"
              fill={booked ? 'rgba(79,110,247,0.2)' : '#181C28'}
              stroke={booked ? 'rgba(79,110,247,0.5)' : '#252A3F'}
              strokeWidth="0.5"/>
            <text x={x+20} y={y+13} textAnchor="middle" fontSize="9"
              fill={booked ? '#7B96FF' : '#4A5070'}
              fontWeight={booked ? '700' : '400'}>{d}</text>
          </g>
        );
      })}
      {/* Legend */}
      <rect x="10" y="186" width="10" height="8" rx="2" fill="rgba(79,110,247,0.3)"/>
      <text x="24" y="193" fontSize="7" fill="#7A80A0">Cita reservada automáticamente</text>
    </svg>
  );
}

/* ── Time Saved Clock — improved contrast ───────────────── */
function IlluTimeSaved({ hours = 2.5, label = 'horas/día ahorradas' }) {
  const pct = Math.min(hours / 8, 1);
  const angle = pct * 360;
  const r = 52;
  const cx = 70, cy = 76;
  const toRad = deg => (deg - 90) * Math.PI / 180;
  const arcX = cx + r * Math.cos(toRad(angle));
  const arcY = cy + r * Math.sin(toRad(angle));
  const largeArc = angle > 180 ? 1 : 0;

  return (
    <svg viewBox="0 0 140 152" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="clockGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F6EF7"/>
          <stop offset="100%" stopColor="#00D4AA"/>
        </linearGradient>
        <filter id="glow-clock">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r+10} fill="rgba(79,110,247,0.06)" stroke="rgba(79,110,247,0.12)" strokeWidth="1"/>
      {/* Track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#252A3F" strokeWidth="10"/>
      {/* Progress arc */}
      <path d={`M ${cx} ${cy-r} A ${r} ${r} 0 ${largeArc} 1 ${arcX} ${arcY}`}
        fill="none" stroke="url(#clockGrad)" strokeWidth="10" strokeLinecap="round" filter="url(#glow-clock)"/>
      {/* Tick marks */}
      {Array.from({length:12},(_,i) => {
        const a = (i/12)*360 - 90;
        const r1=r-6, r2=r+4;
        const x1=cx+r1*Math.cos(a*Math.PI/180), y1=cy+r1*Math.sin(a*Math.PI/180);
        const x2=cx+r2*Math.cos(a*Math.PI/180), y2=cy+r2*Math.sin(a*Math.PI/180);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333754" strokeWidth="1.5"/>;
      })}
      {/* Center text — high contrast */}
      <circle cx={cx} cy={cy} r={r-14} fill="#10131C"/>
      <text x={cx} y={cy-4} textAnchor="middle" fontSize="22" fontWeight="900" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans',sans-serif">{hours}h</text>
      <text x={cx} y={cy+14} textAnchor="middle" fontSize="8" fill="#00D4AA" fontWeight="600">al día libres</text>
      {/* Bottom label */}
      <text x="70" y="148" textAnchor="middle" fontSize="8" fill="#7A80A0">{label}</text>
    </svg>
  );
}

/* ── No-Show Reduction — calendar grid visual ───────────── */
function IlluNoShows({ before=22, after=8 }) {
  const reduction = Math.round(((before - after) / before) * 100);
  // 5x4 grid of appointment slots
  const slots = Array.from({length:20}, (_, i) => {
    if (i < 20 * (before/100)) return 'noshow-before';
    return 'ok';
  });
  // After: far fewer no-shows
  const slotsAfter = Array.from({length:20}, (_, i) => {
    if (i < 20 * (after/100)) return 'noshow-after';
    return 'ok';
  });

  return (
    <svg viewBox="0 0 220 152" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="ns-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2"/>
        </linearGradient>
      </defs>

      {/* ANTES label */}
      <text x="50" y="14" textAnchor="middle" fontSize="8" fill="#EF4444" fontWeight="600" fontFamily="'JetBrains Mono',monospace">ANTES</text>
      {/* Grid before */}
      {Array.from({length:20}, (_,i) => {
        const col = i%5, row = Math.floor(i/5);
        const noshow = i < Math.round(20*(before/100));
        return (
          <rect key={i} x={10+col*17} y={18+row*14} width="13" height="10" rx="2"
            fill={noshow ? 'rgba(239,68,68,0.6)' : 'rgba(79,110,247,0.2)'}
            stroke={noshow ? 'rgba(239,68,68,0.4)' : 'rgba(79,110,247,0.15)'} strokeWidth="0.5"/>
        );
      })}
      <text x="50" y="88" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">{before}% no-shows</text>

      {/* Arrow */}
      <text x="110" y="55" textAnchor="middle" fontSize="20" fill="#7A80A0">→</text>

      {/* DESPUÉS label */}
      <text x="172" y="14" textAnchor="middle" fontSize="8" fill="#00D4AA" fontWeight="600" fontFamily="'JetBrains Mono',monospace">CON NEURIAN</text>
      {/* Grid after */}
      {Array.from({length:20}, (_,i) => {
        const col = i%5, row = Math.floor(i/5);
        const noshow = i < Math.round(20*(after/100));
        return (
          <rect key={i} x={132+col*17} y={18+row*14} width="13" height="10" rx="2"
            fill={noshow ? 'rgba(239,68,68,0.3)' : 'rgba(0,212,170,0.3)'}
            stroke={noshow ? 'rgba(239,68,68,0.2)' : 'rgba(0,212,170,0.4)'} strokeWidth="0.5"/>
        );
      })}
      <text x="172" y="88" textAnchor="middle" fontSize="9" fill="#00D4AA" fontWeight="700">{after}% no-shows</text>

      {/* Reduction badge */}
      <rect x="72" y="100" width="76" height="22" rx="11" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.3)" strokeWidth="0.8"/>
      <text x="110" y="115" textAnchor="middle" fontSize="10" fontWeight="800" fill="#00D4AA" fontFamily="'Plus Jakarta Sans',sans-serif">−{reduction}% reducción</text>

      {/* Legend */}
      <rect x="30" y="130" width="8" height="6" rx="1" fill="rgba(239,68,68,0.6)"/>
      <text x="42" y="137" fontSize="7" fill="#7A80A0">No-show</text>
      <rect x="80" y="130" width="8" height="6" rx="1" fill="rgba(0,212,170,0.3)"/>
      <text x="92" y="137" fontSize="7" fill="#7A80A0">Asistió</text>
      <rect x="130" y="130" width="8" height="6" rx="1" fill="rgba(79,110,247,0.2)"/>
      <text x="142" y="137" fontSize="7" fill="#7A80A0">Sin sistema</text>
    </svg>
  );
}

/* ── Time Freed — schedule blocks visual ────────────────── */
function IlluBusiness({ freed = 3 }) {
  const workHours = 8;
  const busyHours = workHours - freed;
  const hours = Array.from({length: workHours}, (_, i) => ({
    label: `${9+i}h`,
    type: i < busyHours ? (i < 2 ? 'task' : i < 4 ? 'task' : 'task') : 'free',
    task: i < busyHours
      ? ['Atender llamadas','Confirmar citas','Recordatorios','Gestión manual','Responder WA','Tareas admin'][i] || 'Admin'
      : null
  }));

  return (
    <svg viewBox="0 0 220 152" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="free-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="10" y="12" fontSize="8" fill="#7A80A0" fontFamily="'JetBrains Mono',monospace">TU DÍA DE TRABAJO</text>

      {/* Hour blocks */}
      {hours.map((h, i) => {
        const x = 10;
        const y = 18 + i * 14;
        const isFree = h.type === 'free';
        return (
          <g key={i}>
            {/* Hour label */}
            <text x={x} y={y+9} fontSize="7" fill="#4A5070" fontFamily="'JetBrains Mono',monospace">{h.label}</text>
            {/* Block */}
            <rect x={x+24} y={y+1} width={isFree ? 150 : 100} height="11" rx="3"
              fill={isFree ? 'url(#free-grad)' : 'rgba(79,110,247,0.12)'}
              stroke={isFree ? 'rgba(0,212,170,0.35)' : 'rgba(79,110,247,0.2)'} strokeWidth="0.5"/>
            {!isFree && h.task && (
              <text x={x+30} y={y+9} fontSize="6.5" fill="#7A80A0">{h.task}</text>
            )}
            {isFree && (
              <text x={x+30} y={y+9} fontSize="6.5" fill="#00D4AA" fontWeight="600">✓ Tiempo libre — NeuriaN lo gestionó</text>
            )}
          </g>
        );
      })}

      {/* Badge */}
      <rect x="44" y="132" width="132" height="18" rx="9" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.3)" strokeWidth="0.8"/>
      <text x="110" y="144" textAnchor="middle" fontSize="9" fontWeight="800" fill="#00D4AA" fontFamily="'Plus Jakarta Sans',sans-serif">{freed}h/día recuperadas para ti</text>
    </svg>
  );
}

/* ── Response Time Visual ───────────────────────────────── */
function IlluResponseTime() {
  return (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      {/* Timeline bar */}
      <rect x="20" y="40" width="180" height="8" rx="4" fill="#1E2235"/>
      {/* Before: slow */}
      <rect x="20" y="40" width="140" height="8" rx="4" fill="rgba(239,68,68,0.3)"/>
      <text x="90" y="30" textAnchor="middle" fontSize="8" fill="#EF4444">Antes: ~4 horas</text>
      <line x1="160" y1="32" x2="160" y2="40" stroke="#EF4444" strokeWidth="1" strokeDasharray="2,2"/>
      {/* After: fast */}
      <rect x="20" y="57" width="180" height="8" rx="4" fill="#1E2235"/>
      <rect x="20" y="57" width="14" height="8" rx="4" fill="rgba(0,212,170,0.7)"/>
      <text x="110" y="77" textAnchor="middle" fontSize="8" fill="#00D4AA">Con NeuriaN: &lt;10 segundos</text>
      <line x1="34" y1="65" x2="34" y2="77" stroke="#00D4AA" strokeWidth="1" strokeDasharray="2,2"/>
      {/* Pulse dot */}
      <circle cx="34" cy="61" r="3" fill="#00D4AA">
        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      {/* Labels */}
      <text x="110" y="100" textAnchor="middle" fontSize="7" fill="#4A5070">Tiempo de respuesta al cliente</text>
      {/* Stat */}
      <rect x="72" y="108" width="76" height="16" rx="8" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.25)" strokeWidth="0.5"/>
      <text x="110" y="119" textAnchor="middle" fontSize="8" fontWeight="700" fill="#00D4AA">1440x más rápido</text>
    </svg>
  );
}

/* ── Revenue Recovered ──────────────────────────────────── */
function IlluRevenue({ lost = 3200, recovered = 2800, currency='€/mes' }) {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      {/* Coins stack left (lost) */}
      {[0,1,2].map(i=>(
        <ellipse key={i} cx="58" cy={88 - i*10} rx="30" ry="9" fill={i===0?'#252A3F':'#1E2235'} stroke="#2A2F4A" strokeWidth="0.5"/>
      ))}
      <text x="58" y="62" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="700">−{lost}{currency.replace('/mes','')}</text>
      <text x="58" y="108" textAnchor="middle" fontSize="7" fill="#4A5070">perdido/mes</text>
      {/* Arrow */}
      <text x="100" y="76" textAnchor="middle" fontSize="16" fill="#7A80A0">→</text>
      {/* Coins stack right (recovered) */}
      {[0,1,2,3,4].map(i=>(
        <ellipse key={i} cx="148" cy={88 - i*10} rx="30" ry="9"
          fill={i===0?`url(#rev-grad)`:i<3?'rgba(0,212,170,0.25)':'rgba(79,110,247,0.2)'}
          stroke={i<2?'rgba(0,212,170,0.4)':'rgba(79,110,247,0.3)'} strokeWidth="0.5"/>
      ))}
      <text x="148" y="38" textAnchor="middle" fontSize="9" fill="#00D4AA" fontWeight="700">+{recovered}{currency.replace('/mes','')}</text>
      <text x="148" y="108" textAnchor="middle" fontSize="7" fill="#7A80A0">recuperado/mes</text>
      {/* ROI badge */}
      <rect x="62" y="118" width="76" height="16" rx="8" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.25)" strokeWidth="0.5"/>
      <text x="100" y="129" textAnchor="middle" fontSize="8" fontWeight="700" fill="#00D4AA">ROI positivo en 30 días</text>
    </svg>
  );
}

/* ── WhatsApp Flow Illustration ─────────────────────────── */
function IlluWhatsappFlow() {
  return (
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      {/* Phone outline */}
      <rect x="65" y="10" width="70" height="120" rx="14" fill="#0D0F18" stroke="#252A3F" strokeWidth="1.5"/>
      <rect x="70" y="18" width="60" height="105" rx="8" fill="#080910"/>
      {/* Status bar */}
      <rect x="70" y="18" width="60" height="14" rx="8" fill="#181C28"/>
      <circle cx="100" cy="25" r="2" fill="#00D4AA"/>
      <rect x="104" y="23" width="20" height="4" rx="2" fill="#252A3F"/>
      {/* Messages */}
      <rect x="73" y="36" width="36" height="12" rx="2 8 8 8" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
      <rect x="73" y="52" width="28" height="12" rx="2 8 8 8" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
      <rect x="91" y="68" width="36" height="12" rx="8 2 8 8" fill="#4F6EF7"/>
      <rect x="73" y="84" width="52" height="22" rx="2 8 8 8" fill="rgba(0,212,170,0.15)" stroke="rgba(0,212,170,0.3)" strokeWidth="0.5"/>
      <text x="99" y="93" textAnchor="middle" fontSize="5.5" fill="#00D4AA" fontWeight="700">✓ Cita confirmada</text>
      <text x="99" y="102" textAnchor="middle" fontSize="5" fill="#00A882">Martes 29 · 10:00h</text>
      {/* Input bar */}
      <rect x="73" y="109" width="54" height="10" rx="5" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
      <circle cx="122" cy="114" r="4" fill="#4F6EF7"/>
      {/* Channels below */}
      <text x="100" y="148" textAnchor="middle" fontSize="7" fill="#4A5070">También disponible en</text>
      {[
        {x:54, label:'Web', color:'#4F6EF7'},
        {x:100, label:'Email', color:'#7B96FF'},
        {x:146, label:'IG', color:'#00D4AA'},
      ].map(c => (
        <g key={c.label}>
          <rect x={c.x-18} y="152" width="36" height="20" rx="6" fill={`rgba(${c.color==='#4F6EF7'?'79,110,247':c.color==='#7B96FF'?'123,150,255':'0,212,170'},0.1)`} stroke={`${c.color}40`} strokeWidth="0.5"/>
          <text x={c.x} y="165" textAnchor="middle" fontSize="7" fill={c.color} fontWeight="600">{c.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── Interactive Automation Pipeline ───────────────────── */
function IlluPipeline({ steps = ['Solicitud','Verificación','Confirmación','Recordatorio','Post-visita'] }) {
  const [activeStep, setActiveStep] = React.useState(0);

  // Rich example data per step index (falls back to generic)
  const examples = [
    {
      icon: '📩',
      title: 'Solicitud recibida',
      channel: 'WhatsApp · 22:14h',
      preview: (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{alignSelf:'flex-start',background:'#252A3F',borderRadius:'4px 14px 14px 14px',padding:'9px 13px',fontSize:12,color:'#BEC4E0',maxWidth:'85%',lineHeight:1.5}}>
            Hola, quería pedir cita para una limpieza dental 🦷
          </div>
          <div style={{alignSelf:'flex-end',background:'rgba(79,110,247,0.15)',border:'1px solid rgba(79,110,247,0.3)',borderRadius:'14px 4px 14px 14px',padding:'9px 13px',fontSize:12,color:'#7B96FF',maxWidth:'85%',lineHeight:1.5}}>
            ¡Hola! Soy el asistente de <strong>Clínica López</strong>. Recibido 👋 Comprobando disponibilidad...
          </div>
          <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",marginTop:4}}>⏱ Respuesta en &lt;3 segundos · 24/7</div>
        </div>
      ),
      stat: { value: '<3s', label: 'tiempo de respuesta' }
    },
    {
      icon: '🔍',
      title: 'Verificación de agenda',
      channel: 'Integración · Google Calendar / Gesden',
      preview: (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{background:'#181C28',border:'1px solid #252A3F',borderRadius:10,padding:'12px 14px',fontSize:12}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
              <span style={{color:'#4A5070',fontFamily:"'JetBrains Mono',monospace",fontSize:10}}>MAYO 2026</span>
              <span style={{color:'#00D4AA',fontSize:10,fontWeight:600}}>3 huecos disponibles</span>
            </div>
            {[
              {day:'Martes 28', time:'10:00h', avail:true},
              {day:'Martes 28', time:'12:30h', avail:false},
              {day:'Miércoles 29', time:'17:00h', avail:true},
              {day:'Jueves 30', time:'09:00h', avail:true},
            ].map((slot,i) => (
              <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px 0',borderBottom:'1px solid #1E2235'}}>
                <span style={{fontSize:11,color: slot.avail ? '#BEC4E0' : '#3A3F5A'}}>{slot.day} · {slot.time}</span>
                <span style={{fontSize:10,fontWeight:600,color: slot.avail ? '#00D4AA' : '#3A3F5A'}}>{slot.avail ? '✓ libre' : '✕ ocupado'}</span>
              </div>
            ))}
          </div>
          <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>🔄 Sincronizado en tiempo real con tu agenda</div>
        </div>
      ),
      stat: { value: '0', label: 'conflictos de agenda' }
    },
    {
      icon: '✅',
      title: 'Confirmación automática',
      channel: 'WhatsApp · mensaje saliente',
      preview: (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{alignSelf:'flex-start',background:'rgba(0,212,170,0.08)',border:'1px solid rgba(0,212,170,0.25)',borderRadius:'4px 14px 14px 14px',padding:'12px 14px',fontSize:12,color:'#BEC4E0',maxWidth:'100%',lineHeight:1.6}}>
            <div style={{fontWeight:700,color:'#00D4AA',marginBottom:6}}>✓ Cita confirmada</div>
            <div>📅 <strong>Martes 28 de mayo · 10:00h</strong></div>
            <div style={{marginTop:4}}>📍 Clínica López — C/ Major 12, Barcelona</div>
            <div style={{marginTop:4,fontSize:11,color:'#7A80A0'}}>Recibirás un recordatorio 24h antes.<br/>Para cancelar o cambiar escribe "cancelar".</div>
          </div>
          <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>📲 También enviado por email automáticamente</div>
        </div>
      ),
      stat: { value: '+40%', label: 'tasa de confirmación' }
    },
    {
      icon: '🔔',
      title: 'Recordatorio automático',
      channel: 'WhatsApp · 24h y 2h antes',
      preview: (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{background:'#181C28',border:'1px solid #252A3F',borderRadius:10,padding:'10px 12px',fontSize:11,marginBottom:4}}>
            <div style={{color:'#7A80A0',marginBottom:4,fontFamily:"'JetBrains Mono',monospace",fontSize:9}}>RECORDATORIO · 24h antes</div>
            <div style={{color:'#BEC4E0',lineHeight:1.6}}>👋 ¡Hola! Te recordamos tu cita mañana<br/><strong>martes 28 · 10:00h</strong> en Clínica López.<br/><br/>¿Podrás venir? Responde <strong>SÍ</strong> o <strong>NO</strong></div>
          </div>
          <div style={{display:'flex',gap:8}}>
            <div style={{flex:1,background:'rgba(0,212,170,0.08)',border:'1px solid rgba(0,212,170,0.25)',borderRadius:8,padding:'8px',textAlign:'center',fontSize:11,color:'#00D4AA',fontWeight:600}}>SÍ, confirmo ✓</div>
            <div style={{flex:1,background:'rgba(239,68,68,0.06)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:8,padding:'8px',textAlign:'center',fontSize:11,color:'#EF4444',fontWeight:600}}>NO, cancelar ✕</div>
          </div>
          <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>📉 −{Math.round(22-22*0.45)}% no-shows con recordatorio doble</div>
        </div>
      ),
      stat: { value: '−45%', label: 'reducción no-shows' }
    },
    {
      icon: '⭐',
      title: 'Seguimiento post-visita',
      channel: 'WhatsApp · 24h después',
      preview: (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{alignSelf:'flex-start',background:'#252A3F',borderRadius:'4px 14px 14px 14px',padding:'10px 13px',fontSize:12,color:'#BEC4E0',maxWidth:'100%',lineHeight:1.6}}>
            ¡Hola! ¿Qué tal tu visita de ayer?<br/>
            Valora tu experiencia del 1 al 5 ⭐<br/>
            <div style={{display:'flex',gap:6,marginTop:8}}>
              {['😞','😐','🙂','😊','🤩'].map((e,i) => (
                <div key={i} style={{width:28,height:28,borderRadius:6,background: i===4 ? 'rgba(0,212,170,0.2)' : '#1E2235',border: i===4 ? '1px solid rgba(0,212,170,0.4)' : '1px solid #252A3F',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>{e}</div>
              ))}
            </div>
          </div>
          <div style={{alignSelf:'flex-end',background:'rgba(0,212,170,0.08)',border:'1px solid rgba(0,212,170,0.25)',borderRadius:'14px 4px 14px 14px',padding:'9px 13px',fontSize:12,color:'#00D4AA',lineHeight:1.5}}>
            🤩 ¡Genial! Gracias por la valoración.<br/>¿Quieres reservar tu próxima visita?
          </div>
          <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>📈 +23% de clientes que vuelven con seguimiento</div>
        </div>
      ),
      stat: { value: '+23%', label: 'clientes recurrentes' }
    },
  ];

  // Map passed steps to examples (cycle if more steps than examples)
  const getExample = (i) => examples[i % examples.length];

  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:20,alignItems:'start'}}>
      {/* Left: step buttons */}
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        {steps.map((s, i) => {
          const ex = getExample(i);
          const isActive = activeStep === i;
          const isPast = i < activeStep;
          return (
            <button key={i} onClick={() => setActiveStep(i)} style={{
              display:'flex',alignItems:'center',gap:12,padding:'12px 16px',
              borderRadius:12,border: isActive ? '1px solid rgba(79,110,247,0.45)' : '1px solid #252A3F',
              background: isActive ? 'rgba(79,110,247,0.1)' : isPast ? 'rgba(0,212,170,0.04)' : '#181C28',
              cursor:'pointer',textAlign:'left',transition:'all 200ms',width:'100%'
            }}>
              <div style={{
                width:34,height:34,borderRadius:'50%',flexShrink:0,
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,
                background: isPast ? 'rgba(0,212,170,0.15)' : isActive ? 'rgba(79,110,247,0.2)' : '#252A3F',
                border: isPast ? '1px solid rgba(0,212,170,0.35)' : isActive ? '1px solid rgba(79,110,247,0.5)' : '1px solid #3A3F5A',
                position:'relative'
              }}>
                {isPast ? '✓' : ex.icon}
                {isActive && (
                  <div style={{position:'absolute',inset:-4,borderRadius:'50%',border:'1px solid rgba(79,110,247,0.3)',animation:'status-pulse 2s infinite'}}/>
                )}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13,fontWeight:600,color: isActive ? '#F0F2FF' : isPast ? '#7A80A0' : '#BEC4E0',fontFamily:"'DM Sans',sans-serif"}}>{s}</div>
                <div style={{fontSize:10,color: isActive ? '#7B96FF' : '#4A5070',fontFamily:"'JetBrains Mono',monospace",marginTop:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{ex.channel}</div>
              </div>
              {isPast && <span style={{fontSize:10,color:'#00D4AA',flexShrink:0,fontWeight:700}}>✓</span>}
              {isActive && <span style={{fontSize:10,color:'#7B96FF',flexShrink:0}}>→</span>}
            </button>
          );
        })}
        {/* Progress bar */}
        <div style={{marginTop:8,height:4,background:'#1E2235',borderRadius:999,overflow:'hidden'}}>
          <div style={{height:'100%',width:`${((activeStep+1)/steps.length)*100}%`,background:'linear-gradient(90deg,#4F6EF7,#00D4AA)',borderRadius:999,transition:'width 400ms cubic-bezier(0.16,1,0.3,1)'}}/>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>
          <span>Paso {activeStep+1} de {steps.length}</span>
          <span style={{color:'#00D4AA',fontWeight:600}}>{getExample(activeStep).stat.value} {getExample(activeStep).stat.label}</span>
        </div>
      </div>

      {/* Right: example panel */}
      <div style={{background:'#10131C',border:'1px solid #252A3F',borderRadius:16,overflow:'hidden',transition:'all 300ms'}} key={activeStep}>
        {/* Panel header */}
        <div style={{background:'#181C28',padding:'12px 16px',borderBottom:'1px solid #1E2235',display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:28,height:28,borderRadius:8,background:'rgba(79,110,247,0.15)',border:'1px solid rgba(79,110,247,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,flexShrink:0}}>{getExample(activeStep).icon}</div>
          <div>
            <div style={{fontSize:12,fontWeight:600,color:'#F0F2FF'}}>{getExample(activeStep).title}</div>
            <div style={{fontSize:10,color:'#4A5070',fontFamily:"'JetBrains Mono',monospace"}}>{getExample(activeStep).channel}</div>
          </div>
          <div style={{marginLeft:'auto',display:'inline-flex',alignItems:'center',gap:4,padding:'3px 10px',borderRadius:999,background:'rgba(0,212,170,0.08)',border:'1px solid rgba(0,212,170,0.2)',fontSize:10,fontWeight:600,color:'#00D4AA'}}>
            <span style={{width:5,height:5,borderRadius:'50%',background:'#00D4AA',display:'inline-block',animation:'pulse-anim 2s infinite'}}/>En vivo
          </div>
        </div>
        {/* Panel body */}
        <div style={{padding:'16px'}}>
          {getExample(activeStep).preview}
        </div>
      </div>
    </div>
  );
}


/* ── Team / Business Illustration ───────────────────────── */
function IlluBusiness({ freed = 3 }) {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      {/* Person silhouette */}
      <circle cx="70" cy="35" r="16" fill="#181C28" stroke="#252A3F" strokeWidth="1"/>
      <text x="70" y="40" textAnchor="middle" fontSize="16">👤</text>
      {/* Before: stressed */}
      {['📞','📋','⏰','✉'].map((icon,i) => (
        <g key={i} transform={`translate(${42+i*18}, 58)`}>
          <rect x="-10" y="-8" width="20" height="20" rx="5" fill="#181C28" stroke="rgba(239,68,68,0.3)" strokeWidth="0.8"/>
          <text x="0" y="8" textAnchor="middle" fontSize="12">{icon}</text>
        </g>
      ))}
      <text x="70" y="92" textAnchor="middle" fontSize="7" fill="#EF4444">Antes: saturado</text>

      {/* Arrow */}
      <text x="105" y="60" textAnchor="middle" fontSize="18" fill="#4F6EF7">→</text>

      {/* After: free */}
      <circle cx="148" cy="35" r="16" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.3)" strokeWidth="1"/>
      <text x="148" y="40" textAnchor="middle" fontSize="16">😊</text>
      {/* Robot handles tasks */}
      <rect x="120" y="55" width="56" height="28" rx="8" fill="rgba(79,110,247,0.1)" stroke="rgba(79,110,247,0.25)" strokeWidth="0.8"/>
      <text x="148" y="65" textAnchor="middle" fontSize="8">🤖</text>
      <text x="148" y="77" textAnchor="middle" fontSize="6.5" fill="#7B96FF">NeuriaN lo gestiona</text>
      <text x="148" y="92" textAnchor="middle" fontSize="7" fill="#00D4AA">{freed}h/día libres</text>

      {/* ROI line */}
      <line x1="10" y1="108" x2="190" y2="108" stroke="#1E2235" strokeWidth="0.5"/>
      <text x="100" y="122" textAnchor="middle" fontSize="7" fill="#4A5070">El tiempo recuperado = más clientes atendidos = más ingresos</text>
    </svg>
  );
}

/* ── Sector Hero Illustration ───────────────────────────── */
function IlluSectorHero({ sector = 'dental' }) {
  const icons = {
    dental: { primary:'🦷', items:['Recepción','Citas','Recordatorios','Encuestas'] },
    estetica: { primary:'💆', items:['WhatsApp','Agenda','Confirmación','Post-visita'] },
    taller: { primary:'🔧', items:['Presupuestos','Seguimiento','Estado','Factura'] },
    gym: { primary:'🏋️', items:['Alta','Baja','Pausa','Renovación'] },
    clinica: { primary:'🏥', items:['Triaje','Cita','Recordatorio','Informe'] },
    peluqueria: { primary:'💇', items:['Reserva','Confirmación','Lista espera','Reseña'] },
  };
  const s = icons[sector] || icons.dental;

  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      {/* Center hub */}
      <circle cx="100" cy="80" r="28" fill="rgba(79,110,247,0.1)" stroke="rgba(79,110,247,0.25)" strokeWidth="1.5"/>
      <text x="100" y="88" textAnchor="middle" fontSize="24">{s.primary}</text>
      {/* Orbit items */}
      {s.items.map((item, i) => {
        const angle = (i / s.items.length) * 360 - 45;
        const rad = angle * Math.PI / 180;
        const r = 62;
        const x = 100 + r * Math.cos(rad);
        const y = 80 + r * Math.sin(rad);
        return (
          <g key={item}>
            <line x1="100" y1="80" x2={x} y2={y} stroke="rgba(79,110,247,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
            <rect x={x-22} y={y-10} width="44" height="20" rx="6" fill="#181C28" stroke="rgba(79,110,247,0.3)" strokeWidth="0.8"/>
            <text x={x} y={y+4} textAnchor="middle" fontSize="7" fill="#7B96FF" fontWeight="600">{item}</text>
          </g>
        );
      })}
      {/* NeuriaN label */}
      <text x="100" y="152" textAnchor="middle" fontSize="7" fill="#4A5070">Sistema NeuriaN — todo conectado</text>
    </svg>
  );
}

/* ── Dashboard Preview ──────────────────────────────────── */
function IlluDashboard() {
  return (
    <svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      {/* Window chrome */}
      <rect x="0" y="0" width="260" height="160" rx="12" fill="#0D0F18" stroke="#252A3F" strokeWidth="1"/>
      <rect x="0" y="0" width="260" height="28" rx="12" fill="#181C28"/>
      <rect x="0" y="16" width="260" height="12" fill="#181C28"/>
      <circle cx="14" cy="14" r="4" fill="rgba(239,68,68,0.5)"/>
      <circle cx="26" cy="14" r="4" fill="rgba(245,158,11,0.5)"/>
      <circle cx="38" cy="14" r="4" fill="rgba(34,197,94,0.5)"/>
      <rect x="80" y="9" width="100" height="10" rx="5" fill="#252A3F"/>
      {/* Sidebar */}
      <rect x="0" y="28" width="44" height="132" rx="0 0 0 12" fill="#10131C"/>
      {[40,56,72,88,104].map(y=>(
        <rect key={y} x="8" y={y} width="28" height="10" rx="5" fill="#181C28" opacity="0.8"/>
      ))}
      <rect x="8" y="40" width="28" height="10" rx="5" fill="rgba(79,110,247,0.3)"/>
      {/* Main area */}
      {/* Stats row */}
      {[
        {x:52, label:'Citas hoy', val:'24', color:'#4F6EF7'},
        {x:112, label:'Respondidas', val:'24', color:'#00D4AA'},
        {x:172, label:'No-shows', val:'1', color:'#EF4444'},
      ].map(s=>(
        <g key={s.label}>
          <rect x={s.x} y="34" width="52" height="36" rx="6" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
          <text x={s.x+26} y="50" textAnchor="middle" fontSize="13" fontWeight="800" fill={s.color}>{s.val}</text>
          <text x={s.x+26} y="62" textAnchor="middle" fontSize="5.5" fill="#4A5070">{s.label}</text>
        </g>
      ))}
      {/* Chart area */}
      <rect x="52" y="78" width="96" height="60" rx="6" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
      {[0,1,2,3,4,5,6].map(i=>{
        const h = [30,45,28,55,40,60,35][i];
        return <rect key={i} x={58+i*13} y={78+60-h} width="9" height={h} rx="2" fill={`rgba(79,110,247,${0.3+i*0.1})`}/>;
      })}
      {/* Activity list */}
      <rect x="156" y="78" width="96" height="60" rx="6" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <circle cx="167" cy={89+i*13} r="4" fill={i===0?'rgba(0,212,170,0.3)':'rgba(79,110,247,0.2)'}/>
          <rect x="175" y={85+i*13} width="40" height="6" rx="3" fill="#252A3F"/>
          <rect x="218" y={85+i*13} width="20" height="6" rx="3" fill={i===0?'rgba(0,212,170,0.15)':'#1E2235'}/>
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, {
  IlluROIChart, IlluCalendar, IlluTimeSaved, IlluNoShows,
  IlluResponseTime, IlluRevenue, IlluWhatsappFlow,
  IlluPipeline, IlluBusiness, IlluSectorHero, IlluDashboard
});
