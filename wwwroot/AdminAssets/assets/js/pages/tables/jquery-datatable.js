$(function () {

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        buttons: ["copy", "excel", "csv", "pdfHtml5", "print"]       
    });
});