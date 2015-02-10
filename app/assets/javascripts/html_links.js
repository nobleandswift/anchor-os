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

  
  
  $('.edit-item').on("click",function(){


    // rawFile.open("GET", file, false);
    // rawFile.onreadystatechange = function ()
    // {
    //     if(rawFile.readyState === 4)
    //     {
    //         if(rawFile.status === 200 || rawFile.status == 0)
    //         {
    //             var allText = rawFile.responseText;
    //             alert(allText);
    //         }
    //     }
    // }
    // rawFile.send(null);

    var width = screen.width; 
    var height = screen.height;
    var left = 0;
    var top = 0;
    window.open($(this).attr('href'), '_blank', 'fullscreen=yes, toolbar=yes, location=yes, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);

    return false;
    
  })

  $('.lock-page').on('click', function() {
    $(this).addClass('hide');
    $('.edit-page').removeClass('hide')
    $('.add-html-link').addClass('hide')
    $('.edit-html-link').addClass('hide')
    $('.delete-html-link').addClass('hide')
  })

  $('.edit-page').on('click', function() {
    $(this).addClass('hide');
    $('.add-html-link').removeClass('hide')
    $('.lock-page').removeClass('hide')
    $('.edit-html-link').removeClass('hide')
    $('.delete-html-link').removeClass('hide')
  })

  $('.refresh-page').on('click', function() {
    window.location = $(this).attr('href');
    location.reload(); 
    return false;
  })

});