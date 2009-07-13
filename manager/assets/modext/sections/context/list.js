Ext.onReady(function(){
   MODx.load({ xtype: 'modx-page-contexts' }); 
});

/**
 * Loads the context management page
 * 
 * @class MODx.page.Context
 * @extends MODx.Component
 * @param {Object} config An object of config properties
 * @xtype modx-page-contexts
 */
MODx.page.Contexts = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		components: [{
            xtype: 'modx-panel-contexts'
            ,renderTo: 'modx-panel-contexts-div'
        }]
	});
	MODx.page.Contexts.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.Contexts,MODx.Component);
Ext.reg('modx-page-contexts',MODx.page.Contexts);    