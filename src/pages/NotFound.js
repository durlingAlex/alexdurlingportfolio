import {Link} from 'react-router-dom';
function NotFound(){
    return(
        <section className='notFound'>
            <h1>404 - Page not found</h1>
            <p>The page you are trying to access does not exist</p>
            <Link to="/" className="btn">Go back to Home</Link>
        </section>
    );
}
export default NotFound;