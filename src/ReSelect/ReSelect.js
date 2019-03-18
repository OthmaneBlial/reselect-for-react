//Created by Othmane Blial

import React from "react";
import "./main.css";

export class ReSelectSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: false,
      selectValue: "",
      optionsList: this.props.options,
      clear: false,
      searching: false,
      search: "",
      filteredOptionsList: []
    };

    this.showOptions = this.showOptions.bind(this);
    this.setSelectValue = this.setSelectValue.bind(this);
    this.clearField = this.clearField.bind(this);
    this.clear = this.clear.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  showOptions() {
    this.setState({ options: !this.state.options, searching: false });
  }

  setSelectValue(value) {
    this.setState({ selectValue: value, options: false, clear: false });
    this.props.getSelectedOption(value);
  }

  clearField() {
    this.setState({ selectValue: "" });
    this.props.getSelectedOption("");
  }

  clear() {
    this.setState({ clear: true });
  }

  onTextChange(ev) {
    let search = ev.target.innerText;

    let optionsListToChange = [];

    for (let i = 0; i < this.state.optionsList.length; i++) {
      optionsListToChange.push(this.state.optionsList[i]);
    }

    let filteredArr = [];

    for (i = 0; i < optionsListToChange.length; i++) {
      if (
        optionsListToChange[i].toLowerCase().startsWith(search.toLowerCase())
      ) {
        filteredArr.push(optionsListToChange[i]);
      }
    }

    this.setState({
      options: true,
      searching: true,
      search: search,
      filteredOptionsList: filteredArr
    });
  }

  componentDidMount() {
    //Object.freeze(this.state.optionsList);
    //this.getSelectedOption();
  }

  render() {
    let arr;

    if (!this.state.searching) {
      arr = this.state.optionsList;
    } else {
      arr = this.state.filteredOptionsList;
    }

    return (
      <div>
        <div className="container">
          <div className="select-multiple">
            {this.state.selectValue === "" ? (
              <div
                contenteditable="true"
                onInput={this.onTextChange}
                onFocus={this.showOptions}
                onClick={this.clear}
                className="message"
              >
                {this.state.clear ? "" : this.props.message}
              </div>
            ) : (
              <div className="message-black">{this.state.selectValue}</div>
            )}
            <span onClick={this.showOptions} className="caret">
              {this.state.options ? (
                <i className="fa fa-caret-up" aria-hidden="true" />
              ) : (
                <i className="fa fa-caret-down" aria-hidden="true" />
              )}
            </span>
            {this.state.selectValue !== "" ? (
              <span onClick={this.clearField} className="window-close">
                <i className="fa fa-window-close" aria-hidden="true" />
              </span>
            ) : (
              ""
            )}
          </div>

          {/*show the list of options of Select*/}
          {this.state.options ? (
            <ul className="options">
              {arr.map(optionItem => (
                <li
                  key={optionItem}
                  onClick={() => this.setSelectValue(optionItem)}
                >
                  {optionItem}
                </li>
              ))}
              {this.state.filteredOptionsList.length === 0 &&
              this.state.searching ? (
                <li className="disabled-item">No results to show</li>
              ) : (
                ""
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export class ReSelectMultiple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: false,
      selectValue: this.props.message,
      optionsList: this.props.options,
      selectValues: [],
      max: this.props.max || this.props.options.length,
      searching: false,
      search: "",
      filteredOptionsList: []
    };

    this.showOptions = this.showOptions.bind(this);
    this.setSelectValue = this.setSelectValue.bind(this);
    this.deleteOptionItem = this.deleteOptionItem.bind(this);
    this.clearAllFields = this.clearAllFields.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  showOptions() {
    this.setState({ options: !this.state.options });
  }

  setSelectValue(value) {
    if (!this.state.selectValues.includes(value)) {
      this.setState({ selectValues: [...this.state.selectValues, value] });
      this.props.getSelectedOptions([...this.state.selectValues, value]);
    }

    this.setState({
      selectValue: this.props.message,
      options: false,
      search: ""
    });
  }

  deleteOptionItem(index) {
    let array = this.state.selectValues;
    array.splice(index, 1);
    this.setState({ selectValues: array });
    this.props.getSelectedOptions(array);
  }

  clearAllFields() {
    this.setState({ selectValues: [] });
    this.props.getSelectedOptions([]);
  }

  onTextChange(ev) {
    let search = ev.target.innerText;

    let optionsListToChange = [];

    for (let i = 0; i < this.state.optionsList.length; i++) {
      optionsListToChange.push(this.state.optionsList[i]);
    }

    let filteredArr = [];

    for (i = 0; i < optionsListToChange.length; i++) {
      if (
        optionsListToChange[i].toLowerCase().startsWith(search.toLowerCase())
      ) {
        filteredArr.push(optionsListToChange[i]);
      }
    }

    this.setState({
      options: true,
      searching: true,
      search: search,
      filteredOptionsList: filteredArr
    });
  }

  render() {
    let arr;

    if (!this.state.searching) {
      arr = this.state.optionsList;
    } else {
      arr = this.state.filteredOptionsList;
    }

    return (
      <div>
        <div className="container">
          <div className="select-multiple">
            <div className="select-multiple-items">
              {this.state.selectValues.map((optionItem, index) => (
                <div key={index} style={{ display: "inline-block" }}>
                  <a
                    onClick={() => this.deleteOptionItem(index)}
                    className="select-multiple-item"
                  >
                    <span>x</span>
                    {optionItem}
                  </a>
                </div>
              ))}
              {this.state.selectValues.length > 0 ? (
                <a
                  contenteditable="true"
                  className="search-input"
                  id="search-input"
                  onInput={this.onTextChange}
                  onFocus={this.showOptions}
                >
                  {this.state.options ? null : ""}
                </a>
              ) : (
                ""
              )}
            </div>
            {this.state.selectValues.length === 0 ? (
              <p
                contenteditable="true"
                className="message"
                onInput={this.onTextChange}
                onClick={this.showOptions}
              >
                {this.props.message}
              </p>
            ) : (
              ""
            )}
            <span onClick={this.showOptions} className="caret">
              {this.state.options ? (
                <i className="fa fa-caret-up" aria-hidden="true" />
              ) : (
                <i className="fa fa-caret-down" aria-hidden="true" />
              )}
            </span>
            {this.state.selectValues.length > 0 ? (
              <span onClick={this.clearAllFields} className="window-close">
                <i className="fa fa-window-close" aria-hidden="true" />
              </span>
            ) : (
              ""
            )}
          </div>

          {this.state.options ? (
            <ul className="options">
              {arr.map(optionItem => (
                <li
                  key={optionItem}
                  className={
                    this.state.selectValues.includes(optionItem) ||
                    this.state.max === this.state.selectValues.length
                      ? "disabled-item"
                      : ""
                  }
                  onClick={() => this.setSelectValue(optionItem)}
                >
                  {optionItem}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
