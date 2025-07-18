import { products } from "@/lib/product";

export const GET = async (_req, { params }) => {
  try {
    const id = Number(params.id);

    const product = products.find(prod => prod.id === id);

    if (!product) {
      return Response.json({
        status: "fail",
        message: "Id not found. Please provide a valid product ID.",
      }, {
        status: 400,
      });
    }

    return Response.json({
      status: "success",
      data: {
        product,
      },
    });

  } catch (err) {
    return Response.json({
      status: "fail",
      message: "Server error",
    }, {
      status: 500,
    });
  }
};