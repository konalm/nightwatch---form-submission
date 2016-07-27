
/*
this.demoTest2 = function(client) {
  client.url("http://localhost/nightwatch/practise.html");
  client.waitForElementVisible('body', 1000); 
  /* client.expect.element('#para').text.to.contain('Super casual style').before(1000); 
  client.expect.element('#peek').to.be.a('span'); 
  client.expect.element('#para').to.be.a('div'); 
  client.expect.element('#para').to.have.css('line-height').which.equals('25px');
  client.expect.element('#fname').to.have.value.that.equals('connor'); 
  client.expect.element('#lname').to.have.value.that.equals('moore'); 
  client.expect.element('#gender_male').to.not.be.selected;  */ 
  
  /*
  client.verify.attributeContains('#para', 'title', 'incorrect'); 
  client.assert.containsText("#para", "difficult too master"); 
  client.assert.cssProperty("#para", "margin", "10px"); 
  client.assert.urlContains('practise'); 
  client.assert.value("#signup input[type=text]", "search"); 
  client.pause(5000); 
  client.end(); 
} 
*/

this.demoTest3 = function(client) {
  client.url("http://localhost:8234/practiseForm.html");
  client.waitForElementVisible('body', 1000);
  
  client.verify.elementPresent("#uname");
  client.verify.elementPresent("#fname"); 
  client.verify.elementPresent("#lname");
  client.verify.elementPresent("#email"); 
  client.verify.elementPresent("#age"); 
  client.verify.elementPresent("#gender");
  client.verify.elementPresent("#submit"); 
  
  client.setValue("#uname", "The Yellow Flash"); 
  client.setValue("#fname", "Connor");
  client.setValue("#lname", "Moore"); 
  client.setValue("#email", "Connor@gmail.com"); 
  client.setValue("#age", "23"); 
  
  client.click('#submit'); 
  
  client.pause(10000);
  client.end();
}

