import '../../styles/css/style.css';

export default function Hero() {
    return (
        <section id="hero-wrapper" className="wrapper">
            <div className="hero container section">
                <div className="hero__text">
                    <h1 className="hero__title">More than just<br/> shorter links</h1>
                    <p className="hero__description">Build your brand's recognition and get detailed<br/> insights on how your links are performing.</p>
                    <a href="#" className="hero__btn btn">Get Started</a>
                </div>
                <div className="hero__image">
                    <img src={require('../../assets/images/hero/illustration-working.svg').default} alt="Illustration Working"/>
                </div>
            </div>
        </section>
    );
}