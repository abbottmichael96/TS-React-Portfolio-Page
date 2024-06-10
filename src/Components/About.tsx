import React from "react";

export function About() {
  return (
    <main>
      <section className="bg-stone-600 h-1/2 pb-24 w-full sm:pt-36 relative flex items-center justify-center overflow-hidden -z-10">
        <div className="bg-stone-700 w-full max-w-3xl rounded-3xl shadow-sm drop-shadow-2xl flex flex-col justify-center items-center mt-10 mx-4 sm:mt-0 overflow-auto px-4 sm:px-8 py-8">
          <div className="text-center sm:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-slate-50 font-bold">
              About Me
            </h1>
            <p className="text-xl sm:text-xl xl:text-2xl text-slate-50">
            I'm a seasoned Scala developer with a knack for building robust backend systems tailored to enterprise-level applications. I thrive on unraveling complex challenges and take pride in crafting scalable, maintainable code that stands the test of time.
            </p>
            <p className="text-lg sm:text-xl xl:text-2xl text-slate-50">
            In addition to my technical expertise, I've had the opportunity to dive into the realm of government design systems. Working within these frameworks has sharpened my focus on adhering to strict standards and ensuring digital accessibility for all users.
            </p>
            <p className="text-lg sm:text-xl xl:text-2xl text-slate-50">
            In addition to my technical expertise, I've had the opportunity to dive into the realm of government design systems. Working within these frameworks has sharpened my focus on adhering to strict standards and ensuring digital accessibility for all users.
            </p>
            <p className="text-lg sm:text-xl xl:text-2xl text-slate-50">
            With my comprehensive background in Scala development, frontend technologies, and experience with government projects, I'm well-equipped to deliver top-notch solutions that meet the diverse needs of clients and users alike.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
