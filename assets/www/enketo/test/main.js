var formInstance = formInstance || {getModel: function () {
    return              "<model>\n" +
        "      <instance>\n" +
        "         <form xmlns:openmrs=\"/moduleServlet/formentry/forms/schema/18-1\" xmlns:xd=\"http://schemas.microsoft.com/office/infopath/2003\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"18\" name=\"New Xform\" version=\"0.1\" uuid=\"e20ef531-25f9-4bc6-abcb-444d4e7e3420\">\n" +
        "            <header>\n" +
        "               <enterer/>\n" +
        "               <date_entered/>\n" +
        "               <session/>\n" +
        "               <uid/>\n" +
        "            </header>\n" +
        "            <patient>\n" +
        "               <patient.birthdate openmrs_table=\"patient\" openmrs_attribute=\"birthdate\"/>\n" +
        "               <patient.birthdate_estimated openmrs_table=\"patient\" openmrs_attribute=\"birthdate_estimated\"/>\n" +
        "               <patient.family_name openmrs_table=\"patient_name\" openmrs_attribute=\"family_name\"/>\n" +
        "               <patient.given_name openmrs_table=\"patient_name\" openmrs_attribute=\"given_name\"/>\n" +
        "               <patient.medical_record_number openmrs_table=\"patient_identifier\" openmrs_attribute=\"identifier\"/>\n" +
        "               <patient.middle_name openmrs_table=\"patient_name\" openmrs_attribute=\"middle_name\"/>\n" +
        "               <patient.patient_id openmrs_table=\"patient\" openmrs_attribute=\"patient_id\"/>\n" +
        "               <patient.sex openmrs_table=\"patient\" openmrs_attribute=\"gender\"/>\n" +
        "               <patient.tribe openmrs_table=\"patient\" openmrs_attribute=\"tribe\"/>\n" +
        "               <patient_address.address1 openmrs_table=\"patient_address\" openmrs_attribute=\"address1\"/>\n" +
        "               <patient_address.address2 openmrs_table=\"patient_address\" openmrs_attribute=\"address2\"/>\n" +
        "            </patient>\n" +
        "            <encounter>\n" +
        "               <encounter.encounter_datetime openmrs_table=\"encounter\" openmrs_attribute=\"encounter_datetime\">'today()'</encounter.encounter_datetime>\n" +
        "               <encounter.location_id openmrs_table=\"encounter\" openmrs_attribute=\"location_id\"/>\n" +
        "               <encounter.provider_id openmrs_table=\"encounter\" openmrs_attribute=\"provider_id\" provider_id_type=\"PROVIDER.ID\"/>\n" +
        "            </encounter>\n" +
        "            <obs>\n" +
        "               <weight_kg openmrs_concept=\"5089^WEIGHT (KG)^99DCT\" openmrs_datatype=\"NM\">\n" +
        "                  <date xsi:nil=\"true\"/>\n" +
        "                  <time xsi:nil=\"true\"/>\n" +
        "                  <value xsi:nil=\"true\"/>\n" +
        "               </weight_kg>\n" +
        "            </obs>\n" +
        "            <problem_list openmrs_concept=\"1284^PROBLEM LIST^99DCT\" openmrs_datatype=\"ZZ\">\n" +
        "               <problem_added openmrs_concept=\"6042^PROBLEM ADDED^99DCT\" openmrs_datatype=\"CWE\" multiple=\"0\">\n" +
        "                  <date xsi:nil=\"true\"/>\n" +
        "                  <time xsi:nil=\"true\"/>\n" +
        "                  <value xsi:nil=\"true\"/>\n" +
        "               </problem_added>\n" +
        "               <problem_resolved openmrs_concept=\"6097^PROBLEM RESOLVED^99DCT\" openmrs_datatype=\"CWE\" multiple=\"0\">\n" +
        "                  <date xsi:nil=\"true\"/>\n" +
        "                  <time xsi:nil=\"true\"/>\n" +
        "                  <value xsi:nil=\"true\"/>\n" +
        "               </problem_resolved>\n" +
        "            </problem_list>\n" +
        "            <other/>\n" +
        "         </form>\n" +
        "      </instance>\n" +
        "   </model>"

}, getHTML: function () {
    return              "<form class=\"jr\" autocomplete=\"off\" id=\"18\">\n" +
        "<!--This form was created by transforming a javaRosa-style (X)Form using an XSLT sheet created\n" +
        "                    by Aid Web Solutions.\n" +
        "                --><section class=\"form-logo\"> </section>\n" +
        "      <h3 id=\"form-title\"/>\n" +
        "      <fieldset id=\"jr-preload-items\" style=\"display:none;\">\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.birthdate\" data-type-xml=\"date\"/>\n" +
        "         </label>\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.family_name\" data-type-xml=\"string\"/>\n" +
        "         </label>\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.given_name\" data-type-xml=\"string\"/>\n" +
        "         </label>\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.medical_record_number\" data-type-xml=\"string\"/>\n" +
        "         </label>\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.middle_name\" data-type-xml=\"string\"/>\n" +
        "         </label>\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.patient_id\" data-type-xml=\"int\"/>\n" +
        "         </label>\n" +
        "         <label class=\"\">\n" +
        "            <input autocomplete=\"off\" type=\"hidden\" name=\"/form/patient/patient.sex\" data-type-xml=\"string\"/>\n" +
        "         </label>\n" +
        "      </fieldset>\n" +
        "  \n" +
        "  \n" +
        "      <span lang=\"\" class=\" active\">Page1</span>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">BIRTHDATE</span>\n" +
        "         <input autocomplete=\"off\" type=\"date\" name=\"/form/patient/patient.birthdate\" data-type-xml=\"date\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">BIRTHDATE ESTIMATED</span>\n" +
        "         <input autocomplete=\"off\" type=\"checkbox\" name=\"/form/patient/patient.birthdate_estimated\" data-type-xml=\"boolean\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">FAMILY NAME</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient.family_name\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">GIVEN NAME</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient.given_name\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">MEDICAL RECORD NUMBER</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient.medical_record_number\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">MIDDLE NAME</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient.middle_name\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">PATIENT ID</span>\n" +
        "         <span class=\"required\">*</span>\n" +
        "         <input autocomplete=\"off\" type=\"number\n" +
        "            \" name=\"/form/patient/patient.patient_id\" required=\"required\" data-type-xml=\"int\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">SEX</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient.sex\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">TRIBE</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient.tribe\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">ADDRESS1</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient_address.address1\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">ADDRESS2</span>\n" +
        "         <input autocomplete=\"off\" type=\"text\" name=\"/form/patient/patient_address.address2\" data-type-xml=\"string\"/>\n" +
        "      </label>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">ENCOUNTER DATETIME</span>\n" +
        "         <span class=\"required\">*</span>\n" +
        "         <input autocomplete=\"off\" type=\"date\" name=\"/form/encounter/encounter.encounter_datetime\" required=\"required\" data-constraint=\". &lt;= today()\" data-type-xml=\"date\"/>\n" +
        "      </label>\n" +
        "      <fieldset class=\"restoring-sanity-to-legends \">\n" +
        "         <fieldset>\n" +
        "            <legend>\n" +
        "               <span lang=\"\" class=\" active\">LOCATION ID</span>\n" +
        "               <span class=\"required\">*</span>\n" +
        "                    </legend>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"4\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Chulaimbo [4]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"3\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Mosoriot Hospital [3]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"1\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location [1]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"11\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 10 [11]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"12\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 11 [12]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"13\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 12 [13]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"14\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 13 [14]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"15\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 14 [15]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"16\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 15 [16]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"17\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 16 [17]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"18\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 17 [18]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"19\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 18 [19]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"5\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 4 [5]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"6\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 5 [6]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"7\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 6 [7]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"8\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 7 [8]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"9\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 8 [9]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"10\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Unknown Location 9  [10]</span>\n" +
        "            </label>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.location_id\" value=\"2\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Wishard Hospital [2]</span>\n" +
        "            </label>\n" +
        "         </fieldset>\n" +
        "      </fieldset>\n" +
        "      <fieldset class=\"restoring-sanity-to-legends \">\n" +
        "         <fieldset>\n" +
        "            <legend>\n" +
        "               <span lang=\"\" class=\" active\">PROVIDER ID</span>\n" +
        "               <span class=\"required\">*</span>\n" +
        "                    </legend>\n" +
        "            <label class=\"clearfix \">\n" +
        "               <input autocomplete=\"off\" type=\"radio\" name=\"/form/encounter/encounter.provider_id\" value=\"1\" required=\"required\" data-type-xml=\"string\"/>\n" +
        "               <span lang=\"\" class=\" active\">Super User [admin]</span>\n" +
        "            </label>\n" +
        "         </fieldset>\n" +
        "      </fieldset>\n" +
        "      <label class=\"\">\n" +
        "         <span lang=\"\" class=\" active\">WEIGHT (KG)</span>\n" +
        "         <span lang=\"\" class=\"jr-hint active\">Patient's weight in kilograms.</span>\n" +
        "         <input autocomplete=\"off\" type=\"number\n" +
        "            \" name=\"/form/obs/weight_kg/value\" data-constraint=\". &gt;= 0.0 and . &lt;= 250.0\" data-type-xml=\"decimal\" step=\"any\"/>\n" +
        "      </label>\n" +
        "      <fieldset class=\"jr-group \">\n" +
        "         <h4>\n" +
        "            <span lang=\"\" class=\" active\">PROBLEM ADDED</span>\n" +
        "         </h4>\n" +
        "         <fieldset class=\"jr-repeat \" name=\"/form/problem_list/problem_added\">\n" +
        "            <label class=\"\">\n" +
        "               <span lang=\"\" class=\" active\">problem_added value</span>\n" +
        "               <span lang=\"\" class=\"jr-hint active\">Diagnosis or problem noted on a patient encounter.</span>\n" +
        "               <input autocomplete=\"off\" type=\"text\" name=\"/form/problem_list/problem_added/value\" data-type-xml=\"string\"/>\n" +
        "            </label>\n" +
        "            </fieldset>\n" +
        "         <!--end of repeat fieldset with name\n" +
        "            -->\n" +
        "            </fieldset>\n" +
        "      <!--end of group\n" +
        "            -->\n" +
        "    <fieldset class=\"jr-group \">\n" +
        "         <h4>\n" +
        "            <span lang=\"\" class=\" active\">PROBLEM RESOLVED</span>\n" +
        "         </h4>\n" +
        "         <fieldset class=\"jr-repeat \" name=\"/form/problem_list/problem_resolved\">\n" +
        "            <label class=\"\">\n" +
        "               <span lang=\"\" class=\" active\">problem_resolved value</span>\n" +
        "               <span lang=\"\" class=\"jr-hint active\">Diagnosis or problem noted on a patient encounter as being resolved.</span>\n" +
        "               <input autocomplete=\"off\" type=\"text\" name=\"/form/problem_list/problem_resolved/value\" data-type-xml=\"string\"/>\n" +
        "            </label>\n" +
        "            </fieldset>\n" +
        "         <!--end of repeat fieldset with name\n" +
        "            -->\n" +
        "            </fieldset>\n" +
        "      <!--end of group\n" +
        "            -->\n" +
        "  \n" +
        "</form>";

}};
var ziggyFileLoader = ziggyFileLoader || {loadAppData: function (file) {
    if (file === "entity_relationship.json") return "[]";
    return "{\"form\":{\"fields\":[{\"name\":\"header\",\"bind\":\"\\/model\\/instance\\/form\\/header\"},{\"name\":\"enterer\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/enterer\"},{\"name\":\"date_entered\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/date_entered\"},{\"name\":\"session\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/session\"},{\"name\":\"uid\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/uid\"},{\"name\":\"patient\",\"bind\":\"\\/model\\/instance\\/form\\/patient\"},{\"name\":\"patient.birthdate\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.birthdate\"},{\"name\":\"patient.birthdate_estimated\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.birthdate_estimated\"},{\"name\":\"patient.family_name\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.family_name\"},{\"name\":\"patient.given_name\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.given_name\"},{\"name\":\"patient.medical_record_number\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.medical_record_number\"},{\"name\":\"patient.middle_name\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.middle_name\"},{\"name\":\"patient.patient_id\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.patient_id\"},{\"name\":\"patient.sex\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.sex\"},{\"name\":\"patient.tribe\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.tribe\"},{\"name\":\"patient_address.address1\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient_address.address1\"},{\"name\":\"patient_address.address2\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient_address.address2\"},{\"name\":\"encounter\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\"},{\"name\":\"encounter.encounter_datetime\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\\/encounter.encounter_datetime\"},{\"name\":\"encounter.location_id\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\\/encounter.location_id\"},{\"name\":\"encounter.provider_id\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\\/encounter.provider_id\"},{\"name\":\"obs\",\"bind\":\"\\/model\\/instance\\/form\\/obs\"},{\"name\":\"weight_kg\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\"},{\"name\":\"date\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\\/date\"},{\"name\":\"time\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\\/time\"},{\"name\":\"value\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\\/value\"},{\"name\":\"problem_list\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\"},{\"name\":\"problem_added\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\"},{\"name\":\"date\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\\/date\"},{\"name\":\"time\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\\/time\"},{\"name\":\"value\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\\/value\"},{\"name\":\"problem_resolved\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\"},{\"name\":\"date\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\\/date\"},{\"name\":\"time\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\\/time\"},{\"name\":\"value\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\\/value\"},{\"name\":\"other\",\"bind\":\"\\/model\\/instance\\/form\\/other\"}]}}";
}};

var formDataRepositoryContext = formDataRepositoryContext || {
    getFormPayload: function () {
        return "{\"form\":{\"fields\":[{\"name\":\"header\",\"bind\":\"\\/model\\/instance\\/form\\/header\", \"value\" : \"name\"},{\"name\":\"enterer\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/enterer\"},{\"name\":\"date_entered\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/date_entered\"},{\"name\":\"session\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/session\"},{\"name\":\"uid\",\"bind\":\"\\/model\\/instance\\/form\\/header\\/uid\"},{\"name\":\"patient\",\"bind\":\"\\/model\\/instance\\/form\\/patient\"},{\"name\":\"patient.birthdate\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.birthdate\"},{\"name\":\"patient.birthdate_estimated\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.birthdate_estimated\"},{\"name\":\"patient.family_name\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.family_name\"},{\"name\":\"patient.given_name\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.given_name\"},{\"name\":\"patient.medical_record_number\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.medical_record_number\"},{\"name\":\"patient.middle_name\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.middle_name\"},{\"name\":\"patient.patient_id\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.patient_id\", \"value\": 1234},{\"name\":\"patient.sex\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.sex\"},{\"name\":\"patient.tribe\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient.tribe\"},{\"name\":\"patient_address.address1\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient_address.address1\"},{\"name\":\"patient_address.address2\",\"bind\":\"\\/model\\/instance\\/form\\/patient\\/patient_address.address2\"},{\"name\":\"encounter\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\"},{\"name\":\"encounter.encounter_datetime\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\\/encounter.encounter_datetime\", \"value\": \"2013-08-13\"},{\"name\":\"encounter.location_id\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\\/encounter.location_id\"},{\"name\":\"encounter.provider_id\",\"bind\":\"\\/model\\/instance\\/form\\/encounter\\/encounter.provider_id\"},{\"name\":\"obs\",\"bind\":\"\\/model\\/instance\\/form\\/obs\"},{\"name\":\"weight_kg\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\"},{\"name\":\"date\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\\/date\"},{\"name\":\"time\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\\/time\"},{\"name\":\"value\",\"bind\":\"\\/model\\/instance\\/form\\/obs\\/weight_kg\\/value\"},{\"name\":\"problem_list\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\"},{\"name\":\"problem_added\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\"},{\"name\":\"date\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\\/date\"},{\"name\":\"time\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\\/time\"},{\"name\":\"value\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_added\\/value\"},{\"name\":\"problem_resolved\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\"},{\"name\":\"date\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\\/date\"},{\"name\":\"time\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\\/time\"},{\"name\":\"value\",\"bind\":\"\\/model\\/instance\\/form\\/problem_list\\/problem_resolved\\/value\"},{\"name\":\"other\",\"bind\":\"\\/model\\/instance\\/form\\/other\"}]}}";
    },
    saveFormSubmission : function(data){
        console.log(JSON.stringify(data));
    }

}