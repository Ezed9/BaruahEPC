import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { Button } from './ui/Button'

interface JoinTeamModalProps {
    isOpen: boolean
    onClose: () => void
}

export function JoinTeamModal({ isOpen, onClose }: JoinTeamModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        experience: '',
        organization: '',
        portfolioLink: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID for job applications
    const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

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
                    formType: 'Job Application',
                    ...formData,
                }),
            })

            if (response.ok) {
                setIsSubmitted(true)
                setTimeout(() => {
                    setIsSubmitted(false)
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        location: '',
                        role: '',
                        experience: '',
                        organization: '',
                        portfolioLink: '',
                        message: '',
                    })
                    onClose()
                }, 2000)
            } else {
                alert('Failed to send application. Please try again.')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            alert('Failed to send application. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Header */}
                            <div className="bg-[#0A1628] p-6 rounded-t-2xl relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    Join Our Team
                                </h2>
                                <p className="text-gray-400">
                                    We're always looking for passionate people to build with us.
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
                                            placeholder="Your full name"
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
                                            placeholder="your@email.com"
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
                                            placeholder="Your contact number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Current Location *
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="City, State"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Role You're Applying For *
                                        </label>
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                        >
                                            <option value="">Select role</option>
                                            <option value="Architect / Junior Architect">Architect / Junior Architect</option>
                                            <option value="Site Engineer">Site Engineer</option>
                                            <option value="Interior Designer">Interior Designer</option>
                                            <option value="Civil Supervisor">Civil Supervisor</option>
                                            <option value="Quantity Surveyor">Quantity Surveyor</option>
                                            <option value="Project Coordinator">Project Coordinator</option>
                                            <option value="Procurement / Materials">Procurement / Materials</option>
                                            <option value="Intern / Trainee">Intern / Trainee</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Experience Level *
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                        >
                                            <option value="">Select experience level</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="0-1 years">0-1 years</option>
                                            <option value="1-3 years">1-3 years</option>
                                            <option value="3-5 years">3-5 years</option>
                                            <option value="5-10 years">5-10 years</option>
                                            <option value="10+ years">10+ years</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Current Organization / College
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="Company or institution name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                            Portfolio / Resume Link
                                        </label>
                                        <input
                                            type="url"
                                            name="portfolioLink"
                                            value={formData.portfolioLink}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors"
                                            placeholder="Google Drive / Dropbox / Portfolio website link"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-[#0A1628] mb-2 uppercase tracking-wider">
                                        Why Do You Want to Join Us? *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB913] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us briefly about your skills, interests and what excites you about working with Baruah EPC & Group..."
                                    />
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center"
                                    >
                                        <p className="text-green-700 font-bold">
                                            ✓ Application sent successfully!
                                        </p>
                                        <p className="text-green-600 text-sm mt-1">
                                            We'll review your application and get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                        rightIcon={!isSubmitting ? <Send className="w-5 h-5" /> : undefined}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Apply Now'}
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
