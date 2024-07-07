import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PostRestaurantPizzas = () => {
  const [restaurantPizza, setRestaurantPizza] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurant_pizzas")
      .then((r) => r.json())
      .then((data) => {
        setRestaurantPizza(data);
        console.log(data);
      });
  }, []);

  function handleAddRestaurantPizza(newRestaurantPizza) {
    setRestaurantPizza([...restaurantPizza, newRestaurantPizza]);
  }

  const validationSchema = Yup.object().shape({
    price: Yup.number().required("Price is required").min(1).max(30),
    pizzaId: Yup.number().required("Pizza Id is required"),
    restaurantId: Yup.number().required("Restaurant Id is required"),
  });

  return (
    <div className="">
      <h1 className="text-center text-2xl font-extrabold">Add Pizza</h1>
      <Formik
        initialValues={{ price: "", pizzaId: "", restaurantId: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch("http://localhost:5000/restaurant_pizzas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              price: values.price,
              pizza_id: values.pizzaId,
              restaurant_id: values.restaurantId,
            }),
          })
            .then((r) => r.json())
            .then((newRestaurantPizza) => {
              handleAddRestaurantPizza(newRestaurantPizza);
              setSubmitting(false);
              resetForm();
              console.log(newRestaurantPizza);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-slate-400 p-6 rounded-lg shadow-2xl max-w-md mx-auto mt-6 mb-6">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-0">
              <label htmlFor="price" className="block text-gray-700 text-ms font-bold mb-2">
                Price:
              </label>
              <Field
                name="price"
                type="number"
                placeholder="Enter Price"
                className="shadow-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-0">
              <label htmlFor="pizzaId" className="block text-gray-700 text-ms font-bold mb-2">
                Pizza Id:
              </label>
              <Field
                name="pizzaId"
                type="number"
                placeholder="Enter Pizza ID"
                className="shadow-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              />
              <ErrorMessage name="pizzaId" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-0">
              <label htmlFor="restaurantId" className="block text-gray-700 text-ms font-bold mb-2">
                Restaurant Id:
              </label>
              <Field
                name="restaurantId"
                type="number"
                placeholder="Enter Restaurant ID"
                className="shadow-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              />
              <ErrorMessage name="restaurantId" component="div" className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostRestaurantPizzas;
