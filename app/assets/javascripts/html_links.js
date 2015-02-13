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


    var width = screen.width; 
    var height = screen.height;
    var left = 0;
    var top = 0;
    window.open($(this).attr('href'), '_blank', 'fullscreen=yes, toolbar=yes, location=yes, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);

    return false;
    
  })

  $('.lock-page').on('click', function() {
    $(this).addClass('hide');
    $('.edit-page').removeClass('hide');
    $('.add-html-link').addClass('hide');
    $('.edit-html-link').addClass('hide');
    $('.delete-html-link').addClass('hide');
    $('#sortable').sortable('destroy');
  })

  $('.edit-page').on('click', function() {
    $(this).addClass('hide');
    $('.add-html-link').removeClass('hide');
    $('.lock-page').removeClass('hide');
    $('.edit-html-link').removeClass('hide');
    $('.delete-html-link').removeClass('hide');
    sortableItem();
  })

});

function sortableItem() {
  var desired_width;
  if ($('#sortable').length > 0) {
    desired_width = $('#sortable').width() + 'px';
    return $('#sortable').sortable({
      axis: 'y',
      items: '.link-item',
      cursor: 'move',
      sort: function(e, ui) {
        return ui.item.addClass('active-item-shadow');
      },
      stop: function(e, ui) {
        ui.item.removeClass('active-item-shadow');
        return ui.item.effect('highlight', {}, 1000);
      },
      update: function(e, ui) {
        var item_id, position;
        item_id = ui.item.data('item-id');
        console.log(item_id);
        position = ui.item.index();
        return $.ajax({
          type: 'POST',
          url: '/html_links/update_row_order',
          dataType: 'json',
          data: {
            html_link: {
              html_link_id: item_id,
              row_order_position: position
            }
          }
        });
      }
    });
  }
}

