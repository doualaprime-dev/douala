import EcomLayout from '@/layouts/ecom-layout';
import { ShowProps } from '@/types/post';
import { router } from '@inertiajs/react';
import { Heart, Link } from 'lucide-react';

export default function Show({ auth, post }: ShowProps) {

    const handleLike = () => {
        if (!auth.user) {
            window.location.href = route('login')
            return;
        }

        router.post(route('posts.like', post.id), {}, {
            preserveScroll: true,
            preserveState: true
        })
    }

    const handleDelete = () => {
        if (confirm('Et tu veux vraiment supprimer ce post ?')) {
            router.delete(route('posts.destroy', post.id))
        }
    }

    const canEdit = auth.user?.id === post.user_id;

    return (
        <EcomLayout>
            <div className='py-2'>
                <article className='max-w-4xl mx-auto sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-md sm:rounded-lg'>
                        <div className='p-6'>
                            <div className='mb-6 flex justify-between items-center'>
                                <a href='/' className='text-[#FFC533] hover:text-[#FFC533] transition-colors'>
                                    Retour
                                </a>

                                {canEdit && (
                                    <div className='flex gap-4'>
                                        <a href={route('posts.edit', post.id)} className='text-[#FFC533] hover:text-[#FFC533] transition-colors'>
                                            Modifier
                                        </a>
                                        <button onClick={handleDelete} className='text-red-500 hover:text-red-700 transition-colors'>
                                            Supprimer
                                        </button>
                                    </div>
                                )}
                            </div>

                            {post.image && (
                                <div className='mb-8'>
                                    <img src={`/storage/${post.image}`} alt={post.title} className='w-full h-96 object-cover rounded-lg' />
                                </div>
                            )}

                            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                                {post.title}
                            </h1>

                            <div className='flex items-center justify-between text-sm text-gray-500 mb-8'>
                                <div className='flex items-center gap-4'>
                                    <span>Par {post.author.name}</span>
                                    <span>.</span>
                                    <span>{new Date(post.created_at).toLocaleDateString('fr-FR')}</span>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <button onClick={handleLike} className={`transition-colors ${post.is_liked ? "text-red-600 hover:text-red-700" : "text-gray-500 hover:text-red-700"}`}>
                                        <Heart className='w-6 h-6' fill={post.is_liked ? "currentColor" : "none"} />
                                    </button>

                                    <span className='text-gray-600'>
                                        {post.likes_count}
                                    </span>
                                </div>
                            </div>

                            <div className='prose max-w-none'>
                                <p className='text-gray-700'>
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </EcomLayout>
    )
}
