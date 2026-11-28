import { useState } from 'react';
import { TextbookPages } from './components/TextbookPages';
import { TextbookPages18 } from './components/TextbookPages18';
import { TextbookPages13 } from './components/TextbookPages13';
import { LatexCodeViewer } from './components/LatexCodeViewer';
import { StudyExtras18 } from './components/StudyExtras18';
import { StudyExtras13 } from './components/StudyExtras13';
import { TextbookPages25 } from './components/TextbookPages25';
import { StudyExtras25 } from './components/StudyExtras25';
import { MathChapter1 } from './components/MathChapter1';
import { BiologyPlaceholder } from './components/BiologyPlaceholder';
import { FigureZoom } from './components/FigureZoom';
import { FULL_LATEX_DOCUMENT } from './data/latexSource';
import { LATEX_SECTIONS_18, FULL_LATEX_DOCUMENT_18 } from './data/latexSource18';
import { LATEX_SECTIONS_13, FULL_LATEX_DOCUMENT_13 } from './data/latexSource13';
import { LATEX_SECTIONS_MATH1, FULL_LATEX_DOCUMENT_MATH1 } from './data/latexSourceMath1';
import { LATEX_SECTIONS_25, FULL_LATEX_DOCUMENT_25 } from './data/latexSource25';
import { SQLChapter1 } from './components/SQLChapter1';
import { LATEX_SECTIONS_SQL1, FULL_LATEX_DOCUMENT_SQL1 } from './data/latexSourceSQL1';
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
  Sigma,
  Dna,
  Database,
} from 'lucide-react';

type ViewMode = 'split' | 'preview' | 'latex' | 'study';
type Chapter = '13' | '17' | '18' | '25';
type Subject = 'chemistry' | 'math' | 'biology' | 'sql';

const PAGE_TABS_13 = [
  { id: 'all', label: 'Tất cả (180–186)' },
  { id: 'p180', label: 'Trang 180' },
  { id: 'p181', label: 'Trang 181' },
  { id: 'p182', label: 'Trang 182' },
  { id: 'p183', label: 'Trang 183' },
  { id: 'p184', label: 'Trang 184' },
  { id: 'p185', label: 'Trang 185' },
  { id: 'p186', label: 'Trang 186' },
];

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

const PAGE_TABS_25 = [
  { id: 'all', label: 'Tất cả (382–392)' },
  { id: 'p382', label: 'Trang 382' },
  { id: 'p383', label: 'Trang 383' },
  { id: 'p384', label: 'Trang 384–385' },
  { id: 'p386', label: 'Trang 386–387' },
  { id: 'p388', label: 'Trang 388–389' },
  { id: 'p390', label: 'Trang 390' },
  { id: 'p391', label: 'Trang 391–392' },
];

export function App() {
  const [subject, setSubject] = useState<Subject>('sql');
  const [chapter, setChapter] = useState<Chapter>('25');
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [selectedPageFilter, setSelectedPageFilter] = useState<string>('all');
  const [activeLatexSection, setActiveLatexSection] = useState<string>('full');
  const [showSolutionsGlobal, setShowSolutionsGlobal] = useState<boolean>(false);
  const [copiedFull, setCopiedFull] = useState<boolean>(false);

  const PAGE_TABS = chapter === '17' ? PAGE_TABS_17 : chapter === '18' ? PAGE_TABS_18 : chapter === '25' ? PAGE_TABS_25 : PAGE_TABS_13;
  const fullLatex =
    subject === 'sql'
      ? FULL_LATEX_DOCUMENT_SQL1
      : subject === 'math'
      ? FULL_LATEX_DOCUMENT_MATH1
      : chapter === '17'
      ? FULL_LATEX_DOCUMENT
      : chapter === '18'
      ? FULL_LATEX_DOCUMENT_18
      : chapter === '25'
      ? FULL_LATEX_DOCUMENT_25
      : FULL_LATEX_DOCUMENT_13;

  const switchSubject = (s: Subject) => {
    setSubject(s);
    setSelectedPageFilter('all');
    setActiveLatexSection('full');
    if (s !== 'chemistry' && viewMode === 'study') {
      setViewMode('split');
    }
  };

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
      subject === 'sql'
        ? 'HeadFirst_SQL_Ch1_Databases_Tables_VI.tex'
        : subject === 'math'
        ? 'Toan_Ch1_JohnNapier_1614_e_StoryOfANumber_VI.tex'
        : chapter === '17'
        ? 'Chuong17_Alcohol_Ester_CarboxylicAcid_Trang226_233_VI.tex'
        : chapter === '18'
        ? 'Chuong18_CarbonylCompounds_Trang234_243_VI.tex'
        : chapter === '25'
        ? 'Chuong25_Benzene_Compounds_Trang382_392_VI.tex'
        : 'Chuong13_Nitrogen_Sulfur_Trang180_186_VI.tex';
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

  const subjectAccent =
    subject === 'math'
      ? '#7a5c17'
      : subject === 'biology'
      ? '#2e7d46'
      : subject === 'sql'
      ? '#00758f'
      : '#d33427';

  return (
    <div className="min-h-screen bg-stone-200/80 text-stone-900 flex flex-col">
      {/* Top Navigation & Control Header */}
      <header className="lg:sticky lg:top-0 z-30 bg-white/95 backdrop-blur border-b border-stone-300 shadow-xs print:hidden">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 py-2.5">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
            {/* Brand & Document Title */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-sm shrink-0"
                style={{ backgroundColor: subjectAccent }}
              >
                {subject === 'math' ? (
                  <Sigma className="w-5 h-5" />
                ) : subject === 'biology' ? (
                  <Dna className="w-5 h-5" />
                ) : subject === 'sql' ? (
                  <Database className="w-5 h-5" />
                ) : (
                  <FlaskConical className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${subjectAccent}1a`,
                      color: subjectAccent,
                    }}
                  >
                    {subject === 'math'
                      ? 'Toán học · e: The Story of a Number (Eli Maor)'
                      : subject === 'biology'
                      ? 'Sinh học · Sắp ra mắt'
                      : subject === 'sql'
                      ? 'SQL · Head First SQL (2nd Edition)'
                      : 'Cambridge AS & A Level Chemistry'}
                  </span>
                  <span className="hidden xl:inline text-xs text-stone-500 font-medium">
                    {subject === 'math'
                      ? 'Chương 1 (trang 3–10): 8 hình vẽ giải thích chi tiết + thuật ngữ + LaTeX'
                      : subject === 'biology'
                      ? 'Đang chờ tài liệu nguồn từ người dùng'
                      : subject === 'sql'
                      ? 'Chương 1: Databases & Tables — mã lệnh MySQL + 9 hình vẽ lại + bài tập có đáp án'
                      : chapter === '17'
                      ? 'Trang 226 – 233 (Đầy đủ 8 Hình & 11 Bài tập)'
                      : chapter === '18'
                      ? 'Trang 234 – 243 (Đầy đủ 10 Hình vẽ lại SVG & 8 Bài tập có đáp án)'
                      : chapter === '25'
                      ? 'Trang 382 – 392 (14 Hình vẽ lại SVG chính xác & Câu 1–8 + EOC có đáp án)'
                      : 'Trang 180 – 186 (8 Hình vẽ lại SVG cao cấp & 6 Bài tập có đáp án)'}
                  </span>
                </div>
                <h1 className="text-sm sm:text-base lg:text-lg font-bold text-stone-900 leading-tight mt-0.5">
                  {subject === 'math'
                    ? 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: John Napier, 1614 — Khởi nguồn của Logarit'
                    : subject === 'biology'
                    ? 'Phần Sinh học — nội dung sẽ mở khi có tài liệu nguồn'
                    : subject === 'sql'
                    ? 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Databases and Tables — Tổ chức thông tin của bạn'
                    : chapter === '17'
                    ? 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Alcohol, Ester và Carboxylic Acid'
                    : chapter === '18'
                    ? 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Hợp chất Carbonyl (Aldehyde & Ketone)'
                    : chapter === '25'
                    ? 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Benzene and its Compounds (Arene & Phenol)'
                    : 'Bản Dịch Tiếng Việt & Mã Nguồn LaTeX: Nitrogen và Sulfur (Acid Rain & Phân bón)'}
                </h1>
              </div>
            </div>

            {/* Mode Switcher & Action Buttons */}
            <div className="header-toolbar flex flex-wrap items-center gap-2">
              {/* Subject Switcher */}
              <div className="inline-flex rounded-lg bg-stone-900 p-1">
                <button
                  type="button"
                  onClick={() => switchSubject('chemistry')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    subject === 'chemistry' ? 'bg-[#d33427] text-white shadow-xs' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Hóa học
                </button>
                <button
                  type="button"
                  onClick={() => switchSubject('math')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    subject === 'math' ? 'bg-[#e9c529] text-stone-900 shadow-xs' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Toán học
                </button>
                <button
                  type="button"
                  onClick={() => switchSubject('biology')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    subject === 'biology' ? 'bg-[#2e7d46] text-white shadow-xs' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Sinh học
                </button>
                <button
                  type="button"
                  onClick={() => switchSubject('sql')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    subject === 'sql' ? 'bg-[#00758f] text-white shadow-xs' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  SQL (mới)
                </button>
              </div>

              {/* Chapter Switcher — chỉ phần Hóa học */}
              {subject === 'chemistry' && (
                <div className="inline-flex rounded-lg bg-stone-200 p-1 border border-stone-300">
                  <button
                    type="button"
                    onClick={() => switchChapter('13')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      chapter === '13' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Chương 13
                  </button>
                  <button
                    type="button"
                    onClick={() => switchChapter('17')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      chapter === '17' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Chương 17
                  </button>
                  <button
                    type="button"
                    onClick={() => switchChapter('18')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      chapter === '18' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Chương 18
                  </button>
                  <button
                    type="button"
                    onClick={() => switchChapter('25')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      chapter === '25' ? 'bg-[#d33427] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Chương 25
                  </button>
                </div>
              )}

              {/* View Mode Switcher — Hóa & Toán */}
              {subject !== 'biology' && (
                <div className="inline-flex flex-wrap max-w-full rounded-lg bg-stone-100 p-1 border border-stone-200">
                  <button
                    type="button"
                    onClick={() => setViewMode('preview')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'preview'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" style={{ color: subjectAccent }} />
                    <span>{subject === 'math' ? 'Bản dịch sách' : 'Bản dịch SGK'}</span>
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
                    <span>Song song (Sách + LaTeX)</span>
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
                  {subject === 'chemistry' && chapter !== '17' && (
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
              )}

              {/* Toggle Solutions — Hóa học & SQL */}
              {(subject === 'chemistry' || subject === 'sql') && (
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
                      : subject === 'sql'
                      ? 'Hiện Đáp án (Luyện tập 1–8)'
                      : chapter === '17'
                      ? 'Hiện Đáp án (Câu 1–8)'
                      : chapter === '18'
                      ? 'Hiện Đáp án (Câu 1–7)'
                      : chapter === '25'
                      ? 'Hiện Đáp án (Câu 1–8 + EOC)'
                      : 'Hiện Đáp án (Câu 1–4)'}
                  </span>
                </button>
              )}

              {/* Copy Full LaTeX */}
              {subject !== 'biology' && (
                <button
                  type="button"
                  onClick={handleCopyFullLatex}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white shadow-xs transition-all cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: subjectAccent }}
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
              )}

              {/* Download .tex */}
              {subject !== 'biology' && (
                <button
                  type="button"
                  onClick={handleDownloadFullLatex}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white shadow-xs transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải .tex</span>
                </button>
              )}

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

          {/* Page Filter Bar — chỉ Hóa học */}
          {subject === 'chemistry' && viewMode !== 'latex' && viewMode !== 'study' && (
            <div className="hidden md:flex items-center gap-1.5 overflow-x-auto pt-2.5 mt-2.5 border-t border-stone-200/80 pb-0.5">
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
        {/* ==================== SINH HỌC ==================== */}
        {subject === 'biology' && <BiologyPlaceholder />}

        {/* ==================== SQL ==================== */}
        {subject === 'sql' && viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto">
            <SQLChapter1 showSolutions={showSolutionsGlobal} />
          </div>
        )}

        {subject === 'sql' && viewMode === 'latex' && (
          <div className="max-w-6xl mx-auto">
            <LatexCodeViewer
              activeSectionId={activeLatexSection}
              onSelectSection={setActiveLatexSection}
              sections={LATEX_SECTIONS_SQL1}
              chapterTag="Chương 1"
              pageRange="Databases & Tables"
              downloadPrefix="HeadFirst_SQL_Ch1"
            />
          </div>
        )}

        {subject === 'sql' && viewMode === 'split' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-7 space-y-4">
              <div className="bg-white rounded-xl px-4 py-2.5 border border-stone-300 flex items-center justify-between shadow-2xs print:hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                  <FileCheck2 className="w-4 h-4 text-[#00758f]" />
                  <span>BẢN DỊCH TIẾNG VIỆT — CHƯƠNG 1: DATABASES AND TABLES (HEAD FIRST SQL)</span>
                </div>
                <span className="text-[11px] text-stone-500 hidden md:inline">
                  Mã lệnh MySQL nguyên bản + 9 hình vẽ lại (S1.1 – S1.9)
                </span>
              </div>
              <SQLChapter1 showSolutions={showSolutionsGlobal} />
            </div>
            <div className="xl:col-span-5 xl:sticky xl:top-28 print:hidden">
              <LatexCodeViewer
                activeSectionId={activeLatexSection}
                onSelectSection={setActiveLatexSection}
                sections={LATEX_SECTIONS_SQL1}
                chapterTag="Chương 1"
                pageRange="Databases & Tables"
                downloadPrefix="HeadFirst_SQL_Ch1"
              />
            </div>
          </div>
        )}

        {/* ==================== TOÁN HỌC ==================== */}
        {subject === 'math' && viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto">
            <MathChapter1 />
          </div>
        )}

        {subject === 'math' && viewMode === 'latex' && (
          <div className="max-w-6xl mx-auto">
            <LatexCodeViewer
              activeSectionId={activeLatexSection}
              onSelectSection={setActiveLatexSection}
              sections={LATEX_SECTIONS_MATH1}
              chapterTag="Chương 1"
              pageRange="John Napier, 1614"
              downloadPrefix="Maor_Math_Ch1_Napier"
            />
          </div>
        )}

        {subject === 'math' && viewMode === 'split' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-7 space-y-4">
              <div className="bg-white rounded-xl px-4 py-2.5 border border-stone-300 flex items-center justify-between shadow-2xs print:hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                  <FileCheck2 className="w-4 h-4 text-[#7a5c17]" />
                  <span>BẢN DỊCH TIẾNG VIỆT — CHƯƠNG 1: JOHN NAPIER, 1614 (TRANG 3–10)</span>
                </div>
                <span className="text-[11px] text-stone-500 hidden md:inline">
                  Kèm 8 hình vẽ giải thích chi tiết (T1.1 – T1.8)
                </span>
              </div>
              <MathChapter1 />
            </div>
            <div className="xl:col-span-5 xl:sticky xl:top-28 print:hidden">
              <LatexCodeViewer
                activeSectionId={activeLatexSection}
                onSelectSection={setActiveLatexSection}
                sections={LATEX_SECTIONS_MATH1}
                chapterTag="Chương 1"
                pageRange="John Napier, 1614"
                downloadPrefix="Maor_Math_Ch1_Napier"
              />
            </div>
          </div>
        )}

        {/* ==================== HÓA HỌC ==================== */}
        {subject === 'chemistry' && viewMode === 'study' && chapter === '18' && (
          <div className="max-w-6xl mx-auto">
            <StudyExtras18 />
          </div>
        )}

        {subject === 'chemistry' && viewMode === 'study' && chapter === '13' && (
          <div className="max-w-6xl mx-auto">
            <StudyExtras13 />
          </div>
        )}

        {subject === 'chemistry' && viewMode === 'study' && chapter === '25' && (
          <div className="max-w-6xl mx-auto">
            <StudyExtras25 />
          </div>
        )}

        {subject === 'chemistry' && viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto">
            {chapter === '17' ? (
              <TextbookPages
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            ) : chapter === '18' ? (
              <TextbookPages18
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            ) : chapter === '25' ? (
              <TextbookPages25
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            ) : (
              <TextbookPages13
                selectedPageFilter={selectedPageFilter}
                showSolutionsGlobal={showSolutionsGlobal}
                onViewPageLatex={handleViewPageLatex}
              />
            )}
          </div>
        )}

        {subject === 'chemistry' && viewMode === 'latex' && (
          <div className="max-w-6xl mx-auto">
            <LatexCodeViewer
              activeSectionId={activeLatexSection}
              onSelectSection={setActiveLatexSection}
              sections={chapter === '18' ? LATEX_SECTIONS_18 : chapter === '13' ? LATEX_SECTIONS_13 : chapter === '25' ? LATEX_SECTIONS_25 : undefined}
              chapterTag={chapter === '17' ? 'Chương 17' : chapter === '18' ? 'Chương 18' : chapter === '25' ? 'Chương 25' : 'Chương 13'}
              pageRange={chapter === '17' ? '226 – 233' : chapter === '18' ? '234 – 243' : chapter === '25' ? '382 – 392' : '180 – 186'}
              downloadPrefix={
                chapter === '17'
                    ? 'Cambridge_Chem_Ch17'
                    : chapter === '18'
                    ? 'Cambridge_Chem_Ch18'
                    : chapter === '25'
                    ? 'Cambridge_Chem_Ch25'
                    : 'Cambridge_Chem_Ch13'
              }
            />
          </div>
        )}

        {subject === 'chemistry' && viewMode === 'split' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Left Side: Formatted Vietnamese Textbook Preview */}
            <div className="xl:col-span-7 space-y-4">
              <div className="bg-white rounded-xl px-4 py-2.5 border border-stone-300 flex items-center justify-between shadow-2xs print:hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                  <FileCheck2 className="w-4 h-4 text-[#d33427]" />
                  <span>
                    {chapter === '17'
                      ? 'BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 226 – 233)'
                      : chapter === '18'
                      ? 'BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 234 – 243)'
                      : chapter === '25'
                      ? 'BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 382 – 392)'
                      : 'BẢN DỊCH TIẾNG VIỆT CHUẨN FORM SÁCH GỐC (TRANG 180 – 186)'}
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
              ) : chapter === '18' ? (
                <TextbookPages18
                  selectedPageFilter={selectedPageFilter}
                  showSolutionsGlobal={showSolutionsGlobal}
                  onViewPageLatex={handleViewPageLatex}
                />
              ) : chapter === '25' ? (
                <TextbookPages25
                  selectedPageFilter={selectedPageFilter}
                  showSolutionsGlobal={showSolutionsGlobal}
                  onViewPageLatex={handleViewPageLatex}
                />
              ) : (
                <TextbookPages13
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
                sections={chapter === '18' ? LATEX_SECTIONS_18 : chapter === '13' ? LATEX_SECTIONS_13 : chapter === '25' ? LATEX_SECTIONS_25 : undefined}
                chapterTag={chapter === '17' ? 'Chương 17' : chapter === '18' ? 'Chương 18' : chapter === '25' ? 'Chương 25' : 'Chương 13'}
                pageRange={chapter === '17' ? '226 – 233' : chapter === '18' ? '234 – 243' : chapter === '25' ? '382 – 392' : '180 – 186'}
                downloadPrefix={
                  chapter === '17'
                    ? 'Cambridge_Chem_Ch17'
                    : chapter === '18'
                    ? 'Cambridge_Chem_Ch18'
                    : chapter === '25'
                    ? 'Cambridge_Chem_Ch25'
                    : 'Cambridge_Chem_Ch13'
                }
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-5 px-6 border-t border-stone-800 print:hidden">
        <div className="max-w-[1600px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-stone-300">Toán học:</span> Chương 1 — John Napier, 1614 (e: The Story
            of a Number, Eli Maor). <span className="font-semibold text-stone-300">Hóa học:</span> Chương 13: Nitrogen
            &amp; sulfur (180–186), Chương 17 (226–233) &amp; Chương 18: Hợp chất carbonyl (234–243) &amp; Chương 25: Benzene and its compounds (382–392).{' '}
            <span className="font-semibold text-stone-300">SQL:</span> Chương 1 — Databases and Tables (Head First
            SQL). <span className="font-semibold text-stone-300">Sinh học:</span> đang chờ tài liệu nguồn.
          </div>
          <div className="text-stone-500">
            Sử dụng gói <code className="text-stone-300">tcolorbox</code>, <code className="text-stone-300">chemfig</code>,{' '}
            <code className="text-stone-300">mhchem</code>, <code className="text-stone-300">tikz</code> &amp;{' '}
            <code className="text-stone-300">multicol</code>.
          </div>
        </div>
      </footer>

      {/* Bấm vào hình vẽ bất kỳ để xem ở cỡ lớn */}
      <FigureZoom />
    </div>
  );
}
export default App;
