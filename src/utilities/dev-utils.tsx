


export function colorConsole(message: string, color: string = 'orange') {
  // eslint-disable-next-line no-console
  console.log(
    `%c${message}`,
    `background: ${color}; padding: 5px 10px; border-radius: 5px;`
  );
}

/**
 * StickyDebug Component
 *
 * A debug component that displays its children in a fixed position on the screen.
 * It's useful for showing debug information during development.
 *
 * @example
 * <StickyDebug>
 *   {JSON.stringify(someDebugData, null, 2)}
 * </StickyDebug>
 */
export function StickyDebug(props: { children: React.ReactNode | string }) {
  return (
    <div className='debug z-20 fixed top-2 right-2 p-4 bg-white border-2 border-primary-400'>
      Debug info:
      <pre>{props.children}</pre>
    </div>
  );
}
