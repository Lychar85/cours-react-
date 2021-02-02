import Coutries from "../components/Countries"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"

const Home = () =>{
    return(
        <div className="home">
            <Navigation />
            <Logo/>
            <Coutries/>
            <h1>Accueil</h1>
        </div>
    )
}

export default Home