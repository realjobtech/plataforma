let App = {
    Initialize: () => {
        App.InitilizeLibraries();
    },
    InitilizeLibraries: () => {
        var eventsPaginationSwiper = new Swiper('#events-pagination', {
        });
    },
}

window.onload = () => {
    App.Initialize();
}