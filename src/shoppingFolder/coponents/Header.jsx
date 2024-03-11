import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className="left">
        <div className="title">
          <h2>Shoping Male</h2>
        </div>
      </div>
      <div className="center">
        <uL>
          <li>woment</li>
          <li>Men</li>
          <li>children</li>
          <li>Beauty</li>
        </uL>
      </div>
      <div className="search">
        <input type="text" placeholder='search....' />
      </div>
      <div className="right">
        <div className="singin">
          singin/singup
        </div>
        <div className="cart">
          Cart
        </div>
      </div>
    </div>
  )
}

export default Header
