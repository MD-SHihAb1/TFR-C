import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "../../../Hooks/useUserData";

const AddProducts = () => {
  const userData = useUserData();
  console.log(userData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    // Check if user is approved
    if (userData.status === "pending") {
      // Show SweetAlert2 message if status is pending
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Your account is not verified yet.",
        text: "Please wait for approval before posting products.",
        showConfirmButton: true,
      });
      return; // Prevent product posting
    }

    // Proceed with product posting if status is approved
    const title = data.title;
    const price = parseFloat(data.price);
    const description = data.description;
    const category = data.category;
    const sellerEmail = user.email;
    const stock = parseInt(data.stock);
    const brand = data.brand;
    const image = data.imageURL;

    const product = {
      title,
      price,
      description,
      category,
      sellerEmail,
      stock,
      brand,
      image,
    };

    const token = localStorage.getItem("access-token");

    // Make the API request to post the product
    axios
      .post("http://localhost:5000/add-products", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          // Show success message when product is added successfully
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error posting product", error);
        // Handle error (e.g., display an error message)
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error",
          text: "Something went wrong, please try again later.",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-12">Add Products</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex gap-8 w-full">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Product Title"
                className="w-full p-2 border border-black rounded-md"
                required
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Product brand"
                className="w-full p-2 border border-black rounded-md"
                required
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="lg:flex gap-8 w-full">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Product price"
                className="w-full p-2 border border-black rounded-md"
                required
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="Product stock"
                className="w-full p-2 border border-black rounded-md"
                required
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Product Category"
                className="w-full p-2 border border-black rounded-md"
                required
                {...register("category", { required: true })}
              />
              {errors.category && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Product image"
              className="w-full p-2 border border-black rounded-md"
              required
              {...register("imageURL", { required: true })}
            />
            {errors.imageURL && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Product description"
              className="w-full p-2 border border-black rounded-md"
              required
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
