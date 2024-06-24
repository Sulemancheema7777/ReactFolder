import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github;

export const githubInfo = async ()=>{
    const response =  await fetch('http://api.github.com/users/Sulemancheema7777');
    return response.json();
}