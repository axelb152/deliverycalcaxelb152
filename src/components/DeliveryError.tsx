import React from 'react';
import { Alert } from 'antd';

interface Props {
  message: string;
}

const DeliveryError: React.FC<Props> = ({ message }) => (
  <Alert
    message="Error"
    description={message}
    type="error"
    showIcon
    className="error"
  />
);

export default DeliveryError;
