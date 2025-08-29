import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$297",
      description: "For those who want to get their foot in the door.",
      features: [
        "30 applications per week",
        "Resume optimization",
        "Weekly progress reports",
      ],
      cta: "Choose Basic",
      isPremium: false,
    },
    {
      name: "Premium",
      price: "$497",
      description: "For those who want to accelerate their job search.",
      features: [
        "50 applications per week",
        "LinkedIn optimization",
        "Interview preparation",
        "Resume optimization",
      ],
      cta: "Choose Premium",
      isPremium: true,
    },
    {
      name: "Executive",
      price: "$997",
      description: "For those who want a personalized job search experience.",
      features: [
        "Personal job strategist",
        "Salary negotiation",
        "50 applications per week",
        "LinkedIn optimization",
        "Interview preparation",
      ],
      cta: "Choose Executive",
      isPremium: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. Cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`rounded-lg p-8 ${tier.isPremium ? 'bg-black text-white' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className={`mt-4 text-4xl font-bold ${tier.isPremium ? 'text-white' : 'text-black'}`}>{tier.price}<span className="text-lg font-normal text-gray-500">/month</span></p>
              <p className={`mt-4 ${tier.isPremium ? 'text-gray-300' : 'text-gray-600'}`}>{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${tier.isPremium ? 'text-white' : 'text-black'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.isPremium ? 'default' : 'outline'}
                onClick={() => {
                  window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
                }}
                className={`w-full mt-8 ${tier.isPremium ? 'bg-white text-black hover:bg-gray-200' : 'border-black text-black hover:bg-gray-100'}`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
