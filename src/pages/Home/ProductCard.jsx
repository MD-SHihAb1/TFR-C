import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert
import useUserData from "../../Hooks/useUserData";

const ProductCard = ({ product, isInWishlist, setLatestData,latestData }) => {
  const userData = useUserData();
  const userEmail = userData?.email;
  const userRole = userData?.role; // Assume the role is available in userData

  const handleWishlist = async () => {
    if (userRole === "admin" || userRole === "seller") {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: `You are an ${userRole} and cannot add products to the wishlist.`,
      });
      return; // Exit the function
    }

    try {
      const response = await axios.patch("http://localhost:5000/wishlist/add", {
        userEmail: userEmail,
        productId: product._id,
      });
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product added to your wishlist!",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the product to the wishlist. Please try again.",
      });
    }
  };


  const handleRemoveFromWishlist = async () => {
    const response = await axios
    .patch("http://localhost:5000/wishlist/remove", {
      userEmail: userEmail,
      productId: product._id,
    });
    console.log(response.data);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Product removed to your wishlist!",
    });
    setLatestData((prev) => !prev);
  } 




  

  return (
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
           {
            isInWishlist ? (
              <button
              onClick={handleRemoveFromWishlist}
              className="btn  btn-sm bg-red-500 text-white"
            >
              Remove from Wishlist
            </button>
            ): (
              <button
              onClick={handleWishlist}
              className="btn btn-primary"
            >
              Add to Wishlist
            </button>
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
