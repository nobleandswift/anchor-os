# jQuery ->
#   if $('#sortable').length > 0
#     desired_width = $('#sortable').width() + 'px'
    
#     $('#sortable').sortable(
#       axis: 'y'
#       items: '.link-item'
#       cursor: 'move'

#       sort: (e, ui) ->
#         ui.item.addClass('active-item-shadow')
#       stop: (e, ui) ->
#         ui.item.removeClass('active-item-shadow')
#         # highlight the row on drop to indicate an update
#         ui.item.effect('highlight', {}, 1000)
#       update: (e, ui) ->
#         item_id = ui.item.data('item-id')
#         console.log(item_id)
#         position = ui.item.index() # this will not work with paginated items, as the index is zero on every page
#         $.ajax(
#           type: 'POST'
#           url: '/html_links/update_row_order'
#           dataType: 'json'
#           data: { html_link: {html_link_id: item_id, row_order_position: position } }
#         )
#     )
