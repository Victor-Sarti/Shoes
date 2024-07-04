import cherry from "./assets/cherry.png"
import green from "./assets/green.png"
import blue from "./assets/blue.png"
import yellow from "./assets/yellow.png"
import arrowR from "./assets/arrowR.svg"
import arrowL from "./assets/arrowL.svg"

const Section = () => {
    return (
        <section>
            <div>
                <div>
                    <img src={cherry} alt="dunk" />
                </div>

                <div>
                    <p> Cherry</p>

                    <h2> Nike Dunk</h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, esse.</p>

                    <button> Saiba Mais</button>
                </div>
            </div>

            <div>
                <button><img src={arrowR} alt="Arrow-right" /></button>
                <button><img src={arrowL} alt="Arrow-Left"/></button>
            </div>

            <div>
                <div> 01 </div>
                <ul>
                    <li className=" active:" ></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    );
};

export default Section
