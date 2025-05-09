const Footer = () => {
    return (
        <footer className='mt-24 flex flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20 text-white'>
            <div className='w-full max-w-screen-xl px-6 py-10'>
                {/* Schema.org Organization markup */}
                <script type='application/ld+json'>
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Muffins Corp.',
                        description:
                            'Transformando ideias em soluções digitais.',
                        url: 'https://muffinscorp.com',
                        logo: 'https://muffinscorp.com/apple-touch-icon.png',
                        foundingDate: '2020',
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

                {/* Restante do seu footer permanece igual */}
                <div className='flex flex-wrap justify-between'>
                    <div className='mb-4 flex flex-col'>
                        <h2 className='text-xl font-semibold'>Muffins Corp.</h2>
                        <p className='mt-2 text-sm'>
                            Transformando ideias em soluções digitais.
                        </p>
                    </div>

                    <div className='mb-4 flex flex-col space-y-2'>
                        <h3 className='font-semibold'>Navegação</h3>
                        <a
                            href='/'
                            className='text-sm text-primary hover:underline'
                        >
                            Inicio
                        </a>
                        <a
                            href='/#services'
                            className='text-sm text-primary hover:underline'
                        >
                            Serviços
                        </a>
                        <a
                            href='/#contact'
                            className='text-sm text-primary hover:underline'
                        >
                            Contato
                        </a>
                        <a
                            href='https://ai.muffinscorp.com'
                            className='text-sm text-primary hover:underline'
                        >
                            Sobre Muffins AI
                        </a>
                        <a
                            href='https://ecommerce.muffinscorp.com'
                            className='text-sm text-primary hover:underline'
                        >
                            Sobre Muffins e-Commerce
                        </a>
                    </div>

                    <div className='mb-4 flex flex-col space-y-2'>
                        <h3 className='font-semibold'>Políticas</h3>
                        <a
                            href='/terms'
                            className='text-sm text-primary hover:underline'
                        >
                            Termos de Uso
                        </a>
                        <a
                            href='/privacy'
                            className='text-sm text-primary hover:underline'
                        >
                            Política de Privacidade
                        </a>
                        <a
                            href='/cookies'
                            className='text-sm text-primary hover:underline'
                        >
                            Política de Cookies
                        </a>
                    </div>
                </div>

                <div className='mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent' />

                <div className='mt-5 text-center'>
                    <p className='text-sm'>
                        Muffins Corp. - Todos os direitos reservados &copy;{' '}
                        {new Date().getFullYear()}
                    </p>
                    <p className='mt-1 text-xs'>
                        Consulte os{' '}
                        <a
                            href='/terms'
                            className='text-primary hover:underline'
                        >
                            Termos de Uso
                        </a>{' '}
                        e a{' '}
                        <a
                            href='/privacy'
                            className='text-primary hover:underline'
                        >
                            Política de Privacidade
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
