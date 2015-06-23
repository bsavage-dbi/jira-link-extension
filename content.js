$('.js-issue-title').html($('.js-issue-title').html().replace(/\b([A-Z]+-\d+)/g,
                                                              '<a href="https://hearsaysocial.atlassian.net/browse/$1">$1</a>'));

$('.js-comment-body').each(function() {
  $(this).html($(this).html().replace(/([^\/"])\b([A-Z]+-\d+)/g,
                                      '$1<a href="https://hearsaysocial.atlassian.net/browse/$2">$2</a>'));
});
