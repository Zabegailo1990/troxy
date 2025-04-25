$(document).ready(function () {
  $('.c-form-info__field').on('focus', function () {
    $(this).addClass('c-form-info__field--active');
  }).on('blur', function () {
    $(this).removeClass('c-form-info__field--active');
  });
});