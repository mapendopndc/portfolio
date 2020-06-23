import '../styles/modules/Home.module.scss'

const Home = () => (
    <div className="container">
        <h1 className="title">MAPENDO</h1>
        <h2 className="side-text left">PORT</h2>
        <h2 className="side-text right">FOLIO</h2>
        <div className="profile-pic">
            <img src="/profile.jpg" alt="Profile Picture"/>
            <p className="hero"> COMING SOON</p>
        </div>
    </div>
)

export default Home;