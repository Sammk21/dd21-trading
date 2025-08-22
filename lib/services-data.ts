import { TrendingUp, PiggyBank, CreditCard, Shield, Users, Calculator } from "lucide-react"

export interface Service {
  slug: string
  title: string
  description: string
  icon: any
  longDescription: string
  features: string[]
  benefits: string[]
  whoItsFor: string[]
  process: string[]
}

export const servicesData: Service[] = [
  {
    slug: "options-trading",
    title: "Options Trading",
    description: "Expert guidance on options strategies with risk management and market analysis.",
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
    description: "Personalized investment portfolios tailored to your financial goals and risk appetite.",
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
    slug: "loans",
    title: "Loans & Credit",
    description: "Assistance with personal loans, home loans, and credit optimization strategies.",
    icon: CreditCard,
    longDescription:
      "Navigate the complex world of loans and credit with our expert guidance. We help you find the best loan products, optimize your credit profile, and manage debt effectively to achieve your financial objectives.",
    features: [
      "Loan product comparison and selection",
      "Credit score improvement strategies",
      "Debt consolidation planning",
      "EMI optimization and restructuring",
      "Documentation and application support",
    ],
    benefits: [
      "Access to best loan rates and terms",
      "Improved credit profile and score",
      "Reduced financial stress and EMI burden",
      "Strategic debt management",
      "Expert negotiation with lenders",
    ],
    whoItsFor: [
      "Home buyers seeking mortgage guidance",
      "Individuals needing personal loans",
      "Business owners requiring working capital",
      "Anyone looking to optimize existing debt",
    ],
    process: [
      "Credit assessment and loan requirement analysis",
      "Lender comparison and product selection",
      "Application preparation and submission",
      "Follow-up and loan closure support",
    ],
  },
  {
    slug: "insurance",
    title: "Insurance",
    description: "Comprehensive insurance planning for life, health, and asset protection.",
    icon: Shield,
    longDescription:
      "Protect yourself and your loved ones with comprehensive insurance planning. We analyze your insurance needs and recommend appropriate coverage to safeguard against life's uncertainties while optimizing costs.",
    features: [
      "Insurance needs analysis and gap assessment",
      "Product comparison across multiple insurers",
      "Claims assistance and support",
      "Policy review and optimization",
      "Beneficiary planning and updates",
    ],
    benefits: [
      "Comprehensive protection coverage",
      "Cost-effective insurance solutions",
      "Peace of mind for you and family",
      "Professional claims support",
      "Regular policy optimization",
    ],
    whoItsFor: [
      "Families seeking comprehensive protection",
      "Working professionals needing coverage",
      "Business owners protecting assets",
      "Individuals planning for dependents",
    ],
    process: [
      "Insurance needs assessment",
      "Product research and comparison",
      "Policy selection and application",
      "Ongoing review and optimization",
    ],
  },
  {
    slug: "retirement",
    title: "Retirement Planning",
    description: "Strategic retirement planning to ensure financial security in your golden years.",
    icon: Users,
    longDescription:
      "Plan for a comfortable and financially secure retirement with our comprehensive retirement planning service. We help you calculate retirement needs, choose appropriate investment vehicles, and create a systematic savings strategy.",
    features: [
      "Retirement corpus calculation and planning",
      "Pension and provident fund optimization",
      "Systematic investment plan design",
      "Post-retirement income planning",
      "Healthcare and inflation protection",
    ],
    benefits: [
      "Financial independence in retirement",
      "Inflation-protected retirement corpus",
      "Multiple income streams post-retirement",
      "Healthcare cost coverage",
      "Legacy planning for heirs",
    ],
    whoItsFor: [
      "Young professionals starting career",
      "Mid-career individuals planning ahead",
      "Pre-retirees finalizing strategies",
      "Anyone concerned about retirement security",
    ],
    process: [
      "Retirement goal setting and timeline",
      "Investment strategy development",
      "Implementation and monitoring",
      "Pre-retirement transition planning",
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    description: "Optimize your tax liability with strategic planning and investment choices.",
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
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return servicesData
}
