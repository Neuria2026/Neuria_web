
/* ─── Neuria Illustration Library ──────────────────────────
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
      <text x="145" y="128" textAnchor="middle" fontSize="8" fill="#7A80A0">Con Neuria</text>
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

/* ── Time Saved Clock ───────────────────────────────────── */
function IlluTimeSaved({ hours = 2.5, label = 'horas/día ahorradas' }) {
  const pct = Math.min(hours / 8, 1);
  const angle = pct * 360;
  const r = 52;
  const cx = 70, cy = 80;
  const toRad = deg => (deg - 90) * Math.PI / 180;
  const arcX = cx + r * Math.cos(toRad(angle));
  const arcY = cy + r * Math.sin(toRad(angle));
  const largeArc = angle > 180 ? 1 : 0;

  return (
    <svg viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <circle cx={cx} cy={cy} r={r+8} fill="rgba(79,110,247,0.05)" stroke="rgba(79,110,247,0.1)" strokeWidth="1"/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#252A3F" strokeWidth="8"/>
      <path d={`M ${cx} ${cy-r} A ${r} ${r} 0 ${largeArc} 1 ${arcX} ${arcY}`}
        fill="none" stroke="url(#clockGrad)" strokeWidth="8" strokeLinecap="round"/>
      <defs>
        <linearGradient id="clockGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F6EF7"/>
          <stop offset="100%" stopColor="#00D4AA"/>
        </linearGradient>
      </defs>
      {/* Tick marks */}
      {Array.from({length:12},(_,i) => {
        const a = (i/12)*360 - 90;
        const r1=r-4, r2=r+2;
        const x1=cx+r1*Math.cos(a*Math.PI/180), y1=cy+r1*Math.sin(a*Math.PI/180);
        const x2=cx+r2*Math.cos(a*Math.PI/180), y2=cy+r2*Math.sin(a*Math.PI/180);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#252A3F" strokeWidth="1.5"/>;
      })}
      <text x={cx} y={cy-6} textAnchor="middle" fontSize="20" fontWeight="800" fill="#F0F2FF">{hours}h</text>
      <text x={cx} y={cy+12} textAnchor="middle" fontSize="7" fill="#7A80A0">al día</text>
      <text x={cx} y={cy+26} textAnchor="middle" fontSize="7" fill="#00D4AA">libres</text>
      <rect x="0" y="148" width="140" height="12" rx="4" fill="transparent"/>
      <text x="70" y="158" textAnchor="middle" fontSize="7.5" fill="#4A5070">{label}</text>
    </svg>
  );
}

/* ── No-Show Reduction Visual ───────────────────────────── */
function IlluNoShows({ before=18, after=8 }) {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="noshow-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EF4444"/>
          <stop offset="60%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#00D4AA"/>
        </linearGradient>
      </defs>
      {/* Grid */}
      {[0,25,50,75,100].map(y=>(
        <line key={y} x1="20" y1={10+y} x2="190" y2={10+y} stroke="#1E2235" strokeWidth="0.5"/>
      ))}
      {/* Before line (flat high) */}
      <polyline points="20,20 80,22 95,18 130,24" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.5"/>
      {/* After line (drops) */}
      <polyline points="20,20 40,22 60,35 90,70 130,90 190,95" fill="none" stroke="url(#noshow-line)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Area fill */}
      <polygon points="20,20 40,22 60,35 90,70 130,90 190,95 190,110 20,110" fill="url(#noshow-line)" opacity="0.07"/>
      {/* Labels */}
      <text x="26" y="18" fontSize="8" fill="#EF4444">{before}%</text>
      <text x="162" y="93" fontSize="8" fill="#00D4AA">{after}%</text>
      <text x="20" y="125" fontSize="7" fill="#4A5070">Antes</text>
      <text x="163" y="125" fontSize="7" fill="#00D4AA" fontWeight="700">−{before-after}pp</text>
      <rect x="75" y="120" width="60" height="14" rx="7" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.25)" strokeWidth="0.5"/>
      <text x="105" y="130" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#00D4AA">no-shows</text>
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
      <text x="110" y="77" textAnchor="middle" fontSize="8" fill="#00D4AA">Con Neuria: &lt;10 segundos</text>
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
      <rect x="73" y="84" width="48" height="20" rx="2 8 8 8" fill="rgba(0,212,170,0.15)" stroke="rgba(0,212,170,0.3)" strokeWidth="0.5"/>
      <text x="97" y="95" textAnchor="middle" fontSize="6" fill="#00D4AA" fontWeight="700">✓ Cita confirmada</text>
      <text x="97" y="103" textAnchor="middle" fontSize="5" fill="#00A882">Martes 29 · 10:00h</text>
      {/* Input bar */}
      <rect x="73" y="109" width="54" height="10" rx="5" fill="#181C28" stroke="#252A3F" strokeWidth="0.5"/>
      <circle cx="122" cy="114" r="4" fill="#4F6EF7"/>
      {/* Channels below */}
      <text x="100" y="148" textAnchor="middle" fontSize="7" fill="#4A5070">También disponible en</text>
      {[
        {x:54, label:'Web', color:'#4F6EF7'},
        {x:100, label:'Email', color:'#7B96FF'},
        {x:146, label:'Instagram', color:'#00D4AA'},
      ].map(c => (
        <g key={c.label}>
          <rect x={c.x-18} y="152" width="36" height="20" rx="6" fill={`rgba(${c.color==='#4F6EF7'?'79,110,247':c.color==='#7B96FF'?'123,150,255':'0,212,170'},0.1)`} stroke={`${c.color}40`} strokeWidth="0.5"/>
          <text x={c.x} y="165" textAnchor="middle" fontSize="7" fill={c.color} fontWeight="600">{c.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── Automation Pipeline ────────────────────────────────── */
function IlluPipeline({ steps = ['Solicitud','Verificación','Confirmación','Recordatorio','Seguimiento'] }) {
  return (
    <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="pipe-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F6EF7"/>
          <stop offset="100%" stopColor="#00D4AA"/>
        </linearGradient>
      </defs>
      {steps.map((s, i) => {
        const x = 10 + i * 46;
        const isLast = i === steps.length - 1;
        return (
          <g key={s}>
            {/* Connector line */}
            {!isLast && <line x1={x+22} y1="28" x2={x+46} y2="28" stroke="url(#pipe-grad)" strokeWidth="1.5" strokeDasharray={i < 2 ? '0' : '3,2'} opacity={i < 2 ? 1 : 0.4}/>}
            {/* Node */}
            <circle cx={x+10} cy="28" r="12"
              fill={i === 0 ? 'rgba(79,110,247,0.2)' : i === 1 ? 'rgba(79,110,247,0.15)' : i === 2 ? 'rgba(0,212,170,0.2)' : 'rgba(255,255,255,0.04)'}
              stroke={i < 3 ? (i < 2 ? '#4F6EF7' : '#00D4AA') : '#252A3F'} strokeWidth="1.2"
              opacity={i < 3 ? 1 : 0.5}/>
            <text x={x+10} y="31" textAnchor="middle" fontSize="10">{i===0?'📩':i===1?'🔍':i===2?'✅':i===3?'🔔':'⭐'}</text>
            {/* Label */}
            <text x={x+10} y="52" textAnchor="middle" fontSize="6.5" fill={i < 3 ? '#BEC4E0' : '#4A5070'}>{s}</text>
            {/* Active pulse */}
            {i === 2 && <circle cx={x+10} cy="28" r="16" fill="none" stroke="#00D4AA" strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values="14;20;14" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
            </circle>}
          </g>
        );
      })}
      <text x="120" y="72" textAnchor="middle" fontSize="6.5" fill="#4A5070">Flujo 100% automatizado · sin intervención humana</text>
    </svg>
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
      <text x="148" y="77" textAnchor="middle" fontSize="6.5" fill="#7B96FF">Neuria lo gestiona</text>
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
      {/* Neuria label */}
      <text x="100" y="152" textAnchor="middle" fontSize="7" fill="#4A5070">Sistema Neuria — todo conectado</text>
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
