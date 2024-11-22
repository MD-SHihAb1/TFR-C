import { useEffect, useState } from "react";
import useUserData from "../Hooks/useUserData";
import axios from "axios";
import ProductCard from "../pages/Home/ProductCard";
import WishlistCard from "../pages/Home/WishlistCard";
import Loader from "../pages/Lodder/Loader";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latestData, setLatestData] = useState(true);
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
        setLoading(true);
      await axios
        .get(`http://localhost:5000/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
            setWishlist(res.data)
            setLoading(false);
        }
    
    );
    };
    if (userData._id && token) {
      fetchWishlist();
    }
  }, [token, userData._id, latestData]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">My Wishlist</h1>
      {
        loading?
        <Loader></Loader>:
      <>
          <div>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {wishlist.map((product) => (
              <div key={product._id}>
                <ProductCard
                product={product}
                 isInWishlist
                 setLatestData={setLatestData}
                 latestData={latestData}
                 />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h1>No Product In your Wishlist</h1>
          </div>
        )}
      </div>
      </>
      }
    </div>
  );
};

export default MyWishlist;
