import { useState } from 'react'
import { ContactSection } from './ContactSection'

export function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 top-[72px] z-[60] flex items-start justify-center overflow-y-auto hide-scrollbar bg-black/50 backdrop-blur-sm p-4 md:p-6" onClick={onClose}>
      <div
        className="bg-white dark:bg-[var(--navy-soft)] rounded-2xl shadow-2xl max-w-2xl w-full relative p-6 md:p-8 my-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-lg text-[var(--text-secondary)] hover:text-[var(--brand)] hover:bg-black/10 dark:hover:bg-white/20 transition-all z-10"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <ContactSection modalMode onClose={onClose} />
      </div>
    </div>
  )
}
