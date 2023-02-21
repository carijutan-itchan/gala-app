

import React from 'react';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';

export const AppRoutes: FC = () => (
  <Routes>
    <Route path='/' element={<DefaultLayout />} >

    </Route>
  </Routes>
);