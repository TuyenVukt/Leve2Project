package com.bksoftwarevn.itstudent.dao;

import com.bksoftwarevn.itstudent.model.Category;

import java.sql.SQLException;
import java.util.List;

public interface CategoryDao extends BaseDao<Category> {
    List<Category> findByName(String name) throws SQLException;

    List<Category> sortByName(boolean check) throws SQLException;
}
