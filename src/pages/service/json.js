export const json = {
    "completedHtml": "<h3>ありがとうございました。.</h3> <h5>あなたのプランはー－＞「A」!</h5>",
    "progressBarType": "buttons",
    "showProgressBar": "top",
    pages: [
        {
            "navigationTitle": "ページ１",
          "elements": [
            {
              "type": "checkbox",
              "name": "opSystem",
              "title": "ダミーテキスト",
              "isRequired": true,
              "choices": ["ダミー１", "ダミー２", "ダミー３３"]
            }
          ]
        }, {
            "navigationTitle": "ページ2",
            "elements": [
            {
              "type": "radiogroup",
              "name": "langs",
              "title": "ダミーテキスト",
              "isRequired": true,
              "choices": [
                "ダミー１",
                "ダミー2",
                "ダミー3"
              ]
            }
          ]
        }, {
            "navigationTitle": "ページ3",
            "elements": [
            {
              "type": "text",
              "name": "name",
              "title": "名前:"
            }, {
              "type": "text",
              "name": "email",
              "title": "メール"
            }
          ]
        }
      ]
   }
   ;
   