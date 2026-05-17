ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:aeassembler', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'ae2:certus_quartz_crystal',
            C: 'gtceu:lv_conveyor_module',
            D: 'gtceu:lv_voltage_coil',
            E: 'gtceu:lv_machine_hull'
        }
    )

    const processors = [
        { id: '8lp', in: 'ae2:printed_logic_processor', out: 'ae2:logic_processor' },
        { id: '8ep', in: 'ae2:printed_engineering_processor', out: 'ae2:engineering_processor' },
        { id: '8cp', in: 'ae2:printed_calculation_processor', out: 'ae2:calculation_processor' },
        { id: '8qp', in: 'advanced_ae:printed_quantum_processor', out: 'advanced_ae:quantum_processor' },
        { id: '8ap', in: 'megacells:printed_accumulation_processor', out: 'megacells:accumulation_processor' }
    ];

    processors.forEach(p => {
        event.recipes.gtceu.aeassembler(p.id)
            .itemInputs(`8x ${p.in}`, '8x minecraft:redstone', '8x ae2:printed_silicon')
            .itemOutputs(`8x ${p.out}`)
            .circuit(8)
            .duration(800)
            .EUt(GTValues.VA[GTValues.LV])
    });

    event.recipes.gtceu.aeassembler('3cc1k')
        .itemInputs('12x ae2:certus_quartz_crystal', '16x minecraft:redstone', '3x ae2:logic_processor')
        .itemOutputs('3x ae2:cell_component_1k')
        .circuit(1)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    const components = [
        { id: '3cc4k',   glass: 'ae2:quartz_glass',         dust: '12x minecraft:redstone',        prev: 'ae2:cell_component_1k',    proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_4k',    tier: GTValues.MV},
        { id: '3cc16k',  glass: 'ae2:quartz_glass',         dust: '12x minecraft:glowstone_dust',   prev: 'ae2:cell_component_4k',    proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_16k',   tier: GTValues.HV},
        { id: '3cc64k',  glass: 'ae2:quartz_glass',         dust: '12x minecraft:glowstone_dust',   prev: 'ae2:cell_component_16k',   proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_64k',   tier: GTValues.EV},
        { id: '3cc256k', glass: 'ae2:quartz_glass',         dust: '12x ae2:sky_dust',               prev: 'ae2:cell_component_64k',   proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_256k',  tier: GTValues.IV},
        { id: '3cc1m',   glass: 'ae2:quartz_vibrant_glass', dust: '12x ae2:sky_dust',               prev: 'ae2:cell_component_256k',  proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_1m', tier: GTValues.LuV},
        { id: '3cc4m',   glass: 'ae2:quartz_vibrant_glass', dust: '12x #forge:dusts/ender_pearl',   prev: 'megacells:cell_component_1m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_4m', tier: GTValues.LuV},
        { id: '3cc16m',  glass: 'ae2:quartz_vibrant_glass', dust: '12x #forge:dusts/ender_pearl',   prev: 'megacells:cell_component_4m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_16m', tier: GTValues.LuV},
        { id: '3cc64m',  glass: 'ae2:quartz_vibrant_glass', dust: '12x ae2:matter_ball',            prev: 'megacells:cell_component_16m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_64m', tier: GTValues.LuV},
        { id: '3cc256m', glass: 'ae2:quartz_vibrant_glass', dust: '12x ae2:matter_ball',            prev: 'megacells:cell_component_64m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_256m', tier: GTValues.LuV}
    ];

    components.forEach(c => {
        event.recipes.gtceu.aeassembler(c.id)
            .itemInputs(`3x ${c.glass}`, c.dust, `3x ${c.prev}`, `3x ${c.proc}`)
            .itemOutputs(`1x ${c.out}`)
            .circuit(1)
            .duration(400)
            .EUt(GTValues.VA[c.tier])
    });

    const componentsFaster = [
        { id: '3cc4kf',   glass: 'ae2:quartz_glass',         dust: '12x minecraft:redstone',        prev: 'ae2:cell_component_1k',    proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_4k',    tier: GTValues.MV, matSkip: '3x gtceu:refined_fluix_frame'},
        { id: '3cc16kf',  glass: 'ae2:quartz_glass',         dust: '12x minecraft:glowstone_dust',   prev: 'ae2:cell_component_4k',    proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_16k',   tier: GTValues.HV, matSkip: '3x gtceu:enhanced_fluix_frame'},
        { id: '3cc64kf',  glass: 'ae2:quartz_glass',         dust: '12x minecraft:glowstone_dust',   prev: 'ae2:cell_component_16k',   proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_64k',   tier: GTValues.EV, matSkip: '3x gtceu:end_certus_quartz_frame'},
        { id: '3cc256kf', glass: 'ae2:quartz_glass',         dust: '12x ae2:sky_dust',               prev: 'ae2:cell_component_64k',   proc: 'ae2:calculation_processor',     out: 'ae2:cell_component_256k',  tier: GTValues.IV, matSkip: '3x gtceu:venus_certus_quartz_frame'},
        { id: '3cc1mf',   glass: 'ae2:quartz_vibrant_glass', dust: '12x ae2:sky_dust',               prev: 'ae2:cell_component_256k',  proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_1m', tier: GTValues.LuV, matSkip: '3x gtceu:magical_certus_quartz_frame'},
        { id: '3cc4mf',   glass: 'ae2:quartz_vibrant_glass', dust: '12x #forge:dusts/ender_pearl',   prev: 'megacells:cell_component_1m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_4m', tier: GTValues.LuV, matSkip: '3x gtceu:magical_certus_quartz_frame'},
        { id: '3cc16mf',  glass: 'ae2:quartz_vibrant_glass', dust: '12x #forge:dusts/ender_pearl',   prev: 'megacells:cell_component_4m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_16m', tier: GTValues.LuV, matSkip: '3x gtceu:magical_certus_quartz_frame'},
        { id: '3cc64mf',  glass: 'ae2:quartz_vibrant_glass', dust: '12x ae2:matter_ball',            prev: 'megacells:cell_component_16m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_64m', tier: GTValues.LuV, matSkip: '3x gtceu:magical_certus_quartz_frame'},
        { id: '3cc256mf', glass: 'ae2:quartz_vibrant_glass', dust: '12x ae2:matter_ball',            prev: 'megacells:cell_component_64m', proc: 'megacells:accumulation_processor', out: 'megacells:cell_component_256m', tier: GTValues.LuV, matSkip: '3x gtceu:magical_certus_quartz_frame'}
    ];

    componentsFaster.forEach(c => {
        event.recipes.gtceu.aeassembler(c.id)
            .itemInputs(`3x ${c.glass}`, c.dust, `3x ${c.prev}`, `3x ${c.proc}`, c.matSkip)
            .itemOutputs(`3x ${c.out}`)
            .circuit(24)
            .duration(400)
            .EUt(GTValues.VA[c.tier])
    });
});