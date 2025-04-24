// app/my-statsig.tsx

'use client'

import React from 'react'
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings'
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics'
import { StatsigSessionReplayPlugin } from '@statsig/session-replay'

import { Pinwheel } from 'ldrs/react'
import 'ldrs/react/Pinwheel.css'

export default function MyStatsig({ children }: { children: React.ReactNode }) {
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

    return (
        <StatsigProvider
            client={client}
            // loadingComponent={
            //     <div
            //         className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'
            //         style={{
            //             display: 'flex',
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //             height: '100vh',
            //             backgroundColor: '#000', // Ajuste conforme necessário
            //         }}
            //     >
            //         <Pinwheel
            //             size='35'
            //             stroke='3.5'
            //             speed='0.9'
            //             color='white'
            //         />
            //     </div>
            // }
        >
            {children}
        </StatsigProvider>
    )
}
