const express = require("express");
const { laydanhsachnguoidung, timkiemchitietnguoidung, themnguoidung, capnhatnguoidung, xoanguoidung } = require("../controllers/user.controller");

/**
 * Tạo API Quản lý người dùng  (RESTFUL API)
 *  1) Lấy danh sách người dùng   (Get - http://localhost:9090/users)
 *  2) Lấy thông tin chi tiết người dùng (Get - http://localhost:9090/users/id)
 *  3) Tạo người dùng (Post - http://localhost:9090/users)
 *  4) Cập nhật người dùng (Put - http://localhost:9090/users/id)
 *  5) Xóa người dùng (Delete - http://localhost:9090/users/id)
 */
const userRouter = express.Router();

userRouter.get("/laydanhsachnguoidung", laydanhsachnguoidung);

userRouter.get("/timkiemchitietnguoidung/:id", timkiemchitietnguoidung);

userRouter.post("/themnguoidung", themnguoidung);

userRouter.put("/capnhatnguoidung/:id", capnhatnguoidung);

userRouter.delete("/xoanguoidung/:id", xoanguoidung);

module.exports = {
    userRouter
};

