import {
  TrendingUp,
  PiggyBank,
  Calculator,
  BarChart3,
  Activity,
  Coins,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: any;
  longDescription: string;
  features: string[];
  benefits: string[];
  whoItsFor: string[];
  process: string[];
}

export const servicesData: Service[] = [
  {
    slug: "options-trading",
    title: "Options Trading",
    description:
      "Expert guidance on options strategies with risk management and market analysis.",
    icon: TrendingUp,
    longDescription:
      "Our options trading service provides comprehensive guidance for both beginners and experienced traders. We focus on risk management, strategic planning, and market analysis to help you make informed decisions in the options market.",
    features: [
      "Real-time market analysis and insights",
      "Customized options strategies based on risk profile",
      "Risk management and position sizing guidance",
      "Educational resources and training materials",
      "Regular portfolio reviews and adjustments",
    ],
    benefits: [
      "Potential for higher returns with managed risk",
      "Portfolio hedging capabilities",
      "Income generation through premium collection",
      "Flexibility in market conditions",
      "Professional guidance and support",
    ],
    whoItsFor: [
      "Experienced investors looking to enhance returns",
      "Portfolio managers seeking hedging strategies",
      "Traders interested in income generation",
      "Investors with moderate to high risk tolerance",
    ],
    process: [
      "Initial consultation and risk assessment",
      "Strategy development based on your goals",
      "Implementation with ongoing monitoring",
      "Regular reviews and strategy adjustments",
    ],
  },
  {
    slug: "investment-planning",
    title: "Investment Planning",
    description:
      "Personalized investment portfolios tailored to your financial goals and risk appetite.",
    icon: PiggyBank,
    longDescription:
      "Our investment planning service creates personalized portfolios designed to meet your specific financial objectives. We consider your risk tolerance, time horizon, and financial goals to build a diversified investment strategy.",
    features: [
      "Comprehensive financial goal analysis",
      "Diversified portfolio construction",
      "Regular rebalancing and optimization",
      "Tax-efficient investment strategies",
      "Performance monitoring and reporting",
    ],
    benefits: [
      "Aligned investments with personal goals",
      "Professional portfolio management",
      "Risk-adjusted returns optimization",
      "Tax efficiency and cost management",
      "Long-term wealth building strategy",
    ],
    whoItsFor: [
      "First-time investors starting their journey",
      "Professionals planning for future goals",
      "Individuals seeking portfolio diversification",
      "Anyone looking for systematic wealth creation",
    ],
    process: [
      "Financial goal setting and risk profiling",
      "Portfolio design and asset allocation",
      "Investment implementation and monitoring",
      "Periodic reviews and rebalancing",
    ],
  },
  {
    slug: "spot-trading",
    title: "Spot Trading",
    description:
      "Buy and sell cryptocurrencies instantly at current market prices with professional guidance.",
    icon: Coins,
    longDescription:
      "Our Spot Trading service enables you to directly buy and sell cryptocurrencies in real time. We provide expert insights, execution strategies, and portfolio support so you can trade confidently and efficiently in the spot market.",
    features: [
      "Direct ownership of cryptocurrencies",
      "Instant trade execution at market prices",
      "Portfolio diversification strategies",
      "Transparent and simple fee structure",
      "Access to market analysis and insights",
    ],
    benefits: [
      "Full control and ownership of your digital assets",
      "Simple and beginner-friendly approach",
      "No expiry dates or contract complexities",
      "Ability to transfer, hold, or use assets anytime",
      "Professional guidance for better decision-making",
    ],
    whoItsFor: [
      "Beginners entering the crypto market",
      "Long-term investors looking for secure ownership",
      "Traders seeking simplicity and transparency",
      "Anyone who wants to buy and hold crypto assets",
    ],
    process: [
      "Consultation to understand your goals",
      "Guided setup of trading accounts and wallets",
      "Live support for executing your trades",
      "Ongoing monitoring and portfolio adjustments",
    ],
  },
  {
    slug: "futures-trading",
    title: "Futures Trading",
    description:
      "Speculate on cryptocurrency prices with leverage and expert risk management.",
    icon: BarChart3,
    longDescription:
      "Our Futures Trading service empowers you to trade crypto contracts with leverage, allowing you to profit from both rising and falling markets. We emphasize risk management, position sizing, and ongoing strategy support to help you navigate the high-risk, high-reward futures market.",
    features: [
      "Leverage trading options up to 100x",
      "Ability to go long (buy) or short (sell)",
      "Risk management and liquidation protection",
      "Advanced market analysis and trading signals",
      "Tailored strategies to match your risk profile",
    ],
    benefits: [
      "Potential for amplified profits with leverage",
      "Opportunities in both bullish and bearish markets",
      "Professional support to reduce risk exposure",
      "Strategic entry and exit planning",
      "Enhanced portfolio growth opportunities",
    ],
    whoItsFor: [
      "Experienced traders seeking higher returns",
      "Investors comfortable with high-risk strategies",
      "Traders wanting to profit from short-term market movements",
      "Clients looking for professional futures market guidance",
    ],
    process: [
      "Initial risk consultation and onboarding",
      "Customized trading plan with leverage options",
      "Guided execution and risk monitoring",
      "Regular performance reviews and adjustments",
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    description:
      "Optimize your tax liability with strategic planning and investment choices.",
    icon: Calculator,
    longDescription:
      "Minimize your tax burden legally and efficiently with our comprehensive tax planning service. We help you understand tax implications of investments and structure your finances for maximum tax efficiency.",
    features: [
      "Tax-saving investment recommendations",
      "Income tax return preparation and filing",
      "Capital gains optimization strategies",
      "Business tax planning and compliance",
      "Year-round tax advisory support",
    ],
    benefits: [
      "Significant tax savings annually",
      "Compliant and stress-free tax filing",
      "Optimized investment tax efficiency",
      "Professional tax advisory support",
      "Strategic financial structuring",
    ],
    whoItsFor: [
      "Salaried professionals with tax liability",
      "Business owners and entrepreneurs",
      "Investors with capital gains",
      "High-net-worth individuals",
    ],
    process: [
      "Tax situation analysis and planning",
      "Strategy implementation and monitoring",
      "Regular compliance and filing support",
      "Annual review and optimization",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return servicesData;
}
