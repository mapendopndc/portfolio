import '../styles/modules/Home.module.scss'

const Home = () => (
    <div className="container">
        <h1 className="title">MAPENDO</h1>
        <h2 className="side-text left">PORT</h2>
        <h2 className="side-text right">FOLIO</h2>
        <div className="profile">
            <img src="/profile.jpg" alt="Profile Picture"/>
            <div className="card">
                <h3 className="hero">HELLO</h3>
                <p className="about">My name is Mapendo Ngilinga de Carvalho, I'm a serial learner with a passion for software, design, and everything in between.</p>
                <a href="/CV_2B_TECH.pdf" target="_blank" className="link">Resume</a>
                <a href="https://www.linkedin.com/in/mapendopndc" target="_blank" className="link">LinkedIn</a>
                <a href="https://github.com/mapendopndc" target="_blank" className="link">Github</a>
                <a href="/Structural_Report.pdf" target="_blank" className="link">Engineering</a>
                <a href="/Portfolio_2A.pdf" target="_blank" className="link">Design</a>
                <a href="/Research.pdf" target="_blank" className="link">Research</a>
                <a href="https://www.instagram.com/mapendo.ndc" target="_blank" className="link">Photoblog</a>
            </div>
        </div>
    </div>
)

export default Home;