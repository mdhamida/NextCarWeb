import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <img style={{height:"40px" , width:"50px" , }} src="/c4.jpg" alt="" />
    <a style={{marginRight:"800px"}} class="navbar-brand ">CarDekho</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar