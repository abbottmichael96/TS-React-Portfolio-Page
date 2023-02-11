import { useRef } from "react";


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
    
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
        }
    }           


    return(
        <div class="h-screen w-screen absolute  flex items-center justify-center ">
            <div class=" bg-stone-600 sm:rounded-lg shadow h-screen sm:h-1/3 whitespace-normal  sm:grid sm:self-center">
                    <div class="flex flex-row flex-wrap justify-items-center sm:space-x-12  pr-5 items-center">
                        <img class="rounded-full h-28 my-10 ml-10 sm:ml-16" src='src/assets/mike.png' alt="Mike"></img>
                        <div class="sm:space-y-10 md:space-y-8 md:pt-10 sm:-mt-10 ml-5 space-y-10 ">
                            <div>
                                <p id ='title' class=" text-6xl xl:text-8xl text-slate-50 ">Hi!</p>
                                <p class="text-4xl xl:text-6xl text-slate-50">I'm Michael,</p>
                                <p class="text-4xl xl:text-6xl text-slate-50">Full Stack Developer<span class="animate-bounce inline-block">.</span></p>
                            </div>
                            <div class="flex space-x-2">
                                <button class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-slate-50 whitespace-no-wrap bg-stone-700 border-2 border-slate-50 rounded-full shadow-sm hover:bg-slate-50 hover:text-stone-700 hover:border-white">About</button>
                                <button class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-slate-50 whitespace-no-wrap bg-stone-700 border-2 border-slate-50 rounded-full shadow-sm hover:bg-slate-50 hover:text-stone-700 hover:border-white">Portfolio</button>
                                <button class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-slate-50 whitespace-no-wrap bg-stone-700 border-2 border-slate-50 rounded-full shadow-sm hover:bg-slate-50 hover:text-stone-700 hover:border-white">Contact</button>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
                
    )
}