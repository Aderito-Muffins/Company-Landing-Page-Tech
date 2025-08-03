import React from 'react'
import { type TeamCardProps } from '~/types/team-card'
import TeamCard from './team-card'

// Importe as imagens JPEG
import adertoAvatar from '../assets/aderito.jpeg'
import adilsonAvatar from '../assets/adilson.jpeg'
import eduardoAvatar from '../assets/akil.jpeg'

// Importe os ícones para LinkedIn e Instagram

const teamData: TeamCardProps[] = [
    {
        name: 'Adérito Muffins',
        position: 'Fundador, Diretor Geral',
        description:
            'Líder focado em inovação e crescimento, responsável por transformar ideias em realidade e impulsionar a Muffins Corp.',
        avatar: (
            <img
                src={adertoAvatar}
                alt='Adérito Muffins'
                className='h-24 w-24 rounded-full object-cover' // Ajuste no tamanho e uso de object-cover
            />
        ),
        backgroundColor: 'from-blue-500/20 to-blue-500/5',
        linkedin: 'https://www.linkedin.com/in/aderitomf', // Link do LinkedIn
        instagram: 'https://www.instagram.com/aderito_muffins', // Link do Instagram
    },
    {
        name: 'Adilson Muffins',
        position: 'Co-Fundador, Diretor de Tecnologia',
        description:
            'Responsável pelo design UI/UX, criando experiências intuitivas e interfaces apelativas para os utilizadores.',
        avatar: (
            <img
                src={adilsonAvatar}
                alt='Adilson Muffins'
                className='h-24 w-24 rounded-full object-cover' // Ajuste no tamanho e uso de object-cover
            />
        ),
        backgroundColor: 'from-green-500/20 to-green-500/5',
        linkedin: 'https://www.linkedin.com/in/adilsonmuffins', // Link do LinkedIn
        instagram: 'https://www.instagram.com/adilson_muffins', // Link do Instagram
    },
    {
        name: 'Eduardo Mufume Jr.',
        position: 'Co-Fundador, Designer Gráfico, Gestor de Marketing',
        description:
            'Responsável pelo design gráfico e estratégias de marketing, criando uma identidade visual forte e conectando a marca ao público.',
        avatar: (
            <img
                src={eduardoAvatar}
                alt='Eduardo Mufume Jr.'
                className='h-24 w-24 rounded-full object-cover' // Ajuste no tamanho e uso de object-cover
            />
        ),
        backgroundColor: 'from-purple-500/20 to-purple-500/5',
        linkedin:
            'https://www.linkedin.com/in/eduardo-domingos-mufume-júnior-9565b4278', // Link do LinkedIn
        instagram: 'https://www.instagram.com/akiljunioroficial', // Link do Instagram
    },
]

const Team = () => {
    return (
        <section className='mx-auto mt-48 max-w-7xl px-5'>
            <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            CONHEÇA NOSSA EQUIPE
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Nossa Equipe{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            De Líderes
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    <span className='hidden lg:block'>
                        Conheça os profissionais por trás da inovação e
                        crescimento contínuo da Muffins Corp. Com uma paixão por
                        tecnologia e um compromisso com a excelência, nossa
                        equipe é a chave para o sucesso do seu negócio.
                    </span>
                    <span className='block lg:hidden'>
                        Profissionais apaixonados, comprometidos com o sucesso.
                        Conheça a equipe da Muffins Corp.
                    </span>
                </p>
            </div>
            <div>
                <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                    {teamData.map((member, i) => (
                        <li key={i}>
                            <TeamCard
                                name={member.name}
                                position={member.position}
                                description={member.description}
                                backgroundColor={member.backgroundColor}
                                avatar={member.avatar}
                                linkedin={member.linkedin} // Passando o link do LinkedIn
                                instagram={member.instagram} // Passando o link do Instagram
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Team
