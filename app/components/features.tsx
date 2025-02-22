import React from 'react'
import {
    GlobeIcon,
    SmartphoneIcon,
    CodeIcon,
    CloudIcon,
    TrendingUpIcon,
    ShieldIcon,
    AtSignIcon,
    BoxIcon,
    ShoppingBagIcon,
} from 'lucide-react'
import { type FeatureCardProps } from '~/types/feature-card'
import FeatureCard from './feature-card'

const featuresData: FeatureCardProps[] = [
    {
        title: 'Desenvolvimento de Websites',
        description:
            'Transforme sua presença online com websites modernos, intuitivos e otimizados para SEO. Conquiste seu público com designs responsivos que se adaptam a qualquer dispositivo.',
        icon: <GlobeIcon size={28} className='spin-animation text-blue-500' />,
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
    },
    {
        title: 'Desenvolvimento de Aplicativos Móveis',
        description:
            'Leve sua marca para o bolso dos clientes! Desenvolvemos aplicativos móveis de alta performance, com designs cativantes e experiências de usuário imersivas.',
        icon: (
            <SmartphoneIcon
                size={28}
                className='spin-animation text-gray-500'
            />
        ),
        backgroundColor: 'from-gray-500/20 to-gray-500/5',
    },
    {
        title: 'Desenvolvimento de APIs',
        description:
            'Conecte sistemas, automatize processos e potencialize sua operação com APIs robustas, escaláveis e seguras. Integração perfeita, resultados extraordinários.',
        icon: <CodeIcon size={28} className='spin-animation text-yellow-500' />,
        backgroundColor: 'from-yellow-500/20 to-yellow-500/5',
    },
    {
        title: 'Configuração de DNS e Domínios',
        description:
            'Garanta a estabilidade e segurança do seu site com configurações de DNS e domínios feitas por especialistas. Sua presença online, sempre no ar!',
        icon: <CloudIcon size={28} className='spin-animation text-blue-500' />,
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
    },
    {
        title: 'Marketing Digital',
        description:
            'Impulsione sua marca com estratégias de marketing digital sob medida. Aumente visibilidade, engajamento e conversões com campanhas inteligentes e criativas.',
        icon: (
            <TrendingUpIcon
                size={28}
                className='spin-animation text-green-500'
            />
        ),
        backgroundColor: 'from-green-500/20 to-green-500/5',
    },
    {
        title: 'Testes e Segurança',
        description:
            'Proteja seu negócio com testes rigorosos e soluções de segurança avançadas. Garantimos a robustez e a confiabilidade dos seus sistemas e aplicativos.',
        icon: <ShieldIcon className='spin-animation text-red-500' />,
        backgroundColor: 'from-red-500/20 to-red-500/5',
    },
    {
        title: 'Design e Identidade Visual',
        description:
            'Destaque-se no mercado com designs únicos e uma identidade visual marcante. Transforme sua marca em uma referência de estilo e profissionalismo.',
        icon: <AtSignIcon className='spin-animation text-pink-500' />,
        backgroundColor: 'from-pink-500/20 to-pink-500/5',
    },
    {
        title: 'Plataformas Inovadoras',
        description:
            'Revolucione seu negócio com nossas plataformas exclusivas: Muffins Store para vendas online e MUFFINS e-Commerce para gestão completa de lojas virtuais. Tecnologia que impulsiona resultados!',
        icon: <BoxIcon size={28} className='spin-animation text-purple-500' />,
        backgroundColor: 'from-purple-500/20 to-purple-500/5',
    },
]

const Features = () => {
    return (
        <section className='mx-auto mt-48 max-w-7xl px-5'>
            <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            O FUTURO DO SEU NEGÓCIO COMEÇA AQUI
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Transforme{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Sua Visão{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Em Resultados{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Extraordinários
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    <span className='hidden lg:block'>
                        Na MUFFINS Corporation, não entregamos apenas soluções —
                        criamos experiências que impulsionam o crescimento, a
                        inovação e o sucesso do seu negócio. Descubra como
                        podemos transformar seus desafios em oportunidades
                        únicas.
                    </span>
                    <span className='block lg:hidden'>
                        Soluções que revolucionam, resultados que inspiram.
                        Conheça o poder da inovação com a MUFFINS Corporation.
                    </span>
                </p>
            </div>
            <div>
                <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                    {featuresData.map((feature, i) => (
                        <li key={i}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                backgroundColor={feature.backgroundColor}
                                icon={feature.icon}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features
