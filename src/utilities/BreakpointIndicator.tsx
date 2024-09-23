import tailwindConfig from '@/../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

import styles from './breakpoint-indicator.module.css';

/**
 * BreakpointIndicator
 * @description Intented for debugging breakpoints. Use in the _app file in order to get an indicator of the current breakpoint
 * @returns
 */
export function BreakpointIndicator() {
  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
  const fullConfig = resolveConfig(tailwindConfig);
  const getScreenValue = (bp: string) =>
    (fullConfig.theme.screens as any)[bp] || '0px';

  return (
    <div className={styles.breakpointIndicator}>
      {breakpoints.map((bp, i) => (
        <div
          key={bp}
          className={`
          ${styles.breakpointIndicatorItem}
          ${bp === 'sm' ? 'sm:block md:hidden' : ''}
          ${bp === 'md' ? 'hidden md:block lg:hidden' : ''}
          ${bp === 'lg' ? 'hidden lg:block xl:hidden' : ''}
          ${bp === 'xl' ? 'hidden xl:block 2xl:hidden' : ''}
          ${bp === '2xl' ? 'hidden 2xl:block' : ''}
        `}
        >
          <span>{bp}</span>
          <span style={{ fontSize: '0.8em', marginLeft: '.5rem' }}>
            ({getScreenValue(bp)})
          </span>
        </div>
      ))}
    </div>
  );
}
