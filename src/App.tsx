import React, { useState } from 'react';
import classes from './App.module.css';
import DeliveryForm from './components/DeliveryForm';
import DeliveryFee from './components/DeliveryFee';
import DeliveryError from './components/DeliveryError';

const App: React.FC = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numItems, setNumItems] = useState<number>(0);
  const [orderTime, setOrderTime] = useState<Date | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (): void => {
    if (cartValue <= 0) {
      setError('Please enter a valid Cart Value');
    } else if (deliveryDistance <= 0) {
      setError('Please enter a valid Delivery Distance');
    } else if (numItems <= 0) {
      setError('Please enter a valid number of items');
    } else if (!orderTime) {
      setError('Please enter a valid Order Time');
    } else {
      setError(null);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.deliverycard}>
        <img className={classes.logo} src="speedyspoon.png" alt="speedyspoon.png" />
        <h3>Delivery Fee Calculator</h3>
        <DeliveryForm
            cartValue={cartValue}
            deliveryDistance={deliveryDistance}
            numItems={numItems}
            orderTime={orderTime}
            setCartValue={setCartValue}
            setDeliveryDistance={setDeliveryDistance}
            setNumItems={setNumItems}
            setOrderTime={setOrderTime}
            onSubmit={handleSubmit}
          />
          {error ? (
            <DeliveryError message={error} />
          ) : (
            <DeliveryFee
              cartValue={cartValue}
              deliveryDistance={deliveryDistance}
              numberOfItems={numItems}
              orderTime={orderTime}
            />
          )}
        </div>
      </div>
  );
};

export default App;


// In this file, I have combined all the components to create the final app.
// I created a state hook for each of the form inputs (cartValue, deliveryDistance, numItems, orderTime) and an additional state hook for error message (error).
// The handleSubmit function is used to validate the inputs and set the error message if necessary.
