import '../../styles/css/style.css';
import brand from '../../assets/images/highlights/icon-brand-recognition.svg';
import detailed from '../../assets/images/highlights/icon-detailed-records.svg';
import fully from '../../assets/images/highlights/icon-fully-customizable.svg';

export default function Highlights() {
    return (
        <section id="highlights-wrapper" className="wrapper">
            <div className="highlights container section">
                <header className="highlights__header">
                    <h2 className="highlights__title">Advanced Statistics</h2>
                    <p className="highlights__description">Track how your links are performing across the web with<br/> our advanced statistics dashboard.</p>
                </header>

                <div className="highlights__cards">
                    <hr/>
                    <HighlightCard
                        icon={brand}
                        title="Brand Recognition"
                        description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                    />
                    <HighlightCard
                        icon={detailed}
                        title="Detailed Records"
                        description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                    />
                    <HighlightCard
                        icon={fully}
                        title="Fully Customizable"
                        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                    />
                </div>
            </div>
        </section>
    );
}

function HighlightCard({icon, title, description}) {
    return (
        <div className="highlights__card">
            <div className="highlights__card-icon">
                <img src={icon} alt="Icon"/>
            </div>
            <h3 className="highlights__card-title">{title}</h3>
            <p className="highlights__card-description">{description}</p>
        </div>
    );
}