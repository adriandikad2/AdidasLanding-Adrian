function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              THROUGH SPORTS, WE HAVE THE POWER TO CHANGE LIVES
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Sports has the power to change lives. It teaches us teamwork, resilience, and the pursuit of excellence. At adidas, we believe that through sport, we have the power to change lives.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-adidas-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  <strong className="font-medium text-gray-900">Sustainability</strong> - We're committed to creating products that don't compromise on performance, durability or style.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-adidas-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  <strong className="font-medium text-gray-900">Innovation</strong> - We continuously innovate to create products that help athletes perform better.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-adidas-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  <strong className="font-medium text-gray-900">Community</strong> - We support athletes and communities around the world to make sport accessible to all.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a3d04792671503.5e5110bbe3b14.jpg" alt="Adidas sustainability" className="w-full h-full object-center object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About