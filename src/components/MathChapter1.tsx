import React from 'react';
import {
  FigureNapierPortrait,
  FigureNapierTimeline,
  FigureProsthaphaeresis,
  FigureStifel,
  FigureBase2Example,
  FigureUnitRadius,
  FigureNapierTables,
  FigureApproachE,
} from './MathFigures';
import { BookOpenText, Lightbulb, Languages } from 'lucide-react';

/* ==========================================================================
   TOÁN HỌC — CHƯƠNG 1: JOHN NAPIER, 1614
   (e: The Story of a Number — Eli Maor, Princeton University Press, 1994)
   Bản tiếng Việt diễn giải chi tiết theo nguyên tác (biên soạn lại trung
   thực toàn bộ mạch truyện, số liệu và công thức của chương 1).
   ========================================================================== */

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-bold text-[#7a5c17] font-sans mt-6 mb-2.5 leading-snug flex items-center gap-2">
    <span className="w-2.5 h-2.5 bg-[#b99a4e] rounded-sm shrink-0" />
    {children}
  </h2>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-3 text-justify text-[13.5px] leading-relaxed text-stone-800">{children}</p>
);

const EqBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="my-3 py-2.5 px-3 bg-[#fbf7ec] rounded border border-[#e6d9b4] font-sans text-xs sm:text-[13px] text-center space-y-1.5">
    {children}
  </div>
);

const TERMS: Array<[string, string]> = [
  ['logarithm', 'logarit — “số tỉ lệ”: số mũ L trong hệ thức N = cơ số^L'],
  ['base', 'cơ số — số cố định b trong N = b^L (khái niệm xuất hiện muộn, sau Napier)'],
  ['geometric progression', 'cấp số nhân — dãy có tỉ số cố định giữa các số hạng liên tiếp'],
  ['arithmetic progression', 'cấp số cộng — dãy có hiệu cố định giữa các số hạng liên tiếp'],
  ['common ratio', 'công bội — tỉ số cố định của cấp số nhân'],
  ['exponent / index', 'số mũ / chỉ số'],
  ['prosthaphaeresis', 'phép prosthaphaeresis — biến tích thành tổng/hiệu bằng công thức lượng giác'],
  ['Napierian logarithm', 'logarit Napier — logarit theo đúng định nghĩa gốc của Napier (giảm khi số tăng)'],
  ['common logarithm', 'logarit thập phân — logarit cơ số 10 (Briggs phổ biến)'],
  ['decimal fraction', 'phân số thập phân — còn mới mẻ thời Napier (Simon Stevin quảng bá)'],
  ['unit radius', 'bán kính đơn vị — quy ước lượng giác chia thành 10⁷ phần'],
  ['limit', 'giới hạn — e = lim (1 + 1/n)ⁿ khi n → ∞'],
];

const KEYPOINTS: string[] = [
  'Logarit ra đời năm 1614 từ nhu cầu thực tế: giải phóng nhà khoa học khỏi các phép nhân, chia, khai căn số lớn.',
  'Hạt giống ý tưởng: (i) quy tắc prosthaphaeresis biến tích thành tổng/hiệu; (ii) tương ứng cấp số nhân ↔ cấp số cộng của Stifel (1544).',
  'Đột phá của Napier: mở rộng số mũ từ số nguyên sang dải liên tục — mọi số dương thành lũy thừa của một “công bội” cố định.',
  'Mỗi phép toán hạ một bậc: nhân/chia → cộng/trừ số mũ; lũy thừa/căn → nhân/chia số mũ.',
  'Chọn công bội 1 − 10⁻⁷ vì chia đơn vị thành 10⁷ phần (quy ước bán kính lượng giác) để tránh phân số thập phân.',
  'Bốn bảng liên tiếp (101 → 51 → 21 → 68× mục) dựng tay trong 20 năm (1594–1614), dừng ở ≈ ½·10⁷.',
  'Tên gọi “logarithm” = “số tỉ lệ”; định nghĩa gốc N = 10⁷(1−10⁻⁷)^L khác định nghĩa hiện đại N = b^L (Euler, 1728).',
  'Chuẩn hóa lại cho thấy (1−10⁻⁷)^10⁷ ≈ 1/e: Napier vô tình đi sát số e nhưng chưa hề có khái niệm cơ số.',
];

export const MathChapter1: React.FC = () => (
  <div className="space-y-6">
    {/* ============ ĐẦU CHƯƠNG ============ */}
    <section className="relative overflow-hidden rounded-xl bg-[#1d1a14] text-white shadow-md">
      <div className="absolute inset-0 opacity-[0.16] pointer-events-none select-none" aria-hidden>
        <div className="font-mono text-[11px] leading-[1.35] p-4 break-all text-[#e9c529]">
          {'2.718281828459045235360287471352662497757247093699959574966967627724076630353547594571382178525166427'.repeat(6)}
        </div>
      </div>
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#e9c529]">
          <BookOpenText className="w-4 h-4" />
          Phần Toán học · e — The Story of a Number (Eli Maor, 1994)
        </div>
        <h1 className="text-2xl sm:text-[30px] font-bold tracking-tight mt-2">
          Chương 1: John Napier, 1614
        </h1>
        <p className="mt-2 text-sm text-white/80 max-w-3xl font-sans italic leading-relaxed">
          “Chẳng có gì gây phiền toái cho thực hành toán học, chẳng gì quấy rầy và cản trở người tính toán hơn những
          phép nhân, chia, khai căn bậc hai và bậc ba với các con số lớn… Tôi vì thế bắt đầu suy nghĩ trong đầu xem
          bằng cách nào chắc chắn và nhanh gọn có thể dẹp bỏ những trở ngại ấy.”
          <span className="not-italic text-white/60"> — John Napier, Mirifici logarithmorum canonis descriptio (1614)</span>
        </p>
      </div>
    </section>

    {/* ============ NỘI DUNG ============ */}
    <article className="bg-[#fbfaf8] border border-stone-300 rounded-sm shadow-lg p-5 sm:p-8 font-serif text-[14px] leading-[1.7] text-stone-800">
      <div className="flex items-center justify-between px-1 pb-3 mb-5 border-b border-stone-200 font-sans text-xs text-stone-500">
        <span>e — Câu chuyện một con số · Bản tiếng Việt diễn giải chi tiết</span>
        <span className="font-bold text-stone-700">Chương 1 (trang 3–10)</span>
      </div>

      <FigureNapierPortrait />

      <H2>1. Một tác giả không ai ngờ tới</H2>
      <P>
        Hiếm khi nào trong lịch sử khoa học, một ý tưởng toán học trừu tượng lại được cả cộng đồng khoa học đón nhận
        nồng nhiệt như phát minh logarit. Và càng khó tưởng tượng hơn nữa con người đã sinh ra phát minh ấy: John
        Napier — một nhà quý tộc Scotland bận rộn với thần học, ruộng đồng và cả những mưu kế quân sự.
      </P>
      <P>
        Napier sinh năm 1550 (không rõ chính xác ngày) tại điền trang của gia đình, lâu đài Merchiston gần
        Edinburgh, con trai Sir Archibald Napier và người vợ đầu Janet Bothwell. Mười ba tuổi ông vào Đại học St.
        Andrews học về tôn giáo; sau thời gian chu du nước ngoài, ông về nước năm 1571 và cưới Elizabeth Stirling, có
        hai con. Vợ mất năm 1579, ông đi bước nữa với Agnes Chisholm và có thêm mười người con; người con thứ hai
        của cuộc hôn nhân này, Robert, sau này trở thành người thực hiện di cảo văn học của cha. Khi Sir Archibald
        qua đời năm 1608, John trở về Merchiston và, với tư cách laird (lãnh chúa) thứ tám của lâu đài, sống phần đời
        còn lại ở đó.
      </P>
      <FigureNapierTimeline />
      <P>
        Những theo đuổi thuở đầu của Napier không hề báo hiệu sức sáng tạo toán học sau này. Mối quan tâm chính của
        ông là tôn giáo — đúng hơn là hoạt động tôn giáo chiến đấu: một người Tin Lành nhiệt thành và đối thủ kiên
        quyết của giáo hoàng, ông công bố quan điểm trong cuốn <em>A Plaine Discovery of the whole Revelation of
        Saint John</em> (1593), công kích gay gắt giáo hội Công giáo, khẳng định giáo hoàng chính là Phản Kitô và
        thúc giục vua Scotland James VI (sau là James I của Anh) thanh trừng triều đình khỏi mọi “phần tử giáo hoàng,
        kẻ vô thần và kẻ trung lập”. Ông còn tiên đoán Ngày Phán Xét sẽ rơi vào khoảng 1688–1700. Cuốn sách được dịch
        ra nhiều thứ tiếng và đi qua 21 ấn bản (10 ấn bản ngay khi ông còn sống), khiến Napier tin rằng tên tuổi mình
        trong lịch sử — hoặc phần ít ỏi còn lại của nó — đã được bảo đảm.
      </P>
      <P>
        Nhưng mối quan tâm của ông không gói trong tôn giáo. Là địa chủ lo cải thiện mùa màng và gia súc, ông thử
        nghiệm các loại phân và muối để bón đất. Năm 1579 ông sáng chế một ốc xoắn thủy lực để khống chế mực nước
        trong các mỏ than. Ông cũng ham mê việc quân sự — hẳn vì nỗi lo chung thời ấy rằng vua Philip II của Tây Ban
        Nha sắp xâm lược Anh: ông vẽ đồ án những tấm gương khổng lồ phóng lửa đốt cháy chiến thuyền đối phương (gợi
        nhớ kế hoạch bảo vệ Syracuse của Archimedes mười tám thế kỷ trước), một khẩu pháo có thể “quét sạch một cánh
        đồng chu vi bốn dặm khỏi mọi sinh vật cao hơn một bàn chân”, một chiến xa với “cái miệng kim loại chuyển
        động” gieo phá hoại tứ phía, và cả một thiết bị “đi ngầm dưới nước cùng thợ lặn và mưu kế khác để hại quân
        thù” — tất cả đều là tiền thân của công nghệ quân sự hiện đại. Không rõ cỗ máy nào từng được chế tạo thật.
      </P>
      <P>
        Con người đa tài ấy cũng là nhân vật của vô số giai thoại. Ông dường như ưa cãi cọ, thường vướng tranh chấp
        với láng giềng và tá điền. Một truyện kể: bực mình vì đàn bồ câu nhà bên sà xuống ăn ngũ cốc của mình, ông
        cảnh báo sẽ bắt chúng nếu chủ nhân không ngăn; người kia thách ông cứ bắt nếu được. Hôm sau, đàn bồ câu nằm
        nửa chết trên bãi cỏ của Napier — ông chỉ việc tẩm ngũ cốc bằng thứ rượu mạnh khiến chim say mèm không cất
        cánh nổi. Truyện khác: nghi một người hầu ăn trộm đồ, ông tuyên bố con gà trống đen của mình sẽ chỉ mặt kẻ
        phạm lỗi; các gia nhân lần lượt vào phòng tối vuốt lưng gà, không ngờ gà đã bị bôi một lớp bồ hóng — kẻ có
        tay sạch chính là kẻ không dám chạm vào gà. Thế nhưng tên tuổi Napier lưu danh không phải nhờ những mưu mẹo
        ấy, mà nhờ một ý tưởng toán học trừu tượng ông thai nghén suốt hai mươi năm: logarit.
      </P>

      <H2>2. Thời đại đòi hỏi một cỗ máy tính toán</H2>
      <P>
        Thế kỷ XVI – đầu XVII chứng kiến tri thức khoa học bùng nổ ở mọi lĩnh vực. Địa lý, vật lý, thiên văn — thoát
        khỏi giáo điều cổ xưa — nhanh chóng đổi thay nhận thức của con người về vũ trụ: hệ nhật tâm của Copernicus
        sau gần một thế kỷ tranh đấu với phán quyết của Giáo hội cuối cùng bắt đầu được chấp nhận; chuyến vòng quanh
        địa cầu của Magellan năm 1521 mở ra kỷ nguyên hàng hải mới; năm 1569 Gerhard Mercator công bố tấm bản đồ thế
        giới trứ danh, tác động quyết định tới nghệ thuật đi biển; ở Ý, Galileo đặt nền móng cho cơ học; ở Đức,
        Kepler công thức hóa ba định luật chuyển động hành tinh, giải phóng thiên văn học vĩnh viễn khỏi vũ trụ địa tâm
        của người Hy Lạp. Mọi bước tiến ấy kéo theo khối lượng số liệu đo đạc ngày càng khổng lồ, buộc các nhà
        khoa học dành phần lớn thời gian cho những phép tính tù mù nặng nhọc. Thời đại cần một phát minh giải phóng
        họ khỏi gánh nặng ấy — và Napier nhận lời thách đấu.
      </P>

      <H2>3. Hai hạt giống của ý tưởng</H2>
      <P>
        Không ai biết Napier lần đầu vấp vào ý tưởng ấy ra sao. Ông thông thạo lượng giác và chắc chắn quen thuộc
        công thức
      </P>
      <EqBox>
        <div className="font-mono">sin A · sin B = ½ [ cos(A − B) − cos(A + B) ]</div>
      </EqBox>
      <P>
        cùng các công thức tương tự cho cos A·cos B và sin A·cos B, bấy giờ gọi là các quy tắc prosthaphaeresis —
        ghép từ tiếng Hy Lạp nghĩa là “cộng và trừ”. Giá trị của chúng nằm ở chỗ tích hai biểu thức lượng giác có
        thể tính bằng tổng hoặc hiệu của những biểu thức lượng giác khác; mà cộng trừ thì dễ hơn nhân chia, nên đây
        là một hệ thống sơ khai để hạ một phép toán xuống phép toán đơn giản hơn. Rất có thể chính ý tưởng này đã
        đặt Napier lên đúng đường ray.
      </P>
      <FigureProsthaphaeresis />
      <P>
        Hạt giống thứ hai, trực tiếp hơn, nằm ở các số hạng của một cấp số nhân — dãy số có tỉ số cố định giữa các số
        hạng liền nhau, chẳng hạn 1, 2, 4, 8, 16, … với công bội 2. Tổng quát, bắt đầu từ 1, các số hạng là 1, q, q²,
        q³, … (số hạng thứ n là qⁿ⁻¹). Nhà toán học Đức Michael Stifel (1487–1567), trong cuốn <em>Arithmetica
        integra</em> (1544), đã phát biểu mối liên hệ then chốt: nhân hai số hạng bất kỳ của dãy 1, q, q², … thì kết
        quả thu được đúng bằng cộng hai số mũ tương ứng; chia hai số hạng cho nhau thì tương đương trừ các số mũ.
      </P>
      <FigureStifel />
      <P>
        Một trục trặc nảy sinh khi số mũ ở mẫu lớn hơn số mũ ở tử: quy tắc cho q³⁻⁵ = q⁻², một biểu thức chưa được
        định nghĩa. Cách gỡ thật tự nhiên: định nghĩa q⁻ⁿ = 1/qⁿ (và để quy tắc qᵐ/qⁿ = qᵐ⁻ⁿ vẫn đúng khi m = n, phải
        định nghĩa q⁰ = 1). Với hai quy ước ấy, cấp số nhân kéo dài vô hạn về cả hai phía …, q⁻³, q⁻², q⁻¹, q⁰ = 1,
        q, q², q³, …; mỗi số hạng là một lũy thừa của công bội q, còn các số mũ …, −3, −2, −1, 0, 1, 2, 3, … lập
        thành một cấp số cộng (hiệu hai số hạng liền nhau không đổi, ở đây bằng 1). Đó chính là ý tưởng chìa khóa
        đằng sau logarit; nhưng nơi Stifel mới chỉ nghĩ tới số mũ nguyên, thiên tài của Napier là mở rộng tương ứng
        ấy ra một dải giá trị liên tục.
      </P>

      <H2>4. Ý tưởng trung tâm: hạ mỗi phép toán một bậc</H2>
      <P>
        Mạch suy nghĩ của ông như sau: nếu mọi số dương đều viết được thành lũy thừa của một số cố định cho trước
        (sau này gọi là cơ số), thì nhân và chia các số sẽ tương đương với cộng và trừ các số mũ của chúng; nâng một
        số lên lũy thừa n (tức nhân nó với chính nó n lần) sẽ tương đương cộng số mũ với chính nó n lần — tức nhân
        số mũ với n; còn khai căn bậc n sẽ tương đương n lần trừ liên tiếp — tức chia số mũ cho n. Nói gọn: mỗi phép
        toán được hạ xuống phép toán ngay dưới nó trong thang thứ bậc phép toán, và nỗi khổ tính toán giảm đi đáng kể.
      </P>
      <FigureBase2Example />
      <P>
        Minh họa bằng cơ số 2: muốn nhân 8 với 32, tra số mũ của chúng (3 và 5), cộng lại thành 8, rồi tra ngược bảng
        lũy thừa để nhận 2⁸ = 256. Muốn tính 4⁵, lấy số mũ của 4 là 2, nhân với 5 thành 10, tra bảng ra 2¹⁰ = 1024.
        Toàn bộ phép nhân và lũy thừa đã hóa thành cộng, nhân trên những con số nhỏ bé.
      </P>

      <H2>5. Chọn công bội: nỗi ám ảnh phân số thập phân</H2>
      <P>
        Muốn bảng đủ dày để tra được mọi số, các số hạng của cấp số nhân phải nằm sát nhau — tức công bội phải rất
        gần 1. Nhưng công bội gần 1 kéo theo những số lẻ thập phân dài dòng, thứ ký hiệu bấy giờ còn mới mẻ và xa
        lạ. Để hạn chế dùng chúng, Napier làm đúng điều ta làm hôm nay khi chia một đồng tiền thành 100 xu hay một
        cây số thành 1000 mét: ông chia đơn vị thành rất nhiều đơn vị con và coi mỗi đơn vị con là một đơn vị mới.
        Vì mục tiêu chính là giảm công tính toán lượng giác, ông theo quy ước lượng giác thời đó: chia bán kính vòng
        tròn đơn vị thành 10 000 000 = 10⁷ phần. Trừ khỏi đơn vị nguyên vẹn phần thứ 10⁷ của nó, ta được số gần 1
        nhất trong hệ này: 1 − 10⁻⁷ = 0,9999999. Đó chính là công bội (“tỉ lệ”, theo chữ của ông) dùng để dựng bảng.
      </P>
      <FigureUnitRadius />

      <H2>6. Hai mươi năm giấy và bút (1594–1614)</H2>
      <P>
        Việc còn lại — lấp đầy các bảng số — có lẽ là một trong những nhiệm vụ kém hứng khởi nhất từng đặt lên vai một
        nhà khoa học, nhưng Napier đã đi trọn con đường, dành hai mươi năm đời mình (1594–1614) cho nó. Bảng đầu tiên
        gồm 101 mục, mở đầu bằng 10⁷ = 10 000 000, tiếp đến 10⁷(1−10⁻⁷) = 9 999 999, rồi 10⁷(1−10⁻⁷)² = 9 999 998,
        cứ thế tới 10⁷(1−10⁻⁷)¹⁰⁰ ≈ 9 999 900 (bỏ qua phần lẻ ,0004950); mỗi số hạng nhận được bằng cách trừ khỏi số
        hạng trước đúng phần thứ 10⁷ của nó. Ông lặp lại toàn bộ quy trình, vẫn khởi đầu từ 10⁷, nhưng lần này lấy
        công bội là tỉ số giữa số cuối và số đầu của bảng gốc, tức 9 999 900 : 10 000 000 = 0,99999 = 1−10⁻⁵; bảng
        thứ hai có 51 mục, mục cuối ≈ 10⁷(1−10⁻⁵)⁵⁰ ≈ 9 995 001. Bảng thứ ba 21 mục dùng tỉ số 9 995 001 : 10 000
        000, mục cuối ≈ 10⁷ × 0,9995²⁰ ≈ 9 900 473. Cuối cùng, từ mỗi mục của bảng thứ ba ông sinh thêm 68 mục nữa
        với tỉ số 9 900 473 : 10 000 000 ≈ 0,99; mục cuối cùng khi ấy ≈ 9 900 473 × 0,99⁶⁸ ≈ 4 998 609 — xấp xỉ một
        nửa con số khởi đầu.
      </P>
      <FigureNapierTables />
      <P>
        Ngày nay công việc ấy đương nhiên giao cho máy tính; thậm chí một máy tính bỏ túi cũng xong trong vài giờ.
        Nhưng Napier chỉ có giấy và bút — đủ hiểu vì sao ông bận tâm giảm thiểu phân số thập phân đến thế. Chính ông
        dặn lại, đại ý: khi dựng bảng thứ hai, tỉ lệ giữa số đầu 10000000,00000 và số cuối 9995001,222927 thật phiền
        phức, vậy hãy tính 21 số theo tỉ lệ dễ chịu 10000 : 9995, đủ sát; số cuối, nếu không sai sót, sẽ là
        9900473,57808.
      </P>

      <H2>7. Đặt tên cho tạo vật: “logarithm”</H2>
      <P>
        Hoàn thành công trình khổng lồ, còn một việc cuối: rửa tội cho tạo vật. Thoạt đầu ông gọi số mũ của mỗi lũy
        thừa là “số nhân tạo” (artificial number), rồi sau chốt lại bằng thuật ngữ logarithm — nghĩa mặt chữ là “số
        tỉ lệ”. Bằng ký hiệu hiện đại, điều này nói rằng: nếu (ở bảng thứ nhất) N = 10⁷(1−10⁻⁷)^L thì số mũ L chính
        là logarit (kiểu Napier) của N. Định nghĩa của Napier khác định nghĩa hiện đại (Leonhard Euler giới thiệu
        năm 1728) ở vài điểm: theo định nghĩa hiện đại, N = b^L với b là cơ số cố định dương khác 1; còn logarit
        Napier giảm khi số tăng, trong khi logarit thập phân (cơ số 10) của ta tăng. Những khác biệt ấy thật ra nhỏ
        và chỉ là hệ quả của việc Napier khăng khăng đặt đơn vị bằng 10⁷ đơn vị con; giá như ông không ám ảnh phân số
        thập phân đến vậy, định nghĩa của ông hẳn đã giản dị và gần định nghĩa hiện đại hơn.
      </P>

      <H2>8. Trên sợi tóc của số e</H2>
      <P>
        Nhìn lại hôm nay, nỗi ám ảnh ấy là một vòng detour không cần thiết. Nhưng chính trong vòng detour đó, Napier
        đã vô tình đi sát rạt một con số mà một thế kỷ sau sẽ được nhận mặt là cơ số phổ quát của logarit và giữ vai
        trò trong toán học chỉ sau số π: số e, giới hạn của (1 + 1/n)ⁿ khi n dần tới vô cùng.
      </P>
      <P>
        Thật vậy, định nghĩa logarit của Napier tương đương hệ thức N = 10⁷(1−10⁻⁷)^L. Chia cả N lẫn L cho 10⁷ (chỉ
        là đổi thang đo), hệ thức trở thành N* = [(1−10⁻⁷)^10⁷]^L* với N* = N/10⁷ và L* = L/10⁷. Mà (1−10⁻⁷)^10⁷ =
        (1−1/10⁷)^10⁷ lại rất gần 1/e — nên logarit Napier về thực chất gần như là logarit cơ số 1/e. Dẫu vậy, lời
        đồn vẫn lan truyền rằng Napier đã khám phá cơ số này (thậm chí chính số e) là sai: như ta đã thấy, ông chưa
        hề tư duy bằng khái niệm cơ số — khái niệm chỉ sinh về sau, cùng với logarit “thông dụng” cơ số 10.
      </P>
      <FigureApproachE />

      {/* ============ THUẬT NGỮ ============ */}
      <div className="mt-8 rounded-md border border-[#e6d9b4] bg-[#fbf7ec] p-4 font-sans">
        <div className="flex items-center gap-2 mb-3">
          <Languages className="w-4 h-4 text-[#7a5c17]" />
          <h3 className="font-bold text-sm text-[#7a5c17]">Thuật ngữ chương 1 (Anh – Việt)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {TERMS.map(([en, vi]) => (
            <div key={en} className="flex gap-2 py-1 border-b border-[#eee3c4] text-[12.5px]">
              <span className="font-semibold text-stone-900 shrink-0">{en}</span>
              <span className="text-stone-600">— {vi}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ ĐIỂM CHÍNH ============ */}
      <div className="mt-5 rounded-md border border-[#cfe0bf] bg-[#f6faf1] p-4 font-sans">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-[#4c7a24]" />
          <h3 className="font-bold text-sm text-[#33511d]">8 điểm chính cần nhớ</h3>
        </div>
        <ol className="list-decimal pl-5 space-y-1.5 text-[12.5px] text-stone-800">
          {KEYPOINTS.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ol>
      </div>

      {/* ============ GHI CHÚ NGUỒN ============ */}
      <p className="mt-5 text-[11.5px] text-stone-500 font-sans leading-relaxed">
        Ghi chú nguồn (tóm lược theo Notes &amp; Sources của chương): trích dẫn mở đầu lấy từ G. A. Gibson, “Napier
        and the Invention of Logarithms” (1914); gia phả gia đình do hậu duệ Mark Napier ghi (1834); các giai thoại
        theo P. Hume Brown (1915); luật số mũ của thế kỷ XVI xem D. E. Smith (1929); ký hiệu số mũ âm/phân số phổ
        biến nhờ Wallis và Newton (1676); phân số thập phân do Simon Stevin (1548–1620) quảng bá; trích dẫn dặn dò
        cách tính bảng lấy từ D. E. Smith, <em>A Source Book in Mathematics</em> (1929). Khẳng định “Napier tìm ra
        e” là ngộ nhận — xem phân tích ở mục 8 và Hình T1.8.
      </p>
    </article>
  </div>
);
