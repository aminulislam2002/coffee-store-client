import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, price, voucher, photoURL } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-5">
        <figure>
          <img src={photoURL} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full">
          <div className="ms-5">
            <h2 className="card-title">Name: {name}</h2>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
            <p>Supplier: {supplier}</p>
            <p>Price: {price} taka</p>
            <p>Quantity: {quantity}</p>
            <p>Voucher: {voucher}</p>
            <p>Details: {details}</p>
          </div>
          <div>
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn bg-emerald-500 border-0 hover:bg-emerald-800">View</button>
              <button className="btn bg-blue-500 border-0 hover:bg-blue-800">
                <Link to={`updateCoffee/${_id}`}>Edit</Link>
              </button>
              <button className="btn bg-red-500 border-0 hover:bg-red-800" onClick={() => handleDelete(_id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
