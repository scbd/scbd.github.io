define({
  "name": "SCBD API - Storage",
  "version": "2.13.0",
  "description": "SCBD API description",
  "title": "SCBD REST API - Storage",
  "header": {
    "title": "General Information",
    "content": "<h3>SCBD REST API <em>Draft</em> documentation</h3>\n<h3>Data types</h3>\n<h4>{LString}</h4>\n<p>Multilingual string. Json map. <code>{ &quot;lga&quot; : &quot;text in language A&quot;, &quot;lgb&quot; : &quot;text in language B&quot; }</code>. Language must match: <code>/^[a-z]{2,3}$/</code></p>\n<pre><code class=\"language-javascript\">{\n    &quot;en&quot; : &quot;Title&quot;,\n    &quot;fr&quot; : &quot;Titre&quot;,\n    &quot;es&quot; : &quot;...&quot;\n}\n</code></pre>\n<h4>Stared Functions *</h4>\n<p>Functions with star <code>*</code> at the end are currently <code>NOT IMPLEMENTED</code>.</p>\n"
  },
  "footer": {
    "title": "Additional information",
    "content": "<hr>\n<p><a href=\"http://www.cbd.int/terms\">Terms of use</a></p>\n<p>For help contact <a href=\"mailto:secretariat@cbd.int\">secretariat@cbd.int</a></p>\n<p>Copyright (c) 2001-2015, Secretariat of the Convention on Biological Diversity (SCBD)</p>\n"
  },
  "url": "/api/v2013/",
  "order": [
    "Document_Validations",
    "Documents",
    "Document_Securities",
    "Documents_Versions",
    "Documents_Attachments",
    "Drafts",
    "Draft_Securities",
    "Draft_Locks"
  ],
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2015-08-31T13:29:24.715Z",
    "url": "http://apidocjs.com",
    "version": "0.13.1"
  }
});