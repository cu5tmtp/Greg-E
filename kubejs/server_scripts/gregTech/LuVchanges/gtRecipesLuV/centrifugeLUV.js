ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getthebismuth')
        .itemInputs(
            'kubejs:gassydust'
        )
        .chancedOutput('gtceu:bismuth_dust', 200, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:gassydust'
        )
        .chancedOutput('gtceu:raw_fractalium', 200, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:gassydust'
        )
        .itemOutputs(
            '2x gtceu:chrono_percipitate_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(150)
        .circuit(3)

})