import { Link } from 'react-router-dom'

export default function About() {
    return <div>
        <main>
            <p>This website is a coursework produced by a student of the School of Big Data and Software, Chongqing University.</p>        </main>
        <div>
            <button>
                <Link className='App-link' to="/">home</Link>
            </button>
        </div>
    </div>
}