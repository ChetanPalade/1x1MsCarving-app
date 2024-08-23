import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

function Checkout({ price, duration, premium }) {
  return (
    <>
      <div className="checkoutMessage">
      <h3>Payment Summary</h3>
            <p>Duration: {duration} mins</p>
            <p>Premium Mentor: {premium ? 'Yes' : 'No'}</p>
            <p>Total Price: ₹{price}</p>
            <button className="pay-btn"
             onClick={() => alert('Payment Successful!')}>Pay Now</button>
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h1 className="thankyou-sec">Thank you for your order!</h1>
        </div>
      </div>
      
    </>
  );
};

export default Checkout;