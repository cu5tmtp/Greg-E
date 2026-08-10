ServerEvents.recipes((event) => {
    
    const materialsToReplace = [
        { 
            material: '#grege:witherite',
            mod_id: 'gtceu',
            base_name: 'witherite_wire',
            tier: GTValues.VA[GTValues.LV]
        },
        {
            material: 'gtceu:abyssal_wire_ingot',
            mod_id: 'gtceu',
            base_name: 'abyssal_wire',
            tier: GTValues.VA[GTValues.MV]
        },
        {
            material: '#grege:ancientmetal',
            mod_id: 'gtceu',
            base_name: 'ancient_metal',
            tier: GTValues.VA[GTValues.HV]
        },
        {
            material: 'gtceu:enderium_imitation_ingot',
            mod_id: 'gtceu',
            base_name: 'enderium_wire',
            tier: GTValues.VA[GTValues.LuV]
        },
        {
            material: 'gtceu:ignitium_imitation_ingot',
            mod_id: 'gtceu',
            base_name: 'ignitium_wire',
            tier: GTValues.VA[GTValues.EV]
        },
        {
            material: 'gtceu:cursium_imitation_ingot',
            mod_id: 'gtceu',
            base_name: 'cursium_wire',
            tier: GTValues.VA[GTValues.ZPM]
        },
        {
            material: 'gtceu:storm_imitation_ingot',
            mod_id: 'gtceu',
            base_name: 'storm_wire',
            tier: GTValues.VA[GTValues.UV]
        }
    ];

    const wireTypes = [
        { name: 'double_wire', circuit: 2 },
        { name: 'quadruple_wire', circuit: 4 },
        { name: 'octal_wire', circuit: 8 },
        { name: 'hex_wire', circuit: 16 }
    ];

    const cableTypes = [
        { name: 'single_cable', circuit: 1 },
        { name: 'double_cable', circuit: 2 },
        { name: 'quadruple_cable', circuit: 4 },
        { name: 'octal_cable', circuit: 8 },
        { name: 'hex_cable', circuit: 16 }
    ];

    materialsToReplace.forEach((mat) => {

        wireTypes.forEach((wire) => {
            
            event.recipes.gtceu.wiremill()
                .itemInputs(`${wire.circuit}x ${mat.material}`)
                .itemOutputs(
                    `${mat.mod_id}:${mat.base_name}_${wire.name}`
                )
                .circuit(wire.circuit)
                .EUt(mat.tier)
                .duration(100)
                
        });
        
        cableTypes.forEach((cable) => {

            event.recipes.gtceu.assembler()
                .itemInputs(
                    `${mat.mod_id}:${mat.base_name}_${cable.name.replace('_cable', '_wire')}`
                )
                .inputFluids(
                    'gtceu:styrene_butadiene_rubber 1000'
                )
                .itemOutputs(
                    `${mat.mod_id}:${mat.base_name}_${cable.name}`
                )
                .circuit(cable.circuit)
                .EUt(mat.tier)
                .duration(100);

        });
    });
});