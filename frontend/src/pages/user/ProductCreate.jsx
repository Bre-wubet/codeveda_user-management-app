import Sidebar from "../../components/common/Sidebar";
import ProductCreate from "../../components/user/ProductCreate";


// ProductCreate component allows users to create new products with a sidebar for navigation
const UserProductCreate = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">Create Product</h1>
        <ProductCreate />
      </main>
    </div>
  );
};

export default UserProductCreate;
