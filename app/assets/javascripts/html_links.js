$(document).ready(function() {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

  $('.add-html-link').magnificPopup({
    type: 'ajax',
    alignTop: true,
    modal:true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });

  $('.edit-html-link').magnificPopup({
    type: 'ajax',
    alignTop: true,
    modal:true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });

  $('.show-html-link').magnificPopup({
    type: 'ajax',
    alignTop: true,
    closeOnContentClick: false,
    modal:true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });

  
  
  $('.link-item').on("click",function(){
    var width = 500; var height = 500;
    var left = (screen.width / 2)-(width / 2);
    var top = (screen.height / 2)-(height / 2);
    window.open($(this).attr('href'), 'mywin', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);
    return false;
    
  })

});