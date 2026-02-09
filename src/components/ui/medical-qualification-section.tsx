import { motion } from 'framer-motion';
import { CheckCircle, Building2, Microscope, Stethoscope, Users, Phone, AlertCircle } from 'lucide-react';

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

interface IdealFitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IdealFitCard = ({ icon, title, description }: IdealFitCardProps) => (
  <motion.div
    variants={fadeInUp}
    className="group relative bg-gradient-to-br from-emerald-900/20 to-teal-900/5 border border-emerald-500/30 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10"
  >
    {/* Hover glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <div className="mb-3 inline-flex p-2.5 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/10 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-colors">
        {icon}
      </div>
      <h4 className="font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
        {title}
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

interface NotFitItemProps {
  label: string;
}

const NotFitItem = ({ label }: NotFitItemProps) => (
  <motion.div
    variants={fadeInUp}
    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-500/5 transition-colors"
  >
    <div className="w-5 h-5 rounded-full bg-gray-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
      <div className="w-2 h-2 rounded-full bg-gray-400" />
    </div>
    <span className="text-gray-400 text-sm">{label}</span>
  </motion.div>
);

export function MedicalQualificationSection() {
  const idealFitCategories = [
    {
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      title: "Clinics and Multi-Specialty Hospitals",
      description: "Healthcare providers managing daily appointment bookings across multiple doctors and departments."
    },
    {
      icon: <Microscope className="w-5 h-5 text-emerald-400" />,
      title: "Diagnostic and Imaging Centers",
      description: "Facilities coordinating lab tests, scans, and diagnostic appointments with frequent patient inquiries."
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-emerald-400" />,
      title: "Specialty Practices",
      description: "Dental, dermatology, physiotherapy, orthopedics, and other practices with high appointment and follow-up call volumes."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Outpatient Care and Day-Care Centers",
      description: "Centers where front-desk staff handle constant patient calls for scheduling, confirmations, and general support."
    }
  ];

  const notFitItems = [
    "Emergency medical response systems",
    "Clinical decision-making or medical diagnosis",
    "Pharmaceutical or insurance call centers",
    "Telemedicine consultation platforms"
  ];

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Subtle glow lines */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Who Our AI Medical Receptionist
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Is Built For
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-3xl mx-auto">
            VocalDice AI is designed for patient-facing healthcare facilities that handle high volumes of phone calls, appointment scheduling, and routine inquiries.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Ideal For */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Ideal Fit</h3>
            </div>

            <div className="space-y-4">
              {idealFitCategories.map((category, i) => (
                <IdealFitCard
                  key={i}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Not A Fit */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-6 h-6 text-gray-500" />
              <h3 className="text-2xl font-bold text-white">Not A Fit</h3>
            </div>

            <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/10 border border-gray-500/20 rounded-xl p-8">
              <p className="text-gray-400 text-sm mb-6">
                This solution is not designed for:
              </p>

              <motion.div variants={staggerContainer} className="space-y-2 mb-6">
                {notFitItems.map((item, i) => (
                  <NotFitItem key={i} label={item} />
                ))}
              </motion.div>

              <div className="pt-6 border-t border-gray-500/20">
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold text-gray-400">Important:</span> The AI focuses strictly on administrative and patient communication tasks, not medical advice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-12" />

        {/* Power Line */}
        <motion.div
          className="text-center py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xl md:text-2xl font-semibold text-white">
            If your front desk is overwhelmed with calls, scheduling, and patient queries {' '}
            <span className="text-emerald-400">this AI was built for you</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
