"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type SubmissionState = {
  message: string;
  type: "idle" | "success" | "error";
};

export function EmergencyButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<SubmissionState>({
    message: "",
    type: "idle",
  });
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nameRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    setState({ message: "", type: "idle" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setState({ message: "", type: "idle" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      note: String(formData.get("note") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/emergency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error ?? "Could not send the emergency request right now.",
        );
      }

      form.reset();
      setState({
        message:
          data?.message ??
          "Emergency request sent. Liam will call you back as soon as possible.",
        type: "success",
      });
    } catch (error) {
      setState({
        message:
          error instanceof Error
            ? error.message
            : "Could not send the emergency request right now.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "h-12 w-full justify-center rounded-full border-[#65c7ff]/44 bg-[#0b69ff]/20 px-6 text-base text-white hover:bg-[#0b69ff]/30 sm:w-auto",
          className,
        )}
      >
        Emergency call out
        <MessageCircle className="size-4" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="emergency-title"
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-md rounded-[1.75rem] border border-[#ef4444]/30 bg-[#0c1a4b] p-6 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:p-7">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="size-4" />
            </button>

            <p className="text-xs font-semibold tracking-[0.18em] text-[#ef4444] uppercase">
              Emergency
            </p>
            <h2
              id="emergency-title"
              className="mt-2 font-heading text-2xl leading-tight font-semibold sm:text-3xl"
            >
              Send Liam an alert and he&apos;ll call you back.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Drop your name and the best number to reach you on. Liam gets the
              alert straight away.
            </p>

            {state.type === "success" ? (
              <div className="mt-6 space-y-4">
                <div
                  role="status"
                  className="rounded-[1.2rem] border border-emerald-300/40 bg-emerald-500/15 px-4 py-3 text-sm leading-6 text-emerald-100"
                >
                  {state.message}
                </div>
                <a
                  href="tel:07485035381"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 w-full rounded-full bg-[#ffd33d] text-[var(--brand-navy)] hover:bg-[#ffd33d]/90",
                  )}
                >
                  Or call Liam now: 07485 035381
                </a>
                <Button
                  type="button"
                  variant="outline"
                  onClick={close}
                  className="h-11 w-full rounded-full border-white/14 bg-white/6 text-white hover:bg-white/12"
                >
                  Close
                </Button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="emergency-name" className="text-white/80">
                    Your name *
                  </Label>
                  <Input
                    id="emergency-name"
                    name="name"
                    required
                    ref={nameRef}
                    placeholder="First and last name"
                    className="h-11 rounded-2xl border-white/12 bg-white/8 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergency-phone" className="text-white/80">
                    Callback number *
                  </Label>
                  <Input
                    id="emergency-phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="e.g. 07712 345678"
                    className="h-11 rounded-2xl border-white/12 bg-white/8 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergency-note" className="text-white/80">
                    Quick note (optional)
                  </Label>
                  <Textarea
                    id="emergency-note"
                    name="note"
                    rows={3}
                    placeholder="What's happened? Smell of burning, total power loss, tripping, etc."
                    className="rounded-[1.25rem] border-white/12 bg-white/8 px-4 py-3 text-white placeholder:text-white/40"
                  />
                </div>

                {state.type === "error" && (
                  <div
                    role="alert"
                    className="rounded-[1.2rem] border border-red-300/40 bg-red-500/15 px-4 py-3 text-sm leading-6 text-red-100"
                  >
                    {state.message}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-11 w-full rounded-full bg-[#ef4444] text-white hover:bg-[#ef4444]/90"
                >
                  {isSubmitting ? "Sending alert..." : "Alert Liam now"}
                </Button>

                <p className="text-center text-xs text-white/55">
                  Or call directly:{" "}
                  <a
                    href="tel:07485035381"
                    className="font-semibold text-[#ffd33d] hover:underline"
                  >
                    07485 035381
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
