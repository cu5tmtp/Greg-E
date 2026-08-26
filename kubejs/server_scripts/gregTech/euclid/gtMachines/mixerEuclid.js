ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:delirium_dust',
            '3x gtceu:atarax_dust',
            '2x gtceu:grympl3_dust'
        )
        .itemOutputs(
            '2x gtceu:arboretum_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

})