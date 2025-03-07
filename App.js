import React from "react";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ProfileCard 
        name="Patel Shruti"
        photo="https://tse1.mm.bing.net/th?id=OIP.dyrNVjS8Pde2JhHGcya_MwHaHa&pid=Api&P=0&h=180"
        bio="A passionate web developer who loves React!"
      />
    </div>
  );
}
