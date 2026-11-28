import React from 'react';

/* ==========================================================================
   TOÁN HỌC — CHƯƠNG 1 (e: The Story of a Number, Eli Maor)
   HỆ THỐNG HÌNH VẼ GIẢI THÍCH CHI TIẾT (SVG thuần, tự biên soạn)
   ========================================================================== */

const CAP = 'mt-2 text-xs leading-relaxed text-stone-700 font-sans';

const FigFrame: React.FC<{ children: React.ReactNode; tone?: string }> = ({
  children,
  tone = 'bg-white',
}) => (
  <div className={`relative overflow-hidden rounded-md border border-stone-300 shadow-sm ${tone}`}>
    {children}
  </div>
);

/* --------------------------------------------------------------------------
   Hình T1.1 — Chân dung cách điệu John Napier + lâu đài Merchiston
-------------------------------------------------------------------------- */
export const FigureNapierPortrait: React.FC = () => (
  <figure className="my-1">
    <FigFrame tone="bg-[#f6f1e6]">
      <svg viewBox="0 0 420 150" className="w-full" role="img" aria-label="John Napier và lâu đài Merchiston">
        <defs>
          <linearGradient id="skyNap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dfe8ee" />
            <stop offset="1" stopColor="#f6f1e6" />
          </linearGradient>
          <radialGradient id="medalNap" cx="0.4" cy="0.35" r="0.8">
            <stop offset="0" stopColor="#e8d9a8" />
            <stop offset="1" stopColor="#b99a4e" />
          </radialGradient>
        </defs>
        <rect width="420" height="150" fill="url(#skyNap)" />
        {/* lâu đài Merchiston */}
        <g>
          <rect x="252" y="66" width="52" height="64" fill="#8d8577" />
          <rect x="246" y="58" width="64" height="10" fill="#6f6a5e" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={248 + i * 13} y={52} width="8" height="8" fill="#6f6a5e" />
          ))}
          <rect x="304" y="84" width="40" height="46" fill="#9a9284" />
          <polygon points="304,84 324,68 344,84" fill="#5d5749" />
          <rect x="266" y="80" width="9" height="14" rx="4" fill="#3c3831" />
          <rect x="284" y="80" width="9" height="14" rx="4" fill="#3c3831" />
          <rect x="316" y="96" width="8" height="12" rx="4" fill="#3c3831" />
          <rect x="240" y="130" width="120" height="6" fill="#7a7466" />
        </g>
        {/* huy chương chân dung */}
        <g>
          <circle cx="105" cy="72" r="52" fill="url(#medalNap)" stroke="#8a6f2f" strokeWidth="3" />
          <circle cx="105" cy="72" r="44" fill="#f3ead2" />
          {/* khuôn mặt cách điệu: râu dài, cổ áo ren */}
          <ellipse cx="105" cy="60" rx="15" ry="18" fill="#e8c9a0" />
          <path d="M90 62 q15 34 30 0 q4 22 -15 26 q-19 -4 -15 -26 z" fill="#d8d3c8" />
          <path d="M92 46 q13 -10 26 0 q-4 -8 -13 -8 q-9 0 -13 8 z" fill="#8a8078" />
          <circle cx="99" cy="58" r="1.7" fill="#3a332c" />
          <circle cx="111" cy="58" r="1.7" fill="#3a332c" />
          <path d="M88 84 q17 10 34 0 q6 10 -6 14 q-11 3 -22 0 q-12 -4 -6 -14 z" fill="#efe9db" stroke="#c9c2b2" strokeWidth="1" />
          <text x="105" y="131" textAnchor="middle" fontFamily="serif" fontSize="10" fontStyle="italic" fill="#5a4a22">
            John Napier (1550–1617)
          </text>
        </g>
        {/* ký hiệu logo */}
        <g fontFamily="serif" fill="#7a5c17">
          <text x="196" y="52" fontSize="26" fontStyle="italic">log</text>
          <text x="196" y="76" fontSize="15" fontStyle="italic">= “số tỉ lệ”</text>
          <text x="196" y="100" fontSize="11" fill="#8a7a4a">Mirifici logarithmorum</text>
          <text x="196" y="114" fontSize="11" fill="#8a7a4a">canonis descriptio, 1614</text>
        </g>
      </svg>
    </FigFrame>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.1</strong> John Napier — nhà quý tộc Scotland kiêm nhà thần
      học, nhà phát minh — và lâu đài Merchiston gần Edinburgh, nơi ông dành 20 năm (1594–1614) xây dựng bảng
      logarithm đầu tiên của nhân loại.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.2 — Dòng thời gian cuộc đời & sự nghiệp Napier
-------------------------------------------------------------------------- */
const TL: Array<[number, string, string]> = [
  [1550, 'Sinh tại Merchiston Castle, Edinburgh', 'above'],
  [1563, '13 tuổi: vào Đại học St. Andrews', 'below'],
  [1571, 'Về nước; cưới Elizabeth Stirling', 'above'],
  [1579, 'Ốc xoắn thủy lực (hút nước mỏ than); cưới Agnes Chisholm', 'below'],
  [1593, 'Sách tôn giáo “A Plaine Discovery…”', 'above'],
  [1594, 'Bắt đầu 20 năm dựng bảng logarithm', 'below'],
  [1608, 'Thành laird thứ 8 của Merchiston', 'above'],
  [1614, 'Xuất bản Descriptio — logarithm ra đời', 'below'],
  [1617, 'Mất tại Merchiston', 'above'],
];

export const FigureNapierTimeline: React.FC = () => (
  <figure className="my-3">
    <FigFrame>
      <svg viewBox="0 0 640 150" className="w-full" role="img" aria-label="Dòng thời gian Napier">
        <defs>
          <linearGradient id="tlGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b99a4e" />
            <stop offset="1" stopColor="#7a5c17" />
          </linearGradient>
        </defs>
        <line x1="24" y1="78" x2="616" y2="78" stroke="url(#tlGrad)" strokeWidth="3.5" />
        <polygon points="616,72 630,78 616,84" fill="#7a5c17" />
        {TL.map(([year, label, side], i) => {
          const x = 40 + i * 70;
          const up = side === 'above';
          return (
            <g key={year as number} fontFamily="sans-serif">
              <circle cx={x} cy={78} r={i === 7 ? 7 : 5} fill={i === 7 ? '#c0392b' : '#7a5c17'} stroke="#fff" strokeWidth="1.6" />
              <line x1={x} y1={78} x2={x} y2={up ? 52 : 104} stroke="#a08c54" strokeWidth="1.1" />
              <text x={x} y={up ? 46 : 116} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#5a4a22">
                {year}
              </text>
              <foreignObject x={x - 34} y={up ? 8 : 120} width="68" height="30">
                <div style={{ fontSize: 7.6, lineHeight: '1.15', textAlign: 'center', color: '#57534e' }}>{label}</div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </FigFrame>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.2</strong> Dòng thời gian John Napier: từ cậu bé 13 tuổi ở
      St. Andrews tới phát minh vĩ đại năm 1614 (chấm đỏ) — đúng một thế kỷ trước khi khái niệm “cơ số” hiện đại ra
      đời. (Tác phẩm Constructio được con trai ông xuất bản di cảo năm 1619.)
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.3 — Prosthaphaeresis: biến PHÉP NHÂN thành TỔNG / HIỆU
-------------------------------------------------------------------------- */
export const FigureProsthaphaeresis: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 420 132" className="w-full" role="img" aria-label="Quy tắc prosthaphaeresis">
      <defs>
        <marker id="pArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#7a5c17" />
        </marker>
      </defs>
      {/* hộp NHÂN */}
      <rect x="16" y="34" width="120" height="52" rx="10" fill="#f8d7d4" stroke="#dd3645" strokeWidth="1.6" />
      <text x="76" y="56" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#8c1d13">sin A · sin B</text>
      <text x="76" y="74" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#8c1d13">
        phép NHÂN (đắt đỏ)
      </text>
      {/* mũi tên */}
      <path d="M140 50 Q 176 26 212 44" fill="none" stroke="#7a5c17" strokeWidth="1.6" markerEnd="url(#pArrow)" />
      <path d="M140 72 Q 176 96 212 78" fill="none" stroke="#7a5c17" strokeWidth="1.6" markerEnd="url(#pArrow)" />
      <text x="176" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        quy tắc prosthaphaeresis
      </text>
      {/* hộp TỔNG/HIỆU */}
      <rect x="216" y="18" width="188" height="40" rx="10" fill="#e8f2e0" stroke="#4c7a24" strokeWidth="1.6" />
      <text x="310" y="35" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#33511d">
        ½·cos(A − B)
      </text>
      <text x="310" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#33511d">
        chỉ cần tra bảng + TRỪ
      </text>
      <rect x="216" y="66" width="188" height="40" rx="10" fill="#e8f2e0" stroke="#4c7a24" strokeWidth="1.6" />
      <text x="310" y="83" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#33511d">
        ½·cos(A + B)
      </text>
      <text x="310" y="98" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#33511d">
        chỉ cần tra bảng + CỘNG
      </text>
      <text x="210" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        tích hai lượng giác → tổng/hiệu hai lượng giác khác
      </text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.3</strong> Quy tắc prosthaphaeresis (từ tiếng Hy Lạp nghĩa
      là “cộng và trừ”): công thức sin A·sin B = ½[cos(A−B) − cos(A+B)] cho phép thay một phép nhân nặng nề bằng vài
      lần tra bảng cộng/trừ — ý tưởng mầm mống dẫn Napier tới logarithm.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.4 — Tương ứng Stifel: cấp số nhân ↔ cấp số cộng
-------------------------------------------------------------------------- */
export const FigureStifel: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 150" className="w-full" role="img" aria-label="Tương ứng cấp số nhân và cấp số cộng">
      <defs>
        <marker id="sArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#c0392b" />
        </marker>
      </defs>
      {/* hàng số mũ (cấp số cộng) */}
      <text x="14" y="34" fontFamily="sans-serif" fontSize="9.5" fill="#57534e">
        số mũ (cấp số cộng):
      </text>
      {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((k, i) => (
        <g key={k} fontFamily="monospace">
          <rect x={120 + i * 36} y={20} width="30" height="24" rx="5" fill="#e3edf7" stroke="#527993" strokeWidth="1.2" />
          <text x={135 + i * 36} y={36} textAnchor="middle" fontSize="12" fill="#2f5a75">
            {k}
          </text>
        </g>
      ))}
      {/* hàng lũy thừa (cấp số nhân) */}
      <text x="14" y="76" fontFamily="sans-serif" fontSize="9.5" fill="#57534e">
        lũy thừa (cấp số nhân):
      </text>
      {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map((k, i) => (
        <g key={'q' + k} fontFamily="monospace">
          <rect x={120 + i * 36} y={62} width="30" height="24" rx="5" fill="#fdf3e0" stroke="#b98d1f" strokeWidth="1.2" />
          <text x={135 + i * 36} y={78} textAnchor="middle" fontSize="11" fill="#7a5c17">
            q{k < 0 ? `⁻${-k}` : k === 0 ? '⁰' : k === 1 ? '¹' : k === 2 ? '²' : k === 3 ? '³' : k === 4 ? '⁴' : '⁵'}
          </text>
        </g>
      ))}
      {/* ví dụ nhân: q^2 * q^3 = q^5 => 2+3=5 */}
      <path d="M195 92 Q 210 122 258 118" fill="none" stroke="#c0392b" strokeWidth="1.4" markerEnd="url(#sArrow)" />
      <path d="M231 92 Q 246 122 262 118" fill="none" stroke="#c0392b" strokeWidth="1.4" markerEnd="url(#sArrow)" />
      <path d="M303 92 Q 303 116 300 118" fill="none" stroke="#c0392b" strokeWidth="1.4" markerEnd="url(#sArrow)" />
      <text x="40" y="138" fontFamily="monospace" fontSize="11" fill="#8c1d13">
        q² · q³ = q⁵&nbsp;&nbsp;⇔&nbsp;&nbsp;2 + 3 = 5
      </text>
      <text x="250" y="138" fontFamily="monospace" fontSize="11" fill="#2f5a75">
        q⁵ / q³ = q²&nbsp;&nbsp;⇔&nbsp;&nbsp;5 − 3 = 2
      </text>
      <path d="M303 46 Q 340 8 372 40" fill="none" stroke="#2f5a75" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="14" y="112" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        NHÂN hai số hạng = CỘNG các số mũ · CHIA hai số hạng = TRỪ các số mũ
      </text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.4</strong> Tương ứng then chốt mà Michael Stifel ghi lại
      trong <em>Arithmetica integra</em> (1544): mỗi số hạng của cấp số nhân …, q⁻², q⁻¹, 1, q, q², … ghép cặp với một
      số mũ trong cấp số cộng …, −2, −1, 0, 1, 2, …; nhân/chia các số hạng chuyển thành cộng/trừ các số mũ. Napier
      thiên tài ở chỗ mở rộng tương ứng này từ số mũ nguyên sang một dải giá trị liên tục.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.5 — Ví dụ tính nhanh với cơ số 2
-------------------------------------------------------------------------- */
export const FigureBase2Example: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 130" className="w-full" role="img" aria-label="Ví dụ cơ số 2">
      {/* bảng lũy thừa 2 */}
      {[0, 1, 2, 3, 4, 5, 6, 8, 10].map((k, i) => (
        <g key={k} fontFamily="monospace">
          <rect x={12 + i * 50} y={10} width="44" height="20" rx="4" fill="#e3edf7" stroke="#527993" strokeWidth="1" />
          <text x={34 + i * 50} y={24} textAnchor="middle" fontSize="10.5" fill="#2f5a75">
            {k}
          </text>
          <rect x={12 + i * 50} y={30} width="44" height="20" rx="4" fill="#fdf3e0" stroke="#b98d1f" strokeWidth="1" />
          <text x={34 + i * 50} y={44} textAnchor="middle" fontSize="10.5" fill="#7a5c17">
            {2 ** k}
          </text>
        </g>
      ))}
      <text x="12" y="66" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        hàng trên: số mũ · hàng dưới: giá trị 2^mũ
      </text>
      {/* ví dụ 1: 8 x 32 */}
      <g fontFamily="monospace" fontSize="11.5" fill="#263238">
        <text x="12" y="90">VD 1: 8 × 32 → mũ 3 + 5 = 8 → tra bảng: 2⁸ = 256</text>
        <text x="12" y="110">VD 2: 4⁵ = (2²)⁵ → mũ 2 × 5 = 10 → 2¹⁰ = 1024</text>
      </g>
      <rect x="330" y="76" width="120" height="42" rx="8" fill="#e8f2e0" stroke="#4c7a24" strokeWidth="1.4" />
      <text x="390" y="94" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#33511d">
        nhân/chia/lũy thừa/căn
      </text>
      <text x="390" y="108" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#33511d">
        → cộng/trừ/nhân/chia số mũ
      </text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.5</strong> Minh họa ý tưởng trung tâm: nếu mọi số dương đều
      viết được thành lũy thừa của một cơ số cố định (ở đây là 2), thì phép nhân 8 × 32 chỉ còn là cộng số mũ 3 + 5 =
      8 rồi tra bảng ra 256; lũy thừa 4⁵ thành nhân số mũ 2 × 5 = 10 ra 1024. Mỗi phép toán hạ một bậc trong “thang
      phép toán” — cốt lõi của mọi bảng logarithm.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.6 — Chia bán kính đơn vị thành 10^7 phần & công bội 1 − 10⁻⁷
-------------------------------------------------------------------------- */
export const FigureUnitRadius: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 120" className="w-full" role="img" aria-label="Bán kính đơn vị chia 10 mũ 7 phần">
      {/* vòng tròn đơn vị */}
      <circle cx="70" cy="60" r="44" fill="#f3ead2" stroke="#7a5c17" strokeWidth="1.6" />
      <line x1="70" y1="60" x2="114" y2="60" stroke="#c0392b" strokeWidth="2" />
      <text x="70" y="116" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        bán kính = 10⁷ phần bằng nhau
      </text>
      {/* thước phóng đại */}
      <rect x="150" y="46" width="240" height="16" rx="3" fill="#fff" stroke="#546e7a" strokeWidth="1.4" />
      {Array.from({ length: 40 }).map((_, i) => (
        <line key={i} x1={150 + i * 6} y1={46} x2={150 + i * 6} y2={i % 5 === 0 ? 56 : 52} stroke="#90a4ae" strokeWidth="0.8" />
      ))}
      <rect x="384" y="46" width="6" height="16" fill="#c0392b" />
      <text x="270" y="38" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        phóng đại đầu thước: mỗi phần = 10⁻⁷ của đơn vị
      </text>
      <text x="387" y="76" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#c0392b">
        1 − 10⁻⁷
      </text>
      {/* công bội */}
      <rect x="150" y="86" width="240" height="24" rx="6" fill="#fdf3e0" stroke="#b98d1f" strokeWidth="1.2" />
      <text x="270" y="102" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7a5c17">
        công bội q = 1 − 10⁻⁷ = 0,9999999
      </text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.6</strong> Để tránh phân số thập phân cồng kềnh, Napier chia
      đơn vị (bán kính vòng tròn lượng giác theo quy ước thời đó) thành 10⁷ phần bằng nhau và chọn công bội của cấp số
      nhân là 1 − 10⁻⁷ = 0,9999999 — số “gần 1 nhất” trong hệ của ông.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.7 — Bốn bảng liên tiếp (101 → 51 → 21 → 68 mục/bảng)
-------------------------------------------------------------------------- */
const TABLES: Array<{ n: string; ratio: string; last: string; entries: string }> = [
  { n: 'Bảng 1', ratio: '1 − 10⁻⁷', last: '9 999 900', entries: '101 mục' },
  { n: 'Bảng 2', ratio: '1 − 10⁻⁵', last: '9 995 001', entries: '51 mục' },
  { n: 'Bảng 3', ratio: '9 995 001 : 10⁷', last: '9 900 473', entries: '21 mục' },
  { n: 'Bảng 4', ratio: '≈ 0,99', last: '4 998 609 ≈ ½·10⁷', entries: '68 mục × mỗi mục bảng 3' },
];

export const FigureNapierTables: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 150" className="w-full" role="img" aria-label="Bốn bảng của Napier">
      <defs>
        <marker id="tArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#7a5c17" />
        </marker>
      </defs>
      <text x="12" y="16" fontFamily="monospace" fontSize="11" fill="#7a5c17">
        điểm xuất phát: 10⁷ = 10 000 000
      </text>
      {TABLES.map((t, i) => {
        const x = 12 + i * 112;
        return (
          <g key={t.n} fontFamily="sans-serif">
            <rect x={x} y={30} width="100" height="86" rx="8" fill={i === 3 ? '#fdf3e0' : '#f6f4ee'} stroke={i === 3 ? '#b98d1f' : '#8d8d8d'} strokeWidth="1.4" />
            <text x={x + 50} y={46} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#3f3a30">
              {t.n}
            </text>
            <text x={x + 50} y={62} textAnchor="middle" fontSize="8.6" fill="#57534e">
              công bội {t.ratio}
            </text>
            <text x={x + 50} y={78} textAnchor="middle" fontSize="8.6" fill="#57534e">
              {t.entries}
            </text>
            <text x={x + 50} y={96} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#8c1d13">
              cuối: {t.last}
            </text>
            <text x={x + 50} y={110} textAnchor="middle" fontSize="7.8" fill="#78716c">
              mỗi số = số trước trừ 1/phần
            </text>
            {i < 3 && <path d={`M${x + 102} 73 L${x + 110} 73`} stroke="#7a5c17" strokeWidth="1.6" markerEnd="url(#tArrow)" />}
          </g>
        );
      })}
      <text x="12" y="140" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        20 năm (1594–1614) tính tay bằng giấy và bút: mỗi bảng lấy tỉ số cuối/đầu của bảng trước làm công bội mới.
      </text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.7</strong> Kiến trúc bốn bảng của Napier: bảng thứ nhất
      101 mục với công bội 1−10⁻⁷; mỗi bảng sau dùng chính tỉ số “số cuối : số đầu” của bảng trước làm công bội mới,
      tới khi bảng cuối chạm khoảng một nửa giá trị khởi đầu (≈ 4 998 609) — đủ dày để nội suy mọi giá trị trung gian.
    </figcaption>
  </figure>
);

/* --------------------------------------------------------------------------
   Hình T1.8 — Suýt chạm số e: (1 − 1/10⁷)^10⁷ ≈ 1/e
-------------------------------------------------------------------------- */
export const FigureApproachE: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 152" className="w-full" role="img" aria-label="Tiệm cận 1/e">
      {/* trục số */}
      <line x1="30" y1="96" x2="430" y2="96" stroke="#546e7a" strokeWidth="1.6" />
      {[
        [0, '0'], [0.3679, '1/e ≈ 0,36788'], [0.5, '0,5'], [0.9999999, '≈ 1'],
      ].map(([v, lab], i) => {
        const x = 30 + (v as number) * 400;
        return (
          <g key={i} fontFamily="monospace">
            <line x1={x} y1="92" x2={x} y2="100" stroke="#546e7a" strokeWidth="1.4" />
            <text x={x} y={114} textAnchor="middle" fontSize="9.5" fill={i === 1 ? '#c0392b' : '#57534e'}>
              {lab}
            </text>
          </g>
        );
      })}
      {/* điểm (1-10^-7)^10^7 */}
      <circle cx={30 + 0.3678794 * 400} cy="96" r="6" fill="#c0392b" stroke="#fff" strokeWidth="2">
        <animate attributeName="r" values="6;7.5;6" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x={30 + 0.3678794 * 400} y="72" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="#8c1d13">
        (1 − 10⁻⁷)^10⁷ ≈ 1/e
      </text>
      <line x1={30 + 0.3678794 * 400} y1="76" x2={30 + 0.3678794 * 400} y2="88" stroke="#c0392b" strokeWidth="1.2" />
      {/* công thức giới hạn */}
      <rect x="250" y="16" width="196" height="42" rx="8" fill="#e3edf7" stroke="#527993" strokeWidth="1.4" />
      <text x="348" y="34" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#2f5a75">
        e = lim (1 + 1/n)ⁿ (n → ∞)
      </text>
      <text x="348" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#2f5a75">
        số e ẩn trong bảng logarithm của Napier!
      </text>
      <text x="20" y="134" fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        Chuẩn hóa N* = N/10⁷, L* = L/10⁷: N = 10⁷(1−10⁻⁷)^L trở thành N* = [(1−10⁻⁷)^10⁷]^L*
      </text>
      <text x="20" y="146" fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        → logarithm của Napier thực chất gần cơ số 1/e, dù ông chưa hề có khái niệm “cơ số”.
      </text>
    </svg>
    <figcaption className={CAP}>
      <strong className="font-bold text-stone-900">Hình T1.8</strong> Chặng cuối chương 1: khi chuẩn hóa lại hệ thức
      N = 10⁷(1−10⁻⁷)^L, biểu thức (1−10⁻⁷)^10⁷ lộ ra giá trị ≈ 0,36788 = 1/e. Napier đã đi sát cạnh số e mà không hề
      hay biết — phải một thế kỷ sau, e mới được nhận mặt như cơ số tự nhiên của logarithm.
    </figcaption>
  </figure>
);
