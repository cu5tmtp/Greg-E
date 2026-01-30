ServerEvents.recipes((event) =>{

    const materialsToReplace = [
        { 
            name: 'manasteel', 
            replacement: 'botania:manasteel_ingot' 
        },
        { 
            name: 'twilight_alloy', 
            replacement: 'kubejs:twilightingots' 
        },
        { 
            name: 'desh', 
            replacement: 'ad_astra:desh_ingot' 
        },
        { 
            name: 'malachite', 
            replacement: 'botanicalextramachinery:malachite_ingot'
        },
        { 
            name: 'forgotten_ingot', 
            replacement: 'undergarden:forgotten_ingot'
        },
    ];

    const wireTypes = [
        'single_wire',
        'double_wire',
        'quadruple_wire',
        'octal_wire',
        'hex_wire'
    ];

    materialsToReplace.forEach((mat) => {

        const dustInput = `gregecore:${mat.name}_cable_dust`;

        wireTypes.forEach((type) => {
            const outputWire = `gregecore:${mat.name}_cable_${type}`;

            event.replaceInput(
                { output: outputWire }, 
                dustInput,              
                mat.replacement         
            );
        });
    });

})