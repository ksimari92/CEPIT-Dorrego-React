import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Count() {
  const [count, setCount] = useState(0);

  let users = useContext(UserContext);

 // Similar a componentDidMount y componentDidUpdate:

 useEffect(() => {
   // Actualiza el título del documento usando la Browser API
   document.title = `You clicked ${count} times`;
   
  console.log(users)
 },[]);

 useEffect(() => {
    console.log('Este código se ejecutará cada vez que el componente se monte.')
    return () => {
        console.log('Este mensaje se ejecutará cada vez que el componente se desmonte')
    }
}, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Count