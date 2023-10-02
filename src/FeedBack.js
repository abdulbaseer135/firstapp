import React,{ useState } from 'react'
  

const FeedBack = () => {

    const [value,setValue]=useState({});

    const handleSubmit=(e)=>{
      e.preventDefault();
      setValue(e.target.value);
      console.log(value)
    }
  return (
    <div>
      <input  
      value={value}
      type='range'
      min="0"
      max="100"
      onChange={(e)=>{setValue(e.target.value)}}
      />
      {value}
      <br />
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default FeedBack
