/**
 * 2012-02-21
 * 1. M201��main怨�menu �좏깮���ㅻⅨ 媛앹껜媛��섎룄濡��섏젙 
 */
Ext.define('MobileDemo.view.main', {
		extend: 'Ext.NavigationView',
		id : 'main',
		xtype : 'main',
		requires: ['Ext.navigation.Bar'],
		config: {
			defaultBackButtonText: ' ',
			useTitleForBackButtonText: false,
			fullscreen: true,
			items: [
			    {
			    	xtype : 'panel',
			    	html : 'Welcome to SenchaTok'
                }
			]
		},
		initialize: function() {
	        this.callParent(arguments);
			var main = Ext.getCmp( 'main' ),
				main_navi = main.getNavigationBar();
			main.add(
				{
				xtype: 'titlebar',
				id: 'viewBottomBar',
				docked: 'bottom',
				defaults: {
                    //iconMask: true 
                },
				items:[
					{
	            		xtype:'label',
	            		margin: '0 0 0 10',
	            		html:'COMPOSITE',
	            		cls:'label_white_text ticker_bar_t01'
	            	},
					{
	            		xtype:'label',
	            		margin: '0 0 0 5',
	            		html:'3,460.117',
	            		cls:'label_white_text ticker_bar_t02'
	            	},
					{
	            		xtype:'label',
	            		margin: '0 0 0 5',
	            		html:'143.980',
	            		cls:'label_white_text ticker_bar_t03_01'
	            	},
					{
	            		xtype:'label',
	            		margin: '0 0 0 5',
	            		html:'4.34%',
	            		cls:'label_white_text ticker_bar_t03_02'
	            	},
					{
			            align: 'right',
			            iconCls: 'icon_refresh'						
			        },
			        {
			            align: 'right',
			            iconCls: 'icon_setting'
			        }
				]
			});
			main_navi.add({
                xtype   : 'button',
                //text    : 'Menu',
                id: 'menu_view_btn',
				iconCls: 'icon_menu',
				align: 'right'
            });
			main_navi.setTitle('Main');
			
	    }
	});