// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";

// function AddProducts() {
//   const [name, setName] = React.useState("");
//   const [file, setFile] = React.useState("");
//   const [price, setPrice] = React.useState("");
//   const [description, setDescription] = React.useState("");

//   async function addProduct() {
//     console.warn(name, file, price, description)
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("description", description);
//     let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
//       method: "POST",
//       body: formData,
//     });
//     alert("Data has been saved");
//   }
//   return (
//     <div>
//       <Header />
//       <div className="col-sm-6 offset-sm-3">
//         <h1>Add Products</h1>
//         <br />
//         <input
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//           className="form-control"
//           placeholder="name"
//         />
//         <br />
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="form-control"
//           placeholder="file"
//         />
//         <br />
//         <input
//           type="text"
//           onChange={(e) => setPrice(e.target.value)}
//           className="form-control"
//           placeholder="price"
//         />
//         <br />
//         <input
//           type="text"
//           onChange={(e) => setDescription(e.target.value)}
//           className="form-control"
//           placeholder="description"
//         />
//         <br />
//         <button onClick={addProduct} className="btn btn-primary">
//           Add Product
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddProducts;

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddProducts() {
  const [name, setName] = React.useState("");
  const [file, setFile] = React.useState(null); // Changed to null initially
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate(); // Use navigate if you want to redirect after submission

  async function addProduct() {
    // Basic validation (optional)
    if (!name || !file || !price || !description) {
      alert("Please fill in all fields.");
      return;
    }

    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    try {
      let response = await fetch("http://127.0.0.1:8000/api/addProduct", {
        method: "POST",
        body: formData, // Don't set Content-Type, let the browser do it
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json(); // Assuming your API responds with JSON
      alert("Data has been saved");

      // Optionally navigate to another page after success
      // navigate("/products"); // Adjust the path as needed

    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Products</h1>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Name"
        />
        <br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
          placeholder="File"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          placeholder="Price"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="Description"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProducts;

