import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Bulk",
      price: "$50",
      frequency: "One Time",
      description: "Perfect for a quick boost to your job applications.",
      features: [
        "100 Job Applications",
        "One Time Payment",
      ],
      cta: "Get Bulk Applications",
      isPremium: false,
    },
    {
      name: "Custom",
      price: "$65",
      frequency: "/wk",
      description: "Tailored applications and LinkedIn support.",
      features: [
        "75 Tailored Resume Applications",
        "50 LinkedIn Easy Apply Weekly",
        "Personalized Support",
      ],
      cta: "Get Custom Plan",
      isPremium: true,
    },
    {
      name: "Pro",
      price: "$55",
      frequency: "/wk",
      description: "Guaranteed interviews to accelerate your job search.",
      features: [
        "Interview Guaranteed",
        "200 jobs Weekly",
        "Weekly Progress Reports",
      ],
      cta: "Go Pro",
      isPremium: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that&apos;s right for you. Cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`rounded-lg p-8 ${tier.isPremium ? 'bg-blue-600 text-white' : 'bg-gray-50'}`}>
              <h3 className={`text-2xl font-bold ${tier.isPremium ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
              <p className={`mt-4 text-4xl font-bold ${tier.isPremium ? 'text-white' : 'text-gray-900'}`}>{tier.price}<span className="text-lg font-normal text-gray-500">{tier.frequency}</span></p>
              <p className={`mt-4 ${tier.isPremium ? 'text-blue-100' : 'text-gray-600'}`}>{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${tier.isPremium ? 'text-white' : 'text-blue-600'}`} />
                    <span className={`${tier.isPremium ? 'text-white' : 'text-gray-900'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
                }}
                className={`w-full mt-8 ${tier.isPremium ? 'bg-white text-blue-600 hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
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
