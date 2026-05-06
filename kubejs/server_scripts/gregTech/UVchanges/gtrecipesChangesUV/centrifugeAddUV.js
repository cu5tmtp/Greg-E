ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getcollagen')
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '32x gtceu:collagen_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(1)

        event.recipes.gtceu.centrifuge('getmeatdust')
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '32x gtceu:meat_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(2)

})