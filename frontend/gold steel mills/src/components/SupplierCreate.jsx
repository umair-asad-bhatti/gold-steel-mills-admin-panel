import React, {useState} from 'react';
import axios from "axios";

export const SupplierCreate = () => {
    const [error,setError]=useState('')
    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            const formData=new FormData(e.currentTarget)
            const res=await axios.post("http://localhost:8080/api/v1/supplier/store",{
                firstName:formData.get('firstName'),
                lastName:formData.get('lastName'),
                contactNumber:formData.get('contactNumber')
            })

            if(res.status===201){
                alert('Supplier Added successfully..')
            }
        }catch (e){
            setError(e.response.data.error)
            setTimeout(()=>{
                setError('')
            },3000)
        }

    }
    return (
        <div className="max-w-md mx-auto mt-8  bg-white">
            <h2 className="text-xl font-semibold mb-6">User Information</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        name={'firstName'}
                        type="text"
                        placeholder={'First Name*'}
                        className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        name={'lastName'}
                        type="text"
                        placeholder={'Last Number'}
                        className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                        Contact Number
                    </label>
                    <input

                        name={'contactNumber'}
                        type="text"
                        placeholder={'Phone Number'}
                        className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    >
                        Create
                    </button>
                    <div className={'h-10'}>

                    {
                        error.length?<h1 className={'p-2 text-sm text-red-500'}>{error}</h1>:''
                    }
                    </div>
                </div>
            </form>
        </div>
    );
};

