import React from 'react';
import { Dna, Upload, BookOpenText, FlaskConical, Sigma } from 'lucide-react';

/* ==========================================================================
   SINH HỌC — TRANG CHỜ NỘI DUNG
   (Người dùng chưa cung cấp tài liệu nguồn cho phần Sinh học)
   ========================================================================== */

export const BiologyPlaceholder: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <section className="relative overflow-hidden rounded-xl bg-[#12291c] text-white shadow-md">
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none select-none" aria-hidden>
        <svg viewBox="0 0 600 200" className="w-full h-full">
          {Array.from({ length: 26 }).map((_, i) => {
            const x = 12 + i * 23;
            const t = i * 0.55;
            const y1 = 100 + Math.sin(t) * 55;
            const y2 = 100 - Math.sin(t) * 55;
            return (
              <g key={i}>
                <circle cx={x} cy={y1} r="3.4" fill="#7ec98a" />
                <circle cx={x} cy={y2} r="3.4" fill="#e9c529" />
                <line x1={x} y1={y1} x2={x} y2={y2} stroke="#9fd8ab" strokeWidth="1.4" />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="relative p-6 sm:p-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2e7d46] shadow-md mb-3">
          <Dna className="w-7 h-7 text-white" />
        </div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#8fd6a0]">
          Phần Sinh học · Sắp ra mắt
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1.5">
          Sinh học — đang chờ tài liệu nguồn
        </h1>
        <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto font-sans leading-relaxed">
          Ứng dụng đã được chia thành 3 phần: <strong className="text-white">Hóa học</strong> (3 chương Cambridge đã
          dịch hoàn chỉnh), <strong className="text-white">Toán học</strong> (Chương 1 sách{' '}
          <em>e — The Story of a Number</em> của Eli Maor, vừa hoàn thành) và{' '}
          <strong className="text-white">Sinh học</strong>. Riêng phần Sinh học chưa có sách/chương nguồn nào được
          cung cấp, nên nội dung sẽ mở ngay khi bạn gửi tài liệu.
        </p>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="rounded-xl border border-stone-300 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-lg bg-red-50 text-[#d33427] flex items-center justify-center">
            <FlaskConical className="w-4.5 h-4.5" />
          </div>
          <h2 className="font-bold text-sm text-stone-900">Hóa học — sẵn có</h2>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed font-sans">
          Chương 13 (Nitrogen &amp; sulfur, tr. 180–186), Chương 17 (Alcohol, ester &amp; carboxylic acid, tr.
          226–233) và Chương 18 (Hợp chất carbonyl, tr. 234–243): bản dịch tiếng Việt, hình SVG vẽ lại, mã LaTeX và
          mục ôn tập tương tác.
        </p>
      </div>
      <div className="rounded-xl border border-stone-300 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#fbf3dd] text-[#7a5c17] flex items-center justify-center">
            <Sigma className="w-4.5 h-4.5" />
          </div>
          <h2 className="font-bold text-sm text-stone-900">Toán học — mới</h2>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed font-sans">
          Chương 1 “John Napier, 1614” của cuốn <em>e — The Story of a Number</em> (Eli Maor, 1994): bản tiếng Việt
          diễn giải chi tiết, 8 hình vẽ giải thích tự biên soạn (T1.1–T1.8), thuật ngữ Anh–Việt và mã nguồn LaTeX đầy
          đủ.
        </p>
      </div>
      <div className="rounded-xl border-2 border-dashed border-[#2e7d46]/50 bg-[#f4faf5] p-5 shadow-sm">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#2e7d46] text-white flex items-center justify-center">
            <Upload className="w-4.5 h-4.5" />
          </div>
          <h2 className="font-bold text-sm text-[#1d4a2b]">Sinh học — cần tài liệu</h2>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          Hãy gửi sách/chương Sinh học bạn muốn dịch (PDF hoặc ảnh chụp trang sách, giống cách đã gửi sách Hóa và sách
          Toán). Nội dung sẽ được xây dựng theo đúng chuẩn hiện có: dịch tiếng Việt chi tiết, hình vẽ lại bằng SVG,
          mã LaTeX và phần ôn tập.
        </p>
      </div>
    </div>

    <div className="mt-6 rounded-xl border border-stone-300 bg-white p-5 shadow-sm flex items-start gap-3">
      <BookOpenText className="w-5 h-5 text-[#2e7d46] shrink-0 mt-0.5" />
      <p className="text-xs text-stone-600 leading-relaxed font-sans">
        <strong className="text-stone-900">Gợi ý:</strong> nếu bạn muốn phần Sinh học bám theo một bộ sách cụ thể
        (ví dụ Cambridge AS &amp; A Level Biology — các chương về tế bào, enzyme, di truyền…), chỉ cần đính kèm file
        và nêu rõ chương/trang cần dịch — toàn bộ quy trình dịch + vẽ hình + LaTeX sẽ được áp dụng y như ba chương
        Hóa học và chương Toán vừa hoàn thành.
      </p>
    </div>
  </div>
);

export default BiologyPlaceholder;
