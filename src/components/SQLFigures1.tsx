import React from 'react';

/* ==========================================================================
   SQL — CHƯƠNG 1: DATABASES AND TABLES (Head First SQL, 2nd Edition)
   Hình vẽ lại + khối mã + cửa sổ console (biên soạn trung thực theo sách)
   ========================================================================== */

export const SQL_CAP = 'mt-2 text-xs leading-relaxed text-stone-700 font-sans';

/* ---------- khối mã SQL ---------- */
export const SQLCode: React.FC<{ code: string; title?: string }> = ({ code, title }) => (
  <div className="my-3 rounded-md overflow-hidden border border-stone-300 shadow-2xs">
    {title && (
      <div className="bg-stone-200 px-3 py-1.5 text-[11px] font-sans font-bold text-stone-600 uppercase tracking-wider">
        {title}
      </div>
    )}
    <pre className="bg-[#0f2733] text-[#d7e8f2] px-4 py-3 text-[12.5px] leading-relaxed font-mono overflow-x-auto whitespace-pre">
      {code}
    </pre>
  </div>
);

/* ---------- cửa sổ console MySQL ---------- */
export const SQLConsole: React.FC<{ lines: Array<{ t: string; kind?: 'cmd' | 'out' | 'err' }> }> = ({ lines }) => (
  <div className="my-3 rounded-md overflow-hidden border border-stone-400 shadow-sm">
    <div className="bg-white px-3 py-1.5 text-[11px] font-sans font-bold text-stone-700 border-b border-stone-300">
      SQL RDBMS console
    </div>
    <div className="bg-[#4d4d4d] px-4 py-3 font-mono text-[12px] leading-relaxed">
      {lines.map((l, i) => (
        <div key={i} className={l.kind === 'cmd' ? 'text-white' : l.kind === 'err' ? 'text-[#ffb4a8]' : 'text-[#e6e6e6]'}>
          {l.kind === 'cmd' ? <span className="text-[#9fd3ff]">mysql&gt; </span> : null}
          {l.t}
        </div>
      ))}
    </div>
  </div>
);

/* ==========================================================================
   Hình S1.1 — Dữ liệu hỗn độn của Abby → trật tự cơ sở dữ liệu
========================================================================== */
export const FigSQL_Messy: React.FC = () => (
  <figure className="my-3">
    <div className="relative overflow-hidden rounded-md border border-stone-300 shadow-sm bg-[#fdf6ec]">
      <svg viewBox="0 0 460 170" className="w-full" role="img" aria-label="Ghi chú hỗn độn thành bảng trật tự">
        {/* đống giấy ghi chú */}
        <g fontFamily="sans-serif">
          {[
            [18, 26, -8, 'Boston! ngân sách $2.000?'],
            [40, 62, 5, 'Rome — Ý, trời ấm, tàu hỏa'],
            [12, 96, -4, 'Bangkok: ẩm thực, chợ nổi…'],
            [52, 124, 7, 'Sydney $4.000 máy bay'],
            [86, 40, 3, 'Newport (USA) đi xe?'],
            [92, 100, -6, 'Cape Town, Nam Phi!!'],
          ].map(([x, y, r, t], i) => (
            <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
              <rect width="112" height="26" rx="2" fill={i % 2 ? '#fff8c4' : '#ffe9a8'} stroke="#d9b23c" strokeWidth="0.8" />
              <text x="6" y="17" fontSize="7.6" fill="#6b5410">{t as string}</text>
            </g>
          ))}
          <text x="100" y="164" textAnchor="middle" fontSize="9" fill="#8a6d1a" fontWeight="700">
            sổ tay + mẩu giấy của Abby: quá tải, không tìm lại được!
          </text>
        </g>
        {/* mũi tên */}
        <defs>
          <marker id="sqlArrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#00758f" />
          </marker>
        </defs>
        <path d="M212 85 Q 236 60 258 80" fill="none" stroke="#00758f" strokeWidth="2" markerEnd="url(#sqlArrow1)" />
        <text x="235" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#00758f" fontWeight="700">
          đưa vào CSDL quan hệ
        </text>
        {/* bảng trật tự */}
        <g transform="translate(268 22)" fontFamily="monospace">
          <rect width="176" height="18" fill="#00758f" />
          <text x="10" y="12.5" fontSize="8.6" fill="#fff" fontWeight="700">city</text>
          <text x="66" y="12.5" fontSize="8.6" fill="#fff" fontWeight="700">country</text>
          <text x="122" y="12.5" fontSize="8.6" fill="#fff" fontWeight="700">budget</text>
          {[
            ['Boston', 'USA', '2000'],
            ['Rome', 'Italy', '2500'],
            ['Bangkok', 'Thailand', '1500'],
            ['Sydney', 'Australia', '4000'],
          ].map((r, i) => (
            <g key={i}>
              <rect y={18 + i * 16} width="176" height="16" fill={i % 2 ? '#f2f8fa' : '#fff'} stroke="#b8d4dc" strokeWidth="0.6" />
              <text x="10" y={29.5 + i * 16} fontSize="8" fill="#263238">{r[0]}</text>
              <text x="66" y={29.5 + i * 16} fontSize="8" fill="#263238">{r[1]}</text>
              <text x="122" y={29.5 + i * 16} fontSize="8" fill="#263238">{r[2]}</text>
            </g>
          ))}
          <text x="88" y="102" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#00556b" fontWeight="700">
            bảng (table): hàng = bản ghi, cột = danh mục
          </text>
          <text x="88" y="114" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#57534e">
            tìm gì cũng thấy, đúng lúc cần
          </text>
        </g>
      </svg>
    </div>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.1</strong> Abby đã tích lũy một bộ sưu tập sổ tay và mẩu giấy
      ghi chuyến đi — lớn tới mức không tìm nổi chi tiết nào. Cơ sở dữ liệu chính là “ngôi nhà số” đưa mớ hỗn độn
      ấy vào khuôn khổ logic: mỗi danh mục thông tin thành một cột, mỗi chuyến đi thành một hàng.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.2 — Dán nhãn danh mục lên mẩu ghi chú
========================================================================== */
export const FigSQL_Categories: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 120" className="w-full" role="img" aria-label="Danh mục dữ liệu thành cột">
      {[
        ['city', 'Sydney'],
        ['country', 'Australia'],
        ['budget', '$4,000'],
        ['weather', 'warm'],
        ['travel_mode', 'plane'],
        ['travel_hours', '20'],
        ['activities', 'surfing'],
        ['attractions', 'Opera House'],
      ].map(([lab, val], i) => {
        const x = 6 + i * 57;
        return (
          <g key={lab} fontFamily="sans-serif">
            <rect x={x} y={14} width="53" height="16" rx="3" fill="#00758f" />
            <text x={x + 26.5} y={25.5} textAnchor="middle" fontSize="7.6" fill="#fff" fontWeight="700" fontFamily="monospace">
              {lab}
            </text>
            <rect x={x} y={34} width="53" height="30" rx="2" fill="#fff8c4" stroke="#d9b23c" strokeWidth="0.8" transform={`rotate(${i % 2 ? 2 : -2} ${x + 26} 49)`} />
            <text x={x + 26.5} y={52} textAnchor="middle" fontSize="7.4" fill="#6b5410" transform={`rotate(${i % 2 ? 2 : -2} ${x + 26} 49)`}>
              {val}
            </text>
            <line x1={x + 26.5} y1={30} x2={x + 26.5} y2={34} stroke="#90a4ae" strokeWidth="1" />
          </g>
        );
      })}
      <text x="230" y="86" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        Tưởng tượng cắt trang sổ tay của Abby rồi trải ngang: mỗi mẩu thông tin nhận một NHÃN danh mục phía trên —
      </text>
      <text x="230" y="99" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#57534e">
        các nhãn ấy chính là tên CỘT (column) của bảng; lặp lại với mọi ghi chú ta được các HÀNG (row).
      </text>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.2</strong> Từ ghi chú rời rạc tới bảng: dán nhãn danh mục
      (city, country, budget, weather, travel_mode, travel_hours, activities, attractions) lên từng mẩu thông tin của
      ghi chú về Sydney — đây chính là bài tập “Sharpen your pencil” của sách.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.3 — Giải phẫu bảng: cột / hàng / ô
========================================================================== */
export const FigSQL_Anatomy: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 190" className="w-full" role="img" aria-label="Giải phẫu một bảng SQL">
      <defs>
        <marker id="sqlArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#c62828" />
        </marker>
      </defs>
      <text x="150" y="14" textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" fill="#00556b">
        city_list
      </text>
      <g transform="translate(40 22)" fontFamily="monospace">
        <rect width="220" height="20" fill="#00758f" />
        <text x="14" y="14" fontSize="10" fill="#fff" fontWeight="700">city</text>
        <text x="124" y="14" fontSize="10" fill="#fff" fontWeight="700">country</text>
        {[
          ['Boston', 'USA'],
          ['Rome', 'Italy'],
          ['Bangkok', 'Thailand'],
          ['Newport', 'USA'],
          ['Cape Town', 'South Africa'],
          ['Sydney', 'Australia'],
        ].map((r, i) => (
          <g key={i}>
            <rect y={20 + i * 18} width="220" height="18" fill={i === 5 ? '#ffe082' : i % 2 ? '#f2f8fa' : '#fff'} stroke="#b8d4dc" strokeWidth="0.7" />
            <text x="14" y={33 + i * 18} fontSize="9.5" fill="#263238">{r[0]}</text>
            <text x="124" y={33 + i * 18} fontSize="9.5" fill="#263238">{r[1]}</text>
          </g>
        ))}
        {/* khoanh cột */}
        <rect x="2" y="2" width="108" height="124" fill="none" stroke="#c62828" strokeWidth="1.6" strokeDasharray="5 3" />
        {/* khoanh hàng */}
        <rect x="2" y={20 + 5 * 18} width="216" height="18" fill="none" stroke="#2e7d32" strokeWidth="1.8" />
        {/* ô */}
        <rect x="112" y={20 + 2 * 18} width="106" height="18" fill="none" stroke="#5c2d75" strokeWidth="1.8" />
      </g>
      <g fontFamily="sans-serif" fontSize="9">
        <path d="M95 20 Q 95 8 130 10" fill="none" stroke="#c62828" strokeWidth="1.3" markerEnd="url(#sqlArrow2)" />
        <text x="136" y="12" fill="#c62828" fontWeight="700">CỘT (column) = một danh mục thông tin</text>
        <text x="136" y="23" fill="#c62828">còn gọi là FIELD; vd cột city: plane, train, car…</text>
        <path d="M262 130 Q 300 130 312 118" fill="none" stroke="#2e7d32" strokeWidth="1.3" markerEnd="url(#sqlArrow2)" />
        <text x="318" y="112" fill="#2e7d32" fontWeight="700">HÀNG (row) = một bản ghi (record)</text>
        <text x="318" y="123" fill="#2e7d32">toàn bộ thông tin về MỘT đối tượng:</text>
        <text x="318" y="134" fill="#2e7d32">Sydney, Australia, $4,000, warm, plane</text>
        <path d="M212 78 Q 260 60 310 66" fill="none" stroke="#5c2d75" strokeWidth="1.3" markerEnd="url(#sqlArrow2)" />
        <text x="318" y="62" fill="#5c2d75" fontWeight="700">Ô (cell) = một GIÁ TRỊ (value)</text>
        <text x="318" y="73" fill="#5c2d75">giao của một hàng và một cột</text>
        <text x="20" y="176" fill="#57534e">
          Bảng city_list: 2 cột × 6 hàng. Mỗi cột một danh mục; mỗi hàng một thành phố Abby muốn tới.
        </text>
      </g>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.3</strong> Giải phẫu bảng SQL: <strong>cột</strong> (column
      / field) là một danh mục thông tin; <strong>hàng</strong> (row / record) chứa trọn vẹn thông tin về một cá thể;
      mỗi <strong>ô</strong> là một giá trị. Hàng Sydney trong bảng du lịch đầy đủ sẽ là: Sydney, Australia, $4,000,
      warm, plane.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.4 — Cơ sở dữ liệu chứa các bảng liên quan
========================================================================== */
export const FigSQL_DbHierarchy: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 150" className="w-full" role="img" aria-label="Cơ sở dữ liệu chứa các bảng">
      <defs>
        <linearGradient id="dbCyl1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4db6c9" />
          <stop offset="1" stopColor="#00758f" />
        </linearGradient>
      </defs>
      {/* cylinder travel_db */}
      <g transform="translate(60 30)">
        <path d="M0 12 a40 12 0 0 1 80 0 v60 a40 12 0 0 1 -80 0 z" fill="url(#dbCyl1)" />
        <ellipse cx="40" cy="12" rx="40" ry="12" fill="#7fd4e3" />
        <text x="40" y="52" textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill="#fff" fontWeight="700">travel_db</text>
        <text x="40" y="66" textAnchor="middle" fontFamily="sans-serif" fontSize="7.6" fill="#e0f7fa">database</text>
      </g>
      {/* tables inside */}
      <g transform="translate(170 26)" fontFamily="monospace">
        <rect width="92" height="16" fill="#00758f" />
        <text x="8" y="11.5" fontSize="8.4" fill="#fff" fontWeight="700">locations</text>
        <rect y="16" width="92" height="34" fill="#fff" stroke="#b8d4dc" strokeWidth="0.7" />
        <text x="8" y="28" fontSize="7.6" fill="#37474f">city · country · budget</text>
        <text x="8" y="40" fontSize="7.6" fill="#37474f">weather · travel_mode…</text>
        <g transform="translate(0 62)">
          <rect width="92" height="16" fill="#00758f" />
          <text x="8" y="11.5" fontSize="8.4" fill="#fff" fontWeight="700">city_list</text>
          <rect y="16" width="92" height="22" fill="#fff" stroke="#b8d4dc" strokeWidth="0.7" />
          <text x="8" y="30" fontSize="7.6" fill="#37474f">city · country</text>
        </g>
      </g>
      <path d="M100 62 Q 135 40 166 36" fill="none" stroke="#546e7a" strokeWidth="1.3" strokeDasharray="4 3" />
      <path d="M100 74 Q 135 96 166 102" fill="none" stroke="#546e7a" strokeWidth="1.3" strokeDasharray="4 3" />
      {/* db khác */}
      <g transform="translate(330 30)">
        <path d="M0 12 a36 11 0 0 1 72 0 v52 a36 11 0 0 1 -72 0 z" fill="#90a4ae" />
        <ellipse cx="36" cy="12" rx="36" ry="11" fill="#cfd8dc" />
        <text x="36" y="46" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="#fff" fontWeight="700">shopping_db</text>
        <text x="36" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="7.4" fill="#eceff1">coffee_purchases · stores…</text>
      </g>
      <g fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        <text x="20" y="132">Một database là CONTAINER giữ nhiều bảng LIÊN QUAN nhau ở cùng một nơi,</text>
        <text x="20" y="144">dễ liên kết chúng với nhau; hai database khác nhau được phép có bảng trùng tên.</text>
      </g>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.4</strong> Database là vật chứa: mọi bảng phải thuộc một
      database; các bảng trong cùng database nên liên quan nhau (như locations và city_list cùng phục vụ ghi chú du
      lịch của Abby). Tên database và tên bảng phải duy nhất trong hệ thống — trùng tên sẽ báo lỗi.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.5 — Giải phẫu lệnh CREATE DATABASE / USE
========================================================================== */
export const FigSQL_FirstCommands: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 150" className="w-full" role="img" aria-label="Giải phẫu lệnh CREATE DATABASE và USE">
      <defs>
        <marker id="sqlArrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#546e7a" />
        </marker>
      </defs>
      <rect x="60" y="16" width="250" height="24" rx="3" fill="#eceff1" stroke="#b0bec5" />
      <text x="70" y="32.5" fontFamily="monospace" fontSize="13" fill="#263238" fontWeight="700">CREATE DATABASE travel_db;</text>
      <g fontFamily="sans-serif" fontSize="8.4" fill="#546e7a">
        <path d="M120 42 Q 110 58 96 62" fill="none" stroke="#546e7a" strokeWidth="1.1" markerEnd="url(#sqlArrow3)" />
        <text x="30" y="74">CREATE DATABASE</text>
        <text x="30" y="84">là CÂU LỆNH (command)</text>
        <path d="M250 42 Q 262 58 276 62" fill="none" stroke="#546e7a" strokeWidth="1.1" markerEnd="url(#sqlArrow3)" />
        <text x="282" y="74">travel_db là TÊN database</text>
        <text x="282" y="84">(chữ thường, không dấu cách)</text>
        <path d="M306 30 Q 340 24 352 34" fill="none" stroke="#c62828" strokeWidth="1.2" markerEnd="url(#sqlArrow3)" />
        <text x="356" y="30" fill="#c62828" fontWeight="700">kết thúc bằng DẤU CHẤM PHẨY ;</text>
        <text x="356" y="40" fill="#c62828">MySQL bắt buộc; thiếu → console “treo” chờ thêm</text>
      </g>
      {/* console */}
      <g transform="translate(60 96)">
        <rect width="340" height="14" fill="#fff" stroke="#90a4ae" strokeWidth="0.8" />
        <text x="6" y="10" fontFamily="sans-serif" fontSize="7.6" fill="#37474f" fontWeight="700">SQL RDBMS console</text>
        <rect y="14" width="340" height="34" fill="#4d4d4d" />
        <text x="8" y="27" fontFamily="monospace" fontSize="8.6" fill="#9fd3ff">mysql&gt; <tspan fill="#fff">CREATE DATABASE travel_db;</tspan></text>
        <text x="8" y="40" fontFamily="monospace" fontSize="8.6" fill="#e6e6e6">Query OK, 1 row affected (0.04 sec)</text>
        <text x="8" y="52" fontFamily="monospace" fontSize="8.6" fill="#9fd3ff">mysql&gt; <tspan fill="#fff">USE travel_db;</tspan>   <tspan fill="#e6e6e6">→ Database changed</tspan></text>
      </g>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.5</strong> Hai lệnh đầu tiên: <code className="font-mono">CREATE
      DATABASE travel_db;</code> tạo database (RDBMS đáp “Query OK, 1 row affected”), rồi <code className="font-mono">USE
      travel_db;</code> bảo RDBMS chuyển vào làm việc bên trong nó (“Database changed”). Mỗi thời điểm chỉ USE một
      database; mọi bảng tạo sau đó nằm trong database đang dùng.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.6 — Giải phẫu CREATE TABLE (chú giải từng dòng)
========================================================================== */
const CT_LINES: Array<[string, string]> = [
  ['CREATE TABLE locations', 'tạo bảng mới tên locations trong database đang dùng'],
  ['(', 'mở ngoặc đơn chứa danh sách cột'],
  ['city VARCHAR(25),', 'cột city: văn bản tối đa 25 ký tự; phẩy ngăn cách các cột'],
  ['country VARCHAR(20),', 'cột country: văn bản tối đa 20 ký tự'],
  ['budget INTEGER,', 'cột budget: số nguyên (không thập phân)'],
  ['weather VARCHAR(25),', 'cột weather: mô tả thời tiết'],
  ['travel_mode VARCHAR(10),', 'cột travel_mode: phương tiện (plane, train…)'],
  ['travel_hours INTEGER,', 'cột travel_hours: số giờ di chuyển'],
  ['activities VARCHAR(100),', 'cột activities: hoạt động dự kiến'],
  ['attractions VARCHAR(100)', 'cột cuối KHÔNG có phẩy'],
  [');', 'đóng ngoặc + chấm phẩy kết thúc lệnh'],
];

export const FigSQL_CreateTableAnatomy: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <div className="grid md:grid-cols-2 gap-3 items-start">
      <pre className="bg-[#0f2733] text-[#d7e8f2] rounded-md px-3.5 py-3 text-[11.5px] leading-[1.65] font-mono overflow-x-auto">
        {`CREATE TABLE locations
(
  city VARCHAR(25),
  country VARCHAR(20),
  budget INTEGER,
  weather VARCHAR(25),
  travel_mode VARCHAR(10),
  travel_hours INTEGER,
  activities VARCHAR(100),
  attractions VARCHAR(100)
);`}
      </pre>
      <div className="font-sans text-[11px] space-y-1">
        {CT_LINES.map(([c, d], i) => (
          <div key={i} className="flex gap-2 items-baseline border-b border-stone-200 pb-1">
            <span className="font-mono font-bold text-[#00556b] shrink-0 w-[46%] truncate">{c}</span>
            <span className="text-stone-600">{d}</span>
          </div>
        ))}
      </div>
    </div>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.6</strong> Giải phẫu lệnh <code className="font-mono">CREATE
      TABLE</code> (Example 1-1 của sách): tên bảng → ngoặc đơn → danh sách “tên cột + KIỂU DỮ LIỆU” ngăn bằng phẩy
      (cột cuối không phẩy) → đóng ngoặc + chấm phẩy. Viết hoa lệnh, viết thường tên — chỉ để dễ đọc, vì bản thân SQL
      không phân biệt hoa/thường.
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.7 — Ba bước tạo bảng + ba kiểu dữ liệu chính
========================================================================== */
export const FigSQL_Steps: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 96" className="w-full" role="img" aria-label="Ba bước tạo bảng SQL">
      <defs>
        <marker id="sqlArrow4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#00758f" />
        </marker>
      </defs>
      {[
        ['1', 'CREATE DATABASE ten_db;', 'tạo database chứa bảng (nếu chưa có)'],
        ['2', 'USE ten_db;', 'chuyển RDBMS vào database đó'],
        ['3', 'CREATE TABLE ten_bang (…);', 'đặt tên bảng + khai báo cột & kiểu dữ liệu'],
      ].map(([n, c, d], i) => {
        const x = 10 + i * 152;
        return (
          <g key={n} fontFamily="sans-serif">
            <rect x={x} y={10} width="140" height="66" rx="8" fill={i === 2 ? '#e0f2f6' : '#f6f4ee'} stroke={i === 2 ? '#00758f' : '#b0a88f'} strokeWidth="1.3" />
            <circle cx={x + 16} cy={26} r="9" fill="#00758f" />
            <text x={x + 16} y={29.5} textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800">{n}</text>
            <text x={x + 32} y={29} fontFamily="monospace" fontSize="8.6" fill="#00556b" fontWeight="700">{c}</text>
            <text x={x + 10} y={48} fontSize="7.8" fill="#57534e">{d}</text>
            {i < 2 && <path d={`M${x + 142} 43 L${x + 150} 43`} stroke="#00758f" strokeWidth="1.6" markerEnd="url(#sqlArrow4)" />}
          </g>
        );
      })}
      <text x="230" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="8.6" fill="#57534e">
        Quy trình chuẩn của chương 1 — áp dụng cho mọi bảng bạn sẽ tạo trong sách.
      </text>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.7</strong> Ba bước dựng một bảng SQL: tạo database → USE
      database → CREATE TABLE với danh sách cột và kiểu dữ liệu.
    </figcaption>
  </figure>
);

export const FigSQL_DataTypes: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 170" className="w-full" role="img" aria-label="Các kiểu dữ liệu phổ biến">
      {[
        { t: 'VĂN BẢN', c: '#00758f', items: [['CHAR(n)', 'độ dài CỐ ĐỊNH n ký tự', 'CHAR(2): “CA”'], ['VARCHAR(n)', 'độ dài THAY ĐỔI ≤ n', 'VARCHAR(25): “Boston”'] ] },
        { t: 'SỐ', c: '#c66a00', items: [['INT / INTEGER', 'số nguyên, kể cả âm', '-42, 0, 4000'], ['DEC / DECIMAL', 'số có thập phân', '19.99, 3.50'] ] },
        { t: 'NGÀY GIỜ', c: '#2e7d32', items: [['DATE', 'ngày lịch', '2026-11-26'], ['DATETIME', 'ngày + giờ', '2026-11-26 08:30:00'] ] },
        { t: 'KHÁC', c: '#5c2d75', items: [['BLOB', 'tệp lớn: ảnh, nhạc, tài liệu', 'hình scan hộ chiếu'] ] },
      ].map((g, gi) => {
        const x = 8 + gi * 114;
        return (
          <g key={g.t} fontFamily="sans-serif">
            <rect x={x} y={8} width="106" height="18" rx="4" fill={g.c} />
            <text x={x + 53} y={20.5} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="800">{g.t}</text>
            {g.items.map((it, i) => (
              <g key={it[0]}>
                <rect x={x} y={30 + i * 42} width="106" height="38" rx="4" fill="#fff" stroke={g.c} strokeWidth="1" />
                <text x={x + 6} y={43 + i * 42} fontFamily="monospace" fontSize="8.6" fontWeight="700" fill={g.c}>{it[0]}</text>
                <text x={x + 6} y={53 + i * 42} fontSize="7.2" fill="#57534e">{it[1]}</text>
                <text x={x + 6} y={62.5 + i * 42} fontSize="7.2" fill="#78716c" fontStyle="italic">vd: {it[2]}</text>
              </g>
            ))}
          </g>
        );
      })}
      <text x="8" y="160" fontFamily="sans-serif" fontSize="8.4" fill="#57534e">
        Kiểu dữ liệu báo cho RDBMS biết phép toán nào được phép (tính toán chỉ trên cột số) và cấp bao nhiêu bộ nhớ.
        CHAR/CHARACTER, INTEGER/INT, DECIMAL/DEC là cặp tên dùng thay nhau được. Tên kiểu có thể khác giữa các RDBMS.
      </text>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.8</strong> Bộ kiểu dữ liệu hay dùng của chương 1: nhóm văn
      bản (CHAR, VARCHAR), nhóm số (INT, DEC), nhóm ngày giờ (DATE, DATETIME) và BLOB cho tệp lớn. Chọn kiểu “vừa
      vặn” giúp tiết kiệm bộ nhớ và thao tác nhanh hơn; VARCHAR(3) khác xa VARCHAR(30)!
    </figcaption>
  </figure>
);

/* ==========================================================================
   Hình S1.9 — DROP rồi CREATE lại để thêm cột state
========================================================================== */
export const FigSQL_DropRecreate: React.FC = () => (
  <figure className="my-3 bg-white/85 p-3 rounded-md border border-stone-200/80">
    <svg viewBox="0 0 460 130" className="w-full" role="img" aria-label="DROP TABLE rồi tạo lại với cột mới">
      <defs>
        <marker id="sqlArrow5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#c62828" />
        </marker>
      </defs>
      {/* bảng cũ */}
      <g transform="translate(20 20)" fontFamily="monospace">
        <rect width="110" height="14" fill="#90a4ae" />
        <text x="8" y="10.5" fontSize="8.4" fill="#fff" fontWeight="700">locations (cũ)</text>
        <rect y="14" width="110" height="40" fill="#fff" stroke="#b0bec5" strokeWidth="0.7" />
        <text x="8" y="27" fontSize="7.6" fill="#37474f">city · country · budget</text>
        <text x="8" y="39" fontSize="7.6" fill="#37474f">weather · … (8 cột)</text>
        <line x1="0" y1="0" x2="110" y2="54" stroke="#c62828" strokeWidth="1.6" />
        <line x1="110" y1="0" x2="0" y2="54" stroke="#c62828" strokeWidth="1.6" />
      </g>
      <text x="75" y="92" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#c62828" fontWeight="700">DROP TABLE locations;</text>
      <text x="75" y="104" textAnchor="middle" fontFamily="sans-serif" fontSize="7.8" fill="#c62828">xóa bảng + TOÀN BỘ dữ liệu!</text>
      <path d="M140 47 Q 175 30 205 44" fill="none" stroke="#c62828" strokeWidth="1.5" markerEnd="url(#sqlArrow5)" />
      {/* bảng mới */}
      <g transform="translate(215 20)" fontFamily="monospace">
        <rect width="150" height="14" fill="#00758f" />
        <text x="8" y="10.5" fontSize="8.4" fill="#fff" fontWeight="700">locations (mới)</text>
        <rect y="14" width="150" height="52" fill="#fff" stroke="#b8d4dc" strokeWidth="0.7" />
        <text x="8" y="26" fontSize="7.6" fill="#37474f">city VARCHAR(25),</text>
        <text x="8" y="37" fontSize="7.6" fill="#c62828" fontWeight="700">state CHAR(2),   ← cột MỚI</text>
        <text x="8" y="48" fontSize="7.6" fill="#37474f">country VARCHAR(20), budget INT,</text>
        <text x="8" y="59" fontSize="7.6" fill="#37474f">weather…, travel_mode…, … (9 cột)</text>
      </g>
      <g fontFamily="sans-serif" fontSize="8.2" fill="#57534e">
        <text x="380" y="34">Muốn thêm cột vào bảng</text>
        <text x="380" y="45">đã có dữ liệu? Chương 6</text>
        <text x="380" y="56">sẽ dạy ALTER; ở đây bảng</text>
        <text x="380" y="67">còn trống nên DROP + tạo</text>
        <text x="380" y="78">lại là nhanh nhất.</text>
        <text x="380" y="96" fill="#c62828" fontWeight="700">DROP TABLE IF EXISTS t;</text>
        <text x="380" y="107">→ không lỗi nếu t chưa tồn tại</text>
      </g>
    </svg>
    <figcaption className={SQL_CAP}>
      <strong className="font-bold text-stone-900">Hình S1.9</strong> Thêm cột state CHAR(2) cho locations: vì bảng còn
      trống, sách dùng bộ ba bước — CREATE TABLE lần đầu → DROP TABLE locations; → CREATE TABLE lại với cột mới chen
      giữa city và country. Cảnh báo: DROP xóa sạch dữ liệu; tên bảng trong một database phải duy nhất nên tạo trùng
      sẽ lỗi (hai database khác nhau thì được trùng tên bảng).
    </figcaption>
  </figure>
);
