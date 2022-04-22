import React, {useState} from 'react';
import Chart from '../../components/Chart/Chart';
import AdvancedSelect from '../../components/AdvancedSelect/AdvancedSelect';
import brand from '../../services/brand';
import product from '../../services/product';
import category from '../../services/category';

function Analytics() {
  const [selectedBrand, setSelectedBrand] = useState('marcamacarrao1');
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  console.log(selectedCategory)
  return (
    <div className="analytics">
        <div className="analytics__select">
          <AdvancedSelect 
            options={category}
            label={'Category'}
            handleChange={(e) => console.log(e)}
          />
        </div>
        <div className="analytics__chart">
          <Chart brandId={selectedBrand} brandName={''}/>
        </div>
    </div>
  )
}

export default Analytics