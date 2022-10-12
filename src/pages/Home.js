import { Link } from 'react-router-dom'

export default function Home() {
    return <div>
        <main>
            <h2>Welcome to the home page</h2>
        </main>
        <div>
            <button>
                <Link className='App-link' to="/about">about</Link>
            </button>|
            <button>
                <Link className='App-link' to="/clock">clock</Link>
            </button>|
            <button>
                <Link className='App-link' to="/calculator">calculator</Link>
            </button>
        </div>
    </div>
}