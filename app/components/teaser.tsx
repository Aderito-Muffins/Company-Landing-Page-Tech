import { motion } from 'framer-motion'
import muffinsai from '../assets/muffinsaiallw.png'
import teaser from '../assets/teaser.mp4'
const Teaser = () => {
    return (
        <div>
            <div className='animate-fadeInOut h-[1px] w-full bg-gradient-to-r from-primary to-transparent'></div>

            <main className='relative mx-auto my-0 flex min-h-[60vh] w-full items-center justify-center'>
                {/* Container do vídeo */}
                <div className='relative h-[500px] w-full max-w-[800px]'>
                    {/* Vídeo Teaser */}
                    <video
                        className='absolute left-0 top-0 h-full w-full object-cover'
                        src={teaser} // Coloque o caminho do vídeo aqui
                        autoPlay
                        loop
                        muted
                    />
                    {/* Gradiente vertical à direita */}
                    {/* Gradiente vertical à direita com animação */}
                    <div className='animate-fadeInOut absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-primary to-transparent' />
                </div>
                {/* Gradiente suave ao redor do vídeo */}
                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black'></div>

                {/* Conteúdo sobre o vídeo */}
                <div className='relative z-10 px-5 text-center text-white'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className='mx-auto w-[200px]'
                    >
                        <img
                            src={muffinsai} // Substitua pelo caminho correto da sua logo
                            alt='Muffins AI Logo'
                            className='h-auto w-full'
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.2,
                        }}
                        className='mt-4 text-base lg:text-lg'
                    >
                        Conheça a inovação que está redefinindo a inteligência
                        artificial. Prepare-se para explorar o futuro com a
                        Muffins AI.
                    </motion.p>
                </div>
            </main>
            <div className='animate-fadeInOut h-[1px] w-full bg-gradient-to-l from-primary to-transparent'></div>
        </div>
    )
}

export default Teaser
