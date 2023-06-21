import React from "react";
import { useRouter } from "next/router";

const ProductID = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Product {productId} page</h1>;
};

export default ProductID;
