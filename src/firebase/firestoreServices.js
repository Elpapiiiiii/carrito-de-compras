import { db } from "./firebaseConfig.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  Timestamp,
} from "firebase/firestore";

// ✅ Traer productos (con o sin categoría)
export const getProductsFS = async (categoryId) => {
  const productsRef = collection(db, "products");

  const q = categoryId
    ? query(productsRef, where("category", "==", categoryId))
    : productsRef;

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// ✅ Traer producto por ID
export const getProductByIdFS = async (itemId) => {
  const ref = doc(db, "products", itemId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

// ✅ Crear orden en Firestore (orders)
export const createOrderFS = async (orderData) => {
  const ordersRef = collection(db, "orders");

  const order = {
    ...orderData,
    date: Timestamp.fromDate(new Date()),
  };

  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
};
