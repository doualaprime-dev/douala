import EcommerceLayout from "@/layouts/ecom-layout";
import { Link } from "@inertiajs/react";
import UserSideBar from "./usersidebar";

interface UserLayoutProps {
    children: React.ReactNode;
    title?: string;
}


export default function UserLayout({ children, title = 'My Account - ShopMart' }: UserLayoutProps) {
    return (
        <EcommerceLayout>
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Link href="/" className="hover:text-indigo-600">
                            Accueil
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-800">Mon compte</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="mb-6 text-2xl font-bold">Mon compte</h1>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <UserSideBar />
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="lg:w-3/4">
                        {children}
                    </div>
                </div>
            </div>
        </EcommerceLayout>
    )
}
