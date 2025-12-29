import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 Configuración de Firebase (keys públicas, OK para frontend)
const firebaseConfig = {
  apiKey: "AIzaSyC-paxjmWEik38CwuohF1e60ayKMOx4RCo",
  authDomain: "papi-prime.firebaseapp.com",
  projectId: "papi-prime",
  storageBucket: "papi-prime.firebasestorage.app",
  messagingSenderId: "583201653064",
  appId: "1:583201653064:web:f833374224189aa316737d",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);
