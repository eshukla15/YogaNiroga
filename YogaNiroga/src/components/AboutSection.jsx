import { leftVariants, rightVariants } from '../../variants';
import { features } from '../constants';
import styles, { layout } from '../style';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, content, index }) => (
<div className={`flex flex-row p-6 border-2 rounded-[20px] ${index !== features.length - 1? "mb-6" : "mb-0"}
feature-card` }>
<div className={`w-[65px] h-[65px] rounded-full ${styles.flexCenter} bg-dimBlue` }>
<img
src={icon}
alt='icon'
className='w-[50%] h-[50%] object-contain'
/>
</div>
<div className='flex-1 flex flex-col ml-3'>
<h4>
{title}
</h4>
<p>
{content}
</p>
</div>
</div>
)

export const AboutSection = () => (
    <section id="features" className={layout.section}>
        <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={rightVariants} 
        className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} max-w-[575px] mt-5`}>
        Why you should,<br className='sm:block hidden '></br> Go To <span className="bg-clip-text text-transparent  tracking-tight bg-gradient-to-r from-green-500 via-green-600 to-green-400">YogaNiroga</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[575px] mt-5`}>
            Our experienced instructors provide personalized guidance based on specific ailments and fitness objectives, ensuring each practice is safe, effective, and enjoyable. Whether you're a beginner or an experienced yogi, we offer virtual classes that focus on stress relief, flexibility, mindfulness, physical and mental health, and self-care. Join us today and experience the transformative power of yoga from the comfort of your own home.
        </p>
        </motion.div>
        <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={leftVariants}
            className={`${layout.sectionImg} flex-col` }>
{
features.map((feature, index) => (
<FeatureCard
key={feature.id} {...feature} index={index}
/>
))
}
</motion.div>
    </section>
)
export default AboutSection