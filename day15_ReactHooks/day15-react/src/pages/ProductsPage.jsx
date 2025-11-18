import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct } from "../redux/productsSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error fetching products.</p>;

  return (
    <div>
      <h3> Purchase your Products</h3>
      <div className="row">
        {items.slice(0, 6).map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card p-2">
              <img
                src={p.image}
                alt={p.title}
                style={{ height: 100, objectFit: "contain" }}
              />
              <h6>{p.title}</h6>
              <p>₹{p.price}</p>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => dispatch(updateProduct(p))}
              >
                Update Price
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
