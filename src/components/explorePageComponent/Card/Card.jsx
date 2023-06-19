import CustomButton from './button';
import "./card.css"

const ProductCard = ({ data }) => {
    return (
        <div className="productCard bg-pink flex flex-col rounded-2xl px-6 py-8 max-w-xs mx-auto transform hover:-translate-y-3 transition-all ease-in-out duration-300 shadow-xl hover:bg-softPink m-5" >
            <div className='text-center'>
                <h2 className="text-xl font-bold mb-2  ">{data.heading}</h2>
                <p className="text-base font-medium text-gray-600 mb-4 leading-5">{data.para}</p>
                <p className="text-xl font-bold text-indigo-400 mb-6">
                    {data.price}
                </p>
            </div>
            <ul className="mb-6">
                {data.features.map((feature) => (
                    <li className="text-gray-600 mb-2 flex flex-row items-center gap-2">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODg1Mzc2IDUuMjExMDVMMi43MzU5IDMuNDcwMjdMNi4zMDQ0OCA2LjQ1NDM1TDEzLjMwOTcgMC4xMTMyODFMMTUuNTcyMiAyLjA1Mjk4TDYuMzA0NDggMTAuMjk2N0wwLjg4NTM3NiA1LjIxMTA1WiIgZmlsbD0iIzg2ODJBQiIvPgo8L3N2Zz4K" alt="" />
                        <p className="text-base pl-1">{feature}</p>
                    </li>
                ))}
            </ul>
            <CustomButton text="Get Started" />
        </div>
    );
};

export default ProductCard;
