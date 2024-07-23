import { useState } from 'react';
import axios from "axios";
import {useAuthProvider} from "../../hooks/useAuthProvider.js";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const navigation=useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('')
    const {setUser,setToken}=useAuthProvider();
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle login logic here
      try {
         const res= await axios.post("http://localhost:8080/api/v1/auth/login",{
              username,password
          })
          const {user,token}=res.data
          setUser(user)
          setToken(token)
          navigation("/")
          //login success
      }catch(e){
          //login failed
          console.log(e)
            setError(e.response.data.error)
      }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="input w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error?<h1 className={'text-sm text-red-500'}>{error}</h1>:''}
                    <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
