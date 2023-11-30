import { BaseProps } from '@/types/props';

import Styles from './body-block.module.css';

export interface BodyBlockProps extends BaseProps {
  intro: string;
  content: string;
}

const BodyBlock = ({ className, intro, content }: BodyBlockProps) => {
  return (
    <div className={`${className}`}>
      <div
        className={Styles.intro}
        dangerouslySetInnerHTML={{ __html: intro }}
      />
      <div
        className={Styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
export default BodyBlock;
