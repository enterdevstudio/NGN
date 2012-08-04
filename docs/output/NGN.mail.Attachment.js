Ext.data.JsonP.NGN_mail_Attachment({"component":false,"html_meta":{},"tagname":"class","extends":"NGN.core","alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":false,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"members":{"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"cid","id":"cfg-cid"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"content","id":"cfg-content"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"contentDisposition","id":"cfg-contentDisposition"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"contentType","id":"cfg-contentType"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"errorOnMissingSource","id":"cfg-errorOnMissingSource"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"filename","id":"cfg-filename"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"filepath","id":"cfg-filepath"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"stream","id":"cfg-stream"},{"tagname":"cfg","owner":"NGN.mail.Attachment","meta":{},"name":"warnOnMissingSource","id":"cfg-warnOnMissingSource"}],"method":[{"tagname":"method","owner":"NGN.core","meta":{},"name":"addEventListeners","id":"method-addEventListeners"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"createRef","id":"method-createRef"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"emit","id":"method-emit"},{"tagname":"method","owner":"Class","meta":{},"name":"extend","id":"method-extend"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireError","id":"method-fireError"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"fireEvent","id":"method-fireEvent"},{"tagname":"method","owner":"Class","meta":{"private":true},"name":"merge","id":"method-merge"},{"tagname":"method","owner":"NGN.core","meta":{},"name":"on","id":"method-on"}],"event":[{"tagname":"event","owner":"NGN.mail.Attachment","meta":{},"name":"warn","id":"event-warn"}],"property":[{"tagname":"property","owner":"NGN.core","meta":{"protected":true},"name":"_emitter","id":"property-_emitter"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"prototype","id":"property-prototype"},{"tagname":"property","owner":"Class","meta":{"protected":true},"name":"super","id":"property-super"}],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a><div class='subclass '><strong>NGN.mail.Attachment</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Attachment.html#NGN-mail-Attachment' target='_blank'>Attachment.js</a></div></pre><div class='doc-contents'><p>Represents an email attachment and provides convenience methods for managing it's attributes.</p>\n\n<p><strong>Filepath Example</strong></p>\n\n<pre><code>    var file = new <a href=\"#!/api/NGN.mail.Attachment\" rel=\"NGN.mail.Attachment\" class=\"docClass\">NGN.mail.Attachment</a>({\n        filepath: '/path/to/file.txt',\n        filename: 'profile.txt'\n    });\n</code></pre>\n\n<p><strong>URL Example</strong></p>\n\n<pre><code>    var file = new <a href=\"#!/api/NGN.mail.Attachment\" rel=\"NGN.mail.Attachment\" class=\"docClass\">NGN.mail.Attachment</a>({\n        filepath: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE',\n        filename: 'license.txt'\n    });\n</code></pre>\n\n<p><strong>Stream Example</strong></p>\n\n<pre><code>    var file = new <a href=\"#!/api/NGN.mail.Attachment\" rel=\"NGN.mail.Attachment\" class=\"docClass\">NGN.mail.Attachment</a>({\n        stream: require('fs').createReadStream('/path/to/file.txt'),\n        filename: 'profile.txt'\n    });\n</code></pre>\n\n<p>This class is designed to be used with a <a href=\"#!/api/NGN.mail.Message\" rel=\"NGN.mail.Message\" class=\"docClass\">NGN.mail.Message</a> object.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cid' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-cid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-cid' class='name not-expandable'>cid</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>An optional content ID for using inline images in HTML message sources.</p>\n</div><div class='long'><p>An optional content ID for using inline images in HTML message sources.</p>\n</div></div></div><div id='cfg-content' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-content' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-content' class='name not-expandable'>content</a><span> : String/Buffer</span></div><div class='description'><div class='short'><p>A string or buffer to be used as the file content.</p>\n</div><div class='long'><p>A string or buffer to be used as the file content.</p>\n</div></div></div><div id='cfg-contentDisposition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-contentDisposition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-contentDisposition' class='name expandable'>contentDisposition</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optionally change the content disposition type. ...</div><div class='long'><p>Optionally change the content disposition type.</p>\n<p>Defaults to: <code>attachment</code></p></div></div></div><div id='cfg-contentType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-contentType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-contentType' class='name expandable'>contentType</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The file content type. ...</div><div class='long'><p>The file content type. By default, this will be set to whatever type is specified in <a href=\"#!/api/NGN.mail.Attachment-cfg-filename\" rel=\"NGN.mail.Attachment-cfg-filename\" class=\"docClass\">filename</a></p>\n</div></div></div><div id='cfg-errorOnMissingSource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-errorOnMissingSource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-errorOnMissingSource' class='name expandable'>errorOnMissingSource</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Fire an error if the attachment source is missing or not found. ...</div><div class='long'><p>Fire an error if the attachment source is missing or not found.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-filename' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-filename' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-filename' class='name expandable'>filename</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The filename to be reported as the name of the attached file. ...</div><div class='long'><p>The filename to be reported as the name of the attached file. Unicode is supported on most (but not all)\nmail servers.</p>\n\n<p>If this is not specified, the filename of the <a href=\"#!/api/NGN.mail.Attachment-cfg-filepath\" rel=\"NGN.mail.Attachment-cfg-filepath\" class=\"docClass\">filepath</a> will be used instead. If no filepath is provided\n&amp; the attachment is a stream source, a random filename will be assigned with an assumed <code>.txt</code> extension.</p>\n</div></div></div><div id='cfg-filepath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-filepath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-filepath' class='name expandable'>filepath</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The filepath or URL of the attachment. ...</div><div class='long'><p>The filepath or URL of the attachment.</p>\n\n<p><strong>Note:</strong> A URL is streamed. This is a good alternative for larger attachments.</p>\n</div></div></div><div id='cfg-stream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-stream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-stream' class='name not-expandable'>stream</a><span> : ReadableStream</span></div><div class='description'><div class='short'><p>Use a readable stream, such as <code>require('fs').createCreadStream('file.txt')</code> as the attachment source.</p>\n</div><div class='long'><p>Use a readable stream, such as <code>require('fs').createCreadStream('file.txt')</code> as the attachment source.</p>\n</div></div></div><div id='cfg-warnOnMissingSource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-cfg-warnOnMissingSource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-cfg-warnOnMissingSource' class='name expandable'>warnOnMissingSource</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Emit a warn event if the attachment source is missing or not found. ...</div><div class='long'><p>Emit a <a href=\"#!/api/NGN.mail.Attachment-event-warn\" rel=\"NGN.mail.Attachment-event-warn\" class=\"docClass\">warn</a> event if the attachment source is missing or not found.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_emitter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-property-_emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-property-_emitter' class='name expandable'>_emitter</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>An event emitter for the class. ...</div><div class='long'><p>An event emitter for the class. Used internally.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRef' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-createRef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-createRef' class='name expandable'>createRef</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj, Booean overwriteExisting</span> )</div><div class='description'><div class='short'>Creates a global variable. ...</div><div class='long'><p>Creates a global variable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The namespace to be created.</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object which is being referenced.</p>\n</div></li><li><span class='pre'>overwriteExisting</span> : Booean<div class='sub-desc'><p>Recreate the namespace using the new object.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the <a href=\"#!/api/NGN-property-BUS\" rel=\"NGN-property-BUS\" class=\"docClass\">NGN.BUS</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-warn' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.mail.Attachment'>NGN.mail.Attachment</span><br/><a href='source/Attachment.html#NGN-mail-Attachment-event-warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.mail.Attachment-event-warn' class='name expandable'>warn</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> meta</span> )</div><div class='description'><div class='short'>Fired when a warning is raised. ...</div><div class='long'><p>Fired when a warning is raised.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","name":"NGN.mail.Attachment","aliases":{},"superclasses":["Class","NGN.core"],"requires":[],"id":"class-NGN.mail.Attachment","subclasses":[],"files":[{"href":"Attachment.html#NGN-mail-Attachment","filename":"Attachment.js"}]});