ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getberyllium')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .chancedOutput('gtceu:raw_beryllium', 10, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(1)

    event.recipes.gtceu.centrifuge('getstibnite')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .chancedOutput('gtceu:raw_stibnite', 10, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(2)

    event.recipes.gtceu.centrifuge('getnaquadah')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .chancedOutput('gtceu:raw_naquadah', 10, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(3)

});
