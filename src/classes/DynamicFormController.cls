/**
 * Created by Aliaksandr_Kazlovich on 17.10.2022.
 */

public with sharing class DynamicFormController {
    @AuraEnabled(Cacheable = true)
    public static String getJSONFormData(){
        return '[{"id":"1", "name":"Firstname", "type":"text", "label":"FirstName", "value":""}, ' +
                '{"id":"2", "name":"LastName", "type":"picklist", "label":"LastName", "value":"", "options":[{"label":"new", "value":"New"}, {"label":"finished", "value":"Finished"}]}, ' +
                '{"id":"3", "name":"Birthdate", "type":"date", "label":"Birthdate", "value":"2000-09-07"}, ' +
                '{"id":"4", "name":"CompanyName", "type":"text", "label":"Company", "value":"EPAM Systems"}, ' +
                '{"id":"6", "name":"Position", "type":"text", "label":"Position", "value":"Developer"}, ' +
                '{"id":"7", "name":"Experience", "type":"text", "label":"Experience (in years)", "value":"3"}, ' +
                '{"id":"8", "name":"Review", "type":"text", "label":"Review", "value":"Some text"}]';
    }
}