import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Target, Sparkles, Award } from 'lucide-react'
import targetGoal from '../assets/target-goal.jpg'
import profilePhoto from '../assets/profile-photo.png'

export function AboutVision() {
    return (
        <Section background="light">
            <div className="relative">
                {/* Ambient background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Section Label */}
                        <motion.div
                            className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-gradient-to-r from-[#FDB913]/10 to-[#0EA5E9]/10 rounded-full border border-[#FDB913]/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-4 h-4 text-[#FDB913]" />
                            <span className="text-[#0A1628] font-bold tracking-wider uppercase text-xs">
                                Our Mission & Vision
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-6 leading-[1.1]">
                            Transforming{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-[#0EA5E9] to-[#0EA5E9]/80 bg-clip-text text-transparent">
                                    Ideas
                                </span>
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-[#FDB913]/20 -z-10"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </span>
                            <br />
                            Into Trusted Structures
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                            At <span className="font-semibold text-[#0A1628]">Baruah EPC & Group</span>, we create seamless construction experiences that prioritize safety, quality, and your complete satisfaction. From concept to completion, we transform your vision into reality with precision and care.
                        </p>

                        {/* Value Props Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: Target, title: 'Client-Centric', desc: 'Tailored solutions' },
                                { icon: Award, title: 'Premium Quality', desc: 'Excellence guaranteed' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FDB913]/30 transition-all duration-300"
                                >
                                    <item.icon className="w-8 h-8 mb-3 text-[#FDB913] group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-[#0A1628] mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Founder Spotlight Section - Premium Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group"
                        >
                            {/* Glassmorphism Card */}
                            <div className="relative bg-gradient-to-br from-[#0A1628] via-[#0f2847] to-[#0A1628] rounded-3xl p-8 overflow-hidden shadow-2xl border border-white/10">
                                {/* Animated gradient overlay */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 50%, rgba(253, 185, 19, 0.1), transparent 70%)'
                                    }}
                                />

                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-2xl" />

                                {/* Grid pattern overlay */}
                                <div className="absolute inset-0 opacity-5" style={{
                                    backgroundImage: 'linear-gradient(#FDB913 1px, transparent 1px), linear-gradient(90deg, #FDB913 1px, transparent 1px)',
                                    backgroundSize: '50px 50px'
                                }} />

                                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                                    {/* Profile Photo with premium styling */}
                                    <div className="relative flex-shrink-0">
                                        {/* Animated rotating border */}
                                        <motion.div
                                            className="absolute -inset-1 rounded-full"
                                            style={{
                                                background: 'linear-gradient(45deg, #FDB913, #0EA5E9, #FDB913, #0EA5E9)',
                                                backgroundSize: '400% 400%'
                                            }}
                                            animate={{
                                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                            }}
                                            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                        />

                                        {/* Photo container */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#0A1628] shadow-2xl"
                                        >
                                            <img
                                                src={profilePhoto}
                                                alt="Tanmoy Baruah - Founder"
                                                className="w-full h-full object-cover object-top"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
                                        </motion.div>

                                        {/* Premium glow effect */}
                                        <div className="absolute -inset-3 bg-gradient-to-r from-[#FDB913]/30 to-[#0EA5E9]/30 rounded-full blur-2xl -z-10 opacity-75" />
                                    </div>

                                    {/* Founder Info */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
                                            Tanmoy Baruah
                                        </h3>
                                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                                            <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#FDB913]" />
                                            <p className="text-[#FDB913] font-semibold tracking-wide uppercase text-xs">
                                                Founder & Managing Director
                                            </p>
                                            <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#FDB913]" />
                                        </div>
                                        <blockquote className="text-gray-300/90 italic text-sm sm:text-base leading-relaxed border-l-2 border-[#FDB913]/50 pl-4">
                                            "Excellence is not just about what we build, but how we build it — with integrity, precision, and an unwavering commitment to our clients' dreams."
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image & Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Main Image Container with premium styling */}
                        <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                            {/* Image */}
                            <img
                                src={targetGoal}
                                alt="Construction Excellence"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-[#0A1628]/20 to-transparent" />

                            {/* Premium Floating Stat Card with Glassmorphism */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs"
                            >
                                {/* Glassmorphism background */}
                                <div className="relative backdrop-blur-xl bg-white/95 p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                                    {/* Accent bar */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FDB913] via-[#0EA5E9] to-[#FDB913]" />

                                    {/* Decorative element */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FDB913]/10 rounded-full blur-2xl" />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 mb-4 shadow-lg">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Label */}
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                            Target Goal
                                        </p>

                                        {/* Number */}
                                        <div className="flex items-baseline gap-2 mb-3">
                                            <p className="text-5xl font-bold bg-gradient-to-r from-[#0A1628] to-[#0A1628]/80 bg-clip-text text-transparent">
                                                100
                                            </p>
                                            <span className="text-3xl font-bold text-[#FDB913]">+</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Satisfied clients anchored in <span className="font-semibold text-[#0A1628]">trust</span> and enduring relationships
                                        </p>

                                        {/* Timeline badge */}
                                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#0EA5E9]/10 rounded-full border border-[#0EA5E9]/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
                                            <span className="text-xs font-medium text-[#0EA5E9]">FY 2026–2027</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements - Premium geometric shapes */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FDB913] to-[#FDB913]/50 -z-10 rounded-3xl opacity-80 blur-sm"
                            animate={{ rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-40 h-40 border-4 border-[#0EA5E9] -z-10 rounded-3xl opacity-60"
                            animate={{ rotate: [0, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
