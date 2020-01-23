var botui = new BotUI('great-bot');

botui.message.add({
  content: "Hello, what's your main goal today?"
}).then(function () {
  return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Just explore',
      value: 'explore'
    }, {
      text: 'Find an opportunity',
      value: 'findopportunity'
    },{
      text: 'Learn about exporting',
      value: 'Learn'
    },{
      text: 'Find a new market',
      value: 'findmarket'
    },{
      text: 'Other',
      value: 'other'
    }]
  })
}).then(function (res) {
  if (res.value === 'other') {
    other()
  } else {
  if (res.value === 'findopportunity')
    opportunity()
  }
});

function opportunity() {
  botui.message.add({
    delay: 1500,
    content: "Ok, the DIT offers an export opportunities service"
  }).then(function (){
    botui.message.add({
      delay: 1000,
      content: "This can be accessed here, at [Export opportunities](https://www.great.gov.uk/export-opportunities/)"
    })
    })
};

function other() {
  botui.message.add({
    delay: 1000,
    content: "Ok, the DIT offers the following other services"
  }).then(function () {
    return botui.action.button({
    delay: 1000,
    action: [{
      text: 'Tariff finder',
      value: 'tarriffinder'
    }]
    })
  })
};
