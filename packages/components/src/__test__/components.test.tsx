import { render, screen } from '@testing-library/react';

import { Button } from '..';

test('<Button />', async () => {
  render(<Button onClick={() => alert('Hello')}>Say Hello</Button>);

  expect(screen.getByText('Say Hello')).toBeInTheDocument();
});
