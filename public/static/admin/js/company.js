$(function() {
    var url = '/admin/Company/upload'
    upload(url)

    $("#editinfo").click(function(){
      var data = $("#infoForm").serialize()
      var id = $('#company_id').val()
      var url = '/admin/Company/editinfo?id='+id
      add(url, data, 0)
    })
})