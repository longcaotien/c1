import React from 'react';
import { PageWrapper, QuestionBox } from './TextbookPages';
import {
  Figure13_1,
  Figure13_2,
  Figure13_3,
  Figure13_4,
  Figure13_5,
  Figure13_6,
  Figure13_7,
  Figure13_8,
} from './TextbookFigures13';

/* ==========================================================================
   CHƯƠNG 13: NITROGEN AND SULFUR — TRANG 180–186
   Bản dịch tiếng Việt giữ nguyên bố cục sách gốc Cambridge
   ========================================================================== */

const EqBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="my-3 py-2.5 px-3 bg-stone-100/80 rounded border border-stone-200/70 font-sans text-xs sm:text-[13px] text-center space-y-2">
    {children}
  </div>
);

const UnderLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex flex-col items-center leading-tight">
    {children}
  </span>
);

const RedBullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2">
    <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
    <span>{children}</span>
  </li>
);

export interface TextbookPages13Props {
  selectedPageFilter: string;
  showSolutionsGlobal: boolean;
  onViewPageLatex?: (pageId: string) => void;
}

export const TextbookPages13: React.FC<TextbookPages13Props> = ({
  selectedPageFilter,
  showSolutionsGlobal,
  onViewPageLatex,
}) => {
  const shouldShow = (pageId: string) => selectedPageFilter === 'all' || selectedPageFilter === pageId;

  return (
    <div className="space-y-8">
      {/* ===================================================================
          PAGE 180 — TRANG MỞ ĐẦU CHƯƠNG
      =================================================================== */}
      {shouldShow('p180') && (
        <PageWrapper pageNumber={180} side="left" pageId="p180" onViewPageLatex={onViewPageLatex}>
          {/* Dải tinh thể sulfur */}
          <div className="relative h-44 sm:h-56 overflow-hidden rounded-sm">
            <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Tinh thể sulfur vàng">
              <defs>
                <linearGradient id="sulfband" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f8e04b" />
                  <stop offset="1" stopColor="#d9ac14" />
                </linearGradient>
              </defs>
              <rect width="600" height="200" fill="url(#sulfband)" />
              {Array.from({ length: 40 }).map((_, i) => {
                const cx = 20 + (i % 8) * 76 + (i % 5) * 9;
                const cy = 24 + Math.floor(i / 8) * 42 + (i % 3) * 8;
                const s = 26 + (i % 4) * 8;
                return (
                  <g key={i}>
                    <polygon
                      points={`${cx},${cy - s / 2} ${cx + s / 2},${cy - s / 6} ${cx + s / 3},${cy + s / 2} ${cx - s / 3},${cy + s / 2} ${cx - s / 2},${cy - s / 6}`}
                      fill={i % 3 === 0 ? '#fcea63' : i % 3 === 1 ? '#f3cf2c' : '#e5bb12'}
                      stroke="#c79c08"
                      strokeWidth="1"
                      opacity="0.95"
                    />
                    <polygon
                      points={`${cx},${cy - s / 2} ${cx + s / 6},${cy - s / 8} ${cx - s / 6},${cy - s / 8}`}
                      fill="#fff6b0"
                      opacity="0.8"
                    />
                  </g>
                );
              })}
              {Array.from({ length: 10 }).map((_, i) => (
                <polygon
                  key={'g' + i}
                  points={`${60 + i * 58},${30 + (i % 4) * 40} ${76 + i * 58},${22 + (i % 4) * 40} ${84 + i * 58},${40 + (i % 4) * 40} ${66 + i * 58},${48 + (i % 4) * 40}`}
                  fill="#cfd4da"
                  opacity="0.85"
                />
              ))}
            </svg>
          </div>
          {/* Black chapter banner */}
          <div className="bg-[#191919] text-white px-6 py-7 sm:py-9 -mt-1">
            <h1 className="font-sans">
              <span className="block text-xl sm:text-2xl font-bold text-[#e8564a]">Chương 13:</span>
              <span className="block text-2xl sm:text-[32px] font-bold tracking-tight mt-1">Nitrogen và sulfur (Nitrogen and sulfur)</span>
            </h1>
          </div>

          {/* Learning outcomes */}
          <div className="mt-5 bg-[#f2f0eb] border border-stone-300 rounded-sm p-4 sm:p-5 font-sans">
            <h2 className="text-lg font-bold text-[#d33427] mb-2">Learning outcomes (Chuẩn đầu ra)</h2>
            <p className="text-[13px] font-semibold text-stone-800 mb-2">Bạn cần có khả năng:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-[12.5px] leading-relaxed text-stone-800">
              <ul className="space-y-1.5">
                <RedBullet>
                  <em>mô tả và giải thích:</em>
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>– sự trơ (khó phản ứng) của khí nitrogen</li>
                    <li>– tính base của ammonia (xem thêm Chương 8, trang 130), cùng sự hình thành và cấu tạo của ion ammonium</li>
                    <li>– sự giải phóng ammonia khỏi các muối của nó</li>
                  </ul>
                </RedBullet>
                <RedBullet>nêu tầm quan trọng công nghiệp của ammonia và các hợp chất nitrogen bắt nguồn từ ammonia</RedBullet>
                <RedBullet>
                  <em>nêu và giải thích:</em>
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>– các hệ quả môi trường của việc sử dụng phân bón nitrate không kiểm soát</li>
                  </ul>
                </RedBullet>
              </ul>
              <ul className="space-y-1.5">
                <RedBullet>
                  <ul className="list-none mt-0 space-y-1">
                    <li>– sự tồn tại tự nhiên và do con người tạo ra của các oxide nitrogen, cùng sự loại bỏ chúng bằng xúc tác khỏi khí thải của động cơ đốt trong</li>
                    <li>– vì sao các oxide nitrogen trong khí quyển là chất gây ô nhiễm, bao gồm vai trò xúc tác của chúng trong sự oxi hóa sulfur dioxide trong khí quyển (xem thêm Chương 9, trang 144)</li>
                  </ul>
                </RedBullet>
                <RedBullet>mô tả sự hình thành khí sulfur dioxide từ nhiên liệu hóa thạch chứa sulfur, vai trò của nó trong sự tạo thành acid rain và cách acid rain ảnh hưởng tới môi trường.</RedBullet>
              </ul>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 181 — INTRODUCTION + NITROGEN GAS
      =================================================================== */}
      {shouldShow('p181') && (
        <PageWrapper pageNumber={181} side="right" pageId="p181" onViewPageLatex={onViewPageLatex}>
          <div className="bg-[#d33427] text-white rounded-sm p-5 sm:p-6 mb-7 shadow-sm font-sans">
            <h1 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white mb-3">Giới thiệu (Introduction)</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[13.5px] leading-relaxed text-white/95">
              <p className="text-justify">
                Nguyên tố Nhóm 15 nitrogen chiếm gần bốn phần năm khí quyển Trái Đất. Nitrogen là một nguyên tố thiết
                yếu trong nhiều quá trình của sự sống, nhưng ở dạng khí nguyên chất nó trơ (khó phản ứng). Vì lý do
                này, khí nitrogen được dùng để ngăn ngừa nổ khi dầu thô được bơm vào hoặc ra khỏi các siêu tàu chở
                dầu,
              </p>
              <p className="text-justify">
                khi các hơi nhiên liệu dễ bay hơi có thể trộn lẫn với oxygen từ không khí.
                <br />
                <br />
                Sulfur là một nguyên tố Nhóm 16 được khai thác mỏ để sản xuất sulfuric(VI) acid, một trong những hóa
                chất công nghiệp quan trọng nhất, dùng trong sản xuất sơn, phẩm nhuộm, nhựa và sợi.
              </p>
            </div>
            <div className="mt-4">
              <Figure13_1 />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            <div>
              <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2.5 leading-snug">Khí nitrogen (Nitrogen gas)</h2>
              <p className="mb-3 text-justify">
                Nitrogen thuộc Nhóm 15 của Bảng Tuần hoàn. Nó là một nguyên tố phi kim chiếm khoảng 78% khí quyển
                Trái Đất. Nó tồn tại dưới dạng các phân tử hai nguyên tử, N<sub>2</sub>. Khí nitrogen là chất khí trơ
                làm loãng tác dụng của khí oxygen hoạt động. Để hiểu vì sao khí nitrogen trơ, ta phải xem xét liên kết
                trong các phân tử của nó.
              </p>
              <p className="text-justify">
                Cấu hình electron của một nguyên tử nitrogen là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup>. Các nguyên
                tử của nó cần nhận thêm ba electron để đạt cấu hình khí hiếm của neon. Các nguyên tử nitrogen thực
                hiện điều này bằng cách tạo thành một liên kết cộng hóa trị ba giữa hai nguyên tử (xem Hình 13.2).
              </p>
            </div>
            <div>
              <Figure13_2 />
              <p className="mt-3 text-justify">
                Liên kết cộng hóa trị ba rất mạnh: năng lượng liên kết của nó gần 1000 kJ mol⁻¹. Nó khó bị bẻ gãy, vì
                vậy khí nitrogen chỉ phản ứng trong những điều kiện khắc nghiệt. Ví dụ, nitrogen và oxygen trong không
                khí phản ứng với nhau trong các cơn dông sấm sét.
              </p>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 182 — SẤM SÉT + AMMONIA & HỢP CHẤT AMMONIUM
      =================================================================== */}
      {shouldShow('p182') && (
        <PageWrapper pageNumber={182} side="left" pageId="p182" onViewPageLatex={onViewPageLatex}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            <div>
              <Figure13_3 />
              <p className="mt-3 mb-3 text-justify">
                Sấm sét cung cấp năng lượng hoạt hóa cần thiết để phản ứng này xảy ra (Hình 13.3):
              </p>
              <EqBox>
                <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                  <span>N₂(g) + O₂(g)</span>
                  <span className="pt-0.5 px-1">⇌</span>
                  <UnderLabel>
                    <span>2NO(g)</span>
                    <span className="text-[10px] text-stone-500 font-sans">nitrogen(II) oxide</span>
                  </UnderLabel>
                </div>
              </EqBox>
              <p className="mb-3 text-justify">
                Nitrogen(II) oxide tạo thành bị oxi hóa tiếp bởi oxygen trong không khí thành nitrogen(IV) oxide, NO
                <sub>2</sub>:
              </p>
              <EqBox>
                <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                  <span>2NO(g) + O₂(g)</span>
                  <span className="pt-0.5 px-1">⇌</span>
                  <UnderLabel>
                    <span>2NO₂(g)</span>
                    <span className="text-[10px] text-stone-500 font-sans">nitrogen(IV) oxide</span>
                  </UnderLabel>
                </div>
              </EqBox>
              <p className="mb-3 text-justify">
                Nitrogen(IV) oxide hòa tan vào các giọt nước và tạo thành nitric acid, rơi xuống đất theo mưa. Đây là
                một phần thiết yếu của chu trình nitrogen tự nhiên:
              </p>
              <EqBox>
                <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                  <span>2NO₂(g) + H₂O(l) + ½O₂(g)</span>
                  <span className="pt-0.5 px-1">⇌</span>
                  <UnderLabel>
                    <span>2HNO₃(aq)</span>
                    <span className="text-[10px] text-stone-500 font-sans">nitric acid</span>
                  </UnderLabel>
                </div>
              </EqBox>
              <p className="text-justify">
                Theo cách này, nitrogen đi vào đất ở dạng hòa tan mà thực vật có thể hấp thụ. Chúng sử dụng các ion
                nitrate, NO<sub>3</sub>⁻, để tạo nên các protein thiết yếu cho sự sinh trưởng.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2.5 leading-snug">
                Ammonia và các hợp chất ammonium
              </h2>
              <p className="mb-3 text-justify">
                Ammonia là một hợp chất rất quan trọng của nitrogen. Nó là một khí kiềm có công thức hóa học NH
                <sub>3</sub>. Trong công nghiệp nó được sản xuất ở quy mô lớn bằng quy trình Haber (chi tiết về quy
                trình xem Chương 8, trang 129):
              </p>
              <EqBox>
                <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                  <UnderLabel>
                    <span>N₂(g) + 3H₂(g)</span>
                    <span className="text-[10px] text-stone-500 font-sans">nitrogen&nbsp;&nbsp;&nbsp;hydrogen</span>
                  </UnderLabel>
                  <span className="pt-0.5 px-1 flex flex-col items-center leading-none">
                    <span className="text-[9px] font-sans">Fe</span>
                    <span>⇌</span>
                  </span>
                  <UnderLabel>
                    <span>2NH₃(g)</span>
                    <span className="text-[10px] text-stone-500 font-sans">ammonia</span>
                  </UnderLabel>
                </div>
              </EqBox>
              <p className="mb-3 text-justify">
                Liên kết trong ammonia được trình bày ở Hình 13.4. Bạn đã học vì sao sự có mặt của một cặp electron
                tự do trên nguyên tử nitrogen khiến phân tử ammonia có hình dạng tháp (xem trang 56).
              </p>
              <Figure13_4 />
              <p className="mt-3 mb-3 text-justify">
                Bạn cũng đã học rằng cặp electron tự do của ammonia có thể được cho một ion H⁺ từ một acid, tạo thành
                một liên kết cộng hóa trị phối trí (cho nhận) (xem trang 53). Ammonia đóng vai trò một base trong phản
                ứng này vì nó nhận một ion H⁺:
              </p>
              <EqBox>
                <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                  <span>NH₃(aq) + H⁺(aq)</span>
                  <span className="pt-0.5 px-1">⇌</span>
                  <UnderLabel>
                    <span>NH₄⁺(aq)</span>
                    <span className="text-[10px] text-stone-500 font-sans">ion ammonium</span>
                  </UnderLabel>
                </div>
              </EqBox>
            </div>
          </div>

          <p className="mt-4 mb-3 text-justify">
            Các hợp chất ammonium là những phân bón rất quan trọng. Nitrogen bị lấy khỏi đất khi các nitrate được hấp
            thụ qua rễ cây trong lúc cây sinh trưởng. Khi mùa màng được nông dân thu hoạch, nitrogen không được hoàn
            trả lại.
          </p>
          <p className="mb-3 text-justify">
            Thực vật không tự hoàn trả nitrogen này vào đất. Vì vậy nông dân dùng các hợp chất ammonium để thay thế
            lượng nitrogen này trong đất. Các muối ammonium phổ biến dùng trong phân bón gồm ammonium chloride NH
            <sub>4</sub>Cl, ammonium nitrate NH<sub>4</sub>NO<sub>3</sub>, ammonium phosphate (NH<sub>4</sub>)
            <sub>3</sub>PO<sub>4</sub> và ammonium sulfate (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.
          </p>
          <p className="mb-3 text-justify">
            Nếu ta đun nóng một muối ammonium với một base, ammonia gas sẽ được sinh ra. Ta dùng phản ứng này để điều
            chế khí ammonia trong phòng thí nghiệm: ammonium chloride và calcium hydroxide, cả hai ở trạng thái rắn,
            thường được trộn lẫn rồi đun nóng (xem bộ dụng cụ ở Hình 13.5).
          </p>
          <Figure13_5 />
          <EqBox>
            <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
              <span>2NH₄Cl(s) + Ca(OH)₂(s)</span>
              <span className="pt-0.5 px-1 flex flex-col items-center leading-none">
                <span className="text-[9px] font-sans">heat</span>
                <span>⟶</span>
              </span>
              <span>CaCl₂(s) + 2H₂O(l) + 2NH₃(g)</span>
            </div>
          </EqBox>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 183 — CÂU 1 + USES OF AMMONIA + CÂU 2 + VẤN ĐỀ MÔI TRƯỜNG
      =================================================================== */}
      {shouldShow('p183') && (
        <PageWrapper pageNumber={183} side="right" pageId="p183" onViewPageLatex={onViewPageLatex}>
          <p className="mb-4 text-justify">
            Phản ứng này được dùng làm cơ sở cho phép thử ion ammonium. Nếu một hợp chất chưa biết chứa các ion NH
            <sub>4</sub>⁺, nó sẽ giải phóng ammonia khi được đun nóng với một base. Khí ammonia thoát ra là khí kiềm
            phổ biến duy nhất. Nó làm giấy quỳ đỏ hóa xanh.
          </p>

          <QuestionBox
            number={1}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a:</strong> Phân tử N<sub>2</sub> có liên kết ba N≡N với năng lượng liên kết rất lớn (gần
                  1000 kJ mol⁻¹) nên rất khó bẻ gãy; do đó nitrogen chỉ phản ứng ở điều kiện khắc nghiệt (sấm sét,
                  buồng đốt động cơ).
                </p>
                <p>
                  <strong>b:</strong> NH<sub>3</sub>(aq) + HNO<sub>3</sub>(aq) → NH<sub>4</sub>NO<sub>3</sub>(aq).
                </p>
                <p>
                  <strong>c:</strong> (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>(s) + 2NaOH(s) → Na<sub>2</sub>SO
                  <sub>4</sub>(s) + 2H<sub>2</sub>O(l) + 2NH<sub>3</sub>(g) (đun nóng).
                </p>
              </>
            }
          >
            <div>
              <strong>a</strong> Giải thích sự trơ (khó phản ứng) của khí nitrogen.
            </div>
            <div>
              <strong>b</strong> Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho phản ứng của dung
              dịch ammonia với dilute nitric acid.
            </div>
            <div>
              <strong>c</strong> Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho phản ứng của
              ammonium sulfate rắn với sodium hydroxide rắn.
            </div>
          </QuestionBox>

          <Figure13_6 />

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-4 mb-2.5 leading-snug">
            Công dụng của ammonia và các hợp chất ammonium
          </h2>
          <p className="mb-3 text-justify">
            Nông dân thu hoạch mùa màng để cung cấp lương thực cho thế giới. Mỗi năm, hàng triệu tấn phân bón được
            rải xuống đồng ruộng để thay thế nitrogen và các chất dinh dưỡng khác mà cây trồng đã lấy mất khỏi đất.
            Khoảng 85% trong số hàng triệu tấn ammonia sản xuất mỗi năm bằng quy trình Haber được dùng để làm phân
            bón. Một lượng tương đối nhỏ ammonia được dùng trực tiếp làm phân bón, chủ yếu ở Hoa Kỳ. Nó được bơm vào
            trong đất. Tuy nhiên, phần lớn ammonia được cho phản ứng với các acid để tạo thành các muối ammonium rắn.
          </p>
          <p className="mb-3 text-justify">
            Phân bón gốc nitrogen chủ yếu là ammonium nitrate, NH<sub>4</sub>NO<sub>3</sub>. Chất này được sản xuất
            từ ammonia và nitric acid:
          </p>
          <EqBox>
            <div className="font-mono">NH₃(aq) + HNO₃(aq) ⇌ NH₄NO₃(aq)</div>
          </EqBox>
          <p className="mb-3 text-justify">
            Dung dịch ammonium nitrate được đun nóng để làm bay hơi nước và làm chảy chất rắn. Chất rắn nóng chảy sau
            đó được phun vào một tháp có không khí thổi vào. Việc này làm đông đặc ammonium nitrate thành các viên
            (pellets), thuận tiện cho nông dân rải từ máy kéo (Hình 13.6). Ammonium sulfate, (NH<sub>4</sub>)
            <sub>2</sub>SO<sub>4</sub>, và ammonium phosphate, (NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>, là những
            muối ammonium khác được dùng trong phân bón.
          </p>
          <p className="mb-2 text-justify">
            Nitric acid dùng để sản xuất ammonium nitrate bản thân nó cũng được làm từ ammonia trong một quy trình
            hóa học khác. Các nhà máy phân bón sản xuất ammonium nitrate thường có ba nhà máy đặt cạnh nhau, tạo ra:
          </p>
          <ul className="space-y-1.5 text-[13px] mb-3">
            <RedBullet>ammonia trong quy trình Haber</RedBullet>
            <RedBullet>nitric acid từ ammonia</RedBullet>
            <RedBullet>ammonium nitrate từ nitric acid và ammonia.</RedBullet>
          </ul>
          <p className="mb-4 text-justify">
            Nitric acid đậm đặc còn có những công dụng quan trọng khác. Nó được dùng để chế tạo nhiều loại thuốc nổ,
            chẳng hạn trinitrotoluene (TNT). Khoảng 10% ammonium nitrate được dùng để làm thuốc nổ. Nitric acid cũng
            cần thiết trong sản xuất chất tẩy rửa, sơn, pigment, phẩm nhuộm và nylon.
          </p>

          <QuestionBox
            number={2}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a:</strong> N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), xúc tác sắt (Fe),
                  khoảng 450 °C, 200 atm.
                </p>
                <p>
                  <strong>b:</strong> 2NH<sub>3</sub>(aq) + H<sub>2</sub>SO<sub>4</sub>(aq) → (NH<sub>4</sub>)<sub>2</sub>
                  SO<sub>4</sub>(aq).
                </p>
                <p>
                  <strong>c:</strong> M(NH<sub>4</sub>NO<sub>3</sub>) = 14 + 4 + 14 + 48 = 80; %N = (2 × 14)/80 × 100 =
                  35,0%.
                </p>
              </>
            }
          >
            <div>
              <strong>a</strong> Ammonia được sản xuất trong công nghiệp bằng quy trình Haber. Viết phương trình hóa
              học cân bằng cho sự tổng hợp ammonia từ các đơn chất của nó, gồm cả xúc tác được dùng.
            </div>
            <div>
              <strong>b</strong> Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho sự tạo thành phân
              bón ammonium sulfate từ dung dịch ammonia.
            </div>
            <div>
              <strong>c</strong> Tính phần trăm nitrogen trong phân bón ammonium nitrate. (Giá trị A
              <sub>r</sub>: N = 14,0, H = 1,0, O = 16,0)
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2 leading-snug">
            Các vấn đề môi trường do hợp chất nitrogen gây ra
          </h2>
          <h3 className="text-base font-bold text-stone-600 font-sans mb-2">Phân bón nitrate (Nitrate fertilisers)</h3>
          <p className="text-justify">
            Để cây trồng sinh trưởng, các phân bón gốc nitrogen, chủ yếu là ammonium nitrate và potassium nitrate
            (KNO<sub>3</sub>), phải tan được trong nước. Điều này đã tạo ra một vấn đề môi trường. Các nitrate có thể
            bị rửa trôi, hoặc thấm lậu (leached), khỏi đất bởi nước mưa xuống nước ngầm. Từ đó chúng có thể đi vào các
            dòng sông và hồ. Một khi vào sông và hồ, các nitrate thúc đẩy sự sinh trưởng của thực vật thủy sinh, có
            thể ‘bóp nghẹt’ dòng sông. Nhưng vấn đề lớn nhất là sự phát triển của tảo (một loại thực vật nước đơn
            giản) trên mặt nước, gây ra hiện tượng <strong className="text-[#d33427] font-sans">phú dưỡng hóa</strong>{' '}
            (eutrophication) (Hình 13.7).
          </p>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 184 — PHÚ DƯỠNG + NITROGEN OXIDES TRONG KHÍ QUYỂN + CÂU 3
      =================================================================== */}
      {shouldShow('p184') && (
        <PageWrapper pageNumber={184} side="left" pageId="p184" onViewPageLatex={onViewPageLatex}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            <div>
              <Figure13_7 />
              <ul className="space-y-1.5 text-[13px] mt-3 mb-3">
                <RedBullet>
                  Một lớp tảo (bloom of algae) có thể lan rộng khắp mặt nước, chặn ánh sáng tới các sinh vật thực vật
                  khác trong nước.
                </RedBullet>
                <RedBullet>
                  Khi thực vật và tảo chết, vi khuẩn trong nước ăn chúng, phân hủy vật chất thực vật.
                </RedBullet>
                <RedBullet>
                  Các vi khuẩn sử dụng hết oxygen trong nước khi chúng ăn, dùng phần oxygen hòa tan trong nước.
                </RedBullet>
                <RedBullet>
                  Cá lấy oxygen hòa tan từ nước, hút qua mang. Không có oxygen hòa tan này chúng chết, ảnh hưởng tới
                  toàn bộ hệ sinh thái.
                </RedBullet>
              </ul>
              <p className="mb-3 text-justify">
                Đây không phải vấn đề duy nhất với phân bón bị rửa trôi khỏi đất. Các nitrate cũng được phát hiện
                trong nước uống của chúng ta, đặc biệt ở những vùng nông nghiệp. Người ta lo ngại rằng nitrate trong
                nước uống gây hội chứng ‘em bé xanh’ (blue baby — khi máu của trẻ sơ sinh bị thiếu oxygen), và cả ung
                thư dạ dày. Nhưng những người khác lập luận rằng mối liên hệ giữa nitrate và bệnh tật chưa được chứng
                minh, và rằng mức nitrate khuyến nghị bị đặt thấp một cách phi thực tế.
              </p>
              <p className="text-justify">
                Nông dân có thể giúp hạn chế lượng nitrate trong các dòng nước bằng cách bổ sung lượng phân bón tiết
                kiệm và hợp lý nhất vào thời điểm tối ưu trong năm. Điều này giảm thiểu sự rửa trôi phân bón dư thừa
                từ đất vào sông và hồ.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2 leading-snug">
                Các oxide nitrogen trong khí quyển
              </h2>
              <p className="mb-3 text-justify">
                Ở đầu chương này ta đã thấy khí nitrogen trơ như thế nào. Tuy nhiên, trong các điều kiện khắc nghiệt
                của một cơn dông sấm sét, tia sét có thể kích hoạt phản ứng giữa nitrogen và oxygen tạo thành các
                oxide nitrogen dạng khí — nitrogen(II) oxide, NO, và nitrogen(IV) oxide, NO<sub>2</sub>. Một sự oxi
                hóa nitrogen tương tự diễn ra bên trong động cơ xe hơi. Trong các xi lanh của động cơ, một hỗn hợp
                không khí (chủ yếu nitrogen cộng oxygen) và nhiên liệu bị nén lại và châm lửa bằng tia lửa điện. Trong
                những điều kiện này (áp suất cao và nhiệt độ cao), nitrogen tạo thành các oxide nitrogen. Chúng được
                thải vào khí quyển trong khí xả của xe.
              </p>
              <p className="mb-3 text-justify">
                Các oxide nitrogen là chất gây ô nhiễm. Chúng gây acid rain và smog quang hóa. Các oxide nitrogen
                cũng xúc tác cho sự oxi hóa khí sulfur dioxide SO<sub>2</sub> trong khí quyển trong quá trình hình
                thành acid rain. Khí sulfur trioxide, SO<sub>3</sub>, tạo thành bởi sự oxi hóa này phản ứng với nước
                mưa, tạo thành sulfuric acid. Các phản ứng dưới đây cho thấy tác dụng xúc tác của các oxide nitrogen:
              </p>
              <EqBox>
                <div className="font-mono">SO₂(g) + NO₂(g) ⇌ SO₃(g) + NO(g)</div>
              </EqBox>
              <p className="mb-2 text-justify">Sau đó NO<sub>2</sub> được tái sinh khi NO phản ứng với oxygen trong không khí:</p>
              <EqBox>
                <div className="font-mono">NO(g) + ½O₂(g) ⇌ NO₂(g)</div>
              </EqBox>
              <p className="mb-3 text-justify">
                Phân tử NO<sub>2</sub> này sau đó có thể oxi hóa tiếp một phân tử sulfur dioxide khác, đồng thời sinh
                ra một phân tử NO để tạo thành một phân tử NO<sub>2</sub> khác. Phân tử NO<sub>2</sub> mới này sẽ oxi
                hóa một phân tử sulfur dioxide khác, và cứ thế tiếp diễn. Do đó NO<sub>2</sub> xúc tác cho sự oxi hóa
                SO<sub>2</sub>.
              </p>
              <p className="mb-3 text-justify">
                Ngày nay, các hệ thống khí xả xe hơi được lắp bộ chuyển đổi xúc tác (catalytic converter) để giúp
                giảm các chất ô nhiễm từ xe cơ giới (xem trang 205). Phản ứng trên bề mặt của xúc tác nóng (ví dụ
                platinum) khử các oxide nitrogen thành khí nitrogen vô hại, thoát ra khỏi ống xả của xe.
              </p>
              <EqBox>
                <div className="font-mono">2CO(g) + 2NO(g) ⇌ 2CO₂(g) + N₂(g)</div>
              </EqBox>
            </div>
          </div>

          <QuestionBox
            number={3}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a:</strong> Ammonia là nguyên liệu làm phân bón (các muối ammonium) giúp tăng năng suất cây
                  trồng, nuôi sống thế giới; ~85% ammonia sản xuất ra dùng cho phân bón.
                </p>
                <p>
                  <strong>b:</strong> Môi trường: phú dưỡng hóa sông/hồ do nitrate rửa trôi. Sức khỏe: nitrate trong
                  nước uống liên quan hội chứng ‘blue baby’ (và lo ngại ung thư dạ dày).
                </p>
                <p>
                  <strong>c:</strong> NO<sub>2</sub> oxi hóa SO<sub>2</sub>: SO<sub>2</sub> + NO<sub>2</sub> → SO
                  <sub>3</sub> + NO; sau đó NO + ½O<sub>2</sub> → NO<sub>2</sub> tái sinh chất xúc tác ⇒ chu trình
                  tiếp diễn.
                </p>
                <p>
                  <strong>d:</strong> Số oxi hóa: C từ +2 (CO) lên +4 (CO<sub>2</sub>) ⇒ C bị oxi hóa; N từ +2 (NO)
                  xuống 0 (N<sub>2</sub>) ⇒ N bị khử.
                </p>
              </>
            }
          >
            <div>
              <strong>a</strong> Vì sao ammonia quan trọng trong việc cung cấp đủ lương thực nuôi sống thế giới?
            </div>
            <div>
              <strong>b</strong> Đưa ra một vấn đề môi trường và một vấn đề sức khỏe có thể có gắn với phân bón
              nitrate.
            </div>
            <div>
              <strong>c</strong> Giải thích cách các oxide nitrogen tham gia vào sự hình thành sulfur trioxide (SO
              <sub>3</sub>) trong khí quyển.
            </div>
            <div>
              <strong>d</strong> Phản ứng sau diễn ra trong bộ chuyển đổi xúc tác của xe hơi một khi nó đã nóng lên:
              <div className="font-mono text-[12px] mt-1 pl-4">2CO(g) + 2NO(g) ⇌ 2CO₂(g) + N₂(g)</div>
              <div className="mt-1">Dùng số oxi hóa để giải thích loài nào bị khử và loài nào bị oxi hóa trong phản ứng.</div>
            </div>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 185 — SULFUR & OXIDE + SULFURIC ACID + CÂU 4
      =================================================================== */}
      {shouldShow('p185') && (
        <PageWrapper pageNumber={185} side="right" pageId="p185" onViewPageLatex={onViewPageLatex}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            <div>
              <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2 leading-snug">Sulfur và các oxide của nó</h2>
              <p className="mb-3 text-justify">
                Ta vừa thấy sulfur dioxide trong khí quyển có thể bị oxi hóa bởi nitrogen(IV) oxide thành sulfur(VI)
                oxide (còn gọi là sulfur trioxide) như thế nào. Chất này phản ứng với nước tạo thành sulfuric acid,
                nguyên nhân chính của acid rain.
              </p>
              <EqBox>
                <div className="font-mono">SO₃(g) + H₂O(l) ⇌ H₂SO₄(aq)</div>
              </EqBox>
              <p className="mb-3 text-justify">
                Sulfur dioxide được tạo thành khi ta đốt nhiên liệu hóa thạch, đặc biệt là than đá. Dầu thô, khí thiên
                nhiên và than đá đều có các hợp chất sulfur tồn tại như những tạp chất. Khi nhiên liệu hóa thạch (hoặc
                các nhiên liệu chiết xuất từ chúng, chẳng hạn petrol hay diesel) bị đốt, các tạp chất sulfur bị oxi
                hóa thành sulfur dioxide. Cũng có những lượng lớn sulfur dioxide thoát ra tự nhiên từ hoạt động núi
                lửa.
              </p>
              <p className="mb-2">Acid rain có những tác hại đối với:</p>
              <ul className="space-y-1.5 text-[13px] mb-3">
                <RedBullet>thực vật (đặc biệt là cây gỗ)</RedBullet>
                <RedBullet>sông, suối và hồ (cùng cá và các động vật khác trong những môi trường sống này)</RedBullet>
                <RedBullet>các công trình xây dựng, tượng đài (Hình 13.8) và kết cấu kim loại.</RedBullet>
              </ul>
              <Figure13_8 />
              <p className="mt-3 text-justify">
                Acid rain rửa trôi (leaches) các chất dinh dưỡng khỏi đất và ngăn cản sự sinh trưởng khỏe mạnh của
                thực vật. Không chỉ vậy, acid rain có thể tấn công lớp sáp trên lá cây. Điều này làm tăng sự mất nước
                và khiến cây dễ mắc bệnh và sâu hại hơn. Cây cối ở độ cao lớn đặc biệt dễ tổn thương, vì chúng thường
                xuyên tiếp xúc với những giọt nước li ti trong mây (dung dịch sulfuric acid).
              </p>
            </div>

            <div>
              <p className="mb-3 text-justify">
                Acid rain rơi xuống các dòng suối, sông và hồ sẽ hạ thấp pH của nước. Nhiều động vật thủy sinh rất
                nhạy cảm với sự thay đổi pH. Nhiều ấu trùng côn trùng không thể sống sót dù độ acid chỉ tăng nhẹ.
                Các động vật khác cao hơn trong chuỗi thức ăn có sức chống chịu tốt hơn, nhưng số lượng của chúng giảm
                đi khi nguồn thức ăn chết dần.
              </p>
              <p className="mb-3 text-justify">
                Trong các thành phố, acid rain tấn công các tòa nhà và tượng đài, đặc biệt những thứ làm từ đá vôi.
                Phổ biến nhất trong số này là đá vôi (limestone), chứa calcium carbonate. Kim loại chính dùng trong
                xây dựng, sắt ở dạng thép, cũng bị ăn mòn bởi acid rain.
              </p>
              <p className="mb-4 text-justify">
                Các nhà hóa học đã tìm ra những cách giảm phát thải sulfur dioxide từ nhiên liệu hóa thạch. Họ nay sản
                xuất các phiên bản ‘low-sulfur’ của petrol và diesel. Ở các nhà máy điện đốt nhiên liệu hóa thạch,
                sulfur được loại khỏi nhiên liệu trước khi đốt. Hoặc cách khác, sulfur dioxide có thể được loại khỏi
                khí thải trước khi chúng được thả vào khí quyển qua các ống khói cao.
              </p>

              <QuestionBox
                number={4}
                showSolutionsGlobal={showSolutionsGlobal}
                solution={
                  <>
                    <p>
                      <strong>a:</strong> SO<sub>3</sub>(g) + H<sub>2</sub>O(l) → H<sub>2</sub>SO<sub>4</sub>(aq).
                    </p>
                    <p>
                      <strong>b:</strong> (i) làm chết cá và sinh vật thủy sinh do hạ pH nước; (ii) hủy hoại cây cối
                      (rửa trôi dinh dưỡng, phá lớp sáp lá); (iii) ăn mòn công trình, tượng đá vôi và kết cấu thép.
                    </p>
                  </>
                }
              >
                <div>
                  <strong>a</strong> Viết phương trình hóa học cân bằng, gồm cả kí hiệu trạng thái, cho sự tạo thành
                  sulfuric acid từ sulfur trioxide trong khí quyển, SO<sub>3</sub>.
                </div>
                <div>
                  <strong>b</strong> Liệt kê ba hệ quả của acid rain.
                </div>
              </QuestionBox>

              <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2 leading-snug">Sulfuric acid</h2>
              <p className="mb-3 text-justify">
                Sulfuric(VI) acid, H<sub>2</sub>SO<sub>4</sub>, là một trong những hóa chất được sản xuất quan trọng
                nhất. Người ta nói rằng lượng sulfuric acid một quốc gia sử dụng là một trong những chỉ số tốt nhất
                cho biết quốc gia đó phát triển đến mức nào.
              </p>
              <p className="mb-3 text-justify">
                Ngành công nghiệp hóa chất sản xuất sulfuric acid bằng quy trình Contact (trang 129). Các nguyên liệu
                thô cần thiết là sulfur, không khí và nước. Sulfur có thể được khai thác từ dưới lòng đất (xem Hình
                13.1b ở đầu chương này). Ba Lan và Hoa Kỳ xuất khẩu sulfur ra khắp thế giới. Sulfur chiết xuất từ các
                tạp chất trong nhiên liệu hóa thạch cũng có thể được dùng trong quy trình Contact.
              </p>
              <p className="text-justify">
                Giống như nitric acid, sulfuric acid được dùng để sản xuất phân bón, chất tẩy rửa, sơn, pigment,
                phẩm nhuộm và sợi tổng hợp. Nó cũng được dùng để chế tạo nhiều loại hóa chất và nhựa, làm acid cho
                ắc quy, để thuộc da và làm sạch bề mặt kim loại (‘pickling’).
              </p>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 186 — SUMMARY + CÂU HỎI CUỐI CHƯƠNG
      =================================================================== */}
      {shouldShow('p186') && (
        <PageWrapper pageNumber={186} side="left" pageId="p186" onViewPageLatex={onViewPageLatex}>
          <div className="rounded-md bg-[#efe3ee] p-4 sm:p-5 font-sans shadow-xs mb-6">
            <h2 className="text-xl font-bold text-[#5c2d75] mb-3">Tóm tắt (Summary)</h2>
            <ul className="space-y-2 text-[12.5px] leading-relaxed text-stone-800">
              {[
                <>Nitrogen, N<sub>2</sub>, là một khí rất trơ vì năng lượng liên kết cao của liên kết ba N≡N.</>,
                <>
                  Ammonia, NH<sub>3</sub>, là một hợp chất phổ biến của nitrogen. Phân tử ammonia có thể đóng vai trò
                  một base, nhận một ion H⁺ để tạo thành ion ammonium, NH<sub>4</sub>⁺.
                </>,
                <>
                  Ammonia được sản xuất bằng quy trình Haber (xem trang 129):
                  <div className="font-mono text-[12px] mt-1 pl-2">
                    N₂(g) + 3H₂(g) ⇌ (Fe) 2NH₃(g) — nitrogen + hydrogen → ammonia
                  </div>
                </>,
                <>
                  Phần lớn ammonia được dùng để tạo các muối ammonium trong các phản ứng trung hòa với những acid
                  khác nhau. Các muối này, chẳng hạn ammonium nitrate, NH<sub>4</sub>NO<sub>3</sub>, được dùng làm
                  phân bón.
                </>,
                <>Phân bón dư thừa có thể bị rửa trôi từ đất vào sông và hồ, gây phú dưỡng hóa và giết chết sinh vật thủy sinh.</>,
                <>
                  Các oxide nitrogen được tạo thành tự nhiên trong các tia sét, khi nitrogen bị oxi hóa. Các oxide
                  dạng khí này cũng hình thành trong các động cơ đốt trong và trở thành chất ô nhiễm khí quyển, góp
                  phần gây acid rain.
                </>,
                <>Sulfur có thể được khai thác ở dạng đơn chất và được dùng làm nguyên liệu thô sản xuất sulfuric acid trong quy trình Contact (xem trang 129).</>,
                <>Sulfur dioxide là nguyên nhân chính của acid rain. Sự oxi hóa nó thành sulfur trioxide được xúc tác bởi các oxide nitrogen.</>,
                <>Acid rain gây cái chết của sinh vật thủy sinh trong sông hồ, giết chết cây cối và phá hủy các công trình xây dựng cùng những kết cấu khác.</>,
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="w-2 h-2 bg-[#9a6fb0] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md bg-[#dfeff8] p-4 sm:p-5 font-sans shadow-xs">
            <h2 className="text-xl font-bold text-[#527993] mb-3">Câu hỏi cuối chương (End-of-chapter questions)</h2>
            <div className="text-[13px] leading-relaxed text-stone-800 space-y-2">
              <div>
                <strong>1</strong> Ammonia được sản xuất bằng quy trình Haber.
                <div className="pl-5 mt-1 space-y-1.5">
                  <div className="flex justify-between gap-4">
                    <span><strong>a</strong> Công thức của ammonia là gì?</span>
                    <span className="text-stone-600 shrink-0">[1]</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span><strong>b</strong> Viết phương trình hóa học cân bằng cho sự tạo thành ammonia từ nitrogen và hydrogen trong quy trình Haber.</span>
                    <span className="text-stone-600 shrink-0">[1]</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span><strong>c</strong> Đưa ra ba công dụng của ammonia.</span>
                    <span className="text-stone-600 shrink-0">[3]</span>
                  </div>
                  <div>
                    <strong>d</strong> Cho biết công thức của các muối ammonium sau:
                    <div className="pl-5 mt-1 space-y-1">
                      <div className="flex justify-between gap-4"><span><strong>i</strong> ammonium chloride</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>ii</strong> ammonium nitrate</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>iii</strong> ammonium sulfate</span><span className="text-stone-600 shrink-0">[1]</span></div>
                    </div>
                  </div>
                  <div>
                    <strong>e</strong> Ammonium chloride phản ứng với calcium hydroxide khi đun nóng để tạo ra khí ammonia.
                    <div className="pl-5 mt-1 space-y-1">
                      <div className="flex justify-between gap-4"><span><strong>i</strong> Phản ứng này được tiến hành dùng chất rắn hay dung dịch?</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>ii</strong> Viết phương trình cân bằng cho phản ứng này.</span><span className="text-stone-600 shrink-0">[1]</span></div>
                    </div>
                  </div>
                  <div className="text-right font-semibold text-stone-700">Tổng = 10</div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#bcd7e8]">
                <strong>2</strong> Phản ứng
                <div className="font-mono text-[12.5px] my-1 pl-4">2SO₂(g) + O₂(g) ⇌ 2SO₃(g)</div>
                đạt cân bằng động. Phản ứng thuận tỏa nhiệt. Phản ứng được xúc tác bởi vanadium(V) oxide, V
                <sub>2</sub>O<sub>5</sub>. Bạn có một bình chứa cả ba khí ở trạng thái cân bằng.
                <div className="pl-5 mt-1 space-y-1.5">
                  <div>
                    <strong>a</strong> Điều gì sẽ xảy ra với vị trí cân bằng nếu:
                    <div className="pl-5 mt-1 space-y-1">
                      <div className="flex justify-between gap-4"><span><strong>i</strong> bạn thêm oxygen vào bình?</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>ii</strong> bạn lấy bớt sulfur trioxide khỏi bình?</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>iii</strong> áp suất trong bình được hạ xuống?</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>iv</strong> thêm V₂O₅ vào?</span><span className="text-stone-600 shrink-0">[1]</span></div>
                      <div className="flex justify-between gap-4"><span><strong>v</strong> nhiệt độ trong bình được tăng lên?</span><span className="text-stone-600 shrink-0">[1]</span></div>
                    </div>
                  </div>
                  <div>
                    <strong>b i</strong> Đưa ra ba công dụng của sulfuric acid. <span className="text-stone-600">[3]</span>
                  </div>
                  <div className="pl-5">
                    <div className="flex justify-between gap-4">
                      <span><strong>ii</strong> Vì sao cần để càng ít sulfur dioxide thoát vào khí quyển càng tốt khi sản xuất sulfuric acid?</span>
                      <span className="text-stone-600 shrink-0">[1]</span>
                    </div>
                  </div>
                  <div className="pl-5">
                    <div className="flex justify-between gap-4">
                      <span><strong>iii</strong> Giải thích, kèm phương trình cân bằng, cách sulfur dioxide đi vào khí quyển từ một nhà máy điện đốt than.</span>
                      <span className="text-stone-600 shrink-0">[3]</span>
                    </div>
                  </div>
                  <div className="text-right font-semibold text-stone-700">Tổng = 12</div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#bcd7e8]">
                <SolutionInline show={showSolutionsGlobal}>
                  <p>
                    <strong>Bài 1:</strong> a NH<sub>3</sub>. b N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g)
                    (xúc tác Fe). c Ba công dụng: làm phân bón (muối ammonium); sản xuất nitric acid (thuốc nổ, phẩm
                    nhuộm, nylon); bơm trực tiếp vào đất làm phân (hoặc sản xuất chất tẩy rửa). d i NH<sub>4</sub>Cl;
                    ii NH<sub>4</sub>NO<sub>3</sub>; iii (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>. e i dùng chất rắn
                    (trộn rắn rồi đun nóng). ii 2NH<sub>4</sub>Cl(s) + Ca(OH)<sub>2</sub>(s) → CaCl<sub>2</sub>(s) +
                    2H<sub>2</sub>O(l) + 2NH<sub>3</sub>(g).
                  </p>
                  <p>
                    <strong>Bài 2 a:</strong> i thêm O<sub>2</sub> → cân bằng dịch sang phải (chiều thuận). ii lấy bớt
                    SO<sub>3</sub> → dịch sang phải. iii hạ áp suất → dịch sang trái (phía có nhiều mol khí hơn: 3 so
                    với 2). iv thêm V<sub>2</sub>O<sub>5</sub> → không dịch chuyển (xúc tác chỉ làm cân bằng đạt nhanh
                    hơn). v tăng nhiệt độ (phản ứng thuận tỏa nhiệt) → dịch sang trái (chiều thu nhiệt).
                  </p>
                  <p>
                    <strong>b i:</strong> phân bón, chất tẩy rửa, sơn/pigment/phẩm nhuộm, sợi tổng hợp, acid ắc quy,
                    thuộc da, pickling (chọn 3). <strong>ii:</strong> SO<sub>2</sub> thoát ra gây acid rain, phá hủy hệ
                    sinh thái và công trình. <strong>iii:</strong> than chứa tạp chất sulfur; khi đốt: S(s) + O
                    <sub>2</sub>(g) → SO<sub>2</sub>(g) thoát theo khí thải lên khí quyển.
                  </p>
                </SolutionInline>
              </div>
            </div>
          </div>
        </PageWrapper>
      )}
    </div>
  );
};

const SolutionInline: React.FC<{ show: boolean; children: React.ReactNode }> = ({ show, children }) => {
  const [open, setOpen] = React.useState(false);
  const isShown = show || open;
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-900 hover:text-red-700 transition-colors cursor-pointer"
      >
        {isShown ? 'Ẩn đáp án câu cuối chương' : 'Xem đáp án câu cuối chương'}
      </button>
      {isShown && (
        <div className="mt-2 p-2.5 bg-white/90 rounded border border-sky-200 text-xs text-stone-800 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};
