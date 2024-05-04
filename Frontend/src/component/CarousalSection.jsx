

export default function CarouselSection() {
  return (
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The National Aeronautics and Space Administration
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 animate-rotate-y w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img 
                              src="https://static.euronews.com/articles/stories/07/15/67/58/1200x675_cmsv2_fefa7856-c1d6-5355-a61a-248c39b3329a-7156758.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center "
                            />
                          </div>
                          <div className="h-64 animate-rotate-y w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://www.astronomy.com/wp-content/uploads/sites/2/2024/04/NASA_Bruce_McCandless_Free_floating.jpg?fit=1041%2C1049"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 animate-rotate-y w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://i.abcnewsfe.com/a/31b776b5-8fd7-43d4-9dd3-470f44bf236f/webb-11-ht-gmh-221019_1666203443052_hpMain_16x9.jpg?w=1600"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 animate-rotate-y w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://www.redwolf.in/image/cache/catalog/stickers/nasa-logo-sticker-india-438x438.jpg?m=1687857680"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 animate-rotate-y overflow-hidden rounded-lg">
                            <img
                              src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q3/669461/we-drive-the-mars-opportunity-rover-review-car-and-driver-photo-671067-s-original.jpg?fill=1:1&resize=1200:*"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 animate-rotate-y overflow-hidden rounded-lg">
                            <img
                              src="https://hips.hearstapps.com/hmg-prod/images/lede-1620061877.jpg?crop=1.00xw:0.798xh;0,0.0578xh&resize=2048:*"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 animate-rotate-y overflow-hidden rounded-lg">
                            <img
                              src="https://starlust.org/wp-content/uploads/elementor/thumbs/iss-size-pvz0yaqdbp22hzjwkipfpp89wj4xn13jtdearf6a6o.webp"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <a
                    href="https://www.nasa.gov/"
                    className="inline-block hover:animate-shake rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Read More 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  );
}
