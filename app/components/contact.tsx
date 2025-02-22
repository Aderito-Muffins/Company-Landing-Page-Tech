import { LinkedinIcon, Loader2Icon, TwitterIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import Discord from './icons/discord'
import FacebookIcon from './icons/facebook'
import InstagramIcon from './icons/instagram'
import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [state, handleSubmit] = useForm('xpzgladz')

    // Animações de aparição (de baixo para cima)
    const animateUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    }

    // Animação contínua para o formulário
    const formAnimation = {
        animate: {
            x: [0, 10, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        },
    }

    return (
        <section className='mx-auto mt-48 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row'>
            <motion.div
                className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'
                variants={animateUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                <div>
                    <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Entre{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            em{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Contato
                        </span>
                    </h1>
                </div>
                <p className='text-center text-lg text-muted-foreground lg:text-left'>
                    <span className='hidden lg:block'>
                        Se você tiver alguma dúvida, sugestão ou quiser discutir
                        potenciais colaborações, não hesite em entrar em
                        contato. Adoraríamos ouvir sua opinião!
                    </span>
                    <span className='block lg:hidden'>
                        Dúvidas, ideias ou colaborações? Entre em contato –
                        estamos à disposição!
                    </span>
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <div className='flex flex-col gap-4 lg:items-start'>
                        <a
                            href='https://www.linkedin.com/in/nader-ferjani/'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <LinkedinIcon className='h-6 w-6 text-primary' />{' '}
                            <span>MuffinsCorp</span>
                        </a>

                        <a
                            href='https://www.linkedin.com/in/nader-ferjani/'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FacebookIcon className='h-6 w-6 fill-primary' />{' '}
                            <span>MuffinsCorporation</span>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/nader-ferjani/'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <InstagramIcon className='h-6 w-6 fill-primary' />{' '}
                            <span>MuffinsCorp</span>
                        </a>

                        {/* Espaço e e-mail */}
                        <div className='mt-4'>
                            <a
                                href='mailto:contact@muffinscorp.com'
                                className='text-lg font-semibold text-primary'
                            >
                                contact@muffinscorp.com
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Formulário com animação contínua */}
            <motion.form
                onSubmit={handleSubmit}
                className='gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6 before:bg-gradient-to-br before:from-white/5 before:to-transparent'
                variants={formAnimation}
                animate='animate'
            >
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='name'
                    >
                        Nome Completo
                    </Label>
                    <Input
                        required
                        type='text'
                        id='name'
                        placeholder='Aderito Muffins'
                        name='fullname'
                        className='w-full'
                    />
                </div>
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='contact-email'
                    >
                        E-mail
                    </Label>
                    <Input
                        required
                        type='email'
                        placeholder='aderito.muffins@exemplo.com'
                        name='contact-email'
                        id='contact-email'
                        className='w-full'
                    />
                </div>
                <div className='grid w-full gap-1.5'>
                    <Label
                        htmlFor='message'
                        className='text-left text-muted-foreground'
                    >
                        Mensagem
                    </Label>
                    <Textarea
                        required
                        placeholder='Sua mensagem aqui...'
                        id='message'
                        name='message'
                    />
                </div>
                {!state.succeeded && (
                    <Button variant={'secondary'} disabled={state.submitting}>
                        {state.submitting && (
                            <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {state.submitting && 'Enviando'}
                        {!state.succeeded &&
                            !state.submitting &&
                            'Enviar mensagem'}
                    </Button>
                )}
                {state.succeeded && (
                    <Button
                        variant={'secondary'}
                        className='pointer-events-none'
                    >
                        Mensagem enviada!
                    </Button>
                )}
            </motion.form>
        </section>
    )
}

export default Contact
