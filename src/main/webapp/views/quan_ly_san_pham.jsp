<%--
  Created by IntelliJ IDEA.
  User: NguyenDuong
  Date: 8/18/2020
  Time: 8:41 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<main>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body form-custom">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tên</label>
                                <input type="text" class="form-control" id="input-ten" placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Loại sản phẩm</label>
                                <select id="select-add-loai-san-pham" class="form-control select-loai-san-pham">
                                    <option selected>Loại sản phẩm</option>
                                    <option>Điện thoại</option>
                                    <option>Cáp sạc</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Giá</label>
                                <input type="number" class="form-control" id="input-gia"placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Đã bán</label>
                                <input type="number" class="form-control" id="input-da-ban"placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Bảo hành</label>
                                <input type="number" class="form-control" id="input-bao-hanh"placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Khuyến mãi</label>
                                <input type="number" class="form-control" id="input-khuyen-mai"placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Ảnh</label>
                                <input type="file" class="form-control-file" id="file-anh">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Ngày tạo</label>
                                <input type="date" class="form-control" id="input-ngay-tao"
                                       aria-describedby="emailHelp" placeholder="Enter email">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Giới thiệu</label>
                                <textarea class="form-control is-invalid" id="textarea-gioi-thieu"
                                          rows="3"></textarea>
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Thông số</label>
                                <textarea class="form-control is-valid" id="textarea-thong-so"
                                          rows="3"></textarea>
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="checkbox-het-hang">
                                <label class="form-check-label" for="defaultCheck1">
                                    Hết hàng
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success" id="btn-save">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                Bạn có chắc chắn xóa sản phẩm này không?
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="title-page mt-4">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Quản Lý Sản Phẩm</h1>
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
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-plus"></i> Thêm sản phẩm</button>
                </div>
                <div class="col-md-2 mt-1">
                    <select class="form-control" id="">
                        <option>Loại sản phẩm</option>
                        <option>Iphone</option>
                        <option>Bút</option>
                        <option>Dây điện</option>
                    </select>
                </div>
                <div class="col-md-2 mt-1">
                    <select class="form-control" id="">
                        <option>Sắp xếp</option>
                        <option>A->Z</option>
                        <option>Z->A</option>
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
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col" style="width: 100px;">Ảnh</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Đã Bán</th>
                                <th scope="col">Ngày Tạo</th>
                                <th scope="col" style="width: 150px;">Còn Hàng</th>
                                <th scope="col" style="width: 175px;">Hành Động</th>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td><input type="text" class="form-control" id="input-search-ten"></td>
                                <td><input type="number" class="form-control" id="input-search-gia"></td>
                                <td><input type="number" class="form-control" id="input-search-da-ban"></td>
                                <td>
                                    <input type="date" class="form-control" id="input-search-ngay-tao">
                                </td>
                                <td>
                                    <select id="select-search-het-hang" class="form-control">
                                        <option selected>Tất cả</option>
                                        <option>Còn hàng</option>
                                        <option>Hết hàng</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary"><i class="fas fa-search"></i> Tìm kiếm</button>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png"
                                         alt="" width="80px"></td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td class="text-center"><span class="badge badge-success">Còn hàng</span></td>
                                <td>
                                    <button type="button" class="btn btn-warning"><i class="fas fa-pen"></i>
                                        Sửa</button>
                                    <button type="button" class="btn btn-danger" data-toggle="modal"
                                            data-target="#exampleModal1"><i class="fas fa-trash-alt"></i>
                                        Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><img src="https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg"
                                         alt="" width="80px"></td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                                <td class="text-center"><span class="badge badge-danger">Hết hàng</span></td>
                                <td>
                                    <button type="button" class="btn btn-warning"><i class="fas fa-pen"></i>
                                        Sửa</button>
                                    <button type="button" class="btn btn-danger" data-toggle="modal"
                                            data-target="#exampleModal1"><i class="fas fa-trash-alt"></i>
                                        Xóa</button>
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
