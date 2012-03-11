var frm;
var one = {
    xtype: 'textfield',
    name : 'name',
    label: 'Name'
};


Ext.application({
    name: 'Sencha',
    launch: function() {
        setForm();
    }
});



function setForm(){
    frm = Ext.create('Ext.form.Panel', 
        {
            fullscreen: true,
            items: [
                {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email'
                },
                {
                    xtype: 'passwordfield',
                    name : 'password',
                    label: 'Password'
                }
            ]
        }
    );  
    
    frm.add(one);   //item추가
    
    frm.setValues({
        name: 'Ed',
        email: 'ed@sencha.com',
        password: 'secret'
    });
}