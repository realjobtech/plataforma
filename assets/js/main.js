let homepageSwiper;

let App = {
    Initialize: () => {
        App.InitilizeLibraries();
        App.ApplyEvents();
    },
    InitilizeLibraries: () => {
        //Swiper
        homepageSwiper = new Swiper('#homepage');
    },
    ApplyEvents: () =>{
        // ################### INDEX.HTML ###################
        /* Drawer */
        $("#btn-homepage-drawer").on("click", () => {
            $("#homepage-drawer").classList.add("drawer-show");
        });
        $("#btn-homepage-close-drawer").on("click", () => {
            $("#homepage-drawer").classList.remove("drawer-show");
        });
        $("#homepage-drawer").on("click", (e) => {
            if(e.target.classList.contains("drawer-show") || e.target.classList.contains("drawer-list-item"))
            $("#homepage-drawer").classList.remove("drawer-show");
        });
        $("#btn-sign-in").on("click", (e) => {
            homepageSwiper.slideTo(0, 500, false);
        });
        $("#btn-about-us").on("click", (e) => {
            homepageSwiper.slideTo(1, 500, false);
        });
        $("#btn-about-project").on("click", (e) => {
            homepageSwiper.slideTo(2, 500, false);
        });
        
    }
}

window.onload = () => {
    App.Initialize();
}