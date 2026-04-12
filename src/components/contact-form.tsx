"use client";

import { ChangeEvent, FormEvent, useDeferredValue, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Residential",
  "Commercial",
  "Industrial",
  "EICR Reporting",
  "Fault Finding",
  "Lighting / Upgrades",
];

const MAX_FILES = 5;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;

type SubmissionState = {
  message: string;
  type: "idle" | "success" | "error";
};

function formatFileSize(size: number) {
  if (size < 1024 * 1024) {
    return `${Math.round(size / 102.4) / 10} KB`;
  }

  return `${Math.round((size / (1024 * 1024)) * 10) / 10} MB`;
}

export function ContactForm() {
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const deferredFiles = useDeferredValue(selectedFiles);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    message: "",
    type: "idle",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSelectedBytes = deferredFiles.reduce(
    (total, file) => total + file.size,
    0,
  );

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? []);

    if (files.length > MAX_FILES) {
      event.currentTarget.value = "";
      setSelectedFiles([]);
      setSubmissionState({
        message: `Please attach up to ${MAX_FILES} files.`,
        type: "error",
      });
      return;
    }

    const totalSize = files.reduce((total, file) => total + file.size, 0);

    if (totalSize > MAX_TOTAL_SIZE) {
      event.currentTarget.value = "";
      setSelectedFiles([]);
      setSubmissionState({
        message: "Attachments need to stay under 15MB in total.",
        type: "error",
      });
      return;
    }

    const invalidFile = files.find(
      (file) =>
        !file.type.startsWith("image/") && !file.type.startsWith("video/"),
    );

    if (invalidFile) {
      event.currentTarget.value = "";
      setSelectedFiles([]);
      setSubmissionState({
        message: "Please upload image or video files only.",
        type: "error",
      });
      return;
    }

    setSelectedFiles(files);

    if (submissionState.type === "error") {
      setSubmissionState({ message: "", type: "idle" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState({ message: "", type: "idle" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("service", selectedService);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error ?? "The enquiry could not be sent right now.",
        );
      }

      form.reset();
      setSelectedService(SERVICE_OPTIONS[0]);
      setSelectedFiles([]);
      setSubmissionState({
        message:
          data?.message ??
          "Thanks. Your enquiry has been sent to Liam successfully.",
        type: "success",
      });
    } catch (error) {
      setSubmissionState({
        message:
          error instanceof Error
            ? error.message
            : "The enquiry could not be sent right now.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/80">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="h-11 rounded-2xl border-white/12 bg-white/8 text-white placeholder:text-white/40"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-2xl border-white/12 bg-white/8 text-white placeholder:text-white/40"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white/80">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Best number to call back"
            className="h-11 rounded-2xl border-white/12 bg-white/8 text-white placeholder:text-white/40"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="area" className="text-white/80">Postcode / area</Label>
          <Input
            id="area"
            name="area"
            placeholder="Where is the job?"
            className="h-11 rounded-2xl border-white/12 bg-white/8 text-white placeholder:text-white/40"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-white/80">What do you need help with?</Label>
        <input type="hidden" name="service" value={selectedService} />
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => setSelectedService(service)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                selectedService === service
                  ? "border-[#ffd33d] bg-[#ffd33d] text-[#0c1a4b]"
                  : "border-white/12 bg-white/8 text-white/70 hover:bg-white/12",
              )}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white/80">Project details *</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={5}
          placeholder="Tell Liam what the issue is, what you want installed, and anything useful he should know before replying."
          className="rounded-[1.5rem] border-white/12 bg-white/8 px-4 py-3 text-white placeholder:text-white/40"
        />
      </div>

      <div className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="rounded-[1.5rem] border border-dashed border-white/18 bg-white/5 p-4">
        <div className="space-y-2">
          <Label htmlFor="attachments" className="text-white/80">Attach images or videos</Label>
          <Input
            id="attachments"
            name="attachments"
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="h-auto cursor-pointer rounded-2xl border-white/12 bg-white/8 px-3 py-2.5 text-white file:mr-3 file:rounded-full file:border-0 file:bg-[#ffd33d] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#0c1a4b]"
          />
          <p className="text-sm leading-6 text-white/55">
            Up to {MAX_FILES} files, 15MB total. Images and short video clips
            are accepted.
          </p>
        </div>

        {deferredFiles.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className="text-sm font-medium text-white">
              {deferredFiles.length} file{deferredFiles.length > 1 ? "s" : ""}{" "}
              selected
              <span className="ml-2 text-white/55">
                {formatFileSize(totalSelectedBytes)} total
              </span>
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {deferredFiles.map((file) => (
                <div
                  key={`${file.name}-${file.lastModified}`}
                  className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5 text-sm"
                >
                  <p className="truncate font-medium text-white">
                    {file.name}
                  </p>
                  <p className="mt-1 text-white/55">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {submissionState.type !== "idle" && (
        <div
          role="status"
          className={cn(
            "rounded-[1.2rem] border px-4 py-3 text-sm leading-7",
            submissionState.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700",
          )}
        >
          {submissionState.message}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-11 rounded-full bg-[#ffd33d] px-6 text-[#0c1a4b] hover:bg-[#ffd33d]/90"
      >
        {isSubmitting ? "Sending enquiry..." : "Send enquiry to Liam"}
      </Button>
    </form>
  );
}
