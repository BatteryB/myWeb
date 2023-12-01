$(document).ready(function() {
    const updateItemCount = () => {
        const liCount = $('#TodosList>li').length;
        $('#listCount').text(`리스트 갯수 : ${liCount}`);
    };

    $("#TodosList").on("change", "input", function() {
        const $li = $(this).closest("li");
        const $p = $li.find("p");

        if ($(this).is(":checked")) {
            $p.addClass("checked-list");
        } else {
            $p.removeClass("checked-list");
        }
    });

    $("#clearCompleted").click(function() {
        $("#TodosList input:checked").each(function() {
            $(this).closest("li").remove();
        });
        updateItemCount();
    });

    $("#clearAll").click(function() {
        $("#TodosList").empty();
        updateItemCount();
    });

    $("#All").click(function() {
        $("#TodosList li").show();
    });

    $("#Active").click(function() {
        $("#TodosList li").show();
        $("#TodosList input:checked").closest("li").hide();
    });

    $("#Completed").click(function() {
        $("#TodosList li").show();
        $("#TodosList input:not(:checked)").closest("li").hide();
    });

    $('#todoInput').on("keydown", function(event) {
        if (event.key === "Enter") {
            const inputText = $(this).val();
            if (inputText.trim() !== "") {
                const listItem = $('<li class="li-border"> <label> <input type="checkbox"> <i></i> </label> <p>' + inputText + '</p> <button class="deleted"><img src="images/todos/ico-delete.png" alt=""></button></li>');
                $("#TodosList").append(listItem);
                $(this).val("");
                updateItemCount();
            }
            event.preventDefault();
        }
    });


    $(document).on("click", ".deleted", function() {
        $(this).closest("li").remove();
        updateItemCount();
    });

    $("#TodosList").on("dblclick", "li", function() {
        const $li = $(this);
        const $p = $li.find("p");
        const $input = $('<input maxlength="50" type="text">');
        const originalText = $p.text();

        $p.replaceWith($input);
        $input.val(originalText).focus();

        $input.on("keydown", function(event) {
            if (event.key === "Enter") {
                const newText = $input.val();
                $input.replaceWith($p.text(newText));
            }
        });

        $input.on("blur", function() {
            const newText = $input.val();
            $input.replaceWith($p.text(newText));
        });
    });





    //==============단축키==============
    $(document).keydown(function(e) {
        if (e.shiftKey && e.key === "D") {
            $("#TodosList").empty();
            updateItemCount();
        }
    });

    $(document).keydown(function (e){
        if(e.shiftKey && e.key === "C") {
            $("#TodosList input:checked").each(function (){
                $(this).closest("li").remove();
            });
        }
        updateItemCount();
    });

    let counter = 0;
    $(document).keydown(function(e) {
        if (e.shiftKey && e.key === "A") {
            counter++;
            const listItem = $('<li class="li-border"> <label> <input type="checkbox"> <i></i> </label> <p>' + counter + '</p> <button class="deleted"><img src="images/todos/ico-delete.png" alt=""></button></li>');
            $("#TodosList").append(listItem);
            updateItemCount();
        }
    });

    $(document).keydown(function (e){
        if(e.shiftKey && e.key === "!"){
            $("#TodosList li").show();
        }
    })

    $(document).keydown(function (e){
        if(e.shiftKey && e.key === "@"){
            $("#TodosList li").show();
            $("#TodosList input:checked").closest("li").hide();
        }
    })

    $(document).keydown(function (e){
        if(e.shiftKey && e.key === "#"){
            $("#TodosList li").show();
            $("#TodosList input:not(:checked)").closest("li").hide();
        }
    })
});
