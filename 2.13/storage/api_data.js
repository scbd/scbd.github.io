define({ "api": [
{
    "type": "put",
    "url": "documents/x/validate?schema=authority",
    "title": "Document Validation",
    "group": "Document_Validations",
    "version": "2.13.0",
    "name": "validate",
    "description": "<p>General validation errors</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-validation.cs",
    "groupTitle": "Document_Validations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Specify the document common-format posted (type / schema)</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Document metadata to use to determine security access. <em>List of parameters may vary depending of the type of document.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ISO 3166-1 alpha-2\""
            ],
            "optional": true,
            "field": "metadata.government",
            "description": "<p>Government code to which the record should belong. <em>For national record only</em></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "metadata",
          "content": "PUT /api/v2013/documents/x/validate?schema=authority&metadata={ \"government\" : \"ca\" }\n",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
           {
             "group": "Success",
             "type": "<p>String</p> ",
             "optional": false,
             "field": "identifier",
             "description": "<p>Document identifier</p> "
           },
           {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Specify the document common-format posted (type / schema)</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "field": "metadata",
            "description": "<p>Document metadata to use to determine security access. <em>List of parameters may vary depending of the type of document.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "field": "metadata.government",
            "description": "<p>Government code to which the record should belong. <em>For national record only</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "field": "title",
            "description": "<p>Document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "field": "summary",
            "description": "<p>Document summary</p> "
          },
          {
            "group": "Success",
            "field": "",
            "description": "<p>If the document passes the validations the error field will not be there in the result.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "field": "errors",
            "description": "<p>Error list from validation</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_MANTATORY",
            "field": "Error.Mandatory",
            "description": "<p>The field is mandatory.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_HAS_VALUE",
            "field": "Error.HasValue",
            "description": "<p>The field exists, however the field cannot contain value at this point.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_HAS_EMPTY_VALUE",
            "field": "Error.EmptyValue",
            "description": "<p>The field cannot be a empty string.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_INVALID_VALUE",
            "field": "Error.InvalidValue",
            "description": "<p>The field contains a unsupported value.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_INVALID_PROPERTY",
            "field": "Error.InvalidProperty",
            "description": "<p>The provided field does not exists.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_INVALID_UNSPECIFIED_LOCALE",
            "field": "Error.EmptyValue",
            "description": "<p>The locale was not provided.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_INVALID_UNEXPECTED_TERM",
            "field": "Error.UnexpectedTerm",
            "description": "<p>The provide identifier does not exist, please validate that you are passing correct identifier from the list.</p> "
          },
          {
            "group": "Success",
            "optional": false,
            "type" :"ERROR_INVALID_TYPE",
            "field": "Error.InvalidType",
            "description": "<p>The field type is invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n \"identifier\"   :  \"EB4DAA23-1410-CC2A-23A6-AF7A8D02216B\",\n  \"schema\"      :  \"authority\",\n  \"locales\"     :  [\"en\"],\n  \"title\"       :  {\"en\":\"sdfdsf\"},\n  \"summary\"     :  {\"en\":\"sdfds\"},\n  \"metaData\"    :  {\"government\":\"ht\"}\n  \"errors\"      :  [\n    {\n      \"property\"   :  \"header.languages\",\n      \"code\"       :  \"Error.InvalidValue\",\n      \"parameters\" :  \"Invalid language de, supported languages are ar, en, es, fr, ru, zh\"\n    },\n    {\n      \"property\"   :  \"title\",\n      \"code\"       :  \"Error.Mandatory\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/{uid}/securities/create",
    "title": "Can Create",
    "group": "Document_Securities",
    "version": "2.13.0",
    "name": "canCreate",
    "description": "<p>Tells if a document can be create bases on supplied metadata</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-security.cs",
    "groupTitle": "Document_Securities",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Specify the document common-format posted (type / schema)</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Document metadata to use to determine security access. <em>List of parameters may vary depending of the type of document.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ISO 3166-1 alpha-2\""
            ],
            "optional": true,
            "field": "metadata.government",
            "description": "<p>Government code to which the record should belong. <em>For national record only</em></p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "metadata",
          "content": "GET /api/v2013/documents/xyz/securities/create?schema=authority&metadata={ \"government\" : \"ca\" }\n\nGET /api/v2013/documents/xyz/versions/draft/securities/update?metadata={ \"government\" : \"ca\" }",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isAllowed",
            "description": "<p>Tells if user can performe the operation with a document containing the provided metadata</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"isAllowed\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/{uid}/securities/delete",
    "title": "Can Delete",
    "group": "Document_Securities",
    "version": "2.13.0",
    "name": "canDelete",
    "description": "<p>Tells if a document can be deleted</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-security.cs",
    "groupTitle": "Document_Securities",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isAllowed",
            "description": "<p>Tells if user can performe the operation with a document containing the provided metadata</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"isAllowed\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/{uid}/securities/update",
    "title": "Can Update",
    "group": "Document_Securities",
    "version": "2.13.0",
    "name": "canUpdate",
    "description": "<p>Tells if a document can be updated bases on supplied metadata</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-security.cs",
    "groupTitle": "Document_Securities",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Document metadata to use to determine security access. <em>List of parameters may vary depending of the type of document.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ISO 3166-1 alpha-2\""
            ],
            "optional": true,
            "field": "metadata.government",
            "description": "<p>Government code to which the record should belong. <em>For national record only</em></p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "metadata",
          "content": "GET /api/v2013/documents/xyz/securities/create?schema=authority&metadata={ \"government\" : \"ca\" }\n\nGET /api/v2013/documents/xyz/versions/draft/securities/update?metadata={ \"government\" : \"ca\" }",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isAllowed",
            "description": "<p>Tells if user can performe the operation with a document containing the provided metadata</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"isAllowed\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "head",
    "url": "documents/:uid/attachments/:filename",
    "title": "Exists",
    "group": "Documents_Attachments",
    "version": "2.13.0",
    "name": "exists",
    "description": "<p>Tells if a document attchment exists.</p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      },
      {
        "name": "everyone_public",
        "title": "Everyone access for public record",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "404"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Tells if the document exists</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Exists - 200",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Not Exists - 404",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-attachments.cs",
    "groupTitle": "Documents_Attachments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/attachments/:filename",
    "title": "Get",
    "group": "Documents_Attachments",
    "version": "2.13.0",
    "name": "get",
    "description": "<p>Get documents attachment data or a redirecton to it.</p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      },
      {
        "name": "everyone_public",
        "title": "Everyone access for public record",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "302"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p><code>200</code> - Raw data of the attachment.<br> <code>302</code> - A redirecton where to find the resource.</p> "
          },
          {
            "group": "Success",
            "type": "<p>Data</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>Raw data of the attachment is sent in it's original format Content-Type (Content-Type; CharSet;). HTTP-<code>200</code> only</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/pdf;\n\nRAW-DATA ...",
          "type": "Data"
        },
        {
          "title": "Found - 302",
          "content": "HTTP/1.1 302 Found\nLocation: https://files.cbd.int/path/to/resource.pdf",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-attachments.cs",
    "groupTitle": "Documents_Attachments",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/attachments/:filename/thumbnail",
    "title": "Get Thumbnail",
    "group": "Documents_Attachments",
    "version": "2.13.0",
    "name": "getThumbnail",
    "description": "<p>Get documents attachment thumbnail or a redirecton to it. <em>only for images</em></p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      },
      {
        "name": "everyone_public",
        "title": "Everyone access for public record",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "302"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p><code>200</code> - Raw data of the attachment thumbnail.<br> <code>302</code> - A redirecton where to find the resource.</p> "
          },
          {
            "group": "Success",
            "type": "<p>Data</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>Raw data of the attachment thumbnail is sent. HTTP-<code>200</code> only</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200",
          "content": "HTTP/1.1 200 OK\nContent-Type : image/jpeg;\n\nRAW-DATA ...",
          "type": "Data"
        },
        {
          "title": "Found - 302",
          "content": "HTTP/1.1 302 Found\nLocation: https://files.cbd.int/path/to/resource-thumbnail.jpg",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-attachments.cs",
    "groupTitle": "Documents_Attachments",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/attachments",
    "title": "List",
    "group": "Documents_Attachments",
    "version": "2.13.0",
    "name": "list",
    "description": "<p>Load lists of document/drafts attachements.</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Count",
            "description": "<p>Number of documents found</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "Items",
            "description": "<p>Array of Document-Attachments-Info object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"Count\" : 12,\n    \"Items\" : [\n        {   \"attachmentID\" : 123456,\n            \"documentID\"   : 789123,\n            \"documentUID\"  : \"012345abcf\",\n            \"filename\"     : \"report.pdf\",\n            \"isPublic\"     : \"isPublic\",\n            \"mediaType\"    : \"application/pdf\",\n            \"size\"         : 1234,\n            \"createdOn\"     : \"2013-10-01T22:08:17.073Z\",\n            \"createdBy\"     : {\n                \"userID\"    : 123,\n                \"firstName\" : \"John\",\n                \"lastName\"  : \"Smith\",\n                \"email\"     : \"fake.john.smith@cbd.int\"\n            }\n            \"submittedOn\"   : \"2013-10-01T22:08:17.073Z\",\n            \"submittedBy\"   : {\n                \"userID\"    : 123,\n                \"firstName\" : \"John\",\n                \"lastName\"  : \"Smith\",\n                \"email\"     : \"fake.john.smith@cbd.int\"\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-attachments.cs",
    "groupTitle": "Documents_Attachments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [          
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "filter",
            "description": "<p>The <code>$filter</code> system query option allows clients to filter a collection of resources. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398094\">OData $filter</a> <br><br>Use <code>$filter</code> instead of <strong>filter</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "orderby",
            "description": "<p>The <code>$orderby</code> system query option allows clients to request resources in a particular order. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398164\">OData $orderby</a> <br><br>Use <code>$orderby</code> instead of <strong>orderby</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "top",
            "description": "<p>The <code>$top</code> system query option requests the number of items in the queried collection to be included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $top</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$top</code> instead of <strong>top</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "skip",
            "description": "<p>The <code>$skip</code> query option requests the number of items in the queried collection that are to be skipped and not included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $skip</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$skip</code> instead of <strong>skip</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "$filter",
          "content": "GET /api/v2013/documents?$filter=type+eq+'resource'\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$orderby",
          "content": "GET /api/v2013/documents?$orderby=type desc,title/en asc\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abcd\", \"type\" : \"absPermit\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$top",
          "content": "GET /api/v2013/documents?$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        },
        {
          "title": "$skip",
          "content": "GET /api/v2013/documents?$skip=6&$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "documents/:uid/attachments/:filename",
    "title": "Update",
    "group": "Documents_Attachments",
    "version": "2.13.0",
    "name": "update",
    "description": "<p>Publish an update to a documents.</p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Uploaded</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "attachmentID",
            "description": "<p>ID of the attchment</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "documentUID",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isPublic",
            "description": "<p>Tell is the document is public</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Attachment content-type (eg: <code>application/pdf</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "charset",
            "description": "<p>Attachment submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Attachment submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "submittedOn",
            "description": "<p>Date &amp; time of submission (as been published)</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "submittedBy",
            "description": "<p>Submitter identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "submittedBy.userID",
            "description": "<p>Submitter Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "submittedBy.firstName",
            "description": "<p>Submitter First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "submittedBy.lastName",
            "description": "<p>Submitter Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "submittedBy.email",
            "description": "<p>Submitter Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"attachmentID\" : 0,\n    \"documentID\"   : 789123,\n    \"documentUID\"  : \"012345abcf\",\n    \"filename\"     : \"report.pdf\",\n    \"isPublic\"     : \"isPublic\",\n    \"mediaType\"    : \"application/pdf\",\n    \"size\"         : 1234,\n    \"createdOn\"     : \"2013-10-01T22:08:17.073Z\",\n    \"createdBy\"     : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-attachments.cs",
    "groupTitle": "Documents_Attachments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "head",
    "url": "documents/:uid/versions/:revision",
    "title": "Exists",
    "group": "Documents_Versions",
    "version": "2.13.0",
    "name": "exists",
    "description": "<p>Tells if a document revision has been published.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "404"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Tells if the document exists</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Exists - 200",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/json; charset=utf-8; schema=resource",
          "type": "json"
        },
        {
          "title": "Not Exists - 404",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents-versions.cs",
    "groupTitle": "Documents_Versions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "1+"
            ],
            "optional": false,
            "field": "revision",
            "description": "<p>Revision number of the document</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions/:revision",
    "title": "Get",
    "group": "Documents_Versions",
    "version": "2.13.0",
    "name": "get",
    "description": "<p>Load document revision data in raw format.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"*\"",
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format. <br><code>*</code> = Raw data as submitted, <br><code>application/json</code> = Try to cast result to the <em>JSON</em> format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Accept Header",
          "content": "Accept: *",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Data</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>Raw data of the object sent in it's original format Content-Type (Content-Type; CharSet; schema=name).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/json; charset=utf-8; schema=resource\n\nRAW-DATA ...",
          "type": "Data"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents-versions.cs",
    "groupTitle": "Documents_Versions",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "1+"
            ],
            "optional": false,
            "field": "revision",
            "description": "<p>Revision number of the document</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions/:revision/info",
    "title": "Get Info",
    "group": "Documents_Versions",
    "version": "2.13.0",
    "name": "getInfo",
    "description": "<p>Load document revision metadata.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-documents-versions.cs",
    "groupTitle": "Documents_Versions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "1+"
            ],
            "optional": false,
            "field": "revision",
            "description": "<p>Revision number of the document</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "identifier",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Record schema name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>Record owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "revision",
            "description": "<p>Updated revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latestRevision",
            "description": "<p>Latest revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "realm",
            "description": "<p>Document realm</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Document submission content-type (eg: <code>application/json</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "charset",
            "description": "<p>Document submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Document submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "summary",
            "description": "<p>Computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Computed document metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "body",
            "description": "<p>Document data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>Date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Updator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedBy.userID",
            "description": "<p>Updator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.firstName",
            "description": "<p>Updator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.lastName",
            "description": "<p>Updator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.email",
            "description": "<p>Updator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "deletedOn",
            "description": "<p>Date &amp; time of deletion</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "deletedBy",
            "description": "<p>Deleted by identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "deletedBy.userID",
            "description": "<p>Deleted by Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deletedBy.firstName",
            "description": "<p>Deleted by First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deletedBy.lastName",
            "description": "<p>Deleted by Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deletedBy.email",
            "description": "<p>Deleted by Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentID",
            "description": "<p>Draft internal id</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentSize",
            "description": "<p>Draft size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentOwner",
            "description": "<p>Draft owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentTitle",
            "description": "<p>Draft computed title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentSummary",
            "description": "<p>Draft computed summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentMetadata",
            "description": "<p>Draft computed metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "workingDocumentBody",
            "description": "<p>Draft data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentLock",
            "description": "<p>Draft current locks</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentCreatedOn",
            "description": "<p>Draft date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy",
            "description": "<p>Draft identity of the creator</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.userID",
            "description": "<p>Draft Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.firstName",
            "description": "<p>Draft Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.lastName",
            "description": "<p>Draft Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.email",
            "description": "<p>Draft Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedOn",
            "description": "<p>Draft date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy",
            "description": "<p>Draft Updater identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.userID",
            "description": "<p>Draft Updater Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.firstName",
            "description": "<p>Draft Updater First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.lastName",
            "description": "<p>Draft Updater Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.email",
            "description": "<p>Draft Updater Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK / 201 Created\n\n{\n    \"identifier\"  : \"abcdefgh-123\",\n    \"documentID\"  : 12345,\n    \"type\"        : \"organization\",\n    \"owner\"       : \"user:123\",\n    \"revision\"    : 3,\n    \"size\"        : 1234,\n    \"realm\"       : \"CHM\",\n    \"mediaType\"   : \"application/json\"\n    \"charset\"     : \"utf-8\",\n    \"title\" : {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"summary\" : {\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n    \"createdOn\"   : \"2013-04-08T19:44:04.943Z\",\n    \"createdBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"updatedOn\"   : \"2013-10-01T22:08:17.073Z\",\n    \"updatedBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions",
    "title": "List",
    "group": "Documents_Versions",
    "version": "2.13.0",
    "name": "list",
    "description": "<p>Load revisions of documents.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Count",
            "description": "<p>Number of documents found</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "Items",
            "description": "<p>Array of Document-Info object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"Count\" : 3,\n    \"Items\" : [\n        { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", \"revision\" : 3 ... },\n        { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", \"revision\" : 2 ... },\n        { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", \"revision\" : 1 ... }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents-versions.cs",
    "groupTitle": "Documents_Versions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "filter",
            "description": "<p>The <code>$filter</code> system query option allows clients to filter a collection of resources. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398094\">OData $filter</a> <br><br>Use <code>$filter</code> instead of <strong>filter</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "orderby",
            "description": "<p>The <code>$orderby</code> system query option allows clients to request resources in a particular order. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398164\">OData $orderby</a> <br><br>Use <code>$orderby</code> instead of <strong>orderby</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "top",
            "description": "<p>The <code>$top</code> system query option requests the number of items in the queried collection to be included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $top</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$top</code> instead of <strong>top</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "skip",
            "description": "<p>The <code>$skip</code> query option requests the number of items in the queried collection that are to be skipped and not included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $skip</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$skip</code> instead of <strong>skip</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "$filter",
          "content": "GET /api/v2013/documents?$filter=type+eq+'resource'\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$orderby",
          "content": "GET /api/v2013/documents?$orderby=type desc,title/en asc\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abcd\", \"type\" : \"absPermit\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$top",
          "content": "GET /api/v2013/documents?$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        },
        {
          "title": "$skip",
          "content": "GET /api/v2013/documents?$skip=6&$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "documents",
    "title": "Create",
    "group": "Documents",
    "version": "2.13.0",
    "name": "create",
    "description": "<p>Publish a new documents.</p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Raw document format mediaType. <em>May vary depending of the document type</em></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "201"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Created.</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "identifier",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Record schema name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>Record owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "revision",
            "description": "<p>Updated revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "realm",
            "description": "<p>Document realm</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Document submission content-type (eg: <code>application/json</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "charset",
            "description": "<p>Document submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Document submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "summary",
            "description": "<p>Computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Computed document metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "body",
            "description": "<p>Document data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>Date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Updator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedBy.userID",
            "description": "<p>Updator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.firstName",
            "description": "<p>Updator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.lastName",
            "description": "<p>Updator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.email",
            "description": "<p>Updator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentID",
            "description": "<p>Draft internal id</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentSize",
            "description": "<p>Draft size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentOwner",
            "description": "<p>Draft owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentTitle",
            "description": "<p>Draft computed title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentSummary",
            "description": "<p>Draft computed summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentMetadata",
            "description": "<p>Draft computed metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "workingDocumentBody",
            "description": "<p>Draft data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentLock",
            "description": "<p>Draft current locks</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentCreatedOn",
            "description": "<p>Draft date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy",
            "description": "<p>Draft identity of the creator</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.userID",
            "description": "<p>Draft Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.firstName",
            "description": "<p>Draft Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.lastName",
            "description": "<p>Draft Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.email",
            "description": "<p>Draft Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedOn",
            "description": "<p>Draft date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy",
            "description": "<p>Draft Updater identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.userID",
            "description": "<p>Draft Updater Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.firstName",
            "description": "<p>Draft Updater First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.lastName",
            "description": "<p>Draft Updater Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.email",
            "description": "<p>Draft Updater Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK / 201 Created\n\n{\n    \"identifier\"  : \"abcdefgh-123\",\n    \"documentID\"  : 12345,\n    \"type\"        : \"organization\",\n    \"owner\"       : \"user:123\",\n    \"revision\"    : 3,\n    \"size\"        : 1234,\n    \"realm\"       : \"CHM\",\n    \"mediaType\"   : \"application/json\"\n    \"charset\"     : \"utf-8\",\n    \"title\" : {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"summary\" : {\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n    \"createdOn\"   : \"2013-04-08T19:44:04.943Z\",\n    \"createdBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"updatedOn\"   : \"2013-10-01T22:08:17.073Z\",\n    \"updatedBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Specify the document common-format posted (type / schema)</p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "documents/:uid",
    "title": "Delete",
    "group": "Documents",
    "version": "2.13.0",
    "name": "delete",
    "description": "<p>Unpublish a documents.</p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Success. No body is provided</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "head",
    "url": "documents/:uid",
    "title": "Exists",
    "group": "Documents",
    "version": "2.13.0",
    "name": "exists",
    "description": "<p>Tells if a document is published.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "404"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Tells if the document exists</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Exists - 200",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/json; charset=utf-8; schema=resource",
          "type": "json"
        },
        {
          "title": "Not Exists - 404",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid",
    "title": "Get",
    "group": "Documents",
    "version": "2.13.0",
    "name": "get",
    "description": "<p>Load documents data in raw format.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"*\"",
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format. <br><code>*</code> = Raw data as submitted, <br><code>application/json</code> = Try to cast result to the <em>JSON</em> format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Accept Header",
          "content": "Accept: *",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Data</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>Raw data of the object sent in it's original format Content-Type (Content-Type; CharSet; schema=name).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/json; charset=utf-8; schema=resource\n\nRAW-DATA ...",
          "type": "Data"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/info",
    "title": "Get Info",
    "group": "Documents",
    "version": "2.13.0",
    "name": "getInfo",
    "description": "<p>Load a Clearing-House documents metadata.</p> ",
    "permission": [
      {
        "name": "everyone",
        "title": "Everyone access",
        "description": "<p>Authenticated and Unauthenticated users can access / perform this operation</p> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "identifier",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Record schema name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>Record owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "revision",
            "description": "<p>Updated revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latestRevision",
            "description": "<p>Latest revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "realm",
            "description": "<p>Document realm</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Document submission content-type (eg: <code>application/json</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "charset",
            "description": "<p>Document submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Document submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "summary",
            "description": "<p>Computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Computed document metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "body",
            "description": "<p>Document data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>Date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Updator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedBy.userID",
            "description": "<p>Updator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.firstName",
            "description": "<p>Updator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.lastName",
            "description": "<p>Updator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.email",
            "description": "<p>Updator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "deletedOn",
            "description": "<p>Date &amp; time of deletion</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "deletedBy",
            "description": "<p>Deleted by identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "deletedBy.userID",
            "description": "<p>Deleted by Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deletedBy.firstName",
            "description": "<p>Deleted by First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deletedBy.lastName",
            "description": "<p>Deleted by Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "deletedBy.email",
            "description": "<p>Deleted by Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentID",
            "description": "<p>Draft internal id</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentSize",
            "description": "<p>Draft size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentOwner",
            "description": "<p>Draft owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentTitle",
            "description": "<p>Draft computed title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentSummary",
            "description": "<p>Draft computed summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentMetadata",
            "description": "<p>Draft computed metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "workingDocumentBody",
            "description": "<p>Draft data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentLock",
            "description": "<p>Draft current locks</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentCreatedOn",
            "description": "<p>Draft date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy",
            "description": "<p>Draft identity of the creator</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.userID",
            "description": "<p>Draft Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.firstName",
            "description": "<p>Draft Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.lastName",
            "description": "<p>Draft Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.email",
            "description": "<p>Draft Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedOn",
            "description": "<p>Draft date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy",
            "description": "<p>Draft Updater identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.userID",
            "description": "<p>Draft Updater Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.firstName",
            "description": "<p>Draft Updater First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.lastName",
            "description": "<p>Draft Updater Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.email",
            "description": "<p>Draft Updater Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK / 201 Created\n\n{\n    \"identifier\"  : \"abcdefgh-123\",\n    \"documentID\"  : 12345,\n    \"type\"        : \"organization\",\n    \"owner\"       : \"user:123\",\n    \"revision\"    : 3,\n    \"size\"        : 1234,\n    \"realm\"       : \"CHM\",\n    \"mediaType\"   : \"application/json\"\n    \"charset\"     : \"utf-8\",\n    \"title\" : {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"summary\" : {\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n    \"createdOn\"   : \"2013-04-08T19:44:04.943Z\",\n    \"createdBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"updatedOn\"   : \"2013-10-01T22:08:17.073Z\",\n    \"updatedBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents",
    "title": "List",
    "group": "Documents",
    "version": "2.13.0",
    "name": "list",
    "description": "<p>Load a collection of documents info.</p> ",
    "permission": [
      {
        "name": "users",
        "title": "Registered user access",
        "description": "<p>Authenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Count",
            "description": "<p>Number of documents found</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "Items",
            "description": "<p>Array of Document-Info object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"Count\" : 12,\n    \"Items\" : [\n        { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n        { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n        { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "collection",
            "description": "<p>The <code>collection</code> system query option allows clients to filter a collection of resources. </p> <br><br> Allowed values: <code>my</code>, <code>mydrafts</code> "
          },{
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "filter",
            "description": "<p>The <code>$filter</code> system query option allows clients to filter a collection of resources. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398094\">OData $filter</a> <br><br>Use <code>$filter</code> instead of <strong>filter</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "orderby",
            "description": "<p>The <code>$orderby</code> system query option allows clients to request resources in a particular order. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398164\">OData $orderby</a> <br><br>Use <code>$orderby</code> instead of <strong>orderby</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "top",
            "description": "<p>The <code>$top</code> system query option requests the number of items in the queried collection to be included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $top</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$top</code> instead of <strong>top</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "skip",
            "description": "<p>The <code>$skip</code> query option requests the number of items in the queried collection that are to be skipped and not included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $skip</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$skip</code> instead of <strong>skip</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "collection",
          "content": "GET /api/v2013/documents?collection=my\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\", ... },\n  ...\n]",
          "type": "http"
        },{
          "title": "$filter",
          "content": "GET /api/v2013/documents?$filter=type+eq+'resource'\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$orderby",
          "content": "GET /api/v2013/documents?$orderby=type desc,title/en asc\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abcd\", \"type\" : \"absPermit\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$top",
          "content": "GET /api/v2013/documents?$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        },
        {
          "title": "$skip",
          "content": "GET /api/v2013/documents?$skip=6&$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "documents/:uid",
    "title": "Update",
    "group": "Documents",
    "version": "2.13.0",
    "name": "update",
    "description": "<p>Publish an update to a documents.</p> ",
    "permission": [
      {
        "name": "administrators",
        "title": "System Administrators access",
        "description": "<p>An adminitrator can access / perform this operation</p> "
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Raw document format mediaType. <em>May vary depending of the document type</em></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Created.</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "identifier",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Record schema name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>Record owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "revision",
            "description": "<p>Updated revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "realm",
            "description": "<p>Document realm</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Document submission content-type (eg: <code>application/json</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "charset",
            "description": "<p>Document submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Document submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "summary",
            "description": "<p>Computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Computed document metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "body",
            "description": "<p>Document data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>Date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Updator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedBy.userID",
            "description": "<p>Updator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.firstName",
            "description": "<p>Updator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.lastName",
            "description": "<p>Updator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.email",
            "description": "<p>Updator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentID",
            "description": "<p>Draft internal id</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentSize",
            "description": "<p>Draft size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentOwner",
            "description": "<p>Draft owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentTitle",
            "description": "<p>Draft computed title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": true,
            "field": "workingDocumentSummary",
            "description": "<p>Draft computed summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentMetadata",
            "description": "<p>Draft computed metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "workingDocumentBody",
            "description": "<p>Draft data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentLock",
            "description": "<p>Draft current locks</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentCreatedOn",
            "description": "<p>Draft date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy",
            "description": "<p>Draft identity of the creator</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.userID",
            "description": "<p>Draft Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.firstName",
            "description": "<p>Draft Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.lastName",
            "description": "<p>Draft Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentCreatedBy.email",
            "description": "<p>Draft Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedOn",
            "description": "<p>Draft date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy",
            "description": "<p>Draft Updater identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.userID",
            "description": "<p>Draft Updater Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.firstName",
            "description": "<p>Draft Updater First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.lastName",
            "description": "<p>Draft Updater Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "workingDocumentUpdatedBy.email",
            "description": "<p>Draft Updater Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK / 201 Created\n\n{\n    \"identifier\"  : \"abcdefgh-123\",\n    \"documentID\"  : 12345,\n    \"type\"        : \"organization\",\n    \"owner\"       : \"user:123\",\n    \"revision\"    : 3,\n    \"size\"        : 1234,\n    \"realm\"       : \"CHM\",\n    \"mediaType\"   : \"application/json\"\n    \"charset\"     : \"utf-8\",\n    \"title\" : {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"summary\" : {\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n    \"createdOn\"   : \"2013-04-08T19:44:04.943Z\",\n    \"createdBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"updatedOn\"   : \"2013-10-01T22:08:17.073Z\",\n    \"updatedBy\"   : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-documents.cs",
    "groupTitle": "Documents",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/v2013/documents/:uid/versions/draft/locks/:lockID",
    "title": "Unlock",
    "group": "Draft_Locks",
    "version": "2.13.0",
    "name": "delete",
    "description": "<p>Unlock a draft</p> ",
    "permission": [
      {
        "name": "administrator"
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-drafts-locks.cs",
    "groupTitle": "Draft_Locks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "lockID",
            "description": "<p>Identifier that uniquely identify a lock.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Success. No body is provided</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "head",
    "url": "documents/:uid/versions/draft/locks/:lockID",
    "title": "Exists",
    "group": "Draft_Locks",
    "version": "2.13.0",
    "name": "exists",
    "description": "<p>Tells if a draft lock exists.</p> ",
    "permission": [
      {
        "name": "administrator"
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      },
      {
        "name": "self",
        "title": "User-Self access",
        "description": "<p>The user who own the record can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "404"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Tells if the document exists</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Exists - 200",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Not Exists - 404",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-drafts-locks.cs",
    "groupTitle": "Draft_Locks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "lockID",
            "description": "<p>Identifier that uniquely identify a lock.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions/draft/locks/:lockID",
    "title": "Get",
    "group": "Draft_Locks",
    "version": "2.13.0",
    "name": "get",
    "description": "<p>Get draft lock-info.</p> ",
    "permission": [
      {
        "name": "administrator"
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      },
      {
        "name": "self",
        "title": "User-Self access",
        "description": "<p>The user who own the record can access / perform this operation</p> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-drafts-locks.cs",
    "groupTitle": "Draft_Locks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "lockID",
            "description": "<p>Identifier that uniquely identify a lock.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockID",
            "description": "<p>LockID</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "lockedOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "lockedBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "lockedBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockedBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockedBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockedBy.email",
            "description": "<p>Creator Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"lockID\" : \"012345abcd\",\n    \"lockedOn\" : \"2013-10-01T22:08:17.073Z\",\n    \"lockedBy\" : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions/draft/locks",
    "title": "List",
    "group": "Draft_Locks",
    "version": "2.13.0",
    "name": "list",
    "description": "<p>Load list of locks on draft.</p> ",
    "permission": [
      {
        "name": "administrator"
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>Array of lock-info object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n[{\n    \"lockID\" : \"012345abcd\",\n    \"lockedOn\" : \"2013-10-01T22:08:17.073Z\",\n    \"lockedBy\" : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    }\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-drafts-locks.cs",
    "groupTitle": "Draft_Locks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": false,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v2013/documents/:uid/versions/draft/locks/:lockID",
    "title": "Lock",
    "group": "Draft_Locks",
    "version": "2.13.0",
    "name": "put",
    "description": "<p>Lock a draft using to a specific lockID</p> ",
    "permission": [
      {
        "name": "administrator"
      },
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-drafts-locks.cs",
    "groupTitle": "Draft_Locks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          },
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "lockID",
            "description": "<p>Identifier that uniquely identify a lock.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockID",
            "description": "<p>LockID</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "lockedOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "lockedBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "lockedBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockedBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockedBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lockedBy.email",
            "description": "<p>Creator Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"lockID\" : \"012345abcd\",\n    \"lockedOn\" : \"2013-10-01T22:08:17.073Z\",\n    \"lockedBy\" : {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/{uid}/versions/draft/securities/create",
    "title": "Can Create",
    "group": "Draft_Securities",
    "version": "2.13.0",
    "name": "canCreate",
    "description": "<p>Tells if a draft can be create bases on supplied metadata</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-security.cs",
    "groupTitle": "Draft_Securities",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "schema",
            "description": "<p>Specify the document common-format posted (type / schema). Can be omitted if a document already exists for the specified <code>uid</code></p> "
          },
          {
            "group": "Query String",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Document metadata to use to determine security access. <em>List of parameters may vary depending of the type of document.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ISO 3166-1 alpha-2\""
            ],
            "optional": true,
            "field": "metadata.government",
            "description": "<p>Government code to which the record should belong. <em>For national record only</em></p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "metadata",
          "content": "GET /api/v2013/documents/xyz/securities/create?schema=authority&metadata={ \"government\" : \"ca\" }\n\nGET /api/v2013/documents/xyz/versions/draft/securities/update?metadata={ \"government\" : \"ca\" }",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isAllowed",
            "description": "<p>Tells if user can performe the operation with a document containing the provided metadata</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"isAllowed\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/{uid}/versions/draft/securities/delete",
    "title": "Can Delete",
    "group": "Draft_Securities",
    "version": "2.13.0",
    "name": "canDelete",
    "description": "<p>Tells if a draft can be deleted</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-security.cs",
    "groupTitle": "Draft_Securities",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isAllowed",
            "description": "<p>Tells if user can performe the operation with a document containing the provided metadata</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"isAllowed\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/{uid}/versions/draft/securities/update",
    "title": "Can Update",
    "group": "Draft_Securities",
    "version": "2.13.0",
    "name": "canUpdate",
    "description": "<p>Tells if a draft can be updated bases on supplied metadata</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-security.cs",
    "groupTitle": "Draft_Securities",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Document metadata to use to determine security access. <em>List of parameters may vary depending of the type of document.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"ISO 3166-1 alpha-2\""
            ],
            "optional": true,
            "field": "metadata.government",
            "description": "<p>Government code to which the record should belong. <em>For national record only</em></p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "metadata",
          "content": "GET /api/v2013/documents/xyz/securities/create?schema=authority&metadata={ \"government\" : \"ca\" }\n\nGET /api/v2013/documents/xyz/versions/draft/securities/update?metadata={ \"government\" : \"ca\" }",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "isAllowed",
            "description": "<p>Tells if user can performe the operation with a document containing the provided metadata</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"isAllowed\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "mandatory",
            "description": "<p>One or more mandatory fields are missing</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Mandatory",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"mandatory\",\n  \"fields\"     : [\"fieldName1\", \"fieldName2\"]\n}",
          "type": "json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "documents/:uid/versions/draft",
    "title": "Delete",
    "group": "Drafts",
    "version": "2.13.0",
    "name": "delete",
    "description": "<p>Unpublish a documents.</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-drafts.cs",
    "groupTitle": "Drafts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Success. No body is provided</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "head",
    "url": "documents/:uid/versions/draft",
    "title": "Exists",
    "group": "Drafts",
    "version": "2.13.0",
    "name": "exists",
    "description": "<p>Tells if a document is published.</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "404"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Tells if the document exists</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Exists - 200",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/json; charset=utf-8; schema=resource",
          "type": "json"
        },
        {
          "title": "Not Exists - 404",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-drafts.cs",
    "groupTitle": "Drafts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions/draft",
    "title": "Get",
    "group": "Drafts",
    "version": "2.13.0",
    "name": "get",
    "description": "<p>Load documents data in raw format.</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"*\"",
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format. <br><code>*</code> = Raw data as submitted, <br><code>application/json</code> = Try to cast result to the <em>JSON</em> format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Accept Header",
          "content": "Accept: *",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Data</p> ",
            "optional": false,
            "field": "BODY",
            "description": "<p>Raw data of the object sent in it's original format Content-Type (Content-Type; CharSet; schema=name).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nContent-Type : application/json; charset=utf-8; schema=resource\n\nRAW-DATA ...",
          "type": "Data"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-drafts.cs",
    "groupTitle": "Drafts",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "documents/:uid/versions/draft/info",
    "title": "Get Info",
    "group": "Drafts",
    "version": "2.13.0",
    "name": "getInfo",
    "description": "<p>Load a Clearing-House documents metadata.</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "filename": "routes/2.13/km-clearinghouse/storage-drafts.cs",
    "groupTitle": "Drafts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "identifier",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Record schema name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>Record owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "revision",
            "description": "<p>Updated revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latestRevision",
            "description": "<p>Latest revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "realm",
            "description": "<p>Document realm</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Document submission content-type (eg: <code>application/json</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "charset",
            "description": "<p>Document submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Document submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "summary",
            "description": "<p>Computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Computed document metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "body",
            "description": "<p>Document data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>Date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Updator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedBy.userID",
            "description": "<p>Updator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.firstName",
            "description": "<p>Updator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.lastName",
            "description": "<p>Updator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.email",
            "description": "<p>Updator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentID",
            "description": "<p>Draft internal id</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentSize",
            "description": "<p>Draft size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentOwner",
            "description": "<p>Draft owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "workingDocumentTitle",
            "description": "<p>Draft computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "workingDocumentSummary",
            "description": "<p>Draft computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentMetadata",
            "description": "<p>Draft computed metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "workingDocumentBody",
            "description": "<p>Draft data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentLock",
            "description": "<p>Draft current locks</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "workingDocumentCreatedOn",
            "description": "<p>Draft date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy",
            "description": "<p>Draft identity of the creator</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.userID",
            "description": "<p>Draft Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.firstName",
            "description": "<p>Draft Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.lastName",
            "description": "<p>Draft Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.email",
            "description": "<p>Draft Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedOn",
            "description": "<p>Draft date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy",
            "description": "<p>Draft Updater identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.userID",
            "description": "<p>Draft Updater Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.firstName",
            "description": "<p>Draft Updater First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.lastName",
            "description": "<p>Draft Updater Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.email",
            "description": "<p>Draft Updater Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK / 201 Created\n\n{\n    \"identifier\" : \"abcdefgh-123\",\n    \"type\"       : \"organization\",\n    \"owner\"      : \"SCBD\",\n    \"revision\"   : 0,\n    \"size\"       : 0,\n    \"realm\"      : \"CHM\",\n    \"mediaType\"  : \"application/json\"\n    \"charset\"    : \"utf-8\",\n    \"title\" : {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"summary\" : {\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n    \"createdOn\": \"2014-11-07T19:42:51.43Z\",\n    \"createdBy\": {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"updatedOn\": \"2014-11-07T19:42:51.43Z\",\n    \"updatedBy\": {\n       \"userID\"    : 123,\n       \"firstName\" : \"John\",\n       \"lastName\"  : \"Smith\",\n       \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"workingDocumentID\": 987654,\n    \"workingDocumentCreatedOn\": \"2014-11-07T19:42:51.43Z\",\n    \"workingDocumentCreatedBy\": {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"workingDocumentUpdatedOn\": \"2014-11-07T19:42:51.43Z\",\n    \"workingDocumentUpdatedBy\": {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"workingDocumentSize\": 518,\n    \"workingDocumentOwner\": \"SCBD\",\n    \"workingDocumentTitle\": {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"workingDocumentSummary\": {},\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "notFound",
            "description": "<p>Record not found</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\" : 404,\n  \"code\"       : \"notFound\",\n  \"message\"    : \"Document not found\" // Optional\n}",
          "type": "Json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "document-drafts",
    "title": "List",
    "group": "Drafts",
    "version": "2.13.0",
    "name": "list",
    "description": "<p>Load a collection of documents drafts info.</p> ",
    "permission": [
      {
        "name": "users",
        "title": "Registered user access",
        "description": "<p>Authenticated users can access / perform this operation</p> "
      }
    ],
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Count",
            "description": "<p>Number of documents found</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "Items",
            "description": "<p>Array of Document-Info object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"Count\" : 12,\n    \"Items\" : [\n        { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n        { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n        { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-drafts.cs",
    "groupTitle": "Drafts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": false,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "collection",
            "description": "<p>The <code>collection</code> system query option allows clients to filter a collection of resources. </p> <br><br> Allowed values: <code>my</code>, <code>mydrafts</code> "
          },{
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "filter",
            "description": "<p>The <code>$filter</code> system query option allows clients to filter a collection of resources. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398094\">OData $filter</a> <br><br>Use <code>$filter</code> instead of <strong>filter</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "orderby",
            "description": "<p>The <code>$orderby</code> system query option allows clients to request resources in a particular order. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398164\">OData $orderby</a> <br><br>Use <code>$orderby</code> instead of <strong>orderby</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "top",
            "description": "<p>The <code>$top</code> system query option requests the number of items in the queried collection to be included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $top</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$top</code> instead of <strong>top</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          },
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "skip",
            "description": "<p>The <code>$skip</code> query option requests the number of items in the queried collection that are to be skipped and not included in the result. see: <a href=\"http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398165\">OData $skip</a> <br><br>A client can request a particular page of items by combining <code>$top</code> and <code>$skip</code>. <br><br>Use <code>$skip</code> instead of <strong>skip</strong>.<br><em>TODO: Update variable naming to support '$' in apidocjs.</em></p> "
          }
        ]
      },
      "examples": [
        {
          "title": "$filter",
          "content": "GET /api/v2013/documents?$filter=type+eq+'resource'\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\", ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$orderby",
          "content": "GET /api/v2013/documents?$orderby=type desc,title/en asc\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abce\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abcd\", \"type\" : \"absPermit\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "$top",
          "content": "GET /api/v2013/documents?$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        },
        {
          "title": "$skip",
          "content": "GET /api/v2013/documents?$skip=6&$top=3\n\nHTTP/1.1 200 OK\n[\n  { \"identifier\" : \"012345abcd\", \"type\" : \"resource\",  ... },\n  { \"identifier\" : \"012345abce\", \"type\" : \"absPermit\", ... },\n  { \"identifier\" : \"012345abcf\", \"type\" : \"absPermit\", ... }\n]",
          "type": "http"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "documents/:uid/versions/draft",
    "title": "Save",
    "group": "Drafts",
    "version": "2.13.0",
    "name": "update",
    "description": "<p>Publish an update to a documents.</p> ",
    "permission": [
      {
        "name": "variable",
        "title": "Registered user access",
        "description": "<p>Authenticated users may access / perform this operation but the access vary depending of:*</p> <ul> <li>the operation</li> <li>the resource</li> <li>the role(s) of the user</li> <li>government affiliation</li> <li>...</li> </ul> "
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Raw document format mediaType. <em>May vary depending of the document type</em></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><em>Token</em> to use to authenticate the request</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"ABS\"",
              "\"CHM\""
            ],
            "optional": true,
            "field": "Realm",
            "description": "<p><em>Context</em> in which the Clearing-House request is made.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Accept",
            "description": "<p>Result format.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header",
          "content": "Authorization: Token 01234567890ABCDEF001234567890ABCDEF0",
          "type": "http"
        },
        {
          "title": "Realm Header",
          "content": "Realm: ABS",
          "type": "http"
        },
        {
          "title": "Accept Header",
          "content": "Accept: application/json",
          "type": "http"
        }
      ]
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "200",
              "201"
            ],
            "optional": false,
            "field": "HTTP-STATUS-CODE",
            "description": "<p>Saved / Created.</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "identifier",
            "description": "<p>Document unique identifier</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "documentID",
            "description": "<p>Internal document id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Record schema name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>Record owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "revision",
            "description": "<p>Updated revision number</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "realm",
            "description": "<p>Document realm</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaType",
            "description": "<p>Document submission content-type (eg: <code>application/json</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "charset",
            "description": "<p>Document submission charset (eg: <code>utf-8</code>),</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Document submission size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "summary",
            "description": "<p>Computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "metadata",
            "description": "<p>Computed document metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "body",
            "description": "<p>Document data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Creator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdBy.userID",
            "description": "<p>Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.firstName",
            "description": "<p>Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.lastName",
            "description": "<p>Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdBy.email",
            "description": "<p>Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>Date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "updatedBy",
            "description": "<p>Updator identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedBy.userID",
            "description": "<p>Updator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.firstName",
            "description": "<p>Updator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.lastName",
            "description": "<p>Updator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedBy.email",
            "description": "<p>Updator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentID",
            "description": "<p>Draft internal id</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentSize",
            "description": "<p>Draft size in bytes</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentOwner",
            "description": "<p>Draft owner metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "workingDocumentTitle",
            "description": "<p>Draft computed document title</p> "
          },
          {
            "group": "Success",
            "type": "<p>Lstring</p> ",
            "optional": false,
            "field": "workingDocumentSummary",
            "description": "<p>Draft computed document summary</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentMetadata",
            "description": "<p>Draft computed metadata</p> "
          },
          {
            "group": "Success",
            "type": "<p>Variant</p> ",
            "optional": true,
            "field": "workingDocumentBody",
            "description": "<p>Draft data (if possible converted to object or string or raw). <em>Set only if explicitly requested.</em></p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "workingDocumentLock",
            "description": "<p>Draft current locks</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "workingDocumentCreatedOn",
            "description": "<p>Draft date &amp; time of creation</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy",
            "description": "<p>Draft identity of the creator</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.userID",
            "description": "<p>Draft Creator Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.firstName",
            "description": "<p>Draft Creator First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.lastName",
            "description": "<p>Draft Creator Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentCreatedBy.email",
            "description": "<p>Draft Creator Email</p> "
          },
          {
            "group": "Success",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedOn",
            "description": "<p>Draft date &amp; time of last update</p> "
          },
          {
            "group": "Success",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy",
            "description": "<p>Draft Updater identity</p> "
          },
          {
            "group": "Success",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.userID",
            "description": "<p>Draft Updater Id</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.firstName",
            "description": "<p>Draft Updater First Name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.lastName",
            "description": "<p>Draft Updater Last name</p> "
          },
          {
            "group": "Success",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "workingDocumentUpdatedBy.email",
            "description": "<p>Draft Updater Email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK / 201 Created\n\n{\n    \"identifier\" : \"abcdefgh-123\",\n    \"type\"       : \"organization\",\n    \"owner\"      : \"SCBD\",\n    \"revision\"   : 0,\n    \"size\"       : 0,\n    \"realm\"      : \"CHM\",\n    \"mediaType\"  : \"application/json\"\n    \"charset\"    : \"utf-8\",\n    \"title\" : {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"summary\" : {\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n    \"createdOn\": \"2014-11-07T19:42:51.43Z\",\n    \"createdBy\": {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"updatedOn\": \"2014-11-07T19:42:51.43Z\",\n    \"updatedBy\": {\n       \"userID\"    : 123,\n       \"firstName\" : \"John\",\n       \"lastName\"  : \"Smith\",\n       \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"workingDocumentID\": 987654,\n    \"workingDocumentCreatedOn\": \"2014-11-07T19:42:51.43Z\",\n    \"workingDocumentCreatedBy\": {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"workingDocumentUpdatedOn\": \"2014-11-07T19:42:51.43Z\",\n    \"workingDocumentUpdatedBy\": {\n        \"userID\"    : 123,\n        \"firstName\" : \"John\",\n        \"lastName\"  : \"Smith\",\n        \"email\"     : \"fake.john.smith@cbd.int\"\n    },\n    \"workingDocumentSize\": 518,\n    \"workingDocumentOwner\": \"SCBD\",\n    \"workingDocumentTitle\": {\n        \"en\" : \"Secretariat of the Convention on Biological Diversity (SCBD)\",\n        \"fr\" : \"Secrétariat de la Convention sur la diversité biologique (SCDB)\"\n    },\n    \"workingDocumentSummary\": {},\n        \"en\" : \"UN and other specialized agency of the UN Common System\",\n        \"es\" : \"Organismo de la ONU y otros organismos especializados del Sistema Común de la ONU\",\n        \"fr\" : \"Nations Unies et autres agences spécialisées du régime commun des Nations Unies\",\n        \"ar\" : \"وكالة من وكالات الأمم المتحدة ووكالات متخصصة أخرى في المنظومة العامة للأمم المتحدة\",\n        \"ru\" : \"ООН и другое специализированное учреждение общей системы ООН\",\n        \"zh\" : \"联合国和联合国共同制度的其他专门机构\"\n    }\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "routes/2.13/km-clearinghouse/storage-drafts.cs",
    "groupTitle": "Drafts",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Specify the document common-format posted (type / schema)</p> "
          }
        ],
        "Url Parameter": [
          {
            "group": "Url Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "/^[A-Za-z0-9\\-_]{11",
              "128}$/"
            ],
            "optional": false,
            "field": "uid",
            "description": "<p>identifier of the document. <strong><em>The value is case-sensitive</em></strong></p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "unauthorized",
            "description": "<p>Requires to authenticate the request using HTTP Header <code>Authorization</code> Token. The Authorization Token may be <em>missing</em>, <em>invalid</em>, <em>expired</em> ...</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "forbidden",
            "description": "<p>Operation or Access to the data is forbidden</p> "
          },
          {
            "group": "Error",
            "optional": false,
            "field": "invalidParameter",
            "description": "<p>One or more parameters values are invalid</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\" : 401,\n  \"code\"       : \"unauthorized\"\n}",
          "type": "Json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\" : 403,\n  \"code\"       : \"forbidden\"\n}",
          "type": "Json"
        },
        {
          "title": "Invalid Parameter",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\" : 400,\n  \"code\"       : \"invalidParameter\",\n  \"fields\"     : [\"date\"],\n  \"message\"    : \"Date format is invalid\" //Optional\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/mongolab-syntax.js",
    "group": "_Users_blaisefonseca_Projects_gaia_routes_mongolab_syntax_js",
    "groupTitle": "_Users_blaisefonseca_Projects_gaia_routes_mongolab_syntax_js",
    "name": "",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "<p>Json</p> ",
            "optional": true,
            "field": "q",
            "description": "<p>Query - restrict results by the specified JSON query</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "c",
            "defaultValue": "0",
            "description": "<p>Count - return the result count for this query</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Json</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "f",
            "description": "<p>Fields set - specify the set of fields to include or exclude in each document (1 - include; 0 - exclude)</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Boolean</p> ",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "fo",
            "defaultValue": "0",
            "description": "<p>Single Document - return a single document from the result set (return first object {} in the array [])</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Json</p> ",
            "allowedValues": [
              "1",
              "-1"
            ],
            "optional": true,
            "field": "s",
            "description": "<p>Sort Order - specify the order in which to sort each specified field (1- ascending; -1 - descending)</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0+"
            ],
            "optional": true,
            "field": "sk",
            "defaultValue": "0",
            "description": "<p>Results to skip - specify the number of results to skip in the result set; useful for paging</p> "
          },
          {
            "group": "Query String",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "0",
              "1+"
            ],
            "optional": true,
            "field": "l",
            "defaultValue": "0",
            "description": "<p>Limit - specify the limit for the number of results. <code>0</code> is unlimited</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Query",
          "content": "GET /api/v2015/users?q={ \"firstName\" : \"john\", \"lastName\" : \"smith\" }\n\nHTTP/1.1 200 OK\n[\n  { \"id\" : \"012345abcd\", ... },\n  { \"id\" : \"012345abce\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "Count",
          "content": "GET /api/v2015/users?c=1&q={ \"firstName\" : \"john\", \"lastName\" : \"smith\" }\n\nHTTP/1.1 200 OK\n{\n   \"count\" : 27\n}",
          "type": "http"
        },
        {
          "title": "Fields set",
          "content": "GET /api/v2015/users?q={ \"lastName\" : \"smith\" }&f={ \"email\" : 1,\"firstName\" : 1,\"lastName\" : 1}\n\nHTTP/1.1 200 OK\n[\n  { \"id\" : \"012345abcd\", \"email\" : \"fake1.smith@cbd.int\", \"firstName\" : \"fake1\", \"lastName\" : \"simth\" },\n  { \"id\" : \"012345abce\", \"email\" : \"fake2.smith@cbd.int\", \"firstName\" : \"fake2\", \"lastName\" : \"simth\" },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "Find One",
          "content": "GET /api/v2015/users?q={ \"lastName\" : \"smith\" }&fo=1\nHTTP/1.1 200 OK\n{\n  \"id\"        : \"012345abce\",\n  \"prefix\"    : \"Mr.\"\n  \"firstName\" : \"fake1\",\n  \"lastName\"  : \"simth\",\n  \"email\"     : \"fake1.smith@cbd.int\",\n  ...\n}",
          "type": "http"
        },
        {
          "title": "Sort",
          "content": "GET /api/v2015/users?q={ \"lastName\" : \"smith\" }&s={ \"id\" : -1 }&sk=100&l=100\n\nHTTP/1.1 200 OK\n[\n  { \"id\" : \"012345abce\", ... },\n  { \"id\" : \"012345abcd\", ... },\n  ...\n]",
          "type": "http"
        },
        {
          "title": "Skip",
          "content": "GET /api/v2015/users?sk=50&l=50&q={ \"lastName\" : \"smith\" }",
          "type": "http"
        },
        {
          "title": "Limit",
          "content": "GET /api/v2015/users?l=25&q={ \"lastName\" : \"smith\" }",
          "type": "http"
        }
      ]
    }
  }
] });
