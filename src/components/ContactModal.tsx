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
        state: '',
        city: '',
        projectType: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    // Formspree Form ID for Quote/Contact requests
    const FORMSPREE_ID = 'mzddryen'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    state: formData.state,
                    city: formData.city,
                    projectType: formData.projectType,
                    message: formData.message,
                }),
            })

            if (response.ok) {
                setIsSubmitted(true)
                // Reset after 2 seconds
                setTimeout(() => {
                    setIsSubmitted(false)
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        state: '',
                        city: '',
                        projectType: '',
                        message: '',
                    })
                    onClose()
                }, 2000)
            } else {
                alert('Failed to send message. Please try again.')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            alert('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
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
                                            placeholder="8811090483"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            State *
                                        </label>
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                        >
                                            <option value="">Select State</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Puducherry">Puducherry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            City *
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="Enter your city"
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
                                        <option value="">Select service type</option>
                                        <option value="construction">Construction Services (Interior, Plumbing, Electrical, Contracting)</option>
                                        <option value="procurement">Procurement Services (Material Sourcing, Fixtures, Fittings)</option>
                                        <option value="design">Design & Consultancy (Architectural, Interior Design, Planning)</option>
                                        <option value="labor">Labor & Workforce (Skilled Labor, Project Management)</option>
                                        <option value="custom">Custom Solutions (Unique Needs, Special Requests)</option>
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
