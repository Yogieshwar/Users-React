import React from 'react'
import { useEffect,useState } from 'react'
import { FetchUsers } from './api/UsersApi'
import UserCard from "./components/UserCard.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx"



const App = () => {
  const [users,setUsers]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    const getUsers=async()=>{
      let data=await FetchUsers()
       setUsers(data)
       setIsLoading(false)

    }
    getUsers()
  },[])
    // Function to delete user
    const handleDelete = (id) => {
      setUsers(users.filter((user) => user.id !== id));
    };
    // Function to update user details
  const handleUpdate = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  return (
  
    <div className="row">
  {isLoading ? <LoadingSpinner /> : 
    users.map((user) => (
      <div key={user.id} className="col-6 col-sm-6 col-md-4 col-lg-4 p-5 ">
        <UserCard user={user} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      </div>
    ))
  }
</div>


  )
}

export default App
