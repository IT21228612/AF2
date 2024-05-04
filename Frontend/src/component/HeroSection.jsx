import React from "react";

export default function HeroSection() {
  return (
    <div  >
      <section style={{ height: '25rem' }} className=" animate-change1 bg-no-repeat bg-cover  bg-clip-border bg-origin-padding h-64 dark:bg-gray-900 " >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto animate-rotate-y place-self-center lg:col-span-7">
            <h1 className="animate-fade-right animate-once animate-once max-w-2xl mb-4 mt-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">
            NASA API Display
            </h1>
            <p className="animate-fade-right animate-once max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Unlocking the Universe: NASA API Display, Empowering Exploration through NASA's Digital Frontier...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
