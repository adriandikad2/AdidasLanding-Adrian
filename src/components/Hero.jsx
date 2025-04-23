function Hero() {
  return (
    <div className="relative bg-adidas-black">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/48013/pexels-photo-48013.jpeg?cs=srgb&dl=pexels-hikaique-48013.jpg&fm=jpg"
          alt="Adidas running shoes"
        />
        <div className="absolute inset-0 bg-adidas-black opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          IMPOSSIBLE IS NOTHING
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          From sports to streets, adidas has you covered. Explore the latest styles and innovations designed to help you perform at your best.
        </p>
        <div className="mt-10 flex space-x-4">
          <a href="#" className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-adidas-black hover:bg-gray-100">
            SHOP MEN
          </a>
          <a href="#" className="inline-block bg-transparent py-3 px-8 border border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-adidas-black">
            SHOP WOMEN
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero