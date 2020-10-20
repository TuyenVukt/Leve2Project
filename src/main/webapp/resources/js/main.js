const URL_API = "api/v1/";
//chứa tất cả cá biến hoặc phương thức được sử dụng lại nhiều
//lần trong các trang khác nhau.
function viewField(field) {
    return field != null ? field : "";

}

function viewError(selector, text) {
    $(selector).addClass("is-invalid");
    $(selector).siblings(".invalid-feedback").html(text + ". Xin moi nhap lai!");
}

function hiddenError(selector) {
    $(selector).removeClass("is-invalid");
}

async function ajaxGet(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + url,
        timeout: 30000,
        cache: false,
        success: function (result) {
            rs = result;
        }
    });
    return rs;
}

async function ajaxPost(url, data) {
    let rs = null;
    await $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        url: URL_API + url,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        }
    });
    return rs;
}

async function ajaxPut(url, data) {
    let rs = null;
    await $.ajax({
        type: 'PUT',
        data: JSON.stringify(data),
        url: URL_API + url,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        }
    })
    return rs;
}

// async function ajaxDelete(url, data) {
//     let rs = null;
//     await $.ajax({
//         type: 'PUT',
//         data: JSON.stringify(data),
//         headers: {
//             "Authorization": ss_lg
//         },
//         url: URL_API + url,
//         timeout: 30000,
//         contentType: "application/json",
//         success: function (result) {
//             rs = result
//         }
//     })
//     return rs;
// }
async function ajaxDelete(url) {
    let rs = null;
    await $.ajax({
        type: 'DELETE',
        dataType: "json",
        url: URL_API + url,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        }
    })
    console.log("ket qua tra ve cua ajaxDelete: " + rs.data + rs.message);
    return rs;
}

async function ajaxUploadFile(url, file) {
    let rs = null;
    await $.ajax({
        type: "POST",
        url: url,
        data: file,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (result) {
            rs = result;
        }
    });
    return rs;
}
