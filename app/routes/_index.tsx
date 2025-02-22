import { type MetaFunction } from '@remix-run/node'
import Banner from '~/components/banner'
import Cms from '~/components/cms'
import Contact from '~/components/contact'
import FAQs from '~/components/faqs'
import Features from '~/components/features'
import Footer from '~/components/footer'
import Hero from '~/components/hero'
import Navbar from '~/components/navbar'
import Tech from '~/components/tech'
import InspirationalTexts from '~/components/textMessage'

export const meta: MetaFunction = () => {
    return [
        { title: 'MUFFINS Corporation' },
        {
            name: 'description',
            content:
                'Empowering businesses with cutting-edge SaaS solutions and custom software development. Streamline operations, enhance productivity, and drive innovation with MUFFINS Corporation.',
        },
        {
            name: 'keywords',
            content:
                'SaaS solutions, custom software development, business innovation, workflow optimization, cloud-based software, productivity tools, data-driven decisions, business growth, efficiency tools, software development, SaaS platform, seamless workflows, business efficiency, growth strategies, cloud solutions, enterprise software, technology solutions, digital transformation',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'MUFFINS Corporation',
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
            content: '#ffffff',
        },
        {
            property: 'og:title',
            content:
                'MUFFINS Corporation - Empowering Businesses with SaaS and Custom Software Solutions',
        },
        {
            property: 'og:description',
            content:
                'Discover how MUFFINS Corporation can help you streamline operations, enhance productivity, and drive innovation with our SaaS and custom software development services.',
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
                'MUFFINS Corporation - Empowering Businesses with SaaS and Custom Software Solutions',
        },
        {
            name: 'twitter:description',
            content:
                'Discover how MUFFINS Corporation can help you streamline operations, enhance productivity, and drive innovation with our SaaS and custom software development services.',
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
            <Hero />
            {/* <Cms /> */}
            <InspirationalTexts />
            <Features />
            <Tech />
            <Banner />
            <FAQs />
            <Contact />
            <Footer />
        </div>
    )
}
