import {addDecorator, configure} from '@storybook/react';
import { withStoryShotView } from '../../src/index.js';

function loadStories() {
    require('../index.js');
}

addDecorator(withStoryShotView());

configure(loadStories, module);