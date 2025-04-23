function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Adizero Adios Pro 3",
      category: "Running",
      price: 190,
      image:
        "https://www.adidas.co.id/media/catalog/product/i/d/id3614_2_footwear_photography_side20lateral20view_grey.jpg",
    },
    {
      id: 2,
      name: "Stan Smith",
      category: "Originals",
      price: 100,
      image:
        "https://www.adidas.co.id/media/catalog/product/i/d/id2032_2_footwear_photography_side20lateral20view_grey.jpg",
    },
    {
      id: 3,
      name: "NMD R1",
      category: "Originals",
      price: 140,
      image:
        "https://www.adidas.co.id/media/catalog/product/h/q/hq4452_2_footwear_photography_side20lateral20view_grey.jpg",
    },
    {
      id: 4,
      name: "Tiro 24 Track Pants",
      category: "Soccer",
      price: 45,
      image:
        "https://www.adidas.co.id/media/catalog/product/i/p/ip1952_1_apparel_photography_front20view_grey.jpg",
    },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
        <p className="mt-4 text-gray-500">
          Check out our latest and greatest products, designed to help you perform at your best.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-block bg-adidas-black py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-gray-800">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts