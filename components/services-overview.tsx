"use client";
import { useState } from "react";
import {
  TrendingUp,
  PiggyBank,
  CreditCard,
  Shield,
  Users,
  Calculator,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: TrendingUp,
    title: "Options Trading",
    description:
      "Expert guidance on options strategies with risk management and market analysis.",
    slug: "options-trading",
    color: "bg-blue-500",
  },
  {
    icon: PiggyBank,
    title: "Investment Planning",
    description:
      "Personalized investment portfolios tailored to your financial goals and risk appetite.",
    slug: "investment-planning",
    color: "bg-green-500",
  },
  {
    icon: CreditCard,
    title: "Loans & Credit",
    description:
      "Assistance with personal loans, home loans, and credit optimization strategies.",
    slug: "loans",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Insurance",
    description:
      "Comprehensive insurance planning for life, health, and asset protection.",
    slug: "insurance",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Retirement Planning",
    description:
      "Strategic retirement planning to ensure financial security in your golden years.",
    slug: "retirement",
    color: "bg-indigo-500",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description:
      "Optimize your tax liability with strategic planning and investment choices.",
    slug: "tax-planning",
    color: "bg-red-500",
  },
];

export default function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Financial Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to help you build,
            protect, and grow your wealth
          </p>
        </div>
        {/* Mobile-First List View */}
        <div className="block sm:hidden space-y-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = selectedService === index;

            return (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedService(isExpanded ? null : index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Tablet+ Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.slug}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-full bg-gray-100 text-gray-900 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-gray-900 group-hover:text-white"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
        {/* Alternative: Compact Horizontal Scroll for Mobile */}
        <div className="hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {services.map((service) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={service.slug}
                  className="flex-none w-72 bg-white rounded-xl p-6 shadow-sm border border-gray-200 snap-start"
                >
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
