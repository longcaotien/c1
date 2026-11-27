import React from 'react';
import { QuestionBox } from './TextbookPages';
import {
  SQLCode,
  SQLConsole,
  FigSQL_Messy,
  FigSQL_Categories,
  FigSQL_Anatomy,
  FigSQL_DbHierarchy,
  FigSQL_FirstCommands,
  FigSQL_CreateTableAnatomy,
  FigSQL_Steps,
  FigSQL_DataTypes,
  FigSQL_DropRecreate,
} from './SQLFigures1';
import { Database, Lightbulb, Languages, TerminalSquare } from 'lucide-react';

/* ==========================================================================
   SQL — CHƯƠNG 1: DATABASES AND TABLES: ORGANIZING YOUR INFORMATION
   (Head First SQL, 2nd Edition — Early Release, O'Reilly)
   Bản tiếng Việt diễn giải chi tiết theo nguyên tác (kèm mã lệnh chính xác)
   ========================================================================== */

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-bold text-[#00758f] font-sans mt-6 mb-2.5 leading-snug flex items-center gap-2">
    <span className="w-2.5 h-2.5 bg-[#00758f] rounded-sm shrink-0" />
    {children}
  </h2>
);
const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-[15px] font-bold text-[#00556b] font-sans mt-4 mb-1.5">{children}</h3>
);
const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-3 text-justify text-[13.5px] leading-relaxed text-stone-800 font-sans">{children}</p>
);
const Note: React.FC<{ title?: string; tone?: 'warn' | 'info'; children: React.ReactNode }> = ({
  title = 'GHI CHÚ',
  tone = 'info',
  children,
}) => (
  <div
    className={`my-3 rounded-md border px-3.5 py-2.5 font-sans text-[12.5px] leading-relaxed ${
      tone === 'warn' ? 'border-[#dd3645] bg-[#f8d7d4] text-[#7a1622]' : 'border-[#9fc6d0] bg-[#eaf5f8] text-[#0b4a5a]'
    }`}
  >
    <div className="font-bold text-[10.5px] uppercase tracking-wider mb-1">{title}</div>
    {children}
  </div>
);

const TERMS: Array<[string, string]> = [
  ['database', 'cơ sở dữ liệu — vật chứa các bảng và cấu trúc SQL liên quan'],
  ['table', 'bảng — tổ chức dữ liệu thành hàng và cột'],
  ['column / field', 'cột / trường — một danh mục thông tin của bảng'],
  ['row / record', 'hàng / bản ghi — trọn vẹn thông tin về một cá thể'],
  ['value', 'giá trị — nội dung một ô (giao hàng × cột)'],
  ['RDBMS', 'hệ quản trị CSDL quan hệ (MySQL, PostgreSQL…) — công cụ chạy lệnh SQL'],
  ['SQL', 'ngôn ngữ để lưu trữ & truy vấn dữ liệu dạng bảng (đọc “S-Q-L” hoặc “sequel”)'],
  ['data type', 'kiểu dữ liệu — quy định loại giá trị, phép toán và bộ nhớ của cột'],
  ['VARCHAR(n)', 'văn bản độ dài thay đổi, tối đa n ký tự'],
  ['CHAR(n)', 'văn bản độ dài cố định n ký tự'],
  ['INT / INTEGER', 'số nguyên (kể cả số âm)'],
  ['DEC / DECIMAL', 'số có phần thập phân (vd giá 19.99)'],
  ['DATE / DATETIME', 'kiểu ngày / ngày kèm giờ'],
  ['BLOB', 'tệp nhị phân lớn: ảnh, nhạc, tài liệu'],
  ['CREATE DATABASE', 'lệnh tạo database mới'],
  ['USE', 'lệnh chuyển RDBMS vào làm việc trong một database'],
  ['CREATE TABLE', 'lệnh tạo bảng: tên + danh sách cột kèm kiểu dữ liệu'],
  ['DESC / DESCRIBE', 'lệnh xem tóm tắt cột và kiểu dữ liệu của bảng'],
  ['DROP TABLE', 'lệnh xóa bảng cùng toàn bộ dữ liệu — dùng cẩn thận!'],
  ['semicolon (;)', 'dấu chấm phẩy kết thúc câu lệnh SQL (MySQL bắt buộc)'],
];

const KEYPOINTS: string[] = [
  'Chia dữ liệu thành các danh mục logic — chúng sẽ trở thành các CỘT của bảng.',
  'CREATE DATABASE tạo database chứa mọi bảng; tên không dấu cách, nên dùng gạch dưới (travel_db).',
  'USE ten_db chuyển RDBMS vào database đó; mỗi lúc chỉ dùng một database.',
  'Mọi bảng sinh ra từ CREATE TABLE: tên bảng + danh sách “tên cột kiểu_dữ_liệu,” ngăn bằng phẩy, cột cuối không phẩy, kết thúc );',
  'Kiểu dữ liệu phổ biến: VARCHAR, CHAR, INT, DEC, DATE, DATETIME, BLOB — mỗi loại có quy tắc riêng về nội dung và bộ nhớ.',
  'DESC ten_bang liệt kê cột + kiểu dữ liệu để kiểm tra lại bảng vừa tạo.',
  'DROP TABLE xóa bảng và mọi dữ liệu; thêm cột cho bảng trống thì DROP rồi CREATE lại (bảng có dữ liệu sẽ học ALTER ở chương 6).',
  'Tên database và tên bảng phải duy nhất trong cùng hệ thống; kết thúc mọi lệnh bằng dấu chấm phẩy.',
];

export const SQLChapter1: React.FC<{ showSolutions?: boolean }> = ({ showSolutions = false }) => (
  <div className="space-y-6">
    {/* ============ ĐẦU CHƯƠNG ============ */}
    <section className="relative overflow-hidden rounded-xl bg-[#062b36] text-white shadow-md">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none select-none" aria-hidden>
        <div className="font-mono text-[11px] leading-[1.35] p-4 break-all text-[#7fd4e3]">
          {'CREATE DATABASE travel_db; USE travel_db; CREATE TABLE locations (city VARCHAR(25), state CHAR(2), country VARCHAR(20), budget INT, weather VARCHAR(25), travel_mode VARCHAR(10), travel_hours INT, activities VARCHAR(100), attractions VARCHAR(100)); '.repeat(4)}
        </div>
      </div>
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#7fd4e3]">
          <Database className="w-4 h-4" />
          Phần SQL · Head First SQL, 2nd Edition (O’Reilly)
        </div>
        <h1 className="text-2xl sm:text-[30px] font-bold tracking-tight mt-2">
          Chương 1: Databases and Tables — Tổ chức thông tin của bạn
        </h1>
        <p className="mt-2 text-sm text-white/80 max-w-3xl font-sans leading-relaxed">
          Đã đến lúc đưa trật tự vào dữ liệu của bạn. Gần như mọi khía cạnh cuộc sống đều sinh ra dữ liệu — ứng dụng
          điện thoại, mạng xã hội, cả những ghi chú nho nhỏ của bạn. Nhưng thông tin chỉ hữu ích khi được sắp xếp có
          ý nghĩa để tìm đúng thứ cần, vào đúng lúc cần. Bảng (table) giúp bạn thiết lập “luật lệ và trật tự”, biến
          những mẩu thông tin rời rạc thành tài sản giàu giá trị sẵn sàng khai thác — hãy bước vào thế giới ngăn nắp
          của cơ sở dữ liệu quan hệ.
        </p>
      </div>
    </section>

    {/* ============ NỘI DUNG ============ */}
    <article className="bg-[#fbfaf8] border border-stone-300 rounded-sm shadow-lg p-5 sm:p-8 font-serif text-[14px] leading-[1.7] text-stone-800">
      <div className="flex items-center justify-between px-1 pb-3 mb-5 border-b border-stone-200 font-sans text-xs text-stone-500">
        <span>Head First SQL · Bản tiếng Việt diễn giải chi tiết</span>
        <span className="font-bold text-stone-700">Chương 1</span>
      </div>

      <H2>1. Định hình dữ liệu của bạn (Defining your data)</H2>
      <P>
        Abby đã tích lũy cả một bộ sưu tập sổ tay, mẩu giấy và ghi chép khác về những chuyến đi. Bộ sưu tập lớn tới
        mức cô không còn tìm nổi chi tiết mình cần — thật tệ, vì năm nay cô đang muốn thực hiện một chuyến đi lớn.
        Hãy giúp Abby trở lại với những cuộc phiêu lưu!
      </P>
      <FigSQL_Messy />
      <P>
        Chính xác: thứ ta cần là một <strong>database</strong>. Database đưa trật tự vào dữ liệu hỗn độn — nó là bản
        biểu diễn số của mọi ghi chú, sổ sách của bạn. Khi tạo database, bạn cấu trúc thông tin theo khuôn dạng gọn
        gàng, logic; và một khi dữ liệu đã ngăn nắp, bạn truy cập nội dung bất cứ lúc nào cần. Nhưng trước khi tạo
        database cho ghi chú du lịch của Abby, cần hình dung rõ ta muốn lưu <em>loại</em> dữ liệu nào và phân loại
        chúng ra sao.
      </P>
      <QuestionBox
        number="Luyện tập 1 (Sharpen your pencil)"
        showSolutionsGlobal={showSolutions}
        solution="Mỗi ghi chú của Abby đều gồm cùng những danh mục thông tin: thành phố (city), quốc gia (country), ngân sách (budget), thời tiết (weather), phương tiện di chuyển (travel_mode), số giờ di chuyển (travel_hours), hoạt động (activities) và điểm tham quan (attractions). Các nhãn này sẽ trở thành tên cột của bảng."
      >
        <p>
          Dưới đây là vài ghi chú của Abby. Những loại thông tin nào xuất hiện chung ở các mục? Đặt cho mỗi danh mục
          một nhãn mô tả và viết vào chỗ trống (sách đã làm sẵn vài nhãn để bạn khởi động).
        </p>
      </QuestionBox>
      <FigSQL_Categories />

      <H2>2. Nghĩ về dữ liệu theo danh mục, rồi dựng bảng</H2>
      <P>
        Hãy nhìn dữ liệu du lịch của Abby theo cách mới: tưởng tượng cắt một trang sổ tay của cô rồi trải các mẩu
        ra theo chiều ngang; sau đó đặt các nhãn danh mục bạn vừa tạo lên phía trên từng mẩu thông tin tương ứng.
        Lặp lại quy trình ấy cho mọi ghi chú, bạn sẽ thu được một <strong>bảng thông tin</strong> gồm cột và hàng.
      </P>
      <FigSQL_Anatomy />
      <P>
        Trong bảng của Abby, mỗi <strong>cột</strong> chứa chi tiết về một khía cạnh cụ thể của kế hoạch (ngân sách
        dự kiến cho mỗi điểm đến, các điểm tham quan…); mỗi <strong>hàng</strong> gom toàn bộ thông tin gắn với một
        thành phố duy nhất mà cô muốn tới — chẳng hạn mọi chi tiết về Boston trải dọc hàng đầu tiên.
      </P>

      <H2>3. SQL là gì? (What is SQL?)</H2>
      <P>
        Bạn đang học cách tổ chức thông tin từ nhiều tài liệu thành các danh mục dữ liệu xếp vào bảng dạng lưới —
        giống việc bạn từng làm trong Excel hay Google Sheets. Trong cuốn sách này ta dùng <strong>SQL</strong> để
        tạo bảng cũng như tìm lại thông tin đã bỏ vào đó.
      </P>
      <P>
        SQL là <strong>ngôn ngữ lập trình để lưu trữ và truy xuất dữ liệu dạng bảng</strong> — “dạng bảng” nghĩa là
        thông tin viết được vào một bảng có hàng và cột. Ra đời từ những năm 1970, SQL vẫn cực kỳ phổ biến trong
        công việc ngày nay. Bạn có thể đọc tên từng chữ cái “S-Q-L” hoặc đọc như từ “sequel”; người ta thường nói
        SQL là viết tắt của <em>Structured Query Language</em>, dù câu chuyện nguồn gốc có đôi chút khác biệt.
      </P>
      <Note title="Cảnh giác (Watch it!)" tone="warn">
        Bạn sẽ cần phần mềm để chạy SQL: hãy cài một RDBMS (sách dùng <strong>MySQL</strong>) và mở cửa sổ dòng
        lệnh hoặc môi trường đồ họa để giao tiếp với nó. Nếu dùng hệ quản trị khác MySQL, một số lệnh có thể trông
        hơi khác trên máy của bạn.
      </Note>

      <H2>4. Giải phẫu một bảng (The anatomy of a table)</H2>
      <P>
        Trong SQL, dữ liệu được tổ chức thành các <strong>bảng</strong>. Mỗi bảng chứa các danh mục thông tin gọi
        là <strong>cột (column)</strong> và các hàng bản ghi riêng lẻ. Mỗi cột là một danh mục: ví dụ cột phương
        tiện di chuyển có thể chứa các giá trị plane, train, car. Đôi khi bạn gặp chữ <strong>field</strong> thay
        cho column — cùng một nghĩa.
      </P>
      <P>
        Mỗi <strong>hàng (row)</strong> là một <strong>bản ghi (record)</strong>: trọn vẹn thông tin về một cá thể.
        Trong bảng của Abby, một hàng là tất cả dữ liệu về một thành phố — ví dụ: Sydney, Australia, $4,000, warm,
        plane.
      </P>
      <QuestionBox
        number="Luyện tập 2 (BE the table)"
        showSolutionsGlobal={showSolutions}
        solution="Hóa thân thành bảng còn thiếu ô: đọc các ghi chú mua cà phê rồi điền nốt các ô trống, đồng thời đặt tên bảng và tên cột mang tính mô tả (ví dụ bảng coffee_purchases với các cột date, coffee_type, size, price, shop…). Mục tiêu của bài là rèn phản xạ: ghi chú rời rạc → danh mục → cột → bảng hoàn chỉnh."
      >
        <p>
          Sách đưa ra vài ghi chú mua cà phê cùng một bảng mới hình thành một phần. Nhiệm vụ của bạn: hóa thân thành
          chiếc bảng ấy, điền mọi ô còn thiếu từ ghi chú và đặt tên bảng, tên cột sao cho mô tả đúng nội dung.
        </p>
      </QuestionBox>

      <H2>5. Database là gì? (What’s a database?)</H2>
      <P>
        Ta đã biết bảng: cột là danh mục, hàng là bản ghi. Nhưng bản thân bảng cũng cần một <strong>vật chứa</strong>
        — đó chính là database. Cho tới giờ ta mới nói tới bảng đơn lẻ như bảng du lịch của Abby; thực tế bạn thường
        có <em>nhiều bảng thông tin liên quan</em>. Database giữ tất cả các bảng ấy ở cùng một nơi để bạn theo dõi và
        liên kết chúng dễ dàng — sức mạnh của việc này rất lớn, sách sẽ trở lại sau.
      </P>
      <FigSQL_DbHierarchy />
      <P>
        Mọi bảng trong một database nên liên quan, kết nối với nhau theo cách nào đó. Ví dụ các bản ghi mua cà phê
        bạn vừa làm có thể thuộc một database chứa thông tin về những nơi bạn thích mua sắm.
      </P>
      <QuestionBox
        number="Luyện tập 3 (Brain power + Sharpen pencil)"
        showSolutionsGlobal={showSolutions}
        solution="Gợi ý: database điểm phim → bảng movies (title, year, genre, rating, director…); database lớp học → bảng students (student_id, name, grade…), courses (course_id, course_name, teacher…); database cửa hàng → hai bảng products (product_id, name, price, stock…) và sales (sale_id, date, product_id, quantity…). Miễn các cột bạn chọn đúng là ‘danh mục thông tin’ của từng bản ghi."
      >
        <p>
          a) Kể vài database bạn tiếp xúc hằng ngày — chúng chứa những bảng nào, các bảng có cột gì? b) Với các
          database và bảng sách vẽ sẵn, hãy nghĩ các danh mục thông tin có thể có và đề xuất cột cho mỗi bảng; với
          database cuối, đề xuất hai bảng có thể có.
        </p>
      </QuestionBox>
      <P>
        Abby đã kiên nhẫn đủ lâu: đến lúc biến ghi chú du lịch thành <strong>cơ sở dữ liệu quan hệ</strong> —
        relational database gồm thông tin ở khuôn dạng bảng, tức dữ liệu lưu trong các bảng có hàng và cột đúng như
        ta vừa bàn. Trước hết, bảo đảm máy bạn đã cài phần mềm cần thiết.
      </P>

      <H2>6. Cầm lệnh! (Take command!) — hai lệnh đầu tiên</H2>
      <P>
        Cuốn sách này nói về SQL — ngôn ngữ lập trình để điều khiển và truy vấn dữ liệu dạng bảng. Muốn dùng SQL bạn
        cần một công cụ <strong>hệ quản trị CSDL quan hệ (RDBMS)</strong>; sách dùng MySQL, nhưng bạn hoàn toàn có
        thể chọn hệ khác. Khởi động RDBMS, mở cửa sổ dòng lệnh (console) nơi bạn gõ SQL để trò chuyện với nó.
      </P>
      <P>
        Đưa thông tin của Abby vào SQL: trước tiên cần một database để giữ mọi bảng của bạn. Gõ dòng lệnh tạo
        database tên <code className="font-mono text-[12px] bg-stone-100 px-1 rounded">travel_db</code> rồi nhấn Enter
        để thi hành; sau đó bảo RDBMS thực sự <em>dùng</em> database ấy:
      </P>
      <SQLCode title="Lệnh 1 & 2 — tạo và chọn database" code={'CREATE DATABASE travel_db;\nUSE travel_db;'} />
      <SQLConsole
        lines={[
          { t: 'CREATE DATABASE travel_db;', kind: 'cmd' },
          { t: 'Query OK, 1 row affected (0.04 sec)' },
          { t: 'USE travel_db;', kind: 'cmd' },
          { t: 'Database changed' },
        ]}
      />
      <FigSQL_FirstCommands />
      <Note title="Ghi chú">
        Tên database và tên bảng trong SQL <strong>không được chứa dấu cách</strong> — hãy dùng gạch dưới thay thế
        (travel_db). Lệnh phải kết thúc bằng <strong>dấu chấm phẩy</strong>; thiếu nó MySQL sẽ “treo” ở dòng kế tiếp
        chờ bạn gõ thêm (đôi khi hữu ích để ngắt lệnh dài nhiều dòng cho dễ đọc — lỡ quên thì gõ riêng dấu ; rồi Enter
        lần nữa).
      </Note>

      <H2>7. Tạo một bảng SQL (Creating a SQL table)</H2>
      <P>
        Đã có database cho thông tin du lịch, giờ tạo bảng giá trị. Khởi động bằng phiên bản thu gọn: bảng các thành
        phố Abby muốn tới kèm quốc gia của chúng — bảng <code className="font-mono text-[12px] bg-stone-100 px-1 rounded">city_list</code>:
      </P>
      <SQLCode
        title="Bảng thu gọn city_list"
        code={'CREATE TABLE city_list\n(\n  city VARCHAR(25),\n  country VARCHAR(20)\n);'}
      />
      <P>
        Để ý: lệnh viết HOA cho dễ đọc; tên bảng viết thường không dấu cách; ngoặc đơn ôm danh sách tên cột; mỗi cột
        kèm <strong>kiểu dữ liệu</strong> (VARCHAR là VARiable CHARacter — văn bản, số trong ngoặc là sức chứa ký tự
        tối đa mỗi ô); phẩy ngăn cách các cột; đóng ngoặc và chấm phẩy kết thúc. Nhấn Enter để ra lệnh cho RDBMS thi
        hành.
      </P>
      <P>
        Bây giờ tới bảng du lịch đầy đủ của Abby (Example 1-1). Hãy đoán từng dòng lệnh làm gì và ví dụ dữ liệu sẽ
        nằm trong mỗi cột:
      </P>
      <FigSQL_CreateTableAnatomy />
      <QuestionBox
        number="Luyện tập 4 (Sharpen your pencil — Example 1-1)"
        showSolutionsGlobal={showSolutions}
        solution={
          'CREATE TABLE locations → tạo bảng tên locations; ( → mở danh sách cột; city VARCHAR(25) → cột tên thành phố chứa tối đa 25 ký tự (vd “Bangkok”); country VARCHAR(20) → quốc gia (vd “Thailand”); budget INTEGER → ngân sách số nguyên (vd 4000); weather VARCHAR(25) → thời tiết (vd “warm”); travel_mode VARCHAR(10) → phương tiện (vd “plane”); travel_hours INTEGER → số giờ đi (vd 20); activities VARCHAR(100) → hoạt động (vd “surfing, snorkeling”); attractions VARCHAR(100) → điểm tham quan (vd “Pearl Harbor”); ); → đóng danh sách và kết thúc lệnh.'
        }
      >
        <p>
          Mã ở Hình S1.6 là câu lệnh CREATE TABLE cho bảng du lịch đầy đủ của Abby. Đoán công dụng từng dòng và nêu
          một ví dụ dữ liệu cho mỗi cột (ngoài ví dụ sách đã làm sẵn).
        </p>
      </QuestionBox>
      <P>
        Ghi chú mẫu của Abby về Honolulu giúp kiểm chứng các cột: Honolulu, USA · Budget: $3,000 · thời tiết ấm ·
        10 giờ máy bay · Activities: Surfing, Snorkeling · Attractions: Pearl Harbor, Waikiki Beach.
      </P>
      <H3>Ba bước tạo một bảng SQL tổng quát</H3>
      <FigSQL_Steps />
      <QuestionBox
        number="Hỏi ngu (There are no dumb questions)"
        showSolutionsGlobal={showSolutions}
        solution="1) Lệnh đầu tạo travel_db, lệnh thứ hai bảo RDBMS làm việc với nó — tạo bao nhiêu database cũng được nhưng mỗi lúc chỉ USE một; mọi bảng tạo ra nằm trong database đang dùng. 2) SQL không phân biệt hoa/thường; viết hoa lệnh chỉ là thực hành tốt để dễ đọc (CREATE DATABASE nổi bật khỏi travel_db). 3) Vẫn cần: SQL buộc mọi bảng thuộc một database — ví dụ để cấp/quyền truy cập theo từng database gọn hơn theo từng bảng. 4) Đặt tên mô tả (travel_hours hơn hẳn column6); nhiều từ thì nối bằng gạch dưới; tránh ký tự đặc biệt như dấu nháy; tốt nhất không viết hoa chữ đầu; quan trọng là NHẤT QUÁN một quy ước. 5) Chấm phẩy báo lệnh kết thúc — MySQL bắt buộc. 6) Quên chấm phẩy thì MySQL xuống dòng chờ tiếp; gõ ; rồi Enter là xong. 7) Xem mọi database: SHOW databases; (kèm các database sẵn có như sys, information_schema)."
      >
        <p>
          Vì sao cần hai lệnh cho travel_db? Viết hoa lệnh có bắt buộc? Chỉ một bảng thì có cần database không? Đặt
          tên database/bảng/cột thế nào? Dấu chấm phẩy để làm gì, quên thì sao? Có cách nào xem mọi database tôi được
          truy cập?
        </p>
      </QuestionBox>

      <H2>8. Bảng của bạn đã sẵn sàng — chạy lệnh thật</H2>
      <P>
        Đã hiểu từng dòng CREATE TABLE, hãy dựng bảng du lịch của Abby trong database của cô: gõ lệnh từng dòng hoặc
        một dòng dài đều được; trước khi Enter sau dấu chấm phẩy, rà lại xem sót ký tự hay lỗi gõ nào không.
      </P>
      <SQLCode
        title="Chạy trong console (travel_db)"
        code={'CREATE TABLE locations\n(\n  city VARCHAR(25),\n  country VARCHAR(20),\n  budget INTEGER,\n  weather VARCHAR(25),\n  travel_mode VARCHAR(10),\n  travel_hours INTEGER,\n  activities VARCHAR(100),\n  attractions VARCHAR(100)\n);'}
      />
      <SQLConsole
        lines={[
          { t: 'CREATE TABLE locations', kind: 'cmd' },
          { t: '    -> (', kind: 'cmd' },
          { t: '    ->   city VARCHAR(25),', kind: 'cmd' },
          { t: '    ->   …', kind: 'cmd' },
          { t: '    -> );', kind: 'cmd' },
          { t: 'Query OK, 0 rows affected (0.02 sec)' },
        ]}
      />
      <Note title="Ghi chú" tone="warn">
        VARCHAR(3) khác rất xa VARCHAR(30)! Ước lượng sát nhất số ký tự tối đa một ô cần: đoán non sẽ lỗi khi vượt
        giới hạn, đoán già thì lãng phí bộ nhớ — thừa một chút vẫn hơn thiếu một chút.
      </Note>

      <H2>9. Kiểu dữ liệu: chọn đúng loại cho từng cột</H2>
      <P>
        Giả sử Abby muốn thêm cột ngày dự kiến đi: không nên nhét vào VARCHAR hay INTEGER vì đã có kiểu
        <strong> DATE</strong> sinh ra riêng cho việc đó. Kiểu dữ liệu giúp RDBMS biết hành động nào được (và không
        được) phép trên dữ liệu của bạn: chúng bảo SQL cách xử lý thông tin và cấp bao nhiêu bộ nhớ cho mỗi mục.
      </P>
      <FigSQL_DataTypes />
      <P>
        Nhóm văn bản lưu tên, danh mục: biết chắc số ký tự thì dùng CHAR cho đúng mức; không chắc thì VARCHAR tự co
        giãn. Nhóm số chia hai: có và không thập phân — cột kiểu số mới tính tổng, trung bình được. Nhóm ngày giờ
        (MySQL có sẵn) cho phép phép toán đặc thù như trích năm, tháng. Còn tài liệu lớn, ảnh, nhạc? Kiểu
        <strong> BLOB</strong> chứa được tất cả.
      </P>
      <Note title="Cảnh giác (Watch it!)" tone="warn">
        Tên kiểu dữ liệu có thể khác nhau giữa các RDBMS — không có danh pháp phổ quát. Hãy tra tài liệu hệ của bạn
        để biết tên đúng.
      </Note>
      <QuestionBox
        number="Luyện tập 5 (Who am I?)"
        showSolutionsGlobal={showSolutions}
        solution="Khách dự tiệc: CHAR, VARCHAR, INT, DEC, DATE, DATETIME, BLOB. Gợi ý đáp án theo manh mối: ‘tôi chứa đúng bấy nhiêu ký tự, không hơn không kém’ → CHAR; ‘văn bản dài ngắn tùy ý trong hạn mức’ → VARCHAR; ‘số nguyên kể cả âm, không thập phân’ → INT; ‘giá tiền như 19.99 là việc của tôi’ → DEC; ‘ngày lịch trên tờ lịch’ → DATE; ‘vừa ngày vừa giờ’ → DATETIME; ‘ảnh, nhạc, tệp khổng lồ cứ đưa tôi’ → BLOB."
      >
        <p>
          Các kiểu dữ liệu SQL hóa trang dự tiệc “Who am I?”: mỗi vị khách đưa một manh mối, bạn đoán tên họ; manh
          mối đúng với nhiều người thì ghi hết mọi vị khách thỏa mãn.
        </p>
      </QuestionBox>
      <QuestionBox
        number="Hỏi ngu — chuyện kiểu dữ liệu"
        showSolutionsGlobal={showSolutions}
        solution="1) Kiểu dữ liệu cho RDBMS biết phép toán nào chạy được trên cột (toán học chỉ trên cột số) và cấp bao nhiêu bộ nhớ. 2) Đừng dùng BLOB cho mọi thứ: tốn chỗ kinh khủng và không tính toán được như VARCHAR/CHAR/INT/DEC. 3) Hai kiểu số vì chuyện lưu trữ & hiệu năng — chọn kiểu khớp nhất giảm kích thước bảng và tăng tốc thao tác. 4) CHAR và CHARACTER (cũng như INTEGER/INT, DECIMAL/DEC) là một — CHAR chỉ là biệt danh ngắn gọn. 5) Phải chốt kiểu cho từng cột TRƯỚC khi thêm dữ liệu; sửa sau được nhưng phiền. 6) Gõ sai kiểu hoặc sai sức chứa ký tự sẽ lỗi hoặc lãng phí — hãy tạo bảng cẩn thận; lỡ sai trong CREATE TABLE thì xem cách tạo lại bảng ở ngay mục sau (và chương 6)."
      >
        <p>
          Vì sao phải quan tâm kiểu dữ liệu? Sao không dùng BLOB cho mọi giá trị? Vì sao cần hai kiểu số? Chọn số ký
          tự cho VARCHAR thế nào? CHAR và CHARACTER khác gì? Có phải chốt kiểu trước khi nạp dữ liệu? Gõ sai thì sao?
        </p>
      </QuestionBox>

      <H2>10. Kiểm tra bảng với DESC (Your table, DESCribed)</H2>
      <P>
        Kiểm tra lại công việc là việc nên làm: dùng lệnh <strong>DESC</strong> (viết tắt của DESCRIBE) kèm tên bảng
        để liệt kê các cột cùng kiểu dữ liệu gắn với chúng — áp dụng được cho mọi bảng SQL của bạn.
      </P>
      <SQLCode code="DESC locations;" />
      <SQLConsole
        lines={[
          { t: 'DESC locations;', kind: 'cmd' },
          { t: '+--------------+--------------+------+-----+---------+-------+' },
          { t: '| Field        | Type         | Null | Key | Default | Extra |' },
          { t: '+--------------+--------------+------+-----+---------+-------+' },
          { t: '| city         | varchar(25)  | YES  |     | NULL    |       |' },
          { t: '| country      | varchar(20)  | YES  |     | NULL    |       |' },
          { t: '| budget       | int          | YES  |     | NULL    |       |' },
          { t: '| weather      | varchar(25)  | YES  |     | NULL    |       |' },
          { t: '| travel_mode  | varchar(10)  | YES  |     | NULL    |       |' },
          { t: '| travel_hours | int          | YES  |     | NULL    |       |' },
          { t: '| activities   | varchar(100) | YES  |     | NULL    |       |' },
          { t: '| attractions  | varchar(100) | YES  |     | NULL    |       |' },
          { t: '+--------------+--------------+------+-----+---------+-------+' },
          { t: '8 rows in set (0.00 sec)' },
        ]}
      />
      <P>
        Con số “8 rows in set” cho biết bảng có bao nhiêu cột; các cột Key, Default, Extra cứ khoan bận tâm — sách
        sẽ dùng tới chúng sau này.
      </P>

      <H2>11. Đổi tính chất bảng: thêm cột bị quên (Changing table properties)</H2>
      <P>
        Xem lại mô tả bảng, bạn có thể phát hiện lỗi hoặc điều muốn đổi — ví dụ một cột lẽ ra nên có (cột state cho
        các bang nước Mỹ) hoặc một cột muốn bỏ đi. Sách tổ chức trò <strong>Code Magnets</strong>: các mảnh lệnh rơi
        xuống sàn, hãy ghép lại thành mã tạo travel_db và bảng locations có cột state mới; vài dấu ngoặc và chấm
        phẩy rơi mất — tự thêm vào đủ dùng!
      </P>
      <QuestionBox
        number="Luyện tập 6 (Code Magnets)"
        showSolutionsGlobal={showSolutions}
        solution={
          'CREATE DATABASE travel_db;  USE travel_db;  CREATE TABLE locations ( city VARCHAR(25), state CHAR(2), country VARCHAR(20), budget INT, weather VARCHAR(25), travel_mode VARCHAR(10), travel_hours INT, activities VARCHAR(100), attractions VARCHAR(100) );  — nhưng khi chạy bạn sẽ gặp lỗi: travel_db và locations đã tồn tại rồi! Tên database và tên bảng trong một database phải duy nhất, tạo trùng sẽ báo lỗi. Cách đúng: DROP TABLE locations; rồi CREATE TABLE lại với cột state CHAR(2) chen giữa city và country.'
        }
      >
        <p>Ghép các mảnh nam châm thành chuỗi lệnh tạo travel_db rồi tạo bảng locations gồm cột state mới; thêm đủ ngoặc đơn và chấm phẩy bị rơi mất.</p>
      </QuestionBox>
      <P>
        Thử gõ chuỗi lệnh vừa ghép vào console, bạn sẽ thấy nó <strong>không</strong> tạo được cột state: tạo lại
        một database hay bảng đã tồn tại đều lỗi, vì tên phải duy nhất. Muốn thêm cột state vào bảng locations cũ,
        phải bỏ bảng cũ đi rồi tạo lại:
      </P>
      <SQLCode title="Xóa bảng cũ rồi tạo lại với cột state" code={'DROP TABLE locations;\n\nCREATE TABLE locations\n(\n  city VARCHAR(25),\n  state CHAR(2),\n  country VARCHAR(20),\n  budget INT,\n  weather VARCHAR(25),\n  travel_mode VARCHAR(10),\n  travel_hours INT,\n  activities VARCHAR(100),\n  attractions VARCHAR(100)\n);'} />
      <FigSQL_DropRecreate />
      <Note title="Cảnh giác (Watch it!)" tone="warn">
        Đừng DROP mà không kiểm tra kỹ hai lần: DROP TABLE xóa bảng <em>cùng mọi dữ liệu trong nó</em>! Chỉ dùng khi
        chắc chắn muốn bỏ tất cả. Nếu sợ lỡ tay xóa bảng không tồn tại (cũng lỗi), thêm tùy chọn: DROP TABLE IF
        EXISTS my_table; — có thì xóa, không thì thôi.
      </Note>
      <div className="my-3 rounded-md border border-[#00758f]/40 bg-[#eaf5f8] p-3.5 font-sans text-[12.5px] italic text-[#0b4a5a] leading-relaxed">
        <strong className="not-italic text-[10.5px] uppercase tracking-wider block mb-1">Make it stick (thơ nhớ lâu)</strong>
        Roses are red, / Violets are blue. / Within one database, / Table names must be new. — Trong một database, tên
        bảng phải mới tinh: (1) CREATE TABLE lần đầu với tên + cột + kiểu; (2) thấy thiếu cột → DROP TABLE tên_bảng;
        (3) CREATE TABLE lại với tên cũ nhưng danh sách cột có thêm cột mới kèm kiểu dữ liệu.
      </div>
      <QuestionBox
        number="Hỏi ngu — DROP & tên trùng"
        showSolutionsGlobal={showSolutions}
        solution="1) Bảng đã đầy dữ liệu mà cần thêm cột thì không bắt buộc xóa hết: có cách sửa bảng không mất dữ liệu (ALTER — học kỹ ở chương 6); ở đây bảng còn trống nên DROP + tạo lại là gọn nhất. 2) DROP bảng không tồn tại sẽ lỗi — dùng DROP TABLE IF EXISTS ten_bang; để an toàn. 3) Hai database KHÁC nhau được phép có bảng trùng tên: locations trong travel_db và locations trong real_estate_db có thể cùng hoặc khác cột."
      >
        <p>
          Thêm cột là phải DROP bảng — nếu bảng đã có dữ liệu thì sao? DROP bảng không tồn tại thì thế nào? Hai bảng
          ở hai database khác nhau trùng tên được không?
        </p>
      </QuestionBox>
      <P>
        Mẹo cuối chương: hãy gõ và lưu lệnh trong một <strong>trình soạn thảo văn bản</strong> (Notepad, TextEdit…)
        rồi copy-paste vào console SQL — cần lặp lại lệnh tương tự thì đã có sẵn bản gốc, lỡ gõ sai cũng chỉ sửa bản
        lưu chứ không làm lại từ đầu.
      </P>

      <H2>12. Đạt độ cao hành trình (Hitting your cruising altitude)</H2>
      <P>
        Làm tốt lắm: bạn đã dựng cho Abby một database chứa các bảng du lịch và tạo xong cấu trúc bảng locations.
        Thông tin trong chồng ghi chú nhàu nát sắp có ngôi nhà số mới trong SQL. Vỗ tay cho chính bạn vì hoàn thành
        Chương 1 — thú vị chỉ mới bắt đầu!
      </P>
      <QuestionBox
        number="Luyện tập 7 (Sharpen pencil — OK hay Error?)"
        showSolutionsGlobal={showSolutions}
        solution="Nhập lần lượt từ trên xuống: 1) CREATE DATABASE my_db; → OK, tạo database my_db. 2) USE my_db; → OK, chuyển vào my_db. 3) CREATE TABLE my_table; → OK (sách coi như tạo bảng my_table trong my_db). 4) CREATE TABLE my_table; → Error: hai bảng trong một database không được trùng tên. 5) DROP TABLE my_table; → OK, xóa my_table. 6) CREATE DATABASE my_db; → Error: database my_db đã tồn tại. 7) DROP TABLE my_table; → Error: bảng không còn tồn tại để xóa (muốn an toàn dùng IF EXISTS). 8) CREATE TABLE my_table; → OK: tên đã trống nên tạo lại được."
      >
        <p>
          Dưới đây là chuỗi lệnh SQL gõ lần lượt vào console. Phân loại mỗi lệnh “OK” hay “Error”: lệnh chạy được thì
          mô tả điều xảy ra, lệnh lỗi thì giải thích vì sao.
        </p>
        <SQLCode
          code={'CREATE DATABASE my_db;\nUSE my_db;\nCREATE TABLE my_table;\nCREATE TABLE my_table;\nDROP TABLE my_table;\nCREATE DATABASE my_db;\nDROP TABLE my_table;\nCREATE TABLE my_table;'}
        />
      </QuestionBox>
      <QuestionBox
        number="Luyện tập 8 (SQLcross — ô chữ)"
        showSolutionsGlobal={showSolutions}
        solution="Ngang: 2 column · 4 VARCHAR · 5 table · 6 DESC · 7 semicolon (dấu chấm phẩy) · 9 DEC · 10 row. Dọc: 1 database · 2 CREATE · 3 USE · 6 DROP · 8 INT."
      >
        <p>
          Ô chữ chương 1. Ngang: 2) Mỗi danh mục dữ liệu tạo thành một ______ trong bảng. 4) Chứa lượng văn bản co
          giãn. 5) Cấu trúc tổ chức dữ liệu thành hàng và cột. 6) Lệnh xem chi tiết bảng. 7) Kết thúc mọi câu lệnh
          SQL bằng thứ này. 9) Kiểu số hợp với giá như 19.99. 10) Còn gọi là record, giữ thông tin một phần tử. Dọc:
          1) ______ giữ các bảng và cấu trúc SQL khác. 2) Từ khóa đứng trước DATABASE hoặc TABLE để tạo chúng. 3)
          Lệnh chuyển vào một database. 6) Muốn bỏ bảng, dùng ______ TABLE. 8) Kiểu số thích số nguyên (kể cả âm)
          nhưng không thích phân số.
        </p>
      </QuestionBox>

      {/* ============ THUẬT NGỮ ============ */}
      <div className="mt-8 rounded-md border border-[#9fc6d0] bg-[#eaf5f8] p-4 font-sans">
        <div className="flex items-center gap-2 mb-3">
          <Languages className="w-4 h-4 text-[#00758f]" />
          <h3 className="font-bold text-sm text-[#00556b]">Thuật ngữ chương 1 (Anh – Việt)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {TERMS.map(([en, vi]) => (
            <div key={en} className="flex gap-2 py-1 border-b border-[#cfe3e9] text-[12.5px]">
              <span className="font-semibold text-stone-900 shrink-0 font-mono">{en}</span>
              <span className="text-stone-600">— {vi}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ ĐIỂM CHÍNH ============ */}
      <div className="mt-5 rounded-md border border-[#cfe0bf] bg-[#f6faf1] p-4 font-sans">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-[#4c7a24]" />
          <h3 className="font-bold text-sm text-[#33511d]">Hộp công cụ SQL của bạn (Your SQL toolbox) — 8 điểm chính</h3>
        </div>
        <ol className="list-decimal pl-5 space-y-1.5 text-[12.5px] text-stone-800">
          {KEYPOINTS.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ol>
        <div className="mt-3 flex items-start gap-2 text-[12px] text-stone-600">
          <TerminalSquare className="w-4 h-4 shrink-0 mt-0.5 text-[#00758f]" />
          <span>
            Bạn đã biết: tạo database &amp; bảng, khai báo cột với các kiểu dữ liệu phổ biến, kiểm bảng bằng DESC, và
            xử lý khi quên cột (DROP rồi CREATE lại). Chương 2 sẽ nạp dữ liệu vào bảng bằng INSERT.
          </span>
        </div>
      </div>

      <p className="mt-5 text-[11.5px] text-stone-500 font-sans leading-relaxed">
        Nguồn: Chương 1 “Databases and Tables: Organizing Your Information”, <em>Head First SQL</em> (2nd Edition,
        Early Release), O’Reilly — bản tiếng Việt diễn giải trung thực, mã lệnh giữ nguyên như sách (MySQL).
      </p>
    </article>
  </div>
);

export default SQLChapter1;
