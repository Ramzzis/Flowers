import React, {useState} from 'react';
import {Button, Input, Modal} from "antd";
import styles from "../Header/Header.module.css";
import axios from "axios";
import {API_BASE_URL} from "../../constants/api.js";

const ApplicationModal = ({isOpen, handleCloseModal, product_id}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        message: "",
        email: ""
    });

    const handleSendClick = async () => {
        await axios.post(`${API_BASE_URL}/applications/create`, {
            "first_name": formData.firstName,
            "last_name": formData.lastName,
            "email": formData.email,
            "message": formData.message,
            "product_id": product_id
        });

        handleCloseModal();
    }

    return (
        <Modal title={"Оставить заявку"} open={isOpen} onCancel={handleCloseModal}>
            <div className={styles.form}>
                <Input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder={"Введите email"} type={"email"}/>
                <Input value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} placeholder={"Введите имя"} type={"text"}/>
                <Input value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} placeholder={"Введите фамилию"} type={"text"}/>
                <Input value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder={"Введите сообщение"} type={"text"}/>
                <Button type={"primary"} onClick={handleSendClick}>Отправить</Button>
            </div>
        </Modal>
    );
};

export default React.memo(ApplicationModal);