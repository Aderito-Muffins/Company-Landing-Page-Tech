import { Link } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import useTheme, { changeTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'
import { type ThemeName } from '~/registry/themes'
import Saastellar from './icons/saasstellar'

const Navbar = () => {
    const [theme, setTheme] = useTheme()

    const themeOptions = [
        { value: 'zinc', label: 'Zinco', colorClass: 'bg-zinc-600' },
        { value: 'slate', label: 'Ardósia', colorClass: 'bg-slate-600' },
        { value: 'stone', label: 'Pedra', colorClass: 'bg-stone-600' },
        { value: 'gray', label: 'Cinza', colorClass: 'bg-gray-600' },
        { value: 'neutral', label: 'Neutro', colorClass: 'bg-neutral-600' },
        { value: 'red', label: 'Vermelho', colorClass: 'bg-red-600' },
        { value: 'rose', label: 'Rosa', colorClass: 'bg-rose-600' },
        { value: 'orange', label: 'Laranja', colorClass: 'bg-orange-600' },
        { value: 'green', label: 'Verde', colorClass: 'bg-green-600' },
        { value: 'blue', label: 'Azul', colorClass: 'bg-blue-600' },
        { value: 'yellow', label: 'Amarelo', colorClass: 'bg-yellow-600' },
        { value: 'violet', label: 'Violeta', colorClass: 'bg-violet-600' },
    ]

    return (
        <div className='px-5 py-2'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                {/* Logo */}
                <Link to='/' className='flex items-center gap-2'>
                    <Saastellar
                        aria-label='saasstellar logo'
                        linearFrom='text-primary'
                        className='w-7'
                        linearTo={cn(
                            'text-primary',
                            theme === 'zinc' && 'text-zinc-600',
                            theme === 'slate' && 'text-slate-600',
                            theme === 'stone' && 'text-stone-600',
                            theme === 'gray' && 'text-gray-600',
                            theme === 'neutral' && 'text-neutral-600',
                            theme === 'red' && 'text-red-600',
                            theme === 'rose' && 'text-pink-600',
                            theme === 'orange' && 'text-rose-600',
                            theme === 'green' && 'text-emerald-600',
                            theme === 'blue' && 'text-purple-600',
                            theme === 'yellow' && 'text-yellow-600',
                            theme === 'violet' && 'text-violet-600'
                        )}
                    />
                    <span className='hidden text-lg font-semibold md:block'>
                        Muffins Corp.
                    </span>
                </Link>

                {/* Links de Navegação */}
                {/* <div className='hidden items-center gap-6 md:flex'>
                    <Link
                        to='/about'
                        className='text-sm font-medium text-primary hover:underline'
                    >
                        Sobre Nós
                    </Link>
                    <Link
                        to='/services'
                        className='text-sm font-medium text-primary hover:underline'
                    >
                        Serviços
                    </Link>
                    <Link
                        to='/contact'
                        className='text-sm font-medium text-primary hover:underline'
                    >
                        Contato
                    </Link>
                </div> */}

                {/* Ações do Usuário */}
                <div className='flex items-center gap-5'>
                    {/* GitHub Link */}
                    <a
                        href='https://github.com/muffins-corp'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background/30 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10'
                        aria-label='my github'
                    >
                        <GithubIcon className='h-5 w-5' />
                    </a>

                    {/* Seleção de Tema */}
                    <Select
                        onValueChange={(value: ThemeName) => {
                            changeTheme(value)
                            setTheme(value)
                        }}
                        value={theme}
                    >
                        <SelectTrigger
                            className='w-[180px]'
                            aria-label='personalizar tema'
                        >
                            <SelectValue placeholder='Personalizar' />
                        </SelectTrigger>
                        <SelectContent>
                            {themeOptions.map((option) => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    <span className='flex items-center gap-2'>
                                        <span
                                            className={`h-4 w-4 rounded-full ${option.colorClass}`}
                                        ></span>
                                        <span>{option.label}</span>
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
