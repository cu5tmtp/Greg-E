ServerEvents.recipes((event) => {

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            '32x gtceu:grymploxideepoxilidas_dust',
            '8x gtceu:carcosa_dust',
            '4x gtceu:gallium_arsenide_dust'
        )
        .itemOutputs(
            'kubejs:carcosaboule'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .blastFurnaceTemp(10000)

})