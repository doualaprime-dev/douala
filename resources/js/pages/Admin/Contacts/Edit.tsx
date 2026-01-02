import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Edit({ contact }) {

    return (
        <AppLayout>
            <Head title="Posts" />

            <div className='py-12'>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
                        <div className='p-6'>
                            <h2 className='text-2xl font-semibold mb-6'>Message</h2>

                            <div>
                                <span className='text-2xl font-semibold mr-3'>Nom :</span> <span>{contact.name}</span>
                            </div>
                            <div>
                                <span className='text-2xl font-semibold mr-3'>Email :</span> <span>{contact.email}</span>
                            </div>
                            <div>
                                <span className='text-2xl font-semibold mr-3'>Message :</span>
                                <p>{contact.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
