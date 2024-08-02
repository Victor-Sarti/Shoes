import cherry from "./assets/cherry.png"
import green from "./assets/green.png"
import blue from "./assets/blue.png"
import yellow from "./assets/yellow.png"
import arrowR from "./assets/arrowR.svg"
import arrowL from "./assets/arrowL.svg"
import './styles.css'


const Section = () => {
    return (
        <section className="  h-screen relative">
            <div className=" w-3/4 h-full m-auto relative">
                <div className=" absolute inset-0  slide-in">
                    <div className=" absolute w-3/5 translate-y-1/3 ">
                         <img className=" w-full  translate-x-1/4 -rotate-[30deg]  rot-car " src={cherry} alt="dunk " />
                    </div>
                    
                </div>


                <div className=" absolute h-full w-3/4 right-24 flex flex-col items-end  justify-end gap-5">
                   
                    <p className=" enter0  font-semibold"> Nike</p>

                    <h2 className=" enter1 text-7xl"> Cherry Dunk</h2>

                    <p className="enter2 text-neutral-500  text-sm text-right max-w-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem placeat non odit delectus hic eveniet quos debitis est! Dolore expedita delectus temporibus labore hic placeat.</p>

                    <button  className=" uppercase border-2  border-green-600 mb-10 w-32 h-9 bg-lime-400 rounded-lg text-black pointer"> Saiba Mais</button>
                </div>
               
            </div>

            <div className=" absolute w-[70vw] top-2/4 left-2/4  -translate-x-2/4  -translate-y-6 flex justify-between ">
                <button className=" hover:bg-lime-400 top-2/4 w-12 h-12 border rounded-full cursor-pointer "><img className="w-7 mt-2 translate-x-2 -translate-y-1 cursor-pointer" src={arrowL} alt="Arrow-Left"/></button>
                <button className=" hover:bg-lime-400 top-2/4 w-12 h-12 border rounded-full cursor-pointer "><img className="w-7 mt-2 translate-x-2 -translate-y-1 cursor-pointer" src={arrowR} alt="Arrow-right" /></button>
            </div>

            <div className=" absolute top-2/4 left-2/4 h-48 w-[90vw] -translate-x-2/4 flex flex-col justify-end gap-4">
                <div className=" text-5xl font-semibold"> 01 </div>
                <ul className=" flex gap-4">
                    <li className="w-12 h-1  border rounded-md duration-75 active: bg-white " ></li>
                    <li className=" w-12 h-1  bg-lime-400 border rounded-md duration-75 " ></li>
                    <li className=" w-12 h-1  bg-lime-400 border rounded-md duration-75" ></li>
                    
                </ul>
            </div>
        </section>
    );
};

export default Section
