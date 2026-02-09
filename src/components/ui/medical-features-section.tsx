import { cn } from "@/lib/utils";
import { Calendar, Clock, Zap, Heart, Phone, MessageSquare } from "lucide-react";

interface MedicalFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MedicalFeaturesSectionProps {
  features?: MedicalFeature[];
}

export function MedicalFeaturesSection({ features }: MedicalFeaturesSectionProps) {
  const defaultFeatures: MedicalFeature[] = [
    {
      title: "New Patient Appointment Scheduling",
      description:
        "The AI medical receptionist books consultations with the right doctor or department, ensuring faster access to care and reduced front-desk workload.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Follow-Up & Review Visit Scheduling",
      description:
        "Automatically schedules post-treatment checkups, follow-up visits, and review appointments without manual staff intervention.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Test & Diagnostic Booking Support",
      description:
        "Helps patients schedule lab tests, scans, and diagnostic procedures while sharing preparation instructions when needed.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "General Hospital & Clinic Information",
      description:
        "Answers common patient questions about services, departments, operating hours, and facility locations.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "After-Hours Call Handling",
      description:
        "The AI healthcare voice assistant manages patient calls outside clinic hours, records inquiries, and provides guidance until staff follow up.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Appointment Reminders & Confirmations",
      description:
        "Sends automated reminders and confirmations to reduce no-shows and improve clinic schedule efficiency.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto px-4">
      {displayFeatures.map((feature, index) => (
        <MedicalFeature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const MedicalFeature = ({
  title,
  description,
  icon,
  index,
}: MedicalFeature & {
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-emerald-500/20",
        (index === 0 || index === 3) && "lg:border-l border-emerald-500/20",
        index < 3 && "lg:border-b border-emerald-500/20"
      )}
    >
      {/* Gradient overlay for hover effect */}
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-emerald-500/10 dark:from-emerald-500/20 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-emerald-500/10 dark:from-emerald-500/20 to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-emerald-400">
        {icon}
      </div>

      {/* Title with animated left border */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-emerald-500/30 group-hover/feature:bg-emerald-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
