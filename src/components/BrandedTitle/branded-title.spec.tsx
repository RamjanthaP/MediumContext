/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import BrandedTitle from './BrandedTitle';
import '@testing-library/jest-dom';

const stringBrandedTitle = 'Hej där.';
const stringNotBranded = 'Hej där';
describe('BrandedHeading', () => {
  it('renders', () => {
    render(
      <BrandedTitle element='h2' data-testid='test_item'>
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId('test_item');
    expect(heading).toBeInTheDocument();
  });

  it('sets the element to provided prop', () => {
    render(
      <BrandedTitle element='h3' data-testid='test_item'>
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId('test_item');
    expect(heading.tagName).toBe('H3');
  });

  it('passes classes and id:s', () => {
    render(
      <BrandedTitle
        element='h3'
        id='my_cool_id'
        className='bg-primary-900'
        data-testid='test_item'
      >
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId('test_item');
    expect(heading.id).toBe('my_cool_id');
    expect(heading.classList).toContain('bg-primary-900');
  });

  it('Provides a span if an dot exists', () => {
    render(
      <BrandedTitle element='h2' data-testid='test_item'>
        {stringBrandedTitle}
      </BrandedTitle>
    );
    const heading = screen.getByTestId('test_item');
    const containsSpan = Array.from(heading.children).some(
      (child) => child.tagName === 'SPAN'
    );
    expect(containsSpan).toBeTruthy();
  });

  it('WONT provide a span if there is no dot', () => {
    render(
      <BrandedTitle element='h2' data-testid='test_item'>
        {stringNotBranded}
      </BrandedTitle>
    );
    const heading = screen.getByTestId('test_item');
    const containsSpan = Array.from(heading.children).some(
      (child) => child.tagName === 'SPAN'
    );
    expect(containsSpan).toBeFalsy();
  });

  it('ONLY provide ONE span for the last dot', () => {
    render(
      <BrandedTitle element='h2' data-testid='test_item'>
        Detta är en mening. Detta är en till mening.
      </BrandedTitle>
    );

    const heading = screen.getByTestId('test_item');
    expect(heading.children.length).toBe(1);
    expect(Array.from(heading.children).at(0)?.innerHTML).toBe('.');
  });
});
