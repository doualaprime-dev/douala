import { Link } from '@inertiajs/react';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 pt-16 pb-6 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo and Description */}
                    <div>
                        <Link href="/">
                            <img src="/images/logo.png" width={100} alt="" />
                        </Link>
                        <p className="mb-6 text-gray-400">
                            Douala-Prime propose une vaste gamme de produits de haute qualité à des prix compétitifs. Nous nous engageons à vous offrir une expérience d'achat exceptionnelle,
                            avec une livraison rapide et un excellent service client.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.facebook.com/doualaprime"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-indigo-600"
                            >
                                <Facebook className="h-5 w-5 text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-indigo-600"
                            >
                                <Twitter className="h-5 w-5 text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-indigo-600"
                            >
                                <Instagram className="h-5 w-5 text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-indigo-600"
                            >
                                <Youtube className="h-5 w-5 text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('home')} className="text-gray-400 transition-colors hover:text-white">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                                    A Propos
                                </Link>
                            </li>
                            <li>
                                <Link href={route('contacts.create')} className="text-gray-400 transition-colors hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href={route('blog')} className="text-gray-400 transition-colors hover:text-white">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Service client</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('user.dashboard')}  className="text-gray-400 transition-colors hover:text-white">
                                    Mon compte
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders" className="text-gray-400 transition-colors hover:text-white">
                                    Historique des commandes
                                </Link>
                            </li>
                            <li>
                                <Link href="/wishlist" className="text-gray-400 transition-colors hover:text-white">
                                    Liste de souhaits
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-gray-400 transition-colors hover:text-white">
                                    Retours
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-400 transition-colors hover:text-white">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 transition-colors hover:text-white">
                                    Conditions générales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contactez-nous</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="mt-1 mr-3 h-5 w-5 text-indigo-500" />
                                <span className="text-gray-400">
                                    Deido Grand Moulin
                                    <br />
                                    MRS Omnisports
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 h-5 w-5 text-indigo-500" />
                                <span className="text-gray-400">
                                    +237 670 85 72 04
                                    <br />
                                    +237 699 01 35 35
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 h-5 w-5 text-indigo-500" />
                                <span className="text-gray-400">doualaprime@commande.com</span>
                            </li>
                            <li className="flex items-center">
                                <Clock className="mr-3 h-5 w-5 text-indigo-500" />
                                <span className="text-gray-400">Lundi - Samedi : 8H - 18H</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="mb-4 text-gray-400 md:mb-0">© {new Date().getFullYear()} Douala-Prime. Tous droits réservés.</p>
                    <div className="flex space-x-6">
                        <img src="/images/payment-4.png" alt="Payment" className="h-8" />
                        <img src="/images/payment-3.png" alt="Payment" className="h-8" />
                        <img src="/images/payment-2.png" alt="Payment" className="h-8" />
                        <img src="/images/payment-1.png" alt="Payment" className="h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
