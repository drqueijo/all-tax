import React, {useState, useEffect} from 'react';
import Chart from '../../components/Chart/Chart';
import AdvancedSelect from '../../components/AdvancedSelect/AdvancedSelect';
import { getBrandByFatherId, getBrandById } from '../../services/brand';
import { getProductByFatherId } from '../../services/product';
import category from '../../services/category';
import Button from '@mui/material/Button';

function Analytics() {
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setSelectedProduct(null)
  },[selectedCategory])
  
  useEffect(() => {
    setSelectedBrand(null)
  },[selectedProduct])

  const clearState = () => {
    setSelectedBrand(null)
    setSelectedProduct(null)
    setSelectedCategory(null)
  } 

  return (
    <div className="analytics">
        <div className="analytics__select">
            <AdvancedSelect 
              options={category}
              label={'Category'}
              handleChange={setSelectedCategory}
              selected={selectedCategory || null}
            />
            <AdvancedSelect 
              options={getProductByFatherId(selectedCategory)}
              label={'Product'}
              handleChange={setSelectedProduct}
              selected={selectedProduct}
            />
            <AdvancedSelect 
              options={getBrandByFatherId(selectedProduct)}
              label={'Brand'}
              handleChange={setSelectedBrand}
              selected={selectedBrand}
            />
            <Button onClick={() => clearState()} variant="outlined">Clear</Button>
        </div>
        <div className="analytics__chart">
          <Chart brandId={selectedBrand} brandName={getBrandById(selectedBrand).name}/>
        </div>
    </div>
  )
}

export default Analytics