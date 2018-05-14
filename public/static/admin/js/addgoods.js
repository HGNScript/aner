$(function() {
    var url = '/admin/Goods/upload'
    upload(url)

    $("#addgoods").click(function(){
      var data = $("#goodsForm").serialize()
      var id = $('#goods_id').val()
      var url = '/admin/Goods/addGoods?id='+id
       add(url, data, 1)
    })
})