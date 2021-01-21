import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import AppText from '../components/AppText';

storiesOf('AppText', module)
  .add('default', () => <AppText text="Testing button" />)
  .add('large size', () => <AppText text="Testing button" size={40} />)
  .add('bold', () => <AppText text="Testing button" bold={true} />);
