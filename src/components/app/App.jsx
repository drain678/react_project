import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import { Button } from '@consta/uikit/Button';
import { IconBackward } from '@consta/icons/IconBackward';
import { Card } from '@consta/uikit/Card';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import MainPage from '../../pages/main-page/MainPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/LoginPage';
// import SignIn from '../../pages/sign-in/SignIn';

const App = function () {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={`${AppRoute.service}/:id`} element={<ServiceDetailPage />} />
            <Route path={AppRoute.login} element={<LoginPage />} />
            {/* <Route path={AppRoute.sign_in} element={<SignIn />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Card verticalSpace="2xl" horizontalSpace="2xl">
        <Button label="КНОПИЩА" iconLeft={IconBackward} />
        <Button label="кнпк поменьше" view="secondary" />
      </Card>
    </Theme>
  );
}

export default App