import "./Section_2.css"

import vector_10063 from "../../Assets/Group 1006-3.png"
import vector_10064 from "../../Assets/Group 1006-4.png"
import vector_10065 from "../../Assets/Group 1006-5.png"

const Section_2 = () => {

    const cardData = [
        {
            id: 1,
            image: vector_10063,
            heading: "Never update your contacts manuall",
            textDetails: "Everything CRM Integrations was supposed to be. And more."
        },
        {
            id: 2,
            image: vector_10064,
            heading: "Engage instantly with prospects who show intent",
            textDetails: "Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat."
        },
        {
            id: 3,
            image: vector_10065,
            heading: "Outreach without leaving your CRM",
            textDetails: "Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach."
        }
    ]


    return (
        <>
            <div className="section_2">
                <div className="section_2_sub_container">
                    <div className="center-txt">
                        <h2>CRM Acceleration</h2>
                        <p>Everything CRM Integrations was supposed to be. And more.</p>
                    </div>

                    <div className="card-group">

                        {cardData.map((data, id) => {

                            return <div className="card" key={id}>
                                <img src={data.image} alt="" />
                                <h4>{data.heading}</h4>
                                <p>{data.textDetails}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section_2;
