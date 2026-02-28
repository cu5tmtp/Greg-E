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
                '16x gtceu:stem_cells',
            )
            .itemOutputs('gregecore:giantchr')
            .duration(1000)
            .EUt(GTValues.VA[GTValues.UV])
            .stationResearch(b => b.researchStack(Item.of('gtceu:large_chemical_reactor')).EUt(GTValues.VA[GTValues.UV]).CWUt(64)) 

});