
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Zap, Shield, Users, BarChart3 } from 'lucide-react'
const reasons = [
    {
        icon: Zap,
        title: 'Modern Execution',
        description:
            'Leveraging the latest construction tech and lean methodologies to reduce timelines.',
    },
    {
        icon: Shield,
        title: 'Transparent Process',
        description:
            'Complete visibility into project milestones, costs, and material sourcing.',
    },
    {
        icon: Users,
        title: 'Skilled Professionals',
        description:
            'A team of veteran engineers and dynamic project managers dedicated to excellence.',
    },
    {
        icon: BarChart3,
        title: 'Data-Driven',
        description:
            'Using analytics to optimize resource allocation and predict project outcomes.',
    },
]
export function WhyChooseUs() {
    return (
        <Section background="dark" className="border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="flex flex-col justify-center"
                >
                    <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm mb-4">
                        Why Baruah EPC
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Redefining Construction Standards
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        In an industry often slowed by tradition, we bring a fresh, agile
                        perspective. We don't just build structures; we build trust through
                        transparency and performance.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
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
                                    delay: 0.2 + index * 0.1,
                                }}
                                className="bg-[#0A1628] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                            >
                                <reason.icon className="w-8 h-8 text-[#0EA5E9] mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-gray-400">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="relative h-full min-h-[500px] rounded-2xl overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                        alt="Engineer with tablet"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="bg-[#FDB913] p-6 rounded-lg max-w-md">
                            <p className="text-black font-bold text-lg italic">
                                "Our mission is to be the most reliable partner in India's
                                infrastructure growth story."
                            </p>
                            <p className="text-black/70 font-semibold mt-4 text-sm uppercase tracking-wider">
                                — Founder's Vision
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
