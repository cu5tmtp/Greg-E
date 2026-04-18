ServerEvents.recipes((event) => {

    event.recipes.gtceu.arc_furnace('getthelastdust')
        .itemInputs(
            '2x kubejs:dustwithbroom'
        )
        .inputFluids(
            'gtceu:neutronium 16'
        )
        .itemOutputs(
            'kubejs:neutroniuminfused'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.centrifuge('getthedraconium')
        .itemInputs(
            'kubejs:neutroniuminfused'
        )
        .chancedOutput('draconicevolution:draconium_dust', 10, 0)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.centrifuge('getthenebuliumoreeeee')
        .itemInputs(
            'kubejs:neutroniuminfused'
        )
        .chancedOutput('gtceu:raw_nebulon_omega', 10, 0)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(2)

})