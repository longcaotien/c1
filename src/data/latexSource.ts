export interface LatexSectionItem {
  id: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  latexCode: string;
}

export const LATEX_PREAMBLE = String.raw`% ==========================================================================
% BẢN DỊCH SÁCH GIÁO KHOA HÓA HỌC CAMBRIDGE AS & A LEVEL (TRANG 226 - 233)
% Chương 17: Alcohol, Ester và Carboxylic Acid (Alcohols, Esters and Carboxylic Acids)
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
\definecolor{cambridgeRed}{HTML}{D33427}      % Đỏ tiêu đề & Khung Giới thiệu
\definecolor{cambridgeDarkRed}{HTML}{B52418}  % Đỏ đậm nhấn
\definecolor{questionBg}{HTML}{F4EFE6}        % Nền kem hộp QUESTION
\definecolor{questionTab}{HTML}{C6B299}       % Nhãn nâu QUESTION
\definecolor{calloutBg}{HTML}{F8D7D4}         % Nền hồng nhạt hộp chuyên đề
\definecolor{calloutHeader}{HTML}{DD3645}     % Thanh tiêu đề đỏ hồng
\definecolor{summaryBg}{HTML}{EFE3EE}         % Nền tím nhạt hộp Summary
\definecolor{summaryTitle}{HTML}{5C2D75}      % Tím đậm tiêu đề Summary
\definecolor{summaryBullet}{HTML}{9A6FB0}     % Ô vuông tím danh sách Summary
\definecolor{eocBg}{HTML}{DFEFF8}             % Nền xanh dương nhạt Câu hỏi cuối chương
\definecolor{eocTitle}{HTML}{527993}          % Xanh thép tiêu đề cuối chương
\definecolor{pageBadge}{HTML}{596A76}         % Nhãn số trang ở lề sách
\definecolor{subHeadingGray}{HTML}{5A5A5A}    % Xám tiêu đề mục nhỏ

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
  outer arc=3pt,
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

% --- Hộp Chuyên đề Hồng/Đỏ (HALOGENATION / ESTERIFICATION / TERTIARY ALCOHOLS) ---
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

% --- Hộp CÂU HỎI CUỐI CHƯƠNG (End-of-chapter questions màu xanh nhạt) ---
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
\newcommand{\purplebullet}{\textcolor{summaryBullet}{\rule[0.15ex]{0.55em}{0.55em}}}
\newcommand{\bluebullet}{\textcolor{eocTitle}{\rule[0.15ex]{0.55em}{0.55em}}}

% --- Header & Footer hiển thị số trang kiểu nhãn lề sách giáo khoa ---
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[LE,RO]{%
  \tikz[baseline=(n.base)] \node[fill=pageBadge, text=white, font=\sffamily\bfseries\footnotesize, inner xsep=6pt, inner ysep=3pt, rounded corners=1pt] (n) {\thepage};%
}
\fancyhead[LO,RE]{\sffamily\footnotesize\color{black!55}Chương 17: Alcohol, ester và carboxylic acid}

\setlength{\parindent}{1em}
\setlength{\parskip}{0.35em}
`;

export const LATEX_PAGE_226 = String.raw`% ==========================================================================
% TRANG 226: GIỚI THIỆU, DÃY ĐỒNG ĐẲNG CỦA ALCOHOL & PHẢN ỨNG CHÁY
% ==========================================================================
\setcounter{page}{226}

% --- Khung đỏ Đầu trang: Giới thiệu & Hình 17.1 ---
\begin{tcolorbox}[
  enhanced,
  colback=cambridgeRed,
  colframe=cambridgeRed,
  arc=2pt,
  left=14pt,
  right=14pt,
  top=14pt,
  bottom=14pt,
  after skip=14pt
]
  \begin{minipage}[t]{0.46\textwidth}
    {\LARGE\bfseries\sffamily\color{white} Giới thiệu (Introduction)\par}
    \vspace{0.5em}
    {\small\sffamily\color{white}\setlength{\parskip}{0.4em}
    Ethanol, $\ce{C2H5OH}$, là chất được sử dụng rộng rãi nhất trong dãy đồng đẳng của alcohol. Đường chiết xuất từ các loại cây trồng như cây mía và củ cải đường có thể được lên men nhờ nấm men (\textit{yeast}) để sản xuất ethanol. Ethanol là một \sq{nhiên liệu sinh học} (\textit{biofuel}) và cháy với ngọn lửa sạch. Quá trình này ngày càng trở nên quan trọng khi nguồn cung dầu thô của chúng ta suy giảm và cần có những nhiên liệu sinh học sạch hơn, dễ sản xuất hơn để thay thế cho xăng và dầu diesel.\par}
  \end{minipage}\hfill
  \begin{minipage}[t]{0.50\textwidth}
    \vspace{0pt}
    \begin{center}
      \IfFileExists{fig17_1.jpg}{%
        \includegraphics[width=\linewidth]{fig17_1.jpg}%
      }{%
        % Hình minh họa vector TikZ tự động nếu chưa chèn file ảnh rời fig17_1.jpg
        \begin{tikzpicture}[scale=0.88]
          \fill[green!25!brown!30] (0,0) rectangle (7.2,4.0);
          \fill[brown!50!black] (0,0) rectangle (7.2,0.7);
          \foreach \x in {0.4,0.8,...,6.8} {
            \draw[green!45!black, line width=1.6pt] (\x,0.6) .. controls (\x+0.15,2.2) .. (\x-0.1,3.7);
            \draw[green!60!black, line width=1pt] (\x,2.3) -- (\x+0.45,2.8);
            \draw[green!60!black, line width=1pt] (\x,2.6) -- (\x-0.45,3.1);
          }
          \node[fill=black!70, text=white, font=\sffamily\scriptsize, rounded corners=2pt, inner sep=4pt, align=center] at (3.6,1.2)
            {Minh họa Hình 17.1: Thu hoạch mía đường\\(Có thể đặt file \texttt{fig17\_1.jpg} cùng thư mục)};
        \end{tikzpicture}%
      }
    \end{center}
    {\footnotesize\sffamily\color{white}\textbf{Hình 17.1} Đường chiết xuất từ cây mía có thể được lên men với nấm men để tạo ra ethanol.\par}
  \end{minipage}
\end{tcolorbox}

\begin{multicols}{2}

\sectionRed{Dãy đồng đẳng của alcohol}

Alcohol là những phân tử hữu cơ có chứa nhóm hydroxyl, $\ce{-OH}$. Khi một nhóm hydroxyl thay thế một nguyên tử hydrogen trong phân tử alkane, công thức tổng quát của dãy là $\ce{C_{\textit{n}}H_{2\textit{n}+1}OH}$. Các alcohol được gọi tên bằng cách thêm hậu tố \sq{\texttt{-anol}} vào gốc tên alkane tương ứng. Ví dụ, $\ce{CH3OH}$ được gọi là methanol. Đối với các phân tử alcohol có từ ba nguyên tử carbon trở lên, vị trí của nhóm hydroxyl được biểu thị bằng cách chèn một chữ số để chỉ nguyên tử carbon nào liên kết với nhóm $\ce{-OH}$. Hình 17.2 đưa ra một số ví dụ.

% --- Hình 17.2: Công thức cấu tạo 3 bậc alcohol bằng gói chemfig ---
\begin{tcolorbox}[colback=white, colframe=black!15, boxrule=0.5pt, arc=2pt, left=4pt, right=4pt, top=6pt, bottom=6pt]
\begin{center}
  \footnotesize\sffamily
  \begin{tabular}{ccc}
    \chemfig{H_3C-CH_2-CH_2-OH} &
    \chemfig{H_3C-CH(-[2]CH_3)-OH} &
    \chemfig{H_3C-C(-[2]CH_3)(-[-2]CH_3)-OH} \\[1.2em]
    \textbf{propan-1-ol} & \textbf{propan-2-ol} & \textbf{2-methylpropan-2-ol} \\
    alcohol bậc một & alcohol bậc hai & alcohol bậc ba \\
    (\textit{primary alcohol}) & (\textit{secondary alcohol}) & (\textit{tertiary alcohol})
  \end{tabular}
\end{center}
\vspace{2pt}
{\footnotesize\sffamily \textbf{Hình 17.2} Lưu ý rằng việc đánh số chỉ vị trí của nhóm $\ce{-OH}$ trong một alcohol bắt đầu từ đầu nào của phân tử sao cho chỉ số vị trí nhận giá trị nhỏ hơn.}
\end{tcolorbox}

Propan-1-ol được phân loại là một \termRed{alcohol bậc một} (\textit{primary alcohol}). Nguyên tử carbon liên kết với nhóm $\ce{-OH}$ chỉ gắn trực tiếp với một nguyên tử carbon khác (nhóm alkyl). Propan-2-ol là một \termRed{alcohol bậc hai} (\textit{secondary alcohol}) vì nguyên tử carbon liên kết với nhóm $\ce{-OH}$ được gắn với hai nguyên tử carbon khác (hai nhóm alkyl). Khi có ba nhóm alkyl cùng gắn vào, 2-methylpropan-2-ol là một ví dụ về \termRed{alcohol bậc ba} (\textit{tertiary alcohol}).

Các alcohol có nhiệt độ sôi cao hơn so với dự kiến khi đem so sánh với các phân tử hữu cơ khác có khối lượng phân tử tương đương. Ngay cả methanol, alcohol có khối lượng mol nhỏ nhất, cũng là một chất lỏng ở nhiệt độ phòng. Điều này xảy ra là do có liên kết hydrogen giữa các phân tử alcohol (xem trang 64). Liên kết hydrogen cũng giải thích tại sao các phân tử alcohol mạch nhỏ lại hòa trộn và tan tốt trong nước đến vậy.

\begin{questionbox}
\textbf{1} \textbf{a} Giải thích sự hình thành liên kết hydrogen:
\begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, topsep=2pt, itemsep=1pt]
  \item giữa các phân tử ethanol với nhau
  \item giữa các phân tử ethanol và phân tử nước.
\end{enumerate}
\textbf{b} Ethanol tan vô hạn trong nước ở mọi tỉ lệ nhưng hexan-1-ol lại ít tan hơn trong nước. Tại sao lại như vậy?
\end{questionbox}

\sectionRed{Các phản ứng của alcohol}

\subsectionGray{1}{Phản ứng cháy (Combustion)}

Khi được châm lửa, các alcohol phản ứng với oxygen trong không khí. Sản phẩm của phản ứng cháy hoàn toàn là carbon dioxide và nước. Ví dụ, ethanol cháy với ngọn lửa màu xanh sạch khi được cung cấp dồi dào không khí:

\begin{center}
\small
$\text{alcohol} + \text{oxygen} \longrightarrow \text{carbon dioxide} + \text{nước}$\\[0.5em]
$\underset{\text{ethanol}}{\ce{C2H5OH}} + \ce{3O2} \longrightarrow \ce{2CO2} + \ce{3H2O}$
\end{center}

Ethanol đôi khi được sử dụng tại Brazil làm nhiên liệu cho ô tô. Điều này giúp làm giảm lượng xăng dầu tiêu thụ.

\end{multicols}
\newpage
`;

export const LATEX_PAGE_227 = String.raw`% ==========================================================================
% TRANG 227: NHIÊN LIỆU SINH HỌC & PHẢN ỨNG THẾ TẠO HALOGENOALKANE
% ==========================================================================
\begin{multicols}{2}

Một quốc gia như Brazil có trữ lượng dầu mỏ ít nhưng lại có thể trồng rất nhiều mía; mía có thể được lên men để sản xuất ethanol dùng làm nhiên liệu ở dạng nguyên chất hoặc pha trộn với các loại nhiên liệu khác (Hình 17.3). Bên cạnh việc góp phần bảo tồn nguồn cung dầu thô đang suy giảm của thế giới, cây mía còn có ưu điểm là hấp thụ khí $\ce{CO2}$ trong quá trình sinh trưởng. Mặc dù lượng $\ce{CO2}$ này thực chất được trả lại bầu khí quyển trong quá trình lên men và khi đốt cháy ethanol, nhưng các \termRed{nhiên liệu sinh học} (\textit{biofuels}) như ethanol vẫn được gọi là \sq{trung hòa carbon} (\textit{carbon neutral}). Nhìn chung, về mặt lý thuyết, chúng không làm gia tăng lượng khí nhà kính trong không khí. Ngay cả khi chúng ta tính đến lượng $\ce{CO2}$ phát sinh trong quá trình trồng trọt, thu hoạch, vận chuyển và chế biến mía, việc sử dụng \sq{ethanol sinh học} (\textit{bio-ethanol}) làm nhiên liệu vẫn tốt cho môi trường hơn nhiều so với xăng hoặc dầu diesel lấy từ dầu thô.

% --- Hình 17.3: Nhiên liệu Gasohol ---
\begin{tcolorbox}[colback=white, colframe=black!15, boxrule=0.5pt, arc=2pt, left=6pt, right=6pt, top=6pt, bottom=6pt]
\begin{center}
  \IfFileExists{fig17_3.jpg}{%
    \includegraphics[width=\linewidth]{fig17_3.jpg}%
  }{%
    \begin{tikzpicture}[scale=0.85]
      \fill[black!80] (0,0) rectangle (6.8,4.0);
      % Vòi bơm xăng bên trái
      \draw[blue!60!cyan, line width=3pt] (0.5,0.6) -- (1.4,1.8) -- (0.8,2.4);
      \fill[blue!70] (1.1,1.0) rectangle (1.8,1.9);
      \node[text=green!40, font=\sffamily\bfseries\scriptsize] at (0.7,0.4) {E20 BIOFUEL};
      % Bình cầu chứa Gasohol 95 bên phải
      \fill[orange!85!red, opacity=0.85] (4.7,1.6) circle (1.15);
      \draw[white, thick] (4.7,1.6) circle (1.15);
      \draw[white, thick] (4.5,2.7) rectangle (4.9,3.5);
      \node[text=yellow!90!white, font=\sffamily\bfseries\small] at (4.7,1.5) {Gasohol 95};
      \node[text=white, font=\sffamily\scriptsize] at (3.4,3.6) {Hình 17.3: Ethanol + Xăng};
    \end{tikzpicture}%
  }
\end{center}
{\footnotesize\sffamily \textbf{Hình 17.3} Nhiên liệu có tên gọi \sq{gasohol} là một hỗn hợp của ethanol và xăng.}
\end{tcolorbox}

Ethanol được sử dụng làm dung môi cũng như làm nhiên liệu. Chúng ta thường dùng nó dưới dạng \sq{cồn công nghiệp} (\textit{methylated spirits}), chứa khoảng 90\% ethanol.

\begin{questionbox}
\textbf{2} \textbf{a} Viết phương trình hóa học đã cân bằng cho phản ứng cháy hoàn toàn của:
\begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, topsep=2pt, itemsep=1pt]
  \item propan-1-ol
  \item butan-1-ol.
\end{enumerate}
\textbf{b} Glucose có thể được lên men bằng nấm men trong điều kiện kị khí. Hãy gọi tên các sản phẩm của phản ứng.
\end{questionbox}

\subsectionGray{2}{Phản ứng thế tạo thành halogenoalkane}

Trong phản ứng thế này với một hydrogen halide (chẳng hạn như hydrogen chloride), nhóm $\ce{-OH}$ trong alcohol bị thay thế bởi một nguyên tử halogen để tạo ra một halogenoalkane (dẫn xuất halogen). Nguyên tử carbon liên kết với nhóm hydroxyl trong alcohol sẽ mang một phần điện tích dương (do oxygen có độ âm điện lớn hơn carbon). Điều này làm cho nguyên tử carbon dễ bị tấn công bởi tác nhân nucleophile. Sự tấn công ban đầu vào alcohol được thực hiện bởi nguyên tử halogen mang một phần điện tích âm trong phân tử hydrogen halide:

\begin{center}
\small
$\overset{\color{cambridgeRed}\delta+}{\ce{H}} \mathrel{\relbar\joinrel\rightharpoonup} \overset{\color{cambridgeRed}\delta-}{\ce{X}}$ \quad trong đó $\ce{X} =$ nguyên tử halogen\\[0.6em]
$\text{alcohol} + \text{hydrogen halide} \longrightarrow \text{halogenoalkane} + \text{nước}$
\end{center}

Ví dụ:
\begin{center}
\small
$\underset{\text{ethanol}}{\ce{CH3CH2OH}} + \ce{HCl} \longrightarrow \underset{\text{chloroethane}}{\ce{CH3CH2Cl}} + \ce{H2O}$
\end{center}

Khí hydrogen chloride khô dùng cho phản ứng này có thể được điều chế \textit{tại chỗ} (\textit{in situ} -- ngay trong bình phản ứng). Sodium chloride và sulfuric acid đặc được sử dụng cho mục đích này:
\begin{center}
\small
$\ce{NaCl + H2SO4 -> NaHSO4 + HCl}$
\end{center}

% --- Hộp chuyên đề: HALOGEN HÓA ALCOHOL & Hình 17.4 ---
\begin{calloutbox}{HALOGEN HÓA MỘT ALCOHOL (HALOGENATION OF AN ALCOHOL)}
Alcohol được đun nóng hồi lưu (xem bộ dụng cụ ở trang 219) cùng với các chất phản ứng để điều chế halogenoalkane. Sau đó, halogenoalkane tạo thành có thể được chưng cất tách ra khỏi hỗn hợp phản ứng và thu lấy dưới dạng các giọt chất lỏng như dầu lắng dưới lớp nước (Hình 17.4).

\begin{center}
  \IfFileExists{fig17_4.jpg}{%
    \includegraphics[width=0.92\linewidth]{fig17_4.jpg}%
  }{%
    % Sơ đồ TikZ chuẩn xác mô phỏng Hình 17.4: Chưng cất bromoethane từ bình cầu đáy lê
    \begin{tikzpicture}[scale=0.78]
      \fill[blue!15!white] (0,0) rectangle (7.8,5.6);
      \fill[black!15] (0,0) rectangle (7.8,1.1);
      % Kiềng đun & lưới amiăng
      \draw[black!80, line width=2pt] (0.5,1.3) -- (3.5,1.3);
      \draw[black!80, line width=2pt] (0.8,1.3) -- (0.6,0.1);
      \draw[black!80, line width=2pt] (3.2,1.3) -- (3.4,0.1);
      \fill[white!90!gray] (2.0,1.35) ellipse (1.1 and 0.12);
      % Bình cầu đáy lê (pear-shaped flask)
      \draw[white, line width=1.4pt, fill=white!40, fill opacity=0.6]
        (1.75,4.8) -- (1.75,3.2) .. controls (1.2,2.8) and (1.3,2.0) .. (2.0,1.4)
        .. controls (2.7,2.0) and (2.8,2.8) .. (2.25,3.2) -- (2.25,4.8) -- cycle;
      % Dung dịch phản ứng + tinh thể NaBr màu trắng ở đáy
      \fill[yellow!25!gray!40] (1.48,2.3) .. controls (1.55,1.9) and (1.8,1.6) .. (2.0,1.42)
        .. controls (2.2,1.6) and (2.45,1.9) .. (2.52,2.3) -- cycle;
      \fill[white] (1.78,1.72) .. controls (1.9,1.5) and (2.1,1.5) .. (2.22,1.72) -- cycle;
      % Kẹp gỗ giữ cổ bình
      \fill[brown!70!black] (0,3.4) rectangle (2.35,3.65);
      % Nhánh chưng cất & ống sinh hàn dẫn sang cốc nước
      \draw[white, line width=4pt] (2.25,4.0) -- (3.3,3.8) -- (6.3,1.2);
      \draw[blue!35!gray, line width=1.2pt] (2.25,4.0) -- (3.3,3.8) -- (6.3,1.2);
      % Cốc thu sản phẩm có chứa nước và giọt dầu bromoethane dưới đáy
      \fill[cyan!25, opacity=0.7] (5.2,0.8) rectangle (6.8,1.9);
      \draw[white, line width=1.5pt] (5.2,2.6) -- (5.2,0.8) -- (6.8,0.8) -- (6.8,2.6);
      \fill[white!90!yellow, draw=gray] (6.1,0.92) ellipse (0.35 and 0.1);
      \node[font=\sffamily\scriptsize, text=black!80] at (2.0,0.6) {Bình đáy lê ($\ce{NaBr}$ rắn)};
      \node[font=\sffamily\scriptsize, text=black!80] at (6.0,0.4) {Giọt dầu $\ce{C2H5Br}$};
    \end{tikzpicture}%
  }
\end{center}
{\footnotesize\sffamily \textbf{Hình 17.4} Bromoethane đang được chưng cất tách ra sau phản ứng giữa ethanol và hydrogen bromide. Chất rắn màu trắng nhìn thấy trong bình cầu đáy lê là sodium bromide (dạng tinh thể). Sodium bromide phản ứng với sulfuric acid đặc để tạo ra lượng hydrogen bromide cần thiết cho phản ứng.}
\end{calloutbox}

\end{multicols}
\newpage
`;

export const LATEX_PAGE_228 = String.raw`% ==========================================================================
% TRANG 228: CÁC TÁC NHÂN HALOGEN HÓA KHÁC (SOCl2, PCl5, PI3) & PHẢN ỨNG VỚI Na
% ==========================================================================
\begin{multicols}{2}

Sulfur dichloride oxide, $\ce{SOCl2}$, cũng có thể được sử dụng để thế một nguyên tử chlorine vào phân tử alcohol, như minh họa dưới đây:

\begin{center}
\small
$\ce{C2H5OH + SOCl2 -> C2H5Cl + HCl + SO2}$
\end{center}

Lưu ý rằng trong phản ứng này, cả hai sản phẩm phụ của phản ứng ($\ce{HCl}$ và $\ce{SO2}$) đều là chất khí. Chúng thoát ra khỏi hỗn hợp phản ứng, để lại halogenoalkane mà không cần phải chưng cất tách ra như trong phản ứng với hydrogen halide.

Chúng ta cũng có thể sử dụng các phosphorus halide để cung cấp các nguyên tử halogen cho phản ứng thế này.

Đối với các chloroalkane, ta có thể dùng phosphorus(V) chloride ở trạng thái rắn, $\ce{PCl5}$:

\begin{center}
\small
$\ce{C2H5OH + PCl5 ->[\text{nhiệt độ phòng}] C2H5Cl + HCl + POCl3}$
\end{center}

Sự giải phóng khí hydrogen chloride có tính acid từ phản ứng này có thể được dùng làm phép thử để nhận biết nhóm hydroxyl ($\ce{-OH}$). Khí $\ce{HCl}$ thoát ra tạo thành hiện tượng \sq{khói trắng ẩm} (\textit{steamy fumes}) mang tính acid có thể quan sát được.

Phosphorus(III) chloride ($\ce{PCl3}$) cũng có thể được dùng để halogen hóa một alcohol, nhưng phản ứng này đòi hỏi phải đun nóng.

Đối với các bromoalkane và iodoalkane, ta có thể điều chế phosphorus(III) halide ($\ce{PBr3}$ hoặc $\ce{PI3}$) \textit{tại chỗ} (\textit{in situ}) bằng cách sử dụng phosphorus đỏ và bromine hoặc iodine. Các chất này được đun ấm cùng với alcohol. Ví dụ:

\begin{center}
\small
$\ce{3C2H5OH + PI3 ->} \underset{\text{iodoethane}}{\ce{3C2H5I}} + \ce{H3PO3}$
\end{center}

\begin{questionbox}
\textbf{3} \textbf{a} Viết phương trình hóa học đã cân bằng biểu diễn phản ứng giữa ethanol và hydrogen bromide.

\textbf{b} Các hóa chất (tác nhân) và điều kiện phản ứng được sử dụng cho phản ứng này là gì?

\textbf{c} Chúng ta gọi phản ứng này thuộc loại phản ứng gì?
\end{questionbox}

\subsectionGray{3}{Phản ứng với kim loại sodium (Reaction with sodium metal)}

Trong phản ứng với các hydrogen halide, liên kết $\ce{C-O}$ trong phân tử alcohol bị phân cắt. Tuy nhiên, ở một số phản ứng khác, liên kết $\ce{O-H}$ trong alcohol mới bị phân cắt. Phản ứng với kim loại sodium là một ví dụ:

\begin{center}
\small
$\underset{\text{ethanol}}{\ce{C2H5OH}} + \underset{\text{sodium}}{\ce{Na}} \longrightarrow \underset{\text{sodium ethoxide}}{\ce{C2H5O^-Na^+}} + \underset{\text{hydrogen}}{\ce{1/2 H2}}$
\end{center}

Phản ứng này tương tự như phản ứng của sodium với nước, nhưng diễn ra êm dịu (kém mãnh liệt) hơn. Trong cả hai trường hợp, khí hydrogen đều thoát ra và một hợp chất ion mang tính base được tạo thành. Đối với ethanol, nếu làm bay hơi hết lượng ethanol dư sau phản ứng, một chất rắn kết tinh màu trắng sẽ còn lại. Đó chính là sodium ethoxide.

Các alcohol khác cũng phản ứng theo cách tương tự với sodium. Ví dụ, propan-1-ol sẽ tạo ra sodium propoxide cùng với khí hydrogen.

Tổng quát:
\begin{center}
\small
$\text{alcohol} + \text{sodium} \longrightarrow \text{sodium alkoxide} + \text{hydrogen}$
\end{center}

Chúng ta nhận thấy rằng mạch hydrocarbon càng dài thì phản ứng diễn ra càng kém mãnh liệt.

% --- Hình 17.5: Sodium phản ứng với ethanol có mặt phenolphthalein ---
\begin{tcolorbox}[colback=white, colframe=black!15, boxrule=0.5pt, arc=2pt, left=6pt, right=6pt, top=6pt, bottom=6pt]
\begin{center}
  \IfFileExists{fig17_5.jpg}{%
    \includegraphics[width=0.92\linewidth]{fig17_5.jpg}%
  }{%
    \begin{tikzpicture}[scale=0.82]
      \fill[gray!15] (0,0) rectangle (6.6,5.2);
      \fill[orange!50!brown] (0,0) rectangle (6.6,0.9);
      % Cốc thủy tinh có vạch chia 25, 50, 75
      \fill[white!80!gray, opacity=0.6] (1.4,0.8) rectangle (5.2,3.4);
      % Vệt màu hồng phenolphthalein
      \shade[inner color=magenta!85!red, outer color=magenta!10, opacity=0.75]
        (3.3,2.0) ellipse (0.75 and 1.15);
      % Mẩu kim loại Na ở đáy cốc + bọt khí H2
      \fill[white, draw=gray] (3.3,0.95) ellipse (0.28 and 0.12);
      \foreach \y in {1.2,1.5,1.8,2.2,2.6,3.0} {
        \fill[white, draw=magenta!80] (3.3, \y) circle (0.06);
      }
      \draw[black!65, line width=1.5pt] (1.3,4.6) -- (1.4,0.8) -- (5.2,0.8) -- (5.3,4.6);
      \draw[black!50, thick] (1.4,3.4) -- (5.2,3.4);
      % Vạch chia thể tích
      \foreach \y/\lbl in {1.4/25, 2.4/50, 3.4/75} {
        \draw[white, line width=1.4pt] (1.4,\y) -- (1.7,\y);
        \node[white, font=\sffamily\bfseries\small, right] at (1.7,\y) {\lbl};
      }
    \end{tikzpicture}%
  }
\end{center}
{\footnotesize\sffamily \textbf{Hình 17.5} Sodium phản ứng với ethanol. Màu hồng xuất hiện là từ chất chỉ thị phenolphthalein không màu đã được thêm vào ethanol, cho thấy tính base của sodium ethoxide tạo thành.}
\end{tcolorbox}

\begin{questionbox}
\textbf{4} Lithium phản ứng với các alcohol theo cách tương tự như sodium. Một mẩu nhỏ kim loại lithium được thả vào mặt kính đồng hồ có chứa propan-1-ol.
\begin{enumerate}[label=\textbf{\alph*}, leftmargin=1.5em, topsep=2pt, itemsep=2pt]
  \item Bạn sẽ quan sát thấy hiện tượng gì?
  \item Gọi tên các sản phẩm của phản ứng.
  \item Bạn dự đoán sẽ thấy sự khác biệt gì nếu sử dụng sodium thay cho lithium trong phản ứng này?
\end{enumerate}
\end{questionbox}

\end{multicols}
\newpage
`;

export const LATEX_PAGE_229 = String.raw`% ==========================================================================
% TRANG 229: PHẢN ỨNG ESTER HÓA (ESTERIFICATION) & THỦY PHÂN ESTER
% ==========================================================================
\subsectionGray{4}{Phản ứng ester hóa (Esterification)}

\begin{calloutbox}{ALCOHOL CỘNG CARBOXYLIC ACID (ALCOHOL PLUS CARBOXYLIC ACID)}
\begin{multicols}{2}
Một phản ứng khác có liên quan đến sự phân cắt liên kết $\ce{O-H}$ trong các alcohol là \termRed{phản ứng ester hóa} (\textit{esterification}), tức là phản ứng điều chế các ester. Phản ứng ester hóa thường diễn ra giữa một alcohol và một carboxylic acid. Phương trình tổng quát là:

\begin{center}
\footnotesize
$\text{carboxylic acid} + \text{alcohol} \xrightleftharpoons{\text{xúc tác acid}} \text{ester} + \text{nước}$
\end{center}

Để phản ứng này xảy ra, carboxylic acid và alcohol được đun nóng hồi lưu với một \textbf{chất xúc tác acid mạnh} (thường là dung dịch sulfuric acid đặc). Phản ứng này là phản ứng thuận nghịch, do đó một trạng thái cân bằng có thể được thiết lập với sự hiện diện của tất cả các chất tham gia và sản phẩm như trong phương trình tổng quát.

Các ester tạo thành thường có mùi thơm ngọt của trái cây. Chúng có mặt tự nhiên trong các loại hoa quả, và chúng ta sử dụng chúng trong các hương liệu nhân tạo và nước hoa (Hình 17.6). Chúng cũng được dùng làm dung môi, ví dụ như trong nước tẩy sơn móng tay.

Dưới đây là một ví dụ về phản ứng ester hóa:

\begin{center}
\footnotesize
\begin{tabular}{ccccccc}
$\ce{C2H5OH}$ & $+$ & \chemfig{CH_3-C(=[:60]O)-[:-60]OH} & $\xrightleftharpoons{\ce{H2SO4}}$ & \chemfig{CH_3-C(=[:60]O)-[:-60]OC_2H_5} & $+$ & $\ce{H2O}$ \\[1.2em]
ethanol & & ethanoic acid & & ethyl ethanoate & & nước
\end{tabular}
\end{center}

Ester tạo thành được gọi là ethyl ethanoate.

Tên của ester tạo thành sẽ là gì nếu cho ethanol phản ứng với propanoic acid? Liệu nó sẽ là propyl ethanoate hay ethyl propanoate? Câu trả lời

\columnbreak

\begin{center}
  \IfFileExists{fig17_6.jpg}{%
    \includegraphics[width=0.95\linewidth]{fig17_6.jpg}%
  }{%
    \begin{tikzpicture}[scale=0.82]
      \fill[orange!15!pink!30] (0,0) rectangle (6.4,4.2);
      \fill[orange!30!white] (0.4,2.8) rectangle (2.2,3.8);
      \fill[pink!50!white] (2.6,2.8) rectangle (4.4,3.8);
      \draw[brown!60!black, fill=yellow!40] (3.2,1.2) circle (0.45);
      \node[align=center, font=\sffamily\footnotesize\bfseries, text=black!80] at (3.2,2.1)
        {Hình 17.6: Ester tạo hương thơm\\trong công nghiệp nước hoa};
    \end{tikzpicture}%
  }
\end{center}
{\footnotesize\sffamily \textbf{Hình 17.6} Các ester góp phần tạo nên hỗn hợp phức tạp của các chất thơm được pha trộn trong một lọ nước hoa.\par}
\vspace{0.5em}

là ethyl propanoate. Đó là bởi vì phần đầu tiên trong tên gọi của một ester xuất phát từ alcohol: trong trường hợp này là ethanol, tạo thành tiếp đầu ngữ \sq{ethyl \dots}. Phần thứ hai xuất phát từ carboxylic acid, trong trường hợp này là propanoic acid, cho phần đuôi \sq{\dots propanoate}, từ đó ghép lại thành tên của ester tạo thành là \sq{ethyl propanoate}:

\begin{center}
\footnotesize
$\underset{\text{propanoic acid}}{\ce{CH3CH2COOH}} + \underset{\text{ethanol}}{\ce{C2H5OH}} \xrightleftharpoons{\ce{H2SO4}} \underset{\text{ethyl propanoate}}{\ce{CH3CH2COOC2H5}} + \underset{\text{nước}}{\ce{H2O}}$
\end{center}
\end{multicols}
\end{calloutbox}

\begin{multicols}{2}
\subsectionDark{Thủy phân ester (Hydrolysis of esters)}

Các ester có thể bị thủy phân bằng cách đun nóng hồi lưu với một dung dịch acid hoặc một dung dịch base.

Đun hồi lưu với acid đơn thuần là quá trình đảo ngược lại sự điều chế ester từ alcohol và carboxylic acid. Acid đóng vai trò làm chất xúc tác cho phản ứng. Phản ứng này có tính thuận nghịch và một hỗn hợp cân bằng sẽ được thiết lập. Trong sự thủy phân bằng môi trường acid, luôn có mặt cả chất tham gia (ester + nước) lẫn sản phẩm (carboxylic acid + alcohol) sau khi phản ứng đạt cân bằng. Phương trình hóa học cho phản ứng thủy phân trong môi trường acid của ester ethyl ethanoate là:

\columnbreak

\begin{center}
\footnotesize
\chemfig{H_3C-C(=[:45]O)-[:-45]O-CH_2CH_3} $+$ $\ce{H2O}$ $\xrightleftharpoons{\ce{H+(aq)}}$ \chemfig{H_3C-C(=[:45]O)-[:-45]O-H} $+$ $\ce{CH3CH2OH}$
\end{center}

Tuy nhiên, khi một ester được đun hồi lưu với một dung dịch kiềm (một base tan trong nước), chẳng hạn như dung dịch sodium hydroxide ($\ce{NaOH}$), nó sẽ bị thủy phân hoàn toàn. Không giống như sự thủy phân bằng acid, đây không phải là một phản ứng thuận nghịch, do đó toàn bộ lượng ester có mặt đều có thể bị phân cắt hết khi dùng dư kiềm. Một alcohol và muối sodium của carboxylic acid được tạo thành. Phương trình hóa học cho phản ứng thủy phân trong môi trường base của ethyl ethanoate là:
\end{multicols}
\newpage
`;

export const LATEX_PAGE_230 = String.raw`% ==========================================================================
% TRANG 230: THỦY PHÂN MÔI TRƯỜNG KIỀM, PHẢN ỨNG TÁCH NƯỚC & PHẢN ỨNG OXI HÓA
% ==========================================================================
\begin{multicols}{2}

\begin{center}
\footnotesize
\chemfig{H_3C-C(=[:45]O)-[:-45]O-CH_2CH_3} $+$ $\ce{NaOH}$ $\longrightarrow$
\underset{\text{sodium ethanoate}}{\chemfig{H_3C-C(=[:45]O)-[:-45]O^{-}Na^{+}}} $+$ $\ce{CH3CH2OH}$
\end{center}

\begin{questionbox}
\textbf{5} \textbf{a} Gọi tên ester được tạo thành trong mỗi phản ứng sau đây:
\begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, topsep=2pt, itemsep=1pt]
  \item butan-1-ol + ethanoic acid
  \item ethanol + hexanoic acid
  \item pentan-1-ol và methanoic acid.
\end{enumerate}
\textbf{b} Viết công thức cấu tạo của mỗi ester được tạo thành ở phần \textbf{a}.
\end{questionbox}

\subsectionGray{5}{Phản ứng tách nước (Dehydration)}

Các alcohol cũng có thể tham gia các phản ứng tách (\textit{elimination reactions}), trong đó phân tử nước bị mất đi và các alkene được tạo thành. Vì phân tử nhỏ bị tách ra khỏi phân tử alcohol là $\ce{H2O}$, phản ứng này còn được gọi là \termRed{phản ứng tách nước} (\textit{dehydration}).

\begin{center}
\small
$\text{alcohol} \xrightarrow{\text{xúc tác}} \text{alkene} + \text{nước}$
\end{center}

Phản ứng diễn ra khi dẫn hơi alcohol đi qua bột chất xúc tác aluminium oxide ($\ce{Al2O3}$) đun nóng. Các mảnh sứ xốp (\textit{porous pot}) hoặc đá bọt (\textit{pumice}) cũng làm xúc tác cho phản ứng. Ví dụ:

\begin{center}
\small
$\underset{\text{ethanol}}{\ce{C2H5OH}} \xrightarrow{\text{xúc tác }\ce{Al2O3}} \underset{\text{ethene}}{\ce{CH2=CH2}} + \underset{\text{nước}}{\ce{H2O}}$
\end{center}

Hình 17.7 cho thấy cách thu lấy khí ethene được tạo thành.

% --- Hình 17.7: Sơ đồ tách nước ethanol tạo ethene vẽ bằng TikZ ---
\begin{tcolorbox}[colback=white, colframe=black!15, boxrule=0.5pt, arc=2pt, left=4pt, right=4pt, top=6pt, bottom=6pt]
\begin{center}
\begin{tikzpicture}[scale=0.76]
  % Mặt bàn thí nghiệm
  \fill[yellow!25!brown!30, draw=black!70] (0.2,0) rectangle (8.8,0.4);
  % Ống nghiệm nằm ngang
  \draw[black!80, thick] (3.2,2.8) -- (0.8,2.8) arc (90:270:0.35) -- (3.2,2.1);
  % Bông gốm tẩm ethanol
  \fill[gray!35, draw=gray!80, densely dashed] (0.85,2.45) circle (0.26);
  % Đá bọt / xúc tác
  \foreach \x/\y in {1.7/2.25, 1.9/2.28, 2.1/2.25, 2.3/2.26, 1.8/2.42, 2.0/2.44, 2.2/2.40} {
    \fill[brown!50!yellow!60, draw=brown!80] (\x,\y) ellipse (0.11 and 0.06);
  }
  % Nút cao su
  \fill[orange!40!brown!70, draw=brown!90] (3.05,2.85) -- (3.45,2.78) -- (3.45,2.12) -- (3.05,2.05) -- cycle;
  % Mũi tên đun nóng
  \draw[-{Latex[length=3mm, width=2.2mm]}, cambridgeRed, line width=2pt] (2.0,1.1) -- (2.0,1.95);
  \node[font=\sffamily\scriptsize\bfseries] at (2.0,0.85) {đun nóng (\textit{heat})};
  % Chú thích bông gốm & đá bọt
  \node[font=\sffamily\scriptsize, align=left] at (1.4,3.8) {bông gốm tẩm\\ethanol};
  \draw[black!70] (1.1,3.35) -- (0.85,2.6);
  \node[font=\sffamily\scriptsize] at (2.8,3.35) {đá bọt (\textit{pumice})};
  \draw[black!70] (2.6,3.15) -- (2.05,2.5);
  % Chậu nước
  \fill[cyan!18] (4.8,0.4) rectangle (8.2,1.55);
  \draw[cyan!70!blue] (4.8,1.55) -- (8.2,1.55);
  \draw[black!80, thick] (4.8,1.85) -- (4.8,0.4) -- (8.2,0.4) -- (8.2,1.85);
  % Ống nghiệm úp ngược thu khí ethene
  \fill[cyan!28] (6.82,0.55) rectangle (7.28,2.1);
  \draw[cyan!70!blue] (6.82,2.1) -- (7.28,2.1);
  \draw[black!80, thick] (6.82,0.55) -- (6.82,3.1) arc (180:0:0.23) -- (7.28,0.55);
  % Ống dẫn khí
  \draw[black!80, double=white, double distance=1.5pt, line width=0.7pt]
    (3.25,2.45) -- (4.2,2.45) -- (6.75,0.52) .. controls (6.95,0.42) and (7.05,0.48) .. (7.05,0.7);
  \node[font=\sffamily\scriptsize, align=left] at (6.3,3.75) {khí ethene thu được\\trên mặt nước};
  \draw[black!70] (6.4,3.35) -- (7.05,2.65);
\end{tikzpicture}
\end{center}
{\footnotesize\sffamily \textbf{Hình 17.7} Phản ứng tách nước của ethanol tạo thành ethene.}
\end{tcolorbox}

\columnbreak

\begin{questionbox}
\textbf{6} Dung dịch sulfuric acid đặc hoặc phosphoric acid đặc cũng có thể được sử dụng làm chất xúc tác cho phản ứng tách nước của một alcohol. Hỗn hợp alcohol và acid đặc được đun nóng đến khoảng $170\,^\circ\text{C}$. Acid đặc không bị biến đổi hóa học trong quá trình phản ứng.
\begin{enumerate}[label=\textbf{\alph*}, leftmargin=1.5em, topsep=2pt, itemsep=2pt]
  \item Viết phương trình hóa học biểu diễn sự tách nước của ethanol khi dùng sulfuric acid đặc.
  \item Nếu dùng propan-1-ol thay cho ethanol, hãy gọi tên sản phẩm hữu cơ tạo thành.
\end{enumerate}
\end{questionbox}

\subsectionGray{6}{Phản ứng oxi hóa (Oxidation)}

Ở trang 226, chúng ta đã biết cách phân loại các alcohol thành alcohol bậc một, bậc hai hoặc bậc ba. Trong nhiều phản ứng của chúng, bậc của alcohol không tạo ra sự khác biệt đối với loại sản phẩm hình thành. Trong hóa học hữu cơ, ta thường có thể khái quát hóa tính chất cho toàn bộ dãy đồng đẳng. Tuy nhiên, khi các alcohol bị oxi hóa, các sản phẩm khác nhau sẽ thu được từ alcohol bậc một, bậc hai và bậc ba.

Các alcohol có thể bị oxi hóa bởi dung dịch potassium dichromate(VI), $\ce{K2Cr2O7}$, đã được acid hóa bằng dung dịch sulfuric acid loãng. Màu da cam của dung dịch là do các ion dichromate(VI), $\ce{Cr2O7^{2-}(aq)}$, gây ra. Khi các ion dichromate(VI) phản ứng với vai trò là tác nhân oxi hóa, bản thân chúng sẽ bị khử và chuyển thành các ion chromium(III), $\ce{Cr^{3+}(aq)}$, tạo nên một dung dịch màu xanh lục. Hỗn hợp phản ứng cần được đun ấm trước khi quá trình oxi hóa diễn ra.

Sản phẩm tạo thành khi một alcohol bị oxi hóa có thể được dùng để phân biệt giữa alcohol bậc một, bậc hai và bậc ba. Bạn có thể tìm hiểu về các phép thử hóa học cho các sản phẩm này ở trang 238--239.

\begin{itemize}[label=\redbullet, leftmargin=1.4em, topsep=3pt, itemsep=4pt]
  \item Đối với alcohol bậc ba, một hỗn hợp gồm alcohol bậc ba, sulfuric acid loãng và dung dịch potassium dichromate(VI) vẫn giữ nguyên màu da cam khi được đun ấm. Không có phản ứng nào xảy ra dưới những điều kiện tương đối êm dịu này.
  \item Một alcohol bậc hai, chẳng hạn như propan-2-ol, sẽ bị oxi hóa để tạo thành một ketone. Trong trường hợp này, propanone được tạo thành và hỗn hợp phản ứng chuyển sang màu xanh lục:
\end{itemize}

\begin{center}
\footnotesize
\chemfig{H_3C-C(-[2]OH)(-[-2]H)-CH_3} $+$ $[\ce{O}]$ $\longrightarrow$
\underset{\text{propanone}}{\chemfig{H_3C-C(=[2]O)-CH_3}} $+$ $\ce{H2O}$
\end{center}

Các phương trình oxi hóa này sử dụng kí hiệu $[\ce{O}]$ để biểu thị nguyên tử oxygen được cung cấp từ tác nhân oxi hóa. Bạn đã gặp dạng phương trình rút gọn này cho các phản ứng oxi hóa trước đây ở trang 198.

\end{multicols}
\newpage
`;

export const LATEX_PAGE_231 = String.raw`% ==========================================================================
% TRANG 231: OXI HÓA ALCOHOL BẬC MỘT, PHÂN BIỆT ALCOHOL & CARBOXYLIC ACID
% ==========================================================================
\begin{multicols}{2}

\begin{itemize}[label=\redbullet, leftmargin=1.4em, topsep=2pt]
  \item Đối với một alcohol bậc một, chẳng hạn như ethanol, alcohol sẽ bị oxi hóa thành một aldehyde. Ethanol bị oxi hóa thành ethanal:
\end{itemize}

\begin{center}
\footnotesize
$\ce{CH3CH2OH} + [\ce{O}] \longrightarrow$
\underset{\text{ethanal}}{\chemfig{H_3C-C(=[2]O)-H}} $+ \ce{H2O}$
\end{center}

Lượng ethanal tạo thành có thể tiếp tục bị oxi hóa để tạo ra ethanoic acid, một carboxylic acid. Điều này đạt được bằng cách đun hồi lưu với lượng dư dung dịch potassium dichromate(VI) đã acid hóa:

\begin{center}
\footnotesize
\chemfig{H_3C-C(=[2]O)-H} $+ [\ce{O}] \longrightarrow$
\underset{\text{ethanoic acid}}{\chemfig{H_3C-C(=[2]O)-OH}}
\end{center}

% --- Hộp chuyên đề: PHÂN BIỆT ALCOHOL BẬC BA & Hình 17.8 ---
\begin{calloutbox}{PHÂN BIỆT ALCOHOL BẬC BA (DISTINGUISHING TERTIARY ALCOHOLS)}
Nếu được cho ba mẫu alcohol chưa biết gồm một alcohol bậc một, một alcohol bậc hai và một alcohol bậc ba, ta sẽ rất dễ dàng nhận diện được alcohol bậc ba. Hình 17.8 cho thấy kết quả của việc đun ấm mỗi bậc alcohol với dung dịch potassium dichromate(VI) đã acid hóa. Chi tiết hơn về các phản ứng này được trình bày ở trang 236.

\begin{center}
  \IfFileExists{fig17_8.jpg}{%
    \includegraphics[width=0.92\linewidth]{fig17_8.jpg}%
  }{%
    % Hình vẽ TikZ 3 ống nghiệm chuẩn màu sắc (2 ống xanh lục đậm, 1 ống da cam)
    \begin{tikzpicture}[scale=0.82]
      \fill[gray!12] (0,0) rectangle (7.4,5.4);
      % Ống 1: Propan-1-ol (Xanh lục đậm)
      \fill[green!28!black] (0.7,0.8) arc (180:360:0.55 and 0.45) -- (1.8,1.9) -- (0.7,1.9) -- cycle;
      \draw[black!55, thick] (0.7,5.0) -- (0.7,0.8) arc (180:360:0.55 and 0.45) -- (1.8,5.0);
      \draw[black!80, fill=white] (0.82,2.2) rectangle (1.68,4.6);
      \node[rotate=90, font=\sffamily\scriptsize, align=center] at (1.25,3.4) {\textbf{Propan-1-ol}\\(alcohol bậc 1)};

      % Ống 2: Propan-2-ol (Xanh lục đậm)
      \fill[green!28!black] (3.1,0.8) arc (180:360:0.55 and 0.45) -- (4.2,1.9) -- (3.1,1.9) -- cycle;
      \draw[black!55, thick] (3.1,5.0) -- (3.1,0.8) arc (180:360:0.55 and 0.45) -- (4.2,5.0);
      \draw[black!80, fill=white] (3.22,2.2) rectangle (4.08,4.6);
      \node[rotate=90, font=\sffamily\scriptsize, align=center] at (3.65,3.4) {\textbf{Propan-2-ol}\\(alcohol bậc 2)};

      % Ống 3: 2-methylpropan-2-ol (Màu da cam)
      \fill[orange!90!yellow] (5.5,0.8) arc (180:360:0.55 and 0.45) -- (6.6,1.9) -- (5.5,1.9) -- cycle;
      \draw[black!55, thick] (5.5,5.0) -- (5.5,0.8) arc (180:360:0.55 and 0.45) -- (6.6,5.0);
      \draw[black!80, fill=white] (5.62,2.2) rectangle (6.48,4.6);
      \node[rotate=90, font=\sffamily\tiny, align=center] at (6.05,3.4) {\textbf{2-methylpropan-2-ol}\\(alcohol bậc 3)};
    \end{tikzpicture}%
  }
\end{center}
{\footnotesize\sffamily \textbf{Hình 17.8} Trước khi đun ấm với các alcohol được dán nhãn, mỗi ống nghiệm này đều chứa dung dịch potassium dichromate(VI) màu da cam trong môi trường acid. Sau khi đun ấm, các ion dichromate(VI) màu da cam đã bị khử thành các ion chromium(III) màu xanh lục bởi alcohol bậc một và alcohol bậc hai. Điều này chứng tỏ cả alcohol bậc một và bậc hai đều đã bị oxi hóa, nhưng alcohol bậc ba, 2-methylpropan-2-ol, thì không.}
\end{calloutbox}

\columnbreak

\begin{questionbox}
\textbf{7} Propan-1-ol có thể bị oxi hóa thành propanal, $\ce{CH3CH2CHO}$, và sau đó thành propanoic acid, $\ce{CH3CH2COOH}$.
\begin{enumerate}[label=\textbf{\alph*}, leftmargin=1.5em, topsep=2pt, itemsep=2pt]
  \item Cần sử dụng những tác nhân và điều kiện nào để oxi hóa propan-1-ol thành propanal?
  \item Viết một phương trình hóa học đã cân bằng cho phản ứng oxi hóa này. Nguyên tử oxygen từ tác nhân oxi hóa cần được biểu diễn là $[\ce{O}]$.
  \item Cần sử dụng những tác nhân và điều kiện nào để oxi hóa propan-1-ol thành propanoic acid?
  \item Viết một phương trình hóa học đã cân bằng cho phản ứng oxi hóa này. Tương tự, hãy biểu diễn oxygen từ tác nhân oxi hóa là $[\ce{O}]$.
\end{enumerate}
\end{questionbox}

\sectionRed{Carboxylic acid (Acid cacboxylic)}

\subsectionGray{}{Các phản ứng tạo thành carboxylic acid}

Chúng ta đã thấy các alcohol bậc một có thể bị oxi hóa thành aldehyde và sự oxi hóa tiếp theo của aldehyde tạo thành sẽ sinh ra carboxylic acid như thế nào.

Các carboxylic acid cũng được điều chế từ các hợp chất nitrile, $\ce{R-C#N}$. Khi một nitrile được đun hồi lưu với dung dịch hydrochloric acid loãng, phản ứng thủy phân sẽ xảy ra, và nhóm $\ce{-C#N}$ ở đầu mạch hydrocarbon được chuyển hóa thành nhóm $\ce{-COOH}$, tạo thành một carboxylic acid (xem trang 237). Ví dụ:

\begin{center}
\footnotesize
$\underset{\text{propanenitrile}}{\ce{CH3CH2CN}} + \ce{HCl} + \ce{2H2O} \longrightarrow \underset{\text{propanoic acid}}{\ce{CH3CH2COOH}} + \ce{NH4Cl}$
\end{center}

\subsectionGray{}{Phản ứng thể hiện tính acid (Reacting as acids)}

Các carboxylic acid được mô tả là những acid yếu bởi vì các phân tử của chúng không phân li (ion hóa) hoàn toàn khi được thêm vào nước. Tuy nhiên, một tỉ lệ nhỏ các phân tử có phân li, giải phóng các ion $\ce{H+(aq)}$ đặc trưng cho mọi dung dịch acid có giá trị pH nhỏ hơn 7. Ví dụ, ethanoic acid tạo ra các ion hydrogen và ion ethanoate trong dung dịch nước:

\begin{center}
\footnotesize
$\underset{\text{ethanoic acid}}{\ce{CH3COOH(aq)}} \xrightleftharpoons{} \underset{\text{ion ethanoate}}{\ce{CH3COO^-(aq)}} + \ce{H^+(aq)}$
\end{center}

Bạn có thể tìm hiểu thêm về sự phân li của các carboxylic acid trong Chương 26 (trang 394--395).

Sự có mặt của các ion $\ce{H+(aq)}$ trong dung dịch của các carboxylic acid đồng nghĩa với việc chúng tham gia đầy đủ các phản ứng thông thường của một acid. Chúng phản ứng với:
\begin{itemize}[label=\redbullet, leftmargin=1.4em, topsep=2pt, itemsep=3pt]
  \item các dung dịch kiềm (\textit{alkalis}) tạo thành muối và nước:
  $$\ce{CH3COOH + NaOH -> CH3COONa + H2O}$$
  \item các kim loại hoạt động tạo thành muối và khí hydrogen:
  $$\ce{2CH3COOH + Mg -> (CH3COO)2Mg + H2}$$
  \item các muối carbonate tạo thành muối, nước và khí carbon dioxide:
  $$\ce{2CH3COOH + K2CO3 -> 2CH3COOK + H2O + CO2}$$
\end{itemize}

\end{multicols}
\newpage
`;

export const LATEX_PAGE_232 = String.raw`% ==========================================================================
% TRANG 232: PHẢN ỨNG KHỬ CARBOXYLIC ACID & KHUNG TÓM TẮT (SUMMARY)
% ==========================================================================
\begin{multicols}{2}

Các muối được tạo thành trong ba phản ứng ở trên lần lượt được gọi là sodium ethanoate, magnesium ethanoate và potassium ethanoate.

\subsectionGray{}{Phản ứng khử carboxylic acid (Reduction of carboxylic acids)}

Các carboxylic acid có thể bị khử thành alcohol bậc một tương ứng bằng cách sử dụng tác nhân khử là lithium tetrahydridoaluminate, $\ce{LiAlH4}$, trong dung môi ether khan ở nhiệt độ phòng. Ether khan được sử dụng bởi vì $\ce{LiAlH4}$ phản ứng rất mãnh liệt với nước.

Trong phương trình khử rút gọn, kí hiệu $[\ce{H}]$ có thể được dùng để đại diện cho các nguyên tử hydrogen từ tác nhân khử (hãy nhớ rằng trong hóa học hữu cơ, sự khử có thể được xem là sự cộng thêm các nguyên tử hydrogen). Vì vậy, đối với quá trình khử ethanoic acid thành ethanol, ta có thể biểu diễn phản ứng như sau:

\begin{center}
\small
$\ce{CH3COOH} + 4[\ce{H}] \longrightarrow \ce{CH3CH2OH + H2O}$
\end{center}

\columnbreak

\begin{questionbox}
\textbf{8} \textbf{a} Làm thế nào để bạn điều chế được ethanoic acid từ ethanenitrile?

\textbf{b} Viết một phương trình hóa học đã cân bằng, sử dụng công thức cấu tạo cho các hợp chất hữu cơ, để biểu diễn sự hình thành của:
\begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, topsep=2pt, itemsep=1pt]
  \item sodium methanoate, sử dụng sodium hydroxide làm một trong các chất phản ứng
  \item potassium ethanoate, sử dụng kim loại potassium làm một trong các chất phản ứng
  \item lithium propanoate, sử dụng lithium carbonate làm một trong các chất phản ứng.
\end{enumerate}

\textbf{c} Gọi tên và viết công thức hóa học của tác nhân khử được dùng để chuyển hóa các carboxylic acid thành các alcohol bậc một, đồng thời nêu rõ điều kiện của phản ứng.
\end{questionbox}

\end{multicols}

% --- Khung TÓM TẮT (Summary Box màu tím 2 cột ở nửa dưới Trang 232) ---
\begin{summarybox}
{\Large\bfseries\sffamily\color{summaryTitle} Tóm tắt (Summary)\par}
\vspace{0.3em}
\begin{multicols}{2}
\begin{itemize}[label=\purplebullet, leftmargin=1.4em, itemsep=5pt, topsep=2pt]
  \item Phản ứng cháy hoàn toàn của các alcohol tạo thành carbon dioxide và nước.
  \item Một phản ứng thế nucleophile diễn ra giữa các alcohol và hydrogen halide để tạo thành các halogenoalkane.
  \item Các alcohol phản ứng với kim loại sodium tạo ra các sodium alkoxide và khí hydrogen.
  \item Một alcohol sẽ phản ứng với một carboxylic acid, khi có mặt chất xúc tác acid mạnh, để tạo thành một ester và nước. Các ester được sử dụng làm dung môi, nước hoa và hương liệu thực phẩm.
  \item Các ester có thể bị thủy phân bởi một acid hoặc bởi một base. Thủy phân trong môi trường acid là phản ứng thuận nghịch nhưng thủy phân trong môi trường base là phản ứng không thuận nghịch (một chiều).
  \item Sự tách loại phân tử nước khỏi một alcohol tạo ra một alkene; phản ứng này gọi là sự tách nước (\textit{dehydration}). Phản ứng tách nước có thể được thực hiện bằng cách dẫn hơi alcohol đi qua đá bọt, sứ xốp hoặc xúc tác aluminium oxide nung nóng.
  \item Một alcohol bậc một có thể bị oxi hóa thành một aldehyde bằng cách đun nóng nhẹ alcohol với dung dịch potassium dichromate(VI) đã acid hóa (và chưng cất tách aldehyde ra ngay khi nó vừa tạo thành -- xem trang 236).
  \item Một alcohol bậc một có thể bị oxi hóa tiếp thành một carboxylic acid bằng cách đun hồi lưu alcohol với lượng dư dung dịch potassium dichromate(VI) đã acid hóa.
  \item Một alcohol bậc hai có thể bị oxi hóa thành một ketone bằng cách đun nóng alcohol với dung dịch potassium dichromate(VI) đã acid hóa.
  \item Dung dịch potassium dichromate(VI) đã acid hóa chuyển màu từ da cam sang xanh lục khi một alcohol bậc một hoặc bậc hai bị oxi hóa bởi nó.
  \item Các alcohol bậc ba không thể bị oxi hóa khi đun hồi lưu với dung dịch potassium dichromate(VI) đã acid hóa.
  \item Các carboxylic acid có thể được tạo thành từ sự oxi hóa các alcohol bậc một hoặc các aldehyde bằng cách đun hồi lưu với lượng dư potassium dichromate(VI) và dung dịch sulfuric(VI) acid loãng. Chúng cũng có thể được điều chế bằng cách đun hồi lưu các nitrile với dung dịch hydrochloric acid loãng.
  \item Các carboxylic acid là những acid yếu, phản ứng được với các kim loại hoạt động, dung dịch kiềm hoặc muối carbonate để tạo thành các muối carboxylate.
  \item Các carboxylic acid có thể bị khử bởi $\ce{LiAlH4}$ trong dung môi ether khan để tạo thành các alcohol bậc một.
\end{itemize}
\end{multicols}
\end{summarybox}
\newpage
`;

export const LATEX_PAGE_233 = String.raw`% ==========================================================================
% TRANG 233: CÂU HỎI CUỐI CHƯƠNG (END-OF-CHAPTER QUESTIONS)
% ==========================================================================
\begin{eocbox}
{\LARGE\bfseries\sffamily\color{eocTitle} Câu hỏi cuối chương (End-of-chapter questions)\par}
\vspace{0.8em}

\begin{enumerate}[label=\textbf{\arabic*}, leftmargin=1.6em, itemsep=12pt]
  % --- Câu 1 ---
  \item Pentan-2-ol, butan-1-ol và 2-methylpropan-2-ol đều là các alcohol.
  \begin{enumerate}[label=\textbf{\alph*}, leftmargin=1.6em, itemsep=4pt]
    \item Đối với mỗi chất trên:
    \begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, itemsep=3pt]
      \item hãy viết công thức phân tử (\textit{molecular formula}) của nó \marks{3}
      \item hãy viết công thức cấu tạo thu gọn (\textit{structural formula}) của nó \marks{3}
      \item hãy viết công thức cấu tạo khai triển (\textit{displayed formula}) của nó \marks{3}
      \item hãy viết công thức khung phân tử (\textit{skeletal formula}) của nó \marks{3}
      \item hãy cho biết chất đó là alcohol bậc một, bậc hai hay bậc ba. \marks{3}
    \end{enumerate}
    \item Hãy viết công thức tổng quát được dùng để biểu diễn dãy đồng đẳng alcohol. \marks{1}
    \item Hai trong số các alcohol ở câu hỏi này là đồng phân của nhau. Hãy xác định hai chất đó và nêu rõ loại đồng phân mà chúng thể hiện. \marks{2}
    \item Hãy gọi tên alcohol có công thức cấu tạo là $\ce{CH3CH2COH(CH3)2}$. \marks{1}
  \end{enumerate}
  \hfill{\sffamily\bfseries\footnotesize Tổng = 19}

  % --- Câu 2 ---
  \item Hãy viết phương trình hóa học đã cân bằng cho mỗi quá trình sau đây. Cần sử dụng công thức cấu tạo thu gọn hoặc công thức khai triển cho tất cả các chất hữu cơ.
  \begin{enumerate}[label=\textbf{\alph*}, leftmargin=1.6em, itemsep=4pt]
    \item Điều chế ethanol sử dụng ethene làm nguyên liệu đầu vào. Ghi rõ công thức của chất xúc tác được sử dụng. \marks{2}
    \item Phản ứng đốt cháy hoàn toàn ethanol trong khí oxygen. \marks{2}
    \item Phản ứng tách nước của butan-2-ol khi dẫn đi qua bột $\ce{Al2O3}$ nung nóng. Hãy viết ba phương trình hóa học, mỗi phương trình ứng với một trong ba sản phẩm có thể tạo thành. \marks{3}
    \item Phản ứng của ethanoic acid với ethanol. Gọi tên chất xúc tác được sử dụng, loại phản ứng và tên các sản phẩm. \marks{4}
  \end{enumerate}
  \hfill{\sffamily\bfseries\footnotesize Tổng = 11}

  % --- Câu 3 ---
  \item Các alcohol bậc một và bậc hai có thể bị oxi hóa bằng cách đun nóng với hỗn hợp gồm potassium dichromate(VI) và dung dịch sulfuric(VI) acid loãng.
  \begin{itemize}[label=\bluebullet, leftmargin=1.4em, topsep=3pt, itemsep=2pt]
    \item Một alcohol bậc một có thể bị oxi hóa thành hai sản phẩm khác nhau, tùy thuộc vào điều kiện phản ứng được sử dụng.
    \item Một alcohol bậc hai tạo thành một sản phẩm duy nhất khi bị oxi hóa.
    \item Các alcohol bậc ba không bị oxi hóa.
  \end{itemize}
  \begin{enumerate}[label=\textbf{\alph*}, leftmargin=1.6em, itemsep=4pt, topsep=4pt]
    \item Công thức hóa học của potassium dichromate(VI) là gì? \marks{1}
    \item Sử dụng một alcohol bậc một tùy chọn làm ví dụ:
    \begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, itemsep=3pt]
      \item hãy viết công thức cấu tạo khai triển của hai sản phẩm mà nó có thể bị oxi hóa thành \marks{2}
      \item nêu rõ các điều kiện cần thiết để thu được mỗi sản phẩm \marks{2}
      \item cho biết mỗi sản phẩm thuộc dãy đồng đẳng nào \marks{2}
      \item viết một phương trình hóa học đã cân bằng cho mỗi phản ứng (có thể sử dụng kí hiệu quy ước $[\ce{O}]$ cho tác nhân oxi hóa). \marks{2}
    \end{enumerate}
    \item Sử dụng một alcohol bậc hai tùy chọn làm ví dụ:
    \begin{enumerate}[label=\textbf{\roman*}, leftmargin=1.8em, itemsep=3pt]
      \item hãy viết công thức cấu tạo khai triển của sản phẩm mà nó có thể bị oxi hóa thành \marks{2}
      \item cho biết sản phẩm đó thuộc dãy đồng đẳng nào \marks{1}
      \item viết một phương trình hóa học đã cân bằng cho phản ứng (có thể sử dụng kí hiệu quy ước $[\ce{O}]$ cho tác nhân oxi hóa). \marks{1}
    \end{enumerate}
    \item Tại sao các alcohol bậc ba lại bền với sự oxi hóa (không bị oxi hóa)? \marks{1}
  \end{enumerate}
  \hfill{\sffamily\bfseries\footnotesize Tổng = 14}
\end{enumerate}
\end{eocbox}
`;

export const LATEX_SOLUTIONS_APPENDIX = String.raw`% ==========================================================================
% PHỤ LỤC ĐÁP ÁN CHI TIẾT (SOLUTIONS APPENDIX CHO CÂU HỎI 1-8 & CUỐI CHƯƠNG)
% ==========================================================================
\newpage
\sectionRed{Phụ lục: Hướng dẫn giải chi tiết các câu hỏi trong bài \& cuối chương}

\begin{multicols}{2}
\subsectionDark{Câu hỏi 1 (Trang 226)}
\textbf{a i.} Giữa các phân tử ethanol: Nguyên tử $\ce{H}$ linh động của nhóm $\ce{-OH}$ (mang điện tích dương một phần $\delta+$) tạo liên kết hydrogen với cặp electron tự do trên nguyên tử $\ce{O}$ ($\delta-$) của phân tử ethanol lân cận.\\
\textbf{a ii.} Giữa ethanol và nước: Cặp electron tự do trên $\ce{O}$ của ethanol liên kết hydrogen với $\ce{H}^{\delta+}$ của $\ce{H2O}$ và ngược lại.\\
\textbf{b.} Hexan-1-ol có gốc hydrocarbon ($\ce{-C6H13}$) dài và không phân cực (kị nước), cản trở sự tạo liên kết hydrogen với nước so với gốc $\ce{-C2H5}$ nhỏ của ethanol.

\subsectionDark{Câu hỏi 2 (Trang 227)}
\textbf{a i.} $\ce{2C3H7OH + 9O2 -> 6CO2 + 8H2O}$\\
\textbf{a ii.} $\ce{C4H9OH + 6O2 -> 4CO2 + 5H2O}$\\
\textbf{b.} Sản phẩm lên men kị khí glucose là \textbf{ethanol} và \textbf{carbon dioxide} ($\ce{C6H12O6 -> 2C2H5OH + 2CO2}$).

\subsectionDark{Câu hỏi 3 (Trang 228)}
\textbf{a.} $\ce{C2H5OH + HBr -> C2H5Br + H2O}$\\
\textbf{b.} Hóa chất: $\ce{NaBr}$ (hoặc $\ce{KBr}$) rắn và dung dịch $\ce{H2SO4}$ đặc; điều kiện: đun nóng hồi lưu (\textit{heat under reflux}).\\
\textbf{c.} Phản ứng thế nucleophile (\textit{nucleophilic substitution}).

\subsectionDark{Câu hỏi 4 (Trang 228)}
\textbf{a.} Mẩu lithium nổi, chạy nhẹ trên bề mặt, tan dần và sủi bọt khí không màu.\\
\textbf{b.} Lithium propoxide ($\ce{CH3CH2CH2O^-Li^+}$) và khí hydrogen ($\ce{H2}$).\\
\textbf{c.} Sodium có tính khử mạnh hơn lithium nên phản ứng với propan-1-ol diễn ra nhanh và mãnh liệt hơn, bọt khí thoát ra mạnh hơn.

\subsectionDark{Câu hỏi 5 (Trang 230)}
\textbf{a i.} butyl ethanoate ($\ce{CH3COOCH2CH2CH2CH3}$)\\
\textbf{a ii.} ethyl hexanoate ($\ce{CH3(CH2)4COOCH2CH3}$)\\
\textbf{a iii.} pentyl methanoate ($\ce{HCOOCH2(CH2)3CH3}$).

\subsectionDark{Câu hỏi 6 (Trang 230)}
\textbf{a.} $\ce{C2H5OH ->[\text{H}_2\text{SO}_4\text{ đặc, } 170\,^\circ\text{C}] CH2=CH2 + H2O}$\\
\textbf{b.} Sản phẩm hữu cơ là \textbf{propene} ($\ce{CH3CH=CH2}$).

\subsectionDark{Câu hỏi 7 (Trang 231)}
\textbf{a.} Dung dịch $\ce{K2Cr2O7}$ trong $\ce{H2SO4}$ loãng; đun ấm nhẹ và chưng cất tách ngay propanal ra khỏi hỗn hợp.\\
\textbf{b.} $\ce{CH3CH2CH2OH + [O] -> CH3CH2CHO + H2O}$\\
\textbf{c.} Dung dịch $\ce{K2Cr2O7}$ dư trong $\ce{H2SO4}$ loãng; đun nóng hồi lưu (\textit{reflux}).\\
\textbf{d.} $\ce{CH3CH2CH2OH + 2[O] -> CH3CH2COOH + H2O}$.

\subsectionDark{Câu hỏi 8 (Trang 232)}
\textbf{a.} Đun nóng hồi lưu ethanenitrile ($\ce{CH3CN}$) với dung dịch hydrochloric acid ($\ce{HCl}$) loãng.\\
\textbf{b i.} $\ce{HCOOH + NaOH -> HCOONa + H2O}$\\
\textbf{b ii.} $\ce{2CH3COOH + 2K -> 2CH3COOK + H2}$\\
\textbf{b iii.} $\ce{2CH3CH2COOH + Li2CO3 -> 2CH3CH2COOLi + H2O + CO2}$\\
\textbf{c.} Lithium tetrahydridoaluminate ($\ce{LiAlH4}$), thực hiện trong dung môi ether khan ở nhiệt độ phòng.
\end{multicols}
`;

export const FULL_LATEX_DOCUMENT = [
  LATEX_PREAMBLE,
  String.raw`\begin{document}`,
  LATEX_PAGE_226,
  LATEX_PAGE_227,
  LATEX_PAGE_228,
  LATEX_PAGE_229,
  LATEX_PAGE_230,
  LATEX_PAGE_231,
  LATEX_PAGE_232,
  LATEX_PAGE_233,
  String.raw`\end{document}`,
].join('\n');

export const FULL_LATEX_WITH_SOLUTIONS = [
  LATEX_PREAMBLE,
  String.raw`\begin{document}`,
  LATEX_PAGE_226,
  LATEX_PAGE_227,
  LATEX_PAGE_228,
  LATEX_PAGE_229,
  LATEX_PAGE_230,
  LATEX_PAGE_231,
  LATEX_PAGE_232,
  LATEX_PAGE_233,
  LATEX_SOLUTIONS_APPENDIX,
  String.raw`\end{document}`,
].join('\n');

export const LATEX_SECTIONS: LatexSectionItem[] = [
  {
    id: 'full',
    pageNumber: '226–233',
    title: 'Toàn bộ tài liệu (Full 7 trang SGK)',
    subtitle: 'Bản LaTeX đầy đủ từ Giới thiệu đến Câu hỏi cuối chương',
    latexCode: FULL_LATEX_DOCUMENT,
  },
  {
    id: 'full-solutions',
    pageNumber: '226–233 + Đáp án',
    title: 'Toàn bộ SGK + Phụ lục Giải chi tiết',
    subtitle: 'Bao gồm toàn bộ nội dung sách giáo khoa và lời giải Câu 1–8',
    latexCode: FULL_LATEX_WITH_SOLUTIONS,
  },
  {
    id: 'p226',
    pageNumber: 'Trang 226',
    title: 'Giới thiệu, Dãy đồng đẳng Alcohol & Phản ứng cháy',
    subtitle: 'Hình 17.1, Hình 17.2, Câu hỏi 1',
    latexCode: LATEX_PAGE_226,
  },
  {
    id: 'p227',
    pageNumber: 'Trang 227',
    title: 'Nhiên liệu sinh học & Phản ứng thế Halogenoalkane',
    subtitle: 'Hình 17.3, Hình 17.4, Hộp Halogen hóa, Câu hỏi 2',
    latexCode: LATEX_PAGE_227,
  },
  {
    id: 'p228',
    pageNumber: 'Trang 228',
    title: 'Tác nhân SOCl₂, PCl₅, PI₃ & Phản ứng với Sodium (Na)',
    subtitle: 'Hình 17.5, Câu hỏi 3, Câu hỏi 4',
    latexCode: LATEX_PAGE_228,
  },
  {
    id: 'p229',
    pageNumber: 'Trang 229',
    title: 'Phản ứng Ester hóa & Thủy phân Ester',
    subtitle: 'Hình 17.6, Hộp Alcohol + Carboxylic Acid',
    latexCode: LATEX_PAGE_229,
  },
  {
    id: 'p230',
    pageNumber: 'Trang 230',
    title: 'Phản ứng Tách nước (Dehydration) & Oxi hóa Alcohol',
    subtitle: 'Hình 17.7, Câu hỏi 5, Câu hỏi 6',
    latexCode: LATEX_PAGE_230,
  },
  {
    id: 'p231',
    pageNumber: 'Trang 231',
    title: 'Phân biệt Alcohol bậc ba & Tính chất Carboxylic Acid',
    subtitle: 'Hình 17.8, Câu hỏi 7, Các phản ứng của Carboxylic Acid',
    latexCode: LATEX_PAGE_231,
  },
  {
    id: 'p232',
    pageNumber: 'Trang 232',
    title: 'Khử Carboxylic Acid & Khung Tóm tắt (Summary)',
    subtitle: 'Câu hỏi 8 & Bảng tổng kết 14 trọng tâm toàn chương',
    latexCode: LATEX_PAGE_232,
  },
  {
    id: 'p233',
    pageNumber: 'Trang 233',
    title: 'Câu hỏi cuối chương (End-of-chapter questions)',
    subtitle: 'Bài tập 1 (19đ), Bài tập 2 (11đ), Bài tập 3 (14đ)',
    latexCode: LATEX_PAGE_233,
  },
];
