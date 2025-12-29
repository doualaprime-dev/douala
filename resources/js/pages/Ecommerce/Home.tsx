import BannerAndSlider from '@/components/ecommerce/Homepage/BannerAndSlider';
import BestSeller from '@/components/ecommerce/Homepage/BestSeller';
import Blog from '@/components/ecommerce/Homepage/Blog';
import Brand from '@/components/ecommerce/Homepage/Brand';
import Deals from '@/components/ecommerce/Homepage/Deals';
import Infos from '@/components/ecommerce/Homepage/Infos';
import SpecialOffer from '@/components/ecommerce/Homepage/SpecialOffer';
import EcomLayout from '@/layouts/ecom-layout';

export default function Home() {
    return (
        <EcomLayout>
            <BannerAndSlider />
            <Infos />
            <BestSeller />
            <SpecialOffer />
            <Brand />
            <Deals />
            <BestSeller />
            <SpecialOffer />
        </EcomLayout>
    );
}
