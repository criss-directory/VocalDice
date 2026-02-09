import { motion } from 'framer-motion';
import { Heart, Phone, Calendar, Activity } from 'lucide-react';

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

interface FacilityTypeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FacilityTypeCard = ({ icon, title, description }: FacilityTypeProps) => (
  <motion.div
    variants={fadeInUp}
    className="group relative bg-gradient-to-br from-emerald-900/15 to-teal-900/5 border border-emerald-500/30 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Content */}
    <div className="relative z-10">
      <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/10 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>

    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

export function MedicalBuiltForSection() {
  const facilityTypes = [
    {
      icon: <Heart className="w-5 h-5 text-emerald-400" />,
      title: "Multi-Specialty Clinics and Hospitals",
      description: "Facilities handling high daily patient inquiries across multiple departments and specialists."
    },
    {
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      title: "Medical and Diagnostic Centers",
      description: "Centers coordinating appointments for consultations, lab tests, and diagnostic procedures."
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      title: "Specialty Practices (Dental, Dermatology, Physiotherapy)",
      description: "Clinics where frequent appointment calls and follow-ups place heavy pressure on front-desk staff."
    },
    {
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
      title: "Imaging Centers and Laboratories",
      description: "Radiology, scan, and lab facilities managing large volumes of test bookings and patient queries."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-emerald-900/5 to-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32">
          <Phone className="w-full h-full text-emerald-400" strokeWidth={0.5} />
        </div>
        <div className="absolute top-1/3 right-20 w-40 h-40">
          <Calendar className="w-full h-full text-emerald-400" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36">
          <Activity className="w-full h-full text-emerald-400" strokeWidth={0.5} />
        </div>
      </div>

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
            Built for High-Volume Clinics,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Hospitals, and Diagnostic Centers
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-3xl mx-auto mb-2">
            Our AI medical receptionist is designed for healthcare facilities that manage large patient volumes, constant phone inquiries, and tight appointment schedules.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-500 text-sm">
            Ideal for healthcare providers in high-demand urban regions where patient call volume is constant.
          </motion.p>
        </motion.div>

        {/* Facility Type Cards - 2x2 Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {facilityTypes.map((facility, i) => (
            <FacilityTypeCard
              key={i}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </motion.div>

        {/* Power Line */}
        <motion.div
          className="text-center py-12 border-t border-emerald-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xl md:text-2xl font-semibold text-white">
            When your staff focus on{' '}
            <span className="text-emerald-400">patients instead of phones</span>, care quality and efficiency improve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
