import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PromptAgent() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Prompt Agent
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Smart prompt engineering and optimization. Enhance your AI interactions with intelligent prompt crafting.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              This feature will be connected to an n8n workflow for automated prompt optimization and testing.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}