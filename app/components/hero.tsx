import { useForm } from '@formspree/react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Loader2Icon, MoveRightIcon } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import useTheme from '~/hooks/use-theme'

const Hero = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')
    const [theme] = useTheme()
    const contactRef = useRef(null)

    const scrollToBottom = (e: React.MouseEvent) => {
        e.preventDefault() // Impede o envio do formulário

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }

    return (
        <main className='mx-auto my-10 flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center gap-6 px-5 text-center lg:my-0'>
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'
            >
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    Transformando{' '}
                </span>
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    Ideias{' '}
                </span>
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    em{' '}
                </span>
                <motion.span
                    initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 10,
                        delay: 0.3,
                    }}
                    className={cn(
                        'relative inline-block bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl',
                        theme === 'orange' && 'to-rose-600',
                        theme === 'blue' && 'to-purple-600',
                        theme === 'green' && 'to-emerald-600',
                        theme === 'red' && 'to-rose-600',
                        theme === 'yellow' && 'to-yellow-600',
                        theme === 'violet' && 'to-violet-600',
                        theme === 'gray' && 'to-gray-600',
                        theme === 'neutral' && 'to-neutral-600',
                        theme === 'slate' && 'to-slate-600',
                        theme === 'stone' && 'to-stone-600',
                        theme === 'zinc' && 'to-zinc-600',
                        theme === 'rose' && 'to-pink-600'
                    )}
                >
                    <span className='absolute -left-2 -top-2 h-2 w-2 animate-ping rounded-full bg-primary'></span>
                    Realidade.
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                        className='absolute bottom-0 left-0 h-1 bg-primary'
                    />
                </motion.span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className='text-base text-muted-foreground lg:text-lg'
            >
                Na Muffins Corp, não apenas imaginamos o futuro — nós o
                construímos. Conecte-se com a inovação que transforma desafios
                em oportunidades e ideias em resultados extraordinários.
            </motion.p>
            <motion.form
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className='mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2'
            >
                <div className='flex w-full max-w-sm flex-col items-start gap-1.5'>
                    <label
                        className='text-left text-muted-foreground'
                        htmlFor='email'
                    >
                        Pronto para revolucionar seu negócio?
                    </label>
                </div>

                <Button
                    onClick={scrollToBottom}
                    className='flex w-full justify-between'
                >
                    Junte-se à Revolução
                    <MoveRightIcon className='h-4 w-4' />
                </Button>
            </motion.form>
        </main>
    )
}

export default Hero
