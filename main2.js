window.onload = function thongTin() {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name');
    var tel = params.get('tel');
    var email = params.get('email');
    var address = params.get('address');
    var usename = params.get('usename');
    var password = params.get('password');
    document.getElementById('name').innerHTML = '<b>Name: </b>' + name;
    document.getElementById('tel').innerHTML = '<b>Tel: </b>' + tel;
    document.getElementById('email').innerHTML = '<b>Email: </b>' + email;
    document.getElementById('address').innerHTML = '<b>Address: </b>' + address;
    document.getElementById('usename').innerHTML = '<b>Usename: </b>' + '<span>' + usename + '</span>';
    document.getElementById('password').innerHTML = '<b>Password: </b>' + '<span>' + password + '</span>';
}
