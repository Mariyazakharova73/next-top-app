import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import { AppContextProvider } from '@/context/app.context';
import { IAppContext } from './../context/app.context';
import UpButton from './../components/UpButton/UpButton';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <Sidebar className={s.sidebar} />
      <div className={s.body}>{children}</div>
      <UpButton/>
      <Footer className={s.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
