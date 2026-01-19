import { Link } from 'lucide-react'
import React from 'react'

export default function Deals() {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 gap-10 bg-white p-5 shadow-md'>
                <div className='box'>
                    <div className='image overflow-hidden rounded-md'>
                        <img src="./images/cuisinieres.png" alt="Banner" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className='box'>
                    <div className='image overflow-hidden rounded-md'>
                        <img src="./images/climatisation.png" alt="Banner" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className='box'>
                    <div className='image overflow-hidden rounded-md'>
                        <img src="./images/machines_a_laver.png" alt="Banner" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}
