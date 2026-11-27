import React from 'react';

/* ==========================================================================
   CHƯƠNG 25: BENZENE AND ITS COMPOUNDS — HÌNH VẼ LẠI SVG CHÍNH XÁC
   Quy ước hình học: vòng benzene lục giác đều (góc 120°), đỉnh trên = C1.
   Mũi tên cong (curly arrow) luôn chỉ chiều chuyển động của CẶP electron.
   ========================================================================== */

export const CAP25 = 'mt-2 text-xs leading-relaxed text-stone-700 font-sans';

/* ---------- tiện ích hình học ---------- */
export const V = (cx: number, cy: number, r: number, i: number) => {
  // i = 0..5, đỉnh trên cùng là i=0, chiều kim đồng hồ
  const a = (Math.PI / 180) * (90 - i * 60);
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)] as const;
};
const hexPath = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, i) => V(cx, cy, r, i).join(',')).join(' ');

/* vòng benzene: kiểu 'circle' (delocalised) | 'kekule' (3 nối đôi) | 'plain' */
export const Ring: React.FC<{
  cx: number; cy: number; r: number; kind?: 'circle' | 'kekule' | 'plain';
  stroke?: string; sw?: number;
}> = ({ cx, cy, r, kind = 'circle', stroke = '#263238', sw = 1.6 }) => (
  <g stroke={stroke} strokeWidth={sw} fill="none">
    <polygon points={hexPath(cx, cy, r)} strokeLinejoin="round" />
    {kind === 'circle' && <circle cx={cx} cy={cy} r={r * 0.58} />}
    {kind === 'kekule' &&
      [0, 2, 4].map((i) => {
        const [x1, y1] = V(cx, cy, r, i);
        const [x2, y2] = V(cx, cy, r, i + 1);
        const mx1 = cx + (x1 - cx) * 0.72, my1 = cy + (y1 - cy) * 0.72;
        const mx2 = cx + (x2 - cx) * 0.72, my2 = cy + (y2 - cy) * 0.72;
        return <line key={i} x1={mx1} y1={my1} x2={mx2} y2={my2} />;
      })}
  </g>
);

/* mũi tên cong (curly arrow) — đầu mũi tên hở kiểu cơ chế */
export const Curly: React.FC<{
  d: string; color?: string; id?: string;
}> = ({ d, color = '#c62828' }) => (
  <path d={d} fill="none" stroke={color} strokeWidth={1.5} markerEnd={`url(#curlyHead25)`} />
);

const Defs25: React.FC = () => (
  <defs>
    <marker id="curlyHead25" viewBox="0 0 10 10" refX="7.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M1,1 L8,5 L1,9" fill="none" stroke="#c62828" strokeWidth="1.4" />
    </marker>
    <marker id="arrow25" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#37474f" />
    </marker>
    <linearGradient id="lobe25" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#66bb6a" stopOpacity="0.95" />
      <stop offset="1" stopColor="#1b5e20" stopOpacity="0.55" />
    </linearGradient>
    <linearGradient id="lobe25b" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stopColor="#66bb6a" stopOpacity="0.95" />
      <stop offset="1" stopColor="#1b5e20" stopOpacity="0.55" />
    </linearGradient>
    <radialGradient id="cloud25" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.55" stopColor="#81c784" stopOpacity="0.05" />
      <stop offset="0.85" stopColor="#43a047" stopOpacity="0.55" />
      <stop offset="1" stopColor="#43a047" stopOpacity="0" />
    </radialGradient>
    <linearGradient id="brwater25" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#f57c00" />
      <stop offset="1" stopColor="#e65100" />
    </linearGradient>
    <linearGradient id="petal25" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#fff59d" />
      <stop offset="1" stopColor="#fbc02d" />
    </linearGradient>
  </defs>
);

/* ---------- nhãn nguyên tử / nhóm thế ---------- */
const Lab: React.FC<{ x: number; y: number; t: string; c?: string; s?: number; anchor?: string }> = ({
  x, y, t, c = '#263238', s = 11, anchor = 'middle',
}) => (
  <text x={x} y={y} textAnchor={anchor as 'middle'} fontFamily="monospace" fontSize={s} fill={c} fontWeight={700}>
    {t}
  </text>
);

/* ==========================================================================
   Hình 25.1 — Hoa thủy tiên & vanillin (chất chứa vòng benzene)
========================================================================== */
export const Figure25_1: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-md border border-stone-300 shadow-sm bg-gradient-to-b from-[#2e4a1e] to-[#1c3013]">
      <svg viewBox="0 0 420 210" className="w-full" role="img" aria-label="Hoa thủy tiên và cấu trúc vanillin">
        <Defs25 />
        {/* nền lá */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${40 + i * 80} 210 q ${-14 + i * 6} -90 ${6 + i * 3} -150`} stroke="#4c7a24" strokeWidth={7} fill="none" opacity={0.7} />
        ))}
        {/* hai bông thủy tiên */}
        {[{ x: 120, y: 92, r: 1 }, { x: 250, y: 60, r: 0.82 }].map((f, k) => (
          <g key={k} transform={`translate(${f.x} ${f.y}) scale(${f.r})`}>
            {Array.from({ length: 6 }).map((_, i) => (
              <ellipse key={i} cx={0} cy={-26} rx={13} ry={26} fill="url(#petal25)" stroke="#e0a800" strokeWidth={0.8}
                transform={`rotate(${i * 60})`} />
            ))}
            <circle r={13} fill="#f57c00" stroke="#bf360c" strokeWidth={1.4} />
            <circle r={8} fill="#e65100" />
            <path d="M-8 -3 q8 8 16 0 q-3 8 -8 8 q-5 0 -8 -8 z" fill="#bf360c" opacity={0.7} />
          </g>
        ))}
        {/* hộp cấu trúc vanillin */}
        <g transform="translate(318 40)">
          <rect x="-8" y="-14" width="102" height="150" rx="8" fill="#fffdf5" opacity="0.96" stroke="#b98d1f" />
          <text x="43" y="0" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fontWeight="700" fill="#7a5c17">
            vanillin
          </text>
          <Ring cx={43} cy={62} r={26} kind="kekule" />
          <line x1={43} y1={36} x2={43} y2={22} stroke="#263238" strokeWidth={1.4} />
          <Lab x={43} y={18} t="OH" s={10} />
          <line x1={65.5} y1={75} x2={78} y2={82} stroke="#263238" strokeWidth={1.4} />
          <Lab x={86} y={86} t="OCH₃" s={9} />
          <line x1={20.5} y1={75} x2={8} y2={82} stroke="#263238" strokeWidth={1.4} />
          <Lab x={6} y={92} t="HC=O" s={9} />
          <text x="43" y="126" textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">
            chất thơm thêm vào sơn
          </text>
        </g>
      </svg>
    </div>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.1</strong> Hoa thủy tiên (daffodil). Trong sơn đã dùng có
      chứa chất chứa vòng benzene gọi là <strong>vanillin</strong> — được nhà sản xuất thêm vào (theo hiệp hội thương
      mại) vì cấu trúc vẽ bên có mùi thơm ngọt; mỗi phân tử vanillin đều chứa vòng benzene.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình 25.2 — Cấu trúc Kekulé của benzene (công thức hiển thị + khung)
========================================================================== */
export const Figure25_2: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 420 150" className="w-full" role="img" aria-label="Cấu trúc Kekulé của benzene">
      <Defs25 />
      {/* công thức hiển thị đầy đủ */}
      <g>
        <Ring cx={105} cy={75} r={40} kind="kekule" />
        {Array.from({ length: 6 }).map((_, i) => {
          const [x, y] = V(105, 75, 40, i);
          const [hx, hy] = V(105, 75, 58, i);
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={hx} y2={hy} stroke="#263238" strokeWidth={1.4} />
              <Lab x={V(105, 75, 68, i)[0]} y={V(105, 75, 68, i)[1] + 4} t="H" s={11} />
            </g>
          );
        })}
        <text x={105} y={144} textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
          công thức hiển thị (Kekulé, 1865)
        </text>
      </g>
      <text x={205} y={79} textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill="#57534e">
        cũng vẽ là
      </text>
      {/* công thức khung */}
      <g>
        <Ring cx={290} cy={75} r={40} kind="kekule" />
        <text x={290} y={144} textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
          công thức khung (skeletale)
        </text>
      </g>
      {/* chú thích nối đôi */}
      <g fontFamily="sans-serif" fontSize="8.6" fill="#8c1d13">
        <text x={352} y={40}>3 nối đôi C=C</text>
        <text x={352} y={52}>xen kẽ 3 nối đơn</text>
        <text x={352} y={64}>C–C → “hexagon méo”?</text>
      </g>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.2</strong> Cấu trúc Kekulé của benzene: vòng lục giác sáu
      carbon, mỗi carbon gắn một hydro, với ba nối đôi C=C xen kẽ ba nối đơn — cùng đuôi “-ene” như alkene. Chính cách
      vẽ này lại gợi ra một hexagon <em>không đều</em>, mâu thuẫn với thực nghiệm (xem Hình 25.3–25.4).
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình 25.3 — Công thức khung benzene & vanillin; Bảng 25.1 độ dài liên kết
========================================================================== */
export const Figure25_3: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 420 130" className="w-full" role="img" aria-label="Công thức khung benzene và vanillin">
      <Defs25 />
      <Ring cx={60} cy={55} r={30} kind="plain" />
      <text x={60} y={105} textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">benzene (khung)</text>
      <text x={125} y={59} fontFamily="sans-serif" fontSize="10" fill="#57534e">→</text>
      {/* vanillin khung */}
      <g>
        <Ring cx={200} cy={55} r={30} kind="plain" />
        <line x1={200} y1={25} x2={200} y2={12} stroke="#263238" strokeWidth={1.4} />
        <Lab x={200} y={9} t="OH" s={10} />
        <line x1={226} y1={70} x2={240} y2={78} stroke="#263238" strokeWidth={1.4} />
        <Lab x={252} y={82} t="OCH₃" s={9} />
        <line x1={174} y1={70} x2={160} y2={78} stroke="#263238" strokeWidth={1.4} />
        <Lab x={152} y={86} t="CHO" s={9} />
        <text x={200} y={112} textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">vanillin</text>
      </g>
      {/* bảng 25.1 */}
      <g transform="translate(300 8)" fontFamily="sans-serif">
        <rect width="112" height="18" fill="#546e7a" />
        <text x="6" y="12.5" fontSize="8" fill="#fff" fontWeight="700">Liên kết</text>
        <text x="76" y="12.5" fontSize="8" fill="#fff" fontWeight="700">Độ dài / nm</text>
        {[['C–C', '0,154'], ['C=C', '0,134'], ['C–C trong benzene', '0,139']].map((r, i) => (
          <g key={i}>
            <rect y={18 + i * 16} width="112" height="16" fill={i === 2 ? '#fdecea' : i % 2 ? '#f5f5f5' : '#fff'} stroke="#cfd8dc" strokeWidth="0.6" />
            <text x="6" y={29.5 + i * 16} fontSize="7.6" fill={i === 2 ? '#8c1d13' : '#37474f'} fontWeight={i === 2 ? 700 : 400}>{r[0]}</text>
            <text x="92" y={29.5 + i * 16} fontSize="7.6" textAnchor="middle" fill={i === 2 ? '#8c1d13' : '#37474f'} fontWeight={i === 2 ? 700 : 400}>{r[1]}</text>
          </g>
        ))}
        <text x="0" y="80" fontSize="7.6" fill="#57534e">Bảng 25.1 — độ dài liên kết C–C:</text>
        <text x="0" y="90" fontSize="7.6" fill="#57534e">trong benzene nằm GIỮA hai giá trị</text>
        <text x="0" y="100" fontSize="7.6" fill="#57534e">nối đơn và nối đôi → không thể có</text>
        <text x="0" y="110" fontSize="7.6" fill="#57534e">3 C=C thật sự.</text>
      </g>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.3</strong> Công thức khung của benzene còn dùng được trong
      công thức hiển thị của các hợp chất aryl — here là vanillin. Đo đạc thực nghiệm (Bảng 25.1) cho thấy mọi liên kết
      carbon–carbon trong benzene đều dài 0,139 nm: ngắn hơn nối đơn (0,154 nm) nhưng dài hơn nối đôi (0,134 nm) —
      bằng chứng trực tiếp chống lại cấu trúc Kekulé.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình 25.4 — Liên kết π delocalised: nhìn nghiêng & nhìn từ trên
========================================================================== */
export const Figure25_4: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 190" className="w-full" role="img" aria-label="Liên kết pi trong benzene">
      <Defs25 />
      {/* ---- nhìn nghiêng: mặt phẳng ring + 6 orbital p ---- */}
      <g transform="translate(120 100)">
        {/* đám mây π trên & dưới (hai vòng xuyến) */}
        <ellipse cx={0} cy={-34} rx={78} ry={26} fill="url(#cloud25)" />
        <ellipse cx={0} cy={34} rx={78} ry={26} fill="url(#cloud25)" />
        {/* mặt phẳng vòng (phối cảnh) */}
        <polygon points="-70,-14 0,-30 70,-14 0,18" fill="#eceff1" stroke="#90a4ae" strokeWidth="1" />
        {/* 6 orbital p */}
        {[-52, -26, 0, 26, 52].map((x, i) => {
          const y = i === 0 || i === 4 ? -6 : i === 1 || i === 3 ? -12 : -18;
          return (
            <g key={i}>
              <ellipse cx={x} cy={y - 20} rx={8.5} ry={19} fill="url(#lobe25)" opacity={0.92} />
              <ellipse cx={x} cy={y + 20} rx={8.5} ry={19} fill="url(#lobe25b)" opacity={0.92} />
            </g>
          );
        })}
        {/* nhãn H */}
        <Lab x={-70} y={-10} t="H" s={9} c="#78909c" />
        <Lab x={70} y={-10} t="H" s={9} c="#78909c" />
        <text x={0} y={80} textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
          nhìn nghiêng: 6 orbital p xen phủ tạo hai đám mây π trên &amp; dưới mặt phẳng
        </text>
      </g>
      {/* ---- nhìn từ trên: vòng + vòng tròn delocalised ---- */}
      <g transform="translate(330 92)">
        <ellipse cx={0} cy={0} rx={62} ry={62} fill="url(#cloud25)" />
        <Ring cx={0} cy={0} r={40} kind="circle" stroke="#1b5e20" />
        {Array.from({ length: 6 }).map((_, i) => {
          const [x, y] = V(0, 0, 40, i);
          const [hx, hy] = V(0, 0, 54, i);
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={hx} y2={hy} stroke="#1b5e20" strokeWidth={1.2} />
              <Lab x={V(0, 0, 62, i)[0]} y={V(0, 0, 62, i)[1] + 3.5} t="H" s={9} c="#1b5e20" />
            </g>
          );
        })}
        {/* góc 120° */}
        <path d="M0 -14 L0 -40 M0 -14 L12 7" stroke="#c62828" strokeWidth="1" fill="none" />
        <text x={14} y={-16} fontFamily="monospace" fontSize="9" fill="#c62828" fontWeight="700">120°</text>
        <text x={0} y={88} textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
          nhìn từ trên: vòng tròn = 6 electron π delocalised; góc 120°
        </text>
      </g>
      <text x={230} y={14} textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#1b5e20">
        Mỗi C sp²: 3 liên kết σ (2 C–C, 1 C–H) + 1 electron p góp vào hệ π chung
      </text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.4</strong> Liên kết π trong benzene: mỗi carbon sp² góp một
      orbital p chứa 1 electron; sáu orbital p xen phủ tối đa (phân tử phải phẳng) tạo thành <strong>vòng electron
      delocalised</strong> trải đều trên và dưới mặt phẳng vòng — chứ không khu trú thành ba nối đôi như alkene. Ba góc
      quanh mỗi carbon sp² đều bằng 120°.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Bảng 25.2 — Tên một số hợp chất aryl (5 cấu trúc khung)
========================================================================== */
const ARYL25: Array<{ name: string; sub: string; extra?: Array<[number, string]> }> = [
  { name: 'chlorobenzene', sub: 'Cl' },
  { name: 'nitrobenzene', sub: 'NO₂' },
  { name: 'phenol', sub: 'OH' },
  { name: '2,4,6-tribromophenol', sub: 'OH', extra: [[2, 'Br'], [4, 'Br'], [6, 'Br']] },
  { name: 'phenylamine', sub: 'NH₂' },
];

export const Table25_2: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 118" className="w-full" role="img" aria-label="Bảng 25.2 các hợp chất aryl">
      <Defs25 />
      <rect x="0" y="0" width="460" height="16" fill="#546e7a" />
      <text x="8" y="11.5" fontFamily="sans-serif" fontSize="8.6" fill="#fff" fontWeight="700">Công thức khung của hợp chất aryl</text>
      <text x="300" y="11.5" fontFamily="sans-serif" fontSize="8.6" fill="#fff" fontWeight="700">Tên</text>
      {ARYL25.map((a, i) => {
        const x = 24 + i * 56;
        return (
          <g key={a.name}>
            <rect x={x - 20} y={16} width="56" height="86" fill={i % 2 ? '#fafafa' : '#fff'} stroke="#e0e0e0" strokeWidth="0.6" />
            <Ring cx={x + 8} cy={56} r={17} kind="circle" sw={1.3} />
            <line x1={x + 8} y1={39} x2={x + 8} y2={30} stroke="#263238" strokeWidth={1.2} />
            <Lab x={x + 8} y={27} t={a.sub} s={8.5} />
            {a.extra?.map(([pos, g]) => {
              const [px, py] = V(x + 8, 56, 17, pos % 6);
              const [gx, gy] = V(x + 8, 56, 26, pos % 6);
              return (
                <g key={pos}>
                  <line x1={px} y1={py} x2={gx} y2={gy} stroke="#263238" strokeWidth={1.2} />
                  <Lab x={V(x + 8, 56, 33, pos % 6)[0]} y={V(x + 8, 56, 33, pos % 6)[1] + 3} t={g} s={8} />
                </g>
              );
            })}
            <text x={x + 8} y={112} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#37474f" fontWeight="600">
              {a.name}
            </text>
          </g>
        );
      })}
      <text x="300" y="34" fontFamily="sans-serif" fontSize="8.2" fill="#37474f">
        Nhóm phenyl viết là C₆H₅–, ví dụ phenylamine:
      </text>
      <text x="300" y="48" fontFamily="monospace" fontSize="9" fill="#263238" fontWeight="700">C₆H₅NH₂</text>
      <text x="300" y="66" fontFamily="sans-serif" fontSize="8.2" fill="#57534e">
        Với 2,4,6-tribromophenol: đánh số carbon
      </text>
      <text x="300" y="78" fontFamily="sans-serif" fontSize="8.2" fill="#57534e">
        vòng bắt đầu từ C gắn –OH (C1) để mô tả
      </text>
      <text x="300" y="90" fontFamily="sans-serif" fontSize="8.2" fill="#57534e">vị trí các nhóm thế Br (2, 4, 6).</text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Bảng 25.2</strong> Tên một số hợp chất aryl có nhóm chức thế trực
      tiếp vào vòng benzene thay cho hydro — cần thuộc để đọc tên và vẽ cấu trúc đúng vị trí.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Cơ chế thế electrophile — bromine hóa benzene (3 giai đoạn)
========================================================================== */
export const MechBromination: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 200" className="w-full" role="img" aria-label="Cơ chế bromine hóa benzene">
      <Defs25 />
      {/* tạo electrophile */}
      <g fontFamily="monospace" fontSize="10.5" fill="#263238" fontWeight="700">
        <text x="10" y="16">Br–Br + FeBr₃ → Br⁺ + [FeBr₄]⁻</text>
      </g>
      <text x="10" y="30" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        (xúc tác halogen carrier; cũng có thể thêm mạt sắt để sinh FeBr₃ tại chỗ)
      </text>
      {/* giai đoạn 1 */}
      <g transform="translate(70 105)">
        <Ring cx={0} cy={0} r={26} kind="circle" />
        <Lab x={44} y={-14} t="Br" s={11} />
        <text x={52} y={-22} fontFamily="monospace" fontSize="8" fill="#c62828">δ+</text>
        <line x1={30} y1={-8} x2={38} y2={-12} stroke="#263238" strokeWidth={1.3} />
        <Curly d="M6 -14 Q 20 -30 34 -18" />
        <text x={0} y={48} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">giai đoạn 1</text>
        <text x={0} y={59} textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">cặp e π tấn công Br⁺</text>
      </g>
      <line x1={120} y1={105} x2={150} y2={105} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      {/* giai đoạn 2: intermediate */}
      <g transform="translate(205 105)">
        <Ring cx={0} cy={0} r={26} kind="plain" />
        {/* horseshoe 4 e trên 5 C (bỏ đỉnh trên) */}
        <path d="M 13 -22.5 A 26 26 0 1 1 -13 -22.5" fill="none" stroke="#263238" strokeWidth={1.2} strokeDasharray="0" />
        <line x1={0} y1={-26} x2={0} y2={-38} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-42} t="H" s={10} />
        <line x1={0} y1={26} x2={0} y2={38} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={48} t="Br" s={10} />
        <text x={22} y={-30} fontFamily="monospace" fontSize="11" fill="#c62828" fontWeight="700">+</text>
        <text x={0} y={66} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">giai đoạn 2</text>
        <text x={0} y={77} textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">mất vòng π: còn 4 e π, điện tích + trải 5 C</text>
      </g>
      <line x1={255} y1={105} x2={285} y2={105} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      {/* giai đoạn 3 */}
      <g transform="translate(345 105)">
        <Ring cx={0} cy={0} r={26} kind="circle" />
        <line x1={0} y1={26} x2={0} y2={38} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={48} t="Br" s={10} />
        <Curly d="M-8 -34 Q -22 -20 -10 -8" color="#1b5e20" />
        <text x={-30} y={-30} fontFamily="monospace" fontSize="8.6" fill="#1b5e20" fontWeight="700">[FeBr₄]⁻ lấy H⁺</text>
        <text x={0} y={66} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">giai đoạn 3</text>
        <text x={0} y={77} textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">C–H đứt dị phân; hoàn nguyên vòng π + xúc tác</text>
      </g>
      <g fontFamily="monospace" fontSize="10" fill="#263238" fontWeight="700">
        <text x="300" y="192">→ bromobenzene + HBr + FeBr₃</text>
      </g>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.M1</strong> Cơ chế thế electrophile của benzene với bromine
      (xúc tác FeBr₃ khan): (1) cặp electron π tấn công Br⁺; (2) intermediate mất vòng delocalised — chỉ còn 4 electron
      π, điện tích dương trải trên 5 carbon; (3) [FeBr₄]⁻ tách H⁺, vòng π 6 electron bền vững được khôi phục và xúc tác
      hoàn nguyên. Chlorine phản ứng y hệt với FeCl₃/AlCl₃ (halogen carrier).
    </figcaption>
  </figure>
);

/* ==========================================================================
   Thế mạch nhánh: methylbenzene + Cl2 (UV) — cơ chế gốc tự do
========================================================================== */
export const MechSideChain: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 110" className="w-full" role="img" aria-label="Thế mạch nhánh methylbenzene">
      <Defs25 />
      <g transform="translate(60 55)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-34} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-38} t="CH₃" s={10} />
        <text x={0} y={40} textAnchor="middle" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">methylbenzene</text>
      </g>
      <text x={105} y={50} fontFamily="monospace" fontSize="11" fill="#263238" fontWeight="700">+ Cl₂</text>
      <line x1={140} y1={55} x2={195} y2={55} stroke="#37474f" strokeWidth="1.4" markerEnd="url(#arrow25)" />
      <text x={167} y={46} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#c62828" fontWeight="700">UV / sôi</text>
      <g transform="translate(250 55)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-34} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-38} t="CH₂Cl" s={9.5} />
        <text x={0} y={40} textAnchor="middle" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">(chloromethyl)benzene</text>
      </g>
      <text x={300} y={50} fontFamily="monospace" fontSize="11" fill="#263238" fontWeight="700">+ HCl</text>
      <text x={345} y={30} fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        KHÔNG thế vào vòng:
      </text>
      <text x={345} y={42} fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        cơ chế gốc tự do ở mạch nhánh;
      </text>
      <text x={345} y={54} fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        Cl₂ dư → thay cả 3 H của nhánh
      </text>
      <text x={345} y={66} fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        (–CCl₃).
      </text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.M2</strong> Với UV light hoặc nhiệt độ cao, chlorine tấn
      công <em>mạch nhánh</em> của methylbenzene theo cơ chế gốc tự do (giống alkane) — vòng benzene nguyên vẹn. Chlorine
      dư sẽ lần lượt thay cả ba hydro của nhánh methyl.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Nitration: tạo NO2+ và cơ chế 2 giai đoạn
========================================================================== */
export const MechNitration: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 190" className="w-full" role="img" aria-label="Cơ chế nitration benzene">
      <Defs25 />
      <g fontFamily="monospace" fontSize="10.5" fill="#263238" fontWeight="700">
        <text x="10" y="16">HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + HO⁺</text>
      </g>
      <text x="10" y="30" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        electrophile NO₂⁺ (nitronium ion) sinh từ hỗn hợp acid đặc; phản ứng ở ≈ 55 °C
      </text>
      {/* giai đoạn 1 */}
      <g transform="translate(80 110)">
        <Ring cx={0} cy={0} r={26} kind="circle" />
        <Lab x={46} y={-16} t="NO₂⁺" s={10} />
        <Curly d="M6 -14 Q 20 -30 34 -20" />
        <text x={0} y={46} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">giai đoạn 1</text>
        <text x={0} y={57} textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">cặp e π cho vào N của NO₂⁺</text>
      </g>
      <line x1={130} y1={110} x2={165} y2={110} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      {/* intermediate */}
      <g transform="translate(220 110)">
        <Ring cx={0} cy={0} r={26} kind="plain" />
        <path d="M 13 -22.5 A 26 26 0 1 1 -13 -22.5" fill="none" stroke="#263238" strokeWidth={1.2} />
        <line x1={0} y1={-26} x2={0} y2={-38} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-42} t="H" s={10} />
        <line x1={0} y1={26} x2={0} y2={38} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={48} t="NO₂" s={9.5} />
        <text x={22} y={-30} fontFamily="monospace" fontSize="11" fill="#c62828" fontWeight="700">+</text>
        <text x={0} y={66} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">giai đoạn 2</text>
        <text x={0} y={77} textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">C–H đứt dị phân, 2 e trả về vòng π</text>
      </g>
      <line x1={270} y1={110} x2={305} y2={110} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      {/* sản phẩm */}
      <g transform="translate(360 110)">
        <Ring cx={0} cy={0} r={26} kind="circle" />
        <line x1={0} y1={26} x2={0} y2={38} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={48} t="NO₂" s={9.5} />
        <text x={0} y={66} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">nitrobenzene</text>
        <text x={0} y={77} textAnchor="middle" fontFamily="monospace" fontSize="8.6" fill="#57534e">+ H⁺</text>
      </g>
      <text x={10} y={186} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        NO₂⁺ hút bởi mật độ electron π; vòng π khôi phục 6 e → giữ vững độ bền thơm. NO₂ là nhóm DEaktivator: thế tiếp
        vào vị trí 3, 5.
      </text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.M3</strong> Nitration benzene: electrophile NO₂⁺ (tạo từ
      HNO₃ đặc + H₂SO₄ đặc, ≈55 °C) nhận một cặp electron π tạo intermediate dương; sau đó C–H đứt dị phân trả electron
      về vòng — nitrobenzene hình thành, độ bền thơm được bảo toàn. Nitration tiếp cho 1,3-dinitro- rồi
      1,3,5-trinitrobenzene vì –NO₂ làm vòng kém hoạt động và định hướng 3,5.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Friedel–Crafts acylation: 3 bước
========================================================================== */
export const MechFriedelCrafts: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 210" className="w-full" role="img" aria-label="Cơ chế Friedel-Crafts">
      <Defs25 />
      {/* bước 1 */}
      <g transform="translate(10 20)">
        <text x="0" y="10" fontFamily="sans-serif" fontSize="8.8" fontWeight="700" fill="#37474f">Bước 1 — tạo electrophile:</text>
        <g fontFamily="monospace" fontSize="10" fill="#263238" fontWeight="700">
          <text x="0" y="34">AlCl₃ + CH₃–CO–Cl → CH₃–CO + AlCl⁻</text>
        </g>
        <Curly d="M96 26 Q 108 14 120 24" />
        <text x="0" y="50" fontFamily="sans-serif" fontSize="7.8" fill="#57534e">
          cặp e của liên kết C–Cl chạy về Cl gắn Al → carbocation acyl
        </text>
      </g>
      {/* bước 2 */}
      <g transform="translate(80 130)">
        <Ring cx={0} cy={0} r={24} kind="circle" />
        <Lab x={42} y={-14} t="CH₃CO⁺" s={9} />
        <Curly d="M6 -12 Q 18 -26 30 -18" />
        <text x={0} y={42} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">bước 2</text>
        <text x={0} y={53} textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#57534e">vòng π tấn công carbocation</text>
      </g>
      <line x1={126} y1={130} x2={158} y2={130} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      <g transform="translate(210 130)">
        <Ring cx={0} cy={0} r={24} kind="plain" />
        <path d="M 12 -20.8 A 24 24 0 1 1 -12 -20.8" fill="none" stroke="#263238" strokeWidth={1.2} />
        <line x1={0} y1={-24} x2={0} y2={-35} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-39} t="H" s={9.5} />
        <line x1={0} y1={24} x2={0} y2={35} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={45} t="COCH₃" s={8.6} />
        <text x={20} y={-28} fontFamily="monospace" fontSize="10.5" fill="#c62828" fontWeight="700">+</text>
        <text x={0} y={62} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">intermediate</text>
      </g>
      <line x1={256} y1={130} x2={288} y2={130} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      {/* bước 3 */}
      <g transform="translate(345 130)">
        <Ring cx={0} cy={0} r={24} kind="circle" />
        <line x1={0} y1={24} x2={0} y2={35} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={45} t="COCH₃" s={8.6} />
        <text x={0} y={62} textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">bước 3: phenylethanone</text>
        <text x={0} y={73} textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#57534e">+ HCl + AlCl₃ (hoàn nguyên)</text>
      </g>
      <text x={250} y={30} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        Alkylation cũng vậy: R–Cl + AlCl₃ → R + AlCl₄⁻
      </text>
      <text x={250} y={42} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        (vd C₆H₆ + CH₃CH₂Cl → ethylbenzene + HCl).
      </text>
      <text x={250} y={54} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        Phản ứng có thể tiếp tục alkyl hóa thêm.
      </text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.M4</strong> Friedel–Crafts acylation ba bước: (1) AlCl₃ kéo
      Cl khỏi acyl chloride sinh carbocation acyl CH₃CO⁺; (2) vòng π benzene tấn công carbocation tạo intermediate;
      (3) mất H⁺ (AlCl₄⁻ nhận) cho phenylethanone, đồng thời hoàn nguyên xúc tác AlCl₃. Đây là cách gắn mạch nhánh
      (alkyl hoặc acyl) vào vòng — nền tảng tổng hợp detergent, polystyrene…
    </figcaption>
  </figure>
);

/* ==========================================================================
   Oxidation mạch nhánh: methylbenzene → benzoic acid
========================================================================== */
export const FigOxidation: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 100" className="w-full" role="img" aria-label="Oxidation mạch nhánh">
      <Defs25 />
      <g transform="translate(70 48)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-34} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-38} t="CH₃" s={10} />
        <text x={0} y={38} textAnchor="middle" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">methylbenzene</text>
      </g>
      <text x={112} y={44} fontFamily="monospace" fontSize="11" fill="#263238" fontWeight="700">+ 3[O]</text>
      <line x1={150} y1={48} x2={205} y2={48} stroke="#37474f" strokeWidth="1.4" markerEnd="url(#arrow25)" />
      <text x={177} y={38} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#c62828" fontWeight="700">KMnO₄(VII)/OH⁻, hồi lưu;</text>
      <text x={177} y={60} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#c62828" fontWeight="700">rồi H₂SO₄ loãng</text>
      <g transform="translate(260 48)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-34} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-38} t="COOH" s={9.5} />
        <text x={0} y={38} textAnchor="middle" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">benzoic acid</text>
      </g>
      <text x={305} y={44} fontFamily="monospace" fontSize="11" fill="#263238" fontWeight="700">+ H₂O</text>
      <text x={350} y={30} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">alkane thường KHÔNG bị</text>
      <text x={350} y={42} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">KMnO₄(VII) oxy hóa — vòng</text>
      <text x={350} y={54} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">benzene đã “kích hoạt” mạch</text>
      <text x={350} y={66} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">nhánh thành –COOH.</text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.M5</strong> Hồi lưu methylbenzene với kiềm
      potassium manganate(VII) rồi acid hóa bằng H₂SO₄ loãng: mạch nhánh –CH₃ bị oxy hóa trọn vẹn thành –COOH
      (benzoic acid). Cũng có thể dùng acidified potassium dichromate(VI).
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình 25.5 — Sản phẩm từ benzene: keo Araldite, đĩa CD, thuốc sát trùng TCP
========================================================================== */
export const Figure25_5: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-md border border-stone-300 shadow-sm bg-gradient-to-br from-[#8d6e63] via-[#6d4c41] to-[#4e342e]">
      <svg viewBox="0 0 420 150" className="w-full" role="img" aria-label="Sản phẩm chứa chất dẫn xuất benzene">
        <Defs25 />
        {/* mặt bàn */}
        <rect y="112" width="420" height="38" fill="#3e2723" opacity="0.85" />
        {/* tuýp keo Araldite */}
        <g transform="translate(70 70) rotate(-14)">
          <rect x="-46" y="-14" width="92" height="28" rx="13" fill="#1565c0" />
          <rect x="-46" y="-14" width="30" height="28" rx="13" fill="#0d47a1" />
          <rect x="40" y="-7" width="16" height="14" rx="3" fill="#c62828" />
          <text x="-2" y="4" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="800" fill="#fff" transform="rotate(0)">ARALDITE</text>
        </g>
        {/* đĩa CD */}
        <g transform="translate(200 96)">
          <ellipse rx="46" ry="15" fill="#b0bec5" />
          <ellipse rx="46" ry="15" fill="url(#cloud25)" opacity="0.5" />
          <ellipse rx="12" ry="4.5" fill="#4e342e" />
          <path d="M-40 -4 A 46 15 0 0 1 20 -13" stroke="#e1f5fe" strokeWidth="2.4" fill="none" opacity="0.8" />
        </g>
        {/* lọ TCP */}
        <g transform="translate(310 78)">
          <rect x="-16" y="-30" width="32" height="58" rx="6" fill="#e8f5e9" stroke="#a5d6a7" />
          <rect x="-10" y="-40" width="20" height="12" rx="3" fill="#2e7d32" />
          <rect x="-13" y="-18" width="26" height="26" rx="3" fill="#fff" stroke="#90a4ae" strokeWidth="0.7" />
          <text x="0" y="-1" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="800" fill="#c62828">TCP</text>
        </g>
        <text x="210" y="142" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#efebe9">
          keo dán epoxy · đĩa compact · bột sát trùng — đều chứa dẫn xuất benzene (như 2,4,6-tribromophenol)
        </text>
      </svg>
    </div>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.5</strong> Keo Araldite, đĩa compact và thuốc sát trùng TCP
      chứa các chất dẫn xuất từ benzene — chẳng hạn 2,4,6-tribromophenol trong TCP.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Phenoxide delocalisation + Hình 25.6 bromine water test
========================================================================== */
export const FigPhenoxide: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 120" className="w-full" role="img" aria-label="Delocalisation trong phenoxide">
      <Defs25 />
      <g transform="translate(70 60)">
        <Ring cx={0} cy={0} r={24} kind="circle" />
        <line x1={0} y1={-24} x2={0} y2={-36} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-40} t="O⁻" s={10} />
        <text x={0} y={42} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#57534e">điện tích âm trên O</text>
      </g>
      <line x1={115} y1={60} x2={165} y2={60} stroke="#37474f" strokeWidth="1.2" markerEnd="url(#arrow25)" />
      <line x1={165} y1={66} x2={115} y2={66} stroke="#37474f" strokeWidth="1.2" markerEnd="url(#arrow25)" />
      <g transform="translate(225 60)">
        <Ring cx={0} cy={0} r={24} kind="kekule" />
        <line x1={0} y1={-24} x2={0} y2={-36} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-40} t="O" s={10} />
        <text x={26} y={-30} fontFamily="monospace" fontSize="10" fill="#c62828" fontWeight="700">δ−</text>
        {[2, 4, 6].map((p) => (
          <text key={p} x={V(0, 0, 32, p % 6)[0]} y={V(0, 0, 32, p % 6)[1] + 3} fontFamily="monospace" fontSize="9" fill="#c62828" fontWeight="700">δ−</text>
        ))}
        <text x={0} y={42} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#57534e">điện tích âm trải khắp ion</text>
      </g>
      <text x={300} y={34} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        Cặp electron tự do trên O⁻ xen phủ
      </text>
      <text x={300} y={46} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        với hệ π của vòng → mật độ điện tích
      </text>
      <text x={300} y={58} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        âm giảm → ion bền → phenol dễ nhả H⁺
      </text>
      <text x={300} y={70} fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        hơn nước &amp; ethanol (pKₐ 10,0 &lt; 14,0 &lt; 16,0).
      </text>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.P1</strong> Vì sao phenol acid mạnh hơn nước và ethanol:
      phenoxide ion C₆H₅O⁻ được bền hóa nhờ delocalisation — cặp electron tự do của oxygen trải vào vòng π, mật độ
      điện tích âm loãng ra nên khó bắt lại H⁺. Ngược lại ethoxide ion bị nhóm ethyl đẩy electron làm điện tích âm
      đậm đặc hơn → ethanol là acid yếu hơn nước.
    </figcaption>
  </figure>
);

export const Figure25_6: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-md border border-stone-300 shadow-sm bg-gradient-to-b from-[#e3f2fd] to-[#bbdefb]">
      <svg viewBox="0 0 420 170" className="w-full" role="img" aria-label="Bromine water thêm vào phenol">
        <Defs25 />
        {/* ống 1: bromine water cam */}
        <g transform="translate(120 20)">
          <rect x="-14" y="0" width="28" height="110" rx="13" fill="#ffffff" opacity="0.55" stroke="#78909c" strokeWidth="1.4" />
          <rect x="-11" y="34" width="22" height="72" rx="10" fill="url(#brwater25)" />
          <text x="0" y="130" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">bromine water (cam)</text>
        </g>
        <path d="M150 75 Q 185 55 215 72" fill="none" stroke="#37474f" strokeWidth="1.4" markerEnd="url(#arrow25)" />
        <text x="182" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="8.2" fill="#37474f">đổ vào dung dịch</text>
        <text x="182" y="59" textAnchor="middle" fontFamily="sans-serif" fontSize="8.2" fill="#37474f">phenol, nhiệt độ phòng</text>
        {/* ống 2: mất màu + kết tủa trắng */}
        <g transform="translate(260 20)">
          <rect x="-14" y="0" width="28" height="110" rx="13" fill="#ffffff" opacity="0.55" stroke="#78909c" strokeWidth="1.4" />
          <rect x="-11" y="34" width="22" height="72" rx="10" fill="#eceff1" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <circle key={i} cx={-7 + (i % 4) * 5} cy={86 + Math.floor(i / 4) * 8} r="2.4" fill="#fff" stroke="#b0bec5" strokeWidth="0.6" />
          ))}
          <text x="0" y="130" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#37474f" fontWeight="700">mất màu + kết tủa trắng</text>
          <text x="0" y="141" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#57534e">2,4,6-tribromophenol</text>
        </g>
        {/* phương trình */}
        <g transform="translate(330 60)" fontFamily="monospace" fontSize="9" fill="#263238" fontWeight="700">
          <text x="0" y="0">phenol + 3Br₂</text>
          <text x="0" y="14">→ 2,4,6-tribromophenol</text>
          <text x="0" y="28">+ 3HBr</text>
        </g>
      </svg>
    </div>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.6</strong> Thêm bromine water vào dung dịch phenol ở nhiệt
      độ phòng: màu cam mất ngay và xuất hiện kết tủa trắng 2,4,6-tribromophenol — không cần xúc tác, khác hẳn benzene
      (cần Br₂ nguyên chất + FeBr₃). Bằng chứng vòng phenol đã được “aktiv hóa”.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Nitration phenol: dilute HNO3 → 2- & 4-nitrophenol; concentrated → 2,4,6-trinitro
========================================================================== */
export const FigPhenolNitration: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 120" className="w-full" role="img" aria-label="Nitration phenol">
      <Defs25 />
      <g transform="translate(55 55)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-33} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-37} t="OH" s={9.5} />
        <text x={0} y={38} textAnchor="middle" fontFamily="sans-serif" fontSize="8.2" fill="#57534e">phenol</text>
      </g>
      <line x1={92} y1={55} x2={140} y2={55} stroke="#37474f" strokeWidth="1.3" markerEnd="url(#arrow25)" />
      <text x={116} y={45} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#c62828" fontWeight="700">dil. HNO₃,</text>
      <text x={116} y={68} textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#c62828" fontWeight="700">nhiệt độ phòng</text>
      <g transform="translate(190 55)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-33} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-37} t="OH" s={9.5} />
        <line x1={V(0, 0, 22, 1)[0]} y1={V(0, 0, 22, 1)[1]} x2={V(0, 0, 32, 1)[0]} y2={V(0, 0, 32, 1)[1]} stroke="#263238" strokeWidth={1.3} />
        <Lab x={V(0, 0, 41, 1)[0]} y={V(0, 0, 41, 1)[1] + 3} t="NO₂" s={8.6} />
        <text x={0} y={38} textAnchor="middle" fontFamily="sans-serif" fontSize="8.2" fill="#57534e">2-nitrophenol</text>
      </g>
      <text x={243} y={59} fontFamily="monospace" fontSize="11" fill="#263238" fontWeight="700">+</text>
      <g transform="translate(300 55)">
        <Ring cx={0} cy={0} r={22} kind="circle" />
        <line x1={0} y1={-22} x2={0} y2={-33} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={-37} t="OH" s={9.5} />
        <line x1={0} y1={22} x2={0} y2={33} stroke="#263238" strokeWidth={1.3} />
        <Lab x={0} y={43} t="NO₂" s={8.6} />
        <text x={0} y={56} textAnchor="middle" fontFamily="sans-serif" fontSize="8.2" fill="#57534e">4-nitrophenol</text>
      </g>
      <g transform="translate(395 40)" fontFamily="sans-serif" fontSize="8" fill="#57534e">
        <text x="0" y="0">HNO₃ đặc →</text>
        <text x="0" y="12">2,4,6-trinitrophenol</text>
        <text x="0" y="24">(–OH ở C1; NO₂ ở 2,4,6)</text>
      </g>
      <g transform="translate(395 78)">
        <Ring cx={0} cy={0} r={15} kind="circle" sw={1.2} />
        <line x1={0} y1={-15} x2={0} y2={-22} stroke="#263238" strokeWidth={1.1} />
        <Lab x={0} y={-25} t="OH" s={7.6} />
        {[[2, ''], [4, ''], [6, '']].map(([p]) => (
          <g key={p as number}>
            <line x1={V(0, 0, 15, (p as number) % 6)[0]} y1={V(0, 0, 15, (p as number) % 6)[1]} x2={V(0, 0, 22, (p as number) % 6)[0]} y2={V(0, 0, 22, (p as number) % 6)[1]} stroke="#263238" strokeWidth={1.1} />
            <Lab x={V(0, 0, 29, (p as number) % 6)[0]} y={V(0, 0, 29, (p as number) % 6)[1] + 2.6} t="NO₂" s={6.8} />
          </g>
        ))}
      </g>
    </svg>
    <figcaption className={CAP25}>
      <strong className="font-bold text-stone-900">Hình 25.P2</strong> Vòng phenol đã được hoạt hóa nên nitration xảy
      ra ngay với HNO₃ <em>loãng</em> ở nhiệt độ phòng, cho hỗn hợp 2-nitrophenol và 4-nitrophenol; dùng HNO₃ đặc thu
      được 2,4,6-trinitrophenol — trong khi benzene cần HNO₃/H₂SO₄ đặc ở 55 °C.
    </figcaption>
  </figure>
);
