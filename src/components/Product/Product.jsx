import React from 'react';
import { Button, Card, Typography } from 'antd';

const Product = ({ product }) => {

  return (
    <Card
      cover={<img src={product.preview_image} alt={product.name}/>}
      title={<h3 whidt="100"
      heigh="100">{product.name}</h3>}
    >
      <div>
        <Typography.Text>{product.tag}</Typography.Text>
        <Typography.Paragraph>{product.text}</Typography.Paragraph>
        <div>
          <Typography.Title level={4}>{product.price} рублей</Typography.Title>
          <Button type="primary">Купить</Button>
        </div>
      </div>
    </Card>
  );
};

export default Product;