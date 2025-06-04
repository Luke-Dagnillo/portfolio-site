'use client';

import { useState, useRef, useEffect } from 'react';

type PaperCardProps = {
  title: string;
  summary: string;
  file: string; // path to PDF in public/
};

export default function PaperCard({ title, summary, file }: PaperCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);

  return (
    <>
      <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
        <h3 className="text-xl text-gray-700 font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{summary}</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setIsOpen(true)}
        >
          View PDF
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 rounded-lg p-0 w-full max-w-4xl 
                    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClose={() => setIsOpen(false)}
      >
        <div className="flex justify-between items-center p-4 border-b bg-gray-100">
          <span className="font-semibold">{title}</span>
          <button onClick={() => setIsOpen(false)} className="text-sm text-gray-600 hover:text-black">
            Close ✕
          </button>
        </div>
        <iframe
          src={file}
          className="w-full h-[75vh]"
        ></iframe>
      </dialog>
    </>
  );
}
