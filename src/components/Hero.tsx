
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
interface HeroProps {
    onContactClick: () => void
}
export function Hero({ onContactClick }: HeroProps) {
    const scrollToServices = () => {
        const element = document.querySelector('#services')
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{
                        scale: 1.1,
                    }}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeOut',
                    }}
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Construction Site"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                    className="max-w-4xl"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }}
                        className="flex items-center space-x-2 mb-6"
                    >
                        <motion.span
                            className="h-1 w-12 bg-[#FDB913]"
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: '3rem',
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 0.6,
                            }}
                        />
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm">
                            Baruah EPC & Group
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 tracking-tight"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                        }}
                    >
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Infrastructure
                        </span>{' '}
                        <br />
                        of Tomorrow.
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8,
                        }}
                    >
                        Engineering excellence meets startup agility. We deliver large-scale
                        EPC solutions with precision, innovation, and unwavering reliability
                        across India.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8,
                        }}
                    >
                        <Button
                            size="lg"
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                            onClick={onContactClick}
                        >
                            Get a Consultation
                        </Button>
                        <Button variant="outline" size="lg" onClick={scrollToServices}>
                            View Capabilities
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 1,
                }}
                onClick={() => {
                    const element = document.querySelector('#about')
                    if (element)
                        element.scrollIntoView({
                            behavior: 'smooth',
                        })
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer hover:text-white/80 transition-colors"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                    }}
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.button>
        </div>
    )
}
