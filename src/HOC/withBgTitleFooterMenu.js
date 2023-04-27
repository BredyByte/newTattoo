import React from 'react';
import { Footer, Title, BgForLayout, MenuBar } from '../components';

export const withBgTitleFooterMenu = (Component, titleText, isContainer) => {
  return function PropComponent(props) {
    return (
      <BgForLayout isContainer={isContainer}>
        {titleText && <Title text={titleText} forRouterPage={true} />}
        <MenuBar isScrolled={true} />
        <Component {...props} />
        <Footer />
      </BgForLayout>
    );
  };
};
