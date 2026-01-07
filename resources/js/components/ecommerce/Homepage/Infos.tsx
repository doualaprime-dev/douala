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
                        <h3 className='text-[16px] font-[600]'>Livraison Rapide</h3>
                        <p className='text-[14px] font-[600] text-[#1B3B6C]'>Et Gratuite</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <CircleDollarSign className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[14px] font-[600]'>Promotion et meilleures offres</h3>
                        <p className='text-[14px] font-[600] text-[#1B3B6C]'>Aux Prix Imbattables</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <Gift className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[14px] font-[600]'>Garantie jusqu'à 06 mois</h3>
                        <p className='text-[14px] font-[600] text-[#1B3B6C]'>Fiabilité Et Durabilité</p>
                    </div>
                </div>

                <div className='box flex items-center gap-3 border-2 border-[#FFC533] text-center mx-auto p-3'>
                    <div className='icon'>
                        <PhoneCall className='h-10 w-10 text-[#FFC533]' />
                    </div>

                    <div className='info flex flex-col gap-0'>
                        <h3 className='text-[14px] font-[600]'>Assistance 24h/24 et 7j/7</h3>
                        <p className='text-[14px] font-[600] text-[#1B3B6C]'>SAV De Qualité</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
