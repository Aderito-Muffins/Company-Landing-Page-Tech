import React from 'react'

const InspirationalTexts = () => {
    const quotes = [
        {
            text: 'Nada é mais poderoso do que uma ideia cujo tempo chegou.',
            author: 'Victor Hugo',
        },
    ]

    return (
        <div className='mx-5'>
            <div className='mx-auto flex flex-col items-center justify-center gap-8'>
                {quotes.map((quote, index) => (
                    <div
                        key={index}
                        className='rounded-lg border bg-background p-4 text-center text-foreground shadow-sm'
                    >
                        <p className='mb-2 text-lg italic'>
                            &ldquo;{quote.text}&rdquo;
                        </p>
                        <p className='text-sm font-medium'>- {quote.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InspirationalTexts
