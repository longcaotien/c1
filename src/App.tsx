import { useState } from 'react';
import { TextbookPages } from './components/TextbookPages';
import { LatexCodeViewer } from './components/LatexCodeViewer';
import { FULL_LATEX_DOCUMENT } from './data/latexSource';
import {
  BookOpen,
  Code2,
  Columns,
  Copy,
  Check,
  Download,
  Printer,
  Lightbulb,
  FlaskConical,
  FileCheck2,
} from 'lucide-react';

type ViewMode = 'split' | 'preview' | 'latex';

const PAGE_TABS = [
  { id: 'all', label: 'Tất cả (226–233)' },
  { id: 'p226', label: 'Trang 226' },
  { id: 'p227', label: 'Trang 227' },
  { id: 'p228', label: 'Trang 228' },
  { id: 'p229', label: 'Trang 229' },
  { id: 'p230', label: 'Trang 230' },
  { id: 'p231', label: 'Trang 231' },
  { id: 'p232', label: 'Trang 232' },
  { id: 'p233', label: 'Trang 233' },
];

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [selectedPageFilter, setSelectedPageFilter] = useState<string>('all');
  const [activeLatexSection, setActiveLatexSection] = useState<string>('full');
  const [showSolutionsGlobal, setShowSolutionsGlobal] = useState<boolean>(false);
  const [copiedFull, setCopiedFull] = useState<boolean>(false);

  const handleCopyFullLatex = async () => {
    try {
      await navigator.clipboard.writeText(FULL_LATEX_DOCUMENT);
      setCopiedFull(true);
      setTimeout(() => setCopiedFull(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = FULL_LATEX_DOCUMENT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedFull(true);
      setTimeout(() => setCopiedFull(false), 2500);
    }
  };

  const handleDownloadFullLatex = () => {
    const blob = new Blob([FULL_LATEX_DOCUMENT], {
      type: 'text/x-tex;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Chuong17_Alcohol_Ester_CarboxylicAcid_Trang226_233_VI.tex';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleViewPageLatex = (pageId: string) => {
    setActiveLatexSection(pageId);
    if (viewMode === 'preview') {
      setViewMode('split');
    }
  };

  return (
    <div className="min-h-screen bg-stone-200/80 text-stone-900 flex flex-col">
      {/* Top Navigation & Control Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-stone-300 shadow-xs print:hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
            {/* Brand & Document Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d33427] text-white flex items-center justify-center shadow-sm shrink-0">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-100 text-[#d33427]">
                    Cambridge AS &amp; A Level Chemistry
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Trang 226 – 233 (Đầy đủ 8 Hình &amp; 11 Bài tập)
                  </span>
                </div>
                <h1 className="text-base sm:text-lg font-bold text-stone-900 leading-tight mt-0.5">
                  Bản Dịch Tiếng Việt &amp; Mã Nguồn LaTeX: Alcohol, Ester và Carboxylic Acid
                </h1>
              </div>
            </div>

            {/* Mode Switcher & Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* View Mode Switcher */}
              <div className="inline-flex rounded-lg bg-stone-100 p-1 border border-stone-200">
                <button
                  type="button"
                  onClick={() => setViewMode('preview')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'preview'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#d33427]" />
                  <span>Bản dịch SGK</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('split')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'split'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5 text-amber-600" />
                  <span>Song song (SGK + LaTeX)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('latex')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'latex'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mã LaTeX Đầy Đủ</span>
                </button>
              </div>

              {/* Toggle Solutions */}
              <button
                type="button"
                onClick={() => setShowSolutionsGlobal(!showSolutionsGlobal)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                  showSolutionsGlobal
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>{showSolutionsGlobal ? 'Đang hiện Đáp án' : 'Hiện Đáp án (Câu 1–8)'}</span>
              </button>

              {/* Copy Full LaTeX */}
              <button
                type="button"
                onClick={handleCopyFullLatex}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#d33427] hover:bg-[#b8291d] text-white shadow-xs transition-all cursor-pointer"
              >
                {copiedFull ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Đã chép toàn bộ LaTeX!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Chép mã LaTeX (Full)</span>
                  </>
                )}
              </button>

              {/* Download .tex */}
              <button
                type="button"
                onClick={handleDownloadFullLatex}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải .tex</span>
              </button>

              {/* Print / PDF */}
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 transition-all cursor-pointer"
                title="In hoặc Lưu thành PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">In / PDF</span>
              </button>
            </div>
          </div>

          {/* Page Filter Bar */}
          {viewMode !== 'latex' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 mt-2.5 border-t border-stone-200/80 pb-0.5">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mr-1 shrink-0">
                Chuyển trang nhanh:
              </span>
              {PAGE_TABS.map((tab) => {
                const active = selectedPageFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setSelectedPageFilter(tab.id);
                      if (tab.id !== 'all') {
                        setActiveLatexSection(tab.id);
                      } else {
                        setActiveLatexSection('full');
                      }
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                      active
                        ? 'bg-stone-800 text-white'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-3 sm:px-6 py-6">
        {viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto">
            <TextbookPages
              selectedPageFilter={selectedPageFilter}
              showSolutionsGlobal={showSolutionsGlobal}
              onViewPageLatex={handleViewPageLatex}
            />
          </div>
        )}

        {viewMode === 'latex' && (
          <div className="max-w-6xl mx-auto">
            <LatexCodeViewer
              activeSectionId={activeLatexSection}
              onSelectSection={setActiveLatexSection}
            />
          </div>
        )}

        {viewMode === 'split' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Left Side: Formatted Vietnamese Textbook Preview */}
            <div className="xl:col-span-7 space-y-4">
              <div className="bg-white rounded-xl px-4 py-2.5 border border-stone-300 flex items-center justify-between shadow-2xs print:hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                  <FileCheck2 className="w-4 h-4 text-[#d33427]" />
                  <span>BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 226 – 233)</span>
                </div>
                <span className="text-[11px] text-stone-500">
                  Giữ nguyên 100% hình ảnh, công thức &amp; bố cục 2 cột
                </span>
              </div>
              <TextbookPages
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            </div>

            {/* Right Side: Sticky LaTeX Source Code Studio */}
            <div className="xl:col-span-5 xl:sticky xl:top-28 print:hidden">
              <LatexCodeViewer
                activeSectionId={activeLatexSection}
                onSelectSection={setActiveLatexSection}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-5 px-6 border-t border-stone-800 print:hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Bản dịch Tiếng Việt &amp; Chế bản LaTeX hoàn chỉnh — Chương 17: Alcohols, Esters and Carboxylic Acids (Trang 226–233).
          </div>
          <div className="text-stone-500">
            Sử dụng gói <code className="text-stone-300">tcolorbox</code>, <code className="text-stone-300">chemfig</code>, <code className="text-stone-300">mhchem</code>, <code className="text-stone-300">tikz</code> &amp; <code className="text-stone-300">multicol</code>.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
