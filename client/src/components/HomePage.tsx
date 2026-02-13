import React from "react";
import { Shield, TrendingUp, BarChart3, Upload, ArrowRight, Settings } from "lucide-react";

export default function HomePage() {
  return (
    /* Use variables from your CSS :root */
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Settings Button */}
      <div className="absolute top-6 right-6">
        <button className="p-2 rounded-xl border border-border bg-card text-muted-foreground hover:text-primary shadow-sm">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO - Centered Layout */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 bg-muted text-primary border border-border">
            <Shield className="w-4 h-4" />
            Financial Risk Analysis Made Simple
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary tracking-tight leading-[1.1]">
            Understand Your <br />
            <span className="text-indigo-600">Financial Risk</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-10 text-muted-foreground leading-relaxed">
            Upload your financial data and get instant insights into your spending
            patterns, savings rate, and overall financial health with our intelligent risk engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 font-semibold text-lg flex items-center gap-2 shadow-lg">
              Start Free Analysis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-4 rounded-xl border border-border bg-secondary text-secondary-foreground font-semibold text-lg">
              Sign In
            </button>
          </div>
        </div>

        {/* GRID - Horizontal Layout (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-[24px] border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-6 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Easy Upload</h3>
            <p className="text-muted-foreground leading-relaxed">
              Simply upload a CSV file with your transaction history. Our system automatically parses and analyzes your data.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-[24px] border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-6 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Visual Insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              See your spending patterns through interactive charts and graphs. Understand where your money goes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-[24px] border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Risk Score</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get a personalized risk score based on your savings rate and expense concentration with actionable tips.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}