// function qa_forum_ajax_load() {
//   //jQuery("#ajax-target").load("question/4");
//   jQuery("#ajax-target").html('geoff is the best.');
// }

(function($, Drupal) {
  /**
   * Add new command for reading a message.
   */
  Drupal.ajax.prototype.commands.getVotes = function(ajax, response, status){
      // Place content in current-msg div.
      $('#ajax-target').html(response.title);
      console.log('did i make it here?');
      // $('#current-msg p').html(response.content);
      // // Remove from unread list.
      // $('#msg-' + response.mid).remove();
      // // Add message to read list.
      // $('#read-msgs').append('<li>' + response.subject + '</li>');
  }
})(jQuery, Drupal);
