import React from 'react'

const component1 =async () => {
     
    await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-07-26&sortBy=publishedAt&apiKey=d7ba8b3710a145ddaac82a41f40385b6").then(response=>response.json().then(data=>{console.log(data)})) 
 

  return (
    <div>
              {/* {data.map((articles,index)=>{
        return
        <p>{articles.author}</p>
      })} */}
    </div>
  )
}

export default component1
