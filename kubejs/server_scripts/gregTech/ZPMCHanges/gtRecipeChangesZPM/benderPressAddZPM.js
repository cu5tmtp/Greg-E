ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('getreinforgrfplate')
        .itemInputs(
            'gtceu:reinforced_cobblestone_ingot'
        )
        .itemOutputs(
            'gtceu:reinforced_cobblestone_plate'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(100)

    event.recipes.gtceu.forming_press('getactivatableruneeeee')
        .itemInputs(
            '2x kubejs:gassydust',
            'gtceu:reinforced_cobblestone_plate'
        )
        .itemOutputs(
            'kubejs:rune'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(100)

})