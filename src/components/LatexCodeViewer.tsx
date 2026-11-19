import React, { useState } from 'react';
import { LATEX_SECTIONS, type LatexSectionItem } from '../data/latexSource';
import {
  Check,
  Copy,
  Download,
  FileCode2,
  Sparkles,
  BookOpenCheck,
  Terminal,
  Layers,
} from 'lucide-react';

interface LatexCodeViewerProps {
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  sections?: LatexSectionItem[];
  chapterTag?: string; // ví dụ: 'Chương 17' | 'Chương 18'
  pageRange?: string; // ví dụ: '226 – 233' | '234 – 243'
  downloadPrefix?: string; // ví dụ: 'Cambridge_Chem_Ch17' | 'Cambridge_Chem_Ch18'
}

export const LatexCodeViewer: React.FC<LatexCodeViewerProps> = ({
  activeSectionId,
  onSelectSection,
  sections,
  chapterTag = 'Chương 17',
  pageRange = '226 – 233',
  downloadPrefix = 'Cambridge_Chem_Ch17',
}) => {
  const [copied, setCopied] = useState(false);

  const SECTIONS = sections && sections.length ? sections : LATEX_SECTIONS;
  const currentSection =
    SECTIONS.find((s) => s.id === activeSectionId) || SECTIONS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentSection.latexCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = currentSection.latexCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([currentSection.latexCode], {
      type: 'text/x-tex;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download =
      currentSection.id === 'full'
        ? `${downloadPrefix}_Trang${pageRange.replace(/[^0-9]+/g, '_')}_VI.tex`
        : currentSection.id === 'full-solutions'
        ? `${downloadPrefix}_Trang${pageRange.replace(/[^0-9]+/g, '_')}_KemDapAn_VI.tex`
        : `${downloadPrefix}_${currentSection.id}_VI.tex`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const lines = currentSection.latexCode.split('\n');

  const renderHighlightedLine = (line: string) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('%')) {
      return <span className="text-emerald-400/90 italic">{line}</span>;
    }
    if (
      trimmed.startsWith('\\documentclass') ||
      trimmed.startsWith('\\usepackage') ||
      trimmed.startsWith('\\definecolor') ||
      trimmed.startsWith('\\newcommand') ||
      trimmed.startsWith('\\newtcolorbox')
    ) {
      return <span className="text-sky-300">{line}</span>;
    }
    if (
      trimmed.startsWith('\\begin') ||
      trimmed.startsWith('\\end') ||
      trimmed.startsWith('\\sectionRed') ||
      trimmed.startsWith('\\subsectionGray') ||
      trimmed.startsWith('\\subsectionDark')
    ) {
      return <span className="text-amber-300 font-semibold">{line}</span>;
    }
    if (trimmed.includes('\\chemfig') || trimmed.includes('\\ce{')) {
      return <span className="text-rose-300">{line}</span>;
    }
    return <span className="text-stone-100">{line}</span>;
  };

  return (
    <div className="space-y-4">
      {/* Top Info Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-red-950 text-white rounded-xl p-4 sm:p-5 border border-stone-700 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Chuẩn biên dịch Overleaf / TeXLive / MiKTeX (Tiếng Việt UTF-8)
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Mã nguồn LaTeX Hoàn Chỉnh ({chapterTag}, Trang {pageRange})
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-3xl">
              Đã tích hợp đầy đủ các gói <code className="text-amber-200">tcolorbox</code>,{' '}
              <code className="text-amber-200">multicol</code>,{' '}
              <code className="text-amber-200">chemfig</code>,{' '}
              <code className="text-amber-200">mhchem</code> và hình vẽ vector{' '}
              <code className="text-amber-200">TikZ</code> tự động cho toàn bộ hình vẽ của chương (biên dịch chạy ngay không lo lỗi thiếu file ảnh ngoài).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Đã sao chép mã LaTeX!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Sao chép toàn bộ mã
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Tải file .tex
            </button>
          </div>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4 pt-3.5 border-t border-white/10 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-red-400 shrink-0" />
            <span>Giữ nguyên bố cục 2 cột, bảng màu đỏ/tím/xanh/kem như sách gốc</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Công thức cấu tạo vẽ bằng chemfig &amp; phương trình mhchem</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Hỗ trợ cả chèn ảnh rời (fig17_1.jpg...) lẫn hình vẽ TikZ tự động</span>
          </div>
        </div>
      </div>

      {/* Section Selector Pills */}
      <div className="bg-white rounded-xl p-3 border border-stone-200 shadow-xs">
        <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 px-1">
          Chọn phần mã LaTeX cần xem hoặc sao chép:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SECTIONS.map((sec) => {
            const active = sec.id === currentSection.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onSelectSection(sec.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  active
                    ? 'bg-[#d33427] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>{sec.pageNumber}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Code Window */}
      <div className="rounded-xl overflow-hidden border border-stone-800 bg-[#0f1419] shadow-xl">
        {/* Top bar of code editor */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a2129] border-b border-stone-800 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono font-semibold text-white">
              {currentSection.title}
            </span>
            <span className="hidden sm:inline text-stone-400">
              — {currentSection.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-stone-400">
              {lines.length} dòng mã
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-700 hover:bg-stone-600 text-white text-[11px] font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Đã chép' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Scrollable code area */}
        <div className="max-h-[720px] overflow-auto p-4 font-mono text-xs leading-relaxed select-all">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, i) => (
                <tr key={i} className="hover:bg-white/5">
                  <td className="select-none pr-4 text-right text-stone-600 w-10 align-top">
                    {i + 1}
                  </td>
                  <td className="whitespace-pre-wrap break-all">
                    {renderHighlightedLine(line)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
