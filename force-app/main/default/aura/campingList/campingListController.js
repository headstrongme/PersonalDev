({
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    
    handleAddItem : function(component, event, helper) {
        
        var action = component.get("c.saveItem");
        //var newItem = component.get("v.newItem"); 
        action.setParams({
            "item1": event
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var itemslist = component.get("v.items");
                itemslist.push(response.getReturnValue());
                component.set("v.items", itemslist);
                
            }
        });
        $A.enqueueAction(action);
    }
    
    
})