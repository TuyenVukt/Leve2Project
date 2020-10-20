let selectSearchDanhMuc, selectSearchSapXep, textSearchTen, numberSearchGia, numberSearchDaBan, dateSearchNgayTao,
    selectSearchConHang, btnTimKiem, tableDuLieu, textTen, selectDanhMuc, numberGia, numberDaBan, numberBaoHanh,
    numberKhuyenMai, fileAnh, dateNgayTao, textareaGioiThieu, textareaThongSo, checkboxHetHang, btnLuuLai,
    btnXacNhanXoa, btnThem;
let indexProduct, elementProduct, listCategory;
let listProduct;

$(async function () {
    selectSearchDanhMuc = $("#select-search-danh-muc");
    selectSearchSapXep = $("#select-search-sap-xep");
    textSearchTen = $("#text-search-ten");
    numberSearchGia = $("#number-search-gia");
    numberSearchDaBan = $("#number-search-da-ban");
    dateSearchNgayTao = $("#date-search-ngay-tao");
    selectSearchConHang = $("#select-search-con-hang");
    btnTimKiem = $("#btn-tim-kiem");
    tableDuLieu = $("tbody");
    textTen = $("#text-ten");
    selectDanhMuc = $("#select-danh-muc");
    numberGia = $("#number-gia");
    numberDaBan = $("#number-da-ban");
    numberBaoHanh = $("#number-bao-hanh");
    numberKhuyenMai = $("#number-khuyen-mai");
    fileAnh = $("#file-anh");
    dateNgayTao = $("#date-ngay-tao");
    textareaGioiThieu = $("#textarea-gioi-thieu");
    textareaThongSo = $("#textarea-thong-so");
    checkboxHetHang = $("#checkbox-het-hang");
    btnLuuLai = $("#btn-luu-lai");
    btnXacNhanXoa = $("#btn-xac-nhan-xoa");
    btnThem = $("#btn-them");
    console.log(new Date());
    await categoryFindAll().then(rs => {
        console.log(rs);
        if (rs.message == "success") {
            listCategory = rs.data;
        } else {
            listCategory = [];
        }
    }).catch(err => {
        console.log(err);
    });//listCategory là mảng các Category
    viewDanhSachDanhMuc();// điền dữ liệu từ mảng trên vào nút chọn Danh mục
    await productFindAll().then(rs => {
        if (rs.message == "success") {
            listProduct = rs.data;
        } else {
            listProduct = [];
        }
    }).catch(err => {
        console.log(err);
    });//listProduct là mảng các sản phẩm
    listProduct=listProduct.sort(compareValues('price', 'asc'));
    viewDanhSachSanPham();//hiển thị các sản phẩm trong mảng
    searchSanPham();
    findByCategory();
    themSanPham();
    sortBy();
})
//B2: tạo ra các hàm thao tác
//cần phải thao tác với một list sản phẩm được trả về từ api
function viewDanhSachSanPham() {//in ra toàn bộ danh sách listProduct dưới dạng bảng html
    let view = "<tr><td colspan='8'><strong>Not found data!!!</strong></td></tr>";
    if (listProduct && listProduct.length > 0) {
        view = listProduct.map((data, index) => {
            return `<tr data-index="${index}">
                                <th scope="row">${index + 1}</th>
                                <td><img src="${data.image}"
                                         alt="" width="80px"></td>
                                <td>${viewField(data.name)}</td>
                                <td>${viewField(data.price)}</td>
                                <td>${viewField(data.bought)}</td>
                                <td>${viewField(formatDate(data.createDate))}</td>
                                <td class="text-center">${data.soldOut ? `<span class="badge badge-danger">Hết hàng</span>` : `<span class="badge badge-success">Còn hàng</span>`}</td>
                                <td>
                                    <button type="button" class="btn btn-warning sua-san-pham"><i class="fas fa-pen"></i>
                                        Sửa</button>
                                    <button type="button" class="btn btn-danger xoa-san-pham"><i class="fas fa-trash-alt"></i>
                                        Xóa</button>
                                </td>
                            </tr>`
        }).join("");
    }
    tableDuLieu.html(view);
    xoaSanPham();
    suaSanPham();
    findByCategory();
    themSanPham();
}

function viewDanhSachDanhMuc() {//lấy dữ liệu của các bảng chọn danh mục sản phẩm là listCategory
    let view = `<option value="-1">Danh Muc(All)</option>`;
    let view1;
    if (listCategory && listCategory.length > 0) {
        view1 = listCategory.map((data, index) => {
            return `
                <option value="${data.id}">${data.name}</option>
           `
        }).join("");
    }
    selectSearchDanhMuc.html(view + view1);
    selectDanhMuc.html(view1);
}

function searchSanPham() {//tìm kiếm sản phẩm
    btnTimKiem.click(async function () {
        //tạo phần danh sách tìm kiểm cho resquest là Str
        let Str = "?";
        Str = Str + "name=" + textSearchTen.val();
        if (numberSearchGia.val() != "") Str = Str + "&price=" + numberSearchGia.val();
        if (numberSearchDaBan.val() != "") Str = Str + "&bought=" + numberSearchDaBan.val();
        let selected = $("#select-search-con-hang").val();
        Str = Str + "&soldOut=" + $("#select-search-con-hang").val();
        Str = Str + "&category=" + $("#select-search-danh-muc").val();

        console.log(Str);
        await productSearch(Str).then(rs => {//request search lên server
            if (rs.message == "success") {
                listProduct = rs.data;
            } else {
                listProduct = [];
            }
        }).catch(err => {
            console.log(err);
        });
        listProduct = sortBy2();
        listProduct.forEach(function(item, index, array) {
            console.log(item, index);
        });
        viewDanhSachSanPham();
    })
}

function xoaSanPham() {
    $(".xoa-san-pham").click(function () {
        //B1: lấy ra index của phần tử trong mảng thông qua thuộc tính data-index trong tr
        //B2: lấy ra id của phần tử tương tứng trong mảng
        //b3: Gọi đến api xóa sản phẩm truyền vào id vừa tìm kiếm được
        //B4: nếu api trả về true thì thực hiện xóa sản phẩm trong list hiện tại và view lại sản phẩm

        //từ khóa this thể hiện là nút khi mình click
        //.parents để lấy ra tr đang chưa nút vừa click
        //.attr("name") trong đấy name  là key mà muốn lấy giá trị.
        indexProduct = $(this).parents("tr").attr("data-index");
        //phải đảm bảo được indexProduct tương ứng với nút xóa mình vừa click;
        $("#exampleModal1").modal("show");
        xacNhanXoaSanPham()
    })
}

function xacNhanXoaSanPham() {
    btnXacNhanXoa.click(async function () {
        let idProduct = listProduct[indexProduct - 0].id;
        //call api và truyền vào idProduct và nếu trả về true
        //thực hiện xóa sản phẩm ở trong list;
        await productDelete(idProduct);
        //xóa có được thực hiện thành công hay không???
        listProduct = listProduct.filter((data, index) => {
            return index != indexProduct;
        });
        viewDanhSachSanPham();
        $("#exampleModal1").modal("hide");
    })
}

function suaSanPham() {
    $(".sua-san-pham").click(function () {
        indexProduct = $(this).parents("tr").attr("data-index") - 0;
        elementProduct = listProduct[indexProduct];
        textTen.val(elementProduct.name);
        selectDanhMuc.val(elementProduct.categoryId);
        numberGia.val(elementProduct.price);
        numberDaBan.val(elementProduct.bought);
        numberBaoHanh.val(elementProduct.guarantee);
        numberKhuyenMai.val(elementProduct.promotion);
        textareaGioiThieu.val(elementProduct.introduction);
        textareaThongSo.val(elementProduct.specification);
        console.log("link ảnh của sản phẩm là:" + elementProduct.image);
        if (elementProduct.soldOut) {
            checkboxHetHang.prop("checked", true);
        } else {
            checkboxHetHang.prop("checked", false);
        }
        elementProduct.createDate = new Date(elementProduct.createDate);
        $("#exampleModal").modal("show");

    });
    luuSanPham();
}

function checkData(selector, textError) {
    let val = $(selector).val();
    let check = false;
    if (val.length > 0) {
        check = true;
        hiddenError(selector);
    } else {
        viewError(selector, textError);
    }
    //trả về một đói tượng có 2 thuộc tính là val và check
    //thuộc tính val sẽ mang giá trị của biến val
    // thuộc tính check sẽ mang giá trị của biến check;
    return {val, check};
}

function checkNumber(selector, textError) {
    let val = $(selector).val();
    let check = false;
    if (Number(val) >= 0) {
        check = true;
        hiddenError(selector);
    } else {
        viewError(selector, textError);
    }
    return {val, check};
}

function luuSanPham() {//ấn nút Lưu
    let contentAlert = "";
    btnLuuLai.click(async function () {
        //kiểm tra các dữ liệu người dùng nhập vào có đúng định dạng hay không
        let imgLink;
        if (elementProduct != null) imgLink = elementProduct.image;
        let {val: valTen, check: checkTen} = checkData(textTen, "Định dạng tên chưa đúng");
        let valDanhMuc = selectDanhMuc.val();
        let {val: valGia, check: checkGia} = checkNumber(numberGia, "Giá bán phải là số");
        let {val: valDaBan, check: checkDaBan} = checkNumber(numberDaBan, "Nhập số lượng đã bán");
        let {val: valBaoHanh, check: checkBaoHanh} = checkData(numberBaoHanh, "Nhập thời gian bảo hành");
        let {val: valKhuyenMai, check: checkKhuyenMai} = checkData(numberKhuyenMai, "Nhập phần trăm khuyến mãi");
        let valGioiThieu = textareaGioiThieu.val();
        let valThongSo = textareaThongSo.val();
        let valHetHang = checkboxHetHang.is(":checked");
        let checkAction = false;//true la sua, false la them
        let formData = new FormData();
        if (fileAnh.get(0).files[0] !== undefined) {
            formData.append('file', fileAnh.get(0).files[0]);
            await ajaxUploadFile("upload-file", formData).then(rs => {

                if (rs.message == "success") {
                    imgLink = rs.data[0];
                } else {
                    console.log("Đã xảy ra lỗi khi upload ảnh!!!");
                }

            }).catch(err => {
                console.log(err);
            });
        }

        if (elementProduct) {
            checkAction = true;
        } else {
            elementProduct = {};
        }

        if (checkTen && checkGia && checkDaBan && checkBaoHanh && checkKhuyenMai) {
            elementProduct.name = valTen;
            elementProduct.categoryId = valDanhMuc;
            elementProduct.price = valGia;
            elementProduct.bought = valDaBan;
            elementProduct.guarantee = valBaoHanh;
            elementProduct.promotion = valKhuyenMai;
            elementProduct.introduction = valGioiThieu;
            elementProduct.specification = valThongSo;
            elementProduct.soldOut = valHetHang;
            elementProduct.image = imgLink;
            elementProduct.createDate = new Date();
            //call api sửa sản phẩm và truyền vào elementProduct hiện tại
            //Khi api trả về kết quả update thành công thì gán đối tượng
            //vứa trả về vào list với index tương ứng của nó
            if (checkAction) {
                listProduct[indexProduct] = elementProduct;
                await productUpdate(elementProduct).then(rs => {

                    if (rs.message == "success") {
                        contentAlert = "Bạn đã sửa sản phẩm thành công";

                    } else {
                        contentAlert = "Đã xảy ra lỗi khi sửa sản phẩm!";
                    }

                }).catch(err => {
                    console.log(err);
                });
            } else {
                elementProduct.image = "";
                listProduct.push(elementProduct);
                await productInsert(elementProduct);
            }
        }
        $("#exampleModal").modal("hide");
        viewDanhSachSanPham();
    });

}

function themSanPham() {
    btnThem.click(
        function () {
            elementProduct = null;
            textTen.val("");
            selectDanhMuc.val("");
            numberGia.val("");
            numberDaBan.val("");
            numberBaoHanh.val("");
            numberKhuyenMai.val("");
            dateNgayTao.val("");
            textareaGioiThieu.val("");
            textareaThongSo.val("");
            checkboxHetHang.prop("checked", false);
            $("#exampleModal").modal("show");
        }
    );
    luuSanPham();
}

function sortBy() {
    $("#select-search-sap-xep").change(async function () {
            listProduct = sortBy2();
            viewDanhSachSanPham();
    })
}

function sortBy2(){
    let selected = $("#select-search-sap-xep").children("option:selected").val();
    let category = selectSearchDanhMuc.val();
    let query;
    let isDesc = 'desc';
    switch (selected) {
        case "1":
            query = 'price';
            break;
        case "2":
            query = 'price';
            isDesc = 'asc';
            break;
        case "3":
            query = 'bought';
            break;
        case "4":
            return listProduct.sort((a, b)=>{
                return (new Date(b.createDate)).getTime()-(new Date(a.createDate)).getTime();
            });
            break;
        default:
    }
    if (selected != "0") {
        console.log(query + isDesc);
        return listProduct.sort(compareValues(query, isDesc));
    }else return listProduct;

}

function findByCategory() {
    selectSearchDanhMuc.change(async function () {
        let selected = $(this).children("option:selected").val();
        await productSearch("?category=" + selected).then(rs => {
            if (rs.message == "success") {
                listProduct = rs.data;
            } else {
                listProduct = [];
            }
        }).catch(err => {
            console.log(err);
        });
        viewDanhSachSanPham();
    })
}

function formatDate(d){
    let date = new Date(d);
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

