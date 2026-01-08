
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Ruler, Truck, HardHat, ArrowRight } from 'lucide-react'
const services = [
    {
        icon: Ruler,
        title: 'Engineering',
        description:
            'Precision structural design, architectural planning, and feasibility studies using advanced BIM technology.',
        color: 'bg-blue-500',
    },
    {
        icon: Truck,
        title: 'Procurement',
        description:
            'Strategic sourcing of high-grade materials, supply chain management, and vendor coordination for cost efficiency.',
        color: 'bg-[#FDB913]',
    },
    {
        icon: HardHat,
        title: 'Construction',
        description:
            'End-to-end execution of infrastructure projects, from earthworks to finishing, with strict quality control.',
        color: 'bg-orange-500',
    },
]
export function Services() {
    return (
        <Section background="navy" id="services">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
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
                    className="text-[#FDB913] font-bold tracking-widest uppercase text-sm block mb-4"
                >
                    Core Capabilities
                </motion.span>
                <motion.h2
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
                        delay: 0.1,
                    }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Comprehensive EPC Solutions
                </motion.h2>
                <motion.p
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
                        delay: 0.2,
                    }}
                    className="text-gray-400 text-lg"
                >
                    We integrate every stage of the project lifecycle to deliver seamless,
                    turnkey infrastructure solutions.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.5,
                        }}
                        whileHover={{
                            y: -10,
                        }}
                        className="group relative bg-[#1A1F2E] p-8 rounded-xl border border-gray-800 hover:border-[#FDB913]/50 transition-colors"
                    >
                        <div
                            className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                            <service.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FDB913] transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="flex items-center text-sm font-bold text-white group-hover:text-[#FDB913] transition-colors cursor-pointer">
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
