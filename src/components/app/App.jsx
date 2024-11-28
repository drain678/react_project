import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import { Attachment } from '@consta/uikit/Attachment';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { IconBackward } from '@consta/icons/IconBackward';
import { Card } from '@consta/uikit/Card';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import MainPage from '../../pages/main-page/MainPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../../const';

const App = function () {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={`${AppRoute.service}/:id`} element={<ServiceDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Attachment
        withPictogram
        fileName="Файл"
        fileExtension="jpg"
        fileDescription="14 Мб 01.04.2020, 07:01"
      />
      <Card verticalSpace="2xl" horizontalSpace="2xl">
        <Button label="КНОПИЩА" iconLeft={IconBackward} />
        <Button label="кнпк поменьше" view="secondary" />
      </Card>
    </Theme>
  );
}

export default App