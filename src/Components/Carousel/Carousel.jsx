
import "./Carousel.css";
import vector from "../../Assets/Vector.png";
import aadam from "../../Assets/adam.png";
import double_logo from "../../Assets/double-logo.png"
 
const Carousel = () => {
    return (
        <>
            <div className="center">
                <h2>What our customers have to say</h2>
            </div>
            <div className="carousel-container">

                <div className="carousel-container-left-side">
                    <img className="img-vector" src={vector} alt="" />
                    <p>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%</p>

                    <div className="carousel-container-left-bottom-side">
                        <div>
                           <img className="carousel-left-logo" src={double_logo} alt="" />
                        </div>
                        <div className="line">

                        </div>
                        <div>
                            <p>Adam Weinger</p>
                            <p>President,Double The Donation  </p>
                        </div>
                    </div>

                </div>

                <div className="carousel-container-right-side">
                <img src={aadam} alt="" />
                </div>

            </div>
            <div className="btn-center">
                <button id="carousel-btn">←</button>
                <button id="carousel-btn">→</button>
            </div>
        </>
    )
}

export default Carousel;