import React, { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { EcomContext } from "../../Context/EcomContext";
import "./PaymentPage.css";


const PaymentPage = () => {
    const { cart, totalAmount } = useContext(EcomContext);
  
    const config = {
      public_key: "FLWPUBK_TEST-6f9ad364883aca38fc74137b008b6724-X",
      tx_ref: Date.now(),
      amount: totalAmount,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: "user@example.com",
        phone_number: "070********",
        name: "John Doe",
      },
      customizations: {
        title: "My Store",
        description: "Payment for items in cart",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };
  
    const handleFlutterPayment = useFlutterwave(config);
  
    return (
      <div className="payment-page13">
        <img
          src="https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"
          alt="Store Logo"
          className="logo13"
        />
        <h2>Proceed to Payment</h2>
        <p>You're just one step away from completing your purchase. Click the button below to securely pay and enjoy your items!</p>
        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal();
                // Handle successful payment here
              },
              onClose: () => {},
            });
          }}
        >
          Pay Now
        </button>
      </div>
    );
  };
  
  export default PaymentPage;