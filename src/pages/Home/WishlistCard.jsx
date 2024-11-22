

const WishlistCard = ({product}) => {
    return (
        <div className="grid grid-col-3">
            <div>
            <div>
      <div className="rounded-md border-1 shadow-md">
        <figure>
          <img
            src={product.image}
            alt="Product Image"
            className="object-cover h-60 w-full rounded-t-md"
          />
        </figure>
        <div className="p-2 ">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <h2 className="font-semibold">{product.brand}</h2>
          <h2 className="text-sm">
            Price: $ <span className="text-red-600">{product.price}</span>
          </h2>
          <h2 className="text-sm">
            InStock: <span className="text-red-600">{product.stock}</span>
          </h2>
          <h2 className="text-sm font-semibold">{product.category}</h2>
          <p className="text-xs mt-1">
            {product.description.length < 50
              ? `${product.description}`
              : `${product.description.slice(0, 50)}...`}
          </p>
          <div className="mt-4">
            <button className="btn w-full">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default WishlistCard;