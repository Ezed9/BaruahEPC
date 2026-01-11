
import { motion } from 'framer-motion'
import { Section } from './ui/Section'
import { CheckCircle2 } from 'lucide-react'

const serviceCategories = [
    {
        title: 'Construction Services',
        items: [
            'Interior Construction',
            'Plumbing',
            'Electrical Work',
            'General Contracting',
        ],
    },
    {
        title: 'Procurement Services',
        items: ['Material Sourcing', 'Fixtures', 'Fittings'],
    },
    {
        title: 'Design and Consultancy',
        items: ['Architectural Design', 'Interior Design', 'Planning'],
    },
    {
        title: 'Labor and Workforce',
        items: ['Skilled Labor', 'Project Management'],
    },
    {
        title: 'Custom Solutions',
        items: ['Unique Client Needs', 'Special Requests'],
    },
]

interface ServicesProps {
    onServiceClick: () => void
}

export function Services({ onServiceClick }: ServicesProps) {
    return (
        <Section background="light" id="services">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#FDB913] font-bold tracking-widest uppercase text-sm block mb-4"
                >
                    Our Offerings
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6"
                >
                    Specialized Services
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={onServiceClick}
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-[#FDB913]"
                    >
                        <h3 className="text-xl font-bold text-[#0A1628] mb-6 pb-4 border-b border-gray-100">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.items.map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-[#FDB913] mr-3 flex-shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
