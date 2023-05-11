const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, price, voucher, photoURL } = coffee;

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
          </div>
          <div>
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn">View</button>
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
