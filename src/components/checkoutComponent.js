import React, {useState} from "react";
import {useElements, useStripe, CardElement} from "@stripe/react-stripe-js";
import {useSelector} from "react-redux";



function CheckoutForm(){


    const getClientSecret = async () => {
        //Get client secret from the server
        const res = await fetch('http://localhost:3000/stripe-checkout/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'amount':1000}),
            credentials: 'same-origin'
        })
        if(!res.ok){
            var error = new Error('Error '+res.status+' :'+res.statusText);
            throw error;
        }
        const resData = await res.json();
        return resData.client_secret;

        getClientSecret.catch((error) => {
            console.log(error.message);
        })
       
    }

    document.body.style.backgroundColor = "#FFFFFF"

    const elements = useElements();
    const stripe = useStripe();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const clientSecret = await getClientSecret();
        
        const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                type: 'card',
                card : elements.getElement(CardElement),
                billing_details:{
                 name: "Test",
                 email: "Test@test.com",
                 address:{
                    city: "Test",
                    line1: "Test",
                    state:"Test",
                    postal_code: 123456
                }
            }
          }
         });
        if(confirmCardPayment.error){
            console.log(confirmCardPayment.error.message)
        }else if(confirmCardPayment.paymentIntent.status==='succeeded'){
            console.log('Success');
            console.log(confirmCardPayment);
        }

    }

    return (
        
       <div className="checkout">
         <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
           <CardElement></CardElement>
           <button className="mt-3 pay-btn" disabled={!stripe}>Pay</button>
        </form>
       </div>
        
    );
}

export default CheckoutForm;