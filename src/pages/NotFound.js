import { Link } from 'react-router-dom'

export default function NotFound() {
    return <div>
        <main>
            <h2>404 NotFound!!!</h2>
        </main>
        <div>
            <button>
                <Link className='App-link' to="/">home</Link>
            </button>
        </div>
    </div>
}