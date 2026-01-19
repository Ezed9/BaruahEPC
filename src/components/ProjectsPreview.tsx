
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { Building2, Hammer, Landmark, Clock, Sparkles, ArrowRight } from 'lucide-react'

const projects = [
    {
        title: 'Premium Residential Complex',
        category: 'Residential',
        description: 'Luxury living spaces with modern amenities',
        icon: Building2,
        gradient: 'from-blue-500 via-cyan-500 to-teal-500',
        accentColor: '#0EA5E9',
    },
    {
        title: 'Commercial Infrastructure Hub',
        category: 'Commercial',
        description: 'State-of-the-art business facilities',
        icon: Landmark,
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        accentColor: '#A855F7',
    },
    {
        title: 'Industrial Development Zone',
        category: 'Industrial',
        description: 'Advanced manufacturing and logistics',
        icon: Hammer,
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        accentColor: '#F59E0B',
    },
]

export function ProjectsPreview() {
    return (
        <Section background="dark">
            <div className="relative">
                {/* Ambient Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-[#FDB913]/20 to-[#0EA5E9]/20 rounded-full border border-[#FDB913]/30 backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-[#FDB913]" />
                        <span className="text-white font-bold tracking-wider uppercase text-sm">
                            Upcoming Projects
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Exciting Projects
                        <span className="block mt-2 bg-gradient-to-r from-[#FDB913] via-[#0EA5E9] to-[#FDB913] bg-clip-text text-transparent">
                            Coming Soon
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        We're preparing something extraordinary. Stay tuned for our upcoming ventures in construction excellence.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Main Card */}
                            <div className="relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
                                {/* Animated gradient background */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                    style={{ backgroundSize: '200% 200%' }}
                                />

                                {/* Grid pattern overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage: `linear-gradient(${project.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)`,
                                        backgroundSize: '30px 30px'
                                    }}
                                />

                                {/* Content Container */}
                                <div className="relative h-full flex flex-col p-8">
                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                            <div className="w-2 h-2 rounded-full bg-[#FDB913] animate-pulse" />
                                            <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Coming Soon Badge */}
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80 shadow-lg shadow-[#FDB913]/50"
                                        >
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5 text-[#0A1628]" />
                                                <span className="text-[#0A1628] text-xs font-bold uppercase">Soon</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Icon Section */}
                                    <div className="flex-1 flex items-center justify-center my-8">
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative"
                                        >
                                            {/* Glow effect */}
                                            <div
                                                className="absolute inset-0 rounded-3xl blur-2xl opacity-50"
                                                style={{ backgroundColor: project.accentColor }}
                                            />

                                            {/* Icon container */}
                                            <div
                                                className="relative w-32 h-32 rounded-3xl flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
                                            >
                                                <project.icon
                                                    className="w-16 h-16 text-white drop-shadow-lg"
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[#FDB913] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Bottom Action */}
                                    <motion.div
                                        className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-[#FDB913] transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-sm font-medium">Learn More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                {/* Decorative corner elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />
                            </div>

                            {/* Outer glow on hover */}
                            <div
                                className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${project.accentColor}40, transparent)`
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FDB913] to-[#0EA5E9] border-2 border-[#0A1628] flex items-center justify-center text-white font-bold text-sm"
                                    >
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">3 More Projects</p>
                                <p className="text-gray-400 text-sm">In Development</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md">
                            Watch this space for more exciting announcements. We're building the future of infrastructure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
