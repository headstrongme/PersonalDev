public class AccountTriggerHandler {
    public static void handleBeforeInsert (List<Account> acct){
        for(Account a: acct){
            a.Description = 'new description test';
        }
    }
}