 $(function() {
     layui.use('upload', function() {
         var upload = layui.upload;

         //执行实例
         var uploadInst = upload.render({
             elem: '#test1',
             url: '/admin/Play/upload?id=1',
             accept: 'image',
             field: 'image',
             done: function(res) {
                console.log(res)
                 if (res['valid']) {
                     layer.msg(res['msg'], {
                         icon: 1, //提示的样式
                         time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                         end: function() {
                             location.reload()
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
     layui.use('upload', function() {
         var upload = layui.upload;

         //执行实例
         var uploadInst = upload.render({
             elem: '#test2',
             url: '/admin/Play/upload?id=2',
             accept: 'image',
             field: 'image',
             done: function(res) {
                 if (res['valid']) {
                     layer.msg(res['msg'], {
                         icon: 1, //提示的样式
                         time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                         end: function() {
                             location.reload()
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
     layui.use('upload', function() {
         var upload = layui.upload;

         //执行实例
         var uploadInst = upload.render({
             elem: '#test3',
             url: '/admin/Play/upload?id=3',
             accept: 'image',
             field: 'image',
             done: function(res) {
                 if (res['valid']) {
                     layer.msg(res['msg'], {
                         icon: 1, //提示的样式
                         time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                         end: function() {
                             location.reload()
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
     layui.use('upload', function() {
         var upload = layui.upload;

         //执行实例
         var uploadInst = upload.render({
             elem: '#test4',
             url: '/admin/Play/upload?id=4',
             accept: 'image',
             field: 'image',
             done: function(res) {
                 if (res['valid']) {
                     layer.msg(res['msg'], {
                         icon: 1, //提示的样式
                         time: 1000, //2秒关闭（如果不配置，默认是3秒）//设置后不需要自己写定时关闭了，单位是毫秒
                         end: function() {
                             location.reload()
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

     // $('.sort').dblclick(function() {
     //     var id = $(this).attr('data-id')
     //     var sort = $(this).html()
     //     var input = $(this).children('input')
     //     if (!input.length == 0) {
     //         return 0;
     //     }
     //     // if (score == '<span class="layui-badge" style="height: 100%;">双击评分</span>') {
     //     //     score = '';
     //     // }
     //     $(this).empty()
     //     $(this).append(` <input type="text" name="" placeholder="` + sort + `" class="layui-input input" style="width:100%;display: inline;">`)
     //     $(this).children().focus()

     //     $('.input').blur(function() {
     //         var data = $(this).val()
     //         $(".input").remove()

     //         $.ajax({
     //             type: "post",
     //             url: '/admin/Play/sort?id=' + id,
     //             traditional: true,
     //             dataType: "json",
     //             data: { 'sort': data },
     //             success: function(res) {
     //                 if (res['valid']) {
     //                     layer.msg(res['msg'], {
     //                         icon: 1, //提示的样式
     //                         time: 600,
     //                         end: function() {
     //                             location.reload()
     //                         }
     //                     });
     //                 } else {
     //                     layer.msg(res['msg'], {
     //                         icon: 2, //提示的样式
     //                         time: 600,
     //                     });
     //                 }

     //             }
     //         })
     //     })
     // })

     // $('.del').click(function() {
     //     var id = $(this).attr('data-id')
     //     $.ajax({
     //         type: "post",
     //         url: '/admin/Play/del?id=' + id,
     //         traditional: true,
     //         dataType: "json",
     //         success: function(res) {
     //             if (res['valid']) {
     //                 layer.msg(res['msg'], {
     //                     icon: 1, //提示的样式
     //                     time: 600,
     //                     end: function() {
     //                         location.reload()
     //                     }
     //                 });
     //             } else {
     //                 layer.msg(res['msg'], {
     //                     icon: 2, //提示的样式
     //                     time: 600,
     //                 });
     //             }

     //         }
     //     })
     // })

 })