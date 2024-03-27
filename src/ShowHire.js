import React, {useState} from 'react';

function ShowHire() {
    const [show, setShow] = useState(false)
    const ShowName = () => {
        if(show === true){
            setShow(false)
        }else{
            setShow(true)
        }
    }
  return (
    <div>
        <button onClick={ShowName}>Click</button>
        {
            show && (<h1>Hello LEOKNIT!</h1>)
        }
    </div>
  );
}

export default ShowHire;
