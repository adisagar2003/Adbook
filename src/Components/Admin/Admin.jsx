import axios from 'axios';
import React,{useState} from 'react'

function Admin() {
   const [upload,setUpload] = useState(false);
   const [fileAlert,setFileAlert] = useState(true);
   const [ success,setSuccess] = useState(false);
   const [newHotel,setHotel] = useState({
      name:"",
      price:0,
      photo:'',
   })
   const [name,setName] = useState(null)
   const handlePhoto  = (e)=>{setHotel({
      ...newHotel,photo:e.target.file
  
   })
   console.log(newHotel)
}
const submitHandle = (e)=>{
e.preventDefault();
   if (name!=null){
      
      axios.post('https://adbook-server.herokuapp.com/admin/upload',{
         file:newHotel.photo,
         name:Date.now()+'--'+name
      }).then((res)=>{
console.log(res,'this should be the response')
setSuccess(true)
      }).catch((error)=>{
         console.log(error)
      })
      setUpload(true)
      setInterval(()=>{
         setUpload(false)
      },4000)
   }
   else{

   }
}
  return (
    <div>
      {success?<h1>File uploaded!!!!</h1>:<a></a>}
    <form onSubmit={submitHandle}>
      <main class="flex min-h-screen items-center justify-center bg-gray-100 font-sans">
  <label for="dropzone-file" class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center" >Upload file</label>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>

    <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Add hotel image</h2>


    <input id="dropzone-file" type="file" class="hidden" onChange={handlePhoto} />
    <input type="text" onChange={(e)=>setName(e.target.value)} />
    <button  onSubmit={submitHandle} >Submit</button>
<h1>Admin branch data</h1>
</main>


</form>
      </div>

  )
}

export default Admin