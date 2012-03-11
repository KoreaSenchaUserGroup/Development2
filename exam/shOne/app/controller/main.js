/**
 * 2012-02-24
 * 1. menuMain 클릭시 id의 길이가 4글자인 메뉴 div만 처리되도록 수정
 * 2. menuMain 주석처리
 * 3. menuMain 클릭시 title 처리 부분 수정 
 * 4. 2012.03.06 : 로그인 추가 
 */


Ext.define('MobileDemo.controller.main', {
    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase()
    },

    views : [
        'main'
		
		
		
		
    ],
	

    refs: [
        {
            ref     : 'main',
            selector: 'main',
            autoCreate: true,
            xtype   : 'main'
        },
        {
            ref : 'viewport',
            selector: 'viewport'
        },
    ],

    init: function() {
		try {
			var main = this.getMain();
				
		} catch (e) {
			alert('[main init error]'+e.message);
		}
    }
});
