import React from 'react';
import { PageWrapper, QuestionBox, CalloutBox } from './TextbookPages';
import {
  Figure25_1,
  Figure25_2,
  Figure25_3,
  Figure25_4,
  Table25_2,
  MechBromination,
  MechSideChain,
  MechNitration,
  MechFriedelCrafts,
  FigOxidation,
  Figure25_5,
  FigPhenoxide,
  Figure25_6,
  FigPhenolNitration,
} from './TextbookFigures25';

/* ==========================================================================
   CHƯƠNG 25: BENZENE AND ITS COMPOUNDS (TRANG 382 – 392)
   Bản dịch tiếng Việt chuẩn form sách gốc Cambridge
   ========================================================================== */

const H: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-[15px] font-bold text-[#d33427] font-sans mt-4 mb-1.5 leading-snug">{children}</h3>
);
const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-bold text-[#b8291d] font-sans mt-1 mb-2 leading-snug">{children}</h2>
);
const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-2.5 text-justify text-[13px] leading-relaxed text-stone-800 font-sans">{children}</p>
);
const Eq: React.FC<{ children: React.ReactNode; note?: string }> = ({ children, note }) => (
  <div className="my-2.5 py-2 px-3 bg-white rounded border border-stone-300 font-sans text-[12.5px] text-center">
    <span className="font-mono font-semibold text-stone-900">{children}</span>
    {note && <span className="block text-[11px] text-stone-500 mt-0.5">{note}</span>}
  </div>
);
const Bullets: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1 mb-2.5 text-[13px] text-stone-800 font-sans">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
);

export interface TextbookPages25Props {
  selectedPageFilter: string;
  showSolutionsGlobal: boolean;
  onViewPageLatex?: (pageId: string) => void;
}

export const TextbookPages25: React.FC<TextbookPages25Props> = ({
  selectedPageFilter,
  showSolutionsGlobal,
  onViewPageLatex,
}) => {
  const show = (id: string) => selectedPageFilter === 'all' || selectedPageFilter === id;

  return (
    <div className="space-y-6">
      {/* ==================== TRANG 382 ==================== */}
      {show('p382') && (
        <PageWrapper pageNumber={382} side="left" pageId="p382" onViewPageLatex={onViewPageLatex}>
          <H2>Giới thiệu (Introduction)</H2>
          <P>
            Trong tiếng Anh, <strong>“aromatic”</strong> nghĩa là “thơm dễ chịu”, dùng cho mùi hương, nước hoa hay gia
            vị. Thuật ngữ này ban đầu được dùng cho các hợp chất hóa học cùng chia sẻ một cấu trúc vòng carbon xếp
            thành vòng — <strong>vòng benzene</strong>. Những hợp chất ấy nay gọi là các <strong>arene</strong>. Thực
            tế, nhiều hóa chất chứa một hay nhiều vòng benzene có mùi rất mạnh.
          </P>
          <Figure25_1 />
          <H2>Vòng benzene (The benzene ring)</H2>
          <P>
            Vòng benzene là nhóm chức năng đặc biệt quan trọng, có mặt trong rất nhiều hợp chất hữu cơ. Một vòng
            benzene là <strong>lục giác sáu nguyên tử carbon</strong> liên kết thành vòng phẳng. Vòng benzene xuất
            hiện trong nhiều hợp chất quan trọng về mặt thương mại — ví dụ dược phẩm, thuốc nhuộm và nhựa polymer.
          </P>
          <P>
            Các hợp chất hữu cơ chứa một hay nhiều vòng benzene được gọi là <strong>arene</strong>. Nói chung, hợp
            chất arene được gọi là hợp chất <strong>thơm (aromatic)</strong>. Một ví dụ là 2-bromonitrobenzene, dùng
            trong sản xuất thuốc nhuộm halogen. Arene đơn giản nhất chính là benzene, công thức C₆H₆.
          </P>
          <P>
            Các nhà hóa học hữu cơ thời kỳ đầu đã vật lộn tìm cấu trúc của nó. Khoảng năm 1865,
            <strong> Friedrich August Kekulé</strong> dường như đã giải được bài toán: ông đề xuất một vòng lục giác
            sáu carbon, mỗi carbon gắn một hydro, trong vòng có ba nối đôi C=C xen kẽ (Hình 25.2). Cách đặt tên
            benzene cũng mang đuôi “-ene” giống alkene vì lẽ đó.
          </P>
          <Figure25_2 />
          <QuestionBox
            number="1"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) 6 electron. b) Orbital p (orbital p chưa lai hóa còn lại trên mỗi C sp²). c) “Delocalised” nghĩa là các electron π không khu trú giữa hai carbon nào mà trải đều khắp sáu carbon của vòng. d) Ở benzene hệ π là một vòng delocalised gồm 6 e trên 6 C; ở hex-3-ene nối π chỉ khu trú giữa C3 và C4 (2 e)."
          >
            <p><strong>a</strong> Có bao nhiêu electron tham gia hệ liên kết π trong phân tử benzene?</p>
            <p><strong>b</strong> Các electron ở câu a đến từ loại orbital nguyên tử nào?</p>
            <p><strong>c</strong> Thuật ngữ “electron delocalised” trong benzene nghĩa là gì?</p>
            <p><strong>d</strong> Liên kết π ở benzene và ở hex-3-ene khác nhau thế nào?</p>
          </QuestionBox>
          <QuestionBox
            number="2"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) i) vòng benzene với Br ở các C1, C3, C5; ii) vòng benzene với Cl ở C1, C3 và NO₂ ở C5. b) i) 2-methylphenol; ii) 1-bromo-2-chlorobenzene."
          >
            <p><strong>a</strong> Vẽ công thức hiển thị hoặc công thức khung của: <strong>i</strong> 1,3,5-tribromobenzene; <strong>ii</strong> 1,3-dichloro-5-nitrobenzene.</p>
            <p><strong>b</strong> Gọi tên các phân tử: <strong>i</strong> vòng benzene mang –OH (C1) và –CH₃ (C2); <strong>ii</strong> vòng benzene mang –Br (C1) và –Cl (C2).</p>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ==================== TRANG 383 ==================== */}
      {show('p383') && (
        <PageWrapper pageNumber={383} side="right" pageId="p383" onViewPageLatex={onViewPageLatex}>
          <P>
            Khi các kỹ thuật phân tích phát triển, người ta thấy phân tử benzene <strong>phẳng và đối xứng hoàn
            hảo</strong>. Cấu trúc Kekulé gợi ý các nối đơn C–C dài xen kẽ nối đôi C=C ngắn — hẳn phải tạo thành hình
            lục giác méo; nhưng hexagon carbon thực tế của benzene là <strong>lục giác đều hoàn hảo</strong>. Hình
            25.3 cho thấy cách biểu diễn benzene bằng công thức khung.
          </P>
          <P>
            Ngày nay ta đo được độ dài liên kết thật — điều bất khả thi ở thế kỷ XIX khi Kekulé làm việc. Bảng 25.1
            cho thấy độ dài liên kết carbon–carbon trong benzene nằm <strong>giữa</strong> giá trị nối đơn C–C và nối
            đôi C=C.
          </P>
          <Figure25_3 />
          <P>
            Hóa học của benzene cũng chống lại cấu trúc Kekulé: nếu có ba nối đôi C=C thật, benzene phải phản ứng
            <strong>cộng</strong> giống alkene (như ethene làm mất màu nước bromine ngay khi trộn) — nhưng benzene
            cần điều kiện khắc nghiệt hơn nhiều và phản ứng theo kiểu <strong>thế</strong>.
          </P>
          <P>
            Khác biệt này giải thích được bằng liên kết: mỗi carbon trong vòng benzene <strong>lai hóa sp²</strong>,
            chia sẻ:
          </P>
          <Bullets
            items={[
              <>một cặp electron với carbon lân cận thứ nhất,</>,
              <>một cặp electron với carbon lân cận thứ hai,</>,
              <>một cặp electron với nguyên tử hydro.</>,
            ]}
          />
          <P>
            Ba liên kết cộng hóa trị <strong>sigma (σ)</strong> ấy có cặp electron nằm chủ yếu giữa hai hạt nhân.
            Mỗi carbon còn dư <strong>một electron</strong> trên orbital p; sáu electron này góp thành hệ
            <strong> liên kết π</strong> — nhưng không khu trú giữa từng cặp carbon như alkene, mà
            <strong> trải đều (delocalised) trên cả sáu carbon</strong> của vòng lục giác.
          </P>
          <P>
            Hệ π hình thành nhờ xen phủ các orbital p, mỗi carbon góp một orbital; để xen phủ tối đa phân tử phải
            phẳng. Các thùy orbital p chồng chéo tạo thành <strong>vòng electron delocalised</strong> phía trên và
            phía dưới mặt phẳng carbon (Hình 25.4).
          </P>
          <Figure25_4 />
          <H>Gọi tên hợp chất aryl (Naming aryl compounds)</H>
          <P>
            Ngoài các aryl compound mang mạch nhánh alkyl, nhiều hợp chất aryl có <strong>nhóm chức thế trực tiếp
            vào vòng benzene</strong> thay cho một hydro. Cần biết tên các chất trong Bảng 25.2.
          </P>
          <Table25_2 />
        </PageWrapper>
      )}

      {/* ==================== TRANG 384 ==================== */}
      {show('p384') && (
        <PageWrapper pageNumber={384} side="left" pageId="p384" onViewPageLatex={onViewPageLatex}>
          <H2>Phản ứng của arene (Reactions of arenes)</H2>
          <P>
            Phần lớn phản ứng của benzene <strong>giữ nguyên vòng electron π delocalised bền vững</strong>: một hay
            nhiều hydro bị thay bằng nguyên tử hoặc nhóm nguyên tử khác — phản ứng <strong>thế</strong>. Tấn công
            đầu tiên thường do một <strong>electrophile</strong>, bị hút vào mật độ electron cao quanh vòng benzene.
          </P>
          <H>Thế electrophile với chlorine hoặc bromine</H>
          <P>
            Benzene phản ứng với bromine khi có xúc tác <strong>iron(III) bromide khan</strong> (có thể sinh tại chỗ
            bằng cách thêm mạt sắt vào hỗn hợp benzene + bromine):
          </P>
          <Eq note="xúc tác FeBr₃ khan (halogen carrier)">C₆H₆ + Br₂ → C₆H₅Br + HBr</Eq>
          <P>
            Thoạt nhìn, tấn công mở đầu dường như liên quan tới electron: electrophile là nguyên tử bromine
            <strong> liên kết cộng hóa trị nhưng mang một phần điện tích dương</strong> trong phân tử Br₂. Phân tử
            Br₂ tạo liên kết phối trí với iron(III) bromide bằng cách cho một cặp electron tự do từ một nguyên tử
            bromine vào orbital 3d trống của sắt; điều này hút electron khỏi nguyên tử bromine còn lại, khiến nó
            dương một phần và trở thành electrophile:
          </P>
          <Eq>Br–Br + FeBr₃ → Br⁺ + [FeBr₄]⁻</Eq>
          <P>
            Cation Br⁺ và vòng benzene giàu electron hút nhau, sinh ra bromobenzene theo ba giai đoạn dưới đây.
            Nhớ rằng <strong>mũi tên cong chỉ chiều chuyển động của cặp electron</strong>.
          </P>
          <MechBromination />
          <P>
            Phản ứng tương tự xảy ra khi sục chlorine qua benzene ở nhiệt độ phòng với xúc tác iron(III) chloride
            hoặc aluminium chloride khan, cho chlorobenzene + hydrogen chloride. Các xúc tác FeBr₃, AlCl₃, FeCl₃
            được gọi là <strong>halogen carrier</strong>.
          </P>
          <P>
            Với methylbenzene, nhóm –CH₃ định hướng thế vào vị trí 2 và 4: sục chlorine dư cho
            1-methyl-2,4-dichlorobenzene, 1-methyl-2,6-dichlorobenzene rồi 1-methyl-2,4,6-trichlorobenzene.
          </P>
          <P>
            Liên kết carbon–halogen trong <strong>halogenoarene</strong> bền hơn trong halogenoalkane tương đương:
            cặp electron tự do trên halogen xen phủ một phần với hệ π của vòng, khiến liên kết C–X mang
            <strong> một phần tính nối đôi</strong>.
          </P>
        </PageWrapper>
      )}

      {/* ==================== TRANG 385 ==================== */}
      {show('p385') && (
        <PageWrapper pageNumber={385} side="right" pageId="p385" onViewPageLatex={onViewPageLatex}>
          <P>
            Chú ý: các điều kiện trên <strong>không đụng tới mạch nhánh methyl</strong>. Nhưng chlorine phản ứng với
            alkane dưới ánh sáng tử ngoại (UV) hoặc nhiệt độ cao — methylbenzene cũng vậy: sục chlorine vào
            methylbenzene đang sôi dưới đèn UV cho phản ứng thế ở mạch nhánh:
          </P>
          <MechSideChain />
          <P>
            Trong điều kiện ấy không có thế vào vòng; chlorine dư sẽ thay dần cả ba hydro của nhánh methyl.
          </P>
          <QuestionBox
            number="3"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) C₆H₆ + Cl₂ →(FeCl₃) C₆H₅Cl + HCl. b) Thế electrophile (electrophilic substitution). c) Mũi tên cong từ vòng π tới Cl⁺; intermediate mang H và Cl trên cùng C với vòng π 4 e mang dấu +; sau đó [FeCl₄]⁻ tách H hoàn nguyên vòng và xúc tác. d) C₆H₅–CH₂Br (bromine thế vào mạch nhánh, không vào vòng). e) Với Br₂ dư: C₆H₅–CHBr₂ rồi C₆H₅–CBr₃ (tribromomethyl)benzene. f) Thế gốc tự do (free-radical substitution)."
          >
            <p><strong>a</strong> Viết phương trình phản ứng của chlorine với benzene khi có xúc tác iron(III) chloride.</p>
            <p><strong>b</strong> Cơ chế phản ứng ở câu a gọi là gì?</p>
            <p><strong>c</strong> Vẽ cơ chế phản ứng câu a với tiểu phân tấn công là Cl⁺, dùng mũi tên cong chỉ chuyển động cặp electron.</p>
            <p><strong>d</strong> Vẽ công thức hiển thị của halogenoarene “không thế vào vòng” sinh ra khi trộn methylbenzene với bromine dưới ánh sáng tử ngoại.</p>
            <p><strong>e</strong> Gọi tên sản phẩm hữu cơ khi làm câu d với bromine dư.</p>
            <p><strong>f</strong> Gọi tên cơ chế phản ứng ở câu e.</p>
          </QuestionBox>
          <H>Nitration benzene</H>
          <P>
            Nitration là đưa nhóm –NO₂ vào phân tử — một ví dụ khác của thế electrophile. Electrophile là ion
            <strong> NO₂⁺ (nitronium ion)</strong>, sinh ra từ hỗn hợp nitric acid đặc và sulfuric acid đặc:
          </P>
          <Eq>HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺</Eq>
          <P>Phản ứng nitration thực hiện ở khoảng <strong>55 °C</strong> để tạo nitrobenzene:</P>
          <Eq note="xúc tác H₂SO₄ đặc, ≈ 55 °C">C₆H₆ + HNO₃ → CH₅NO₂ + H₂O</Eq>
          <MechNitration />
          <P>
            Giai đoạn 1: NO₂⁺ bị hút vào mật độ electron π cao của vòng; một cặp electron π được cho vào nguyên tử
            nitrogen, tạo liên kết cộng hóa trị mới — vòng π delocalised tạm thời vỡ ra, chỉ còn 4 electron π và điện
            tích dương trải trên năm carbon. Giai đoạn 2: liên kết C–H đứt dị phân, cả cặp electron trả về hệ π —
            vòng sáu electron thơm bền vững được khôi phục, hydro ra đi dưới dạng H⁺.
          </P>
          <P>
            Nitration tiếp tục cho 1,3-dinitrobenzene rồi 1,3,5-trinitrobenzene: khác với –CH₃ (nhóm hoạt hóa
            vòng), nhóm –NO₂ (và cả –COOH) <strong>làm vòng kém hoạt động</strong> và định hướng thế tiếp vào các
            vị trí <strong>3 và 5</strong> (xem Bảng 25.4, trang 390).
          </P>
        </PageWrapper>
      )}

      {/* ==================== TRANG 386 ==================== */}
      {show('p386') && (
        <PageWrapper pageNumber={386} side="left" pageId="p386" onViewPageLatex={onViewPageLatex}>
          <QuestionBox
            number="4"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) i) C₆H₅CH₃ + NO₂⁺ → CH₃C₆H₄NO₂ + H⁺; ii) C₆H₅CH₃ + HNO₃ →(H₂SO₄) CH₃C₆H₄NO₂ + H₂O. iii) 1-methyl-2-nitrobenzene và 1-methyl-4-nitrobenzene (–CH₃ định hướng 2,4). iv) Vẽ vòng với –CH₃ ở C1, –NO₂ ở C2 và C4 (dinitro) hoặc C2, C4, C6 (trinitro). b) Electrophile là SO₃; nguyên tử S nhận cặp electron (S mang δ+); ii) C₆H₆ + SO₃ → C₆H₅SO₃H."
          >
            <p><strong>a</strong> Chép và hoàn thành hai phương trình dùng cho nitration methylbenzene: <strong>i</strong> C₆H₅CH₃ + NO₂⁺ → … + …; <strong>ii</strong> C₆H₅CH₃ + HNO₃ (H₂SO₄) → … + …. <strong>iii</strong> Gọi tên các sản phẩm mono-thế ở i và ii. <strong>iv</strong> 1-methyl-2,4-dinitrobenzene và 1-methyl-2,4,6-trinitrobenzene sinh ra khi nitration tiếp; vẽ công thức hiển thị mỗi chất.</p>
            <p><strong>b</strong> Benzene cũng bị thế electrophile khi hồi lưu với fuming sulfuric acid nhiều giờ — gọi là <strong>sulfonation</strong>; electrophile là phân tử SO₃, sản phẩm là benzenesulfonic acid C₆H₅SO₃H. <strong>i</strong> Nguyên tử nào trong SO₃ nhận cặp electron trong cơ chế? <strong>ii</strong> Viết phương trình kiểu câu a cho sulfonation benzene.</p>
          </QuestionBox>
          <H2>Alkyl hóa benzene bằng acylation (phản ứng Friedel–Crafts)</H2>
          <P>
            Phản ứng <strong>Friedel–Crafts</strong> — đặt theo tên hai nhà hóa học đầu tiên khám phá — là ví dụ thứ
            ba của thế electrophile vào vòng benzene. Đôi khi nhà hóa học muốn đổi cấu trúc arene để tạo sản phẩm
            mới: sản xuất detergent, hoặc các phản ứng cần cho nhựa như poly(phenylethene) — thường gọi là
            polystyrene. Phản ứng Friedel–Crafts thay một hydro của vòng bằng nhóm alkyl như –CH₃ hay –CH₂CH₃:
          </P>
          <Eq note="methylbenzene và ethylbenzene">C₆H₆ + CH₃Cl →(AlCl₃) C₆H₅CH₃ + HCl ; C₆H₆ + CH₃CH₂Cl →(AlCl₃) C₆H₅CH₂CH₃ + HCl</Eq>
          <CalloutBox title="Trong sách gốc (insight box)">
            Phản ứng Friedel–Crafts đưa một <strong>mạch nhánh (side-chain)</strong> vào vòng benzene — chìa khóa
            tổng hợp nhiều hóa chất công nghiệp.
          </CalloutBox>
        </PageWrapper>
      )}

      {/* ==================== TRANG 387 ==================== */}
      {show('p387') && (
        <PageWrapper pageNumber={387} side="right" pageId="p387" onViewPageLatex={onViewPageLatex}>
          <P>
            Cùng kiểu phản ứng ấy đưa được nhóm <strong>acyl</strong> vào vòng benzene. Nhóm acyl gồm một nhóm alkyl
            và một nhóm carbonyl (C=O), ví dụ phenylethanone C₆H₅COCH₃ hay phenylpropanone C₆H₅COCH₂CH₃.
          </P>
          <Eq>C₆H₆ + CH₃CH₂Cl →(AlCl₃) CH₅CH₂CH + HCl (alkylation)</Eq>
          <Eq>C₆H₆ + CH₃COCl →(AlCl₃) C₆H₅COCH₃ + HCl (acylation)</Eq>
          <P>
            Phản ứng gồm tấn công của một <strong>carbocation</strong> — electrophile mang điện tích dương trên
            carbon. Carbocation thường sinh ra bằng cách thêm xúc tác aluminium chloride vào halogenoalkane:
          </P>
          <MechFriedelCrafts />
          <H>Oxy hóa mạch nhánh trong arene</H>
          <P>
            Sự có mặt của vòng benzene có thể ảnh hưởng tới phản ứng đặc trưng của mạch nhánh alkyl: alkane thường
            <strong> không bị</strong> các tác nhân như potassium manganate(VII) oxy hóa; nhưng trong arene, mạch
            nhánh alkane bị oxy hóa thành <strong>carboxylic acid</strong>. Hồi lưu methylbenzene với kiềm
            potassium manganate(VII) rồi acid hóa bằng sulfuric acid loãng cho benzoic acid (cũng có thể dùng
            acidified potassium dichromate(VI)):
          </P>
          <FigOxidation />
          <H2>Phenol</H2>
          <P>
            Phenol, C₆H₅OH, là chất rắn kết tinh nóng chảy ở <strong>43 °C</strong>, dùng chế tạo rất nhiều sản
            phẩm (Hình 25.5). Nhiệt độ nóng chảy của phenol khá cao với một hợp chất aryl vì giữa các phân tử có
            <strong> liên kết hydro</strong>; tuy vậy vòng benzene lớn, không phân cực khiến phenol chỉ tan ít trong
            nước.
          </P>
          <Figure25_5 />
          <P>Phenol là chất acid yếu, mất H⁺ từ nhóm hydroxyl; cân bằng nằm rất lệch về trái:</P>
          <Eq>C₆H₅OH(aq) ⇌ C₆H₅O⁻(aq) + H⁺(aq)</Eq>
          <P>
            Tuy thế phenol là acid <strong>mạnh hơn nước và alcohol</strong> — giá trị pKₐ ở Bảng 25.3; nhớ rằng pKₐ
            càng cao thì acid càng yếu.
          </P>
          <QuestionBox
            number="5"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) i) C₆H₆ + CH₃CH₂CH₂Cl →(AlCl₃) C₆H₅CH₂CH₂CH₃ + HCl; ii) C₆H₆ + CH₃CH₂CH₂CH₂COCl →(AlCl₃) C₆H₅COCH₂CH₂CH₂CH₃ + HCl. b) i) propylbenzene; ii) ketone (aryl ketone)."
          >
            <p><strong>a</strong> Chép và hoàn thành hai phương trình cho alkylation và acylation benzene tạo sản phẩm mono-thế: <strong>i</strong> C₆H₆ + CH₃CH₂CH₂Cl → …; <strong>ii</strong> C₆H₆ + CH₃CH₂CH₂CH₂COCl → ….</p>
            <p><strong>b i</strong> Gọi tên sản phẩm hữu cơ mono-thế ở câu a i. <strong>ii</strong> Sản phẩm câu a ii thuộc loại hợp chất nào?</p>
          </QuestionBox>
          <QuestionBox
            number="6"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="Hexylbenzene: mạch nhánh bị oxy hóa — dung dịch KMnO₄(VII) tím mất màu, thu được benzoic acid (–C₆H₅ giữ nguyên, –C₆H₁₃ → –COOH). Benzene: không phản ứng, màu tím không đổi. Kết luận: vòng benzene trơ với oxy hóa nhưng 'kích hoạt' mạch nhánh alkyl."
          >
            <p>Hexylbenzene được hồi lưu với kiềm potassium manganate(VII) rồi acid hóa bằng sulfuric acid loãng. Thí nghiệm y hệt được làm với benzene và tác nhân oxy hóa ấy. So sánh điều xảy ra trong hai thí nghiệm.</p>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ==================== TRANG 388 ==================== */}
      {show('p388') && (
        <PageWrapper pageNumber={388} side="left" pageId="p388" onViewPageLatex={onViewPageLatex}>
          <div className="overflow-x-auto mb-3 font-sans">
            <table className="w-full text-[12px] border border-stone-300">
              <thead>
                <tr className="bg-stone-600 text-white">
                  <th className="px-2 py-1.5 text-left font-semibold">Acid yếu</th>
                  <th className="px-2 py-1.5 text-left font-semibold">Phân li trong nước</th>
                  <th className="px-2 py-1.5 text-center font-semibold">pKₐ ở 25 °C</th>
                </tr>
              </thead>
              <tbody className="text-stone-800">
                <tr className="bg-[#fdecea]">
                  <td className="px-2 py-1.5 font-semibold text-[#8c1d13]">phenol</td>
                  <td className="px-2 py-1.5 font-mono">C₆H₅OH(aq) ⇌ C₆H₅O⁻(aq) + H⁺(aq)</td>
                  <td className="px-2 py-1.5 text-center font-bold text-[#8c1d13]">10,0</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 py-1.5">nước</td>
                  <td className="px-2 py-1.5 font-mono">H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)</td>
                  <td className="px-2 py-1.5 text-center">14,0</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="px-2 py-1.5">ethanol</td>
                  <td className="px-2 py-1.5 font-mono">C₂H₅OH(aq) ⇌ C₂H₅O⁻(aq) + H⁺(aq)</td>
                  <td className="px-2 py-1.5 text-center">16,0</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[11px] text-stone-500 mt-1">Bảng 25.3 — So sánh tính acid của phenol, nước và ethanol.</p>
          </div>
          <P>
            Phenol là acid mạnh hơn nước và ethanol nhưng yếu hơn ethanoic acid. Điều này giải thích được bằng cách
            nhìn các base sinh ra ở vế phải Bảng 25.3: ion <strong>phenoxide</strong> C₆H₅O⁻ có điện tích âm
            <strong> delocalised khắp ion</strong>, vì cặp electron tự do trên oxygen xen phủ với hệ π của vòng
            benzene.
          </P>
          <FigPhenoxide />
          <P>
            Delocalisation làm giảm mật độ điện tích trên oxygen, nên phenoxide ion không bắt lại H⁺ (hay H₃O⁺) mạnh
            như hydroxide hoặc ethoxide ion — các phân tử không phân li khó hình thành hơn, cân bằng dịch sang phải
            nhiều hơn. Ngược lại, ethanol là acid yếu hơn nước vì nhóm ethyl <strong>đẩy electron</strong> về oxygen
            của ethoxide ion, tập trung điện tích âm và khiến nó bắt H⁺ tốt hơn.
          </P>
          <H>Phản ứng của phenol (Reactions of phenol)</H>
          <P>Phản ứng của phenol chia hai nhóm: liên quan nhóm hydroxyl, và thế vào vòng benzene.</P>
          <H>Đứt liên kết O–H trong phenol</H>
          <P>
            Dù tan ít trong nước, phenol tan tốt trong dung dịch kiềm: là acid yếu, phenol phản ứng với kiềm tạo
            muối và nước; muối <strong>sodium phenoxide</strong> tan trong nước. Phenol cũng phản ứng mãnh liệt với
            sodium kim loại, giải phóng hydrogen:
          </P>
          <Eq>C₆H₅OH + NaOH → C₆H₅ONa + H₂O</Eq>
          <Eq>2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂</Eq>
          <H>Thế vào vòng benzene của phenol</H>
          <P>
            So với benzene, phenol phản ứng với electrophile <strong>dễ dàng hơn nhiều</strong>: cặp electron tự do
            trên oxygen của nhóm –OH xen phủ vào hệ π làm tăng mật độ electron của vòng — vòng được
            <strong> “hoạt hóa”</strong>, đặc biệt ở các vị trí 2, 4 và 6 (Bảng 25.4, trang 390).
          </P>
          <QuestionBox
            number="7"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) Thứ tự acid mạnh dần ngược lại: HCl > CH₃COOH > C₆H₅OH > H₂O > C₂H₅OH (bắt đầu từ acid mạnh nhất: HCl). b) Methanol KÉM acid hơn phenol: methoxide ion không được bền hóa bằng delocalisation (không có vòng π), còn nhóm alkyl đẩy electron làm đậm điện tích âm trên O → bắt H⁺ trở lại dễ hơn."
          >
            <p><strong>a</strong> Sắp xếp các phân tử sau theo thứ tự tính acid, bắt đầu từ acid mạnh nhất: CH₃COOH, C₆H₅OH, HCl, C₂H₅OH, H₂O.</p>
            <p><strong>b</strong> Bạn dự đoán methanol có tính acid mạnh hơn hay yếu hơn phenol? Giải thích.</p>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ==================== TRANG 389 ==================== */}
      {show('p389') && (
        <PageWrapper pageNumber={389} side="right" pageId="p389" onViewPageLatex={onViewPageLatex}>
          <H>Bromination phenol</H>
          <P>
            Phenol phản ứng giống benzene nhưng ở điều kiện <strong>ôn hòa hơn nhiều</strong>: bromine water không
            phản ứng với benzene ở nhiệt độ phòng (cần bromine nguyên chất và xúc tác iron(III) bromide); còn với
            phenol, bromine water phản ứng readily — mất màu cam và tạo kết tủa trắng
            <strong> 2,4,6-tribromophenol</strong>:
          </P>
          <Eq>phenol + 3Br₂ → 2,4,6-tribromophenol + 3HBr</Eq>
          <Figure25_6 />
          <P>Phản ứng tương tự xảy ra giữa phenol với chlorine hoặc iodine.</P>
          <P>
            Sự hoạt hóa vòng cũng thể hiện ở nitration phenol: benzene cần hỗn hợp HNO₃/H₂SO₄ đặc ở ≈55 °C, còn vòng
            phenol đã hoạt hóa nitration readily với <strong>nitric acid loãng ở nhiệt độ phòng</strong>, cho hỗn
            hợp 2-nitrophenol và 4-nitrophenol; dùng HNO₃ đặc thu được 2,4,6-trinitrophenol.
          </P>
          <FigPhenolNitration />
          <QuestionBox
            number="8"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) Thứ tự phản ứng thế electrophile giảm dần: C₆H₅OH > C₆H₅CH₃ > C₆H₆ > C₆H₅CO₂H (–OH hoạt hóa mạnh, –CH₃ hoạt hóa yếu, –CO₂H làm vòng kém hoạt động). b) i) C₆H₅OH + 3Cl₂ → 2,4,6-trichlorophenol + 3HCl (nhiệt độ phòng, không xúc tác). ii) Muốn có chlorobenzene từ benzene phải dùng Cl₂ nguyên chất (không phải nước chlorine) cùng halogen carrier như AlCl₃/FeCl₃ khan, vì vòng benzene chưa hoạt hóa, mật độ π thấp hơn phenol."
          >
            <p><strong>a</strong> Sắp xếp các phân tử sau theo thứ tự khả năng phản ứng thế electrophile, chất phản ứng mạnh nhất trước: C₆H₆, C₆H₅CH₃, C₆H₅CO₂H, C₆H₅OH.</p>
            <p><strong>b i</strong> Viết phương trình cân bằng cho phản ứng khi sục chlorine dư qua phenol ở nhiệt độ phòng. <strong>ii</strong> Nếu muốn điều chế chlorobenzene từ benzene thì điều kiện phản ứng khác thế nào so với câu i? Giải thích.</p>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ==================== TRANG 390 ==================== */}
      {show('p390') && (
        <PageWrapper pageNumber={390} side="left" pageId="p390" onViewPageLatex={onViewPageLatex}>
          <H2>Tóm tắt chương (Summary)</H2>
          <Bullets
            items={[
              <>Phân tử benzene C₆H₆ đối xứng, dạng lục giác phẳng.</>,
              <>Arene bền vững về năng lượng nhờ sáu electron π delocalised nằm trên và dưới mặt phẳng vòng.</>,
              <>Cơ chế chính của phản ứng arene là <strong>thế electrophile</strong> — giữ được hệ π delocalised; hydro của vòng thay được bằng halogen, nhóm nitro –NO₂, nhóm alkyl hoặc acyl qua phản ứng Friedel–Crafts.</>,
              <>Dù tên kết thúc bằng “-ene”, arene không hành xử như alkene: arene thế electrophile, alkene cộng electrophile.</>,
              <>Đôi khi vòng benzene ảnh hưởng phản ứng thường thấy của mạch nhánh: methylbenzene bị oxy hóa thành benzoic acid khi hồi lưu với kiềm potassium manganate(VII).</>,
              <>Khi nhóm –OH gắn trực tiếp vào vòng benzene, hợp chất gọi là <strong>phenol</strong>.</>,
              <>Phenol là acid yếu nhưng mạnh hơn nước và alcohol; tính acid do delocalisation điện tích âm của phenoxide ion khi H⁺ rời nhóm –OH.</>,
              <>Phenol + sodium hydroxide → muối sodium phenoxide + nước; phenol + sodium metal → sodium phenoxide + hydrogen.</>,
              <>Nhóm –OH làm vòng benzene hoạt động mạnh hơn với electrophile (“hoạt hóa” vòng): bromine water mất màu bởi phenol ở nhiệt độ phòng, tạo kết tủa trắng 2,4,6-tribromophenol.</>,
              <>Bảng 25.4 tóm tắt vị trí bị tấn công bởi electrophile trong thế vào vòng đã có nhóm thế.</>,
            ]}
          />
          <div className="overflow-x-auto my-3 font-sans">
            <table className="w-full text-[12px] border border-stone-300">
              <thead>
                <tr className="bg-[#5c2d75] text-white">
                  <th className="px-2 py-1.5 text-left font-semibold w-1/2">
                    Nhóm thế ĐỊNH HƯỚNG 2, 4, 6 — hoạt hóa vòng (cho electron vào vòng)
                  </th>
                  <th className="px-2 py-1.5 text-left font-semibold w-1/2">
                    Nhóm thế ĐỊNH HƯỚNG 3, 5 — làm vòng kém hoạt động (hút electron khỏi vòng)
                  </th>
                </tr>
              </thead>
              <tbody className="text-stone-800 font-mono">
                {[
                  ['–NH₂, –NHR hoặc –NR₂', '–NO₂'],
                  ['–OH hoặc –OR', '–NR₃'],
                  ['–NHCOR', '–CN'],
                  ['–CH₃, –alkyl', '–CHO'],
                  ['–Cl', '–COOH, –COOR'],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? 'bg-stone-50' : 'bg-white'}>
                    <td className="px-2 py-1.5">{r[0]}</td>
                    <td className="px-2 py-1.5">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] text-stone-500 mt-1">
              Bảng 25.4 — Tóm tắt vị trí bị tấn công trong thế electrophile vào hợp chất benzene đã có nhóm thế.
            </p>
          </div>
        </PageWrapper>
      )}

      {/* ==================== TRANG 391 ==================== */}
      {show('p391') && (
        <PageWrapper pageNumber={391} side="right" pageId="p391" onViewPageLatex={onViewPageLatex}>
          <H2>Câu hỏi cuối chương (End-of-chapter questions)</H2>
          <QuestionBox
            number="EOC 1"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) CH. b) C₆H₆. c) i) lục giác sáu C, mỗi C một H, nối đôi C1=C2, C3=C4, C5=C6 xen kẽ nối đơn; ii) công thức khung Kekulé (3 nối đôi) và công thức khung delocalised (vòng tròn trong lục giác)."
          >
            <p><strong>a</strong> Công thức thực nghiệm của benzene? <strong>b</strong> Công thức phân tử của benzene? <strong>c i</strong> Vẽ công thức hiển thị đầy đủ cấu trúc Kekulé của benzene (mọi nguyên tử, nối đôi và nối đơn). <strong>ii</strong> Vẽ công thức khung cho cấu trúc Kekulé và cấu trúc delocalised của benzene.</p>
          </QuestionBox>
          <QuestionBox
            number="EOC 2"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) C₆H₆ + Br₂ → C₆H₅Br + HBr. b) FeBr₃ (hoặc AlBr₃; thêm mạt sắt sinh tại chỗ). c) Màu cam/nâu của bromine nhạt dần; khí HBr bốc khói axit. d) i) AlCl₃ (khan); ii) CH₃CH₂CH₂⁺; iii) propylbenzene; iv) bước 1: AlCl₃ + CH₃CH₂CH₂Cl → CH₃CH₂CH₂⁺ + AlCl₄⁻; bước 2: vòng π tấn công carbocation tạo intermediate (+, 4 e π); bước 3: AlCl₄⁻ tách H⁺ → propylbenzene + HCl + AlCl₃ hoàn nguyên xúc tác."
          >
            <p>Benzene phản ứng với bromine. <strong>a</strong> Viết phương trình hóa học cân bằng. <strong>b</strong> Gọi tên xúc tác. <strong>c</strong> Nêu quan sát thị giác trong phản ứng. <strong>d</strong> Benzene cũng phản ứng với halogenoalkane — phản ứng Friedel–Crafts: <strong>i</strong> dùng 1-chloropropane, viết công thức xúc tác cần để khởi đầu phản ứng với benzene; <strong>ii</strong> viết công thức cấu tạo electrophile; <strong>iii</strong> gọi tên sản phẩm hữu cơ; <strong>iv</strong> vẽ ba bước cơ chế (tạo electrophile, tấn công vòng, tạo sản phẩm kèm hoàn nguyên xúc tác).</p>
          </QuestionBox>
          <QuestionBox
            number="EOC 3"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) i) C₆H₆O (C₆H₅OH); ii) C₆H₆O. b) sủi bọt khí (H₂), sodium tan dần: 2C₆H₅OH + 2Na → 2C₆H₅ONa + H₂. c) phản ứng trung hòa: C₆H₅OH + NaOH → C₆H₅ONa + H₂O. d) sodium phenoxide. e) 2,4,6-tribromophenol; quan sát: nước bromine mất màu cam + kết tủa trắng; C₆H₅OH + 3Br₂ → C₆H₂Br₃OH + 3HBr; benzene cần Br₂ nguyên chất + xúc tác FeBr₃ còn phenol phản ứng ngay với nước bromine ở nhiệt độ phòng → phenol hoạt động hơn benzene. f) cặp electron tự do trên O của –OH delocalise vào vòng π, tăng mật độ electron vòng → electrophile tấn công dễ hơn (vòng được hoạt hóa)."
          >
            <p>Phenol là hợp chất aryl. <strong>a i</strong> Công thức phân tử của phenol? <strong>ii</strong> Công thức thực nghiệm? <strong>b</strong> Phenol nóng chảy phản ứng với sodium kim loại: nêu một quan sát và viết phương trình cân bằng. <strong>c</strong> Phenol phản ứng với dung dịch sodium hydroxide: gọi tên loại phản ứng và viết phương trình cân bằng. <strong>d</strong> Phản ứng ở b và c cho cùng một sản phẩm hữu cơ — gọi tên. <strong>e</strong> Phenol phản ứng với bromine water: tên sản phẩm, hai quan sát thị giác, phương trình cân bằng, và bình luận vì sao điều này chứng tỏ phenol phản ứng mạnh hơn benzene. <strong>f</strong> Giải thích vì sao phenol phản ứng mạnh hơn benzene (phải nhắc tới mô hình sắp xếp electron).</p>
          </QuestionBox>
          <QuestionBox
            number="EOC 4 (a–d)"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) Thế electrophile. b) HNO₃ bị H₂SO₄ đặc proton hóa rồi mất nước: sinh NO₂⁺ trong hỗn hợp. c) ≈ 55 °C. d) mũi tên cong từ vòng π tới N của NO₂⁺ → intermediate (H và NO₂ cùng C, vòng 4 e π, dấu +) → mũi tên cong từ liên kết C–H trả về vòng → nitrobenzene + H⁺."
          >
            <p>Benzene nitration cho nitrobenzene. <strong>a</strong> Gọi tên cơ chế. <strong>b</strong> Tiểu phân tấn công là NO₂⁺ — nó được sinh ra trong hỗn hợp phản ứng thế nào (tên chất + phương trình)? <strong>c</strong> Đề nghị nhiệt độ thích hợp. <strong>d</strong> Dùng mũi tên cong vẽ cơ chế benzene + NO₂⁺ → nitrobenzene.</p>
          </QuestionBox>
        </PageWrapper>
      )}

      {/* ==================== TRANG 392 ==================== */}
      {show('p392') && (
        <PageWrapper pageNumber={392} side="left" pageId="p392" onViewPageLatex={onViewPageLatex}>
          <QuestionBox
            number="EOC 4e"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="i) C₈H₉ClO (4-chloro-3,5-dimethylphenol). ii) Dùng làm chất sát trùng/khử trùng trong gia đình (thuốc sát trùng TCP) — phenol halogen hóa diệt khuẩn. iii) Bromine water mất màu: thế vào hai vị trí trống 2 và 6 của vòng → hai cấu trúc gợi ý: 2-bromo-4-chloro-3,5-dimethylphenol và 6-bromo-4-chloro-3,5-dimethylphenol (Br vào ortho của –OH)."
          >
            <p><strong>e</strong> Cấu trúc một chất thông dụng trong gia đình cho dưới đây: vòng benzene mang –OH (C1), –CH₃ (C3 và C5), –Cl (C4). <strong>i</strong> Cho công thức phân tử của hợp chất. <strong>ii</strong> Gợi ý một công dụng trong nhà và giải thích. <strong>iii</strong> Khi thêm bromine water vào dung dịch chất này, màu bị mất — gợi ý hai cấu trúc cho sản phẩm.</p>
          </QuestionBox>
          <QuestionBox
            number="EOC 5"
            showSolutionsGlobal={showSolutionsGlobal}
            solution="a) Mỗi C sp² tạo 3 liên kết σ (2 C–C, 1 C–H) với góc 120°, phân tử phẳng; orbital p còn lại của mỗi C chứa 1 e, sáu orbital p xen phủ tạo vòng 6 e π delocalised trên và dưới mặt phẳng; mọi liên kết C–C dài bằng nhau 0,139 nm. b) Cyclohexene có nối đôi C=C khu trú, giàu electron → cộng Br₂ ngay làm mất màu nước bromine; benzene có hệ π delocalised bền (năng lượng thấp hơn), mật độ electron mỗi vị trí thấp hơn và phá vỡ hệ π phải tốn năng lượng → không phản ứng với nước bromine (chỉ thế khi có Br₂ nguyên chất + halogen carrier)."
          >
            <p><strong>a</strong> Mô tả liên kết trong benzene, kèm mô tả mô hình sắp xếp electron trong phân tử. <strong>b</strong> Cyclohexene làm mất màu bromine water nhưng benzene thì không — giải thích khác biệt về khả năng phản ứng với bromine water.</p>
          </QuestionBox>
        </PageWrapper>
      )}
    </div>
  );
};

export default TextbookPages25;
