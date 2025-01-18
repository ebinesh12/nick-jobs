import { deleteJobs } from "@/lib/api";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
    const param = useParams();
    const id =param.id;
    const nav = useNavigate();
    // console.log(id)
     const [data, setData] = useState();
    const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/jobs/${id}`);
          // console.log(response)
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } 
      };
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="container mx-auto mt-8 px-4">
        <a href="/jobs" className="text-blue-600 hover:underline text-sm">Back to Job Listings</a>

        <div className="bg-white shadow-md rounded mt-4 p-6">
          <h2 className="text-2xl font-bold">{data?.position}</h2>
          <p className="text-gray-600 mt-2">{data?.type}</p>
          <p className="text-gray-600 mt-2">{data?.location}</p>
          <div className="mt-4">
            <h3 className="text-lg font-bold text-blue-600">Job Description</h3>
            <p className="mt-2 text-gray-700">
            {data?.descript}
            </p>
            <p className="mt-4 font-bold">Salary: <span className="text-gray-700">{data?.salary} / month</span></p>
          </div>
        </div>

        <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mt-6">
          {/* Company Info */}
          <div className="bg-white col-span-3 shadow-md rounded p-6">
            <h3 className="text-lg font-bold">Company Info</h3>
            <h4 className="text-lg font-bold">{data?.cname}</h4>
            <p className="mt-2 text-gray-700">
              {data?.cdescript}
            </p>
            <div className="mt-4">
              <p className="font-bold">Contact Email:</p>
              <p className="text-blue-600">{data?.cname}</p>
              <p className="font-bold mt-4">Contact Phone:</p>
              <p className="text-gray-700">{data?.mobile}</p>
            </div>
          </div>

          {/* Manage Job Actions */}
          <div className="col-span-2 bg-white shadow-md rounded p-6 flex flex-col justify-center items-center md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Manage Job</h3>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={()=>{
                nav(`/update/${id}`)
              }}>Edit Job</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700" onClick={()=>{
                deleteJobs(id)
                nav("/jobs")
              }}>Delete Job</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
