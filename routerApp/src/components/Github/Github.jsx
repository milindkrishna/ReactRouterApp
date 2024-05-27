import React,{useState,useEffect} from "react";

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
    })
    },[])

    const desiredObject = data.find((item) => item.id === 2)
    
    const name = desiredObject ? desiredObject.name : "Not Found";

    const email = desiredObject ? desiredObject.email : "Not Found";

    const id = desiredObject ? desiredObject.id : "Not Found";

    const names = data.map(item => item.name);

    return (
        <>

        <p className='text-center m-4 bg-gray-600 text-white p-4 text-1xl'>We are calling Test API :
        &nbsp;
        <a className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          href="https://jsonplaceholder.typicode.com/comments?postId=1" 
          target="_blank"
          > 
          Click to see test API
        </a>
         </p>
           <p className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>
            <ul>
                <li><b>User name is</b> : {name}</li>
                <li><b>User email is</b> : {email}</li>
                <li><b>User id</b> : {id}</li>
            </ul>
            
            </p>

           <h2 className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>
            <b>Here are the list of other name which are common users:</b>
            <ul>
            {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
            </ul>
           </h2>

        </>
    );
}

export default Github


