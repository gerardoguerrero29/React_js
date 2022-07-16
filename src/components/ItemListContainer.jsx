import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    if (catId) {
      const q = query(productsCollection, where("category", "==", catId));
      getDocs(q)
        .then((res) => {
          setProductos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((error) => {
          setErr(error);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productsCollection)
        .then((res) => {
          setProductos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((error) => {
          setErr(error);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [catId]);

  console.log(productos);
  return (
    <>
      <div className="loader">{loading && <img src="https://github.com/gerardoguerrero29/tienda-cs_gerardoguerrero/blob/master/src/assets/Spinner-1s-250px.gif?raw=true" alt="Loading" />}</div>

      <ItemList productos={productos} />
    </>
  );
}
