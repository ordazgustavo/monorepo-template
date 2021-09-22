import { render, screen } from '@testing-library/react';

import { Button } from '..';

describe('<Button />', () => {
  it('renders', () => {
    expect.hasAssertions();
    render(<Button>Say Hello</Button>);

    expect(screen.getByText('Say Hello')).toBeInTheDocument();
  });
});
