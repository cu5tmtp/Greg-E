ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('getptfeengine')
        .itemInputs(
            '2x gtceu:tungsten_steel_rotor',
            '4x gtceu:polytetrafluoroethylene_normal_fluid_pipe',
            'gtceu:polytetrafluoroethylene_frame'
        )
        .itemOutputs(
            'gregecore:ptfe_engine_intake'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('getptfefirebox')
        .itemInputs(
            '3x gtceu:polytetrafluoroethylene_rod',
            'gtceu:polytetrafluoroethylene_frame',
            '3x gtceu:polytetrafluoroethylene_plate'
        )
        .itemOutputs(
            'gregecore:ptfe_firebox_casing'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('getshockproofengine')
        .itemInputs(
            '2x gtceu:tungsten_steel_rotor',
            'gtceu:hastelloy_c_276_block',
            '4x gtceu:hastelloy_c_276_rod',
            'gtceu:hastelloy_c_276_frame'
        )
        .itemOutputs(
            'gregecore:shockproof_engine'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler('getvibrationengine')
        .itemInputs(
            '2x gtceu:tungsten_steel_rotor',
            'gtceu:incoloy_ma_956_block',
            '4x gtceu:incoloy_ma_956_rod',
            'gtceu:incoloy_ma_956_frame'
        )
        .itemOutputs(
            'gregecore:vibration_engine_intake'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])


    event.recipes.gtceu.assembler('getdraconiumfusioncasing')
        .itemInputs(
            '6x gregecore:draconium_cable_plate',
            'draconicevolution:draconium_block',
            '#gtceu:circuits/uhv'
        )
        .itemOutputs(
            'gregecore:draconiumfusion'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(6)

    event.recipes.gtceu.assembler('getbrasscasing')
        .itemInputs(
            '6x gtceu:brass_plate',
            'gtceu:brass_block',
        )
        .itemOutputs(
            'gtceu:industrial_steam_casing'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(6)

})