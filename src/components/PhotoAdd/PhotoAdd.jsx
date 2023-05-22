import React from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../features/photo/photoSlice";
import "./PhotoAdd.css";

export default function PhotoAdd() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      dispatch(addPhoto({ base64 }));
    };
    reader.readAsDataURL(fileUploaded);
  };

  return (
    <div className="PhotoAdd">
      <input type="file" onChange={handleChange} />
    </div>
  );
}