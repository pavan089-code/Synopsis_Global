"use server";

import { mkdir, writeFile } from "fs/promises";
import path from "path";

const acceptedTypes = new Map([
  ["application/pdf", ".pdf"],
  ["application/msword", ".doc"],
  ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".docx"],
]);
const maxResumeSize = 5 * 1024 * 1024;

export async function submitCandidateRegistration(formData: FormData) {
  const resume = formData.get("resume");

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > maxResumeSize) {
      throw new Error("Resume file must be 5 MB or smaller.");
    }

    const extension = acceptedTypes.get(resume.type) ?? path.extname(resume.name).toLowerCase();
    if (![".pdf", ".doc", ".docx"].includes(extension)) {
      throw new Error("Unsupported resume file type.");
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
    await mkdir(uploadDir, { recursive: true });

    const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const fileName = `${Date.now()}-${safeName}`;
    const bytes = Buffer.from(await resume.arrayBuffer());
    await writeFile(path.join(uploadDir, fileName), bytes);
  }

}
