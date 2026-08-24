ServerEvents.recipes((event) => {

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            '2x gtceu:reinforced_kamenium_plate',
            '2x gtceu:long_reinforced_delirium_rod',
            'gtceu:magnetic_samarium_rod',
            '4x gtceu:redrockium_single_wire'
        )
        .itemOutputs(
            'gtceu:uiv_electric_motor'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:reinforced_kamenium_rotor',
            '2x gtceu:long_reinforced_delirium_rod',
            'gtceu:magnetic_samarium_rod',
            '4x gtceu:redsediment_normal_fluid_pipe'
        )
        .itemOutputs(
            'gtceu:uiv_electric_pump'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:uiv_electric_pump',
            'kubejs:euclid/euclid_circuit',
            'kubejs:euclid/euclid_integrated'
        )
        .itemOutputs(
            'gtceu:uiv_fluid_regulator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)

    event.recipes.gtceu.pfarraycraft()
        .itemInputs(
            'gtceu:uiv_electric_pump',
            'kubejs:euclid/euclid_circuit',
            'kubejs:euclid/euclid_integrated'
        )
        .itemOutputs(
            'gtceu:uiv_fluid_regulator'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(500)
})