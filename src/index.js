import addons from '@storybook/addons';

export const ADDON_ID = 'storybook/storyshot-view';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const EVENT_ID = `${ADDON_ID}/story-event`;

export function withStoryShotView() {
    return (storyFn, context) => {
        addons.getChannel().emit(EVENT_ID, {
            context
        });
        return storyFn();
    };
}
