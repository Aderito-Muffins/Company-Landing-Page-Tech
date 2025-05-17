import { type MetaFunction } from '@remix-run/node'
import Banner from '~/components/banner'
import Cms from '~/components/cms'
import Contact from '~/components/contact'
import FAQs from '~/components/faqs'
import Services from '~/components/services'
import Footer from '~/components/footer'
import Hero from '~/components/hero'
import Navbar from '~/components/navbar'
import Tech from '~/components/tech'
import Product from '~/components/product'
import InspirationalTexts from '~/components/textMessage'
import Team from '~/components/team'
import Teaser from '~/components/teaser'

export const meta: MetaFunction = () => {
    return [
        { title: 'Muffins Corp.' },
        {
            name: 'description',
            content:
                'Software inteligente para negócios que não aceitam o status quo. Desenvolvemos SaaS com AI, automação sem código e arquitetura cloud-native. Para quem quer resultados, não migalhas. | Tecnologia que escala, sem burocracia.',
        },
        {
            name: 'keywords',
            content:
                'SaaS com AI, automação sem código, Muffins Corp, cloud-native, low-code, software escalável, AI para negócios, integração de APIs, tecnologia sem burocracia, Muffins AI, Muffins Store, Muffins e-Commerce, chatbot inteligente, devops automatizado, deploy contínuo, software empresarial, transformação digital, eficiência operacional, plataforma SaaS, ferramentas de produtividade, dados em tempo real',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Muffins Corp.' },

        // Favicons & PWA (Modern Stack)
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
        { tagName: 'link', rel: 'manifest', href: '/site.webmanifest' },
        {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#5bbad5',
        },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#000000' },

        // Open Graph (Social SEO Elite)
        { property: 'og:title', content: 'Muffins Corp. | Tech que entrega' },
        {
            property: 'og:description',
            content:
                'Software inteligente para negócios que não aceitam o status quo. SaaS com AI, automação sem código e cloud-native. Resultados, não migalhas.',
        },
        {
            property: 'og:image',
            content: 'https://www.muffinscorp.com/og-muffins.png',
        },
        { property: 'og:url', content: 'https://www.muffinscorp.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },

        // Twitter/X Cards (Optimized for Engagement)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Muffins Corp. | Tech que entrega' },
        {
            name: 'twitter:description',
            content:
                'Para negócios que não aceitam o status quo. SaaS com AI, automação sem código e arquitetura cloud-native. #TechSemBurocracia',
        },
        {
            name: 'twitter:image',
            content: 'https://www.muffinscorp.com/twitter-card.jpg',
        },
        { name: 'twitter:site', content: '@MuffinsCorp' },
        { name: 'twitter:creator', content: '@MuffinsCorp' },
    ]
}

export default function Index() {
    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <Navbar />
            <Hero />

            {/* <Cms /> */}
            {/* <InspirationalTexts /> */}
            <Teaser />
            <Product />
            <Services />
            <Tech />
            <Banner />
            <Team />
            <FAQs />
            <Contact />
            <Footer />
        </div>
    )
}
