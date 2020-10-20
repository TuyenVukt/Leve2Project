<%--
  Created by IntelliJ IDEA.
  User: NguyenDuong
  Date: 8/18/2020
  Time: 8:41 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="resources/js/model/ajax_model_category.js"></script>
<script src="resources/js/pages/ajax_page_quan_ly_danh_muc.js"></script>
<main>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Chi tiết danh mục sản phẩm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Tên danh mục</label>
                                    <input type="text" class="form-control" id="text-ten"
                                           placeholder="Nhập tên danh mục...">
                                    <div class="invalid-feedback">
                                        Error!!!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success " id="btn-luu-lai">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận thao tác</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <p>Bạn có chắc chắn xóa danh mục này không?</p>
                                <p>Tất cả sản phẩm thuộc danh mục này sẽ bị xóa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" id="btn-xac-nhan-xoa">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="title-page mt-4">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Quản Lý Danh Mục Sản Phẩm</h1>
                </div>
                <div class="col-12">
                    <hr>
                </div>
            </div>
        </div>
    </div>
    <div class="tool-page">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <button type="button" class="btn btn-primary " id="btn-them"><i class="fas fa-plus"></i> Thêm danh
                        mục sản phẩm
                    </button>
                </div>
                <div class="col-md-2 mt-1">
                    <button type="button" class="btn btn-primary " id="btn-tat-ca">Tất cả danh mục</button>
                </div>
                <div class="col-md-2 mt-1">
                    <select class="form-control" id="btn-sap-xep">
                        <option value="1">Sắp xếp</option>
                        <option value="2">A->Z</option>
                        <option value="3">Z->A</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="table-data">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="table-reponsive">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên Danh Mục</th>
                                <th scope="col">Hành Động</th>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td><input type="text" id="search-ten" class="form-control"></td>
                                <td class="text-center">
                                    <button type="button" class="btn btn-primary" id="btn-tim-kiem"><i
                                            class="fas fa-search"></i> Tìm kiếm
                                    </button>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td class="text-center">
                                    <button type="button" class="btn btn-warning mt-1 sua-danh-muc" data-toggle="modal"
                                            data-target="#exampleModal"><i class="fas fa-pencil-alt"></i> Sửa
                                    </button>
                                    <button type="button" class="btn btn-danger mt-1 xoa-danh-muc" data-toggle="modal"
                                            data-target="#exampleModal1"><i class="fas fa-trash-alt"></i> Xóa
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td class="text-center">
                                    <button type="button" class="btn btn-warning mt-1" data-toggle="modal"
                                            data-target="#exampleModal"><i class="fas fa-pencil-alt"></i> Sửa
                                    </button>
                                    <button type="button" class="btn btn-danger mt-1" data-toggle="modal"
                                            data-target="#exampleModal1"><i class="fas fa-trash-alt"></i> Xóa
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
