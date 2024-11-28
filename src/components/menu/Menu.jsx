import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';


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