export interface LatexSectionItemMath1 {
  id: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  latexCode: string;
}

/* ==========================================================================
   BẢN LaTeX — TOÁN HỌC, CHƯƠNG 1: JOHN NAPIER, 1614
   (e: The Story of a Number — Eli Maor, 1994; bản tiếng Việt diễn giải)
   Quy ước: String.raw với MỘT dấu gạch ngược (như latexSource.ts)
   ========================================================================== */

export const LATEX_PREAMBLE_MATH1 = String.raw`% ==========================================================================
% TOÁN HỌC — e: CÂU CHUYỆN MỘT CON SỐ (ELI MAOR, 1994)
% Chương 1: John Napier, 1614 — Bản tiếng Việt diễn giải chi tiết
% Biên dịch & chế bản LaTeX (pdflatex / xelatex — Overleaf, TeXLive)
% ==========================================================================
\documentclass[11pt,a4paper,twoside]{article}

% --- Gói ngôn ngữ tiếng Việt ---
\usepackage[utf8]{inputenc}
\usepackage[T5]{fontenc}
\usepackage[vietnamese]{babel}
\usepackage{lmodern}
\usepackage{microtype}

\usepackage[
  a4paper,
  top=2cm,
  bottom=2.2cm,
  left=2.2cm,
  right=2.2cm,
  headheight=14pt
]{geometry}

% --- Toán học & hình vẽ ---
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\usepackage{booktabs}
\usepackage{array}
\usepackage{multicol}
\usepackage[dvipsnames,svgnames,x11names]{xcolor}

% --- Khung hộp tiêu đề ---
\usepackage[most]{tcolorbox}

% --- Màu chủ đạo phần Toán học (vàng đồng cổ, khác đỏ Hóa học) ---
\definecolor{mathGold}{HTML}{7A5C17}
\definecolor{mathGoldLight}{HTML}{B99A4E}
\definecolor{mathCream}{HTML}{FBF7EC}
\definecolor{mathInk}{HTML}{26221A}

\newcommand{\sectionGold}[1]{%
  {\color{mathGold}\section*{#1}}%
}

\newtcolorbox{mathquotebox}{
  enhanced, breakable,
  colback=mathCream, colframe=mathGoldLight,
  boxrule=0.8pt, arc=2mm,
  left=8pt, right=8pt, top=6pt, bottom=6pt
}

\newtcolorbox{mathkeybox}{
  enhanced, breakable,
  colback=Green!6, colframe=Green!55!black,
  boxrule=0.8pt, arc=2mm,
  left=8pt, right=8pt, top=6pt, bottom=6pt
}

% --- Header & Footer ---
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyfoot[C]{\thepage}
\fancyhead[LO,RE]{\sffamily\footnotesize\color{black!55}Toán học · Chương 1: John Napier, 1614}

\setlength{\parindent}{1em}
\setlength{\parskip}{0.4em}
`;

export const LATEX_MATH1_S1 = String.raw`% ==========================================================================
% MỤC 1 — MỘT TÁC GIẢ KHÔNG AI NGỜ TỚI (tiểu sử John Napier)
% ==========================================================================
\sectionGold{1. Một tác giả không ai ngờ tới}

\begin{mathquotebox}
\itshape “Chẳng có gì gây phiền toái cho thực hành toán học, chẳng gì quấy rầy và cản trở
người tính toán hơn những phép nhân, chia, khai căn bậc hai và bậc ba với các con số lớn\ldots”
\begin{flushright}
--- John Napier, \textit{Mirifici logarithmorum canonis descriptio} (1614)
\end{flushright}
\end{mathquotebox}

Hiếm khi nào trong lịch sử khoa học, một ý tưởng toán học trừu tượng lại được cả cộng đồng
khoa học đón nhận nồng nhiệt như phát minh logarit. Và càng khó tưởng tượng hơn nữa con người
đã sinh ra phát minh ấy: John Napier --- một nhà quý tộc Scotland bận rộn với thần học, ruộng
đồng và cả những mưu kế quân sự.

Napier sinh năm 1550 (không rõ chính xác ngày) tại điền trang của gia đình, lâu đài Merchiston
gần Edinburgh, con trai Sir Archibald Napier và người vợ đầu Janet Bothwell. Mười ba tuổi ông
vào Đại học St. Andrews học về tôn giáo; sau thời gian chu du nước ngoài, ông về nước năm 1571
và cưới Elizabeth Stirling, có hai con. Vợ mất năm 1579, ông đi bước nữa với Agnes Chisholm và
có thêm mười người con; người con thứ hai của cuộc hôn nhân này, Robert, sau này trở thành người
thực hiện di cảo văn học của cha. Khi Sir Archibald qua đời năm 1608, John trở về Merchiston và,
với tư cách laird (lãnh chúa) thứ tám của lâu đài, sống phần đời còn lại ở đó.

Những theo đuổi thuở đầu của Napier không hề báo hiệu sức sáng tạo toán học sau này. Mối quan
tâm chính của ông là tôn giáo --- đúng hơn là hoạt động tôn giáo chiến đấu: một người Tin Lành
nhiệt thành và đối thủ kiên quyết của giáo hoàng, ông công bố quan điểm trong cuốn
\textit{A Plaine Discovery of the whole Revelation of Saint John} (1593), công kích gay gắt giáo
hội Công giáo, khẳng định giáo hoàng chính là Phản Kitô và thúc giục vua Scotland James VI
(sau là James I của Anh) thanh trừng triều đình khỏi mọi “phần tử giáo hoàng, kẻ vô thần và
kẻ trung lập”. Ông còn tiên đoán Ngày Phán Xét sẽ rơi vào khoảng 1688--1700. Cuốn sách được
dịch ra nhiều thứ tiếng và đi qua 21 ấn bản (10 ấn bản ngay khi ông còn sống).

Nhưng mối quan tâm của ông không gói trong tôn giáo. Là địa chủ lo cải thiện mùa màng và gia
súc, ông thử nghiệm các loại phân và muối để bón đất. Năm 1579 ông sáng chế một ốc xoắn thủy
lực để khống chế mực nước trong các mỏ than. Ông cũng ham mê việc quân sự --- hẳn vì nỗi lo
chung thời ấy rằng vua Philip II của Tây Ban Nha sắp xâm lược Anh: ông vẽ đồ án những tấm
gương khổng lồ phóng lửa đốt cháy chiến thuyền đối phương (gợi nhớ kế hoạch bảo vệ Syracuse
của Archimedes mười tám thế kỷ trước), một khẩu pháo có thể “quét sạch một cánh đồng chu vi
bốn dặm khỏi mọi sinh vật cao hơn một bàn chân”, một chiến xa với “cái miệng kim loại chuyển
động” gieo phá hoại tứ phía, và cả một thiết bị “đi ngầm dưới nước cùng thợ lặn và mưu kế
khác để hại quân thù”. Không rõ cỗ máy nào từng được chế tạo thật.

Con người đa tài ấy cũng là nhân vật của vô số giai thoại: bầy bồ câu say rượu (ngũ cốc tẩm
rượu mạnh khiến chim hàng xóm say mèm không cất cánh nổi) và con gà trống đen bôi bồ hóng
(kẻ trộm không dám chạm vào gà nên tay sạch, tự tố cáo mình). Thế nhưng tên tuổi Napier lưu
danh không phải nhờ những mưu mẹo ấy, mà nhờ một ý tưởng toán học trừu tượng ông thai nghén
suốt hai mươi năm: logarit.
`;

export const LATEX_MATH1_S2 = String.raw`% ==========================================================================
% MỤC 2 — THỜI ĐẠI ĐÒI HỎI MỘT CỖ MÁY TÍNH TOÁN
% ==========================================================================
\sectionGold{2. Thời đại đòi hỏi một cỗ máy tính toán}

Thế kỷ XVI -- đầu XVII chứng kiến tri thức khoa học bùng nổ ở mọi lĩnh vực:
\begin{itemize}
  \item hệ nhật tâm của Copernicus cuối cùng bắt đầu được chấp nhận;
  \item chuyến vòng quanh địa cầu của Magellan (1521) mở ra kỷ nguyên hàng hải mới;
  \item bản đồ thế giới của Mercator (1569) đổi thay nghệ thuật đi biển;
  \item Galileo đặt nền móng cơ học ở Ý;
  \item Kepler công thức hóa ba định luật chuyển động hành tinh ở Đức.
\end{itemize}

Mọi bước tiến ấy kéo theo khối lượng số liệu đo đạc ngày càng khổng lồ, buộc các nhà khoa học
dành phần lớn thời gian cho những phép tính nặng nhọc. Thời đại cần một phát minh giải phóng
họ khỏi gánh nặng ấy --- và Napier nhận lời thách đấu.
`;

export const LATEX_MATH1_S3 = String.raw`% ==========================================================================
% MỤC 3 — HAI HẠT GIỐNG CỦA Ý TƯỞNG (prosthaphaeresis & Stifel)
% ==========================================================================
\sectionGold{3. Hai hạt giống của ý tưởng}

\textbf{(a) Quy tắc prosthaphaeresis.} Napier thông thạo lượng giác và chắc chắn quen thuộc
công thức
\[
  \sin A \cdot \sin B = \tfrac{1}{2}\bigl[\cos(A-B) - \cos(A+B)\bigr],
\]
cùng các công thức tương tự cho $\cos A \cdot \cos B$ và $\sin A \cdot \cos B$, bấy giờ gọi là
các quy tắc \textit{prosthaphaeresis} --- ghép từ tiếng Hy Lạp nghĩa là “cộng và trừ”. Tích
hai biểu thức lượng giác tính được bằng tổng hoặc hiệu của những biểu thức lượng giác khác;
mà cộng trừ thì dễ hơn nhân chia --- một hệ thống sơ khai để hạ một phép toán xuống phép toán
đơn giản hơn.

\textbf{(b) Cấp số nhân của Stifel.} Hạt giống thứ hai, trực tiếp hơn, nằm ở các số hạng của
một cấp số nhân $1, q, q^2, q^3, \ldots$ Michael Stifel (1487--1567), trong
\textit{Arithmetica integra} (1544), đã phát biểu mối liên hệ then chốt:
\[
  q^m \cdot q^n = q^{m+n}, \qquad \frac{q^m}{q^n} = q^{m-n}.
\]
Khi $m<n$ cần định nghĩa $q^{-n} = 1/q^n$; để quy tắc vẫn đúng khi $m=n$ phải đặt $q^0 = 1$.
Khi đó các số mũ $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ lập thành một \textit{cấp số cộng}
--- ý tưởng chìa khóa đằng sau logarit. Nơi Stifel mới chỉ nghĩ tới số mũ nguyên; thiên tài
của Napier là mở rộng tương ứng ấy ra một dải giá trị \textit{liên tục}.

\begin{center}
\begin{tikzpicture}[font=\small]
  % hàng số mũ (cấp số cộng)
  \foreach \k [count=\i from 0] in {-3,-2,-1,0,1,2,3,4,5} {
    \node[draw=blue!45!black, fill=blue!8, rounded corners=2pt, minimum width=8mm]
      (e\i) at (\i*1.1, 1) {\k};
    \node[draw=orange!60!black, fill=orange!10, rounded corners=2pt, minimum width=8mm]
      (q\i) at (\i*1.1, 0) {$q^{\k}$};
  }
  \node[anchor=east] at (-0.6,1) {\itshape số mũ:};
  \node[anchor=east] at (-0.6,0) {\itshape lũy thừa:};
  % ví dụ q^2 * q^3 = q^5
  \draw[-{Stealth}, red!70!black] (q6.south) to[bend right=35] (q8.south);
  \draw[-{Stealth}, red!70!black] (q7.south) to[bend right=25] (q8.south);
  \node[red!70!black] at (5.5,-1.1) {$q^2 \cdot q^3 = q^5 \iff 2+3=5$};
\end{tikzpicture}
\end{center}
`;

export const LATEX_MATH1_S4 = String.raw`% ==========================================================================
% MỤC 4 — Ý TƯỞNG TRUNG TÂM: HẠ MỖI PHÉP TOÁN MỘT BẬC
% ==========================================================================
\sectionGold{4. Ý tưởng trung tâm: hạ mỗi phép toán một bậc}

Mạch suy nghĩ của Napier: nếu mọi số dương đều viết được thành lũy thừa của một số cố định
cho trước (sau này gọi là \textit{cơ số}), thì
\begin{center}
\begin{tabular}{ll}
  nhân, chia các số & $\longleftrightarrow$ cộng, trừ các số mũ;\\[2pt]
  nâng lên lũy thừa $n$ & $\longleftrightarrow$ nhân số mũ với $n$;\\[2pt]
  khai căn bậc $n$ & $\longleftrightarrow$ chia số mũ cho $n$.
\end{tabular}
\end{center}

Mỗi phép toán được hạ xuống phép toán ngay dưới nó trong thang thứ bậc phép toán, và nỗi khổ
tính toán giảm đi đáng kể.

\textbf{Ví dụ (cơ số 2):}
\[
  8 \times 32 = 2^3 \times 2^5 = 2^{3+5} = 2^8 = 256;
  \qquad
  4^5 = (2^2)^5 = 2^{2 \times 5} = 2^{10} = 1024.
\]
Tra số mũ, cộng (hoặc nhân) chúng, rồi tra ngược bảng --- toàn bộ phép nhân và lũy thừa hóa
thành những thao tác trên các con số nhỏ bé.
`;

export const LATEX_MATH1_S5 = String.raw`% ==========================================================================
% MỤC 5 — CHỌN CÔNG BỘI 1 − 10⁻⁷
% ==========================================================================
\sectionGold{5. Chọn công bội: nỗi ám ảnh phân số thập phân}

Muốn bảng đủ dày, các số hạng của cấp số nhân phải nằm sát nhau --- công bội phải rất gần 1.
Nhưng công bội gần 1 kéo theo những số lẻ thập phân dài dòng, thứ ký hiệu bấy giờ còn mới mẻ
(Simon Stevin mới quảng bá phân số thập phân). Để hạn chế dùng chúng, Napier chia đơn vị
thành rất nhiều đơn vị con --- như ta chia một đồng tiền thành 100 xu hay một cây số thành
1000 mét.

Vì mục tiêu chính là giảm công tính toán lượng giác, ông theo quy ước lượng giác thời đó:
chia bán kính vòng tròn đơn vị thành $10^7$ phần. Trừ khỏi đơn vị nguyên vẹn phần thứ $10^7$
của nó:
\[
  q = 1 - 10^{-7} = 0{,}9999999
\]
--- số “gần 1 nhất” trong hệ của ông, và đó chính là công bội (“tỉ lệ”) dùng để dựng bảng.
`;

export const LATEX_MATH1_S6 = String.raw`% ==========================================================================
% MỤC 6 — HAI MƯƠI NĂM GIẤY VÀ BÚT (1594–1614): BỐN BẢNG
% ==========================================================================
\sectionGold{6. Hai mươi năm giấy và bút (1594--1614)}

\begin{center}
\begin{tabular}{@{}llll@{}}
\toprule
\textbf{Bảng} & \textbf{Công bội} & \textbf{Số mục} & \textbf{Mục cuối} \\
\midrule
1 & $1-10^{-7}$ & 101 & $10^7(1-10^{-7})^{100} \approx 9\,999\,900$ \\
2 & $1-10^{-5}$ & 51 & $10^7(1-10^{-5})^{50} \approx 9\,995\,001$ \\
3 & $9\,995\,001 : 10^7$ & 21 & $10^7 \times 0{,}9995^{20} \approx 9\,900\,473$ \\
4 & $\approx 0{,}99$ (từ mỗi mục bảng 3) & 68 & $\approx 9\,900\,473 \times 0{,}99^{68} \approx 4\,998\,609$ \\
\bottomrule
\end{tabular}
\end{center}

Bảng đầu tiên gồm 101 mục, mở đầu bằng $10^7 = 10\,000\,000$, tiếp đến $10^7(1-10^{-7}) =
9\,999\,999$, rồi $10^7(1-10^{-7})^2 = 9\,999\,998$, cứ thế tới $9\,999\,900$ (bỏ qua phần lẻ
$0{,}0004950$); mỗi số hạng nhận được bằng cách trừ khỏi số hạng trước đúng phần thứ $10^7$
của nó. Ông lặp lại quy trình với công bội là tỉ số “số cuối : số đầu” của bảng trước; bảng
thứ hai 51 mục, bảng thứ ba 21 mục, rồi từ mỗi mục của bảng thứ ba sinh thêm 68 mục với tỉ số
$\approx 0{,}99$. Mục cuối cùng $\approx 4\,998\,609$ --- xấp xỉ một nửa con số khởi đầu.

Napier dặn lại, đại ý: khi dựng bảng thứ hai, tỉ lệ giữa số đầu $10000000{,}00000$ và số cuối
$9995001{,}222927$ thật phiền phức, vậy hãy tính 21 số theo tỉ lệ dễ chịu $10000 : 9995$, đủ
sát; số cuối, nếu không sai sót, sẽ là $9900473{,}57808$.

Ngày nay công việc ấy đương nhiên giao cho máy tính; thậm chí một máy tính bỏ túi cũng xong
trong vài giờ. Nhưng Napier chỉ có giấy và bút --- đủ hiểu vì sao ông bận tâm giảm thiểu phân
số thập phân đến thế.
`;

export const LATEX_MATH1_S7 = String.raw`% ==========================================================================
% MỤC 7 — ĐẶT TÊN CHO TẠO VẬT: “LOGARITHM”
% ==========================================================================
\sectionGold{7. Đặt tên cho tạo vật: “logarithm”}

Hoàn thành công trình khổng lồ, còn một việc cuối: rửa tội cho tạo vật. Thoạt đầu Napier gọi
số mũ của mỗi lũy thừa là “số nhân tạo” (\textit{artificial number}), rồi chốt lại bằng
thuật ngữ \textbf{logarithm} --- nghĩa mặt chữ là “số tỉ lệ”.

Bằng ký hiệu hiện đại: nếu (ở bảng thứ nhất)
\[
  N = 10^7 \left(1 - 10^{-7}\right)^{L},
\]
thì số mũ $L$ chính là logarit (kiểu Napier) của $N$.

Định nghĩa hiện đại do Leonhard Euler giới thiệu năm 1728:
\[
  N = b^{L} \qquad (b > 0,\ b \neq 1),
\]
với $b$ là \textit{cơ số} cố định. Logarit Napier \textit{giảm} khi số tăng, trong khi logarit
thập phân (cơ số 10) của ta tăng. Những khác biệt ấy thật ra nhỏ và chỉ là hệ quả của việc
Napier khăng khăng đặt đơn vị bằng $10^7$ đơn vị con.
`;

export const LATEX_MATH1_S8 = String.raw`% ==========================================================================
% MỤC 8 — TRÊN SỢI TÓC CỦA SỐ e
% ==========================================================================
\sectionGold{8. Trên sợi tóc của số e}

Chính trong vòng đường vòng “mười triệu đơn vị con” đó, Napier đã vô tình đi sát rạt một con
số mà một thế kỷ sau sẽ được nhận mặt là cơ số phổ quát của logarit: số $e$,
\[
  e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^{n}.
\]

Thật vậy, chia cả $N$ lẫn $L$ cho $10^7$ (chỉ là đổi thang đo): đặt $N^{*} = N/10^7$ và
$L^{*} = L/10^7$, hệ thức $N = 10^7(1-10^{-7})^{L}$ trở thành
\[
  N^{*} = \left[\left(1 - 10^{-7}\right)^{10^{7}}\right]^{L^{*}},
\]
mà
\[
  \left(1 - 10^{-7}\right)^{10^{7}}
  = \left(1 - \frac{1}{10^{7}}\right)^{10^{7}}
  \approx \frac{1}{e} \approx 0{,}36788.
\]

Nên logarit Napier về thực chất gần như là logarit cơ số $1/e$. Dẫu vậy, lời đồn rằng Napier
đã khám phá cơ số này (thậm chí chính số $e$) là sai: ông chưa hề tư duy bằng khái niệm cơ số
--- khái niệm chỉ sinh về sau, cùng với logarit “thông dụng” cơ số 10.
`;

export const LATEX_MATH1_TERMS = String.raw`% ==========================================================================
% PHỤ LỤC — THUẬT NGỮ ANH–VIỆT & 8 ĐIỂM CHÍNH
% ==========================================================================
\sectionGold{Phụ lục: Thuật ngữ \& điểm chính}

\begin{mathkeybox}
\textbf{8 điểm chính cần nhớ}
\begin{enumerate}
  \item Logarit ra đời năm 1614 từ nhu cầu thực tế: giải phóng nhà khoa học khỏi các phép
        nhân, chia, khai căn số lớn.
  \item Hạt giống ý tưởng: (i) quy tắc prosthaphaeresis biến tích thành tổng/hiệu;
        (ii) tương ứng cấp số nhân $\leftrightarrow$ cấp số cộng của Stifel (1544).
  \item Đột phá của Napier: mở rộng số mũ từ số nguyên sang dải liên tục --- mọi số dương
        thành lũy thừa của một “công bội” cố định.
  \item Mỗi phép toán hạ một bậc: nhân/chia $\to$ cộng/trừ số mũ; lũy thừa/căn $\to$
        nhân/chia số mũ.
  \item Chọn công bội $1-10^{-7}$ vì chia đơn vị thành $10^7$ phần (quy ước bán kính lượng
        giác) để tránh phân số thập phân.
  \item Bốn bảng liên tiếp (101 $\to$ 51 $\to$ 21 $\to$ 68$\times$ mục) dựng tay trong 20 năm
        (1594--1614), dừng ở $\approx \tfrac{1}{2} \cdot 10^7$.
  \item Tên gọi “logarithm” = “số tỉ lệ”; định nghĩa gốc $N = 10^7(1-10^{-7})^L$ khác định
        nghĩa hiện đại $N = b^L$ (Euler, 1728).
  \item Chuẩn hóa lại cho thấy $(1-10^{-7})^{10^{7}} \approx 1/e$: Napier vô tình đi sát số $e$
        nhưng chưa hề có khái niệm cơ số.
\end{enumerate}
\end{mathkeybox}

\begin{center}
\begin{tabular}{@{}lp{10cm}@{}}
\toprule
\textbf{Thuật ngữ} & \textbf{Nghĩa Việt} \\
\midrule
logarithm & logarit --- “số tỉ lệ”: số mũ $L$ trong hệ thức $N = \text{cơ số}^{L}$ \\
base & cơ số --- số cố định $b$ trong $N = b^L$ (khái niệm xuất hiện muộn, sau Napier) \\
geometric progression & cấp số nhân --- dãy có tỉ số cố định giữa các số hạng liên tiếp \\
arithmetic progression & cấp số cộng --- dãy có hiệu cố định giữa các số hạng liên tiếp \\
common ratio & công bội --- tỉ số cố định của cấp số nhân \\
exponent / index & số mũ / chỉ số \\
prosthaphaeresis & phép prosthaphaeresis --- biến tích thành tổng/hiệu bằng công thức lượng giác \\
Napierian logarithm & logarit Napier --- theo định nghĩa gốc (giảm khi số tăng) \\
common logarithm & logarit thập phân --- logarit cơ số 10 (Briggs phổ biến) \\
decimal fraction & phân số thập phân --- còn mới mẻ thời Napier (Simon Stevin quảng bá) \\
unit radius & bán kính đơn vị --- quy ước lượng giác chia thành $10^7$ phần \\
limit & giới hạn --- $e = \lim (1+1/n)^n$ khi $n \to \infty$ \\
\bottomrule
\end{tabular}
\end{center}

\textit{Ghi chú nguồn (tóm lược):} trích dẫn mở đầu theo G. A. Gibson, “Napier and the
Invention of Logarithms” (1914); gia phả theo Mark Napier (1834); giai thoại theo P. Hume
Brown (1915); luật số mũ thế kỷ XVI xem D. E. Smith (1929); ký hiệu số mũ âm/phân số phổ biến
nhờ Wallis và Newton (1676); phân số thập phân do Simon Stevin (1548--1620) quảng bá; dặn dò
cách tính bảng lấy từ \textit{A Source Book in Mathematics} (D. E. Smith, 1929).
`;

export const FULL_LATEX_DOCUMENT_MATH1 = [
  LATEX_PREAMBLE_MATH1,
  String.raw`\begin{document}`,
  String.raw`\title{\textbf{Toán học --- e: Câu chuyện một con số}\\[4pt]
  \large Chương 1: John Napier, 1614\\[2pt]
  \normalsize Bản tiếng Việt diễn giải chi tiết (Eli Maor, Princeton University Press, 1994)}
\author{}
\date{}
\maketitle
\thispagestyle{fancy}`,
  LATEX_MATH1_S1,
  LATEX_MATH1_S2,
  LATEX_MATH1_S3,
  LATEX_MATH1_S4,
  LATEX_MATH1_S5,
  LATEX_MATH1_S6,
  LATEX_MATH1_S7,
  LATEX_MATH1_S8,
  LATEX_MATH1_TERMS,
  String.raw`\end{document}`,
].join('\n');

export const LATEX_SECTIONS_MATH1: LatexSectionItemMath1[] = [
  {
    id: 'full',
    pageNumber: 'Cả chương',
    title: 'Toàn bộ Chương 1: John Napier, 1614',
    subtitle: 'Bản LaTeX đầy đủ — 8 mục + phụ lục thuật ngữ & điểm chính',
    latexCode: FULL_LATEX_DOCUMENT_MATH1,
  },
  {
    id: 's1',
    pageNumber: 'Mục 1',
    title: 'Một tác giả không ai ngờ tới',
    subtitle: 'Tiểu sử Napier: Merchiston, St. Andrews, tôn giáo, phát minh & giai thoại',
    latexCode: LATEX_MATH1_S1,
  },
  {
    id: 's2',
    pageNumber: 'Mục 2',
    title: 'Thời đại đòi hỏi một cỗ máy tính toán',
    subtitle: 'Copernicus, Magellan, Mercator, Galileo, Kepler',
    latexCode: LATEX_MATH1_S2,
  },
  {
    id: 's3',
    pageNumber: 'Mục 3',
    title: 'Hai hạt giống của ý tưởng',
    subtitle: 'Prosthaphaeresis + cấp số nhân/cấp số cộng của Stifel (kèm TikZ)',
    latexCode: LATEX_MATH1_S3,
  },
  {
    id: 's4',
    pageNumber: 'Mục 4',
    title: 'Ý tưởng trung tâm: hạ mỗi phép toán một bậc',
    subtitle: 'Ví dụ cơ số 2: 8×32 = 256; 4⁵ = 1024',
    latexCode: LATEX_MATH1_S4,
  },
  {
    id: 's5',
    pageNumber: 'Mục 5',
    title: 'Chọn công bội 1 − 10⁻⁷',
    subtitle: 'Chia đơn vị thành 10⁷ phần để tránh phân số thập phân',
    latexCode: LATEX_MATH1_S5,
  },
  {
    id: 's6',
    pageNumber: 'Mục 6',
    title: 'Hai mươi năm giấy và bút (1594–1614)',
    subtitle: 'Bốn bảng: 101 → 51 → 21 → 68 mục, dừng ở ≈ ½·10⁷',
    latexCode: LATEX_MATH1_S6,
  },
  {
    id: 's7',
    pageNumber: 'Mục 7',
    title: 'Đặt tên cho tạo vật: “logarithm”',
    subtitle: 'N = 10⁷(1−10⁻⁷)^L so với định nghĩa hiện đại N = b^L (Euler, 1728)',
    latexCode: LATEX_MATH1_S7,
  },
  {
    id: 's8',
    pageNumber: 'Mục 8',
    title: 'Trên sợi tóc của số e',
    subtitle: '(1−10⁻⁷)^10⁷ ≈ 1/e — Napier vô tình đi sát số e',
    latexCode: LATEX_MATH1_S8,
  },
  {
    id: 'terms',
    pageNumber: 'Phụ lục',
    title: 'Thuật ngữ Anh–Việt & 8 điểm chính',
    subtitle: 'Bảng thuật ngữ 12 mục + tóm tắt chương + ghi chú nguồn',
    latexCode: LATEX_MATH1_TERMS,
  },
];
