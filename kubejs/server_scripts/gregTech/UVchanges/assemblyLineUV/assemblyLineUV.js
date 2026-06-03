ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('gettheenhancedbc')
        .itemInputs(
            '4x gtceu:hsse_frame',
            '8x gtceu:zpm_field_generator',
            '8x gtceu:zpm_sensor',
            '32x gtceu:uranium_rhodium_dinaquadide_single_wire',
            '64x gtceu:frostproof_machine_casing',
            '8x gregecore:frostcore',
            '8x #gtceu:circuits/uv'
        )
        .inputFluids(
            'gtceu:soldering_alloy 2500'
        )
        .itemOutputs('gregecore:enhancedblastchiller')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:mega_vacuum_freezer')).EUt(GTValues.VA[GTValues.UV]).CWUt(16))

    event.recipes.gtceu.assembly_line('getchemreactorbetter')
        .itemInputs(
            '4x gtceu:hsse_frame',
            '8x gtceu:zpm_field_generator',
            '8x gtceu:zpm_sensor',
            '32x gtceu:uranium_rhodium_dinaquadide_single_wire',
            '64x gtceu:solid_machine_casing',
            '8x #gtceu:circuits/uv',
            '16x gtceu:stem_cells'
        )
        .inputFluids(
            'gtceu:soldering_alloy 2500'
        )
        .itemOutputs('gregecore:giantchr')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:large_chemical_reactor')).EUt(GTValues.VA[GTValues.UV]).CWUt(64))

    event.recipes.gtceu.assembly_line('getbacterialinput')
        .itemInputs(
            '8x gtceu:zpm_field_generator',
            '8x gtceu:zpm_sensor',
            'gtceu:solid_machine_casing',
            '8x #gtceu:circuits/uv',
            '16x gtceu:stem_cells',
            'kubejs:bacterias/simplebacteria13'
        )
        .inputFluids(
            'gtceu:soldering_alloy 2500'
        )
        .itemOutputs('gregecore:bacteria_input_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b.researchStack(Item.of('kubejs:bacterias/simplebacteria13')).EUt(GTValues.VA[GTValues.UV]).CWUt(64))

    event.recipes.gtceu.assembly_line('parallellboostersecond')
        .itemInputs(
            '16x #gtceu:circuits/uv',
            '32x gregecore:bacterial_matter_cable_double_wire',
            '2x gtceu:hssg_frame',
            '8x gtceu:zpm_field_generator',
            '8x gtceu:zpm_sensor'
        )
        .inputFluids(
            'gtceu:soldering_alloy 2500'
        )
        .itemOutputs('gregecore:advanced_parallel_booster_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:parallel_booster_machine')).EUt(GTValues.VA[GTValues.UV]).CWUt(64))

    event.recipes.gtceu.assembly_line()
        .itemInputs(
            '8x #gtceu:circuits/uv',
            '16x gtceu:artificial_leather_plate',
            '16x gtceu:gloomstone_plate',
            '16x gtceu:shiny_electronic_grade_silicon_plate',
            '16x gtceu:fine_coated_demonite_wire',
            '16x gtceu:fine_sednium_wire',
            '16x gtceu:fine_pristine_vileheart_plate_wire',
            '16x gregecore:manasteel_cable_single_wire',
            '16x gregecore:twilight_alloy_cable_single_wire',
            '16x gregecore:desh_cable_single_wire',
            '16x gregecore:malachite_cable_single_wire',
            '16x gregecore:forgotten_ingot_cable_single_wire',
            '16x gregecore:blood_infused_cable_single_wire',
            '16x gregecore:bacterial_matter_cable_single_wire',
            '64x gtceu:prometheum_ingot'
        )
        .inputFluids(
            'gtceu:mars_bacteria 5000',
            'gtceu:pixie_fluid 5000'
        )
        .itemOutputs('gtceu:smdforge')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:hyperium_ingot')).EUt(GTValues.VA[GTValues.UV]).CWUt(128))
        
});