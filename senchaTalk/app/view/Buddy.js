Ext.define("SenchaTalk.view.Buddy", {
	extend: 'Ext.Panel',
	xtype: 'buddypanel',
	
	config: {
		title: '친구 리스트',
		iconCls: 'user',
		scrollable: true,
		styleHtmlContent: true,
		html: [
    		"I changed the default <b>HTML Contents</b> to something different!"
		].join("")
	}
});