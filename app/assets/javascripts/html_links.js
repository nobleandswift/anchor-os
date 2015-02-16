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


    // var width = screen.width; 
    // var height = screen.height;
    // var left = 0;
    // var top = 0;
    // window.open($(this).attr('href'), '_blank', 'fullscreen=yes, toolbar=yes, location=yes, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);

    // return false;
    
  });

  $('.lock-page').on('click', function() {
    $(this).addClass('hide');
    $('.edit-page').removeClass('hide');
    $('.add-html-link').addClass('hide');
    $('.edit-html-link').addClass('hide');
    $('.delete-html-link').addClass('hide');
    $('.indent-left-html-link').addClass('hide');
    $('.indent-right-html-link').addClass('hide');
    $('#sortable').sortable('destroy');
  });

  $('.edit-page').on('click', function() {
    $(this).addClass('hide');
    $('.add-html-link').removeClass('hide');
    $('.lock-page').removeClass('hide');
    $('.edit-html-link').removeClass('hide');
    $('.delete-html-link').removeClass('hide');
    $('.indent-left-html-link').removeClass('hide');
    $('.indent-right-html-link').removeClass('hide');

    sortableItem();
  });

  $('.indent-left-html-link').on('click', function() {
    $parent = $(this).parent();
    indentation = parseInt($parent.data('indentation'));
    indentation -= 1;
    if (indentation <= 0) {
      indentation = 0;
    }
    updateIndentation($parent, indentation)
    return false;
  });

  $('.indent-right-html-link').on('click', function() {
    $parent = $(this).parent();
    indentation = parseInt($parent.data('indentation'));
    indentation += 1;
    if (indentation >= 10) {
      indentation = 10;
    }
    updateIndentation($parent, indentation)
    return false;
  });

  function updateIndentation(obj, indentation) {
    obj.css('margin-left', (indentation * 30 + 30).toString() + 'px')
    // obj.attr('data-indentation', indentation.toString());
    obj.data('indentation', indentation.toString());
    var item_id;
    item_id = obj.data('item-id');
    return $.ajax({
      type: 'POST',
      url: '/html_links/update_indentation',
      dataType: 'json',
      data: {
        html_link: {
          html_link_id: item_id,
          indentation: indentation
        }
      }
    });
  }

  // $('.link-item').each( obj, function (key, value) {
  //   indentation = parseInt(parent.data('indentation'));
  //   updateIndentation($(this), indentation)
  // });

  $('.link-item').each( function() {
    indentation = parseInt($(this).data('indentation'));
    if (indentation > 0) {
      $(this).css('margin-left', (indentation * 30 + 30).toString() + 'px')
    };
    
  });
  // $('.insert-spacer').on('click', function() {
    
  //   if($(".insert-spacer").is(':checked')) {
  //     $('.description').removeAttr('disabled');
  //     $('.html-link').removeAttr('disabled');
  //   }
  //   else {
  //     $('.description').attr('disabled','disabled');
  //     $('.html-link').attr('disabled','disabled');
  //   }
  // })

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

