import React from 'react';

export const Figure17_1: React.FC = () => (
  <figure className="my-1">
    <div className="relative overflow-hidden rounded-sm border border-red-900/20 shadow-sm bg-stone-900 aspect-[16/10]">
      <img
        src="https://images.pexels.com/photos/5946002/pexels-photo-5946002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt="Thu hoạch mía để lên men sản xuất ethanol"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 right-2 bg-black/65 text-white text-[10px] px-2 py-0.5 rounded">
        Cây mía đường (Saccharum officinarum)
      </div>
    </div>
    <figcaption className="mt-2 text-xs leading-relaxed text-white/95 font-sans">
      <strong className="font-bold text-white">Hình 17.1</strong> Đường chiết xuất từ cây mía có thể được lên men với nấm men để tạo ra ethanol.
    </figcaption>
  </figure>
);

export const Figure17_2: React.FC = () => (
  <figure className="my-4 bg-white/80 p-3 rounded border border-stone-200/80">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center py-2 font-sans text-xs text-stone-800">
      {/* Propan-1-ol */}
      <div className="flex flex-col items-center justify-end h-full">
        <div className="py-6 font-mono text-[13px] tracking-tight whitespace-nowrap">
          H<sub>3</sub>C—CH<sub>2</sub>—CH<sub>2</sub>—OH
        </div>
        <div className="mt-1 font-semibold text-stone-900">propan-1-ol</div>
        <div className="text-[11px] text-stone-600">alcohol bậc một (primary)</div>
      </div>

      {/* Propan-2-ol */}
      <div className="flex flex-col items-center justify-end h-full">
        <div className="py-2 font-mono text-[13px] leading-tight flex flex-col items-center">
          <span>CH<sub>3</sub></span>
          <span>|</span>
          <span>H<sub>3</sub>C—CH—OH</span>
        </div>
        <div className="mt-1 font-semibold text-stone-900">propan-2-ol</div>
        <div className="text-[11px] text-stone-600">alcohol bậc hai (secondary)</div>
      </div>

      {/* 2-methylpropan-2-ol */}
      <div className="flex flex-col items-center justify-end h-full">
        <div className="py-1 font-mono text-[13px] leading-tight flex flex-col items-center">
          <span>CH<sub>3</sub></span>
          <span>|</span>
          <span>H<sub>3</sub>C—C—OH</span>
          <span>|</span>
          <span>CH<sub>3</sub></span>
        </div>
        <div className="mt-1 font-semibold text-stone-900">2-methylpropan-2-ol</div>
        <div className="text-[11px] text-stone-600">alcohol bậc ba (tertiary)</div>
      </div>
    </div>
    <figcaption className="mt-2 pt-2 border-t border-stone-100 text-xs leading-relaxed text-stone-700 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.2</strong> Lưu ý rằng việc đánh số chỉ vị trí của nhóm —OH trong phân tử alcohol luôn bắt đầu từ đầu nào của mạch carbon sao cho chỉ số vị trí là nhỏ nhất.
    </figcaption>
  </figure>
);

export const Figure17_3: React.FC = () => (
  <figure className="my-4">
    <div className="relative overflow-hidden rounded-sm border border-stone-300 bg-stone-900 aspect-[4/3]">
      <img
        src="https://images.pexels.com/photos/12377481/pexels-photo-12377481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt="Nhiên liệu sinh học Gasohol 95 pha trộn ethanol và xăng"
        className="w-full h-full object-cover opacity-85"
      />
      {/* Overlay recreating the Gasohol 95 flask badge shown in Figure 17.3 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex items-end justify-between p-3">
        <div className="bg-emerald-700/90 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
          E20 / BIO-ETHANOL
        </div>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-orange-600 to-red-700 border-2 border-white/80 shadow-lg flex flex-col items-center justify-center text-white text-center p-1">
          <span className="text-[9px] uppercase tracking-wider opacity-90">Biofuel</span>
          <span className="text-xs font-extrabold leading-tight drop-shadow">Gasohol 95</span>
        </div>
      </div>
    </div>
    <figcaption className="mt-1.5 text-xs leading-relaxed text-stone-700 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.3</strong> Nhiên liệu có tên gọi ‘gasohol’ là một hỗn hợp gồm ethanol và xăng.
    </figcaption>
  </figure>
);

export const Figure17_4: React.FC = () => (
  <figure className="my-3">
    <div className="rounded-sm overflow-hidden border border-rose-200 bg-[#d8d9f0] p-3 flex justify-center">
      <svg viewBox="0 0 320 270" className="w-full max-w-[290px] h-auto">
        <defs>
          <linearGradient id="bgLab" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9aa7e6" />
            <stop offset="75%" stopColor="#c7cef2" />
            <stop offset="75%" stopColor="#e8ebf7" />
            <stop offset="100%" stopColor="#d5d9ec" />
          </linearGradient>
          <linearGradient id="flaskLiquid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#efe8c8" />
            <stop offset="100%" stopColor="#d9cfa1" />
          </linearGradient>
        </defs>
        <rect width="320" height="270" fill="url(#bgLab)" rx="4" />

        {/* Tripod & Gauze under pear-shaped flask */}
        <line x1="25" y1="215" x2="155" y2="215" stroke="#2c2d35" strokeWidth="5" />
        <line x1="40" y1="215" x2="32" y2="265" stroke="#23242a" strokeWidth="5" />
        <line x1="140" y1="215" x2="148" y2="265" stroke="#23242a" strokeWidth="5" />
        <ellipse cx="90" cy="212" rx="46" ry="6" fill="#f4f5f8" stroke="#adb2c4" strokeWidth="1.5" />

        {/* Clamp holding neck */}
        <rect x="0" y="102" width="68" height="10" fill="#5b3426" rx="2" />
        <rect x="65" y="97" width="38" height="7" fill="#6b3e2e" rx="3" />
        <rect x="65" y="109" width="38" height="7" fill="#6b3e2e" rx="3" />

        {/* Pear-shaped flask (Bình cầu đáy lê) */}
        <path
          d="M 80 35 L 80 125 C 58 140, 58 172, 90 208 C 122 172, 122 140, 100 125 L 100 35 Z"
          fill="rgba(255,255,255,0.45)"
          stroke="#ffffff"
          strokeWidth="2"
        />
        {/* Reaction mixture + white NaBr solid in pear-shaped flask */}
        <path
          d="M 67 162 C 69 178, 78 194, 90 206 C 102 194, 111 178, 113 162 Z"
          fill="url(#flaskLiquid)"
        />
        {/* White solid NaBr crystals at bottom */}
        <path
          d="M 79 192 C 84 199, 87 204, 90 206 C 93 204, 96 199, 101 192 Z"
          fill="#ffffff"
        />

        {/* Ground glass stopper at top */}
        <rect x="81" y="20" width="18" height="22" fill="rgba(255,255,255,0.75)" stroke="#e2e6f5" strokeWidth="1.5" rx="2" />

        {/* Side arm & distillation condenser tube */}
        <path
          d="M 100 72 Q 128 70, 155 82 L 262 212"
          fill="none"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M 100 72 Q 128 70, 155 82 L 262 212"
          fill="none"
          stroke="#9aa8d8"
          strokeWidth="3"
        />
        {/* Condenser jacket */}
        <path
          d="M 145 77 L 235 178"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Receiving Beaker on right stand */}
        <rect x="200" y="230" width="105" height="6" fill="#474c5e" />
        <rect x="218" y="150" width="72" height="78" fill="rgba(255,255,255,0.4)" stroke="#ffffff" strokeWidth="2" rx="2" />
        {/* Water in beaker */}
        <rect x="220" y="182" width="68" height="44" fill="rgba(165, 195, 245, 0.55)" />
        <ellipse cx="254" cy="182" rx="34" ry="3.5" fill="rgba(255,255,255,0.7)" />
        {/* Oily droplets of bromoethane under water */}
        <ellipse cx="258" cy="221" rx="14" ry="4" fill="rgba(255,255,255,0.85)" stroke="#8898c8" strokeWidth="1" />
        <circle cx="242" cy="222" r="3.5" fill="rgba(255,255,255,0.85)" stroke="#8898c8" strokeWidth="1" />

        {/* Vietnamese callout labels */}
        <text x="88" y="232" textAnchor="middle" fill="#1e293b" fontSize="9.5" fontWeight="600">
          NaBr(r) + H₂SO₄ + C₂H₅OH
        </text>
        <text x="254" y="246" textAnchor="middle" fill="#1e293b" fontSize="9.5" fontWeight="600">
          Giọt dầu C₂H₅Br dưới nước
        </text>
      </svg>
    </div>
    <figcaption className="mt-2 text-xs leading-relaxed text-stone-700 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.4</strong> Bromoethane đang được chưng cất tách ra sau phản ứng giữa ethanol và hydrogen bromide. Chất rắn màu trắng nhìn thấy trong bình cầu đáy lê là sodium bromide (dạng tinh thể). Sodium bromide phản ứng với sulfuric acid đặc để tạo ra lượng hydrogen bromide cần thiết cho phản ứng.
    </figcaption>
  </figure>
);

export const Figure17_5: React.FC = () => (
  <figure className="my-4">
    <div className="rounded-sm overflow-hidden border border-stone-300 bg-gradient-to-b from-stone-200 via-stone-100 to-amber-800/80 p-4 flex justify-center">
      <svg viewBox="0 0 280 260" className="w-full max-w-[260px] h-auto">
        <defs>
          <radialGradient id="pinkPlume" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#d91b73" stopOpacity="0.88" />
            <stop offset="55%" stopColor="#e85297" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f48fb1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Wooden bench surface */}
        <rect x="0" y="210" width="280" height="50" fill="#9c5227" />
        <rect x="0" y="210" width="280" height="6" fill="#7c3d18" />

        {/* Glass Beaker */}
        <path
          d="M 55 25 L 62 212 C 62 222, 218 222, 218 212 L 225 25"
          fill="rgba(255,255,255,0.45)"
          stroke="#78716c"
          strokeWidth="3"
        />
        {/* Beaker top rim & spout */}
        <path
          d="M 52 25 Q 115 30, 128 38 Q 140 30, 228 25"
          fill="none"
          stroke="#57534e"
          strokeWidth="3.5"
        />

        {/* Ethanol liquid level */}
        <path
          d="M 60 95 L 62 210 C 62 218, 218 218, 218 210 L 220 95 Z"
          fill="rgba(245, 240, 235, 0.65)"
        />
        <ellipse cx="140" cy="95" rx="80" ry="6" fill="rgba(231, 215, 221, 0.85)" stroke="#a8a29e" strokeWidth="1.2" />

        {/* Pink phenolphthalein trail rising from sodium */}
        <ellipse cx="142" cy="158" rx="34" ry="48" fill="url(#pinkPlume)" />
        <ellipse cx="148" cy="175" rx="26" ry="24" fill="url(#pinkPlume)" />
        <ellipse cx="138" cy="100" rx="32" ry="7" fill="#c83e7b" fillOpacity="0.45" />

        {/* Piece of reacting Sodium at bottom */}
        <ellipse cx="142" cy="202" rx="12" ry="6" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1.5" />

        {/* Hydrogen gas bubbles */}
        {[
          [140, 192, 2.2],
          [146, 184, 1.8],
          [137, 175, 2.5],
          [143, 164, 2.0],
          [139, 150, 2.2],
          [147, 138, 1.7],
          [135, 125, 2.3],
          [142, 112, 2.0],
          [145, 102, 1.8],
        ].map(([cx, cy, r], idx) => (
          <circle key={idx} cx={cx} cy={cy} r={r} fill="#ffffff" stroke="#be185d" strokeWidth="0.6" />
        ))}

        {/* White measurement markings on beaker (75, 50, 25) */}
        <line x1="60" y1="95" x2="72" y2="95" stroke="#ffffff" strokeWidth="2.5" />
        <text x="76" y="100" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="sans-serif">75</text>

        <line x1="61" y1="138" x2="73" y2="138" stroke="#ffffff" strokeWidth="2.5" />
        <text x="76" y="143" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="sans-serif">50</text>

        <line x1="62" y1="180" x2="74" y2="180" stroke="#ffffff" strokeWidth="2.5" />
        <text x="76" y="185" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="sans-serif">25</text>
      </svg>
    </div>
    <figcaption className="mt-1.5 text-xs leading-relaxed text-stone-700 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.5</strong> Sodium phản ứng với ethanol. Màu hồng xuất hiện là do chất chỉ thị phenolphthalein không màu được thêm vào ethanol, cho thấy tính base của sodium ethoxide tạo thành.
    </figcaption>
  </figure>
);

export const Figure17_6: React.FC = () => (
  <figure className="my-2">
    <div className="relative overflow-hidden rounded-sm border border-rose-200 aspect-[4/3] bg-stone-100">
      <img
        src="https://images.pexels.com/photos/5062728/pexels-photo-5062728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Ester tạo hương thơm trong nước hoa"
        className="w-full h-full object-cover"
      />
    </div>
    <figcaption className="mt-1.5 text-xs leading-relaxed text-stone-800 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.6</strong> Các ester góp phần tạo nên hỗn hợp phức tạp của các hợp chất thơm được pha trộn trong nước hoa.
    </figcaption>
  </figure>
);

export const Figure17_7: React.FC = () => (
  <figure className="my-3 bg-white p-3 rounded border border-stone-200">
    <svg viewBox="0 0 380 245" className="w-full h-auto">
      {/* Bench base */}
      <rect x="12" y="218" width="356" height="18" fill="#f3e8ab" stroke="#57534e" strokeWidth="1" />

      {/* Horizontal boiling tube */}
      <path
        d="M 140 120 L 38 120 C 26 120, 26 144, 38 144 L 140 144"
        fill="none"
        stroke="#44403c"
        strokeWidth="1.8"
      />
      {/* Ceramic wool soaked in ethanol at left end */}
      <ellipse cx="42" cy="132" rx="10" ry="9" fill="#d6d3d1" stroke="#78716c" strokeWidth="1" strokeDasharray="2 1" />
      {/* Pumice / Al2O3 catalyst granules in middle */}
      {[
        [82, 138], [90, 137], [98, 138], [106, 138],
        [86, 133], [94, 133], [102, 134], [91, 129], [98, 129]
      ].map(([cx, cy], idx) => (
        <ellipse key={idx} cx={cx} cy={cy} rx="4.2" ry="2.6" fill="#e6c699" stroke="#a67c52" strokeWidth="0.8" />
      ))}

      {/* Rubber bung / cork */}
      <polygon points="134,118 152,121 152,143 134,146" fill="#d9a074" stroke="#78350f" strokeWidth="1.2" />

      {/* Heat arrow */}
      <defs>
        <marker id="heatArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <polygon points="0,0 8,4 0,8" fill="#ef4444" />
        </marker>
      </defs>
      <line x1="94" y1="182" x2="94" y2="152" stroke="#ef4444" strokeWidth="3.5" markerEnd="url(#heatArrow)" />
      <text x="94" y="196" textAnchor="middle" fill="#1c1917" fontSize="11" fontWeight="600">
        đun nóng (heat)
      </text>

      {/* Labels with pointer lines */}
      <text x="45" y="72" fill="#1c1917" fontSize="10.5">bông gốm tẩm</text>
      <text x="45" y="85" fill="#1c1917" fontSize="10.5">ethanol</text>
      <line x1="58" y1="90" x2="43" y2="125" stroke="#44403c" strokeWidth="1" />

      <text x="115" y="98" fill="#1c1917" fontSize="10.5">đá bọt (pumice)</text>
      <line x1="122" y1="103" x2="98" y2="131" stroke="#44403c" strokeWidth="1" />

      {/* Water trough */}
      <polyline points="205,165 205,218 335,218 335,165" fill="none" stroke="#44403c" strokeWidth="1.6" />
      <rect x="206" y="177" width="128" height="40" fill="#d8eff8" />
      <line x1="206" y1="177" x2="334" y2="177" stroke="#0284c7" strokeWidth="1" />

      {/* Inverted test tube collecting ethene gas */}
      <path
        d="M 288 212 L 288 122 C 288 112, 306 112, 306 122 L 306 212"
        fill="rgba(255,255,255,0.75)"
        stroke="#44403c"
        strokeWidth="1.6"
      />
      {/* Water inside inverted test tube (lowerhalf) */}
      <rect x="289" y="155" width="16" height="56" fill="#bce3f5" />
      <line x1="289" y1="155" x2="305" y2="155" stroke="#0284c7" strokeWidth="1" />

      {/* Delivery tube */}
      <path
        d="M 142 132 L 185 132 L 286 213 C 292 217, 297 215, 297 207"
        fill="none"
        stroke="#44403c"
        strokeWidth="3.2"
      />
      <path
        d="M 142 132 L 185 132 L 286 213 C 292 217, 297 215, 297 207"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />

      {/* Label for ethene gas */}
      <text x="242" y="106" fill="#1c1917" fontSize="10.5">khí ethene thu được</text>
      <text x="242" y="119" fill="#1c1917" fontSize="10.5">bằng cách đẩy nước</text>
      <line x1="278" y1="123" x2="296" y2="136" stroke="#44403c" strokeWidth="1" />
    </svg>
    <figcaption className="mt-1.5 text-xs leading-relaxed text-stone-700 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.7</strong> Phản ứng tách nước của ethanol tạo thành khí ethene.
    </figcaption>
  </figure>
);

export const Figure17_8: React.FC = () => (
  <figure className="my-3">
    <div className="rounded-sm bg-[#ede8e6] border border-rose-200 p-4 flex justify-center">
      <svg viewBox="0 0 300 250" className="w-full max-w-[280px] h-auto">
        {[
          {
            x: 32,
            name: 'Propan-1-ol',
            sub: '(alcohol bậc một)',
            liquidTop: '#3f4a28',
            liquidBottom: '#1c2410',
          },
          {
            x: 122,
            name: 'Propan-2-ol',
            sub: '(alcohol bậc hai)',
            liquidTop: '#424d2b',
            liquidBottom: '#1e2612',
          },
          {
            x: 212,
            name: '2-methylpropan-2-ol',
            sub: '(alcohol bậc ba)',
            liquidTop: '#f59e0b',
            liquidBottom: '#d97706',
          },
        ].map((tube, idx) => (
          <g key={idx}>
            <defs>
              <linearGradient id={`tubeGrad${idx}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={tube.liquidTop} />
                <stop offset="100%" stopColor={tube.liquidBottom} />
              </linearGradient>
            </defs>
            {/* Glass Test Tube Outline */}
            <path
              d={`M ${tube.x} 10 L ${tube.x} 205 C ${tube.x} 238, ${tube.x + 56} 238, ${tube.x + 56} 205 L ${tube.x + 56} 10`}
              fill="rgba(255,255,255,0.65)"
              stroke="#a8a29e"
              strokeWidth="2"
            />
            {/* Liquid inside bottom of tube */}
            <path
              d={`M ${tube.x + 1.5} 152 L ${tube.x + 1.5} 205 C ${tube.x + 1.5} 235, ${tube.x + 54.5} 235, ${tube.x + 54.5} 205 L ${tube.x + 54.5} 152 Z`}
              fill={`url(#tubeGrad${idx})`}
            />
            <ellipse
              cx={tube.x + 28}
              cy={152}
              rx={26.5}
              ry={3.5}
              fill={tube.liquidTop}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />
            {/* Vertical Rectangular Label on Tube */}
            <rect
              x={tube.x + 6}
              y={26}
              width={44}
              height={112}
              fill="#fafaf9"
              stroke="#44403c"
              strokeWidth="1.2"
            />
            <rect
              x={tube.x + 9}
              y={29}
              width={38}
              height={106}
              fill="none"
              stroke="#57534e"
              strokeWidth="0.8"
            />
            {/* Rotated vertical text matching Figure 17.8 */}
            <g transform={`translate(${tube.x + 26}, 82) rotate(-90)`}>
              <text x="0" y="-2" textAnchor="middle" fill="#1c1917" fontSize="9.5" fontWeight="700">
                {tube.name}
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#44403c" fontSize="8" fontWeight="600">
                {tube.sub}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
    <figcaption className="mt-2 text-xs leading-relaxed text-stone-800 font-sans">
      <strong className="font-bold text-stone-900">Hình 17.8</strong> Trước khi đun ấm với các alcohol được dán nhãn, mỗi ống nghiệm này đều chứa dung dịch potassium dichromate(VI) màu da cam trong môi trường acid. Sau khi đun ấm, các ion dichromate(VI) màu da cam đã bị khử thành ion chromium(III) màu xanh lục bởi alcohol bậc một và alcohol bậc hai. Điều này chứng tỏ cả alcohol bậc một và bậc hai đều đã bị oxi hóa, nhưng alcohol bậc ba (2-methylpropan-2-ol) thì không phản ứng.
    </figcaption>
  </figure>
);
