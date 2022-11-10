import Navigation from "../../components/Header/Navigation"
import './Home.css'

export default function Home() {

    return (
        <div>
            <Navigation />
            <h1 style={{ textAlign: 'center' }}>
                <b className="home-words">
                    灵魂是肉体的监狱
                </b>
            </h1>
        </div>
    )
}