Ext.data.JsonP.NGN_core_SmtpServer({"component":false,"html_meta":{"private":null},"tagname":"class","extends":"NGN.core.RemoteServer","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":false,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{"private":true},"members":{"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"autoRegister","id":"cfg-autoRegister"},{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"autoStart","id":"cfg-autoStart"},{"tagname":"cfg","owner":"NGN.core.RemoteServer","meta":{},"name":"host","id":"cfg-host"},{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"id","id":"cfg-id"},{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"port","id":"cfg-port"},{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"purpose","id":"cfg-purpose"},{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"syslog","id":"cfg-syslog"},{"tagname":"cfg","owner":"NGN.core.Server","meta":{},"name":"type","id":"cfg-type"}],"method":[{"tagname":"method","owner":"NGN.core.SmtpServer","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"addEventListeners","id":"method-addEventListeners"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"createRef","id":"method-createRef"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"emit","id":"method-emit"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireError","id":"method-fireError"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"on","id":"method-on"},{"tagname":"method","owner":"NGN.core.Server","meta":{},"name":"register","id":"method-register"}],"event":[{"tagname":"event","owner":"NGN.core.Server","meta":{},"name":"ready","id":"event-ready"},{"tagname":"event","owner":"NGN.core.Server","meta":{},"name":"start","id":"event-start"},{"tagname":"event","owner":"NGN.core.Server","meta":{},"name":"stop","id":"event-stop"}],"property":[{"tagname":"property","owner":"NGN.core","meta":{"protected":true},"name":"_emitter","id":"property-_emitter"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"NGN.core.Server","meta":{"readonly":true},"name":"running","id":"property-running"},{"tagname":"property","owner":"NGN.core.Server","meta":{},"name":"starting","id":"property-starting"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a><div class='subclass '><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='docClass'>NGN.core.Server</a><div class='subclass '><a href='#!/api/NGN.core.RemoteServer' rel='NGN.core.RemoteServer' class='docClass'>NGN.core.RemoteServer</a><div class='subclass '><strong>NGN.core.SmtpServer</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/SmtpServer.html#NGN-core-SmtpServer' target='_blank'>SmtpServer.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>A utility class for bidirectional communication as or with an SMTP server. Based on <a href=\"https://github.com/andris9/simplesmtp\">simplesmtp</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoRegister' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-autoRegister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-autoRegister' class='name not-expandable'>autoRegister</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'><p>Automatically register a helper reference to the server (available via <a href=\"#!/api/NGN-method-getServer\" rel=\"NGN-method-getServer\" class=\"docClass\">NGN.getServer</a> or NGN#getServers).</p>\n</div><div class='long'><p>Automatically register a helper reference to the server (available via <a href=\"#!/api/NGN-method-getServer\" rel=\"NGN-method-getServer\" class=\"docClass\">NGN.getServer</a> or NGN#getServers).</p>\n</div></div></div><div id='cfg-autoStart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-autoStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-autoStart' class='name expandable'>autoStart</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Automatically start the server. ...</div><div class='long'><p>Automatically start the server. If this is set to <code>false</code>, the\nserver will need to be running explicitly using the <a href=\"#!/api/NGN.core.Server-event-start\" rel=\"NGN.core.Server-event-start\" class=\"docClass\">start</a> method.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-host' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.RemoteServer' rel='NGN.core.RemoteServer' class='defined-in docClass'>NGN.core.RemoteServer</a><br/><a href='source/RemoteServer.html#NGN-core-RemoteServer-cfg-host' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.RemoteServer-cfg-host' class='name expandable'>host</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The host name or IP address of the remote server. ...</div><div class='long'><p>The host name or IP address of the remote server.</p>\n<p>Defaults to: <code>localhost</code></p></div></div></div><div id='cfg-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-id' class='name expandable'>id</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the server. ...</div><div class='long'><p>The name of the server. This can be referenced via <a href=\"#!/api/NGN.app.Application\" rel=\"NGN.app.Application\" class=\"docClass\">NGN.app.Application</a> (if used) or <a href=\"#!/api/NGN-method-getServer\" rel=\"NGN-method-getServer\" class=\"docClass\">NGN.getServer</a>.</p>\n</div></div></div><div id='cfg-port' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-port' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-port' class='name not-expandable'>port</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The port on which the server will listen/connect.</p>\n</div><div class='long'><p>The port on which the server will listen/connect.</p>\n</div></div></div><div id='cfg-purpose' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-purpose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-purpose' class='name expandable'>purpose</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The purpose of the server. ...</div><div class='long'><p>The purpose of the server. Typical values include:</p>\n\n<ul>\n<li>WWW</li>\n<li>REST</li>\n<li>API</li>\n<li>DATA</li>\n</ul>\n\n\n<p>Any value will work for this. This attribute acts as a \"tag\"\nto identify groups of servers that may serve similar purposes.</p>\n</div></div></div><div id='cfg-syslog' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-syslog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-syslog' class='name not-expandable'>syslog</a><span> : <a href=\"#!/api/NGN.util.Logger\" rel=\"NGN.util.Logger\" class=\"docClass\">NGN.util.Logger</a></span></div><div class='description'><div class='short'><p>Specify a logging utility to log server activity.</p>\n</div><div class='long'><p>Specify a logging utility to log server activity.</p>\n</div></div></div><div id='cfg-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-cfg-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of server. ...</div><div class='long'><p>The type of server. For example, <code>HTTP</code>, <code>DNS</code>, <code>FTP</code>, etc.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_emitter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-property-_emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-property-_emitter' class='name expandable'>_emitter</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>An event emitter for the class. ...</div><div class='long'><p>An event emitter for the class. Used internally.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-running' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-property-running' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-property-running' class='name expandable'>running</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'>Indicates the server is currently running. ...</div><div class='long'><p>Indicates the server is currently running.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-starting' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-property-starting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-property-starting' class='name expandable'>starting</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Indicates whether the server is in the process of starting. ...</div><div class='long'><p>Indicates whether the server is in the process of starting.</p>\n<p>Defaults to: <code>{value: false, enumerable: true, writable: true, configurable: true}</code></p></div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.core.SmtpServer'>NGN.core.SmtpServer</span><br/><a href='source/SmtpServer.html#NGN-core-SmtpServer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/NGN.core.SmtpServer-method-constructor' class='name expandable'>NGN.core.SmtpServer</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Create a new SMTP server. ...</div><div class='long'><p>Create a new SMTP server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/NGN.core.RemoteServer-method-constructor' rel='NGN.core.RemoteServer-method-constructor' class='docClass'>NGN.core.RemoteServer.constructor</a></p></div></div></div><div id='method-addEventListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRef' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-createRef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-createRef' class='name expandable'>createRef</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, Booean overwriteExisting</span> )</div><div class='description'><div class='short'>Creates a global variable. ...</div><div class='long'><p>Creates a global variable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The namespace to be created.</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object which is being referenced.</p>\n</div></li><li><span class='pre'>overwriteExisting</span> : Booean<div class='sub-desc'><p>Recreate the namespace using the new object.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the <a href=\"#!/api/NGN-property-BUS\" rel=\"NGN-property-BUS\" class=\"docClass\">NGN.BUS</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-register' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-method-register' class='name expandable'>register</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Registers the server within the application scope by creating a pointer to it. ...</div><div class='long'><p>Registers the server within the application scope by creating a pointer to it.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ready' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-event-ready' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-event-ready' class='name expandable'>ready</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the web server is ready to process reuests. ...</div><div class='long'><p>Fired when the web server is ready to process reuests.</p>\n</div></div></div><div id='event-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-event-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-event-start' class='name expandable'>start</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the web server begins the startup process. ...</div><div class='long'><p>Fired when the web server begins the startup process.</p>\n</div></div></div><div id='event-stop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core.Server' rel='NGN.core.Server' class='defined-in docClass'>NGN.core.Server</a><br/><a href='source/Server.html#NGN-core-Server-event-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core.Server-event-stop' class='name expandable'>stop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the server stops. ...</div><div class='long'><p>Fired when the server stops.</p>\n</div></div></div></div></div></div></div>","private":true,"name":"NGN.core.SmtpServer","aliases":{},"superclasses":["Class","NGN.core","NGN.core.Server","NGN.core.RemoteServer"],"requires":[],"id":"class-NGN.core.SmtpServer","subclasses":[],"files":[{"href":"SmtpServer.html#NGN-core-SmtpServer","filename":"SmtpServer.js"}]});