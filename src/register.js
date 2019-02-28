// @flow

import * as React from 'react';
import addons from '@storybook/addons';

import { ADDON_ID, PANEL_ID, EVENT_ID } from './index';

type Props = {
    channel: any,
    api: any
};

class Panel extends React.Component<Props> {
    state = {
        kind: '',
        story: ''
    };

    componentDidMount() {
        const { channel } = this.props;
        channel.on(EVENT_ID, ({ context }: any) => {
            this.setState(context);
        });
    }

    render(): React.Element {
        const { kind, story } = this.state;
        return (
            <div>
                <b>Kind:</b>{kind} <b>story:</b>{story}
                <img src={require('../src/__image_snapshots__/storyshots-test-js-image-storyshots-button-with-text-1-snap.png')} />
            </div>
        );
    }
}

addons.register(ADDON_ID, (api: any) => {
    addons.addPanel(PANEL_ID, {
        title: 'My Panel',
        render(): React.Element {
            return <Panel channel={addons.getChannel()} api={api} />;
        }
    });
});
