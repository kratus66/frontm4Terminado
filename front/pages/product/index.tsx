import GetProductsShop from "../../src/components/GetProducts/getProducts";

function ProductPage() {
  return (
    <div>
      <h1>Todos los productos</h1>
      {/* Renderizamos todos los productos utilizando el componente GetProducts */}
      <GetProductsShop />
    </div>
  );
}

export default ProductPage;


