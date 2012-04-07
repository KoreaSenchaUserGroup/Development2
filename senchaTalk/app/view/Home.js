Ext.define("SenchaTalk.view.Home", {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		html: [
    		"I changed the default <b>HTML Contents</b> to something different!"
		].join("")
	}
});