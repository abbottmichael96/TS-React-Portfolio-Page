import { useState } from "react";

export function Hero() {
  const text = ["Hi!", "Hey!", "Yo!"];
  let counter = 0;
  const elem = document.getElementById("title")!;
  const inst = setInterval(change, 5000);

  function change() {
    elem.innerHTML = text[counter];

    if (counter >= text.length) {
      counter = 0;
    }
    counter++;
  }

  const [nav, setNav] = useState(["About", "Portfolio", "Contact"]);

  return (
    <main>
      <section className="bg-stone-700 h-screen w-auto pt-10 sm:pt-0  relative flex items-center justify-center  overflow-hidden">
        <div className="bg-stone-600 sm:w-auto h-auto rounded-3xl shadow-sm drop-shadow-2xl sm:flex justify-center -mt-36 sm:mt-0 overflow-auto w-11/12">
          <div className="flex flex-row flex-wrap sm:space-x-8 items-center sm:justify-items-centre overflow-hidden -ml-4">
            <img
              className="rounded-full sm:h-28 h-24 sm:my-0 mt-5 ml-12 sm:ml-8 xl:-24 -mb-2 sm:-mb-0 justify-center items-center sm:-mr-2"
              src="src/assets/mike.png"
              alt="Mike"
            ></img>
            <div className="sm:-mt-1  space-y-6 sm:pl-1 py-5 sm:px-4 px-10">
              <div className="px-2 sm:px-0 space-y-1">
                <p id="title" className=" text-5xl xl:text-7xl text-slate-50 ">
                  Hi!
                </p>
                <p className="text-4xl xl:text-6xl text-slate-50">
                  I'm Michael,
                </p>
                <p className="text-4xl xl:text-6xl text-slate-50">
                  Full Stack Developer
                  <span className="animate-bounce inline-block">.</span>
                </p>
              </div>
              <div className="flex space-x-2 justify-center sm:justify-start w-auto ml-3 sm:ml-0">
                {nav.map((nav, idx) => (
                  <button
                    key={idx}
                    className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-slate-50 whitespace-no-wrap bg-stone-700 border-2 border-slate-50 rounded-full shadow-sm hover:bg-slate-50 hover:text-stone-700 hover:border-white"
                  >
                    {nav}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
