"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ServiceModal({ isOpen, onClose, title, children }: ServiceModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto border border-slate-200"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">{title}</h3>
                <button
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"
                  aria-label="Fenster schließen"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="px-6 py-4 overflow-y-auto custom-scrollbar flex-1 min-h-0">
                {children}
              </div>
              {/* Untere Schließen-Leiste wird in den jeweiligen Content-Komponenten umgesetzt */}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
