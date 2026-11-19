import React, { useState } from 'react';
import { BookMarked, FlaskConical, Map as MapIcon, Layers, Eye, EyeOff } from 'lucide-react';

/* ==========================================================================
   TIỆN ÍCH BỔ TRỢ CHƯƠNG 18 — THUẬT NGỮ, BẢNG THUỐC THỬ, BẢN ĐỒ PHẢN ỨNG
   ========================================================================== */

const GLOSSARY: Array<[string, string]> = [
  ['carbonyl group', 'nhóm carbonyl (C=O)'],
  ['aldehyde', 'aldehyde (hợp chất có nhóm —CHO ở đầu mạch)'],
  ['ketone', 'ketone (hợp chất có nhóm C=O giữa mạch)'],
  ['homologous series', 'dãy đồng đẳng'],
  ['primary alcohol', 'alcohol bậc một'],
  ['secondary alcohol', 'alcohol bậc hai'],
  ['oxidising agent', 'tác nhân oxi hóa'],
  ['reducing agent', 'tác nhân khử'],
  ['distil / distillation', 'chưng cất'],
  ['reflux', 'đun hồi lưu'],
  ['nucleophilic addition', 'phản ứng cộng nucleophile'],
  ['electrophile', 'tác nhân electrophile (thân electron)'],
  ['nucleophile', 'tác nhân nucleophile (thân nhân)'],
  ['mechanism', 'cơ chế phản ứng'],
  ['curly arrow', 'mũi tên cong (biểu diễn cặp electron chuyển dịch)'],
  ['intermediate', 'intermediate (tiểu phân trung gian)'],
  ['2-hydroxynitrile', '2-hydroxynitrile (sản phẩm cộng HCN)'],
  ['nitrile group', 'nhóm nitrile (—C≡N)'],
  ['hydrolysis', 'sự thủy phân'],
  ['condensation reaction', 'phản ứng ngưng tụ'],
  ['precipitate', 'kết tủa'],
  ['recrystallisation', 'sự kết tinh lại'],
  ['melting point', 'nhiệt độ nóng chảy'],
  ["Tollens' reagent", "thuốc thử Tollens (ammoniacal silver nitrate)"],
  ["Fehling's solution", 'dung dịch Fehling'],
  ['silver mirror', 'gương bạc'],
  ['tri-iodomethane (iodoform)', 'tri-iodomethane (iodoform), CHI₃'],
  ['methyl ketone', 'methyl ketone (chứa nhóm CH₃CO—)'],
  ['infra-red spectroscopy', 'phổ hồng ngoại'],
  ['wavenumber', 'số sóng (cm⁻¹)'],
  ['absorbance', 'độ hấp thụ'],
  ['fingerprinting', 'lấy dấu vân tay phổ (đối chiếu cơ sở dữ liệu)'],
  ['resonance frequency', 'tần số cộng hưởng'],
  ['stretching / bending / twisting', 'dao động co giãn / uốn / xoay'],
];

const TEST_TABLE: Array<{
  test: string;
  reagent: string;
  aldehyde: string;
  ketone: string;
}> = [
  {
    test: '2,4-DNPH (Brady’s reagent)',
    reagent: 'Dung dịch 2,4-dinitrophenylhydrazine',
    aldehyde: 'Kết tủa cam đậm (nhận biết nhóm C=O); đo nhiệt độ nóng chảy dẫn xuất để định danh',
    ketone: 'Kết tủa cam đậm (nhận biết nhóm C=O); đo nhiệt độ nóng chảy dẫn xuất để định danh',
  },
  {
    test: 'Thuốc thử Tollens',
    reagent: 'AgNO₃ trong dung dịch NH₃ dư, hâm nóng',
    aldehyde: 'Gương bạc tráng bên trong ống nghiệm (Ag⁺ → Ag)',
    ketone: 'Không thay đổi (dung dịch không màu)',
  },
  {
    test: 'Dung dịch Fehling',
    reagent: 'Dung dịch kiềm chứa ion Cu²⁺, hâm nóng',
    aldehyde: 'Xanh lam trong → kết tủa đỏ cam đục Cu₂O (Cu²⁺ → Cu⁺)',
    ketone: 'Vẫn màu xanh lam',
  },
  {
    test: 'Iodine trong kiềm (iodoform)',
    reagent: 'Dung dịch I₂ / NaOH(aq), hâm nóng',
    aldehyde: 'Kết tủa vàng CHI₃ nếu chứa nhóm CH₃CO— (ví dụ ethanal)',
    ketone: 'Kết tủa vàng CHI₃ nếu là methyl ketone (CH₃CO—)',
  },
];

const REACTION_MAP: Array<{ from: string; reagent: string; to: string; note?: string }> = [
  { from: 'Alcohol bậc một (RCH₂OH)', reagent: '[O], K₂Cr₂O₇/H₂SO₄ loãng, chưng cất', to: 'Aldehyde (RCHO)', note: 'cất ra ngay khi tạo thành' },
  { from: 'Alcohol bậc một (RCH₂OH)', reagent: '[O] dư, đun hồi lưu', to: 'Carboxylic acid (RCOOH)', note: 'oxi hóa tiếp aldehyde' },
  { from: 'Alcohol bậc hai (R₁R₂CHOH)', reagent: '[O], K₂Cr₂O₇/H₂SO₄ loãng, đun nóng', to: 'Ketone (R₁COR₂)', note: 'không bị oxi hóa tiếp' },
  { from: 'Aldehyde (RCHO)', reagent: 'NaBH₄ (kiềm) hoặc LiAlH₄ (ether khô), 2[H]', to: 'Alcohol bậc một (RCH₂OH)', note: 'khử' },
  { from: 'Ketone (R₁COR₂)', reagent: 'NaBH₄ (kiềm) hoặc LiAlH₄ (ether khô), 2[H]', to: 'Alcohol bậc hai (R₁R₂CHOH)', note: 'khử' },
  { from: 'Aldehyde / Ketone', reagent: 'HCN (NaCN + H₂SO₄ loãng)', to: '2-hydroxynitrile', note: 'cộng nucleophile, dài thêm 1 C' },
  { from: '—C≡N (nitrile)', reagent: 'H⁺/H₂O, đun hồi lưu', to: '—COOH + NH₄⁺', note: 'thủy phân' },
  { from: '—C≡N (nitrile)', reagent: '4[H] (Na + ethanol)', to: '—CH₂NH₂', note: 'khử thành amine' },
  { from: 'Methyl ketone / CH₃CH(OH)—', reagent: 'I₂ / NaOH(aq), hâm nóng', to: 'CHI₃↓ vàng + RCOO⁻Na⁺', note: 'phản ứng iodoform' },
];

const FLASHCARDS: Array<{ q: string; a: string }> = [
  { q: 'Thuốc thử nào nhận biết nhóm carbonyl (C=O) của aldehyde và ketone?', a: '2,4-DNPH (2,4-dinitrophenylhydrazine) — tạo kết tủa cam đậm.' },
  { q: 'Làm sao định danh aldehyde/ketone cụ thể từ kết tủa 2,4-DNPH?', a: 'Kết tinh lại kết tủa, đo nhiệt độ nóng chảy rồi tra bảng dữ liệu dẫn xuất.' },
  { q: 'Aldehyde + thuốc thử Tollens, hâm nóng cho hiện tượng gì?', a: 'Gương bạc tráng trong ống nghiệm (Ag⁺ bị khử thành Ag).' },
  { q: 'Aldehyde + dung dịch Fehling, hâm nóng cho hiện tượng gì?', a: 'Dung dịch xanh lam chuyển thành kết tủa đỏ cam đục Cu₂O.' },
  { q: 'Vì sao ketone không phản ứng với Tollens và Fehling?', a: 'Ketone khó bị oxi hóa hơn aldehyde (không có H gắn trực tiếp vào C của C=O).' },
  { q: 'Sản phẩm cộng HCN vào propanone là gì?', a: '2-hydroxy-2-methylpropanenitrile, (CH₃)₂C(OH)CN.' },
  { q: 'Tác nhân khử thường dùng cho aldehyde/ketone?', a: 'NaBH₄ trong dung dịch kiềm (đun ấm) hoặc LiAlH₄ trong ether khô (mạnh hơn).' },
  { q: 'Nhóm chức nào cho phản ứng iodoform dương tính?', a: 'Nhóm CH₃CO— (methyl ketone, ethanal) và CH₃CH(OH)— (ethanol, alcohol bậc hai kề methyl).' },
  { q: 'Dải hấp thụ IR đặc trưng của liên kết C=O nằm ở vùng nào?', a: 'Khoảng 1670–1750 cm⁻¹, đỉnh mạnh và sắc.' },
  { q: 'Dải O—H liên kết hydrogen của alcohol xuất hiện thế nào trên phổ IR?', a: 'Dải rộng, mạnh quanh 3200–3600 cm⁻¹.' },
];

export const StudyExtras18: React.FC = () => {
  const [term, setTerm] = useState('');
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const filtered = GLOSSARY.filter(
    ([en, vi]) =>
      en.toLowerCase().includes(term.toLowerCase()) ||
      vi.toLowerCase().includes(term.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5c2d75] via-[#7a3f98] to-[#d33427] text-white rounded-xl p-5 shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200">
          <Layers className="w-4 h-4" />
          Tiện ích bổ trợ Chương 18 (mới)
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mt-1">
          Ôn tập &amp; Tra cứu nhanh: Hợp chất carbonyl
        </h2>
        <p className="text-sm text-white/85 mt-1 max-w-3xl">
          Bảng thuật ngữ Anh–Việt, bảng so sánh bốn thuốc thử đặc trưng, bản đồ phản ứng toàn chương và bộ thẻ nhớ
          (flashcards) tự kiểm tra — tất cả biên soạn bám sát trang 234–243.
        </p>
      </div>

      {/* Test comparison table */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#f8d7d4] border-b border-[#eebbb7]">
          <FlaskConical className="w-4 h-4 text-[#dd3645]" />
          <h3 className="font-bold text-sm text-[#8c1d13] font-sans">
            Bảng so sánh thuốc thử nhận biết aldehyde / ketone
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px] font-sans">
            <thead>
              <tr className="bg-[#8d8d8d] text-white">
                <th className="text-left px-3 py-2 font-semibold">Phép thử</th>
                <th className="text-left px-3 py-2 font-semibold">Thuốc thử &amp; điều kiện</th>
                <th className="text-left px-3 py-2 font-semibold">Với aldehyde</th>
                <th className="text-left px-3 py-2 font-semibold">Với ketone</th>
              </tr>
            </thead>
            <tbody>
              {TEST_TABLE.map((r, i) => (
                <tr key={r.test} className={i % 2 ? 'bg-stone-50' : 'bg-white'}>
                  <td className="px-3 py-2 font-semibold text-stone-900 align-top">{r.test}</td>
                  <td className="px-3 py-2 text-stone-700 align-top">{r.reagent}</td>
                  <td className="px-3 py-2 text-stone-700 align-top">{r.aldehyde}</td>
                  <td className="px-3 py-2 text-stone-700 align-top">{r.ketone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reaction map */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#dfeff8] border-b border-[#bcd7e8]">
          <MapIcon className="w-4 h-4 text-[#527993]" />
          <h3 className="font-bold text-sm text-[#2f5a75] font-sans">
            Bản đồ phản ứng Chương 18 (sơ đồ chuyển hóa)
          </h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {REACTION_MAP.map((r, i) => (
            <div key={i} className="rounded-lg border border-stone-200 bg-stone-50 p-3 font-sans text-[12.5px]">
              <div className="font-semibold text-stone-900">{r.from}</div>
              <div className="flex items-center gap-2 my-1.5">
                <span className="text-[11px] text-stone-600 bg-white border border-stone-200 rounded px-2 py-0.5">
                  {r.reagent}
                </span>
                <span className="text-[#d33427] font-bold">⟶</span>
              </div>
              <div className="font-semibold text-[#1d6b3f]">{r.to}</div>
              {r.note && <div className="text-[11px] text-stone-500 mt-1">Ghi chú: {r.note}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3 bg-[#efe3ee] border-b border-[#d9c3dc]">
          <div className="flex items-center gap-2 flex-1">
            <BookMarked className="w-4 h-4 text-[#5c2d75]" />
            <h3 className="font-bold text-sm text-[#5c2d75] font-sans">
              Bảng thuật ngữ Anh – Việt Chương 18 ({filtered.length}/{GLOSSARY.length})
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
          {filtered.length === 0 && (
            <div className="text-stone-500 py-2">Không tìm thấy thuật ngữ phù hợp.</div>
          )}
        </div>
      </section>

      {/* Flashcards */}
      <section className="bg-white rounded-xl border border-stone-300 shadow-xs overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#f4efe6] border-b border-[#e6dec8]">
          <Layers className="w-4 h-4 text-[#c6b299]" />
          <h3 className="font-bold text-sm text-[#7a6a4f] font-sans">
            Thẻ nhớ tự kiểm tra (flashcards) — bấm để lật đáp án
          </h3>
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
