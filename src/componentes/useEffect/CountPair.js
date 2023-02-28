import React , {useState, useEffect} from 'react'
import Image1  from './Image1';


const CountPair = () => {
const [users, setUsers] = useState([]);

    const getUsers = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(data.data))
    }

    
    useEffect(() => {
        getUsers('https://reqres.in/api/users?page=2');
    },[])

    const [count, setCount] = useState(null);
    return (
        <div>
            {users.map((user, index) => {
              return  <p key={index}>{user.first_name}</p>
            })}
            {
                count % 2 === 0 ? <Image1 /> : <p>Imagen Oculta</p>
            }
            <button onClick={() => setCount(count + 1)}>Pulsar</button>
        </div>
    );

}

export default CountPair