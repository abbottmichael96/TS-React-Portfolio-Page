import { useState, useEffect } from "react";


export function Hero() {
  const text = ["Hi!", "Hey!", "Yo!"];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const elem = document.getElementById("title");
    if (!elem) return;

    const inst = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % text.length);
      elem.innerHTML = text[counter];
    }, 1000);

    return () => clearInterval(inst);
  }, [counter, text]);

  const [nav, setNav] = useState(["About", "Portfolio", "Contact"]);



  return (
    <main>
      <section className="bg-stone-700 h-screen w-full pt-10 sm:pt-0 relative flex items-center justify-center overflow-hidden">
        <div className="bg-stone-600 w-full max-w-4xl rounded-3xl shadow-sm drop-shadow-2xl flex flex-col sm:flex-row justify-center items-center mt-10 mx-3 sm:-mt-24 px-4 sm:px-0 overflow-hidden">
          <img
            className="rounded-full h-24 sm:h-36 mt-5 sm:mt-0"
            src="src/assets/mike.png"
            alt="Mike"
          />
          <div className="sm:ml-8 space-y-6 py-5 sm:px-4 px-6 text-center sm:text-left">
            <div className="space-y-1">
              <p id="title" className="text-4xl sm:text-5xl xl:text-6xl text-slate-50">
                Hi!
              </p>
              <p className="text-3xl sm:text-4xl xl:text-5xl text-slate-50">
                I'm Michael,
              </p>
              <p className="text-3xl sm:text-4xl xl:text-5xl text-slate-50">
                Full Stack Developer
                <span className="animate-bounce inline-block">.</span>
              </p>
            </div>
            <div className="flex space-x-2 justify-center sm:justify-start w-full">
              {nav.map((item, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 text-base font-medium leading-6 text-slate-50 bg-stone-700 border-2 border-slate-50 rounded-full shadow-sm hover:bg-slate-50 hover:text-stone-700 hover:border-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}