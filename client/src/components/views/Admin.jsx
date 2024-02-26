import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductTable from "../ProductTable";
import AddProductForm from "../AddProductForm";
import EditProductForm from "../EditProductForm";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/productos");
        setProducts(response.data);

        // Obtener información relacionada para cada producto
        const productsWithRelatedInfo = await Promise.all(
          response.data.map(async (product) => ({
            ...product,
            relatedInfo: await fetchRelatedInfo(product.id),
          }))
        );

        setProducts(productsWithRelatedInfo);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error al obtener la lista de productos");
      }
    };

    fetchProducts();
  }, []);

  // Función para obtener información relacionada
  const fetchRelatedInfo = async (productId) => {
    try {
      const [genre, developer, distributor] = await Promise.all([
        axios.get(`http://localhost:3001/api/productos/${productId}/genre`),
        axios.get(`http://localhost:3001/api/productos/${productId}/developer`),
        axios.get(
          `http://localhost:3001/api/productos/${productId}/distributor`
        ),
      ]);

      return {
        genre: genre.data,
        developer: developer.data,
        distributor: distributor.data,
      };
    } catch (error) {
      console.error("Error fetching related info:", error);
      return {};
    }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/productos",
        newProduct
      );

      if (response.data.success) {
        // Después de agregar, recargar la lista de productos
        const updatedProducts = await axios.get(
          "http://localhost:3001/api/productos"
        );

        // Para cada nuevo producto, obtén la información relacionada
        const productsWithRelatedInfo = await Promise.all(
          updatedProducts.data.map(async (product) => ({
            ...product,
            relatedInfo: await fetchRelatedInfo(product.id),
          }))
        );

        setProducts(productsWithRelatedInfo);
      } else {
        setError("Error al agregar el producto");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Error al agregar el producto");
    }

    // Cierra el modal después de agregar
    setModalActive(false);
  };

  const handleEditProduct = async (editedProduct) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/productos/${selectedProduct.id}`,
        editedProduct
      );

      if (response.data.success) {
        // Después de editar, recargar la lista de productos
        const updatedProducts = await axios.get(
          "http://localhost:3001/api/productos"
        );
        setProducts(updatedProducts.data);
        // Desmarcar el producto seleccionado
        setSelectedProduct(null);
      } else {
        setError("Error al editar el producto");
      }
    } catch (error) {
      console.error("Error editing product:", error);
      setError("Error al editar el producto");
    }

    // Cierra el modal después de editar
    setModalActive(false);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/productos/${productId}`
      );

      if (response.data.success) {
        // Después de borrar, recargar la lista de productos
        const updatedProducts = await axios.get(
          "http://localhost:3001/api/productos"
        );
        setProducts(updatedProducts.data);
        // Desmarcar el producto seleccionado
        setSelectedProduct(null);
      } else {
        setError("Error al borrar el producto");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Error al borrar el producto");
    }
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title">Administrar Productos</h2>
          <button
            className="button is-success"
            onClick={() => setModalActive(true)}
          >
            Agregar Producto
          </button>
          <ProductTable
            products={products}
            onEditProduct={(product) => {
              setSelectedProduct(product);
              setModalActive(true);
            }}
            onDeleteProduct={handleDeleteProduct}
          />

          {modalActive && (
            <div className="modal is-active">
              <div
                className="modal-background"
                onClick={() => setModalActive(false)}
              ></div>
              <div className="modal-content">
                <div className="box">
                  <p className="title has-text-centered">
                    {selectedProduct ? "Editar Producto" : "Agregar Producto"}
                  </p>
                  <div className="columns is-centered">
                    <div className="column is-three-quarters">
                      {selectedProduct ? (
                        <EditProductForm
                          product={selectedProduct}
                          onEditProduct={handleEditProduct}
                        />
                      ) : (
                        <AddProductForm onAddProduct={handleAddProduct} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => setModalActive(false)}
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
