import { CircleDollarSign, Gift, PhoneCall, Truck } from 'lucide-react'
import React from 'react'

export default function Infos() {
    return (
        <div className='container py-4'>
            <div className='flex flex-wrap gap-6 bg-white p-6 shadow-lg'>
                <div className='box flex items-center gap-6 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <Truck className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>Worldwide Shipping</h3>
                        <p className='text-[14px] font-[400]'>Order Above $100</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <CircleDollarSign className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>Money Back Guarantee</h3>
                        <p className='text-[14px] font-[400]'>Guarante With In 30 Days</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <Gift className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>Offers And Discounts</h3>
                        <p className='text-[14px] font-[400]'>Back Returns In 7 Days</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <PhoneCall className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>24/7 Support Services</h3>
                        <p className='text-[14px] font-[400]'>Any Time Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
