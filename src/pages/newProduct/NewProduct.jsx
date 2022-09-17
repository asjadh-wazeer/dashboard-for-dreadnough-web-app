import { Link } from "react-router-dom";

import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Add Your New Course</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Upload Your Course</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Course Name</label>
          <input type="text" placeholder="Course Name" />
        </div>
        <div className="addProductItem">
          <label>Price (USD)</label>
          <input type="text" placeholder="$" />
        </div>
        <div className="addProductItem addProductItem__margin__bottom">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <Link to="/" className="addProductButton">Create</Link>
      </form>
      
    </div>
  );
}