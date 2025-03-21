"use client";
import axios from "axios";
import React, { useState } from "react";

export default function Signup() {
    // State variables for email and password   
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <div className="flex flex-col h-screen justify-center">
            <div className="flex justify-center">
                <div className="border rounded-lg pb-4">
                    {/* Add an email input field */}
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 m-2"
                        type="text"
                        placeholder="Email"
                        value={Email}
                    />
                    <br />
                    {/* Add a password input field */}                      
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 m-2"
                        type="password"
                        placeholder="Password"
                        value={Password}
                    />
                    <br />
                    
                    <div className="mt-4 flex justify-center">
                        <button 
                            onClick={() => {
                                axios.post("http://localhost:3000/api/user", {
                                    email: Email,
                                    password: Password  
                                })
                                
                                .then(response => console.log("Success:", response.data))
                                .catch(error => console.error("Error:", error));
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
