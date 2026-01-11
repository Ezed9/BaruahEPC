import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { CheckCircle2 } from 'lucide-react'
import targetGoal from '../assets/target-goal.jpg'
import profilePhoto from '../assets/profile-photo.png'

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
                            Our Mission
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
                                Our mission is to turn <br />
                                <span className="text-[#0EA5E9]">
                                    ideas into trusted structures.
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At Baruah EPC & Group, our mission is to make every construction
                                experience seamless, safe, and tailored to your needs. We believe
                                in delivering high-quality, reliable services that bring joy and
                                satisfaction to our clients, all from the comfort of your home.
                                With a focus on safety, quality, and client-centric solutions, we
                                aim to transform your vision into reality with a happy and secure
                                outcome.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                src={profilePhoto}
                                alt="Founder"
                                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg border-4 border-white shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300"
                            />
                        </div>
                    </div>

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
                            src={targetGoal}
                            alt="Target Goal"
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
                            <p className="text-3xl font-bold text-[#0A1628]">100+</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Satisfied clients anchored in trust and enduring relationships —
                                FY 2026–2027
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
