export interface LatexSectionItem25 {
  id: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  latexCode: string;
}

/* ==========================================================================
   BẢN DỊCH LaTeX — CHƯƠNG 25: BENZENE AND ITS COMPOUNDS (TRANG 382 – 392)
   Quy ước: String.raw, MỘT gạch ngược (như latexSource.ts)
   ========================================================================== */

export const LATEX_PREAMBLE_25 = String.raw`% ==========================================================================
% BẢN DỊCH SÁCH GIÁO KHOA HÓA HỌC CAMBRIDGE AS & A LEVEL (TRANG 382 - 392)
% Chương 25: Benzene and its compounds
% Biên dịch & Chế bản LaTeX chuẩn định dạng gốc (bố cục 2 cột & Hình vẽ lại)
% Biên dịch bằng pdflatex hoặc xelatex (Overleaf / TeXstudio / TeXLive)
% ==========================================================================
\documentclass[10pt,a4paper,twoside]{article}

\usepackage[utf8]{inputenc}
\usepackage[T5]{fontenc}
\usepackage[vietnamese]{babel}
\usepackage{lmodern}
\usepackage{microtype}

\usepackage[
  a4paper,
  top=1.6cm,
  bottom=1.8cm,
  left=1.5cm,
  right=1.5cm,
  headheight=14pt
]{geometry}

\usepackage{amsmath,amssymb,amsfonts}
\usepackage[version=4]{mhchem}
\usepackage{chemfig}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.markings}
\usepackage{booktabs}
\usepackage{array}
\usepackage{multicol}
\usepackage[dvipsnames,svgnames,x11names]{xcolor}
\usepackage[most]{tcolorbox}
\usepackage{fancyhdr}

% --- Màu chủ đạo Cambridge đỏ ---
\definecolor{camRed}{HTML}{D33427}
\definecolor{qBox}{HTML}{F4EFE6}
\definecolor{qTab}{HTML}{C6B299}
\definecolor{callRed}{HTML}{DD3645}
\definecolor{callBg}{HTML}{F8D7D4}
\definecolor{sumPurple}{HTML}{5C2D75}

\newcommand{\sectionRed}[1]{%
  {\color{camRed}\Large\bfseries\sffamily #1}\par\medskip}
\newcommand{\subsectionGray}[1]{%
  {\color{camRed}\bfseries\sffamily #1}\par\smallskip}

\newtcolorbox{questionbox}{
  enhanced, breakable,
  colback=qBox, colframe=qTab,
  boxrule=0.7pt, arc=1.5mm,
  left=7pt, right=7pt, top=6pt, bottom=6pt,
  title={\sffamily\bfseries\small CÂU HỎI (QUESTION)},
  coltitle=white, colbacktitle=qTab,
  fonttitle=\sffamily\bfseries
}

\newtcolorbox{calloutbox}{
  enhanced, breakable,
  colback=callBg, colframe=callRed,
  boxrule=0.8pt, arc=1.5mm,
  left=7pt, right=7pt, top=6pt, bottom=6pt
}

\newtcolorbox{summarybox}{
  enhanced, breakable,
  colback=sumPurple!6, colframe=sumPurple,
  boxrule=0.8pt, arc=1.5mm,
  left=7pt, right=7pt, top=6pt, bottom=6pt
}

% --- Mũi tên cong cơ chế (curly arrow) ---
\tikzset{
  curly/.style={-{Stealth[length=2.6mm]}, red!70!black, thick, shorten <=1pt, shorten >=1pt},
  benzing/.pic={
    \tikzset{benz/.cd, #1}
    \def\rv{0.7}
    \foreach \i in {0,...,5} {
      \coordinate (C\i) at ({90-\i*60}:\rv);
    }
    \draw[thick] (C0)--(C1)--(C2)--(C3)--(C4)--(C5)--cycle;
    \draw[thick] (0,0) circle (0.42);
  }
}

\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[LE,RO]{\thepage}
\fancyhead[LO,RE]{\sffamily\footnotesize\color{black!55}Chương 25: Benzene and its compounds}

\setlength{\parindent}{1em}
\setlength{\parskip}{0.35em}
`;

export const LATEX_PAGE_382 = String.raw`% ==========================================================================
% TRANG 382: GIỚI THIỆU + VÒNG BENZENE + CẤU TRÚC KEKULÉ
% ==========================================================================
\setcounter{page}{382}
\begin{multicols*}{2}
\sectionRed{Giới thiệu (Introduction)}

Trong tiếng Anh, \textit{“aromatic”} nghĩa là “thơm dễ chịu”, dùng cho mùi hương, nước hoa hay
gia vị. Thuật ngữ này ban đầu dùng cho các hợp chất cùng chia sẻ cấu trúc vòng carbon ---
\textbf{vòng benzene}; nay gọi là các \textbf{arene}. Thực tế nhiều hóa chất chứa vòng benzene
có mùi rất mạnh.

% --- Hình 25.1: hoa thủy tiên + vanillin (vẽ mô phỏng) ---
\begin{center}
\begin{tikzpicture}[scale=0.8]
  \foreach \a in {0,60,...,300} {
    \filldraw[fill=yellow!55, draw=yellow!70!black, rotate=\a] (0,0.9) ellipse (0.42 and 0.95);
  }
  \filldraw[fill=orange!80!black, draw=orange!50!black] (0,0) circle (0.42);
  \filldraw[fill=orange!60!black] (0,0) circle (0.26);
  \node[below] at (0,-1.35) {\footnotesize hoa thủy tiên (daffodil)};
  \begin{scope}[xshift=4.4cm,yshift=-0.2cm,scale=0.8]
    \pic {benzing};
    \draw (C0)--++(90:0.4) node[above]{\footnotesize OH};
    \draw (C2)--++(-30:0.4) node[right]{\footnotesize OCH$_3$};
    \draw (C4)--++(210:0.4) node[left]{\footnotesize HC=O};
    \node[below] at (0,-1.2) {\footnotesize vanillin};
  \end{scope}
\end{tikzpicture}

\footnotesize \textbf{Hình 25.1} Hoa thủy tiên; sơn có thêm vanillin --- chất chứa vòng benzene.
\end{center}

\sectionRed{Vòng benzene (The benzene ring)}

Vòng benzene là nhóm chức năng đặc biệt quan trọng, có mặt trong rất nhiều hợp chất hữu cơ:
một \textbf{lục giác sáu carbon} liên kết thành vòng phẳng; xuất hiện trong dược phẩm, thuốc
nhuộm, nhựa polymer. Hợp chất chứa một hay nhiều vòng benzene gọi là \textbf{arene} (hợp chất
\textit{thơm}); ví dụ 2-bromonitrobenzene dùng sản xuất thuốc nhuộm halogen. Arene đơn giản
nhất là benzene, \ce{C6H6}.

Khoảng 1865, \textbf{Friedrich August Kekulé} đề xuất vòng lục giác sáu carbon, mỗi carbon gắn
một hydro, với ba nối đôi C=C xen kẽ (Hình 25.2) --- benzene mang đuôi “-ene” như alkene.

\begin{center}
\begin{tikzpicture}
  % công thức hiển thị Kekulé
  \begin{scope}
    \foreach \i in {0,...,5} {
      \coordinate (C\i) at ({90-\i*60}:1);
      \coordinate (H\i) at ({90-\i*60}:1.45);
    }
    \draw[thick] (C0)--(C1)--(C2)--(C3)--(C4)--(C5)--cycle;
    \draw[thick] ($(C0)!0.18!(C1)$)--($(C1)!0.18!(C0)$);
    \draw[thick] ($(C2)!0.18!(C3)$)--($(C3)!0.18!(C2)$);
    \draw[thick] ($(C4)!0.18!(C5)$)--($(C5)!0.18!(C4)$);
    \foreach \i in {0,...,5} { \draw (C\i)--(H\i) node[anchor=center]{H}; }
  \end{scope}
  \node at (2.6,0) {cũng vẽ là};
  % công thức khung
  \begin{scope}[xshift=4.6cm]
    \foreach \i in {0,...,5} { \coordinate (K\i) at ({90-\i*60}:1); }
    \draw[thick] (K0)--(K1)--(K2)--(K3)--(K4)--(K5)--cycle;
    \draw[thick] ($(K0)!0.2!(K1)$)--($(K1)!0.2!(K0)$);
    \draw[thick] ($(K2)!0.2!(K3)$)--($(K3)!0.2!(K2)$);
    \draw[thick] ($(K4)!0.2!(K5)$)--($(K5)!0.2!(K4)$);
  \end{scope}
\end{tikzpicture}

\footnotesize \textbf{Hình 25.2} Cấu trúc Kekulé của benzene: công thức hiển thị và công thức khung.
\end{center}

\begin{questionbox}
\textbf{1}\hspace{0.5em}\textbf{a} Có bao nhiêu electron tham gia hệ liên kết $\pi$ trong phân tử benzene?\\
\textbf{b} Các electron ở câu a đến từ loại orbital nguyên tử nào?\\
\textbf{c} Thuật ngữ “electron delocalised” trong benzene nghĩa là gì?\\
\textbf{d} Liên kết $\pi$ ở benzene và ở hex-3-ene khác nhau thế nào?\\[4pt]
\textbf{2}\hspace{0.5em}\textbf{a} Vẽ công thức hiển thị hoặc công thức khung: \textbf{i} 1,3,5-tribromobenzene; \textbf{ii} 1,3-dichloro-5-nitrobenzene.\\
\textbf{b} Gọi tên: \textbf{i} vòng benzene mang --OH (C1) và --CH$_3$ (C2); \textbf{ii} vòng benzene mang --Br (C1) và --Cl (C2).
\end{questionbox}
\end{multicols*}
`;

export const LATEX_PAGE_383 = String.raw`% ==========================================================================
% TRANG 383: BẰNG CHỨNG THỰC NGHIỆM + LIÊN KẾT π + TÊN HỢP CHẤT ARYL
% ==========================================================================
\setcounter{page}{383}
\begin{multicols*}{2}
Phân tử benzene \textbf{phẳng và đối xứng hoàn hảo} --- trong khi cấu trúc Kekulé (nối đơn dài
xen kẽ nối đôi ngắn) hẳn tạo lục giác méo; hexagon thực tế là \textbf{lục giác đều}. Đo độ dài
liên kết (Bảng 25.1): liên kết C--C trong benzene dài \textbf{giữa} giá trị nối đơn và nối đôi.

\begin{center}
\begin{tabular}{@{}lc@{}}
\toprule
\textbf{Liên kết} & \textbf{Độ dài / nm} \\
\midrule
C--C & 0,154 \\
C=C & 0,134 \\
carbon--carbon trong benzene & \textbf{0,139} \\
\bottomrule
\end{tabular}

\footnotesize \textbf{Bảng 25.1} So sánh độ dài liên kết.
\end{center}

Hóa học của benzene cũng chống lại Kekulé: benzene không phản ứng \textit{cộng} như alkene
(ethene làm mất màu nước bromine ngay khi trộn) mà phản ứng \textit{thế} trong điều kiện khắc
nghiệt hơn nhiều.

Mỗi carbon vòng benzene \textbf{lai hóa sp$^2$}, chia sẻ:
\begin{itemize}
  \item một cặp electron với carbon lân cận thứ nhất,
  \item một cặp electron với carbon lân cận thứ hai,
  \item một cặp electron với nguyên tử hydro.
\end{itemize}
Ba liên kết \textbf{sigma ($\sigma$)} ấy giữ cặp electron chủ yếu giữa hai hạt nhân. Mỗi carbon
còn một electron trên orbital p; sáu electron này tạo hệ \textbf{liên kết $\pi$ delocalised}
trải đều trên cả sáu carbon. Các orbital p xen phủ tối đa (phân tử phẳng) tạo \textbf{vòng
electron delocalised} trên và dưới mặt phẳng vòng (Hình 25.4); ba góc quanh mỗi C sp$^2$ đều
$120^\circ$.

\begin{center}
\begin{tikzpicture}[scale=0.85]
  % nhìn nghiêng
  \begin{scope}
    \fill[gray!12] (-1.6,-0.5) -- (0,-0.95) -- (1.6,-0.5) -- (0,-0.05) -- cycle;
    \foreach \x in {-1.2,-0.6,0,0.6,1.2} {
      \shade[top color=green!60!black, bottom color=green!40, opacity=0.75] (\x,0.05) ellipse (0.18 and 0.5);
      \shade[bottom color=green!60!black, top color=green!40, opacity=0.75] (\x,-1.0) ellipse (0.18 and 0.5);
    }
    \node[below] at (0,-1.9) {\footnotesize nhìn nghiêng: 6 orbital p};
  \end{scope}
  % nhìn từ trên
  \begin{scope}[xshift=4.6cm]
    \foreach \i in {0,...,5} {
      \coordinate (C\i) at ({90-\i*60}:0.9);
      \coordinate (H\i) at ({90-\i*60}:1.25);
    }
    \draw[thick, green!40!black] (C0)--(C1)--(C2)--(C3)--(C4)--(C5)--cycle;
    \draw[thick, green!40!black] (0,0) circle (0.52);
    \foreach \i in {0,...,5} { \draw[green!40!black] (C\i)--(H\i) node[anchor=center]{H}; }
    \node[below] at (0,-1.7) {\footnotesize nhìn từ trên: vòng $\pi$ delocalised};
  \end{scope}
\end{tikzpicture}

\footnotesize \textbf{Hình 25.4} Liên kết $\pi$ trong benzene.
\end{center}

\subsectionGray{Gọi tên hợp chất aryl}

Nhiều hợp chất aryl có nhóm chức thế trực tiếp vào vòng thay hydro (Bảng 25.2).

\begin{center}
\begin{tabular}{@{}ll@{}}
\toprule
\textbf{Công thức khung} & \textbf{Tên} \\
\midrule
vòng--Cl & chlorobenzene \\
vòng--NO$_2$ & nitrobenzene \\
vòng--OH & phenol \\
vòng--OH + 3 Br (2,4,6) & 2,4,6-tribromophenol \\
vòng--NH$_2$ & phenylamine \\
\bottomrule
\end{tabular}

\footnotesize \textbf{Bảng 25.2} Tên một số hợp chất aryl; nhóm phenyl viết \ce{C6H5-},
vd phenylamine \ce{C6H5NH2}.
\end{center}
\end{multicols*}
`;

export const LATEX_PAGE_384_385 = String.raw`% ==========================================================================
% TRANG 384–385: PHẢN ỨNG ARENE — THẾ ELECTROPHILE, HALOGEN CARRIER, NITRATION
% ==========================================================================
\setcounter{page}{384}
\begin{multicols*}{2}
\sectionRed{Phản ứng của arene (Reactions of arenes)}

Phần lớn phản ứng của benzene giữ nguyên vòng $\pi$ delocalised bền vững: hydro bị \textbf{thế}
bởi nguyên tử/nhóm nguyên tử khác; tấn công đầu tiên thường là \textbf{electrophile} hút vào
mật độ electron cao quanh vòng.

\subsectionGray{Thế electrophile với chlorine hoặc bromine}

\ce{C6H6 + Br2 ->[FeBr3 khan] C6H5Br + HBr}

Electrophile là nguyên tử bromine liên kết cộng hóa trị nhưng mang một phần điện tích dương:
\ce{Br2} tạo liên kết phối trí với \ce{FeBr3} (cho cặp electron tự do vào orbital 3d trống của
sắt), hút electron khỏi Br còn lại:

\ce{Br-Br + FeBr3 -> Br+ + [FeBr4]-}

\begin{center}
\begin{tikzpicture}[scale=0.75, font=\small]
  % giai đoạn 1
  \begin{scope}
    \pic {benzing};
    \node[right] at (1.0,0.5) {Br$^{\delta+}$--Br};
    \draw[curly] (0.35,0.45) to[out=40,in=200] (1.0,0.72);
    \node[below] at (0,-1.1) {giai đoạn 1};
  \end{scope}
  \draw[-{Stealth}] (1.7,0) -- (2.5,0);
  % giai đoạn 2
  \begin{scope}[xshift=4.2cm]
    \foreach \i in {0,...,5} { \coordinate (C\i) at ({90-\i*60}:0.7); }
    \draw[thick] (C0)--(C1)--(C2)--(C3)--(C4)--(C5)--cycle;
    \draw[thick] (C1) arc (-30:210:0.5);
    \draw (C0)--++(90:0.35) node[above]{H};
    \draw (C3)--++(-90:0.35) node[below]{Br};
    \node[right, red!70!black] at (0.75,0.55) {+};
    \node[below] at (0,-1.1) {giai đoạn 2 (4 e $\pi$, + trải 5 C)};
  \end{scope}
  \draw[-{Stealth}] (5.9,0) -- (6.7,0);
  % giai đoạn 3
  \begin{scope}[xshift=8.4cm]
    \pic {benzing};
    \draw (C3)--++(-90:0.35) node[below]{Br};
    \node[below] at (0,-1.1) {giai đoạn 3: + HBr + FeBr$_3$};
  \end{scope}
\end{tikzpicture}

\footnotesize Cơ chế thế electrophile của benzene với bromine (3 giai đoạn).
\end{center}

Chlorine phản ứng y hệt với \ce{FeCl3}/\ce{AlCl3} khan; các xúc tác này gọi là
\textbf{halogen carrier}. Với methylbenzene, --CH$_3$ định hướng 2,4: chlorine dư cho
1-methyl-2,4-, 1-methyl-2,6-dichloro- rồi 1-methyl-2,4,6-trichlorobenzene. Liên kết C--X trong
halogenoarene bền hơn halogenoalkane vì cặp electron tự do của halogen xen phủ một phần với hệ
$\pi$ (một phần tính nối đôi).

\medskip
Dưới UV light hoặc nhiệt độ cao, chlorine thế vào \textbf{mạch nhánh} (cơ chế gốc tự do):

\ce{C6H5CH3 + Cl2 ->[UV] C6H5CH2Cl + HCl}

Cl$_2$ dư thay cả ba hydro nhánh; vòng không bị thế.

\begin{questionbox}
\textbf{3}\hspace{0.5em}\textbf{a} Viết phương trình chlorine + benzene (xúc tác iron(III) chloride).\\
\textbf{b} Tên loại cơ chế ở câu a?\\
\textbf{c} Vẽ cơ chế câu a với tiểu phân tấn công Cl$^+$, dùng mũi tên cong.\\
\textbf{d} Vẽ công thức hiển thị halogenoarene “không thế vào vòng” khi trộn methylbenzene với bromine dưới UV.\\
\textbf{e} Gọi tên sản phẩm hữu cơ khi làm câu d với bromine dư.\\
\textbf{f} Tên cơ chế phản ứng câu e.
\end{questionbox}

\subsectionGray{Nitration benzene}

Electrophile \ce{NO2+} (nitronium ion) sinh từ hỗn hợp acid đặc:

\ce{HNO3 + 2 H2SO4 -> NO2+ + 2 HSO4- + H3O+}

Phản ứng ở khoảng 55\,$^\circ$C: \ce{C6H6 + HNO3 ->[H2SO4][55 C] C6H5NO2 + H2O}

Giai đoạn 1: cặp electron $\pi$ cho vào N của \ce{NO2+}, vòng $\pi$ tạm vỡ (4 e $\pi$, + trải 5
C). Giai đoạn 2: C--H đứt dị phân, cặp electron trả về hệ $\pi$ --- vòng thơm 6 electron khôi
phục, hydro ra đi dạng H$^+$. Nitration tiếp cho 1,3-dinitro- rồi 1,3,5-trinitrobenzene vì
--NO$_2$ (và --COOH) làm vòng kém hoạt động, định hướng 3,5 (Bảng 25.4).
\end{multicols*}
`;

export const LATEX_PAGE_386_387 = String.raw`% ==========================================================================
% TRANG 386–387: FRIEDEL–CRAFTS, OXY HÓA MẠCH NHÁNH, PHENOL
% ==========================================================================
\setcounter{page}{386}
\begin{multicols*}{2}
\begin{questionbox}
\textbf{4}\hspace{0.5em}\textbf{a} Hoàn thành hai phương trình nitration methylbenzene:
\textbf{i} \ce{C6H5CH3 + NO2+ -> \_\_\_ + \_\_\_};
\textbf{ii} \ce{C6H5CH3 + HNO3 ->[H2SO4] \_\_\_ + \_\_\_}.
\textbf{iii} Gọi tên sản phẩm mono-thế. \textbf{iv} Vẽ 1-methyl-2,4-dinitrobenzene và
1-methyl-2,4,6-trinitrobenzene.\\
\textbf{b} Sulfonation benzene bằng fuming sulfuric acid (electrophile \ce{SO3}, sản phẩm
\ce{C6H5SO3H}): \textbf{i} nguyên tử nào trong \ce{SO3} nhận cặp electron? \textbf{ii} viết
phương trình.
\end{questionbox}

\sectionRed{Alkyl hóa benzene bằng acylation (Friedel–Crafts)}

Phản ứng Friedel–Crafts là ví dụ thứ ba của thế electrophile: thay hydro vòng bằng nhóm alkyl
(--CH$_3$, --CH$_2$CH$_3$) hoặc acyl (alkyl + carbonyl C=O); dùng tổng hợp detergent,
polystyrene\ldots

\ce{C6H6 + CH3CH2Cl ->[AlCl3] C6H5CH2CH3 + HCl}

\ce{C6H6 + CH3COCl ->[AlCl3] C6H5COCH3 + HCl}

Carbocation electrophile sinh nhờ AlCl$_3$:
\begin{enumerate}
  \item \ce{AlCl3 + CH3COCl -> CH3CO+ + AlCl4-}
  \item vòng $\pi$ tấn công carbocation $\to$ intermediate (+, 4 e $\pi$)
  \item mất H$^+$ (AlCl$_4^-$ nhận) $\to$ phenylethanone + HCl + AlCl$_3$ (hoàn nguyên xúc tác)
\end{enumerate}

\begin{calloutbox}
Phản ứng Friedel–Crafts đưa một \textbf{mạch nhánh} vào vòng benzene.
\end{calloutbox}

\subsectionGray{Oxy hóa mạch nhánh trong arene}

Alkane không bị \ce{KMnO4} oxy hóa; nhưng mạch nhánh arene thì có:

\ce{C6H5CH3 + 3 [O] ->[KMnO4/OH-][H2SO4 loang] C6H5COOH + H2O}

\sectionRed{Phenol}

Phenol \ce{C6H5OH}: rắn kết tinh, nóng chảy 43\,$^\circ$C; dùng chế tạo keo epoxy, đĩa CD, thuốc
sát trùng TCP (chứa 2,4,6-tribromophenol). Nóng chảy cao nhờ liên kết hydro; tan ít trong nước
vì vòng benzene lớn không phân cực. Phenol là acid yếu:

\ce{C6H5OH(aq) <=> C6H5O-(aq) + H+(aq)}

nhưng mạnh hơn nước và alcohol (pK$_a$: phenol 10,0; nước 14,0; ethanol 16,0).

\begin{questionbox}
\textbf{5}\hspace{0.5em}\textbf{a} Hoàn thành: \textbf{i} \ce{C6H6 + CH3CH2CH2Cl ->[AlCl3] \_\_\_};
\textbf{ii} \ce{C6H6 + CH3CH2CH2CH2COCl ->[AlCl3] \_\_\_}. \textbf{b i} Tên sản phẩm câu a i;
\textbf{ii} sản phẩm câu a ii thuộc loại nào?\\[3pt]
\textbf{6}\hspace{0.5em}Hexylbenzene hồi lưu với kiềm \ce{KMnO4}(VII) rồi acid hóa; thí nghiệm y
hệt với benzene. So sánh.
\end{questionbox}
\end{multicols*}
`;

export const LATEX_PAGE_388_389 = String.raw`% ==========================================================================
% TRANG 388–389: TÍNH ACID CỦA PHENOL + PHẢN ỨNG CỦA PHENOL
% ==========================================================================
\setcounter{page}{388}
\begin{multicols*}{2}
\begin{center}
\begin{tabular}{@{}llc@{}}
\toprule
\textbf{Acid yếu} & \textbf{Phân li trong nước} & \textbf{pK$_a$ (25\,$^\circ$C)} \\
\midrule
phenol & \ce{C6H5OH(aq) <=> C6H5O-(aq) + H+(aq)} & \textbf{10,0} \\
nước & \ce{H2O(l) <=> H+(aq) + OH-(aq)} & 14,0 \\
ethanol & \ce{C2H5OH(aq) <=> C2H5O-(aq) + H+(aq)} & 16,0 \\
\bottomrule
\end{tabular}

\footnotesize \textbf{Bảng 25.3} So sánh tính acid.
\end{center}

Ion \textbf{phenoxide} \ce{C6H5O-} được bền hóa nhờ \textbf{delocalisation}: cặp electron tự do
trên oxygen trải vào hệ $\pi$ của vòng, mật độ điện tích âm loãng ra nên khó bắt lại H$^+$ ---
cân bằng phân li dịch phải nhiều hơn nước/ethanol. Ethoxide ion ngược lại bị nhóm ethyl đẩy
electron (đậm điện tích âm) nên ethanol là acid yếu hơn nước.

\subsectionGray{Phản ứng của phenol}

\textbf{Đứt liên kết O--H:}
\ce{C6H5OH + NaOH -> C6H5ONa + H2O}

\ce{2 C6H5OH + 2 Na -> 2 C6H5ONa + H2}

\textbf{Thế vào vòng:} vòng phenol được \textit{hoạt hóa} (cặp e tự do của --OH xen phủ vào hệ
$\pi$), đặc biệt ở các vị trí 2, 4, 6.

\begin{questionbox}
\textbf{7}\hspace{0.5em}\textbf{a} Sắp xếp theo tính acid, mạnh nhất trước: \ce{CH3COOH},
\ce{C6H5OH}, \ce{HCl}, \ce{C2H5OH}, \ce{H2O}. \textbf{b} Methanol acid mạnh hơn hay yếu hơn
phenol? Giải thích.
\end{questionbox}

\subsectionGray{Bromination phenol}

Bromine water không phản ứng với benzene ở nhiệt độ phòng (cần Br$_2$ nguyên chất + FeBr$_3$);
với phenol thì mất màu cam ngay và tạo kết tủa trắng 2,4,6-tribromophenol:

\ce{C6H5OH + 3 Br2 -> C6H2Br3OH + 3 HBr}

Phản ứng tương tự với chlorine, iodine. Nitration phenol xảy ra với HNO$_3$ \textit{loãng} ở
nhiệt độ phòng (2- và 4-nitrophenol); HNO$_3$ đặc cho 2,4,6-trinitrophenol --- trong khi benzene
cần HNO$_3$/H$_2$SO$_4$ đặc, 55\,$^\circ$C.

\begin{questionbox}
\textbf{8}\hspace{0.5em}\textbf{a} Sắp xếp theo khả năng thế electrophile, mạnh nhất trước:
\ce{C6H6}, \ce{C6H5CH3}, \ce{C6H5CO2H}, \ce{C6H5OH}. \textbf{b i} Phương trình cân bằng khi sục
chlorine dư qua phenol ở nhiệt độ phòng. \textbf{ii} Điều kiện khác thế nào để điều chế
chlorobenzene từ benzene? Giải thích.
\end{questionbox}
\end{multicols*}
`;

export const LATEX_PAGE_390 = String.raw`% ==========================================================================
% TRANG 390: SUMMARY + BẢNG 25.4
% ==========================================================================
\setcounter{page}{390}
\begin{summarybox}
\textbf{Tóm tắt chương}
\begin{itemize}
  \item Benzene \ce{C6H6} đối xứng, lục giác phẳng.
  \item Arene bền nhờ 6 electron $\pi$ delocalised trên/dưới mặt phẳng vòng.
  \item Cơ chế chính: \textbf{thế electrophile} (giữ hệ $\pi$); thế được bằng halogen, --NO$_2$,
        nhóm alkyl/acyl (Friedel–Crafts).
  \item Đuôi “-ene” nhưng arene không hành xử như alkene: thế, không cộng.
  \item Vòng benzene ảnh hưởng mạch nhánh: methylbenzene $\to$ benzoic acid bởi kiềm
        \ce{KMnO4}(VII).
  \item --OH gắn trực tiếp vào vòng: \textbf{phenol}.
  \item Phenol acid yếu nhưng mạnh hơn nước/alcohol nhờ delocalisation của phenoxide ion.
  \item Phenol + NaOH $\to$ sodium phenoxide + nước; + Na $\to$ sodium phenoxide + hydrogen.
  \item --OH hoạt hóa vòng: bromine water mất màu ở nhiệt độ phòng, kết tủa trắng
        2,4,6-tribromophenol.
\end{itemize}
\end{summarybox}

\begin{center}
\begin{tabular}{@{}p{6.4cm}p{6.4cm}@{}}
\toprule
\textbf{Định hướng 2,4,6 (hoạt hóa vòng)} & \textbf{Định hướng 3,5 (làm vòng kém hoạt động)} \\
\midrule
--NH$_2$, --NHR, --NR$_2$ & --NO$_2$ \\
--OH, --OR & --NR$_3^+$ \\
--NHCOR & --CN \\
--CH$_3$, --alkyl & --CHO \\
--Cl & --COOH, --COOR \\
\bottomrule
\end{tabular}

\footnotesize \textbf{Bảng 25.4} Vị trí bị tấn công trong thế electrophile vào vòng đã có nhóm thế.
\end{center}
`;

export const LATEX_PAGE_391_392 = String.raw`% ==========================================================================
% TRANG 391–392: CÂU HỎI CUỐI CHƯƠNG
% ==========================================================================
\setcounter{page}{391}
\sectionRed{Câu hỏi cuối chương}

\textbf{1}\hspace{0.5em}\textbf{a} Công thức thực nghiệm của benzene? \textbf{b} Công thức phân
tử? \textbf{c i} Vẽ công thức hiển thị đầy đủ cấu trúc Kekulé; \textbf{ii} vẽ công thức khung
Kekulé và delocalised.

\textbf{2}\hspace{0.5em}Benzene + bromine: \textbf{a} phương trình cân bằng; \textbf{b} tên xúc
tác; \textbf{c} quan sát thị giác; \textbf{d} Friedel–Crafts với 1-chloropropane: \textbf{i} công
thức xúc tác; \textbf{ii} công thức electrophile; \textbf{iii} tên sản phẩm; \textbf{iv} vẽ ba
bước cơ chế kèm hoàn nguyên xúc tác.

\textbf{3}\hspace{0.5em}Phenol: \textbf{a i} công thức phân tử; \textbf{ii} công thức thực
nghiệm; \textbf{b} phenol nóng chảy + Na: quan sát + phương trình; \textbf{c} phenol + NaOH: tên
loại phản ứng + phương trình; \textbf{d} tên sản phẩm chung của b, c; \textbf{e} phenol + bromine
water: tên sản phẩm, hai quan sát, phương trình, bình luận so với benzene; \textbf{f} giải thích
vì sao phenol phản ứng mạnh hơn benzene (mô hình sắp xếp electron).

\textbf{4}\hspace{0.5em}Nitration benzene: \textbf{a} tên cơ chế; \textbf{b} cách sinh NO$_2^+$
(tên chất + phương trình); \textbf{c} nhiệt độ thích hợp; \textbf{d} cơ chế mũi tên cong;
\textbf{e} chất thông dụng trong nhà: vòng benzene mang --OH (C1), --CH$_3$ (C3, C5), --Cl (C4):
\textbf{i} công thức phân tử; \textbf{ii} gợi ý công dụng + giải thích; \textbf{iii} bromine water
mất màu --- gợi ý hai cấu trúc sản phẩm.

\textbf{5}\hspace{0.5em}\textbf{a} Mô tả liên kết trong benzene kèm mô hình sắp xếp electron.
\textbf{b} Cyclohexene làm mất màu bromine water nhưng benzene thì không --- giải thích.
`;

export const LATEX_SOLUTIONS_APPENDIX_25 = String.raw`% ==========================================================================
% PHỤ LỤC ĐÁP ÁN — CHƯƠNG 25
% ==========================================================================
\sectionRed{Phụ lục: Đáp án gợi ý}

\textbf{Câu 1:} a) 6 electron. b) orbital p chưa lai hóa. c) electron $\pi$ không khu trú giữa
hai C mà trải đều khắp vòng 6 C. d) benzene: vòng $\pi$ delocalised 6 e/6 C; hex-3-ene: nối $\pi$
khu trú C3=C4.

\textbf{Câu 2:} a) i) Br ở C1, C3, C5; ii) Cl ở C1, C3 và NO$_2$ ở C5. b) i) 2-methylphenol;
ii) 1-bromo-2-chlorobenzene.

\textbf{Câu 3:} a) \ce{C6H6 + Cl2 ->[FeCl3] C6H5Cl + HCl}. b) thế electrophile. c) mũi tên cong
từ vòng $\pi$ tới Cl$^+$; intermediate (+, 4 e $\pi$); [FeCl$_4$]$^-$ tách H$^+$. d)
\ce{C6H5CH2Br}. e) \ce{C6H5CHBr2} rồi \ce{C6H5CBr3}. f) thế gốc tự do.

\textbf{Câu 4:} a) i) \ce{C6H5CH3 + NO2+ -> CH3C6H4NO2 + H+}; ii) \ce{C6H5CH3 + HNO3 ->[H2SO4]
CH3C6H4NO2 + H2O}; iii) 1-methyl-2-nitrobenzene và 1-methyl-4-nitrobenzene; iv) --NO$_2$ ở C2, C4
(hoặc C2, C4, C6). b) i) nguyên tử S; ii) \ce{C6H6 + SO3 -> C6H5SO3H}.

\textbf{Câu 5:} a) i) \ce{C6H6 + CH3CH2CH2Cl ->[AlCl3] C6H5CH2CH2CH3 + HCl}; ii) \ce{C6H6 +
CH3CH2CH2CH2COCl ->[AlCl3] C6H5COCH2CH2CH2CH3 + HCl}. b) i) propylbenzene; ii) ketone.

\textbf{Câu 6:} hexylbenzene: mạch nhánh bị oxy hóa thành --COOH (benzoic acid), màu tím
\ce{KMnO4} mất; benzene: không phản ứng, màu tím giữ nguyên.

\textbf{Câu 7:} a) \ce{HCl} > \ce{CH3COOH} > \ce{C6H5OH} > \ce{H2O} > \ce{C2H5OH}. b) methanol
yếu hơn phenol (methoxide không được bền hóa bởi delocalisation; nhóm alkyl đẩy electron).

\textbf{Câu 8:} a) \ce{C6H5OH} > \ce{C6H5CH3} > \ce{C6H6} > \ce{C6H5CO2H}. b) i) \ce{C6H5OH +
3 Cl2 -> C6H2Cl3OH + 3 HCl}; ii) benzene cần Cl$_2$ nguyên chất + halogen carrier khan (AlCl$_3$/
FeCl$_3$), không dùng nước chlorine, vì vòng chưa hoạt hóa.

\textbf{EOC 1:} a) CH; b) \ce{C6H6}; c) vẽ theo Hình 25.2.

\textbf{EOC 2:} a) \ce{C6H6 + Br2 -> C6H5Br + HBr}; b) FeBr$_3$ (hoặc AlBr$_3$/mạt sắt); c) màu
cam nhạt dần, khí HBr bốc khói; d) i) AlCl$_3$; ii) \ce{CH3CH2CH2+}; iii) propylbenzene; iv) ba
bước như Hình cơ chế Friedel–Crafts.

\textbf{EOC 3:} a) i) \ce{C6H6O}; ii) \ce{C6H6O}; b) sủi bọt H$_2$: \ce{2 C6H5OH + 2 Na -> 2
C6H5ONa + H2}; c) trung hòa: \ce{C6H5OH + NaOH -> C6H5ONa + H2O}; d) sodium phenoxide; e)
2,4,6-tribromophenol; mất màu cam + kết tủa trắng; \ce{C6H5OH + 3 Br2 -> C6H2Br3OH + 3 HBr};
phenol phản ứng điều kiện ôn hòa hơn hẳn benzene; f) cặp e tự do của --OH delocalise vào vòng,
tăng mật độ electron $\to$ electrophile tấn công dễ hơn.

\textbf{EOC 4:} a) thế electrophile; b) \ce{HNO3 + 2 H2SO4 -> NO2+ + 2 HSO4- + H3O+}; c)
$\approx 55\,^\circ$C; d) cơ chế 2 giai đoạn; e) i) \ce{C8H9ClO}; ii) chất sát trùng/khử khuẩn
(TCP); iii) Br thế vào vị trí trống 2 hoặc 6: 2-bromo-4-chloro-3,5-dimethylphenol /
6-bromo-4-chloro-3,5-dimethylphenol.

\textbf{EOC 5:} a) mỗi C sp$^2$: 3 liên kết $\sigma$ góc 120$^\circ$, phân tử phẳng; 6 orbital p
xen phủ tạo vòng 6 e $\pi$ delocalised; mọi C--C dài 0,139 nm. b) cyclohexene có C=C khu trú $\to$
cộng Br$_2$ ngay; benzene có hệ $\pi$ delocalised bền, mật độ electron mỗi vị trí thấp, phá hệ
$\pi$ tốn năng lượng $\to$ không phản ứng với nước bromine.
`;

export const FULL_LATEX_DOCUMENT_25 = [
  LATEX_PREAMBLE_25,
  String.raw`\begin{document}`,
  LATEX_PAGE_382,
  LATEX_PAGE_383,
  LATEX_PAGE_384_385,
  LATEX_PAGE_386_387,
  LATEX_PAGE_388_389,
  LATEX_PAGE_390,
  LATEX_PAGE_391_392,
  String.raw`\end{document}`,
].join('\n');

export const FULL_LATEX_WITH_SOLUTIONS_25 = [
  LATEX_PREAMBLE_25,
  String.raw`\begin{document}`,
  LATEX_PAGE_382,
  LATEX_PAGE_383,
  LATEX_PAGE_384_385,
  LATEX_PAGE_386_387,
  LATEX_PAGE_388_389,
  LATEX_PAGE_390,
  LATEX_PAGE_391_392,
  LATEX_SOLUTIONS_APPENDIX_25,
  String.raw`\end{document}`,
].join('\n');

export const LATEX_SECTIONS_25: LatexSectionItem25[] = [
  {
    id: 'full',
    pageNumber: '382–392',
    title: 'Toàn bộ tài liệu Chương 25 (Full 11 trang SGK)',
    subtitle: 'Bản LaTeX đầy đủ từ trang mở đầu đến câu hỏi cuối chương',
    latexCode: FULL_LATEX_DOCUMENT_25,
  },
  {
    id: 'full-solutions',
    pageNumber: '382–392 + Đáp án',
    title: 'Toàn bộ SGK Chương 25 + Phụ lục Giải chi tiết',
    subtitle: 'Bao gồm lời giải Câu 1–8 và End-of-chapter 1–5',
    latexCode: FULL_LATEX_WITH_SOLUTIONS_25,
  },
  { id: 'p382', pageNumber: 'Trang 382', title: 'Giới thiệu & vòng benzene (Kekulé)', subtitle: 'Hình 25.1, 25.2 + Câu 1–2', latexCode: LATEX_PAGE_382 },
  { id: 'p383', pageNumber: 'Trang 383', title: 'Bằng chứng thực nghiệm & liên kết π', subtitle: 'Bảng 25.1, Hình 25.4, Bảng 25.2', latexCode: LATEX_PAGE_383 },
  { id: 'p384', pageNumber: 'Trang 384–385', title: 'Thế electrophile, halogen carrier, nitration', subtitle: 'Cơ chế 3 giai đoạn + Câu 3', latexCode: LATEX_PAGE_384_385 },
  { id: 'p386', pageNumber: 'Trang 386–387', title: 'Friedel–Crafts, oxy hóa mạch nhánh, phenol', subtitle: 'Câu 4–6 + Hình 25.5', latexCode: LATEX_PAGE_386_387 },
  { id: 'p388', pageNumber: 'Trang 388–389', title: 'Tính acid & phản ứng của phenol', subtitle: 'Bảng 25.3, bromination/nitration phenol + Câu 7–8', latexCode: LATEX_PAGE_388_389 },
  { id: 'p390', pageNumber: 'Trang 390', title: 'Summary + Bảng 25.4 định hướng thế', subtitle: 'Tóm tắt chương và bảng nhóm thế', latexCode: LATEX_PAGE_390 },
  { id: 'p391', pageNumber: 'Trang 391–392', title: 'Câu hỏi cuối chương 1–5', subtitle: 'End-of-chapter questions', latexCode: LATEX_PAGE_391_392 },
];
