import { cn } from '~/lib/utils'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

interface TeamCardProps {
    name: string
    position: string
    description: string
    avatar: JSX.Element
    backgroundColor: string
    linkedin: string
    instagram: string
}

const TeamCard = ({
    name,
    position,
    description,
    avatar,
    backgroundColor,
    linkedin,
    instagram,
}: TeamCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className={cn(
                'gradient-border relative flex max-w-sm flex-col gap-5 rounded-md bg-gradient-to-b via-transparent p-5 text-center before:bg-gradient-to-b before:to-transparent md:bg-gradient-to-br md:text-left md:before:bg-gradient-to-br',
                backgroundColor,
                'group' // Adicionando a classe 'group' para controlar a visibilidade dos ícones com hover
            )}
        >
            <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={cn(
                    'gradient-border relative mx-auto inline-flex items-center justify-center rounded-full bg-gradient-to-b to-transparent before:bg-gradient-to-b before:via-transparent before:to-transparent md:ml-0 md:bg-gradient-to-br md:before:bg-gradient-to-br',
                    backgroundColor,
                    'h-28 w-28 border-4 border-primary/60 shadow-xl' // Aumentando o tamanho e aplicando borda e sombra
                )}
            >
                {avatar}
            </motion.span>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='flex flex-col gap-3'
            >
                <h2 className='scroll-m-20 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent'>
                    {name}
                </h2>
                <h3 className='text-lg font-medium text-muted-foreground'>
                    {position}
                </h3>
                <p className='text-muted-foreground'>{description}</p>
                {/* Ícones de LinkedIn e Instagram no canto superior direito */}
                <div className='absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <a
                        href={linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mr-2 text-primary hover:text-primary/70'
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href={instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary hover:text-primary/70'
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default TeamCard
