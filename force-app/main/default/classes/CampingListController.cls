public with sharing class CampingListController {
 @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        
   List<Camping_Item__c> campingItems  =  [SELECT Id, Name, Quantity__c, Price__c, Packed__c, CreatedDate 
                							FROM Camping_Item__c];
        
         return campingItems;
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c list1) {
        
        upsert list1;
        return list1;
    }
}