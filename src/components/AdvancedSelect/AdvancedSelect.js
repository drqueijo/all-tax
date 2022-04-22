import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

function AdvancedSelect({options, label}) {

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <h3 className="select-title">{label}</h3>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>

  )
}

export default AdvancedSelect