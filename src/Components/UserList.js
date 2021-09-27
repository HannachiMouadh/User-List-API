import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Card } from 'react-bootstrap'

const UserList = () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setData(res.data)
        })
    })

    return (
        <div className="user-list">
            {data.map((item)=>{
               return <Card  style={{ width: '18rem' }}>
               <Card.Body>
               <Card.Text>Name:</Card.Text>
                 <Card.Subtitle>{item.name}</Card.Subtitle>
                 <Card.Text>UserName:</Card.Text>
                 <Card.Subtitle>{item.username}</Card.Subtitle>
                 <Card.Text>Email:</Card.Text>
                 <Card.Subtitle>{item.email}</Card.Subtitle>
                 <Card.Text>Street:</Card.Text>
                 <Card.Subtitle>{item.address.street}</Card.Subtitle>
                 <Card.Text>Suite:</Card.Text>
                 <Card.Subtitle>{item.address.suite}</Card.Subtitle>
                 <Card.Text>City:</Card.Text>
                 <Card.Subtitle>{item.address.city}</Card.Subtitle>
                 <Card.Text>ZipCode:</Card.Text>
                 <Card.Subtitle>{item.address.zipcode}</Card.Subtitle>
                 <Card.Text>Geographical latitude:</Card.Text>
                 <Card.Subtitle>{item.address.geo.lat}</Card.Subtitle>
                 <Card.Text>Geographical langitude</Card.Text>
                 <Card.Subtitle>{item.address.geo.lng}</Card.Subtitle>
               </Card.Body>
             </Card>
            })}
        </div>
    )
}

export default UserList
