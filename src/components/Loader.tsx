import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export function Loader() {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 2
            })
        }, 20)
        return () => clearInterval(interval)
    }, [])
    return (
        <motion.div
            initial={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1628]"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#FDB913 1px, transparent 1px), linear-gradient(90deg, #FDB913 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Animated Construction Icon */}
                <div className="relative w-32 h-32 mb-8">
                    {/* Crane Base */}
                    <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 bg-[#FDB913]"
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: '80px',
                        }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                    />

                    {/* Crane Arm */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-20 h-2 bg-[#FDB913] origin-left"
                        style={{
                            top: '20px',
                        }}
                        initial={{
                            scaleX: 0,
                            rotate: -45,
                        }}
                        animate={{
                            scaleX: 1,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                    />

                    {/* Hook */}
                    <motion.div
                        className="absolute w-1 bg-[#FDB913]"
                        style={{
                            left: 'calc(50% + 40px)',
                            top: '22px',
                        }}
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: '30px',
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Building Blocks */}
                    <motion.div
                        className="absolute bottom-0 right-0 flex flex-col gap-1"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1,
                        }}
                    >
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="w-8 h-6 bg-[#0EA5E9] border-2 border-[#FDB913]"
                                initial={{
                                    y: -20,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 1 + i * 0.2,
                                    duration: 0.4,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Company Name */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.6,
                    }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-white mb-2">Baruah EPC</h1>
                    <p className="text-[#FDB913] text-sm uppercase tracking-widest">
                        Engineering Excellence
                    </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-[#FDB913]"
                        initial={{
                            width: '0%',
                        }}
                        animate={{
                            width: `${progress}%`,
                        }}
                        transition={{
                            duration: 0.1,
                        }}
                    />
                </div>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.8,
                    }}
                    className="text-white/50 text-sm mt-4"
                >
                    {progress}%
                </motion.p>
            </div>
        </motion.div>
    )
}
