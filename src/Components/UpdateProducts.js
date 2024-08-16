import React from "react";
import Header from "./Header";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProducts(props) {
  const [name, setName] = React.useState("");
  const [file, setFile] = React.useState(null); // Changed to null initially
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [data, setData] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(
        "http://127.0.0.1:8000/api/product/" + params.id
      );
      result = await result.json();
      setData(result);
      setName(result.name);
      setPrice(result.price);
      setDescription(result.description);
      setFile(result.file);
    };
    fetchData();
  }, []);

  async function editProduct(id) {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    try {
      let response = await fetch(`http://127.0.0.1:8000/api/updateproduct/${id}?_method=PUT`, {
        method: "POST",
        body: formData, // Don't set Content-Type, let the browser do it
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json(); // Assuming your API responds with JSON
      alert("Data has been updated");

      // Optionally navigate to another page after success
      // navigate("/products"); // Adjust the path as needed

    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to update product. Please try again.");
    }
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Update Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          defaultValue={data.name}
          className="form-control"
        />
        <br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          defaultValue={data.file_path}
          className="form-control"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={data.price}
          className="form-control"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={data.description}
          className="form-control"
        />
        <br />
        <img
          style={{ width: 120 }}
          src={"http://127.0.0.1:8000/" + data.file_path}
        />
        <br />
        <br />
        <button
          onClick={() => editProduct(data.id)}
          className="btn btn-primary"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateProducts;
