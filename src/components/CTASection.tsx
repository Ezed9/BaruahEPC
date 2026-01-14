
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { MessageSquare, Phone, MessageCircle } from 'lucide-react'
interface CTASectionProps {
    onContactClick: () => void
}
export function CTASection({ onContactClick }: CTASectionProps) {
    const handlePhoneClick = () => {
        window.location.href = 'tel:+918811090483'
    }

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918486574602', '_blank')
    }
    return (
        <section className="py-24 bg-[#FDB913] relative overflow-hidden">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 L100 0 L100 100 Z" fill="black" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
                            Ready to Build the Future?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                            Ready to start your project? Contact us at{' '}
                            <span className="font-bold">+91 8811090483</span>,{' '}
                            <span className="font-bold">+91 8486574602 (WhatsApp)</span> or{' '}
                            <span className="font-bold">baruahepc@gmail.com</span>
                        </p>
                        <p className="text-xl text-[#0A1628]/80 font-medium">
                            Let's discuss your next infrastructure project. We bring the
                            expertise, you bring the vision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
                    >
                        <Button
                            size="lg"
                            className="bg-[#0A1628] text-white hover:bg-black w-full sm:w-auto"
                            leftIcon={<MessageSquare className="w-5 h-5" />}
                            onClick={onContactClick}
                        >
                            Get a Quote
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628]/10 w-full sm:w-auto"
                            leftIcon={<Phone className="w-5 h-5" />}
                            onClick={handlePhoneClick}
                        >
                            +91 8811090483
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628]/10 w-full sm:w-auto"
                            leftIcon={<MessageCircle className="w-5 h-5" />}
                            onClick={handleWhatsAppClick}
                        >
                            WhatsApp
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
