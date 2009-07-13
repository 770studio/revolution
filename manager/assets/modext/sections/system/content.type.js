Ext.onReady(function() {
    MODx.load({ xtype: 'modx-page-content-type'});
});
/**
 * Loads the content type management page
 * 
 * @class MODx.page.ContentType
 * @extends MODx.Component
 * @param {Object} config An object of config properties
 * @xtype modx-page-content-type
 */
MODx.page.ContentType = function(config) {
	config = config || {};
	Ext.applyIf(config,{
        formpanel: 'modx-panel-content-type'
        ,buttons: [{
            process: 'updateFromGrid'
            ,text: _('save')
            ,method: 'remote'
            ,keys: [{
                key: 's'
                ,alt: true
                ,ctrl: true
            }]
        },{
            process: 'cancel', text: _('cancel'), params: {a:MODx.action['welcome']}
        }]
		,components: [{
            xtype: 'modx-panel-content-type'
            ,title: ''
            ,renderTo: 'modx-panel-content-type-div'
        }]
	});	
	MODx.page.ContentType.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.ContentType,MODx.Component);
Ext.reg('modx-page-content-type',MODx.page.ContentType);