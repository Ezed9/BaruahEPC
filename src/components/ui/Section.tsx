
import { cn } from '../../lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string
    containerClassName?: string
    id?: string
    background?: 'dark' | 'light' | 'navy'
}
export function Section({
    children,
    className = '',
    containerClassName = '',
    id,
    background = 'light',
    ...props
}: SectionProps) {
    const bgColors = {
        dark: 'bg-[#1A1F2E] text-white',
        navy: 'bg-[#0A1628] text-white',
        light: 'bg-white text-[#0A1628]',
    }
    return (
        <section
            id={id}
            className={cn(
                'py-20 md:py-32 relative overflow-hidden',
                bgColors[background],
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    )
}
