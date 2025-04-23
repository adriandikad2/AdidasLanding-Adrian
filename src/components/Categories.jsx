function Categories() {
  const categories = [
    {
      name: "Running",
      image:
        "https://pbs.twimg.com/media/E5YHj7OWQAEktI_.jpg",
      description: "Elevate your run with the latest adidas running shoes and apparel.",
    },
    {
      name: "Originals",
      image:
        "https://i.pinimg.com/736x/b6/5a/24/b65a240177b30f6726fb038759f37ae2.jpg",
      description: "Iconic styles reimagined for today's streets.",
    },
    {
      name: "Soccer",
      image:
        "https://pbs.twimg.com/media/GPJIL6RX0AAaism.jpg",
      description: "Gear up with the latest soccer cleats, jerseys, and training wear.",
    },
  ]

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">Find the perfect gear for your sport or style.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0" />
                  {category.name}
                </a>
              </h3>
              <p className="text-base text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories