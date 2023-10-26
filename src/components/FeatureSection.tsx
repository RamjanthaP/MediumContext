import React from 'react'
import { BaseProps } from './PropsHelpers'
import { Container } from './Layout/Container';
import Image from 'next/image';
import Button from './Button/Button';


interface FeatureSectionProps extends BaseProps {
  title?: string;
  titleElement?: "h1" | "h2" | "h3" | "span";
  bgColor?: "default" | "inverted" | "discrete";
  isContentRight?: boolean;
  firstButton?: string;
  secondButton?: string;
  image?: string;
}

function FeatureSection({ title, titleElement = "h2", isContentRight = false, bgColor = 'default', children, firstButton, secondButton, image }: FeatureSectionProps) {
  const TitleElement = titleElement || "div";
  const layout = isContentRight ? 'flex-row' : 'flex-row-reverse';
  return (
    <div className={`bg-default`}>
      <Container element="section" className="lg:py-16">
        <div className={`flex ${layout} mx-auto`}>
          <div className='w-1/2 flex flex-col items-start px-8'>
            <TitleElement className="text-3xl font-bold mb-4">
              {title}
            </TitleElement>
            <p style={{ wordBreak: 'break-all' }}>{children} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
            <div>
              {firstButton && <Button variant="green" icon>{firstButton}</Button>}
              {secondButton && <Button variant="black" transparent icon>{secondButton}</Button>}
            </div>
          </div>
          <div className="w-1/2 px-6 mx-auto">
            <div className='bg-discrete rounded-4xl h-[457px] p-4 mx-auto'>
              {image && <Image src={image} alt="logo-image" height="150" width="150" />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FeatureSection