"use client";
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { IoMdSend } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { DragCloseDrawer } from "@/components/modals/Drawer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok) {
        toast.error(data.message || "Failed to send email.");
        return;
      }

      toast.success(data.message || "Email sent successfully!");
      form.reset();
      setOpen(false);
    } catch {
      toast.error("Something went wrong while sending the email.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded px-4 py-2 text-white transition-colors bg-gray-950"
        aria-label="Open contact form"
      >
        <RiContactsFill className="text-3xl scale-95 active:scale-80" />
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="w-full md:w-3/4 space-y-4 text-neutral-400 mx-auto">
          <form onSubmit={onSubmit} className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-5 w-full">
              <h1 className="flex items-start justify-start w-full px-6 text-3xl font-bold">
                I&apos;d love to hear from you
              </h1>

              <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex gap-5 w-full px-6">
                  <input
                    type="text"
                    name="name"
                    maxLength={40}
                    placeholder="Name"
                    className="px-6 py-4 border rounded-3xl w-full bg-gray-900 text-white placeholder:text-gray-500"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="px-6 py-4 border rounded-3xl w-full bg-gray-900 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="flex flex-col items-start w-full gap-3 px-6">
                  <div className="w-full flex flex-col gap-5">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="p-4 border rounded-3xl w-full bg-gray-900 text-white placeholder:text-gray-500"
                    />
                    <textarea
                      placeholder="Message"
                      name="message"
                      rows={4}
                      className="py-4 resize-none px-6 border rounded-3xl w-full bg-gray-900 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="flex justify-end w-full items-center">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className={`${
                        isLoading
                          ? "cursor-not-allowed bg-gray-400"
                          : "cursor-pointer hover:bg-gray-700"
                      } p-3 rounded-3xl px-10 text-white font-bold text-xl bg-gray-800 transition-all duration-200 scale-95 active:scale-85`}
                    >
                      <div className="flex items-center gap-2">
                        <p>{isLoading ? "Sending..." : "Send"}</p>
                        <IoMdSend className={`${isLoading ? "animate-spin" : ""}`} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

