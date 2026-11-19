import React from 'react';

/* ==========================================================================
   CHƯƠNG 13: NITROGEN AND SULFUR — HÌNH VẼ VECTOR CAO CẤP (SVG thuần)
   Hình 13.1 – 13.8 + sơ đồ dot-and-cross + bộ dụng cụ phòng thí nghiệm
   ========================================================================== */

const CAP = 'mt-2 text-xs leading-relaxed text-stone-700 font-sans';

const Frame: React.FC<{ children: React.ReactNode; bg?: string; label?: string }> = ({
  children,
  bg = 'bg-white',
  label,
}) => (
  <div className={`relative overflow-hidden rounded-md border border-stone-300 shadow-sm ${bg}`}>
    {children}
    {label && (
      <span className="absolute top-1.5 left-1.5 bg-black/55 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
        {label}
      </span>
    )}
  </div>
);

/* --------------------------------------------------------------------------
   Hình 13.1 — a) tàu chở dầu; b) mỏ sulfur
-------------------------------------------------------------------------- */
export const Figure13_1: React.FC = () => (
  <figure className="my-1">
    <div className="grid grid-cols-2 gap-1.5">
      <Frame label="a">
        <svg viewBox="0 0 220 150" className="w-full" role="img" aria-label="Tàu chở dầu trên biển">
          <defs>
            <linearGradient id="sea13" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5b7f96" />
              <stop offset="1" stopColor="#2e4a5c" />
            </linearGradient>
          </defs>
          <rect width="220" height="150" fill="url(#sea13)" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M0 ${22 + i * 22} q 18 -5 36 0 t 36 0 t 36 0 t 36 0 t 36 0 t 36 0`}
              stroke="#ffffff"
              strokeOpacity="0.14"
              fill="none"
            />
          ))}
          {/* tankers */}
          {[
            { x: 30, y: 48, s: 1 },
            { x: 96, y: 78, s: 1.25 },
            { x: 150, y: 34, s: 0.8 },
          ].map((t, i) => (
            <g key={i} transform={`translate(${t.x} ${t.y}) scale(${t.s})`}>
              <path d="M0 10 L6 18 L58 18 L64 10 L58 4 L6 4 Z" fill="#20262b" />
              <rect x="10" y="6" width="40" height="5" rx="2" fill="#3d4750" />
              <rect x="46" y="-2" width="10" height="8" rx="1" fill="#e8e4da" />
              <rect x="48" y="-6" width="2" height="4" fill="#8a8f94" />
              <path d="M2 18 q 30 6 60 0 l -4 4 q -26 5 -52 0 z" fill="#ffffff" opacity="0.25" />
            </g>
          ))}
          {/* vệt khí nitrogen minh họa */}
          <path d="M120 96 q 20 -8 44 -6" stroke="#dfe9f2" strokeOpacity="0.5" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        </svg>
      </Frame>
      <Frame label="b">
        <svg viewBox="0 0 220 150" className="w-full" role="img" aria-label="Mỏ sulfur">
          <defs>
            <linearGradient id="sky13" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2f7fc1" />
              <stop offset="1" stopColor="#9cc6e8" />
            </linearGradient>
            <linearGradient id="sulf13" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f6d84a" />
              <stop offset="1" stopColor="#cfa616" />
            </linearGradient>
          </defs>
          <rect width="220" height="150" fill="url(#sky13)" />
          <rect y="96" width="220" height="54" fill="#b98d4f" />
          {/* tường chắn */}
          <polygon points="120,20 220,44 220,110 120,96" fill="#8a5a2b" />
          <polygon points="120,20 220,44 220,50 120,26" fill="#a9743d" />
          {/* đống sulfur */}
          <polygon points="20,110 90,44 170,110" fill="url(#sulf13)" />
          <polygon points="60,110 118,58 190,110" fill="#e9c529" opacity="0.9" />
          {[
            [70, 92], [96, 78], [120, 92], [140, 100], [84, 102], [110, 104],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={3 + (i % 3)} fill="#f9e27a" opacity="0.85" />
          ))}
          {/* công nhân */}
          <g transform="translate(52 88)">
            <circle cx="0" cy="0" r="3" fill="#3a2c1c" />
            <rect x="-2" y="3" width="4" height="9" rx="1.5" fill="#3a2c1c" />
            <line x1="2" y1="5" x2="9" y2="1" stroke="#3a2c1c" strokeWidth="1.6" />
          </g>
          {/* băng tải */}
          <line x1="150" y1="98" x2="214" y2="86" stroke="#4a3a22" strokeWidth="2.4" />
        </svg>
      </Frame>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.1</strong> <strong>a</strong> Khí nitrogen được dùng trong
      khoang chứa của các tàu chở dầu phía trên lớp dầu thô khi dầu được bơm vào bờ. Chất khí trơ này giúp ngăn ngừa
      hỗn hợp nổ giữa hơi dầu thô và không khí hình thành bên trong tàu. <strong>b</strong> Sulfur có thể được khai
      thác từ các mỏ dưới lòng đất bằng cách bơm nước siêu nóng xuống làm chảy sulfur (nó nóng chảy ở khoảng 115 °C).
      Sulfur lỏng sau đó bị ép lên mặt đất dưới áp suất và được để đông đặc lại thành chất rắn màu vàng giòn. Các phân
      tử sulfur ‘hình vương miện’ S<sub>8</sub> có thể xếp chặt với nhau theo những kiểu đều đặn, tạo thành tinh thể.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.2 — Liên kết trong phân tử nitrogen (dot-and-cross)
-------------------------------------------------------------------------- */
const Electron: React.FC<{ x: number; y: number; kind: 'dot' | 'cross'; r?: number }> = ({ x, y, kind, r = 2 }) =>
  kind === 'dot' ? (
    <circle cx={x} cy={y} r={r} fill="#1b5e20" />
  ) : (
    <g stroke="#b71c1c" strokeWidth="1.1">
      <line x1={x - r} y1={y - r} x2={x + r} y2={y + r} />
      <line x1={x - r} y1={y + r} x2={x + r} y2={y - r} />
    </g>
  );

export const Figure13_2: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 360 110" className="w-full" role="img" aria-label="Liên kết cộng hóa trị ba trong N2">
      {/* hai nguyên tử N riêng rẽ */}
      <g>
        <circle cx="42" cy="48" r="26" fill="#e8f5e9" stroke="#66bb6a" strokeWidth="1.4" />
        <text x="42" y="52" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#1b5e20">N</text>
        {[210, 280, 350, 60, 130].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <Electron key={i} x={42 + 19 * Math.cos(rad)} y={48 + 19 * Math.sin(rad)} kind="dot" />;
        })}
        <text x="86" y="52" fontFamily="monospace" fontSize="12" fill="#546e7a">+</text>
        <circle cx="126" cy="48" r="26" fill="#ffebee" stroke="#ef9a9a" strokeWidth="1.4" />
        <text x="126" y="52" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#b71c1c">N</text>
        {[210, 280, 350, 60, 130].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <Electron key={'c' + i} x={126 + 19 * Math.cos(rad)} y={48 + 19 * Math.sin(rad)} kind="cross" />;
        })}
        <text x="84" y="98" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#546e7a">
          hai nguyên tử nitrogen (2,5)
        </text>
      </g>
      <line x1="162" y1="48" x2="190" y2="48" stroke="#546e7a" strokeWidth="1.4" markerEnd="url(#arr13)" />
      <defs>
        <marker id="arr13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#546e7a" />
        </marker>
      </defs>
      {/* phân tử N2: hai vòng tròn chồng lấn */}
      <g>
        <circle cx="238" cy="48" r="26" fill="#e8f5e9" fillOpacity="0.75" stroke="#66bb6a" strokeWidth="1.4" />
        <circle cx="266" cy="48" r="26" fill="#ffebee" fillOpacity="0.55" stroke="#ef9a9a" strokeWidth="1.4" />
        <text x="228" y="42" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#1b5e20">N</text>
        <text x="276" y="42" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#b71c1c">N</text>
        {/* 3 cặp electron dùng chung trong vùng xen phủ */}
        {[38, 48, 58].map((y, i) => (
          <g key={i}>
            <Electron x={249} y={y} kind="dot" />
            <Electron x={255} y={y} kind="cross" />
          </g>
        ))}
        {/* cặp riêng mỗi bên */}
        <Electron x={219} y={42} kind="dot" />
        <Electron x={219} y={54} kind="dot" />
        <Electron x={285} y={42} kind="cross" />
        <Electron x={285} y={54} kind="cross" />
        <text x="252" y="98" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#546e7a">
          phân tử nitrogen — mỗi N nay có (2,8)
        </text>
      </g>
      <text x="316" y="52" fontFamily="monospace" fontSize="14" fill="#263238">N≡N</text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.2</strong> Liên kết trong phân tử nitrogen, N
      <sub>2</sub>: mỗi nguyên tử góp 3 electron tạo thành ba cặp dùng chung — một liên kết cộng hóa trị ba rất bền.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.3 — Sấm sét tạo nitrogen oxide
-------------------------------------------------------------------------- */
export const Figure13_3: React.FC = () => (
  <figure className="my-3">
    <Frame>
      <svg viewBox="0 0 220 150" className="w-full" role="img" aria-label="Sấm sét">
        <defs>
          <linearGradient id="storm13" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#241b3e" />
            <stop offset="0.6" stopColor="#4a3a72" />
            <stop offset="1" stopColor="#151022" />
          </linearGradient>
          <filter id="glow13">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="220" height="150" fill="url(#storm13)" />
        {/* mây */}
        {[
          [30, 26, 34], [80, 18, 40], [140, 26, 44], [190, 20, 30], [60, 40, 36], [160, 44, 38],
        ].map(([cx, cy, r], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.42} fill="#6b5b95" opacity="0.5" />
        ))}
        {/* tia sét chính có nhấp nháy */}
        <g filter="url(#glow13)">
          <path
            d="M118 30 L104 62 L118 60 L96 96 L112 92 L88 132"
            stroke="#fff9c4"
            strokeWidth="3.4"
            fill="none"
            strokeLinejoin="round"
          >
            <animate attributeName="opacity" values="1;0.55;1;0.8;1" dur="2.4s" repeatCount="indefinite" />
          </path>
          <path d="M104 62 L88 74" stroke="#fff9c4" strokeWidth="2" fill="none" />
          <path d="M112 92 L128 104" stroke="#fff9c4" strokeWidth="2" fill="none" />
          <path
            d="M168 34 L158 58 L168 56 L152 88"
            stroke="#f8e7a0"
            strokeWidth="2.2"
            fill="none"
            strokeLinejoin="round"
            opacity="0.85"
          >
            <animate attributeName="opacity" values="0.85;0.3;0.85" dur="3.1s" repeatCount="indefinite" />
          </path>
        </g>
        {/* chân trời */}
        <rect y="132" width="220" height="18" fill="#0d0a16" />
        <ellipse cx="90" cy="133" rx="40" ry="4" fill="#fff9c4" opacity="0.25" />
      </svg>
    </Frame>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.3</strong> Các oxide của nitrogen được tạo thành khi sấm
      sét đánh: năng lượng hoạt hóa của tia sét đủ để N<sub>2</sub> và O<sub>2</sub> trong không khí phản ứng với nhau.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.4 — Dot-and-cross của ammonia + dạng tháp (pyramidal)
-------------------------------------------------------------------------- */
export const Figure13_4: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <div className="grid grid-cols-2 gap-3 items-center">
      <svg viewBox="0 0 150 120" className="w-full" role="img" aria-label="Dot-and-cross ammonia">
        {/* lone pair */}
        <Electron x={71} y={16} kind="dot" />
        <Electron x={79} y={16} kind="dot" />
        <text x={95} y={14} fontFamily="sans-serif" fontSize="8.5" fill="#546e7a">lone pair</text>
        <circle cx="75" cy="52" r="24" fill="#e8f5e9" stroke="#66bb6a" strokeWidth="1.3" />
        <text x="75" y="56" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#1b5e20">N</text>
        {/* 3 liên kết N-H */}
        {[
          { hx: 34, hy: 40 }, { hx: 116, hy: 40 }, { hx: 75, hy: 96 },
        ].map((h, i) => (
          <g key={i}>
            <circle cx={h.hx} cy={h.hy} r="14" fill="#fff3e0" stroke="#ffb74d" strokeWidth="1.2" />
            <text x={h.hx} y={h.hy + 4} textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#e65100">H</text>
            <Electron x={(75 + h.hx) / 2 - 3} y={(52 + h.hy) / 2} kind="dot" />
            <Electron x={(75 + h.hx) / 2 + 3} y={(52 + h.hy) / 2} kind="cross" />
          </g>
        ))}
        {/* cặp riêng còn lại của N */}
        <Electron x={62} y={62} kind="dot" />
        <Electron x={88} y={62} kind="dot" />
      </svg>
      <svg viewBox="0 0 150 120" className="w-full" role="img" aria-label="Dạng tháp của ammonia">
        <defs>
          <radialGradient id="lobe13" cx="0.5" cy="0.35" r="0.7">
            <stop offset="0" stopColor="#ce93d8" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ce93d8" stopOpacity="0.25" />
          </radialGradient>
        </defs>
        {/* lone pair lobe */}
        <ellipse cx="75" cy="26" rx="14" ry="18" fill="url(#lobe13)" />
        <text x="96" y="20" fontFamily="sans-serif" fontSize="8.5" fill="#6a1b9a">lone pair</text>
        {/* N đỉnh tháp */}
        <circle cx="75" cy="52" r="12" fill="#81c784" stroke="#2e7d32" strokeWidth="1.2" />
        <text x="75" y="56" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#0d3d13">N</text>
        {/* 3 H đáy tháp */}
        {[
          { hx: 40, hy: 88 }, { hx: 110, hy: 88 }, { hx: 75, hy: 100 },
        ].map((h, i) => (
          <g key={i}>
            <line x1="75" y1="58" x2={h.hx} y2={h.hy} stroke="#546e7a" strokeWidth="1.6" />
            <circle cx={h.hx} cy={h.hy} r="9" fill="#ffe0b2" stroke="#ef6c00" strokeWidth="1.1" />
            <text x={h.hx} y={h.hy + 3.5} textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#bf360c">H</text>
          </g>
        ))}
        <path d="M40 88 Q 75 112 110 88" stroke="#90a4ae" strokeDasharray="3 3" fill="none" />
      </svg>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.4</strong> Sơ đồ dot-and-cross biểu diễn liên kết cộng hóa
      trị trong phân tử ammonia và hình dạng tháp (pyramidal) của nó: cặp electron tự do trên N đẩy ba liên kết N—H
      chúc xuống tạo hình chóp.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.5 — Bộ dụng cụ điều chế ammonia trong phòng thí nghiệm
-------------------------------------------------------------------------- */
export const Figure13_5: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 360 170" className="w-full" role="img" aria-label="Bộ dụng cụ điều chế ammonia">
      {/* ống nghiệm nghiêng chứa hỗn hợp rắn */}
      <g transform="rotate(-14 70 70)">
        <path d="M40 52 h64 v34 q0 12 -12 12 h-40 q-12 0 -12 -12 z" fill="#eef4f8" stroke="#546e7a" strokeWidth="2" />
        <path d="M44 78 h56 v8 q0 9 -9 9 h-38 q-9 0 -9 -9 z" fill="#cbb99a" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={52 + i * 9} cy={82 + (i % 2) * 4} r="1.6" fill="#8d7a5c" />
        ))}
        <rect x="100" y="58" width="10" height="22" rx="2" fill="#8a8f94" />
      </g>
      {/* ngọn lửa */}
      <path d="M64 116 q-7 12 0 19 q7 -7 0 -19 z" fill="#e67e22" />
      <path d="M64 122 q-3.5 7 0 10 q3.5 -3 0 -10 z" fill="#f5b041" />
      <text x="40" y="150" fontFamily="sans-serif" fontSize="9" fill="#37474f">đun nóng (heat)</text>
      {/* ống dẫn khí sang ống chữ U */}
      <path d="M112 62 q 30 -18 62 -6 q 16 6 16 24 v18" fill="none" stroke="#546e7a" strokeWidth="3.4" strokeLinecap="round" />
      {/* ống chữ U chứa calcium oxide */}
      <path d="M190 96 v34 q0 16 16 16 q16 0 16 -16 v-34" fill="none" stroke="#546e7a" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M192 118 v12 q0 13 14 13 q14 0 14 -13 v-12 z" fill="#e8e2d4" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={198 + i * 6} cy={132 + (i % 2) * 4} r="1.8" fill="#b7ad97" />
      ))}
      {/* ống dẫn lên trên + giấy quỳ */}
      <path d="M222 96 v-30" fill="none" stroke="#546e7a" strokeWidth="3.4" strokeLinecap="round" />
      <rect x="226" y="42" width="16" height="26" rx="2" fill="#3f6fd1" />
      <rect x="226" y="42" width="16" height="10" rx="2" fill="#c62828" opacity="0.85" />
      <text x="248" y="50" fontFamily="sans-serif" fontSize="8.6" fill="#37474f">giấy quỳ đỏ ẩm</text>
      <text x="248" y="60" fontFamily="sans-serif" fontSize="8.6" fill="#37474f">hóa xanh</text>
      {/* khí thoát ra */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={230 + i * 4} cy={34 - i * 7} r={2.4 - i * 0.5} fill="#90a4ae" opacity={0.7 - i * 0.18}>
          <animate attributeName="cy" values={`${34 - i * 7};${22 - i * 7}`} dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values={`${0.7 - i * 0.18};0`} dur="2.6s" repeatCount="indefinite" />
        </circle>
      ))}
      <text x="252" y="30" fontFamily="sans-serif" fontSize="8.6" fill="#37474f">khí ammonia</text>
      {/* nhãn */}
      <g fontFamily="sans-serif" fontSize="8.8" fill="#37474f">
        <text x="16" y="34">ammonium chloride và</text>
        <text x="16" y="44">calcium hydroxide (rắn)</text>
        <line x1="60" y1="46" x2="72" y2="58" stroke="#90a4ae" strokeWidth="1" />
        <text x="140" y="160">calcium oxide để làm khô khí ammonia</text>
        <line x1="200" y1="152" x2="205" y2="142" stroke="#90a4ae" strokeWidth="1" />
      </g>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.5</strong> Điều chế khí ammonia từ một muối ammonium,
      NH<sub>4</sub>Cl, và một base, Ca(OH)<sub>2</sub>: hỗn hợp rắn được đun nóng, khí đi qua calcium oxide để làm
      khô và được thử bằng giấy quỳ đỏ ẩm (hóa xanh).
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.6 — Rải phân ammonium nitrate dạng viên
-------------------------------------------------------------------------- */
export const Figure13_6: React.FC = () => (
  <figure className="my-3">
    <Frame>
      <svg viewBox="0 0 220 150" className="w-full" role="img" aria-label="Máy kéo rải phân">
        <defs>
          <linearGradient id="field13" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8fbf4d" />
            <stop offset="1" stopColor="#5d8f2e" />
          </linearGradient>
          <linearGradient id="sky13b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#bfe0f2" />
            <stop offset="1" stopColor="#e8f4ec" />
          </linearGradient>
        </defs>
        <rect width="220" height="70" fill="url(#sky13b)" />
        <rect y="66" width="220" height="84" fill="url(#field13)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M0 ${80 + i * 15} q 110 ${6 + i * 2} 220 0`} stroke="#4c7a24" strokeOpacity="0.5" fill="none" />
        ))}
        {/* máy kéo */}
        <g transform="translate(96 62)">
          <rect x="0" y="10" width="52" height="20" rx="4" fill="#e2a72e" />
          <rect x="34" y="-4" width="18" height="18" rx="3" fill="#f2c14e" />
          <rect x="37" y="-1" width="12" height="10" rx="2" fill="#bfe3f2" />
          <circle cx="12" cy="32" r="10" fill="#263238" />
          <circle cx="12" cy="32" r="4" fill="#78909c" />
          <circle cx="42" cy="32" r="7" fill="#263238" />
          <circle cx="42" cy="32" r="3" fill="#78909c" />
          {/* vòi rải phân */}
          <rect x="-8" y="4" width="10" height="8" rx="2" fill="#8d6e63" />
        </g>
        {/* viên phân bắn ra */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle key={i} cx={86 - i * 7} cy={70 + (i % 3) * 5 + i} r="1.7" fill="#f5f2e8">
            <animate attributeName="cy" values={`${68 + (i % 3) * 4};${84 + (i % 3) * 5}`} dur="1.8s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </Frame>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.6</strong> Ammonium nitrate được rải xuống đất dưới dạng
      viên (pellets) thuận tiện cho việc bón phân bằng máy kéo.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.7 — Sông bị phú dưỡng hóa
-------------------------------------------------------------------------- */
export const Figure13_7: React.FC = () => (
  <figure className="my-3">
    <Frame>
      <svg viewBox="0 0 220 150" className="w-full" role="img" aria-label="Sông phú dưỡng">
        <defs>
          <linearGradient id="alg13" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b9d24b" />
            <stop offset="0.5" stopColor="#93b32a" />
            <stop offset="1" stopColor="#6f9419" />
          </linearGradient>
        </defs>
        <rect width="220" height="150" fill="#7ba23f" />
        {/* hai bờ ruộng */}
        <polygon points="0,0 78,0 40,150 0,150" fill="#94a83c" />
        <polygon points="220,0 150,0 190,150 220,150" fill="#8ba03a" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={i} x1={6 + i * 9} y1="0" x2={-8 + i * 8} y2="150" stroke="#7c9130" strokeWidth="2" />
        ))}
        {/* dòng sông phủ tảo */}
        <polygon points="78,0 150,0 190,150 40,150" fill="url(#alg13)" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ellipse
            key={i}
            cx={80 + (i % 4) * 22 + (i % 3) * 6}
            cy={14 + i * 16}
            rx={16 + (i % 3) * 8}
            ry={4 + (i % 2) * 2}
            fill="#c6dd63"
            opacity="0.75"
          />
        ))}
        {/* hàng cây xa */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <circle key={'t' + i} cx={10 + i * 22} cy={4 + (i % 2) * 3} r={7 + (i % 3)} fill="#4f7a1f" />
        ))}
      </svg>
    </Frame>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.7</strong> Phân bón bị rửa trôi từ đất nông nghiệp đã gây
      ra hiện tượng phú dưỡng hóa (eutrophication) trên dòng sông này: lớp tảo dày phủ kín mặt nước.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 13.8 — Tượng đá vôi bị acid rain phá hủy
-------------------------------------------------------------------------- */
export const Figure13_8: React.FC = () => (
  <figure className="my-3">
    <Frame>
      <svg viewBox="0 0 220 150" className="w-full" role="img" aria-label="Tượng đá vôi bị phong hóa">
        <defs>
          <linearGradient id="stone13" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#efe9dd" />
            <stop offset="1" stopColor="#c9bfa8" />
          </linearGradient>
          <radialGradient id="leafbg13" cx="0.5" cy="0.4" r="0.8">
            <stop offset="0" stopColor="#6f8f3a" />
            <stop offset="1" stopColor="#33511d" />
          </radialGradient>
        </defs>
        <rect width="220" height="150" fill="url(#leafbg13)" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <ellipse key={i} cx={14 + (i % 6) * 36} cy={10 + Math.floor(i / 6) * 26 + (i % 3) * 8} rx="22" ry="12" fill="#557c28" opacity="0.55" />
        ))}
        {/* bệ tượng */}
        <rect x="78" y="112" width="66" height="26" rx="3" fill="#b3a88e" />
        <rect x="84" y="104" width="54" height="10" rx="2" fill="#c9bfa8" />
        {/* tượng ngồi cúi đầu */}
        <g fill="url(#stone13)">
          <path d="M110 34 q 12 0 13 12 q 1 9 -6 13 q 10 4 12 18 q 2 16 -4 27 h-30 q -7 -12 -4 -28 q 3 -14 12 -17 q -7 -5 -6 -13 q 1 -12 13 -12 z" />
          <path d="M96 78 q -10 8 -8 20 q 1 7 6 8 l 4 -12 z" />
          <path d="M126 78 q 10 8 8 20 q -1 7 -6 8 l -4 -12 z" />
        </g>
        {/* vệt xói mòn do acid */}
        {[
          [102, 52, 3, 7], [116, 60, 2.5, 9], [108, 84, 3.5, 10], [122, 92, 2.5, 8], [98, 96, 2, 7],
        ].map(([cx, cy, rx, ry], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="#8f8672" opacity="0.65" />
        ))}
        {/* giọt mưa acid */}
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${70 + i * 44} ${18 + i * 6} q 2 6 0 8 q -2 -2 0 -8 z`} fill="#cfe8f5" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${1.6 + i * 0.5}s`} repeatCount="indefinite" />
          </path>
        ))}
      </svg>
    </Frame>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 13.8</strong> Bức tượng đá vôi này đã bị phong hóa hóa học bởi
      acid rain: calcium carbonate trong đá vôi phản ứng với acid và bị hòa tan dần theo thời gian.
    </figcaption>
  </figure>
);
