import React from "react";
import { useSelector } from "react-redux";
import "./PhotoList.css";

export default function PhotoList() {
   const photos = useSelector((state) => state.photo.photos);
   
   return (
      <div className="photoList">
         {photos.map((photo) => (
         <img className="photo" key={photo.id} src={photo.base64} alt="foto" />
         ))}
      </div>
   );
}