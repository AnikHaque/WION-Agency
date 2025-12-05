import { useState } from "react";
import { Check, Star, Shield, Rocket, Crown, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "Starter",
      icon: <Rocket className="w-6 h-6" />,
      price: { monthly: 19, yearly: 190 },
      features: ["Basic dashboard", "Email support", "5 Projects", "Standard security"],
      highlight: false,
    },
    {
      id: 2,
      name: "Pro",
      icon: <Crown className="w-6 h-6" />,
      price: { monthly: 49, yearly: 490 },
      features: [
        "Everything in Starter",
        "Priority support",
        "Unlimited projects",
        "Advanced analytics",
        "Team collaboration",
      ],
      highlight: true,
    },
    {
      id: 3,
      name: "Enterprise",
      icon: <Shield className="w-6 h-6" />,
      price: { monthly: 99, yearly: 990 },
      features: [
        "Dedicated manager",
        "Custom integrations",
        "Unlimited storage",
        "Enhanced security",
        "24/7 Support",
      ],
      highlight: false,
    },
  ];

  const reviews = [
    {
      name: "Ayesha Rahman",
      role: "Tech Startup Founder",
      review:
        "The Pro plan boosted our team productivity immensely. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Clark",
      role: "Project Manager",
      review:
        "Great value for money. Their support team is always responsive and helpful.",
      rating: 5,
    },
    {
      name: "Sophia Ahmed",
      role: "Entrepreneur",
      review:
        "Enterprise plan gave us the customization we needed. Excellent service!",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-20">
      {/* Hero */}
      <div className="text-center py-20 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-extrabold mb-4">Flexible Pricing for Every Team</h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Choose a plan that fits your business and scale seamlessly.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <span className={billing === "monthly" ? "font-semibold" : "text-gray-500"}>Monthly</span>
          <button
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
            className="relative w-16 h-8 bg-gray-300 rounded-full p-1 flex items-center"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${billing === "yearly" ? "translate-x-8" : ""}`}
            />
          </button>
          <span className={billing === "yearly" ? "font-semibold" : "text-gray-500"}>Yearly</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mt-16">
        {plans.map((plan) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={plan.id}
            className={`rounded-2xl p-8 shadow-xl border bg-white relative overflow-hidden ${plan.highlight ? "border-blue-600 shadow-blue-100" : ""}`}
          >
            {plan.highlight && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-4 py-1 rounded-bl-xl rounded-tr-2xl">
                Most Popular
              </span>
            )}
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              {plan.icon}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-extrabold">${plan.price[billing]}</span>
              <span className="text-gray-500"> / {billing}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="text-green-600 w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl text-lg font-semibold transition-all ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto mt-28 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-xl">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Features</th>
                {plans.map((p) => (
                  <th key={p.id} className="p-4 text-center">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "Unlimited Storage",
                "Team Collaboration",
                "Custom Integrations",
                "Priority Support",
                "Advanced Analytics",
              ].map((feature, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-semibold">{feature}</td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-4 text-center">
                      {p.features.includes(feature) ? (
                        <Check className="text-green-600 inline-block" />
                      ) : (
                        "—"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Slider */}
      <div className="max-w-5xl mx-auto mt-28 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-slide whitespace-nowrap">
            {reviews.map((rev, idx) => (
              <div key={idx} className="min-w-[320px] bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-500 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">“{rev.review}”</p>
                <h4 className="font-bold">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto mt-28 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I cancel anytime?",
              a: "Yes, you can cancel your subscription whenever you want without additional fees.",
            },
            {
              q: "Is my payment information secure?",
              a: "We use industry-standard encryption and secure payment gateways.",
            },
            {
              q: "Can I upgrade my plan later?",
              a: "Absolutely! You can upgrade or downgrade at any time.",
            },
          ].map((faq, i) => (
            <details key={i} className="bg-white p-5 rounded-xl shadow-md cursor-pointer">
              <summary className="font-semibold flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" /> {faq.q}
              </summary>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-28 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Join thousands of teams using our platform.</p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all">
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
}
