import React, { Component } from 'react';
import ProductInfo from './ProductInfo';

class ProductInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <ProductInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default ProductInfoList;