import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {t1, t2} from "../assets"
import { motion } from "framer-motion";
import { rightVariants } from "../../variants";
const teachers = [
  {
    id: 1,
    name: "Anubhav Tripathi",
    title: "Yoga Everyday with Anubhav Tripathi",
    subtitle: "12+ yrs of Yoga teaching to 12.7 million+ people",
    description:
      "Practical, impactful daily exercises and asanas create a thoughtful program for a healthy body and mind.",
    //image: t1, // change to your image path
    bgColor: "bg-blue-50 dark:bg-gray-800",
    highlights: [
      "CEO and Co-Founder",
      
      "Govt Certified Level 3 Yoga Instructor",
      "World Record Holder",
      "TedX Speaker",
    ],
  },
  {
    id: 2,
    name: "Dimple Verma",
    title: "Strength with Dimple Verma",
    subtitle: "High-energy dance fitness for joyful cardio",
    description:
      "Experience Zumba: a fun, high-energy dance fitness class designed for joyful cardio. Stay excited to exercise and come back for more.",
    //image: t2, // change to your image path
    bgColor: "bg-yellow-50 dark:bg-gray-800",
    highlights: [
      "COO and Co-Founder",
      "London Business School ’20",
      "Yoga Instructor",
      "Official ZUMBA Instructor",
      "Classical Dancer",
    ],
  },
];

const TeacherSection = () => {
  return (
    <section className="py-16 bg-gray-950 text-gray-100" id="trainers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-200 mb-12">
          Meet Your Trainer
        </h2>

        <motion.div
          initial="offscreen"
            whileInView={"onscreen"}
            variants={rightVariants}
        className="space-y-20">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`flex-1 p-6 rounded-2xl ${teacher.bgColor} flex items-center justify-center`}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="rounded-xl w-full max-w-md object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100">
                  {teacher.title}
                </h3>
                <p className="text-base text-gray-300 font-medium">
                  {teacher.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {teacher.description}
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 pt-2">
                  <a href="#" className="hover:text-blue-400">
                    <FaFacebook size={22} />
                  </a>
                  <a href="#" className="hover:text-pink-400">
                    <FaInstagram size={22} />
                  </a>
                  <a href="#" className="hover:text-blue-500">
                    <FaYoutube size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherSection;
