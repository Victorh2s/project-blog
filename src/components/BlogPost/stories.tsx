import { Meta, Story } from '@storybook/react/types-6-0';
import { BlogPost, BlogPostProps } from '.';
import mock from './mock';

export default {
  title: 'BlogPost',
  component: BlogPost,
  args: mock,
} as Meta<BlogPostProps>;

export const Template: Story<BlogPostProps> = (args) => {
  return (
    <div>
      <BlogPost {...args} />
    </div>
  );
};
