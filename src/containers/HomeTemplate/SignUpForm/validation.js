import React from 'react'

export default function validation(taiKhoan) {
    let errors = {}
    if (!taiKhoan.taiKhoan) {
        errors.taiKhoan = "Vui lòng nhập tài khoản"
    }
    if (!taiKhoan.hoTen) {
        errors.hoTen = "Vui lòng nhập họ tên"
    }
    if (!taiKhoan.email) {
        errors.email = "Vui lòng nhập email"
    } else if (!/\S+@\S+\.\S+/.test(taiKhoan.email)) {
        errors.email = "Vui lòng nhập đúng định dạng email"
    }
    if (!taiKhoan.soDT) {
        errors.soDT = "Vui lòng nhập số điện thoại"
    } else if (!/0[0-9\s.-]{9,13}/.test(taiKhoan.soDT)) {
        errors.soDT = "Vui lòng nhập đúng định dạng số điện thoại"
    }
    if (!taiKhoan.matKhau) {
        errors.matKhau = "Vui lòng nhập mật khẩu"
    } else if (taiKhoan.matKhau.length < 5) {
        errors.matKhau = "Vui lòng nhập mật khẩu trên 5 kí tự"
    }

    return errors
}
