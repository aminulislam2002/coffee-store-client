import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const newCoffee = { name, quantity, supplier, taste, category, details, photoURL };
    console.log(newCoffee);

    // Send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Added!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[#F4F3F0] p-10 md:p-24">
      <h1 className="text-center font-extrabold text-3xl">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* From name and quantity row  */}
        <div className="md:flex md:gap-10 md:mb-5">
          <div className="form-control md:w-1/2 mb-3 md:mb-0">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-3 md:mb-0">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* From supplier name and taste row  */}
        <div className="md:flex md:gap-10 md:mb-5">
          <div className="form-control md:w-1/2 mb-3 md:mb-0">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-3 md:mb-0">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* From category and details row  */}
        <div className="md:flex md:gap-10 md:mb-5">
          <div className="form-control md:w-1/2 mb-3 md:mb-0">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-3 md:mb-0">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* From photo url row  */}
        <div className="mb-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div>
          <input type="submit" className="btn btn-block" value="Add Coffee" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
