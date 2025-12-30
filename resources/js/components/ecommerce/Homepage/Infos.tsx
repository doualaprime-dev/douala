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
                        <h3 className='text-[16px] font-[600]'>Livraison à domicile</h3>
                        <p className='text-[14px] font-[400]'>À partir de 2000 XAF</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <CircleDollarSign className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>Garantie de remboursement</h3>
                        <p className='text-[14px] font-[400]'>Garantie sous 06 mois</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <Gift className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>Offres et réductions</h3>
                        <p className='text-[14px] font-[400]'>Retours acceptés sous 7 jours</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <PhoneCall className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[16px] font-[600]'>Assistance 24h/24 et 7j/7</h3>
                        <p className='text-[14px] font-[400]'>Assistance à tout moment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
