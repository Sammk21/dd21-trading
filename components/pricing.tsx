"use client";
import React, { useState } from "react";
import { Check, Star, Zap, TrendingUp, Shield, X } from "lucide-react";

const PricingPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const openDialog = (plan: any) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedPlan(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };
  const plans = [
    {
      name: "Starter",
      period: "Monthly",
      price: "₹4,999",
      originalPrice: "₹6,999",
      discount: "29% off",
      description: "Perfect for individual traders",
      isPopular: false,
      alerts: "5 alerts/day",
      coverage: "Bank Nifty only",
      support: "Email support",

      features: [
        "WhatsApp notifications",
        "Basic market analysis",
        "Email support",
      ],
    },
    {
      name: "Professional",
      period: "Quarterly",
      price: "₹11,999",
      originalPrice: "₹17,999",
      discount: "33% off",
      description: "Most popular for serious traders",
      isPopular: true,
      alerts: "15 alerts/day",
      coverage: "All 3 indices",
      support: "Chat + Email",
      features: [
        "Advanced analysis",
        "SMS + WhatsApp alerts",
        "Weekly market outlook",
        "Priority support",
      ],
    },
    {
      name: "Expert",
      period: "Half-Yearly",
      price: "₹19,999",
      originalPrice: "₹32,999",
      discount: "39% off",
      description: "For active professional traders",
      isPopular: false,
      alerts: "25 alerts/day",
      coverage: "All indices + sectors",
      support: "Dedicated manager",
      features: [
        "Premium research",
        "Daily briefings",
        "Webinar access",
        "Multi-channel alerts",
      ],
    },
    {
      name: "Elite",
      period: "Yearly",
      price: "₹34,999",
      originalPrice: "₹59,999",
      discount: "42% off",
      description: "Ultimate trading package",
      isPopular: false,
      alerts: "Unlimited",
      coverage: "Everything included",
      support: "24/7 consultant",
      features: [
        "Real-time insights",
        "Personal consultant",
        "Exclusive reports",
        "Early feature access",
      ],
    },
  ];

  const Button = ({
    children,
    className = "",
    variant = "default",
    onClick,
    ...props
  }: any) => (
    <button
      className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm
        ${
          variant === "default"
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
            : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300"
        } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <TrendingUp className="w-3 h-3" />
            Index Options Alerts
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Trading Edge
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Professional research alerts for Nifty options. Join 10,000+
            successful traders.
          </p>
        </div>

        {/* Mobile-First Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
                ${plan.isPopular ? "ring-2 ring-blue-500 sm:scale-105" : ""}
                flex flex-col h-full`}
            >
              {/* Popular Badge - Smaller for Mobile */}
              {plan.isPopular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  <Star className="inline w-3 h-3 mr-1" />
                  Popular
                </div>
              )}

              <div className="p-4 md:p-6 flex flex-col flex-grow">
                {/* Plan Header - Compact */}
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-tight">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing - Mobile Optimized */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl md:text-2xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {plan.discount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    per {plan.period.toLowerCase()}
                  </p>
                </div>

                {/* Key Features Grid - Compact Layout */}
                <div className="grid grid-cols-1 gap-2 mb-4 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-600">Alerts:</span>
                    <span className="font-medium text-gray-900">
                      {plan.alerts}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-medium text-gray-900 text-right text-xs">
                      {plan.coverage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-600">Support:</span>
                    <span className="font-medium text-gray-900 text-right text-xs">
                      {plan.support}
                    </span>
                  </div>
                </div>

                {/* Features List - Condensed */}
                <div className="mb-4 flex-grow">
                  <ul className="space-y-1.5">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-xs text-gray-700"
                      >
                        <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    className={`mb-3 ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                        : ""
                    }`}
                    onClick={() => openDialog(plan)}
                  >
                    {plan.isPopular ? (
                      <div className="flex items-center justify-center">
                        <Zap className="w-3 h-3 mr-1" />
                        Start Now
                      </div>
                    ) : (
                      "Get Started"
                    )}
                  </Button>

                  {/* Risk Level - Bottom */}
                  {/* <div className="flex items-center justify-center text-xs bg-gray-50 rounded-lg p-2">
                    <Shield className="w-3 h-3 text-orange-500 mr-1" />
                    <span className="text-gray-600">Risk: </span>
                    <span className="font-medium text-gray-700 ml-1">
                      {plan.risk}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Mobile Responsive */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-gray-900">
                  10K+
                </div>
                <div className="text-xs md:text-sm text-gray-600">Traders</div>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-lg md:text-2xl font-bold text-gray-900">
                  95%
                </div>
                <div className="text-xs md:text-sm text-gray-600">Success</div>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-gray-900">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs md:text-sm text-gray-500 px-4">
            ✓ GST included • ✓ 7-day guarantee • ✓ No hidden charges
          </p>
        </div>

        {/* Dialog/Modal */}
        {isDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeDialog}
            ></div>

            {/* Dialog Content */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md mx-auto flex flex-col max-h-[95vh] sm:max-h-[90vh]">
              {/* Dialog Header - Fixed */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Subscribe to {selectedPlan?.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {selectedPlan?.price} / {selectedPlan?.period.toLowerCase()}
                  </p>
                </div>
                <button
                  onClick={closeDialog}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                </button>
              </div>

              {/* Dialog Body - Scrollable */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                    Selected Plan Details:
                  </h4>
                  <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
                    <li>• {selectedPlan?.alerts}</li>
                    <li>• {selectedPlan?.coverage}</li>
                    <li>• {selectedPlan?.support}</li>
                    <li>• Risk Level: {selectedPlan?.risk}</li>
                  </ul>
                </div>

                {/* Example form structure you can replace */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Trading Experience
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 year)</option>
                      <option value="intermediate">
                        Intermediate (1-3 years)
                      </option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Amount
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select investment range</option>
                      <option value="1-5">₹1L - ₹5L</option>
                      <option value="5-10">₹5L - ₹10L</option>
                      <option value="10-25">₹10L - ₹25L</option>
                      <option value="25+">₹25L+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requirements (Optional)
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                </div>
              </div>

              {/* Dialog Actions - Fixed at bottom */}
              <div className="flex gap-3 p-4 sm:p-6 border-t border-gray-200 flex-shrink-0">
                <button
                  onClick={closeDialog}
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;
