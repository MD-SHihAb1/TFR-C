import { useEffect, useState } from "react";
import FilterBar from "../../components/Products/FilterBar";
import SearchBar from "../../layouts/Footer/SearchBar";
import SortByPrice from "../../layouts/Footer/SortByPrice";
import axios from "axios";
import Loading from "../../../src/pages/Lodder/Loader";
import ProductCard from "../../pages/Home/ProductCard";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:5000/all-products?title=${search}&page=${page}&limit=${12}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          console.log(res.data);
          setProduct(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setTotalPage(Math.ceil(res.data.totalProduct / 9));
          setLoading(false);
        });
    };

    fetch();
  }, [search, sort, category, brand, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setCategory("");
    setBrand("");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>
      {/* Search bar and sorting */}
      <div className=" lg: flex gap-4 justify-between items-center mb-6">
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <SortByPrice setSort={setSort}></SortByPrice>
      </div>
      {/* Content */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          ></FilterBar>
        </div>
        {/* Products */}
        <div className="col-span-10">
          Products
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              {product.length === 0 ? (
                <div className="w-full h-full items-center justify-center">
                  <h1 className="text-3xl text-center font-bold">
                    No Product Found
                  </h1>
                </div>
              ) : (
                <div className="min-h-screen grid grid-cols-3 gap-2">
                  {product.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))}
                </div>
              )}
            </>
          )}
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 my-8">
            <button
              className="btn p-2 border rounded-full border-black hover:bg-base-300"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <FaRegArrowAltCircleLeft className="text-4xl font-bold" />
            </button>
            <p className="font-serif">
              Page {page} of {totalPage}
            </p>
            <button
              className="p-2 border rounded-full border-black hover:bg-base-300"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPage}
              
            >
              <FaRegArrowAltCircleRight className="text-4xl font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
