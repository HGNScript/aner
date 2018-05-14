$(function() {
    page(null)

    $('#delAll').click(function(){
        var url = '/admin/User/del'
        delAll(url)
    })
})

function page(search, html) {
    layui.use('laypage', function() {
        var laypage = layui.laypage;
        $.ajax({
            type: "post",
            url: '/admin/User/index',
            traditional: true,
            dataType: "json",
            data: search,
            success: function(data) {
                var len = data
                laypage.render({
                    elem: 'test1', //注意，这里的 test1 是 ID，不用加 # 号
                    count: len, //数据总数，从服务端得到
                    limit: 4,
                    jump: function(obj, first) {
                        var info = { 'curr': obj.curr, 'limit': obj.limit };
                        $.ajax({
                            type: "post",
                            url: '/admin/User/index?curr=' + info['curr'] + '&limit=' + info['limit'],
                            traditional: true,
                            dataType: "json",
                            data: search,
                            success: function(data) {
                                $("#tbody").empty()
                                var data_html = "";
                                $.each(data, function(index, array) {
                                    data_html += `<tr style="cursor: pointer;" class="cli" data-id="` + array['user_id'] + `">
                                            <td>
                                                <div class="checkbox layui-unselect layui-form-checkbox" lay-skin="primary" data-id="` + array['user_id'] + `"><i class="layui-icon">&#xe605;</i></div>
                                            </td>
                                            <td>` + array['user_name'] + `</td>
                                            <td>` + array['user_email'] + `</td>
                                            <td>` + array['user_phone'] + `</td>
                                            <td>` + array['user_sendtime'] + `</td>
                                            <td>` + array['user_comment'] + `</td>
                                            <td>
                                                <a title="删除" class="del" href="javascript:;" data-id="` + array['user_id'] + `">
                                                    <i class="layui-icon">&#xe640;</i>
                                                </a>
                                            </td>
                                    </tr>`;
                                });
                                $("#tbody").append(data_html)
                                checkbox()

                                $('.del').click(function(){
                                    var id = $(this).attr('data-id')
                                    var url = '/admin/User/del'
                                    del(id, url)
                                })
                                var url = '/admin/User/userInfo?id='
                                cli(url);

                            }
                        });
                    }
                });
            }
        })
    });
}


