package com.bksoftwarevn.itstudent.service_impl;

import com.bksoftwarevn.itstudent.dao.CategoryDao;
import com.bksoftwarevn.itstudent.dao.ProductDao;
import com.bksoftwarevn.itstudent.dao_impl.CategoryDaoImpl;
import com.bksoftwarevn.itstudent.dao_impl.ProductDaoImpl;
import com.bksoftwarevn.itstudent.model.Product;
import com.bksoftwarevn.itstudent.service.ProductService;

import java.sql.SQLException;
import java.util.List;

public class ProductService_Impl implements ProductService {
    private ProductDao productDao = new ProductDaoImpl();
    private CategoryDao categoryDao = new CategoryDaoImpl();

    @Override
    public Product insert(Product product) throws Exception {
        //kiểm tra category có tồn tại không
        return productDao.insert(product);
    }

    @Override
    public boolean update(Product product) throws Exception {
        return productDao.update(product);
    }

    @Override
    public boolean delete(int id) throws Exception {
        return productDao.delete(id);
    }

    @Override
    public List<Product> findAll() throws Exception {

        return productDao.findAll();
    }

    @Override
    public Product findById(int id) throws Exception {
        return null;
    }

    @Override
    public List<Product> search(String name, String startDate, String endDate, Boolean soldOut, int guarantee, int category, int bought, int promotion, double price) throws Exception {
        return productDao.search(name, startDate, endDate, soldOut, guarantee, category, bought, promotion, price);
    }

    @Override
    public List<Product> sortBy(String field, boolean isAsc, String category) throws SQLException {
        return productDao.sortBy(field, isAsc, category);
    }

    @Override
    public List<Product> findByCategory(int idCategory) throws Exception {
        return null;
    }
}
