(function($, Drupal) {
  /**
   * Add new command for reading a message.
   */
  Drupal.ajax.prototype.commands.getVotes = function(ajax, response, status){
    // Place content in ajax-target div.
    var cid = response.cid;
    var uid = response.uid;
    var type = ajax.element.classList[1];

    $('#ajax-target').html(
      cid + '::' + uid + type
    );
  }
})(jQuery, Drupal);
