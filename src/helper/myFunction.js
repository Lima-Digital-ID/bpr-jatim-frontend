export const myFunction = {
    scrollTo: function(target){
        let offsetTarget = document.querySelector(target).offsetTop
        window.scrollTo({
            top: offsetTarget-92,
            left: 0,
            behavior: 'smooth'
        });        
    },
}