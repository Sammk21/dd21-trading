import {
  TrendingUp,
  PiggyBank,
  Calculator,
  BarChart3,
  Activity,
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
      "Instant buying and selling of assets at real-time market prices.",
    icon: Activity,
    longDescription:
      "Our spot trading service allows you to buy and sell assets at current market prices with complete transparency. Designed for traders who prefer immediate settlement, this service provides deep liquidity, fast execution, and reliable trade management for various asset classes.",
    features: [
      "Real-time order execution with minimal slippage",
      "Access to multiple trading pairs and markets",
      "Advanced charting and analysis tools",
      "High liquidity for efficient trades",
      "Secure wallet and custody solutions",
    ],
    benefits: [
      "Immediate ownership of assets",
      "Simple and straightforward trading process",
      "Transparency with real-time pricing",
      "No contract expirations or rollover fees",
      "Flexibility to hold or liquidate anytime",
    ],
    whoItsFor: [
      "Traders seeking quick entry and exit opportunities",
      "Investors wanting to directly own digital assets",
      "Beginners exploring straightforward trading methods",
      "Short-term traders focused on market volatility",
    ],
    process: [
      "Account setup and funding",
      "Market analysis and order placement",
      "Instant trade execution and confirmation",
      "Asset settlement in your wallet",
    ],
  },
  {
    slug: "futures-trading",
    title: "Futures Trading",
    description:
      "Trade contracts on future asset prices with leverage and strategic hedging.",
    icon: BarChart3,
    longDescription:
      "Our futures trading service offers advanced opportunities to speculate or hedge using leveraged contracts. Whether you’re managing risk or aiming for higher returns, we provide the tools, insights, and professional support to help you navigate futures markets effectively.",
    features: [
      "Leverage-based trading for amplified exposure",
      "Long and short position flexibility",
      "Comprehensive risk management tools",
      "Advanced order types and trading strategies",
      "Access to major futures markets and assets",
    ],
    benefits: [
      "Potential for higher profits with leverage",
      "Ability to profit in both rising and falling markets",
      "Effective hedging against spot market volatility",
      "Portfolio diversification opportunities",
      "Guidance from experienced trading professionals",
    ],
    whoItsFor: [
      "Experienced traders seeking leveraged opportunities",
      "Investors looking to hedge against market risks",
      "Active traders interested in short-term volatility",
      "Portfolio managers aiming for diversification",
    ],
    process: [
      "Risk profile assessment and leverage setup",
      "Selection of futures contracts",
      "Position opening with real-time monitoring",
      "Ongoing adjustments and trade settlement",
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
