import React from 'react';
import { Form, Input, InputNumber } from 'antd';

interface DeliveryFormProps {
  cartValue: number;
  deliveryDistance: number;
  numItems: number;
  orderTime: Date | undefined;
  setCartValue: (value: number) => void;
  setDeliveryDistance: (value: number) => void;
  setNumItems: (value: number) => void;
  setOrderTime: (value: Date) => void;
  onSubmit: () => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({
  cartValue,
  deliveryDistance,
  numItems,
  orderTime,
  setCartValue,
  setDeliveryDistance,
  setNumItems,
  setOrderTime,
  onSubmit,
}) => {
  return (
    <Form onFinish={onSubmit}>
      <Form.Item label="Cart Value (€)">
        <InputNumber
          value={cartValue}
          onChange={value => setCartValue(value as number)}
        />
      </Form.Item>
      <Form.Item label="Delivery Distance (Meters)">
        <InputNumber
          value={deliveryDistance}
          onChange={value => setDeliveryDistance(value as number)}
        />
      </Form.Item>
      <Form.Item label="Number of items">
        <InputNumber
          value={numItems}
          onChange={value => setNumItems(value as number)}
        />
      </Form.Item>
      <Form.Item label="Order time">
        <Input
          type="datetime-local"
          value={orderTime?.toISOString().slice(0, 16)}
          onChange={event => setOrderTime(new Date(event.target.value))}
        />
      </Form.Item>
    </Form>
  );
};

export default DeliveryForm;
