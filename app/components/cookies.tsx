import React from 'react'

const CookiePolicy = () => {
    return (
        <div className='mx-auto max-w-screen-lg px-6 py-10'>
            <h1 className='mb-6 text-center text-3xl font-bold'>
                Política de Cookies
            </h1>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>1. Introdução</h2>
                <p className='text-sm leading-relaxed'>
                    Esta Política de Cookies explica como a Muffins Corp.
                    ("nós", "nosso", "nossa") utiliza cookies e tecnologias
                    similares quando você interage com nossos websites,
                    aplicativos e serviços (coletivamente, "Serviços"). Esta
                    política complementa nossa{' '}
                    <a href='/privacy' className='text-primary hover:underline'>
                        Política de Privacidade
                    </a>{' '}
                    e deve ser lida em conjunto com ela.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>
                    2. O que são Cookies?
                </h2>
                <p className='mb-4 text-sm leading-relaxed'>
                    Cookies são pequenos arquivos de texto colocados em seu
                    dispositivo quando você visita um site. Eles são amplamente
                    usados para fazer os sites funcionarem ou funcionarem de
                    forma mais eficiente, bem como para fornecer informações aos
                    proprietários do site.
                </p>
                <p className='text-sm leading-relaxed'>
                    Além dos cookies tradicionais, utilizamos outras tecnologias
                    similares como:
                </p>
                <ul className='mt-4 list-inside list-disc text-sm leading-relaxed'>
                    <li className='mb-2'>
                        Local Storage e Session Storage (armazenamento no
                        navegador)
                    </li>
                    <li className='mb-2'>
                        Pixels/Beacons (pequenas imagens invisíveis que
                        registram atividade)
                    </li>
                    <li>
                        Identificadores de dispositivo (para aplicativos móveis)
                    </li>
                </ul>
            </section>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>
                    3. Tipos de Cookies que Utilizamos
                </h2>
                <h3 className='mb-3 text-lg font-medium'>
                    3.1 Cookies Essenciais
                </h3>
                <p className='mb-4 text-sm leading-relaxed'>
                    Esses cookies são estritamente necessários para o
                    funcionamento básico de nossos Serviços e não podem ser
                    desativados em nossos sistemas. Eles geralmente são
                    configurados apenas em resposta a ações suas que equivalem a
                    uma solicitação de serviços, como definir suas preferências
                    de privacidade, fazer login ou preencher formulários.
                </p>
                <table className='mb-6 w-full border-collapse'>
                    <thead>
                        <tr className='border-b border-t text-primary'>
                            <th className='p-3 text-left text-sm font-semibold'>
                                Cookie
                            </th>
                            <th className='p-3 text-left text-sm font-semibold'>
                                Finalidade
                            </th>
                            <th className='p-3 text-left text-sm font-semibold'>
                                Duração
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='p-3 text-sm'>session_id</td>
                            <td className='p-3 text-sm'>
                                Manter sua sessão de usuário ativa
                            </td>
                            <td className='p-3 text-sm'>
                                Até o fechamento do navegador
                            </td>
                        </tr>
                        <tr className='border-b'>
                            <td className='p-3 text-sm'>consent_preferences</td>
                            <td className='p-3 text-sm'>
                                Armazenar suas preferências de consentimento
                            </td>
                            <td className='p-3 text-sm'>1 ano</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='mb-3 text-lg font-medium'>
                    3.2 Cookies de Desempenho e Análise
                </h3>
                <p className='mb-4 text-sm leading-relaxed'>
                    Esses cookies nos permitem contar visitas e fontes de
                    tráfego para que possamos medir e melhorar o desempenho de
                    nosso site. Eles nos ajudam a saber quais páginas são as
                    mais e menos populares e ver como os visitantes se
                    movimentam pelo site.
                </p>
                <table className='mb-6 w-full border-collapse'>
                    <thead>
                        <tr className='border-b border-t text-primary'>
                            <th className='p-3 text-left text-sm font-semibold'>
                                Cookie
                            </th>
                            <th className='p-3 text-left text-sm font-semibold'>
                                Finalidade
                            </th>
                            <th className='p-3 text-left text-sm font-semibold'>
                                Duração
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='p-3 text-sm'>_ga</td>
                            <td className='p-3 text-sm'>
                                Google Analytics - Distinguir usuários
                            </td>
                            <td className='p-3 text-sm'>2 anos</td>
                        </tr>
                        <tr className='border-b'>
                            <td className='p-3 text-sm'>_gid</td>
                            <td className='p-3 text-sm'>
                                Google Analytics - Distinguir usuários
                            </td>
                            <td className='p-3 text-sm'>24 horas</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='mb-3 text-lg font-medium'>
                    3.3 Cookies de Funcionalidade
                </h3>
                <p className='mb-4 text-sm leading-relaxed'>
                    Esses cookies permitem que o site forneça funcionalidades e
                    personalização aprimoradas, como vídeos e chats online. Eles
                    podem ser definidos por nós ou por provedores de serviços
                    terceirizados cujos serviços adicionamos às nossas páginas.
                </p>

                <h3 className='mb-3 text-lg font-medium'>
                    3.4 Cookies de Publicidade
                </h3>
                <p className='text-sm leading-relaxed'>
                    Esses cookies podem ser definidos em nosso site por nossos
                    parceiros de publicidade. Eles podem ser usados por essas
                    empresas para construir um perfil de seus interesses e
                    mostrar anúncios relevantes em outros sites. Eles não
                    armazenam informações pessoais diretamente, mas são baseados
                    na identificação exclusiva de seu navegador e dispositivo de
                    internet.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>
                    4. Controle de Cookies
                </h2>
                <p className='mb-4 text-sm leading-relaxed'>
                    Você pode gerenciar suas preferências de cookies de várias
                    maneiras:
                </p>
                <ul className='mb-4 list-inside list-disc text-sm leading-relaxed'>
                    <li className='mb-2'>
                        <strong>Banner de Consentimento:</strong> Ao acessar
                        nosso site pela primeira vez, você pode escolher quais
                        categorias de cookies aceita, exceto os essenciais.
                    </li>
                    <li className='mb-2'>
                        <strong>Configurações do Navegador:</strong> A maioria
                        dos navegadores permite que você recuse ou aceite
                        cookies e os exclua. Consulte as instruções do seu
                        navegador:
                        <ul className='ml-6 mt-2 list-inside list-disc'>
                            <li className='mb-1'>
                                <a
                                    href='https://support.google.com/chrome/answer/95647'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Chrome
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a
                                    href='https://support.mozilla.org/pt-BR/kb/desative-cookies-terceiros-impedir-rastreamento'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Firefox
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a
                                    href='https://support.apple.com/pt-br/guide/safari/sfri11471/mac'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Safari
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary hover:underline'
                                >
                                    Edge
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ferramentas de Terceiros:</strong> Plataformas
                        como a{' '}
                        <a
                            href='https://optout.aboutads.info/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-primary hover:underline'
                        >
                            Digital Advertising Alliance
                        </a>{' '}
                        oferecem mecanismos para controle de cookies de
                        publicidade.
                    </li>
                </ul>
                <p className='text-sm leading-relaxed'>
                    Observe que a desativação de cookies pode afetar a
                    funcionalidade de muitos websites, incluindo o nosso.
                    Algumas partes do site podem não funcionar corretamente se
                    você desativar os cookies.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>
                    5. Cookies de Terceiros
                </h2>
                <p className='mb-4 text-sm leading-relaxed'>
                    Alguns cookies em nosso site são configurados por serviços
                    terceiros que aparecem em nossas páginas. Eles são
                    gerenciados pelos operadores desses serviços e não estão sob
                    nosso controle direto. Os principais serviços incluem:
                </p>
                <ul className='mb-4 list-inside list-disc text-sm leading-relaxed'>
                    <li className='mb-2'>
                        <strong>Google Analytics:</strong> Para análise de
                        tráfego e comportamento do usuário
                    </li>
                    <li className='mb-2'>
                        <strong>Hotjar:</strong> Para análise de experiência do
                        usuário e heatmaps
                    </li>
                    <li className='mb-2'>
                        <strong>Facebook Pixel:</strong> Para medição e
                        otimização de campanhas publicitárias
                    </li>
                    <li>
                        <strong>Stripe:</strong> Para processamento seguro de
                        pagamentos
                    </li>
                </ul>
                <p className='text-sm leading-relaxed'>
                    Recomendamos que você consulte as políticas de privacidade
                    desses terceiros para obter informações sobre seus cookies.
                    Para serviços baseados nos EUA, observe que seus dados podem
                    ser transferidos para os Estados Unidos, que possuem leis de
                    proteção de dados diferentes das da UE.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>
                    6. Atualizações desta Política
                </h2>
                <p className='mb-4 text-sm leading-relaxed'>
                    Podemos atualizar esta Política de Cookies periodicamente
                    para refletir mudanças em nossas práticas ou em requisitos
                    legais. Quando fizermos alterações significativas,
                    publicaremos a política revisada em nosso site com uma nova
                    data de 2025/04/25 e poderemos notificá-lo por outros meios,
                    como e-mail, quando apropriado.
                </p>
                <p className='text-sm leading-relaxed'>
                    Recomendamos que você revise esta política regularmente para
                    se manter informado sobre nosso uso de cookies e tecnologias
                    relacionadas.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='mb-4 text-xl font-semibold'>7. Contato</h2>
                <p className='text-sm leading-relaxed'>
                    Se tiver dúvidas sobre esta Política de Cookies ou sobre
                    nossas práticas relacionadas a cookies e tecnologias de
                    rastreamento, entre em contato conosco através do e-mail{' '}
                    <a
                        href='mailto:privacy@muffinscorp.com'
                        className='text-primary hover:underline'
                    >
                        privacy@muffinscorp.com
                    </a>{' '}
                    ou pelo endereço postal: [Endereço Completo do Departamento
                    de Privacidade].
                </p>
            </section>

            <p className='mt-10 text-xs text-gray-500'>
                Última atualização: 2025/04/25 - 17:38
            </p>
        </div>
    )
}

export default CookiePolicy
