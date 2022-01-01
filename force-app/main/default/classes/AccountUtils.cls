public class AccountUtils {
    public static List<Account> accountsByState(String state){
       
        List<Account> acct = [SELECT Id, Name FROM Account WHERE billingState = :state ];
        
        return acct;
    }
    
      List<Account> accts= accountsByState('TX');
}