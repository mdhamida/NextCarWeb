import React from 'react'

const CarInfo1 = () => {
  return (
    <>
    <div className="container-fluid">
        <div style={{textAlign:"center"}} className="row">
            <div className="col-8 ">
                <h1 >Highlight of this cars </h1>
                <h2 >Force Gurkha</h2>
                <p > <span style={{color:"red" , fontWeight:"bold"}}>★★★★★</span> 4.2 Reviews   Review this Car</p>
                <p >Force offers 1 variants for Gurkha</p>
                <h2 >Rs.14.49 Lakh*</h2>
                <p >Get On Road Price in Hyderabad</p>
                <h1>Available Colors</h1>
                <img src="/c1.jpg" alt="" />
                <img src="/c2.jpg" alt="" />
                <img src="/c3.jpg" alt="" />
                <img src="/c4.jpg" alt="" />
                <a style={{textDecorationLine:"none" , color:"white" , backgroundColor:"red" , borderRadius:"14px" , padding:"10px" }} href="/Register">Register</a>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default CarInfo1