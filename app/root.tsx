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
    }, []) // Alterado de useLayoutEffect para useEffect
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
                <Meta />
                <Links />
                <script type='application/ld+json'>
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Muffins Corp.',
                        description:
                            'Transformando ideias em soluções digitais.',
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
                        makesOffer: [
                            {
                                '@type': 'Product',
                                name: 'Muffins AI',
                                description:
                                    'Solução avançada de análise de dados e chatbot inteligente para automação de atendimento e insights empresariais.',
                                url: 'https://ai.muffinscorp.com',
                                offeredBy: {
                                    '@type': 'Organization',
                                    name: 'Muffins Corp.',
                                },
                                category: 'SoftwareApplication',
                                applicationCategory: 'BusinessApplication',
                                operatingSystem: 'WebApplication',
                            },
                            {
                                '@type': 'Product',
                                name: 'Muffins e-Commerce',
                                description:
                                    'Solução completa para e-commerce com gestão de pedidos, pagamentos integrados e ferramentas de marketing digital.',
                                url: 'https://ecommerce.muffinscorp.com',
                                offeredBy: {
                                    '@type': 'Organization',
                                    name: 'Muffins Corp.',
                                },
                                category: 'SoftwareApplication',
                                applicationCategory: 'BusinessApplication',
                                operatingSystem: 'WebApplication',
                            },
                        ],
                        brand: [
                            {
                                '@type': 'Brand',
                                name: 'Muffins AI',
                                description:
                                    'Plataforma de inteligência artificial para análise de dados e chatbots inteligentes.',
                                url: 'https://ai.muffinscorp.com',
                            },
                            {
                                '@type': 'Brand',
                                name: 'Muffins e-Commerce',
                                description:
                                    'Solução completa para lojas virtuais e gestão de e-commerce.',
                                url: 'https://ecommerce.muffinscorp.com',
                            },
                        ],
                    })}
                </script>
                <script type='application/ld+json'>
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Muffins AI',
                                item: 'https://ai.muffinscorp.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: 'Muffins AI Chatbot',
                                item: 'https://chat.muffinscorp.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: 'Muffins AI Platform',
                                item: 'https://platform.muffinscorp.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Muffins e-Commerce',
                                item: 'https://ecommerce.muffinscorp.com',
                            },
                        ],
                    })}
                </script>
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
