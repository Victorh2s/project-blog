import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';
import mock from './mock';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    html: mock,
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <TextComponent {...args} />
    </div>
  );
};
