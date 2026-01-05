import { Link, usePage } from '@inertiajs/react';
import { BarChart3, CreditCard, Download, Heart, LogOut, MapPin, ShoppingBag, User } from 'lucide-react';

export default function UserSideBar() {
    const { auth } = usePage().props as any;
    const user = auth.user;

    const menuItems = [
        {
            icon: BarChart3,
            label: 'Tableau de bord',
            href: '/user/dashboard',
            active: true,
        },
        {
            icon: ShoppingBag,
            label: 'Commandes',
            href: '/user/orders',
        },
        {
            icon: User,
            label: 'Détails du compte',
            href: '/user/account-details',
        },
    ];

    return (
        <div className='sticky top-6 overflow-hidden rounded-lg bg-white shadow-sm'>
            <div className='border-b p-6'>
                <div className='flex items-center'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100'>
                        <span className='text-xl font-bold text-indigo-600'>{user?.name?.charAt(0) || 'u'}</span>
                    </div>
                    <div className='ml-4'>
                        <h2 className='font-medium'>{user?.name || 'User'}</h2>
                        <p className='text-sm text-gray-500'>{user?.email || 'user@example.com'}</p>
                    </div>
                </div>
            </div>

            <nav className='p-2'>
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center rounded-md px-4 py-3 ${
                            item.active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                        }`}
                    >
                        <item.icon className="mr-3 h-5 w-5" />
                        <span>{item.label}</span>
                    </Link>
                ))}

                <div className='my-2 border-t'></div>
                <Link
                    href="/logout"
                    method='post'
                    as="button"
                    className='flex w-full items-center rounded-md px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600'
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    <span>Déconnexion</span>
                </Link>
            </nav>
        </div>
    )
}
