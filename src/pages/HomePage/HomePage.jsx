import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header.jsx";
import styles from "./HomePage.module.css";
import ServicesList from "../../components/ServicesList/ServicesList.jsx";
import axios from "axios";
import {Button, Input, Select} from "antd";
import {discount} from "../../utils/discount.js";
import {API_BASE_URL} from "../../constants/api.js";

const HomePage = () => {
    const [services, setServices] = useState([]);
    const [tags, setTags] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(services);

    useEffect(() => {
        getServices();
        getTags();
    }, [])

    useEffect(() => {
        setFilteredProducts(services);
    }, [services])

    const getServices = async () => {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setServices(response.data.data);
    }

    const getTags = async () => {
        const response = await axios.get(`${API_BASE_URL}/tags`);
        setTags(response.data.data)
    }

    const handleSearch = (event) => {
        const filterServices = [...services].filter((item) => {
            return item.name.toLowerCase().includes(event.target.value.toLowerCase());
        });

        setFilteredProducts(filterServices);
    }

    const sortFromLowerToUpper = () => {
        const sortedServices = [...filteredProducts].sort((a, b) => {
            return discount(a.price, a.discount) - discount(b.price, b.discount);
        });

        setServices(sortedServices);
    }

    const sortFromUpperToLower = () => {
        const sortedServices = [...filteredProducts].sort((a, b) => {
            return discount(b.price, b.discount) - discount(a.price, a.discount);
        })

        setServices(sortedServices);
    }

    const handleTagChange = async (value) => {
        const response = await axios.get(`${API_BASE_URL}/products?tag=${value}`)
        setFilteredProducts(response.data.data);
    }


    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.filters}>
                <Input
                    onChange={handleSearch}
                    placeholder={"Введите название"}
                />
                <Select
                    defaultValue="Выберите вид"
                    style={{ width: 420 }}
                    onChange={handleTagChange}
                    options={tags.map((tag) => {
                        return {
                            value: tag.id,
                            label: tag.tag
                        }
                    })}
                    
                />
                <div className={styles.btns}>
                    <Button onClick={sortFromLowerToUpper} type={"dashed"}>˄</Button>
                    <Button onClick={sortFromUpperToLower} type={"dashed"}>˅</Button>
                </div>
            </div>
            <ServicesList services={filteredProducts} />
        </div>
    );
};

export default React.memo(HomePage);
