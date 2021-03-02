import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '.';

// once @storybook/react-native will support storybook 6.0
// we can upgrade and use new syntax to define stories
// track progress in https://github.com/storybookjs/react-native/pull/135

// export default {
//   title: 'Button',
//   argTypes: {
//     children: { control: 'text' },
//     type: {
//       control: {
//         type: 'select',
//         options: ['contained', 'outlined', 'underlined', 'text'],
//       },
//     },
//     disabled: { control: 'boolean' },
//   },
// };

// export const Contained = (args) => <Button {...args} />;
// Contained.args = {
//   children: 'Contained Button',
//   type: 'contained',
// };

// export const Outlined = (args) => <Button {...args} />;
// Outlined.args = {
//   children: 'Outlined Button',
//   type: 'outlined',
// };

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: {
      default: 'background',
      values: [{ name: 'background', value: '#eee' }],
    },
  })
  .add('Contained', () => (
    <Button onPress={action('pressed')}>Hello Button</Button>
  ))
  .add('Outlined', () => (
    <Button onPress={action('pressed')} type="outlined">
      Outlined Button
    </Button>
  ))
  .add('Outlined with custom color', () => (
    <Button
      onPress={action('pressed')}
      type="outlined"
      outlinedTextColor="cyan"
    >
      Outlined Button
    </Button>
  ))
  .add('Underlined', () => (
    <Button onPress={action('pressed')} type="underlined">
      Underlined Button
    </Button>
  ))
  .add('Text', () => (
    <Button onPress={action('pressed')} type="text">
      Text Button
    </Button>
  ))
  .add('Playground', () => (
    <Button
      onPress={action('pressed')}
      type={select(
        'Type',
        // @ts-ignore
        ['contained', 'outlined', 'underlined', 'text', undefined],
        'contained'
      )}
      disabled={boolean('Disabled', false)}
    >
      {text('Text', 'Text Button')}
    </Button>
  ));
