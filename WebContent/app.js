var _STATUS = Ext.os.name.toLowerCase();	//macos, ios, windows, 

Ext.Loader.setConfig({enabled: true});
Ext.setup({
	viewport: {
	    autoMaximize: false
	},
	onReady: function() {
    	var app = new Ext.Application({
	        name: 'MobileDemo',
	    	controllers: [
				'main'
			],
/*
			models: [
				'Demo'
			],

*/	    	appFolder: 'app',
	        //autoCreateViewport: true
	    });
	}
});

