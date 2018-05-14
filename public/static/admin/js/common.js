
function del(id, url) {
    layer.confirm('确认要删除吗？', function(index) {
        goods_id = {};
        goods_id[0] = id
        $.ajax({
            type: "post",
            url: url,
            traditional: true,
            dataType: "json",
            data: goods_id,
            success: function(data) {
                layer.msg('删除成功', {
                    icon: 1, //提示的样式
                    time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                    end: function() {
                        page(null)
                    }
                });
            }
        })
    });

}

function delAll(url) {
    var id = tableCheck.getData()
    if (!id.length) {
        layer.msg('请选择要删除的数据', {
            icon: 2, //提示的样式
            time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
            end: function() {
                layer.closeAll('dialog')
            }
        });
        return 0
    }
    layer.confirm('确认要删除吗？', function(index) {
        var id = tableCheck.getData()
        var tch_id = {};
        id.forEach(function(item, index) {
            tch_id[index] = item
        })
        $.ajax({
            type: "post",
            url: url,
            traditional: true,
            dataType: "json",
            data: tch_id,
            success: function(data) {
                layer.msg('删除成功', {
                    icon: 1, //提示的样式
                    time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                    end: function() {
                        $('.header').removeClass('layui-form-checked')
                        page()
                    }
                });
            }
        })
    });
}

function checkbox() {
    $('.layui-unselect').not('.header').click(function() {
        $(this).toggleClass('layui-form-checked')
    })
    $('.checkbox').click(function() {
        var checkbox = $('.checkbox')
        var flag = false;
        var arr = [];
        checkbox.each(function(item) {
            var c = $(this).attr('class')
            arr[item] = c
        })
        var flag = arr.every(function(item) {
            return item == "checkbox layui-unselect layui-form-checkbox layui-form-checked"
        })
        if (flag) {
            $('.header').addClass('layui-form-checked')
        } else {
            $('.header').removeClass('layui-form-checked')
        }

    })
}

function search() {
    $('#input').keypress(function(event) {
        var keynum = (event.keyCode ? event.keyCode : event.which);
        if (keynum == '13') {
            var val = $('#input').val();
            if (!val) {
                layer.msg('请填写您要查询的数据', {
                    icon: 2, //提示的样式
                    time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                });
            } else {
                var search = {}
                search['search'] = val
                searchdata = search;
                page(search)
                $('#input').val('');
            }
        }
    });
    $('#search').click(function() {
        var val = $('#input').val();
        if (!val) {
            layer.msg('请填写您要查询的数据', {
                icon: 2, //提示的样式
                time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
            });
        } else {
            var search = {}
            search['search'] = val
            searchdata = search;
            page(search)
            $('#input').val('');
        }
    })
}

function cli(url){
    $('.cli').click(function(){
        var id = $(this).attr('data-id')
        location.href = url+id
    })

}

function add(url, data, flag){
     $.ajax({
            type: "post",
            url: url,
            traditional: true,
            dataType: "json",
            data: data,
            success: function(data) {
                if (data['valid']) {
                    layer.msg(data['msg'], {
                        icon: 1, //提示的样式
                        time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                        end: function() {
                            if (flag) {
                                javascript:history.back(-1)
                            } else {
                                location.reload();
                            }
                        }
                    });
                } else {
                    layer.msg(data['msg'], {
                        icon: 2, //提示的样式
                        time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                    });
                }
            }
        })
}
function upload(url){
    layui.use('upload', function() {
        var upload = layui.upload;
        var uploadInst = upload.render({
            elem: '#test1',
            url: url,
            accept: 'image',
            field: 'image',
            done: function(res) {
                if (res['valid']) {
                    layer.msg(res['msg'], {
                        icon: 1, //提示的样式
                        time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                        end: function() {
                            $('#img').attr('src', res['src'])
                            $('#imgsrc').val(res['src'])
                        }
                    });
                } else {
                    layer.msg(res['msg'], {
                        icon: 2, //提示的样式
                        time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                    });
                }
            },
        });
    });
}
