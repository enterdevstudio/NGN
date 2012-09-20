var hooks= require('hooks'),
	Base = require('../NGN.core');
	
/**
 * @class NGN.model.Model
 * A base model class for creating logical application classes, such as entities, actors, or business logic.
 * 
 * @private
 * @extends NGN
 * @author Corey Butler
 */
var Class = Base.extend({
	
	/**
	 * @constructor
	 * Create a new __NGN.model. This can be done by passing a configuration object. If using persistence, the object
	 * can be automatically loaded by ID reference. For example:
	 * 		var person = new __NGN.model.Person('id123');
	 * This will attempt to use the default persistence datasource to read data for the id `id123`.
	 */
	constructor: function(config){
		
		config = config || {};
		
		if (typeof config !== 'object') {
			config = {
				id: config
			};
		}
	
		Class.super.constructor.call(this,config);
		
		var me = this;
		
		Object.defineProperties(this,{
			
			/**
			 * @property {Boolean}
			 * Indicates the model is new or does not exist according to the persistence store.
			 * @private
			 */
			isNew: {
				value:		true,
				enumerable:	false,
				writable:	true
			},
			
			/**
			 * @cfg {String/Number/Date} [id=null]
			 * The unique ID of the model object.
			 */
			id: {
				value:		config.id || null,
				enumerable:	true,
				writable:	true
			},
			
			/**
			 * @cfg {String} [idAttribute=null]
			 * Setting this allows an attribute of the object to be used as the ID.
			 * For example, if an username is the ID of a user, this would be set to
			 * `username`.
			 */
			idAttribute: {
				value:		config.idAttribute || null,
				enumerable:	false,
				writable:	false
			},
			
			/**
			 * @cfg {String} [type=Model]
			 * The type of __NGN.model.
			 * @readonly
			 * @protected
			 */
			type: {
				value:		config.type || 'Model',
				enumerable:	false,
				writable:	true
			},
			
			/**
			 * @cfg {Boolean} [allowInvalidSave=false]
			 * Set this to true to allow a save even though not all of the data properties 
			 * pass validation tests.
			 */
			allowInvalidSave: {
				value:		__NGN.coalesce(config.allowInvalidSave,false),
				enumerable:	false,
				writable:	true
			},
			
			/**
			 * @cfg {NGN.datasource.CRUD}
			 * Facilitates CRUD functions for #save, #load, and #remove methods.
			 */
			CRUD: {
				value:		config.CRUD || null,
				enumerable:	false,
				writable:	true
			},
			
			_modified: {
                value:      false,
                writable:   true,
                enumerable: false
            },
            
            _modifiedAttributes: {
                value:      [],
                writable:   true,
                enumerable: false
            },
            
            /**
             * @property {Boolean}
             * Indicates one or more data properties has changed.  
             */
            modified: {
                enumerable: true,
                get:        function(){
                                return this._modified;
                            }
            },
							
			/**
			 * @property {Array}
			 * An array of enumerable properties that are explicitly **excluded** in the #serialize results.
			 * @private
			 */
            nonEnumerableProperties: {
            	value:		['modified','enumerableProperties','nonEnumerableProperties','strictData','explicitData','disableDataValidation','type','CRUD'],
            	enumerable:	false,
            	writable:	false
            },
            
            /**
             * @property {Array}
			 * An array of enumerable properties that are explicitly **included** in the #serialize results.
             * This is useful when a non-enumerable property or special property name should be
             * included, or if default behavior needs to be overwritten.
             */
            enumerableProperties: {
            	value:		[],
            	enumerable:	false,
            	writable:	true
            },
            
            /**
             * @cfg {Boolean} [strictData=false]
             * When set to `true`, the #getData method will only return values for the attributes defined in #enumerableProperties and/or the object itself.
             */
            strictData: {
            	value:		__NGN.coalesce(config.strictData,false),
            	enumerable:	false,
            	writable:	true
            },
            
            /**
             * @cfg {Boolean} [strictData=false]
             * When set to `true`, the #getData method will only return values for the attributes defined in #enumerableProperties, regardless of 
             * an other properties of the model.
             */
            explicitData: {
            	value:		__NGN.coalesce(config.explicitData,false),
            	enumerable:	false,
            	writable:	true
            },
            
            /**
             * @property {Object}
             * The validation rules used to verify data integrity when persisting to a datasource.
             * @private
             */
            _validationMap: {
				value:		{},
				enumerable:	false,
				writable:	false		
			},
			
			/**
			 * @cfg {Boolean} [disableDataValidation=false]
			 * Only used when #save is called. Setting this to `true` will bypass data validation.
			 */
			disableDataValidation: {
				value:		__NGN.coalesce(config.disableDataValidation,false),
				enumerable:	false,
				writable:	true
			},
			
			_invalidDataAttributes: {
				value:		[],
				enumerable:	false,
				writable:	true
			},
			
			/**
			 * @property {Object}
			 * The original config values passed to the constructor.
			 * @readonly
			 */
			originalConfig: {
				value:		__NGN.clone(config),
				enumerable:	false,
				writable:	false
			},
			
			/**
			 * @property {Boolean}
			 * Stores whether the object is considered loaded.
			 * @private
			 */
			loaded: {
				value:		false,
				enumerable:	false,
				writable:	true
			},
			
			_isXtn: {
				value: 		config.hasOwnProperty('extend'),
				enumerable:	false,
				writable:	false
			},
			
			/**
			 * @property {Object}
			 * Automatically generates a model with data management events.
			 * This uses proxies (harmony proxies) to emit events on object
			 * property changes such as get/set/create/delete/etc.
			 */
			EXTENDEDMODEL: {
				enumerable:	false,
				get:		function(){
								return this.extension();
							}
			},
			
			_isConfigured: {
				value: 		false,
				enumerable:	false,
				writable:	true
			},
			
			/**
			 * @property {Object[]}
			 * An ordered array of changes made to the object data properties.
			 * This should not be changed manually. Instead, use #getChangeLog
			 * and #rollback to manage this list.
			 * @private
			 */
			changelog: {
				value:		[],
				enumerable:	false,
				writable:	true
			},
			
			/**
			 * @property {Object}
			 * Contains references to associations.
			 * @private
			 */
			_xref: {
				value:		{},
				enumerable:	false,
				writable:	true
			},
			
			// Holds a reference to the direct proxy
			_proxy: {
				value:		null,
				enumerable:	false,
				writable:	true
			}
			
		});
		
		if (this.idAttribute)
			this.id = this[this.idAttribute];

		var me = this;

		// Add hooks hook, pre, and post
		for (var k in hooks)
			this[k] = hooks[k];

		// Add pre/post events to each method
		this.pre('save',function(next){
			if (!me.disableDataValidation && !me.allowInvalidSave) {
				if (!me.validate()){
					me.fireError('Invalid data for '+me._invalidDataAttributes.join()+' attribute'+(me._invalidDataAttributes.length>1?'s':''));
					return;
				}	
			}
			me.onBeforeSave();
			next();
		});
		this.post('save',function(next){
			me.onSave();
			next();
		});
		this.pre('remove',function(next){
			me.onBeforeRemove();
			next();
		});
		this.post('remove',function(next){
			me.onRemove();
			next();
		});
				
		if (!this.CRUD){
			if (NGNA){
				if (NGNA.CRUD[this.type])
					this.CRUD = NGNA.CRUD[this.type];
				else if (NGNA.CRUD['default'])
					this.CRUD = NGNA.CRUD['default'];
			}
		}
		
		if (this.CRUD){
			this.CRUD.on('save',function(){
				
			})
		}

		if (me.id)
			me.load();

		// DO NOT CHANGE THIS
		// This is a smart object that returns a proxy if enabled,
		// or a standard object if not enabled.
		return this.EXTENDEDMODEL;
	},
	
	/**
	 * @method pre
	 * This method will execute **before** the specified method.
	 * For example:
	 * 		var person = new __NGN.model.Person();
	 * 		
	 * 		person.pre('save',function(next){
	 * 			...
	 * 			next();
	 * 		});
	 * This method is chainable, so it is possible to add additional
	 * hooks, like:
	 * 		var person = new __NGN.model.Person();
	 * 		
	 * 		person.pre('save',function(next){
	 * 			...
	 * 			next();
	 * 		}).pre('save',function(next){
	 * 			...
	 * 			next();
	 * 		});
	 * @chainable
	 */
	
	/**
	 * @method post
	 * This method will execute **after** the specified method.
	 * For example:
	 * 		var person = new __NGN.model.Person();
	 * 		
	 * 		person.post('save',function(next){
	 * 			...
	 * 			next();
	 * 		});
	 * This method is chainable, so it is possible to add additional
	 * hooks, like:
	 * 		var person = new __NGN.model.Person();
	 * 		
	 * 		person.post('save',function(next){
	 * 			...
	 * 			next();
	 * 		}).post('save',function(next){
	 * 			...
	 * 			next();
	 * 		});
	 * @chainable
	 */
	
	/**
	 * @method hook
	 * The hook method can be used to provide an arbitrary handler for a specific method.
	 * For example, custom error handling can be managed with `hook`.
	 * 
	 */
	
	/**
	 * @method
	 * A helper method to prepare configuration. This allows a non-object
	 * to be passed as a single configuration argument, which is automatically
	 * converted to the #id field. For example:
	 * 		var myModel = new __NGN.model.Model('someID_123');
	 * The model automatically converts this to an object like:
	 * 		{
	 * 			id: 'someID_123'
	 * 		}
	 * As a result, the expected configuration object is always passed as the only
	 * argument to a constructor.
	 * @protected
	 */
	prepConfig: function(config) {
		if (typeof config !== 'object') {
			config = {
				id: config
			};
		}
		
		return config || {};
	},
	
	/**
	 * @method
	 * Add or update a validation rule for a specific model property.
	 * @param {String} property
	 * The property to test.
	 * @param {Function/String[]/Number[]/Date[]/RegExp/Array} validator
	 * The validation used to test the property value. This should return
	 * `true` when the data is valid and `false` when it is not. 
	 * 
	 * * When this is a _function_, the value is passed to it as an argument.
	 * * When this is a _String_, the value is compared for an exact match (case sensitive)
	 * * When this is a _Number_, the value is compared for equality.
	 * * When this is a _Date_, the value is compared for exact equality.
	 * * When this is a _RegExp_, the value is tested and the results of the RegExp#test are used to validate.
	 * * When this is an _Array_, the value is checked to exist in the array, regardless of data type. This is treated as an `enum`.
	 * * When this is _an array of dates_, the value is compared to each date for equality.
	 */
	addValidator: function(property,validator){
		if (!this.hasOwnProperty(property)){
			this.fireWarning('No validator could be create for '+property.toUpperCase()+'. It is not an attribute of '+this.type.toUpperCase()+'.');
			return;
		}
		switch (typeof validator){
			case 'function':
				this._validationMap[property] = validator;
				break;
			case 'object':
				if (Array.isArray(validator)){
					this._validationMap[property] = function(value){
						return validator.indexOf(value) >= 0;
					};
				} else if (validator.test){ // RegExp
					this._validationMap[property] = function(value){
						return validator.test(value);
					};
				} else
					this.fireWarning('No validator could be created for '+property.toUpperCase()+'. The validator appears to be invalid.');
				break;
			case 'string':
			case 'number':
			case 'date':
				this._validationMap[property] = function(value){
					return value == validator;
				};
				break;
			default:
				this.fireWarning('No validator could be create for '+property.toUpperCase()+'. The validator appears to be invalid.');
		}
		
	},
	
	/**
	 * @method
	 * Remove a data validator from the object.
	 * @param {String} attribute
	 * The name of the attribute to remove from the validators.
	 */
	removeValidator: function(attribute){
		if (this._validationMap.hasOwnProperty(attribute)){
			delete this._validationMap[attribute];
		}		
	},
	
	/**
	 * @method
	 * Validate one or all attributes of the data.
	 * @param {String} [attribute=null]
	 * Validate a specific attribute. By default, all attributes are tested.
	 * @private
	 */
	validate: function(attribute){
		if (this.disableDataValidation)
			return true;
		
		var _pass = true;
		
		// Single Attribute Validation
		if (attribute){
			if (this._validationMap.hasOwnProperty(attribute)){
				_pass = this.validationMap[attribute](this[attribute]);
				if (!_pass)
					this._invalidDataAttributes.push(attribute);
				return _pass;
			}
		}
		
		// Validate All Attributes
		for (var rule in this._validationMap){
			if (this[rule]) {
				if (this._validationMap.hasOwnProperty(rule)){
					var pass = this._validationMap[rule](this[rule]);
					if (!pass && this._invalidDataAttributes.indexOf(rule) < 0)
						this._invalidDataAttributes.push(rule);
					
					if (_pass && !pass)
						_pass = false;
				}
			}
		}
		return _pass;
	},
	
	/**
	 * @method
	 * Enable data validation if #disableDataValidation is `true`.
	 */
	enableDataValidation: function(){
		this.disableDataValidation = false;
	},
	
	/**
	 * @method
	 * Disable data validation. Sets #disableDataValidation to `true`.
	 */
	disableDataValidation: function(){
		this.disableDataValidation = true;
	},
	
	/**
	 * @method
	 * Get a model from the known associations. Associations are stored when the #serialize method
	 * encounters a nested NGN.model.Model. #save and #load use #serialize.
	 * @param {Number/String}
	 * The reference number or full xref string (i.e. `xref::1`)
	 * @returns {__NGN.model.Model}
	 */
	getAssociation: function(ref) {
		if (typeof ref == 'string')
			ref = parseInt(ref.split('::'));
		if ((ref[1]-1 <= 0 || ref[1]-1 > this._ref.length) || ref[0].toString().toLowerCase() == 'xref'){
			this.onNoAssociation(ref);
			return null;
		}
		return this._xref[ref[1]-1];
	},
	
	/**
	 * @method
	 * Get the association map.
	 * @returns {Object}
	 */
	getAssociations: function() {
		return this._xref;
	},
	
	/**
	 * @method
	 * Creates a JSON data object with no functions. Only uses enumerable attributes of the object by default.
	 * Specific data values can be included/excluded using #enumerableProperties & #nonEnumerableProperties.
	 * 
	 * Any object property that begins with a special character will be ignored by default. Functions & Setters are always
	 * ignored. Getters are evaluated recursively until a simple object type is found or there are no further nested attributes.
	 * 
	 * If a value is an instance of __NGN.model.Model (i.e. a nested model or array of models), reference string is returned in the data.
	 * The model itself can be returned using #getXRef.
	 * @param {Object} [obj]
	 * Defaults to this object.
	 * @param {Boolean} [serializeAssociations=false]
	 * When set to `true`, any cross referenced data (__NGN.model.Association) will be retrieved
	 * and serialized into JSON objects. Use this when a complete JSON dump is
	 * required.
	 * @returns {Object}
	 * @protected
	 */
	serialize: function(obj,serializeAssociations){
	
		if (obj == true || obj == false){
			serializeAssociations = obj;
			obj = this;
		}
		
		serializeAssociations = __NGN.coalesce(serializeAssociations,false);

		var _obj = obj || this;
		var me = this, struct = {}, rtn = {};
		
		this._ref = {};
		
		for (var key in _obj) {
			
			_obj.nonEnumerableProperties = _obj.nonEnumerableProperties || '';
			if ((_obj.hasOwnProperty(key) && (_obj.nonEnumerableProperties.indexOf(key) < 0 && /^[a-z0-9 ]$/.test(key.substr(0,1)))) || (_obj[key] !== undefined && _obj.enumerableProperties.indexOf(key) >= 0)) {
				if ((this.explicitData && this.enumerableProperties.indexOf(key) >= 0) || !this.explicitData) {					
					if ((this.strictData && this._coreAttributes.indexOf(key) >= 0) || !this.strictData){
						var dsc = Object.getOwnPropertyDescriptor(_obj,key);
						if (dsc.get){
							try {
								rtn[key] = typeof _obj[key] == 'object' ? _obj[key].serialize(serializeAssociations) : _obj[key];
							} catch(e) {}
						} else if (!dsc.set) {
							switch (typeof dsc.value) {
								case 'function':
									// Support date & regex proxies
									if (dsc.value.name == 'Date'){
										rtn[key] = _obj[key].refs.toJSON();
									} else if (dsc.value.name == 'RegExp'){
										rtn[key] = dsc.value();
									}
									break;
								case 'object':
									// Support array proxies
									if (_obj[key] instanceof Array && !Array.isArray(_obj[key]))
										_obj[key] = _obj[key].slice(0);
														
									var isXRef = _obj[key] instanceof __NGN.model.data.Association;
												
									if (Array.isArray(_obj[key])){				
										for (var i=0;i<_obj[key].length;i++){
											if (_obj[key][i] instanceof __NGN.model.data.Association){
												if (serializeAssociations)
													_obj[key][i] = _obj[key][i].child.serialize(serializeAssociations);
											}
										}
										if (_obj[key].length > 0)
										rtn[key] = _obj[key];
										break;
									}

									if (isXRef){
										if (serializeAssociations)
											rtn[key] = _obj[key].serialize(serializeAssociations);
										else
											rtn[key] = _obj[key];
									} else if (_obj[key]){
										struct = _obj[key].hasOwnProperty('serialize') == true ? _obj[key].serialize(serializeAssociations) : _obj[key];	
										if (Object.keys(struct).length > 0){
											rtn = me.merge(rtn,struct);
										}
									}
									break;
								default:
									rtn[key] = _obj[key];
									break;
							}
						}
					}
				}
			}
		}
		
		return rtn;
	},
	
	/**
	 * @method
	 * Populate the model with data for an existing object.
	 * @private
	 * @uses serialize
	 */
	load: function(id){
		if (this.CRUD){		
			this.onBeforeLoad();
			
			var me = this;
			this.CRUD.read(this,function(result){	
				if (result){
					var data = me.CRUD.processReverseDataMap(result,me.type);
					for (var attr in data){
						if (me.nonEnumerableProperties.indexOf(attr) < 0)
							me[attr] = data[attr];
					}
					if (me.idAttribute)
						me[me.idAttribute] = me.id;
					me.onLoad();
				} else
					me.onNoResult();
			});
		} else
			this.fireWarning(this.type.toString().toUpperCase()+' cannot be loaded because no persistence/CRUD object is associated with the __NGN.model.');	
	},
	
	/**
	 * @method
	 * Persist the data. This only works when an #CRUD is specified.
	 * @param {Function} callback
	 * @uses serialize
	 */
	save: function(callback) {
		if (this.CRUD){
			var me = this, data = this.serialize();
			callback = callback || __NGN.emptyFn;

			if (this.id){
				var allSaves = [];
				allSaves.push(this.CRUD.update(this));
				for (var ref in this._refs){
					if (this._refs.hasOwnProperty(ref)){
						if (this._refs[ref].modified || !this._refs[ref].id)
							allSaves.push(this._refs[ref].save);
					}
				}
				require('async').parallel(allSaves,function(err,results){
					callback(arguments);
					me.onSave();
				});
			} else {
				this.CRUD.create(this,function(){
					callback(arguments);
					me.onSave();
				});
			}
		} else
			this.fireWarning(this.type.toString().toUpperCase()+' cannot be saved because no persistence/CRUD object is associated with the __NGN.model.');
	},
	
	/**
	 * @method
	 * Stop persisting the object (i.e. delete it from the datastore). This only works with #CRUD enabled and an #id specified.
	 */
	remove: function(){
		if (this.isNew){
			this.fireWarning(model.type+' cannot be removed because it is new (i.e. not saved yet).');
			return;
		}
		if (this.CRUD){
			var me = this;
			this.onBeforeRemove();
			this.CRUD.remove(this,function(){
				me.onRemove();
			});
		} else
			this.fireWarning(this.type.toString().toUpperCase()+' cannot be removed because no persistence/CRUD object is associated with the __NGN.model.');	
	},
	
	/**
	 * @method
	 * Returns the data that the persistence store uses.
	 * @param {Boolean} [modified=false]
	 * Retrieve only the modified data.
	 * @returns {Object}
	 */
	getData: function(){
		if (this.CRUD)
			return this.CRUD.processDataMap(this.serialize(),this.type);
		return this.serialize();
	},
	
	/**
	 * @method
	 * Returns an array of changes made to the object.
	 * Each element of the array is a change object, which is 
	 * a simple JSON object. The syntax is:
	 * 	{
	 * 		type: 'create|update|delete',
	 * 		oldValue: Object, // Only exists for update and delete.
	 * 		value: Object // Only exists for create and update
	 * 	}
	 * @returns {Array}
	 */
	getChangeLog: function(){
		if (!__NGN.OBJECT_PROXY_SUPPORT)
			this.fireWarning('Model '+this.type+'#getChangeLog cannot run because change management is not enabled. To enable, launch the app as:\n'+('node '+'--harmony '.bold+process.mainModule.filename).yellow+'\n');
		
		return this.changelog;
	},
	
	/**
	 * @method
	 * Simple "undo". It rolls back the changelog and
	 * reverses the changes made in each log entry.
	 * This method is only available when using proxies.
	 * @param {Number} [changes=1]
	 * The number of changes to rollback. A value of `-1` will rollback all changes.
	 */
	rollback: function(changes){
		if (!__NGN.OBJECT_PROXY_SUPPORT){
			this.fireWarning('Model '+this.type+'#rollback cannot execute because change management is not enabled. To enable, launch the app as:\n'+('node '+'--harmony '.bold+process.mainModule.filename).yellow+'\n');
			return;
		}
		changes = changes || 1;
		changes = changes < 1 ? this.changelog.length : changes;

		// Loop through the changelog and reverse each change sequentially.
		for (var i=0; i<changes; i++){
			var delta = this.changelog[this.changelog.length-1];
			switch(delta.type.trim().toLowerCase()){
				case 'create':
					delete this._proxy['___rollback::'+delta.property];
					this.changelog.pop();
					this.onRollback(delta);
					break;
				case 'update':		
					this._proxy['___rollback::'+delta.property] = delta.oldValue;
					this.changelog.pop();
					this.onRollback(delta);
					break;
				case 'delete':
					this._proxy['___rollback::'+delta.property] = delta.oldValue;
					this.changelog.pop();
					this.onRollback(delta);
					break;
				case 'start':
					break;
				default:
					this.fireWarning('Rollback Failed: '+delta.type+' not a recognized change type.');
					break;
			}
		}
	},
	
	/**
	 * @method
	 * Returns the #_rawData communicated with a persistence store.
	 * @returns {Object}
	 */
	getModifiedData: function(){
		if (!this.modified)
			return {};
			
		var data = this.getData(), rtn = {};
		
		for (var attr in data){
			if (data.hasOwnProperty(attr) && this._modifiedAttributes.indexOf(attr))
				rtn[attr] = data[attr];
		}
		
		return rtn;
	},
	
	/**
	 * @model
	 * 
	 * @private
	 */
	extension: function() {
		this._isConfigured = true;
		
		if (!__NGN.OBJECT_PROXY_SUPPORT){
			//this.fireWarning('Model '+this.type+' does not have change management support. To enable, launch the app as:\n'+('node '+'--harmony '.bold+process.mainModule.filename).yellow+'\n');
			delete this.rollback;
			delete this.changelog;
			delete this.onBeforeChange;
			delete this.onChange;
			delete this.onRollback;
		}
		
		if (this._isXtn || !__NGN.OBJECT_PROXY_SUPPORT)
			return this;
		
		var me = this;
		var wrap = function(){
			this.target = me;
		};
		wrap.prototype = Object.prototype;//proxyHandler;
		
		Proxy = Proxy || function(){ return me; };

		this._proxy = NGN.model.ModelObserver(this);
		
		return this._proxy;
	},
	
	/**
	 * @event beforeChange
	 * Fired before a change is completed.
	 * Provides the following change object to the callback:
	 * 	{
	 * 		type: 'create|update|delete',
	 * 		oldValue: Object, // Only exists for update and delete.
	 * 		value: Object // Only exists for create and update
	 * 	}
	 */
	onBeforeChange: function(change) {
		change = change || null;
		this.emit('beforeChange',change);
		if (change !== null)
			this.emit('beforeChange'+__$.capitalize(change.property),change);
		return true;
	},
	
	/**
	 * @event change
	 * Fired after the change is complete.
	 * Provides the following change object to the callback:
	 * 	{
	 * 		type: 'create|update|delete',
	 * 		oldValue: Object, // Only exists for update and delete.
	 * 		value: Object // Only exists for create and update
	 * 	}
	 */
	onChange: function(change) {
		change = change || null;
		this._modified = true;
		this.changelog.push(change);
		this.emit('change',change);
		if (change !== null)
			this.emit('change'+__$.capitalize(change.property),change);
	},
	
	/**
	 * @event beforeSave
	 * Fired before the model attempts to persist data.
	 */
	onBeforeSave: function(){
		this.emit('beforeSave',this);
	},
	
	/**
	 * @event save
	 * Fired when the model attempts to persist data to a datasource.
	 */
	onSave: function(){
		this._modified = false;
		this._modifiedAttributes = [];
		this.isNew = false;
		this.emit('save',this);
	},
	
	/**
	 * @event beforeLoad
	 * Fired before the model attempts to populates its data from a datasource.
	 */
	onBeforeLoad: function(){
		this.emit('beforeLoad',this);
	},
	
	/**
	 * @event load
	 * Fired when the model attempts to populate its data from a datasource.
	 */
	onLoad: function(){
		if (!this.loaded){
			this.isNew = (this.id == null);
			this.loaded = true;
			this.emit('load',this);
		}
	},
	
	/**
	 * @event beforeRemove
	 * Fired before the model attempts to remove its data from a datasource.
	 */
	onBeforeRemove: function(){
		this.emit('beforeRemove',this);
	},
	
	/**
	 * @event remove
	 * Fired when the model has removed its data from a datasource.
	 */
	onRemove: function(){
		this.emit('remove',this);
		delete this;
	},
	
	/**
	 * @event noResult
	 * Fired when a #load returns no records.
	 */
	onNoResult: function(){
		this.emit('noResult')
	},
	
	/**
	 * @event xrefFailure
	 * Fired when a cross reference is requested that does not exist.
	 * @param {Object} ref
	 */
	onNoReference: function(ref){
		this.fireWarning('Cross reference '+ref+' does not exist or is invalid.');
		this.emit('xrefFailure')
	},
	
	/**
	 * @event rollback
	 * Fired when a rollback occurs.
	 * @param {Object} delta
	 */
	onRollback: function(delta){
		this.emit('rollback',delta);
	}
	
});

module.exports = Class;
