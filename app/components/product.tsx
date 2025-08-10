import { motion } from 'framer-motion'
import Saastellar from './icons/saasstellar'
import useTheme from '~/hooks/use-theme'
import { cn } from '~/lib/utils'
import muffinsAI from '../assets/muffinsai.png'
import muffinsEcom from '../assets/muffinse.png'
import muffinsAgents from '../assets/muffinsagents.png'

const Product = () => {
    const [theme] = useTheme()

    return (
        <motion.section
            className='relative flex min-h-screen flex-col items-center justify-center px-5 text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className='flex w-full max-w-4xl flex-col items-center gap-6'>
                <h1 className='font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                    Impulsione sua operação com tecnologia de verdade
                </h1>
                <p className='text-lg text-muted-foreground'>
                    Impulsione sua empresa com as plataformas inteligentes da
                    Muffins Corp. — automação, performance e inovação em um só
                    lugar.
                </p>

                <div className='mt-4 flex flex-col items-center'>
                    {/* Container para os dois primeiros itens (em cima) */}
                    <div className='flex flex-col justify-center gap-6 sm:flex-row'>
                        <a
                            href='https://ai.muffinscorp.com'
                            className='group flex items-center gap-3 rounded-xl border px-5 py-3 shadow transition hover:scale-105 hover:shadow-lg'
                        >
                            <img
                                src={muffinsAI}
                                alt='Muffins AI'
                                className='h-12 w-12 rounded-md object-contain transition duration-300 group-hover:scale-110'
                            />
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    Muffins AI
                                </h3>
                                <p className='text-sm text-muted-foreground'>
                                    Converse, integre e automatize com IA.
                                </p>
                            </div>
                        </a>
                        <a
                            href='https://agents.muffinscorp.com'
                            className='group flex items-center gap-3 rounded-xl border px-5 py-3 shadow transition hover:scale-105 hover:shadow-lg'
                        >
                            <img
                                src={muffinsAgents}
                                alt='Muffins Agents'
                                className='h-12 w-12 rounded-md object-contain transition duration-300 group-hover:scale-110'
                            />
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    Muffins Agents (BETA)
                                </h3>
                                <p className='text-sm text-muted-foreground'>
                                    Automatize tarefas jurídicas com IA.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Ícone animado à direita */}
            <motion.div
                className='absolute bottom-10 right-10 hidden lg:block'
                animate={{ y: [0, -10, 0] }}
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
        </motion.section>
    )
}

export default Product
