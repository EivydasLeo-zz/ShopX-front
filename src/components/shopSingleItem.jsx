import React, { Component } from 'react';
import Button from './common/button/button';

class ShopSingleItem extends Component {
  state = {};
  render() {
    return (
      <div className="single-item ">
        <div className="d-flex">
          <div className="single__images-part w-50">
            <img
              className="single__main-image"
              src="https://placeimg.com/640/480/people"
              alt="main item"
            />
            <div className="single__photos d-flex flex-wrap">
              {[1, 2, 3].map((img) => (
                <img src="https://placeimg.com/100/100/people" alt="" />
              ))}
            </div>
          </div>
          <div className="single__item-info-part">
            <h2 className="item-info__title">title</h2>
            <p className="item-info__price">300 eur</p>
            <div className="item-info__options d-flex ">
              <div>
                <label htmlFor="colors">Colors</label>
                <br />
                <select name="colors" id="colors">
                  <option value="1">Green</option>
                  <option value="2">Red</option>
                  <option value="3">Blue</option>
                </select>
              </div>
              <div>
                <label htmlFor="sizes">Sizes</label>
                <br />
                <select name="sizes" id="sizes">
                  <option value="1">Small</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
              </div>
            </div>
            <Button outline>Add to cart</Button>
            <Button>Buy it now</Button>
            <div>soclial</div>
          </div>
        </div>
        <p className="single-item__description">
          Our navy S.P.C.C logo flat peak cap is crafted from high quality Acrylic twill with a
          contrast white 3D S.P.C.C embroidery on the crown. The crown is cut from six panels for
          the perfect shape and has an adjustable PU back strap with metal clip to ensures a
          comfortable fit. Our Flat Peak cap is finished off with an SPCC metal clip label, an SPCC
          woven label, twill sweatband and the tonal embroidered eyelets ensure ventilation.
        </p>
      </div>
    );
  }
}

export default ShopSingleItem;