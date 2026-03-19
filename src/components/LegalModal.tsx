"use client";

import { X } from "lucide-react";
import { ReactNode, MouseEvent } from "react";

interface LegalModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function LegalModal({ title, isOpen, onClose, children }: LegalModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    // Klicks im Inhalt nicht zum Overlay durchreichen
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 mx-4 flex flex-col"
        onClick={handleContentClick}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"
            aria-label="Fenster schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-6 py-4 overflow-y-auto text-sm leading-relaxed text-slate-700 space-y-3 flex-1 min-h-0">
          {children}
        </div>
        <div className="flex justify-end border-t border-slate-200 px-6 py-4 shrink-0 bg-slate-50/60">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/20 hover:bg-emerald-600 transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
