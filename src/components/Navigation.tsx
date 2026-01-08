import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '../lib/utils'

const navItems = [
    {
        label: 'Home',
        href: '#home',
    },
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Services',
        href: '#services',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
]
interface NavigationProps {
    onContactClick: () => void
}
export function Navigation({ onContactClick }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            })
            setIsMobileMenuOpen(false)
        }
    }
    return (
        <>
            <motion.nav
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
                    isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('#home')}
                            whileHover={{
                                scale: 1.05,
                            }}
                        >
                            <span className="h-10 w-10 bg-[#FDB913] rounded-sm flex items-center justify-center font-bold text-black text-xl">
                                B
                            </span>
                            <span className="text-white font-bold text-xl hidden sm:block">
                                Baruah EPC
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-gray-300 hover:text-[#FDB913] transition-colors font-medium text-sm uppercase tracking-wider"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button size="sm" onClick={onContactClick} className="ml-4">
                                Get Quote
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: '100%',
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: '100%',
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-[#0A1628] shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col h-full pt-24 px-6">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{
                                        opacity: 0,
                                        x: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-white hover:text-[#FDB913] transition-colors py-4 text-left text-lg font-medium border-b border-gray-800"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
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
                                }}
                                className="mt-8"
                            >
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        onContactClick()
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="w-full"
                                >
                                    Get Quote
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
