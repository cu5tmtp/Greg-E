ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:advancedaeassembler', 1),
        [
            'FAF',
            'BCB',
            'DED'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_electric_motor',
            C: 'gtceu:luv_robot_arm',
            D: 'gtceu:nonconducting_casing',
            E: 'gtceu:luv_machine_hull',
            F: 'gtceu:magical_certus_quartz_frame'
        }
    )

    const presses = [
        { in: 'minecraft:gold_ingot', press: 'ae2:logic_processor_press', out: 'ae2:printed_logic_processor' },
        { in: 'minecraft:diamond', press: 'ae2:engineering_processor_press', out: 'ae2:printed_engineering_processor' },
        { in: 'ae2:certus_quartz_crystal', press: 'ae2:calculation_processor_press', out: 'ae2:printed_calculation_processor' },
        { in: 'ae2:silicon', press: 'ae2:silicon_press', out: 'ae2:printed_silicon' },
        { in: 'advanced_ae:quantum_alloy', press: 'advanced_ae:quantum_processor_press', out: 'advanced_ae:printed_quantum_processor' },
        { in: 'megacells:sky_steel_ingot', press: 'advanced_ae:quantum_processor_press', out: 'megacells:printed_accumulation_processor' }
    ];

    presses.forEach(p => {
            let cleanName = p.out.replace(':', '_');

            event.recipes.gtceu.advancedaeassembler(`8x_${cleanName}`)
                .itemInputs(`8x ${p.in}`)
                .notConsumable(p.press)
                .itemOutputs(`8x ${p.out}`)
                .circuit(4)
                .duration(300)
                .EUt(GTValues.VA[GTValues.LV]);
                
            event.recipes.gtceu.advancedaeassembler(`64x_${cleanName}`)
                .itemInputs(`64x ${p.in}`)
                .notConsumable(p.press)
                .itemOutputs(`64x ${p.out}`)
                .circuit(24)
                .duration(2000)
                .EUt(GTValues.VA[GTValues.LV]);
    });

    const processors = [
        { printed: 'ae2:printed_logic_processor', out: 'ae2:logic_processor' },
        { printed: 'ae2:printed_engineering_processor', out: 'ae2:engineering_processor' },
        { printed: 'ae2:printed_calculation_processor', out: 'ae2:calculation_processor' },
        { printed: 'advanced_ae:printed_quantum_processor', out: 'advanced_ae:quantum_processor' },
        { printed: 'megacells:printed_accumulation_processor', out: 'megacells:accumulation_processor' }
    ];

processors.forEach(p => {
        let cleanName = p.out.replace(':', '_');

        event.recipes.gtceu.advancedaeassembler(`8processorx_${cleanName}`)
            .itemInputs(`8x ${p.printed}`, '8x minecraft:redstone', '8x ae2:printed_silicon')
            .itemOutputs(`8x ${p.out}`)
            .circuit(8)
            .duration(300)
            .EUt(GTValues.VA[GTValues.LV]);

        event.recipes.gtceu.advancedaeassembler(`64processorx_${cleanName}`)
            .itemInputs(`64x ${p.printed}`, '64x minecraft:redstone', '64x ae2:printed_silicon')
            .itemOutputs(`64x ${p.out}`)
            .circuit(24)
            .duration(2000)
            .EUt(GTValues.VA[GTValues.LV]);
    });

    event.recipes.gtceu.advancedaeassembler()
        .itemInputs('12x ae2:certus_quartz_crystal', '16x minecraft:redstone', '3x ae2:logic_processor')
        .itemOutputs('3x ae2:cell_component_1k')
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV]);

    const components = [
        { glass: 'ae2:quartz_glass', dust: 'minecraft:redstone', prev: 'ae2:cell_component_1k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_4k', c: 16 },
        { glass: 'ae2:quartz_glass', dust: 'minecraft:glowstone_dust', prev: 'ae2:cell_component_4k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_16k', c: 16 },
        { glass: 'ae2:quartz_glass', dust: 'minecraft:glowstone_dust', prev: 'ae2:cell_component_16k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_64k', c: 16 },
        { glass: 'ae2:quartz_glass', dust: 'ae2:sky_dust', prev: 'ae2:cell_component_64k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_256k', c: 16 },
        { glass: 'ae2:quartz_vibrant_glass', dust: 'ae2:sky_dust', prev: 'ae2:cell_component_256k', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_1m', c: 16 },
        { glass: 'ae2:quartz_vibrant_glass', dust: '#forge:dusts/ender_pearl', prev: 'megacells:cell_component_1m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_4m', c: 16 },
        { glass: 'ae2:quartz_vibrant_glass', dust: '#forge:dusts/ender_pearl', prev: 'megacells:cell_component_4m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_16m', c: 16 },
        { glass: 'ae2:quartz_vibrant_glass', dust: 'ae2:matter_ball', prev: 'megacells:cell_component_16m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_64m', c: 16 },
        { glass: 'ae2:quartz_vibrant_glass', dust: 'ae2:matter_ball', prev: 'megacells:cell_component_64m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_256m', c: 16 }
    ];

    components.forEach(c => {
        event.recipes.gtceu.advancedaeassembler()
            .itemInputs(`3x ${c.glass}`, `12x ${c.dust}`, `3x ${c.prev}`, `3x ${c.proc}`)
            .itemOutputs(`${c.out}`)
            .circuit(c.c)
            .duration(600)
            .EUt(GTValues.VA[GTValues.LV]);
    });

    const componentsFaster = [
        { glass: 'ae2:quartz_glass', dust: 'minecraft:redstone', prev: 'ae2:cell_component_1k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_4k', c: 16, matSkip: '3x gtceu:refined_fluix_frame' },
        { glass: 'ae2:quartz_glass', dust: 'minecraft:glowstone_dust', prev: 'ae2:cell_component_4k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_16k', c: 16, matSkip: '3x gtceu:enhanced_fluix_frame' },
        { glass: 'ae2:quartz_glass', dust: 'minecraft:glowstone_dust', prev: 'ae2:cell_component_16k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_64k', c: 16, matSkip: '3x gtceu:end_certus_quartz_frame' },
        { glass: 'ae2:quartz_glass', dust: 'ae2:sky_dust', prev: 'ae2:cell_component_64k', proc: 'ae2:calculation_processor', out: 'ae2:cell_component_256k', c: 16, matSkip: '3x gtceu:venus_certus_quartz_frame' },
        { glass: 'ae2:quartz_vibrant_glass', dust: 'ae2:sky_dust', prev: 'ae2:cell_component_256k', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_1m', c: 16, matSkip: '3x gtceu:magical_certus_quartz_frame' },
        { glass: 'ae2:quartz_vibrant_glass', dust: '#forge:dusts/ender_pearl', prev: 'megacells:cell_component_1m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_4m', c: 16, matSkip: '3x gtceu:magical_certus_quartz_frame' },
        { glass: 'ae2:quartz_vibrant_glass', dust: '#forge:dusts/ender_pearl', prev: 'megacells:cell_component_4m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_16m', c: 16, matSkip: '3x gtceu:magical_certus_quartz_frame' },
        { glass: 'ae2:quartz_vibrant_glass', dust: 'ae2:matter_ball', prev: 'megacells:cell_component_16m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_64m', c: 16, matSkip: '3x gtceu:magical_certus_quartz_frame' },
        { glass: 'ae2:quartz_vibrant_glass', dust: 'ae2:matter_ball', prev: 'megacells:cell_component_64m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_256m', c: 16, matSkip: '3x gtceu:magical_certus_quartz_frame' }
    ];

    componentsFaster.forEach(c => {
        event.recipes.gtceu.advancedaeassembler()
            .itemInputs(`3x ${c.glass}`, `12x ${c.dust}`, `3x ${c.prev}`, `3x ${c.proc}`, c.matSkip)
            .itemOutputs(`3x ${c.out}`)
            .circuit(c.c)
            .duration(300)
            .EUt(GTValues.VA[GTValues.LV]);
    });

})