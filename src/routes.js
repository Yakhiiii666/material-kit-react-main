/*eslint-disable*/
import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import ToolView from 'src/views/Tool/ToolView';
import DriverListView from 'src/views/DriverListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import VanRunListView from 'src/views/VanRun/VanRunListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import SplitView from 'src/views/Split/SplitView';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'Tool', element: <ToolView /> },
      { path: 'Split', element: <SplitView /> },
      { path: 'Drivers', element: <DriverListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'VanRuns', element: <VanRunListView /> },
      { path: 'settings', element: <SettingsView /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
