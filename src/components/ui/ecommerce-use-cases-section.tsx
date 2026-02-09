import { cn } from "@/lib/utils";
import {
  ShoppingCart,
  TrendingUp,
  Zap,
  Clock,
  MessageSquare,
  Phone,
  RotateCcw,
  BarChart3,
} from "lucide-react";

export function EcommerceUseCasesSection() {
  const features = [
    {
      title: "Order Status & Delivery Queries",
      description: "Instant answers about shipping, delivery timelines, and order tracking without support agent involvement.",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      title: "Return & Refund Assistance",
      description: "Guides customers through return procedures, policies, and refund timelines automatically.",
      icon: <RotateCcw className="w-6 h-6" />,
    },
    {
      title: "Product Information Requests",
      description: "Answers questions about availability, pricing, features, and product recommendations instantly.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Reaches out to customers who left items behind and nudges them to complete their purchase.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Post-Purchase Follow-Ups",
      description: "Confirms orders, shares delivery updates, collects feedback, and promotes repeat purchases.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "24/7 Customer Support",
      description: "Always available to answer questions and resolve issues without business hour limitations.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Call Analytics",
      description: "Get detailed insights into customer interactions and support metrics in real-time.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Seamless Escalation",
      description: "Automatically escalates complex issues to human agents with full conversation context.",
      icon: <Clock className="w-6 h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-700",
        (index === 0 || index === 4) && "lg:border-l border-neutral-700",
        index < 4 && "lg:border-b border-neutral-700"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-purple-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
