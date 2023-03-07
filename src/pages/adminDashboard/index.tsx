import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";

const AdminDashboard = () => {
  const { adm } = useContext(AdminContext);
  console.log("teste");
  return (
    <header>
      <h1>{adm?.name} </h1>
      <p>{adm?.email} </p>
    </header>
  );
};

export default AdminDashboard();
