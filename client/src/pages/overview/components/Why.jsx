import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

export default function Why() {
return (
    <Card className="rounded-xl  p-4 sm:p-6 lg:p-8">
    <div className="flex items-start flex-col sm:gap-8">
        <div>
        <h3 className="text-lg font-medium sm:text-xl text-black">
            <a href="#" className="hover:underline"> Why you need to <strong>know Your Numbers?</strong> </a>
        </h3>
        <p className="mt-1 text-sm text-gray-700">
        Running a dental practice <strong>without tracking key metrics</strong> is like driving <strong>blindfolded</strong>—you have no idea where you’re going until you crash.
        </p>
        </div>
        <button className='text-black self-center cursor-pointer'>Numbers Game</button>
    </div>
    </Card>  
    )
}
