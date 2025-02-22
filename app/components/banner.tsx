import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import saasstellar from '../assets/saasstellar.svg'
import { useForm } from '@formspree/react'
import { Loader2Icon } from 'lucide-react'
import Saastellar from './icons/saasstellar'
import { cn } from '~/lib/utils'
import useTheme from '~/hooks/use-theme'
import { motion } from 'framer-motion'

const Banner = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')
    const [theme] = useTheme()

    return (
        <motion.section
            className='relative mt-48 flex flex-col items-center justify-between gap-10 bg-gradient-to-br from-primary/20 via-transparent to-primary/20'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className='h-[1px] w-full bg-gradient-to-r from-primary to-transparent'></div>
            <div className='relative w-full max-w-7xl px-5'>
                <div className='flex justify-between'>
                    <div className='mx-auto flex max-w-2xl flex-col gap-6 lg:mx-0'>
                        <div>
                            <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    Eleve{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    seu{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    negócio{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    a{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    outro{' '}
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                                    patamar
                                </span>
                            </h1>
                        </div>
                        <p className='text-center text-lg text-muted-foreground lg:text-left'>
                            Na MUFFINS Corporation, transformamos ideias em
                            realidade com soluções tecnológicas que impulsionam
                            resultados. Seu sucesso é nossa missão!
                        </p>
                    </div>

                    <motion.div
                        className='absolute -bottom-10 right-5 hidden w-48 lg:block'
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Saastellar
                            linearFrom='text-primary'
                            linearTo={cn(
                                'text-primary',
                                theme === 'zinc' && 'text-zinc-600',
                                theme === 'slate' && 'text-slate-600',
                                theme === 'stone' && 'text-stone-600',
                                theme === 'gray' && 'text-gray-600',
                                theme === 'neutral' && 'text-neutral-600',
                                theme === 'red' && 'text-red-600',
                                theme === 'rose' && 'text-pink-600',
                                theme === 'orange' && 'text-rose-600',
                                theme === 'green' && 'text-emerald-600',
                                theme === 'blue' && 'text-purple-600',
                                theme === 'yellow' && 'text-yellow-600',
                                theme === 'violet' && 'text-violet-600'
                            )}
                        />
                    </motion.div>
                </div>
            </div>
            <div className='h-[1px] w-full bg-gradient-to-l from-primary to-transparent'></div>
        </motion.section>
    )
}

export default Banner
