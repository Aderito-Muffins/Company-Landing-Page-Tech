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
import { useLayoutEffect } from 'react'
import { changeTheme, getTheme } from './hooks/use-theme'
import { HighlightInit } from '@highlight-run/remix/client'
import { json } from '@remix-run/node'
import React from 'react'
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings'
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics'
import { StatsigSessionReplayPlugin } from '@statsig/session-replay'

// Links para o CSS
export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

// Loader para carregar variáveis de ambiente
export async function loader() {
    return json({
        ENV: {
            HIGHLIGHT_PROJECT_ID: process.env.HIGHLIGHT_PROJECT_ID,
        },
    })
}

// Componente para inicializar Statsig
export function MyStatsig({ children }: { children: React.ReactNode }) {
    const { client } = useClientAsyncInit(
        'client-tixYyU6MrwkTucSnlh8gYc6HUhFvBuQoR5OBHoaTCkz',
        { userID: 'a-user' },
        {
            plugins: [
                new StatsigAutoCapturePlugin(),
                new StatsigSessionReplayPlugin(),
            ],
        }
    )

    // Verifica se o client está pronto antes de renderizar
    if (!client) {
        return null // Substitua por um spinner ou carregamento
    }

    return <StatsigProvider client={client}>{children}</StatsigProvider>
}

// Componente Principal
export default function App({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const { ENV } = useLoaderData<typeof loader>()

    // Atualiza o tema ao carregar
    useLayoutEffect(() => {
        const theme = getTheme()
        if (theme) {
            changeTheme(theme)
        }
    }, [])

    return (
        <html lang='pt-PT' className='dark'>
            {/* Inicialização do Highlight para monitoramento */}
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
                {/* Google Analytics com Partytown */}
                <script
                    type='text/partytown'
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-8D3Q6ZQE0Z'
                ></script>
                <script
                    type='text/partytown'
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8D3Q6ZQE0Z');
            `,
                    }}
                />
                <Meta />
                <Links />
            </head>
            <body className='relative overflow-x-hidden bg-background font-dm antialiased'>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <TailwindIndicator />
                <MyStatsig>{children}</MyStatsig>
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    )
}
