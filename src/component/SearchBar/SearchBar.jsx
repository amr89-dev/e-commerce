import Layout from "../Layout/Layout";

const SearchBar = () => {
  return (
    <Layout>
      <input
        className="w-1/2  border border-black rounded-lg "
        type="search"
        placeholder="Buscar..."
      />
    </Layout>
  );
};

export default SearchBar;
