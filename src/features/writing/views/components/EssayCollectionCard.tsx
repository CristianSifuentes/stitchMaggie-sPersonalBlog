import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { EssaySummary } from '@/features/writing/types/essay';
import { APP_ROUTES } from '@/app/config/routes';
import { writingManager } from '@/features/writing/services/WritingManager';

interface EssayCollectionCardProps {
  essay: EssaySummary;
}

function EssayVisual({ visual }: Pick<EssaySummary, 'visual'>) {
  if (visual === 'bulb') {
    // Glowing idea — warm amber filament inside a glass bulb
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <radialGradient id="bulb-bg" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#fffbf0" />
            <stop offset="100%" stopColor="#f5e6c8" />
          </radialGradient>
          <radialGradient id="bulb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd97d" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffb347" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bulb-glass" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f0c060" stopOpacity="0.1" />
          </radialGradient>
          <filter id="bulb-blur">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#bulb-bg)" />
        {/* outer glow */}
        <ellipse cx="200" cy="128" rx="70" ry="70" fill="url(#bulb-glow)" filter="url(#bulb-blur)" />
        {/* bulb body */}
        <path d="M170,148 Q152,120 152,100 A48,48 0 1,1 248,100 Q248,120 230,148 Z" fill="url(#bulb-glass)" stroke="#d4a017" strokeWidth="1.5" />
        {/* filament */}
        <path d="M192,132 L192,115 Q192,108 200,104 Q208,108 208,115 L208,132" fill="none" stroke="#ffd97d" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="192" y1="132" x2="208" y2="132" stroke="#ffd97d" strokeWidth="2.5" strokeLinecap="round" />
        {/* base */}
        <rect x="182" y="148" width="36" height="8" rx="2" fill="#c9960c" opacity="0.8" />
        <rect x="185" y="156" width="30" height="7" rx="1.5" fill="#b8860b" opacity="0.7" />
        <rect x="188" y="163" width="24" height="6" rx="1" fill="#a07500" opacity="0.6" />
        {/* sparkles */}
        <g fill="#ffd97d" opacity="0.7">
          <circle cx="152" cy="88" r="2.5" />
          <circle cx="248" cy="92" r="2" />
          <circle cx="158" cy="62" r="1.5" />
          <circle cx="244" cy="65" r="1.5" />
          <circle cx="200" cy="50" r="2" />
        </g>
        {/* rays */}
        <g stroke="#ffd97d" strokeWidth="1.2" opacity="0.5" strokeLinecap="round">
          <line x1="200" y1="44" x2="200" y2="36" />
          <line x1="148" y1="70" x2="142" y2="64" />
          <line x1="252" y1="70" x2="258" y2="64" />
          <line x1="133" y1="100" x2="124" y2="100" />
          <line x1="267" y1="100" x2="276" y2="100" />
        </g>
      </svg>
    );
  }

  if (visual === 'cards') {
    // Stack of field notes — linen cards fanning out like collected knowledge
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="cards-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9f4ed" />
            <stop offset="100%" stopColor="#ede3d6" />
          </linearGradient>
          <filter id="card-shadow" x="-5%" y="-5%" width="115%" height="120%">
            <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#a08060" floodOpacity="0.25" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#cards-bg)" />
        {/* back card */}
        <g transform="rotate(-12, 200, 160)" filter="url(#card-shadow)">
          <rect x="125" y="80" width="130" height="170" rx="4" fill="#f5ede0" stroke="#ddd0b8" strokeWidth="1" />
          <line x1="141" y1="112" x2="239" y2="112" stroke="#d4b896" strokeWidth="1.2" />
          <line x1="141" y1="124" x2="239" y2="124" stroke="#d4b896" strokeWidth="1" />
          <line x1="141" y1="136" x2="220" y2="136" stroke="#d4b896" strokeWidth="1" />
        </g>
        {/* middle card */}
        <g transform="rotate(-4, 200, 160)" filter="url(#card-shadow)">
          <rect x="130" y="75" width="130" height="170" rx="4" fill="#faf5ee" stroke="#ddd0b8" strokeWidth="1" />
          <line x1="146" y1="107" x2="244" y2="107" stroke="#c4a882" strokeWidth="1.2" />
          <line x1="146" y1="119" x2="244" y2="119" stroke="#c4a882" strokeWidth="1" />
          <line x1="146" y1="131" x2="225" y2="131" stroke="#c4a882" strokeWidth="1" />
          <line x1="146" y1="143" x2="244" y2="143" stroke="#c4a882" strokeWidth="0.8" />
          <line x1="146" y1="155" x2="215" y2="155" stroke="#c4a882" strokeWidth="0.8" />
        </g>
        {/* front card */}
        <g filter="url(#card-shadow)">
          <rect x="138" y="68" width="130" height="170" rx="4" fill="white" stroke="#d8cbb8" strokeWidth="1" />
          {/* ruled lines */}
          <line x1="154" y1="100" x2="252" y2="100" stroke="#e8d8c4" strokeWidth="1.5" />
          <line x1="154" y1="115" x2="252" y2="115" stroke="#e8d8c4" strokeWidth="1" />
          <line x1="154" y1="130" x2="252" y2="130" stroke="#e8d8c4" strokeWidth="1" />
          <line x1="154" y1="145" x2="252" y2="145" stroke="#e8d8c4" strokeWidth="1" />
          <line x1="154" y1="160" x2="252" y2="160" stroke="#e8d8c4" strokeWidth="1" />
          <line x1="154" y1="175" x2="240" y2="175" stroke="#e8d8c4" strokeWidth="1" />
          {/* teal accent dot top-right */}
          <circle cx="246" cy="84" r="5" fill="#4ecdc4" opacity="0.8" />
          {/* pen mark */}
          <path d="M154,100 Q170,97 182,103" stroke="#8b7355" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (visual === 'planet') {
    // Illustrated planet with orbital ring — cosmic curiosity
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <radialGradient id="space-bg" cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#1a1035" />
            <stop offset="100%" stopColor="#0d0820" />
          </radialGradient>
          <radialGradient id="planet-grad" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="45%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b0764" />
          </radialGradient>
          <radialGradient id="planet-shine" cx="35%" cy="30%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="planet-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#space-bg)" />
        {/* stars */}
        <g fill="white">
          <circle cx="50" cy="30" r="1" opacity="0.8" /><circle cx="120" cy="18" r="1.5" opacity="0.6" />
          <circle cx="310" cy="25" r="1" opacity="0.9" /><circle cx="370" cy="50" r="1.2" opacity="0.7" />
          <circle cx="60" cy="210" r="1" opacity="0.5" /><circle cx="340" cy="220" r="1.5" opacity="0.8" />
          <circle cx="30" cy="140" r="1" opacity="0.6" /><circle cx="380" cy="160" r="1" opacity="0.7" />
          <circle cx="85" cy="80" r="0.8" opacity="0.9" /><circle cx="320" cy="90" r="0.8" opacity="0.6" />
          <circle cx="155" cy="240" r="1" opacity="0.5" /><circle cx="260" cy="255" r="1.2" opacity="0.7" />
        </g>
        {/* ring back half */}
        <ellipse cx="200" cy="148" rx="100" ry="22" fill="none" stroke="#c4b5fd" strokeWidth="8" opacity="0.25"
          strokeDasharray="314" strokeDashoffset="157" />
        {/* planet body */}
        <circle cx="200" cy="140" r="72" fill="url(#planet-grad)" filter="url(#planet-glow)" />
        <circle cx="200" cy="140" r="72" fill="url(#planet-shine)" />
        {/* surface bands */}
        <path d="M134,128 Q200,118 266,128" fill="none" stroke="#c4b5fd" strokeWidth="3" opacity="0.35" strokeLinecap="round" />
        <path d="M130,148 Q200,140 270,148" fill="none" stroke="#ddd6fe" strokeWidth="2" opacity="0.25" strokeLinecap="round" />
        {/* ring front half */}
        <ellipse cx="200" cy="148" rx="100" ry="22" fill="none" stroke="#c4b5fd" strokeWidth="8" opacity="0.45"
          strokeDasharray="314" strokeDashoffset="-157" />
        {/* small moon */}
        <circle cx="310" cy="88" r="12" fill="#7c3aed" opacity="0.8" />
        <circle cx="306" cy="85" r="4" fill="#a78bfa" opacity="0.5" />
      </svg>
    );
  }

  if (visual === 'folk') {
    // Warm desk with spreadsheet grid and handmade sticky note — folk computing
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="folk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf6e3" />
            <stop offset="100%" stopColor="#f5e6c8" />
          </linearGradient>
          <linearGradient id="desk-wood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8956c" />
            <stop offset="100%" stopColor="#a0714a" />
          </linearGradient>
          <filter id="folk-shadow">
            <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#8b6340" floodOpacity="0.3" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#folk-bg)" />
        {/* desk surface */}
        <rect x="0" y="180" width="400" height="100" fill="url(#desk-wood)" opacity="0.7" />
        <line x1="0" y1="180" x2="400" y2="180" stroke="#b07840" strokeWidth="1.5" opacity="0.5" />
        {/* spreadsheet */}
        <g filter="url(#folk-shadow)">
          <rect x="60" y="60" width="200" height="148" rx="3" fill="white" stroke="#d0c4b0" strokeWidth="1" />
          {/* column headers */}
          <rect x="60" y="60" width="200" height="22" rx="3" fill="#e8e0d0" />
          {[0,1,2,3].map((i) => (
            <line key={`col-${i}`} x1={60 + (i+1)*50} y1="60" x2={60 + (i+1)*50} y2="208" stroke="#d0c4b0" strokeWidth="0.8" />
          ))}
          {[0,1,2,3,4].map((i) => (
            <line key={`row-${i}`} x1="60" y1={82 + i*26} x2="260" y2={82 + i*26} stroke="#d0c4b0" strokeWidth="0.8" />
          ))}
          {/* cell text stubs */}
          <rect x="70" y="66" width="30" height="8" rx="2" fill="#9b8b6e" opacity="0.4" />
          <rect x="120" y="66" width="28" height="8" rx="2" fill="#9b8b6e" opacity="0.4" />
          <rect x="70" y="88" width="40" height="7" rx="2" fill="#c4a882" opacity="0.5" />
          <rect x="122" y="88" width="25" height="7" rx="2" fill="#4ecdc4" opacity="0.5" />
          <rect x="70" y="114" width="36" height="7" rx="2" fill="#c4a882" opacity="0.4" />
          <rect x="122" y="114" width="30" height="7" rx="2" fill="#c4a882" opacity="0.4" />
          <rect x="70" y="140" width="42" height="7" rx="2" fill="#4ecdc4" opacity="0.4" />
          <rect x="172" y="140" width="20" height="7" rx="2" fill="#c4a882" opacity="0.3" />
          <rect x="70" y="166" width="32" height="7" rx="2" fill="#c4a882" opacity="0.35" />
          {/* highlight row */}
          <rect x="61" y="109" width="198" height="25" fill="#fff9c4" opacity="0.6" />
        </g>
        {/* sticky note */}
        <g transform="rotate(6, 270, 110)" filter="url(#folk-shadow)">
          <rect x="230" y="75" width="105" height="95" rx="2" fill="#fff176" />
          <line x1="245" y1="102" x2="320" y2="102" stroke="#c6b000" strokeWidth="1.2" opacity="0.5" />
          <line x1="245" y1="116" x2="320" y2="116" stroke="#c6b000" strokeWidth="1" opacity="0.4" />
          <line x1="245" y1="130" x2="310" y2="130" stroke="#c6b000" strokeWidth="1" opacity="0.4" />
          <line x1="245" y1="144" x2="318" y2="144" stroke="#c6b000" strokeWidth="1" opacity="0.4" />
          {/* fold corner */}
          <path d="M335,75 L335,92 L318,75 Z" fill="#e6c800" opacity="0.6" />
        </g>
        {/* pencil */}
        <g transform="rotate(-15, 78, 195)">
          <rect x="55" y="168" width="46" height="10" rx="1" fill="#f5c542" />
          <polygon points="55,168 55,178 48,173" fill="#f0b030" />
          <rect x="101" y="169" width="8" height="8" rx="0.5" fill="#e8a0a0" />
          <rect x="109" y="170" width="4" height="6" rx="0.5" fill="#c0c0c0" />
        </g>
      </svg>
    );
  }

  if (visual === 'diagram') {
    // Node graph on graph paper — systems thinking made visible
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4ecdc4" strokeWidth="0.4" opacity="0.3" />
          </pattern>
          <radialGradient id="diag-bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#f0fafa" />
            <stop offset="100%" stopColor="#e0f0f0" />
          </radialGradient>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#diag-bg)" />
        <rect width="400" height="280" fill="url(#grid)" />
        {/* edges */}
        <g stroke="#4ecdc4" strokeWidth="1.5" opacity="0.6" fill="none">
          <line x1="200" y1="140" x2="120" y2="80" />
          <line x1="200" y1="140" x2="290" y2="90" />
          <line x1="200" y1="140" x2="310" y2="185" />
          <line x1="200" y1="140" x2="130" y2="200" />
          <line x1="200" y1="140" x2="200" y2="50" />
          <line x1="120" y1="80" x2="200" y2="50" />
          <line x1="290" y1="90" x2="200" y2="50" />
          <line x1="120" y1="80" x2="130" y2="200" strokeDasharray="5,3" opacity="0.4" />
          <line x1="310" y1="185" x2="130" y2="200" strokeDasharray="5,3" opacity="0.4" />
        </g>
        {/* arrow heads */}
        <g fill="#4ecdc4" opacity="0.6">
          <polygon points="118,77 126,78 122,85" />
          <polygon points="287,88 294,82 297,90" />
        </g>
        {/* nodes */}
        <g filter="url(#node-glow)">
          <circle cx="200" cy="140" r="20" fill="#4ecdc4" />
          <circle cx="200" cy="140" r="14" fill="white" />
          <circle cx="200" cy="140" r="6" fill="#4ecdc4" opacity="0.8" />

          <circle cx="120" cy="80" r="14" fill="white" stroke="#4ecdc4" strokeWidth="2" />
          <circle cx="120" cy="80" r="5" fill="#4ecdc4" opacity="0.7" />

          <circle cx="290" cy="90" r="14" fill="white" stroke="#4ecdc4" strokeWidth="2" />
          <circle cx="290" cy="90" r="5" fill="#4ecdc4" opacity="0.7" />

          <circle cx="310" cy="185" r="14" fill="white" stroke="#4ecdc4" strokeWidth="2" />
          <circle cx="310" cy="185" r="5" fill="#4ecdc4" opacity="0.7" />

          <circle cx="130" cy="200" r="14" fill="white" stroke="#4ecdc4" strokeWidth="2" />
          <circle cx="130" cy="200" r="5" fill="#4ecdc4" opacity="0.7" />

          <circle cx="200" cy="50" r="11" fill="white" stroke="#ff6b6b" strokeWidth="2" />
          <circle cx="200" cy="50" r="4" fill="#ff6b6b" opacity="0.8" />
        </g>
        {/* labels */}
        <g fontFamily="monospace" fontSize="8" fill="#2a7a78" opacity="0.7">
          <text x="80" y="76">input</text>
          <text x="296" y="86">process</text>
          <text x="180" y="48">trigger</text>
          <text x="316" y="190">output</text>
          <text x="100" y="218">feedback</text>
        </g>
      </svg>
    );
  }

  if (visual === 'legible') {
    // Census form with blank cells — the violence of classification
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="legible-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fafaf8" />
            <stop offset="100%" stopColor="#f0ede6" />
          </linearGradient>
          <filter id="form-shadow">
            <feDropShadow dx="3" dy="5" stdDeviation="8" floodColor="#888" floodOpacity="0.18" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#legible-bg)" />
        {/* subtle grid in background */}
        <g stroke="#d4cfc6" strokeWidth="0.5" opacity="0.4">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
            <line key={`hg-${i}`} x1="0" y1={i*24} x2="400" y2={i*24} />
          ))}
        </g>
        {/* form document */}
        <g filter="url(#form-shadow)">
          <rect x="80" y="30" width="240" height="224" rx="2" fill="white" stroke="#ccc" strokeWidth="0.8" />
          {/* form header */}
          <rect x="80" y="30" width="240" height="30" fill="#2c3e50" />
          <text x="200" y="50" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace" letterSpacing="2">OFFICIAL CENSUS FORM</text>
          {/* fields */}
          {[
            { y: 78, label: 'NAME', filled: true },
            { y: 110, label: 'OCCUPATION', filled: true },
            { y: 142, label: 'RACE', filled: false },
            { y: 174, label: 'RELIGION', filled: false },
            { y: 206, label: 'STATUS', filled: false },
          ].map(({ y, label, filled }) => (
            <g key={label}>
              <text x="92" y={y - 4} fontSize="7" fontFamily="monospace" fill="#888" letterSpacing="1.5">{label}</text>
              <rect x="92" y={y} width="214" height="22" rx="1" fill={filled ? '#f0ede6' : 'white'} stroke="#ccc" strokeWidth="0.8" />
              {filled && <rect x="96" y={y + 6} width={label === 'NAME' ? 120 : 80} height="9" rx="2" fill="#9b8b6e" opacity="0.4" />}
              {!filled && (
                <text x="200" y={y + 15} textAnchor="middle" fontSize="10" fill="#ddd" fontFamily="serif">—</text>
              )}
            </g>
          ))}
          {/* red stamp: INCOMPLETE */}
          <g transform="rotate(-18, 260, 190)">
            <rect x="200" y="172" width="100" height="28" rx="3" fill="none" stroke="#c0392b" strokeWidth="2" opacity="0.7" />
            <text x="250" y="190" textAnchor="middle" fontSize="10" fill="#c0392b" fontFamily="monospace" letterSpacing="1" fontWeight="bold" opacity="0.7">INCOMPLETE</text>
          </g>
        </g>
      </svg>
    );
  }

  if (visual === 'memex') {
    // Layered historical screens: Memex → NLS → HyperCard → Roam — tools for thought
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="memex-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f0f1a" />
            <stop offset="100%" stopColor="#1a1430" />
          </linearGradient>
          <filter id="screen-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#memex-bg)" />
        {/* floating timeline line */}
        <line x1="50" y1="240" x2="350" y2="240" stroke="#4ecdc4" strokeWidth="1" opacity="0.3" />
        {[0,1,2,3].map((i) => (
          <circle key={i} cx={80 + i*80} cy="240" r="3" fill="#4ecdc4" opacity="0.5" />
        ))}
        {/* screen 1 — Memex (amber desk console) */}
        <g filter="url(#screen-glow)" opacity="0.7">
          <rect x="50" y="140" width="90" height="80" rx="4" fill="#1a1200" stroke="#b8860b" strokeWidth="1.5" />
          <rect x="56" y="146" width="78" height="60" rx="2" fill="#2a1e00" />
          <g stroke="#b8860b" strokeWidth="0.8" opacity="0.6">
            <line x1="60" y1="158" x2="128" y2="158" />
            <line x1="60" y1="166" x2="118" y2="166" />
            <line x1="60" y1="174" x2="124" y2="174" />
            <line x1="60" y1="182" x2="110" y2="182" />
          </g>
          <text x="95" y="222" textAnchor="middle" fontSize="7" fill="#b8860b" opacity="0.6" fontFamily="monospace">1945</text>
        </g>
        {/* screen 2 — NLS terminal (green phosphor) */}
        <g filter="url(#screen-glow)" opacity="0.8">
          <rect x="155" y="110" width="90" height="80" rx="4" fill="#001a00" stroke="#00c853" strokeWidth="1.5" />
          <rect x="161" y="116" width="78" height="60" rx="2" fill="#001200" />
          <g fill="#00c853" opacity="0.7" fontFamily="monospace" fontSize="6">
            <text x="165" y="130">$ link --</text>
            <text x="165" y="140">node 42</text>
            <text x="165" y="150">→ node 7</text>
            <text x="165" y="160">OK</text>
            <text x="165" y="170" opacity="0.4">_</text>
          </g>
          <text x="200" y="204" textAnchor="middle" fontSize="7" fill="#00c853" opacity="0.6" fontFamily="monospace">1968</text>
        </g>
        {/* screen 3 — HyperCard (mac classic) */}
        <g filter="url(#screen-glow)" opacity="0.9">
          <rect x="255" y="80" width="100" height="80" rx="6" fill="#c8c8c8" stroke="#888" strokeWidth="1" />
          <rect x="260" y="86" width="90" height="62" rx="2" fill="white" stroke="#999" strokeWidth="0.8" />
          {/* hypercard stack */}
          <rect x="265" y="90" width="80" height="54" rx="1" fill="white" stroke="#ddd" strokeWidth="0.5" />
          <rect x="268" y="93" width="74" height="48" rx="1" fill="#f5f5f5" />
          <rect x="272" y="97" width="40" height="8" rx="2" fill="#333" opacity="0.6" />
          <rect x="272" y="109" width="60" height="5" rx="1" fill="#999" opacity="0.4" />
          <rect x="272" y="118" width="50" height="5" rx="1" fill="#999" opacity="0.3" />
          <rect x="272" y="127" width="55" height="5" rx="1" fill="#999" opacity="0.3" />
          <text x="305" y="176" textAnchor="middle" fontSize="7" fill="#666" fontFamily="monospace">1987</text>
        </g>
        {/* teal connecting dots */}
        <g stroke="#4ecdc4" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" fill="none">
          <path d="M 140 175 Q 155 155 155 150" />
          <path d="M 245 148 Q 255 130 255 120" />
        </g>
      </svg>
    );
  }

  if (visual === 'presence') {
    // Soft glowing circles overlapping — ambient awareness of others nearby
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <radialGradient id="pres-bg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#0a0f1e" />
            <stop offset="100%" stopColor="#060810" />
          </radialGradient>
          <radialGradient id="orb-teal" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4ecdc4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-amber" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffd97d" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffd97d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-coral" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-violet" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-blur">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#pres-bg)" />
        {/* glow halos */}
        <ellipse cx="165" cy="130" rx="80" ry="80" fill="url(#orb-teal)" filter="url(#soft-blur)" opacity="0.7" />
        <ellipse cx="248" cy="145" rx="75" ry="75" fill="url(#orb-amber)" filter="url(#soft-blur)" opacity="0.65" />
        <ellipse cx="195" cy="190" rx="60" ry="60" fill="url(#orb-coral)" filter="url(#soft-blur)" opacity="0.55" />
        <ellipse cx="210" cy="90" rx="55" ry="55" fill="url(#orb-violet)" filter="url(#soft-blur)" opacity="0.5" />
        {/* avatar circles */}
        <circle cx="158" cy="128" r="22" fill="none" stroke="#4ecdc4" strokeWidth="1.5" opacity="0.7" />
        <circle cx="158" cy="128" r="10" fill="#4ecdc4" opacity="0.9" />
        <circle cx="242" cy="142" r="22" fill="none" stroke="#ffd97d" strokeWidth="1.5" opacity="0.7" />
        <circle cx="242" cy="142" r="10" fill="#ffd97d" opacity="0.9" />
        <circle cx="195" cy="185" r="18" fill="none" stroke="#ff6b6b" strokeWidth="1.5" opacity="0.6" />
        <circle cx="195" cy="185" r="8" fill="#ff6b6b" opacity="0.85" />
        <circle cx="210" cy="88" r="16" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.6" />
        <circle cx="210" cy="88" r="7" fill="#c4b5fd" opacity="0.8" />
        {/* pulse rings */}
        <circle cx="158" cy="128" r="34" fill="none" stroke="#4ecdc4" strokeWidth="0.8" opacity="0.3" strokeDasharray="4,4" />
        <circle cx="242" cy="142" r="32" fill="none" stroke="#ffd97d" strokeWidth="0.8" opacity="0.3" strokeDasharray="4,4" />
        {/* status dots */}
        <circle cx="170" cy="116" r="4" fill="#4ecdc4" />
        <circle cx="254" cy="130" r="4" fill="#ffd97d" />
        <circle cx="207" cy="173" r="3.5" fill="#ff6b6b" opacity="0.8" />
      </svg>
    );
  }

  if (visual === 'venn') {
    // Three overlapping circles: technical (teal), cultural (coral), emergent center (warm gold)
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="venn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f4f0" />
            <stop offset="100%" stopColor="#ede8e0" />
          </linearGradient>
          <filter id="venn-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#venn-bg)" />
        {/* main circles */}
        <circle cx="168" cy="125" r="78" fill="#4ecdc4" opacity="0.22" stroke="#4ecdc4" strokeWidth="2" />
        <circle cx="232" cy="125" r="78" fill="#ff6b6b" opacity="0.18" stroke="#ff6b6b" strokeWidth="2" />
        <circle cx="200" cy="183" r="78" fill="#ffd97d" opacity="0.2" stroke="#ffd97d" strokeWidth="2" />
        {/* intersection glow overlay */}
        <circle cx="168" cy="125" r="78" fill="none" stroke="#4ecdc4" strokeWidth="1" opacity="0.5" />
        <circle cx="232" cy="125" r="78" fill="none" stroke="#ff6b6b" strokeWidth="1" opacity="0.5" />
        <circle cx="200" cy="183" r="78" fill="none" stroke="#ffd97d" strokeWidth="1" opacity="0.5" />
        {/* center warm glow */}
        <ellipse cx="200" cy="152" rx="28" ry="24" fill="#ffb347" opacity="0.35" />
        <ellipse cx="200" cy="152" rx="14" ry="11" fill="#ff8c00" opacity="0.3" />
        {/* labels */}
        <text x="130" y="98" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2a7a78" fontFamily="sans-serif" letterSpacing="0.5">TECHNICAL</text>
        <text x="272" y="98" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#c0392b" fontFamily="sans-serif" letterSpacing="0.5">CULTURAL</text>
        <text x="200" y="230" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9b7000" fontFamily="sans-serif" letterSpacing="0.5">POLITICAL</text>
        <text x="200" y="152" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#5a3a00" fontFamily="sans-serif" opacity="0.8">everything</text>
      </svg>
    );
  }

  if (visual === 'theory') {
    // Dark background, gold knowledge tree — theory lives in minds, not code
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="theory-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c1020" />
            <stop offset="100%" stopColor="#16203a" />
          </linearGradient>
          <filter id="tree-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#theory-bg)" />
        {/* stars */}
        <g fill="white" opacity="0.4">
          <circle cx="40" cy="30" r="0.8" /><circle cx="100" cy="20" r="1" /><circle cx="300" cy="15" r="0.8" />
          <circle cx="360" cy="40" r="1" /><circle cx="30" cy="200" r="0.8" /><circle cx="370" cy="220" r="1" />
          <circle cx="80" cy="100" r="0.6" /><circle cx="330" cy="120" r="0.6" />
        </g>
        {/* tree trunk */}
        <g filter="url(#tree-glow)" stroke="#d4a017" fill="none" strokeLinecap="round">
          <line x1="200" y1="255" x2="200" y2="175" strokeWidth="5" />
          {/* main branches */}
          <line x1="200" y1="200" x2="145" y2="155" strokeWidth="3.5" />
          <line x1="200" y1="200" x2="255" y2="155" strokeWidth="3.5" />
          <line x1="200" y1="185" x2="200" y2="130" strokeWidth="3" />
          {/* secondary branches */}
          <line x1="145" y1="155" x2="108" y2="118" strokeWidth="2.2" />
          <line x1="145" y1="155" x2="168" y2="115" strokeWidth="2.2" />
          <line x1="255" y1="155" x2="292" y2="118" strokeWidth="2.2" />
          <line x1="255" y1="155" x2="232" y2="115" strokeWidth="2.2" />
          <line x1="200" y1="130" x2="178" y2="95" strokeWidth="2" />
          <line x1="200" y1="130" x2="222" y2="95" strokeWidth="2" />
          {/* tertiary */}
          <line x1="108" y1="118" x2="88" y2="90" strokeWidth="1.4" />
          <line x1="108" y1="118" x2="120" y2="88" strokeWidth="1.4" />
          <line x1="292" y1="118" x2="312" y2="90" strokeWidth="1.4" />
          <line x1="292" y1="118" x2="280" y2="88" strokeWidth="1.4" />
          <line x1="178" y1="95" x2="165" y2="68" strokeWidth="1.2" />
          <line x1="222" y1="95" x2="235" y2="68" strokeWidth="1.2" />
        </g>
        {/* leaf nodes — glowing gold dots */}
        <g fill="#ffd97d" filter="url(#tree-glow)" opacity="0.9">
          <circle cx="88" cy="90" r="5" /><circle cx="120" cy="88" r="5" />
          <circle cx="312" cy="90" r="5" /><circle cx="280" cy="88" r="5" />
          <circle cx="165" cy="68" r="6" /><circle cx="235" cy="68" r="6" />
          <circle cx="168" cy="115" r="4.5" /><circle cx="232" cy="115" r="4.5" />
        </g>
        {/* root hint */}
        <g stroke="#d4a017" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" fill="none">
          <line x1="200" y1="255" x2="170" y2="270" /><line x1="200" y1="255" x2="230" y2="270" />
          <line x1="200" y1="260" x2="200" y2="278" />
        </g>
        {/* text label */}
        <text x="200" y="272" textAnchor="middle" fontSize="7" fill="#d4a017" opacity="0.5" fontFamily="monospace" letterSpacing="3">NAUR · 1985</text>
      </svg>
    );
  }

  if (visual === 'forest') {
    // Dark forest, silhouetted trees, tiny warm glowing windows hidden among them
    return (
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
        <defs>
          <linearGradient id="forest-sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#050810" />
            <stop offset="60%" stopColor="#0c1220" />
            <stop offset="100%" stopColor="#141e10" />
          </linearGradient>
          <radialGradient id="window-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd97d" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffd97d" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-soft">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#forest-sky)" />
        {/* stars */}
        <g fill="white" opacity="0.5">
          <circle cx="50" cy="18" r="0.7" /><circle cx="140" cy="12" r="1" /><circle cx="200" cy="20" r="0.7" />
          <circle cx="280" cy="10" r="0.8" /><circle cx="360" cy="25" r="0.7" /><circle cx="310" cy="40" r="0.6" />
          <circle cx="80" cy="35" r="0.6" /><circle cx="230" cy="38" r="0.5" />
        </g>
        {/* tree silhouettes — layered, back to front */}
        {/* back layer (faded) */}
        <g fill="#0a1208" opacity="0.6">
          <polygon points="60,200 80,130 100,200" />
          <polygon points="80,200 105,115 130,200" />
          <polygon points="150,200 170,125 190,200" />
          <polygon points="280,200 300,120 320,200" />
          <polygon points="310,200 330,135 350,200" />
          <polygon points="330,200 355,110 380,200" />
        </g>
        {/* mid layer */}
        <g fill="#060e04" opacity="0.85">
          <polygon points="20,280 55,165 90,280" />
          <polygon points="70,280 108,148 146,280" />
          <polygon points="260,280 295,158 330,280" />
          <polygon points="310,280 348,145 386,280" />
        </g>
        {/* front layer — darkest */}
        <g fill="#030804">
          <polygon points="-10,280 40,140 90,280" />
          <polygon points="100,280 145,120 190,280" />
          <polygon points="200,280 240,135 280,280" />
          <polygon points="310,280 355,130 400,280" />
          {/* ground fill */}
          <rect x="0" y="240" width="400" height="40" />
        </g>
        {/* hidden warm windows — tiny glowing squares among the trees */}
        <ellipse cx="162" cy="185" rx="12" ry="8" fill="url(#window-glow)" filter="url(#glow-soft)" opacity="0.9" />
        <rect x="157" y="181" width="9" height="7" rx="1" fill="#ffd97d" opacity="0.95" />

        <ellipse cx="245" cy="195" rx="10" ry="7" fill="url(#window-glow)" filter="url(#glow-soft)" opacity="0.8" />
        <rect x="241" y="191" width="7" height="6" rx="1" fill="#ffb347" opacity="0.9" />

        <ellipse cx="90" cy="215" rx="9" ry="6" fill="url(#window-glow)" filter="url(#glow-soft)" opacity="0.7" />
        <rect x="86" y="211" width="7" height="5" rx="1" fill="#ffd97d" opacity="0.85" />

        <ellipse cx="320" cy="205" rx="10" ry="7" fill="url(#window-glow)" filter="url(#glow-soft)" opacity="0.75" />
        <rect x="316" y="201" width="7" height="6" rx="1" fill="#ffc857" opacity="0.9" />
      </svg>
    );
  }

  // iceberg — small visible tip above waterline, vast hidden mass below
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" aria-hidden className="essay-svg">
      <defs>
        <linearGradient id="ice-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8f4fd" />
          <stop offset="100%" stopColor="#c8e8f8" />
        </linearGradient>
        <linearGradient id="ice-water" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a6b8a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0a3348" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="ice-above" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#d6eff8" />
        </linearGradient>
        <linearGradient id="ice-below" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8d8ea" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5ba8c4" stopOpacity="0.5" />
        </linearGradient>
        <filter id="ice-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#0a3348" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* sky */}
      <rect width="400" height="280" fill="url(#ice-sky)" />
      {/* subtle horizon reflection */}
      <line x1="0" y1="100" x2="400" y2="100" stroke="#a8d0e8" strokeWidth="1" opacity="0.6" />
      {/* water */}
      <rect x="0" y="100" width="400" height="180" fill="url(#ice-water)" />
      {/* water surface ripples */}
      <g stroke="white" strokeWidth="0.8" opacity="0.15" fill="none">
        <path d="M20,108 Q60,103 100,108 Q140,113 180,108" />
        <path d="M220,112 Q260,107 300,112 Q340,117 380,112" />
        <path d="M50,120 Q100,115 150,120" />
      </g>
      {/* iceberg — above waterline (small) */}
      <g filter="url(#ice-shadow)">
        <polygon points="170,38 200,16 230,38 245,70 225,100 175,100 155,70" fill="url(#ice-above)" stroke="#8ec8e0" strokeWidth="1" />
        {/* highlight facets */}
        <polygon points="200,16 230,38 220,28" fill="white" opacity="0.6" />
        <polygon points="170,38 185,55 165,60" fill="white" opacity="0.3" />
      </g>
      {/* iceberg — below waterline (vast) */}
      <polygon
        points="175,100 225,100 260,135 280,175 270,220 245,258 200,270 155,258 130,220 120,175 140,135"
        fill="url(#ice-below)"
        stroke="#4a9ab5"
        strokeWidth="1"
        opacity="0.8"
      />
      {/* depth lines */}
      <g stroke="#8ec8e0" strokeWidth="0.7" opacity="0.3" fill="none">
        <path d="M168,115 Q200,108 232,115" />
        <path d="M155,140 Q200,132 245,140" />
        <path d="M148,168 Q200,158 252,168" />
        <path d="M143,196 Q200,186 257,196" />
        <path d="M148,224 Q200,215 252,224" />
      </g>
      {/* waterline label */}
      <g>
        <line x1="50" y1="100" x2="130" y2="100" stroke="#4ecdc4" strokeWidth="1" opacity="0.5" strokeDasharray="4,3" />
        <line x1="270" y1="100" x2="350" y2="100" stroke="#4ecdc4" strokeWidth="1" opacity="0.5" strokeDasharray="4,3" />
        <text x="48" y="97" fontSize="7" fill="#4ecdc4" opacity="0.7" fontFamily="monospace" letterSpacing="1">explicit</text>
        <text x="272" y="113" fontSize="7" fill="#4ecdc4" opacity="0.7" fontFamily="monospace" letterSpacing="1">tacit</text>
      </g>
    </svg>
  );
}

function EssayCollectionCardImpl({ essay }: EssayCollectionCardProps) {
  const queryClient = useQueryClient();

  const prefetchEssay = useCallback(() => {
    void queryClient.prefetchQuery({
      queryKey: ['writing', 'essay', essay.slug],
      queryFn: () => writingManager.getEssayBySlug(essay.slug),
    });
  }, [essay.slug, queryClient]);

  return (
    <article className="essay-collection-card">
      <Link to={APP_ROUTES.writingDetail(essay.slug)} onMouseEnter={prefetchEssay} onFocus={prefetchEssay}>
        <div className="essay-collection-card-visual">
          <EssayVisual visual={essay.visual} />
        </div>

        <div className="essay-collection-card-copy">
          <span className="essay-collection-card-category">{essay.category}</span>
          <h2>{essay.title}</h2>
          <p className="essay-collection-card-excerpt">{essay.excerpt}</p>
          <footer className="essay-collection-card-meta">
            <span>{essay.readTimeMinutes} min read</span>
            <span>{new Date(essay.publishedAt).getFullYear()}</span>
          </footer>
        </div>
      </Link>
    </article>
  );
}

export const EssayCollectionCard = memo(EssayCollectionCardImpl);
