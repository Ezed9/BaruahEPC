
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { ArrowUpRight } from 'lucide-react'
const projects = [
    {
        title: 'Industrial Complex Phase 1',
        location: 'Guwahati, Assam',
        category: 'Industrial',
        image:
            'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Highway Bridge Expansion',
        location: 'Northeast Corridor',
        category: 'Infrastructure',
        image:
            'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Tech Park Foundation',
        location: 'Dispur, Assam',
        category: 'Commercial',
        image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
]
export function ProjectsPreview() {
    return (
        <Section background="light">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm block mb-2">
                        Portfolio
                    </span>
                    <h2 className="text-4xl font-bold text-[#0A1628]">
                        Featured Projects
                    </h2>
                </div>
                <button className="hidden md:flex items-center font-bold text-[#0A1628] hover:text-[#0EA5E9] transition-colors mt-4 md:mt-0">
                    View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
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
                        }}
                        className="group cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0A1628] uppercase tracking-wide">
                                {project.category}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#0A1628] group-hover:text-[#0EA5E9] transition-colors mb-1">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{project.location}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 md:hidden text-center">
                <button className="inline-flex items-center font-bold text-[#0A1628]">
                    View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
                </button>
            </div>
        </Section>
    )
}
