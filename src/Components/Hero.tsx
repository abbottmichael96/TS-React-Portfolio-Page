import { useState } from "react";


export function Hero() {

    const text = ["Hi!", "Hey!","Yo!"];
    let counter = 0;
    const elem = document.getElementById('title')!;
    const inst = setInterval(change, 5000);

    function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
    counter = 0;
        }
    }

    const [nav, setNav] = useState(["About", "Portfolio", "Contact"])

    return(
        <main className="h-screen w-screen absolute  flex items-center justify-center ">
            <section className=" bg-stone-600 sm:rounded-lg shadow h-screen sm:h-1/3 xl:h-1/2 whitespace-normal  sm:grid sm:self-center">
                    <div className="flex flex-row flex-wrap justify-items-center sm:space-x-12  pr-5 items-center">
                        <img className="rounded-full h-28 my-10 ml-10 sm:ml-16" src='src/assets/mike.png' alt="Mike"></img>
                        <div className="sm:space-y-6 xl:space-y-12 sm:-mt-1 ml-5 space-y-6 ">
                            <div>
                                <p id ='title' className=" text-5xl xl:text-7xl text-slate-50 ">Hi!</p>
                                <p className="text-4xl xl:text-6xl text-slate-50">I'm Michael,</p>
                                <p className="text-4xl xl:text-6xl text-slate-50">Full Stack Developer
                                    <span className="animate-bounce inline-block">.</span>
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                {nav.map((nav, idx) => (
                                    <button key={idx} className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-slate-50 whitespace-no-wrap bg-stone-700 border-2 border-slate-50 rounded-full shadow-sm hover:bg-slate-50 hover:text-stone-700 hover:border-white">
                                        {nav}
                                    </button>    
                                ))}
                            </div>
                        </div>
                    </div>
            </section>
        </main>
                
    )
}