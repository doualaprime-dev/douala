import { FormEvent, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { CreateProps, ContactFormData } from '@/types/post';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import EcomLayout from '@/layouts/ecom-layout';

export default function Create({} : CreateProps) {
    const { data, setData, post, processing, errors, reset } = useForm<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        post(route('contacts.store'), {
            onSuccess: () => {
                reset();
            }
        })
    }

    return (
        <EcomLayout>
            <div className='bg-white'>
                <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6lg:px-8'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-black text-gray-800'>
                            <span className='block text-[#FFC533]'>
                                Nous Contacter
                            </span>
                        </h1>
                    </div>

                    <div className='py-2'>
                        <article className='max-w-4xl mx-auto sm:px-6 lg:px-8'>
                            <div className='bg-white overflow-hidden shadow-md sm:rounded-lg'>
                                <div className='p-6'>
                                    <div className='mb-6 flex justify-between items-center'>
                                        <a href='/' className='text-[#FFC533] hover:text-[#FFC533] transition-colors'>
                                            Retour
                                        </a>
                                    </div>

                                    <form onSubmit={handleSubmit} className='space-y-2'>
                                        <div className='space-y-2'>
                                            <Label htmlFor="name">Nom</Label>
                                            <Input
                                                id='name'
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                            />
                                            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                                        </div>
                                        <div className='space-y-2'>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id='email'
                                                type='email'
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                            />
                                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                                        </div>
                                        <div className='space-y-2'>
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id='message'
                                                value={data.message}
                                                onChange={e => setData('message', e.target.value)}
                                                rows={50}
                                            />
                                            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                                        </div>

                                        <div className='flex items-center justify-end space-x-4'>
                                            <Button type='submit' disabled={processing}>
                                                {processing ? 'En cours...' : 'Envoyer'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </EcomLayout>
    )
}
