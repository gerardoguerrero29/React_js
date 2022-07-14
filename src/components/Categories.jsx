import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export default function Categories() {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const categoryCollection = collection(db, "category");

    getDocs(categoryCollection).then((res) => {
      setcategory(res.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      {category.map((cat) => (
        <NavDropdown.Item as={Link} key={cat.name} to={"/category/" + cat.name}>
          {cat.tag}
        </NavDropdown.Item>
      ))}
    </>
  );
}
