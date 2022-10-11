import React, {useState} from "react";
import {useElements, useStripe, CardElement} from "@stripe/react-stripe-js";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";



function CheckoutForm(){

    var {total} = useParams();
    var [success, setSuccess] = useState(false);
    var [isPayBtnClicked, setPayBtnClicked] = useState(false);


    const getClientSecret = async () => {
        //Get client secret from the server
        const res = await fetch('https://blooming-hamlet-98079.herokuapp.com/payment',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'amount':total}),
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
        setPayBtnClicked(true);
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
         setPayBtnClicked(false);
        if(confirmCardPayment.error){
            setSuccess(false);
            console.log(confirmCardPayment.error.message)
        }else if(confirmCardPayment.paymentIntent.status ==='succeeded'){
            setSuccess(true);
            console.log('Success');
        }

    }

    return (
        
       <div className="checkout">
         <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
           <CardElement></CardElement>
           <button className="mt-3 pay-btn" disabled={!stripe}>Pay</button>
           {isPayBtnClicked &&
            <h5 className="text-center mt-3">Please wait...</h5>}
           {success &&
            <h5 className={ `text-center mt-3 ${success ? 'text-success' : 'text-danger'}` }>
                {success ? "Payment Successfull!" : "Payment Failed" }</h5>}
        </form>
       </div>
        
    );
}

export default CheckoutForm;