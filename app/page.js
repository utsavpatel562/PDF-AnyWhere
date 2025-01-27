"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
import {useMutation} from "convex/react";
import { api } from "../convex/_generated/api";
import { useEffect } from "react";
export default function Home() {
  const {user} = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(()=> {
    user&&CheckUser();
  }, [user])
  
  const CheckUser = async() => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    })
    console.log(result);
  }
  return (
    <>
    <div className="flex gap-5 p-10">
      <h1>Home</h1>
      <Button>This testing button</Button>
      <UserButton/>
    </div>
    </>
  );
}
