ServerEvents.recipes((event) => {

    event.recipes.gtceu.laser_engraver()
        .itemInputs(
            'kubejs:carcosawafer'
        )
        .itemOutputs(
            '2x kubejs:carcosacpu'
        )
        .notConsumable('gtceu:magenta_glass_lens')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

    event.recipes.gtceu.laser_engraver()
        .itemInputs(
            'kubejs:carcosawafer'
        )
        .itemOutputs(
            '4x kubejs:carcosaram'
        )
        .notConsumable('gtceu:light_gray_glass_lens')
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)

})