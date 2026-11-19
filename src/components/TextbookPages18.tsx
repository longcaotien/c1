import React from 'react';
import { PageWrapper, QuestionBox, CalloutBox } from './TextbookPages';
import {
  DisplayedCarbonyls,
  Figure18_1,
  Figure18_2,
  Figure18_3,
  Figure18_4,
  Figure18_5,
  Figure18_6,
  Figure18_7,
  Figure18_8,
  Figure18_9,
  Figure18_10,
  MechanismHCN,
  Condensation24DNPH,
  TriIodoScheme,
  Question7Spectra,
} from './TextbookFigures18';

/* ==========================================================================
   CHƯƠNG 18: CARBONYL COMPOUNDS (HỢP CHẤT CARBONYL) — TRANG 234–243
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

const TableGray: React.FC<{ head: string[]; rows: React.ReactNode[][]; caption?: React.ReactNode }> = ({
  head,
  rows,
  caption,
}) => (
  <div className="my-3 font-sans">
    <table className="w-full border-collapse text-[11.5px]">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th key={i} className="bg-[#8d8d8d] text-white text-left font-semibold px-2 py-1.5 border border-white/40">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={i % 2 ? 'bg-[#efefef]' : 'bg-[#e2e2e2]'}>
            {r.map((c, j) => (
              <td key={j} className="px-2 py-1 border border-white/60 text-stone-800">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {caption && <p className="mt-1.5 text-[11px] leading-relaxed text-stone-700">{caption}</p>}
  </div>
);

export interface TextbookPages18Props {
  selectedPageFilter: string;
  showSolutionsGlobal: boolean;
  onViewPageLatex?: (pageId: string) => void;
}

export const TextbookPages18: React.FC<TextbookPages18Props> = ({
  selectedPageFilter,
  showSolutionsGlobal,
  onViewPageLatex,
}) => {
  const shouldShow = (pageId: string) => selectedPageFilter === 'all' || selectedPageFilter === pageId;

  return (
    <div className="space-y-8">
      {/* ===================================================================
          PAGE 234 — TRANG MỞ ĐẦU CHƯƠNG
      =================================================================== */}
      {shouldShow('p234') && (
        <PageWrapper pageNumber={234} side="left" pageId="p234" onViewPageLatex={onViewPageLatex}>
          {/* Fruit photo strip recreated as vector band */}
          <div className="relative h-40 sm:h-48 overflow-hidden rounded-sm mb-0">
            <svg viewBox="0 0 600 190" className="w-full h-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Quả mơ và mận trưng bày">
              <rect width="600" height="190" fill="#7a8c3a" />
              {Array.from({ length: 26 }).map((_, i) => (
                <circle key={'g' + i} cx={20 + (i % 7) * 30 + (i % 3) * 6} cy={20 + Math.floor(i / 7) * 34} r="17" fill={i % 2 ? '#9db84a' : '#8aa83f'} />
              ))}
              {Array.from({ length: 30 }).map((_, i) => (
                <circle key={'p' + i} cx={230 + (i % 6) * 34 + (i % 4) * 5} cy={16 + Math.floor(i / 6) * 33} r="19" fill={i % 3 === 0 ? '#d98c4a' : i % 3 === 1 ? '#c96f3f' : '#e0a060'} />
              ))}
              <rect x="470" width="130" height="190" fill="#5c7a2e" />
              {Array.from({ length: 12 }).map((_, i) => (
                <ellipse key={'w' + i} cx={500 + (i % 3) * 34} cy={30 + Math.floor(i / 3) * 42} rx="20" ry="26" fill="#6f8f35" />
              ))}
            </svg>
          </div>
          {/* Black chapter banner */}
          <div className="bg-[#191919] text-white px-6 py-7 sm:py-9 -mt-1">
            <h1 className="font-sans">
              <span className="block text-xl sm:text-2xl font-bold text-[#e8564a]">Chương 18:</span>
              <span className="block text-2xl sm:text-[32px] font-bold tracking-tight mt-1">Hợp chất carbonyl (Carbonyl compounds)</span>
            </h1>
          </div>

          {/* Learning outcomes */}
          <div className="mt-5 bg-[#f2f0eb] border border-stone-300 rounded-sm p-4 sm:p-5 font-sans">
            <h2 className="text-lg font-bold text-[#d33427] mb-2">Learning outcomes (Chuẩn đầu ra)</h2>
            <p className="text-[13px] font-semibold text-stone-800 mb-2">Bạn cần có khả năng:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-[12.5px] leading-relaxed text-stone-800">
              <ul className="space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>
                    <em>mô tả:</em>
                    <ul className="list-none pl-4 mt-1 space-y-1">
                      <li>– sự hình thành aldehyde và ketone từ quá trình oxi hóa các alcohol bậc một và bậc hai</li>
                      <li>– sự khử các aldehyde và ketone, ví dụ dùng NaBH<sub>4</sub> hoặc LiAlH<sub>4</sub></li>
                      <li>– phản ứng của các aldehyde và ketone với HCN và NaCN</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>mô tả cơ chế của phản ứng cộng nucleophile của hydrogen cyanide</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>mô tả sự nhận biết các hợp chất carbonyl bằng cách dùng thuốc thử 2,4-DNPH</span>
                </li>
              </ul>
              <ul className="space-y-1.5">
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>phân biệt các aldehyde và ketone bằng thử nghiệm với dung dịch Fehling và thuốc thử Tollens</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>mô tả phản ứng của các hợp chất CH<sub>3</sub>CO— với dung dịch iodine trong kiềm</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>suy luận sự có mặt của nhóm CH<sub>3</sub>CH(OH)— trong một alcohol từ phản ứng của nó với dung dịch iodine trong kiềm tạo thành tri-iodomethane</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>phân tích phổ hồng ngoại của một phân tử đơn giản để nhận biết các nhóm chức</span>
                </li>
              </ul>
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 235 — INTRODUCTION + DÃY ĐỒNG ĐẲNG
      =================================================================== */}
      {shouldShow('p235') && (
        <PageWrapper pageNumber={235} side="right" pageId="p235" onViewPageLatex={onViewPageLatex}>
          {/* Red Introduction Banner */}
          <div className="bg-[#d33427] text-white rounded-sm p-5 sm:p-6 mb-7 shadow-sm font-sans">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-2.5">
                <h1 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white">Giới thiệu (Introduction)</h1>
                <p className="text-[13.5px] leading-relaxed text-white/95 text-justify">
                  Các hợp chất carbonyl thơm có mùi rất đặc trưng, giống như mùi hạnh nhân.{' '}
                  <strong className="text-white">Benzaldehyde</strong> được dùng để làm tinh dầu hạnh nhân (almond
                  essence), chất tạo hương dùng trong một số loại bánh ngọt và pudding. Benzaldehyde cũng là một thành
                  phần của các hỗn hợp tạo nên mùi và vị của nhiều loại trái cây như xoài, cherry, mơ, mận và đào. Cấu
                  tạo của heptan-2-one và benzaldehyde được trình bày bên phải:
                </p>
              </div>
              <div className="md:col-span-5">
                <DisplayedCarbonyls />
              </div>
            </div>
            <div className="mt-4">
              <Figure18_1 />
            </div>
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
            <div>
              <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2.5 leading-snug">
                Dãy đồng đẳng của aldehyde và ketone
              </h2>
              <p className="mb-3 text-justify">
                Chúng ta đã gặp các aldehyde và ketone, những nhóm chính của các hợp chất carbonyl, ở Chương 17. Hãy
                nhớ rằng:
              </p>
              <ul className="space-y-1.5 text-[13px] mb-3">
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>các aldehyde có thể được tạo thành từ sự oxi hóa các alcohol bậc một</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
                  <span>các ketone có thể được tạo thành từ sự oxi hóa các alcohol bậc hai (xem trang 236).</span>
                </li>
              </ul>
              <p className="mb-3 text-justify">
                Trong các aldehyde, nguyên tử carbon của nhóm carbonyl, C=O, liên kết với một nguyên tử carbon và một
                nguyên tử hydrogen. Nói cách khác, nhóm carbonyl nằm ở đầu mút của mạch carbon.
              </p>
              <p className="text-justify">
                Trong các ketone, nhóm carbonyl gắn với hai nguyên tử carbon khác. Các bảng 18.1 và 18.2 đưa ra các ví
                dụ ở đầu của những dãy đồng đẳng này.
              </p>
            </div>
            <div>
              <TableGray
                head={['Tên (Name)', 'Công thức cấu tạo (Structural formula)']}
                rows={[
                  ['methanal', 'HCHO'],
                  ['ethanal', 'CH₃CHO'],
                  ['propanal', 'CH₃CH₂CHO'],
                  ['butanal', 'CH₃CH₂CH₂CHO'],
                  ['pentanal', 'CH₃CH₂CH₂CH₂CHO'],
                ]}
                caption={
                  <>
                    <strong>Bảng 18.1</strong> Tên của các aldehyde bắt nguồn từ tên của alkane tương đương, với hậu
                    tố ‘-e’ ở cuối tên được thay bằng ‘-al’. Lưu ý rằng không cần con số khi gọi tên các aldehyde, vì
                    nhóm carbonyl luôn ở đầu mút của mạch carbon.
                  </>
                }
              />
              <TableGray
                head={['Tên (Name)', 'Công thức cấu tạo (Structural formula)']}
                rows={[
                  ['propanone', 'CH₃COCH₃'],
                  ['butanone', 'CH₃COCH₂CH₃'],
                  ['pentan-2-one', 'CH₃COCH₂CH₂CH₃'],
                  ['pentan-3-one', 'CH₃CH₂COCH₂CH₃'],
                ]}
                caption={
                  <>
                    <strong>Bảng 18.2</strong> Các ketone được gọi tên bằng cách thay ‘-e’ bằng ‘-one’. Tuy nhiên,
                    với các phân tử ketone dài hơn butanone, chúng ta cần chỉ rõ vị trí của nhóm carbonyl.
                  </>
                }
              />
            </div>
          </div>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 236 — CÂU HỎI 1 + ĐIỀU CHẾ (OXI HÓA)
      =================================================================== */}
      {shouldShow('p236') && (
        <PageWrapper pageNumber={236} side="left" pageId="p236" onViewPageLatex={onViewPageLatex}>
          <QuestionBox
            number={1}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a i:</strong> hexanal (6 carbon, nhóm —CHO ở đầu mạch).{' '}
                  <strong>ii:</strong> octan-2-one (8 carbon, nhóm C=O ở carbon số 2).
                </p>
                <p>
                  <strong>b:</strong> Công thức khai triển: methanal H—CHO (C có 2 H và =O); propanal
                  CH<sub>3</sub>—CH<sub>2</sub>—CHO; pentan-3-one CH<sub>3</sub>—CH<sub>2</sub>—CO—CH<sub>2</sub>—CH
                  <sub>3</sub> (C=O ở giữa mạch 5 carbon).
                </p>
                <p>
                  <strong>c:</strong> Công thức skeletal: hexanal là mạch zig-zag 6 đỉnh kết thúc bằng nhóm CHO;
                  octan-2-one là mạch zig-zag 8 đỉnh với nhánh =O ở đỉnh thứ 2.
                </p>
              </>
            }
          >
            <div>
              <strong>a</strong> Gọi tên các hợp chất sau:
              <ol className="list-none pl-4 mt-1 space-y-0.5 font-mono text-[12px]">
                <li>
                  <strong>i</strong>&nbsp; CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CHO
                </li>
                <li>
                  <strong>ii</strong>&nbsp; CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CH
                  <sub>2</sub>COCH<sub>3</sub>
                </li>
              </ol>
            </div>
            <div>
              <strong>b</strong> Vẽ công thức khai triển (displayed formula) của:
              <ol className="list-none pl-4 mt-1 space-y-0.5">
                <li>
                  <strong>i</strong>&nbsp; methanal
                </li>
                <li>
                  <strong>ii</strong>&nbsp; propanal
                </li>
                <li>
                  <strong>iii</strong>&nbsp; pentan-3-one.
                </li>
              </ol>
            </div>
            <div>
              <strong>c</strong> Vẽ công thức skeletal (khung xương) của các hợp chất liệt kê ở phần a.
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2.5 leading-snug">
            Điều chế aldehyde và ketone (Preparation of aldehydes and ketones)
          </h2>

          <CalloutBox title="1 Oxi hóa một alcohol bậc một (Oxidation of a primary alcohol)">
            <p>Phương trình tổng quát cho phản ứng điều chế một aldehyde từ một alcohol bậc một là:</p>
            <div className="text-center font-mono text-[12.5px] py-1">
              primary alcohol + nguyên tử oxygen từ tác nhân oxi hóa ⟶ aldehyde + nước
            </div>
            <p>Ví dụ:</p>
            <EqBox>
              <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                <UnderLabel>
                  <span>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH</span>
                  <span className="text-[10px] text-stone-500 font-sans">propan-1-ol</span>
                </UnderLabel>
                <span className="pt-0.5">+ [O]</span>
                <span className="pt-0.5 px-1">⟶</span>
                <UnderLabel>
                  <span>CH<sub>3</sub>CH<sub>2</sub>CHO</span>
                  <span className="text-[10px] text-stone-500 font-sans">propanal</span>
                </UnderLabel>
                <span className="pt-0.5">+ H<sub>2</sub>O</span>
              </div>
            </EqBox>
            <p>
              Tác nhân oxi hóa được dùng là dung dịch potassium dichromate(VI) được acid hóa bằng dung dịch sulfuric
              acid loãng. Để tạo ra một aldehyde, alcohol bậc một được đun nóng nhẹ với dung dịch dichromate đã acid
              hóa. Hỗn hợp phản ứng chuyển sang màu xanh lục khi các ion dichromate màu cam, Cr<sub>2</sub>O
              <sub>7</sub><sup>2−</sup>, bị khử thành các ion Cr<sup>3+</sup>(aq) màu xanh lục.
            </p>
            <p>
              Tác nhân oxi hóa được thêm từng giọt một vào alcohol đang ấm. Aldehyde tạo thành cần được chưng cất cất
              ra ngay khi nó hình thành trong bình phản ứng. Có thể làm vậy vì sản phẩm aldehyde luôn có nhiệt độ sôi
              thấp hơn alcohol tương ứng. Nếu aldehyde không được chưng cất ra ngay khi tạo thành, việc đun nóng thêm
              với dung dịch dichromate đã acid hóa sẽ oxi hóa aldehyde tạo thành thành một carboxylic acid. Bộ dụng cụ
              dùng để điều chế một mẫu ethanal được trình bày ở Hình 18.2.
            </p>
          </CalloutBox>

          <Figure18_2 />

          <CalloutBox title="2 Oxi hóa một alcohol bậc hai (Oxidation of a secondary alcohol)">
            <p>Phương trình tổng quát để điều chế một ketone là:</p>
            <div className="text-center font-mono text-[12.5px] py-1">
              secondary alcohol + nguyên tử oxygen từ tác nhân oxi hóa ⟶ ketone + nước
            </div>
            <p>Ví dụ:</p>
            <EqBox>
              <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
                <UnderLabel>
                  <span>CH<sub>3</sub>CH(OH)CH<sub>3</sub></span>
                  <span className="text-[10px] text-stone-500 font-sans">propan-2-ol</span>
                </UnderLabel>
                <span className="pt-0.5">+ [O]</span>
                <span className="pt-0.5 px-1">⟶</span>
                <UnderLabel>
                  <span>CH<sub>3</sub>COCH<sub>3</sub></span>
                  <span className="text-[10px] text-stone-500 font-sans">propanone</span>
                </UnderLabel>
                <span className="pt-0.5">+ H<sub>2</sub>O</span>
              </div>
            </EqBox>
            <p>
              Một lần nữa, tác nhân oxi hóa được dùng là dung dịch potassium dichromate(VI) được acid hóa bằng dung
              dịch sulfuric acid loãng. Để tạo ra một ketone, tác nhân oxi hóa này phải được đun nóng với một alcohol
              bậc hai. Ketone tạo thành không thể bị oxi hóa tiếp, ngay cả khi ta đun hồi lưu hỗn hợp phản ứng và thêm
              dư tác nhân oxi hóa. Do đó ta không cần chưng cất sản phẩm ketone ra ngay lập tức.
            </p>
          </CalloutBox>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 237 — CÂU 2, KHỬ, CÂU 3, CỘNG HCN
      =================================================================== */}
      {shouldShow('p237') && (
        <PageWrapper pageNumber={237} side="right" pageId="p237" onViewPageLatex={onViewPageLatex}>
          <QuestionBox
            number={2}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a i:</strong> CH<sub>3</sub>CH<sub>2</sub>OH + [O] ⟶ CH<sub>3</sub>CHO + H<sub>2</sub>O.{' '}
                  <strong>ii:</strong> viết khai triển toàn bộ liên kết C—H, C—O, O—H của ethanol và ethanal.{' '}
                  <strong>iii:</strong> thêm từng giọt dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sub>2</sub>SO
                  <sub>4</sub> loãng vào ethanol ấm; ethanal (sôi ≈ 21 °C) cất ra ngay khi tạo thành và được thu vào
                  bình nhận làm lạnh.
                </p>
                <p>
                  <strong>b i:</strong> CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub> + [O] ⟶ CH<sub>3</sub>COCH
                  <sub>2</sub>CH<sub>3</sub> + H<sub>2</sub>O. <strong>ii:</strong> dung dịch chuyển từ màu cam
                  (Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>) sang màu xanh lục (Cr<sup>3+</sup>).{' '}
                  <strong>iii:</strong> ketone không bị oxi hóa tiếp nên butanone vẫn là sản phẩm cuối; chỉ quan sát
                  được sự đổi màu cam → xanh lục của dichromate.
                </p>
              </>
            }
          >
            <div>
              <strong>a i</strong> Viết phương trình cân bằng cho sự oxi hóa ethanol thành ethanal, dùng [O] để biểu
              diễn tác nhân oxi hóa.
              <div className="pl-4 mt-1 space-y-1">
                <div>
                  <strong>ii</strong> Viết lại phương trình ở phần a i bằng công thức khai triển.
                </div>
                <div>
                  <strong>iii</strong> Dùng các chi tiết thực nghiệm để giải thích cách tiến hành và thu lấy một mẫu
                  ethanal.
                </div>
              </div>
            </div>
            <div>
              <strong>b i</strong> Viết phương trình cân bằng cho sự oxi hóa butan-2-ol thành butanone, dùng [O] để
              biểu diễn tác nhân oxi hóa.
              <div className="pl-4 mt-1 space-y-1">
                <div>
                  <strong>ii</strong> Bạn quan sát được gì trong bình phản ứng nếu tác nhân oxi hóa dùng ở phần b i là
                  dung dịch potassium dichromate(VI) đã acid hóa?
                </div>
                <div>
                  <strong>iii</strong> Điều gì xảy ra nếu đun nóng hỗn hợp với dư dung dịch sulfuric acid và potassium
                  dichromate(VI) đã acid hóa?
                </div>
              </div>
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2 leading-snug">
            Khử aldehyde và ketone (Reduction of aldehydes and ketones)
          </h2>
          <p className="mb-3 text-justify">Sự khử hóa học một aldehyde hoặc một ketone tạo ra một alcohol:</p>
          <EqBox>
            <div>aldehyde + tác nhân khử ⟶ alcohol bậc một (primary alcohol)</div>
            <div>ketone + tác nhân khử ⟶ alcohol bậc hai (secondary alcohol)</div>
          </EqBox>
          <p className="mb-3 text-justify">
            Tác nhân khử được dùng thường là dung dịch kiềm trong nước của sodium tetrahydridoborate, NaBH
            <sub>4</sub>, hoặc lithium tetrahydridoaluminate, LiAlH<sub>4</sub>, trong ether khô (dry ether).
          </p>
          <p className="mb-2">Phản ứng khử được tiến hành bằng một trong hai cách:</p>
          <ul className="space-y-1.5 text-[13px] mb-3">
            <li className="flex gap-2">
              <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
              <span>đun ấm aldehyde hoặc ketone với dung dịch kiềm trong nước của sodium tetrahydridoborate, hoặc</span>
            </li>
            <li className="flex gap-2">
              <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
              <span>
                thêm lithium tetrahydridoaluminate hòa tan trong ether khô vào aldehyde hoặc ketone ở nhiệt độ phòng.
              </span>
            </li>
          </ul>
          <p className="mb-3 text-justify">
            Trong hai tác nhân khử, lithium tetrahydridoaluminate là tác nhân khử mạnh hơn sodium tetrahydridoborate.
          </p>
          <p className="mb-3 text-justify">
            Theo cùng cách ta dùng kí hiệu [O] trong các phản ứng oxi hóa hữu cơ, ta dùng kí hiệu [H] trong các phương
            trình khử. [H] biểu diễn một nguyên tử hydrogen từ tác nhân khử. Hãy xem các phương trình tóm tắt các phản
            ứng khử này:
          </p>
          <EqBox>
            <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
              <UnderLabel>
                <span>CH<sub>3</sub>CHO + 2[H]</span>
                <span className="text-[10px] text-stone-500 font-sans">ethanal</span>
              </UnderLabel>
              <span className="pt-0.5 px-1">⟶</span>
              <UnderLabel>
                <span>CH<sub>3</sub>CH<sub>2</sub>OH</span>
                <span className="text-[10px] text-stone-500 font-sans">ethanol</span>
              </UnderLabel>
            </div>
            <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
              <UnderLabel>
                <span>CH<sub>3</sub>COCH<sub>3</sub> + 2[H]</span>
                <span className="text-[10px] text-stone-500 font-sans">propanone</span>
              </UnderLabel>
              <span className="pt-0.5 px-1">⟶</span>
              <UnderLabel>
                <span>CH<sub>3</sub>CH(OH)CH<sub>3</sub></span>
                <span className="text-[10px] text-stone-500 font-sans">propan-2-ol</span>
              </UnderLabel>
            </div>
          </EqBox>

          <QuestionBox
            number={3}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a:</strong> CH<sub>3</sub>CH<sub>2</sub>CHO + 2[H] ⟶ CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH
                  (propan-1-ol).
                </p>
                <p>
                  <strong>b:</strong> pentan-3-ol (nhóm C=O ở C3 bị khử thành C—OH ở C3).
                </p>
              </>
            }
          >
            <div>
              <strong>a</strong> Viết phương trình cân bằng cho phản ứng xảy ra khi propanal được đun ấm với dung dịch
              kiềm trong nước của sodium tetrahydridoborate, dùng kí hiệu [H] để biểu diễn một nguyên tử hydrogen từ
              tác nhân khử.
            </div>
            <div>
              <strong>b</strong> Gọi tên sản phẩm tạo thành trong phản ứng khử nếu pentan-3-one được dùng thay cho
              propanal, với lithium tetrahydridoaluminate trong ether khô.
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2 leading-snug">
            Cộng nucleophile với HCN (Nucleophilic addition with HCN)
          </h2>
          <p className="mb-3 text-justify">
            Các phản ứng cộng mà ta đã gặp liên quan đến sự cộng electrophile qua liên kết C=C của các phân tử alkene
            (xem trang 209). Các aldehyde và ketone đều trải qua phản ứng cộng với hydrogen cyanide, HCN. Trong trường
            hợp này, sự cộng HCN diễn ra qua liên kết C=O. Tuy nhiên, nguyên tử carbon là tác nhân electrophile (chất
            thân electron). Ta có thể chứng minh điều này bằng phản ứng{' '}
            <strong className="text-[#d33427] font-sans">cộng nucleophile</strong> của propanal với HCN. HCN được sinh
            ra tại chỗ (in situ) bằng phản ứng của sodium cyanide, NaCN, với sulfuric acid loãng.
          </p>
          <EqBox>
            <div className="flex items-start justify-center gap-2 font-mono flex-wrap">
              <UnderLabel>
                <span>CH<sub>3</sub>CH<sub>2</sub>CHO + HCN</span>
                <span className="text-[10px] text-stone-500 font-sans">propanal</span>
              </UnderLabel>
              <span className="pt-0.5 px-1">⟶</span>
              <UnderLabel>
                <span>CH<sub>3</sub>CH<sub>2</sub>CH(OH)CN</span>
                <span className="text-[10px] text-stone-500 font-sans">2-hydroxybutanenitrile</span>
              </UnderLabel>
            </div>
          </EqBox>
          <p className="mb-3 text-justify">
            Lưu ý rằng một nguyên tử carbon đã được thêm vào phân tử propanal bằng cách bẻ gãy liên kết C=O.
          </p>
          <p className="mb-3 text-justify">
            Đây là một phản ứng hữu ích trong hóa học tổng hợp, vì nó làm tăng chiều dài mạch hydrocarbon của phân tử
            aldehyde ban đầu thêm một nguyên tử carbon.
          </p>
          <p className="mb-2">Nhóm nitrile, —C≡N, có thể được:</p>
          <ul className="space-y-1.5 text-[13px] mb-3">
            <li className="flex gap-2">
              <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
              <span>thủy phân thành một carboxylic acid</span>
            </li>
            <li className="flex gap-2">
              <span className="w-2 h-2 bg-[#d33427] mt-1.5 shrink-0" />
              <span>khử thành một amine.</span>
            </li>
          </ul>
          <p className="mb-2 text-justify">Sự thủy phân có thể được tiến hành bằng cách đun hồi lưu với hydrochloric acid loãng:</p>
          <EqBox>
            <div className="font-mono">—CN + H⁺ + H₂O ⟶ —COOH + NH₄⁺</div>
          </EqBox>
          <p className="mb-2 text-justify">Sự khử nhóm nitrile thành một amine có thể được tiến hành dùng sodium và ethanol:</p>
          <EqBox>
            <div className="font-mono">—CN + 4[H] ⟶ —CH₂NH₂</div>
          </EqBox>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 238 — CƠ CHẾ + CÂU 4 + THỬ VỚI 2,4-DNPH
      =================================================================== */}
      {shouldShow('p238') && (
        <PageWrapper pageNumber={238} side="left" pageId="p238" onViewPageLatex={onViewPageLatex}>
          <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2 leading-snug">
            Cơ chế của phản ứng cộng nucleophile (Mechanism of nucleophilic addition)
          </h2>
          <p className="mb-3 text-justify">
            Nhóm carbonyl, C=O, trong các aldehyde và ketone bị phân cực do độ âm điện cao của nguyên tử oxygen. Các
            electron trong liên kết C=O bị kéo về phía nguyên tử O, làm cho nó mang một phần điện tích âm và để lại
            nguyên tử C mang một phần điện tích dương. Điều này khiến nguyên tử C dễ bị tấn công bởi một nucleophile,
            chẳng hạn như ion cyanide, CN⁻.
          </p>

          <MechanismHCN />

          <p className="mb-3 mt-3 text-justify">
            Tất cả các aldehyde và ketone đều tạo thành các ‘2-hydroxynitrile’ khi chúng trải qua phản ứng cộng
            nucleophile, vì nhóm —OH (hydroxyl) luôn gắn với cùng nguyên tử carbon như nhóm nitrile.
          </p>
          <p className="mb-3 text-justify">
            Tuy nhiên, bắt đầu từ aldehyde methanal, HCHO, hydroxynitrile tạo thành trong phản ứng cộng nucleophile
            với HCN sẽ được gọi là 2-hydroxyethanenitrile. Trong trường hợp này không cần chèn chữ số ‘2’ vào đầu
            tên, vì nhóm —OH chỉ có thể gắn vào đúng nguyên tử carbon thuộc nhóm nitrile.
          </p>

          <QuestionBox
            number={4}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a i:</strong> 2-hydroxypropanenitrile, CH<sub>3</sub>CH(OH)CN.{' '}
                  <strong>ii:</strong> 2-hydroxy-2-methylpropanenitrile, (CH<sub>3</sub>)<sub>2</sub>C(OH)CN.
                </p>
                <p>
                  <strong>b:</strong> Bước 1: cặp electron tự do trên C của ion CN⁻ tấn công nguyên tử C mang δ⁺ của
                  nhóm C=O; cặp electron π của C=O chuyển lên O tạo intermediate alkoxide (O⁻). Bước 2: O⁻ của
                  intermediate nhận H⁺ (từ HCN / acid loãng / nước) tạo sản phẩm 2-hydroxypropanenitrile.
                </p>
              </>
            }
          >
            <div>
              <strong>a</strong> Gọi tên sản phẩm hữu cơ tạo thành trong phản ứng cộng nucleophile của HCN vào:
              <ol className="list-none pl-4 mt-1 space-y-0.5">
                <li>
                  <strong>i</strong>&nbsp; ethanal
                </li>
                <li>
                  <strong>ii</strong>&nbsp; propanone.
                </li>
              </ol>
            </div>
            <div>
              <strong>b</strong> Dùng sơ đồ và các mũi tên cong để mô tả cơ chế của phản ứng ở phần a i.
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-1.5 leading-snug">
            Thử nghiệm aldehyde và ketone (Testing for aldehydes and ketones)
          </h2>
          <h3 className="text-base font-bold text-stone-600 font-sans mb-2">đối với nhóm carbonyl (for the carbonyl group)</h3>

          <CalloutBox title="Thử với 2,4-DNPH (Testing with 2,4-DNPH)">
            <p>
              Sự có mặt của một nhóm carbonyl trong một aldehyde hoặc ketone có thể được thử nghiệm dễ dàng bằng cách
              thêm một dung dịch 2,4-dinitrophenylhydrazine (thường viết tắt là 2,4-DNPH). Nếu một aldehyde hoặc
              ketone có mặt, một kết tủa màu cam đậm được tạo thành (Hình 18.3).
            </p>
          </CalloutBox>

          <Figure18_3 />

          <p className="mb-3 text-justify">Cấu tạo của 2,4-dinitrophenylhydrazine như sau (xem sơ đồ phản ứng ngưng tụ ở trang sau).</p>
          <p className="mb-3 text-justify">
            Kết tủa tạo thành có thể được tinh chế bằng cách kết tinh lại và nhiệt độ nóng chảy của nó có thể được đo
            bằng thực nghiệm. Danh tính của hợp chất đã kết tủa sau đó có thể được tìm ra bằng cách tra cứu nhiệt độ
            nóng chảy. Từ đó, có thể nhận biết aldehyde hoặc ketone cụ thể đã dùng trong phép thử.
          </p>
          <p className="text-justify">
            Phản ứng của một aldehyde hoặc ketone với 2,4-dinitrophenylhydrazine là một ví dụ về{' '}
            <strong className="text-[#d33427] font-sans">phản ứng ngưng tụ</strong> (condensation reaction). Trong một
            phản ứng ngưng tụ, hai phân tử kết hợp với nhau và loại bỏ một phân tử nhỏ; trong trường hợp này là nước.
            Phương trình cho phản ứng của ethanal với 2,4-DNPH:
          </p>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 239 — NGƯNG TỤ, TOLLENS, FEHLING, PHÂN BIỆT
      =================================================================== */}
      {shouldShow('p239') && (
        <PageWrapper pageNumber={239} side="right" pageId="p239" onViewPageLatex={onViewPageLatex}>
          <Condensation24DNPH />
          <p className="mb-4 text-justify">
            Các lớp hợp chất hữu cơ khác cũng chứa nhóm carbonyl (chẳng hạn các carboxylic acid và ester) không tạo
            kết tủa với 2,4-DNPH.
          </p>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mb-2 leading-snug">
            Phân biệt aldehyde và ketone (Distinguishing between aldehydes and ketones)
          </h2>
          <p className="mb-4 text-justify">
            Như ta đã thấy ở trang 236, các aldehyde có thể bị oxi hóa tiếp thành các carboxylic acid, nhưng các
            ketone thì không thể bị oxi hóa dễ dàng. Ta có thể dùng sự khác biệt này để phân biệt giữa một aldehyde và
            một ketone trong các thử nghiệm hóa học đơn giản. Hai thử nghiệm được dùng phổ biến nhất liên quan đến
            thuốc thử Tollens và dung dịch Fehling.
          </p>

          <CalloutBox title="Thử với thuốc thử Tollens (Testing with Tollens' reagent)">
            <p>
              <strong className="text-[#d33427]">Thuốc thử Tollens</strong> là dung dịch nước của silver nitrate trong
              dung dịch ammonia dư, đôi khi được gọi là dung dịch ammoniacal silver nitrate. Các ion bạc, Ag⁺, trong
              dung dịch đóng vai trò một tác nhân oxi hóa nhẹ. Khi được hâm nóng, các ion Ag⁺ sẽ oxi hóa một aldehyde
              thành một ion carboxylate.
            </p>
            <p>
              Trong điều kiện kiềm, bất kỳ carboxylic acid nào tạo thành đều lập tức bị trung hòa thành ion
              carboxylate, —COO⁻, khi H⁺ bị tách ra khỏi —COOH và một muối được tạo thành.
            </p>
            <p>
              Trong phản ứng oxi hóa – khử với một aldehyde, bản thân các ion Ag⁺ bị khử thành các nguyên tử bạc. Các
              nguyên tử bạc tạo thành một lớp ‘gương’ bên trong ống nghiệm, cho kết quả dương tính với một aldehyde
              (Hình 18.4).
            </p>
            <p>
              Sẽ không quan sát thấy sự thay đổi nào khi một ketone được hâm nóng với thuốc thử Tollens, vì không có
              phản ứng oxi hóa nào diễn ra. Hỗn hợp vẫn không màu trong ống nghiệm.
            </p>
          </CalloutBox>

          <Figure18_4 />

          <CalloutBox title="Thử với dung dịch Fehling (Testing with Fehling's solution)">
            <p>
              <strong className="text-[#d33427]">Dung dịch Fehling</strong> là một dung dịch kiềm chứa các ion
              copper(II). Khi hâm nóng với một aldehyde, các ion Cu²⁺ đóng vai trò tác nhân oxi hóa. Aldehyde bị oxi
              hóa thành ion carboxylate trong khi các ion Cu²⁺ bị khử thành các ion Cu⁺. Dung dịch Fehling màu xanh
              lam trong chuyển thành một kết tủa copper(I) oxide màu đỏ đục hình thành khắp dung dịch (Hình 18.5).
            </p>
            <p>Một lần nữa, các ketone không bị oxi hóa, nên dung dịch Fehling vẫn màu xanh lam khi hâm nóng.</p>
          </CalloutBox>

          <Figure18_5 />
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 240 — CÂU 5 + TRI-IODOMETHANE
      =================================================================== */}
      {shouldShow('p240') && (
        <PageWrapper pageNumber={240} side="left" pageId="p240" onViewPageLatex={onViewPageLatex}>
          <QuestionBox
            number={5}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a:</strong> Mỗi hợp chất carbonyl trong bảng đều tạo kết tủa màu cam đậm / vàng với 2,4-DNPH.
                </p>
                <p>
                  <strong>b i:</strong> Nhiệt độ nóng chảy 126 °C trùng với cả butanal lẫn propanone ⇒ chưa thể kết
                  luận duy nhất; <strong>ii:</strong> kết tủa cam với Fehling ⇒ chất đó là aldehyde ⇒ butanal;{' '}
                  <strong>iii:</strong> butanal + thuốc thử Tollens hâm nóng → gương bạc; butanone → không thay đổi
                  (dung dịch không màu).
                </p>
                <p>
                  <strong>c:</strong> Ag⁺ + e⁻ ⟶ Ag. <strong>d:</strong> Cu²⁺ + e⁻ ⟶ Cu⁺.
                </p>
              </>
            }
          >
            <p className="mb-2">
              Nhiệt độ nóng chảy của các dẫn xuất từ phản ứng giữa 2,4-DNPH với nhiều aldehyde và ketone khác nhau được
              trình bày trong bảng.
            </p>
            <table className="w-full border-collapse text-[11.5px] font-sans mb-2">
              <thead>
                <tr>
                  <th className="bg-[#c6b299] text-white text-left font-semibold px-2 py-1.5 border border-white/40">
                    Sản phẩm phản ứng giữa 2,4-DNPH và …
                  </th>
                  <th className="bg-[#c6b299] text-white text-left font-semibold px-2 py-1.5 border border-white/40">
                    Nhiệt độ nóng chảy / °C
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['ethanal', '168'],
                  ['propanal', '155'],
                  ['butanal', '126'],
                  ['propanone', '126'],
                  ['butanone', '116'],
                ].map(([n, mp], i) => (
                  <tr key={n} className={i % 2 ? 'bg-[#efe7d8]' : 'bg-[#e7dcc6]'}>
                    <td className="px-2 py-1 border border-white/60">{n}</td>
                    <td className="px-2 py-1 border border-white/60 text-center">{mp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <strong>a</strong> Quan sát được gì khi mỗi hợp chất carbonyl trong bảng được trộn với 2,4-DNPH?
            </div>
            <div>
              <strong>b</strong> Một dẫn xuất được tạo thành từ phản ứng giữa 2,4-DNPH và một hợp chất carbonyl chưa
              biết:
              <ol className="list-none pl-4 mt-1 space-y-1">
                <li>
                  <strong>i</strong> Nhiệt độ nóng chảy của dẫn xuất là 126 °C. Kết quả này cho biết điều gì?
                </li>
                <li>
                  <strong>ii</strong> Hợp chất carbonyl chưa biết tạo một kết tủa màu cam khi được hâm nóng với dung
                  dịch Fehling. Gọi tên hợp chất chưa biết đó.
                </li>
                <li>
                  <strong>iii</strong> Mô tả và giải thích các kết quả thử nghiệm thu được khi hợp chất gọi tên ở phần
                  b ii được hâm nóng với thuốc thử Tollens, và khi phép thử được thực hiện với butanone.
                </li>
              </ol>
            </div>
            <div>
              <strong>c</strong> Viết một nửa phương trình (half-equation) cho thấy các ion bạc đóng vai trò một tác
              nhân oxi hóa trong một phép thử dương tính với một aldehyde.
            </div>
            <div>
              <strong>d</strong> Viết một nửa phương trình cho thấy các ion copper(II) đóng vai trò một tác nhân oxi
              hóa trong một phép thử dương tính với một aldehyde.
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2 leading-snug">
            Phản ứng tạo tri-iodomethane (Reactions to form tri-iodomethane)
          </h2>
          <p className="mb-3 text-justify">
            Tri-iodomethane (iodoform) tạo thành một kết tủa màu vàng với các methyl ketone, tức là các hợp chất chứa
            nhóm CH<sub>3</sub>CO— (Hình 18.6). Lưu ý rằng một alcohol chứa nhóm CH<sub>3</sub>CH(OH)— cũng cho kết
            quả dương tính. Các nhà hóa học dùng sự xuất hiện của kết tủa vàng làm bằng chứng cho nhóm CH
            <sub>3</sub>CO— trong một hợp chất chưa biết.
          </p>
          <p className="mb-3 text-justify">
            Thuốc thử được dùng là một dung dịch kiềm của iodine, được hâm nóng cùng với chất cần thử.
          </p>

          <Figure18_6 />

          <p className="mb-2 text-justify">Phản ứng diễn ra theo hai bước:</p>
          <ol className="list-decimal pl-6 space-y-1.5 text-[13px] mb-3">
            <li>hợp chất carbonyl bị halogen hóa — ba nguyên tử hydrogen trong nhóm CH<sub>3</sub> được thay bằng các nguyên tử iodine</li>
            <li>intermediate bị thủy phân để tạo thành kết tủa vàng tri-iodomethane, CHI<sub>3</sub> (Hình 18.6).</li>
          </ol>
          <p className="mb-3 text-justify">
            Khi được tách ra khỏi hỗn hợp phản ứng, các tinh thể vàng của tri-iodomethane có thể được nhận dạng chắc
            chắn bằng nhiệt độ nóng chảy 119 °C của chúng.
          </p>
          <p className="mb-2 text-justify">Dưới đây là ví dụ với một nhóm alkyl R trong một methyl ketone:</p>

          <TriIodoScheme />

          <h3 className="text-base font-bold text-stone-600 font-sans mt-4 mb-2">
            Thử nghiệm nhóm CH<sub>3</sub>CH(OH)— (Testing for the CH<sub>3</sub>CH(OH)— group)
          </h3>
          <p className="mb-3 text-justify">
            Thử nghiệm tri-iodomethane cũng có thể được dùng để nhận biết sự có mặt của một nhóm alcohol bậc hai trên
            một nguyên tử carbon kề cận một nhóm methyl. Nhóm CH<sub>3</sub>CH(OH)— này trước hết bị oxi hóa bởi dung
            dịch iodine trong kiềm. Sự oxi hóa này tạo thành một methyl ketone, RCOCH<sub>3</sub>, sau đó trải qua
            hai bước trình bày ở trên để cho kết tủa vàng tri-iodomethane, CHI<sub>3</sub>.
          </p>
          <p className="text-justify">
            Bạn nên lưu ý rằng có hai sản phẩm hữu cơ được tạo thành trong phản ứng này: một là tri-iodomethane và
            sản phẩm kia là muối sodium của một carboxylic acid.
          </p>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 241 — CÂU 6 + PHỔ HỒNG NGOẠI + BẢNG 18.3
      =================================================================== */}
      {shouldShow('p241') && (
        <PageWrapper pageNumber={241} side="right" pageId="p241" onViewPageLatex={onViewPageLatex}>
          <QuestionBox
            number={6}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a i:</strong> tri-iodomethane (iodoform), CHI<sub>3</sub>: nguyên tử C liên kết với 3 nguyên
                  tử I và 1 nguyên tử H. <strong>ii:</strong> Bước 1: CH<sub>3</sub>COCI<sub>3</sub>; Bước 2: CH
                  <sub>3</sub>COO⁻Na⁺ (sodium ethanoate) và CHI<sub>3</sub>.
                </p>
                <p>
                  <strong>b:</strong> ethanol bị dung dịch iodine trong kiềm oxi hóa thành ethanal CH<sub>3</sub>CHO
                  (chứa nhóm CH<sub>3</sub>CO—); ethanal tiếp tục bị iod hóa rồi thủy phân cho kết tủa vàng CHI
                  <sub>3</sub> và sodium methanoate, HCOO⁻Na⁺.
                </p>
                <p>
                  <strong>c:</strong> Cho kết tủa vàng: <strong>i</strong> butanone, <strong>ii</strong> pentan-2-one
                  và <strong>iv</strong> ethanal (đều chứa nhóm CH<sub>3</sub>CO—). Không cho: iii butanal, v
                  pentan-3-one, vi methanal.
                </p>
              </>
            }
          >
            <div>
              <strong>a i</strong> Khi propanone được hâm nóng với dung dịch iodine trong kiềm, một kết tủa màu vàng
              được tạo thành. Gọi tên và vẽ công thức khai triển của kết tủa vàng đó.
              <div className="pl-4 mt-1">
                <strong>ii</strong> Cho biết công thức cấu tạo của các sản phẩm hữu cơ tạo thành ở cả hai bước của
                phản ứng trong phần i.
              </div>
            </div>
            <div>
              <strong>b</strong> Giải thích, kèm tên các sản phẩm hữu cơ tạo thành, vì sao ethanol cho kết quả thử
              dương tính khi được hâm nóng với dung dịch iodine trong kiềm.
            </div>
            <div>
              <strong>c</strong> Hợp chất nào sau đây cho kết tủa màu vàng khi xử lý với iodine trong dung dịch kiềm
              nước:
              <ol className="list-none pl-4 mt-1 space-y-0.5 grid grid-cols-2 gap-x-4">
                <li><strong>i</strong>&nbsp; butanone</li>
                <li><strong>ii</strong>&nbsp; pentan-2-one</li>
                <li><strong>iii</strong>&nbsp; butanal</li>
                <li><strong>iv</strong>&nbsp; ethanal</li>
                <li><strong>v</strong>&nbsp; pentan-3-one</li>
                <li><strong>vi</strong>&nbsp; methanal</li>
              </ol>
            </div>
          </QuestionBox>

          <h2 className="text-xl font-bold text-[#d33427] font-sans mt-5 mb-2 leading-snug">
            Phổ hồng ngoại (Infra-red spectroscopy)
          </h2>
          <p className="mb-3 text-justify">
            Trong <strong className="text-[#d33427] font-sans">phổ hồng ngoại</strong>, mẫu chất được phân tích được
            chiếu xạ bằng bức xạ điện từ trong vùng hồng ngoại của phổ điện từ. Máy được sử dụng gọi là máy quang phổ
            (spectrophotometer), và nó phát hiện cường độ của mỗi bước sóng bức xạ hồng ngoại đi qua mẫu.
          </p>
          <p className="mb-3 text-justify">
            Kĩ thuật phân tích này đặc biệt hữu ích cho các nhà hóa học hữu cơ vì mọi phân tử hữu cơ đều hấp thụ bức
            xạ trong vùng bước sóng hồng ngoại. Năng lượng được hấp thụ tương ứng với những thay đổi trong dao động
            của các liên kết giữa các nguyên tử. Các liên kết có thể dao động bằng cách co giãn (stretching), uốn
            (bending) và xoay (twisting). Chúng có một tần số dao động tự nhiên mà tại đó chúng dao động. Nếu ta chiếu
            xạ phân tử với tần số trùng với tần số này, hiện tượng cộng hưởng xảy ra và kích thích các dao động lớn
            hơn, và năng lượng được hấp thụ. Đó gọi là <strong className="text-[#d33427] font-sans">tần số cộng
            hưởng</strong> của dao động đó.
          </p>
          <p className="mb-3 text-justify">
            Mỗi loại dao động sẽ hấp thụ những bước sóng đặc trưng của bức xạ hồng ngoại. Chúng có thể được biểu diễn
            bằng nghịch đảo của bước sóng trong một đơn vị gọi là <strong>số sóng</strong> (wavenumbers, đo bằng cm
            <sup>−1</sup>). Ta không thể quá cụ thể khi trích dẫn các tần số hấp thụ đặc trưng của một liên kết, bởi
            vì bản chất của phần còn lại của phân tử ảnh hưởng tới năng lượng mà mỗi phân tử riêng lẻ hấp thụ. Tuy
            nhiên, ta có thể nói, ví dụ, nhóm amine của ethylamine hấp thụ trong khoảng 3300 đến 3500 cm⁻¹ (Hình
            18.7).
          </p>
          <p className="mb-3 text-justify">
            Do đó ta có thể nhận biết sự có mặt hay vắng mặt của các nhóm chức khác nhau từ dạng hấp thụ trong một phổ
            hồng ngoại. Hãy xem phổ hồng ngoại của ethylamine trong Hình 18.7.
          </p>

          <Figure18_7 />

          <p className="mb-3 text-justify">
            Ta có thể dùng phổ hồng ngoại đặc trưng của một hợp chất chưa biết để nhận dạng nó bằng kĩ thuật
            ‘fingerprinting’ (lấy dấu vân tay) từ một cơ sở dữ liệu các phổ đã biết. Một số vùng hấp thụ đặc trưng và
            dạng xuất hiện của các đỉnh được trình bày trong Bảng 18.3.
          </p>

          <TableGray
            head={['Liên kết', 'Nhóm chức chứa liên kết', 'Vùng hấp thụ (số sóng) / cm⁻¹', 'Dạng đỉnh (s = mạnh, w = yếu)']}
            rows={[
              ['C—O', 'alcohols, ethers, esters', '1040–1300', 's'],
              ['C=C', 'hợp chất thơm, alkenes', '1500–1680', 'w trừ khi liên hợp'],
              ['C=O', 'amides', '1640–1690', 's'],
              ['', 'ketones và aldehydes', '1670–1740', 's'],
              ['', 'esters', '1715–1750', 's'],
              ['C≡C', 'alkynes', '2150–2250', 'w trừ khi liên hợp'],
              ['C≡N', 'nitriles', '2200–2250', 'w'],
              ['C—H', 'alkanes, CH₃—H; alkenes/arenes, =C—H', '2850–2950; 3000–3100', 's; w'],
              ['N—H', 'amines, amides', '3300–3500', 'w'],
              ['O—H', 'carboxylic acids, RCO₂—H', '2500–3000', 's và rất rộng'],
              ['', 'alcohol liên kết hydrogen, RO—H', '3200–3600', 's'],
              ['', 'alcohol tự do, RO—H', '3580–3650', 's và sắc'],
            ]}
            caption={
              <>
                <strong>Bảng 18.3</strong> Một số dải hấp thụ hồng ngoại đặc trưng và cường độ của chúng.
              </>
            }
          />
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 242 — IR TIẾP + HÌNH 18.8–18.10 + CÂU 7
      =================================================================== */}
      {shouldShow('p242') && (
        <PageWrapper pageNumber={242} side="left" pageId="p242" onViewPageLatex={onViewPageLatex}>
          <p className="mb-3 text-justify">
            Các giá trị này thường sẽ được cho sẵn. Bạn có thể thấy các dải hấp thụ chồng lấn lên nhau đáng kể. Đó là
            lý do vì sao cần sử dụng nhiều kĩ thuật khác nhau, như phổ NMR, phổ hồng ngoại và phổ khối lượng, để suy
            luận cấu trúc của một hợp chất hữu cơ mới (xem Chương 29).
          </p>
          <p className="mb-3 text-justify">
            Bên cạnh các số sóng, các độ hấp thụ riêng biệt còn có các độ rộng (dải rộng hoặc đỉnh sắc) và các cường
            độ (mạnh hoặc yếu) đặc trưng trên phổ hồng ngoại. Ví dụ, sự có mặt của liên kết hydrogen làm cho các dải
            O—H đặc trưng rộng bản trong các alcohol và carboxylic acid. Ngược lại, liên kết C=O của nhóm carbonyl
            có một đỉnh hấp thụ mạnh và sắc. Hãy xem các phổ hồng ngoại của ethanol, ethanoic acid và ethyl
            ethanoate trình bày trong các Hình 18.8–18.10.
          </p>
          <p className="mb-4 text-justify">
            Sử dụng dữ liệu trong Bảng 18.3, hãy lưu ý các dải rộng của các nhóm O—H tham gia liên kết hydrogen trong
            alcohol và trong carboxylic acid. Đối chiếu độ rộng của các đỉnh này với đỉnh sắc của nhóm carbonyl trong
            ester, ethyl ethanoate, ở Hình 18.10.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Figure18_8 />
            <Figure18_9 />
          </div>
          <Figure18_10 />

          <QuestionBox
            number={7}
            showSolutionsGlobal={showSolutionsGlobal}
            solution={
              <>
                <p>
                  <strong>a:</strong> Phổ A là của butanone; phổ B là của butan-2-ol.
                </p>
                <p>
                  <strong>b:</strong> Phổ A có đỉnh hấp thụ mạnh, sắc quanh ≈ 1715 cm⁻¹ đặc trưng cho liên kết C=O
                  của ketone và không có dải O—H rộng; phổ B có dải hấp thụ rất rộng quanh 3200–3600 cm⁻¹ đặc trưng
                  cho O—H liên kết hydrogen của alcohol và không có đỉnh C=O sắc quanh 1700 cm⁻¹.
                </p>
              </>
            }
          >
            <p className="mb-2">
              <strong>a</strong> Quan sát hai phổ hồng ngoại dưới đây, A và B.
            </p>
            <Question7Spectra />
            <div>
              <strong>a</strong> Phổ nào là của butanone và phổ nào là của butan-2-ol?
            </div>
            <div>
              <strong>b</strong> Giải thích suy luận của bạn ở phần a.
            </div>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ===================================================================
          PAGE 243 — SUMMARY + CÂU HỎI CUỐI CHƯƠNG
      =================================================================== */}
      {shouldShow('p243') && (
        <PageWrapper pageNumber={243} side="right" pageId="p243" onViewPageLatex={onViewPageLatex}>
          {/* Summary box */}
          <div className="rounded-md bg-[#efe3ee] p-4 sm:p-5 font-sans shadow-xs mb-6">
            <h2 className="text-xl font-bold text-[#5c2d75] mb-3">Tóm tắt (Summary)</h2>
            <ul className="space-y-2 text-[12.5px] leading-relaxed text-stone-800">
              {[
                <>
                  Các aldehyde và ketone chứa nhóm carbonyl, C=O.
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>– trong các aldehyde, nhóm carbonyl chỉ liên kết với một nguyên tử carbon khác</li>
                    <li>– trong các ketone, nhóm carbonyl liên kết với hai nguyên tử carbon khác.</li>
                  </ul>
                </>,
                <>Tên của các aldehyde bắt nguồn từ tên của alkane với hậu tố ‘-e’ ở cuối được thay bằng ‘-al’.</>,
                <>Tương tự, các ketone được gọi tên với hậu tố ‘-e’ được thay bằng ‘-one’.</>,
                <>
                  Các hợp chất carbonyl dễ dàng bị khử bởi NaBH<sub>4</sub> trong nước hoặc LiAlH<sub>4</sub> hòa tan
                  trong ether khô:
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>– sự khử một aldehyde tạo thành một alcohol bậc một</li>
                    <li>– sự khử một ketone tạo thành một alcohol bậc hai.</li>
                  </ul>
                </>,
                <>Các aldehyde dễ bị oxi hóa thành các carboxylic acid trong điều kiện nhẹ. Các ketone không bị oxi hóa trong điều kiện nhẹ.</>,
                <>
                  Bản chất phân cực của nhóm carbonyl trong các aldehyde và ketone cho phép chúng trải qua phản ứng
                  cộng nucleophile với các ion cyanide CN⁻ từ HCN. Sản phẩm là một 2-hydroxynitrile.
                </>,
                <>
                  Thuốc thử 2,4-dinitrophenylhydrazine (2,4-DNPH) có thể được dùng để nhận biết sự có mặt của một
                  nhóm carbonyl trong một aldehyde hoặc ketone. Nó tạo ra một kết tủa màu cam. Nhiệt độ nóng chảy của
                  sản phẩm được dùng để xác định aldehyde và ketone cụ thể.
                </>,
                <>
                  Vì các aldehyde dễ bị oxi hóa, chúng có thể được phân biệt với các ketone bằng cách hâm nóng với các
                  tác nhân oxi hóa phù hợp:
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>
                      – với các aldehyde, thuốc thử Tollens tạo một gương bạc bên trong ống nghiệm đã hâm nóng và dung
                      dịch Fehling chuyển từ màu xanh lam sang một kết tủa đỏ/cam khi hâm nóng
                    </li>
                    <li>
                      – với các ketone, không có phản ứng oxi hóa nào xảy ra, nên không quan sát thấy thay đổi khi hâm
                      nóng với thuốc thử Tollens hoặc dung dịch Fehling.
                    </li>
                  </ul>
                </>,
                <>
                  Các nhà hóa học có thể dùng dung dịch iodine trong kiềm để thử nghiệm:
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>– các methyl ketone</li>
                    <li>– ethanol hoặc các alcohol bậc hai có một nhóm methyl kề cận.</li>
                  </ul>
                  Một kết tủa màu vàng của tri-iodomethane được tạo thành trong một phép thử dương tính.
                </>,
                <>
                  Phổ hồng ngoại giúp nhận dạng các hợp chất hữu cơ bằng sự hấp thụ năng lượng trong vùng bước sóng
                  hồng ngoại, bằng cách đối chiếu với cơ sở dữ liệu các phổ hồng ngoại đã biết.
                </>,
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="w-2 h-2 bg-[#9a6fb0] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* End-of-chapter questions */}
          <div className="rounded-md bg-[#dfeff8] p-4 sm:p-5 font-sans shadow-xs">
            <h2 className="text-xl font-bold text-[#527993] mb-3">Câu hỏi cuối chương (End-of-chapter questions)</h2>
            <div className="text-[13px] leading-relaxed text-stone-800 space-y-2">
              <div>
                <strong>1 a</strong> Gọi tên các hợp chất sau:
                <div className="pl-5 mt-1 space-y-1 font-mono text-[12px]">
                  {[
                    ['i', 'CH₃COCH₃'],
                    ['ii', 'CH₃CH₂CH₂OH'],
                    ['iii', 'CH₃CHO'],
                    ['iv', 'CH₃CH(OH)CH₃'],
                    ['v', 'CH₃COCH₂CH₃'],
                    ['vi', 'CH₃CH₂CHO'],
                  ].map(([k, f]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <span>
                        <strong>{k}</strong>&nbsp; {f}
                      </span>
                      <span className="text-stone-600 shrink-0">[1]</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <span>
                  <strong>b</strong> Hợp chất nào ở phần a là alcohol và hợp chất nào là hợp chất carbonyl?
                </span>
                <span className="text-stone-600 shrink-0">[1]</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>
                  <strong>c</strong> Hợp chất carbonyl nào ở phần a là aldehyde và hợp chất nào là ketone?
                </span>
                <span className="text-stone-600 shrink-0">[1]</span>
              </div>

              <div className="mt-3 pt-2 border-t border-[#bcd7e8]">
                <button
                  type="button"
                  className="text-[11px] font-semibold text-[#527993]"
                  onClick={() => undefined}
                  hidden
                >
                  placeholder
                </button>
                <SolutionInline show={showSolutionsGlobal}>
                  <p>
                    <strong>a:</strong> i propanone; ii propan-1-ol; iii ethanal; iv propan-2-ol; v butanone; vi
                    propanal.
                  </p>
                  <p>
                    <strong>b:</strong> alcohol: ii và iv; hợp chất carbonyl: i, iii, v và vi.
                  </p>
                  <p>
                    <strong>c:</strong> aldehyde: iii và vi (nhóm —CHO ở đầu mạch); ketone: i và v (nhóm C=O giữa
                    mạch).
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
