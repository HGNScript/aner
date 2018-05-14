$(function() {
    page(null)
    search()

    $('#delAll').click(function(){
        var url = '/admin/Goods/del'
        delAll(url)
    })
})

function page(search, html) {
    layui.use('laypage', function() {
        var laypage = layui.laypage;
        $.ajax({
            type: "post",
            url: '/admin/Goods/index',
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
                            url: '/admin/Goods/index?curr=' + info['curr'] + '&limit=' + info['limit'],
                            traditional: true,
                            dataType: "json",
                            data: search,
                            success: function(data) {
                                $("#tbody").empty()
                                var data_html = "";
                                $.each(data, function(index, array) {
                                    data_html += `<tr style="cursor: pointer;" class="cli" data-id="` + array['goods_id'] + `">
                                            <td>
                                                <div class="checkbox layui-unselect layui-form-checkbox" lay-skin="primary" data-id="` + array['goods_id'] + `"><i class="layui-icon">&#xe605;</i></div>
                                            </td>
                                            <td>` + array['goods_title'] + `</td>
                                            <td><img src="` + array['goods_src'] + `"></td>
                                            <td>` + array['goods_abstract'] + `</td>
                                            <td>` + array['goods_sendtime'] + `</td>
                                            <td>
                                                <a title="编辑" href="/admin/goods/addGoods?id=` + array['goods_id'] + `">
                                                    <i class="layui-icon">&#xe642;</i>
                                                </a>
                                                <a title="删除" class="del" data-id="` + array['goods_id'] + `" href="javascript:;">
                                                    <i class="layui-icon">&#xe640;</i>
                                                </a>
                                            </td>
                                    </tr>`;
                                });
                                $("#tbody").append(data_html)
                                checkbox()

                                 $('.del').click(function(){
                                    var id = $(this).attr('data-id')
                                    var url = '/admin/Goods/del'
                                    del(id, url)
                                })

                            }
                        });
                    }
                });
            }
        })
    });
}

