"use client"

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export function ResponseModal({ isOpen, onClose, content }: ResponseModalProps) {
  const [sanitizedHTML, setSanitizedHTML] = React.useState("");

  React.useEffect(() => {
    if (content) {
      // Extract content from <output> tags if present
      let htmlContent = content;
      const outputMatch = content.match(/<output>([\s\S]*?)<\/output>/);
      if (outputMatch) {
        htmlContent = outputMatch[1];
      }

      // Sanitize the HTML content
      const clean = DOMPurify.sanitize(htmlContent, {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'pre', 'blockquote', 'br', 'hr'],
        ALLOWED_ATTR: ['href', 'target', 'rel']
      });
      setSanitizedHTML(clean);
    }
  }, [content]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Clean blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal - Clean Card Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl bg-card border border-border shadow-2xl">
              {/* Header - Minimal with Proper Contrast */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-semibold text-card-foreground tracking-tight">Response</h2>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5 text-card-foreground" />
                </Button>
              </div>

              {/* Content - Clean with Custom Scrollbar */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)] scrollbar-apple">
                <div
                  className="prose prose-lg max-w-none dark:prose-invert
                    [&>h1]:text-card-foreground [&>h1]:font-bold [&>h1]:text-3xl [&>h1]:mb-6 [&>h1]:tracking-tight
                    [&>h2]:text-card-foreground [&>h2]:font-semibold [&>h2]:text-2xl [&>h2]:mb-4 [&>h2]:tracking-tight
                    [&>h3]:text-card-foreground [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:mb-3 [&>h3]:tracking-tight
                    [&>p]:text-card-foreground [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-base
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol]:space-y-2
                    [&>ul>li]:text-card-foreground [&>ul>li]:leading-relaxed
                    [&>ol>li]:text-card-foreground [&>ol>li]:leading-relaxed
                    [&_a]:text-[hsl(var(--apple-blue))] [&_a]:underline [&_a]:decoration-[hsl(var(--apple-blue))]/40 [&_a]:underline-offset-2
                    [&_a:hover]:decoration-[hsl(var(--apple-blue))] [&_a]:cursor-pointer [&_a]:font-medium
                    [&>strong]:text-card-foreground [&>strong]:font-bold
                    [&>em]:text-card-foreground [&>em]:italic
                  "
                  dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
