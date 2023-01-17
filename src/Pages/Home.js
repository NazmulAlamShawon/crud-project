import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn">
          <button className="">Add data</button>
        </div>
        <table class="table mt-2">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>shawon</td>
              <td>shawon@gmail.com</td>
              <td>web developer</td>
              <td>01316077209</td>
              <td>
                <div className="d-flex justify-content-between">
                <button class="btn btn-success"><i class="fa-regular fa-eye"></i></button>
                <button class="btn btn-primary"> <i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"> <i class="fa-solid fa-trash"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>nazmul</td>
              <td>nazmul@gmail.com</td>
              <td>web developer</td>
              <td>01316077208</td>
              <td>
                <div className="d-flex justify-content-between">
                <button class="btn btn-success"><i class="fa-regular fa-eye"></i></button>
                <button class="btn btn-primary"> <i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"> <i class="fa-solid fa-trash"></i></button>
                </div>
              </td>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
