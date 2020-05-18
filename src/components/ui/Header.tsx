import React from 'react';
import { Brand, PageHeader, Label } from '@patternfly/react-core';
import logo from '../../images/metal3_facet-whitetext.svg';

import './header.scss';

const Header: React.FC = () => (
  <PageHeader
    logo={<Brand src={logo} alt="Metal&sup3; Facet UI" />}
    toolbar={<Label className="header-badge">Pre-alpha</Label>}
    //avatar={<Avatar src={avatarImg} alt="Avatar image" />}
    showNavToggle
    // onNavToggle={this.onNavToggle}
  />
);

export default Header;
