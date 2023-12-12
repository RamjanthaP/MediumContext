/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import BrandedTitle from './BrandedTitle';

const stringBrandedTitle = 'Hej där.';
const stringNotBranded = 'Hej där';
const testID = 'test_id';
describe('BrandedHeading', () => {
  it('renders', () => {
    render(
      <BrandedTitle element='h2' data-testid={testID}>
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId(testID);
    expect(heading).toBeInTheDocument();
  });

  it('sets the element to provided prop', () => {
    render(
      <BrandedTitle element='h3' data-testid={testID}>
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId(testID);
    expect(heading.tagName).toBe('H3');
  });

  it('passes classes and id:s', () => {
    render(
      <BrandedTitle
        element='h3'
        id='my_cool_id'
        className='bg-primary-900'
        data-testid={testID}
      >
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId(testID);
    expect(heading.id).toBe('my_cool_id');
    expect(heading.classList).toContain('bg-primary-900');
  });

  it('Provides a span if an dot exists', () => {
    render(
      <BrandedTitle element='h2' data-testid={testID}>
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId(testID);
    const containsSpan = Array.from(heading.children).some(
      (child) => child.tagName === 'SPAN'
    );
    expect(containsSpan).toBeTruthy();
  });

  it('WONT provide a span if there is no dot', () => {
    render(
      <BrandedTitle element='h2' data-testid={testID}>
        {stringNotBranded}
      </BrandedTitle>
    );
    const heading = screen.getByTestId(testID);
    const containsSpan = Array.from(heading.children).some(
      (child) => child.tagName === 'SPAN'
    );
    expect(containsSpan).toBeFalsy();
  });

  it('ONLY provide ONE span for the last dot', () => {
    render(
      <BrandedTitle element='h2' data-testid={testID}>
        Denna teststräng har två punker. Här är den andra.
      </BrandedTitle>
    );

    const heading = screen.getByTestId(testID);
    expect(heading.children.length).toBe(1);
    expect(Array.from(heading.children).at(0)?.innerHTML).toBe('.');
  });
});
