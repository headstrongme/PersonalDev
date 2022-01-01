({
	packItem : function(component, event, helper) {
		var itm = component.get("v.item");
        itm.Packed__c = True;
        component.set("v.item" , itm);
        var buttonClick = event.getSource();
        buttonClick.set("v.disabled", "True")
	}
})