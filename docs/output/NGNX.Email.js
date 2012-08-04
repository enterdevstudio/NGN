Ext.data.JsonP.NGNX_Email({"component":false,"html_meta":{"docauthor":null},"tagname":"class","extends":"NGN.core","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":false,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[{"tagname":"property","owner":"NGNX.Email","meta":{"static":true,"readonly":true,"private":true},"name":"_emailRegex","id":"static-property-_emailRegex"}],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{"docauthor":["Corey Butler"]},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"NGNX.Email","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"addEventListeners","id":"method-addEventListeners"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"createRef","id":"method-createRef"},{"tagname":"method","owner":"NGNX.Email","meta":{},"name":"createValidationCode","id":"method-createValidationCode"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"emit","id":"method-emit"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireError","id":"method-fireError"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"on","id":"method-on"}],"event":[],"property":[{"tagname":"property","owner":"NGN.core","meta":{"protected":true},"name":"_emitter","id":"property-_emitter"},{"tagname":"property","owner":"NGNX.Email","meta":{},"name":"address","id":"property-address"},{"tagname":"property","owner":"NGNX.Email","meta":{"readonly":true},"name":"isValidSyntax","id":"property-isValidSyntax"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"},{"tagname":"property","owner":"NGNX.Email","meta":{"readonly":true},"name":"validationCode","id":"property-validationCode"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a><div class='subclass '><strong>NGNX.Email</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Email.html#NGNX-Email' target='_blank'>Email.js</a></div></pre><div class='doc-contents'><p>Represents an email address and provides helper methods for managing it, such as\nsyntax validation.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-_emitter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-property-_emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-property-_emitter' class='name expandable'>_emitter</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>An event emitter for the class. ...</div><div class='long'><p>An event emitter for the class. Used internally.</p>\n</div></div></div><div id='property-address' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGNX.Email'>NGNX.Email</span><br/><a href='source/Email.html#NGNX-Email-property-address' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Email-property-address' class='name expandable'>address</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The email address (i.e. ...</div><div class='long'><p>The email address (i.e. me@domain.com);\n@required</p>\n</div></div></div><div id='property-isValidSyntax' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGNX.Email'>NGNX.Email</span><br/><a href='source/Email.html#NGNX-Email-property-isValidSyntax' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Email-property-isValidSyntax' class='name not-expandable'>isValidSyntax</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div><div id='property-validationCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGNX.Email'>NGNX.Email</span><br/><a href='source/Email.html#NGNX-Email-property-validationCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Email-property-validationCode' class='name expandable'>validationCode</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'>The validation code assigned to this email address ...</div><div class='long'><p>The validation code assigned to this email address</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-_emailRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGNX.Email'>NGNX.Email</span><br/><a href='source/Email.html#NGNX-Email-static-property-_emailRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Email-static-property-_emailRegex' class='name expandable'>_emailRegex</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature'>private</strong><strong class='readonly signature'>readonly</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>The RegExp pattern that complies with RFC 2822. ...</div><div class='long'><p>The RegExp pattern that complies with <a href=\"http://www.faqs.org/rfcs/rfc2822.html\">RFC 2822</a>.</p>\n<p>Defaults to: <code>/(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|&quot;(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGNX.Email'>NGNX.Email</span><br/><a href='source/Email.html#NGNX-Email-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/NGNX.Email-method-constructor' class='name expandable'>NGNX.Email</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEventListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRef' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-createRef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-createRef' class='name expandable'>createRef</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, Booean overwriteExisting</span> )</div><div class='description'><div class='short'>Creates a global variable. ...</div><div class='long'><p>Creates a global variable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The namespace to be created.</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object which is being referenced.</p>\n</div></li><li><span class='pre'>overwriteExisting</span> : Booean<div class='sub-desc'><p>Recreate the namespace using the new object.</p>\n</div></li></ul></div></div></div><div id='method-createValidationCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGNX.Email'>NGNX.Email</span><br/><a href='source/Email.html#NGNX-Email-method-createValidationCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGNX.Email-method-createValidationCode' class='name expandable'>createValidationCode</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Generates a validation code. ...</div><div class='long'><p>Generates a validation code.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the <a href=\"#!/api/NGN-property-BUS\" rel=\"NGN-property-BUS\" class=\"docClass\">NGN.BUS</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","name":"NGNX.Email","aliases":{},"superclasses":["Class","NGN.core"],"requires":[],"id":"class-NGNX.Email","subclasses":[],"files":[{"href":"Email.html#NGNX-Email","filename":"Email.js"}]});