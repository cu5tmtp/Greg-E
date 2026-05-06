ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:specializedcrystallizer', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:robust_machine_casing',
            C: 'gtceu:tungstensteel_pipe_casing',
            D: 'gtceu:tungstensteel_firebox_casing',
            E: 'gtceu:iv_machine_hull'
        }
    )

    event.recipes.gtceu.specializedcrystallizer('crystallizedgasses1')
        .itemInputs(
            '2x kubejs:eidust'
        )
        .itemOutputs(
            'kubejs:gassydust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)

})