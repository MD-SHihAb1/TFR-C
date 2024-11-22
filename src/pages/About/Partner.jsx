

const Partner = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Partner 1 */}
        <div className="flex flex-col items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
            alt="Partner Logo"
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Partner One</h3>
          <p className="text-lg text-gray-600">Leading Supplier of Electronics</p>
        </div>
        {/* Partner 2 */}
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt="Partner Logo"
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Partner Two</h3>
          <p className="text-lg text-gray-600">Innovative Apparel Brand</p>
        </div>
        {/* Partner 3 */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-olly-948873.jpg&fm=jpg"
            alt="Partner Logo"
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Partner Three</h3>
          <p className="text-lg text-gray-600">Eco-Friendly Packaging Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
