import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion'
import ChatMessage from './icons/chat-message'
import DotPattern from './dot-pattern'
import { cn } from '~/lib/utils'
import { buttonVariants } from './ui/button'

const faqs = [
    {
        question: 'Quais serviços a Muffins Corp. oferece?',
        answer: 'Oferecemos desenvolvimento de software personalizado, marketing digital, análise de dados, testes de segurança, design e identidade visual, além de soluções inovadoras para empresas de diferentes tamanhos.',
    },
    {
        question: 'A Muffins Corp. desenvolve plataformas sob demanda?',
        answer: 'Sim, criamos plataformas personalizadas que atendem às necessidades específicas de cada cliente, garantindo inovação e funcionalidade.',
    },
    {
        question: 'Quais plataformas a Muffins Corp. detém?',
        answer: 'A Muffins Corp. controla duas startups: a Muffins Store, uma plataforma de loja Online e MarketPlace e a Muffins e-Commerce Platform, uma plataforma de comércio eletrônico. Além dessas, também somos proprietários de outras soluções inovadoras.',
    },
    {
        question: 'Como funciona o suporte oferecido pela Muffins Corp.?',
        answer: 'Nosso suporte está disponível para todos os clientes, garantindo assistência técnica, manutenção contínua e atualizações conforme necessário.',
    },
    {
        question:
            'Posso integrar as soluções da Muffins Corp. aos sistemas da minha empresa?',
        answer: 'Sim, nossas soluções são projetadas para integração com sistemas já existentes, otimizando operações e garantindo eficiência.',
    },
    {
        question: 'Quais são as áreas de atuação da Muffins Corp.?',
        answer: 'Atuamos em diversos setores, incluindo desenvolvimento de software, marketing digital, consultoria em segurança cibernética, design gráfico e gerenciamento de dados.',
    },
    {
        question: 'Como posso começar um projeto com a Muffins Corp.?',
        answer: 'Entre em contato conosco através do nosso site ou e-mail. Faremos uma análise detalhada de suas necessidades e elaboraremos a melhor solução personalizada para o seu negócio.',
    },
    {
        question: 'Há planos de expansão para novas plataformas?',
        answer: 'Sim, estamos constantemente explorando novas oportunidades e desenvolvendo soluções inovadoras para atender às demandas do mercado.',
    },
]

const FAQs = () => {
    return (
        <section className='relative mx-auto px-5 pb-8 pt-48'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>FAQs</span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Perguntas{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            frequentes
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Não encontrou o que procura?{' '}
                    <a
                        href='#contato'
                        className={cn(
                            buttonVariants({ variant: 'link' }),
                            'px-0 text-lg text-foreground'
                        )}
                    >
                        Entre em contato.
                    </a>
                </p>
                <div className='mt-20 flex items-center justify-between'>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
                        )}
                    />
                    <Accordion
                        collapsible
                        type='single'
                        className='mx-auto w-full max-w-4xl grow basis-28 text-left'
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='text-left text-xl hover:no-underline'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-base text-muted-foreground'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQs
