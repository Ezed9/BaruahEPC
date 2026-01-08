
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Award, TrendingUp } from 'lucide-react'
const features = [
    {
        icon: ShieldCheck,
        text: 'Quality Assurance',
    },
    {
        icon: Clock,
        text: 'Timely Delivery',
    },
    {
        icon: Award,
        text: 'Engineering Excellence',
    },
    {
        icon: TrendingUp,
        text: 'Scalable Solutions',
    },
]
export function TrustStrip() {
    return (
        <div className="bg-[#FDB913] py-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                            }}
                            className="flex items-center justify-center md:justify-start space-x-3"
                        >
                            <feature.icon className="w-6 h-6 text-black stroke-[2.5]" />
                            <span className="font-bold text-black uppercase tracking-wide text-sm md:text-base">
                                {feature.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
