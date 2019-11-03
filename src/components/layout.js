import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

function Layout(props) {
  const { location, children } = props;
  const { i18n } = useLingui();
  
  const appTitle =  i18n._(t`app.title`);

  const title = props.title ? `${props.title} | ${appTitle}`: appTitle;
  return (
    <LayoutRoot>
      <Helmet title={title} />
      {children}
    </LayoutRoot>
  )
}

export default Layout

const LayoutRoot = styled.div`
  width: 100%;
  height: 100%;
`;
