export interface LatexSectionItem18 {
  id: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  latexCode: string;
}

/* ==========================================================================
   BẢN DỊCH LaTeX — CHƯƠNG 18: HỢP CHẤT CARBONYL (TRANG 234 – 243)
   ========================================================================== */

export const LATEX_PREAMBLE_18 = String.raw`% ==========================================================================
% BẢN DỊCH SÁCH GIÁO KHOA HÓA HỌC CAMBRIDGE AS & A LEVEL (TRANG 234 - 243)
% Chương 18: Hợp chất carbonyl (Carbonyl compounds)
% Biên dịch & Chế bản LaTeX chuẩn định dạng gốc (Giữ nguyên bố cục 2 cột & Hình ảnh)
% Hướng dẫn biên dịch: Sử dụng pdflatex hoặc xelatex (Overleaf / TeXstudio / TeXLive)
% ==========================================================================
\documentclass[10pt,a4paper,twoside]{article}

% --- Gói ngôn ngữ tiếng Việt và Font chữ ---
\usepackage[utf8]{inputenc}
\usepackage[T5]{fontenc}
\usepackage[vietnamese]{babel}
\usepackage{lmodern}
\usepackage{microtype}

% --- Căn lề chuẩn sách giáo khoa 2 cột ---
\usepackage[
  a4paper,
  top=1.6cm,
  bottom=1.8cm,
  left=1.5cm,
  right=1.5cm,
  headheight=14pt
]{geometry}

% --- Gói Toán học & Hóa học chuyên dụng ---
\usepackage{amsmath,amssymb,amsfonts}
\usepackage[version=4]{mhchem}
\usepackage{chemfig}
\setchemfig{atom sep=2.2em, bond offset=1.5pt, double bond sep=2.5pt}

% --- Gói Đồ họa, Màu sắc, Bố cục nhiều cột và Hộp định dạng ---
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tikz}
\usetikzlibrary{shapes,arrows.meta,positioning,patterns,calc,decorations.pathmorphing}
\usepackage{multicol}
\setlength{\columnsep}{0.75cm}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{float}
\usepackage[most]{tcolorbox}

% --- Bảng màu chuẩn Sách Giáo Khoa Cambridge ---
\definecolor{cambridgeRed}{HTML}{D33427}
\definecolor{cambridgeDarkRed}{HTML}{B52418}
\definecolor{questionBg}{HTML}{F4EFE6}
\definecolor{questionTab}{HTML}{C6B299}
\definecolor{calloutBg}{HTML}{F8D7D4}
\definecolor{calloutHeader}{HTML}{DD3645}
\definecolor{summaryBg}{HTML}{EFE3EE}
\definecolor{summaryTitle}{HTML}{5C2D75}
\definecolor{summaryBullet}{HTML}{9A6FB0}
\definecolor{eocBg}{HTML}{DFEFF8}
\definecolor{eocTitle}{HTML}{527993}
\definecolor{pageBadge}{HTML}{596A76}
\definecolor{subHeadingGray}{HTML}{5A5A5A}
\definecolor{irRed}{HTML}{C0392B}

% --- Định dạng Tiêu đề Mục giống hệt Sách Gốc ---
\newcommand{\sectionRed}[1]{%
  \vspace{0.35em}%
  {\Large\bfseries\sffamily\color{cambridgeRed}#1\par}%
  \vspace{0.25em}%
}

\newcommand{\subsectionGray}[2]{%
  \vspace{0.35em}%
  {\large\bfseries\sffamily\color{subHeadingGray}#1\hspace{0.4em}#2\par}%
  \vspace{0.2em}%
}

\newcommand{\subsectionDark}[1]{%
  \vspace{0.3em}%
  {\normalsize\bfseries\sffamily\color{black!85}#1\par}%
  \vspace{0.15em}%
}

\newcommand{\termRed}[1]{\textbf{\textcolor{cambridgeRed}{#1}}}
\newcommand{\marks}[1]{\hfill{\sffamily\footnotesize\color{black!70}[#1]}}
\newcommand{\sq}[1]{\textquoteleft #1\textquoteright}

% --- Hộp CÂU HỎI (QUESTION Box có nhãn tab nâu phía trên) ---
\newtcolorbox{questionbox}{
  enhanced,
  breakable,
  colback=questionBg,
  colframe=questionBg,
  arc=3pt,
  top=10pt,
  bottom=8pt,
  left=10pt,
  right=10pt,
  before skip=10pt,
  after skip=10pt,
  fontupper=\small\sffamily,
  attach boxed title to top left={yshift=-2pt, xshift=0pt},
  boxed title style={
    colback=questionTab,
    colframe=questionTab,
    sharp corners=downhill,
    arc=2pt,
    top=2.5pt,
    bottom=2.5pt,
    left=8pt,
    right=10pt
  },
  fonttitle=\bfseries\sffamily\footnotesize\color{white},
  title={CÂU HỎI (QUESTION)}
}

% --- Hộp Chuyên đề Hồng/Đỏ ---
\newtcolorbox{calloutbox}[1]{
  enhanced,
  breakable,
  colback=calloutBg,
  colframe=calloutBg,
  arc=3pt,
  top=8pt,
  bottom=8pt,
  left=10pt,
  right=10pt,
  before skip=10pt,
  after skip=10pt,
  fontupper=\small\sffamily,
  colbacktitle=calloutHeader,
  coltitle=white,
  fonttitle=\bfseries\sffamily\small\MakeUppercase,
  titlerule=0pt,
  toptitle=4pt,
  bottomtitle=4pt,
  title={#1}
}

% --- Hộp TÓM TẮT (Summary Box màu tím) ---
\newtcolorbox{summarybox}{
  enhanced,
  colback=summaryBg,
  colframe=summaryBg,
  arc=3pt,
  top=12pt,
  bottom=12pt,
  left=12pt,
  right=12pt,
  before skip=12pt,
  after skip=10pt,
  fontupper=\small\sffamily
}

% --- Hộp CÂU HỎI CUỐI CHƯƠNG ---
\newtcolorbox{eocbox}{
  enhanced,
  breakable,
  colback=eocBg,
  colframe=eocBg,
  arc=3pt,
  top=14pt,
  bottom=14pt,
  left=14pt,
  right=14pt,
  fontupper=\small\sffamily
}

% --- Kí hiệu danh sách vuông màu đỏ / tím ---
\newcommand{\redbullet}{\textcolor{cambridgeRed}{\rule[0.15ex]{0.55em}{0.55em}}}
\newcommand{\purplebullet}{\textcolor{summaryBullet}{\rule[0.55em]{0.55em}}}
\newcommand{\bluebullet}{\textcolor{eocTitle}{\rule[0.15ex]{0.55em}{0.55em}}}

% --- Lệnh vẽ nhanh ống nghiệm TikZ ---
\newcommand{\testtube}[3][white]{%
  % #1 = màu dung dịch, #2 = chiều cao cột dung dịch (cm), #3 = nhãn
  \begin{tikzpicture}[baseline=(base.base)]
    \draw[thick, gray!60!black] (0,0) -- (0,3) arc (180:0:0.45) -- (0.9,0) arc (0:-180:0.45);
    \fill[#1, opacity=0.85] (0.06,-0.38) rectangle (0.84,#2);
    \fill[#1, opacity=0.85] (0.45,-0.42) circle (0.39);
    \node[base, below, font=\sffamily\scriptsize] at (0.45,-0.95) {#3};
  \end{tikzpicture}%
}

% --- Header & Footer hiển thị số trang kiểu nhãn lề sách giáo khoa ---
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[LE,RO]{%
  \tikz[baseline=(n.base)] \node[fill=pageBadge, text=white, font=\sffamily\bfseries\footnotesize, inner xsep=6pt, inner ysep=3pt, rounded corners=1pt] (n) {\thepage};%
}
\fancyhead[LO,RE]{\sffamily\footnotesize\color{black!55}Chương 18: Hợp chất carbonyl}

\setlength{\parindent}{1em}
\setlength{\parskip}{0.35em}
`;

export const LATEX_PAGE_234 = String.raw`% ==========================================================================
% TRANG 234: TRANG MỞ ĐẦU CHƯƠNG 18 + LEARNING OUTCOMES
% ==========================================================================
\setcounter{page}{234}

% --- Dải ảnh trái cây (vẽ vector mô phỏng) ---
\begin{tikzpicture}
  \clip (0,0) rectangle (\textwidth,3.4cm);
  \fill[green!45!black] (0,0) rectangle (\textwidth,3.4cm);
  \foreach \i in {0,...,26}{
    \fill[yellow!60!green!80!white] ({0.4+mod(\i,7)*0.85},{0.4+div(\i,7)*0.8}) circle (0.42);
  }
  \foreach \i in {0,...,29}{
    \fill[orange!70!red!75!white] ({5.2+mod(\i,6)*0.95},{0.35+div(\i,6)*0.78}) circle (0.46);
  }
  \fill[green!40!black] (12.6,0) rectangle (\textwidth,3.4cm);
  \foreach \i in {0,...,8}{
    \fill[green!50!black!80!yellow] ({13+mod(\i,3)*0.9},{0.6+div(\i,3)*0.9}) circle (0.5);
  }
\end{tikzpicture}

% --- Băng đen tiêu đề chương ---
\begin{tcolorbox}[enhanced, colback=black!90, colframe=black!90, arc=0pt, left=16pt, right=16pt, top=14pt, bottom=16pt]
  {\LARGE\bfseries\sffamily\color{cambridgeRed} Chương 18:\par}
  {\huge\bfseries\sffamily\color{white} Hợp chất carbonyl (Carbonyl compounds)\par}
\end{tcolorbox}

% --- Learning outcomes ---
\begin{tcolorbox}[enhanced, colback=gray!8, colframe=gray!45, arc=2pt, left=12pt, right=12pt, top=10pt, bottom=10pt, fontupper=\small\sffamily]
  {\large\bfseries\sffamily\color{cambridgeRed} Learning outcomes (Chuẩn đầu ra)\par}
  \vspace{0.4em}
  \textbf{Bạn cần có khả năng:}
  \begin{multicols}{2}
  \begin{itemize}[leftmargin=1.2em, itemsep=2pt]
    \item[\redbullet] \textit{mô tả:}
      \begin{itemize}[leftmargin=1em]
        \item[--] sự hình thành aldehyde và ketone từ quá trình oxi hóa các alcohol bậc một và bậc hai
        \item[--] sự khử các aldehyde và ketone, ví dụ dùng \ce{NaBH4} hoặc \ce{LiAlH4}
        \item[--] phản ứng của các aldehyde và ketone với HCN và NaCN
      \end{itemize}
    \item[\redbullet] mô tả cơ chế của phản ứng cộng nucleophile của hydrogen cyanide
    \item[\redbullet] mô tả sự nhận biết các hợp chất carbonyl bằng cách dùng thuốc thử 2,4-DNPH
    \item[\redbullet] phân biệt các aldehyde và ketone bằng thử nghiệm với dung dịch Fehling và thuốc thử Tollens
    \item[\redbullet] mô tả phản ứng của các hợp chất \ce{CH3CO-} với dung dịch iodine trong kiềm
    \item[\redbullet] suy luận sự có mặt của nhóm \ce{CH3CH(OH)-} trong một alcohol từ phản ứng của nó với dung dịch iodine trong kiềm tạo thành tri-iodomethane
    \item[\redbullet] phân tích phổ hồng ngoại của một phân tử đơn giản để nhận biết các nhóm chức
  \end{itemize}
  \end{multicols}
\end{tcolorbox}
`;

export const LATEX_PAGE_235 = String.raw`% ==========================================================================
% TRANG 235: GIỚI THIỆU + DÃY ĐỒNG ĐẲNG ALDEHYDE/KETONE + BẢNG 18.1, 18.2
% ==========================================================================
\setcounter{page}{235}

% --- Khung đỏ Đầu trang: Giới thiệu + công thức khai triển + Hình 18.1 ---
\begin{tcolorbox}[
  enhanced,
  colback=cambridgeRed,
  colframe=cambridgeRed,
  arc=2pt,
  left=14pt, right=14pt, top=14pt, bottom=14pt,
  after skip=14pt
]
  \begin{minipage}[t]{0.52\textwidth}
    {\LARGE\bfseries\sffamily\color{white} Giới thiệu (Introduction)\par}
    \vspace{0.5em}
    {\small\sffamily\color{white}\setlength{\parskip}{0.4em}
    Các hợp chất carbonyl thơm có mùi rất đặc trưng, giống như mùi hạnh nhân. \textbf{Benzaldehyde} được dùng để làm tinh dầu hạnh nhân (almond essence), chất tạo hương dùng trong một số loại bánh ngọt và pudding. Benzaldehyde cũng là một thành phần của các hỗn hợp tạo nên mùi và vị của nhiều loại trái cây như xoài, cherry, mơ, mận và đào. Cấu tạo của heptan-2-one và benzaldehyde được trình bày bên phải:\par}
  \end{minipage}\hfill
  \begin{minipage}[t]{0.44\textwidth}
    \vspace{0pt}\centering\small\sffamily\color{white}
    % heptan-2-one (công thức khai triển)
    \chemfig{H-[:90]C(-[:90]H)(-[:-90]H)-C(=[:-90]O)-C(-[:90]H)(-[:-90]H)-C(-[:90]H)(-[:-90]H)-C(-[:90]H)(-[:-90]H)-C(-[:90]H)(-[:-90]H)-C(-[:90]H)(-[:-90]H)-H}\par
    heptan-2-one\par\vspace{0.6em}
    % benzaldehyde
    \chemfig{*6(=-=-=-)-C(=[:90]O)(-[:-30]H)}\par
    benzaldehyde
  \end{minipage}
  \tcblower
  {\small\sffamily\color{white}
  \textbf{Hình 18.1} \textbf{a} Heptan-2-one, một ketone, chịu trách nhiệm cho mùi của phô mai xanh (blue cheese). \textbf{b} Benzaldehyde, một aldehyde, góp phần tạo nên hương vị của nhiều loại trái cây và hạt cốc. Cấu tạo của heptan-2-one và benzaldehyde được trình bày ở trên bằng công thức khai triển.\par}
\end{tcolorbox}

\begin{multicols}{2}
\sectionRed{Dãy đồng đẳng của aldehyde và ketone}

Chúng ta đã gặp các aldehyde và ketone, những nhóm chính của các hợp chất carbonyl, ở Chương 17. Hãy nhớ rằng:
\begin{itemize}[leftmargin=1.1em, itemsep=2pt]
  \item[\redbullet] các aldehyde có thể được tạo thành từ sự oxi hóa các alcohol bậc một
  \item[\redbullet] các ketone có thể được tạo thành từ sự oxi hóa các alcohol bậc hai (xem trang 236).
\end{itemize}

Trong các aldehyde, nguyên tử carbon của nhóm carbonyl, C=O, liên kết với một nguyên tử carbon và một nguyên tử hydrogen. Nói cách khác, nhóm carbonyl nằm ở đầu mút của mạch carbon.

Trong các ketone, nhóm carbonyl gắn với hai nguyên tử carbon khác. Các bảng 18.1 và 18.2 đưa ra các ví dụ ở đầu của những dãy đồng đẳng này.

\vspace{0.5em}
{\small\sffamily
\rowcolors{2}{gray!15}{gray!25}
\begin{tabular}{@{}ll@{}}
  \rowcolor{gray!55}\color{white}\textbf{Tên} & \color{white}\textbf{Công thức cấu tạo} \\
  methanal    & HCHO \\
  ethanal     & \ce{CH3CHO} \\
  propanal    & \ce{CH3CH2CHO} \\
  butanal     & \ce{CH3CH2CH2CHO} \\
  pentanal    & \ce{CH3CH2CH2CH2CHO} \\
\end{tabular}\par}
{\footnotesize\sffamily \textbf{Bảng 18.1} Tên của các aldehyde bắt nguồn từ tên của alkane tương đương, với hậu tố \sq{-e} ở cuối tên được thay bằng \sq{-al}. Lưu ý rằng không cần con số khi gọi tên các aldehyde, vì nhóm carbonyl luôn ở đầu mút của mạch carbon.\par}

\vspace{0.8em}
{\small\sffamily
\rowcolors{2}{gray!15}{gray!25}
\begin{tabular}{@{}ll@{}}
  \rowcolor{gray!55}\color{white}\textbf{Tên} & \color{white}\textbf{Công thức cấu tạo} \\
  propanone    & \ce{CH3COCH3} \\
  butanone     & \ce{CH3COCH2CH3} \\
  pentan-2-one & \ce{CH3COCH2CH2CH3} \\
  pentan-3-one & \ce{CH3CH2COCH2CH3} \\
\end{tabular}\par}
{\footnotesize\sffamily \textbf{Bảng 18.2} Các ketone được gọi tên bằng cách thay \sq{-e} bằng \sq{-one}. Tuy nhiên, với các phân tử ketone dài hơn butanone, chúng ta cần chỉ rõ vị trí của nhóm carbonyl.\par}
\end{multicols}
`;

export const LATEX_PAGE_236 = String.raw`% ==========================================================================
% TRANG 236: CÂU HỎI 1 + ĐIỀU CHẾ ALDEHYDE & KETONE (OXI HÓA) + HÌNH 18.2
% ==========================================================================
\setcounter{page}{236}

\begin{questionbox}
\textbf{1}\hspace{0.6em}\textbf{a} Gọi tên các hợp chất sau:
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
  \item \ce{CH3CH2CH2CH2CH2CHO}
  \item \ce{CH3CH2CH2CH2CH2CH2COCH3}
\end{itemize}
\textbf{b} Vẽ công thức khai triển (displayed formula) của:
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
  \item methanal \item propanal \item pentan-3-one.
\end{itemize}
\textbf{c} Vẽ công thức skeletal (khung xương) của các hợp chất liệt kê ở phần a.
\end{questionbox}

\sectionRed{Điều chế aldehyde và ketone}

\begin{calloutbox}{1 Oxi hóa một alcohol bậc một}
Phương trình tổng quát cho phản ứng điều chế một aldehyde từ một alcohol bậc một là:
\begin{center}\small
primary alcohol + nguyên tử oxygen từ tác nhân oxi hóa $\longrightarrow$ aldehyde + nước
\end{center}
Ví dụ:
\begin{center}\small
\ce{\underset{propan-1-ol}{CH3CH2CH2OH} + [O] -> \underset{propanal}{CH3CH2CHO} + H2O}
\end{center}
Tác nhân oxi hóa được dùng là dung dịch potassium dichromate(VI) được acid hóa bằng dung dịch sulfuric acid loãng. Để tạo ra một aldehyde, alcohol bậc một được đun nóng nhẹ với dung dịch dichromate đã acid hóa. Hỗn hợp phản ứng chuyển sang màu xanh lục khi các ion dichromate màu cam, \ce{Cr2O7^2-}, bị khử thành các ion \ce{Cr^3+}(aq) màu xanh lục.

Tác nhân oxi hóa được thêm từng giọt một vào alcohol đang ấm. Aldehyde tạo thành cần được chưng cất cất ra ngay khi nó hình thành trong bình phản ứng. Có thể làm vậy vì sản phẩm aldehyde luôn có nhiệt độ sôi thấp hơn alcohol tương ứng. Nếu aldehyde không được chưng cất ra ngay khi tạo thành, việc đun nóng thêm với dung dịch dichromate đã acid hóa sẽ oxi hóa aldehyde tạo thành thành một carboxylic acid. Bộ dụng cụ dùng để điều chế một mẫu ethanal được trình bày ở Hình 18.2.
\end{calloutbox}

% --- Hình 18.2: bộ chưng cất cất lấy aldehyde (TikZ) ---
\begin{figure}[H]\centering
\begin{tikzpicture}[scale=0.9, every node/.style={font=\sffamily\scriptsize}]
  % bình cầu
  \draw[thick, gray!60!black] (0,0) circle (0.9);
  \draw[thick, gray!60!black] (-0.25,0.85) -- (-0.25,1.8) (0.25,0.85) -- (0.25,1.8);
  \fill[green!40!black, opacity=0.85] (-0.82,-0.35) rectangle (0.82,-0.05);
  \fill[green!40!black, opacity=0.85] (0,-0.42) circle (0.78);
  % nút + ống dẫn
  \fill[gray!70] (-0.3,1.8) rectangle (0.3,2.05);
  \draw[thick, gray!60!black] (0,2.05) -- (0,2.6) -- (3.2,2.6) -- (3.2,0.6);
  % ống nghiệm nhận
  \draw[thick, gray!60!black] (2.95,0.9) -- (2.95,-0.4) arc (180:360:0.25) -- (3.45,0.9);
  \fill[blue!15] (3.0,-0.35) rectangle (3.4,0.1);
  % ngọn lửa đun nhẹ
  \fill[orange] (0,-1.35) to[out=120,in=-90] (0.18,-1.05) to[out=90,in=0] (0,-0.95) to[out=180,in=90] (-0.18,-1.05) to[out=-90,in=60] cycle;
  \node[below] at (0,-1.5) {đun nhẹ (gentle heat)};
  \node[left, align=right] at (-1.1,0.2) {ethanol + kali\\dichromate(VI)\\đã acid hóa};
  \draw[gray, ->] (-1.05,0.15) -- (-0.85,-0.1);
  \node[right] at (3.6,0.3) {ethanal};
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 18.2} Chưng cất cất lấy aldehyde, ethanal, tạo thành trong quá trình oxi hóa nhẹ một alcohol bậc một. Ethanal tạo thành trong dung dịch nước có mùi giống như táo thối.}
\end{figure}

\begin{calloutbox}{2 Oxi hóa một alcohol bậc hai}
Phương trình tổng quát để điều chế một ketone là:
\begin{center}\small
secondary alcohol + nguyên tử oxygen từ tác nhân oxi hóa $\longrightarrow$ ketone + nước
\end{center}
Ví dụ:
\begin{center}\small
\ce{\underset{propan-2-ol}{CH3CH(OH)CH3} + [O] -> \underset{propanone}{CH3COCH3} + H2O}
\end{center}
Một lần nữa, tác nhân oxi hóa được dùng là dung dịch potassium dichromate(VI) được acid hóa bằng dung dịch sulfuric acid loãng. Để tạo ra một ketone, tác nhân oxi hóa này phải được đun nóng với một alcohol bậc hai. Ketone tạo thành không thể bị oxi hóa tiếp, ngay cả khi ta đun hồi lưu hỗn hợp phản ứng và thêm dư tác nhân oxi hóa. Do đó ta không cần chưng cất sản phẩm ketone ra ngay lập tức.
\end{calloutbox}
`;

export const LATEX_PAGE_237 = String.raw`% ==========================================================================
% TRANG 237: CÂU 2 + KHỬ ALDEHYDE/KETONE + CÂU 3 + CỘNG NUCLEOPHILE VỚI HCN
% ==========================================================================
\setcounter{page}{237}

\begin{questionbox}
\textbf{2}\hspace{0.6em}\textbf{a i} Viết phương trình cân bằng cho sự oxi hóa ethanol thành ethanal, dùng [O] để biểu diễn tác nhân oxi hóa.
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}, start=2]
  \item Viết lại phương trình ở phần a i bằng công thức khai triển.
  \item Dùng các chi tiết thực nghiệm để giải thích cách tiến hành và thu lấy một mẫu ethanal.
\end{itemize}
\textbf{b i} Viết phương trình cân bằng cho sự oxi hóa butan-2-ol thành butanone, dùng [O] để biểu diễn tác nhân oxi hóa.
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}, start=2]
  \item Bạn quan sát được gì trong bình phản ứng nếu tác nhân oxi hóa dùng ở phần b i là dung dịch potassium dichromate(VI) đã acid hóa?
  \item Điều gì xảy ra nếu đun nóng hỗn hợp với dư dung dịch sulfuric acid và potassium dichromate(VI) đã acid hóa?
\end{itemize}
\end{questionbox}

\sectionRed{Khử aldehyde và ketone}

Sự khử hóa học một aldehyde hoặc một ketone tạo ra một alcohol:
\begin{center}\small
aldehyde + tác nhân khử $\longrightarrow$ alcohol bậc một (primary alcohol)\\
ketone + tác nhân khử $\longrightarrow$ alcohol bậc hai (secondary alcohol)
\end{center}
Tác nhân khử được dùng thường là dung dịch kiềm trong nước của sodium tetrahydridoborate, \ce{NaBH4}, hoặc lithium tetrahydridoaluminate, \ce{LiAlH4}, trong ether khô (dry ether).

Phản ứng khử được tiến hành bằng một trong hai cách:
\begin{itemize}[leftmargin=1.1em, itemsep=2pt]
  \item[\redbullet] đun ấm aldehyde hoặc ketone với dung dịch kiềm trong nước của sodium tetrahydridoborate, hoặc
  \item[\redbullet] thêm lithium tetrahydridoaluminate hòa tan trong ether khô vào aldehyde hoặc ketone ở nhiệt độ phòng.
\end{itemize}
Trong hai tác nhân khử, lithium tetrahydridoaluminate là tác nhân khử mạnh hơn sodium tetrahydridoborate.

Theo cùng cách ta dùng kí hiệu [O] trong các phản ứng oxi hóa hữu cơ, ta dùng kí hiệu [H] trong các phương trình khử. [H] biểu diễn một nguyên tử hydrogen từ tác nhân khử. Hãy xem các phương trình tóm tắt các phản ứng khử này:
\begin{center}\small
\ce{\underset{ethanal}{CH3CHO} + 2[H] -> \underset{ethanol}{CH3CH2OH}}\\[0.4em]
\ce{\underset{propanone}{CH3COCH3} + 2[H] -> \underset{propan-2-ol}{CH3CH(OH)CH3}}
\end{center}

\begin{questionbox}
\textbf{3}\hspace{0.6em}\textbf{a} Viết phương trình cân bằng cho phản ứng xảy ra khi propanal được đun ấm với dung dịch kiềm trong nước của sodium tetrahydridoborate, dùng kí hiệu [H] để biểu diễn một nguyên tử hydrogen từ tác nhân khử.\\
\textbf{b} Gọi tên sản phẩm tạo thành trong phản ứng khử nếu pentan-3-one được dùng thay cho propanal, với lithium tetrahydridoaluminate trong ether khô.
\end{questionbox}

\sectionRed{Cộng nucleophile với HCN}

Các phản ứng cộng mà ta đã gặp liên quan đến sự cộng electrophile qua liên kết C=C của các phân tử alkene (xem trang 209). Các aldehyde và ketone đều trải qua phản ứng cộng với hydrogen cyanide, HCN. Trong trường hợp này, sự cộng HCN diễn ra qua liên kết C=O. Tuy nhiên, nguyên tử carbon là tác nhân electrophile (chất thân electron). Ta có thể chứng minh điều này bằng phản ứng \termRed{cộng nucleophile} của propanal với HCN. HCN được sinh ra tại chỗ (in situ) bằng phản ứng của sodium cyanide, NaCN, với sulfuric acid loãng.
\begin{center}\small
\ce{\underset{propanal}{CH3CH2CHO} + HCN -> \underset{2-hydroxybutanenitrile}{CH3CH2CH(OH)CN}}
\end{center}
Lưu ý rằng một nguyên tử carbon đã được thêm vào phân tử propanal bằng cách bẻ gãy liên kết C=O.

Đây là một phản ứng hữu ích trong hóa học tổng hợp, vì nó làm tăng chiều dài mạch hydrocarbon của phân tử aldehyde ban đầu thêm một nguyên tử carbon.

Nhóm nitrile, \ce{-C#N}, có thể được:
\begin{itemize}[leftmargin=1.1em, itemsep=2pt]
  \item[\redbullet] thủy phân thành một carboxylic acid
  \item[\redbullet] khử thành một amine.
\end{itemize}
Sự thủy phân có thể được tiến hành bằng cách đun hồi lưu với hydrochloric acid loãng:
\begin{center}\small \ce{-CN + H+ + H2O -> -COOH + NH4+} \end{center}
Sự khử nhóm nitrile thành một amine có thể được tiến hành dùng sodium và ethanol:
\begin{center}\small \ce{-CN + 4[H] -> -CH2NH2} \end{center}
`;

export const LATEX_PAGE_238 = String.raw`% ==========================================================================
% TRANG 238: CƠ CHẾ CỘNG NUCLEOPHILE + CÂU 4 + THỬ VỚI 2,4-DNPH + HÌNH 18.3
% ==========================================================================
\setcounter{page}{238}

\sectionRed{Cơ chế của phản ứng cộng nucleophile}

Nhóm carbonyl, C=O, trong các aldehyde và ketone bị phân cực do độ âm điện cao của nguyên tử oxygen. Các electron trong liên kết C=O bị kéo về phía nguyên tử O, làm cho nó mang một phần điện tích âm và để lại nguyên tử C mang một phần điện tích dương. Điều này khiến nguyên tử C dễ bị tấn công bởi một nucleophile, chẳng hạn như ion cyanide, \ce{CN-}.

\subsectionDark{Bước thứ nhất (First step)}
\begin{center}
\begin{tikzpicture}[font=\sffamily\small, every node/.style={inner sep=1pt}]
  \node (C) at (0,0) {C};
  \node (O) at (0.5,1) {O};
  \draw (C) -- (0.35,0.7); \draw (C) -- (0.62,0.82);
  \draw (C) -- (-0.7,-0.7) node[below left] {R};
  \draw (C) -- (0.7,-0.7) node[below right] {R\textprime};
  \node (CN) at (2.6,-0.9) {$\ce{^{-}:CN}$};
  \draw[-{Stealth[length=2.5mm]}, red!70!black, bend left=20] (CN) to (C);
  \draw[-{Stealth[length=2.5mm]}, red!70!black, bend left=20] (0.5,0.6) to (1.3,1.4);
  \node at (4.3,0) {$\longrightarrow$};
  \node (Ci) at (6,0) {C};
  \node (Oi) at (6,1.1) {\ce{O-}};
  \draw (Ci) -- (Oi);
  \draw (Ci) -- (5.3,-0.7) node[below left] {R};
  \draw (Ci) -- (6.7,-0.7) node[below right] {R\textprime};
  \draw (Ci) -- (6,-1.1) node[below] {CN};
  \node[font=\sffamily\scriptsize, gray] at (6,1.8) {intermediate (trung gian)};
\end{tikzpicture}
\end{center}
Intermediate mang điện tích âm tạo thành ở bước thứ nhất của cơ chế có hoạt tính rất cao và nhanh chóng phản ứng với các ion \ce{H+} từ HCN (từ acid loãng hoặc từ nước có trong hỗn hợp phản ứng). Điều này tạo thành sản phẩm \termRed{2-hydroxynitrile}.

\subsectionDark{Bước thứ hai (Second step)}
\begin{center}
\begin{tikzpicture}[font=\sffamily\small, every node/.style={inner sep=1pt}]
  \node (C) at (0,0) {C};
  \node (O) at (0,1.1) {\ce{O-}};
  \draw (C) -- (O);
  \draw (C) -- (-0.7,-0.7) node[below left] {R};
  \draw (C) -- (0.7,-0.7) node[below right] {R\textprime};
  \draw (C) -- (0,-1.1) node[below] {CN};
  \node (H) at (2.2,0.6) {H}; \node (HCN) at (3.1,0.6) {CN}; \draw (H) -- (HCN);
  \draw[-{Stealth[length=2.5mm]}, red!70!black, bend left=25] (O) to (H);
  \draw[-{Stealth[length=2.5mm]}, red!70!black, bend right=25] (2.6,0.35) to (3.2,-0.5);
  \node at (4.4,0) {$\longrightarrow$};
  \node (Cp) at (6,0) {C};
  \node (Op) at (6,1.1) {OH};
  \draw (Cp) -- (Op);
  \draw (Cp) -- (5.3,-0.7) node[below left] {R};
  \draw (Cp) -- (6.7,-0.7) node[below right] {R\textprime};
  \draw (Cp) -- (6,-1.1) node[below] {CN};
  \node at (7.8,0) {$+\ \ce{CN-}$};
  \node[font=\sffamily\scriptsize, gray] at (6,1.8) {2-hydroxynitrile};
\end{tikzpicture}
\end{center}

Tất cả các aldehyde và ketone đều tạo thành các \sq{2-hydroxynitrile} khi chúng trải qua phản ứng cộng nucleophile, vì nhóm --OH (hydroxyl) luôn gắn với cùng nguyên tử carbon như nhóm nitrile.

Tuy nhiên, bắt đầu từ aldehyde methanal, HCHO, hydroxynitrile tạo thành trong phản ứng cộng nucleophile với HCN sẽ được gọi là 2-hydroxyethanenitrile. Trong trường hợp này không cần chèn chữ số \sq{2} vào đầu tên, vì nhóm --OH chỉ có thể gắn vào đúng nguyên tử carbon thuộc nhóm nitrile.

\begin{questionbox}
\textbf{4}\hspace{0.6em}\textbf{a} Gọi tên sản phẩm hữu cơ tạo thành trong phản ứng cộng nucleophile của HCN vào:
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
  \item ethanal \item propanone.
\end{itemize}
\textbf{b} Dùng sơ đồ và các mũi tên cong để mô tả cơ chế của phản ứng ở phần a i.
\end{questionbox}

\sectionRed{Thử nghiệm aldehyde và ketone}
\subsectionGray{}{đối với nhóm carbonyl (for the carbonyl group)}

\begin{calloutbox}{Thử với 2,4-DNPH}
Sự có mặt của một nhóm carbonyl trong một aldehyde hoặc ketone có thể được thử nghiệm dễ dàng bằng cách thêm một dung dịch 2,4-dinitrophenylhydrazine (thường viết tắt là 2,4-DNPH). Nếu một aldehyde hoặc ketone có mặt, một kết tủa màu cam đậm được tạo thành (Hình 18.3).
\end{calloutbox}

% --- Hình 18.3: kết tủa cam với 2,4-DNPH ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[blue!60!black] (-2.2,-2.2) rectangle (2.2,2.4);
  \draw[thick, gray!30] (-0.45,2) -- (-0.45,-1.4) arc (180:360:0.45) -- (0.45,2);
  \fill[orange!85!red] (-0.39,1.2) rectangle (0.39,-1.35);
  \fill[orange!85!red] (0,-1.4) circle (0.39);
  \foreach \i in {0,...,5}{ \fill[yellow!60!white, opacity=0.8] ({-0.25+mod(\i,3)*0.25},{0.9-\i*0.4}) circle (0.045); }
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 18.3} Kết tủa màu cam tạo thành từ 2,4-DNPH trong một ống nghiệm cho biết sự có mặt của một ketone (hoặc aldehyde).}
\end{figure}

Cấu tạo của 2,4-dinitrophenylhydrazine như sau (xem sơ đồ phản ứng ngưng tụ ở trang sau).

Kết tủa tạo thành có thể được tinh chế bằng cách kết tinh lại và nhiệt độ nóng chảy của nó có thể được đo bằng thực nghiệm. Danh tính của hợp chất đã kết tủa sau đó có thể được tìm ra bằng cách tra cứu nhiệt độ nóng chảy. Từ đó, có thể nhận biết aldehyde hoặc ketone cụ thể đã dùng trong phép thử.

Phản ứng của một aldehyde hoặc ketone với 2,4-dinitrophenylhydrazine là một ví dụ về \termRed{phản ứng ngưng tụ} (condensation reaction). Trong một phản ứng ngưng tụ, hai phân tử kết hợp với nhau và loại bỏ một phân tử nhỏ; trong trường hợp này là nước. Phương trình cho phản ứng của ethanal với 2,4-DNPH:
`;

export const LATEX_PAGE_239 = String.raw`% ==========================================================================
% TRANG 239: PHẢN ỨNG NGƯNG TỤ + TOLLENS + FEHLING + HÌNH 18.4, 18.5
% ==========================================================================
\setcounter{page}{239}

% --- Phương trình ngưng tụ ethanal + 2,4-DNPH (chemfig) ---
\begin{center}\small
\chemfig{*6((-NO_2)-(-NO_2)=(-NH-NH_2)-=-=-)}\ +\ \chemfig{CH_3-CHO}\ $\longrightarrow$\ \chemfig{*6((-NO_2)-(-NO_2)=(-NH-N=CH-CH_3)-=-=-)}\ +\ \ce{H2O}\\[0.3em]
{\sffamily\scriptsize 2,4-dinitrophenylhydrazine \hspace{4em} 2,4-dinitrophenylhydrazone}
\end{center}
Các lớp hợp chất hữu cơ khác cũng chứa nhóm carbonyl (chẳng hạn các carboxylic acid và ester) không tạo kết tủa với 2,4-DNPH.

\sectionRed{Phân biệt aldehyde và ketone}

Như ta đã thấy ở trang 236, các aldehyde có thể bị oxi hóa tiếp thành các carboxylic acid, nhưng các ketone thì không thể bị oxi hóa dễ dàng. Ta có thể dùng sự khác biệt này để phân biệt giữa một aldehyde và một ketone trong các thử nghiệm hóa học đơn giản. Hai thử nghiệm được dùng phổ biến nhất liên quan đến thuốc thử Tollens và dung dịch Fehling.

\begin{calloutbox}{Thử với thuốc thử Tollens}
\termRed{Thuốc thử Tollens} là dung dịch nước của silver nitrate trong dung dịch ammonia dư, đôi khi được gọi là dung dịch ammoniacal silver nitrate. Các ion bạc, \ce{Ag+}, trong dung dịch đóng vai trò một tác nhân oxi hóa nhẹ. Khi được hâm nóng, các ion \ce{Ag+} sẽ oxi hóa một aldehyde thành một ion carboxylate.

Trong điều kiện kiềm, bất kỳ carboxylic acid nào tạo thành đều lập tức bị trung hòa thành ion carboxylate, \ce{-COO-}, khi \ce{H+} bị tách ra khỏi \ce{-COOH} và một muối được tạo thành.

Trong phản ứng oxi hóa -- khử với một aldehyde, bản thân các ion \ce{Ag+} bị khử thành các nguyên tử bạc. Các nguyên tử bạc tạo thành một lớp \sq{gương} bên trong ống nghiệm, cho kết quả dương tính với một aldehyde (Hình 18.4).

Sẽ không quan sát thấy sự thay đổi nào khi một ketone được hâm nóng với thuốc thử Tollens, vì không có phản ứng oxi hóa nào diễn ra. Hỗn hợp vẫn không màu trong ống nghiệm.
\end{calloutbox}

% --- Hình 18.4: Tollens trước/sau ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[blue!50!black!80] (-3,-2.2) rectangle (3,2.4);
  \draw[thick, gray!30] (-2.2,2) -- (-2.2,-1.4) arc (180:360:0.45) -- (-1.3,2);
  \fill[blue!10!white, opacity=0.9] (-2.14,0.8) rectangle (-1.36,-1.35);
  \fill[blue!10!white, opacity=0.9] (-1.75,-1.4) circle (0.39);
  \node[white, font=\sffamily\scriptsize] at (-1.75,-1.9) {trước};
  % gương bạc
  \draw[thick, gray!30] (1.3,2) -- (1.3,-1.4) arc (180:360:0.45) -- (2.2,2);
  \fill[left color=gray!70, middle color=gray!15, right color=gray!60] (1.36,1.4) rectangle (2.14,-1.35);
  \fill[left color=gray!70, middle color=gray!15, right color=gray!60] (1.75,-1.4) circle (0.39);
  \foreach \i in {0,...,4}{ \fill[white] ({1.5+mod(\i,3)*0.25},{1.0-div(\i,3)*0.9}) circle (0.05); }
  \node[white, font=\sffamily\scriptsize] at (1.75,-1.9) {sau};
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 18.4} Quan sát \sq{trước} và \sq{sau} khi thuốc thử Tollens được hâm nóng với một aldehyde, chẳng hạn như ethanal: một lớp \sq{gương bạc} tráng bên trong ống nghiệm.}
\end{figure}

\begin{calloutbox}{Thử với dung dịch Fehling}
\termRed{Dung dịch Fehling} là một dung dịch kiềm chứa các ion copper(II). Khi hâm nóng với một aldehyde, các ion \ce{Cu^2+} đóng vai trò tác nhân oxi hóa. Aldehyde bị oxi hóa thành ion carboxylate trong khi các ion \ce{Cu^2+} bị khử thành các ion \ce{Cu+}. Dung dịch Fehling màu xanh lam trong chuyển thành một kết tủa copper(I) oxide màu đỏ đục hình thành khắp dung dịch (Hình 18.5).

Một lần nữa, các ketone không bị oxi hóa, nên dung dịch Fehling vẫn màu xanh lam khi hâm nóng.
\end{calloutbox}

% --- Hình 18.5: Fehling trước/sau ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[gray!25] (-3,-2.2) rectangle (3,2.4);
  \draw[thick, gray!60!black] (-2.2,2) -- (-2.2,-1.4) arc (180:360:0.45) -- (-1.3,2);
  \fill[cyan!60!blue, opacity=0.85] (-2.14,0.8) rectangle (-1.36,-1.35);
  \fill[cyan!60!blue, opacity=0.85] (-1.75,-1.4) circle (0.39);
  \node[gray!40!black, font=\sffamily\scriptsize] at (-1.75,-1.9) {trước};
  \draw[thick, gray!60!black] (1.3,2) -- (1.3,-1.4) arc (180:360:0.45) -- (2.2,2);
  \fill[orange!80!red, opacity=0.9] (1.36,0.8) rectangle (2.14,-1.35);
  \fill[orange!80!red, opacity=0.9] (1.75,-1.4) circle (0.39);
  \node[gray!40!black, font=\sffamily\scriptsize] at (1.75,-1.9) {sau};
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 18.5} Quan sát \sq{trước} và \sq{sau} khi dung dịch Fehling được hâm nóng với một aldehyde, chẳng hạn như ethanal: dung dịch xanh lam trong chuyển thành kết tủa đỏ cam đục.}
\end{figure}
`;

export const LATEX_PAGE_240 = String.raw`% ==========================================================================
% TRANG 240: CÂU 5 + PHẢN ỨNG TẠO TRI-IODOMETHANE + HÌNH 18.6
% ==========================================================================
\setcounter{page}{240}

\begin{questionbox}
\textbf{5}\hspace{0.6em}Nhiệt độ nóng chảy của các dẫn xuất từ phản ứng giữa 2,4-DNPH với nhiều aldehyde và ketone khác nhau được trình bày trong bảng.\\[0.4em]
{\footnotesize
\rowcolors{2}{questionBg}{brown!15}
\begin{tabular}{@{}lc@{}}
  \rowcolor{questionTab}\color{white}\textbf{Sản phẩm phản ứng giữa 2,4-DNPH và\dots} & \color{white}\textbf{Nhiệt độ nóng chảy / \textdegree C} \\
  ethanal   & 168 \\
  propanal  & 155 \\
  butanal   & 126 \\
  propanone & 126 \\
  butanone  & 116 \\
\end{tabular}\par}\vspace{0.5em}

\textbf{a} Quan sát được gì khi mỗi hợp chất carbonyl trong bảng được trộn với 2,4-DNPH?\\
\textbf{b} Một dẫn xuất được tạo thành từ phản ứng giữa 2,4-DNPH và một hợp chất carbonyl chưa biết:
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
  \item Nhiệt độ nóng chảy của dẫn xuất là 126\,\textdegree C. Kết quả này cho biết điều gì?
  \item Hợp chất carbonyl chưa biết tạo một kết tủa màu cam khi được hâm nóng với dung dịch Fehling. Gọi tên hợp chất chưa biết đó.
  \item Mô tả và giải thích các kết quả thử nghiệm thu được khi hợp chất gọi tên ở phần b ii được hâm nóng với thuốc thử Tollens, và khi phép thử được thực hiện với butanone.
\end{itemize}
\textbf{c} Viết một nửa phương trình (half-equation) cho thấy các ion bạc đóng vai trò một tác nhân oxi hóa trong một phép thử dương tính với một aldehyde.\\
\textbf{d} Viết một nửa phương trình cho thấy các ion copper(II) đóng vai trò một tác nhân oxi hóa trong một phép thử dương tính với một aldehyde.
\end{questionbox}

\sectionRed{Phản ứng tạo tri-iodomethane}

Tri-iodomethane (iodoform) tạo thành một kết tủa màu vàng với các methyl ketone, tức là các hợp chất chứa nhóm \ce{CH3CO-} (Hình 18.6). Lưu ý rằng một alcohol chứa nhóm \ce{CH3CH(OH)-} cũng cho kết quả dương tính. Các nhà hóa học dùng sự xuất hiện của kết tủa vàng làm bằng chứng cho nhóm \ce{CH3CO-} trong một hợp chất chưa biết.

Thuốc thử được dùng là một dung dịch kiềm của iodine, được hâm nóng cùng với chất cần thử.

% --- Hình 18.6: kết tủa vàng tri-iodomethane ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[black!92] (-2.2,-2.4) rectangle (2.2,2.4);
  \draw[thick, gray!50] (-0.45,2) -- (-0.45,-1.5) arc (180:360:0.45) -- (0.45,2);
  \fill[yellow!70!brown, opacity=0.8] (-0.39,0.9) rectangle (0.39,-1.45);
  \fill[yellow!70!brown, opacity=0.8] (0,-1.5) circle (0.39);
  \fill[yellow!50!white] (-0.36,-1.15) rectangle (0.36,-1.42);
  \fill[yellow!50!white] (0,-1.47) circle (0.36);
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 18.6} Kết tủa màu vàng của tri-iodomethane (iodoform) đang tạo thành.}
\end{figure}

Phản ứng diễn ra theo hai bước:
\begin{enumerate}[leftmargin=1.4em, itemsep=2pt]
  \item hợp chất carbonyl bị halogen hóa --- ba nguyên tử hydrogen trong nhóm \ce{CH3} được thay bằng các nguyên tử iodine
  \item intermediate bị thủy phân để tạo thành kết tủa vàng tri-iodomethane, \ce{CHI3} (Hình 18.6).
\end{enumerate}
Khi được tách ra khỏi hỗn hợp phản ứng, các tinh thể vàng của tri-iodomethane có thể được nhận dạng chắc chắn bằng nhiệt độ nóng chảy 119\,\textdegree C của chúng.

Dưới đây là ví dụ với một nhóm alkyl R trong một methyl ketone:
\begin{center}\small
\begin{tabular}{@{}ccc@{}}
  \textbf{Bước 1} & & \textbf{Bước 2} \\
  \ce{\underset{\text{một methyl ketone}}{RCOCH3}}
  & \ce{->[\ I2,\ NaOH(aq)\ ]} RCOCI3
  & \ce{->[\ NaOH(aq),\ thủy\ phân\ ]} \ce{RCOO- Na+ + CHI3} \\
  & & {\scriptsize\sffamily tri-iodomethane (kết tủa vàng)}
\end{tabular}
\end{center}

\subsectionGray{}{Thử nghiệm nhóm \ce{CH3CH(OH)-}}

Thử nghiệm tri-iodomethane cũng có thể được dùng để nhận biết sự có mặt của một nhóm alcohol bậc hai trên một nguyên tử carbon kề cận một nhóm methyl. Nhóm \ce{CH3CH(OH)-} này trước hết bị oxi hóa bởi dung dịch iodine trong kiềm. Sự oxi hóa này tạo thành một methyl ketone, \ce{RCOCH3}, sau đó trải qua hai bước trình bày ở trên để cho kết tủa vàng tri-iodomethane, \ce{CHI3}.

Bạn nên lưu ý rằng có hai sản phẩm hữu cơ được tạo thành trong phản ứng này: một là tri-iodomethane và sản phẩm kia là muối sodium của một carboxylic acid.
`;

export const LATEX_PAGE_241 = String.raw`% ==========================================================================
% TRANG 241: CÂU 6 + PHỔ HỒNG NGOẠI + HÌNH 18.7 + BẢNG 18.3
% ==========================================================================
\setcounter{page}{241}

\begin{questionbox}
\textbf{6}\hspace{0.6em}\textbf{a i} Khi propanone được hâm nóng với dung dịch iodine trong kiềm, một kết tủa màu vàng được tạo thành. Gọi tên và vẽ công thức khai triển của kết tủa vàng đó.
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}, start=2]
  \item Cho biết công thức cấu tạo của các sản phẩm hữu cơ tạo thành ở cả hai bước của phản ứng trong phần i.
\end{itemize}
\textbf{b} Giải thích, kèm tên các sản phẩm hữu cơ tạo thành, vì sao ethanol cho kết quả thử dương tính khi được hâm nóng với dung dịch iodine trong kiềm.\\
\textbf{c} Hợp chất nào sau đây cho kết tủa màu vàng khi xử lý với iodine trong dung dịch kiềm nước:
\begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
  \item butanone \item pentan-2-one \item butanal \item ethanal \item pentan-3-one \item methanal
\end{itemize}
\end{questionbox}

\sectionRed{Phổ hồng ngoại (Infra-red spectroscopy)}

Trong \termRed{phổ hồng ngoại}, mẫu chất được phân tích được chiếu xạ bằng bức xạ điện từ trong vùng hồng ngoại của phổ điện từ. Máy được sử dụng gọi là máy quang phổ (spectrophotometer), và nó phát hiện cường độ của mỗi bước sóng bức xạ hồng ngoại đi qua mẫu.

Kĩ thuật phân tích này đặc biệt hữu ích cho các nhà hóa học hữu cơ vì mọi phân tử hữu cơ đều hấp thụ bức xạ trong vùng bước sóng hồng ngoại. Năng lượng được hấp thụ tương ứng với những thay đổi trong dao động của các liên kết giữa các nguyên tử. Các liên kết có thể dao động bằng cách co giãn (stretching), uốn (bending) và xoay (twisting). Chúng có một tần số dao động tự nhiên mà tại đó chúng dao động. Nếu ta chiếu xạ phân tử với tần số trùng với tần số này, hiện tượng cộng hưởng xảy ra và kích thích các dao động lớn hơn, và năng lượng được hấp thụ. Đó gọi là \termRed{tần số cộng hưởng} của dao động đó.

Mỗi loại dao động sẽ hấp thụ những bước sóng đặc trưng của bức xạ hồng ngoại. Chúng có thể được biểu diễn bằng nghịch đảo của bước sóng trong một đơn vị gọi là \textbf{số sóng} (wavenumbers, đo bằng cm$^{-1}$). Ta không thể quá cụ thể khi trích dẫn các tần số hấp thụ đặc trưng của một liên kết, bởi vì bản chất của phần còn lại của phân tử ảnh hưởng tới năng lượng mà mỗi phân tử riêng lẻ hấp thụ. Tuy nhiên, ta có thể nói, ví dụ, nhóm amine của ethylamine hấp thụ trong khoảng 3300 đến 3500 cm$^{-1}$ (Hình 18.7).

Do đó ta có thể nhận biết sự có mặt hay vắng mặt của các nhóm chức khác nhau từ dạng hấp thụ trong một phổ hồng ngoại. Hãy xem phổ hồng ngoại của ethylamine trong Hình 18.7.

% --- Hình 18.7: phổ IR ethylamine (TikZ plot) ---
\begin{figure}[H]\centering
\begin{tikzpicture}[font=\sffamily\tiny]
  \draw[gray!60] (0,0) rectangle (8,3.6);
  \foreach \x/\l in {0/4000,1.14/3500,2.29/3000,3.43/2500,4.57/2000,5.71/1500,6.86/1000,8/500}{
    \node[below] at (\x,0) {\l}; \draw[gray!30] (\x,0) -- (\x,3.6);
  }
  \draw[irRed, thick] plot[smooth] coordinates {
    (0,3.4) (0.9,3.3) (1.3,2.2) (1.5,2.3) (1.7,3.2) (2.3,1.9) (2.7,3.3)
    (4.6,3.2) (5.2,2.6) (5.6,3.1) (6.2,1.8) (6.6,3.0) (7.1,1.4) (7.5,2.4) (8,3.2)
  };
  \node[below] at (4,-0.5) {Wavenumber / cm$^{-1}$};
  \node[rotate=90, left] at (-0.4,1.8) {Absorbance / \%};
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 18.7} Phổ hồng ngoại của ethylamine, \ce{CH3CH2NH2}. Lưu ý rằng thang phần trăm hấp thụ và các số sóng trên trục đều có độ lớn nhỏ hơn dọc theo mỗi trục.}
\end{figure}

Ta có thể dùng phổ hồng ngoại đặc trưng của một hợp chất chưa biết để nhận dạng nó bằng kĩ thuật \sq{fingerprinting} (lấy dấu vân tay) từ một cơ sở dữ liệu các phổ đã biết. Một số vùng hấp thụ đặc trưng và dạng xuất hiện của các đỉnh được trình bày trong Bảng 18.3.

{\small\sffamily
\rowcolors{2}{gray!12}{gray!22}
\begin{tabular}{@{}lp{3.4cm}ll@{}}
  \rowcolor{gray!55}\color{white}\textbf{Liên kết} & \color{white}\textbf{Nhóm chức chứa liên kết} & \color{white}\textbf{Vùng hấp thụ / cm$^{-1}$} & \color{white}\textbf{Dạng đỉnh} \\
  C--O  & alcohols, ethers, esters      & 1040--1300 & s \\
  C=C   & hợp chất thơm, alkenes        & 1500--1680 & w trừ khi liên hợp \\
  C=O   & amides                        & 1640--1690 & s \\
        & ketones và aldehydes          & 1670--1740 & s \\
        & esters                        & 1715--1750 & s \\
  C$\equiv$C & alkynes                 & 2150--2250 & w trừ khi liên hợp \\
  C$\equiv$N & nitriles                & 2200--2250 & w \\
  C--H  & alkanes, \ce{CH3}-H;\ alkenes/arenes, =C--H & 2850--2950;\ 3000--3100 & s;\ w \\
  N--H  & amines, amides                & 3300--3500 & w \\
  O--H  & carboxylic acids, \ce{RCO2}-H & 2500--3000 & s và rất rộng \\
        & alcohol liên kết hydrogen, RO--H & 3200--3600 & s \\
        & alcohol tự do, RO--H          & 3580--3650 & s và sắc \\
\end{tabular}\par}
{\footnotesize\sffamily \textbf{Bảng 18.3} Một số dải hấp thụ hồng ngoại đặc trưng và cường độ của chúng.\par}
`;

export const LATEX_PAGE_242 = String.raw`% ==========================================================================
% TRANG 242: IR TIẾP + HÌNH 18.8-18.10 + CÂU 7
% ==========================================================================
\setcounter{page}{242}

Các giá trị này thường sẽ được cho sẵn. Bạn có thể thấy các dải hấp thụ chồng lấn lên nhau đáng kể. Đó là lý do vì sao cần sử dụng nhiều kĩ thuật khác nhau, như phổ NMR, phổ hồng ngoại và phổ khối lượng, để suy luận cấu trúc của một hợp chất hữu cơ mới (xem Chương 29).

Bên cạnh các số sóng, các độ hấp thụ riêng biệt còn có các độ rộng (dải rộng hoặc đỉnh sắc) và các cường độ (mạnh hoặc yếu) đặc trưng trên phổ hồng ngoại. Ví dụ, sự có mặt của liên kết hydrogen làm cho các dải O--H đặc trưng rộng bản trong các alcohol và carboxylic acid. Ngược lại, liên kết C=O của nhóm carbonyl có một đỉnh hấp thụ mạnh và sắc. Hãy xem các phổ hồng ngoại của ethanol, ethanoic acid và ethyl ethanoate trình bày trong các Hình 18.8--18.10.

Sử dụng dữ liệu trong Bảng 18.3, hãy lưu ý các dải rộng của các nhóm O--H tham gia liên kết hydrogen trong alcohol và trong carboxylic acid. Đối chiếu độ rộng của các đỉnh này với đỉnh sắc của nhóm carbonyl trong ester, ethyl ethanoate, ở Hình 18.10.

% --- Ba phổ IR vẽ bằng TikZ ---
\newcommand{\irplot}[2]{%
  \begin{tikzpicture}[font=\sffamily\tiny]
    \draw[gray!60] (0,0) rectangle (7,3);
    \draw[irRed, thick] plot[smooth] coordinates {#1};
    \node[below] at (3.5,-0.15) {#2};
  \end{tikzpicture}%
}

\begin{figure}[H]\centering
\irplot{(0,2.9) (0.8,2.7) (1.3,0.7) (2.0,2.6) (2.4,1.7) (3.4,2.7) (4.9,2.5) (5.5,0.9) (6.1,2.4) (7,2.8)}{\textbf{Hình 18.8} ethanol, \ce{CH3CH2OH}}
\hfill
\irplot{(0,2.8) (0.7,2.4) (1.5,0.6) (2.6,0.8) (3.6,2.5) (4.1,0.4) (4.5,2.6) (5.6,1.5) (6.3,2.2) (7,2.7)}{\textbf{Hình 18.9} ethanoic acid, \ce{CH3COOH}}
\hfill
\irplot{(0,2.9) (1.6,2.7) (2.2,1.6) (2.6,2.8) (3.9,2.7) (4.2,0.3) (4.6,2.7) (5.4,0.8) (6.0,1.4) (7,2.8)}{\textbf{Hình 18.10} ethyl ethanoate, \ce{CH3COOCH2CH3}}
\caption*{\small\sffamily Các phổ hồng ngoại của ethanol, ethanoic acid và ethyl ethanoate: so sánh độ rộng dải O--H liên kết hydrogen với đỉnh C=O sắc của ester.}
\end{figure}

\begin{questionbox}
\textbf{7}\hspace{0.6em}\textbf{a} Quan sát hai phổ hồng ngoại dưới đây, A và B.\\[0.3em]
\begin{tabular}{@{}p{0.46\textwidth}p{0.46\textwidth}@{}}
  \irplot{(0,2.9) (1.7,2.7) (2.3,1.7) (2.7,2.8) (3.9,2.6) (4.2,0.3) (4.6,2.7) (5.5,1.6) (7,2.8)}{\textbf{A}}
  &
  \irplot{(0,2.8) (0.9,2.5) (1.4,0.6) (2.1,2.6) (2.5,1.8) (3.6,2.7) (5.4,1.2) (6.2,2.3) (7,2.8)}{\textbf{B}}
\end{tabular}\\[0.4em]
\textbf{a} Phổ nào là của butanone và phổ nào là của butan-2-ol?\\
\textbf{b} Giải thích suy luận của bạn ở phần a.
\end{questionbox}
`;

export const LATEX_PAGE_243 = String.raw`% ==========================================================================
% TRANG 243: SUMMARY + CÂU HỎI CUỐI CHƯƠNG
% ==========================================================================
\setcounter{page}{243}

\begin{summarybox}
{\Large\bfseries\sffamily\color{summaryTitle} Tóm tắt (Summary)\par}\vspace{0.5em}
\begin{itemize}[leftmargin=1.2em, itemsep=3pt]
  \item[\purplebullet] Các aldehyde và ketone chứa nhóm carbonyl, C=O.
    \begin{itemize}[leftmargin=1em]
      \item[--] trong các aldehyde, nhóm carbonyl chỉ liên kết với một nguyên tử carbon khác
      \item[--] trong các ketone, nhóm carbonyl liên kết với hai nguyên tử carbon khác.
    \end{itemize}
  \item[\purplebullet] Tên của các aldehyde bắt nguồn từ tên của alkane với hậu tố \sq{-e} ở cuối được thay bằng \sq{-al}.
  \item[\purplebullet] Tương tự, các ketone được gọi tên với hậu tố \sq{-e} được thay bằng \sq{-one}.
  \item[\purplebullet] Các hợp chất carbonyl dễ dàng bị khử bởi \ce{NaBH4} trong nước hoặc \ce{LiAlH4} hòa tan trong ether khô:
    \begin{itemize}[leftmargin=1em]
      \item[--] sự khử một aldehyde tạo thành một alcohol bậc một
      \item[--] sự khử một ketone tạo thành một alcohol bậc hai.
    \end{itemize}
  \item[\purplebullet] Các aldehyde dễ bị oxi hóa thành các carboxylic acid trong điều kiện nhẹ. Các ketone không bị oxi hóa trong điều kiện nhẹ.
  \item[\purplebullet] Bản chất phân cực của nhóm carbonyl trong các aldehyde và ketone cho phép chúng trải qua phản ứng cộng nucleophile với các ion cyanide \ce{CN-} từ HCN. Sản phẩm là một 2-hydroxynitrile.
  \item[\purplebullet] Thuốc thử 2,4-dinitrophenylhydrazine (2,4-DNPH) có thể được dùng để nhận biết sự có mặt của một nhóm carbonyl trong một aldehyde hoặc ketone. Nó tạo ra một kết tủa màu cam. Nhiệt độ nóng chảy của sản phẩm được dùng để xác định aldehyde và ketone cụ thể.
  \item[\purplebullet] Vì các aldehyde dễ bị oxi hóa, chúng có thể được phân biệt với các ketone bằng cách hâm nóng với các tác nhân oxi hóa phù hợp:
    \begin{itemize}[leftmargin=1em]
      \item[--] với các aldehyde, thuốc thử Tollens tạo một gương bạc bên trong ống nghiệm đã hâm nóng và dung dịch Fehling chuyển từ màu xanh lam sang một kết tủa đỏ/cam khi hâm nóng
      \item[--] với các ketone, không có phản ứng oxi hóa nào xảy ra, nên không quan sát thấy thay đổi khi hâm nóng với thuốc thử Tollens hoặc dung dịch Fehling.
    \end{itemize}
  \item[\purplebullet] Các nhà hóa học có thể dùng dung dịch iodine trong kiềm để thử nghiệm:
    \begin{itemize}[leftmargin=1em]
      \item[--] các methyl ketone
      \item[--] ethanol hoặc các alcohol bậc hai có một nhóm methyl kề cận.
    \end{itemize}
    Một kết tủa màu vàng của tri-iodomethane được tạo thành trong một phép thử dương tính.
  \item[\purplebullet] Phổ hồng ngoại giúp nhận dạng các hợp chất hữu cơ bằng sự hấp thụ năng lượng trong vùng bước sóng hồng ngoại, bằng cách đối chiếu với cơ sở dữ liệu các phổ hồng ngoại đã biết.
\end{itemize}
\end{summarybox}

\begin{eocbox}
{\Large\bfseries\sffamily\color{eocTitle} Câu hỏi cuối chương (End-of-chapter questions)\par}\vspace{0.6em}

\textbf{1 a} Gọi tên các hợp chất sau:
\begin{itemize}[leftmargin=2.2em, label=\textbf{\roman*}]
  \item \ce{CH3COCH3} \marks{1}
  \item \ce{CH3CH2CH2OH} \marks{1}
  \item \ce{CH3CHO} \marks{1}
  \item \ce{CH3CH(OH)CH3} \marks{1}
  \item \ce{CH3COCH2CH3} \marks{1}
  \item \ce{CH3CH2CHO} \marks{1}
\end{itemize}
\textbf{b} Hợp chất nào ở phần a là alcohol và hợp chất nào là hợp chất carbonyl? \marks{1}\\
\textbf{c} Hợp chất carbonyl nào ở phần a là aldehyde và hợp chất nào là ketone? \marks{1}
\end{eocbox}
`;

export const LATEX_SOLUTIONS_APPENDIX_18 = String.raw`% ==========================================================================
% PHỤ LỤC: HƯỚNG DẪN GIẢI CHI TIẾT CÂU 1-7 + CÂU HỎI CUỐI CHƯƠNG (CHƯƠNG 18)
% ==========================================================================
\begin{multicols}{2}
\sectionRed{Phụ lục đáp án Chương 18}

\subsectionDark{Câu 1}
\textbf{a i:} hexanal (6 carbon, nhóm --CHO ở đầu mạch). \textbf{ii:} octan-2-one (8 carbon, nhóm C=O ở carbon số 2).\\
\textbf{b:} Công thức khai triển: methanal H--CHO (C có 2 H và =O); propanal \ce{CH3-CH2-CHO}; pentan-3-one \ce{CH3-CH2-CO-CH2-CH3} (C=O ở giữa mạch 5 carbon).\\
\textbf{c:} Công thức skeletal: hexanal là mạch zig-zag 6 đỉnh kết thúc bằng nhóm CHO; octan-2-one là mạch zig-zag 8 đỉnh với nhánh =O ở đỉnh thứ 2.

\subsectionDark{Câu 2}
\textbf{a i:} \ce{CH3CH2OH + [O] -> CH3CHO + H2O}. \textbf{ii:} viết khai triển toàn bộ liên kết C--H, C--O, O--H của ethanol và ethanal. \textbf{iii:} thêm từng giọt dung dịch \ce{K2Cr2O7}/\ce{H2SO4} loãng vào ethanol ấm; ethanal (sôi $\approx$ 21\,\textdegree C) cất ra ngay khi tạo thành và được thu vào bình nhận làm lạnh.\\
\textbf{b i:} \ce{CH3CH(OH)CH2CH3 + [O] -> CH3COCH2CH3 + H2O}. \textbf{ii:} dung dịch chuyển từ màu cam (\ce{Cr2O7^2-}) sang màu xanh lục (\ce{Cr^3+}). \textbf{iii:} ketone không bị oxi hóa tiếp nên butanone vẫn là sản phẩm cuối; chỉ quan sát được sự đổi màu cam $\rightarrow$ xanh lục của dichromate.

\subsectionDark{Câu 3}
\textbf{a:} \ce{CH3CH2CHO + 2[H] -> CH3CH2CH2OH} (propan-1-ol).\\
\textbf{b:} pentan-3-ol (nhóm C=O ở C3 bị khử thành C--OH ở C3).

\subsectionDark{Câu 4}
\textbf{a i:} 2-hydroxypropanenitrile, \ce{CH3CH(OH)CN}. \textbf{ii:} 2-hydroxy-2-methylpropanenitrile, \ce{(CH3)2C(OH)CN}.\\
\textbf{b:} Bước 1: cặp electron tự do trên C của ion \ce{CN-} tấn công nguyên tử C mang $\delta+$ của nhóm C=O; cặp electron $\pi$ của C=O chuyển lên O tạo intermediate alkoxide (\ce{O-}). Bước 2: \ce{O-} của intermediate nhận \ce{H+} (từ HCN / acid loãng / nước) tạo sản phẩm 2-hydroxypropanenitrile.

\subsectionDark{Câu 5}
\textbf{a:} Mỗi hợp chất carbonyl trong bảng đều tạo kết tủa màu cam đậm / vàng với 2,4-DNPH.\\
\textbf{b i:} Nhiệt độ nóng chảy 126\,\textdegree C trùng với cả butanal lẫn propanone $\Rightarrow$ chưa thể kết luận duy nhất; \textbf{ii:} kết tủa cam với Fehling $\Rightarrow$ chất đó là aldehyde $\Rightarrow$ butanal; \textbf{iii:} butanal + thuốc thử Tollens hâm nóng $\rightarrow$ gương bạc; butanone $\rightarrow$ không thay đổi (dung dịch không màu).\\
\textbf{c:} \ce{Ag+ + e- -> Ag}. \textbf{d:} \ce{Cu^2+ + e- -> Cu+}.

\subsectionDark{Câu 6}
\textbf{a i:} tri-iodomethane (iodoform), \ce{CHI3}: nguyên tử C liên kết với 3 nguyên tử I và 1 nguyên tử H. \textbf{ii:} Bước 1: \ce{CH3COCI3}; Bước 2: \ce{CH3COO- Na+} (sodium ethanoate) và \ce{CHI3}.\\
\textbf{b:} ethanol bị dung dịch iodine trong kiềm oxi hóa thành ethanal \ce{CH3CHO} (chứa nhóm \ce{CH3CO-}); ethanal tiếp tục bị iod hóa rồi thủy phân cho kết tủa vàng \ce{CHI3} và sodium methanoate, \ce{HCOO- Na+}.\\
\textbf{c:} Cho kết tủa vàng: \textbf{i} butanone, \textbf{ii} pentan-2-one và \textbf{iv} ethanal (đều chứa nhóm \ce{CH3CO-}). Không cho: iii butanal, v pentan-3-one, vi methanal.

\subsectionDark{Câu 7}
\textbf{a:} Phổ A là của butanone; phổ B là của butan-2-ol.\\
\textbf{b:} Phổ A có đỉnh hấp thụ mạnh, sắc quanh $\approx$ 1715 cm$^{-1}$ đặc trưng cho liên kết C=O của ketone và không có dải O--H rộng; phổ B có dải hấp thụ rất rộng quanh 3200--3600 cm$^{-1}$ đặc trưng cho O--H liên kết hydrogen của alcohol và không có đỉnh C=O sắc quanh 1700 cm$^{-1}$.

\subsectionDark{Câu hỏi cuối chương (Bài 1)}
\textbf{a:} i propanone; ii propan-1-ol; iii ethanal; iv propan-2-ol; v butanone; vi propanal.\\
\textbf{b:} alcohol: ii và iv; hợp chất carbonyl: i, iii, v và vi.\\
\textbf{c:} aldehyde: iii và vi (nhóm --CHO ở đầu mạch); ketone: i và v (nhóm C=O giữa mạch).
\end{multicols}
`;

export const FULL_LATEX_DOCUMENT_18 = [
  LATEX_PREAMBLE_18,
  String.raw`\begin{document}`,
  LATEX_PAGE_234,
  LATEX_PAGE_235,
  LATEX_PAGE_236,
  LATEX_PAGE_237,
  LATEX_PAGE_238,
  LATEX_PAGE_239,
  LATEX_PAGE_240,
  LATEX_PAGE_241,
  LATEX_PAGE_242,
  LATEX_PAGE_243,
  String.raw`\end{document}`,
].join('\n');

export const FULL_LATEX_WITH_SOLUTIONS_18 = [
  LATEX_PREAMBLE_18,
  String.raw`\begin{document}`,
  LATEX_PAGE_234,
  LATEX_PAGE_235,
  LATEX_PAGE_236,
  LATEX_PAGE_237,
  LATEX_PAGE_238,
  LATEX_PAGE_239,
  LATEX_PAGE_240,
  LATEX_PAGE_241,
  LATEX_PAGE_242,
  LATEX_PAGE_243,
  LATEX_SOLUTIONS_APPENDIX_18,
  String.raw`\end{document}`,
].join('\n');

export const LATEX_SECTIONS_18: LatexSectionItem18[] = [
  {
    id: 'full',
    pageNumber: '234–243',
    title: 'Toàn bộ tài liệu Chương 18 (Full 10 trang SGK)',
    subtitle: 'Bản LaTeX đầy đủ từ trang mở đầu đến Câu hỏi cuối chương',
    latexCode: FULL_LATEX_DOCUMENT_18,
  },
  {
    id: 'full-solutions',
    pageNumber: '234–243 + Đáp án',
    title: 'Toàn bộ SGK Chương 18 + Phụ lục Giải chi tiết',
    subtitle: 'Bao gồm toàn bộ nội dung sách giáo khoa và lời giải Câu 1–7 + cuối chương',
    latexCode: FULL_LATEX_WITH_SOLUTIONS_18,
  },
  {
    id: 'p234',
    pageNumber: 'Trang 234',
    title: 'Trang mở đầu Chương 18 & Learning outcomes',
    subtitle: 'Tiêu đề chương, chuẩn đầu ra',
    latexCode: LATEX_PAGE_234,
  },
  {
    id: 'p235',
    pageNumber: 'Trang 235',
    title: 'Giới thiệu & Dãy đồng đẳng aldehyde/ketone',
    subtitle: 'Hình 18.1, Bảng 18.1, Bảng 18.2',
    latexCode: LATEX_PAGE_235,
  },
  {
    id: 'p236',
    pageNumber: 'Trang 236',
    title: 'Câu 1 & Điều chế aldehyde/ketone (oxi hóa)',
    subtitle: 'Hình 18.2, hai hộp oxi hóa alcohol bậc một/hai',
    latexCode: LATEX_PAGE_236,
  },
  {
    id: 'p237',
    pageNumber: 'Trang 237',
    title: 'Câu 2, Khử aldehyde/ketone, Câu 3 & Cộng HCN',
    subtitle: 'NaBH4/LiAlH4, cộng nucleophile với HCN',
    latexCode: LATEX_PAGE_237,
  },
  {
    id: 'p238',
    pageNumber: 'Trang 238',
    title: 'Cơ chế cộng nucleophile, Câu 4 & Thử với 2,4-DNPH',
    subtitle: 'Cơ chế 2 bước mũi tên cong, Hình 18.3',
    latexCode: LATEX_PAGE_238,
  },
  {
    id: 'p239',
    pageNumber: 'Trang 239',
    title: 'Ngưng tụ 2,4-DNPH, Tollens, Fehling & Phân biệt',
    subtitle: 'Hình 18.4, Hình 18.5',
    latexCode: LATEX_PAGE_239,
  },
  {
    id: 'p240',
    pageNumber: 'Trang 240',
    title: 'Câu 5 & Phản ứng tạo tri-iodomethane',
    subtitle: 'Bảng nhiệt độ nóng chảy, Hình 18.6, sơ đồ 2 bước',
    latexCode: LATEX_PAGE_240,
  },
  {
    id: 'p241',
    pageNumber: 'Trang 241',
    title: 'Câu 6 & Phổ hồng ngoại + Bảng 18.3',
    subtitle: 'Hình 18.7, bảng dải hấp thụ đặc trưng',
    latexCode: LATEX_PAGE_241,
  },
  {
    id: 'p242',
    pageNumber: 'Trang 242',
    title: 'IR tiếp, Hình 18.8–18.10 & Câu 7',
    subtitle: 'So sánh phổ ethanol, ethanoic acid, ethyl ethanoate',
    latexCode: LATEX_PAGE_242,
  },
  {
    id: 'p243',
    pageNumber: 'Trang 243',
    title: 'Tóm tắt (Summary) & Câu hỏi cuối chương',
    subtitle: 'Khung tím tổng kết + Bài 1 cuối chương',
    latexCode: LATEX_PAGE_243,
  },
];
