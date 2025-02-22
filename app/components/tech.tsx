import React from 'react'
import { motion } from 'framer-motion'
import Drupal from '~/components/icons/drupal'
import Joomla from '~/components/icons/joomla'
import Notion from '~/components/icons/notion'
import Sanity from '~/components/icons/sanity'
import Storyblok from '~/components/icons/storyblok'
import Strapi from '~/components/icons/strapi'
import Wordpress from '~/components/icons/wordpress'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

const Tech = () => {
    const tech = [
        {
            component: <Drupal height={42} width={42} />,
            name: 'Firebase',
        },
        {
            component: <Joomla height={42} width={42} />,
            name: 'Node JS',
        },
        {
            component: <Notion height={42} width={42} />,
            name: 'PostgreSQL',
        },
        {
            component: <Sanity height={42} width={42} />,
            name: 'React JS',
        },
        {
            component: <Storyblok height={42} width={42} />,
            name: 'Github',
        },
        {
            component: <Wordpress height={42} width={42} />,
            name: 'Next',
        },
        {
            component: <Strapi height={42} width={42} />,
            name: 'Cloudflare',
        },
    ]

    return (
        <div className='mx-5 text-center'>
            <br />
            <br />
            <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-center text-sm font-medium text-primary dark:bg-primary/25'>
                <span className='text-center brightness-[1.7]'>
                    GRANDES SONHOS EXIGEM TECNOLOGIAS EXTRAORDINÁRIAS
                </span>
            </span>

            <br />
            <br />
            <p className='mb-8 text-center text-sm font-medium text-muted-foreground'>
                DESCUBRA AS FERRAMENTAS QUE VÃO TRANSFORMAR SUA VISÃO EM
                REALIDADE
            </p>
            <div className='mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground lg:gap-x-14'>
                {tech.map((item, index) => (
                    <React.Fragment key={item.name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger
                                    aria-label={item.name}
                                    className='cursor-default'
                                >
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: index * 0.3, // Atraso baseado na posição do ícone
                                        }}
                                    >
                                        {item.component}
                                    </motion.div>
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Tech
