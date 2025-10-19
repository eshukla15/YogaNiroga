import React from "react";
import { motion } from "framer-motion";
import { FaSpa, FaLeaf, FaHeartbeat, FaOm } from "react-icons/fa";

const services = [
  {
    title: "Hatha Yoga",
    description:
      "A traditional form focusing on posture and breathing for strength and flexibility.",
    icon: <FaSpa className="text-4xl text-primary" />,
  },
  {
    title: "Meditation & Mindfulness",
    description:
      "Calm your mind, reduce stress, and improve focus through guided meditation sessions.",
    icon: <FaOm className="text-4xl text-primary" />,
  },
  {
    title: "Pranayama (Breath Work)",
    description:
      "Control your life energy through rhythmic breathing techniques for inner peace.",
    icon: <FaLeaf className="text-4xl text-primary" />,
  },
  {
    title: "Wellness Programs",
    description:
      "Personalized yoga and diet plans crafted to balance body, mind, and spirit.",
    icon: <FaHeartbeat className="text-4xl text-primary" />,
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-background text-foreground py-20 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-10"
        >
          Our <span className="text-primary">Services</span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow border border-border"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
