import React, { useState } from 'react';
import { BookMarked, CloudRain, Factory, Recycle, Eye, EyeOff, Sparkles } from 'lucide-react';

/* ==========================================================================
   TIỆN ÍCH BỔ TRỢ CHƯƠNG 13 — CHU TRÌNH NITROGEN TƯƠNG TÁC, THUẬT NGỮ,
   BẢNG OXIDE NITROGEN / ACID RAIN, FLASHCARDS
   ========================================================================== */

const GLOSSARY: Array<[string, string]> = [
  ['nitrogen gas (N₂)', 'khí nitrogen (trơ, chiếm ~78% khí quyển)'],
  ['triple covalent bond', 'liên kết cộng hóa trị ba (N≡N, ~1000 kJ/mol)'],
  ['unreactive / inert', 'trơ, khó phản ứng'],
  ['bond energy', 'năng lượng liên kết'],
  ['lightning strike', 'tia sét / sấm sét'],
  ['activation energy', 'năng lượng hoạt hóa'],
  ['nitrogen(II) oxide (NO)', 'nitrogen(II) oxide (NO)'],
  ['nitrogen(IV) oxide (NO₂)', 'nitrogen(IV) oxide (NO₂)'],
  ['nitric acid', 'nitric acid (HNO₃)'],
  ['nitrogen cycle', 'chu trình nitrogen'],
  ['nitrate ion', 'ion nitrate (NO₃⁻)'],
  ['ammonia', 'ammonia (NH₃, khí kiềm)'],
  ['ammonium ion', 'ion ammonium (NH₄⁺)'],
  ['lone pair', 'cặp electron tự do'],
  ['pyramidal shape', 'hình dạng tháp'],
  ['coordinate (dative) bond', 'liên kết cộng hóa trị phối trí (cho nhận)'],
  ['Haber process', 'quy trình Haber (tổng hợp NH₃)'],
  ['ammonium salt', 'muối ammonium'],
  ['fertiliser', 'phân bón'],
  ['leach / leaching', 'rửa trôi / thấm lậu'],
  ['eutrophication', 'phú dưỡng hóa'],
  ['algal bloom', 'lớp tảo nở hoa (phủ mặt nước)'],
  ['dissolved oxygen', 'oxygen hòa tan'],
  ['blue baby syndrome', 'hội chứng ‘em bé xanh’'],
  ['photochemical smog', 'smog quang hóa'],
  ['catalytic converter', 'bộ chuyển đổi xúc tác'],
  ['sulfur dioxide', 'sulfur dioxide (SO₂)'],
  ['sulfur trioxide', 'sulfur trioxide (SO₃)'],
  ['sulfuric(VI) acid', 'sulfuric(VI) acid (H₂SO₄)'],
  ['acid rain', 'mưa acid (acid rain)'],
  ['limestone', 'đá vôi (calcium carbonate)'],
  ['Contact process', 'quy trình Contact (sản xuất H₂SO₄)'],
  ['low-sulfur fuel', 'nhiên liệu hàm lượng sulfur thấp'],
  ['dynamic equilibrium', 'cân bằng động'],
  ['exothermic', 'tỏa nhiệt'],
];

const NOX_TABLE: Array<{ src: string; problem: string; fix: string }> = [
  {
    src: 'Sấm sét: N₂ + O₂ ⇌ 2NO (năng lượng hoạt hóa từ tia sét)',
    problem: 'NO → NO₂ góp phần gây acid rain và smog quang hóa',
    fix: 'Nguồn tự nhiên, không cần xử lý; là một phần chu trình nitrogen',
  },
  {
    src: 'Động cơ đốt trong (áp suất & nhiệt độ cao trong xi lanh)',
    problem: 'NOx thải theo khí xả; xúc tác oxi hóa SO₂ → SO₃ → H₂SO₄ (acid rain)',
    fix: 'Catalytic converter: 2CO + 2NO ⇌ 2CO₂ + N₂ (xúc tác platinum nóng)',
  },
  {
    src: 'Đốt nhiên liệu hóa thạch chứa tạp chất sulfur (than, dầu)',
    problem: 'SO₂ → SO₃ (nhờ xúc tác NOx) → H₂SO₄: acid rain hạ pH sông hồ, hại cây, ăn mòn đá vôi & thép',
    fix: 'Nhiên liệu ‘low-sulfur’; khử sulfur trước khi đốt; loại SO₂ khỏi khí thải trước khi xả',
  },
];

const ACID_RAIN_EFFECTS: Array<{ target: string; effect: string }> = [
  {
    target: 'Thực vật & cây gỗ',
    effect: 'Rửa trôi dinh dưỡng đất; phá lớp sáp trên lá → mất nước, dễ bệnh; cây vùng cao hứng giọt mây acid',
  },
  {
    target: 'Sông, suối, hồ',
    effect: 'Hạ pH nước; ấu trùng côn trùng chết trước; động vật bậc cao giảm dần theo chuỗi thức ăn',
  },
  {
    target: 'Công trình & tượng đài',
    effect: 'Đá vôi (CaCO₃) bị hòa tan phong hóa; kết cấu thép bị ăn mòn',
  },
];

const CYCLE_STEPS: Array<{ id: number; title: string; detail: string; eq?: string }> = [
  {
    id: 1,
    title: 'N₂ trong khí quyển',
    detail: 'Khí trơ chiếm ~78% khí quyển; liên kết ba N≡N (~1000 kJ/mol) khiến nó khó phản ứng.',
  },
  {
    id: 2,
    title: 'Sấm sét cố định nitrogen',
    detail: 'Tia sét cung cấp năng lượng hoạt hóa để N₂ + O₂ phản ứng tạo NO.',
    eq: 'N₂(g) + O₂(g) ⇌ 2NO(g)',
  },
  {
    id: 3,
    title: 'NO → NO₂ trong không khí',
    detail: 'NO bị oxi hóa tiếp bởi oxygen không khí thành NO₂ (khí nâu đỏ).',
    eq: '2NO(g) + O₂(g) ⇌ 2NO₂(g)',
  },
  {
    id: 4,
    title: 'Mưa mang nitric acid vào đất',
    detail: 'NO₂ tan trong giọt nước mưa tạo HNO₃ — một phần thiết yếu của chu trình nitrogen tự nhiên.',
    eq: '2NO₂(g) + H₂O(l) + ½O₂(g) ⇌ 2HNO₃(aq)',
  },
  {
    id: 5,
    title: 'Thực vật hấp thụ NO₃⁻',
    detail: 'Cây hút ion nitrate hòa tan trong đất để tổng hợp protein thiết yếu cho sinh trưởng.',
  },
  {
    id: 6,
    title: 'Con người bổ sung phân bón',
    detail: 'Quy trình Haber tạo NH₃ → muối ammonium (NH₄NO₃, (NH₄)₂SO₄…) thay thế nitrogen bị mùa màng lấy đi; dư thừa gây rửa trôi & phú dưỡng hóa.',
    eq: 'N₂(g) + 3H₂(g) ⇌ (Fe) 2NH₃(g)',
  },
];

const FLASHCARDS: Array<{ q: string; a: string }> = [
  { q: 'Vì sao khí nitrogen trơ (khó phản ứng)?', a: 'Liên kết ba N≡N có năng lượng liên kết gần 1000 kJ/mol, rất khó bẻ gãy; chỉ phản ứng ở điều kiện khắc nghiệt.' },
  { q: 'Sấm sét tạo ra các oxide nitrogen như thế nào?', a: 'Tia sét cấp năng lượng hoạt hóa: N₂ + O₂ ⇌ 2NO; sau đó 2NO + O₂ ⇌ 2NO₂; NO₂ + nước mưa → HNO₃ rơi vào đất.' },
  { q: 'Ammonia tác dụng với ion H⁺ tạo gì? Kiểu liên kết nào hình thành?', a: 'Tạo ion ammonium NH₄⁺; liên kết mới là liên kết cộng hóa trị phối trí (cho nhận) từ cặp electron tự do của N.' },
  { q: 'Vì sao phân tử ammonia có hình tháp?', a: 'Cặp electron tự do trên N đẩy ba liên kết N—H chúc xuống tạo hình chóp (pyramidal).' },
  { q: 'Cách điều chế NH₃ trong phòng thí nghiệm từ muối ammonium?', a: 'Đun nóng hỗn hợp rắn NH₄Cl + Ca(OH)₂; khí qua CaO để làm khô; thử bằng quỳ đỏ ẩm hóa xanh.' },
  { q: 'Phú dưỡng hóa (eutrophication) diễn ra theo chuỗi nào?', a: 'Nitrate rửa trôi → tảo nở hoa chặn ánh sáng → tảo chết, vi khuẩn phân hủy tiêu hết O₂ hòa tan → cá chết, hệ sinh thái sụp đổ.' },
  { q: 'NOx xúc tác tạo acid rain từ SO₂ như thế nào?', a: 'SO₂ + NO₂ ⇌ SO₃ + NO; NO + ½O₂ ⇌ NO₂ (tái sinh); SO₃ + H₂O ⇌ H₂SO₄.' },
  { q: 'Phản ứng trong catalytic converter của xe hơi?', a: '2CO(g) + 2NO(g) ⇌ 2CO₂(g) + N₂(g) trên xúc tác platinum nóng.' },
  { q: 'Ba tác hại của acid rain?', a: 'Giết sinh vật thủy sinh (hạ pH); hại cây (rửa trôi dinh dưỡng, phá lớp sáp lá); ăn mòn đá vôi & thép.' },
  { q: 'Nguyên liệu của quy trình Contact sản xuất H₂SO₄?', a: 'Sulfur, không khí và nước.' },
  { q: 'Cân bằng 2SO₂ + O₂ ⇌ 2SO₃ (tỏa nhiệt): tăng nhiệt độ thì dịch chiều nào?', a: 'Dịch sang trái (chiều thu nhiệt), theo nguyên lý Le Chatelier.' },
];

export const StudyExtras13: React.FC = () => {
  const [term, setTerm] = useState('');
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [activeStep, setActiveStep] = useState<number>(2);

  const filtered = GLOSSARY.filter(
    ([en, vi]) =>
      en.toLowerCase().includes(term.toLowerCase()) || vi.toLowerCase().includes(term.toLowerCase()),
  );
  const step = CYCLE_STEPS.find((s) => s.id === activeStep) || CYCLE_STEPS[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8a6d1a] via-[#b98d1f] to-[#d33427] text-white rounded-xl p-5 shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-100">
          <Sparkles className="w-4 h-4" />
          Tiện ích bổ trợ Chương 13 (mới)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mt-1">Ôn tập &amp; Tra cứu nhanh: Nitrogen và sulfur</h2>
        <p className="text-sm text-white/90 mt-1 max-w-3xl">
          Sơ đồ chu trình nitrogen <strong>tương tác</strong> (bấm từng bước để xem chi tiết &amp; phương trình),
          bảng oxide nitrogen – acid rain, bảng thuật ngữ Anh–Việt và flashcards tự kiểm tra — bám sát trang 180–186.
        </p>
      </div>

      {/* Interactive nitrogen cycle */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#e8f2e0] border-b border-[#cfe0bf]">
          <Recycle className="w-4 h-4 text-[#4c7a24]" />
          <h3 className="font-bold text-sm text-[#33511d] font-sans">
            Chu trình nitrogen tương tác — bấm vào từng mắt xích
          </h3>
        </div>
        <div className="p-4">
          <svg viewBox="0 0 640 210" className="w-full" role="img" aria-label="Sơ đồ chu trình nitrogen">
            <defs>
              <marker id="cyArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#7a8c5a" />
              </marker>
            </defs>
            {/* mây & sét */}
            <g opacity="0.9">
              <ellipse cx="320" cy="26" rx="46" ry="14" fill="#8d84a8" opacity="0.55" />
              <path d="M322 30 l-6 12 l6 -1 l-8 14" stroke="#f2c94c" strokeWidth="2.4" fill="none" strokeLinejoin="round" />
            </g>
            {/* các nút */}
            {[
              { id: 1, x: 40, y: 96, label: 'N₂ khí quyển', color: '#5b7f96' },
              { id: 2, x: 150, y: 60, label: 'Sấm sét → NO', color: '#8d84a8' },
              { id: 3, x: 262, y: 60, label: 'NO → NO₂', color: '#a86a48' },
              { id: 4, x: 374, y: 60, label: 'Mưa HNO₃', color: '#3f6fd1' },
              { id: 5, x: 486, y: 96, label: 'Cây hấp thụ NO₃⁻', color: '#4c7a24' },
              { id: 6, x: 300, y: 152, label: 'Phân bón (Haber)', color: '#b98d1f' },
            ].map((n) => {
              const active = n.id === activeStep;
              return (
                <g
                  key={n.id}
                  onClick={() => setActiveStep(n.id)}
                  className="cursor-pointer"
                  role="button"
                  aria-label={n.label}
                >
                  <rect
                    x={n.x - 52}
                    y={n.y - 17}
                    width="104"
                    height="34"
                    rx="17"
                    fill={active ? n.color : '#f4f2ea'}
                    stroke={n.color}
                    strokeWidth={active ? 2.4 : 1.4}
                  />
                  <text
                    x={n.x}
                    y={n.y + 4}
                    textAnchor="middle"
                    fontFamily="sans-serif"
                    fontSize="11"
                    fontWeight={active ? 700 : 600}
                    fill={active ? '#ffffff' : '#3d3a30'}
                  >
                    {n.id}. {n.label}
                  </text>
                </g>
              );
            })}
            {/* mũi tên */}
            <path d="M94 88 L112 72" stroke="#7a8c5a" strokeWidth="1.6" fill="none" markerEnd="url(#cyArrow)" />
            <path d="M204 60 L226 60" stroke="#7a8c5a" strokeWidth="1.6" fill="none" markerEnd="url(#cyArrow)" />
            <path d="M316 60 L338 60" stroke="#7a8c5a" strokeWidth="1.6" fill="none" markerEnd="url(#cyArrow)" />
            <path d="M428 72 L448 88" stroke="#7a8c5a" strokeWidth="1.6" fill="none" markerEnd="url(#cyArrow)" />
            <path d="M486 116 Q 470 152 402 152" stroke="#7a8c5a" strokeWidth="1.6" fill="none" markerEnd="url(#cyArrow)" />
            <path d="M246 152 Q 120 150 60 116" stroke="#7a8c5a" strokeWidth="1.6" fill="none" markerEnd="url(#cyArrow)" />
            <path d="M352 140 Q 420 120 470 106" stroke="#b98d1f" strokeWidth="1.4" strokeDasharray="4 3" fill="none" markerEnd="url(#cyArrow)" />
          </svg>

          <div className="mt-3 rounded-lg border border-[#cfe0bf] bg-[#f6faf1] p-3.5 font-sans text-[12.5px] text-stone-800">
            <div className="font-bold text-[#33511d] mb-1">
              Bước {step.id}: {step.title}
            </div>
            <p className="leading-relaxed">{step.detail}</p>
            {step.eq && (
              <div className="mt-2 font-mono text-[12px] bg-white border border-stone-200 rounded px-2.5 py-1.5 inline-block">
                {step.eq}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NOx / acid rain table */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#f8d7d4] border-b border-[#eebbb7]">
          <CloudRain className="w-4 h-4 text-[#dd3645]" />
          <h3 className="font-bold text-sm text-[#8c1d13] font-sans">
            Nguồn phát thải → vấn đề → giải pháp (NOx, SO₂ & acid rain)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px] font-sans">
            <thead>
              <tr className="bg-[#8d8d8d] text-white">
                <th className="text-left px-3 py-2 font-semibold">Nguồn phát thải</th>
                <th className="text-left px-3 py-2 font-semibold">Vấn đề môi trường</th>
                <th className="text-left px-3 py-2 font-semibold">Giải pháp / xử lý</th>
              </tr>
            </thead>
            <tbody>
              {NOX_TABLE.map((r, i) => (
                <tr key={i} className={i % 2 ? 'bg-stone-50' : 'bg-white'}>
                  <td className="px-3 py-2 text-stone-800 align-top font-mono text-[11.5px]">{r.src}</td>
                  <td className="px-3 py-2 text-stone-700 align-top">{r.problem}</td>
                  <td className="px-3 py-2 text-stone-700 align-top">{r.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-3">
          {ACID_RAIN_EFFECTS.map((e) => (
            <div key={e.target} className="rounded-lg border border-stone-200 bg-stone-50 p-3 font-sans text-[12px]">
              <div className="font-bold text-[#8c1d13] mb-1">{e.target}</div>
              <div className="text-stone-700 leading-relaxed">{e.effect}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial importance */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#dfeff8] border-b border-[#bcd7e8]">
          <Factory className="w-4 h-4 text-[#527993]" />
          <h3 className="font-bold text-sm text-[#2f5a75] font-sans">Công nghiệp: Haber, phân bón & acid mạnh</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-[12.5px]">
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
            <div className="font-bold text-stone-900 mb-1">Quy trình Haber (NH₃)</div>
            <div className="font-mono text-[12px] bg-white border border-stone-200 rounded px-2 py-1 inline-block">
              N₂(g) + 3H₂(g) ⇌ (Fe, ~450 °C, 200 atm) 2NH₃(g)
            </div>
            <p className="text-stone-700 mt-2 leading-relaxed">
              ~85% ammonia → phân bón (muối ammonium); phần còn lại: nitric acid (TNT, thuốc nổ), nylon, chất tẩy rửa;
              một phần bơm trực tiếp vào đất (chủ yếu ở Hoa Kỳ).
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
            <div className="font-bold text-stone-900 mb-1">Quy trình Contact (H₂SO₄)</div>
            <div className="font-mono text-[12px] bg-white border border-stone-200 rounded px-2 py-1 inline-block">
              2SO₂(g) + O₂(g) ⇌ (V₂O₅) 2SO₃(g); SO₃ + H₂O → H₂SO₄
            </div>
            <p className="text-stone-700 mt-2 leading-relaxed">
              Nguyên liệu: sulfur, không khí, nước. Sản lượng H₂SO₄ là chỉ số phát triển công nghiệp; dùng cho phân
              bón, chất tẩy rửa, sơn, phẩm nhuộm, sợi, ắc quy, thuộc da, pickling.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3 bg-[#efe3ee] border-b border-[#d9c3dc]">
          <div className="flex items-center gap-2 flex-1">
            <BookMarked className="w-4 h-4 text-[#5c2d75]" />
            <h3 className="font-bold text-sm text-[#5c2d75] font-sans">
              Bảng thuật ngữ Anh – Việt Chương 13 ({filtered.length}/{GLOSSARY.length})
            </h3>
          </div>
          <input
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Tìm thuật ngữ…"
            className="w-full sm:w-64 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#9a6fb0]/50"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 px-4 py-3 font-sans text-[12.5px]">
          {filtered.map(([en, vi]) => (
            <div key={en} className="flex gap-2 py-1 border-b border-stone-100">
              <span className="font-semibold text-stone-900 shrink-0">{en}</span>
              <span className="text-stone-600">— {vi}</span>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-stone-500 py-2">Không tìm thấy thuật ngữ phù hợp.</div>}
        </div>
      </section>

      {/* Flashcards */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#f4efe6] border-b border-[#e6dec8]">
          <Eye className="w-4 h-4 text-[#c6b299]" />
          <h3 className="font-bold text-sm text-[#7a6a4f] font-sans">Thẻ nhớ tự kiểm tra — bấm để lật đáp án</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {FLASHCARDS.map((c, i) => {
            const open = !!revealed[i];
            return (
              <button
                key={i}
                type="button"
                onClick={() => setRevealed({ ...revealed, [i]: !open })}
                className={`text-left rounded-lg border p-3 font-sans text-[12.5px] transition-colors cursor-pointer ${
                  open ? 'bg-emerald-50 border-emerald-300' : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-stone-900">{c.q}</span>
                  {open ? (
                    <EyeOff className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  )}
                </div>
                {open && <div className="mt-2 text-stone-800 border-t border-emerald-200 pt-2">{c.a}</div>}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
