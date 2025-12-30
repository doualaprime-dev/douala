import { Link, router, useForm, usePage } from '@inertiajs/react';
import { ChevronDown, Facebook, Instagram, Menu, Rocket, Search, ShoppingCart, Truck, Twitter, User } from 'lucide-react';
import { useState } from 'react';
import CategoryMenuItem from './CategoryMenuItem';
import {Collapse} from 'react-collapse';

export default function EcommerceHeader() {
    const { parentCategories, auth, cartCount = 0 } = usePage().props as any;
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isSubCategoriesOpen, setIsSubCategoriesOpen] = useState(false);

    const { data, setData } = useForm({
        search: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setData('search', value);

        const queryString = value ? { search: value } : {};

        router.get(route('search'), queryString, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <>
            <div className='header w-full sticky -top-[40px] z-[100] bg-white shadow-lg'>
                {/* Top Header */}
                <div className='top-strip py-2 w-full border-b-[1px] border-[rgba(0,0,0,0.3)]'>
                    <div className='container flex items-center justify-between'>
                        <p className='text-[14px] text-gray-800'>
                            Offres à durée limitée : <Link href={"#"} className='link hover:text-[#FFC533]'>Achetez maintenant</Link>
                        </p>

                        <ul className='flex items-center gap-3'>
                            <li><Link href={"#"} className='text-[13px] font-[500] text-gray-800 hover:text-[#FFC533]'>Localisateur de magasins</Link></li>
                            <li><Link href={"#"} className='text-[13px] font-[500] text-gray-800 hover:text-[#FFC533]'>Suivi de commande</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Main Header */}
                <header className='py-2 border-b-[1px] border-[rgba(0,0,0,0.3)]'>
                    <div className='container flex items-center justify-between'>
                        <div className='logo'>
                            <Link href={"/"}> <img src="/images/logo.png" width={100} alt="" /> </Link>
                        </div>

                        <div className='header-search w-[400px] bg-gray-100 rounded-md shadow relative'>
                            <input
                                type="text"
                                value={data.search}
                                onChange={handleChange}
                                placeholder="Recherche de produits . . ."
                                className="w-full h-[50px] bg-transparent outline-none px-4"
                            />
                            <button className="!min-w-[40px] !w-[40px !h-[40px] !rounded-full !absolute top-[3px] right-[3px] z-50">
                                <Search className="h-5 w-5 text-gray-700 hover:text-[#FFC533]" />
                            </button>
                        </div>

                        <div className='flex items-center justify-end gap-5'>
                            <div className='flex items-center gap-2 space-x-6'>
                                {/* Cart Dropdown */}
                                <div className="relative">
                                    <Link href={route('cart.index')} className="relative hover:text-[#FFC533]">
                                        <ShoppingCart className="h-6 w-6" />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFC533] text-xs text-white">
                                                {cartCount}
                                            </span>
                                        )}
                                    </Link>
                                </div>

                                {/* Conditional Auth Section */}
                                {auth.user ? (
                                    <div className="flex items-center space-x-4">
                                        <Link href={route('user.dashboard')} className="flex items-center space-x-1 text-gray-700 hover:text-[#FFC533]">
                                            <User className="h-5 w-5" />
                                            <span>{auth.user.name}</span>
                                        </Link>
                                        <Link href={route('logout')} method="post" as="button" className="text-gray-700 hover:text-[#FFC533]">
                                            Se Déconnecter
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex space-x-4">
                                        <Link href="/login" className='text-[15px] font-[600] text-gray-500 hover:text-[#FFC533]'>
                                            Se Connecter
                                        </Link>
                                        <span className='text-[15px] font-[600] text-gray-500'>/</span>
                                        <Link href="/register" className='text-[15px] font-[600] text-gray-500 hover:text-[#FFC533]'>
                                            S'inscrire
                                        </Link>
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>
                </header>

                {/* Navigation */}
                <nav className=' border-b-[1px] border-[rgba(0,0,0,0.3)] py-2'>
                    <div className='container flex items-center gap-4 justify-between'>
                        <div className="group dropdown relative" x-data="{ open: false }">
                            <button
                                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                                className='!bg-[#FFC533] w-full text-white text-[14px] font-[600] text-center px-3 py-3 flex'
                            >
                                <Menu className="h-5 w-5" />
                                <span className='mx-2'>TOUTES LES CATÉGORIES</span>
                                <ChevronDown className="h-5 w-5 font-extrabold" />
                            </button>
                            <div x-show="open" className="dropdown-menu absolute left-0 z-50 w-64 rounded-b-md bg-white shadow-lg text-xs">
                                {/* <!-- Category with subcategories --> */}
                                {parentCategories.length > 0 &&
                                    parentCategories.map((category: any) => <CategoryMenuItem key={category.id} category={category} />)}
                            </div>
                        </div>

                        <div className='nav flex items-center gap-3'>
                            {/* Main Menu */}
                            <ul className="flex">
                                <li>
                                    <Link href="/" className="flex items-center px-4 py-3 text-gray-700 hover:text-[#FFC533]">
                                        ACCUEIL
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop" className="flex items-center px-4 py-3 text-gray-700 hover:text-[#FFC533]">
                                        BOUTIQUE
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="flex items-center px-4 py-3 text-gray-700 hover:text-[#FFC533]">
                                        BLOG
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="flex items-center px-4 py-3 text-gray-700 hover:text-[#FFC533]">
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Truck className="h-5 w-5" />
                            <span className='text-[14px] font-[400]'>Livraison Rapide</span>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
}
