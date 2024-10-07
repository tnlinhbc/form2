function kiemtra() {
    var name = document.frDangKy.name.value;
    var tel = document.frDangKy.tel.value;
    var email = document.frDangKy.email.value;
    var address = document.frDangKy.address.value;
    var usename = document.thongTin.usename.value;
    var password = document.thongTin.password.value;
    var nhaplaimatkhau = document.thongTin.nhaplaimatkhau.value;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (name == "") {
        alert('Nhập tên');
        document.frDangKy.name.focus();
        return false;
    }
    if (tel == "") {
        alert('Nhập Số điện thoại');
        document.frDangKy.name.focus();
        return false;
    }
    else if (!vnf_regex.test(tel)) {
        alert('Số điện thoại chưa đúng');
        document.frDangKy.name.focus();
        return false;
    }
    if (email == "") {
        alert('Nhập Email');
        document.frDangKy.email.focus();
        return false;
    }
    else if (!filter.test(email)) {
        alert('Email chưa đúng')
        document.frDangKy.email.focus();
        return false;
    }
    if (address == "") {
        alert('Nhập địa chỉ');
        document.frDangKy.address.focus();
        return false;
    }
    if (usename == "") {
        alert('Nhập Usename');
        document.thongTin.usename.focus();
        return false;
    }
    if (password == "") {
        alert('Nhập Password');
        document.thongTin.usename.focus();
        return false;
    }
    if (password != nhaplaimatkhau) {
        alert('Nhập lại Password chưa đúng');
        document.thongTin.nhaplaimatkhau.focus();
        return false;
    }
    alert('Complete!')
    var thongtin = '?name=' + encodeURIComponent(name) +
        '&tel=' + encodeURIComponent(tel) +
        '&email=' + encodeURIComponent(email) +
        '&address=' + encodeURIComponent(address) +
        '&usename=' + encodeURIComponent(usename) +
        '&password=' + encodeURIComponent(password);
    window.location.href = 'thongtin.html' + thongtin;
}
function huy() {
    location.reload(true)
}