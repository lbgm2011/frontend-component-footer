import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { useIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import {
  ActionRow,
  Button,
  Container,
  Hyperlink,
  Image,
  TransitionReplace,
} from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';

ensureConfig([
  'LMS_BASE_URL',
  'MARKETING_SITE_BASE_URL',
  'TERMS_OF_SERVICE_URL',
  'PRIVACY_POLICY_URL',
  'SUPPORT_EMAIL',
  'SITE_NAME',
  'STUDIO_BASE_URL',
  'ENABLE_ACCESSIBILITY_PAGE',
], 'Studio Footer component');

const StudioFooter = ({
  containerProps,
}) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const { config } = useContext(AppContext);

  const { containerClassName, ...restContainerProps } = containerProps || {};

  return (
    <>
      <div className="m-0 mt-6 row align-items-center justify-content-center">
        <div className="col border-top mr-2" />
      </div>
    </>
  );
};

StudioFooter.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes),
};

StudioFooter.defaultProps = {
  containerProps: {},
};

export default StudioFooter;
