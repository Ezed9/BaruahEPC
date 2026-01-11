
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Ruler, Truck, HardHat, ArrowRight } from 'lucide-react'

const epcItems = [
    {
        icon: Ruler,
        title: 'Engineering',
        description:
            'Architectural and structural consultancy, design development, working drawings, technical detailing, statutory drawings, approvals, coordination, and execution support.',
        color: 'bg-blue-500',
    },
    {
        icon: Truck,
        title: 'Procurement',
        description:
            'Material sourcing, vendor finalization, rate analysis, quantity take-offs, procurement planning, logistics coordination, and quality verification.',
        color: 'bg-[#FDB913]',
    },
    {
        icon: HardHat,
        title: 'Construction',
        description:
            'Complete on-site execution, project management, supervision, quality control, safety compliance, scheduling, and timely project delivery.',
        color: 'bg-orange-500',
    },
]

interface EPCProps {
    onLearnMoreClick: () => void
}

export function EPC({ onLearnMoreClick }: EPCProps) {
    return (
        <Section background="navy" id="epc">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#FDB913] font-bold tracking-widest uppercase text-sm block mb-4"
                >
                    Core Capabilities
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Comprehensive EPC Solutions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg"
                >
                    We integrate every stage of the project lifecycle to deliver seamless,
                    turnkey infrastructure solutions.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {epcItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-[#1A1F2E] p-8 rounded-xl border border-gray-800 hover:border-[#FDB913]/50 transition-colors"
                    >
                        <div
                            className={`w-14 h-14 rounded-lg ${item.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                            <item.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FDB913] transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {item.description}
                        </p>

                        <button
                            onClick={onLearnMoreClick}
                            className="flex items-center text-sm font-bold text-white group-hover:text-[#FDB913] transition-colors cursor-pointer w-full text-left"
                        >
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
