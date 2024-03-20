$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();

    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
