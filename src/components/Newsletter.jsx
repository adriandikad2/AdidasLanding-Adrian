function Newsletter() {
  return (
    <div className="bg-adidas-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            JOIN OUR ADICLUB & GET 15% OFF
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-300">
            Sign up for our newsletter to stay up to date with the latest products, events, and exclusive offers.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md" placeholder="Enter your email"/>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-adidas-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                SIGN UP
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            By signing up, you agree to our{" "}
            <a href="#" className="text-white font-medium underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white font-medium underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter