import ListPost from '@/components/Post/ListPost';
import EcomLayout from '@/layouts/ecom-layout';
import { PageProps } from '@/types';
import { Post } from '@/types/post';
import { Link } from 'lucide-react';

export default function Blog({ auth, posts, canRegister }: PageProps<{ posts: Post[] }>) {
    return (
        <EcomLayout>
            <div className='bg-white'>
                <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6lg:px-8'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-black text-gray-800'>
                            <span className='block'>Bienvenu sur</span>
                            <span className='block text-[#FFC533]'>
                                Notre Blog Communautaire
                            </span>
                        </h1>

                        <p className='mt-3 max-w-md mx-auto text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim ipsum numquam magnam asperiores dolor iste, dolorum necessitatibus facere sed hic.
                        </p>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-extrabold text-gray-800'>
                            Articles récents
                        </h2>
                        <p className='mt-3 max-w-2xl mx-auto text-xl'>
                            Les derniers articles publiés par nos utilisateurs
                        </p>
                    </div>

                    <ListPost posts={posts} />
                </div>
            </div>
        </EcomLayout>
    )
}
