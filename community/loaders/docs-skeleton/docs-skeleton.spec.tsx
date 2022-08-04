import React from 'react';
import { render } from '@testing-library/react';
import { BasicDocsSkeleton } from './docs-skeleton.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDocsSkeleton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
