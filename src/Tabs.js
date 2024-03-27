import React from 'react';
import { useState } from 'react';
import './Tabs.css';

function Tabss() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }
  return (
    <div className='d-flex align-item-center justify-content-center'>
      <div className='col-6 tab p-5'>
        <ul className='d-flex'>
          <li className='flex-fill' onClick={()=>updateToggle(1)}>HTML</li>
          <li className='flex-fill' onClick={()=>updateToggle(2)}>CSS</li>
          <li className='flex-fill' onClick={()=>updateToggle(3)}>JavaScript</li>
        </ul>
        <div className={toggle === 1 ? "show-content" : "content"}>
          <h1>HTML</h1>
          <p>
          ReactJS is a popular JavaScript library for building user interfaces. It is known for its performance, flexibility, and 
          scalability. Kiem Nguyen ReactJS uses a component-based architecture, which makes it easy to build reusable and maintainable code. 
          </p>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <h1>CSS</h1>
          <p>
          ReactJS is a popular JavaScript library for building user interfaces. It is known for its performance, flexibility, and 
          scalability. HUTECH ReactJS uses a component-based architecture, which makes it easy to build reusable and maintainable code. 
          </p>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <h1>JavaScript</h1>
          <p>
          ReactJS is a popular JavaScript library for building user interfaces. It is known for its performance, flexibility, and 
          scalability. IT ReactJS uses a component-based architecture, which makes it easy to build reusable and maintainable code. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabss;