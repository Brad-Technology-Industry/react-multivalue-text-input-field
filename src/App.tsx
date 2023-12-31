import React from 'react';
import MultiInputField from './components/MultiValueTextField';

function App() {
   const [values, setValues] = React.useState<string[]>([]);
   return (
      <div className="App">
         <MultiInputField
            label={'Rice and stew'}
            placeholder={'Testing placeholder'}
            values={values}
            setValues={setValues}
            required={true}
            // containerFocusedStyle={'blue'}
            // optionTextStyle={{ color: 'red', fontSize: 14, fontWeight: 'bold' }}
         />
      </div>
   );
}

export default App;
