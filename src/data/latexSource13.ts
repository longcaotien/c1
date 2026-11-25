export interface LatexSectionItem13 {
  id: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  latexCode: string;
}

/* ==========================================================================
   BẢN DỊCH LaTeX — CHƯƠNG 13: NITROGEN AND SULFUR (TRANG 180 – 186)
   ========================================================================== */

export const LATEX_PREAMBLE_13 = String.raw`% ==========================================================================
% BẢN DỊCH SÁCH GIÁO KHOA HÓA HỌC CAMBRIDGE AS & A LEVEL (TRANG 180 - 186)
% Chương 13: Nitrogen và sulfur (Nitrogen and sulfur)
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
\definecolor{sulfurYellow}{HTML}{E9C529}

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

% --- Hộp CÂU HỎI ---
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

% --- Hộp TÓM TẮT ---
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

% --- Kí hiệu danh sách vuông màu ---
\newcommand{\redbullet}{\textcolor{cambridgeRed}{\rule[0.15ex]{0.55em}{0.55em}}}
\newcommand{\purplebullet}{\textcolor{summaryBullet}{\rule[0.15ex]{0.55em}{0.55em}}}
\newcommand{\bluebullet}{\textcolor{eocTitle}{\rule[0.15ex]{0.55em}{0.55em}}}

% --- Header & Footer ---
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[LE,RO]{%
  \tikz[baseline=(n.base)] \node[fill=pageBadge, text=white, font=\sffamily\bfseries\footnotesize, inner xsep=6pt, inner ysep=3pt, rounded corners=1pt] (n) {\thepage};%
}
\fancyhead[LO,RE]{\sffamily\footnotesize\color{black!55}Chương 13: Nitrogen và sulfur}

\setlength{\parindent}{1em}
\setlength{\parskip}{0.35em}
`;

export const LATEX_PAGE_180 = String.raw`% ==========================================================================
% TRANG 180: TRANG MỞ ĐẦU CHƯƠNG 13 + LEARNING OUTCOMES
% ==========================================================================
\setcounter{page}{180}

% --- Dải tinh thể sulfur (vẽ vector mô phỏng) ---
\begin{tikzpicture}
  \clip (0,0) rectangle (\textwidth,3.6cm);
  \fill[left color=sulfurYellow!80, right color=sulfurYellow] (0,0) rectangle (\textwidth,3.6cm);
  \foreach \i in {0,...,34}{
    \fill[yellow!70!orange!{60+mod(\i,3)*15}!white, draw=yellow!60!black, line width=0.4pt]
      ({0.5+mod(\i,8)*2.05+mod(\i,5)*0.22},{0.5+div(\i,8)*0.82+mod(\i,3)*0.16})
      -- ++(0.55,0.28) -- ++(0.2,0.6) -- ++(-0.6,0.3) -- ++(-0.5,-0.4) -- cycle;
  }
  \foreach \i in {0,...,8}{
    \fill[gray!45!white, opacity=0.9] ({1.2+\i*1.85},{0.9+mod(\i,4)*0.7}) -- ++(0.4,-0.18) -- ++(0.35,0.4) -- ++(-0.45,0.25) -- cycle;
  }
\end{tikzpicture}

% --- Băng đen tiêu đề chương ---
\begin{tcolorbox}[enhanced, colback=black!90, colframe=black!90, arc=0pt, left=16pt, right=16pt, top=14pt, bottom=16pt]
  {\LARGE\bfseries\sffamily\color{cambridgeRed} Chương 13:\par}
  {\huge\bfseries\sffamily\color{white} Nitrogen và sulfur (Nitrogen and sulfur)\par}
\end{tcolorbox}

% --- Learning outcomes ---
\begin{tcolorbox}[enhanced, colback=gray!8, colframe=gray!45, arc=2pt, left=12pt, right=12pt, top=10pt, bottom=10pt, fontupper=\small\sffamily]
  {\large\bfseries\sffamily\color{cambridgeRed} Learning outcomes (Chuẩn đầu ra)\par}
  \vspace{0.4em}
  \textbf{Bạn cần có khả năng:}
  \begin{multicols}{2}
  \begin{itemize}[leftmargin=1.2em, itemsep=2pt]
    \item[\redbullet] \textit{mô tả và giải thích:}
      \begin{itemize}[leftmargin=1em]
        \item[--] sự trơ (khó phản ứng) của khí nitrogen
        \item[--] tính base của ammonia (xem thêm Chương 8, trang 130), cùng sự hình thành và cấu tạo của ion ammonium
        \item[--] sự giải phóng ammonia khỏi các muối của nó
      \end{itemize}
    \item[\redbullet] nêu tầm quan trọng công nghiệp của ammonia và các hợp chất nitrogen bắt nguồn từ ammonia
    \item[\redbullet] \textit{nêu và giải thích:}
      \begin{itemize}[leftmargin=1em]
        \item[--] các hệ quả môi trường của việc sử dụng phân bón nitrate không kiểm soát
        \item[--] sự tồn tại tự nhiên và do con người tạo ra của các oxide nitrogen, cùng sự loại bỏ chúng bằng xúc tác khỏi khí thải của động cơ đốt trong
        \item[--] vì sao các oxide nitrogen trong khí quyển là chất gây ô nhiễm, bao gồm vai trò xúc tác của chúng trong sự oxi hóa sulfur dioxide trong khí quyển (xem thêm Chương 9, trang 144)
      \end{itemize}
    \item[\redbullet] mô tả sự hình thành khí sulfur dioxide từ nhiên liệu hóa thạch chứa sulfur, vai trò của nó trong sự tạo thành acid rain và cách acid rain ảnh hưởng tới môi trường.
  \end{itemize}
  \end{multicols}
\end{tcolorbox}
`;

export const LATEX_PAGE_181 = String.raw`% ==========================================================================
% TRANG 181: GIỚI THIỆU (HÌNH 13.1) + KHÍ NITROGEN (HÌNH 13.2)
% ==========================================================================
\setcounter{page}{181}

\begin{tcolorbox}[
  enhanced,
  colback=cambridgeRed,
  colframe=cambridgeRed,
  arc=2pt,
  left=14pt, right=14pt, top=14pt, bottom=14pt,
  after skip=14pt
]
  {\LARGE\bfseries\sffamily\color{white} Giới thiệu (Introduction)\par}
  \vspace{0.5em}
  \begin{multicols}{2}
  {\small\sffamily\color{white}\setlength{\parskip}{0.4em}
  Nguyên tố Nhóm 15 nitrogen chiếm gần bốn phần năm khí quyển Trái Đất. Nitrogen là một nguyên tố thiết yếu trong nhiều quá trình của sự sống, nhưng ở dạng khí nguyên chất nó trơ (khó phản ứng). Vì lý do này, khí nitrogen được dùng để ngăn ngừa nổ khi dầu thô được bơm vào hoặc ra khỏi các siêu tàu chở dầu, khi các hơi nhiên liệu dễ bay hơi có thể trộn lẫn với oxygen từ không khí.\par
  Sulfur là một nguyên tố Nhóm 16 được khai thác mỏ để sản xuất sulfuric(VI) acid, một trong những hóa chất công nghiệp quan trọng nhất, dùng trong sản xuất sơn, phẩm nhuộm, nhựa và sợi.\par}
  \end{multicols}
  \tcblower
  {\small\sffamily\color{white} \textbf{Hình 13.1} \textbf{a} Khí nitrogen được dùng trong khoang chứa của các tàu chở dầu phía trên lớp dầu thô khi dầu được bơm vào bờ. Chất khí trơ này giúp ngăn ngừa hỗn hợp nổ giữa hơi dầu thô và không khí hình thành bên trong tàu. \textbf{b} Sulfur có thể được khai thác từ các mỏ dưới lòng đất bằng cách bơm nước siêu nóng xuống làm chảy sulfur (nó nóng chảy ở khoảng 115\,\textdegree C). Sulfur lỏng sau đó bị ép lên mặt đất dưới áp suất và được để đông đặc lại thành chất rắn màu vàng giòn. Các phân tử sulfur \sq{hình vương miện} S$_8$ có thể xếp chặt với nhau theo những kiểu đều đặn, tạo thành tinh thể.\par}
\end{tcolorbox}

\begin{multicols}{2}
\sectionRed{Khí nitrogen (Nitrogen gas)}

Nitrogen thuộc Nhóm 15 của Bảng Tuần hoàn. Nó là một nguyên tố phi kim chiếm khoảng 78\% khí quyển Trái Đất. Nó tồn tại dưới dạng các phân tử hai nguyên tử, \ce{N2}. Khí nitrogen là chất khí trơ làm loãng tác dụng của khí oxygen hoạt động. Để hiểu vì sao khí nitrogen trơ, ta phải xem xét liên kết trong các phân tử của nó.

Cấu hình electron của một nguyên tử nitrogen là $1s^2 2s^2 2p^3$. Các nguyên tử của nó cần nhận thêm ba electron để đạt cấu hình khí hiếm của neon. Các nguyên tử nitrogen thực hiện điều này bằng cách tạo thành một liên kết cộng hóa trị ba giữa hai nguyên tử (xem Hình 13.2).

% --- Hình 13.2: dot-and-cross N2 ---
\begin{figure}[H]\centering
\begin{tikzpicture}[font=\sffamily\scriptsize, scale=0.85]
  \draw[green!50!black, fill=green!8] (0,0) circle (0.95);
  \node[green!40!black] at (0,0) {N};
  \foreach \a in {30,100,170,240,310}{ \fill[green!40!black] (\a:0.68) circle (0.06); }
  \node at (1.35,0) {+};
  \draw[red!60!black, fill=red!8] (2.7,0) circle (0.95);
  \node[red!60!black] at (2.7,0) {N};
  \foreach \a in {30,100,170,240,310}{
    \draw[red!60!black, line width=0.7pt] ({2.7+0.68*cos(\a)-0.06},{0.68*sin(\a)-0.06}) -- ({2.7+0.68*cos(\a)+0.06},{0.68*sin(\a)+0.06});
    \draw[red!60!black, line width=0.7pt] ({2.7+0.68*cos(\a)-0.06},{0.68*sin(\a)+0.06}) -- ({2.7+0.68*cos(\a)+0.06},{0.68*sin(\a)-0.06});
  }
  \node at (0,-1.35) {hai nguyên tử nitrogen (2,5)};
  \draw[-{Stealth}] (4.0,0) -- (4.9,0);
  \draw[green!50!black, fill=green!10, fill opacity=0.7] (6.3,0) circle (0.95);
  \draw[red!60!black, fill=red!10, fill opacity=0.5] (7.3,0) circle (0.95);
  \node[green!40!black] at (6.0,0.35) {N};
  \node[red!60!black] at (7.6,0.35) {N};
  \foreach \y in {-0.3,0,0.3}{
    \fill[green!40!black] (6.72,\y) circle (0.06);
    \draw[red!60!black, line width=0.7pt] (6.86,\y-0.06) -- (6.98,\y+0.06);
    \draw[red!60!black, line width=0.7pt] (6.86,\y+0.06) -- (6.98,\y-0.06);
  }
  \node at (6.8,-1.35) {phân tử nitrogen --- mỗi N nay có (2,8)};
  \node[font=\sffamily\small] at (9.1,0) {N$\equiv$N};
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.2} Liên kết trong phân tử nitrogen, \ce{N2}: mỗi nguyên tử góp 3 electron tạo thành ba cặp dùng chung --- một liên kết cộng hóa trị ba rất bền.}
\end{figure}

Liên kết cộng hóa trị ba rất mạnh: năng lượng liên kết của nó gần 1000 kJ mol$^{-1}$. Nó khó bị bẻ gãy, vì vậy khí nitrogen chỉ phản ứng trong những điều kiện khắc nghiệt. Ví dụ, nitrogen và oxygen trong không khí phản ứng với nhau trong các cơn dông sấm sét.
\end{multicols}
`;

export const LATEX_PAGE_182 = String.raw`% ==========================================================================
% TRANG 182: SẤM SÉT (HÌNH 13.3) + AMMONIA & HỢP CHẤT AMMONIUM (13.4, 13.5)
% ==========================================================================
\setcounter{page}{182}

% --- Hình 13.3: sấm sét ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[top color=black!70!blue!60, bottom color=black!80] (0,0) rectangle (6,4.2);
  \foreach \x/\y/\r in {1/3.5/0.9, 2.6/3.8/1.1, 4.4/3.5/1.2, 5.4/3.8/0.8, 1.8/2.9/1.0, 4.6/2.8/1.0}{
    \fill[purple!40!black!70, opacity=0.6] (\x,\y) ellipse ({\r} and {\r*0.42});
  }
  \draw[yellow!20!white, line width=1.6pt, line join=round]
    (3.2,3.2) -- (2.8,2.2) -- (3.2,2.25) -- (2.6,1.2) -- (3.05,1.3) -- (2.4,0.2);
  \draw[yellow!20!white, line width=0.9pt] (2.8,2.2) -- (2.35,1.85);
  \draw[yellow!20!white, line width=0.9pt] (3.05,1.3) -- (3.5,1.0);
  \draw[yellow!30!white, line width=1pt, line join=round] (4.6,3.3) -- (4.3,2.5) -- (4.6,2.55) -- (4.15,1.6);
  \fill[black!85] (0,0) rectangle (6,0.35);
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.3} Các oxide của nitrogen được tạo thành khi sấm sét đánh: năng lượng hoạt hóa của tia sét đủ để \ce{N2} và \ce{O2} trong không khí phản ứng với nhau.}
\end{figure}

Sấm sét cung cấp năng lượng hoạt hóa cần thiết để phản ứng này xảy ra (Hình 13.3):
\begin{center}\small
\ce{N2(g) + O2(g) <=> \underset{nitrogen(II)\ oxide}{2NO(g)}}
\end{center}
Nitrogen(II) oxide tạo thành bị oxi hóa tiếp bởi oxygen trong không khí thành nitrogen(IV) oxide, \ce{NO2}:
\begin{center}\small
\ce{2NO(g) + O2(g) <=> \underset{nitrogen(IV)\ oxide}{2NO2(g)}}
\end{center}
Nitrogen(IV) oxide hòa tan vào các giọt nước và tạo thành nitric acid, rơi xuống đất theo mưa. Đây là một phần thiết yếu của chu trình nitrogen tự nhiên:
\begin{center}\small
\ce{2NO2(g) + H2O(l) + 1/2 O2(g) <=> \underset{nitric\ acid}{2HNO3(aq)}}
\end{center}
Theo cách này, nitrogen đi vào đất ở dạng hòa tan mà thực vật có thể hấp thụ. Chúng sử dụng các ion nitrate, \ce{NO3-}, để tạo nên các protein thiết yếu cho sự sinh trưởng.

\sectionRed{Ammonia và các hợp chất ammonium}

Ammonia là một hợp chất rất quan trọng của nitrogen. Nó là một khí kiềm có công thức hóa học \ce{NH3}. Trong công nghiệp nó được sản xuất ở quy mô lớn bằng quy trình Haber (chi tiết về quy trình xem Chương 8, trang 129):
\begin{center}\small
\ce{\underset{nitrogen}{N2(g)} + \underset{hydrogen}{3H2(g)} <=>[Fe] \underset{ammonia}{2NH3(g)}}
\end{center}
Liên kết trong ammonia được trình bày ở Hình 13.4. Bạn đã học vì sao sự có mặt của một cặp electron tự do trên nguyên tử nitrogen khiến phân tử ammonia có hình dạng tháp (xem trang 56).

% --- Hình 13.4: dot-and-cross ammonia + dạng tháp ---
\begin{figure}[H]\centering
\begin{tikzpicture}[font=\sffamily\scriptsize, scale=0.9]
  \fill[green!40!black] (0.9,1.55) circle (0.06); \fill[green!40!black] (1.1,1.55) circle (0.06);
  \node[gray, anchor=west] at (1.3,1.55) {lone pair};
  \draw[green!50!black, fill=green!8] (1,0.8) circle (0.62);
  \node[green!40!black] at (1,0.8) {N};
  \foreach \p in {(-0.05,1.05),(2.05,1.05),(1,-0.35)}{
    \draw[orange!70!black, fill=orange!8] \p circle (0.36);
  }
  \node[orange!60!black] at (-0.05,1.05) {H};
  \node[orange!60!black] at (2.05,1.05) {H};
  \node[orange!60!black] at (1,-0.35) {H};
  \foreach \p in {(0.42,0.98),(1.58,0.98),(1,0.22)}{
    \fill[green!40!black] \p circle (0.06);
    \draw[red!60!black, line width=0.7pt] ({\p.x*1cm+0.12-0.06},{\p.y*1cm-0.06}) -- ++(0.12,0.12);
    \draw[red!60!black, line width=0.7pt] ({\p.x*1cm+0.12-0.06},{\p.y*1cm+0.06}) -- ++(0.12,-0.12);
  }
  % dạng tháp
  \begin{scope}[xshift=4.2cm]
    \fill[purple!40, opacity=0.6] (1,1.7) ellipse (0.32 and 0.45);
    \node[purple!50!black, anchor=west] at (1.45,1.75) {lone pair};
    \fill[green!50!black!60] (1,1.0) circle (0.3);
    \node[black] at (1,1.0) {N};
    \foreach \p in {(0.15,0.1),(1.85,0.1),(1,-0.15)}{
      \draw[gray!60!black, line width=0.8pt] (1,1.0) -- \p;
      \draw[orange!70!black, fill=orange!15] \p circle (0.24);
    }
    \node at (0.15,0.1) {H}; \node at (1.85,0.1) {H}; \node at (1,-0.15) {H};
    \draw[gray, dashed] (0.15,0.1) .. controls (1,-0.45) .. (1.85,0.1);
  \end{scope}
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.4} Sơ đồ dot-and-cross biểu diễn liên kết cộng hóa trị trong phân tử ammonia và hình dạng tháp (pyramidal) của nó.}
\end{figure}

Bạn cũng đã học rằng cặp electron tự do của ammonia có thể được cho một ion \ce{H+} từ một acid, tạo thành một liên kết cộng hóa trị phối trí (cho nhận) (xem trang 53). Ammonia đóng vai trò một base trong phản ứng này vì nó nhận một ion \ce{H+}:
\begin{center}\small
\ce{NH3(aq) + H+(aq) <=> \underset{ion\ ammonium}{NH4+(aq)}}
\end{center}

Các hợp chất ammonium là những phân bón rất quan trọng. Nitrogen bị lấy khỏi đất khi các nitrate được hấp thụ qua rễ cây trong lúc cây sinh trưởng. Khi mùa màng được nông dân thu hoạch, nitrogen không được hoàn trả lại.

Thực vật không tự hoàn trả nitrogen này vào đất. Vì vậy nông dân dùng các hợp chất ammonium để thay thế lượng nitrogen này trong đất. Các muối ammonium phổ biến dùng trong phân bón gồm ammonium chloride \ce{NH4Cl}, ammonium nitrate \ce{NH4NO3}, ammonium phosphate \ce{(NH4)3PO4} và ammonium sulfate \ce{(NH4)2SO4}.

Nếu ta đun nóng một muối ammonium với một base, ammonia gas sẽ được sinh ra. Ta dùng phản ứng này để điều chế khí ammonia trong phòng thí nghiệm: ammonium chloride và calcium hydroxide, cả hai ở trạng thái rắn, thường được trộn lẫn rồi đun nóng (xem bộ dụng cụ ở Hình 13.5).

% --- Hình 13.5: bộ dụng cụ điều chế ammonia ---
\begin{figure}[H]\centering
\begin{tikzpicture}[font=\sffamily\scriptsize, scale=0.85]
  % ống nghiệm nghiêng
  \begin{scope}[rotate=-14]
    \draw[thick, gray!60!black] (0,0.4) -- (3.4,0.4) arc (0:-180:0.4) -- (0,0.4);
    \fill[brown!40] (0.1,-0.32) rectangle (2.2,0.05);
    \fill[gray!70] (3.3,0.15) rectangle (3.6,0.65);
  \end{scope}
  \fill[orange] (1.2,-1.15) to[out=120,in=-90] (1.38,-0.85) to[out=90,in=0] (1.2,-0.75) to[out=180,in=90] (1.02,-0.85) to[out=-90,in=60] cycle;
  \node[below] at (1.2,-1.35) {đun nóng (heat)};
  \node[align=left, anchor=south west] at (-0.6,1.5) {ammonium chloride và\\calcium hydroxide (rắn)};
  % ống dẫn + chữ U
  \draw[thick, gray!60!black] (3.6,0.9) .. controls (4.6,1.5) and (5.4,1.2) .. (5.6,0.4) -- (5.6,-0.6);
  \draw[thick, gray!60!black] (5.6,-0.6) .. controls (5.6,-1.4) and (6.8,-1.4) .. (6.8,-0.6) -- (6.8,0.4);
  \fill[gray!25] (5.68,-0.75) rectangle (6.72,-1.15);
  \node[below, align=center] at (6.2,-1.6) {calcium oxide để\\làm khô khí ammonia};
  \draw[thick, gray!60!black] (6.8,0.4) -- (6.8,1.5);
  % giấy quỳ
  \fill[blue!60] (6.95,1.0) rectangle (7.55,1.9);
  \fill[red!70] (6.95,1.6) rectangle (7.55,1.9);
  \node[right, align=left] at (7.7,1.5) {giấy quỳ đỏ ẩm\\hóa xanh};
  \node[right] at (7.7,2.2) {khí ammonia};
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.5} Điều chế khí ammonia từ một muối ammonium, \ce{NH4Cl}, và một base, \ce{Ca(OH)2}.}
\end{figure}

\begin{center}\small
\ce{2NH4Cl(s) + Ca(OH)2(s) ->[\Delta] CaCl2(s) + 2H2O(l) + 2NH3(g)}
\end{center}
`;

export const LATEX_PAGE_183 = String.raw`% ==========================================================================
% TRANG 183: CÂU 1 + CÔNG DỤNG AMMONIA (HÌNH 13.6) + CÂU 2 + PHÂN BÓN NITRATE
% ==========================================================================
\setcounter{page}{183}

Phản ứng này được dùng làm cơ sở cho phép thử ion ammonium. Nếu một hợp chất chưa biết chứa các ion \ce{NH4+}, nó sẽ giải phóng ammonia khi được đun nóng với một base. Khí ammonia thoát ra là khí kiềm phổ biến duy nhất. Nó làm giấy quỳ đỏ hóa xanh.

\begin{questionbox}
\textbf{1}\hspace{0.6em}\textbf{a} Giải thích sự trơ (khó phản ứng) của khí nitrogen.\\
\textbf{b} Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho phản ứng của dung dịch ammonia với dilute nitric acid.\\
\textbf{c} Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho phản ứng của ammonium sulfate rắn với sodium hydroxide rắn.
\end{questionbox}

% --- Hình 13.6: rải phân viên ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[top color=blue!15, bottom color=green!10] (0,2.2) rectangle (6,4.2);
  \fill[top color=green!50!yellow!70, bottom color=green!50!black!60] (0,0) rectangle (6,2.3);
  \foreach \i in {0,...,4}{ \draw[green!40!black!50] (0,{0.4+\i*0.4}) .. controls (2,{0.55+\i*0.4}) and (4,{0.55+\i*0.4}) .. (6,{0.4+\i*0.4}); }
  % máy kéo
  \fill[yellow!70!orange] (2.6,1.5) rectangle (4.2,2.1);
  \fill[yellow!60!orange] (3.7,1.9) rectangle (4.25,2.5);
  \fill[cyan!20] (3.8,2.0) rectangle (4.15,2.4);
  \fill[black!80] (2.95,1.45) circle (0.32); \fill[gray!60] (2.95,1.45) circle (0.12);
  \fill[black!80] (3.95,1.5) circle (0.22); \fill[gray!60] (3.95,1.5) circle (0.08);
  \fill[brown!60!black] (2.35,1.75) rectangle (2.65,1.95);
  \foreach \i in {0,...,7}{ \fill[white!90!gray] ({2.3-\i*0.22},{1.7-mod(\i,3)*0.12-\i*0.06}) circle (0.05); }
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.6} Ammonium nitrate được rải xuống đất dưới dạng viên (pellets).}
\end{figure}

\sectionRed{Công dụng của ammonia và các hợp chất ammonium}

Nông dân thu hoạch mùa màng để cung cấp lương thực cho thế giới. Mỗi năm, hàng triệu tấn phân bón được rải xuống đồng ruộng để thay thế nitrogen và các chất dinh dưỡng khác mà cây trồng đã lấy mất khỏi đất. Khoảng 85\% trong số hàng triệu tấn ammonia sản xuất mỗi năm bằng quy trình Haber được dùng để làm phân bón. Một lượng tương đối nhỏ ammonia được dùng trực tiếp làm phân bón, chủ yếu ở Hoa Kỳ. Nó được bơm vào trong đất. Tuy nhiên, phần lớn ammonia được cho phản ứng với các acid để tạo thành các muối ammonium rắn.

Phân bón gốc nitrogen chủ yếu là ammonium nitrate, \ce{NH4NO3}. Chất này được sản xuất từ ammonia và nitric acid:
\begin{center}\small \ce{NH3(aq) + HNO3(aq) <=> NH4NO3(aq)} \end{center}
Dung dịch ammonium nitrate được đun nóng để làm bay hơi nước và làm chảy chất rắn. Chất rắn nóng chảy sau đó được phun vào một tháp có không khí thổi vào. Việc này làm đông đặc ammonium nitrate thành các viên (pellets), thuận tiện cho nông dân rải từ máy kéo (Hình 13.6). Ammonium sulfate, \ce{(NH4)2SO4}, và ammonium phosphate, \ce{(NH4)3PO4}, là những muối ammonium khác được dùng trong phân bón.

Nitric acid dùng để sản xuất ammonium nitrate bản thân nó cũng được làm từ ammonia trong một quy trình hóa học khác. Các nhà máy phân bón sản xuất ammonium nitrate thường có ba nhà máy đặt cạnh nhau, tạo ra:
\begin{itemize}[leftmargin=1.1em, itemsep=2pt]
  \item[\redbullet] ammonia trong quy trình Haber
  \item[\redbullet] nitric acid từ ammonia
  \item[\redbullet] ammonium nitrate từ nitric acid và ammonia.
\end{itemize}
Nitric acid đậm đặc còn có những công dụng quan trọng khác. Nó được dùng để chế tạo nhiều loại thuốc nổ, chẳng hạn trinitrotoluene (TNT). Khoảng 10\% ammonium nitrate được dùng để làm thuốc nổ. Nitric acid cũng cần thiết trong sản xuất chất tẩy rửa, sơn, pigment, phẩm nhuộm và nylon.

\begin{questionbox}
\textbf{2}\hspace{0.6em}\textbf{a} Ammonia được sản xuất trong công nghiệp bằng quy trình Haber. Viết phương trình hóa học cân bằng cho sự tổng hợp ammonia từ các đơn chất của nó, gồm cả xúc tác được dùng.\\
\textbf{b} Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho sự tạo thành phân bón ammonium sulfate từ dung dịch ammonia.\\
\textbf{c} Tính phần trăm nitrogen trong phân bón ammonium nitrate. (Giá trị $A_r$: N = 14{,}0, H = 1{,}0, O = 16{,}0)
\end{questionbox}

\sectionRed{Các vấn đề môi trường do hợp chất nitrogen gây ra}
\subsectionGray{}{Phân bón nitrate (Nitrate fertilisers)}

Để cây trồng sinh trưởng, các phân bón gốc nitrogen, chủ yếu là ammonium nitrate và potassium nitrate (\ce{KNO3}), phải tan được trong nước. Điều này đã tạo ra một vấn đề môi trường. Các nitrate có thể bị rửa trôi, hoặc thấm lậu (leached), khỏi đất bởi nước mưa xuống nước ngầm. Từ đó chúng có thể đi vào các dòng sông và hồ. Một khi vào sông và hồ, các nitrate thúc đẩy sự sinh trưởng của thực vật thủy sinh, có thể \sq{bóp nghẹt} dòng sông. Nhưng vấn đề lớn nhất là sự phát triển của tảo (một loại thực vật nước đơn giản) trên mặt nước, gây ra hiện tượng \termRed{phú dưỡng hóa} (eutrophication) (Hình 13.7).
`;

export const LATEX_PAGE_184 = String.raw`% ==========================================================================
% TRANG 184: PHÚ DƯỠNG (HÌNH 13.7) + OXIDE NITROGEN KHÍ QUYỂN + CÂU 3
% ==========================================================================
\setcounter{page}{184}

% --- Hình 13.7: sông phú dưỡng ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[green!45!yellow!70] (0,0) rectangle (6,4);
  \fill[green!50!yellow!50] (0,0) -- (2.3,0) -- (1.2,4) -- (0,4) -- cycle;
  \fill[green!50!yellow!50] (6,0) -- (4.2,0) -- (5.0,4) -- (6,4) -- cycle;
  \fill[left color=yellow!60!green!80, right color=green!50!black!60] (2.3,0) -- (4.2,0) -- (5.0,4) -- (1.2,4) -- cycle;
  \foreach \i in {0,...,8}{
    \fill[yellow!50!green!60, opacity=0.8] ({2.0+mod(\i,4)*0.7+mod(\i,3)*0.2},{0.3+\i*0.42}) ellipse ({0.5+mod(\i,3)*0.25} and 0.12);
  }
  \foreach \i in {0,...,9}{ \fill[green!40!black] ({0.3+\i*0.62},{3.85+mod(\i,2)*0.1}) circle (0.22); }
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.7} Phân bón bị rửa trôi từ đất nông nghiệp đã gây ra hiện tượng phú dưỡng hóa trên dòng sông này.}
\end{figure}

\begin{itemize}[leftmargin=1.1em, itemsep=2pt]
  \item[\redbullet] Một lớp tảo (bloom of algae) có thể lan rộng khắp mặt nước, chặn ánh sáng tới các sinh vật thực vật khác trong nước.
  \item[\redbullet] Khi thực vật và tảo chết, vi khuẩn trong nước ăn chúng, phân hủy vật chất thực vật.
  \item[\redbullet] Các vi khuẩn sử dụng hết oxygen trong nước khi chúng ăn, dùng phần oxygen hòa tan trong nước.
  \item[\redbullet] Cá lấy oxygen hòa tan từ nước, hút qua mang. Không có oxygen hòa tan này chúng chết, ảnh hưởng tới toàn bộ hệ sinh thái.
\end{itemize}

Đây không phải vấn đề duy nhất với phân bón bị rửa trôi khỏi đất. Các nitrate cũng được phát hiện trong nước uống của chúng ta, đặc biệt ở những vùng nông nghiệp. Người ta lo ngại rằng nitrate trong nước uống gây hội chứng \sq{em bé xanh} (blue baby --- khi máu của trẻ sơ sinh bị thiếu oxygen), và cả ung thư dạ dày. Nhưng những người khác lập luận rằng mối liên hệ giữa nitrate và bệnh tật chưa được chứng minh, và rằng mức nitrate khuyến nghị bị đặt thấp một cách phi thực tế.

Nông dân có thể giúp hạn chế lượng nitrate trong các dòng nước bằng cách bổ sung lượng phân bón tiết kiệm và hợp lý nhất vào thời điểm tối ưu trong năm. Điều này giảm thiểu sự rửa trôi phân bón dư thừa từ đất vào sông và hồ.

\sectionRed{Các oxide nitrogen trong khí quyển}

Ở đầu chương này ta đã thấy khí nitrogen trơ như thế nào. Tuy nhiên, trong các điều kiện khắc nghiệt của một cơn dông sấm sét, tia sét có thể kích hoạt phản ứng giữa nitrogen và oxygen tạo thành các oxide nitrogen dạng khí --- nitrogen(II) oxide, NO, và nitrogen(IV) oxide, \ce{NO2}. Một sự oxi hóa nitrogen tương tự diễn ra bên trong động cơ xe hơi. Trong các xi lanh của động cơ, một hỗn hợp không khí (chủ yếu nitrogen cộng oxygen) và nhiên liệu bị nén lại và châm lửa bằng tia lửa điện. Trong những điều kiện này (áp suất cao và nhiệt độ cao), nitrogen tạo thành các oxide nitrogen. Chúng được thải vào khí quyển trong khí xả của xe.

Các oxide nitrogen là chất gây ô nhiễm. Chúng gây acid rain và smog quang hóa. Các oxide nitrogen cũng xúc tác cho sự oxi hóa khí sulfur dioxide \ce{SO2} trong khí quyển trong quá trình hình thành acid rain. Khí sulfur trioxide, \ce{SO3}, tạo thành bởi sự oxi hóa này phản ứng với nước mưa, tạo thành sulfuric acid. Các phản ứng dưới đây cho thấy tác dụng xúc tác của các oxide nitrogen:
\begin{center}\small \ce{SO2(g) + NO2(g) <=> SO3(g) + NO(g)} \end{center}
Sau đó \ce{NO2} được tái sinh khi NO phản ứng với oxygen trong không khí:
\begin{center}\small \ce{NO(g) + 1/2 O2(g) <=> NO2(g)} \end{center}
Phân tử \ce{NO2} này sau đó có thể oxi hóa tiếp một phân tử sulfur dioxide khác, đồng thời sinh ra một phân tử NO để tạo thành một phân tử \ce{NO2} khác. Phân tử \ce{NO2} mới này sẽ oxi hóa một phân tử sulfur dioxide khác, và cứ thế tiếp diễn. Do đó \ce{NO2} xúc tác cho sự oxi hóa \ce{SO2}.

Ngày nay, các hệ thống khí xả xe hơi được lắp bộ chuyển đổi xúc tác (catalytic converter) để giúp giảm các chất ô nhiễm từ xe cơ giới (xem trang 205). Phản ứng trên bề mặt của xúc tác nóng (ví dụ platinum) khử các oxide nitrogen thành khí nitrogen vô hại, thoát ra khỏi ống xả của xe.
\begin{center}\small \ce{2CO(g) + 2NO(g) <=> 2CO2(g) + N2(g)} \end{center}

\begin{questionbox}
\textbf{3}\hspace{0.6em}\textbf{a} Vì sao ammonia quan trọng trong việc cung cấp đủ lương thực nuôi sống thế giới?\\
\textbf{b} Đưa ra một vấn đề môi trường và một vấn đề sức khỏe có thể có gắn với phân bón nitrate.\\
\textbf{c} Giải thích cách các oxide nitrogen tham gia vào sự hình thành sulfur trioxide (\ce{SO3}) trong khí quyển.\\
\textbf{d} Phản ứng sau diễn ra trong bộ chuyển đổi xúc tác của xe hơi một khi nó đã nóng lên:
\begin{center}\small \ce{2CO(g) + 2NO(g) <=> 2CO2(g) + N2(g)} \end{center}
Dùng số oxi hóa để giải thích loài nào bị khử và loài nào bị oxi hóa trong phản ứng.
\end{questionbox}
`;

export const LATEX_PAGE_185 = String.raw`% ==========================================================================
% TRANG 185: SULFUR & OXIDE (HÌNH 13.8) + CÂU 4 + SULFURIC ACID
% ==========================================================================
\setcounter{page}{185}

\sectionRed{Sulfur và các oxide của nó}

Ta vừa thấy sulfur dioxide trong khí quyển có thể bị oxi hóa bởi nitrogen(IV) oxide thành sulfur(VI) oxide (còn gọi là sulfur trioxide) như thế nào. Chất này phản ứng với nước tạo thành sulfuric acid, nguyên nhân chính của acid rain.
\begin{center}\small \ce{SO3(g) + H2O(l) <=> H2SO4(aq)} \end{center}
Sulfur dioxide được tạo thành khi ta đốt nhiên liệu hóa thạch, đặc biệt là than đá. Dầu thô, khí thiên nhiên và than đá đều có các hợp chất sulfur tồn tại như những tạp chất. Khi nhiên liệu hóa thạch (hoặc các nhiên liệu chiết xuất từ chúng, chẳng hạn petrol hay diesel) bị đốt, các tạp chất sulfur bị oxi hóa thành sulfur dioxide. Cũng có những lượng lớn sulfur dioxide thoát ra tự nhiên từ hoạt động núi lửa.

Acid rain có những tác hại đối với:
\begin{itemize}[leftmargin=1.1em, itemsep=2pt]
  \item[\redbullet] thực vật (đặc biệt là cây gỗ)
  \item[\redbullet] sông, suối và hồ (cùng cá và các động vật khác trong những môi trường sống này)
  \item[\redbullet] các công trình xây dựng, tượng đài (Hình 13.8) và kết cấu kim loại.
\end{itemize}

% --- Hình 13.8: tượng đá vôi bị phong hóa ---
\begin{figure}[H]\centering
\begin{tikzpicture}
  \fill[top color=green!40!black!70, bottom color=green!50!black!85] (0,0) rectangle (5,4);
  \foreach \i in {0,...,11}{ \fill[green!45!black!70, opacity=0.6] ({0.4+mod(\i,6)*0.85},{3.5-div(\i,6)*0.7}) ellipse (0.5 and 0.28); }
  \fill[gray!50!brown!40] (1.7,0.2) rectangle (3.3,0.9);
  \fill[gray!40!brown!30] (1.85,0.9) rectangle (3.15,1.15);
  \fill[gray!20!brown!15] (2.5,2.9) .. controls (2.85,2.9) and (2.9,2.55) .. (2.7,2.4) .. controls (2.95,2.3) and (3.0,1.7) .. (2.85,1.15) -- (2.15,1.15) .. controls (1.95,1.7) and (2.05,2.3) .. (2.3,2.4) .. controls (2.1,2.55) and (2.15,2.9) .. (2.5,2.9);
  \fill[gray!40!brown!40, opacity=0.7] (2.35,2.2) ellipse (0.08 and 0.2);
  \fill[gray!40!brown!40, opacity=0.7] (2.62,1.7) ellipse (0.07 and 0.22);
  \fill[gray!40!brown!40, opacity=0.7] (2.4,1.35) ellipse (0.09 and 0.18);
  \foreach \i in {0,1,2}{ \fill[cyan!20!white, opacity=0.8] ({1.6+\i*1.0},{3.6-\i*0.15}) .. controls ++(0.05,0.15) and ++(-0.05,0.15) .. cycle; }
\end{tikzpicture}
\caption*{\small\sffamily \textbf{Hình 13.8} Bức tượng đá vôi này đã bị phong hóa hóa học bởi acid rain.}
\end{figure}

Acid rain rửa trôi (leaches) các chất dinh dưỡng khỏi đất và ngăn cản sự sinh trưởng khỏe mạnh của thực vật. Không chỉ vậy, acid rain có thể tấn công lớp sáp trên lá cây. Điều này làm tăng sự mất nước và khiến cây dễ mắc bệnh và sâu hại hơn. Cây cối ở độ cao lớn đặc biệt dễ tổn thương, vì chúng thường xuyên tiếp xúc với những giọt nước li ti trong mây (dung dịch sulfuric acid).

Acid rain rơi xuống các dòng suối, sông và hồ sẽ hạ thấp pH của nước. Nhiều động vật thủy sinh rất nhạy cảm với sự thay đổi pH. Nhiều ấu trùng côn trùng không thể sống sót dù độ acid chỉ tăng nhẹ. Các động vật khác cao hơn trong chuỗi thức ăn có sức chống chịu tốt hơn, nhưng số lượng của chúng giảm đi khi nguồn thức ăn chết dần.

Trong các thành phố, acid rain tấn công các tòa nhà và tượng đài, đặc biệt những thứ làm từ đá vôi. Phổ biến nhất trong số này là đá vôi (limestone), chứa calcium carbonate. Kim loại chính dùng trong xây dựng, sắt ở dạng thép, cũng bị ăn mòn bởi acid rain.

Các nhà hóa học đã tìm ra những cách giảm phát thải sulfur dioxide từ nhiên liệu hóa thạch. Họ nay sản xuất các phiên bản \sq{low-sulfur} của petrol và diesel. Ở các nhà máy điện đốt nhiên liệu hóa thạch, sulfur được loại khỏi nhiên liệu trước khi đốt. Hoặc cách khác, sulfur dioxide có thể được loại khỏi khí thải trước khi chúng được thả vào khí quyển qua các ống khói cao.

\begin{questionbox}
\textbf{4}\hspace{0.6em}\textbf{a} Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho sự tạo thành sulfuric acid từ sulfur trioxide trong khí quyển, \ce{SO3}.\\
\textbf{b} Liệt kê ba hệ quả của acid rain.
\end{questionbox}

\sectionRed{Sulfuric acid}

Sulfuric(VI) acid, \ce{H2SO4}, là một trong những hóa chất được sản xuất quan trọng nhất. Người ta nói rằng lượng sulfuric acid một quốc gia sử dụng là một trong những chỉ số tốt nhất cho biết quốc gia đó phát triển đến mức nào.

Ngành công nghiệp hóa chất sản xuất sulfuric acid bằng quy trình Contact (trang 129). Các nguyên liệu thô cần thiết là sulfur, không khí và nước. Sulfur có thể được khai thác từ dưới lòng đất (xem Hình 13.1b ở đầu chương này). Ba Lan và Hoa Kỳ xuất khẩu sulfur ra khắp thế giới. Sulfur chiết xuất từ các tạp chất trong nhiên liệu hóa thạch cũng có thể được dùng trong quy trình Contact.

Giống như nitric acid, sulfuric acid được dùng để sản xuất phân bón, chất tẩy rửa, sơn, pigment, phẩm nhuộm và sợi tổng hợp. Nó cũng được dùng để chế tạo nhiều loại hóa chất và nhựa, làm acid cho ắc quy, để thuộc da và làm sạch bề mặt kim loại (\sq{pickling}).
`;

export const LATEX_PAGE_186 = String.raw`% ==========================================================================
% TRANG 186: SUMMARY + CÂU HỎI CUỐI CHƯƠNG
% ==========================================================================
\setcounter{page}{186}

\begin{summarybox}
{\Large\bfseries\sffamily\color{summaryTitle} Tóm tắt (Summary)\par}\vspace{0.5em}
\begin{itemize}[leftmargin=1.2em, itemsep=3pt]
  \item[\purplebullet] Nitrogen, \ce{N2}, là một khí rất trơ vì năng lượng liên kết cao của liên kết ba N$\equiv$N.
  \item[\purplebullet] Ammonia, \ce{NH3}, là một hợp chất phổ biến của nitrogen. Phân tử ammonia có thể đóng vai trò một base, nhận một ion \ce{H+} để tạo thành ion ammonium, \ce{NH4+}.
  \item[\purplebullet] Ammonia được sản xuất bằng quy trình Haber (xem trang 129):
    \begin{center}\small \ce{\underset{nitrogen}{N2(g)} + \underset{hydrogen}{3H2(g)} <=>[Fe] \underset{ammonia}{2NH3(g)}} \end{center}
  \item[\purplebullet] Phần lớn ammonia được dùng để tạo các muối ammonium trong các phản ứng trung hòa với những acid khác nhau. Các muối này, chẳng hạn ammonium nitrate, \ce{NH4NO3}, được dùng làm phân bón.
  \item[\purplebullet] Phân bón dư thừa có thể bị rửa trôi từ đất vào sông và hồ, gây phú dưỡng hóa và giết chết sinh vật thủy sinh.
  \item[\purplebullet] Các oxide nitrogen được tạo thành tự nhiên trong các tia sét, khi nitrogen bị oxi hóa. Các oxide dạng khí này cũng hình thành trong các động cơ đốt trong và trở thành chất ô nhiễm khí quyển, góp phần gây acid rain.
  \item[\purplebullet] Sulfur có thể được khai thác ở dạng đơn chất và được dùng làm nguyên liệu thô sản xuất sulfuric acid trong quy trình Contact (xem trang 129).
  \item[\purplebullet] Sulfur dioxide là nguyên nhân chính của acid rain. Sự oxi hóa nó thành sulfur trioxide được xúc tác bởi các oxide nitrogen.
  \item[\purplebullet] Acid rain gây cái chết của sinh vật thủy sinh trong sông hồ, giết chết cây cối và phá hủy các công trình xây dựng cùng những kết cấu khác.
\end{itemize}
\end{summarybox}

\begin{eocbox}
{\Large\bfseries\sffamily\color{eocTitle} Câu hỏi cuối chương (End-of-chapter questions)\par}\vspace{0.6em}

\textbf{1} Ammonia được sản xuất bằng quy trình Haber.
\begin{itemize}[leftmargin=2em]
  \item[\textbf{a}] Công thức của ammonia là gì? \marks{1}
  \item[\textbf{b}] Viết phương trình hóa học cân bằng cho sự tạo thành ammonia từ nitrogen và hydrogen trong quy trình Haber. \marks{1}
  \item[\textbf{c}] Đưa ra ba công dụng của ammonia. \marks{3}
  \item[\textbf{d}] Cho biết công thức của các muối ammonium sau:
    \begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
      \item ammonium chloride \marks{1}
      \item ammonium nitrate \marks{1}
      \item ammonium sulfate \marks{1}
    \end{itemize}
  \item[\textbf{e}] Ammonium chloride phản ứng với calcium hydroxide khi đun nóng để tạo ra khí ammonia.
    \begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
      \item Phản ứng này được tiến hành dùng chất rắn hay dung dịch? \marks{1}
      \item Viết phương trình cân bằng cho phản ứng này. \marks{1}
    \end{itemize}
\end{itemize}
\hfill{\sffamily\footnotesize Tổng = 10}\par

\textbf{2} Phản ứng \ce{2SO2(g) + O2(g) <=> 2SO3(g)} đạt cân bằng động. Phản ứng thuận tỏa nhiệt. Phản ứng được xúc tác bởi vanadium(V) oxide, \ce{V2O5}. Bạn có một bình chứa cả ba khí ở trạng thái cân bằng.
\begin{itemize}[leftmargin=2em]
  \item[\textbf{a}] Điều gì sẽ xảy ra với vị trí cân bằng nếu:
    \begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
      \item bạn thêm oxygen vào bình? \marks{1}
      \item bạn lấy bớt sulfur trioxide khỏi bình? \marks{1}
      \item áp suất trong bình được hạ xuống? \marks{1}
      \item thêm \ce{V2O5} vào? \marks{1}
      \item nhiệt độ trong bình được tăng lên? \marks{1}
    \end{itemize}
  \item[\textbf{b}]
    \begin{itemize}[leftmargin=2em, label=\textbf{\roman*}]
      \item Đưa ra ba công dụng của sulfuric acid. \marks{3}
      \item Vì sao cần để càng ít sulfur dioxide thoát vào khí quyển càng tốt khi sản xuất sulfuric acid? \marks{1}
      \item Giải thích, kèm phương trình cân bằng, cách sulfur dioxide đi vào khí quyển từ một nhà máy điện đốt than. \marks{3}
    \end{itemize}
\end{itemize}
\hfill{\sffamily\footnotesize Tổng = 12}
\end{eocbox}
`;

export const LATEX_SOLUTIONS_APPENDIX_13 = String.raw`% ==========================================================================
% PHỤ LỤC: HƯỚNG DẪN GIẢI CHI TIẾT CÂU 1-4 + CÂU HỎI CUỐI CHƯƠNG (CHƯƠNG 13)
% ==========================================================================
\begin{multicols}{2}
\sectionRed{Phụ lục đáp án Chương 13}

\subsectionDark{Câu 1}
\textbf{a:} Phân tử \ce{N2} có liên kết ba N$\equiv$N với năng lượng liên kết rất lớn (gần 1000 kJ mol$^{-1}$) nên rất khó bẻ gãy; do đó nitrogen chỉ phản ứng ở điều kiện khắc nghiệt (sấm sét, buồng đốt động cơ).\\
\textbf{b:} \ce{NH3(aq) + HNO3(aq) -> NH4NO3(aq)}.\\
\textbf{c:} \ce{(NH4)2SO4(s) + 2NaOH(s) -> Na2SO4(s) + 2H2O(l) + 2NH3(g)} (đun nóng).

\subsectionDark{Câu 2}
\textbf{a:} \ce{N2(g) + 3H2(g) <=> 2NH3(g)}, xúc tác sắt (Fe), khoảng 450\,\textdegree C, 200 atm.\\
\textbf{b:} \ce{2NH3(aq) + H2SO4(aq) -> (NH4)2SO4(aq)}.\\
\textbf{c:} $M(\ce{NH4NO3}) = 14 + 4 + 14 + 48 = 80$; $\%N = \frac{2 \times 14}{80} \times 100 = 35{,}0\%$.

\subsectionDark{Câu 3}
\textbf{a:} Ammonia là nguyên liệu làm phân bón (các muối ammonium) giúp tăng năng suất cây trồng, nuôi sống thế giới; khoảng 85\% ammonia sản xuất ra dùng cho phân bón.\\
\textbf{b:} Môi trường: phú dưỡng hóa sông/hồ do nitrate rửa trôi. Sức khỏe: nitrate trong nước uống liên quan hội chứng \sq{blue baby} (và lo ngại ung thư dạ dày).\\
\textbf{c:} \ce{NO2} oxi hóa \ce{SO2}: \ce{SO2 + NO2 -> SO3 + NO}; sau đó \ce{NO + 1/2 O2 -> NO2} tái sinh chất xúc tác $\Rightarrow$ chu trình tiếp diễn.\\
\textbf{d:} Số oxi hóa: C từ +2 (CO) lên +4 (\ce{CO2}) $\Rightarrow$ C bị oxi hóa; N từ +2 (NO) xuống 0 (\ce{N2}) $\Rightarrow$ N bị khử.

\subsectionDark{Câu 4}
\textbf{a:} \ce{SO3(g) + H2O(l) -> H2SO4(aq)}.\\
\textbf{b:} (i) làm chết cá và sinh vật thủy sinh do hạ pH nước; (ii) hủy hoại cây cối (rửa trôi dinh dưỡng, phá lớp sáp lá); (iii) ăn mòn công trình, tượng đá vôi và kết cấu thép.

\subsectionDark{Câu hỏi cuối chương --- Bài 1}
\textbf{a:} \ce{NH3}. \textbf{b:} \ce{N2(g) + 3H2(g) <=> 2NH3(g)} (xúc tác Fe). \textbf{c:} ba công dụng: làm phân bón (muối ammonium); sản xuất nitric acid (thuốc nổ, phẩm nhuộm, nylon); bơm trực tiếp vào đất làm phân. \textbf{d:} i \ce{NH4Cl}; ii \ce{NH4NO3}; iii \ce{(NH4)2SO4}. \textbf{e:} i dùng chất rắn (trộn rắn rồi đun nóng); ii \ce{2NH4Cl(s) + Ca(OH)2(s) -> CaCl2(s) + 2H2O(l) + 2NH3(g)}.

\subsectionDark{Câu hỏi cuối chương --- Bài 2}
\textbf{a:} i thêm \ce{O2} $\rightarrow$ cân bằng dịch sang phải (chiều thuận). ii lấy bớt \ce{SO3} $\rightarrow$ dịch sang phải. iii hạ áp suất $\rightarrow$ dịch sang trái (phía có nhiều mol khí hơn: 3 so với 2). iv thêm \ce{V2O5} $\rightarrow$ không dịch chuyển (xúc tác chỉ làm cân bằng đạt nhanh hơn). v tăng nhiệt độ (phản ứng thuận tỏa nhiệt) $\rightarrow$ dịch sang trái (chiều thu nhiệt).\\
\textbf{b i:} phân bón, chất tẩy rửa, sơn/pigment/phẩm nhuộm, sợi tổng hợp, acid ắc quy, thuộc da, pickling (chọn 3). \textbf{ii:} \ce{SO2} thoát ra gây acid rain, phá hủy hệ sinh thái và công trình. \textbf{iii:} than chứa tạp chất sulfur; khi đốt: \ce{S(s) + O2(g) -> SO2(g)} thoát theo khí thải lên khí quyển.
\end{multicols}
`;

export const FULL_LATEX_DOCUMENT_13 = [
  LATEX_PREAMBLE_13,
  String.raw`\begin{document}`,
  LATEX_PAGE_180,
  LATEX_PAGE_181,
  LATEX_PAGE_182,
  LATEX_PAGE_183,
  LATEX_PAGE_184,
  LATEX_PAGE_185,
  LATEX_PAGE_186,
  String.raw`\end{document}`,
].join('\n');

export const FULL_LATEX_WITH_SOLUTIONS_13 = [
  LATEX_PREAMBLE_13,
  String.raw`\begin{document}`,
  LATEX_PAGE_180,
  LATEX_PAGE_181,
  LATEX_PAGE_182,
  LATEX_PAGE_183,
  LATEX_PAGE_184,
  LATEX_PAGE_185,
  LATEX_PAGE_186,
  LATEX_SOLUTIONS_APPENDIX_13,
  String.raw`\end{document}`,
].join('\n');

export const LATEX_SECTIONS_13: LatexSectionItem13[] = [
  {
    id: 'full',
    pageNumber: '180–186',
    title: 'Toàn bộ tài liệu Chương 13 (Full 7 trang SGK)',
    subtitle: 'Bản LaTeX đầy đủ từ trang mở đầu đến Câu hỏi cuối chương',
    latexCode: FULL_LATEX_DOCUMENT_13,
  },
  {
    id: 'full-solutions',
    pageNumber: '180–186 + Đáp án',
    title: 'Toàn bộ SGK Chương 13 + Phụ lục Giải chi tiết',
    subtitle: 'Bao gồm toàn bộ nội dung sách giáo khoa và lời giải Câu 1–4 + cuối chương',
    latexCode: FULL_LATEX_WITH_SOLUTIONS_13,
  },
  {
    id: 'p180',
    pageNumber: 'Trang 180',
    title: 'Trang mở đầu Chương 13 & Learning outcomes',
    subtitle: 'Tiêu đề chương, chuẩn đầu ra',
    latexCode: LATEX_PAGE_180,
  },
  {
    id: 'p181',
    pageNumber: 'Trang 181',
    title: 'Giới thiệu (Hình 13.1) & Khí nitrogen (Hình 13.2)',
    subtitle: 'Tàu chở dầu, mỏ sulfur, liên kết ba N≡N',
    latexCode: LATEX_PAGE_181,
  },
  {
    id: 'p182',
    pageNumber: 'Trang 182',
    title: 'Sấm sét, ammonia & hợp chất ammonium',
    subtitle: 'Hình 13.3, 13.4, 13.5 + quy trình Haber',
    latexCode: LATEX_PAGE_182,
  },
  {
    id: 'p183',
    pageNumber: 'Trang 183',
    title: 'Câu 1, công dụng ammonia, Câu 2 & phân bón nitrate',
    subtitle: 'Hình 13.6, ammonium nitrate, eutrophication mở đầu',
    latexCode: LATEX_PAGE_183,
  },
  {
    id: 'p184',
    pageNumber: 'Trang 184',
    title: 'Phú dưỡng hóa, oxide nitrogen khí quyển & Câu 3',
    subtitle: 'Hình 13.7, chu trình xúc tác NOx, catalytic converter',
    latexCode: LATEX_PAGE_184,
  },
  {
    id: 'p185',
    pageNumber: 'Trang 185',
    title: 'Sulfur & oxide, Câu 4 & Sulfuric acid',
    subtitle: 'Hình 13.8, acid rain, quy trình Contact',
    latexCode: LATEX_PAGE_185,
  },
  {
    id: 'p186',
    pageNumber: 'Trang 186',
    title: 'Tóm tắt (Summary) & Câu hỏi cuối chương',
    subtitle: 'Khung tím tổng kết + Bài 1 (10đ), Bài 2 (12đ)',
    latexCode: LATEX_PAGE_186,
  },
];
