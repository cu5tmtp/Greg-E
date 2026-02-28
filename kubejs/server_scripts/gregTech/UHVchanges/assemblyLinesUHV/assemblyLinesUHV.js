ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('getenhancedfusion')
        .itemInputs(
            '16x #gtceu:circuits/uhv',
            '8x gtceu:fusion_coil',
            '2x gtceu:gravi_star',
            '32x kubejs:ddoubleplate',
            '16x gtceu:uv_sensor',
            '16x gtceu:uv_field_generator',
            '16x gregecore:draconiumfusion'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:enhancedfr')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_fusion_reactor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getenhancedcoolantinput')
        .itemInputs(
            '4x #gtceu:circuits/uhv',
            '2x gtceu:gravi_star',
            '16x kubejs:ddoubleplate',
            '2x gtceu:uv_sensor',
            '2x gtceu:uv_field_generator',
            '8x gregecore:draconiumfusion'
        )
        .inputFluids(
            'gtceu:soldering_alloy 5000'
        )
        .itemOutputs('gregecore:advanced_coolant_input_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:coolant_input_machine')).EUt(GTValues.VA[GTValues.UHV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getlearningaccebf')
        .itemInputs(
            '64x #gtceu:circuits/uhv',
            '16x gtceu:gravi_star',
            '32x gtceu:uv_sensor',
            '32x gtceu:uv_field_generator',
            '8x gregecore:awakened_draconium_coil',
            '16x gtceu:shock_proof_cutting_casing',
            'kubejs:learningchip'
        )
        .inputFluids(
            'gtceu:soldering_alloy 15000'
        )
        .itemOutputs('gregecore:learning_acc_ebf')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:mega_blast_furnace')).EUt(GTValues.VA[GTValues.UHV]).CWUt(512))


})