ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            '8x gtceu:supergrympl_plate'
        )
        .itemOutputs(
            'gtceu:uiv_machine_casing'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(8)

    event.remove({id: 'gtceu:shaped/uiv_machine_hull'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uiv_machine_casing',
            '2x gtceu:mirrored_grympl1_plate',
            'gtceu:reinforced_kamenium_plate'
        )
        .inputFluids(
            'gtceu:grymploxideepoxilidas 288'
        )
        .itemOutputs(
            'gtceu:uiv_machine_hull'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

})