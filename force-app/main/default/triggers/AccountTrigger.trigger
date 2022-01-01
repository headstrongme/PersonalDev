trigger AccountTrigger on Account (before insert) {
        AccountTriggerHandler.handleBeforeInsert (Trigger.new);
}