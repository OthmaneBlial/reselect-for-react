import React from 'react';
import {ReSelectSingle, ReSelectMultiple}  from 'reselect-for-react';


class App extends React.Component {

   constructor(props) {
      super(props);

    
      this.state = {

          selectedOption: '',
          selectedOptions: []
    
        }

        this.setSelectedOption = this.setSelectedOption.bind(this);
        this.setSelectedOptions = this.setSelectedOptions.bind(this);


      }

      setSelectedOption(selectedOption) {
        const op = selectedOption;
        this.setState({selectedOption: op});
      }

      setSelectedOptions(selectedOptions) {
        const ops = selectedOptions;
        this.setState({selectedOptions: ops});
      }



   render() {


      return (
         <div>
            {/*<ReSelectSingle 
            options={['Argentina', 'Colombia', 'Brazil', 'Chile', 'Venezuela', 'Germany',
                          'France', 'China', 'USA', 'Russia', 'UK' ]}
            message='Choose a country'
            getSelectedOption={this.setSelectedOption} />
            <ReSelectMultiple 
            options={['Argentina', 'Colombia', 'Brazil', 'Chile', 'Venezuela', 'Germany',
                          'France', 'China', 'USA', 'Russia', 'UK' ]}
            message='Choose one or more countries'
            max={7} 
            getSelectedOptions={this.setSelectedOptions} />*/}
            <section className="hero is-info is-large">
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                    ReSelect for React, a beautiful and flexible select for React.
                  </h1>
                  <a href="https://github.com/OthmaneBlial/reselect-for-react/" className="button is-outlined">
                     <span className="icon is-small">
                       <i className="fa fa-github"></i>
                     </span>
                    <span>Show on Github</span>
                  </a>
                </div>
              </div>
            </section>
            <section className="hero is-large">
              <div className="hero-body">
                <div className="container">
                  <div className='columns'>
                    <div className='column is-6'>
                      <h1 className="title">
                        ReSelect with one option
                      </h1>
                      <div className='reselect'>
                        <ReSelectSingle 
                          options={['Argentina', 'Colombia', 'Brazil', 'Chile', 'Venezuela', 'Germany',
                          'France', 'China', 'USA', 'Russia', 'UK' ]}
                           message='Choose a country'
                           getSelectedOption={this.setSelectedOption} />
                      </div>
                    </div>
                    <div className='column is-6'>
                      <h1 className="title">
                        ReSelect with multiple options
                      </h1>
                      <div className='reselect'>
                        <ReSelectMultiple 
                          options={['Argentina', 'Colombia', 'Brazil', 'Chile', 'Venezuela', 'Germany',
                                        'France', 'China', 'USA', 'Russia', 'UK' ]}
                          message='Choose one or more countries'
                          max={7} 
                          getSelectedOptions={this.setSelectedOptions} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer class="footer">
              <div class="container">
                <div class="content has-text-centered">
                  <p>
                    <strong>ReSelect</strong> by <a href="https://github.com/OthmaneBlial">Othmane Blial</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
                  </p>
                </div>
              </div>
            </footer>
         </div>
         );
   }
}




export default App;
