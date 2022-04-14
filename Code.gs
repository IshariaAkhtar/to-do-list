function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1mPTawA1yoWRLrnVPbeFcpMsBkF7XcPdW4WOZf1SXV_4/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    
    formObject.first_name,
     formObject.last_name,
    formObject.email,
    formObject.phone
   

  ]);
}
