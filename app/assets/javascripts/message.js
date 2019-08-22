$(document).on("turbolinks:load", function() {

  function buildHTML(message) {
    // 画像がアップされないときは<img src = "null">となり余計なサムネが表示されることを防ぐ
    var image = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`

    var html =
      `<div class = "message" data-id = "${message.id}">
        <div class = "upper-message__user-name">${message.user_name}</div>
        <div class = "upper-message__date">${message.date}</div>
        <div class = "lower-message__content">${message.content}</div>
        <div class = "lower-message__image">${image}</div>
      </div>`;
    return html;
  }

  // フォームの非同期通信
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    })
    //送信成功時
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      //$('.messages').removeAttr('disabled');
      // javascriptでフラッシュメッセージを作成
      //var notice = $('<p class = "notice-succsess">').append('新規メッセージが送信されました');
      //$('.notice').append(notice);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      return false;
    })
    // 送信失敗時
    .fail(function(){
	    alert('error');
	  });
    // Turbolinksを止めないためにfalseを返しておく
    return false;
  });
});