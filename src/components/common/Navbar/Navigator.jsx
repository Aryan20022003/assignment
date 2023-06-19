import { Link } from 'react-router-dom';

const navigator = () => {
    return <>
        <Link to="/explore" className="text-purple-950 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Explore Plans
        </Link>

        <Link to="/therapy" className="text-purple-950 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Therapy
        </Link>

        <Link to="/medication" className="text-purple-950 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Medication
        </Link>

        <Link to="/insurance" className="text-purple-950 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Insurance
        </Link>

        <Link to="/about" className="text-purple-950 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
            About
        </Link>
    </>
}

export default navigator;