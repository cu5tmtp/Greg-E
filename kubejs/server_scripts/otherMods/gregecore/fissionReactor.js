ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gregecore:fissionreactor', 1),
        [
            'ABA',
            'CCC',
            'DED'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:tungstensteel_turbine_casing',
            C: 'gtceu:laminated_glass',
            D: 'gtceu:long_steel_rod',
            E: 'gregecore:nozzle',
        }
    )

    event.shaped(
        Item.of('gregecore:nozzle', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'gtceu:long_steel_rod',
            B: 'gtceu:tungstensteel_turbine_casing'
        }
    )

    event.recipes.gtceu.mixer()
        .itemInputs(
            '3x gtceu:sodium_dust',
            'gtceu:potassium_dust'
        )
        .inputFluids(
            'gtceu:distilled_water 250'
        )
        .outputFluids(
            'gtceu:sodium_coolant 750'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.ZPM])
    
    event.recipes.gtceu.vacuum_freezer()
        .inputFluids(
            'gtceu:superheated_sodium 1000'
        )
        .outputFluids(
            'gtceu:sodium_coolant 1000'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

    
    event.recipes.gtceu.fission_reaction()
        .itemInputs(
            '4x gtceu:long_osmium_rod'
        )
        .itemOutputs(
            '2x gtceu:signalum_dust'
        )
        .addData('heatgen', 100)
        .duration(1000)

    event.recipes.gtceu.fission_reaction()
        .itemInputs(
            '4x gtceu:long_iridium_rod'
        )
        .itemOutputs(
            '2x gtceu:lumium_dust'
        )
        .addData('heatgen', 200)
        .duration(1000)

    event.recipes.gtceu.mixer()
        .itemInputs(
            '2x gtceu:vadricium_dust',
            'gtceu:lithium_dust'
        )
        .inputFluids(
            'gtceu:sodium_coolant 250'
        )
        .outputFluids(
            'gtceu:bose_einstein_condensate 750'
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.vacuum_freezer()
        .inputFluids(
            'gtceu:superheated_bose_einstein_condensate 1000'
        )
        .outputFluids(
            'gtceu:bose_einstein_condensate 1000'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

})