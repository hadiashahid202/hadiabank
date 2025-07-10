$(document).ready(function() {
    function toggleSidebar() {
        const sidebar = $('#sidebar');
        const isOpen = sidebar.css('left') === '0px';

        if (isOpen) {
            sidebar.css('left', '-100%');
        } else {
            sidebar.css('left', '0px');
        }
    }

    function closeSidebar() {
        $('#sidebar').css('left', '-100%');
    }

    $('.menu').click(toggleSidebar);
    $('.hidden-sidebar').click(closeSidebar);
});

