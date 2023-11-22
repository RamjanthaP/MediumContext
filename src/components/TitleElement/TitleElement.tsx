import React from 'react'

type TitleElementProps = {
  title: string;
  titleSize?: "h1" | "h2" | "h3" | "span";
}

function TitleElement({ title }: TitleElementProps) {
  function colorDots(title: string) {
    const parts = title.split('.').map((part, index, array) =>
      index !== array.length - 1 ? <><span>{part}</span><span className='text-primary-500'>.</span></> : <span>{part}</span>
    );

    return <>{parts}</>;
  }
  return (
    <div>
      <h1 className='text-xl md:text-3xl font-bold mb-4'>
        {colorDots(title)}
      </h1>
    </div>
  )
}

export default TitleElement