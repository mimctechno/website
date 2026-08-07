"use client";
import { useState, useEffect } from "react";
import { Send, CheckCheck, MoreVertical, Phone, Video } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
}

const CHAT_SEQUENCE: Message[] = [
  {
    id: 1,
    text: "Hi! I'd like to know the status of my enterprise order #8839.",
    sender: "user",
    time: "10:01 AM",
  },
  {
    id: 2,
    text: "Hello! Let me check that for you right away.",
    sender: "bot",
    time: "10:01 AM",
  },
  {
    id: 3,
    text: "Your order #8839 has been dispatched and is out for delivery today. Track it live here: mimc.co/trk8839",
    sender: "bot",
    time: "10:02 AM",
  },
  {
    id: 4,
    text: "That was fast, thank you!",
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
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-[450px] p-4 bg-gradient-to-br from-[var(--color-cyber-accent)]/5 to-transparent relative overflow-hidden group">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

      {/* Phone Frame */}
      <div className="relative w-full max-w-[260px] h-[400px] bg-black border-4 border-gray-800 rounded-[2rem] shadow-[0_0_40px_rgba(0,255,170,0.15)] group-hover:shadow-[0_0_60px_rgba(0,255,170,0.25)] transition-shadow duration-500 overflow-hidden flex flex-col z-10">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-5 bg-gray-800 rounded-b-xl w-24 mx-auto z-20" />

        {/* Chat Header */}
        <div className="bg-[#0b141a] border-b border-gray-800 px-3 pt-6 pb-2 flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[var(--color-cyber-accent)] flex items-center justify-center text-black font-bold text-xs">
              M
            </div>
            <div>
              <div className="text-white text-xs font-semibold leading-tight">
                MIMC Support
              </div>
              <div className="text-[var(--color-cyber-accent)] text-[8px] tracking-widest uppercase">
                Online
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-gray-400">
            <Video className="w-3.5 h-3.5" />
            <Phone className="w-3.5 h-3.5" />
            <MoreVertical className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Chat Body */}
        <div
          className="bg-[#0b141a] flex-1 p-3 overflow-y-auto flex flex-col gap-3 relative"
          style={{
            backgroundImage: "radial-gradient(#ffffff05 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="text-center text-[9px] text-gray-500 my-1 bg-gray-900/50 rounded px-2 py-0.5 mx-auto w-fit">
            Today
          </div>

          {messages.map((msg, index) => {
            if (!msg) return null;
            return (
              <div
                key={msg.id || index}
                className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end" : "self-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`p-2 rounded-lg text-[11px] leading-relaxed shadow-sm ${msg.sender === "user" ? "bg-[#005c4b] text-white rounded-tr-none" : "bg-[#202c33] text-gray-100 rounded-tl-none"}`}
                >
                  {msg.text}
                </div>
                <div
                  className={`text-[8px] text-gray-500 mt-1 flex items-center gap-1 ${msg.sender === "user" ? "self-end" : "self-start"}`}
                >
                  {msg.time}{" "}
                  {msg.sender === "user" && (
                    <CheckCheck className="w-3 h-3 text-blue-400" />
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {messages.length > 0 &&
            messages.length < CHAT_SEQUENCE.length &&
            CHAT_SEQUENCE[messages.length]?.sender === "bot" && (
              <div className="self-start bg-[#202c33] p-2 rounded-lg rounded-tl-none flex gap-1 items-center animate-in fade-in duration-200">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            )}
        </div>

        {/* Chat Input */}
        <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-gray-800">
          <div className="flex-1 bg-[#2a3942] rounded-full h-7 px-3 flex items-center text-[10px] text-gray-400">
            Type a message...
          </div>
          <div className="w-7 h-7 rounded-full bg-[var(--color-cyber-accent)] flex items-center justify-center text-black">
            <Send className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>
      </div>

      {/* Sales Label */}
      <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-[var(--color-cyber-accent)] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-[10px] tracking-widest uppercase animate-blink">
          AUTOMATION_ACTIVE
        </span>
      </div>
    </div>
  );
}
