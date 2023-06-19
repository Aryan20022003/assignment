import { Link } from 'react-router-dom';

const SignIn = () => {
    return <>
        <Link to="/login" className="text-purple-950 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Login
        </Link>

        <Link to="/get-started" className="text-white bg-violet-800 rounded-full px-8 py-3  shadow-md shadow-slate-600 text-center font-medium hover:scale-105">
            Get started
        </Link>
    </>

}

export default SignIn;