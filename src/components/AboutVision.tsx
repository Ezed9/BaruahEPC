import { motion } from 'framer-motion'
import { Section } from './ui/Section'
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

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
                        Our mission is to turn <br />
                        <span className="text-[#0EA5E9]">
                            ideas into trusted structures.
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        At Baruah EPC & Group, our mission is to make every construction
                        experience seamless, safe, and tailored to your needs. We believe
                        in delivering high-quality, reliable services that bring joy and
                        satisfaction to our clients, all from the comfort of your home.
                        With a focus on safety, quality, and client-centric solutions, we
                        aim to transform your vision into reality with a happy and secure
                        outcome.
                    </p>

                    {/* Founder Spotlight Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative bg-gradient-to-br from-[#0A1628] via-[#0f2847] to-[#0A1628] rounded-2xl p-6 md:p-10 mb-8 overflow-hidden"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0EA5E9]/10 rounded-full blur-2xl" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                            {/* Profile Photo */}
                            <div className="relative flex-shrink-0">
                                {/* Animated border ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FDB913] via-[#0EA5E9] to-[#FDB913]"
                                    style={{ padding: '4px' }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                >
                                    <div className="w-full h-full rounded-full bg-[#0A1628]" />
                                </motion.div>

                                {/* Photo container */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#0A1628] shadow-2xl"
                                >
                                    <img
                                        src={profilePhoto}
                                        alt="Founder"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Subtle overlay for cohesion */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />
                                </motion.div>

                                {/* Glow effect */}
                                <div className="absolute -inset-2 bg-[#FDB913]/20 rounded-full blur-xl -z-10" />
                            </div>

                            {/* Founder Info */}
                            <div className="flex-1 text-center md:text-left">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                        Tanmoy Baruah
                                    </h3>
                                    <p className="text-[#FDB913] font-medium tracking-wide uppercase text-sm mb-4">
                                        Founder & Managing Director
                                    </p>
                                    <blockquote className="text-gray-300 italic text-base md:text-lg leading-relaxed">
                                        "Excellence is not just about what we build, but how we build it —
                                        with integrity, precision, and an unwavering commitment to our clients' dreams."
                                    </blockquote>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
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
