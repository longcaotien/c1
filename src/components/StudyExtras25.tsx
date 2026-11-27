import React, { useMemo, useState } from 'react';
import { Search, RotateCcw, Sigma, MousePointerClick } from 'lucide-react';
import { Ring, V } from './TextbookFigures25';

/* ==========================================================================
   ÔN TẬP & TRA CỨU — CHƯƠNG 25: BENZENE AND ITS COMPOUNDS
   ========================================================================== */

const Sec: React.FC<{ title: string; sub?: string; children: React.ReactNode }> = ({ title, sub, children }) => (
  <section className="bg-white rounded-xl border border-stone-300 shadow-sm p-4 sm:p-5">
    <h2 className="text-base font-bold text-[#5c2d75] font-sans flex items-center gap-2">
      <span className="w-2 h-2 rounded-sm bg-[#5c2d75]" />
      {title}
    </h2>
    {sub && <p className="text-xs text-stone-500 font-sans mt-1 mb-3">{sub}</p>}
    <div className="mt-3">{children}</div>
  </section>
);

/* ---------------- 1. Trình chiếu mô hình liên kết benzene ---------------- */
const BondVisualizer: React.FC = () => {
  const [mode, setMode] = useState<'kekule' | 'deloc' | 'orbit'>('deloc');
  return (
    <div>
      <div className="flex gap-2 mb-3">
        {([
          ['kekule', 'Kekulé (3 C=C)'],
          ['deloc', 'Delocalised (vòng π)'],
          ['orbit', 'Orbital p & đám mây π'],
        ] as Array<[typeof mode, string]>).map(([m, lab]) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
              mode === m ? 'bg-[#5c2d75] text-white border-[#5c2d75]' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
          >
            {lab}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <svg viewBox="0 0 260 220" className="w-full bg-stone-50 rounded-md border border-stone-200">
          {mode === 'orbit' && (
            <>
              <ellipse cx="130" cy="70" rx="86" ry="30" fill="#43a047" opacity="0.18" />
              <ellipse cx="130" cy="150" rx="86" ry="30" fill="#43a047" opacity="0.18" />
            </>
          )}
          <g transform="translate(130 110)">
            {mode === 'orbit' &&
              Array.from({ length: 6 }).map((_, i) => {
                const [x, y] = V(0, 0, 46, i);
                return (
                  <g key={i}>
                    <ellipse cx={x} cy={y - 26} rx="10" ry="24" fill="#66bb6a" opacity="0.85" />
                    <ellipse cx={x} cy={y + 26} rx="10" ry="24" fill="#2e7d32" opacity="0.7" />
                  </g>
                );
              })}
            <Ring cx={0} cy={0} r={46} kind={mode === 'kekule' ? 'kekule' : mode === 'deloc' ? 'circle' : 'plain'} sw={2} />
            {Array.from({ length: 6 }).map((_, i) => {
              const [hx, hy] = V(0, 0, 62, i);
              const [x, y] = V(0, 0, 46, i);
              return (
                <g key={'h' + i}>
                  <line x1={x} y1={y} x2={hx} y2={hy} stroke="#546e7a" strokeWidth={1.2} />
                  <text x={V(0, 0, 72, i)[0]} y={V(0, 0, 72, i)[1] + 4} textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" fill="#546e7a">
                    H
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        <div className="font-sans text-[12.5px] text-stone-700 space-y-2 leading-relaxed">
          {mode === 'kekule' && (
            <>
              <p><strong>Kekulé (1865):</strong> ba nối đôi xen kẽ ba nối đơn → dự đoán lục giác méo, độ dài liên kết lệch nhau; không khớp thực nghiệm (mọi C–C đều 0,139 nm).</p>
              <p>Nếu đúng, benzene phải phản ứng cộng như alkene — nhưng nó chỉ thế!</p>
            </>
          )}
          {mode === 'deloc' && (
            <>
              <p><strong>Mô hình delocalised:</strong> vòng tròn thay ba nối đôi — 6 electron π trải đều trên 6 carbon, mọi liên kết C–C giống hệt nhau (0,139 nm), lục giác đều hoàn hảo.</p>
              <p>Chính hệ π này làm benzene bền bất thường (năng lượng thấp hơn mô hình Kekulé) → ưu tiên phản ứng <strong>thế</strong> để giữ vòng.</p>
            </>
          )}
          {mode === 'orbit' && (
            <>
              <p><strong>Gốc orbital:</strong> mỗi C lai hóa sp² (3 liên kết σ, góc 120°, phân tử phẳng); orbital p còn lại chứa 1 electron.</p>
              <p>Sáu orbital p xen phủ tạo hai đám mây π liên tục trên/dưới mặt phẳng — “vòng electron delocalised”.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------------- 2. Máy chạy bước cơ chế ---------------- */
const MECHS: Array<{
  id: string; name: string; conds: string;
  steps: Array<{ t: string; d: string }>;
}> = [
  {
    id: 'br', name: 'Bromine hóa (FeBr₃)', conds: 'Br₂ + FeBr₃ khan (hoặc Br₂ + mạt sắt)',
    steps: [
      { t: 'Tạo electrophile', d: 'Br–Br + FeBr₃ → Br⁺ + [FeBr₄]⁻: cặp e tự do của một Br cho vào orbital 3d trống của Fe, Br còn lại δ+ thành electrophile.' },
      { t: 'Giai đoạn 1', d: 'Cặp electron π của vòng tấn công Br⁺, tạo liên kết C–Br mới; vòng delocalised tạm vỡ.' },
      { t: 'Giai đoạn 2 (intermediate)', d: 'Carbon mang H và Br là sp³; hệ π chỉ còn 4 electron trên 5 carbon, điện tích + trải đều.' },
      { t: 'Giai đoạn 3', d: '[FeBr₄]⁻ tách H⁺: cặp e liên kết C–H trả về vòng → khôi phục 6 e π thơm; sinh bromobenzene + HBr + FeBr₃ hoàn nguyên.' },
    ],
  },
  {
    id: 'no2', name: 'Nitration (HNO₃/H₂SO₄, 55 °C)', conds: 'HNO₃ đặc + H₂SO₄ đặc, ≈ 55 °C',
    steps: [
      { t: 'Tạo NO₂⁺', d: 'HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + HO⁺ (nitronium ion là electrophile).' },
      { t: 'Giai đoạn 1', d: 'Cặp e π cho vào N của NO₂⁺ → liên kết C–N; vòng π vỡ còn 4 e, + trải 5 C.' },
      { t: 'Giai đoạn 2', d: 'C–H đứt dị phân, 2 e trả về hệ π → nitrobenzene + H⁺; độ bền thơm khôi phục.' },
      { t: 'Thế tiếp', d: '–NO₂ làm vòng KÉM hoạt động (hút e): nitration tiếp vào vị trí 3, 5 → 1,3-dinitro- rồi 1,3,5-trinitrobenzene.' },
    ],
  },
  {
    id: 'fc', name: 'Friedel–Crafts acylation (AlCl₃)', conds: 'CH₃COCl + AlCl₃ khan',
    steps: [
      { t: 'Bước 1 — tạo carbocation', d: 'AlCl₃ + CH₃COCl → CH₃CO⁺ + AlCl₄⁻ (cặp e liên kết C–Cl chạy về Cl gắn nhôm).' },
      { t: 'Bước 2 — tấn công vòng', d: 'Vòng π tấn công carbon dương của acyl cation → intermediate (+, 4 e π).' },
      { t: 'Bước 3 — mất H⁺', d: 'AlCl₄⁻ nhận H⁺ → phenylethanone + HCl + AlCl₃ (xúc tác hoàn nguyên).' },
      { t: 'Lưu ý', d: 'Alkylation tương tự với R–Cl; phản ứng có thể alkyl hóa tiếp nếu dư tác nhân.' },
    ],
  },
];

const MechPlayer: React.FC = () => {
  const [mid, setMid] = useState('br');
  const [step, setStep] = useState(0);
  const m = MECHS.find((x) => x.id === mid)!;
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {MECHS.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => { setMid(x.id); setStep(0); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
              mid === x.id ? 'bg-[#d33427] text-white border-[#d33427]' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>
      <p className="text-[11.5px] font-sans text-stone-500 mb-2">Điều kiện: <span className="font-mono font-semibold text-stone-700">{m.conds}</span></p>
      <div className="flex gap-1.5 mb-3">
        {m.steps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setStep(i)}
            className={`h-2.5 flex-1 rounded-full transition-colors cursor-pointer ${i <= step ? 'bg-[#d33427]' : 'bg-stone-200'}`}
            aria-label={`Bước ${i + 1}`}
          />
        ))}
      </div>
      <div className="rounded-md border border-stone-300 bg-stone-50 p-3.5 font-sans">
        <div className="text-sm font-bold text-[#8c1d13]">
          Bước {step + 1}/{m.steps.length}: {m.steps[step].t}
        </div>
        <p className="text-[12.5px] text-stone-700 mt-1.5 leading-relaxed">{m.steps[step].d}</p>
        <div className="flex gap-2 mt-3">
          <button type="button" onClick={() => setStep(Math.max(0, step - 1))} className="px-2.5 py-1 rounded text-[11px] font-semibold bg-white border border-stone-300 hover:bg-stone-100 cursor-pointer">← Trước</button>
          <button type="button" onClick={() => setStep(Math.min(m.steps.length - 1, step + 1))} className="px-2.5 py-1 rounded text-[11px] font-semibold bg-white border border-stone-300 hover:bg-stone-100 cursor-pointer">Sau →</button>
          <button type="button" onClick={() => setStep(0)} className="px-2.5 py-1 rounded text-[11px] font-semibold bg-white border border-stone-300 hover:bg-stone-100 cursor-pointer inline-flex items-center gap-1">
            <RotateCcw className="w-3 h-3" /> Đặt lại
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- 3. So sánh pKa ---------------- */
const ACIDS = [
  { n: 'HCl', p: 0.0, c: '#b71c1c' },
  { n: 'CH₃COOH', p: 4.76, c: '#e65100' },
  { n: 'phenol', p: 10.0, c: '#d33427' },
  { n: 'H₂O', p: 14.0, c: '#1565c0' },
  { n: 'ethanol', p: 16.0, c: '#2e7d32' },
];
const PkaChart: React.FC = () => {
  const [sel, setSel] = useState('phenol');
  const s = ACIDS.find((a) => a.n === sel)!;
  return (
    <div>
      <div className="flex items-end gap-3 h-44 px-2">
        {ACIDS.map((a) => (
          <button
            key={a.n}
            type="button"
            onClick={() => setSel(a.n)}
            className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer group"
          >
            <span className="text-[11px] font-mono font-bold text-stone-700 mb-1">{a.p.toFixed(a.p % 1 ? 2 : 1)}</span>
            <div
              className="w-full rounded-t-md transition-all group-hover:opacity-80"
              style={{ height: `${(a.p / 16) * 100}%`, backgroundColor: a.c, outline: sel === a.n ? '2px solid #263238' : 'none' }}
            />
            <span className="text-[10.5px] font-sans font-semibold text-stone-600 mt-1">{a.n}</span>
          </button>
        ))}
      </div>
      <p className="text-[12px] font-sans text-stone-600 mt-3 leading-relaxed">
        pKₐ của <strong>{s.n}</strong> = {s.p}. pKₐ càng <strong>thấp</strong> acid càng mạnh. Phenol (10,0) mạnh hơn
        nước (14,0) và ethanol (16,0) nhờ phenoxide ion được bền hóa bởi delocalisation vào vòng π; nhưng yếu hơn
        ethanoic acid (4,76) và HCl vì phenoxide vẫn còn điện tích âm tập trung một phần trên O.
      </p>
    </div>
  );
};

/* ---------------- 4. Nhóm thế định hướng — bấm là thấy vị trí ---------------- */
const DIRECT: Array<{ g: string; type: '246' | '35'; note: string }> = [
  { g: '–OH', type: '246', note: 'hoạt hóa mạnh (phenol bromine water, nhiệt độ phòng)' },
  { g: '–NH₂', type: '246', note: 'hoạt hóa rất mạnh' },
  { g: '–CH₃', type: '246', note: 'hoạt hóa yếu (nitration methylbenzene → 2- & 4-)' },
  { g: '–Cl', type: '246', note: 'định hướng 2,4,6 dù làm vòng kém hoạt động' },
  { g: '–NO₂', type: '35', note: 'làm vòng kém hoạt động (nitration tiếp → 1,3-)' },
  { g: '–COOH', type: '35', note: 'làm vòng kém hoạt động' },
];
const DirectingGame: React.FC = () => {
  const [i, setI] = useState(0);
  const d = DIRECT[i];
  const spots = d.type === '246' ? [1, 3, 5] : [2, 4]; // chỉ số đỉnh V() với C1 = nhóm thế ở đỉnh 0
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div className="flex flex-wrap gap-1.5">
        {DIRECT.map((x, k) => (
          <button
            key={x.g}
            type="button"
            onClick={() => setI(k)}
            className={`px-2.5 py-1.5 rounded-md text-xs font-mono font-bold border transition-colors cursor-pointer ${
              i === k ? 'bg-[#5c2d75] text-white border-[#5c2d75]' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
          >
            {x.g}
          </button>
        ))}
        <p className="w-full text-[12px] font-sans text-stone-600 mt-2 leading-relaxed">
          Nhóm <strong className="font-mono">{d.g}</strong> → electrophile tấn công vị trí{' '}
          <strong>{d.type === '246' ? '2, 4, 6' : '3, 5'}</strong> (ô đỏ trên vòng). {d.note}.
        </p>
      </div>
      <svg viewBox="0 0 220 200" className="w-full bg-stone-50 rounded-md border border-stone-200">
        <g transform="translate(110 96)">
          <Ring cx={0} cy={0} r={52} kind="circle" sw={2} />
          <line x1={0} y1={-52} x2={0} y2={-66} stroke="#263238" strokeWidth={1.6} />
          <text x={0} y={-72} textAnchor="middle" fontFamily="monospace" fontSize="13" fontWeight="800" fill="#5c2d75">{d.g}</text>
          <text x={14} y={-56} fontFamily="monospace" fontSize="9" fill="#78716c">C1</text>
          {Array.from({ length: 5 }).map((_, k) => {
            const p = k + 1;
            const [x, y] = V(0, 0, 52, p);
            const [lx, ly] = V(0, 0, 68, p);
            const hot = spots.includes(p);
            return (
              <g key={p}>
                {hot && <circle cx={x} cy={y} r={9} fill="#d33427" opacity={0.85}>
                  <animate attributeName="r" values="9;11;9" dur="1.6s" repeatCount="indefinite" />
                </circle>}
                <text x={lx} y={ly + 3.5} textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill={hot ? '#8c1d13' : '#9e9e9e'}>
                  {p + 1}
                </text>
              </g>
            );
          })}
        </g>
        <text x="110" y="190" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fill="#57534e">
          {d.type === '246' ? 'nhóm CHO electron vào vòng → ortho/para (2,4,6)' : 'nhóm HÚT electron khỏi vòng → meta (3,5)'}
        </text>
      </svg>
    </div>
  );
};

/* ---------------- 5. Thuật ngữ + flashcards ---------------- */
const GLOSS25: Array<[string, string]> = [
  ['arene', 'hợp chất hữu cơ chứa một hay nhiều vòng benzene (hợp chất thơm)'],
  ['aromatic', '“thơm” — tính chất của hợp chất có vòng benzene bền vững'],
  ['benzene ring', 'vòng lục giác phẳng sáu carbon với hệ π delocalised'],
  ['delocalised electrons', 'electron π trải đều khắp vòng, không khu trú giữa hai carbon'],
  ['Kekulé structure', 'mô hình 1865: ba nối đôi xen kẽ ba nối đơn (đã bị thực nghiệm bác bỏ)'],
  ['halogen carrier', 'xúc tác FeBr₃/FeCl₃/AlCl₃ khan sinh electrophile X⁺'],
  ['electrophilic substitution', 'cơ chế chính của arene: thế hydro vòng bởi electrophile, giữ vòng π'],
  ['nitronium ion', 'NO₂⁺ — electrophile của nitration, sinh từ HNO₃ + H₂SO₄ đặc'],
  ['nitration', 'đưa nhóm –NO₂ vào phân tử (benzene: 55 °C; phenol: HNO₃ loãng, nhiệt độ phòng)'],
  ['sulfonation', 'thế –SO₃H bằng fuming sulfuric acid (electrophile SO₃)'],
  ['Friedel–Crafts reaction', 'gắn mạch nhánh alkyl/acyl vào vòng nhờ R–X hoặc acyl chloride + AlCl₃'],
  ['acyl group', 'nhóm alkyl + carbonyl C=O (vd CH₃CO–)'],
  ['carbocation', 'ion dương trên carbon — electrophile của Friedel–Crafts'],
  ['side-chain oxidation', 'mạch nhánh alkyl của arene bị KMnO₄(VII)/OH⁻ oxy hóa thành –COOH'],
  ['phenol', 'hợp chất có –OH gắn trực tiếp vào vòng benzene (C₆H₅OH)'],
  ['phenoxide ion', 'C₆H₅O⁻ — base liên hợp của phenol, bền nhờ delocalisation'],
  ['activation (of ring)', 'nhóm thế cho electron (–OH, –NH₂, –CH₃…) làm vòng dễ bị thế hơn'],
  ['deactivation (of ring)', 'nhóm hút electron (–NO₂, –COOH…) làm vòng khó bị thế hơn'],
  ['directing effect', 'nhóm thế quyết định vị trí thế tiếp: 2,4,6 (ortho/para) hoặc 3,5 (meta)'],
  ['2,4,6-tribromophenol', 'kết tủa trắng khi phenol + bromine water ở nhiệt độ phòng'],
  ['pKₐ', 'thước đo độ mạnh acid: pKₐ càng thấp acid càng mạnh (phenol 10,0 < nước 14,0 < ethanol 16,0)'],
  ['aryl compound', 'hợp chất có nhóm chức gắn trực tiếp vào vòng benzene (vd phenylamine C₆H₅NH₂)'],
  ['phenyl group', 'C₆H₅– — vòng benzene trừ một hydro'],
  ['free-radical substitution', 'cơ chế thế mạch nhánh của methylbenzene với Cl₂/UV'],
];

const CARDS25: Array<[string, string]> = [
  ['Số electron π trong benzene?', '6 electron — mỗi carbon sp² góp 1 electron từ orbital p.'],
  ['Độ dài liên kết C–C trong benzene?', '0,139 nm — giữa nối đơn 0,154 và nối đôi 0,134 nm.'],
  ['Vì sao benzene thế chứ không cộng?', 'Cộng sẽ phá vòng π delocalised bền vững; thế giữ nguyên hệ 6 e thơm.'],
  ['Electrophile bromine hóa benzene?', 'Br⁺ sinh từ Br–Br + FeBr₃ → Br⁺ + [FeBr₄]⁻.'],
  ['Điều kiện nitration benzene?', 'HNO₃ đặc + H₂SO₄ đặc, ≈ 55 °C; electrophile NO₂⁺.'],
  ['Sản phẩm methylbenzene + Cl₂ (UV)?', '(chloromethyl)benzene C₆H₅CH₂Cl + HCl — thế mạch nhánh, cơ chế gốc.'],
  ['Friedel–Crafts acylation benzene + CH₃COCl?', 'phenylethanone C₆H₅COCH + HCl (xúc tác AlCl₃, 3 bước).'],
  ['Methylbenzene + kiềm KMnO₄(VII), hồi lưu?', 'benzoic acid C₆H₅COOH (mạch nhánh –CH₃ → –COOH).'],
  ['Phenol + NaOH? + Na?', 'C₆H₅ONa + H₂O; và 2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂.'],
  ['Phenol + bromine water (nhiệt độ phòng)?', 'Mất màu cam + kết tủa trắng 2,4,6-tribromophenol + 3HBr.'],
  ['Vì sao phenol acid hơn ethanol?', 'Phenoxide ion bền nhờ delocalisation điện tích âm vào vòng π; ethoxide thì bị nhóm ethyl đẩy electron.'],
  ['–NO₂ định hướng vị trí nào?', '3 và 5 (meta) và làm vòng kém hoạt động; –OH/–CH₃ định hướng 2,4,6.'],
];

const Glossary: React.FC = () => {
  const [q, setQ] = useState('');
  const list = useMemo(
    () => GLOSS25.filter(([a, b]) => (a + ' ' + b).toLowerCase().includes(q.toLowerCase())),
    [q],
  );
  return (
    <div>
      <div className="relative mb-3">
        <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm thuật ngữ (vd: nitration, phenoxide…)"
          className="w-full pl-9 pr-3 py-2 rounded-md border border-stone-300 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#5c2d75]/40"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-x-5 max-h-72 overflow-y-auto pr-1">
        {list.map(([a, b]) => (
          <div key={a} className="flex gap-2 py-1.5 border-b border-stone-200 text-[12.5px] font-sans">
            <span className="font-bold text-stone-900 shrink-0">{a}</span>
            <span className="text-stone-600">— {b}</span>
          </div>
        ))}
        {list.length === 0 && <p className="text-xs text-stone-500 font-sans">Không tìm thấy.</p>}
      </div>
    </div>
  );
};

const Flashcards: React.FC = () => {
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [q, a] = CARDS25[i];
  return (
    <div>
      <button
        type="button"
        onClick={() => setFlip(!flip)}
        className="w-full min-h-[110px] rounded-xl border-2 border-[#5c2d75]/40 bg-[#f6f1fa] p-4 text-center cursor-pointer transition-colors hover:bg-[#efe6f7]"
      >
        <div className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#5c2d75] mb-1.5 inline-flex items-center gap-1">
          <MousePointerClick className="w-3.5 h-3.5" /> {flip ? 'Đáp án' : 'Câu hỏi — bấm để lật'}
        </div>
        <div className="text-sm font-sans font-semibold text-stone-900 leading-relaxed">{flip ? a : q}</div>
      </button>
      <div className="flex items-center justify-between mt-3 font-sans">
        <button type="button" onClick={() => { setI((i - 1 + CARDS25.length) % CARDS25.length); setFlip(false); }} className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 cursor-pointer">← Trước</button>
        <span className="text-xs text-stone-500 font-semibold">{i + 1} / {CARDS25.length}</span>
        <button type="button" onClick={() => { setI((i + 1) % CARDS25.length); setFlip(false); }} className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 cursor-pointer">Sau →</button>
      </div>
    </div>
  );
};

/* ---------------- Ghép trang ---------------- */
export const StudyExtras25: React.FC = () => (
  <div className="space-y-5">
    <div className="rounded-xl bg-[#5c2d75] text-white p-5 shadow-md">
      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/80">
        <Sigma className="w-4 h-4" /> Ôn tập &amp; Tra cứu · Chương 25
      </div>
      <h1 className="text-xl font-bold mt-1">Benzene and its compounds — phòng luyện tập tương tác</h1>
      <p className="text-sm text-white/80 font-sans mt-1.5 max-w-3xl leading-relaxed">
        Bốn công cụ: mô hình liên kết benzene, máy chạy bước cơ chế thế electrophile, biểu đồ so sánh tính acid, và
        trò chơi nhóm thế định hướng — kèm từ điển 24 thuật ngữ và 12 flashcard trọng tâm.
      </p>
    </div>
    <Sec title="1 · Mô hình liên kết benzene" sub="Đổi qua lại ba cách nhìn để hiểu vì sao Kekulé bị bác bỏ và mô hình delocalised thắng thế.">
      <BondVisualizer />
    </Sec>
    <Sec title="2 · Máy chạy bước cơ chế" sub="Bấm từng bước để ôn cơ chế thế electrophile: bromine hóa, nitration, Friedel–Crafts.">
      <MechPlayer />
    </Sec>
    <div className="grid lg:grid-cols-2 gap-5">
      <Sec title="3 · So sánh tính acid (pKₐ)" sub="Bấm cột để xem giải thích; pKₐ thấp = acid mạnh.">
        <PkaChart />
      </Sec>
      <Sec title="4 · Nhóm thế định hướng vị trí thế" sub="Chọn nhóm thế — vòng sáng đỏ các vị trí electrophile sẽ tấn công.">
        <DirectingGame />
      </Sec>
    </div>
    <div className="grid lg:grid-cols-2 gap-5">
      <Sec title="5 · Từ điển thuật ngữ Chương 25" sub="24 thuật ngữ Anh–Việt có ô tìm kiếm.">
        <Glossary />
      </Sec>
      <Sec title="6 · Flashcard trọng tâm" sub="12 thẻ hỏi–đáp bám sát câu hỏi trong chương và cuối chương.">
        <Flashcards />
      </Sec>
    </div>
  </div>
);

export default StudyExtras25;
