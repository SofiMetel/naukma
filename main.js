$(document).ready(function() {
  var LIST = $('.list-of-items');
  var ITEM_TEMPLATE = $('#product-template').html();
  var PREVIEW_TEMPLATE = $('.preview-template').html();
  $('.add').click(function() {
    var input = $('.input');
    add_item(input.val());
    input.focus();
  });
  function add_item(name) {
    var name_save = name;
    var iSbought = false;
    var it_temp = $(ITEM_TEMPLATE);
    var prew_temp = $(PREVIEW_TEMPLATE);
    it_temp.find('.name').text(name);
    prew_temp.find('.label').text(name);
    it_temp.find('#edit').text(name);
    var quantity = 1;
    it_temp.find('.delete-button').click(function() {
      it_temp.slideUp(250, function() {
        it_temp.remove();
      });
      prew_temp.fadeOut(250, function() {
        prew_temp.remove();
      });
    });

    it_temp.find('#plus').click(function() {
      quantity += 1;
      prew_temp.find('.orange').html(quantity);
      it_temp.find('.quantity-count').fadeOut(250, function() {
        it_temp.find('.quantity-count').html(quantity);
        it_temp.find('.quantity-count').fadeIn(250, function() {})
      });
      console.log(quantity)

    });
    it_temp.find('#minus').click(function() {
      if (quantity > 1) {
        quantity -= 1;
        prew_temp.find('.orange').html(quantity);
        it_temp.find('.quantity-count').fadeOut(250, function() {
          it_temp.find('.quantity-count').html(quantity);
          it_temp.find('.quantity-count').fadeIn(250, function() {})
        });
      } else {}
      console.log(quantity)

    });

    it_temp.find('.bought').click(function() {
      iSbought = !iSbought;
      it_temp.fadeOut(250, function() {
        if (iSbought) {
          it_temp.find('.plus').hide();
          it_temp.find('.minus').hide();
          it_temp.find('.delete-button').hide();
          it_temp.find('.bought').text('Не куплено');
          it_temp.find('.bought').attr('data-tooltip', 'Видалити із купленого');

          prew_temp.fadeOut(250, function() {
            it_temp.find('.name').css('text-decoration', 'line-through');
            prew_temp.hide().appendTo($('.items-bought')).fadeIn(250);
          });
          prew_temp.find('.label').css('text-decoration', 'line-through');

        } else {
          it_temp.find('.plus').show();
          it_temp.find('.minus').show();
          it_temp.find('.delete-button').show();
          it_temp.find('.bought').text('Куплено');
          it_temp.find('.bought').attr('data-tooltip', 'Додати до купленого');

          prew_temp.fadeOut(250, function() {
            it_temp.find('.name').css('text-decoration', 'none');
            prew_temp.hide().appendTo($('.products-holder')).fadeIn(250);
          });
          prew_temp.find('.label').css('text-decoration', 'none');
        }
        it_temp.fadeIn(250);
      });
    });


    if (name.length) {
      if (name.length > 30) {
        alert('Невірне ім я');
      } else {
        it_temp.hide().prependTo(LIST).slideDown(250);
        prew_temp.hide().appendTo($('.products-holder')).fadeIn(250);
      }
    }

    it_temp.find('.name').click(function() {
      it_temp.find('.name').fadeOut(250 / 5, function() {
        it_temp.find('#edit').val(name);
        it_temp.find('#edit').fadeIn(250 / 5).focus();
      });
    });

    it_temp.find('#edit').focusout(function() {
      var replacement = it_temp.find('#edit').val();
      if (replacement.replace(/\s/g, '').length) {
        if (replacement.length < 30) {
          it_temp.find('#edit').fadeOut(250 / 5, function() {
            it_temp.find('.name').text(replacement).fadeIn(250 / 5);
            prew_temp.find('.label').text(replacement);
            name = replacement;
          });
        }
      } else {
        it_temp.find('#edit').focus();
      }
    });
  }

  add_item('Помідори');
  add_item('Печиво');
  add_item('Сир');
});
