import AudioHifi from '@/components/ecommerce/Homepage/AudioHifi';
import BannerAndSlider from '@/components/ecommerce/Homepage/BannerAndSlider';
import BestSeller from '@/components/ecommerce/Homepage/BestSeller';
import BlenderHachoir from '@/components/ecommerce/Homepage/BlenderHachoir';
import Brand from '@/components/ecommerce/Homepage/Brand';
import Category from '@/components/ecommerce/Homepage/Category';
import Climatiseurs from '@/components/ecommerce/Homepage/Climatiseurs';
import Congelateurs from '@/components/ecommerce/Homepage/Congelateurs';
import Cuisinieres from '@/components/ecommerce/Homepage/Cuisinieres';
import Deals from '@/components/ecommerce/Homepage/Deals';
import Infos from '@/components/ecommerce/Homepage/Infos';
import MachinesALaver from '@/components/ecommerce/Homepage/MachinesALaver';
import Promo from '@/components/ecommerce/Homepage/Promo';
import Refrigerateurs from '@/components/ecommerce/Homepage/Refrigerateurs';
import SpecialOffer from '@/components/ecommerce/Homepage/SpecialOffer';
import Televiseurs from '@/components/ecommerce/Homepage/Televiseurs';
import EcomLayout from '@/layouts/ecom-layout';

export default function Home() {
    return (
        <EcomLayout>
            <BannerAndSlider />
            <Infos />
            <Category />
            <BestSeller />
            <SpecialOffer />
            <Brand />
            <Congelateurs />
            <Refrigerateurs />
            <Cuisinieres />
            <Deals />
            <MachinesALaver />
            <AudioHifi />
            <Televiseurs />
            <Promo />
            <Climatiseurs />
            <BlenderHachoir />
        </EcomLayout>
    );
}
