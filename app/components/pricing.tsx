import { CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Badge } from './ui/badge'

const Pricing = () => {
    const [checked, setChecked] = useState(false)

    return (
        <section className='mx-auto mb-8 mt-48 px-5 dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'></section>
    )
}

export default Pricing
