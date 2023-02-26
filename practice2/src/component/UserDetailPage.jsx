import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const UserDetailPage = () => {
    const [params] = useSearchParams();
    console.log("ansd",params.get("id"))

    const [data, setData] = useState({});
    useEffect(() => {
      async function Details() {
        const res = await fetch(
          `https://hub.dummyapis.com/employee?noofRecords`
        );
        const get = await res.json();
        
        setData(get.find((item)=>item.id==params.get("id")));
  
        document.title = `useEffect - Employee Details  `;
      }
      Details();
    }, []);
  
    return (
   <>
   
            <h2>User Details</h2>

            <div className="card">
            
  <img src={data.imageUrl} alt="Avatar" style={{width:"50%"}}  />
  <p>{data.id}</p>
  <div className="container">
    <h4><b>{data.firstName}</b></h4> 
    <p>{data.email}</p> 
    <p>{data.lastName}</p> 
    <p>{data.age}</p>
    <p>{data.dob}</p>
  </div>
</div>
       
    
    
                    
                    </>
        
    );
}

export default UserDetailPage






 
