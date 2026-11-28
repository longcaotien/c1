import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

/* ==========================================================================
   FIGURE ZOOM — bấm vào một hình vẽ bất kỳ để xem ở cỡ lớn.
   Cần thiết vì hình hóa học vẽ trong viewBox 420–520 đơn vị nhưng hiển thị
   trong cột sách chỉ rộng ~330 px: nhãn 8 px bị thu nhỏ còn ~6 px, rất khó đọc.
   ========================================================================== */

interface Shot {
  markup: string;
  label: string;
}

export const FigureZoom: React.FC = () => {
  const [shot, setShot] = useState<Shot | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target || target.closest('[data-figure-zoom-ui]')) return;
      const svg = target.closest('figure svg[role="img"]') as SVGSVGElement | null;
      if (!svg) return;
      const figure = svg.closest('figure');
      const caption = figure?.querySelector('figcaption');
      /* clone để giữ nguyên mọi defs/gradient/marker bên trong hình */
      const clone = svg.cloneNode(true) as SVGSVGElement;
      clone.removeAttribute('class');
      clone.removeAttribute('style');
      clone.setAttribute('style', 'display:block;width:100%;height:auto');
      const label =
        (caption?.textContent || '').trim() ||
        svg.getAttribute('aria-label') ||
        'Hình vẽ minh họa';
      setShot({ markup: clone.outerHTML, label: label.slice(0, 260) });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!shot) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShot(null);
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [shot]);

  if (!shot) return null;

  return (
    <div
      data-figure-zoom-ui
      role="dialog"
      aria-modal="true"
      aria-label="Xem hình vẽ phóng to"
      onClick={() => setShot(null)}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-stone-950/80 p-3 backdrop-blur-sm sm:p-6 print:hidden"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-6xl overflow-hidden rounded-xl border border-stone-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-stone-200 bg-stone-50 px-3 py-2">
          <p className="line-clamp-2 font-sans text-[11px] leading-snug text-stone-600">
            {shot.label}
          </p>
          <button
            type="button"
            onClick={() => setShot(null)}
            className="inline-flex shrink-0 items-center gap-1 rounded-md bg-stone-900 px-2.5 py-1 text-[11px] font-semibold text-white transition-colors hover:bg-stone-700 cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
            Đóng
          </button>
        </div>
        <div
          className="max-h-[76vh] overflow-auto bg-white p-2 sm:p-4"
          dangerouslySetInnerHTML={{ __html: shot.markup }}
        />
      </div>
      <p className="font-sans text-[11px] text-stone-300">
        Bấm ra ngoài hoặc nhấn ESC để đóng · hình được phóng to để đọc rõ nhãn
      </p>
    </div>
  );
};

export default FigureZoom;
