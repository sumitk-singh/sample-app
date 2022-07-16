import "./Section_2.css"

import vector_10063 from "../../Assets/Group 1006-3.png"
import vector_10064 from "../../Assets/Group 1006-4.png"
import vector_10065 from "../../Assets/Group 1006-5.png"

const Section_2 = () => {
    return (
        <>
            <div className="section_2">
                <div className="section_2_sub_container">
                    <div className="center-txt">
                        <h2>CRM Acceleration</h2>
                        <p>Everything CRM Integrations was supposed to be. And more.</p>
                    </div>

                    <div className="card-group">
                        <div className="card">
                            <img src={vector_10063} alt="" />
                            <h4>Never update your contacts manually</h4>
                            <p>Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities</p>
                        </div>

                        <div className="card">
                            <img src={vector_10064} alt="" />
                            <h4>Engage instantly with prospects who show intent</h4>
                            <p>Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.</p>
                        </div>

                        <div className="card">
                            <img src={vector_10065} alt="" />
                            <h4>Outreach without leaving your CRM </h4>
                            <p>Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section_2;
