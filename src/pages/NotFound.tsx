import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl uppercase">
                    <span>404</span>
                    <span>not</span>
                    <span>found</span>
                </h1>
                <Link
                    to="/"
                    className="text-black font-bold text-1xl uppercase mt-10 hover:text-secondary"
                >
                    Go back home
                </Link>
            </div>
        </>
    );
}

export default NotFound;
