import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductPage =  () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
      category: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      search: '',
      page: 1,
      limit: 10,
      sort: ''
    });
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
      const fetchProducts = async () => {
        const query = new URLSearchParams(filters).toString();
        const { data } = await axios.get(`http://localhost:5000/products?${query}`);
        setProducts(data.products);
        setTotalPages(data.totalPages);
      };

      fetchProducts();
    }, [filters]);

    const handleFilterChange = (e) => {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
        page: 1 // Reset to first page when filter or sort changes
      });
    };

    const handlePageChange = (newPage) => {
      setFilters({
        ...filters,
        page: newPage
      });
    };

    return (
      <div className='flex flex-col justify-evenly md:items-center md:flex-row container mx-auto gap-5 border mt-16'>
        <div className='max-w-60'>
          <div className="filter-controls flex flex-col">
          <input
          type="text"
          name="search"
          placeholder="Search products..."
          value={filters.search}
          onChange={handleFilterChange}
        />
        <select name="category" value={filters.category} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          {/* Add category options */}
        </select>
        <select name="brand" value={filters.brand} onChange={handleFilterChange}>
          <option value="">All Brands</option>
          {/* Add brand options */}
        </select>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <select name="sort" value={filters.sort} onChange={handleFilterChange}>
          <option value="">Sort by</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
          <option value="oldest">Oldest</option>
        </select>
        </div>
     </div>
     <div className=''>
     <div className="product-list">
        {products?.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.category} - {product.brandname}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">

        {Array.from({ length: totalPages }, (_, index) => (

          <button
          className='btn bg-blue-600 text-white font-bold p-5 m-2'
            key={index}
            disabled={filters.page === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>

        ))}
      </div>
     </div>
      </div>
    )
}

export default ProductPage
