import { cn } from '~/lib/utils'
import { type FeatureCardProps } from '~/types/feature-card'
import { motion } from 'framer-motion'

const FeatureCard = ({
    title,
    description,
    icon,
    backgroundColor,
}: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className={cn(
                'gradient-border relative flex max-w-sm flex-col gap-5 rounded-md bg-gradient-to-b via-transparent p-5 text-center before:bg-gradient-to-b before:to-transparent md:bg-gradient-to-br md:text-left md:before:bg-gradient-to-br',
                backgroundColor
            )}
        >
            <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={cn(
                    'gradient-border relative mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b to-transparent before:bg-gradient-to-b before:via-transparent before:to-transparent md:ml-0 md:bg-gradient-to-br md:before:bg-gradient-to-br',
                    backgroundColor
                )}
            >
                {icon}
            </motion.span>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='flex flex-col gap-3'
            >
                <h2 className='scroll-m-20 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent'>
                    {title}
                </h2>
                <p className='text-muted-foreground'>{description}</p>
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard
