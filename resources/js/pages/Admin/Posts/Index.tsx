import ListPost from '@/components/Post/ListPost';
import AppLayout from '@/layouts/app-layout'
import { Post } from '@/types/post'
import { Head } from '@inertiajs/react'
import { Link } from 'lucide-react'

interface Props extends PageProps {
    userPosts: Post[];
}

export default function Index({ userPosts }: Props) {
    return (
        <AppLayout>
            <Head title="Posts" />

            <div className='py-12'>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
                        <div className='p-6'>
                            <div className='flex justify-between items-center mb-6'>
                                <h2 className='text-2xl font-semibold text-gray-900'>
                                    Mes publications
                                </h2>
                                <a href={route('posts.create')} className='inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-[#FFC533] hover:bg-[#FFC533]'>
                                    Créer un post
                                </a>
                            </div>

                            {userPosts.length > 0 ? (
                                <ListPost posts={userPosts} showAuthor={false} canEdit={true} />
                            ) : (
                                <div className='text-center py-12'>
                                    <p className='mb-4 text-gray-500'>
                                        Vous n'avez pas encore créé de posts
                                    </p>
                                    <a href={route('posts.create')} className='text-[#FFC533] hover:text-[#FFC533]'>
                                        Créez votre premier post
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
