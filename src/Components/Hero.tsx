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
        <main className="h-screen w-auto relative flex items-center justify-center bg-stone-700 overflow-hidden">
            <section className="bg-stone-600 md:w-8/12 sm:w-11/12 lg:w-7/12 w-screen sm:rounded-lg shadow h-3/4 xl:h-3/4 sm:flex justify-center -mt-36 sm:mt-0">
                    <div className="flex flex-row flex-wrap sm:space-x-12 sm:items-center sm:justify-items-centre">
                        <img className="rounded-full md:h-28 h-24 sm:-ml-12 my-10 ml-6 xl:-24 -mb-18 justify-center items-center sm:-mr-20" src='src/assets/mike.png' alt="Mike"></img>
                        <div className="sm:space-y-6 sm:-mt-1 ml-6 space-y-6 sm:pl-16 py-6">
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