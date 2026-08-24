"use client";

import { useState, useEffect } from "react";
import {
  Send,
  CheckCheck,
  MoreVertical,
  Phone,
  Video,
  ShieldCheck,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
}

const CHAT_SEQUENCE: Message[] = [
  {
    id: 1,
    text: "Hi! Can you send me the Q3 Ledger and Invoice #INV-8492?",
    sender: "user",
    time: "10:01 AM",
  },
  {
    id: 2,
    text: "Hello Sarah! Fetching your encrypted invoice from Tally Prime...",
    sender: "bot",
    time: "10:01 AM",
  },
  {
    id: 3,
    text: "📄 Invoice_INV-8492.pdf (142 KB)\nTotal: $14,250 · Due in 14 days\n\nInstant Pay: pay.mimc.tech/8492",
    sender: "bot",
    time: "10:02 AM",
  },
  {
    id: 4,
    text: "Received and paid via UPI. Thank you!",
    sender: "user",
    time: "10:03 AM",
  },
];

export default function SmartphoneMockup() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => {
        if (prev.length < CHAT_SEQUENCE.length) {
          return [...prev, CHAT_SEQUENCE[prev.length]];
        }
        clearInterval(interval);
        return prev;
      });
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center py-4 w-full">
      {/* Smartphone Outer Bezel */}
      <div className="relative w-[300px] h-[520px] bg-[#111111] border-4 border-neutral-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col ring-1 ring-black/5">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 inset-x-0 h-4 bg-black rounded-full w-24 mx-auto z-30" />

        {/* WhatsApp App Header */}
        <div className="bg-[#075E54] px-4 pt-7 pb-3 flex items-center justify-between text-white z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#075E54] font-extrabold text-xs">
              M
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold leading-tight">
                  MIMC Enterprise
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              </div>
              <div className="text-[10px] text-emerald-100/80 font-mono">
                Official Business API
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Phone className="w-3.5 h-3.5" />
            <MoreVertical className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* WhatsApp Message Body */}
        <div
          className="bg-[#EFEAE2] flex-1 p-3.5 overflow-y-auto flex flex-col gap-2.5 relative"
          style={{
            backgroundImage: "radial-gradient(#00000008 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        >
          <div className="text-center text-[9px] text-neutral-500 bg-white/70 backdrop-blur-xs rounded-full px-2.5 py-0.5 mx-auto shadow-2xs font-mono font-medium">
            TODAY · END-TO-END ENCRYPTED
          </div>

          {messages.map((msg, index) => {
            if (!msg) return null;
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id || index}
                className={`flex flex-col max-w-[88%] ${
                  isUser ? "self-end" : "self-start"
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl text-xs leading-relaxed shadow-xs whitespace-pre-line ${
                    isUser
                      ? "bg-[#D9FDD3] text-[#111111] rounded-tr-xs"
                      : "bg-white text-[#111111] rounded-tl-xs border border-neutral-200/40"
                  }`}
                >
                  {msg.text}
                </div>
                <div
                  className={`text-[9px] text-neutral-500 mt-0.5 flex items-center gap-1 font-mono ${
                    isUser ? "self-end" : "self-start"
                  }`}
                >
                  {msg.time}
                  {isUser && <CheckCheck className="w-3 h-3 text-sky-500" />}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {messages.length > 0 &&
            messages.length < CHAT_SEQUENCE.length &&
            CHAT_SEQUENCE[messages.length]?.sender === "bot" && (
              <div className="self-start bg-white p-2 rounded-xl rounded-tl-xs flex gap-1 items-center shadow-xs border border-neutral-200/40">
                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                <div
                  className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            )}
        </div>

        {/* Input Bar */}
        <div className="bg-[#F0F2F5] p-2 flex items-center gap-2 border-t border-neutral-200">
          <div className="flex-1 bg-white rounded-full h-8 px-3.5 flex items-center text-[11px] text-neutral-400 shadow-2xs">
            Message...
          </div>
          <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center text-white shadow-xs">
            <Send className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
