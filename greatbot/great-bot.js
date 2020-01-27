var botui = new BotUI('great-bot');

//starting point for journey
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
      text: 'Tell us more about your business',
      value: 'moreaboutyourbusiness'
    },{
      text: 'Other',
      value: 'other'
    }]
  })
}).then(function (res) {
  if (res.value === 'other') {
    other()
  } else if (res.value === 'findopportunity') {
    opportunity()
  } else if (res.value === 'moreaboutyourbusiness') {
    moreaboutyourbusiness()
  }
});

//Top level function for OTHER journey option
function opportunity() {
  botui.message.add({
    delay: 1500,
    content: "Ok, the DIT offers an export opportunities service"
  }).then(function (){
    botui.message.add({
      delay: 1000,
      content: "This can be accessed here, at [Export opportunities](https://www.great.gov.uk/export-opportunities/)^"
    })
  }).then(function (){
    botui.message.add({
      delay: 2000,
      content: "Was there anything else we could help with?"
    })
  }).then(function (){
    return botui.action.button({
      delay:3000,
      action: [{
        text: 'Yes',
        value: 'yesmore'
      }, {
      text: 'No',
      value: 'nomore'
      }]
    })
  })
};


//Top level function for OTHER journey option
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
//Top level function for moreaboutyourbusiness journey option
function moreaboutyourbusiness() {

}
