import CustomButton from './button';
import "./card.css"

const ProductCard = () => {
    return (
        <div className="productCard bg-pink flex flex-col rounded-2xl px-6 py-8 max-w-xs mx-auto transform hover:-translate-y-3 transition-all ease-in-out duration-300 shadow-xl hover:bg-softPink m-5" >
            <div className='text-center'>
                <h3 className='text-center text-base font-semibold'>Combine</h3>
                <h2 className="text-xl font-bold mb-2  ">Therapy + Medication</h2>
                <p className="text-base font-medium text-gray-600 mb-4 leading-5">The most proactive approach to long-term care: Includes all the features of both plans</p>
                <p className="text-xl font-bold text-indigo-400 mb-6">
                    $365 / Month
                </p>
            </div>
            <p className='text-gray-600 text-base mx-3 mt-16 text-center'><span className='font-bold'>80%</span> of people who combined medication and therapy avoided a recurrence of depression </p><a href="https://www.health.harvard.edu/staying-healthy/medication-or-therapy-for-depression-or-both" class="text-gray-600 text-base mx-3 text-center underline">
                Harvard Health Publishing
            </a>


            <CustomButton text="Get Started" />
        </div>
    );
};

export default ProductCard;
