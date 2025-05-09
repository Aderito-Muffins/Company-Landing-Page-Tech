import { Partytown } from '@builder.io/partytown/react'
import { type LinksFunction } from '@remix-run/node'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import stylesheet from '~/tailwind.css?url'
import TailwindIndicator from './components/tailwind-indicator'
import { useEffect } from 'react' // Substituído useLayoutEffect por useEffect
import { changeTheme, getTheme } from './hooks/use-theme'
import { HighlightInit } from '@highlight-run/remix/client'
import { json } from '@remix-run/node'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

export async function loader() {
    return json({
        ENV: {
            HIGHLIGHT_PROJECT_ID: process.env.HIGHLIGHT_PROJECT_ID,
        },
    })
}

/**
 * The root component of the Remix app.
 *
 * This component is responsible for rendering the entire app, including the
 * HTML document, the Remix router, and the Highlight monitoring script.
 *
 * The component uses the `useLoaderData` hook to get the environment variables
 * from the loader and pass them to the `HighlightInit` component.
 *
 * The component also uses the `useEffect` hook to change the theme of the app
 * when the user changes the theme preference.
 *
 * The component renders the following components:
 *
 * - `html` - the root HTML element of the app
 * - `head` - the head section of the HTML document
 * - `HighlightInit` - the Highlight monitoring script
 * - `body` - the body section of the HTML document
 * - `Outlet` - the Remix router outlet
 * - `ScrollRestoration` - the Remix scroll restoration component
 * - `Scripts` - the Remix scripts component
 * - `TailwindIndicator` - the Tailwind indicator component
 * - `Analytics` - the Vercel analytics component (only rendered in production)
 */
export default function App() {
    const { ENV } = useLoaderData<typeof loader>()
    useEffect(() => {
        changeTheme(getTheme())
    }, [])

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Muffins Corp.',
        description: 'Transformando ideias em soluções digitais.',
        url: 'https://www.muffinscorp.com',
        logo: 'https://www.muffinscorp.com/apple-touch-icon.png',
        foundingDate: '2024',
        founders: [
            {
                '@type': 'Person',
                name: 'Aderito Muffins',
            },
            {
                '@type': 'Person',
                name: 'Adilson Muffins',
            },
            {
                '@type': 'Person',
                name: 'Eduardo Mufume Jr.',
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Maxaquene, Maputo',
            addressLocality: 'Maputo',
            addressRegion: 'Maputo',
            postalCode: '1102',
            addressCountry: 'Mozambique',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'contact@muffinscorp.com',
                areaServed: 'Global',
            },
        ],
        sameAs: [
            'https://www.facebook.com/muffinscorporation',
            'https://www.linkedin.com/company/muffinscorp',
            'https://www.instagram.com/muffinscorp',
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Muffins Corp.',
        url: 'https://www.muffinscorp.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.muffinscorp.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    }

    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@type': 'Service',
                    name: 'Muffins AI',
                    description:
                        'Plataforma de inteligência artificial para análise de dados e chatbots inteligentes.',
                    provider: {
                        '@type': 'Organization',
                        name: 'Muffins Corp.',
                    },
                    serviceType: 'Solução de IA',
                    areaServed: 'Global',
                    url: 'https://ai.muffinscorp.com',
                },
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@type': 'Service',
                    name: 'Muffins e-Commerce',
                    description:
                        'Solução completa para lojas virtuais e gestão de e-commerce.',
                    provider: {
                        '@type': 'Organization',
                        name: 'Muffins Corp.',
                    },
                    serviceType: 'Plataforma de E-commerce',
                    areaServed: 'Global',
                    url: 'https://ecommerce.muffinscorp.com',
                },
            },
        ],
    }

    return (
        <html lang='pt-PT' className='dark'>
            <HighlightInit
                projectId={ENV.HIGHLIGHT_PROJECT_ID}
                serviceName='my-remix-frontend'
                tracingOrigins
                networkRecording={{
                    enabled: true,
                    recordHeadersAndBody: true,
                }}
            />
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
                <meta name='theme-color' content='#000000' />
                <meta
                    name='description'
                    content='Muffins Corp. - Transformando ideias em soluções digitais com IA e E-commerce.'
                />
                <meta
                    name='keywords'
                    content='IA, inteligência artificial, e-commerce, chatbot, análise de dados, Mozambique'
                />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Muffins Corp.' />
                <meta
                    property='og:description'
                    content='Transformando ideias em soluções digitais.'
                />
                <meta property='og:url' content='https://www.muffinscorp.com' />
                <meta
                    property='og:image'
                    content='https://www.muffinscorp.com/og-image.jpg'
                />
                <meta property='og:site_name' content='Muffins Corp.' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content='Muffins Corp.' />
                <meta
                    name='twitter:description'
                    content='Transformando ideias em soluções digitais.'
                />
                <meta
                    name='twitter:image'
                    content='https://www.muffinscorp.com/twitter-image.jpg'
                />

                <Partytown debug={true} forward={['dataLayer.push']} />
                <script
                    type='text/partytown'
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-8D3Q6ZQE0Z'
                />
                <script
                    type='text/partytown'
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8D3Q6ZQE0Z');`,
                    }}
                />

                <script type='application/ld+json'>
                    {JSON.stringify(organizationSchema)}
                </script>
                <script type='application/ld+json'>
                    {JSON.stringify(websiteSchema)}
                </script>
                <script type='application/ld+json'>
                    {JSON.stringify(servicesSchema)}
                </script>

                <Meta />
                <Links />
                <link rel='canonical' href='https://www.muffinscorp.com' />
            </head>

            <body className='relative overflow-x-hidden bg-background font-dm antialiased'>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <TailwindIndicator />
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    )
}
