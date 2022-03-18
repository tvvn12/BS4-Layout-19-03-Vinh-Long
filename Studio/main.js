function Change_img(y){
    y.classList.toggle("fa-toggle-off");
    y.classList.toggle("fa-toggle-on");
}
// function change02(z)
// {
//     z.classList.toggle("fa-sun");
//     z.classList.toggle("fa-moon");
//     document.getElementById("icon_change01").classList.toggle("icon__new");
//     document.getElementById("Change__color").classList.toggle("change");
//     document.getElementById("content__logo").classList.toggle("change__h1");
//     document.getElementById("nav_reponsive").classList.toggle("change__color__icon");
   
// }
function change01(x){
    x.classList.toggle("fa-sun");
    x.classList.toggle("fa-moon");
    // document.getElementById("Change__color").classList.add("change");
    document.getElementById("Change__color").classList.toggle("change");
    document.getElementById("content__logo").classList.toggle("change__h1");
    document.getElementById("icon_change").classList.toggle("icon_change");
    // var getTagsChangeColor = document.getElementsByClassName("item-navigate");
    // for(var i = 0; i < getTagsChangeColor.length;i++){
    //     getTagsChangeColor[i].classList.toggle("pink-text")
    // }
    document.getElementById("a_01").classList.toggle("change__a");
    document.getElementById("a_02").classList.toggle("change__a");
    document.getElementById("navbarDropdown").classList.toggle("change__a");
    document.getElementById("a_04").classList.toggle("change__a");
    document.getElementById("form__search").classList.toggle("change__search");
    document.getElementById("drop").classList.toggle("dropdown_menu_change")
    document.getElementById("d_01").classList.toggle("dropdown_item_change");
    document.getElementById("d_02").classList.toggle("dropdown_item_change");
    document.getElementById("d_03").classList.toggle("dropdown_item_change");
    document.getElementById("d_04").classList.toggle("dropdown_item_change");
    document.getElementById("d_05").classList.toggle("dropdown_item_change");
    document.getElementById("d_06").classList.toggle("dropdown_item_change");
    document.getElementById("nav_reponsive").classList.toggle("change_color_i");
    document.getElementById("nav_02").classList.toggle("change__a");
    document.getElementById("nav_03").classList.toggle("change__a");
    document.getElementById("nav_05").classList.toggle("change__a");
    document.getElementById("navbarDropdown_01").classList.toggle("change__a");
    document.getElementById("form__search__02").classList.toggle("change__search");
    document.getElementById("navbarSupportedContent__nav").classList.toggle("change_border");
    document.getElementById("drop__menu").classList.toggle("change__drop__menu");
    document.getElementById("dr_01").classList.toggle("change__a__drop");
    document.getElementById("dr_02").classList.toggle("change__a__drop");
    document.getElementById("dr_03").classList.toggle("change__a__drop");
    document.getElementById("dr_04").classList.toggle("change__a__drop");
    document.getElementById("dr_05").classList.toggle("change__a__drop");
    document.getElementById("dr_06").classList.toggle("change__a__drop");
    document.getElementById("BODY").classList.toggle("change__color__body");
    document.getElementById("studio__content").classList.toggle("title-main-change");
    document.getElementById("content_studio_1").classList.toggle("chang_content_studio");
    document.getElementById("content_studio_2").classList.toggle("chang_content_studio");
    document.getElementById("content_studio_3").classList.toggle("chang_content_studio");
    document.getElementById("get_started").classList.toggle("change__bg");
    document.getElementById("content_h1").classList.toggle("change__content");
    document.getElementById("span_1").classList.toggle("change__color__studio");
    document.getElementById("span_2").classList.toggle("change__color__studio");
    document.getElementById("h4_1").classList.toggle("change_h4");
    document.getElementById("span_3").classList.toggle("change__color__studio");
    document.getElementById("span_4").classList.toggle("change__color__studio");
    document.getElementById("h4_2").classList.toggle("change_h4");
    document.getElementById("span_5").classList.toggle("change__color__studio");
    document.getElementById("span_6").classList.toggle("change__color__studio");
    document.getElementById("h4_3").classList.toggle("change_h4");
    document.getElementById("h4_4").classList.toggle("change_h4");
    document.getElementById("h4_5").classList.toggle("change_h4");
    document.getElementById("h4_6").classList.toggle("change_h4");

    document.getElementById("span_7").classList.toggle("change__color__studio");
    document.getElementById("span_8").classList.toggle("change__color__studio");
    document.getElementById("span_9").classList.toggle("change__color__studio");
    document.getElementById("span_10").classList.toggle("change__color__studio");
    document.getElementById("span_11").classList.toggle("change__color__studio"); 
    document.getElementById("span_5").classList.toggle("change__color__studio");
    document.getElementById("span_12").classList.toggle("change__color__studio");
    document.getElementById("bg_1").classList.toggle("bg_white");
    document.getElementById("bg_2").classList.toggle("bg_white");
    document.getElementById("bg_3").classList.toggle("bg_white");
    document.getElementById("bg_5").classList.toggle("bg_white");
    document.getElementById("bg_4").classList.toggle("bg_white");
    document.getElementById("bg_6").classList.toggle("bg_white");
    



};

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('Change__color').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('Change__color').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
