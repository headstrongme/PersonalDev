({
	clickCreateItem : function(component, event, helper) {
		 var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validCamping){
            // Create the new CampingList
            var newCampItem = component.get("v.newItem");
           // console.log("Create expense: " + JSON.stringify(newCampItem));
            helper.createItem(component, newCampItem);
       /*     var campings = component.get("v.items");
            var item1 = JSON.parse(JSON.stringify(newCampItem));
            
            campings.push(item1);
            
            component.set("v.items",campings);
            component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                       'Price__c': 0,'Packed__c': false });           
       */
       }       
	}
})