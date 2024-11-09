import { Github } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <div className='py-6 px-10'>
            <div className='flex justify-between'>
                <h1 className='text-xl'>
                    Whack 2024!
                </h1>
                <a href='https://github.com/xavieryn/whack-2024'> <Github/></a>
            </div>


            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        </div>

    )
}

export default Header