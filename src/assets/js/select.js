$(document).ready(function () {
    // Открытие списка при клике на .select__front
    $("body").on("click", ".c-proxy-checker__select .select__front, .c-proxy-list__select .select__front", function (e) {
        e.stopPropagation(); // Останавливаем всплытие
        $(".select__options").removeClass("select__options--active"); // Закрываем другие списки
        $(this).siblings(".select__options").toggleClass("select__options--active"); // Открываем текущий список
    });

    // Выбор элемента из списка
    $("body").on("click", ".c-proxy-checker__select .select__value, .c-proxy-list__select .select__value", function (e) {
        e.stopPropagation(); // Останавливаем всплытие

        let $select = $(this).closest(".c-proxy-checker__select, .c-proxy-list__select"); 
        let $name = $select.find(".select__name"); 
        
        // Обновляем текст в блоке
        $name.text($(this).text());

        // Убираем старый selected и добавляем к текущему
        $select.find(".select__value").removeClass("select__value--selected"); 
        $(this).addClass("select__value--selected"); 

        // Закрываем список
        $select.find(".select__options").removeClass("select__options--active"); 
    });

    // Закрытие списка при клике вне него
    $(document).on("click", function () {
        $(".select__options").removeClass("select__options--active");
    });
});