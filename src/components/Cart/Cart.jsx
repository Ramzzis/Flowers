import React, {useEffect, useState} from 'react';
import {Drawer} from "antd";

const Cart = ({isOpen, onClose}) => {

    return (
        <Drawer title={"Ваша корзина"} open={isOpen} onClose={onClose}>
        </Drawer>
    );
};

export default React.memo(Cart);