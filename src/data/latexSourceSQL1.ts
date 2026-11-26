export interface LatexSectionItemSQL1 {
  id: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  latexCode: string;
}

/* ==========================================================================
   BẢN LaTeX — SQL, CHƯƠNG 1: DATABASES AND TABLES (Head First SQL, 2nd Ed.)
   Quy ước: String.raw, MỘT gạch ngược (như latexSource.ts)
   ========================================================================== */

export const LATEX_PREAMBLE_SQL1 = String.raw`% ==========================================================================
% SQL — HEAD FIRST SQL (2ND EDITION, EARLY RELEASE), CHƯƠNG 1
% Databases and Tables: Organizing Your Information — bản tiếng Việt
% Biên dịch bằng pdflatex/xelatex (cần gói listings, tcolorbox)
% ==========================================================================
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T5]{fontenc}
\usepackage[vietnamese]{babel}
\usepackage{lmodern}
\usepackage{microtype}
\usepackage[a4paper,top=2cm,bottom=2.2cm,left=2.2cm,right=2.2cm]{geometry}

\usepackage{amsmath,amssymb}
\usepackage{booktabs}
\usepackage{array}
\usepackage[dvipsnames,svgnames,x11names]{xcolor}
\usepackage[most]{tcolorbox}
\usepackage{listings}

% --- Màu chủ đạo SQL (xanh MySQL) ---
\definecolor{sqlBlue}{HTML}{00758F}
\definecolor{sqlDark}{HTML}{062B36}
\definecolor{sqlCream}{HTML}{EAF5F8}
\definecolor{sqlCode}{HTML}{0F2733}

\lstdefinestyle{sqlconsole}{
  basicstyle=\ttfamily\small\color{white},
  backgroundcolor=\color{sqlCode},
  keywordstyle=\color{cyan!80},
  frame=single, framerule=0.4pt, rulecolor=\color{gray!60},
  breaklines=true, columns=fullflexible, keepspaces=true,
  xleftmargin=6pt, xrightmargin=6pt, aboveskip=8pt, belowskip=8pt
}
\lstset{style=sqlconsole, language=SQL}

\newcommand{\sectionBlue}[1]{{\color{sqlBlue}\section*{#1}}}
\newtcolorbox{sqlnote}{
  enhanced, breakable, colback=sqlCream, colframe=sqlBlue,
  boxrule=0.8pt, arc=2mm, left=8pt, right=8pt, top=6pt, bottom=6pt
}
\newtcolorbox{sqlwarn}{
  enhanced, breakable, colback=Red!8, colframe=Red!65!black,
  boxrule=0.8pt, arc=2mm, left=8pt, right=8pt, top=6pt, bottom=6pt
}

\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[C]{\thepage}
\fancyhead[L]{\sffamily\footnotesize\color{black!55}SQL · Chương 1: Databases and Tables}

\setlength{\parindent}{1em}
\setlength{\parskip}{0.4em}
`;

export const LATEX_SQL1_S1 = String.raw`% ==========================================================================
% MỞ ĐẦU + ĐỊNH HÌNH DỮ LIỆU
% ==========================================================================
\sectionBlue{Mở đầu: đưa trật tự vào dữ liệu}

Gần như mọi khía cạnh cuộc sống đều sinh ra dữ liệu; nhưng thông tin chỉ hữu ích khi được sắp
xếp có ý nghĩa để tìm đúng thứ cần, vào đúng lúc cần. \textbf{Bảng (table)} giúp thiết lập trật
tự, biến những mẩu thông tin rời rạc thành tài sản sẵn sàng khai thác --- chào mừng tới thế
giới ngăn nắp của \textit{cơ sở dữ liệu quan hệ}.

\sectionBlue{1. Định hình dữ liệu của bạn}

Abby tích lũy cả bộ sưu tập sổ tay, mẩu giấy ghi chuyến đi --- lớn tới mức không tìm nổi chi
tiết mình cần. Thứ cô cần là một \textbf{database}: bản biểu diễn số của mọi ghi chú, cấu trúc
thông tin gọn gàng, logic, truy cập được bất cứ lúc nào. Trước khi tạo database, phải hình dung
ta muốn lưu \textit{loại} dữ liệu nào và phân loại ra sao.

\begin{sqlnote}
\textbf{Sharpen your pencil:} các ghi chú của Abby chia sẻ cùng những danh mục thông tin ---
city, country, budget, weather, travel\_mode, travel\_hours, activities, attractions; các nhãn
này sẽ trở thành \textbf{tên cột} của bảng.
\end{sqlnote}

\sectionBlue{2. Nghĩ theo danh mục, dựng thành bảng}

Cắt trang sổ tay rồi trải ngang các mẩu thông tin; đặt nhãn danh mục lên trên từng mẩu; lặp lại
với mọi ghi chú --- ta thu được một bảng gồm cột và hàng. Trong SQL: mỗi \textbf{cột (column,
field)} là một danh mục thông tin; mỗi \textbf{hàng (row, record)} là trọn vẹn thông tin về một
cá thể (vd hàng Sydney: Sydney, Australia, \$4,000, warm, plane); mỗi ô là một \textbf{giá trị}.
`;

export const LATEX_SQL1_S2 = String.raw`% ==========================================================================
% SQL LÀ GÌ + DATABASE LÀ GÌ
% ==========================================================================
\sectionBlue{3. SQL là gì?}

SQL là \textbf{ngôn ngữ lập trình để lưu trữ và truy xuất dữ liệu dạng bảng} (thông tin viết
được vào bảng có hàng và cột). Ra đời từ những năm 1970, SQL vẫn cực kỳ phổ biến. Đọc tên
“S-Q-L” hoặc “sequel”; thường giảng là \textit{Structured Query Language}. Muốn chạy SQL cần
một \textbf{RDBMS} (sách dùng MySQL) và cửa sổ dòng lệnh để giao tiếp với nó.

\sectionBlue{4. Database là gì?}

Bảng cũng cần vật chứa: \textbf{database}. Thực tế bạn thường có nhiều bảng \textit{liên
quan}; database giữ chúng cùng một nơi để theo dõi và liên kết dễ dàng. Mọi bảng trong một
database nên liên quan nhau theo cách nào đó. Tên database và tên bảng phải \textbf{duy nhất}
(hai database khác nhau được phép có bảng trùng tên).

\begin{sqlnote}
\textbf{Brain power:} database bạn gặp hằng ngày (điểm phim, lớp học, cửa hàng\ldots) chứa
những bảng nào, cột gì? Ví dụ database cửa hàng: products(product\_id, name, price, stock) và
sales(sale\_id, date, product\_id, quantity).
\end{sqlnote}
`;

export const LATEX_SQL1_S3 = String.raw`% ==========================================================================
% HAI LỆNH ĐẦU TIÊN + TẠO BẢNG
% ==========================================================================
\sectionBlue{5. Cầm lệnh! Hai lệnh đầu tiên}

Tạo database giữ mọi bảng của bạn rồi bảo RDBMS dùng nó:

\begin{lstlisting}
CREATE DATABASE travel_db;
USE travel_db;
-- Query OK, 1 row affected (0.04 sec)
-- Database changed
\end{lstlisting}

Tên database/bảng \textbf{không dấu cách} (dùng gạch dưới); lệnh kết thúc bằng \textbf{dấu chấm
phẩy} (MySQL bắt buộc; thiếu thì console chờ thêm input). Mỗi lúc chỉ USE một database; mọi bảng
tạo sau nằm trong database đang dùng. Xem tất cả database: \texttt{SHOW databases;}

\sectionBlue{6. Tạo bảng SQL}

Bảng thu gọn rồi bảng đầy đủ của Abby:

\begin{lstlisting}
CREATE TABLE city_list
(
  city VARCHAR(25),
  country VARCHAR(20)
);

CREATE TABLE locations
(
  city VARCHAR(25),
  country VARCHAR(20),
  budget INTEGER,
  weather VARCHAR(25),
  travel_mode VARCHAR(10),
  travel_hours INTEGER,
  activities VARCHAR(100),
  attractions VARCHAR(100)
);
\end{lstlisting}

Giải phẫu lệnh: tên bảng $\to$ ngoặc đơn $\to$ danh sách “tên cột + kiểu dữ liệu” ngăn bằng phẩy
(cột cuối không phẩy) $\to$ đóng ngoặc + chấm phẩy. Viết hoa lệnh chỉ để dễ đọc (SQL không phân
biệt hoa/thường). \textbf{Ba bước tổng quát:} (1) CREATE DATABASE; (2) USE; (3) CREATE TABLE.

\begin{sqlwarn}
VARCHAR(3) khác xa VARCHAR(30)! Ước lượng sát số ký tự tối đa: đoán non sẽ lỗi khi vượt hạn mức,
đoán già lãng phí bộ nhớ.
\end{sqlwarn}
`;

export const LATEX_SQL1_S4 = String.raw`% ==========================================================================
% KIỂU DỮ LIỆU + DESC
% ==========================================================================
\sectionBlue{7. Kiểu dữ liệu phổ biến}

Kiểu dữ liệu báo RDBMS biết phép toán nào được phép và cấp bao nhiêu bộ nhớ:

\begin{center}
\begin{tabular}{@{}lll@{}}
\toprule
\textbf{Nhóm} & \textbf{Kiểu} & \textbf{Ví dụ} \\
\midrule
Văn bản & CHAR(n) / VARCHAR(n) & cố định n ký tự / co giãn $\le$ n: “Boston” \\
Số & INT (INTEGER) & số nguyên kể cả âm: 4000 \\
Số & DEC (DECIMAL) & có thập phân: 19.99 \\
Ngày giờ & DATE / DATETIME & 2026-11-26 / 2026-11-26 08:30:00 \\
Tệp lớn & BLOB & ảnh, nhạc, tài liệu \\
\bottomrule
\end{tabular}
\end{center}

CHAR/CHARACTER, INTEGER/INT, DECIMAL/DEC dùng thay nhau được. Tên kiểu có thể khác giữa các
RDBMS --- tra tài liệu hệ của bạn. Đừng滥用 BLOB cho mọi thứ: tốn chỗ và không tính toán được.

\sectionBlue{8. Kiểm bảng với DESC}

\begin{lstlisting}
DESC locations;
-- 8 rows in set: city varchar(25), country varchar(20),
-- budget int, weather varchar(25), travel_mode varchar(10),
-- travel_hours int, activities varchar(100), attractions varchar(100)
\end{lstlisting}

DESC (DESCRIBE) liệt kê cột + kiểu dữ liệu của bảng bất kỳ; “8 rows in set” cho biết số cột.
`;

export const LATEX_SQL1_S5 = String.raw`% ==========================================================================
% ĐỔI TÍNH CHẤT BẢNG: DROP + TẠO LẠI
% ==========================================================================
\sectionBlue{9. Thêm cột bị quên: DROP rồi CREATE lại}

Tên bảng trong một database phải duy nhất --- tạo trùng sẽ lỗi, nên không thể “tạo lại” bảng
đã có để thêm cột. Với bảng còn trống, cách gọn nhất:

\begin{lstlisting}
DROP TABLE locations;

CREATE TABLE locations
(
  city VARCHAR(25),
  state CHAR(2),
  country VARCHAR(20),
  budget INT,
  weather VARCHAR(25),
  travel_mode VARCHAR(10),
  travel_hours INT,
  activities VARCHAR(100),
  attractions VARCHAR(100)
);
\end{lstlisting}

\begin{sqlwarn}
\textbf{Đừng DROP mà không kiểm tra hai lần:} DROP TABLE xóa bảng \textit{cùng toàn bộ dữ liệu}!
Sợ lỡ tay xóa bảng không tồn tại thì dùng \texttt{DROP TABLE IF EXISTS my\_table;} (có thì xóa,
không thì thôi). Bảng đã đầy dữ liệu mà cần thêm cột: chương 6 dạy ALTER.
\end{sqlwarn}

\textit{Make it stick:} Roses are red, / Violets are blue. / Within one database, / Table names
must be new.
`;

export const LATEX_SQL1_S6 = String.raw`% ==========================================================================
% TỔNG KẾT + BÀI TẬP
% ==========================================================================
\sectionBlue{10. Hộp công cụ của bạn (tóm tắt chương)}

\begin{itemize}
  \item Chia dữ liệu thành danh mục logic --- chúng thành các \textbf{cột} của bảng.
  \item \texttt{CREATE DATABASE} tạo database chứa mọi bảng; \texttt{USE} chuyển vào database.
  \item Mọi bảng sinh từ \texttt{CREATE TABLE}: tên + danh sách cột kèm kiểu dữ liệu.
  \item Kiểu phổ biến: VARCHAR, CHAR, INT, DEC, DATE, DATETIME, BLOB.
  \item \texttt{DESC} kiểm tra cột và kiểu dữ liệu.
  \item \texttt{DROP TABLE} xóa bảng cùng dữ liệu --- dùng cẩn thận!
  \item Kết thúc mọi lệnh bằng dấu chấm phẩy.
\end{itemize}

\sectionBlue{Bài tập chọn lọc (kèm đáp án gợi ý)}

\textbf{OK hay Error?} Nhập lần lượt: \texttt{CREATE DATABASE my\_db;} (OK) $\to$ \texttt{USE
my\_db;} (OK) $\to$ \texttt{CREATE TABLE my\_table;} (OK) $\to$ \texttt{CREATE TABLE my\_table;}
(Error: trùng tên bảng) $\to$ \texttt{DROP TABLE my\_table;} (OK) $\to$ \texttt{CREATE DATABASE
my\_db;} (Error: database đã tồn tại) $\to$ \texttt{DROP TABLE my\_table;} (Error: bảng không còn)
$\to$ \texttt{CREATE TABLE my\_table;} (OK: tên đã trống).

\textbf{SQLcross:} ngang: column, VARCHAR, table, DESC, dấu chấm phẩy, DEC, row; dọc: database,
CREATE, USE, DROP, INT.
`;

export const FULL_LATEX_DOCUMENT_SQL1 = [
  LATEX_PREAMBLE_SQL1,
  String.raw`\begin{document}`,
  String.raw`\title{\textbf{SQL --- Head First SQL (2nd Edition)}\\[4pt]
  \large Chương 1: Databases and Tables --- Organizing Your Information\\[2pt]
  \normalsize Bản tiếng Việt diễn giải chi tiết (kèm mã lệnh MySQL nguyên bản)}
\author{}
\date{}
\maketitle
\thispagestyle{fancy}`,
  LATEX_SQL1_S1,
  LATEX_SQL1_S2,
  LATEX_SQL1_S3,
  LATEX_SQL1_S4,
  LATEX_SQL1_S5,
  LATEX_SQL1_S6,
  String.raw`\end{document}`,
].join('\n');

export const LATEX_SECTIONS_SQL1: LatexSectionItemSQL1[] = [
  {
    id: 'full',
    pageNumber: 'Cả chương',
    title: 'Toàn bộ Chương 1: Databases and Tables',
    subtitle: 'Bản LaTeX đầy đủ 10 mục + bài tập chọn lọc',
    latexCode: FULL_LATEX_DOCUMENT_SQL1,
  },
  { id: 's1', pageNumber: 'Mục 1–2', title: 'Định hình dữ liệu & dựng bảng', subtitle: 'Ghi chú của Abby → danh mục → cột/hàng', latexCode: LATEX_SQL1_S1 },
  { id: 's2', pageNumber: 'Mục 3–4', title: 'SQL là gì? Database là gì?', subtitle: 'Định nghĩa, RDBMS, vật chứa bảng', latexCode: LATEX_SQL1_S2 },
  { id: 's3', pageNumber: 'Mục 5–6', title: 'CREATE DATABASE, USE, CREATE TABLE', subtitle: 'Hai lệnh đầu + giải phẫu lệnh tạo bảng', latexCode: LATEX_SQL1_S3 },
  { id: 's4', pageNumber: 'Mục 7–8', title: 'Kiểu dữ liệu & DESC', subtitle: 'CHAR/VARCHAR/INT/DEC/DATE/DATETIME/BLOB + kiểm bảng', latexCode: LATEX_SQL1_S4 },
  { id: 's5', pageNumber: 'Mục 9', title: 'DROP TABLE & tạo lại thêm cột', subtitle: 'state CHAR(2), IF EXISTS, cảnh báo mất dữ liệu', latexCode: LATEX_SQL1_S5 },
  { id: 's6', pageNumber: 'Mục 10', title: 'Tóm tắt + bài tập', subtitle: 'Hộp công cụ, OK/Error, SQLcross', latexCode: LATEX_SQL1_S6 },
];
