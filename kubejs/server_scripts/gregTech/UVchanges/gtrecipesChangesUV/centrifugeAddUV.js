ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getcollagen')
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '16x gtceu:collagen_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

})