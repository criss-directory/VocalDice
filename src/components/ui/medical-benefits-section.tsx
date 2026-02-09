import { motion } from 'framer-motion';
import { Heart, CheckCircle, Phone, Calendar, Clock, MessageSquare, ArrowRight, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitItem = ({ icon, title, description, index }: BenefitItemProps) => (
  <motion.div
    variants={fadeInUp}
    className="group relative pl-8 py-4 cursor-pointer transition-all duration-300 hover:pl-10"
  >
    {/* Left border indicator */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/0 via-emerald-400 to-emerald-500/0 group-hover:from-emerald-400 group-hover:via-emerald-300 group-hover:to-emerald-400 transition-all duration-300 rounded-r" />

    {/* Hover glow background */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start gap-4 mb-2">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500/30 to-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-emerald-500/50 group-hover:to-teal-500/30 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed ml-10 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

interface WorkflowStepProps {
  label: string;
  icon: React.ReactNode;
}

const WorkflowStep = ({ label, icon }: WorkflowStepProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center gap-3"
  >
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center border border-emerald-500/30 group hover:border-emerald-400/60 transition-colors">
      {icon}
    </div>
    <p className="text-sm font-medium text-gray-300 text-center">{label}</p>
  </motion.div>
);

const OutcomeItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 group hover:bg-emerald-500/10 hover:border-emerald-400/40 transition-all"
  >
    <div className="w-5 h-5 text-emerald-400 flex-shrink-0">{icon}</div>
    <span className="text-sm font-medium text-gray-300">{label}</span>
  </motion.div>
);

export function MedicalBenefitsSection() {
  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-emerald-400" />,
      title: "Reduce Front-Desk Workload and Staff Burnout",
      description: "AI medical receptionists handle repetitive patient calls, allowing staff to focus on in-clinic care and critical tasks."
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      title: "Answer 100% of Incoming Patient Calls",
      description: "The AI healthcare voice assistant ensures no patient call goes unanswered, even during peak hours."
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      title: "Improve Patient Satisfaction with Faster Response Times",
      description: "Instant call handling and appointment scheduling reduce waiting times and improve the overall patient experience."
    },
    {
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
      title: "Minimize Missed Appointments and No-Shows",
      description: "Automated reminders and confirmations help clinics keep schedules full and reduce lost appointment slots."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      title: "Maintain Consistent Communication Across All Patients",
      description: "The AI provides clear, standardized information about services, timings, and procedures on every call."
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      title: "Operate Beyond Regular Clinic Hours Without Extra Staffing",
      description: "Patients can book appointments and leave inquiries even after hours, improving accessibility without increasing payroll."
    }
  ];

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Clinics and Hospitals Are Turning to
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              AI Medical Receptionists
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-3xl mx-auto">
            Healthcare providers are using AI voice assistants to handle routine patient calls, reduce staff overload, and deliver faster, more reliable communication.
          </motion.p>
        </motion.div>

        {/* Benefits + Workflow Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Benefit Blocks */}
          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, i) => (
              <BenefitItem
                key={i}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={i}
              />
            ))}
          </motion.div>

          {/* Right: Workflow Visual */}
          <motion.div
            className="hidden lg:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="sticky top-32 bg-gradient-to-br from-emerald-900/10 to-emerald-900/5 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">
                AI-Powered Workflow
              </h3>

              {/* Workflow Steps */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between gap-2">
                  <WorkflowStep label="Patient Call" icon={<Phone className="w-6 h-6 text-emerald-400" />} />
                  <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full mx-2" />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full mx-2" />
                  <WorkflowStep
                    label="AI Medical Receptionist"
                    icon={<MessageSquare className="w-6 h-6 text-emerald-400" />}
                  />
                  <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full mx-2" />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full mx-2" />
                  <WorkflowStep label="Instant Handling" icon={<Zap className="w-6 h-6 text-emerald-400" />} />
                </div>
              </div>

              {/* Outcomes */}
              <div className="border-t border-emerald-500/20 pt-8">
                <p className="text-sm font-semibold text-emerald-400 mb-4 text-center">Immediate Results</p>
                <div className="space-y-3">
                  <OutcomeItem icon={<CheckCircle className="w-4 h-4" />} label="Appointment Booked" />
                  <OutcomeItem icon={<CheckCircle className="w-4 h-4" />} label="Info Provided" />
                  <OutcomeItem icon={<CheckCircle className="w-4 h-4" />} label="Reminder Sent" />
                  <OutcomeItem icon={<CheckCircle className="w-4 h-4" />} label="Staff Notified" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Power Line */}
        <motion.div
          className="text-center py-12 border-t border-emerald-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xl md:text-2xl font-semibold text-white">
            Better communication for patients.{' '}
            <span className="text-emerald-400">Less pressure on staff.</span> Smoother clinic operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
