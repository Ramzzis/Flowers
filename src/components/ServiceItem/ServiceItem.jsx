import React, {useState} from 'react';
import {Button, Card, Typography} from "antd";
import styles from "./ServiceItem.module.css";
import {Link} from "react-router-dom";
import ApplicationModal from "../ApplicationModal/ApplicationModal.jsx";

const ServiceItem = ({ id, name, price, short_text, img, quantity, tag}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

    const handleApplicationButtonClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setModalIsOpen(true);
    }

    return (
        <>
            <Link to={`/product/${id}`} className={styles.link}>
                <Card
                    hoverable
                    className={styles.card}
                    cover={<img src={img} alt={name}/>}
                    title={<h3>{name}</h3>}
                >
                    <div className={styles.wrapper}>
                        <Typography.Text className={styles.content}>
                            {short_text}
                        </Typography.Text>
                        <b>{price} руб.</b>
                    </div>
                    {
                        quantity > 0 ? <Button type={"primary"}>Купить</Button> : <Button onClick={handleApplicationButtonClick} type={"dashed"}>Оставить заявку</Button>
                    }
                </Card>
            </Link>
        </>
    );
};

export default React.memo(ServiceItem);
