import React from "react";
import { useDispatch } from "react-redux";
import { toggleActive } from "../Redux/Actions";
import logo from "../../Images/delete.png";

export const Quizzes = ({ title, serial, active, id, date, openModel }) => {
  const dispatch = useDispatch();

  const ActiveHandler = (id) => {
    dispatch(toggleActive(id));
  };

  return (
    <div className="d-inline-flex mx-2 mb-3 p-2 border border-4 border-dark rounded">
      <div>
        {serial} .
      </div>
      <div className=" mx-4 ">
        {title.toUpperCase()}
      </div>
      <div className='form-check form-switch'>
        <input
        className="form-check-input" 
        type="checkbox" 
        role="switch" 
        style={{ backgroundColor: `${active ? "green" : "red"}` }}
        onClick={() => ActiveHandler(id)}
        />
        <label className="form-check-label">
          {active ? "Active" : "Inactive"}
        </label>
      </div>
      <div className=" mx-3">
        {`|  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}   |   ${date.getHours()}:${date.getMinutes()}  |`}
      </div>
      <div className=" mx-3">
        <img
          src={logo}
          alt=""
          width="25px"
          style={{ cursor: "pointer" }}
          onClick={() => openModel(id)}
        />
      </div>
    </div>
  );
};
