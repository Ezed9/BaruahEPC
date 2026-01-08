
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { CheckCircle2 } from 'lucide-react'
export function AboutVision() {
    return (
        <Section background="light">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="h-1 w-12 bg-[#FDB913]"></span>
                        <span className="text-[#0A1628] font-bold tracking-widest uppercase text-sm">
                            Our Vision
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
                        Startup Agility with <br />
                        <span className="text-[#0EA5E9]">Enterprise Mindset</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Baruah EPC and Group was founded on a simple yet powerful premise:
                        India's infrastructure needs are evolving, and so should its
                        builders. We combine the speed and innovation of a modern startup
                        with the rigorous standards of established engineering firms.
                    </p>

                    <div className="space-y-4">
                        {[
                            'Pan-India execution capabilities',
                            'Technology-driven project management',
                            'Sustainable construction practices',
                            'Zero-compromise safety standards',
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2 + idx * 0.1,
                                }}
                                className="flex items-center space-x-3"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[#FDB913]" />
                                <span className="text-[#1A1F2E] font-medium">{item}</span>
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
                    className="relative"
                >
                    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                            alt="Modern Architecture"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0A1628]/20 mix-blend-multiply" />

                        {/* Floating Stat Card */}
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.6,
                            }}
                            className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-[#FDB913]"
                        >
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                Target Goal
                            </p>
                            <p className="text-3xl font-bold text-[#0A1628]">₹500 Cr+</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Project pipeline value aimed for FY 2025-26
                            </p>
                        </motion.div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FDB913] -z-10 rounded-tr-3xl opacity-50" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#0EA5E9] -z-10 rounded-bl-3xl opacity-50" />
                </motion.div>
            </div>
        </Section>
    )
}
