const Footer = () => {
    return (
        <footer className='mt-24 flex flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20 text-white'>
            <div className='w-full max-w-screen-xl px-6 py-10'>
                {/* Informações da Empresa */}
                <div className='flex flex-wrap justify-between'>
                    <div className='mb-4 flex flex-col'>
                        <h2 className='text-xl font-semibold'>Muffins Corp.</h2>
                        <p className='mt-2 text-sm'>
                            Transformando ideias em soluções digitais.
                        </p>
                    </div>

                    {/* Links de Navegação */}
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

                    {/* Redes Sociais */}
                    {/* <div className='mb-4 flex flex-col space-y-2'>
                        <h3 className='font-semibold'>Siga-nos</h3>
                        <a
                            href='https://facebook.com'
                            className='text-sm text-primary hover:underline'
                        >
                            Facebook
                        </a>
                        <a
                            href='https://twitter.com'
                            className='text-sm text-primary hover:underline'
                        >
                            Twitter
                        </a>
                        <a
                            href='https://linkedin.com'
                            className='text-sm text-primary hover:underline'
                        >
                            LinkedIn
                        </a>
                    </div> */}

                    {/* Termos e Políticas */}
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

                {/* Linha de Separação */}
                <div className='mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent' />

                {/* Direitos Autorais */}
                <div className='mt-5 text-center'>
                    <p className='text-sm'>
                        Muffins Corp. - Todos os direitos reservados &copy; 2025
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
