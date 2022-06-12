import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        architecto voluptatem nemo qui ratione a totam harum perspiciatis,
        labore illo nesciunt sit et sunt deserunt natus nisi autem, doloribus
        voluptatibus.
      </p>
    </div>
  );
};
