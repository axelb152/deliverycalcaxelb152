import React, { useState } from 'react';
import { Card, Result } from 'antd';
import { CarOutlined } from '@ant-design/icons';

interface DeliveryFeeProps {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  orderTime: Date | undefined;
}

const DeliveryFee: React.FC<DeliveryFeeProps> = ({
  cartValue,
  deliveryDistance,
  numberOfItems,
  orderTime
}) => {
  const [deliveryFee, setDeliveryFee] = useState(0);

  React.useEffect(() => {
    let fee = 0;

    // Small order surcharge
    if (cartValue < 10) {
      fee = 10 - cartValue;
    }

    // Delivery fee for the first 1000 meters
    if (deliveryDistance <= 1000) {
      fee += 2;
    } else {
      // Delivery fee for additional meters
      const additionalMeters = deliveryDistance - 1000;
      const additionalKilometers = additionalMeters / 500;
      fee += 2 + Math.ceil(additionalKilometers) * 1;
    }

    // Extra surcharge for number of items
    if (numberOfItems >= 5) {
      const surcharge = 0.5 * (numberOfItems - 4);
      if (numberOfItems > 12) {
        fee += surcharge + 1.2;
      } else {
        fee += surcharge;
      }
    }

    // Delivery fee during Friday rush
    if (
      orderTime &&
      orderTime.getUTCHours() >= 15 &&
      orderTime.getUTCHours() < 19
    ) {
      fee *= 1.2;
    }

    // Maximum delivery fee is 15€
    fee = Math.min(fee, 15);

    // Delivery is free for cart values >= 100€
    if (cartValue >= 100) {
      fee = 0;
    }

    setDeliveryFee(fee);
  }, [cartValue, deliveryDistance, numberOfItems, orderTime]);

  return (
    <>
      <Card>
      <Result
          icon={<CarOutlined />}
          title="Delivery Fee"
          subTitle={`€${deliveryFee}`}
        />
      </Card>
    </>
  );
};

export default DeliveryFee;
