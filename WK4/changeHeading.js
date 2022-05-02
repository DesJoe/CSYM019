function myTestLoadFunction(){
    var element=document.getElementById('pageHeading');
    element.firstChild.nodeValue='New Heading is here';
}
document.addEventListener('DOMContentLoaded',myTestLoadFunction);