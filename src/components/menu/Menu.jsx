import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <layout>
            <NavLink to='/'>
                <Button label='Главная страница' />
            </NavLink>
            <NavLink to='/service'>
                <Button label='Страница услуг' />
            </NavLink>
        </layout>

    )
}