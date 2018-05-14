$(function() {

    var login = function() {
        var info = $("#loginForm").serialize();
        $.ajax({
            type: "post",
            url: 'index/Login/index',
            traditional: true,
            dataType: "json",
            data: info,
            success: function(data) {
            	if (data['valid']) {
            		location.href='/admin/Index/index';
            	} else{
	               layer.msg(data['msg'],{
                        icon: 2, //提示的样式
                        time: 700, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                    });
                    captcha()
                    $('#verification').val('')

            	}
            }
        });
    }
    var captcha = function (){
        var src = $('#captcha').attr('src')
        $('#captcha').attr('src',src+'?'+Math.random());
    }

    var _main = function() {
        $('#login').click(function() {
            login()
        })
        $('body').keypress(function(event) {
            var keynum = (event.keyCode ? event.keyCode : event.which);
            if (keynum == '13') {
                if ($('#loginForm').length > 0) {
                    login()
                } else {
                    editPsw()
                }
            }
        });
    }
    _main()
})