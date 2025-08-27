"use client";
import { useState } from "react";
import {
  TrendingUp,
  PiggyBank,
  Calculator,
  Activity,
  BarChart3,
  ChevronRight,
  ArrowRight,
  Bitcoin,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

const stockServices = [
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
    icon: Calculator,
    title: "Tax Planning",
    description:
      "Optimize your tax liability with strategic planning and investment choices.",
    slug: "tax-planning",
    color: "bg-red-500",
  },
];

const cryptoServices = [
  {
    slug: "spot-trading",
    title: "Spot Trading",
    description:
      "Instant buying and selling of crypto assets at real-time market prices.",
    icon: Activity,
    color: "bg-yellow-500",
  },
  {
    slug: "futures-trading",
    title: "Futures Trading",
    description:
      "Trade crypto contracts on future asset prices with leverage and strategic hedging.",
    icon: BarChart3,
    color: "bg-pink-500",
  },
];

interface ServiceCardProps {
  service: {
    icon: any;
    title: string;
    description: string;
    slug: string;
    color: string;
  };
  index: number;
  selectedService: number | null;
  onServiceSelect: (index: number | null) => void;
  serviceType: string;
}

const ServiceCard = ({
  service,
  index,
  selectedService,
  onServiceSelect,
  serviceType,
}: ServiceCardProps) => {
  const IconComponent = service.icon;
  const isExpanded = selectedService === index;

  return (
    <>
      {/* Mobile Card */}
      <div className="block sm:hidden bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => onServiceSelect(isExpanded ? null : index)}
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
              href={`/services/${serviceType}/${service.slug}`}
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Card */}
      <div className="hidden sm:block group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
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
          href={`/services/${serviceType}/${service.slug}`}
          className="w-full bg-gray-100 text-gray-900 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-gray-900 group-hover:text-white"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
};

export default function ServicesOverview() {
  const [selectedStockService, setSelectedStockService] = useState<
    number | null
  >(null);
  const [selectedCryptoService, setSelectedCryptoService] = useState<
    number | null
  >(null);

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Trading & Crypto Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive financial solutions for both traditional stock trading
            and cryptocurrency investments
          </p>
        </div>

        {/* Stock Trading Services */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Stock Trading Services
            </h3>
          </div>

          {/* Mobile Stock Services */}
          <div className="block sm:hidden space-y-3 mb-8">
            {stockServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                selectedService={selectedStockService}
                onServiceSelect={setSelectedStockService}
                serviceType="stock"
              />
            ))}
          </div>

          {/* Desktop Stock Services Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {stockServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                selectedService={selectedStockService}
                onServiceSelect={setSelectedStockService}
                serviceType="stock"
              />
            ))}
          </div>
        </div>

        {/* Crypto Trading Services */}
        <div>
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
              <Bitcoin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Crypto Trading Services
            </h3>
          </div>

          {/* Mobile Crypto Services */}
          <div className="block sm:hidden space-y-3">
            {cryptoServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                selectedService={selectedCryptoService}
                onServiceSelect={setSelectedCryptoService}
                serviceType="crypto"
              />
            ))}
          </div>

          {/* Desktop Crypto Services Grid */}
          <div className="hidden  sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ">
            {cryptoServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                selectedService={selectedCryptoService}
                onServiceSelect={setSelectedCryptoService}
                serviceType="crypto"
              />
            ))}
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
      `}</style>
    </section>
  );
}
