import React from 'react';
import ServiceItem from "../ServiceItem/ServiceItem.jsx";
import styles from "./ServicesList.module.css";
import {discount} from "../../utils/discount.js";

const ServicesList = ({services}) => {
    return (
        <div className={styles.list}>
            {
                services && services.map((service) => (
                    <ServiceItem
                        key={service.id}
                        id={service.id}
                        quantity={service.quantity}
                        tag={service.tag}
                        name={service.name}
                        price={discount(service.price, service.discount)}
                        short_text={service.text}
                        img={service.preview_image}
                        content={service.content}
                    />
                ))
            }
        </div>
    );
};

export default React.memo(ServicesList);
