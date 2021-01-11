
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Press Me</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('tapped-outline')} outline>
      Press Me
    </Button>
  ))
  .add('outlinerButton', () => (
    <Button onPress={action('tapped-outline')} outline>
      Press the outlinerButton
    </Button>
  ));