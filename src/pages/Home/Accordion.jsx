const Accordion = () => {
  return (
    <div className="flex flex-col gap-2 w-4/5 lg:w-2/3 mx-auto">
      {/* Accordion Item 1 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the return policy?
        </div>
        <div className="collapse-content">
          <p>We offer a 30-day return policy for all products. Items must be in their original condition and packaging.</p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          How do I track my order?
        </div>
        <div className="collapse-content">
          <p>You can track your order by visiting the "Orders" section in your account and clicking the "Track" button.</p>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          Do you offer international shipping?
        </div>
        <div className="collapse-content">
          <p>Yes, we ship internationally. Shipping costs will be calculated at checkout based on your location.</p>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
        </div>
      </div>

      {/* Accordion Item 5 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          How can I change my order after placing it?
        </div>
        <div className="collapse-content">
          <p>If you need to change your order, please contact our support team within 24 hours of placing the order.</p>
        </div>
      </div>

      {/* Accordion Item 6 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          What should I do if I receive a damaged product?
        </div>
        <div className="collapse-content">
          <p>If you receive a damaged product, please contact customer service immediately with photos of the damage, and we will assist you with a replacement.</p>
        </div>
      </div>

      {/* Accordion Item 7 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          Can I apply discount codes?
        </div>
        <div className="collapse-content">
          <p>Yes, you can apply discount codes during checkout. Make sure the code is valid and within the expiration period.</p>
        </div>
      </div>

      {/* Accordion Item 8 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">
          Do you have a loyalty program?
        </div>
        <div className="collapse-content">
          <p>Yes, we have a loyalty program. You can earn points with every purchase, which can be redeemed for discounts on future orders.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
