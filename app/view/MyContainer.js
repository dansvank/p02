/*
 * File: app/view/MyContainer.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyContainer', {
    extend: 'Ext.Container',

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Camara App',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'mybutton1',
                        text: 'Take!',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    alert("1.3, ahora con el api de phonegap");
                                },
                                event: 'initialize'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'image',
                height: 201,
                id: 'imagePreview',
                src: 'data/def.png'
            }
        ],
        listeners: [
            {
                fn: 'onMybutton1Tap',
                event: 'tap',
                delegate: '#mybutton1'
            }
        ]
    },

    onMybutton1Tap: function(button, e, eOpts) {
        alert('1.2');

        navigator.camera.getPicture(success, failure,{quality: 50, 
        destinationType: Camera.DestinationType.FILE_URI });

        function success(image){
            alert('success!');
            document.getElementById('imagePreview').src=image;
            alert('success 2!');
        }

        function failure(msg){
            alert('Error. Tomela:\n' + msg);
        }
    }

});