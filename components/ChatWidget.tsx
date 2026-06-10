"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Minimize2,
  Zap,
} from "lucide-react";

/* ── Types ───────────────────────────────── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ── Suggestions rapides ─────────────────── */
const QUICK_SUGGESTIONS = [
  "Quels sont vos services ?",
  "Vous faites du Computer Vision ?",
  "Comment vous contacter ?",
  "Avez-vous des références clients ?",
];

/* ── Composant bulle de message ──────────── */
function ChatBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
          isUser
            ? "bg-gradient-to-br from-[#00F0FF] to-[#00CC7A]"
            : "bg-[#1a1a1a] border border-[rgba(0,240,255,0.2)]"
        }`}
      >
        {isUser ? (
          <User className="w-3.5 h-3.5 text-black" />
        ) : (
          <Bot className="w-3.5 h-3.5 text-[#00F0FF]" />
        )}
      </div>

      {/* Bulle */}
      <div
        className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-[#00F0FF] to-[#00CC7A] text-black font-medium rounded-tr-sm"
            : "bg-[#1a1a1a] border border-[#2a2a2a] text-[#E0E0E0] rounded-tl-sm"
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}

/* ── Indicateur de frappe ────────────────── */
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-2.5"
    >
      <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border border-[rgba(0,240,255,0.2)] flex items-center justify-center shrink-0">
        <Bot className="w-3.5 h-3.5 text-[#00F0FF]" />
      </div>
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl rounded-tl-sm px-4 py-3.5">
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Widget principal ────────────────────── */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Bonjour ! 👋 Je suis l'assistant de SAAH MATHWORKS. Comment puis-je vous aider ? Vous pouvez me poser des questions sur nos services AI, nos réalisations ou comment nous contacter.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input à l'ouverture
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setShowSuggestions(false);
    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // N'envoyer que les 10 derniers messages pour limiter les tokens
          messages: updatedMessages.slice(-10).map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.content ??
            "Désolé, une erreur s'est produite. Veuillez réessayer.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Désolé, je rencontre un problème technique. Contactez-nous directement à contact@saahmathworks.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Fenêtre de chat ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50
                       w-[calc(100vw-2rem)] sm:w-[380px]
                       rounded-2xl overflow-hidden
                       border border-[rgba(0,240,255,0.2)]
                       shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(0,240,255,0.08)]"
            style={{ maxHeight: "min(580px, calc(100vh - 120px))" }}
            role="dialog"
            aria-label="Chat assistant SAAH MATHWORKS"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#0e0e0e] border-b border-[#1e1e1e]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.25)] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#00FF9F] border-2 border-[#0e0e0e]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Assistant SAAH MATHWORKS
                  </p>
                  <p className="text-xs text-[#00FF9F]">
                    Powered by Grok · En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-white hover:bg-[#1a1a1a] transition-all"
                aria-label="Fermer le chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex flex-col gap-4 p-5 overflow-y-auto bg-[#0a0a0a]"
              style={{ height: "340px" }}
            >
              {messages.map((msg, i) => (
                <ChatBubble key={i} message={msg} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions rapides */}
            <AnimatePresence>
              {showSuggestions && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-3 bg-[#0a0a0a] border-t border-[#1a1a1a] flex flex-wrap gap-2"
                >
                  {QUICK_SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="px-3 py-1.5 rounded-full text-xs border border-[rgba(0,240,255,0.2)]
                                 text-[#00F0FF] bg-[rgba(0,240,255,0.05)]
                                 hover:bg-[rgba(0,240,255,0.12)] transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 px-4 py-3.5 bg-[#0e0e0e] border-t border-[#1e1e1e]"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2.5
                           text-sm text-[#F0F0F0] placeholder-[#505050]
                           focus:outline-none focus:border-[rgba(0,240,255,0.4)]
                           disabled:opacity-50 transition-all duration-200"
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                           bg-gradient-to-br from-[#00F0FF] to-[#00CC7A]
                           hover:shadow-cyan-glow hover:scale-105
                           disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100
                           transition-all duration-200"
                aria-label="Envoyer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-black animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-black" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bouton flottant ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-4 sm:right-6 z-50
                   w-14 h-14 rounded-2xl
                   bg-gradient-to-br from-[#00F0FF] to-[#00CC7A]
                   shadow-cyan-glow hover:scale-110 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]
                   transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6 text-black" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring quand fermé */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-2xl border-2 border-[#00F0FF]"
            animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.button>
    </>
  );
}
