package com.bksoftwarevn.itstudent.model;

import com.google.gson.Gson;

public class JsonResult {//đối tượng JsonResult để làm gì???

    private String message;//lời nhắn

    private Object data;//dữ liệu

    public JsonResult() {
    }

    public JsonResult(String message, Object data) {
        this.message = message;
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "JsonResult{" +
                "message='" + message + '\'' +
                ", data=" + data +
                '}';
    }

    // truyền vào một đối tượng(cụ thể à một String data), trả về một chuỗi json đưa ra thông báo là có thành công hay không
    //dùng để xác nhận thành công hay thất bại của một hoạt động nào đó
    public String jsonSuccess(Object data) {
        return new Gson().toJson(new JsonResult("success", data));
    }

    public String jsonFail(Object data) {
        return new Gson().toJson(new JsonResult("fail", data));
    }
}
