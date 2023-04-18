import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import styles from './ProductPage.module.css';
import Product from '../../components/Product/Product.jsx';
import { API_BASE_URL } from '../../constants/api.js';

const ProductPage = () => {
  const { id: slugId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        const data = await response.json();
        setProduct(data?.data);
      } catch (error) {
        console.error('Error fetching product by id', error);
      }
    };
    getProductById(slugId);
  }, [slugId]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Product product={product} />
    </div>
  );
};

export default React.memo(ProductPage);
