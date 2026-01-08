import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    children?: React.ReactNode
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = '',
            variant = 'primary',
            size = 'md',
            isLoading,
            children,
            leftIcon,
            rightIcon,
            ...props
        },
        ref,
    ) => {
        const baseStyles =
            'inline-flex items-center justify-center font-bold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase text-sm rounded-md'
        const variants = {
            primary:
                'bg-[#FDB913] text-black hover:bg-[#E5A812] focus:ring-[#FDB913]',
            secondary: 'bg-white text-[#0A1628] hover:bg-gray-100 focus:ring-white',
            outline:
                'border-2 border-[#FDB913] text-[#FDB913] hover:bg-[#FDB913]/10 focus:ring-[#FDB913]',
            ghost: 'text-gray-300 hover:text-white hover:bg-white/10',
        }
        const sizes = {
            sm: 'h-9 px-4 text-xs',
            md: 'h-12 px-6',
            lg: 'h-14 px-8 text-base',
        }
        return (
            <motion.button
                ref={ref}
                whileHover={{
                    scale: 1.02,
                }}
                whileTap={{
                    scale: 0.98,
                }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children as React.ReactNode}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </motion.button>
        )
    },
)
Button.displayName = 'Button'
