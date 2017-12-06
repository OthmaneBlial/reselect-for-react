//Created by Othmane Blial

import React from 'react';
import './main.css'



class ReSelectMultiple extends React.Component {


   constructor(props) {
      super(props);

    
      this.state = {
          options: false,
          selectValue: this.props.message,
          optionsList: this.props.options,
          selectValues: [],
          max: this.props.max || this.props.options.length,
          searching: false,
          search: '',
          filteredOptionsList: [],
        }

      
        this.showOptions = this.showOptions.bind(this);
        this.setSelectValue = this.setSelectValue.bind(this);
        this.deleteOptionItem = this.deleteOptionItem.bind(this);
        this.clearAllFields = this.clearAllFields.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

      }



    showOptions() {
      this.setState({options: !this.state.options});
    }

    setSelectValue(value) {

      if (!this.state.selectValues.includes(value)) {
        this.setState({selectValues: [...this.state.selectValues, value]});
        this.props.getSelectedOptionsFromChild([...this.state.selectValues, value]);
      }
      
      this.setState({selectValue: this.props.message, options: false, search: ''});

    }


    deleteOptionItem(index) {
      var array = this.state.selectValues;
      array.splice(index, 1);
      this.setState({selectValues: array});
      this.props.getSelectedOptionsFromChild(array);
      

    }

    clearAllFields() {
      this.setState({selectValues: []});
      this.props.getSelectedOptionsFromChild([]);
    }

    onTextChange(ev) {
    var search = ev.target.innerText;
    
    var optionsListToChange = [];

    for (var i = 0; i < this.state.optionsList.length; i++) {
      optionsListToChange.push(this.state.optionsList[i]);
    }

    var filteredArr = [];

    for (i = 0; i < optionsListToChange.length; i++) {
        if (optionsListToChange[i].toLowerCase().startsWith(search.toLowerCase())) {
          filteredArr.push(optionsListToChange[i]);
        }
      }
    
    this.setState({options: true, searching: true ,search: search, filteredOptionsList: filteredArr});

    }

    componentDidMount() {
      //document.getElementById("search-input").innerHTML = "";
    }



   render() {

    var arr;

    if (!this.state.searching) {
      arr = this.state.optionsList;
    } else {
      arr = this.state.filteredOptionsList;
    }



      return (
         <div>
            <div className="container">
              <div className='select-multiple'>
                <div className='select-multiple-items'>
                  {this.state.selectValues.map((optionItem, index) =>
                    <div key={index} style={{display: 'inline-block'}}>
                    <a onClick={() => this.deleteOptionItem(index)}
                      className='select-multiple-item'>
                    <span>x</span>
                    {optionItem}</a>
                    </div>
                    )}
                 {
                  (this.state.selectValues.length > 0) ? 
                 <a contenteditable="true" className='search-input' id='search-input' 
                  onInput={ this.onTextChange } onFocus={this.showOptions}>
                  {(this.state.options) ? null : '' }
                  </a> : ''  
                }
                </div>
                {(this.state.selectValues.length === 0) ?
                 <p contenteditable="true" className='message' 
                  onInput={ this.onTextChange } onClick={this.showOptions}>{this.props.message}</p> : '' }
                <span onClick={this.showOptions} className="caret">
                {(this.state.options) ? 
                  <i className="fa fa-caret-up" aria-hidden="true"></i> :
                  <i className="fa fa-caret-down" aria-hidden="true"></i>}
                </span>
                {(this.state.selectValues.length > 0) ?
                <span onClick={this.clearAllFields} className="window-close"> 
                  <i className="fa fa-window-close" aria-hidden="true"></i></span> : ''}
              </div>


              { (this.state.options) ?
              <ul className='options'>                
                { arr.map((optionItem) =>
                    <li key={optionItem} 
                    className={(this.state.selectValues.includes(optionItem)) 
                      || this.state.max === this.state.selectValues.length
                     ? 'disabled-item' : ''}
                    onClick={() => this.setSelectValue(optionItem)} >{optionItem}</li>
                ) }
                </ul> 
                :
                '' }
            </div>
         </div>
         );
   }
}




export default ReSelectMultiple;
