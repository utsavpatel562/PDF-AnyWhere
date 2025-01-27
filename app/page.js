import { UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";

export default function Home() {
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
