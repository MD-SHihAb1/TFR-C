const Review = () => {
  return (
    <div className="flex gap-8 justify-center mt-10">
      {/* First Review */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Awesome Product!</h2>
          <p>This product exceeded my expectations. Highly recommend it!</p>
          <div className="flex justify-between">
            <span>- John Doe</span>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>

      {/* Second Review */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Good Quality</h2>
          <p>The quality is great for the price. Very satisfied with the purchase!</p>
          <div className="flex justify-between">
            <span>- Jane Smith</span>
            <span>⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>

      {/* Third Review */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Not What I Expected</h2>
          <p>The product didn't match the description exactly, but still decent.</p>
          <div className="flex justify-between">
            <span>- Mark Johnson</span>
            <span>⭐⭐⭐</span>
          </div>
        </div>
      </div>

      {/* Fourth Review */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Very Disappointed</h2>
          <p>Arrived damaged and not as advertised. Would not recommend.</p>
          <div className="flex justify-between">
            <span>- Emily Davis</span>
            <span>⭐⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
