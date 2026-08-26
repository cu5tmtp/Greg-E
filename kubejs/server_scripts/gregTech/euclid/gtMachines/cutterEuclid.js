ServerEvents.recipes((event) => {

    event.recipes.gtceu.cutter()
        .itemInputs(
            'kubejs:carcosaboule'
        )
        .inputFluids(
            'gtceu:fracturedlubricant 100'
        )
        .itemOutputs(
            '16x kubejs:carcosawafer'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    event.recipes.gtceu.cutter()
        .itemInputs(
            'kubejs:carcosacpu'
        )
        .inputFluids(
            'gtceu:fracturedlubricant 100'
        )
        .itemOutputs(
            '4x kubejs:carcosacpuchip'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)

    event.recipes.gtceu.cutter()
        .itemInputs(
            'kubejs:carcosaram'
        )
        .inputFluids(
            'gtceu:fracturedlubricant 100'
        )
        .itemOutputs(
            '8x kubejs:carcosaramchip'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(600)
    
})