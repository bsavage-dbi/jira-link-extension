// window.addEventListener("load", linkifyJira, false);

// function linkifyJira(event) {
    // console.log("Got into linkifyJira");
// jQuery(document).ready(function() {
  // var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  // function checkForJS_Finish() {
      // console.log("Got into checkForJSFinish");
      // if( $('.js-issue-title').length ){
          console.log("Got into the if block");
          // clearInterval(jsInitChecktimer);
          $('.js-issue-title').html($('.js-issue-title').html().replace(/\b([A-Z]+-\d+)/g, '<a href="https://hearsaysocial.atlassian.net/browse/$1">$1</a>'));
          $('.js-comment-body').each(function() {
              $(this).html($(this).html().replace(/([^\/"])\b([A-Z]+-\d+)/g, '$1<a href="https://hearsaysocial.atlassian.net/browse/$2">$2</a>'));
          });
      // }
  // }
// });
// }
