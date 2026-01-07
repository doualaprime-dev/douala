import Footer from '@/components/ecommerce/Footer';
import Header from '@/components/ecommerce/Header';
import { Head } from '@inertiajs/react';
import "../../css/ecommerce.css"; // Ensure you have the correct path to your CSS file

interface EcommerceLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function EcomLayout({ children, title = 'Douala-Prime' }: EcommerceLayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Douala-Prime - Votre destination shopping en ligne unique" />
                <meta name="keywords" content="commerce électronique, achats en ligne, électro-ménager" />
                <meta name="author" content="Douala-Prime Team" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen bg-gray-100">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}
