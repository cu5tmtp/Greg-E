ServerEvents.recipes((event) => {

    event.recipes.gtceu.atomicreversator()
        .itemInputs(
            'gtceu:arboretum_dust'
        )
        .itemOutputs(
            'kubejs:fading'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

})