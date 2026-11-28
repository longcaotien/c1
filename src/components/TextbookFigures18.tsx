import React from 'react';

/* ==========================================================================
   CHƯƠNG 18: CARBONYL COMPOUNDS — HÌNH VẼ VECTOR VẼ LẠI (SVG thuần)
   Toàn bộ Hình 18.1 – 18.10 + công thức khai triển + cơ chế mũi tên cong
   được vẽ lại bằng SVG/CSS để biên dịch không cần file ảnh rời.
   ========================================================================== */

const CAP = 'mt-2 text-xs leading-relaxed text-stone-700 font-sans';

/* --------------------------------------------------------------------------
   Công thức khai triển heptan-2-one & benzaldehyde (nền đỏ phần Introduction)
-------------------------------------------------------------------------- */
export const DisplayedCarbonyls: React.FC = () => {
  const xs = [0, 1, 2, 3, 4, 5, 6].map((i) => 18 + i * 26);
  return (
    <div className="grid grid-cols-2 gap-3 items-end">
      {/* heptan-2-one displayed formula */}
      <svg viewBox="0 0 200 100" className="w-full" role="img" aria-label="Công thức khai triển heptan-2-one">
        {xs.map((x, i) => (
          <g key={i} stroke="#fff" strokeWidth="1.1">
            {i < 6 && <line x1={x + 4} y1={48} x2={xs[i + 1] - 4} y2={48} />}
            <line x1={x} y1={40} x2={x} y2={26} />
            {i !== 1 && <line x1={x} y1={56} x2={x} y2={70} />}
            {i === 1 && (
              <>
                <line x1={x - 2.5} y1={56} x2={x - 2.5} y2={70} />
                <line x1={x + 2.5} y1={56} x2={x + 2.5} y2={70} />
              </>
            )}
          </g>
        ))}
        {xs.map((x, i) => (
          <g key={'t' + i} fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle">
            <text x={x} y={22}>H</text>
            <text x={x} y={51}>C</text>
            {i !== 1 && <text x={x} y={80}>H</text>}
            {i === 1 && <text x={x} y={80}>O</text>}
          </g>
        ))}
        <text x={100} y={95} fill="#ffe1de" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle">
          heptan-2-one
        </text>
      </svg>
      {/* benzaldehyde displayed formula */}
      <svg viewBox="0 0 200 100" className="w-full" role="img" aria-label="Công thức khai triển benzaldehyde">
        <g stroke="#fff" strokeWidth="1.2" fill="none">
          <polygon points="70,30 88,40 88,60 70,70 52,60 52,40" />
          <line x1={70} y1={35} x2={84} y2={43} />
          <line x1={84} y1={57} x2={70} y2={65} />
          <line x1={56} y1={43} x2={56} y2={57} />
          <line x1={88} y1={50} x2={108} y2={50} />
          <line x1={105.5} y1={50} x2={105.5} y2={32} />
          <line x1={110.5} y1={50} x2={110.5} y2={32} />
          <line x1={108} y1={50} x2={124} y2={58} />
        </g>
        <g fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle">
          <text x={108} y={28}>O</text>
          <text x={108} y={53}>C</text>
          <text x={130} y={62}>H</text>
        </g>
        <text x={100} y={95} fill="#ffe1de" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle">
          benzaldehyde
        </text>
      </svg>
    </div>
  );
};

/* --------------------------------------------------------------------------
   Hình 18.1 — a) phô mai xanh (heptan-2-one); b) trái cây & hạt (benzaldehyde)
-------------------------------------------------------------------------- */
export const Figure18_1: React.FC = () => (
  <figure className="my-1">
    <div className="grid grid-cols-2 gap-1.5">
      {/* panel a: blue cheese */}
      <div className="relative overflow-hidden rounded-sm border border-red-900/20">
        <svg viewBox="0 0 200 130" className="w-full h-full bg-[#c98d4b]" role="img" aria-label="Phô mai xanh">
          <rect width="200" height="130" fill="#b97f42" />
          <rect y="86" width="200" height="44" fill="#8a5a2b" />
          <polygon points="30,92 96,40 150,66 118,102" fill="#f2e3b3" />
          <polygon points="96,40 150,66 148,58 96,32" fill="#fbf3d8" />
          <polygon points="30,92 96,40 96,32 28,84" fill="#e6d199" />
          {[
            [62, 74, 5], [84, 62, 4], [102, 72, 6], [120, 78, 4], [92, 86, 5], [70, 88, 3.5], [112, 62, 3.5],
          ].map(([cx, cy, r], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={r} fill="#5d7f6b" opacity="0.85" />
              <circle cx={cx + r * 0.4} cy={cy - r * 0.3} r={r * 0.45} fill="#3f604f" opacity="0.8" />
            </g>
          ))}
          <polygon points="128,96 172,74 186,92 152,110" fill="#f6e7bb" />
          <circle cx={150} cy={92} r={3.5} fill="#5d7f6b" opacity="0.8" />
          <circle cx={166} cy={86} r={2.6} fill="#3f604f" opacity="0.8" />
        </svg>
        <span className="absolute top-1 left-1.5 bg-black/55 text-white text-[10px] font-bold px-1.5 rounded">a</span>
      </div>
      {/* panel b: fruit & nuts tray */}
      <div className="relative overflow-hidden rounded-sm border border-red-900/20">
        <svg viewBox="0 0 200 130" className="w-full h-full" role="img" aria-label="Trái cây và hạt">
          <rect width="200" height="130" fill="#d8d3c8" />
          <rect x="18" y="52" width="168" height="66" rx="6" fill="#a9743d" />
          <rect x="26" y="60" width="152" height="52" rx="4" fill="#c99a63" />
          {/* bananas */}
          <path d="M40 78 q14 22 44 20 q-6 8 -22 6 q-20 -3 -26 -22 z" fill="#f2c94c" stroke="#d9a92c" strokeWidth="1.5" />
          <path d="M44 72 q16 20 44 18 q-6 8 -22 6 q-20 -3 -26 -20 z" fill="#f7d968" stroke="#d9a92c" strokeWidth="1.5" />
          {/* bowl of almonds */}
          <ellipse cx="112" cy="92" rx="26" ry="12" fill="#8c5a33" />
          <ellipse cx="112" cy="88" rx="26" ry="10" fill="#b07c48" />
          {[
            [100, 86], [108, 84], [116, 86], [124, 87], [104, 89], [112, 88], [120, 89],
          ].map(([cx, cy], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx="4.5" ry="3" fill="#7a4a26" transform={`rotate(${i * 23} ${cx} ${cy})`} />
          ))}
          {/* apples */}
          <circle cx="156" cy="88" r="12" fill="#c0392b" />
          <circle cx="170" cy="94" r="10" fill="#a93226" />
          <path d="M156 76 q2 -6 6 -7" stroke="#5a3a1a" strokeWidth="2" fill="none" />
          <circle cx="152" cy="84" r="3" fill="#e6b0a6" opacity="0.7" />
          {/* milk jug */}
          <path d="M60 34 q-4 10 -4 18 q0 12 10 12 q10 0 10 -12 q0 -8 -4 -18 z" fill="#fdfdfa" stroke="#c9c4b8" />
          <rect x="60" y="28" width="12" height="7" rx="2" fill="#fdfdfa" stroke="#c9c4b8" />
          {/* small dish of benzaldehyde essence */}
          <ellipse cx="96" cy="52" rx="14" ry="6" fill="#fdfdfa" stroke="#c9c4b8" />
          <ellipse cx="96" cy="50" rx="10" ry="4" fill="#f5d76e" />
        </svg>
        <span className="absolute top-1 left-1.5 bg-black/55 text-white text-[10px] font-bold px-1.5 rounded">b</span>
      </div>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.1</strong>{' '}
      <strong>a</strong> Heptan-2-one, một ketone, chịu trách nhiệm cho mùi của phô mai xanh (blue cheese).{' '}
      <strong>b</strong> Benzaldehyde, một aldehyde, góp phần tạo nên hương vị của nhiều loại trái cây và hạt cốc.
      Cấu tạo của heptan-2-one và benzaldehyde được trình bày ở trên bằng công thức khai triển.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 18.2 — Bộ chưng cất cất lấy aldehyde (ethanal)
-------------------------------------------------------------------------- */
export const Figure18_2: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded border border-stone-200/80">
    <svg viewBox="0 0 320 190" className="w-full" role="img" aria-label="Bộ dụng cụ chưng cất ethanal">
      {/* flask */}
      <path d="M96 60 h20 v26 q16 8 16 30 q0 26 -26 26 q-26 0 -26 -26 q0 -22 16 -30 z" fill="#eef4f8" stroke="#5b6770" strokeWidth="2" />
      <path d="M82 116 q0 22 24 22 q24 0 24 -22 q0 -14 -10 -20 h-28 q-10 6 -10 20 z" fill="#3f5d3a" opacity="0.9" />
      <circle cx="98" cy="126" r="2.4" fill="#dfe9df" opacity="0.8" />
      <circle cx="112" cy="132" r="1.8" fill="#dfe9df" opacity="0.8" />
      {/* stopper + delivery tube */}
      <rect x="94" y="50" width="24" height="12" rx="2" fill="#8a8f94" />
      <path d="M106 50 v-16 q0 -8 8 -8 h58 q10 0 10 10 v66" fill="none" stroke="#5b6770" strokeWidth="4" strokeLinecap="round" />
      {/* receiving test tube */}
      <path d="M164 96 h20 v52 q0 10 -10 10 q-10 0 -10 -10 z" fill="#eef4f8" stroke="#5b6770" strokeWidth="2" />
      <path d="M166 132 h16 v16 q0 8 -8 8 q-8 0 -8 -8 z" fill="#d9e6f2" />
      {/* gentle heat */}
      <path d="M106 152 q-6 10 0 16 q6 -6 0 -16 z" fill="#e67e22" />
      <path d="M106 158 q-3 6 0 9 q3 -3 0 -9 z" fill="#f5b041" />
      <rect x="86" y="170" width="40" height="6" rx="3" fill="#5b6770" />
      {/* labels */}
      <g fontFamily="sans-serif" fontSize="9.5" fill="#37474f">
        <text x="8" y="86">ethanol + kali</text>
        <text x="8" y="98">dichromate(VI)</text>
        <text x="8" y="110">đã acid hóa</text>
        <text x="196" y="126">ethanal</text>
        <line x1="186" y1="128" x2="194" y2="132" stroke="#90a4ae" strokeWidth="1" />
        <text x="60" y="186">đun nhẹ (gentle heat)</text>
      </g>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.2</strong> Chưng cất cất lấy aldehyde, ethanal, tạo thành
      trong quá trình oxi hóa nhẹ một alcohol bậc một. Ethanal tạo thành trong dung dịch nước có mùi giống như táo thối.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Ống nghiệm dùng chung cho các Hình 18.3 – 18.6
-------------------------------------------------------------------------- */
const TestTube: React.FC<{
  x: number;
  fill: string;
  fillTop?: number;
  mirror?: boolean;
  precipitate?: string;
  cloudy?: string;
  label?: string;
}> = ({ x, fill, fillTop = 60, mirror, precipitate, cloudy, label }) => (
  <g>
    <path
      d={`M${x} 20 h34 v96 q0 17 -17 17 q-17 0 -17 -17 z`}
      fill="#f4f8fb"
      stroke="#546e7a"
      strokeWidth="2.2"
    />
    <path
      d={`M${x + 3} ${fillTop} h28 v${96 - fillTop + 14} q0 14 -14 14 q-14 0 -14 -14 z`}
      fill={fill}
    />
    {cloudy && (
      <path
        d={`M${x + 3} ${fillTop} h28 v${96 - fillTop + 14} q0 14 -14 14 q-14 0 -14 -14 z`}
        fill={cloudy}
        opacity="0.55"
      />
    )}
    {precipitate && (
      <path d={`M${x + 4} 116 h26 v2 q0 13 -13 13 q-13 0 -13 -13 z`} fill={precipitate} />
    )}
    {mirror && (
      <>
        <path d={`M${x + 3} 44 h28 v72 q0 14 -14 14 q-14 0 -14 -14 z`} fill="url(#silverMirror)" opacity="0.95" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={x + 8 + i * 4} cy={58 + (i % 3) * 22} r="1.4" fill="#fff" opacity="0.85" />
        ))}
      </>
    )}
    <ellipse cx={x + 17} cy={20} rx="17" ry="4" fill="#eceff1" stroke="#546e7a" strokeWidth="2" />
    <path d={`M${x + 7} 30 v80`} stroke="#ffffff" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
    {label && (
      <text x={x + 17} y={152} textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#eceff1">
        {label}
      </text>
    )}
  </g>
);

/* --------------------------------------------------------------------------
   Hình 18.3 — Kết tủa cam với 2,4-DNPH
-------------------------------------------------------------------------- */
export const Figure18_3: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-sm border border-stone-300">
      <svg viewBox="0 0 200 160" className="w-full bg-[#2b62b5]" role="img" aria-label="Kết tủa cam với 2,4-DNPH">
        <defs>
          <linearGradient id="silverMirror" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9e9e9e" />
            <stop offset="0.35" stopColor="#f5f5f5" />
            <stop offset="0.65" stopColor="#bdbdbd" />
            <stop offset="1" stopColor="#8d8d8d" />
          </linearGradient>
          <linearGradient id="orangePpt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f39c12" />
            <stop offset="1" stopColor="#d35400" />
          </linearGradient>
        </defs>
        <rect width="200" height="160" fill="#2b62b5" />
        <rect width="200" height="160" fill="url(#orangePpt)" opacity="0.12" />
        <TestTube x={83} fill="url(#orangePpt)" fillTop={34} />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <circle key={i} cx={92 + (i % 3) * 8} cy={52 + i * 11} r="1.6" fill="#f8c471" opacity="0.8" />
        ))}
      </svg>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.3</strong> Kết tủa màu cam tạo thành từ 2,4-DNPH trong
      một ống nghiệm cho biết sự có mặt của một ketone (hoặc aldehyde).
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 18.4 — Tollens': trước (không màu) / sau (gương bạc)
-------------------------------------------------------------------------- */
export const Figure18_4: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-sm border border-stone-300">
      <svg viewBox="0 0 260 160" className="w-full" role="img" aria-label="Thử nghiệm Tollens trước và sau">
        <defs>
          <linearGradient id="silverMirror2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8d8d8d" />
            <stop offset="0.3" stopColor="#fafafa" />
            <stop offset="0.6" stopColor="#b5b5b5" />
            <stop offset="1" stopColor="#7c7c7c" />
          </linearGradient>
          <linearGradient id="tollensBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4a5fa5" />
            <stop offset="1" stopColor="#2c3e7a" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="url(#tollensBg)" />
        <TestTube x={62} fill="#dfe8f5" fillTop={48} label="trước" />
        <g>
          <path d="M150 20 h34 v96 q0 17 -17 17 q-17 0 -17 -17 z" fill="#f4f8fb" stroke="#546e7a" strokeWidth="2.2" />
          <path d="M153 40 h28 v76 q0 14 -14 14 q-14 0 -14 -14 z" fill="url(#silverMirror2)" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <circle key={i} cx={158 + (i % 4) * 6} cy={52 + Math.floor(i / 4) * 30 + (i % 3) * 6} r="1.5" fill="#ffffff" opacity="0.9" />
          ))}
          <ellipse cx={167} cy={20} rx="17" ry="4" fill="#eceff1" stroke="#546e7a" strokeWidth="2" />
          <text x={167} y={152} textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#eceff1">sau</text>
        </g>
      </svg>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.4</strong> Quan sát ‘trước’ và ‘sau’ khi thuốc thử Tollens
      được hâm nóng với một aldehyde, chẳng hạn như ethanal: một lớp ‘gương bạc’ tráng bên trong ống nghiệm.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 18.5 — Fehling: trước (xanh lam) / sau (đỏ gạch đục)
-------------------------------------------------------------------------- */
export const Figure18_5: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-sm border border-stone-300">
      <svg viewBox="0 0 260 160" className="w-full bg-[#e8e4da]" role="img" aria-label="Thử nghiệm Fehling trước và sau">
        <rect width="260" height="160" fill="#ddd8cc" />
        <TestTube x={62} fill="#3d8fd1" fillTop={48} label="trước" />
        <TestTube x={150} fill="#d35400" cloudy="#e67e22" fillTop={48} label="sau" />
      </svg>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.5</strong> Quan sát ‘trước’ và ‘sau’ khi dung dịch Fehling
      được hâm nóng với một aldehyde, chẳng hạn như ethanal: dung dịch xanh lam trong chuyển thành kết tủa đỏ cam đục.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình 18.6 — Kết tủa vàng tri-iodomethane
-------------------------------------------------------------------------- */
export const Figure18_6: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-sm border border-stone-300 bg-stone-900">
      <svg viewBox="0 0 200 170" className="w-full" role="img" aria-label="Kết tủa vàng tri-iodomethane">
        <rect width="200" height="170" fill="#141210" />
        <ellipse cx="100" cy="18" rx="70" ry="10" fill="#3a332a" />
        <TestTube x={83} fill="#c9b458" cloudy="#e8d98a" fillTop={40} />
        <path d="M87 118 h26 v2 q0 13 -13 13 q-13 0 -13 -13 z" fill="#f0e08a" />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={92 + (i % 3) * 8} cy={60 + i * 12} r="1.5" fill="#f7ecb0" opacity="0.85" />
        ))}
      </svg>
    </div>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.6</strong> Kết tủa màu vàng của tri-iodomethane
      (iodoform) đang tạo thành.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Phổ hồng ngoại tổng quát (đường cong hấp thụ vẽ bằng toán học Gauss)
-------------------------------------------------------------------------- */
interface Band {
  c: number; // tâm dải hấp thụ (cm-1)
  w: number; // độ rộng
  d: number; // độ sâu (0-100)
}

const IrPlot: React.FC<{ bands: Band[]; seed?: number; id: string; captionLess?: boolean }> = ({
  bands,
  seed = 1,
  id,
}) => {
  const W = 300;
  const H = 132;
  const x0 = 4000;
  const x1 = 500;
  const pts: string[] = [];
  const N = 260;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const wn = x0 + (x1 - x0) * t;
    let v = 2;
    for (const b of bands) v += b.d * Math.exp(-((wn - b.c) ** 2) / (2 * b.w * b.w));
    // vân tay fingerprint: gợn sóng xác định theo seed
    if (wn < 1500) {
      v +=
        (4 + 3 * Math.sin(wn / 41 + seed * 2.1) + 2.5 * Math.sin(wn / 17.3 + seed)) *
        (0.55 + 0.45 * Math.sin(wn / 61 + seed * 0.7));
    }
    const depth = Math.max(0, Math.min(96, v));
    const X = 34 + t * (W - 44);
    const Y = 10 + (depth * (H - 34)) / 100;
    pts.push(`${i === 0 ? 'M' : 'L'}${X.toFixed(1)},${Y.toFixed(1)}`);
  }
  const ticks = [4000, 3500, 3000, 2500, 2000, 1500, 1000, 500];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full bg-white" role="img" aria-label={`Phổ hồng ngoại ${id}`}>
      <rect x="34" y="10" width={W - 44} height={H - 34} fill="#fffdf9" stroke="#c9c2b4" strokeWidth="0.8" />
      {ticks.map((tk) => {
        const X = 34 + ((x0 - tk) / (x0 - x1)) * (W - 44);
        return (
          <g key={tk}>
            <line x1={X} y1={10} x2={X} y2={H - 24} stroke="#e4ddcf" strokeWidth="0.6" />
            <text x={X} y={H - 15} textAnchor="middle" fontSize="6.4" fill="#6b6357" fontFamily="sans-serif">
              {tk}
            </text>
          </g>
        );
      })}
      {[0, 20, 40, 60, 80, 100].map((tk) => {
        const Y = 10 + (tk * (H - 34)) / 100;
        return (
          <g key={tk}>
            <line x1={34} y1={Y} x2={W - 10} y2={Y} stroke="#efe9dc" strokeWidth="0.6" />
            <text x={30} y={Y + 2.2} textAnchor="end" fontSize="6.4" fill="#6b6357" fontFamily="sans-serif">
              {tk}
            </text>
          </g>
        );
      })}
      <path d={pts.join(' ')} fill="none" stroke="#c0392b" strokeWidth="1.1" />
      <text x={W / 2} y={H - 4} textAnchor="middle" fontSize="7" fill="#4a443a" fontFamily="sans-serif">
        Wavenumber / cm⁻¹
      </text>
      <text x={8} y={H / 2} fontSize="7" fill="#4a443a" fontFamily="sans-serif" transform={`rotate(-90 8 ${H / 2})`} textAnchor="middle">
        Absorbance / %
      </text>
    </svg>
  );
};

/* Hình 18.7 — phổ IR của ethylamine */
export const Figure18_7: React.FC = () => (
  <figure className="my-3 bg-white/85 p-2.5 rounded border border-stone-200/80">
    <IrPlot
      id="ethylamine"
      seed={3}
      bands={[
        { c: 3360, w: 55, d: 34 },
        { c: 3280, w: 55, d: 30 },
        { c: 2940, w: 60, d: 42 },
        { c: 1620, w: 45, d: 26 },
        { c: 1460, w: 40, d: 30 },
        { c: 1380, w: 35, d: 22 },
        { c: 1070, w: 45, d: 40 },
        { c: 890, w: 40, d: 52 },
        { c: 780, w: 45, d: 46 },
      ]}
    />
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.7</strong> Phổ hồng ngoại của ethylamine, CH
      <sub>3</sub>CH<sub>2</sub>NH<sub>2</sub>. Lưu ý rằng thang phần trăm hấp thụ và các số sóng trên trục đều có độ
      lớn nhỏ hơn dọc theo mỗi trục.
    </figcaption>
  </figure>
);

/* Hình 18.8 — phổ IR của ethanol */
export const Figure18_8: React.FC = () => (
  <figure className="my-3 bg-white/85 p-2.5 rounded border border-stone-200/80">
    <IrPlot
      id="ethanol"
      seed={5}
      bands={[
        { c: 3350, w: 260, d: 78 },
        { c: 2940, w: 60, d: 40 },
        { c: 1450, w: 45, d: 26 },
        { c: 1380, w: 35, d: 20 },
        { c: 1050, w: 45, d: 62 },
        { c: 880, w: 40, d: 40 },
      ]}
    />
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.8</strong> Phổ hồng ngoại của ethanol, CH<sub>3</sub>CH
      <sub>2</sub>OH: dải O—H liên kết hydrogen rất rộng quanh 3200–3600 cm⁻¹.
    </figcaption>
  </figure>
);

/* Hình 18.9 — phổ IR của ethanoic acid */
export const Figure18_9: React.FC = () => (
  <figure className="my-3 bg-white/85 p-2.5 rounded border border-stone-200/80">
    <IrPlot
      id="ethanoic acid"
      seed={7}
      bands={[
        { c: 3000, w: 380, d: 82 },
        { c: 1710, w: 45, d: 88 },
        { c: 1420, w: 40, d: 34 },
        { c: 1290, w: 45, d: 48 },
        { c: 1050, w: 40, d: 30 },
        { c: 930, w: 50, d: 42 },
      ]}
    />
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.9</strong> Phổ hồng ngoại của ethanoic acid, CH<sub>3</sub>
      COOH: dải O—H của carboxylic acid rất rộng (2500–3000 cm⁻¹) chồng lên dải C—H, kèm đỉnh C=O sắc, mạnh.
    </figcaption>
  </figure>
);

/* Hình 18.10 — phổ IR của ethyl ethanoate */
export const Figure18_10: React.FC = () => (
  <figure className="my-3 bg-white/85 p-2.5 rounded border border-stone-200/80">
    <IrPlot
      id="ethyl ethanoate"
      seed={9}
      bands={[
        { c: 2980, w: 55, d: 40 },
        { c: 1740, w: 35, d: 90 },
        { c: 1460, w: 40, d: 30 },
        { c: 1370, w: 35, d: 34 },
        { c: 1240, w: 45, d: 72 },
        { c: 1040, w: 45, d: 55 },
      ]}
    />
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình 18.10</strong> Phổ hồng ngoại của ethyl ethanoate, CH<sub>3</sub>
      COOCH<sub>2</sub>CH<sub>3</sub>: đỉnh C=O của ester sắc và mạnh quanh 1740 cm⁻¹, không có dải O—H rộng.
    </figcaption>
  </figure>
);

/* Phổ A/B cho Câu hỏi 7 (butanone & butan-2-ol) */
export const Question7Spectra: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
    <div className="bg-white/85 p-2 rounded border border-stone-200/80">
      <div className="text-[11px] font-bold text-stone-700 font-sans mb-1">A</div>
      <IrPlot
        id="phổ A"
        seed={11}
        bands={[
          { c: 2960, w: 55, d: 38 },
          { c: 1715, w: 35, d: 88 },
          { c: 1460, w: 40, d: 28 },
          { c: 1370, w: 35, d: 30 },
          { c: 1170, w: 45, d: 46 },
        ]}
      />
    </div>
    <div className="bg-white/85 p-2 rounded border border-stone-200/80">
      <div className="text-[11px] font-bold text-stone-700 font-sans mb-1">B</div>
      <IrPlot
        id="phổ B"
        seed={13}
        bands={[
          { c: 3350, w: 250, d: 76 },
          { c: 2960, w: 55, d: 36 },
          { c: 1460, w: 40, d: 24 },
          { c: 1380, w: 35, d: 18 },
          { c: 1100, w: 45, d: 50 },
        ]}
      />
    </div>
  </div>
);

/* --------------------------------------------------------------------------
   Cơ chế cộng nucleophile của HCN (2 bước, mũi tên cong)
-------------------------------------------------------------------------- */
const ArrowHead: React.FC<{ id: string }> = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#c0392b" />
    </marker>
  </defs>
);

export const MechanismHCN: React.FC = () => (
  <div className="my-3 bg-white/85 p-3 rounded border border-stone-200/80 font-sans">
    {/* STEP 1 */}
    <div className="text-[12px] font-bold text-stone-900 mb-1">Bước thứ nhất (First step)</div>
    <svg viewBox="0 0 340 96" className="w-full" role="img" aria-label="Cơ chế bước 1">
      <ArrowHead id="ah1" />
      <g fontFamily="monospace" fontSize="11" fill="#263238">
        {/* carbonyl */}
        <text x="86" y="30">O</text>
        <line x1="84" y1="34" x2="80" y2="46" stroke="#263238" strokeWidth="1.2" />
        <line x1="89" y1="35" x2="85" y2="46" stroke="#263238" strokeWidth="1.2" />
        <text x="80" y="56">C</text>
        <line x1="78" y1="60" x2="66" y2="72" stroke="#263238" strokeWidth="1.2" />
        <line x1="86" y1="60" x2="98" y2="72" stroke="#263238" strokeWidth="1.2" />
        <text x="52" y="82" fontSize="9">R</text>
        <text x="98" y="82" fontSize="9">R&#8242;</text>
        {/* cyanide */}
        <text x="140" y="76">CN⁻</text>
        <circle cx="136" cy="70" r="1.6" fill="#263238" />
        <circle cx="133" cy="74" r="1.6" fill="#263238" />
      </g>
      {/* curly arrows */}
      <path d="M136 70 Q110 68 92 60" fill="none" stroke="#c0392b" strokeWidth="1.3" markerEnd="url(#ah1)" />
      <path d="M84 44 Q92 38 92 33" fill="none" stroke="#c0392b" strokeWidth="1.3" markerEnd="url(#ah1)" />
      <line x1="180" y1="50" x2="206" y2="50" stroke="#546e7a" strokeWidth="1.4" />
      {/* intermediate */}
      <g fontFamily="monospace" fontSize="11" fill="#263238">
        <text x="248" y="30">O⁻</text>
        <line x1="252" y1="34" x2="252" y2="46" stroke="#263238" strokeWidth="1.2" />
        <text x="248" y="56">C</text>
        <line x1="246" y1="60" x2="234" y2="72" stroke="#263238" strokeWidth="1.2" />
        <line x1="254" y1="60" x2="266" y2="72" stroke="#263238" strokeWidth="1.2" />
        <line x1="252" y1="60" x2="252" y2="72" stroke="#263238" strokeWidth="1.2" />
        <text x="222" y="82" fontSize="9">R</text>
        <text x="266" y="82" fontSize="9">R&#8242;</text>
        <text x="246" y="84">CN</text>
      </g>
      <text x="252" y="14" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#546e7a">
        intermediate (trung gian)
      </text>
    </svg>
    <p className="text-xs text-stone-700 leading-relaxed mt-1">
      Intermediate mang điện tích âm tạo thành ở bước thứ nhất của cơ chế có hoạt tính rất cao và nhanh chóng phản
      ứng với các ion H⁺ từ HCN (từ acid loãng hoặc từ nước có trong hỗn hợp phản ứng). Điều này tạo thành sản phẩm{' '}
      <strong className="text-[#d33427]">2-hydroxynitrile</strong>.
    </p>

    {/* STEP 2 */}
    <div className="text-[12px] font-bold text-stone-900 mt-3 mb-1">Bước thứ hai (Second step)</div>
    <svg viewBox="0 0 340 92" className="w-full" role="img" aria-label="Cơ chế bước 2">
      <ArrowHead id="ah2" />
      <g fontFamily="monospace" fontSize="11" fill="#263238">
        <text x="40" y="26">O⁻</text>
        <line x1="44" y1="30" x2="44" y2="42" stroke="#263238" strokeWidth="1.2" />
        <text x="40" y="52">C</text>
        <line x1="38" y1="56" x2="26" y2="68" stroke="#263238" strokeWidth="1.2" />
        <line x1="46" y1="56" x2="58" y2="68" stroke="#263238" strokeWidth="1.2" />
        <line x1="44" y1="56" x2="44" y2="68" stroke="#263238" strokeWidth="1.2" />
        <text x="14" y="78" fontSize="9">R</text>
        <text x="58" y="78" fontSize="9">R&#8242;</text>
        <text x="38" y="80">CN</text>
        {/* H—CN */}
        <text x="108" y="40">H</text>
        <line x1="116" y1="36" x2="126" y2="36" stroke="#263238" strokeWidth="1.2" />
        <text x="128" y="40">CN</text>
      </g>
      <path d="M52 24 Q78 14 104 30" fill="none" stroke="#c0392b" strokeWidth="1.3" markerEnd="url(#ah2)" />
      <line x1="176" y1="48" x2="202" y2="48" stroke="#546e7a" strokeWidth="1.4" />
      <g fontFamily="monospace" fontSize="11" fill="#263238">
        <text x="240" y="26">OH</text>
        <line x1="244" y1="30" x2="244" y2="42" stroke="#263238" strokeWidth="1.2" />
        <text x="240" y="52">C</text>
        <line x1="238" y1="56" x2="226" y2="68" stroke="#263238" strokeWidth="1.2" />
        <line x1="246" y1="56" x2="258" y2="68" stroke="#263238" strokeWidth="1.2" />
        <line x1="244" y1="56" x2="244" y2="68" stroke="#263238" strokeWidth="1.2" />
        <text x="214" y="78" fontSize="9">R</text>
        <text x="258" y="78" fontSize="9">R&#8242;</text>
        <text x="238" y="80">CN</text>
      </g>
      <text x="248" y="12" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#546e7a">
        2-hydroxynitrile
      </text>
    </svg>
  </div>
);

/* --------------------------------------------------------------------------
   Cấu tạo 2,4-DNPH & phương trình ngưng tụ với ethanal
-------------------------------------------------------------------------- */
const DnphRing: React.FC<{ x: number; y: number; withH?: boolean }> = ({ x, y, withH }) => (
  <g stroke="#37474f" strokeWidth="1.2" fill="none" fontFamily="monospace" fontSize="9">
    <polygon points={`${x},${y} ${x + 16},${y + 9} ${x + 16},${y + 27} ${x},${y + 36} ${x - 16},${y + 27} ${x - 16},${y + 9}`} />
    <line x1={x + 12} y1={y + 12} x2={x + 12} y2={y + 24} />
    <line x1={x} y1={y + 31} x2={x - 12} y2={y + 24} />
    <line x1={x - 12} y1={y + 12} x2={x} y2={y + 5} />
    {/* NO2 at 2 and 4 */}
    <line x1={x + 16} y1={y + 9} x2={x + 24} y2={y + 5} />
    <text x={x + 30} y={y + 2} stroke="none" fill="#37474f">NO₂</text>
    <line x1={x - 16} y1={y + 27} x2={x - 26} y2={y + 32} />
    <text x={x - 50} y={y + 38} stroke="none" fill="#37474f">O₂N</text>
    {/* hydrazine arm */}
    <line x1={x} y1={y} x2={x} y2={y - 8} />
    <text x={x - 3} y={y - 11} stroke="none" fill="#37474f">NH</text>
    {withH ? (
      <>
        <line x1={x + 12} y1={y - 14} x2={x + 22} y2={y - 14} />
        <text x={x + 24} y={y - 11} stroke="none" fill="#37474f">NH₂</text>
      </>
    ) : (
      <>
        <line x1={x + 12} y1={y - 14} x2={x + 20} y2={y - 14} />
        <text x={x + 22} y={y - 11} stroke="none" fill="#37474f">N=</text>
      </>
    )}
  </g>
);

export const Condensation24DNPH: React.FC = () => (
  <div className="my-3 bg-white/85 p-3 rounded border border-stone-200/80">
    <svg viewBox="0 0 380 120" className="w-full" role="img" aria-label="Phản ứng ngưng tụ 2,4-DNPH với ethanal">
      <DnphRing x={60} y={70} withH />
      <text x={42} y={112} fontFamily="sans-serif" fontSize="8.5" fill="#546e7a">
        2,4-dinitrophenylhydrazine
      </text>
      <text x={128} y={52} fontFamily="monospace" fontSize="10" fill="#263238">+</text>
      <g fontFamily="monospace" fontSize="10" fill="#263238">
        <text x={142} y={40}>CH₃</text>
        <line x1="150" y1="44" x2="150" y2="54" stroke="#263238" strokeWidth="1.1" />
        <text x="146" y="64">C</text>
        <line x1="152" y1="56" x2="160" y2="48" stroke="#263238" strokeWidth="1.1" />
        <line x1="155" y1="59" x2="163" y2="51" stroke="#263238" strokeWidth="1.1" />
        <text x="162" y="46">O</text>
        <line x1="152" y1="62" x2="162" y2="70" stroke="#263238" strokeWidth="1.1" />
        <text x="164" y="76">H</text>
      </g>
      <rect x="138" y="28" width="42" height="52" fill="#f5b7b1" opacity="0.45" rx="3" />
      <line x1="196" y1="56" x2="228" y2="56" stroke="#546e7a" strokeWidth="1.4" />
      <DnphRing x={272} y={70} withH={false} />
      <g fontFamily="monospace" fontSize="10" fill="#263238">
        <text x="306" y="32">CH₃</text>
        <line x1="312" y1="36" x2="312" y2="44" stroke="#263238" strokeWidth="1.1" />
        <text x="308" y="52">C</text>
        <line x1="313" y1="49" x2="321" y2="55" stroke="#263238" strokeWidth="1.1" />
        <text x="323" y="60">H</text>
      </g>
      <text x="336" y="52" fontFamily="monospace" fontSize="10" fill="#263238">+ H₂O</text>
      <text x="252" y="112" fontFamily="sans-serif" fontSize="8.5" fill="#546e7a">
        2,4-dinitrophenylhydrazone
      </text>
    </svg>
    <p className="text-[11px] text-stone-600 font-sans mt-1">
      Các nguyên tử bị mất đi trong phản ứng ngưng tụ tạo thành nước (khoang hồng: phần ethanal tham gia).
    </p>
  </div>
);

/* --------------------------------------------------------------------------
   Sơ đồ 2 bước tạo tri-iodomethane
-------------------------------------------------------------------------- */
export const TriIodoScheme: React.FC = () => (
  <div className="my-3 bg-white/85 p-3 rounded border border-stone-200/80 font-sans text-xs text-stone-800">
    <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-bold text-stone-700 mb-1">
      <div>Bước 1 (Step 1)</div>
      <div>Bước 2 (Step 2)</div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap text-center font-mono text-[12px]">
      <div className="flex flex-col items-center">
        <span>RCOCH<sub>3</sub></span>
        <span className="text-[10px] text-stone-500 font-sans">một methyl ketone</span>
      </div>
      <div className="flex flex-col items-center px-1">
        <span className="text-[10px] font-sans">I<sub>2</sub>, NaOH(aq)</span>
        <span className="text-base leading-none">⟶</span>
      </div>
      <span>RCOCI<sub>3</sub></span>
      <div className="flex flex-col items-center px-1">
        <span className="text-[10px] font-sans">NaOH(aq), thủy phân</span>
        <span className="text-base leading-none">⟶</span>
      </div>
      <span>
        RCOO⁻Na⁺ + CHI<sub>3</sub>
      </span>
    </div>
    <div className="text-right text-[10px] text-stone-500 font-sans mt-1">tri-iodomethane (kết tủa vàng)</div>
  </div>
);
