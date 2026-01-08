import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { Button } from './ui/Button'
interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
        // Reset after 2 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                message: '',
            })
            onClose()
        }, 2000)
    }
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            y: 20,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="bg-[#0A1628] p-6 rounded-t-2xl relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Get a Project Quote
                                </h2>
                                <p className="text-gray-400">
                                    Tell us about your infrastructure needs
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="Company Name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                        Project Type *
                                    </label>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                    >
                                        <option value="">Select project type</option>
                                        <option value="industrial">Industrial Complex</option>
                                        <option value="infrastructure">
                                            Infrastructure Development
                                        </option>
                                        <option value="commercial">Commercial Building</option>
                                        <option value="residential">Residential Project</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                        Project Details *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project requirements, timeline, and budget..."
                                    />
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center"
                                    >
                                        <p className="text-green-700 font-bold">
                                            ✓ Message sent successfully!
                                        </p>
                                        <p className="text-green-600 text-sm mt-1">
                                            We'll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                        rightIcon={
                                            !isSubmitting ? <Send className="w-5 h-5" /> : undefined
                                        }
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                                    </Button>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
