export const FetchUsers=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=res.json()
    // console.log(data)
    return data
}
FetchUsers()