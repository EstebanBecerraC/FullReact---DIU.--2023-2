import React, { useState } from 'react';

function PaymentApp(props) {
  const [isPaymentComplete, setPaymentComplete] = useState(false);

  const handlePayment = () => {
    // In a real application, this is where you would integrate with a payment gateway.
    // For simulation, we will just set a flag to indicate payment completion.
    setPaymentComplete(true);
  };

  return (
    <div className="App">
      <h1>Aplicacion de pago simple</h1>
      {isPaymentComplete ? (
        <div>
          <p>Pago Exitoso!! Te enviaremos un comprobante al email</p>
        </div>
      ) : (
        <div>
          <p>Total a pagar de {props.string}: ${generateAmount()}</p>
          <button onClick={handlePayment}>Pagar ahora</button>
        </div>
      )}
    </div>
  );
}

export default PaymentApp;

function generateAmount () {
  return Math.floor(Math.random() * 1000000)
}