# RESELECT


ReSelect for React, a beautiful and flexible select for React. [ReSelect For React](http://othmaneblial.github.io/reselect-for-react/)


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


### Installation

```bash
npm install reselect-for-react --save
```



### [Demos](http://othmaneblial.github.io/reselect-for-react/)




### Example of ReSelect with one option

```js
import React from 'react';
import {ReSelectSingle}  from 'reselect-for-react';

class App extends React.Component {

   constructor(props) {
      super(props);

    
      this.state = {

          selectedOption: '',
    
        }

        this.setSelectedOption = this.setSelectedOption.bind(this);


      }

      setSelectedOption(selectedOption) {
        const op = selectedOption;
        this.setState({selectedOption: op});
      }




   render() {


      return (
         <div>
            <ReSelectSingle 
            options={['Argentina', 'Colombia', 'Brazil', 'Chile', 'Venezuela', 'Germany',
                          'France', 'China', 'USA', 'Russia', 'UK' ]}
            message='Choose a country'
            getSelectedOption={this.setSelectedOption} />
         </div>
         );
   }
}

```

### Example of ReSelect with multiple options

```js
import React from 'react';
import {ReSelectMultiple}  from 'reselect-for-react';

class App extends React.Component {

   constructor(props) {
      super(props);

    
      this.state = {

          selectedOptions: []
    
        }

        this.setSelectedOptions = this.setSelectedOptions.bind(this);


      }

      setSelectedOptions(selectedOptions) {
        const ops = selectedOptions;
        this.setState({selectedOptions: ops});
      }





   render() {


      return (
         <div>
            <ReSelectMultiple 
            options={['Argentina', 'Colombia', 'Brazil', 'Chile', 'Venezuela', 'Germany',
                          'France', 'China', 'USA', 'Russia', 'UK' ]}
            message='Choose one or more countries'
            max={7} 
            getSelectedOptions={this.setSelectedOptions} />
         </div>
         );
   }
}

```




### Development
Want to run demos locally

```bash
git clone https://github.com/othmaneblial/reselect-for-react
npm install
npm run start
open http://localhost:3000
```
