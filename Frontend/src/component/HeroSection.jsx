import React from "react";

export default function HeroSection() {
  return (
    <div>
      <section className="bg-hero-pattern3 bg-no-repeat bg-cover bg-fixed bg-clip-border bg-origin-padding h-64 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="animate-fade-right animate-once animate-once max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">
             The NASA
            </h1>
            <p className="animate-fade-right animate-once max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            The National Aeronautics and Space Administration is an independent agency
            of the U.S. federal government responsible for the civil space program,
            aeronautics research, and space research..
            </p>

            <a
              href="https://www.nasa.gov/" 
              target="_blank"
              className="animate-jump animate-once inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-yellow-200 border border-gray-300 rounded-lg hover:bg-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              See more ...
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
