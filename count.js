// カウント処理開始
$(function(){
    // 最新９件のデータ取得
    $(".value--2NhHD").each(function(){　//検索結果ごとに処理しますよ。
        var recentNumbers = $(this).text();
        console.log(recentNumbers)
    });
});
// カウント処理終了

// ページを開いたときに左右回転方向を選択するためのモーダル表示開始
$(function(){
    // ダイアログ用のボタン（配列）
    var buttons = [
        {
            text: "右",
            click: function () { alert("右"); }
        },
        {
            text: "左",
            click: function () { alert('左'); }
        }
    ];
    // ダイアログを表示
    showDialog("現在の回転方向", "左右どちらかを選択してください", buttons);
});

//------------------------------
// ダイアログ表示
//------------------------------
function showDialog(title, message, buttons)
{
    var html_dialog = '<div>' + message + '</div>';
    $(html_dialog).dialog({
        title:   title,
        buttons: buttons,
        close:   function() { $(this).remove(); }
    });
}
// ページを開いたときに左右回転方向を選択するためのモーダル表示終了

// カウント処理で取得した数字の配列に左右の情報を入力する処理開始

// カウント処理で取得した数字の配列に左右の情報を入力する処理終了