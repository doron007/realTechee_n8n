"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Globe,
  Info,
  BarChart3,
  Clock,
  MessageCircle,
  Bell,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResponseModal } from "@/components/ui/response-modal";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface InsightCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  placeholder: string;
  tool: string;
}

const insightCards: InsightCard[] = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Tech Updates",
    description: "Track updates from tech leaders and influencers",
    placeholder: "Which tech leader should I monitor?",
    tool: "techUpdates"
  },
  {
    icon: <Info className="h-6 w-6" />,
    title: "Breaking News",
    description: "Monitor real-time breaking news alerts",
    placeholder: "What type of news interests you?",
    tool: "breaking_news"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Content Analysis",
    description: "Analyze content from multiple sources",
    placeholder: "What content should I analyze?",
    tool: "content_analysis"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Historical Events",
    description: "Track historical event timelines",
    placeholder: "Which historical event timeline?",
    tool: "historical_events"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Memes & Trends",
    description: "Monitor viral content and trends",
    placeholder: "What trends should I watch?",
    tool: "memes_trends"
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Community Pulse",
    description: "Check community sentiment and activity",
    placeholder: "Which community should I monitor?",
    tool: "community_pulse"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function XInsights() {
  const [mainQuestion, setMainQuestion] = useState("");
  const [cardQuestions, setCardQuestions] = useState<{ [key: number]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const callWebhook = async (question: string, tool?: string, category?: string) => {
    setIsLoading(true);
    try {
      // Build request body with nested metadata structure
      const body: {
        question: string;
        metadata: {
          tool?: string;
          category?: string;
          timestamp: string;
        };
      } = {
        question,
        metadata: {
          timestamp: new Date().toISOString()
        }
      };

      // Add tool and category to metadata if provided
      if (tool) {
        body.metadata.tool = tool;
      }

      if (category) {
        body.metadata.category = category;
      }

      // Call n8n webhook directly
      const WEBHOOK_URL = "https://realtechee.app.n8n.cloud/webhook/bafca7c5-dc53-4967-9f1b-c2f5b1048c00";

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Parse n8n response format: data[0].response.body[0].output
      let responseText: string;

      // Check if data has an output field directly (simple case)
      if (data.output && typeof data.output === 'string') {
        responseText = data.output;
      }
      // Check for nested array format: data[0].response.body[0].output
      else if (Array.isArray(data) && data.length > 0) {
        const firstItem = data[0];
        if (firstItem?.response?.body && Array.isArray(firstItem.response.body) && firstItem.response.body.length > 0) {
          responseText = firstItem.response.body[0].output || JSON.stringify(firstItem.response.body[0], null, 2);
        } else if (firstItem?.response?.body?.[0]?.output) {
          // Alternative nested structure
          responseText = firstItem.response.body[0].output;
        } else if (firstItem?.output) {
          // Output at first item level
          responseText = firstItem.output;
        } else if (firstItem?.response) {
          responseText = JSON.stringify(firstItem.response, null, 2);
        } else {
          responseText = JSON.stringify(firstItem, null, 2);
        }
      }
      // Check for direct response field
      else if (data.response && typeof data.response === 'string') {
        responseText = data.response;
      }
      // Check for message field
      else if (data.message && typeof data.message === 'string') {
        responseText = data.message;
      }
      // Fallback: try to extract any string content
      else {
        // Try to find any string field that looks like content
        const stringFields = Object.entries(data).find(([, value]) =>
          typeof value === 'string' && value.length > 20
        );
        responseText = stringFields ? stringFields[1] as string : JSON.stringify(data, null, 2);
      }

      setModalContent(responseText);
      setIsModalOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setModalContent(`Error: ${error.message}`);
      } else {
        setModalContent("An unexpected error occurred. Please try again.");
      }
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMainAsk = () => {
    if (mainQuestion.trim()) {
      callWebhook(mainQuestion);
    }
  };

  const handleSendAlert = (index: number, tool: string, category: string) => {
    const question = cardQuestions[index] || "";
    if (question.trim()) {
      callWebhook(question, tool, category);
    }
  };

  const handleCardQuestionChange = (index: number, value: string) => {
    setCardQuestions(prev => ({ ...prev, [index]: value }));
  };

  return (
    <div className="min-h-screen apple-bg transition-theme">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="container-apple py-12">
        {/* Back Navigation - Clean and Minimal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-apple-secondary hover:text-apple-primary transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>

        {/* Header Section - Minimalist Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20 md:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Sparkles className="h-8 w-8 text-[hsl(var(--apple-blue))]" />
            <h1 className="text-4xl md:text-6xl font-bold text-apple-primary tracking-tight">
              Ask Anything
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg md:text-xl text-apple-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Get real-time insights from X (Twitter) with AI-powered monitoring and analysis
            </p>

            {/* Main Input - Clean Design */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="flex-1 w-full">
                <Input
                  value={mainQuestion}
                  onChange={(e) => setMainQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleMainAsk()}
                  placeholder="Ask any question..."
                  disabled={isLoading}
                  className="apple-input text-base h-14 w-full"
                />
              </div>
              <motion.div whileHover={{ scale: isLoading ? 1 : 1.02 }} whileTap={{ scale: isLoading ? 1 : 0.98 }}>
                <Button
                  onClick={handleMainAsk}
                  disabled={isLoading || !mainQuestion.trim()}
                  className="apple-button h-14 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Ask"
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Grid - Clean Card Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {insightCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="apple-card h-full flex flex-col justify-between">
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 p-3 bg-secondary rounded-xl text-apple-primary transition-colors">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-apple-primary mb-2 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm text-apple-secondary leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Input
                    value={cardQuestions[index] || ""}
                    onChange={(e) => handleCardQuestionChange(index, e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendAlert(index, card.tool, card.title)}
                    placeholder={card.placeholder}
                    disabled={isLoading}
                    className="apple-input text-sm h-12"
                  />

                  <motion.div whileHover={{ scale: isLoading ? 1 : 1.02 }} whileTap={{ scale: isLoading ? 1 : 0.98 }}>
                    <Button
                      onClick={() => handleSendAlert(index, card.tool, card.title)}
                      disabled={isLoading || !cardQuestions[index]?.trim()}
                      className="w-full apple-button h-12 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Bell className="h-4 w-4 mr-2" />
                          Send Alert
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer - Minimal */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-20"
        >
          <div className="apple-card max-w-md mx-auto">
            <p className="text-apple-secondary text-sm">
              Real-time insights powered by advanced AI monitoring
            </p>
          </div>
        </motion.div>

        {/* Bottom Spacing */}
        <div className="h-24"></div>
      </div>

      {/* Response Modal */}
      <ResponseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
}
