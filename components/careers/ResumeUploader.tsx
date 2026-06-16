"use client";

import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export function ResumeUploader() {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const acceptedExtensions = [".pdf", ".doc", ".docx"];
  const maxSize = 5 * 1024 * 1024;

  function validateFile(file: File) {
    const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;

    if (!acceptedExtensions.includes(extension)) {
      return "Upload a PDF, DOC, or DOCX resume.";
    }

    if (file.size > maxSize) {
      return "Resume must be 5 MB or smaller.";
    }

    return "";
  }

  function setResume(file: File) {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setFileName("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    setError("");
    setFileName(file.name);

    if (inputRef.current) {
      const transfer = new DataTransfer();
      transfer.items.add(file);
      inputRef.current.files = transfer.files;
    }
  }

  return (
    <div>
      <label
        className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-[#C9A227] hover:bg-white"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          const file = event.dataTransfer.files.item(0);
          if (file) {
            setResume(file);
          }
        }}
      >
        <UploadCloud aria-hidden="true" className="size-9 text-[#C9A227]" />
        <span className="mt-4 text-sm font-semibold text-[#082B6A]">{fileName || "Drag and drop your resume, or browse"}</span>
        <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">PDF, DOC, DOCX up to 5 MB</span>
        <input
          required
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          ref={inputRef}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              setResume(file);
            } else {
              setFileName("");
              setError("");
            }
          }}
        />
      </label>
      {error ? <p className="mt-3 text-sm font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}
