import "./Section_1.css";
import group_1006 from "../../Assets/Group 1006.png"

const Section_1 = () => {
    return (
        <>
            <div className="section_1">
                <div className="left-section_1">
                    <h2>
                        Don't just integrate <br />
                        <span className="color-primary">Accelerate your CRM </span>
                    </h2>
                    <p>Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process. </p>
                    <button className="cta-primary">GET STARTED</button>
                </div>
                <div className="right-section_1">
                    <img className="section_1-img" src={group_1006} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section_1;