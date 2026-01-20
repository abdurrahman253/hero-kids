"use server"
import { ObjectId } from "mongodb";

import { collections, dbConnect } from "@/lib/dbConnect"

export const getProducts = async () => {
    const products = await dbConnect(collections.PRODUCTS).find().toArray();
      return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

};



export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };

  const product = await dbConnect(collections.PRODUCTS).findOne(query);

  return { ...product, _id: product._id.toString() } || {};
};
