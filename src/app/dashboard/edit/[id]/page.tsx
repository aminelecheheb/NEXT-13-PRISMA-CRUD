import EditForm from "./EditForm";
import { getSingleProduct } from "@/lib/product";

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const product = await getSingleProduct(id);

  return (
    <div className="container">
      <div className="editProduct">
        <h2>Edit Product</h2>
        {product.product ? (
          <EditForm product={product.product} id={id} />
        ) : (
          <h2>there is an error</h2>
        )}
      </div>
    </div>
  );
};

export default page;
