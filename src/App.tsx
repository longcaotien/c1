import { useState } from 'react';
import { TextbookPages } from './components/TextbookPages';
import { TextbookPages18 } from './components/TextbookPages18';
import { LatexCodeViewer } from './components/LatexCodeViewer';
import { StudyExtras18 } from './components/StudyExtras18';
import { FULL_LATEX_DOCUMENT } from './data/latexSource';
import { LATEX_SECTIONS_18, FULL_LATEX_DOCUMENT_18 } from './data/latexSource18';
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
  GraduationCap,
} from 'lucide-react';

type ViewMode = 'split' | 'preview' | 'latex' | 'study';
type Chapter = '17' | '18';

const PAGE_TABS_17 = [
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

const PAGE_TABS_18 = [
  { id: 'all', label: 'Tất cả (234–243)' },
  { id: 'p234', label: 'Trang 234' },
  { id: 'p235', label: 'Trang 235' },
  { id: 'p236', label: 'Trang 236' },
  { id: 'p237', label: 'Trang 237' },
  { id: 'p238', label: 'Trang 238' },
  { id: 'p239', label: 'Trang 239' },
  { id: 'p240', label: 'Trang 240' },
  { id: 'p241', label: 'Trang 241' },
  { id: 'p242', label: 'Trang 242' },
  { id: 'p243', label: 'Trang 243' },
];

export function App() {
  const [chapter, setChapter] = useState<Chapter>('18');
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [selectedPageFilter, setSelectedPageFilter] = useState<string>('all');
  const [activeLatexSection, setActiveLatexSection] = useState<string>('full');
  const [showSolutionsGlobal, setShowSolutionsGlobal] = useState<boolean>(false);
  const [copiedFull, setCopiedFull] = useState<boolean>(false);

  const PAGE_TABS = chapter === '17' ? PAGE_TABS_17 : PAGE_TABS_18;
  const fullLatex = chapter === '17' ? FULL_LATEX_DOCUMENT : FULL_LATEX_DOCUMENT_18;

  const switchChapter = (c: Chapter) => {
    setChapter(c);
    setSelectedPageFilter('all');
    setActiveLatexSection('full');
  };

  const handleCopyFullLatex = async () => {
    try {
      await navigator.clipboard.writeText(fullLatex);
      setCopiedFull(true);
      setTimeout(() => setCopiedFull(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = fullLatex;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedFull(true);
      setTimeout(() => setCopiedFull(false), 2500);
    }
  };

  const handleDownloadFullLatex = () => {
    const blob = new Blob([fullLatex], {
      type: 'text/x-tex;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download =
      chapter === '17'
        ? 'Chuong17_Alcohol_Ester_CarboxylicAcid_Trang226_233_VI.tex'
        : 'Chuong18_CarbonylCompounds_Trang234_243_VI.tex';
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
                    {chapter === '17'
                      ? 'Trang 226 – 233 (Đầy đủ 8 Hình & 11 Bài tập)'
                      : 'Trang 234 – 243 (Đầy đủ 10 Hình vẽ lại SVG & 8 Bài tập có đáp án)'}
                  </span>
                </div>
                <h1 className="text-base sm:text-lg font-bold text-stone-900 leading-tight mt-0.5">
                  {chapter === '17'
                    ? 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Alcohol, Ester và Carboxylic Acid'
                    : 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Hợp chất Carbonyl (Aldehyde & Ketone)'}
                </h1>
              </div>
            </div>

            {/* Mode Switcher & Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Chapter Switcher */}
              <div className="inline-flex rounded-lg bg-stone-900 p-1">
                <button
                  type="button"
                  onClick={() => switchChapter('17')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    chapter === '17' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Chương 17
                </button>
                <button
                  type="button"
                  onClick={() => switchChapter('18')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    chapter === '18' ? 'bg-[#d33427] text-white shadow-xs' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Chương 18 (mới)
                </button>
              </div>

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
                {chapter === '18' && (
                  <button
                    type="button"
                    onClick={() => setViewMode('study')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'study'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-[#5c2d75]" />
                    <span>Ôn tập &amp; Tra cứu</span>
                  </button>
                )}
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
                <span>
                  {showSolutionsGlobal
                    ? 'Đang hiện Đáp án'
                    : chapter === '17'
                    ? 'Hiện Đáp án (Câu 1–8)'
                    : 'Hiện Đáp án (Câu 1–7)'}
                </span>
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
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 transition-colors cursor-pointer"
                title="In hoặc Lưu thành PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">In / PDF</span>
              </button>
            </div>
          </div>

          {/* Page Filter Bar */}
          {viewMode !== 'latex' && viewMode !== 'study' && (
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
        {viewMode === 'study' && chapter === '18' && (
          <div className="max-w-6xl mx-auto">
            <StudyExtras18 />
          </div>
        )}

        {viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto">
            {chapter === '17' ? (
              <TextbookPages
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            ) : (
              <TextbookPages18
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            )}
          </div>
        )}

        {viewMode === 'latex' && (
          <div className="max-w-6xl mx-auto">
            <LatexCodeViewer
              activeSectionId={activeLatexSection}
              onSelectSection={setActiveLatexSection}
              sections={chapter === '18' ? LATEX_SECTIONS_18 : undefined}
              chapterTag={chapter === '17' ? 'Chương 17' : 'Chương 18'}
              pageRange={chapter === '17' ? '226 – 233' : '234 – 243'}
              downloadPrefix={chapter === '17' ? 'Cambridge_Chem_Ch17' : 'Cambridge_Chem_Ch18'}
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
                  <span>
                    {chapter === '17'
                      ? 'BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 226 – 233)'
                      : 'BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 234 – 243)'}
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 hidden md:inline">
                  Giữ nguyên 100% hình ảnh, công thức &amp; bố cục 2 cột
                </span>
              </div>
              {chapter === '17' ? (
                <TextbookPages
                  selectedPageFilter={selectedPageFilter}
                  showSolutionsGlobal={showSolutionsGlobal}
                  onViewPageLatex={handleViewPageLatex}
                />
              ) : (
                <TextbookPages18
                  selectedPageFilter={selectedPageFilter}
                  showSolutionsGlobal={showSolutionsGlobal}
                  onViewPageLatex={handleViewPageLatex}
                />
              )}
            </div>

            {/* Right Side: Sticky LaTeX Source Code Studio */}
            <div className="xl:col-span-5 xl:sticky xl:top-28 print:hidden">
              <LatexCodeViewer
                activeSectionId={activeLatexSection}
                onSelectSection={setActiveLatexSection}
                sections={chapter === '18' ? LATEX_SECTIONS_18 : undefined}
                chapterTag={chapter === '17' ? 'Chương 17' : 'Chương 18'}
                pageRange={chapter === '17' ? '226 – 233' : '234 – 243'}
                downloadPrefix={chapter === '17' ? 'Cambridge_Chem_Ch17' : 'Cambridge_Chem_Ch18'}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-5 px-6 border-t border-stone-800 print:hidden">
        <div className="max-w-[1600px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Bản dịch Tiếng Việt &amp; Chế bản LaTeX hoàn chỉnh — Chương 17 (Trang 226–233) &amp; Chương 18: Hợp chất
            carbonyl (Trang 234–243).
          </div>
          <div className="text-stone-500">
            Sử dụng gói <code className="text-stone-300">tcolorbox</code>, <code className="text-stone-300">chemfig</code>,{' '}
            <code className="text-stone-300">mhchem</code>, <code className="text-stone-300">tikz</code> &amp;{' '}
            <code className="text-stone-300">multicol</code>.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
