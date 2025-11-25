import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  image: Yup.string()
    .url("Enter a valid image URL")
    .required("Image URL is required")
});

const AddProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    price: "",
    category: "",
    description: "",
    image: ""
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addProduct(values);
      resetForm();
      navigate("/products");
    } catch (err) {
      console.error("Error adding product:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4 fw-bold">Add New Product</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="card p-4 shadow-lg">
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <Field name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <Field name="category" className="form-control" />
              <ErrorMessage name="category" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <Field
                as="textarea"
                name="description"
                className="form-control"
                rows="3"
              />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <Field name="image" className="form-control" />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            <div className="d-flex justify-content-between">
              <Link to="/products" className="btn btn-secondary">
                Cancel
              </Link>
              <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Add Product"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductForm;
