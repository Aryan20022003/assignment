import Carousel from "./Cursoal"
import "./container.css";
const container = () => {
    return <div className="containerCursoal flex-col justify-center align-middle pt-14 px-4 md:px-16 pb-14">
        <div className="text-center">
            <h1 className="font-bold text-2xl md:text-3xl text-slate-800 tracking-wide leading-10 md:mb-3 mb-2">Plans to empower your mind and transform your life</h1>
            <p className="text-lg md:text-base leading-7 md:leading-8 text-gray-500">Get the right tools and services for optimizing your mental health</p>
        </div>
        <Carousel />
    </div>
}
export default container;