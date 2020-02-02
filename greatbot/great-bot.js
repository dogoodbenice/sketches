var botui = new BotUI('great-bot');
var company = "initial";
var website = "initial";

//starting point for journey
function init() {
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
        text: 'Link your business to your profile',
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
      findopportunity()
    } else if (res.value === 'moreaboutyourbusiness') {
      moreaboutyourbusiness()
    }
  });
}

//Top level function for OTHER journey option
function findopportunity() {
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
  }).then(function (res) {
   if (res.value === 'yesmore' ) {
     yesmore()
   } else if (res.value === 'nomore'){
     nomore()
   }
  })
};

//Anchor function for yesmore to return a user this pretty much reuses the starting point journey to replay
function yesmore() {
  botui.message.add({
    delay: 1500,
    content: "What would you like to do?"
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
      findopportunity()
    } else if (res.value === 'moreaboutyourbusiness') {
      moreaboutyourbusiness()
    }
  });
};

//function for nomore to finish a user
function nomore() {
  botui.message.add({
    delay: 1000,
    content: "Ok, thank you. Feel free to browse our trade capability areas."
  }).then(function () {
   botui.message.add({
    delay: 1000,
    content: "Capability content can be accessed here, at [capability content.](https://www.great.gov.uk/advice/)^"
    })
  })
};

//Top level function for OTHER journey options
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
    },{
      text: 'Report a trade barrier',
      value: 'reporttradebarrier'
    },{
      text: 'Get an EORI number',
      value: 'getandEORInumber'
    }]
    })
  })
};
//Top level function for moreaboutyourbusiness journey option
function moreaboutyourbusiness(){
  botui.message.add({
    delay:1000,
    human: true,
    content: "Can you tell us your business's registered company name?"
  }).then(function() {
    return botui.action.text({
      action:{
        placeholder: 'Company name'
      }
    });
  }).then(function (res){
    company = res.value; // savecompany
    botui.message.add({
      delay: 1000,
      content: 'Is this your company?'
    })
  }).then(function (res){
    botui.message.add({
      delay: 1000,
      content: "Registered company name: " + company
    })
  }).then(function (){
    botui.message.add({
      delay: 1000,
      content: "Company number: 12354473"
    })
  }).then(function (){
    botui.message.add({
      delay: 1000,
      content: "Nature of business: Educational support services"
    })
  }).then(function (){
    botui.message.add({
      delay: 1000,
      content: "Incorporated on: 09 January 2020"
    })
  }).then(function (){
    botui.message.add({
      delay: 1000,
      content: "Address: Windsor House, 18R3, SW90AD"
    })
  }).then(function (){
    return botui.action.button({
      delay:2000,
      action: [{
        text: 'Yes',
        value: 'yesmore'
      }, {
      text: 'No',
      value: 'nomore'
      }]
    })
  }).then(function (res) {
   if (res.value === 'yesmore' ) {
     yesrightbusiness()
   } else if (res.value === 'nomore'){
     moreaboutyourbusiness()
   }
  })
}

//function for yes correct business
function yesrightbusiness() {
  botui.message.add({
    delay:1000,
    content: "Can you share your business's website if it has one?"
  }).then(function (){
  botui.message.add({
    delay: 1000,
    content: "The website address must start with http:// or https://"
  })
}).then(function (){
  return botui.action.button({
    delay:1000,
    action: [{
      text: 'I have a business website',
      value: 'businesswebsite'
    }, {
    text: "I'd like to skip or add later",
    value: 'nobusinesswebsite'
    }]
  })
}).then(function (res) {
 if (res.value === 'businesswebsite' ) {
   businesswebsite()
 } else if (res.value === 'nobusinesswebsite'){
   nobusinesswebsite()
 }
})
}

function businesswebsite (){
  botui.message.add({
    delay:1000,
    human: true,
    content: "What is your business's registered website?"
  }).then(function() {
    return botui.action.text({
      action:{
        placeholder: 'https://www.example.com'
      }
    });
  }).then(function (res){
    website = res.value; // savecompany
    botui.message.add({
      delay: 1000,
      content: 'Thank you, these are your now your linked details'
    })
  }).then(function (res){
    botui.message.add({
      delay: 2000,
      content: "Registered company name: " + company
    })
  }).then(function (){
    botui.message.add({
      delay: 2000,
      content: "Company number: 12354473"
    })
  }).then(function (){
    botui.message.add({
      delay: 2000,
      content: "Address: Windsor House, 18R3, SW90AD"
    })
  }).then(function (){
    botui.message.add({
      delay: 2000,
      content: "Webite: " + website
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
  }).then(function (res) {
   if (res.value === 'yesmore' ) {
     yesmore()
   } else if (res.value === 'nomore'){
     nomore()
   }
  })
};

init();
