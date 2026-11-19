import React, { useState } from 'react';
import {
  Figure17_1,
  Figure17_2,
  Figure17_3,
  Figure17_4,
  Figure17_5,
  Figure17_6,
  Figure17_7,
  Figure17_8,
} from './TextbookFigures';
import { CheckCircle2, ChevronDown, ChevronUp, Code2 } from 'lucide-react';

interface QuestionBoxProps {
  number: number;
  children: React.ReactNode;
  solution?: React.ReactNode;
  showSolutionsGlobal?: boolean;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  number,
  children,
  solution,
  showSolutionsGlobal = false,
}) => {
  const [open, setOpen] = useState(false);
  const isShown = showSolutionsGlobal || open;

  return (
    <div className="my-4 font-sans">
      {/* Top-left brown tab exactly like the textbook QUESTION tab */}
      <div className="inline-block bg-[#c6b299] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-t-md shadow-xs">
        CÂU HỎI (QUESTION)
      </div>
      <div className="bg-[#f4efe6] border border-[#e6dec8] rounded-b-md rounded-tr-md p-3.5 text-[13px] leading-relaxed text-stone-800 shadow-xs">
        <div className="flex gap-2">
          <span className="font-bold text-stone-900 shrink-0">{number}</span>
          <div className="space-y-1.5 w-full">{children}</div>
        </div>
        {solution && (
          <div className="mt-2.5 pt-2 border-t border-stone-300/70">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 hover:text-red-700 transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              {isShown ? 'Ẩn hướng dẫn giải câu ' + number : 'Xem hướng dẫn giải câu ' + number}
              {isShown ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {isShown && (
              <div className="mt-2 p-2.5 bg-white/90 rounded border border-amber-200/80 text-xs text-stone-800 space-y-1">
                {solution}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface CalloutBoxProps {
  title: string;
  children: React.ReactNode;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ title, children }) => (
  <div className="my-4 rounded-md overflow-hidden border border-[#eebbb7] bg-[#f8d7d4] font-sans shadow-xs">
    <div className="bg-[#dd3645] text-white font-bold text-xs uppercase tracking-wide px-3.5 py-2">
      {title}
    </div>
    <div className="p-3.5 text-[13px] leading-relaxed text-stone-800 space-y-2.5">
      {children}
    </div>
  </div>
);

interface PageWrapperProps {
  pageNumber: number;
  side: 'left' | 'right';
  onViewPageLatex?: (pageId: string) => void;
  pageId: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  pageNumber,
  side,
  onViewPageLatex,
  pageId,
  children,
}) => (
  <section
    id={`page-${pageNumber}`}
    className="relative bg-[#fbfaf8] border border-stone-300 shadow-lg rounded-sm overflow-hidden print:shadow-none print:border-stone-200 print:break-after-page"
  >
    {/* Top subtle running bar */}
    <div className="flex items-center justify-between px-6 py-2 bg-stone-100/90 border-b border-stone-200 text-xs font-sans text-stone-500">
      <span>Cambridge International AS &amp; A Level Chemistry — Bản dịch Tiếng Việt</span>
      <div className="flex items-center gap-3">
        {onViewPageLatex && (
          <button
            type="button"
            onClick={() => onViewPageLatex(pageId)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-0.5 rounded transition-colors cursor-pointer print:hidden"
          >
            <Code2 className="w-3.5 h-3.5" />
            Mã LaTeX Trang {pageNumber}
          </button>
        )}
        <span className="font-bold text-stone-700">Trang {pageNumber}</span>
      </div>
    </div>

    {/* Outer Margin Page Number Badge like original scan */}
    <div
      className={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 w-9 h-7 bg-[#596a76] text-white font-sans font-bold text-xs shadow ${
        side === 'left' ? 'left-0 rounded-r-sm' : 'right-0 rounded-l-sm'
      }`}
    >
      {pageNumber}
    </div>

    <div className="p-5 sm:p-8 md:px-11 md:py-8 text-[14px] leading-[1.68] text-stone-800 font-serif">
      {children}
    </div>
  </section>
);

export interface TextbookPagesProps {
  selectedPageFilter: string;
  showSolutionsGlobal: boolean;
  onViewPageLatex: (pageId: string) => void;
}

export const TextbookPages: React.FC<TextbookPagesProps> = ({
  selectedPageFilter,
  showSolutionsGlobal,
  onViewPageLatex,
}) => {
  const shouldShow = (pageId: string) =>
    selectedPageFilter === 'all' || selectedPageFilter === pageId;

  return (
    <div className="space-y-8">
      {/* ===================================================================
          PAGE 226
      =================================================================== */}
      {shouldShow('p226') && (
        <PageWrapper
          pageNumber={226}
          side="left"
          pageId="p226"
          onViewPageLatex={onViewPageLatex}
        >
          {/* Red Introduction Banner */}
          <div className="bg-[#d33427] text-white rounded-sm p-5 sm:p-6 mb-7 shadow-sm font-sans">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-6 space-y-2.5">
                <h1 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white">
                  Giới thiệu (Introduction)
                </h1>
                <p className="text-[13.5px] leading-relaxed text-white/95">
                  Ethanol, C<sub>2</sub>H<sub>5</sub>OH, là chất được sử dụng rộng rãi nhất trong dãy đồng đẳng của alcohol. Đường chiết xuất từ các loại cây trồng như cây mía và củ cải đường có thể được lên men nhờ nấm men (<em>yeast</em>) để sản xuất ethanol. Ethanol là một ‘nhiên liệu sinh học’ (<em>biofuel</em>) và cháy với ngọn lửa sạch. Quá trình này ngày càng trở nên quan trọng khi nguồn cung dầu thô của chúng ta suy giảm và cần có những nhiên liệu sinh học sạch hơn, dễ sản xuất hơn để thay thế cho xăng và dầu diesel.
                </p>
              </div>
              <div className="md:col-span-6">
                <Figure17_1 />
              </div>
            </div>
          </div>

          {/* Two-Column Body of Page 226 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2.5 leading-snug">
                Dãy đồng đẳng của alcohol
              </h2>
              <p className="mb-3 text-justify">
                Alcohol là những phân tử hữu cơ có chứa nhóm hydroxyl, —OH. Khi một nhóm hydroxyl thay thế một nguyên tử hydrogen trong phân tử alkane, công thức tổng quát của chúng là C<sub><em>n</em></sub>H<sub>2<em>n</em>+1</sub>OH. Các alcohol được gọi tên bằng cách thêm hậu tố ‘-anol’ vào gốc tên alkane tương ứng. Ví dụ, CH<sub>3</sub>OH được gọi là methanol. Đối với các phân tử alcohol có từ ba nguyên tử carbon trở lên, vị trí của nhóm hydroxyl được biểu thị bằng cách chèn một chữ số để chỉ nguyên tử carbon nào liên kết với nhóm OH. Hình 17.2 đưa ra một số ví dụ.
              </p>

              <Figure17_2 />

              <p className="mb-3 text-justify">
                Propan-1-ol được phân loại là một <strong className="text-[#d33427] font-sans">alcohol bậc một</strong> (<em>primary alcohol</em>). Nguyên tử carbon liên kết với nhóm —OH chỉ gắn trực tiếp với một nguyên tử carbon khác (nhóm alkyl). Propan-2-ol là một <strong className="text-[#d33427] font-sans">alcohol bậc hai</strong> (<em>secondary alcohol</em>) vì nguyên tử carbon liên kết với nhóm —OH được gắn với hai nguyên tử carbon khác (các nhóm alkyl). Khi có ba nhóm alkyl cùng gắn vào, 2-methylpropan-2-ol là một ví dụ về <strong className="text-[#d33427] font-sans">alcohol bậc ba</strong> (<em>tertiary alcohol</em>).
              </p>
              <p className="text-justify">
                Các alcohol có nhiệt độ sôi cao hơn so với dự kiến khi đem so sánh với các phân tử hữu cơ khác có
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="mb-3 text-justify">
                khối lượng phân tử tương đương. Ngay cả methanol, alcohol có khối lượng mol nhỏ nhất, cũng là một chất lỏng ở nhiệt độ phòng. Điều này xảy ra là do có liên kết hydrogen giữa các phân tử alcohol (xem trang 64). Liên kết hydrogen cũng giải thích tại sao các phân tử alcohol nhỏ lại hòa trộn và tan tốt trong nước đến vậy.
              </p>

              <QuestionBox
                number={1}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a i:</strong> Nguyên tử O có độ âm điện lớn hơn H nên liên kết O—H phân cực mạnh (O<sup>δ−</sup>—H<sup>δ+</sup>). Nguyên tử H<sup>δ+</sup> của phân tử ethanol này hút tĩnh điện với cặp electron tự do trên nguyên tử O<sup>δ−</sup> của phân tử ethanol kế cận tạo thành liên kết hydrogen.
                    </p>
                    <p>
                      <strong>a ii:</strong> Nhóm —OH của ethanol tạo liên kết hydrogen trực tiếp với các phân tử H<sub>2</sub>O (giữa H<sup>δ+</sup> của ethanol và O<sup>δ−</sup> của nước, cũng như giữa O<sup>δ−</sup> của ethanol và H<sup>δ+</sup> của nước).
                    </p>
                    <p>
                      <strong>b:</strong> Trong hexan-1-ol, mạch hydrocarbon C<sub>6</sub>H<sub>13</sub>— dài và không phân cực (kị nước) chiếm ưu thế, cản trở sự tạo liên kết hydrogen với nước so với gốc C<sub>2</sub>H<sub>5</sub>— nhỏ gọn của ethanol.
                    </p>
                  </>
                }
              >
                <div>
                  <strong>a</strong> Giải thích sự hình thành liên kết hydrogen:
                  <ol className="list-none pl-4 mt-1 space-y-0.5">
                    <li>
                      <strong>i</strong> giữa các phân tử ethanol với nhau
                    </li>
                    <li>
                      <strong>ii</strong> giữa các phân tử ethanol và phân tử nước.
                    </li>
                  </ol>
                </div>
                <div>
                  <strong>b</strong> Ethanol hòa tan trong nước ở mọi tỉ lệ nhưng hexan-1-ol lại ít tan hơn trong nước. Tại sao lại như vậy?
                </div>
              </QuestionBox>

              <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-1.5">
                Các phản ứng của alcohol
              </h2>
              <h3 className="text-base font-bold text-stone-600 font-sans mb-2">
                1 Phản ứng cháy (Combustion)
              </h3>
              <p className="mb-3 text-justify">
                Khi được châm lửa, các alcohol phản ứng với oxygen trong không khí. Sản phẩm của phản ứng cháy hoàn toàn là carbon dioxide và nước. Ví dụ, ethanol cháy với ngọn lửa màu xanh sạch khi được cung cấp dồi dào không khí:
              </p>

              {/* Reaction Equation Box */}
              <div className="my-3 py-2.5 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-xs sm:text-[13px] text-center space-y-2">
                <div>
                  alcohol + oxygen <span className="px-1">⟶</span> carbon dioxide + nước
                </div>
                <div className="flex items-start justify-center gap-3 font-medium">
                  <div className="flex flex-col items-center">
                    <span>C<sub>2</sub>H<sub>5</sub>OH</span>
                    <span className="text-[10px] text-stone-500">ethanol</span>
                  </div>
                  <span>+</span>
                  <span>3O<sub>2</sub></span>
                  <span className="px-1">⟶</span>
                  <span>2CO<sub>2</sub></span>
                  <span>+</span>
                  <span>3H<sub>2</sub>O</span>
                </div>
              </div>

              <p className="text-justify">
                Ethanol đôi khi được sử dụng tại Brazil làm nhiên liệu cho ô tô. Điều này giúp làm giảm việc sử dụng xăng dầu.
              </p>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 227
      =================================================================== */}
      {shouldShow('p227') && (
        <PageWrapper
          pageNumber={227}
          side="right"
          pageId="p227"
          onViewPageLatex={onViewPageLatex}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            {/* Left Column */}
            <div>
              <p className="mb-3 text-justify">
                Một quốc gia như Brazil có trữ lượng dầu mỏ ít nhưng lại có thể trồng rất nhiều mía; mía có thể được lên men để sản xuất ethanol dùng làm nhiên liệu ở dạng nguyên chất hoặc pha trộn với các loại nhiên liệu khác (Hình 17.3). Bên cạnh việc bảo tồn nguồn cung dầu thô đang suy giảm của thế giới, cây mía còn có ưu điểm là hấp thụ khí CO<sub>2</sub> trong quá trình sinh trưởng. Mặc dù lượng CO<sub>2</sub> này thực chất được trả lại bầu khí quyển trong quá trình lên men và khi đốt cháy ethanol, nhưng các <strong className="text-[#d33427] font-sans">nhiên liệu sinh học</strong> (<em>biofuels</em>) như ethanol vẫn được coi là ‘trung hòa carbon’ (<em>carbon neutral</em>). Nhìn chung, về mặt lý thuyết, chúng không làm gia tăng lượng khí nhà kính trong không khí. Ngay cả khi chúng ta tính đến lượng CO<sub>2</sub> sinh ra trong quá trình trồng trọt, thu hoạch, vận chuyển và chế biến mía, việc sử dụng ‘ethanol sinh học’ (<em>bio-ethanol</em>) làm nhiên liệu vẫn tốt cho môi trường hơn nhiều so với xăng hoặc dầu diesel lấy từ dầu thô.
              </p>

              <Figure17_3 />

              <p className="mb-3 text-justify">
                Ethanol được sử dụng làm dung môi cũng như làm nhiên liệu. Chúng ta thường dùng nó dưới dạng ‘cồn công nghiệp’ (<em>methylated spirits</em>), chứa khoảng 90% ethanol.
              </p>

              <QuestionBox
                number={2}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a i (propan-1-ol):</strong> 2C<sub>3</sub>H<sub>7</sub>OH + 9O<sub>2</sub> ⟶ 6CO<sub>2</sub> + 8H<sub>2</sub>O
                    </p>
                    <p>
                      <strong>a ii (butan-1-ol):</strong> C<sub>4</sub>H<sub>9</sub>OH + 6O<sub>2</sub> ⟶ 4CO<sub>2</sub> + 5H<sub>2</sub>O
                    </p>
                    <p>
                      <strong>b:</strong> Sản phẩm của quá trình lên men kị khí glucose là <strong>ethanol</strong> và <strong>carbon dioxide</strong>.
                    </p>
                  </>
                }
              >
                <div>
                  <strong>a</strong> Viết phương trình hóa học đã cân bằng cho phản ứng cháy hoàn toàn của:
                  <ol className="list-none pl-4 mt-1 space-y-0.5">
                    <li>
                      <strong>i</strong> propan-1-ol
                    </li>
                    <li>
                      <strong>ii</strong> butan-1-ol.
                    </li>
                  </ol>
                </div>
                <div>
                  <strong>b</strong> Glucose có thể được lên men bằng nấm men trong điều kiện kị khí. Hãy gọi tên các sản phẩm của phản ứng.
                </div>
              </QuestionBox>

              <h3 className="text-base font-bold text-stone-600 font-sans mt-4 mb-2">
                2 Phản ứng thế tạo thành halogenoalkane
              </h3>
              <p className="text-justify">
                Trong phản ứng thế này với một hydrogen halide, chẳng hạn như hydrogen chloride, nhóm —OH trong alcohol bị thay thế bởi một nguyên tử halogen để tạo ra một halogenoalkane (dẫn xuất halogen). Nguyên tử carbon liên kết với nhóm hydroxyl trong alcohol sẽ mang một phần điện tích dương (do oxygen có độ âm điện lớn hơn carbon). Điều này làm cho nguyên tử carbon
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="mb-3 text-justify">
                dễ bị tấn công bởi tác nhân nucleophile. Sự tấn công ban đầu vào alcohol được thực hiện bởi nguyên tử halogen mang một phần điện tích âm trong phân tử hydrogen halide:
              </p>

              <div className="my-3 py-3 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-xs sm:text-[13px] space-y-2.5">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-mono text-sm">
                    <sup className="text-[#d33427] font-bold">δ+</sup>H —⇀ <sup className="text-[#d33427] font-bold">δ−</sup>X
                  </span>
                  <span className="text-stone-600">trong đó X = nguyên tử halogen</span>
                </div>
                <div className="text-center font-medium">
                  alcohol + hydrogen halide ⟶ halogenoalkane + nước
                </div>
                <div className="text-left text-stone-600">Ví dụ:</div>
                <div className="flex items-start justify-center gap-2 font-medium">
                  <div className="flex flex-col items-center">
                    <span>CH<sub>3</sub>CH<sub>2</sub>OH</span>
                    <span className="text-[10px] text-stone-500">ethanol</span>
                  </div>
                  <span>+ HCl ⟶</span>
                  <div className="flex flex-col items-center">
                    <span>CH<sub>3</sub>CH<sub>2</sub>Cl</span>
                    <span className="text-[10px] text-stone-500">chloroethane</span>
                  </div>
                  <span>+ H<sub>2</sub>O</span>
                </div>
              </div>

              <p className="mb-2 text-justify">
                Khí hydrogen chloride khô dùng cho phản ứng này có thể được điều chế <em>tại chỗ</em> (<em>in situ</em> – ngay trong bình phản ứng). Sodium chloride và sulfuric acid đặc được sử dụng cho mục đích này:
              </p>
              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium">
                NaCl + H<sub>2</sub>SO<sub>4</sub> ⟶ NaHSO<sub>4</sub> + HCl
              </div>

              <CalloutBox title="HALOGEN HÓA MỘT ALCOHOL (HALOGENATION OF AN ALCOHOL)">
                <p className="text-justify">
                  Alcohol được đun nóng hồi lưu (xem bộ dụng cụ ở trang 219) cùng với các chất phản ứng để điều chế halogenoalkane. Sau đó, halogenoalkane tạo thành có thể được chưng cất tách ra khỏi hỗn hợp phản ứng và thu lấy dưới dạng các giọt chất lỏng như dầu lắng dưới lớp nước (Hình 17.4).
                </p>
                <Figure17_4 />
              </CalloutBox>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 228
      =================================================================== */}
      {shouldShow('p228') && (
        <PageWrapper
          pageNumber={228}
          side="left"
          pageId="p228"
          onViewPageLatex={onViewPageLatex}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            {/* Left Column */}
            <div>
              <p className="mb-2.5 text-justify">
                Sulfur dichloride oxide, SOCl<sub>2</sub>, cũng có thể được sử dụng để thế một nguyên tử chlorine vào phân tử alcohol, như minh họa dưới đây:
              </p>
              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium">
                C<sub>2</sub>H<sub>5</sub>OH + SOCl<sub>2</sub> ⟶ C<sub>2</sub>H<sub>5</sub>Cl + HCl + SO<sub>2</sub>
              </div>
              <p className="mb-2.5 text-justify">
                Lưu ý rằng trong phản ứng này, hai sản phẩm phụ của phản ứng (HCl và SO<sub>2</sub>) đều là chất khí. Chúng thoát ra khỏi hỗn hợp phản ứng, để lại halogenoalkane mà không cần phải chưng cất tách ra như trong phản ứng với hydrogen halide.
              </p>
              <p className="mb-2 text-justify">
                Chúng ta cũng có thể sử dụng các phosphorus halide để cung cấp các nguyên tử halogen cho phản ứng thế này.
              </p>
              <p className="mb-2 text-justify">
                Đối với các chloroalkane, ta có thể dùng phosphorus(V) chloride ở trạng thái rắn, PCl<sub>5</sub>:
              </p>
              <div className="my-2.5 py-2.5 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium flex items-center justify-center gap-2 flex-wrap">
                <span>C<sub>2</sub>H<sub>5</sub>OH + PCl<sub>5</sub></span>
                <span className="inline-flex flex-col items-center text-[10px] text-stone-600 leading-none">
                  <span>nhiệt độ phòng</span>
                  <span className="text-sm">――――――⟶</span>
                </span>
                <span>C<sub>2</sub>H<sub>5</sub>Cl + HCl + POCl<sub>3</sub></span>
              </div>
              <p className="mb-2.5 text-justify">
                Sự giải phóng khí hydrogen chloride có tính acid từ phản ứng này có thể được dùng làm phép thử nhận biết nhóm hydroxyl. Khí HCl gây ra hiện tượng ‘khói trắng ẩm’ (<em>steamy fumes</em>) có tính acid quan sát được.
              </p>
              <p className="mb-2.5 text-justify">
                Phosphorus(III) chloride cũng có thể được dùng để halogen hóa một alcohol, nhưng phản ứng này đòi hỏi phải đun nóng.
              </p>
              <p className="mb-2 text-justify">
                Đối với các bromoalkane và iodoalkane, ta có thể điều chế phosphorus(III) halide, PBr<sub>3</sub> hoặc PI<sub>3</sub>, <em>tại chỗ</em> (<em>in situ</em>) bằng cách sử dụng phosphorus đỏ và bromine hoặc iodine. Các chất này được đun ấm cùng với alcohol. Ví dụ:
              </p>
              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium flex items-start justify-center gap-2">
                <span>3C<sub>2</sub>H<sub>5</sub>OH + PI<sub>3</sub> ⟶</span>
                <div className="flex flex-col items-center">
                  <span>3C<sub>2</sub>H<sub>5</sub>I</span>
                  <span className="text-[10px] text-stone-500">iodoethane</span>
                </div>
                <span>+ H<sub>3</sub>PO<sub>3</sub></span>
              </div>

              <QuestionBox
                number={3}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a:</strong> C<sub>2</sub>H<sub>5</sub>OH + HBr ⟶ C<sub>2</sub>H<sub>5</sub>Br + H<sub>2</sub>O
                    </p>
                    <p>
                      <strong>b:</strong> Hóa chất: NaBr (hoặc KBr) tinh thể và H<sub>2</sub>SO<sub>4</sub> đặc (hoặc P đỏ + Br<sub>2</sub>); điều kiện: đun nóng hồi lưu (<em>heat under reflux</em>).
                    </p>
                    <p>
                      <strong>c:</strong> Phản ứng thế nucleophile (<em>nucleophilic substitution</em>).
                    </p>
                  </>
                }
              >
                <div>
                  <strong>a</strong> Viết phương trình hóa học đã cân bằng biểu diễn phản ứng giữa ethanol và hydrogen bromide.
                </div>
                <div>
                  <strong>b</strong> Các hóa chất và điều kiện được sử dụng cho phản ứng này là gì?
                </div>
                <div>
                  <strong>c</strong> Chúng ta gọi phản ứng này thuộc loại phản ứng gì?
                </div>
              </QuestionBox>

              <h3 className="text-base font-bold text-stone-600 font-sans mt-4 mb-2">
                3 Phản ứng với kim loại sodium
              </h3>
              <p className="mb-2 text-justify">
                Trong phản ứng với các hydrogen halide, liên kết C—O trong alcohol bị phân cắt. Tuy nhiên, ở một số phản ứng khác, liên kết O—H trong alcohol mới bị phân cắt. Phản ứng với kim loại sodium là một ví dụ:
              </p>
              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[12.5px] font-medium flex items-start justify-center gap-2 flex-wrap">
                <div className="flex flex-col items-center">
                  <span>2C<sub>2</sub>H<sub>5</sub>OH</span>
                  <span className="text-[10px] text-stone-500">ethanol</span>
                </div>
                <span>+</span>
                <div className="flex flex-col items-center">
                  <span>2Na</span>
                  <span className="text-[10px] text-stone-500">sodium</span>
                </div>
                <span>⟶</span>
                <div className="flex flex-col items-center">
                  <span>2C<sub>2</sub>H<sub>5</sub>O<sup>−</sup>Na<sup>+</sup></span>
                  <span className="text-[10px] text-stone-500">sodium ethoxide</span>
                </div>
                <span>+</span>
                <div className="flex flex-col items-center">
                  <span>H<sub>2</sub></span>
                  <span className="text-[10px] text-stone-500">hydrogen</span>
                </div>
              </div>
              <p className="text-justify">
                Phản ứng này tương tự như phản ứng của sodium với nước, nhưng diễn ra êm dịu hơn. Trong cả hai trường hợp, khí hydrogen đều thoát ra và
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="mb-2.5 text-justify">
                một hợp chất ion mang tính base được tạo thành. Đối với ethanol, nếu làm bay hơi hết lượng ethanol dư sau phản ứng, một chất rắn kết tinh màu trắng sẽ còn lại. Đó chính là sodium ethoxide.
              </p>
              <p className="mb-2 text-justify">
                Các alcohol khác cũng phản ứng theo cách tương tự với sodium. Ví dụ, propan-1-ol sẽ tạo ra sodium propoxide cùng với khí hydrogen.
              </p>
              <p className="mb-1">Tổng quát:</p>
              <div className="my-2 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium">
                alcohol + sodium ⟶ sodium alkoxide + hydrogen
              </div>
              <p className="mb-3 text-justify">
                Chúng ta nhận thấy rằng mạch hydrocarbon càng dài thì phản ứng diễn ra càng kém mãnh liệt.
              </p>

              <Figure17_5 />

              <QuestionBox
                number={4}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a:</strong> Mẩu kim loại lithium sủi bọt khí không màu (H<sub>2</sub>), mẩu lithium tan dần và di chuyển nhẹ trong chất lỏng.
                    </p>
                    <p>
                      <strong>b:</strong> Lithium propoxide và khí hydrogen.
                    </p>
                    <p>
                      <strong>c:</strong> Phản ứng với sodium sẽ diễn ra nhanh hơn và sủi bọt khí mãnh liệt hơn so với lithium (vì tính khử của Na mạnh hơn Li).
                    </p>
                  </>
                }
              >
                <div>
                  Lithium phản ứng với các alcohol theo cách tương tự như sodium. Một mẩu nhỏ kim loại lithium được thả vào mặt kính đồng hồ có chứa propan-1-ol.
                </div>
                <ol className="list-none pl-2 space-y-1">
                  <li>
                    <strong>a</strong> Bạn sẽ quan sát thấy hiện tượng gì?
                  </li>
                  <li>
                    <strong>b</strong> Gọi tên các sản phẩm của phản ứng.
                  </li>
                  <li>
                    <strong>c</strong> Bạn dự đoán sẽ thấy sự khác biệt gì nếu sử dụng sodium thay cho lithium trong phản ứng này?
                  </li>
                </ol>
              </QuestionBox>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 229
      =================================================================== */}
      {shouldShow('p229') && (
        <PageWrapper
          pageNumber={229}
          side="right"
          pageId="p229"
          onViewPageLatex={onViewPageLatex}
        >
          <h3 className="text-lg font-bold text-stone-600 font-sans mb-2">
            4 Phản ứng ester hóa (Esterification)
          </h3>

          <CalloutBox title="ALCOHOL CỘNG CARBOXYLIC ACID (ALCOHOL PLUS CARBOXYLIC ACID)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left Column inside Callout */}
              <div className="space-y-2.5">
                <p className="text-justify">
                  Một phản ứng khác có liên quan đến sự phân cắt liên kết O—H trong các alcohol là <strong className="text-[#d33427]">phản ứng ester hóa</strong> (<em>esterification</em>), tức là phản ứng điều chế các ester. Phản ứng ester hóa thường diễn ra giữa một alcohol và một carboxylic acid. Phương trình tổng quát là:
                </p>
                <div className="py-2 px-2 bg-white/75 rounded border border-rose-200 text-center text-xs font-medium flex items-center justify-center gap-1.5 flex-wrap">
                  <span>carboxylic acid + alcohol</span>
                  <span className="inline-flex flex-col items-center text-[10px] leading-none">
                    <span>xúc tác acid</span>
                    <span className="text-sm">⇌</span>
                  </span>
                  <span>ester + nước</span>
                </div>
                <p className="text-justify">
                  Để phản ứng này xảy ra, carboxylic acid và alcohol được đun nóng hồi lưu với một <strong>chất xúc tác acid mạnh</strong> (thường là dung dịch sulfuric acid đặc). Phản ứng này là phản ứng thuận nghịch, do đó một trạng thái cân bằng có thể được thiết lập với sự hiện diện của tất cả các chất tham gia và sản phẩm như trong phương trình tổng quát.
                </p>
                <p className="text-justify">
                  Các ester tạo thành thường có mùi thơm ngọt của trái cây. Chúng có mặt tự nhiên trong các loại quả, và chúng ta sử dụng chúng trong các hương liệu nhân tạo và nước hoa (Hình 17.6). Chúng cũng được dùng làm dung môi, ví dụ như trong nước tẩy sơn móng tay.
                </p>
                <p>Dưới đây là một ví dụ về phản ứng ester hóa:</p>

                {/* Structural Equation for Ethyl Ethanoate */}
                <div className="p-2.5 bg-white/85 rounded border border-rose-200 text-xs font-mono text-center overflow-x-auto">
                  <div className="flex items-center justify-center gap-2 min-w-[300px]">
                    <div className="flex flex-col items-center">
                      <span className="py-3">C<sub>2</sub>H<sub>5</sub>OH</span>
                      <span className="font-sans text-[10px] text-stone-600">ethanol</span>
                    </div>
                    <span>+</span>
                    <div className="flex flex-col items-center">
                      <span className="leading-tight">
                        &nbsp;&nbsp;O<br />
                        &nbsp;‖<br />
                        CH<sub>3</sub>C—OH
                      </span>
                      <span className="font-sans text-[10px] text-stone-600 mt-1">ethanoic acid</span>
                    </div>
                    <div className="flex flex-col items-center text-[10px]">
                      <span>H<sub>2</sub>SO<sub>4</sub></span>
                      <span className="text-base leading-none">⇌</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="leading-tight">
                        &nbsp;&nbsp;O<br />
                        &nbsp;‖<br />
                        CH<sub>3</sub>C—OC<sub>2</sub>H<sub>5</sub>
                      </span>
                      <span className="font-sans text-[10px] text-stone-600 mt-1">ethyl ethanoate</span>
                    </div>
                    <span>+</span>
                    <div className="flex flex-col items-center">
                      <span className="py-3">H<sub>2</sub>O</span>
                      <span className="font-sans text-[10px] text-stone-600">nước</span>
                    </div>
                  </div>
                </div>

                <p>Ester tạo thành được gọi là ethyl ethanoate.</p>
                <p className="text-justify">
                  Tên của ester tạo thành sẽ là gì nếu cho ethanol phản ứng với propanoic acid? Liệu nó sẽ là propyl ethanoate hay ethyl propanoate? Câu trả lời
                </p>
              </div>

              {/* Right Column inside Callout */}
              <div className="space-y-2.5">
                <Figure17_6 />
                <p className="text-justify">
                  là ethyl propanoate. Đó là bởi vì phần đầu tiên trong tên gọi của một ester xuất phát từ alcohol: trong trường hợp này là ethanol, tạo thành gốc ‘ethyl …’. Phần thứ hai xuất phát từ carboxylic acid, trong trường hợp này là propanoic acid, cho phần đuôi ‘… propanoate’, từ đó ghép lại thành tên của ester tạo thành là ‘ethyl propanoate’:
                </p>
                <div className="p-2.5 bg-white/85 rounded border border-rose-200 text-xs font-sans text-center space-y-1.5">
                  <div className="flex items-start justify-center gap-2 font-medium">
                    <div className="flex flex-col items-center">
                      <span>CH<sub>3</sub>CH<sub>2</sub>COOH</span>
                      <span className="text-[10px] text-stone-500">propanoic acid</span>
                    </div>
                    <span>+</span>
                    <div className="flex flex-col items-center">
                      <span>C<sub>2</sub>H<sub>5</sub>OH</span>
                      <span className="text-[10px] text-stone-500">ethanol</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-center gap-2 font-medium">
                    <span className="inline-flex flex-col items-center text-[10px] leading-none">
                      <span>H<sub>2</sub>SO<sub>4</sub></span>
                      <span className="text-sm">⇌</span>
                    </span>
                    <div className="flex flex-col items-center">
                      <span>CH<sub>3</sub>CH<sub>2</sub>COOC<sub>2</sub>H<sub>5</sub></span>
                      <span className="text-[10px] text-stone-500">ethyl propanoate</span>
                    </div>
                    <span>+</span>
                    <div className="flex flex-col items-center">
                      <span>H<sub>2</sub>O</span>
                      <span className="text-[10px] text-stone-500">nước</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CalloutBox>

          {/* Bottom section of Page 229: Hydrolysis of esters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start mt-5">
            <div>
              <h4 className="font-bold text-stone-900 font-sans text-[15px] mb-1.5">
                Thủy phân ester (Hydrolysis of esters)
              </h4>
              <p className="mb-2.5 text-justify">
                Các ester có thể bị thủy phân bằng cách đun nóng hồi lưu với một dung dịch acid hoặc một dung dịch base.
              </p>
              <p className="text-justify">
                Đun hồi lưu với acid đơn thuần là quá trình đảo ngược lại sự điều chế ester từ alcohol và carboxylic acid. Acid đóng vai trò làm chất xúc tác cho phản ứng. Phản ứng này có tính thuận nghịch và một hỗn hợp cân bằng sẽ được thiết lập. Trong sự thủy phân bằng môi trường acid, luôn có mặt cả chất tham gia (ester + nước) lẫn sản phẩm (carboxylic acid + alcohol) sau phản ứng. Phương trình hóa học cho phản ứng thủy phân trong môi trường acid của ester ethyl ethanoate là:
              </p>
            </div>
            <div>
              <div className="p-3 bg-stone-100/80 rounded border border-stone-200 font-mono text-xs text-center mb-3 overflow-x-auto">
                <div className="flex items-center justify-center gap-2 min-w-[290px]">
                  <span className="leading-tight">
                    &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                    &nbsp;&nbsp;&nbsp;‖<br />
                    H<sub>3</sub>C—C—O—CH<sub>2</sub>CH<sub>3</sub>
                  </span>
                  <span>+ H<sub>2</sub>O</span>
                  <span className="inline-flex flex-col items-center text-[10px] font-sans">
                    <span>H<sup>+</sup>(aq)</span>
                    <span className="text-base leading-none">⇌</span>
                  </span>
                  <span className="leading-tight">
                    &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                    &nbsp;&nbsp;&nbsp;‖<br />
                    H<sub>3</sub>C—C—O—H
                  </span>
                  <span>+ CH<sub>3</sub>CH<sub>2</sub>OH</span>
                </div>
              </div>
              <p className="text-justify">
                Tuy nhiên, khi một ester được đun hồi lưu với một dung dịch kiềm (một base tan), chẳng hạn như dung dịch sodium hydroxide, nó sẽ bị thủy phân hoàn toàn. Không giống như sự thủy phân bằng acid, đây không phải là một phản ứng thuận nghịch, do đó toàn bộ lượng ester có mặt đều có thể bị phân cắt hết khi dùng dư kiềm. Một alcohol và muối sodium của carboxylic acid được tạo thành. Phương trình hóa học cho phản ứng thủy phân trong môi trường base của ethyl ethanoate là:
              </p>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 230
      =================================================================== */}
      {shouldShow('p230') && (
        <PageWrapper
          pageNumber={230}
          side="left"
          pageId="p230"
          onViewPageLatex={onViewPageLatex}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            {/* Left Column */}
            <div>
              <div className="p-3 bg-stone-100/80 rounded border border-stone-200 font-mono text-xs text-center mb-3 overflow-x-auto">
                <div className="flex items-center justify-center gap-2 min-w-[290px]">
                  <span className="leading-tight">
                    &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                    &nbsp;&nbsp;&nbsp;‖<br />
                    H<sub>3</sub>C—C—O—CH<sub>2</sub>CH<sub>3</sub>
                  </span>
                  <span>+ NaOH ⟶</span>
                  <div className="flex flex-col items-center">
                    <span className="leading-tight">
                      &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                      &nbsp;&nbsp;&nbsp;‖<br />
                      H<sub>3</sub>C—C—O<sup>−</sup>Na<sup>+</sup>
                    </span>
                    <span className="font-sans text-[10px] text-stone-600 mt-1">
                      sodium ethanoate
                    </span>
                  </div>
                  <span>+ CH<sub>3</sub>CH<sub>2</sub>OH</span>
                </div>
              </div>

              <QuestionBox
                number={5}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a i:</strong> butyl ethanoate — <code>CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></code>
                    </p>
                    <p>
                      <strong>a ii:</strong> ethyl hexanoate — <code>CH<sub>3</sub>(CH<sub>2</sub>)<sub>4</sub>COOCH<sub>2</sub>CH<sub>3</sub></code>
                    </p>
                    <p>
                      <strong>a iii:</strong> pentyl methanoate — <code>HCOOCH<sub>2</sub>(CH<sub>2</sub>)<sub>3</sub>CH<sub>3</sub></code>
                    </p>
                  </>
                }
              >
                <div>
                  <strong>a</strong> Gọi tên ester được tạo thành trong mỗi phản ứng sau đây:
                  <ol className="list-none pl-4 mt-1 space-y-0.5">
                    <li>
                      <strong>i</strong> butan-1-ol + ethanoic acid
                    </li>
                    <li>
                      <strong>ii</strong> ethanol + hexanoic acid
                    </li>
                    <li>
                      <strong>iii</strong> pentan-1-ol và methanoic acid.
                    </li>
                  </ol>
                </div>
                <div>
                  <strong>b</strong> Viết công thức cấu tạo của mỗi ester được tạo thành ở phần <strong>a</strong>.
                </div>
              </QuestionBox>

              <h3 className="text-base font-bold text-stone-600 font-sans mt-4 mb-2">
                5 Phản ứng tách nước (Dehydration)
              </h3>
              <p className="mb-2.5 text-justify">
                Các alcohol cũng có thể tham gia các phản ứng tách (<em>elimination reactions</em>), trong đó phân tử nước bị mất đi và các alkene được tạo thành. Vì phân tử nhỏ bị tách ra khỏi phân tử alcohol là H<sub>2</sub>O, phản ứng này còn được gọi là <strong className="text-[#d33427] font-sans">phản ứng tách nước</strong> (<em>dehydration</em>).
              </p>

              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium flex items-center justify-center gap-2">
                <span>alcohol</span>
                <span className="inline-flex flex-col items-center text-[10px] text-stone-600 leading-none">
                  <span>xúc tác</span>
                  <span className="text-sm">――――⟶</span>
                </span>
                <span>alkene + nước</span>
              </div>

              <p className="mb-2.5 text-justify">
                Phản ứng diễn ra khi dẫn hơi alcohol đi qua bột chất xúc tác aluminium oxide đun nóng. Các mảnh sứ xốp hoặc đá bọt cũng làm xúc tác cho phản ứng. Ví dụ:
              </p>

              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium flex items-start justify-center gap-2">
                <div className="flex flex-col items-center">
                  <span>C<sub>2</sub>H<sub>5</sub>OH</span>
                  <span className="text-[10px] text-stone-500">ethanol</span>
                </div>
                <span className="inline-flex flex-col items-center text-[10px] text-stone-600 leading-none">
                  <span>xúc tác Al<sub>2</sub>O<sub>3</sub></span>
                  <span className="text-sm">――――――⟶</span>
                </span>
                <div className="flex flex-col items-center">
                  <span>CH<sub>2</sub>=CH<sub>2</sub></span>
                  <span className="text-[10px] text-stone-500">ethene</span>
                </div>
                <span>+</span>
                <div className="flex flex-col items-center">
                  <span>H<sub>2</sub>O</span>
                  <span className="text-[10px] text-stone-500">nước</span>
                </div>
              </div>

              <p className="mb-2">
                Hình 17.7 cho thấy cách thu lấy khí ethene được tạo thành.
              </p>

              <Figure17_7 />
            </div>

            {/* Right Column */}
            <div>
              <QuestionBox
                number={6}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a:</strong> C<sub>2</sub>H<sub>5</sub>OH <span className="text-stone-500">(H<sub>2</sub>SO<sub>4</sub> đặc, 170 °C)</span> ⟶ CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O
                    </p>
                    <p>
                      <strong>b:</strong> Sản phẩm hữu cơ tạo thành là <strong>propene</strong> (CH<sub>3</sub>CH=CH<sub>2</sub>).
                    </p>
                  </>
                }
              >
                <div>
                  Dung dịch sulfuric acid đặc hoặc phosphoric acid đặc cũng có thể được sử dụng làm chất xúc tác cho phản ứng tách nước của một alcohol. Hỗn hợp alcohol và acid đặc được đun nóng đến khoảng 170 °C. Acid đặc không bị biến đổi hóa học trong quá trình phản ứng.
                </div>
                <ol className="list-none pl-2 space-y-1">
                  <li>
                    <strong>a</strong> Viết phương trình hóa học biểu diễn sự tách nước của ethanol khi dùng sulfuric acid đặc.
                  </li>
                  <li>
                    <strong>b</strong> Nếu dùng propan-1-ol thay cho ethanol, hãy gọi tên sản phẩm hữu cơ tạo thành.
                  </li>
                </ol>
              </QuestionBox>

              <h3 className="text-base font-bold text-stone-600 font-sans mt-4 mb-2">
                6 Phản ứng oxi hóa (Oxidation)
              </h3>
              <p className="mb-2.5 text-justify">
                Ở trang 226, chúng ta đã biết cách phân loại các alcohol thành alcohol bậc một, bậc hai hoặc bậc ba. Trong nhiều phản ứng của chúng, bậc của alcohol không tạo ra sự khác biệt đối với loại sản phẩm hình thành. Trong hóa học hữu cơ, ta thường có thể khái quát hóa tính chất cho toàn bộ dãy đồng đẳng. Tuy nhiên, khi các alcohol bị oxi hóa, các sản phẩm khác nhau sẽ thu được từ alcohol bậc một, bậc hai và bậc ba.
              </p>
              <p className="mb-2.5 text-justify">
                Các alcohol có thể bị oxi hóa bởi dung dịch potassium dichromate(VI), K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, đã được acid hóa bằng dung dịch sulfuric acid loãng. Màu da cam của dung dịch là do các ion dichromate(VI), Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>(aq), gây ra. Khi các ion dichromate(VI) phản ứng với vai trò là tác nhân oxi hóa, bản thân chúng sẽ bị khử và chuyển thành các ion chromium(III), Cr<sup>3+</sup>(aq), tạo nên một dung dịch màu xanh lục. Hỗn hợp phản ứng cần được đun ấm trước khi quá trình oxi hóa diễn ra.
              </p>
              <p className="mb-2.5 text-justify">
                Sản phẩm tạo thành khi một alcohol bị oxi hóa có thể được dùng để phân biệt giữa alcohol bậc một, bậc hai và bậc ba. Bạn có thể tìm hiểu về các phép thử hóa học cho các sản phẩm này ở trang 238–239.
              </p>

              <ul className="space-y-2.5 my-3 text-justify">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 bg-[#d33427] mt-2 shrink-0" />
                  <span>
                    Đối với alcohol bậc ba, một hỗn hợp gồm alcohol bậc ba, sulfuric acid loãng và dung dịch potassium dichromate(VI) vẫn giữ nguyên màu da cam khi được đun ấm. Không có phản ứng nào xảy ra dưới những điều kiện tương đối êm dịu này.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 bg-[#d33427] mt-2 shrink-0" />
                  <span>
                    Một alcohol bậc hai, chẳng hạn như propan-2-ol, sẽ bị oxi hóa để tạo thành một ketone. Trong trường hợp này, propanone được tạo thành và hỗn hợp phản ứng chuyển sang màu xanh lục:
                  </span>
                </li>
              </ul>

              <div className="p-2.5 bg-stone-100/80 rounded border border-stone-200 font-mono text-xs text-center my-3">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="leading-tight">
                    &nbsp;&nbsp;&nbsp;&nbsp;OH<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    H<sub>3</sub>C—C—CH<sub>3</sub><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;|<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;H
                  </span>
                  <span>+ [O] ⟶</span>
                  <div className="flex flex-col items-center">
                    <span className="leading-tight">
                      &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;‖<br />
                      H<sub>3</sub>C—C—CH<sub>3</sub>
                    </span>
                    <span className="font-sans text-[10px] text-stone-600 mt-1">propanone</span>
                  </div>
                  <span>+ H<sub>2</sub>O</span>
                </div>
              </div>

              <p className="text-justify">
                Các phương trình oxi hóa này sử dụng kí hiệu [O] để biểu thị nguyên tử oxygen được cung cấp từ tác nhân oxi hóa. Bạn đã gặp dạng phương trình rút gọn này cho các phản ứng oxi hóa trước đây ở trang 198.
              </p>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 231
      =================================================================== */}
      {shouldShow('p231') && (
        <PageWrapper
          pageNumber={231}
          side="right"
          pageId="p231"
          onViewPageLatex={onViewPageLatex}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            {/* Left Column */}
            <div>
              <ul className="space-y-2 mb-3 text-justify">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 bg-[#d33427] mt-2 shrink-0" />
                  <span>
                    Đối với một alcohol bậc một, chẳng hạn như ethanol, alcohol sẽ bị oxi hóa thành một aldehyde. Ethanol bị oxi hóa thành ethanal:
                  </span>
                </li>
              </ul>

              <div className="p-2.5 bg-stone-100/80 rounded border border-stone-200 font-mono text-xs text-center my-2.5">
                <div className="flex items-center justify-center gap-2">
                  <span>CH<sub>3</sub>CH<sub>2</sub>OH + [O] ⟶</span>
                  <div className="flex flex-col items-center">
                    <span className="leading-tight">
                      &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;‖<br />
                      H<sub>3</sub>C—C—H
                    </span>
                    <span className="font-sans text-[10px] text-stone-600 mt-0.5">ethanal</span>
                  </div>
                  <span>+ H<sub>2</sub>O</span>
                </div>
              </div>

              <p className="mb-2.5 text-justify">
                Lượng ethanal tạo thành có thể tiếp tục bị oxi hóa để tạo ra ethanoic acid, một carboxylic acid. Điều này đạt được bằng cách đun hồi lưu với lượng dư dung dịch potassium dichromate(VI) đã acid hóa:
              </p>

              <div className="p-2.5 bg-stone-100/80 rounded border border-stone-200 font-mono text-xs text-center my-2.5">
                <div className="flex items-center justify-center gap-2">
                  <span className="leading-tight">
                    &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;‖<br />
                    H<sub>3</sub>C—C—H
                  </span>
                  <span>+ [O] ⟶</span>
                  <div className="flex flex-col items-center">
                    <span className="leading-tight">
                      &nbsp;&nbsp;&nbsp;&nbsp;O<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;‖<br />
                      H<sub>3</sub>C—C—OH
                    </span>
                    <span className="font-sans text-[10px] text-stone-600 mt-0.5">ethanoic acid</span>
                  </div>
                </div>
              </div>

              <CalloutBox title="PHÂN BIỆT ALCOHOL BẬC BA (DISTINGUISHING TERTIARY ALCOHOLS)">
                <p className="text-justify">
                  Nếu được cho ba mẫu alcohol chưa biết gồm một alcohol bậc một, một alcohol bậc hai và một alcohol bậc ba, ta sẽ rất dễ dàng nhận diện được alcohol bậc ba. Hình 17.8 cho thấy kết quả của việc đun ấm mỗi bậc alcohol với dung dịch potassium dichromate(VI) đã acid hóa. Chi tiết hơn về các phản ứng này được trình bày ở trang 236.
                </p>
                <Figure17_8 />
              </CalloutBox>
            </div>

            {/* Right Column */}
            <div>
              <QuestionBox
                number={7}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a:</strong> Dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> đã acid hóa bằng H<sub>2</sub>SO<sub>4</sub> loãng; đun nóng nhẹ và chưng cất tách propanal ra ngay khi vừa tạo thành.
                    </p>
                    <p>
                      <strong>b:</strong> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH + [O] ⟶ CH<sub>3</sub>CH<sub>2</sub>CHO + H<sub>2</sub>O
                    </p>
                    <p>
                      <strong>c:</strong> Dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (dư) đã acid hóa bằng H<sub>2</sub>SO<sub>4</sub> loãng; đun nóng hồi lưu (<em>reflux</em>).
                    </p>
                    <p>
                      <strong>d:</strong> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH + 2[O] ⟶ CH<sub>3</sub>CH<sub>2</sub>COOH + H<sub>2</sub>O
                    </p>
                  </>
                }
              >
                <div>
                  Propan-1-ol có thể bị oxi hóa thành propanal, CH<sub>3</sub>CH<sub>2</sub>CHO, và sau đó thành propanoic acid, CH<sub>3</sub>CH<sub>2</sub>COOH.
                </div>
                <ol className="list-none pl-2 space-y-1">
                  <li>
                    <strong>a</strong> Cần sử dụng những tác nhân và điều kiện nào để oxi hóa propan-1-ol thành propanal?
                  </li>
                  <li>
                    <strong>b</strong> Viết một phương trình hóa học đã cân bằng cho phản ứng oxi hóa này. Nguyên tử oxygen từ tác nhân oxi hóa cần được biểu diễn là [O].
                  </li>
                  <li>
                    <strong>c</strong> Cần sử dụng những tác nhân và điều kiện nào để oxi hóa propan-1-ol thành propanoic acid?
                  </li>
                  <li>
                    <strong>d</strong> Viết một phương trình hóa học đã cân bằng cho phản ứng oxi hóa này. Tương tự, hãy biểu diễn oxygen từ tác nhân oxi hóa là [O].
                  </li>
                </ol>
              </QuestionBox>

              <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-1.5">
                Carboxylic acid (Acid cacboxylic)
              </h2>
              <h3 className="text-base font-bold text-stone-600 font-sans mb-2">
                Các phản ứng tạo thành carboxylic acid
              </h3>
              <p className="mb-2.5 text-justify">
                Chúng ta đã thấy các alcohol bậc một có thể bị oxi hóa thành aldehyde và sự oxi hóa tiếp theo của aldehyde tạo thành sẽ sinh ra carboxylic acid như thế nào.
              </p>
              <p className="mb-2.5 text-justify">
                Các carboxylic acid cũng được điều chế từ các hợp chất nitrile, R—C≡N. Khi một nitrile được đun hồi lưu với dung dịch hydrochloric acid loãng, phản ứng thủy phân sẽ xảy ra, và nhóm —C≡N ở đầu mạch hydrocarbon được chuyển hóa thành nhóm —COOH, tạo thành một carboxylic acid (xem trang 237). Ví dụ:
              </p>

              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-xs font-medium flex items-start justify-center gap-1.5 flex-wrap">
                <div className="flex flex-col items-center">
                  <span>CH<sub>3</sub>CH<sub>2</sub>CN</span>
                  <span className="text-[10px] text-stone-500">propanenitrile</span>
                </div>
                <span>+ HCl + 2H<sub>2</sub>O ⟶</span>
                <div className="flex flex-col items-center">
                  <span>CH<sub>3</sub>CH<sub>2</sub>COOH</span>
                  <span className="text-[10px] text-stone-500">propanoic acid</span>
                </div>
                <span>+ NH<sub>4</sub>Cl</span>
              </div>

              <h3 className="text-base font-bold text-stone-600 font-sans mt-4 mb-2">
                Phản ứng thể hiện tính acid (Reacting as acids)
              </h3>
              <p className="mb-2.5 text-justify">
                Các carboxylic acid được mô tả là những acid yếu bởi vì các phân tử của chúng không phân li (ion hóa) hoàn toàn khi được thêm vào nước. Tuy nhiên, một tỉ lệ nhỏ các phân tử có phân li, giải phóng các ion H<sup>+</sup>(aq) đặc trưng cho mọi dung dịch acid có giá trị pH nhỏ hơn 7. Ví dụ, ethanoic acid tạo ra các ion hydrogen và ion ethanoate trong nước:
              </p>

              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-xs font-medium flex items-start justify-center gap-2">
                <div className="flex flex-col items-center">
                  <span>CH<sub>3</sub>COOH(aq)</span>
                  <span className="text-[10px] text-stone-500">ethanoic acid</span>
                </div>
                <span className="text-sm">⇌</span>
                <div className="flex flex-col items-center">
                  <span>CH<sub>3</sub>COO<sup>−</sup>(aq)</span>
                  <span className="text-[10px] text-stone-500">ion ethanoate</span>
                </div>
                <span>+ H<sup>+</sup>(aq)</span>
              </div>

              <p className="mb-2 text-justify">
                Bạn có thể tìm hiểu thêm về sự phân li của các carboxylic acid trong Chương 26 (trang 394–395).
              </p>
              <p className="mb-2 text-justify">
                Sự có mặt của các ion H<sup>+</sup>(aq) trong dung dịch của các carboxylic acid đồng nghĩa với việc chúng tham gia đầy đủ các phản ứng thông thường của acid. Chúng phản ứng với:
              </p>

              <ul className="space-y-2 text-xs sm:text-[13px] font-sans">
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <div>
                    <div>các dung dịch kiềm tạo thành muối và nước:</div>
                    <div className="font-medium mt-0.5">
                      CH<sub>3</sub>COOH + NaOH ⟶ CH<sub>3</sub>COONa + H<sub>2</sub>O
                    </div>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <div>
                    <div>các kim loại hoạt động tạo thành muối và khí hydrogen:</div>
                    <div className="font-medium mt-0.5">
                      2CH<sub>3</sub>COOH + Mg ⟶ (CH<sub>3</sub>COO)<sub>2</sub>Mg + H<sub>2</sub>
                    </div>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <div>
                    <div>các muối carbonate tạo thành muối, nước và khí carbon dioxide:</div>
                    <div className="font-medium mt-0.5">
                      2CH<sub>3</sub>COOH + K<sub>2</sub>CO<sub>3</sub> ⟶ 2CH<sub>3</sub>COOK + H<sub>2</sub>O + CO<sub>2</sub>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 232
      =================================================================== */}
      {shouldShow('p232') && (
        <PageWrapper
          pageNumber={232}
          side="left"
          pageId="p232"
          onViewPageLatex={onViewPageLatex}
        >
          {/* Top 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start mb-6">
            <div>
              <p className="mb-3 text-justify">
                Các muối được tạo thành trong ba phản ứng ở trên lần lượt được gọi là sodium ethanoate, magnesium ethanoate và potassium ethanoate.
              </p>
              <h3 className="text-base font-bold text-stone-600 font-sans mb-2">
                Phản ứng khử carboxylic acid
              </h3>
              <p className="mb-2.5 text-justify">
                Các carboxylic acid có thể bị khử thành alcohol bậc một tương ứng bằng cách sử dụng tác nhân khử là lithium tetrahydridoaluminate, LiAlH<sub>4</sub>, trong dung môi ether khan ở nhiệt độ phòng. Ether khan được sử dụng bởi vì LiAlH<sub>4</sub> phản ứng rất mãnh liệt với nước.
              </p>
              <p className="mb-2.5 text-justify">
                Trong phương trình khử rút gọn, kí hiệu [H] có thể được dùng để đại diện cho các nguyên tử hydrogen từ tác nhân khử (hãy nhớ rằng trong hóa học hữu cơ, sự khử có thể được xem là sự cộng thêm các nguyên tử hydrogen). Vì vậy, đối với quá trình khử ethanoic acid thành ethanol, ta có thể biểu diễn phản ứng như sau:
              </p>
              <div className="my-2.5 py-2 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-center text-[13px] font-medium">
                CH<sub>3</sub>COOH + 4[H] ⟶ CH<sub>3</sub>CH<sub>2</sub>OH + H<sub>2</sub>O
              </div>
            </div>

            <div>
              <QuestionBox
                number={8}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a:</strong> Đun nóng hồi lưu ethanenitrile (CH<sub>3</sub>CN) với dung dịch hydrochloric acid (HCl) loãng.
                    </p>
                    <p>
                      <strong>b i:</strong> HCOOH + NaOH ⟶ HCOONa + H<sub>2</sub>O
                    </p>
                    <p>
                      <strong>b ii:</strong> 2CH<sub>3</sub>COOH + 2K ⟶ 2CH<sub>3</sub>COOK + H<sub>2</sub>
                    </p>
                    <p>
                      <strong>b iii:</strong> 2CH<sub>3</sub>CH<sub>2</sub>COOH + Li<sub>2</sub>CO<sub>3</sub> ⟶ 2CH<sub>3</sub>CH<sub>2</sub>COOLi + H<sub>2</sub>O + CO<sub>2</sub>
                    </p>
                    <p>
                      <strong>c:</strong> Tác nhân khử: lithium tetrahydridoaluminate (LiAlH<sub>4</sub>); điều kiện: trong dung môi ether khan ở nhiệt độ phòng.
                    </p>
                  </>
                }
              >
                <div>
                  <strong>a</strong> Làm thế nào để bạn điều chế được ethanoic acid từ ethanenitrile?
                </div>
                <div>
                  <strong>b</strong> Viết một phương trình hóa học đã cân bằng, sử dụng công thức cấu tạo cho các hợp chất hữu cơ, để biểu diễn sự hình thành của:
                  <ol className="list-none pl-4 mt-1 space-y-0.5">
                    <li>
                      <strong>i</strong> sodium methanoate, sử dụng sodium hydroxide làm một trong các chất phản ứng
                    </li>
                    <li>
                      <strong>ii</strong> potassium ethanoate, sử dụng kim loại potassium làm một trong các chất phản ứng
                    </li>
                    <li>
                      <strong>iii</strong> lithium propanoate, sử dụng lithium carbonate làm một trong các chất phản ứng.
                    </li>
                  </ol>
                </div>
                <div>
                  <strong>c</strong> Gọi tên và viết công thức hóa học của tác nhân khử được dùng để chuyển hóa các carboxylic acid thành các alcohol bậc một, đồng thời nêu rõ điều kiện của phản ứng.
                </div>
              </QuestionBox>
            </div>
          </div>

          {/* Purple Summary Box */}
          <div className="bg-[#efe3ee] border border-[#dfc8dd] rounded-md p-5 sm:p-6 font-sans shadow-xs">
            <h2 className="text-xl font-bold text-[#5c2d75] mb-3.5">
              Tóm tắt (Summary)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px] leading-relaxed text-stone-800">
              <ul className="space-y-2.5">
                {[
                  'Phản ứng cháy hoàn toàn của các alcohol tạo thành carbon dioxide và nước.',
                  'Một phản ứng thế nucleophile diễn ra giữa các alcohol và hydrogen halide để tạo thành các halogenoalkane.',
                  'Các alcohol phản ứng với kim loại sodium tạo ra các sodium alkoxide và khí hydrogen.',
                  'Một alcohol sẽ phản ứng với một carboxylic acid, khi có mặt chất xúc tác acid mạnh, để tạo thành một ester và nước. Các ester được sử dụng làm dung môi, nước hoa và hương liệu thực phẩm.',
                  'Các ester có thể bị thủy phân bởi một acid hoặc bởi một base. Thủy phân trong môi trường acid là phản ứng thuận nghịch nhưng thủy phân trong môi trường base là phản ứng không thuận nghịch.',
                  'Sự tách loại phân tử nước khỏi một alcohol tạo ra một alkene; phản ứng này gọi là sự tách nước (dehydration). Phản ứng tách nước có thể được thực hiện bằng cách dẫn hơi alcohol đi qua đá bọt, sứ xốp hoặc xúc tác aluminium oxide nung nóng.',
                  'Một alcohol bậc một có thể bị oxi hóa thành một aldehyde bằng cách đun nóng nhẹ alcohol với dung dịch potassium dichromate(VI) đã acid hóa (và chưng cất tách aldehyde ra ngay khi nó vừa tạo thành – xem trang 236).',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="w-2 h-2 bg-[#9a6fb0] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {[
                  'Một alcohol bậc một có thể bị oxi hóa tiếp thành một carboxylic acid bằng cách đun hồi lưu alcohol với lượng dư dung dịch potassium dichromate(VI) đã acid hóa.',
                  'Một alcohol bậc hai có thể bị oxi hóa thành một ketone bằng cách đun nóng alcohol với dung dịch potassium dichromate(VI) đã acid hóa.',
                  'Dung dịch potassium dichromate(VI) đã acid hóa chuyển màu từ da cam sang xanh lục khi một alcohol bậc một hoặc bậc hai bị oxi hóa bởi nó.',
                  'Các alcohol bậc ba không thể bị oxi hóa khi đun hồi lưu với dung dịch potassium dichromate(VI) đã acid hóa.',
                  'Các carboxylic acid có thể được tạo thành từ sự oxi hóa các alcohol bậc một hoặc các aldehyde bằng cách đun hồi lưu với lượng dư potassium dichromate(VI) và dung dịch sulfuric(VI) acid loãng. Chúng cũng có thể được điều chế bằng cách đun hồi lưu các nitrile với dung dịch hydrochloric acid loãng.',
                  'Các carboxylic acid là những acid yếu, phản ứng được với các kim loại hoạt động, dung dịch kiềm hoặc muối carbonate để tạo thành các muối carboxylate.',
                  'Các carboxylic acid có thể bị khử bởi LiAlH₄ trong dung môi ether khan để tạo thành các alcohol bậc một.',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="w-2 h-2 bg-[#9a6fb0] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 233: END-OF-CHAPTER QUESTIONS
      =================================================================== */}
      {shouldShow('p233') && (
        <PageWrapper
          pageNumber={233}
          side="right"
          pageId="p233"
          onViewPageLatex={onViewPageLatex}
        >
          <div className="bg-[#dfeff8] border border-[#bfdcf0] rounded-md p-5 sm:p-7 font-sans text-[13.5px] leading-relaxed text-stone-800 shadow-xs">
            <h2 className="text-2xl font-bold text-[#527993] mb-5">
              Câu hỏi cuối chương (End-of-chapter questions)
            </h2>

            <div className="space-y-6">
              {/* EOC Question 1 */}
              <div className="space-y-2">
                <div className="flex gap-2.5">
                  <span className="font-bold text-stone-900">1</span>
                  <div className="w-full space-y-2">
                    <p>Pentan-2-ol, butan-1-ol và 2-methylpropan-2-ol đều là các alcohol.</p>
                    <div className="pl-2 space-y-1.5">
                      <div>
                        <strong>a</strong> Đối với mỗi chất trên:
                        <div className="pl-5 mt-1 space-y-1">
                          <div className="flex justify-between">
                            <span>
                              <strong>i</strong> hãy viết công thức phân tử (<em>molecular formula</em>) của nó
                            </span>
                            <span className="text-stone-600">[3]</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              <strong>ii</strong> hãy viết công thức cấu tạo thu gọn (<em>structural formula</em>) của nó
                            </span>
                            <span className="text-stone-600">[3]</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              <strong>iii</strong> hãy viết công thức cấu tạo khai triển (<em>displayed formula</em>) của nó
                            </span>
                            <span className="text-stone-600">[3]</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              <strong>iv</strong> hãy viết công thức khung phân tử (<em>skeletal formula</em>) của nó
                            </span>
                            <span className="text-stone-600">[3]</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              <strong>v</strong> hãy cho biết chất đó là alcohol bậc một, bậc hai hay bậc ba.
                            </span>
                            <span className="text-stone-600">[3]</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>b</strong> Hãy viết công thức tổng quát được dùng để biểu diễn các alcohol.
                        </span>
                        <span className="text-stone-600 shrink-0">[1]</span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>c</strong> Hai trong số các alcohol ở câu hỏi này là đồng phân của nhau. Hãy xác định hai chất đó và nêu rõ loại đồng phân mà chúng thể hiện.
                        </span>
                        <span className="text-stone-600 shrink-0">[2]</span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>d</strong> Hãy gọi tên alcohol có công thức cấu tạo là CH<sub>3</sub>CH<sub>2</sub>COH(CH<sub>3</sub>)<sub>2</sub>.
                        </span>
                        <span className="text-stone-600 shrink-0">[1]</span>
                      </div>
                    </div>
                    <div className="text-right font-semibold text-stone-700 pt-1">
                      Tổng = 19
                    </div>
                  </div>
                </div>
              </div>

              {/* EOC Question 2 */}
              <div className="space-y-2 pt-3 border-t border-[#c5dfee]">
                <div className="flex gap-2.5">
                  <span className="font-bold text-stone-900">2</span>
                  <div className="w-full space-y-2">
                    <p>
                      Hãy viết phương trình hóa học đã cân bằng cho mỗi quá trình sau đây. Cần sử dụng công thức cấu tạo thu gọn hoặc công thức khai triển cho tất cả các chất hữu cơ.
                    </p>
                    <div className="pl-2 space-y-1.5">
                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>a</strong> Điều chế ethanol sử dụng ethene làm nguyên liệu đầu vào. Ghi rõ công thức của chất xúc tác được sử dụng.
                        </span>
                        <span className="text-stone-600 shrink-0">[2]</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>b</strong> Phản ứng đốt cháy hoàn toàn ethanol trong khí oxygen.
                        </span>
                        <span className="text-stone-600 shrink-0">[2]</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>c</strong> Phản ứng tách nước của butan-2-ol khi dẫn đi qua bột Al<sub>2</sub>O<sub>3</sub> nung nóng. Hãy viết ba phương trình hóa học, mỗi phương trình ứng với một trong ba sản phẩm có thể tạo thành.
                        </span>
                        <span className="text-stone-600 shrink-0">[3]</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>d</strong> Phản ứng của ethanoic acid với ethanol. Gọi tên chất xúc tác được sử dụng, loại phản ứng và tên các sản phẩm.
                        </span>
                        <span className="text-stone-600 shrink-0">[4]</span>
                      </div>
                    </div>
                    <div className="text-right font-semibold text-stone-700 pt-1">
                      Tổng = 11
                    </div>
                  </div>
                </div>
              </div>

              {/* EOC Question 3 */}
              <div className="space-y-2 pt-3 border-t border-[#c5dfee]">
                <div className="flex gap-2.5">
                  <span className="font-bold text-stone-900">3</span>
                  <div className="w-full space-y-2">
                    <p>
                      Các alcohol bậc một và bậc hai có thể bị oxi hóa bằng cách đun nóng với hỗn hợp gồm potassium dichromate(VI) và dung dịch sulfuric(VI) acid loãng.
                    </p>
                    <ul className="space-y-1 pl-2">
                      <li className="flex gap-2 items-start">
                        <span className="w-2 h-2 bg-[#527993] mt-1.5 shrink-0" />
                        <span>
                          Một alcohol bậc một có thể bị oxi hóa thành hai sản phẩm khác nhau, tùy thuộc vào điều kiện phản ứng được sử dụng.
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="w-2 h-2 bg-[#527993] mt-1.5 shrink-0" />
                        <span>Một alcohol bậc hai tạo thành một sản phẩm duy nhất khi bị oxi hóa.</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="w-2 h-2 bg-[#527993] mt-1.5 shrink-0" />
                        <span>Các alcohol bậc ba không bị oxi hóa.</span>
                      </li>
                    </ul>

                    <div className="pl-2 space-y-1.5 pt-1">
                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>a</strong> Công thức hóa học của potassium dichromate(VI) là gì?
                        </span>
                        <span className="text-stone-600 shrink-0">[1]</span>
                      </div>

                      <div>
                        <strong>b</strong> Sử dụng một alcohol bậc một tùy chọn làm ví dụ:
                        <div className="pl-5 mt-1 space-y-1">
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>i</strong> hãy viết công thức cấu tạo khai triển của hai sản phẩm mà nó có thể bị oxi hóa thành
                            </span>
                            <span className="text-stone-600 shrink-0">[2]</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>ii</strong> nêu rõ các điều kiện cần thiết để thu được mỗi sản phẩm
                            </span>
                            <span className="text-stone-600 shrink-0">[2]</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>iii</strong> cho biết mỗi sản phẩm thuộc dãy đồng đẳng nào
                            </span>
                            <span className="text-stone-600 shrink-0">[2]</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>iv</strong> viết một phương trình hóa học đã cân bằng cho mỗi phản ứng (có thể sử dụng kí hiệu quy ước [O] cho tác nhân oxi hóa).
                            </span>
                            <span className="text-stone-600 shrink-0">[2]</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <strong>c</strong> Sử dụng một alcohol bậc hai tùy chọn làm ví dụ:
                        <div className="pl-5 mt-1 space-y-1">
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>i</strong> hãy viết công thức cấu tạo khai triển của sản phẩm mà nó có thể bị oxi hóa thành
                            </span>
                            <span className="text-stone-600 shrink-0">[2]</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>ii</strong> cho biết sản phẩm đó thuộc dãy đồng đẳng nào
                            </span>
                            <span className="text-stone-600 shrink-0">[1]</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>
                              <strong>iii</strong> viết một phương trình hóa học đã cân bằng cho phản ứng (có thể sử dụng kí hiệu quy ước [O] cho tác nhân oxi hóa).
                            </span>
                            <span className="text-stone-600 shrink-0">[1]</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span>
                          <strong>d</strong> Tại sao các alcohol bậc ba lại bền với sự oxi hóa (không bị oxi hóa)?
                        </span>
                        <span className="text-stone-600 shrink-0">[1]</span>
                      </div>
                    </div>
                    <div className="text-right font-semibold text-stone-700 pt-1">
                      Tổng = 14
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      )}
    </div>
  );
};
