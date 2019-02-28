import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Demo } from './Demo';

storiesOf('Example', module)
    .add('Demo', () => <Demo />)
    .add('Demo2', () => <Demo />);