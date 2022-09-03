import React from 'react';
import { render, screen } from '@infra/utils/test-utils';
import OnBoarding from '@screens/OnBoarding';

jest.mock('react-native-linear-gradient');

describe('On Boarding screen', () => {
  it('should render correctly', () => {
    console.log(OnBoarding);
    render(<OnBoarding />, null);

    // const container = screen.getByTestId('onBoarding-container');

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
