import React, { Component } from 'react';
import sinon from 'sinon';
import Autowhatever from '../../../src/Autowhatever';
import items from './items';

export const renderItem = sinon.spy((item) => <span>{item.text}</span>);

export default class AutowhateverApp extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      highlightedItemIndex: null,
      hoveredItemIndex: null,
    };

    this.inputRef = React.createRef();
  }

  storeAutowhateverReference = (autowhatever) => {
    if (autowhatever !== null) {
      this.autowhatever = autowhatever;
    }
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onMouseEnter = (event, { itemIndex }) => {
    this.setState({
      hoveredItemIndex: itemIndex,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hoveredItemIndex: null,
    });
  };

  onClick = (event, { itemIndex }) => {
    this.setState({
      value: items[itemIndex].text,
    });
  };

  render() {
    const { value, highlightedItemIndex, hoveredItemIndex } = this.state;
    const inputProps = {
      id: 'my-fancy-input',
      value,
      onChange: this.onChange,
      ref: this.inputRef,
    };
    const itemProps = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onClick: this.onClick,
    };

    return (
      <Autowhatever
        id="my-fancy-component"
        items={items}
        renderItem={renderItem}
        inputProps={inputProps}
        itemProps={itemProps}
        highlightedItemIndex={highlightedItemIndex}
        hoveredItemIndex={hoveredItemIndex}
        ref={this.storeAutowhateverReference}
      />
    );
  }
}
