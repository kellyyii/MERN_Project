import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
import {MessageSquare, User} from "lucide-react";
import { useState } from 'react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forData, setFormData] = useState({
    fullName:"",
    email:"",
    password:"",
  });

  const {signup, isSigningUp} = useAuthStore();


  return <div>SignUpPage</div>;
};

export default SignUpPage;