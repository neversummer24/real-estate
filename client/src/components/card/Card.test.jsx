import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

describe('Card component', () => {
  const mockItem = {
    id: 123,
    images: 'https://example.com/image.jpg',
    title: 'Modern Apartment',
    address: '123 Main Street',
    price: 2500,
    bedroom: 2,
    bathroom: 1,
  };

  test('renders all key information', () => {
    render(
      <MemoryRouter>
        <Card item={mockItem} />
      </MemoryRouter>
    );

    // Title
    expect(screen.getByText('Modern Apartment')).toBeInTheDocument();

    // Address
    expect(screen.getByText('123 Main Street')).toBeInTheDocument();

    // Price
    expect(screen.getByText('$2500')).toBeInTheDocument();

    // Bedroom & Bathroom
    expect(screen.getByText('2 Bedroom')).toBeInTheDocument();
    expect(screen.getByText('1 Bathroom')).toBeInTheDocument();

    // Image src
    const image = screen.getByAltText('img1');
    expect(image).toHaveAttribute('src', mockItem.images);

    // Link
    const link = screen.getByTestId('test-link');
    expect(link).toHaveAttribute('href', '/123');
  });
});
