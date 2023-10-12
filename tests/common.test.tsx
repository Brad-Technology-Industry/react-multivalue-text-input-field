import React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';
import MultiInputField from '../src';

describe('Common render', () => {
   it('renders without crashing', () => {
      render(
         <MultiInputField
            label={''}
            placeholder={''}
            values={[]}
            setValues={() => {}}
         />,
      );
   });
});
