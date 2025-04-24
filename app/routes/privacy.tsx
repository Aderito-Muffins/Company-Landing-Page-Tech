import { type MetaFunction } from '@remix-run/node'
import Banner from '~/components/banner'
import Cms from '~/components/cms'
import Contact from '~/components/contact'
import FAQs from '~/components/faqs'
import Features from '~/components/services'
import Footer from '~/components/footer'
import Hero from '~/components/hero'
import Navbar from '~/components/navbar'
import Tech from '~/components/tech'
import Product from '~/components/product'
import InspirationalTexts from '~/components/textMessage'
import Team from '~/components/team'
import Teaser from '~/components/teaser'
import Terms from '~/components/terms'

import PrivacyPolicy from '~/components/privacy'

export const meta: MetaFunction = () => {
    return [
        { title: 'Muffins Corp.' },
        {
            name: 'description',
            content:
                'Muffins Corp. oferece soluções SaaS inovadoras e desenvolvimento de software personalizado para empresas. Melhore a produtividade, otimize operações e impulsione a inovação com nossas soluções. | Muffins Corp. provides cutting-edge SaaS solutions and custom software development for businesses. Improve productivity, optimize operations, and drive innovation with our solutions.',
        },
        {
            name: 'keywords',
            content:
                'soluções SaaS,Muffins Corp,Muffins AI, Muffins Store, Aderito Muffins,Muffins e-Commerce,chatBot, desenvolvimento de software personalizado, inovação empresarial, otimização de fluxo de trabalho, software baseado na nuvem, ferramentas de produtividade, decisões baseadas em dados, crescimento empresarial, ferramentas de eficiência, desenvolvimento de software, plataforma SaaS, fluxos de trabalho contínuos, eficiência empresarial, estratégias de crescimento, soluções na nuvem, software empresarial, soluções tecnológicas, transformação digital | SaaS solutions, custom software development, business innovation, workflow optimization, cloud-based software, productivity tools, data-driven decisions, business growth, efficiency tools, software development, SaaS platform, seamless workflows, business efficiency, growth strategies, cloud solutions, enterprise software, technology solutions, digital transformation.',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'Muffins Corp.',
        },
        {
            tagName: 'link',
            rel: 'shortcut icon',
            href: '/favicon.ico',
            type: 'image/x-icon',
        },
        {
            tagName: 'link',
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
        },
        {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
        },
        {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest',
        },
        {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#5bbad5',
        },
        {
            name: 'msapplication-TileColor',
            content: '#da532c',
        },
        {
            name: 'theme-color',
            content: '#000000',
        },
        {
            property: 'og:title',
            content:
                'Muffins Corp. - Soluções SaaS e Software Personalizado para Empresas | Muffins Corp. - SaaS Solutions and Custom Software for Businesses',
        },
        {
            property: 'og:description',
            content:
                'Descubra como a Muffins Corp. pode ajudar a otimizar suas operações, melhorar a produtividade e impulsionar a inovação com nossos serviços de desenvolvimento de software e soluções SaaS. | Discover how Muffins Corp. can help you streamline operations, enhance productivity, and drive innovation with our custom software development and SaaS solutions.',
        },
        {
            property: 'og:image',
            name: 'og:image',
            content: 'https://muffinscorp.com/muffins-og-image.png',
        },
        {
            property: 'og:url',
            content: 'https://muffinscorp.com/',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content:
                'Muffins Corp. - Soluções SaaS e Software Personalizado para Empresas | Muffins Corp. - SaaS Solutions and Custom Software for Businesses',
        },
        {
            name: 'twitter:description',
            content:
                'Descubra como a Muffins Corp. pode ajudar a otimizar suas operações, melhorar a produtividade e impulsionar a inovação com nossos serviços de desenvolvimento de software e soluções SaaS. | Discover how Muffins Corp. can help you streamline operations, enhance productivity, and drive innovation with our custom software development and SaaS solutions.',
        },
        {
            name: 'twitter:image',
            content: 'https://muffinscorp.com/muffins-og-image.png',
        },
        {
            name: 'twitter:url',
            content: 'https://muffinscorp.com/',
        },
        {
            name: 'twitter:domain',
            content: 'muffinscorp.com',
        },
    ]
}

export default function Index() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
        
                <Navbar />
                {/* <Hero /> */}
                <PrivacyPolicy />
                <Footer />
 
        </div>
    )
}
