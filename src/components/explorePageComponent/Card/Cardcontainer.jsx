import data from './cardData';
import ProductCard from './Card';
import ProductCardSpecial from './CardSpecial';
import Carousel from './MobileCard';

const CardContainer = () => {
    return <div className='cardContainer mt-24 md:px-28 mb-24'>

        <h1 className='text-center font-bold text-3xl mb-12'>Find your way forward</h1>
        <div className='cards hidden md:flex flex-col md:flex-row gap-4'>
            <ProductCard data={data[0]} />
            <ProductCardSpecial />
            <ProductCard data={data[1]} />
        </div>
        <div className="md:hidden">
            <Carousel data={[<ProductCard data={data[0]} />,
            <ProductCardSpecial />,
            <ProductCard data={data[1]} />]} />
        </div>



    </div>
};
export default CardContainer